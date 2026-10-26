window.BANK_HCIP_C = [
  {
    "id": "PC001",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中由 DR 产生、用于描述广播网络上网段内所有路由器信息的 LSA 是？",
    "options": ["1 类 Router LSA", "2 类 Network LSA", "3 类 Summary LSA", "5 类 External LSA"],
    "answer": "B",
    "explain": "2 类 Network LSA 由 DR 产生，描述该广播网段（或 NBMA 网段）上所有已建立邻接关系的路由器，并携带网段掩码，只在所属区域内泛洪。1 类 Router LSA 由每台路由器各自产生，描述自身链路状态。"
  },
  {
    "id": "PC002",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "3 类 Summary LSA 由下列哪类路由器产生？",
    "options": ["ABR", "ASBR", "DR", "任意内部路由器"],
    "answer": "A",
    "explain": "3 类 Summary LSA 由 ABR（区域边界路由器）产生，用于把一个区域内的路由通告到其他区域，实现区域间路由传递。ASBR 负责产生 5 类 External LSA 描述外部引入的路由。"
  },
  {
    "id": "PC003",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "下列关于 OSPF 中 Stub 区域的描述，正确的有哪些？（多选）",
    "options": [
      "不允许 4 类 LSA 和 5 类 LSA 进入",
      "ABR 会向该区域下发一条 3 类默认路由",
      "区域内的路由器不能是 ASBR",
      "允许 7 类 LSA 在本区域泛洪"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Stub 区域通过拒绝 4 类、5 类 LSA 来减少区域内路由表规模，ABR 自动下发 3 类默认路由保证区域能访问外部；由于不允许 5 类 LSA，区域内路由器也不能充当 ASBR 引入外部路由。允许 7 类 LSA 泛洪的是 NSSA 区域。"
  },
  {
    "id": "PC004",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "NSSA 区域中引入的外部路由以几类 LSA 承载，并可由 ABR 转换为几类 LSA？",
    "options": ["7 类承载，转换为 5 类", "5 类承载，转换为 7 类", "3 类承载，转换为 5 类", "7 类承载，转换为 3 类"],
    "answer": "A",
    "explain": "NSSA 区域允许引入外部路由，这些外部路由以 7 类 NSSA-External LSA 在本区域内泛洪；当它们需要进入骨干区域时，由 ABR 将 7 类转换为 5 类 External LSA 再通告出去。"
  },
  {
    "id": "PC005",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "Totally Stub 区域与 Stub 区域的主要区别是？",
    "options": [
      "Totally Stub 连 3 类 LSA 也一并拒绝，只保留一条 3 类默认路由",
      "Totally Stub 允许 5 类 LSA 进入",
      "Totally Stub 区域内的路由器必须是 ASBR",
      "两者没有区别，只是名称不同"
    ],
    "answer": "A",
    "explain": "Totally Stub（完全末梢）区域在 Stub 的基础上进一步拒绝 3 类 LSA，区域内路由器只保留 ABR 下发的一条 3 类默认路由，路由表被压到最小。它比 Totally NSSA 更严格，不过滤 3 类的就是普通 Stub。"
  },
  {
    "id": "PC006",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中 ASBR 与 ABR 的区别是？",
    "options": [
      "ASBR 负责引入外部路由，ABR 负责连接不同区域",
      "ASBR 只能位于骨干区域，ABR 必须位于非骨干区域",
      "ASBR 产生 3 类 LSA，ABR 产生 5 类 LSA",
      "两者是同一角色的不同叫法"
    ],
    "answer": "A",
    "explain": "ASBR（自治系统边界路由器）负责把 OSPF 域外的路由通过 import-route 引入，产生 5 类（或 7 类）External LSA；ABR（区域边界路由器）同时连接骨干区域和其他区域，负责产生 3 类 Summary LSA 完成区域间路由传递。一台路由器可以同时是 ABR 和 ASBR。"
  },
  {
    "id": "PC007",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 虚连接（Virtual Link）的主要用途是？",
    "options": [
      "把与骨干区域不连续的区域通过一个中转区域逻辑上接入骨干区域",
      "提高链路带宽",
      "替代 DR 选举",
      "加密 OSPF 报文"
    ],
    "answer": "A",
    "explain": "当某个区域没有物理链路直连骨干区域 0 时，可以通过虚连接穿过一个中转区域，在逻辑上把该区域接入骨干区域，修复骨干区域不连续的问题。虚连接的两端都必须是 ABR，且中转区域不能是 Stub 区域。"
  },
  {
    "id": "PC008",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 支持的几种网络类型中，Hello 间隔为 10 秒、Dead 间隔为 40 秒的有哪些？（多选）",
    "options": ["Broadcast（广播）", "Point-to-Point（点到点）", "NBMA", "Point-to-Multipoint（点到多点）"],
    "answer": ["A", "B"],
    "explain": "Broadcast 和 Point-to-Point 类型的 Hello 间隔默认为 10 秒、Dead 为 40 秒；NBMA 和 Point-to-Multipoint 类型的默认 Hello 为 30 秒、Dead 为 120 秒。邻居双方的定时器必须一致才能建立邻居关系。"
  },
  {
    "id": "PC009",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "在 OSPF 中，若某接口的 DR 优先级被配置为 0，则意味着？",
    "options": ["该接口不参与 DR/BDR 选举", "该接口一定成为 DR", "该接口一定成为 BDR", "该接口优先级最高"],
    "answer": "A",
    "explain": "DR 优先级取值范围为 0～255，默认值为 1，数值越大越优先。将优先级配置为 0 表示该接口放弃参与 DR/BDR 选举，只能成为 DRother。"
  },
  {
    "id": "PC010",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 的 DR 选举具有下列哪个特点？",
    "options": ["选举完成后不能抢占，新加入的高优先级路由器不会立即成为 DR", "后加入的高优先级路由器会立即抢占 DR", "选举每 10 秒重新进行一次", "DR 由 Router-ID 最小的路由器担任"],
    "answer": "A",
    "explain": "OSPF 的 DR/BDR 选举是非抢占的：选举在网段初始化时完成，此后即使有更高优先级的路由器加入，也不会抢占现有 DR/BDR，除非 DR 失效才会重新选举。相同优先级时比较 Router-ID，数值大者优先。"
  },
  {
    "id": "PC011",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中 DRother 路由器之间建立的邻居状态是？",
    "options": ["2-Way", "Full", "ExStart", "Loading"],
    "answer": "A",
    "explain": "在广播网络中，DRother 之间不需要交换链路状态信息，因此只停留在 2-Way 状态；只有 DRother 与 DR/BDR 之间才会形成 Full 邻接关系。这正是 OSPF 减少邻接数量、降低泛洪开销的机制。"
  },
  {
    "id": "PC012",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中 DR 使用哪个组播地址向所有 OSPF 路由器发送报文？",
    "options": ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.13"],
    "answer": "A",
    "explain": "224.0.0.5 是 AllSPFRouters，所有运行 OSPF 的接口都会监听该地址；224.0.0.6 是 AllDRouters，只有 DR/BDR 监听。224.0.0.9 是 RIPv2 使用，224.0.0.13 是 PIM 使用。"
  },
  {
    "id": "PC013",
    "type": "judge",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 的区域认证与接口认证可以同时配置，接口认证的优先级高于区域认证。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "正确。OSPF 支持区域认证和接口认证两种方式，当二者同时配置时以接口认证为准，因为接口认证的粒度更细、优先级更高。认证密码不一致会导致邻居关系无法建立。"
  },
  {
    "id": "PC014",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 的 LSA 在 LSDB 中老化到多少秒后会被删除？",
    "options": ["1800 秒", "3600 秒", "7200 秒", "360 秒"],
    "answer": "B",
    "explain": "LSA 的 MaxAge 为 3600 秒，到期后被从 LSDB 中删除；LSA 会每 1800 秒（LSRefreshTime）被重新泛洪刷新一次，只要路由器存活，LSA 就不会老化到 3600 秒。"
  },
  {
    "id": "PC015",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 计算接口开销时，默认参考带宽是多少？",
    "options": ["10 Mbps", "100 Mbps", "1000 Mbps", "10000 Mbps"],
    "answer": "B",
    "explain": "OSPF 的接口开销 = 参考带宽 ÷ 接口带宽，参考带宽默认 100 Mbps。因此在默认情况下千兆接口的开销被算作 1，无法区分千兆与万兆链路，实际部署中常用 bandwidth-reference 命令调大参考带宽。"
  },
  {
    "id": "PC016",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "两台路由器建立 OSPF 邻居时，如果双方接口 MTU 不一致，邻居状态通常会停留在？",
    "options": ["Down", "Init", "ExStart", "Full"],
    "answer": "C",
    "explain": "MTU 不一致时，双方在 DD 报文交互阶段无法就主从关系达成一致，邻居关系会卡在 ExStart（或 Exchange）状态而无法到达 Full。这是 OSPF 排障中的经典问题，可通过统一 MTU 或在接口下忽略 MTU 检查解决。"
  },
  {
    "id": "PC017",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "关于 OSPF 路由聚合，下列描述正确的有哪些？（多选）",
    "options": [
      "abr-summary 用于在 ABR 上对区域间路由进行聚合",
      "asbr-summary 用于在 ASBR 上对引入的外部路由进行聚合",
      "聚合可以有效减少 LSDB 和路由表的规模",
      "聚合只能在骨干区域内的路由器上配置"
    ],
    "answer": ["A", "B", "C"],
    "explain": "abr-summary 在 ABR 上聚合 3 类 LSA 所描述的区域间路由；asbr-summary 在 ASBR 上聚合引入的 5 类/7 类外部路由。聚合能显著减小 LSDB 与路由表规模、抑制路由震荡，但并不限定只能配置在骨干区域。"
  },
  {
    "id": "PC018",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 引入的两类外部路由中，1 类外部路由（Type 1）的特点是？",
    "options": [
      "开销等于外部开销加上到达 ASBR 的内部开销",
      "开销只计算外部开销，不叠加内部开销",
      "永远优于 2 类外部路由",
      "不能被路由聚合"
    ],
    "answer": "A",
    "explain": "Type 1 外部路由的开销为外部开销与到达 ASBR 的内部开销之和，因此更接近真实路径代价；Type 2 只比较外部开销，默认不叠加内部开销。默认情况下引入的是 Type 2。"
  },
  {
    "id": "PC019",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 定义了哪几种报文类型？（多选）",
    "options": ["Hello", "DD（Database Description）", "LSR / LSU / LSAck", "KeepAlive"],
    "answer": ["A", "B", "C"],
    "explain": "OSPF 共定义五种报文：Hello 用于发现和维持邻居、DD 用于描述 LSDB 摘要、LSR 用于请求缺失的 LSA、LSU 用于携带完整 LSA 泛洪、LSAck 用于确认收到 LSA。KeepAlive 是 BGP 的报文类型，OSPF 依靠 Hello 维持邻居。"
  },
  {
    "id": "PC020",
    "type": "judge",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 的进程号只在本地有效，同一台设备上不同进程之间相互独立，邻居双方的进程号可以不同。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "正确。OSPF 进程号具有本地意义，只用于在本设备上区分不同的 OSPF 实例，不参与报文交互。因此两台路由器即使进程号不同也能建立邻居，真正必须一致的是 Area ID、定时器、认证等参数。"
  },
  {
    "id": "PC021",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "在 OSPF 中，Router LSA（1 类）的作用范围是？",
    "options": ["只在产生它的本区域内泛洪", "在整个自治系统内泛洪", "只在骨干区域内泛洪", "只发送给邻居路由器"],
    "answer": "A",
    "explain": "1 类 Router LSA 由区域内每台路由器产生，描述自身的接口与链路状态，只在本区域内泛洪。跨区域传播由 ABR 转换为 3 类 Summary LSA 完成，这也是 OSPF 区域化设计缩小泛洪范围的关键。"
  },
  {
    "id": "PC022",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "查看 OSPF 邻居状态与邻接关系的命令是？",
    "options": ["display ospf peer", "display ospf interface", "display ospf lsdb", "display ospf routing"],
    "answer": "A",
    "explain": "display ospf peer 用于查看邻居的 Router-ID、状态、优先级、DR/BDR 角色等信息，是排查邻居关系最常用的命令。display ospf interface 查看接口的 OSPF 参数，display ospf lsdb 查看链路状态数据库，display ospf routing 查看 OSPF 计算出的路由。"
  },
  {
    "id": "PC023",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中 NBMA 网络类型的特点是？",
    "options": [
      "支持多台路由器接入但默认不发送组播报文，需要手工指定邻居",
      "链路层天然支持广播，无需指定邻居",
      "只能连接两台路由器",
      "默认 Hello 间隔为 10 秒"
    ],
    "answer": "A",
    "explain": "NBMA（非广播多路访问）网络如帧中继、ATM 逻辑上支持多台路由器接入，但链路层不具备广播能力，因此 OSPF 默认不能通过组播发现邻居，需要手工用 peer 命令指定邻居地址，其默认 Hello/Dead 为 30/120 秒。"
  },
  {
    "id": "PC024",
    "type": "judge",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中所有非骨干区域都必须与骨干区域 Area 0 直接相连，否则需要通过虚连接来修复。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "正确。OSPF 规定区域间路由必须经过骨干区域转发，因此每个非骨干区域都应直接连接 Area 0。当物理拓扑无法满足（如区域被分割）时，可用虚连接穿过中转区域逻辑接入骨干区域。"
  },
  {
    "id": "PC025",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 的 Router-ID 选取顺序是？",
    "options": [
      "手工配置优先，其次选最大的 Loopback 接口地址，最后选最大的物理接口地址",
      "总是选最小的物理接口地址",
      "总是选最大的物理接口地址",
      "随机生成"
    ],
    "answer": "A",
    "explain": "OSPF 优先使用 router-id 命令手工指定的值；若未指定，则从 Loopback 接口地址中选取数值最大者；若仍无 Loopback 接口，则从物理接口地址中选取最大者。Router-ID 改变需要重启进程才能生效。"
  },
  {
    "id": "PC026",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "在 OSPF 中，LSAck 报文的作用是？",
    "options": [
      "对收到的 LSA 进行确认，保证泛洪可靠",
      "请求缺失的 LSA",
      "描述本地 LSDB 摘要",
      "发现和维护邻居关系"
    ],
    "answer": "A",
    "explain": "LSAck 用于对收到的 LSU 中的 LSA 逐条确认，实现 OSPF 泛洪的可靠性机制（隐式确认或显式确认）。LSR 用于请求缺失 LSA，DD 用于描述 LSDB 摘要，Hello 用于发现与维持邻居。"
  },
  {
    "id": "PC027",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "下列哪些情况下 OSPF 邻居关系会中断？（多选）",
    "options": [
      "在 Dead 定时器超时前未收到邻居的 Hello 报文",
      "双方 Area ID 不一致",
      "双方认证密码不一致",
      "双方进程号不一致"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Dead 定时器超时会拆除邻居；Area ID、Hello/Dead 定时器、认证、网络掩码（广播网络）等参数不一致都会导致邻居无法建立或中断。OSPF 进程号只在本地有效，双方不一致不影响邻居建立。"
  },
  {
    "id": "PC028",
    "type": "fill",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中完全末梢区域（Totally Stub）只允许______类默认路由进入该区域。",
    "options": [],
    "answer": ["3", "三", "3类", "3 类"],
    "explain": "Totally Stub 区域在 Stub 基础上进一步过滤 3 类 LSA，只保留 ABR 自动下发的一条 3 类默认路由，从而把区域内路由表压缩到最小，同时仍能访问区域外网络。"
  },
  {
    "id": "PC029",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 中 4 类 Summary LSA（ASBR-Summary）的作用是？",
    "options": [
      "由 ABR 产生，向其他区域通告 ASBR 的位置",
      "描述广播网段内的路由器",
      "描述外部引入的路由",
      "描述区域内的链路状态"
    ],
    "answer": "A",
    "explain": "4 类 LSA 由 ABR 产生，用于向其他区域通告 ASBR 的位置，使区域内的路由器能够计算到达 ASBR 的开销，从而正确选择 5 类外部路由。5 类 LSA 描述的是外部路由本身。"
  },
  {
    "id": "PC030",
    "type": "judge",
    "chapter": "OSPF高级特性",
    "stem": "OSPFv3 用于支持 IPv6，其报文通过 IPv6 承载，与 OSPFv2 相比使用链路本地地址作为报文源地址。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "正确。OSPFv3 是为 IPv6 设计的版本，运行在 IPv6 之上（协议号仍为 89），邻居间使用链路本地地址作为报文源地址，因此同一链路上的路由器无需配置全球单播地址即可建立邻居。OSPFv2 则用于 IPv4。"
  },
  {
    "id": "PC031",
    "type": "single",
    "chapter": "OSPF高级特性",
    "stem": "OSPF 邻居状态机中，ExStart 状态的主要作用是？",
    "options": [
      "协商主从关系并确定 DD 报文的序列号",
      "交换完整的 LSA",
      "发现邻居",
      "请求缺失的 LSA"
    ],
    "answer": "A",
    "explain": "ExStart 状态用于协商主从关系：Router-ID 大者成为 Master 并决定 DD 报文的序列号，从而保证数据库描述交互的有序可靠。协商完成后进入 Exchange 交换摘要，再由 Loading 请求缺失 LSA，最终到达 Full。"
  },
  {
    "id": "PC032",
    "type": "multi",
    "chapter": "OSPF高级特性",
    "stem": "关于 OSPF 的 DR/BDR 机制，下列描述正确的有哪些？（多选）",
    "options": [
      "DR/BDR 的选举基于接口的 DR 优先级和 Router-ID",
      "BDR 会在 DR 失效后接替成为 DR",
      "所有 DRother 与 DR/BDR 之间形成 Full 邻接",
      "DR 可以抢占"
    ],
    "answer": ["A", "B", "C"],
    "explain": "DR/BDR 由接口优先级（默认 1，0 表示不参选）和 Router-ID（大者优先）共同决定；DR 失效后 BDR 立即接替，并重新选举新的 BDR；所有 DRother 都与 DR 和 BDR 建立 Full 邻接。DR 选举是非抢占的，故第四条错误。"
  }
,
  {
    "id": "PC033",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 协议在协议栈中的位置是？",
    "options": [
      "直接运行在数据链路层之上，不依赖 IP 协议",
      "运行在 TCP 之上",
      "运行在 UDP 之上",
      "运行在 IP 协议之上，协议号 89"
    ],
    "answer": "A",
    "explain": "IS-IS 最初是为 OSI 的 CLNS 设计的，直接封装在数据链路层帧中，不依赖 IP 协议传输，这也是它比 OSPF 更易扩展的原因之一。OSPF 则直接运行在 IP 之上，协议号为 89。"
  },
  {
    "id": "PC034",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 NET 地址由哪几部分组成？",
    "options": [
      "区域 ID、System ID 和 SEL",
      "区域 ID 和 IP 地址",
      "System ID 和 Router-ID",
      "Area ID、Router-ID 和 SEL"
    ],
    "answer": "A",
    "explain": "NET（Network Entity Title）由区域 ID（Area ID）、系统 ID（System ID，固定 6 字节）和 SEL（NSAP 选择符，固定为 00）三部分组成，例如 49.0001.0000.0000.0001.00。同一区域内的路由器区域 ID 必须一致。"
  },
  {
    "id": "PC035",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 System ID 的长度是？",
    "options": [
      "4 字节",
      "6 字节",
      "8 字节",
      "可变长度"
    ],
    "answer": "B",
    "explain": "IS-IS 的 System ID 固定为 6 字节（48 位），通常由路由器的 MAC 地址或手工配置的环回地址转换而来，在一个 IS-IS 域内必须唯一。区域 ID 则为 1～13 字节可变。"
  },
  {
    "id": "PC036",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 SEL（NSAP 选择符）的固定取值是？",
    "options": [
      "00",
      "01",
      "FF",
      "49"
    ],
    "answer": "A",
    "explain": "NET 地址末尾的 SEL 字段固定为 00，表示该地址指向路由器本身（即 NET）而非某个上层服务。若 SEL 非 00 则构成 NSAP 地址，用于标识上层服务接入点。"
  },
  {
    "id": "PC037",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 路由器按层次可分为哪几种类型？（多选）",
    "options": [
      "Level-1 路由器",
      "Level-2 路由器",
      "Level-1-2 路由器",
      "Level-3 路由器"
    ],
    "answer": ["A", "B", "C"],
    "explain": "IS-IS 定义了三种路由器类型：Level-1 路由器只维护本区域内的 L1 链路状态数据库；Level-2 路由器维护骨干区域的 L2 数据库；Level-1-2 路由器同时属于两个层次，是连接 L1 区域与 L2 骨干的桥梁。不存在 Level-3。"
  },
  {
    "id": "PC038",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中构成骨干区域的是？",
    "options": [
      "所有 Level-1 区域",
      "所有 Level-2 与 Level-1-2 路由器组成的连续区域",
      "区域 ID 为 0 的区域",
      "SEL 为 00 的区域"
    ],
    "answer": "B",
    "explain": "IS-IS 不像 OSPF 那样规定 Area 0 为骨干区域，而是把所有 Level-2 路由器以及 Level-1-2 路由器所在的连续区域视为骨干区域。这使得 IS-IS 的区域划分比 OSPF 更灵活。"
  },
  {
    "id": "PC039",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 Level-1 路由器如何获得通往区域外的路由？",
    "options": [
      "通过 L1-2 路由器产生的 ATT 比特获得一条指向最近的 L1-2 路由器的默认路由",
      "通过 SPF 计算完整的外部拓扑",
      "由管理员手工配置静态路由",
      "通过 Level-2 的 LSP 直接学习"
    ],
    "answer": "A",
    "explain": "L1-2 路由器会在其产生的 L1 LSP 中将 ATT（Attachment）比特置位，L1 路由器收到后据此生成一条指向最近 L1-2 路由器的默认路由（0/0），从而把区域外流量交给 L1-2 路由器转发。"
  },
  {
    "id": "PC040",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 DIS 的默认优先级是？",
    "options": [
      "0",
      "1",
      "64",
      "127"
    ],
    "answer": "C",
    "explain": "IS-IS 中 DIS（指定中间系统）的选举优先级默认为 64，取值范围 0～127，数值越大越优先；优先级相同时比较 System ID（或 SNPA 地址），大者胜出。优先级为 0 表示不参与选举。"
  },
  {
    "id": "PC041",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 的 DIS 选举与 OSPF 的 DR 选举相比，最主要的区别是？",
    "options": [
      "DIS 是可抢占的，且没有备份 DIS",
      "DIS 完全不可抢占",
      "DIS 有备份 DIS",
      "两者完全相同"
    ],
    "answer": "A",
    "explain": "IS-IS 的 DIS 选举是可抢占的：当有更高优先级的路由器加入时，会立即重新选举并可能接管 DIS 角色；而且 IS-IS 没有 BDR 的概念，不设备份 DIS。OSPF 的 DR 选举则不可抢占，并且有 BDR。"
  },
  {
    "id": "PC042",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中伪节点（Pseudonode）LSP 的作用是？",
    "options": [
      "由 DIS 产生，用于描述广播网段上的所有路由器",
      "描述路由器自身的链路状态",
      "描述区域间的路由",
      "承载 IP 前缀信息"
    ],
    "answer": "A",
    "explain": "在广播网络中，DIS 会代表该网段产生一个伪节点 LSP（非零 LSP ID 的伪节点标识），用它统一描述网段内所有路由器，从而把网状的邻接关系简化为星形结构，减少 LSP 泛洪数量。"
  },
  {
    "id": "PC043",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 定义了哪几种 PDU 类型？（多选）",
    "options": [
      "IIH（IS-IS Hello）",
      "LSP（Link State PDU）",
      "CSNP（Complete Sequence Number PDU）",
      "OSPF 的 DD 报文"
    ],
    "answer": ["A", "B", "C"],
    "explain": "IS-IS 的 PDU 主要有：IIH 用于发现和维护邻居、LSP 用于携带链路状态信息、CSNP 用于描述 LSDB 中所有 LSP 的摘要、PSNP 用于请求或确认部分 LSP。DD 报文属于 OSPF，不属于 IS-IS。"
  },
  {
    "id": "PC044",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 CSNP 与 PSNP 的区别是？",
    "options": [
      "CSNP 描述 LSDB 中所有 LSP 的摘要，PSNP 只描述部分 LSP 的摘要",
      "CSNP 用于请求，PSNP 用于确认",
      "两者完全相同",
      "CSNP 只在 L1 使用"
    ],
    "answer": "A",
    "explain": "CSNP（完全序列号 PDU）携带 LSDB 中所有 LSP 的摘要列表，用于 LSDB 同步；PSNP（部分序列号 PDU）只携带部分 LSP 的摘要，作用类似 OSPF 的 LSR 与 LSAck，用于请求缺失的 LSP 或对收到的 LSP 做确认。"
  },
  {
    "id": "PC045",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 在没有配置时，接口的默认开销值是？",
    "options": [
      "1",
      "10",
      "64",
      "100"
    ],
    "answer": "B",
    "explain": "IS-IS 接口的默认开销为 10，采用窄度量时取值范围为 1～63。整条路径的开销为沿途所有接口开销之和，开销越小越优，这一点与 OSPF 一致。"
  },
  {
    "id": "PC046",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中使用窄度量（Narrow Metric）时，接口开销的取值范围是？",
    "options": [
      "1～63",
      "1～255",
      "1～1023",
      "1～16777215"
    ],
    "answer": "A",
    "explain": "窄度量（Narrow Metric）使用 6 比特表示开销，因此取值范围为 1～63，且每台路由器的路径开销上限为 1023。当网络规模较大时应改用宽度量（Wide Metric），其取值范围可达 1～16777215。"
  },
  {
    "id": "PC047",
    "type": "judge",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 的 Level-1 与 Level-2 分别维护独立的链路状态数据库，Level-1-2 路由器同时拥有两个数据库。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "正确。IS-IS 的 L1 与 L2 是相对独立的层次，各自维护一套 LSDB 并分别运行 SPF 计算。Level-1-2 路由器同时参与两个层次，因此需要维护 L1 和 L2 两个链路状态数据库。"
  },
  {
    "id": "PC048",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 与 OSPF 相比，下列关于区域边界的说法正确的是？",
    "options": [
      "OSPF 的区域边界在路由器上（一台路由器可属于多个区域），IS-IS 的区域边界在链路上",
      "两者的区域边界都在链路上",
      "两者的区域边界都在路由器上",
      "IS-IS 没有区域概念"
    ],
    "answer": "A",
    "explain": "OSPF 的区域边界划分在路由器上：ABR 的不同接口分属不同区域，一台路由器可以同时属于多个区域。IS-IS 的区域边界划分在链路上：路由器整体属于某个层次，Level-1-2 路由器通过不同层次的链路分别接入 L1 区域与 L2 骨干。"
  },
  {
    "id": "PC049",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "在 IS-IS 中配置路由器层次的命令是？",
    "options": [
      "is-level",
      "is-type",
      "level",
      "isis-level"
    ],
    "answer": "A",
    "explain": "在 IS-IS 视图下使用 is-level 命令可以指定路由器的层次为 level-1、level-2 或 level-1-2（默认）。注意华为设备上 is-level 配置的是路由器层次，而接口层次的差异由 isis circuit-level 控制。"
  },
  {
    "id": "PC050",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "在华为设备上创建 IS-IS 进程并配置 NET 地址的命令是？",
    "options": [
      "isis 1 然后 network-entity",
      "ospf 1 然后 network",
      "isis 1 然后 router-id",
      "bgp 1 然后 network-entity"
    ],
    "answer": "A",
    "explain": "在系统视图下执行 isis 进程号创建 IS-IS 进程，然后在 IS-IS 视图下使用 network-entity 命令配置 NET 地址，例如 network-entity 49.0001.0000.0000.0001.00。IS-IS 用 NET 而非 Router-ID 标识路由器，但 Huawei 也支持用 router-id 指定 SPF 计算所用的标识。"
  },
  {
    "id": "PC051",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "查看 IS-IS 邻居关系的命令是？",
    "options": [
      "display isis peer",
      "display isis lsdb",
      "display isis route",
      "display isis interface"
    ],
    "answer": "A",
    "explain": "display isis peer 用于查看 IS-IS 邻居的系统 ID、接口、状态（Up/Down）和保持时间等信息，是排查邻居问题最常用的命令。display isis lsdb 查看链路状态数据库，display isis route 查看 IS-IS 计算出的路由。"
  },
  {
    "id": "PC052",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "下列哪些属于 IS-IS 相对 OSPF 的特点？（多选）",
    "options": [
      "直接封装在数据链路层，不依赖 IP",
      "区域边界在链路上，扩展性更好",
      "DIS 选举可抢占且无备份 DIS",
      "完全不需要区域划分"
    ],
    "answer": ["A", "B", "C"],
    "explain": "IS-IS 直接运行在数据链路层、区域边界位于链路上便于扩展、DIS 可抢占且不设备份，这些都是它与 OSPF 的典型差异。但 IS-IS 同样需要划分 L1/L2 层次，并非不需要区域划分。"
  },
  {
    "id": "PC053",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 支持 IPv6 是通过什么机制实现的？",
    "options": [
      "通过新增 TLV 扩展来携带 IPv6 前缀信息",
      "通过独立的 OSPFv3 进程",
      "通过 GRE 隧道",
      "通过 NAT64 转换"
    ],
    "answer": "A",
    "explain": "IS-IS 具有良好的可扩展性，它通过在 LSP 中新增 TLV（如 IPv6 Interface Address TLV 与 IPv6 Reachability TLV）来携带 IPv6 信息，因此同一套 IS-IS 进程可以同时承载 IPv4 和 IPv6 路由，无需像 OSPF 那样另起一个 OSPFv3 进程。"
  },
  {
    "id": "PC054",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 IIH 报文的作用是？",
    "options": [
      "发现邻居并协商建立邻接关系",
      "携带完整的链路状态信息",
      "描述 LSDB 摘要",
      "确认收到的 LSP"
    ],
    "answer": "A",
    "explain": "IIH（IS-IS Hello）报文用于邻居的发现与维持，并协商链路层次与邻接类型（L1/L2）。它类似于 OSPF 的 Hello，但 IS-IS 的 Hello 报文长度显著更大（需携带 TL V列表）。"
  },
  {
    "id": "PC055",
    "type": "judge",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 的 DIS 选举中，当接口优先级相同时，将比较 SNPA 地址（即 MAC 地址），数值较大者胜出。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "正确。IS-IS 的 DIS 选举先比较接口优先级（默认 64，数值越大越优先），优先级相同时再比较 SNPA 地址（广播网络中的 MAC 地址），数值较大者当选，这与 ISO 10589 的规定一致。优先级为 0 表示不参与选举。"
  },
  {
    "id": "PC056",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 LSP 的刷新间隔默认是？",
    "options": [
      "900 秒",
      "1800 秒",
      "3600 秒",
      "10 秒"
    ],
    "answer": "A",
    "explain": "IS-IS 的 LSP 默认每 900 秒（15 分钟）刷新一次，LSP 的最大存活时间为 1200 秒。这与 OSPF 的 1800 秒刷新、3600 秒 MaxAge 不同，是 IS-IS 收敛较快的原因之一。"
  },
  {
    "id": "PC057",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 Level-1 路由器要向本区域外的目的地转发报文，应把报文交给？",
    "options": [
      "最近的 Level-1-2 路由器",
      "任意 Level-1 路由器",
      "DR 路由器",
      "DIS 路由器"
    ],
    "answer": "A",
    "explain": "L1 路由器通过 L1-2 路由器置位的 ATT 比特生成默认路由，把区域外流量交给最近的 L1-2 路由器，由后者再沿 L2 骨干转发。这就是 IS-IS 中\"最近出口\"的路由机制。"
  },
  {
    "id": "PC058",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "关于 IS-IS 的层叠（Multi-Level）特性，下列描述正确的有哪些？（多选）",
    "options": [
      "L1 区域内的路由通过 L1 LSP 泛洪",
      "L2 骨干区域的路由通过 L2 LSP 泛洪",
      "L1-2 路由器会把 L1 区域的路由引入 L2 并在 L2 中通告",
      "L2 的拓扑细节会被泄漏到 L1 区域"
    ],
    "answer": ["A", "B", "C"],
    "explain": "IS-IS 中 L1 与 L2 各自泛洪本层次的 LSP；L1-2 路由器会把 L1 区域内的路由通过 L2 LSP 通告到骨干，实现区域间连通。但 L2 的详细拓扑不会泄漏到 L1，L1 路由器只通过默认路由出区，从而保持层次隔离。"
  },
  {
    "id": "PC059",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 的认证支持哪些方式？",
    "options": [
      "接口认证、区域认证和路由域认证",
      "仅接口认证",
      "仅路由域认证",
      "不支持认证"
    ],
    "answer": "A",
    "explain": "IS-IS 支持三种粒度的认证：接口认证（IIH 报文认证）、区域认证（L1 LSP/CSNP/PSNP 认证）和路由域认证（L2 LSP/CSNP/PSNP 认证），均支持明文与 MD5 两种方式。"
  },
  {
    "id": "PC060",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "在 IS-IS 中，Level-1-2 路由器的默认层次是？",
    "options": [
      "Level-1",
      "Level-2",
      "Level-1-2",
      "由 System ID 决定"
    ],
    "answer": "C",
    "explain": "IS-IS 路由器默认的层次是 Level-1-2，即同时参与 L1 和 L2 两个层次。可通过 is-level 命令显式指定为 level-1 或 level-2。"
  },
  {
    "id": "PC061",
    "type": "judge",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 路由器使用 System ID 而非 IP 地址来标识自身，因此即使接口没有配置 IP 地址也可以建立 IS-IS 邻居。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "正确。IS-IS 运行在数据链路层之上，使用 System ID 标识路由器、使用 NET 地址标识区域，因此接口即使没有配置 IP 地址也能建立 IS-IS 邻居关系（但若要传递 IP 路由则需要接口配置 IP 地址）。"
  },
  {
    "id": "PC062",
    "type": "single",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中 PSNP 的发送时机通常是？",
    "options": [
      "收到 LSP 后作为确认，或发现 LSDB 缺少某些 LSP 时用于请求",
      "周期性发送以同步整个 LSDB",
      "只在建立邻居时发送一次",
      "由 L1 路由器专属发送"
    ],
    "answer": "A",
    "explain": "PSNP 有两种用途：一是对收到的 LSP 做确认（类似 OSPF 的 LSAck），二是在发现本地 LSDB 缺少某个 LSP 时向邻居请求（类似 LSR）。周期性描述整个 LSDB 摘要的是 CSNP，由 DIS 在广播网络中周期性发送。"
  },
  {
    "id": "PC063",
    "type": "multi",
    "chapter": "IS-IS路由协议",
    "stem": "下列关于 IS-IS 与 OSPF 对比的描述，正确的有哪些？（多选）",
    "options": [
      "IS-IS 直接封装在二层，OSPF 封装在 IP 之上",
      "IS-IS 的区域边界在链路上，OSPF 的区域边界在路由器上",
      "IS-IS 的 DIS 可抢占，OSPF 的 DR 不可抢占",
      "IS-IS 使用链路状态算法，OSPF 使用距离矢量算法"
    ],
    "answer": ["A", "B", "C"],
    "explain": "前三条都是 IS-IS 与 OSPF 的真实差异。第四条错误：IS-IS 与 OSPF 都是链路状态路由协议，都通过泛洪链路状态信息并运行 SPF 算法计算最短路径树；距离矢量协议的代表是 RIP。"
  },
  {
    "id": "PC064",
    "type": "fill",
    "chapter": "IS-IS路由协议",
    "stem": "IS-IS 中接口的默认开销值为______。",
    "options": [],
    "answer": [
      "10",
      "十"
    ],
    "explain": "IS-IS 接口的默认开销为 10，采用窄度量时取值范围为 1～63。路径总开销为沿途各接口开销之和，开销越小路径越优，可通过 isis cost 命令在接口下手工调整。"
  }
];
