/* ============================================================
 *  华为数通刷题 · 核心逻辑
 *  HCIA-Datacom (H12-811) / HCIP-Datacom (H12-821 + H12-831)
 * ============================================================ */
(function () {
  'use strict';

  /* ---------------- 题库装载 ---------------- */
  // 各题库文件挂载到 window.BANK_*，缺失时降级为空数组
  function collect() {
    var hcia = [].concat(
      window.BANK_HCIA_A || [], window.BANK_HCIA_B || [],
      window.BANK_HCIA_C || [], window.BANK_HCIA_D || [],
      window.BANK_HCIA_E || [], window.BANK_HCIA_F || [],
      window.BANK_HCIA_G || [], window.BANK_HCIA_H || [],
      window.BANK_HCIA_I || [], window.BANK_HCIA_J || []
    );
    var hcip = [].concat(
      window.BANK_HCIP_821A || [], window.BANK_HCIP_821B || [],
      window.BANK_HCIP_821 || [], window.BANK_HCIP_831 || [],
      window.BANK_HCIP_C || [], window.BANK_HCIP_D || [],
      window.BANK_HCIP_E || [], window.BANK_HCIP_F || [],
      window.BANK_HCIP_G || [], window.BANK_HCIP_H || [],
      window.BANK_HCIP_I || [], window.BANK_HCIP_J || [],
      window.BANK_HCIP_K || []
    );
    var ie = [].concat(window.BANK_IE || []);
    return {
      hcia: normalize(hcia, 'hcia'),
      hcip: normalize(hcip, 'hcip'),
      ie: normalize(ie, 'ie')
    };
  }

  function normalize(list, level) {
    var seen = {};
    var out = [];
    for (var i = 0; i < list.length; i++) {
      var q = list[i];
      if (!q || !q.id || seen[q.id]) continue;
      if (!q.stem || !q.type) continue;
      seen[q.id] = 1;
      q.level = level;
      if (!q.options) q.options = [];
      out.push(q);
    }
    return out;
  }

  var DB = collect();

  var LEVELS = {
    hcia: { key: 'hcia', name: 'HCIA-Datacom', sub: 'H12-811 · 工程师级' },
    hcip: { key: 'hcip', name: 'HCIP-Datacom', sub: 'H12-821 + H12-831 · 高级工程师级' },
    ie: { key: 'ie', name: 'HCIE-Datacom', sub: 'HCIE 笔试 · 专家级' }
  };
  // 级别显示顺序
  var LEVEL_ORDER = ['hcia', 'hcip', 'ie'];

  var TYPE_NAME = { single: '单选题', multi: '多选题', judge: '判断题', fill: '填空题' };

  /* ---------------- 本地存储 ---------------- */
  var KEY = 'datacom_quiz_v1';

  function defaultState() {
    return {
      // 每道题的最新作答记录： { [qid]: { c: 是否正确, t: 时间戳, n: 作答次数 } }
      records: {},
      favorites: {},          // { [qid]: 1 }
      wrong: {},              // 错题本 { [qid]: 1 }
      session: null,          // 未完成的练习会话
      exams: [],              // 模考历史
      daily: {},              // { 'YYYY-MM-DD': { total, right } }
      lastLevel: 'hcia'
    };
  }

  var S = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      var o = JSON.parse(raw);
      var d = defaultState();
      for (var k in d) if (!(k in o)) o[k] = d[k];
      return o;
    } catch (e) { return defaultState(); }
  }

  var saveTimer = null;
  function save() {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
    }, 120);
  }
  function saveNow() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  }
  window.addEventListener('beforeunload', saveNow);

  /* ---------------- 工具 ---------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function letters(n) { return 'ABCDEFGH'.slice(0, n).split(''); }
  function byId(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s); }

  /* ---------------- 与题目相关的判定 ---------------- */
  // 返回题目的标准答案展示文本
  function answerText(q) {
    if (q.type === 'judge') return q.answer === 'T' ? '正确' : '错误';
    if (q.type === 'fill') return q.answer.join(' / ');
    if (q.type === 'multi') return q.answer.join('');
    return q.answer;
  }

  // 判定作答是否正确。resp 对 single/multi 是字母数组，judge 是 'T'/'F'，fill 是字符串
  function isCorrect(q, resp) {
    if (resp == null) return false;
    if (q.type === 'single') return resp === q.answer;
    if (q.type === 'judge') return resp === q.answer;
    if (q.type === 'multi') {
      if (!Array.isArray(resp)) return false;
      var a = resp.slice().sort().join('');
      var b = q.answer.slice().sort().join('');
      return a === b && a.length > 0;
    }
    if (q.type === 'fill') {
      var v = String(resp).trim().toLowerCase().replace(/\s+/g, ' ');
      if (!v) return false;
      for (var i = 0; i < q.answer.length; i++) {
        var t = String(q.answer[i]).trim().toLowerCase().replace(/\s+/g, ' ');
        if (v === t) return true;
      }
      return false;
    }
    return false;
  }

  function recordAnswer(q, ok) {
    var r = S.records[q.id] || { n: 0 };
    r.c = ok;
    r.t = Date.now();
    r.n = (r.n || 0) + 1;
    S.records[q.id] = r;

    if (ok) { delete S.wrong[q.id]; }
    else { S.wrong[q.id] = 1; }

    var d = S.daily[today()] || { total: 0, right: 0 };
    d.total++;
    if (ok) d.right++;
    S.daily[today()] = d;
    save();
  }

  /* ============================================================
   *  路由 / 视图
   * ============================================================ */
  var view = 'home';
  var curLevel = S.lastLevel || 'hcia';

  function bank(level) { return DB[level || curLevel] || []; }

  function setView(v, opts) {
    view = v;
    render(opts || {});
    window.scrollTo(0, 0);
  }

  function render(o) {
    var app = byId('app');
    app.innerHTML = '';
    app.appendChild(topbar());

    if (view === 'home') return app.appendChild(homeView());
    if (view === 'chapters') return app.appendChild(chaptersView());
    if (view === 'quiz') return app.appendChild(quizView());
    if (view === 'result') return app.appendChild(resultView());
    if (view === 'wrong') return app.appendChild(wrongView());
    if (view === 'fav') return app.appendChild(favView());
    if (view === 'stats') return app.appendChild(statsView());
    if (view === 'examSetup') return app.appendChild(examSetupView());
  }

  /* ---------------- 顶栏 ---------------- */
  function topbar() {
    var bar = el('div', 'topbar');
    if (view !== 'home') {
      var back = el('button', 'icon-btn', '←');
      back.title = '返回';
      back.onclick = goBack;
      bar.appendChild(back);
    }
    var titles = {
      home: '华为数通刷题',
      chapters: '章节练习',
      quiz: '答题',
      result: '成绩',
      wrong: '错题本',
      fav: '我的收藏',
      stats: '学习统计',
      examSetup: '模拟考试'
    };
    var h = el('h1', null, titles[view] || '华为数通刷题');
    bar.appendChild(h);
    bar.appendChild(el('div', 'spacer'));

    if (view === 'quiz' && Session.active) {
      var live = el('span', 'pill');
      live.id = 'liveStat';
      bar.appendChild(live);
    } else if (view !== 'home') {
      var lv = el('span', 'pill', curLevel === 'hcia' ? 'HCIA' : 'HCIP');
      bar.appendChild(lv);
    }
    return bar;
  }

  function goBack() {
    if (view === 'quiz' && Session.active) {
      confirmStop();
      return;
    }
    if (view === 'result' || view === 'examSetup') { setView('home'); return; }
    setView('home');
  }

  /* ============================================================
   *  首页
   * ============================================================ */
  function homeView() {
    var wrap = el('div');

    var hero = el('div', 'hero');
    hero.appendChild(el('h2', null, '华为数通认证 · 刷题助手'));
    var lvInfo = LEVELS[curLevel];
    var total = bank().length;
    hero.appendChild(el('p', null, lvInfo.sub + ' · 题库共 ' + total + ' 题'));
    wrap.appendChild(hero);

    // 级别切换
    var tabs = el('div', 'level-tabs');
    LEVEL_ORDER.filter(function (k) { return DB[k] && DB[k].length; }).forEach(function (k) {
      var b = el('button', curLevel === k ? 'on' : null, LEVELS[k].name.replace('-Datacom', ''));
      b.onclick = function () {
        if (curLevel === k) return;
        curLevel = k;
        S.lastLevel = k;
        save();
        render();
      };
      tabs.appendChild(b);
    });
    wrap.appendChild(tabs);

    // 概览
    var all = bank();
    var done = 0, right = 0, wrongN = 0, favN = 0;
    all.forEach(function (q) {
      var r = S.records[q.id];
      if (r) { done++; if (r.c) right++; }
      if (S.wrong[q.id]) wrongN++;
      if (S.favorites[q.id]) favN++;
    });

    var ov = el('div', 'card');
    var row = el('div', 'stat-row');
    [['已做', done], ['正确率', done ? Math.round(right / done * 100) + '%' : '—'],
     ['错题', wrongN], ['收藏', favN]].forEach(function (p) {
      var c = el('div');
      c.appendChild(el('div', 'n', String(p[1])));
      c.appendChild(el('div', 'l', p[0]));
      row.appendChild(c);
    });
    ov.appendChild(row);

    var prog = el('div', 'bar');
    var fill = el('i');
    fill.style.width = (all.length ? (done / all.length * 100) : 0) + '%';
    prog.appendChild(fill);
    ov.appendChild(prog);
    var pl = el('div', 'small muted', '总进度 ' + done + ' / ' + all.length);
    pl.style.marginTop = '6px';
    ov.appendChild(pl);
    wrap.appendChild(ov);

    // 功能入口
    var grid = el('div', 'grid');

    grid.appendChild(modeCard('📚', '章节练习', '按知识点分类突破', function () {
      setView('chapters');
    }));
    grid.appendChild(modeCard('🎲', '随机练习', '全题库随机抽题', function () {
      startSession('random', { questions: shuffle(bank()).slice(0, 50) });
    }));
    grid.appendChild(modeCard('📝', '模拟考试', '限时 · 交卷评分', function () {
      setView('examSetup');
    }));
    grid.appendChild(modeCard('❌', '错题本', '重做做错的题目', function () {
      setView('wrong');
    }));
    grid.appendChild(modeCard('⭐', '我的收藏', '标记的重点题目', function () {
      setView('fav');
    }));
    grid.appendChild(modeCard('📊', '学习统计', '正确率与练习记录', function () {
      setView('stats');
    }));

    wrap.appendChild(grid);

    // 继续上次
    if (S.session && S.session.qids && S.session.qids.length) {
      var resume = el('div', 'card');
      var t = el('div');
      t.appendChild(el('b', null, '上次未完成的练习'));
      resume.appendChild(t);
      resume.appendChild(el('div', 'small muted',
        (S.session.title || '练习') + ' · 第 ' + (S.session.idx + 1) + ' / ' + S.session.qids.length + ' 题'));
      var rb = el('button', 'btn primary block', '继续作答');
      rb.style.marginTop = '10px';
      rb.onclick = function () { restoreSession(); };
      resume.appendChild(rb);
      wrap.appendChild(resume);
    }

    return wrap;
  }

  function modeCard(ic, t, d, fn) {
    var b = el('button', 'mode-card');
    b.appendChild(el('div', 'ic', ic));
    b.appendChild(el('div', 't', t));
    b.appendChild(el('div', 'd', d));
    b.onclick = fn;
    return b;
  }

  /* ============================================================
   *  会话（练习 / 模考）状态机
   * ============================================================ */
  var Session = {
    active: false,
    exam: false,
    qids: [],
    idx: 0,
    // 每题作答： { [qid]: { resp, ok, revealed } }
    answers: {},
    startAt: 0,
    limitSec: 0,
    title: '',
    filter: null,     // 章节练习时记录章节名
    timer: null
  };

  function startSession(kind, o) {
    o = o || {};
    var qs = o.questions || [];
    if (!qs.length) { toast('该范围内暂无题目'); return; }

    Session.active = true;
    Session.exam = !!o.exam;
    Session.qids = qs.map(function (q) { return q.id; });
    Session.idx = 0;
    Session.answers = {};
    Session.startAt = Date.now();
    Session.limitSec = o.limitSec || 0;
    Session.title = o.title || '练习';
    Session.filter = o.filter || null;
    Session.kind = kind;

    S.session = {
      kind: kind, exam: Session.exam, qids: Session.qids, idx: 0,
      answers: {}, startAt: Session.startAt, limitSec: Session.limitSec,
      title: Session.title, filter: Session.filter, level: curLevel
    };
    saveNow();

    setView('quiz');
    startTimer();
  }

  function restoreSession() {
    var s = S.session;
    if (!s) return;
    curLevel = s.level || curLevel;
    Session.active = true;
    Session.exam = !!s.exam;
    Session.qids = s.qids;
    Session.idx = s.idx || 0;
    Session.answers = s.answers || {};
    Session.startAt = s.startAt;
    Session.limitSec = s.limitSec || 0;
    Session.title = s.title;
    Session.filter = s.filter;
    Session.kind = s.kind;
    setView('quiz');
    startTimer();
  }

  function persistSession() {
    if (!Session.active) return;
    S.session = {
      kind: Session.kind, exam: Session.exam, qids: Session.qids, idx: Session.idx,
      answers: Session.answers, startAt: Session.startAt, limitSec: Session.limitSec,
      title: Session.title, filter: Session.filter, level: curLevel
    };
    save();
  }

  function endSession() {
    Session.active = false;
    S.session = null;
    stopTimer();
    saveNow();
  }

  function questionOf(id) {
    var all = DB.hcia.concat(DB.hcip);
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }

  function sessionQuestions() {
    return Session.qids.map(questionOf).filter(Boolean);
  }

  /* ---------------- 计时器 ---------------- */
  function startTimer() {
    stopTimer();
    if (!Session.limitSec) return;
    Session.timer = setInterval(function () {
      var left = remaining();
      var n = byId('timer');
      if (n) {
        n.textContent = fmtTime(left);
        n.className = 'pill timer' + (left <= 60 ? ' danger' : left <= 300 ? ' warn' : '');
      }
      if (left <= 0) {
        stopTimer();
        toast('考试时间到，自动交卷');
        finishExam(true);
      }
    }, 500);
  }
  function stopTimer() {
    if (Session.timer) { clearInterval(Session.timer); Session.timer = null; }
  }
  function remaining() {
    if (!Session.limitSec) return 0;
    var passed = Math.floor((Date.now() - Session.startAt) / 1000);
    return Math.max(0, Session.limitSec - passed);
  }
  function fmtTime(s) {
    var m = Math.floor(s / 60), ss = s % 60;
    return pad(m) + ':' + pad(ss);
  }

  /* ============================================================
   *  答题视图
   * ============================================================ */
  function quizView() {
    var wrap = el('div');
    var qs = sessionQuestions();
    if (!qs.length) { endSession(); return homeView(); }

    if (Session.idx >= qs.length) Session.idx = qs.length - 1;
    if (Session.idx < 0) Session.idx = 0;
    var q = qs[Session.idx];
    var rec = Session.answers[q.id];

    // 模考：顶部计时
    if (Session.exam && Session.limitSec) {
      var tbar = el('div', 'card');
      tbar.style.display = 'flex';
      tbar.style.alignItems = 'center';
      tbar.style.gap = '10px';
      var tn = el('span', 'pill timer');
      tn.id = 'timer';
      tn.textContent = fmtTime(remaining());
      var left = remaining();
      tn.className = 'pill timer' + (left <= 60 ? ' danger' : left <= 300 ? ' warn' : '');
      tbar.appendChild(el('span', 'small muted', '剩余时间'));
      tbar.appendChild(tn);
      tbar.appendChild(el('div', 'spacer'));
      var sub = el('button', 'btn sm primary', '交卷');
      sub.onclick = function () { confirmSubmit(); };
      tbar.appendChild(sub);
      wrap.appendChild(tbar);
    }

    wrap.appendChild(questionCard(q, rec, {
      mode: Session.exam ? 'exam' : 'practice',
      index: Session.idx, total: qs.length
    }));

    wrap.appendChild(bottombar(qs));

    // 侧滑答题卡（模考）
    if (Session.exam) {
      var sc = el('div', 'card');
      sc.appendChild(el('div', 'small muted', '答题卡（点击跳转）'));
      sc.appendChild(sheetGrid(qs, false));
      wrap.appendChild(sc);
    }

    updateLive();
    return wrap;
  }

  function questionCard(q, rec, meta) {
    var card = el('div', 'card');

    var head = el('div', 'qhead');
    var tp = 'tag' + (q.type === 'multi' ? ' t-multi' : q.type === 'judge' ? ' t-judge' : q.type === 'fill' ? ' t-fill' : '');
    head.appendChild(el('span', tp, TYPE_NAME[q.type] || q.type));
    head.appendChild(el('span', 'tag chap-tag', q.chapter || ''));
    head.appendChild(el('div', 'spacer'));
    var fb = el('button', 'fav-btn' + (S.favorites[q.id] ? ' on' : ''), S.favorites[q.id] ? '⭐' : '☆');
    fb.title = '收藏本题';
    fb.onclick = function () {
      if (S.favorites[q.id]) { delete S.favorites[q.id]; fb.textContent = '☆'; fb.className = 'fav-btn'; toast('已取消收藏'); }
      else { S.favorites[q.id] = 1; fb.textContent = '⭐'; fb.className = 'fav-btn on'; toast('已收藏'); }
      save();
    };
    head.appendChild(fb);
    card.appendChild(head);

    var meta2 = el('div', 'small muted');
    meta2.textContent = '第 ' + (meta.index + 1) + ' / ' + meta.total + ' 题';
    card.appendChild(meta2);

    card.appendChild(el('div', 'stem', q.stem));

    // 配图（部分 HCIE 题附带拓扑图/配置截图，内联为 data URI）
    if (q.image) {
      var fig = el('div', 'q-image');
      var img = document.createElement('img');
      img.src = q.image;
      img.alt = '题目配图';
      img.loading = 'lazy';
      // 点击放大查看
      img.onclick = function () { showImage(q.image); };
      fig.appendChild(img);
      card.appendChild(fig);
    }

    var revealed = rec && rec.revealed;
    var interactive = !revealed;

    if (q.type === 'fill') {
      var inp = el('input', 'fill-input');
      inp.type = 'text';
      inp.placeholder = '请输入答案';
      inp.value = (rec && rec.resp) || '';
      inp.disabled = !interactive;
      inp.oninput = function () {
        var a = Session.answers[q.id] || {};
        a.resp = inp.value;
        Session.answers[q.id] = a;
        persistSession();
      };
      inp.onkeydown = function (e) { if (e.key === 'Enter' && interactive) doSubmit(q, rec); };
      card.appendChild(inp);
      if (interactive) {
        var sb = el('button', 'btn primary block', '提交答案');
        sb.style.marginTop = '10px';
        sb.onclick = function () { doSubmit(q, rec); };
        card.appendChild(sb);
      }
    } else {
      var opts = el('div', 'opts');
      var isJudge = q.type === 'judge';
      var keys = isJudge ? ['T', 'F'] : letters(q.options.length);
      q.options.forEach(function (text, i) {
        var k = keys[i];
        var b = el('button', 'opt');
        b.appendChild(el('span', 'k', isJudge ? (k === 'T' ? '✓' : '✗') : k));
        b.appendChild(el('span', null, esc(text)));
        var cur = rec && rec.resp;
        var selected = isJudge ? cur === k : (Array.isArray(cur) && cur.indexOf(k) >= 0);
        if (selected) b.classList.add('sel');

        if (revealed) {
          b.disabled = true;
          var isAns = isJudge ? q.answer === k : (q.answer.indexOf(k) >= 0);
          if (isAns) b.classList.add('right');
          else if (selected) b.classList.add('wrong');
        } else {
          b.onclick = function () {
            if (q.type === 'single' || isJudge) {
              var a = Session.answers[q.id] || {};
              a.resp = k;
              Session.answers[q.id] = a;
              persistSession();
              if (Session.exam) { render(); return; }
              doSubmit(q, rec);
            } else {
              // 多选：切换选中
              var a2 = Session.answers[q.id] || { resp: [] };
              if (!Array.isArray(a2.resp)) a2.resp = [];
              var at = a2.resp.indexOf(k);
              if (at >= 0) a2.resp.splice(at, 1); else a2.resp.push(k);
              a2.resp.sort();
              Session.answers[q.id] = a2;
              persistSession();
              b.classList.toggle('sel');
              updateLive();
            }
          };
        }
        opts.appendChild(b);
      });
      card.appendChild(opts);

      if (q.type === 'multi' && interactive) {
        var sb2 = el('button', 'btn primary block', '提交答案');
        sb2.style.marginTop = '10px';
        sb2.onclick = function () { doSubmit(q, rec); };
        card.appendChild(sb2);
      }
      // 模考中单选/判断不即时判分，给出“下一题”入口
      if (Session.exam && interactive) {
        card.appendChild(el('div', 'small muted', '模考中不作即时判分，交卷后统一评分'));
      }
    }

    if (revealed) {
      var ok = rec.ok;
      var f = el('div', 'feedback ' + (ok ? 'ok' : 'bad'));
      f.appendChild(el('div', 'verdict', ok ? '✓ 回答正确' : '✗ 回答错误'));
      if (!ok) {
        var a1 = el('div', 'ans');
        a1.innerHTML = '你的答案：<b>' + esc(displayResp(q, rec.resp)) + '</b>';
        f.appendChild(a1);
      }
      var a2 = el('div', 'ans');
      a2.innerHTML = '正确答案：<b>' + esc(answerText(q)) + '</b>';
      f.appendChild(a2);
      if (q.explain) f.appendChild(el('div', 'exp', '解析：' + q.explain));
      card.appendChild(f);
    }

    return card;
  }

  function displayResp(q, resp) {
    if (resp == null || resp === '') return '（未作答）';
    if (q.type === 'judge') return resp === 'T' ? '正确' : '错误';
    if (Array.isArray(resp)) return resp.length ? resp.join('') : '（未作答）';
    return String(resp);
  }

  function doSubmit(q, rec) {
    if (rec && rec.revealed) return;
    var a = Session.answers[q.id];
    if (!a || a.resp == null || (Array.isArray(a.resp) && !a.resp.length) ||
        (typeof a.resp === 'string' && !a.resp.trim())) {
      toast('请先作答'); return;
    }
    var ok = isCorrect(q, a.resp);
    a.ok = ok;
    a.revealed = true;
    Session.answers[q.id] = a;
    recordAnswer(q, ok);
    persistSession();
    render();
  }

  /* ---------------- 底部条 ---------------- */
  function bottombar(qs) {
    var bar = el('div', 'bottombar');
    var inner = el('div', 'inner');

    var prev = el('button', 'btn sm', '上一题');
    prev.disabled = Session.idx === 0;
    prev.onclick = function () { Session.idx--; persistSession(); render(); window.scrollTo(0, 0); };
    inner.appendChild(prev);

    var pos = el('span', 'pos', (Session.idx + 1) + '/' + qs.length);
    inner.appendChild(pos);

    var sheet = el('button', 'btn sm', '答题卡');
    sheet.onclick = showSheet;
    inner.appendChild(sheet);

    inner.appendChild(el('div', 'spacer'));

    if (Session.exam) {
      if (Session.idx === qs.length - 1) {
        var sb = el('button', 'btn sm primary', '交卷');
        sb.onclick = function () { confirmSubmit(); };
        inner.appendChild(sb);
      } else {
        var nx = el('button', 'btn sm primary', '下一题');
        nx.onclick = function () { Session.idx++; persistSession(); render(); window.scrollTo(0, 0); };
        inner.appendChild(nx);
      }
    } else {
      if (Session.idx === qs.length - 1) {
        var fin = el('button', 'btn sm primary', '完成练习');
        fin.onclick = function () { finishPractice(); };
        inner.appendChild(fin);
      } else {
        var nx2 = el('button', 'btn sm primary', '下一题');
        nx2.onclick = function () { Session.idx++; persistSession(); render(); window.scrollTo(0, 0); };
        inner.appendChild(nx2);
      }
    }

    bar.appendChild(inner);
    return bar;
  }

  function updateLive() {
    var n = byId('liveStat');
    if (!n) return;
    var doneN = 0, rightN = 0;
    Session.qids.forEach(function (id) {
      var a = Session.answers[id];
      if (a && a.revealed) { doneN++; if (a.ok) rightN++; }
    });
    n.textContent = doneN + '/' + Session.qids.length +
      (doneN ? ' · ' + Math.round(rightN / doneN * 100) + '%' : '');
  }

  /* ---------------- 答题卡弹层 ---------------- */
  function sheetGrid(qs, clickable) {
    var g = el('div', 'sheet');
    qs.forEach(function (q, i) {
      var a = Session.answers[q.id];
      var b = el('button', null, String(i + 1));
      if (a && a.revealed) b.classList.add(a.ok ? 'right' : 'wrong');
      else if (a && a.resp != null && (!Array.isArray(a.resp) || a.resp.length)) b.classList.add('done');
      if (i === Session.idx) b.classList.add('cur');
      b.onclick = function () {
        Session.idx = i;
        persistSession();
        closeModal();
        render();
        window.scrollTo(0, 0);
      };
      g.appendChild(b);
    });
    return g;
  }

  function showSheet() {
    var qs = sessionQuestions();
    var m = modal();
    m.appendChild(el('h3', null, '答题卡'));
    m.appendChild(sheetGrid(qs, true));

    var legend = el('div', 'small muted');
    legend.style.marginTop = '12px';
    legend.textContent = '蓝=已作答　绿=正确　红=错误';
    m.appendChild(legend);

    var close = el('button', 'btn block', '关闭');
    close.style.marginTop = '12px';
    close.onclick = closeModal;
    m.appendChild(close);
  }

  function modal() {
    closeModal();
    var mask = el('div', 'modal-mask');
    mask.id = 'modalMask';
    mask.onclick = function (e) { if (e.target === mask) closeModal(); };
    var m = el('div', 'modal');
    m.id = 'modalBody';
    mask.appendChild(m);
    document.body.appendChild(mask);
    return m;
  }
  function closeModal() {
    var x = byId('modalMask');
    if (x) x.remove();
    // 关闭图片查看器
    var v = document.querySelector('.img-viewer');
    if (v) { v.remove(); document.body.style.overflow = ''; }
  }

  // 点击配图放大查看
  function showImage(src) {
    closeModal();
    var mask = el('div', 'img-viewer');
    var big = document.createElement('img');
    big.src = src;
    mask.appendChild(big);
    mask.onclick = closeModal;
    document.body.appendChild(mask);
    document.body.style.overflow = 'hidden';
  }

  function toast(msg) {
    var old = byId('toast');
    if (old) old.remove();
    var t = el('div', 'toast', msg);
    t.id = 'toast';
    document.body.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.remove(); }, 1600);
  }

  /* ---------------- 结束练习 / 交卷 ---------------- */
  function confirmStop() {
    var m = modal();
    m.appendChild(el('h3', null, '退出当前练习？'));
    m.appendChild(el('p', 'small muted', '进度会保存，可稍后从首页继续。'));
    var row = el('div');
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.style.marginTop = '14px';
    var y = el('button', 'btn primary', '退出并保存');
    y.style.flex = '1';
    y.onclick = function () { persistSession(); closeModal(); setView('home'); };
    var n = el('button', 'btn', '继续答题');
    n.style.flex = '1';
    n.onclick = closeModal;
    row.appendChild(y); row.appendChild(n);
    m.appendChild(row);
  }

  function finishPractice() {
    var qs = sessionQuestions();
    var doneN = 0, rightN = 0;
    qs.forEach(function (q) {
      var a = Session.answers[q.id];
      if (a && a.revealed) { doneN++; if (a.ok) rightN++; }
    });
    LastResult = {
      exam: false, title: Session.title, total: qs.length,
      done: doneN, right: rightN, rate: doneN ? Math.round(rightN / doneN * 100) : 0
    };
    endSession();
    setView('result');
  }

  function confirmSubmit() {
    var qs = sessionQuestions();
    var unanswered = qs.filter(function (q) {
      var a = Session.answers[q.id];
      return !a || a.resp == null || (Array.isArray(a.resp) && !a.resp.length) ||
             (typeof a.resp === 'string' && !a.resp.trim());
    }).length;
    var m = modal();
    m.appendChild(el('h3', null, '确认交卷？'));
    m.appendChild(el('p', 'small muted',
      unanswered ? '还有 ' + unanswered + ' 题未作答，未作答按错误计分。' : '所有题目均已作答。'));
    var row = el('div');
    row.style.display = 'flex'; row.style.gap = '8px'; row.style.marginTop = '14px';
    var y = el('button', 'btn primary', '确认交卷');
    y.style.flex = '1';
    y.onclick = function () { closeModal(); finishExam(false); };
    var n = el('button', 'btn', '再检查一下');
    n.style.flex = '1';
    n.onclick = closeModal;
    row.appendChild(y); row.appendChild(n);
    m.appendChild(row);
  }

  function finishExam(auto) {
    var qs = sessionQuestions();
    var right = 0;
    qs.forEach(function (q) {
      var a = Session.answers[q.id];
      var ok = a && a.resp != null && isCorrect(q, a.resp);
      if (ok) right++;
      if (!a) Session.answers[q.id] = { resp: null, ok: false, revealed: true };
      else { a.ok = ok; a.revealed = true; }
      recordAnswer(q, ok);
    });

    var score = qs.length ? Math.round(right / qs.length * 1000) : 0;
    var passed = score >= 600;

    S.exams.unshift({
      t: Date.now(), level: curLevel, total: qs.length, right: right,
      score: score, pass: passed, used: Math.floor((Date.now() - Session.startAt) / 1000)
    });
    if (S.exams.length > 40) S.exams.length = 40;

    LastResult = {
      exam: true, title: Session.title, total: qs.length, done: qs.length,
      right: right, rate: qs.length ? Math.round(right / qs.length * 100) : 0,
      score: score, pass: passed, auto: !!auto,
      used: Math.floor((Date.now() - Session.startAt) / 1000)
    };
    endSession();
    setView('result');
  }

  /* ============================================================
   *  结果页
   * ============================================================ */
  var LastResult = null;

  function resultView() {
    var wrap = el('div');
    var r = LastResult;
    if (!r) { setView('home'); return homeView(); }

    var card = el('div', 'card center');
    card.appendChild(el('div', 'small muted', r.title || '练习结果'));

    if (r.exam) {
      card.appendChild(el('div', 'result-score ' + (r.pass ? 'pass' : 'fail'), String(r.score)));
      card.appendChild(el('div', 'small muted', '满分 1000 · 及格线 600'));
      var v = el('div', 'verdict', r.pass ? '🎉 恭喜通过' : '未达及格线，继续加油');
      v.style.fontWeight = '700';
      v.style.marginTop = '8px';
      v.style.color = r.pass ? 'var(--ok)' : 'var(--bad)';
      card.appendChild(v);
      if (r.auto) card.appendChild(el('div', 'small muted', '（时间到自动交卷）'));
    } else {
      card.appendChild(el('div', 'result-score ' + (r.rate >= 80 ? 'pass' : 'fail'), r.rate + '%'));
      card.appendChild(el('div', 'small muted', '本次正确率'));
    }
    wrap.appendChild(card);

    var det = el('div', 'card');
    var rows = [
      ['题目总数', r.total],
      ['已作答', r.done],
      ['答对', r.right],
      ['答错', r.done - r.right]
    ];
    if (r.exam && r.used != null) rows.push(['用时', fmtTime(r.used)]);
    rows.forEach(function (p) {
      var kv = el('div', 'kv');
      kv.appendChild(el('span', 'muted', p[0]));
      kv.appendChild(el('b', null, String(p[1])));
      det.appendChild(kv);
    });
    wrap.appendChild(det);

    var act = el('div', 'grid');
    var b1 = el('button', 'btn primary', '查看答题卡');
    b1.onclick = function () {
      // 结果页用结果数据重建答题卡
      var m = modal();
      m.appendChild(el('h3', null, '答题卡'));
      m.appendChild(resultSheet());
      var c = el('button', 'btn block', '关闭');
      c.style.marginTop = '12px';
      c.onclick = closeModal;
      m.appendChild(c);
    };
    act.appendChild(b1);

    var b2 = el('button', 'btn', '查看错题');
    b2.onclick = function () { setView('wrong'); };
    act.appendChild(b2);

    var b3 = el('button', 'btn', '再来一次');
    b3.onclick = function () { setView('home'); };
    act.appendChild(b3);

    wrap.appendChild(act);
    return wrap;
  }

  function resultSheet() {
    var g = el('div', 'sheet');
    Session.qids.forEach(function (id, i) {
      var a = ResultAnswers[id];
      var b = el('button', null, String(i + 1));
      if (a) b.classList.add(a.ok ? 'right' : 'wrong');
      g.appendChild(b);
    });
    return g;
  }
  var ResultAnswers = {};

  /* ============================================================
   *  章节练习
   * ============================================================ */
  function chaptersView() {
    var wrap = el('div');
    var all = bank();

    // 按章节聚合
    var map = {};
    all.forEach(function (q) {
      var c = q.chapter || '未分类';
      if (!map[c]) map[c] = [];
      map[c].push(q);
    });
    var names = Object.keys(map);

    wrap.appendChild(el('div', 'small muted',
      LEVELS[curLevel].name + ' · 共 ' + names.length + ' 个章节 / ' + all.length + ' 题'));

    var box = el('div');
    box.style.marginTop = '12px';

    names.forEach(function (name) {
      var qs = map[name];
      var doneN = 0, rightN = 0;
      qs.forEach(function (q) {
        var r = S.records[q.id];
        if (r) { doneN++; if (r.c) rightN++; }
      });
      var rate = doneN ? Math.round(rightN / doneN * 100) : 0;

      var b = el('button', 'chap');
      var left = el('div');
      left.style.flex = '1';
      left.appendChild(el('div', 'name', name));
      var meta = el('div', 'cnt',
        qs.length + ' 题 · 已做 ' + doneN + (doneN ? ' · 正确率 ' + rate + '%' : ''));
      left.appendChild(meta);
      var bar = el('div', 'bar');
      var f = el('i');
      f.style.width = (doneN / qs.length * 100) + '%';
      bar.appendChild(f);
      left.appendChild(bar);
      b.appendChild(left);
      b.appendChild(el('span', 'cnt', '›'));

      b.onclick = function () {
        var m = modal();
        m.appendChild(el('h3', null, name));
        m.appendChild(el('p', 'small muted', '共 ' + qs.length + ' 题，选择练习方式：'));
        var g = el('div');
        g.style.display = 'flex';
        g.style.flexDirection = 'column';
        g.style.gap = '8px';
        g.style.marginTop = '12px';

        var o1 = el('button', 'btn primary block', '顺序练习（' + qs.length + ' 题）');
        o1.onclick = function () {
          closeModal();
          startSession('chapter', { questions: qs.slice(), title: name, filter: name });
        };
        g.appendChild(o1);

        var o2 = el('button', 'btn block', '随机练习（打乱顺序）');
        o2.onclick = function () {
          closeModal();
          startSession('chapter', { questions: shuffle(qs), title: name + '（随机）', filter: name });
        };
        g.appendChild(o2);

        var wrongQs = qs.filter(function (q) { return S.wrong[q.id]; });
        if (wrongQs.length) {
          var o3 = el('button', 'btn block', '只练本章错题（' + wrongQs.length + ' 题）');
          o3.onclick = function () {
            closeModal();
            startSession('chapter', { questions: wrongQs, title: name + '（错题）', filter: name });
          };
          g.appendChild(o3);
        }
        m.appendChild(g);
      };

      box.appendChild(b);
    });

    wrap.appendChild(box);
    return wrap;
  }

  /* ============================================================
   *  错题本 / 收藏
   * ============================================================ */
  function wrongView() {
    var wrap = el('div');
    var qs = bank().filter(function (q) { return S.wrong[q.id]; });
    if (!qs.length) return emptyView('❌', '暂无错题', '做错的题目会自动收进这里');

    wrap.appendChild(el('div', 'small muted', '共 ' + qs.length + ' 道错题（做对后自动移出）'));

    var act = el('div', 'grid');
    act.style.marginTop = '12px';

    var b1 = el('button', 'btn primary', '开始重做');
    b1.onclick = function () { startSession('wrong', { questions: qs.slice(), title: '错题重做' }); };
    act.appendChild(b1);

    var b2 = el('button', 'btn', '随机重做');
    b2.onclick = function () { startSession('wrong', { questions: shuffle(qs), title: '错题重做（随机）' }); };
    act.appendChild(b2);
    wrap.appendChild(act);

    var clr = el('button', 'btn danger block', '清空错题本');
    clr.style.marginTop = '10px';
    clr.onclick = function () {
      var m = modal();
      m.appendChild(el('h3', null, '确认清空错题本？'));
      m.appendChild(el('p', 'small muted', '此操作不可撤销。'));
      var y = el('button', 'btn primary block', '确认清空');
      y.style.marginTop = '12px';
      y.onclick = function () {
        S.wrong = {}; saveNow(); closeModal(); render(); toast('已清空');
      };
      m.appendChild(y);
    };
    wrap.appendChild(clr);

    wrap.appendChild(listPreview(qs));
    return wrap;
  }

  function favView() {
    var wrap = el('div');
    var qs = bank().filter(function (q) { return S.favorites[q.id]; });
    if (!qs.length) return emptyView('⭐', '暂无收藏', '在答题时点击 ☆ 即可收藏题目');

    wrap.appendChild(el('div', 'small muted', '共 ' + qs.length + ' 道收藏题'));

    var act = el('div', 'grid');
    act.style.marginTop = '12px';
    var b1 = el('button', 'btn primary', '开始练习');
    b1.onclick = function () { startSession('fav', { questions: qs.slice(), title: '收藏题练习' }); };
    act.appendChild(b1);
    var b2 = el('button', 'btn', '随机练习');
    b2.onclick = function () { startSession('fav', { questions: shuffle(qs), title: '收藏题练习（随机）' }); };
    act.appendChild(b2);
    wrap.appendChild(act);

    wrap.appendChild(listPreview(qs));
    return wrap;
  }

  function listPreview(qs) {
    var box = el('div');
    box.style.marginTop = '12px';
    qs.slice(0, 200).forEach(function (q) {
      var c = el('div', 'card');
      var h = el('div', 'qhead');
      var tp = 'tag' + (q.type === 'multi' ? ' t-multi' : q.type === 'judge' ? ' t-judge' : q.type === 'fill' ? ' t-fill' : '');
      h.appendChild(el('span', tp, TYPE_NAME[q.type]));
      h.appendChild(el('span', 'tag chap-tag', q.chapter || ''));
      c.appendChild(h);
      c.appendChild(el('div', null, q.stem));
      if (q.image) {
        var fig = el('div', 'q-image');
        var im = document.createElement('img');
        im.src = q.image; im.alt = '题目配图'; im.loading = 'lazy';
        im.onclick = function () { showImage(q.image); };
        fig.appendChild(im);
        c.appendChild(fig);
      }
      var f = el('div', 'small muted');
      f.style.marginTop = '6px';
      f.textContent = '答案：' + answerText(q);
      c.appendChild(f);
      if (q.explain) {
        var e = el('div', 'small muted');
        e.style.marginTop = '4px';
        e.textContent = '解析：' + q.explain;
        c.appendChild(e);
      }
      box.appendChild(c);
    });
    if (qs.length > 200) box.appendChild(el('div', 'small muted center', '仅显示前 200 题'));
    return box;
  }

  function emptyView(ic, title, desc) {
    var w = el('div', 'card empty');
    w.appendChild(el('span', 'ic', ic));
    w.appendChild(el('div', null, title));
    w.appendChild(el('div', 'small', desc));
    return w;
  }

  /* ============================================================
   *  模拟考试设置
   * ============================================================ */
  var EXAM_PRESETS = {
    hcia: { count: 50, min: 60, name: 'HCIA-Datacom 模拟考试' },
    hcip: { count: 60, min: 60, name: 'HCIP-Datacom 模拟考试' },
    ie: { count: 60, min: 90, name: 'HCIE-Datacom 模拟考试' }
  };

  function examSetupView() {
    var wrap = el('div');
    var p = EXAM_PRESETS[curLevel];
    var all = bank();

    var card = el('div', 'card');
    card.appendChild(el('h3', null, null));
    card.querySelector('h3').textContent = p.name;
    card.appendChild(el('div', 'small muted',
      '满分 1000 分，600 分及格。按真实考试比例从题库随机抽题。'));
    wrap.appendChild(card);

    var cfg = el('div', 'card');
    var cnt = el('div', 'kv');
    cnt.appendChild(el('span', 'muted', '抽题数量'));
    var cntV = el('b', null, p.count + ' 题');
    cnt.appendChild(cntV);
    cfg.appendChild(cnt);

    var tm = el('div', 'kv');
    tm.appendChild(el('span', 'muted', '考试时长'));
    tm.appendChild(el('b', null, p.min + ' 分钟'));
    cfg.appendChild(tm);

    var rg = el('div', 'kv');
    rg.appendChild(el('span', 'muted', '题库范围'));
    rg.appendChild(el('b', null, all.length + ' 题'));
    cfg.appendChild(rg);

    var mv = el('div', 'kv');
    mv.appendChild(el('span', 'muted', '及格分'));
    mv.appendChild(el('b', null, '600 / 1000'));
    cfg.appendChild(mv);
    wrap.appendChild(cfg);

    // 题量可调
    var pick = el('div', 'card');
    pick.appendChild(el('div', 'small muted', '调整题量'));
    var pg = el('div', 'level-tabs');
    pg.style.marginTop = '8px';
    [30, 50, 60, 80].forEach(function (n) {
      if (n > all.length) return;
      var b = el('button', n === p.count ? 'on' : null, n + ' 题');
      b.onclick = function () {
        p.count = n;
        render();
      };
      pg.appendChild(b);
    });
    pick.appendChild(pg);
    wrap.appendChild(pick);

    var start = el('button', 'btn primary block', '开始考试');
    start.onclick = function () {
      var qs = shuffle(all).slice(0, Math.min(p.count, all.length));
      if (qs.length < p.count) toast('题库不足，已抽取 ' + qs.length + ' 题');
      startSession('exam', {
        questions: qs, exam: true, title: p.name,
        limitSec: p.min * 60
      });
      ResultAnswers = {};
    };
    wrap.appendChild(start);

    // 历史成绩
    var hist = S.exams.filter(function (e) { return e.level === curLevel; });
    if (hist.length) {
      var hc = el('div', 'card');
      hc.appendChild(el('h3', null, '历史成绩'));
      var best = Math.max.apply(null, hist.map(function (e) { return e.score; }));
      var passN = hist.filter(function (e) { return e.pass; }).length;
      var kv = el('div', 'kv');
      kv.appendChild(el('span', 'muted', '考试次数'));
      kv.appendChild(el('b', null, hist.length + ' 次'));
      hc.appendChild(kv);
      var kv2 = el('div', 'kv');
      kv2.appendChild(el('span', 'muted', '最高分'));
      kv2.appendChild(el('b', null, best + ' 分'));
      hc.appendChild(kv2);
      var kv3 = el('div', 'kv');
      kv3.appendChild(el('span', 'muted', '通过次数'));
      kv3.appendChild(el('b', null, passN + ' 次'));
      hc.appendChild(kv3);

      hist.slice(0, 8).forEach(function (e) {
        var r = el('div', 'kv');
        var d = new Date(e.t);
        r.appendChild(el('span', 'muted small',
          d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' +
          pad(d.getHours()) + ':' + pad(d.getMinutes())));
        var b = el('b');
        b.textContent = e.score + ' 分 · ' + (e.pass ? '通过' : '未通过');
        b.style.color = e.pass ? 'var(--ok)' : 'var(--bad)';
        r.appendChild(b);
        hc.appendChild(r);
      });
      wrap.appendChild(hc);
    }

    return wrap;
  }

  /* ============================================================
   *  学习统计
   * ============================================================ */
  function statsView() {
    var wrap = el('div');
    var all = bank();

    // 总览（当前级别）
    var done = 0, right = 0, wrongN = 0, favN = 0;
    all.forEach(function (q) {
      var r = S.records[q.id];
      if (r) { done++; if (r.c) right++; }
      if (S.wrong[q.id]) wrongN++;
      if (S.favorites[q.id]) favN++;
    });

    var c1 = el('div', 'card');
    c1.appendChild(el('h3', null, LEVELS[curLevel].name + ' 掌握情况'));
    var row = el('div', 'stat-row');
    [['已做', done], ['正确率', done ? Math.round(right / done * 100) + '%' : '—'],
     ['错题', wrongN], ['收藏', favN]].forEach(function (p) {
      var c = el('div');
      c.appendChild(el('div', 'n', String(p[1])));
      c.appendChild(el('div', 'l', p[0]));
      row.appendChild(c);
    });
    c1.appendChild(row);
    wrap.appendChild(c1);

    // 按题型
    var byType = {};
    all.forEach(function (q) {
      var r = S.records[q.id];
      if (!r) return;
      var k = q.type;
      if (!byType[k]) byType[k] = { n: 0, ok: 0 };
      byType[k].n++;
      if (r.c) byType[k].ok++;
    });
    var tc = el('div', 'card');
    tc.appendChild(el('h3', null, '各题型正确率'));
    var any = false;
    ['single', 'multi', 'judge', 'fill'].forEach(function (k) {
      if (!byType[k]) return;
      any = true;
      var o = byType[k];
      var kv = el('div', 'kv');
      kv.appendChild(el('span', 'muted', TYPE_NAME[k]));
      kv.appendChild(el('b', null, Math.round(o.ok / o.n * 100) + '%（' + o.ok + '/' + o.n + '）'));
      tc.appendChild(kv);
    });
    if (!any) tc.appendChild(el('div', 'small muted', '暂无数据'));
    wrap.appendChild(tc);

    // 薄弱章节（正确率最低、且做过至少3题）
    var byChap = {};
    all.forEach(function (q) {
      var r = S.records[q.id];
      if (!r) return;
      var k = q.chapter || '未分类';
      if (!byChap[k]) byChap[k] = { n: 0, ok: 0 };
      byChap[k].n++;
      if (r.c) byChap[k].ok++;
    });
    var keys = Object.keys(byChap).filter(function (k) { return byChap[k].n >= 3; });
    keys.sort(function (a, b) { return (byChap[a].ok / byChap[a].n) - (byChap[b].ok / byChap[b].n); });

    var wc = el('div', 'card');
    wc.appendChild(el('h3', null, '章节正确率（薄弱优先）'));
    if (!keys.length) wc.appendChild(el('div', 'small muted', '至少在某章节练习 3 题后显示'));
    keys.forEach(function (k) {
      var o = byChap[k];
      var rate = Math.round(o.ok / o.n * 100);
      var kv = el('div', 'kv');
      var l = el('span', null, k);
      l.style.flex = '1';
      l.style.fontSize = '13px';
      if (rate < 60) l.style.color = 'var(--bad)';
      else if (rate < 80) l.style.color = 'var(--warn)';
      kv.appendChild(l);
      kv.appendChild(el('b', null, rate + '%'));
      wc.appendChild(kv);
    });
    wrap.appendChild(wc);

    // 最近 7 天
    var dc = el('div', 'card');
    dc.appendChild(el('h3', null, '最近 7 天练习量'));
    var days = [];
    for (var i = 6; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var key = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
      days.push({ key: key, label: (d.getMonth() + 1) + '/' + d.getDate(), v: S.daily[key] || { total: 0, right: 0 } });
    }
    var maxV = Math.max.apply(null, days.map(function (x) { return x.v.total; }).concat([1]));
    var bars = el('div', 'bars');
    var dayTotal = 0;
    days.forEach(function (x) {
      dayTotal += x.v.total;
      var col = el('div', 'col');
      var bar = el('i');
      bar.style.height = Math.max(3, Math.round(x.v.total / maxV * 80)) + 'px';
      bar.title = x.v.total + ' 题';
      col.appendChild(bar);
      col.appendChild(el('span', null, x.label));
      bars.appendChild(col);
    });
    dc.appendChild(bars);
    dc.appendChild(el('div', 'small muted', '7 天共练习 ' + dayTotal + ' 题'));
    wrap.appendChild(dc);

    // 全部级别汇总
    var sc = el('div', 'card');
    sc.appendChild(el('h3', null, '全部级别汇总'));
    LEVEL_ORDER.filter(function (lv) { return DB[lv] && DB[lv].length; }).forEach(function (lv) {
      var arr = DB[lv];
      var n = 0, k = 0, w = 0;
      arr.forEach(function (q) {
        var r = S.records[q.id];
        if (r) { n++; if (r.c) k++; }
        if (S.wrong[q.id]) w++;
      });
      var kv = el('div', 'kv');
      kv.appendChild(el('span', 'muted', LEVELS[lv].name));
      kv.appendChild(el('b', null,
        '已做 ' + n + '/' + arr.length + ' · 正确率 ' + (n ? Math.round(k / n * 100) + '%' : '—')));
      sc.appendChild(kv);
    });
    wrap.appendChild(sc);

    // 数据管理
    var mg = el('div', 'card');
    mg.appendChild(el('h3', null, '数据管理'));
    var rs = el('button', 'btn danger block', '清空全部学习数据');
    rs.onclick = function () {
      var m = modal();
      m.appendChild(el('h3', null, '确认清空所有数据？'));
      m.appendChild(el('p', 'small muted', '将删除做题记录、错题本、收藏和模考成绩，不可撤销。'));
      var y = el('button', 'btn primary block', '确认清空');
      y.style.marginTop = '12px';
      y.onclick = function () {
        localStorage.removeItem(KEY);
        S = defaultState();
        Session.active = false;
        closeModal();
        setView('home');
        toast('已清空全部数据');
      };
      m.appendChild(y);
    };
    mg.appendChild(rs);

    var ex = el('button', 'btn block', '导出题库为 JSON');
    ex.style.marginTop = '8px';
    ex.onclick = function () {
      var data = JSON.stringify(DB, null, 2);
      var blob = new Blob([data], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'datacom-bank.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    };
    mg.appendChild(ex);
    wrap.appendChild(mg);

    return wrap;
  }

  /* ============================================================
   *  键盘快捷键
   * ============================================================ */
  document.addEventListener('keydown', function (e) {
    if (view !== 'quiz') return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    var qs = sessionQuestions();
    var q = qs[Session.idx];
    if (!q) return;
    if (q.type === 'single' || q.type === 'judge') {
      var keys = q.type === 'judge' ? ['1', '2', 'T', 'F'] : ['1', '2', '3', '4'];
      var idx = keys.indexOf(e.key.toUpperCase());
      if (idx >= 0) {
        var cur = Session.answers[q.id];
        if (cur && cur.revealed) return;
        var val = q.type === 'judge'
          ? (e.key === '1' || e.key.toUpperCase() === 'T' ? 'T' : 'F')
          : letters(q.options.length)[idx];
        var a = Session.answers[q.id] || {};
        a.resp = val;
        Session.answers[q.id] = a;
        persistSession();
        if (Session.exam) render(); else doSubmit(q, cur);
        e.preventDefault();
        return;
      }
    }
    if (e.key === 'ArrowRight') {
      if (Session.idx < qs.length - 1) { Session.idx++; persistSession(); render(); }
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      if (Session.idx > 0) { Session.idx--; persistSession(); render(); }
      e.preventDefault();
    }
  });

  /* ---------------- 启动 ---------------- */
  window.addEventListener('DOMContentLoaded', function () {
    if (!DB.hcia.length && !DB.hcip.length) {
      byId('app').innerHTML =
        '<div class="card empty"><span class="ic">⚠️</span>' +
        '<div>题库未加载</div><div class="small">请确认 data/ 目录下的题库文件存在</div></div>';
      return;
    }
    render();
  });

  // 供调试
  window.__quiz = { DB: DB, S: S, Session: Session };
})();