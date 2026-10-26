window.BANK_HCIP_D = [
  {
    "id": "PD001",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP邻居关系建立过程中，路由器发送Open报文后进入哪个状态？",
    "options": [
      "OpenSent",
      "Idle",
      "Connect",
      "OpenConfirm"
    ],
    "answer": "A",
    "explain": "本端发出Open报文后即进入OpenSent状态，等待对端回应的Open报文。收到对端Open且参数协商通过后，才进入OpenConfirm状态。Idle和Connect属于TCP连接建立之前的阶段。"
  },
  {
    "id": "PD002",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP使用TCP作为传输层协议，其目的端口号是？",
    "options": [
      "21",
      "179",
      "69",
      "646"
    ],
    "answer": "B",
    "explain": "BGP使用TCP 179端口建立邻居关系，依靠TCP提供可靠的报文传输。646是LDP的端口号，21是FTP，69是TFTP。"
  },
  {
    "id": "PD003",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP的KeepAlive定时器默认值是多少秒？",
    "options": [
      "30",
      "90",
      "60",
      "180"
    ],
    "answer": "C",
    "explain": "BGP默认KeepAlive定时器为60秒，Hold定时器为180秒。KeepAlive周期发送用于向对端表明本端仍然存活。"
  },
  {
    "id": "PD004",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP共有6种报文类型，其中包括Hello报文。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "该说法错误。BGP共有5种报文：Open、Update、Notification、KeepAlive、Route-refresh，其中不包含Hello报文。Hello是OSPF等IGP使用的报文类型。"
  },
  {
    "id": "PD005",
    "type": "fill",
    "chapter": "BGP基础与选路",
    "stem": "BGP的Hold定时器默认为______秒，若在该时间内未收到任何报文则邻居关系中断。",
    "options": [],
    "answer": [
      "180"
    ],
    "explain": "BGP默认Hold时间为180秒，KeepAlive时间为60秒。邻居间通过Open报文协商Hold时间，取双方配置的较小值生效。"
  },
  {
    "id": "PD006",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "EBGP邻居间默认的TTL值为多少？",
    "options": [
      "64",
      "255",
      "179",
      "1"
    ],
    "answer": "D",
    "explain": "EBGP默认TTL为1，因此直连的EBGP邻居可直接建立。当EBGP邻居非直连时需要配置peer ebgp-max-hop。IBGP默认TTL为255。"
  },
  {
    "id": "PD007",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "当EBGP邻居之间跨越多个路由器（非直连）时，需要配置哪条命令？",
    "options": [
      "peer ebgp-max-hop",
      "peer connect-interface",
      "peer next-hop-local",
      "peer valid-ttl-hops"
    ],
    "answer": "A",
    "explain": "非直连EBGP邻居需要配置peer ebgp-max-hop指定最大跳数，使TTL足够大。connect-interface用于指定更新源地址，next-hop-local用于IBGP下一跳修改。"
  },
  {
    "id": "PD008",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "一台路由器通过Loopback接口与对端建立IBGP邻居，需要配置的命令是？",
    "options": [
      "peer x.x.x.x as-number 100",
      "peer x.x.x.x connect-interface LoopBack0",
      "peer x.x.x.x ebgp-max-hop 2",
      "peer x.x.x.x next-hop-local"
    ],
    "answer": "B",
    "explain": "使用Loopback等非直连物理接口作为更新源时，需用peer connect-interface指定源接口。这样即使物理链路变化，BGP邻居仍能保持。"
  },
  {
    "id": "PD009",
    "type": "fill",
    "chapter": "BGP基础与选路",
    "stem": "EBGP邻居之间默认的TTL值为______。",
    "options": [],
    "answer": [
      "1"
    ],
    "explain": "EBGP默认TTL为1，因此直连EBGP邻居可直接建立。IBGP默认TTL为255，非直连EBGP需配置peer ebgp-max-hop。"
  },
  {
    "id": "PD010",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "IBGP水平分割要求从IBGP邻居学到的路由不能再通告给其他IBGP邻居。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。正因如此，同一AS内需要IBGP全互联或使用路由反射器/联盟来保证路由传递，否则会出现路由黑洞。"
  },
  {
    "id": "PD011",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "路由反射器中，从非客户端学到的路由会反射给下列哪些角色？",
    "options": [
      "所有客户端和非客户端",
      "仅客户端和其他非客户端",
      "仅客户端",
      "仅EBGP邻居"
    ],
    "answer": "C",
    "explain": "RR反射规则：从非客户端学到的路由只反射给客户端；从客户端学到的路由反射给所有客户端和非客户端。这样可以避免环路并保证可达。"
  },
  {
    "id": "PD012",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP联盟中的子AS之间建立的是IBGP邻居关系。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "该说法错误。联盟内部子AS之间建立联盟内EBGP关系，报文在联盟内传递时AS_Path使用子AS号，离开联盟时统一替换为对外AS号。"
  },
  {
    "id": "PD013",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "Originator-ID属性由谁添加？",
    "options": [
      "路由始发者",
      "接收路由的客户端",
      "EBGP对等体",
      "第一个RR"
    ],
    "answer": "D",
    "explain": "当RR反射路由时，会在路由中增加Originator-ID，取值为该路由在本AS内始发者的Router ID。客户端收到含自身Router ID的路由时不会接收，从而防止环路。"
  },
  {
    "id": "PD014",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP的Origin属性优先级顺序为i优于e优于?。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。i表示由network命令引入的IGP来源路由，e表示由EGP引入，?表示由import-route引入，可信度依次降低。"
  },
  {
    "id": "PD015",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP选路原则中优先级最高的是哪个属性？",
    "options": [
      "Weight",
      "Local_Preference",
      "AS_Path",
      "MED"
    ],
    "answer": "A",
    "explain": "BGP选路第一原则为Weight（权重）大者优先，Weight是华为私有属性，只在本地有效，不传递给任何邻居。"
  },
  {
    "id": "PD016",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "Local_Preference属性的默认值和传递范围是？",
    "options": [
      "默认0，可在AS间传递",
      "默认100，只在本AS内传递",
      "默认100，可跨AS传递",
      "默认32768，只在本地有效"
    ],
    "answer": "B",
    "explain": "Local_Preference默认值为100，仅在IBGP邻居之间传递，不会传递给EBGP邻居。数值越大越优先。"
  },
  {
    "id": "PD017",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "MED属性的默认值为100，且不能传递给EBGP邻居。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "该说法错误。MED默认值为0，用于影响相邻AS进入本AS的选路，可以跨EBGP传递。MED数值越小越优先。"
  },
  {
    "id": "PD018",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP的Community属性是可选传递属性，默认会随Update报文传递给BGP邻居。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。Community可用于标记路由并配合community-filter做策略匹配，默认会传递，与仅本地有效的Weight属性不同。"
  },
  {
    "id": "PD019",
    "type": "fill",
    "chapter": "BGP基础与选路",
    "stem": "BGP选路原则中，当Weight和Local_Preference都相同时，比较AS_Path长度，______者优先。",
    "options": [],
    "answer": [
      "短",
      "越短"
    ],
    "explain": "AS_Path长度越短越优先，体现了路径矢量的思想。AS_Path还兼有防环功能，EBGP收到含本AS号的路由会直接丢弃。"
  },
  {
    "id": "PD020",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "当EBGP邻居收到一条AS_Path中包含本AS号的路由时，BGP会如何处理？",
    "options": [
      "正常接收并优选",
      "修改AS_Path后接收",
      "直接丢弃该路由",
      "降低其Local_Preference"
    ],
    "answer": "C",
    "explain": "AS_Path是BGP的防环机制，EBGP收到含本AS号的路由说明该路由曾经过本AS，会造成环路，因此直接丢弃。"
  },
  {
    "id": "PD021",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "在IBGP邻居上配置peer next-hop-local的作用是？",
    "options": [
      "修改路由的Origin属性",
      "增加AS_Path长度",
      "降低MED值",
      "将发给IBGP邻居的路由下一跳改为本机地址"
    ],
    "answer": "D",
    "explain": "BGP路由在IBGP间传递时下一跳默认不改变，可能导致下一跳不可达。配置peer next-hop-local可将下一跳改为本机与对端建立邻居的接口地址。"
  },
  {
    "id": "PD022",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "查看BGP邻居状态应使用display bgp peer命令。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。display bgp peer用于查看BGP邻居的状态、收发报文数量与协商能力等信息，而display ospf peer属于OSPF命令。"
  },
  {
    "id": "PD023",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "邻居AS号配置不一致会导致BGP邻居无法建立。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。peer命令中的as-number必须与对端配置的本地AS号一致，否则Open报文协商时AS号比对失败，邻居无法进入Established状态。"
  },
  {
    "id": "PD024",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP选路原则中，当所有属性都相同时，最后比较的是什么？",
    "options": [
      "Router ID，小者优先",
      "MED",
      "AS_Path",
      "Cluster-List长度"
    ],
    "answer": "A",
    "explain": "BGP选路的最后一条原则是比较Router ID，数值小者优先。若Router ID也相同（通常不会），则比较邻居地址。"
  },
  {
    "id": "PD025",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP的Update报文中携带的路径属性中，哪一项主要用于控制入方向流量？",
    "options": [
      "Weight",
      "MED",
      "AS_Path",
      "Next_Hop"
    ],
    "answer": "B",
    "explain": "MED用于向相邻AS建议进入本AS的入口，影响的是对端（入方向）的选路。Weight和Local_Preference用于控制本地的出方向流量。"
  },
  {
    "id": "PD026",
    "type": "fill",
    "chapter": "BGP基础与选路",
    "stem": "BGP的Update报文中，一条路由最多可以携带______个路径属性。",
    "options": [],
    "answer": [
      "10"
    ],
    "explain": "BGP Update报文中路径属性字段长度为2字节，最多携带10个路径属性。Update报文还可携带网络层可达信息和撤销路由信息。"
  },
  {
    "id": "PD027",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP是路径矢量协议，而OSPF是链路状态协议。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "BGP属于路径矢量（Path Vector）协议，通过AS_Path等属性描述路径。OSPF属于链路状态协议，通过泛洪LSA构建链路状态数据库。"
  },
  {
    "id": "PD028",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP的收敛速度通常慢于OSPF等链路状态IGP。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。BGP是路径矢量协议，需要逐跳传播并经过选路计算，收敛相对较慢，但其策略控制能力远强于IGP。"
  },
  {
    "id": "PD029",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP路由聚合命令aggregate与summary automatic的主要区别是？",
    "options": [
      "aggregate只能聚合直连路由",
      "两者完全等价",
      "summary automatic只能聚合通过import-route引入的路由",
      "aggregate不能抑制明细路由"
    ],
    "answer": "C",
    "explain": "summary automatic是自动聚合，只对import-route引入的路由生效，且不能控制聚合属性。aggregate是手动聚合，可配合detail-suppressed抑制明细并设置属性。"
  },
  {
    "id": "PD030",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP同步规则要求IBGP学到的路由必须在IGP中也学到才能加入路由表，该规则在现代网络中默认开启。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "该说法错误。BGP同步规则确实要求IGP中也存在相同路由以避免黑洞，但现代网络普遍采用全互联或RR，该规则默认关闭，可用undo synchronization开启。"
  },
  {
    "id": "PD031",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "peer ignore命令的作用是？",
    "options": [
      "永久删除邻居配置",
      "重置邻居的TCP连接",
      "修改邻居的AS号",
      "暂时停止与指定邻居交换路由信息但保留配置"
    ],
    "answer": "D",
    "explain": "peer ignore用于临时停止与邻居的路由交互，但保留邻居配置，常用于维护场景。peer shutdown则会关闭邻居会话。"
  },
  {
    "id": "PD032",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "Route-refresh报文可以在不中断邻居关系的情况下请求对端重新通告路由。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。使用Route-refresh需要双方在Open报文中协商该能力，它常用于策略变更后重新应用路由策略而无需重置邻居。"
  },
  {
    "id": "PD033",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP邻居状态中，表示邻居关系已经建立完成、可以交换Update报文的状态是？",
    "options": [
      "Established",
      "OpenConfirm",
      "Active",
      "OpenSent"
    ],
    "answer": "A",
    "explain": "Established状态表示BGP邻居关系建立完成，双方可以正常交换Update报文。OpenConfirm只是收到了对方的Open报文并发出KeepAlive，尚未最终确认。"
  },
  {
    "id": "PD034",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP的Active状态表示已经成功建立了TCP连接。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "Active状态表示BGP正在主动尝试建立TCP连接，尚未成功。Connect状态才是TCP连接已发起但未完成，两者都可能因连接失败而反复切换。"
  },
  {
    "id": "PD035",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP邻居一直停留在Active状态，最可能的原因是？",
    "options": [
      "AS号配置错误",
      "TCP连接无法建立，如路由不可达或端口被过滤",
      "KeepAlive定时器过大",
      "Router ID冲突"
    ],
    "answer": "B",
    "explain": "Active状态说明TCP三次握手未能完成，常见原因是邻居地址不可达、179端口被ACL过滤或对端未配置邻居。AS号错误通常表现为Open报文协商失败。"
  },
  {
    "id": "PD036",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "接口的带宽利用率是BGP选路原则中需要比较的属性之一。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "该说法错误。BGP选路依次比较Weight、Local_Preference、本地始发、AS_Path、Origin、MED、EBGP优于IBGP、IGP Cost、Router ID，不包括带宽利用率。"
  },
  {
    "id": "PD037",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "Notification报文的作用是？",
    "options": [
      "通告路由更新",
      "维持邻居存活",
      "在检测到错误时通知对端并关闭邻居关系",
      "协商能力参数"
    ],
    "answer": "C",
    "explain": "当BGP检测到差错（如报文格式错误、状态机错误）时，会发送Notification报文通告错误码，随后关闭BGP连接。"
  },
  {
    "id": "PD038",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "路由反射器中，从客户端学到的路由会反射给所有客户端和非客户端。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "该说法正确。RR的反射规则为：从客户端学到的路由反射给所有客户端与非客户端，从非客户端学到的路由只反射给客户端。"
  },
  {
    "id": "PD039",
    "type": "fill",
    "chapter": "BGP基础与选路",
    "stem": "BGP选路原则中，Origin属性取值为______（填i/e/?）时优先级最高。",
    "options": [],
    "answer": [
      "i"
    ],
    "explain": "Origin属性优先级为i优于e优于?。i表示路由由network命令引入，属于IGP来源，可信度最高。"
  },
  {
    "id": "PD040",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "关于BGP的Router ID，下列说法正确的是？",
    "options": [
      "必须手工配置，否则BGP无法运行",
      "等于设备的MAC地址",
      "必须是私有地址",
      "若未配置则选取最大的Loopback接口地址，无Loopback则选最大的物理接口地址"
    ],
    "answer": "D",
    "explain": "BGP Router ID若未手工配置，会优先选择最大的Loopback接口地址，若没有Loopback则选择最大的物理接口地址。建议手工配置以保证稳定。"
  },
  {
    "id": "PD041",
    "type": "fill",
    "chapter": "BGP基础与选路",
    "stem": "BGP依靠______协议提供的可靠传输来交换路由信息，其目的端口号为179。",
    "options": [],
    "answer": [
      "TCP"
    ],
    "explain": "BGP使用TCP作为传输层协议，目的端口179。TCP的面向连接与可靠传输特性使BGP无需自己实现重传与确认机制。"
  },
  {
    "id": "PD042",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "配置BGP邻居时，peer x.x.x.x as-number 100中的as-number指的是？",
    "options": [
      "对端邻居所在的AS号",
      "本地的AS号",
      "联盟的子AS号",
      "路由的起源AS号"
    ],
    "answer": "A",
    "explain": "peer命令中的as-number必须与对端设备配置的本地AS号一致，否则Open报文协商时AS号比对失败，邻居无法建立。"
  },
  {
    "id": "PD043",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "关于filter-policy在OSPF与BGP中的作用差异，下列说法正确的有？",
    "options": [
      "对OSPF只影响本地路由表，不影响LSA泛洪",
      "对BGP可以影响路由的接收与发布",
      "对OSPF可以彻底阻止邻居学到被过滤的路由",
      "对BGP import方向过滤会影响本地路由表"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "filter-policy对OSPF只阻止路由加入本地路由表，LSA仍会泛洪，邻居依然可能学到。对BGP则在收发方向都能生效，import会影响本地路由表。"
  },
  {
    "id": "PD044",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "路由反射器RR的客户端需要感知自己是客户端吗？",
    "options": [
      "需要，必须配置peer reflect-client",
      "不需要，客户端只需与RR建立正常的IBGP邻居关系",
      "需要，必须配置cluster-id",
      "需要，必须配置originator-id"
    ],
    "answer": "B",
    "explain": "客户端不需要任何特殊配置，只需与RR建立普通IBGP邻居关系即可。reflect-client、cluster-id等配置均在RR侧完成。"
  },
  {
    "id": "PD045",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "一条BGP Update报文中可以携带多组具有不同路径属性的NLRI。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "该说法错误。同一条Update报文中的NLRI共享同一组路径属性，属性不同的路由必须放在不同的Update报文中发送。"
  },
  {
    "id": "PD046",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "聚合路由时使用detail-suppressed关键字的作用是？",
    "options": [
      "只通告明细路由",
      "增加聚合路由的MED",
      "只通告聚合路由，抑制所有明细路由",
      "降低聚合路由的优先级"
    ],
    "answer": "C",
    "explain": "detail-suppressed关键字用于只发布聚合路由而抑制所有参与聚合的明细路由。若不配置，则聚合路由与明细路由会同时被通告。"
  },
  {
    "id": "PD047",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "关于路由反射器的防环机制，下列说法正确的有？",
    "options": [
      "使用Cluster-ID与Cluster-List防止簇内环路",
      "使用Originator-ID标识路由始发者",
      "客户端收到含自身Router ID的路由会忽略",
      "依靠AS_Path防止簇内环路"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "RR通过Cluster-List防止路由在同一簇内反复反射，通过Originator-ID防止路由回到始发者。AS_Path只在AS之间防环，对簇内环路无作用。"
  },
  {
    "id": "PD048",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP选路中，比较IGP Cost（到达下一跳的IGP开销）时，规则是？",
    "options": [
      "Cost越大越优先",
      "不比较Cost",
      "只比较EBGP路由的Cost",
      "Cost越小越优先"
    ],
    "answer": "D",
    "explain": "在比较完EBGP优于IBGP之后，会比较到达Next_Hop的IGP Cost，数值越小越优先。该规则通常只对IBGP路由有效。"
  },
  {
    "id": "PD049",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "关于BGP的同步规则，下列说法正确的有？",
    "options": [
      "目的是避免路由黑洞",
      "要求IBGP学到的路由在IGP中也存在才加入路由表",
      "现代网络中通常默认关闭",
      "开启后可以提升BGP收敛速度"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "同步规则要求IBGP路由在IGP中也学到才能加入路由表，用于避免黑洞。现代网络普遍采用全互联或RR，该规则默认关闭，且它不会提升收敛速度。"
  },
  {
    "id": "PD050",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP联盟中，子AS之间的邻居关系类型是？",
    "options": [
      "联盟内EBGP",
      "IBGP",
      "普通EBGP",
      "不需要建立邻居"
    ],
    "answer": "A",
    "explain": "联盟内部子AS之间建立的是联盟内EBGP（Confederation EBGP）关系。报文在联盟内传递时AS_Path使用子AS号，离开联盟时统一替换为联盟AS号。"
  },
  {
    "id": "PD051",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "filter-policy应用于OSPF时，其作用是？",
    "options": [
      "过滤LSA的传播",
      "只过滤本地路由表，不影响LSA泛洪",
      "过滤邻居关系的建立",
      "修改LSA的度量值"
    ],
    "answer": "B",
    "explain": "filter-policy对OSPF只影响本地路由表的加载，不能阻止LSA的泛洪，因此邻居仍能学到被过滤的路由。若需真正过滤需要配合其他机制。"
  },
  {
    "id": "PD052",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "route-policy中，多个节点的匹配顺序是？",
    "options": [
      "节点号大的优先",
      "随机顺序",
      "节点号小的优先",
      "按配置先后顺序"
    ],
    "answer": "C",
    "explain": "route-policy按节点号从小到大依次匹配，节点号小的先匹配。若当前节点不匹配则进入下一节点，若所有节点都不匹配则默认拒绝。"
  },
  {
    "id": "PD053",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于BGP的选路原则顺序，下列说法正确的有？",
    "options": [
      "Weight优先于Local_Preference",
      "Local_Preference优先于AS_Path",
      "AS_Path优先于Origin",
      "MED优先于EBGP优于IBGP的规则"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "BGP选路顺序为Weight > Local_Preference > 本地始发 > AS_Path > Origin > MED > EBGP优于IBGP > IGP Cost > Router ID，四项表述均正确。"
  },
  {
    "id": "PD054",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于ip-prefix-list与ACL的区别，下列说法正确的有？",
    "options": [
      "ip-prefix可以匹配掩码长度范围",
      "ACL不能匹配掩码长度范围",
      "ACL可以匹配源和目的地址",
      "ip-prefix只能匹配目的网段和掩码"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "ip-prefix专门用于匹配路由的目的网段和掩码长度，通过ge/le指定掩码范围。ACL主要匹配报文地址，不能精确匹配掩码长度。"
  },
  {
    "id": "PD055",
    "type": "fill",
    "chapter": "路由控制与策略路由",
    "stem": "ip-prefix中，ge表示掩码长度的______值，le表示掩码长度的最大值。",
    "options": [],
    "answer": [
      "最小",
      "下限"
    ],
    "explain": "ip-prefix的ge（greater-equal）表示掩码长度的最小值，le（less-equal）表示最大值。两者须大于等于前缀本身长度，且ge不能大于le。"
  },
  {
    "id": "PD056",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "ip-prefix列表中配置ip ip-prefix test index 10 permit 10.1.0.0 16 less-equal 24，可以匹配下列哪条路由？",
    "options": [
      "10.1.0.0/8",
      "10.1.0.0/25",
      "10.2.0.0/20",
      "10.1.1.0/24"
    ],
    "answer": "D",
    "explain": "该条目匹配以10.1开头的、掩码长度在16到24之间的路由。10.1.1.0/24掩码为24，符合范围；10.1.0.0/25掩码为25超出范围，10.2.0.0/20前缀不匹配。"
  },
  {
    "id": "PD057",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "route-policy中apply子句不能配置下列哪一项？",
    "options": [
      "邻居的AS号",
      "cost",
      "preference",
      "tag"
    ],
    "answer": "A",
    "explain": "apply用于设置路由属性，如cost、preference、tag、community、as-path等。邻居的AS号由peer命令配置，不属于apply的动作范围。"
  },
  {
    "id": "PD058",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于路由策略的作用范围，下列说法正确的有？",
    "options": [
      "可控制路由的接收",
      "可控制路由的发布",
      "可修改路由的属性",
      "可以改变数据报文的转发路径"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "路由策略作用于路由信息本身，可控制接收、发布与属性修改。改变数据报文转发路径是策略路由（PBR）的功能，不属于路由策略。"
  },
  {
    "id": "PD059",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于路由策略与策略路由的区别，下列说法正确的有？",
    "options": [
      "路由策略作用于路由表，影响路由的发布和接收",
      "策略路由作用于数据报文转发",
      "route-policy属于路由策略",
      "policy-based-route属于策略路由"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "路由策略（如route-policy、filter-policy）控制路由信息的产生与传播；策略路由（PBR）控制数据报文的转发路径。两者作用对象完全不同。"
  },
  {
    "id": "PD060",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "黑洞路由通常将流量指向哪个接口？",
    "options": [
      "LoopBack0",
      "NULL0",
      "GigabitEthernet0/0/1",
      "Vlanif1"
    ],
    "answer": "B",
    "explain": "黑洞路由把匹配的流量指向NULL0接口，报文会被直接丢弃。常用于配合路由聚合防止环路，或用于汇总路由的下拉。"
  },
  {
    "id": "PD061",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于ACL与ip-prefix-list的差异，下列说法正确的有？",
    "options": [
      "ip-prefix可以匹配掩码长度范围",
      "ACL不能匹配掩码长度范围",
      "ACL可以匹配源和目的地址",
      "ip-prefix可以匹配TCP端口号"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "ip-prefix专门匹配路由的目的网段与掩码长度范围，不能匹配TCP端口。ACL主要匹配报文地址，高级ACL可匹配端口但不适合精确匹配掩码。"
  },
  {
    "id": "PD062",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "as-path-filter中正则表达式^100_的含义是？",
    "options": [
      "AS_Path仅为100",
      "AS_Path以100结尾",
      "AS_Path以100开头且后面还有其他AS",
      "AS_Path中包含100"
    ],
    "answer": "C",
    "explain": "^表示起始，100表示AS号，_表示分隔符。^100_匹配以100开头且后面还有AS号的路由。若只匹配100本身应使用^100$。"
  },
  {
    "id": "PD063",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "route-policy的apply子句可以执行下列哪些动作？",
    "options": [
      "设置路由的cost值",
      "设置路由的tag",
      "设置BGP的community属性",
      "增加或删除AS_Path"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "apply可设置cost、preference、tag、community、as-path、origin等多种路由属性。as-path可通过apply as-path添加或删除AS号以影响选路。"
  },
  {
    "id": "PD064",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "在 OSPF 进程中使用 import-route 引入直连路由时，若不指定度量值，默认的度量值与外部路由类型分别是？",
    "options": ["度量值 1，类型 2","度量值 0，类型 1","度量值 20，类型 2","度量值 100，类型 1"],
    "answer": "A",
    "explain": "OSPF 通过 import-route 引入外部路由时，若不指定度量值则默认取 1，且默认的外部路由类型为 2（Type 2 只比较外部开销）。可用 import-route direct cost 100 type 1 显式指定度量与类型。"
  },
  {
    "id": "PD065",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于策略路由PBR，下列说法正确的有？",
    "options": [
      "可以基于源IP地址匹配",
      "可以基于协议类型和端口号匹配",
      "优先级高于路由表查找",
      "会修改路由表中的路由条目"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "PBR通过ACL等匹配源地址、协议、端口等信息并指定转发下一跳，优先级高于路由表。它只影响报文转发，不修改路由表条目。"
  },
  {
    "id": "PD066",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "在接口上应用策略路由，使用的命令是？",
    "options": [
      "ip policy-based-route",
      "ip local policy-based-route",
      "traffic-filter inbound acl",
      "route-policy import"
    ],
    "answer": "A",
    "explain": "接口策略路由使用ip policy-based-route命令在接口下应用。本地策略路由使用ip local policy-based-route，作用于本机产生的报文。"
  },
  {
    "id": "PD067",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于import-route引入路由，下列说法正确的有？",
    "options": [
      "可以引入直连路由",
      "可以引入静态路由",
      "可以引入OSPF路由",
      "可以引入BGP自身路由"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "import-route可引入直连、静态、OSPF、IS-IS、RIP等多种协议的路由。BGP自身的路由不能用import-route引入，需使用network命令发布。"
  },
  {
    "id": "PD068",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "MQC中流分类（traffic classifier）的作用是？",
    "options": [
      "定义流量的动作",
      "定义流量的匹配规则",
      "将分类与动作绑定",
      "过滤路由"
    ],
    "answer": "B",
    "explain": "MQC包含流分类、流行为、流策略三部分。流分类定义匹配规则，流行为定义动作，流策略将两者绑定后应用到接口或全局。"
  },
  {
    "id": "PD069",
    "type": "fill",
    "chapter": "路由控制与策略路由",
    "stem": "在route-policy中，用于定义匹配条件的子句关键字是______。",
    "options": [],
    "answer": [
      "if-match"
    ],
    "explain": "if-match用于定义route-policy节点的匹配条件，如if-match ip-prefix、if-match community-filter。apply用于定义满足条件后执行的动作。"
  },
  {
    "id": "PD070",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "display route-policy命令的作用是？",
    "options": [
      "查看路由表",
      "查看接口状态",
      "查看已配置的route-policy内容",
      "查看邻居关系"
    ],
    "answer": "C",
    "explain": "display route-policy用于查看设备上配置的路由策略内容，包括节点号、匹配条件和动作。查看路由表使用display ip routing-table。"
  },
  {
    "id": "PD071",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于黑洞路由的用途，下列说法正确的有？",
    "options": [
      "配合路由聚合防止环路",
      "丢弃不需要转发的流量",
      "用于牵引攻击流量",
      "用于提高链路带宽"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "黑洞路由将匹配流量引向NULL0丢弃，可用于聚合路由防环、丢弃垃圾流量、牵引攻击流量等场景，但它不能提高链路带宽。"
  },
  {
    "id": "PD072",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "ip ip-prefix test index 10 permit 0.0.0.0 0 less-equal 32 的作用是？",
    "options": [
      "只匹配默认路由",
      "不匹配任何路由",
      "只匹配32位掩码的路由",
      "匹配所有路由"
    ],
    "answer": "D",
    "explain": "前缀0.0.0.0掩码0表示任意前缀，less-equal 32表示掩码长度不超过32，因此匹配所有IPv4路由。若要只匹配默认路由应使用0.0.0.0 0。"
  },
  {
    "id": "PD073",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于Community-filter，下列说法正确的有？",
    "options": [
      "用于匹配BGP团体属性",
      "基本格式为团体号，如100:1",
      "可在route-policy中通过if-match community-filter调用",
      "只能匹配标准团体属性"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "community-filter用于匹配BGP路由的Community属性，可在route-policy中调用。除标准团体属性外，还可匹配扩展团体及Well-known团体。"
  },
  {
    "id": "PD074",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "filter-policy export在BGP中的作用是？",
    "options": [
      "过滤向邻居发布的路由",
      "过滤从邻居接收的路由",
      "过滤本地路由表",
      "过滤LSA"
    ],
    "answer": "A",
    "explain": "filter-policy export用于在发布路由时进行过滤，即控制哪些路由可以发布给邻居。BGP中也可在peer上直接使用filter-policy export或ip-prefix进行过滤。"
  },
  {
    "id": "PD075",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于filter-policy的方向，下列说法正确的有？",
    "options": [
      "import方向影响本地路由表",
      "export方向影响向邻居发布的路由",
      "对OSPF的import只影响路由表加载",
      "export方向可以阻止邻居的LSA泛洪"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "filter-policy的import影响本地路由表加载，export影响对外发布的路由。对OSPF而言并不能阻止LSA泛洪，因此最后一项错误。"
  },
  {
    "id": "PD076",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "以下哪种工具可以同时匹配路由的目的地址和掩码长度范围？",
    "options": [
      "基本ACL",
      "ip-prefix-list",
      "高级ACL",
      "traffic-filter"
    ],
    "answer": "B",
    "explain": "ip-prefix-list专为路由过滤设计，可精确匹配目的网段并通过ge/le限定掩码长度范围。ACL只能匹配地址，不能匹配掩码长度范围。"
  },
  {
    "id": "PD077",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "在BGP中可以直接在peer下调用的过滤工具有？",
    "options": [
      "peer ip-prefix export",
      "peer filter-policy export",
      "peer as-path-filter",
      "peer route-policy"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "BGP可在peer下使用ip-prefix、filter-policy、as-path-filter、route-policy等对发布或接收的路由进行过滤与控制。"
  },
  {
    "id": "PD078",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "策略路由中，本地策略路由与接口策略路由的根本区别是？",
    "options": [
      "匹配条件不同",
      "接口策略路由只对本机报文生效",
      "本地策略路由只对本机产生的报文生效",
      "两者完全相同"
    ],
    "answer": "C",
    "explain": "本地策略路由使用ip local policy-based-route配置，只对本设备自身产生的报文生效。接口策略路由配置在接口上，对该接口收发的转发报文生效。"
  },
  {
    "id": "PD079",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于route-policy节点的匹配行为，下列说法正确的有？",
    "options": [
      "按节点号从小到大匹配",
      "同一节点内多条if-match为逻辑与",
      "节点未匹配则继续匹配下一节点",
      "所有节点未匹配则默认拒绝"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "route-policy按节点号顺序匹配，节点内多条if-match为与关系，未匹配则继续下一节点，全部未匹配时默认拒绝。"
  },
  {
    "id": "PD080",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "路由过滤常部署在什么位置以控制路由的传播？",
    "options": [
      "只在接收方向",
      "只在发送方向",
      "只能在ASBR上",
      "接收方向和发送方向均可"
    ],
    "answer": "D",
    "explain": "路由过滤既可以在接收方向（import）部署，控制哪些路由进入本地路由表，也可以在发送方向（export）部署，控制哪些路由对外发布。"
  },
  {
    "id": "PD081",
    "type": "fill",
    "chapter": "路由控制与策略路由",
    "stem": "在接口下应用流策略的命令是traffic-policy，其匹配对象由流分类和______共同定义。",
    "options": [],
    "answer": [
      "流行为",
      "traffic behavior"
    ],
    "explain": "MQC由流分类（classifier）、流行为（behavior）和流策略（policy）组成。流策略将流分类与流行为关联，再通过traffic-policy应用到接口。"
  },
  {
    "id": "PD082",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "使用display ip ip-prefix命令可以查看什么？",
    "options": [
      "ip-prefix列表的配置内容",
      "ACL规则",
      "路由表",
      "接口地址"
    ],
    "answer": "A",
    "explain": "display ip ip-prefix用于查看已配置的ip-prefix列表内容，包括索引号、匹配的前缀和掩码范围。查看ACL使用display acl。"
  },
  {
    "id": "PD083",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "关于BGP与IGP的区别，下列说法正确的是？",
    "options": [
      "BGP是链路状态协议",
      "BGP使用TCP承载，IGP通常直接封装在IP之上",
      "BGP主要运行在AS内部",
      "BGP收敛速度通常快于OSPF"
    ],
    "answer": "B",
    "explain": "BGP运行于AS之间，采用TCP传输，是路径矢量协议，收敛较慢但策略能力强大。OSPF是链路状态协议，运行于AS内部且收敛快。"
  },
  {
    "id": "PD084",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "BGP中如果想要只接收特定团体属性的路由，应该使用什么工具？",
    "options": [
      "ip-prefix-list",
      "as-path-filter",
      "community-filter",
      "traffic-filter"
    ],
    "answer": "C",
    "explain": "community-filter专门用于匹配BGP路由的Community属性，配合route-policy可实现对特定团体的路由进行接收或发布控制。"
  },
  {
    "id": "PD085",
    "type": "judge",
    "chapter": "路由控制与策略路由",
    "stem": "route-policy中，一个节点可以配置多条if-match语句，它们之间是“与”的关系。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "同一节点内的多条if-match语句之间为逻辑与关系，必须全部满足才算匹配该节点。不同节点之间则是或的关系，按节点号依次匹配。"
  },
  {
    "id": "PD086",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "下列关于NULL0路由的说法，错误的是？",
    "options": [
      "指向NULL0的路由会丢弃匹配报文",
      "常用于聚合路由防环",
      "NULL0是逻辑接口",
      "NULL0路由会被发布给BGP邻居并造成业务中断"
    ],
    "answer": "D",
    "explain": "NULL0是逻辑接口，指向它的路由会丢弃报文，常用于配合聚合防止环路。该类路由通常只在本地生效，不会导致业务中断。"
  },
  {
    "id": "PD087",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "在OSPF中配置filter-policy import后，被过滤的路由会？",
    "options": [
      "不加入本地路由表，但仍存在于LSDB中",
      "从LSDB中删除",
      "不再被邻居学习到",
      "触发邻居重置"
    ],
    "answer": "A",
    "explain": "filter-policy import只阻止路由加入本地路由表，LSDB中仍保留相应LSA。因此邻居依然可以通过泛洪学到该路由，这是OSPF过滤的重要限制。"
  },
  {
    "id": "PD088",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "import-route可以引入下列哪些类型的路由？",
    "options": [
      "直连路由",
      "静态路由",
      "OSPF路由",
      "BGP路由"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "import-route可引入直连、静态、OSPF、IS-IS、RIP等多种协议的路由。BGP自身不能用import-route引入，需要使用network命令发布。"
  },
  {
    "id": "PD089",
    "type": "judge",
    "chapter": "路由控制与策略路由",
    "stem": "PBR策略路由匹配成功后，如果指定的下一跳不可达，报文将被丢弃或转为按路由表转发，取决于具体实现配置。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "策略路由中若指定的下一跳不可达，设备通常按实现策略处理，多数情况下会回退到按路由表转发或丢弃报文。华为设备可配置相关的处理方式。"
  },
  {
    "id": "PD090",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "关于ACL在路由策略中的作用，下列说法正确的是？",
    "options": [
      "可以直接匹配掩码长度",
      "可被route-policy的if-match调用以匹配目的网段",
      "只能匹配TCP端口",
      "不能用于路由过滤"
    ],
    "answer": "B",
    "explain": "ACL可被route-policy的if-match ip address acl调用，用于匹配路由的目的网段。但ACL无法精确匹配掩码长度，精确匹配掩码需使用ip-prefix。"
  },
  {
    "id": "PD091",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "as-path-filter中，正则表达式_100_表示？",
    "options": [
      "AS_Path以100开头",
      "AS_Path以100结尾",
      "AS_Path中包含100",
      "AS_Path仅为100"
    ],
    "answer": "C",
    "explain": "_100_表示AS_Path中任意位置包含AS号100。^100_表示以100开头，_100$表示以100结尾，^100$表示仅为100。"
  },
  {
    "id": "PD092",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于路由策略的部署，下列说法正确的有？",
    "options": [
      "可在ASBR上部署以控制引入的外部路由",
      "可在边界路由器上部署以控制发布给EBGP邻居的路由",
      "可在RR上部署以控制反射的路由",
      "可对OSPF的外部路由进行过滤并影响LSA泛洪"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "路由策略可部署在ASBR、边界路由器、RR等位置。但对OSPF而言，filter-policy不能影响LSA泛洪，只能影响本地路由表，因此最后一项表述错误。"
  },
  {
    "id": "PD093",
    "type": "judge",
    "chapter": "路由控制与策略路由",
    "stem": "route-policy虽然未在任何地方被调用，但其配置本身就会影响路由的选路结果。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "route-policy只有被调用后才会生效，例如通过filter-policy、import-route、peer等命令引用。仅配置而不调用不会对路由产生任何影响。"
  },
  {
    "id": "PD094",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "filter-policy import在RIP中的作用是？",
    "options": [
      "过滤发送给邻居的路由",
      "过滤LSA",
      "修改路由的跳数",
      "过滤从邻居收到的路由，不加入路由表"
    ],
    "answer": "D",
    "explain": "filter-policy import在RIP中用于过滤从邻居接收的路由，被过滤的路由不会加入本地路由表。RIP的export方向用于过滤向邻居发布的路由。"
  },
  {
    "id": "PD095",
    "type": "fill",
    "chapter": "路由控制与策略路由",
    "stem": "route-policy中用于设置路由属性的子句关键字是______。",
    "options": [],
    "answer": [
      "apply"
    ],
    "explain": "apply子句用于对匹配成功的路由执行属性设置动作，如apply cost、apply tag、apply community。if-match用于定义匹配条件。"
  },
  {
    "id": "PD096",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "使用MQC时，将流分类与流行为关联起来的配置称为？",
    "options": [
      "流策略",
      "流分类",
      "流行为",
      "ACL规则"
    ],
    "answer": "A",
    "explain": "流策略（traffic policy）将流分类与流行为关联，然后通过traffic-policy命令应用到接口的入或出方向，实现对特定流量的处理。"
  },
  {
    "id": "PD097",
    "type": "judge",
    "chapter": "路由控制与策略路由",
    "stem": "在BGP中，可以通过peer命令直接调用ip-prefix或filter-policy来过滤向邻居发布的路由。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "BGP可在peer下使用peer ip-prefix export、peer filter-policy export等方式过滤发布路由，也可使用peer as-path-filter、peer route-policy等实现更精细控制。"
  },
  {
    "id": "PD098",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "下列关于黑洞路由用途的描述，正确的有？",
    "options": [
      "配合路由聚合防止环路",
      "丢弃不需要转发的流量",
      "用于牵引攻击流量",
      "用于提高链路带宽"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "黑洞路由将匹配流量引向NULL0丢弃，可用于聚合路由防环、丢弃垃圾流量、牵引攻击流量等场景。它不能提高链路带宽。"
  },
  {
    "id": "PD099",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "ip-prefix配置中，若index 10为deny、index 20为permit 0.0.0.0 0 less-equal 32，则最终效果是？",
    "options": [
      "拒绝所有路由",
      "只拒绝index 10匹配的路由，其余全部放行",
      "只放行index 10匹配的路由",
      "所有路由都被放行"
    ],
    "answer": "B",
    "explain": "ip-prefix按索引号从小到大匹配，index 10匹配的路由被拒绝，其余路由在index 20被全部放行。这体现了“先精确匹配拒绝、再放宽放行”的常见写法。"
  },
  {
    "id": "PD100",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于route-policy节点中if-match与apply的组合使用，下列说法正确的有？",
    "options": [
      "匹配条件满足才执行apply动作",
      "一个节点可配置多个apply动作",
      "apply动作只对匹配该节点的路由生效",
      "未匹配的节点会继续尝试下一个节点"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "route-policy节点中，只有if-match条件全部满足才会执行apply动作，且可配置多个apply。当前节点未匹配时按节点号继续匹配下一节点。"
  }
];
