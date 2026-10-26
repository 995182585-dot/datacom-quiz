window.BANK_HCIP_821A = [
  {
    "id": "P821001",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 使用 IP 协议号多少进行报文封装？",
    "options": ["88", "89", "90", "179"],
    "answer": "B",
    "explain": "OSPF 直接封装在 IP 报文中，协议号为 89。88 是 EIGRP，90 是 EIGRP 的另一种说法（实际 EIGRP 为 88），179 是 BGP 的 TCP 端口号。因此选 B。"
  },
  {
    "id": "P821002",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "在广播型网络中，OSPF 默认的 Hello 间隔和 Dead 间隔分别是多少？",
    "options": ["10 秒和 40 秒", "30 秒和 120 秒", "10 秒和 120 秒", "40 秒和 10 秒"],
    "answer": "A",
    "explain": "广播型与 P2P 网络的 Hello 间隔默认为 10 秒，Dead 间隔为 Hello 的 4 倍即 40 秒。NBMA 与 P2MP 网络默认为 30 秒和 120 秒。因此选 A。"
  },
  {
    "id": "P821003",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "关于 OSPF 中 DR/BDR 的选举，下列说法正确的是？",
    "options": [
      "优先级相同则比较接口 IP 地址，地址大者优先",
      "选举是抢占的，新加入的高优先级路由器会立即成为 DR",
      "优先级为 0 的接口不参与 DR/BDR 选举",
      "DR 选举完成后 BDR 无法再接管 DR 角色"
    ],
    "answer": "C",
    "explain": "DR/BDR 选举先比较接口优先级（默认 1），优先级为 0 表示不参与选举；优先级相同则比较 Router-ID，大者优先，而非接口 IP。选举结果不抢占，DR 失效后由 BDR 接管。因此选 C。"
  },
  {
    "id": "P821004",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中描述 Router LSA（Type 1）的 LSA 类型编号和产生者分别是？",
    "options": [
      "Type 1，由区域内每台路由器产生",
      "Type 1，由 DR 产生",
      "Type 2，由区域内每台路由器产生",
      "Type 3，由 ABR 产生"
    ],
    "answer": "A",
    "explain": "Type 1 Router LSA 由区域内每台运行 OSPF 的路由器产生，描述自身接口和链路状态。Type 2 Network LSA 由 DR 产生，Type 3 Summary LSA 由 ABR 产生。因此选 A。"
  },
  {
    "id": "P821005",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中由 ABR 产生、用于向其他区域通告本区域网段信息的 LSA 是？",
    "options": ["Type 1 Router LSA", "Type 2 Network LSA", "Type 3 Summary LSA", "Type 5 External LSA"],
    "answer": "C",
    "explain": "Type 3 Summary LSA 由 ABR 产生，用于在区域之间通告网段路由。Type 4 为 ASBR-Summary，用于通告 ASBR 位置；Type 5 由 ASBR 产生，通告外部路由。因此选 C。"
  },
  {
    "id": "P821006",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "某区域配置为 NSSA 后，该区域内引入的外部路由以哪种 LSA 形式在区域内泛洪？",
    "options": ["Type 4", "Type 5", "Type 7", "Type 3"],
    "answer": "C",
    "explain": "NSSA 区域不允许 Type 5 LSA 泛洪，ASBR 改用 Type 7 NSSA-External LSA 在区域内通告外部路由。Type 7 到达 NSSA 的 ABR 后由 ABR 转换为 Type 5 通告到其他区域。因此选 C。"
  },
  {
    "id": "P821007",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 虚连接（Virtual Link）的主要作用是什么？",
    "options": [
      "加快区域间路由收敛速度",
      "解决非骨干区域未与骨干区域直接相连的问题",
      "减少区域内的 LSA 数量",
      "实现区域间路由过滤"
    ],
    "answer": "B",
    "explain": "OSPF 要求所有非骨干区域必须与 Area 0 直接相连。当某区域无法物理连接到 Area 0 时，可通过穿越一个中间区域的虚连接逻辑上接入骨干区域。虚连接使用 vlink-peer 命令配置，属于 Area 0。因此选 B。"
  },
  {
    "id": "P821008",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 计算接口开销（Cost）默认使用的公式是？",
    "options": [
      "参考带宽 × 接口带宽",
      "参考带宽 ÷ 接口带宽",
      "接口带宽 ÷ 参考带宽",
      "接口带宽 × 100"
    ],
    "answer": "B",
    "explain": "OSPF 接口开销等于参考带宽除以接口带宽，参考带宽默认 100 Mbps（即 100000 kbps）。例如 10 Mbps 接口开销为 10，100 Mbps 接口开销为 1。当接口带宽大于参考带宽时开销取最小值 1，可通过 bandwidth-reference 调整参考带宽。因此选 B。"
  },
  {
    "id": "P821009",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "将某区域配置为 Totally Stub（完全末梢）区域后，该区域内路由器收到的区域间路由情况是？",
    "options": [
      "可以收到 Type 3、Type 4 和 Type 5 LSA",
      "只能收到一条指向 ABR 的默认路由（Type 3）",
      "可以收到 Type 3 明细路由但收不到 Type 5",
      "可以收到 Type 7 LSA"
    ],
    "answer": "B",
    "explain": "Totally Stub 区域由 ABR 通过配置 no-summary 实现，除区域内部路由外只向该区域注入一条 Type 3 默认路由。Stub 区域则仍可收到其他区域的 Type 3 明细路由，只是不允许 Type 5。因此选 B。"
  },
  {
    "id": "P821010",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 邻居状态机中，双方交换 DD 报文交互链路状态数据库摘要、但尚未请求完整 LSA 的状态是？",
    "options": ["Init", "2-Way", "Exchange", "Loading"],
    "answer": "C",
    "explain": "Exchange 状态下路由器互相发送 DD 报文描述本地 LSDB 摘要，并发送 LSR 请求缺少的 LSA。Loading 状态是收到对方 LSR 后回复 LSU 的过程，之后进入 Full。因此选 C。"
  },
  {
    "id": "P821011",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "下列关于 OSPF 特殊区域的说法，正确的有哪些？",
    "options": [
      "Stub 区域不允许 Type 4 和 Type 5 LSA 泛洪",
      "Totally Stub 区域通过 ABR 配置 no-summary 实现",
      "NSSA 区域允许存在 ASBR 并引入外部路由",
      "NSSA 区域内可以正常泛洪 Type 5 LSA"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Stub 区域拒绝 Type 4 和 Type 5 LSA，仅通过 ABR 下发默认路由；Totally Stub 需在 ABR 上配置 no-summary 进一步过滤 Type 3 明细。NSSA 允许区域内存在 ASBR 并引入外部路由，但外部路由以 Type 7 形式泛洪而非 Type 5。因此 A、B、C 正确。"
  },
  {
    "id": "P821012",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "关于 OSPF 虚连接（Virtual Link）的描述，正确的有哪些？",
    "options": [
      "虚连接的两端必须是各自区域内的 ABR",
      "虚连接被视为骨干区域 Area 0 的一条链路",
      "通过 vlink-peer 命令指定对端 Router-ID 建立虚连接",
      "虚连接必须穿越一个 NSSA 区域才能建立"
    ],
    "answer": ["A", "B", "C"],
    "explain": "虚连接两端路由器必须是各自所在区域的 ABR，且虚连接逻辑上属于 Area 0。配置时使用 vlink-peer 指定对端 Router-ID，其存活基于穿越区域的 SPF 可达性。穿越的区域可以是普通区域，不要求是 NSSA。因此 A、B、C 正确。"
  },
  {
    "id": "P821013",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "导致 OSPF 邻居关系无法建立或无法到达 Full 状态的常见原因有哪些？",
    "options": [
      "接口 Hello/Dead 定时器不一致",
      "接口认证方式和密钥不一致",
      "区域 ID 不一致",
      "两端接口的 MTU 不一致"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "Hello/Dead 定时器、认证参数、区域 ID、MTU 都是 Hello 报文或 DD 报文中必须匹配的关键字段。MTU 不一致会导致 DD 报文被丢弃并使邻居停留在 ExStart/Exchange 状态。因此四项均正确。"
  },
  {
    "id": "P821014",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "关于 OSPF 的 LSA 类型，下列对应关系正确的有哪些？",
    "options": [
      "Type 2 Network LSA 由 DR 产生",
      "Type 4 ASBR-Summary LSA 由 ABR 产生",
      "Type 5 External LSA 由 ASBR 产生",
      "Type 3 Summary LSA 由 ASBR 产生"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Type 2 由广播网中的 DR 产生；Type 4 由 ABR 产生，用于通告 ASBR 位置；Type 5 由 ASBR 产生，用于通告引入的外部路由。Type 3 由 ABR 产生而非 ASBR。因此 A、B、C 正确。"
  },
  {
    "id": "P821015",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "关于 OSPF 区域设计原则，下列说法正确的有哪些？",
    "options": [
      "Area 0 是骨干区域，其他区域之间的路由必须经过 Area 0 转发",
      "所有非骨干区域必须与骨干区域直接相连",
      "ABR 是同时连接骨干区域和非骨干区域的路由器",
      "ASBR 只能位于骨干区域中"
    ],
    "answer": ["A", "B", "C"],
    "explain": "OSPF 采用两级层次结构，区域间路由必须经骨干区域中转，且非骨干区域必须物理连接 Area 0（否则需虚连接）。ABR 连接骨干与非骨干区域，ASBR 引入外部路由，可位于任意区域（NSSA 中亦可）。因此 A、B、C 正确。"
  },
  {
    "id": "P821016",
    "type": "judge",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中 DR/BDR 的选举具有抢占性，当一台优先级更高的路由器加入网络后会立即抢占 DR 角色。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "OSPF 的 DR/BDR 选举不具备抢占性，选举完成后即使有更高优先级的路由器加入，也不会立即抢占。只有当 DR 失效时才会重新选举，此时 BDR 升为 DR。"
  },
  {
    "id": "P821017",
    "type": "judge",
    "chapter": "OSPF高级特性",
    "stem": "在广播型网络中，OSPF 路由器之间通过组播地址 224.0.0.5 和 224.0.0.6 交互报文。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "224.0.0.5 为 AllSPFRouters，所有运行 OSPF 的路由器都会监听；224.0.0.6 为 AllDRouters，只有 DR 和 BDR 监听。DR/BDR 使用 224.0.0.5 发送，DRother 使用 224.0.0.6 向 DR/BDR 发送。"
  },
  {
    "id": "P821018",
    "type": "fill",
    "chapter": "OSPF高级特性",
    "stem": "在华为 VRP 中，创建并进入 OSPF 进程的命令是 ospf ______（填写进程号）。",
    "options": [],
    "answer": ["1"],
    "explain": "在系统视图下执行 ospf 进程号即可创建并进入 OSPF 进程视图，本处进程号为 1，完整命令为 ospf 1。进程号仅在本地有效，不同设备的进程号互不影响。"
  },
  {
    "id": "P821019",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 协议在数据链路层之上直接运行，其对应的 OSI 协议层次是？",
    "options": ["网络层协议，工作在 CLNS 之上", "传输层协议，工作在 TCP 之上", "应用层协议", "工作在 UDP 之上"],
    "answer": "A",
    "explain": "IS-IS 最初是为 OSI 的 CLNS 设计的链路状态路由协议，直接封装在数据链路层帧之上，通过 NLPID 标识协议。它不依赖 IP 传输层协议，这也是其扩展性好、安全性较高的原因之一。因此选 A。"
  },
  {
    "id": "P821020",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 Level-1 路由器的默认路由指向哪里？",
    "options": [
      "指向最近的 Level-2 路由器",
      "指向同区域内最近的 Level-1-2 路由器",
      "指向 DIS",
      "指向本区域的 Level-1 路由器"
    ],
    "answer": "B",
    "explain": "Level-1 路由器只维护本区域 Level-1 链路状态数据库，通过 ATT（Attached）位找到最近的 Level-1-2 路由器并产生一条指向它的默认路由，用于访问区域外目的地。因此选 B。"
  },
  {
    "id": "P821021",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 DIS 的选举规则是？",
    "options": [
      "先比较接口优先级（默认 64），相同则比较 MAC 地址，且具有抢占性",
      "先比较 Router-ID，且不具抢占性",
      "先比较接口 IP 地址，且不具抢占性",
      "只有优先级最高的路由器才能成为 DIS，且不具抢占性"
    ],
    "answer": "A",
    "explain": "IS-IS 的 DIS 选举先比较接口优先级（默认 64，0 表示不参与），优先级相同则比较接口 MAC 地址，值大者当选。与 OSPF 不同，IS-IS 的 DIS 选举是抢占的，且没有备份 DIS。因此选 A。"
  },
  {
    "id": "P821022",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中用于描述链路状态数据库、类似 OSPF Router LSA 的报文是？",
    "options": ["IIH PDU", "LSP", "CSNP", "PSNP"],
    "answer": "B",
    "explain": "LSP（Link State PDU）承载路由器的链路状态信息，用于构建链路状态数据库，作用类似 OSPF 的 Router LSA。IIH 用于建立邻居，CSNP 用于泛洪数据库摘要，PSNP 用于请求和确认。因此选 B。"
  },
  {
    "id": "P821023",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "在华为 VRP 中，配置 IS-IS 路由器级别的命令是？",
    "options": ["is-level", "network-entity", "isis cost", "isis circuit-level"],
    "answer": "A",
    "explain": "is-level 命令用于在 IS-IS 进程视图下配置路由器的级别，取值为 level-1、level-2 或 level-1-2。network-entity 用于配置 NET 地址，isis circuit-level 用于配置接口的链路级别。因此选 A。"
  },
  {
    "id": "P821024",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 接口的默认链路开销（Cost）值是多少？",
    "options": ["1", "10", "64", "100"],
    "answer": "B",
    "explain": "IS-IS 接口的默认开销为 10，与 OSPF 基于带宽计算开销不同。可通过 isis cost 命令手工修改，或配置宽带开销模式自动计算。因此选 B。"
  },
  {
    "id": "P821025",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "一个 NET（Network Entity Title）地址由哪几部分组成？",
    "options": [
      "区域 ID、System ID 和 SEL",
      "区域 ID 和 IP 地址",
      "System ID 和 Router-ID",
      "Area ID、Router-ID 和 SEL"
    ],
    "answer": "A",
    "explain": "NET 由区域 ID（Area ID）、系统 ID（System ID，通常 6 字节）和 SEL（NSAP 选择符，固定为 00）组成，例如 49.0001.0000.0000.0001.00。同一区域内的路由器区域 ID 必须一致。因此选 A。"
  },
  {
    "id": "P821026",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "关于 IS-IS 与 OSPF 的比较，下列说法正确的是？",
    "options": [
      "IS-IS 基于 TCP 传输，OSPF 基于 IP 直接封装",
      "IS-IS 的扩展性优于 OSPF，适合大型网络",
      "IS-IS 不支持大规模网络的分层设计",
      "IS-IS 的 LSP 数量随邻居数增长而急剧增加"
    ],
    "answer": "B",
    "explain": "IS-IS 报文直接封装在链路层，不依赖 IP，LSP 以路由器为单位而非以链路为单位，且通过 TLV 扩展灵活，因此在超大型网络中扩展性和稳定性优于 OSPF。IS-IS 同样支持 L1/L2 分层设计。因此选 B。"
  },
  {
    "id": "P821027",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 CSFP（CSNP）报文的主要作用是？",
    "options": [
      "请求邻居发送指定的 LSP",
      "描述本地链路状态数据库中的所有 LSP 摘要",
      "建立和维护邻居关系",
      "确认收到的 LSP"
    ],
    "answer": "B",
    "explain": "CSNP 包含本地 LSDB 中所有 LSP 的摘要信息，由 DIS 周期性在广播网络上发送，用于同步链路状态数据库。PSNP 用于请求缺失的 LSP 或对 LSP 进行确认。因此选 B。"
  },
  {
    "id": "P821028",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "在 IS-IS 广播网络中，DIS 发送 CSNP 的默认周期是？",
    "options": ["3 秒", "10 秒", "30 秒", "60 秒"],
    "answer": "B",
    "explain": "在广播网络中，DIS 默认每 10 秒发送一次 CSNP，用于周期性同步链路状态数据库。Hello 报文的默认发送间隔为 10 秒（Level-1/Level-2 广播网络）。因此选 B。"
  },
  {
    "id": "P821029",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "关于 IS-IS 路由器级别的描述，正确的有哪些？",
    "options": [
      "Level-1 路由器只与同区域的 Level-1 路由器建立 Level-1 邻居",
      "Level-2 路由器可以与不同区域的 Level-2 路由器建立邻居",
      "Level-1-2 路由器同时维护 Level-1 和 Level-2 两个链路状态数据库",
      "Level-1 路由器直接与 Level-2 路由器建立邻居关系"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Level-1 邻居要求区域 ID 一致，Level-2 邻居可以跨区域建立，Level-1-2 路由器分别维护两个独立的 LSDB 并参与两个层次的 SPF 计算。Level-1 与 Level-2 之间不会直接形成邻居。因此 A、B、C 正确。"
  },
  {
    "id": "P821030",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 使用的 PDU 类型包括哪些？",
    "options": ["IIH", "LSP", "CSNP", "PSNP"],
    "answer": ["A", "B", "C", "D"],
    "explain": "IS-IS 共有四类 PDU：IIH（Hello PDU，用于建立和维持邻居）、LSP（链路状态 PDU，承载链路状态信息）、CSNP（全序列号 PDU，描述数据库摘要）和 PSNP（部分序列号 PDU，用于请求和确认）。因此四项均正确。"
  },
  {
    "id": "P821031",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "关于 IS-IS NET 地址配置，下列做法正确的有哪些？",
    "options": [
      "同一区域内的 Level-1 路由器区域 ID 必须相同",
      "System ID 在同一区域内必须唯一",
      "SEL 字段固定为 00",
      "System ID 必须等于设备的 IP 地址"
    ],
    "answer": ["A", "B", "C"],
    "explain": "NET 的区域 ID 决定路由器所属区域，同区域 Level-1 路由器区域 ID 必须一致；System ID 在区域内唯一标识路由器，通常由 Router-ID 转换而来，但不要求等于接口 IP 地址；SEL 固定为 00。因此 A、B、C 正确。"
  },
  {
    "id": "P821032",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "关于 IS-IS 的 DIS 与 OSPF 的 DR，下列说法正确的有哪些？",
    "options": [
      "IS-IS 的 DIS 默认优先级为 64，OSPF 的 DR 默认优先级为 1",
      "IS-IS 的 DIS 选举是抢占的，OSPF 的 DR 选举不是抢占的",
      "IS-IS 没有备份 DIS 的概念，OSPF 有 BDR",
      "IS-IS 中只有 DIS 会周期性发送 CSNP"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "IS-IS 的 DIS 默认优先级 64 且选举具有抢占性，没有 Backup DIS；OSPF 的 DR 默认优先级 1，选举不抢占且存在 BDR。在广播网络中，DIS 负责周期性发送 CSNP 以同步数据库。因此四项均正确。"
  },
  {
    "id": "P821033",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "下列关于 IS-IS 开销（Cost）的描述，正确的有哪些？",
    "options": [
      "接口默认开销为 10",
      "可以通过 isis cost 命令手工修改接口开销",
      "支持窄度量（narrow）和宽度量（wide）两种模式",
      "开销值不能为 0"
    ],
    "answer": ["A", "B", "C"],
    "explain": "IS-IS 接口默认开销为 10，可通过 isis cost 命令修改，并支持 narrow 与 wide 两种度量模式（wide 模式支持更大取值范围和 TLV 扩展）。开销值可以配置为 0，表示该链路不参与 SPF 计算。因此 A、B、C 正确。"
  },
  {
    "id": "P821034",
    "type": "judge",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 协议报文直接封装在数据链路层，不需要 IP 协议支持，因此具有较好的扩展性。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IS-IS 最初设计用于 OSI 的 CLNS 网络，报文直接封装在二层帧中，不依赖 IP 协议。这一特性使其不受 IP 协议演进的影响，并且通过 TLV 结构易于扩展，因而扩展性优于 OSPF。"
  },
  {
    "id": "P821035",
    "type": "judge",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 的 Level-1-2 路由器会将自己所在区域的路由以 ATT 位置位的方式通告给 Level-1 路由器。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Level-1-2 路由器在 Level-1 LSP 中设置 ATT（Attached）位，Level-1 路由器据此产生一条指向该 Level-1-2 路由器的默认路由，用于访问区域外目的地。这是 IS-IS 实现区域间可达的重要机制。"
  },
  {
    "id": "P821036",
    "type": "fill",
    "chapter": "IS-IS路由协议",
    "stem": "在华为 VRP 的 IS-IS 进程视图下，配置本路由器 NET 地址的命令关键字是 ______。",
    "options": [],
    "answer": ["network-entity", "network-entity "],
    "explain": "在 IS-IS 进程视图下使用 network-entity 命令配置 NET 地址，格式如 network-entity 49.0001.0000.0000.0001.00。NET 由区域 ID、System ID 和 SEL 三部分组成，SEL 固定为 00。"
  },
  {
    "id": "P821037",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP 使用哪个传输层协议和端口号建立对等体连接？",
    "options": ["UDP 179", "TCP 179", "TCP 89", "UDP 89"],
    "answer": "B",
    "explain": "BGP 是一种路径矢量协议，使用 TCP 建立可靠的传输连接，标准端口号为 179。TCP 的可靠性使 BGP 无需自行实现重传和确认机制。因此选 B。"
  },
  {
    "id": "P821038",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "运行 EBGP 的设备发送报文时，默认的 TTL 值是多少？",
    "options": ["1", "64", "255", "128"],
    "answer": "A",
    "explain": "EBGP 报文默认 TTL 为 1，因此 EBGP 对等体通常必须直连。若需跨越设备建立 EBGP 邻居，可使用 peer ebgp-max-hop 命令增大 TTL。IBGP 报文默认 TTL 为 255。因此选 A。"
  },
  {
    "id": "P821039",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP 邻居状态机中，路由器已经发送 Open 报文并收到对方 Open 报文、正在等待 KeepAlive 的状态是？",
    "options": ["OpenSent", "OpenConfirm", "Established", "Active"],
    "answer": "B",
    "explain": "OpenConfirm 状态下双方已成功交换 Open 报文，正在等待对方发送 KeepAlive 或 Notification 报文。收到 KeepAlive 后进入 Established 状态，开始交换路由信息。因此选 B。"
  },
  {
    "id": "P821040",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP 默认的 KeepAlive 报文发送周期和 Hold Time 分别是？",
    "options": ["30 秒和 90 秒", "60 秒和 180 秒", "60 秒和 120 秒", "180 秒和 60 秒"],
    "answer": "B",
    "explain": "BGP 的 KeepAlive 报文默认每 60 秒发送一次，Hold Time 默认为 180 秒（通常为 KeepAlive 的 3 倍）。若在 Hold Time 内未收到任何报文，邻居关系将中断。因此选 B。"
  },
  {
    "id": "P821041",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP 的 Origin 属性中，通过 network 命令注入的路由其 Origin 值为？",
    "options": ["IGP（i）", "EGP（e）", "Incomplete（?）", "Unknown"],
    "answer": "A",
    "explain": "Origin 属性有三种取值：IGP（i）表示通过 network 命令注入到 BGP 的路由，EGP（e）表示通过 EGP 学到的路由，Incomplete（?）表示通过 import-route 引入的路由。选路时优先级为 i 优于 e 优于 ?。因此选 A。"
  },
  {
    "id": "P821042",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "华为设备上 BGP 选路时，最先比较的属性是？",
    "options": ["Local_Preference", "Weight", "AS_Path", "MED"],
    "answer": "B",
    "explain": "华为设备的 BGP 选路顺序为：Weight（默认 0，越大越优）、Local_Preference（默认 100，越大越优）、本地始发路由、AS_Path 长度、Origin、MED、EBGP 优于 IBGP、IGP 开销、Router-ID。Weight 是华为私有属性，优先级最高。因此选 B。"
  },
  {
    "id": "P821043",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "BGP 的 Local_Preference 属性默认值和比较规则是？",
    "options": [
      "默认 0，数值越大越优",
      "默认 100，数值越大越优",
      "默认 100，数值越小越优",
      "默认 0，数值越小越优"
    ],
    "answer": "B",
    "explain": "Local_Preference 默认值为 100，数值越大越优先，用于在 AS 内部影响出 AS 的流量选路。该属性仅在 IBGP 邻居间传递，不会通告给 EBGP 邻居。因此选 B。"
  },
  {
    "id": "P821044",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "为了防止路由黑洞，IBGP 对等体之间通常采用哪种方式保证路由可达？",
    "options": [
      "IBGP 全互联、路由反射器或联盟",
      "全部使用 EBGP 互联",
      "关闭同步功能并只在边界路由器上运行 BGP",
      "使用静态路由替代 BGP"
    ],
    "answer": "A",
    "explain": "BGP 规定从 IBGP 学到的路由不再转发给其他 IBGP 邻居，因此需通过 IBGP 全互联、路由反射器（RR）或联盟（Confederation）保证 IBGP 路由在 AS 内传递完整，避免路由黑洞。因此选 A。"
  },
  {
    "id": "P821045",
    "type": "single",
    "chapter": "BGP基础与选路",
    "stem": "在 BGP 路由反射器中，从非客户端（non-client）学到的路由会反射给哪些邻居？",
    "options": [
      "所有客户端和非客户端",
      "只反射给客户端",
      "只反射给其他非客户端",
      "不进行反射"
    ],
    "answer": "B",
    "explain": "路由反射器的反射规则为：从客户端学到的路由反射给所有客户端和非客户端；从非客户端（含 EBGP）学到的路由只反射给客户端。这样可以避免客户端之间的全互联需求。因此选 B。"
  },
  {
    "id": "P821046",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "BGP 通过哪个属性来检测和防止 AS 之间的路由环路？",
    "options": ["Next_Hop", "AS_Path", "MED", "Origin"],
    "answer": "B",
    "explain": "AS_Path 属性记录了路由经过的所有 AS 号，路由器收到携带本 AS 号的路由时会直接丢弃，从而防止 EBGP 环路。该属性还可用于选路（路径越短越优）和路由过滤。因此选 B。"
  },
  {
    "id": "P821047",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "BGP 的报文类型包括哪些？",
    "options": ["Open", "Update", "Notification", "KeepAlive"],
    "answer": ["A", "B", "C", "D"],
    "explain": "BGP 共有五类报文：Open 用于协商参数建立邻居，Update 用于通告和撤销路由，Notification 用于报告错误并终止邻居，KeepAlive 用于维持邻居，Route-refresh 用于请求重新发送路由。因此四项均正确。"
  },
  {
    "id": "P821048",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "关于 IBGP 与 EBGP 的差异，下列说法正确的有哪些？",
    "options": [
      "EBGP 报文默认 TTL 为 1，IBGP 报文默认 TTL 为 255",
      "从 IBGP 学到的路由不会再通告给其他 IBGP 邻居",
      "EBGP 邻居之间通常要求直连",
      "IBGP 邻居之间必须直连"
    ],
    "answer": ["A", "B", "C"],
    "explain": "EBGP 默认 TTL 为 1 要求直连，IBGP 默认 TTL 为 255 可跨多跳建立。BGP 的水平分割规则要求 IBGP 学到的路由不再传给其他 IBGP 邻居，但可以传给 EBGP 邻居。IBGP 邻居并不要求直连。因此 A、B、C 正确。"
  },
  {
    "id": "P821049",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "关于 BGP 路由反射器（RR）中的角色，下列说法正确的有哪些？",
    "options": [
      "Reflector 是配置了路由反射功能的设备",
      "Client 是与 Reflector 建立 IBGP 且被指定为客户端的路由器",
      "Non-client 是与 Reflector 建立 IBGP 但未被指定为客户端的路由器",
      "从客户端学到的路由会反射给所有客户端和非客户端"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "RR 角色分为 Reflector（反射器本身）、Client（客户端）和 Non-client（非客户端）。反射规则为：从客户端学到的路由反射给所有客户端与非客户端；从非客户端学到的路由只反射给客户端。因此四项均正确。"
  },
  {
    "id": "P821050",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "关于 BGP 的 Next_Hop 属性，下列说法正确的有哪些？",
    "options": [
      "EBGP 邻居之间通告路由时，Next_Hop 通常被改为本地出接口地址",
      "IBGP 邻居之间通告从 EBGP 学到的路由时，默认不修改 Next_Hop",
      "使用 next-hop-local 命令可将 Next_Hop 改为本地地址",
      "从 EBGP 学到的路由通告给 EBGP 邻居时 Next_Hop 保持不变"
    ],
    "answer": ["A", "B", "C"],
    "explain": "EBGP 向 EBGP 通告路由时通常将 Next_Hop 改为本地出接口地址；IBGP 向 IBGP 通告从 EBGP 学到的路由时默认保持原 Next_Hop，可能导致下一跳不可达，需使用 next-hop-local 修改为本地地址。因此 A、B、C 正确。"
  },
  {
    "id": "P821051",
    "type": "multi",
    "chapter": "BGP基础与选路",
    "stem": "BGP 邻居无法建立或频繁中断的常见原因有哪些？",
    "options": [
      "邻居地址不可达或路由缺失",
      "Open 报文中 AS 号、版本等参数协商不一致",
      "认证配置不一致",
      "EBGP 跨设备建立时未配置 ebgp-max-hop"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "BGP 建立邻居需要 TCP 179 连接成功，因此要求邻居地址可达；Open 报文中的版本、AS 号、Hold Time、Router-ID 等参数必须能够协商；认证不一致会导致报文被丢弃；EBGP 跨设备建立时必须用 peer ebgp-max-hop 调整 TTL。因此四项均正确。"
  },
  {
    "id": "P821052",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "BGP 的 Weight 属性是华为设备的私有属性，取值范围为 0 到 65535，数值越大越优先。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Weight 是华为设备私有的 BGP 属性，默认值为 0，取值范围 0～65535，数值越大越优先，并且只在本地有效、不会传递给任何邻居。它在华为选路顺序中优先级最高。"
  },
  {
    "id": "P821053",
    "type": "judge",
    "chapter": "路由控制与策略路由",
    "stem": "BGP 选路时，在其他条件相同的情况下，MED 值越小越优先。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "MED（Multi-Exit Discriminator）默认值为 0，数值越小越优先，用于影响相邻 AS 进入本 AS 的流量选路。MED 只在相邻 AS 之间传递，并且默认只在同一 AS 内比较。"
  },
  {
    "id": "P821054",
    "type": "fill",
    "chapter": "BGP基础与选路",
    "stem": "在华为 VRP 中，创建 BGP 进程并指定本地 AS 号的命令是 bgp ______（填写 AS 号）。",
    "options": [],
    "answer": ["100"],
    "explain": "在系统视图下执行 bgp as-number 即可创建并进入 BGP 视图，本处 AS 号为 100，完整命令为 bgp 100。AS 号取值范围为 1～4294967295。"
  },
  {
    "id": "P821055",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "在华为 VRP 中，关于 route-policy 的匹配规则，下列说法正确的是？",
    "options": [
      "所有节点都匹配失败时默认放行",
      "节点按序号从小到大依次匹配，匹配成功后执行 permit 或 deny 动作",
      "节点按序号从大到小匹配",
      "只要有一条 if-match 匹配成功即认为整个节点匹配成功"
    ],
    "answer": "B",
    "explain": "route-policy 由多个节点组成，按节点序号从小到大依次匹配。同一节点内多条 if-match 之间是“与”的关系，全部满足才算匹配成功，然后执行该节点的 permit 或 deny 动作。所有节点都未匹配时默认拒绝。因此选 B。"
  },
  {
    "id": "P821056",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "关于 ip-prefix-list 的配置 ip ip-prefix test index 10 permit 10.0.0.0 24，其匹配范围是？",
    "options": [
      "只匹配 10.0.0.0/24 这一条路由",
      "匹配所有 10.0.0.0/24 及其子网路由",
      "匹配 10.0.0.0/8 的所有路由",
      "匹配掩码长度大于 24 的路由"
    ],
    "answer": "A",
    "explain": "ip-prefix 中未配置 greater-equal 和 less-equal 时，表示只匹配前缀和掩码长度都完全相同的路由，即仅匹配 10.0.0.0/24。若需要匹配掩码范围，需使用 ge 和 le 参数。因此选 A。"
  },
  {
    "id": "P821057",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "在 ip-prefix-list 中配置 ge 24 le 28，表示匹配的掩码长度范围是？",
    "options": ["24 到 28，但不包含 24", "24 到 28，包含 24 和 28", "大于 28", "小于 24"],
    "answer": "B",
    "explain": "ip-prefix 中的 greater-equal（ge）和 less-equal（le）表示掩码长度范围，ge 24 le 28 表示匹配掩码长度 24 到 28 的路由（含端点）。需要注意 ge 值必须大于等于前缀长度。因此选 B。"
  },
  {
    "id": "P821058",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "PBR（策略路由）与普通路由表转发的根本区别是？",
    "options": [
      "PBR 根据目的地址转发，路由表根据源地址转发",
      "PBR 依据策略优先于路由表进行转发决策，可基于源地址、协议等条件",
      "PBR 只能用于 BGP 路由",
      "PBR 不需要配置下一跳"
    ],
    "answer": "B",
    "explain": "PBR 通过 policy-based-route 基于源地址、报文长度、协议类型等条件匹配流量，并强制指定下一跳或出接口，其优先级高于路由表查找。普通转发则仅依据目的地址查询路由表。因此选 B。"
  },
  {
    "id": "P821059",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "黑洞路由（Blackhole Route）在华为设备上通常通过什么方式实现？",
    "options": [
      "将路由下一跳指向 NULL 0 接口",
      "将路由下一跳指向 Loopback 接口",
      "关闭接口",
      "配置静态 ARP"
    ],
    "answer": "A",
    "explain": "黑洞路由将匹配路由的报文下一跳指向 NULL 0 接口，报文到达后被直接丢弃，常用于汇总路由防环或防止流量进入不可达网段。例如 ip route-static 10.0.0.0 8 NULL 0。因此选 A。"
  },
  {
    "id": "P821060",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "filter-policy 与 route-policy 的主要区别是？",
    "options": [
      "filter-policy 只能过滤路由，不能修改路由属性；route-policy 可以过滤并修改属性",
      "filter-policy 可以修改路由属性",
      "route-policy 只能用于 BGP",
      "两者完全相同"
    ],
    "answer": "A",
    "explain": "filter-policy 使用 ACL、地址前缀列表等作为过滤条件，只能对路由进行允许或拒绝，无法修改路由属性。route-policy 则可以通过 apply 子句修改路由属性（如 cost、tag、community 等），功能更强大。因此选 A。"
  },
  {
    "id": "P821061",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "在 route-policy 中，如果不配置任何 if-match 子句，该节点的含义是？",
    "options": [
      "匹配所有路由",
      "不匹配任何路由",
      "只匹配默认路由",
      "该节点无效"
    ],
    "answer": "A",
    "explain": "route-policy 节点中若不配置任何 if-match 语句，则表示匹配所有路由，直接执行该节点的 permit 或 deny 动作。这常用于配置一个兜底节点。因此选 A。"
  },
  {
    "id": "P821062",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "可用于路由过滤或匹配的工具包括哪些？",
    "options": ["ACL", "ip-prefix-list", "as-path-filter", "community-filter"],
    "answer": ["A", "B", "C", "D"],
    "explain": "ACL 可匹配报文或路由的地址信息；ip-prefix-list 专门匹配路由前缀和掩码长度；as-path-filter 使用正则表达式匹配 BGP 的 AS_Path 属性；community-filter 匹配 BGP 团体属性。它们都可作为 route-policy 或 filter-policy 的匹配条件。因此四项均正确。"
  },
  {
    "id": "P821063",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于 route-policy 的 if-match 与 apply 子句，下列说法正确的有哪些？",
    "options": [
      "同一节点内多条 if-match 之间是“与”的关系",
      "apply 子句用于修改路由属性，如 cost、tag、community",
      "不同节点之间是“或”的关系，按序号从小到大匹配",
      "permit 节点匹配成功后仍会继续匹配后续节点"
    ],
    "answer": ["A", "B", "C"],
    "explain": "route-policy 同一节点内多条 if-match 必须全部满足（与关系），节点之间按序号由小到大依次匹配（或关系），一旦某节点匹配成功即执行动作并退出，不再匹配后续节点。apply 用于设置属性。因此 A、B、C 正确。"
  },
  {
    "id": "P821064",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于策略路由（PBR）的描述，正确的有哪些？",
    "options": [
      "PBR 的匹配条件可以包括源地址、目的地址、协议类型和报文长度",
      "PBR 的动作可以是设置下一跳、出接口或优先级",
      "PBR 的优先级高于路由表转发",
      "PBR 只能应用于接口的入方向"
    ],
    "answer": ["A", "B", "C"],
    "explain": "PBR 可通过 ACL 等条件匹配源地址、目的地址、协议类型、报文长度等，动作包括 apply output-interface、apply ip-address next-hop、apply precedence 等，其处理优先于路由表查找。PBR 支持接口入方向以及本地策略路由等应用方式。因此 A、B、C 正确。"
  },
  {
    "id": "P821065",
    "type": "multi",
    "chapter": "路由控制与策略路由",
    "stem": "关于 import-route 命令，下列说法正确的有哪些？",
    "options": [
      "可将直连、静态、OSPF、IS-IS 等协议的路由引入到 BGP 中",
      "引入路由时 Origin 属性默认为 Incomplete（?）",
      "可以在引入时通过 route-policy 过滤或修改属性",
      "引入后这些路由的 Origin 属性为 IGP（i）"
    ],
    "answer": ["A", "B", "C"],
    "explain": "import-route 用于将其他协议的路由引入到当前协议进程中，BGP 中引入的路由 Origin 默认为 Incomplete（?），并可通过 route-policy 进行过滤和属性修改。通过 network 命令注入的路由 Origin 才为 IGP（i）。因此 A、B、C 正确。"
  },
  {
    "id": "P821066",
    "type": "judge",
    "chapter": "路由控制与策略路由",
    "stem": "route-policy 中所有节点都未匹配成功时，默认动作是 permit，即允许该路由通过。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "route-policy 的默认行为是：若所有节点的 if-match 都未匹配成功，则默认拒绝（deny），即不执行任何 apply 动作也不放行。因此在做路由过滤时通常需要配置一个 permit node 兜底节点。"
  },
  {
    "id": "P821067",
    "type": "judge",
    "chapter": "路由控制与策略路由",
    "stem": "在 ip-prefix-list 中，index 序号越小匹配优先级越高，匹配成功后不再继续匹配后续节点。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "ip-prefix-list 由多个 index 节点组成，按 index 由小到大依次匹配，一旦某节点匹配成功即执行 permit 或 deny 动作并结束匹配，不再查看后续节点。若所有节点均未匹配则默认拒绝。"
  },
  {
    "id": "P821068",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "黑洞路由的作用是将匹配的流量引导到 NULL 0 接口并丢弃，常用于防止路由环路。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "黑洞路由把匹配报文的下一跳设置为 NULL 0，报文进入设备后被直接丢弃。它常与路由汇总配合使用，防止因汇总产生的、实际不存在的网段流量被转发形成环路。"
  },
  {
    "id": "P821069",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "在 OSPF 中，Type 4 ASBR-Summary LSA 的作用是？",
    "options": [
      "描述 ASBR 的位置，用于区域外路由器计算到 ASBR 的路由",
      "描述区域内的网段信息",
      "描述由 DR 产生的伪节点",
      "描述外部路由的开销"
    ],
    "answer": "A",
    "explain": "Type 4 LSA 由 ABR 产生，用于向其他区域通告 ASBR 的位置信息。只有知道了 ASBR 的位置，其他区域的路由器才能正确计算到达 Type 5 外部路由的下一跳。Type 5 本身描述外部路由及其开销。因此选 A。"
  },
  {
    "id": "P821070",
    "type": "single",
    "chapter": "路由控制与策略路由",
    "stem": "BGP 联盟（Confederation）解决的核心问题是？",
    "options": [
      "减少 AS 内部 IBGP 全互联的需求，同时对外仍表现为一个 AS",
      "加快 BGP 收敛速度",
      "实现路由聚合",
      "实现 BGP 认证"
    ],
    "answer": "A",
    "explain": "联盟将一个大的 AS 划分为若干子 AS，子 AS 之间建立类似 EBGP 的联盟 EBGP 邻居，从而减少 IBGP 全互联的数量。对外部 AS 而言，整个联盟仍被视为同一个 AS。因此选 A。"
  },
  {
    "id": "P821071",
    "type": "judge",
    "chapter": "BGP基础与选路",
    "stem": "OSPF 中 Router-ID 必须在整个 OSPF 域内唯一，若未手工配置则通常选取最大的 Loopback 接口地址。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Router-ID 用于唯一标识 OSPF 域内的路由器，格式为点分十进制，必须全域唯一。若未手工配置，设备会自动选取所有 Loopback 接口中最大的 IP 地址作为 Router-ID，若无 Loopback 则选取最大的物理接口地址。"
  },
  {
    "id": "P821072",
    "type": "fill",
    "chapter": "路由控制与策略路由",
    "stem": "在 BGP 视图下，为使路由反射器能够把从一个客户端学到的路由反射给其他客户端，需要执行的命令是 ______ between-clients。",
    "options": [],
    "answer": ["reflect"],
    "explain": "命令 reflect between-clients 用于允许客户端之间的路由互相反射，在华为 VRP 上该功能默认已开启，因此通常无需手工配置，若被关闭可用此命令重新启用。配套命令 peer reflect-client 用于指定客户端角色。"
  }
];