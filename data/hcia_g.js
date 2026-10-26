window.BANK_HCIA_G = [
  {
    "id": "HG001",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "企业网络中实现VLAN间通信主要有三种方式，下列哪一项不属于这三种方式？",
    "options": [
      "在路由器上配置单臂路由（子接口）",
      "在三层交换机上配置VLANIF接口",
      "在三层交换机上使用物理接口，并将不同VLAN的端口划入不同三层接口",
      "使用二层交换机的Trunk链路直接互连两个VLAN"
    ],
    "answer": "D",
    "explain": "VLAN间通信的三种主流实现方式是单臂路由、三层交换机VLANIF接口以及三层交换机物理接口（将端口从二层模式切换为三层模式并配置IP）。二层Trunk链路只承载带标签的帧，不具备三层转发能力，无法实现VLAN间路由。"
  },
  {
    "id": "HG002",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在路由器上配置单臂路由时，子接口 G0/0/0.10 下必须配置哪条命令才能使该子接口能够处理VLAN 10的标签报文？",
    "options": [
      "encapsulation dot1q 10",
      "dot1q termination vid 10",
      "vlan-type dot1q 10",
      "port link-type trunk"
    ],
    "answer": "B",
    "explain": "华为VRP设备在路由器子接口上使用 dot1q termination vid 10 命令剥离VLAN 10的标签并终结该VLAN。encapsulation dot1q 是思科设备的命令，port link-type trunk 是交换机二层接口命令，不能用于路由器子接口。"
  },
  {
    "id": "HG003",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "单臂路由子接口下配置 arp broadcast enable 命令的原因是？",
    "options": [
      "使子接口能够转发广播报文以便完成ARP解析和DHCP等广播交互",
      "使子接口能够发送ARP请求但不接收ARP应答",
      "用于开启子接口的VLAN标签封装功能",
      "用于提高子接口的ARP学习速度"
    ],
    "answer": "A",
    "explain": "华为路由器子接口默认关闭广播报文的处理能力，若不配置 arp broadcast enable，子接口将丢弃广播报文，导致ARP请求无法发出、主机无法解析网关MAC而通信失败。该命令使子接口可以正常收发广播/组播帧。"
  },
  {
    "id": "HG004",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "单臂路由的所有VLAN间流量都要经过同一根物理链路和同一个路由器物理接口，因此存在带宽瓶颈和单点故障风险。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "单臂路由的子接口共享同一个物理接口带宽，VLAN间流量汇聚到一条链路上，容易形成带宽瓶颈。同时路由器或该链路故障会导致所有VLAN间通信中断，属于单点故障。"
  },
  {
    "id": "HG005",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上VLANIF接口变为UP状态需要满足的条件是？",
    "options": [
      "只需该VLAN已被创建",
      "只需交换机上有一个物理端口处于UP状态",
      "该VLAN已创建且该VLAN中至少有一个成员端口处于UP状态",
      "必须手工执行 undo shutdown 命令才能UP"
    ],
    "answer": "C",
    "explain": "VLANIF接口是逻辑接口，其状态取决于对应VLAN是否存在以及该VLAN内是否有处于UP状态的成员端口。只有VLAN存在且至少一个成员端口UP时，VLANIF才会UP；两者缺一，VLANIF保持down。"
  },
  {
    "id": "HG006",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于三层交换机与路由器的区别，下列描述正确的有？",
    "options": [
      "三层交换机基于硬件ASIC转发，转发性能远高于同价位路由器",
      "三层交换机通常不支持NAT、VPN等复杂的三层业务功能",
      "三层交换机的接口类型以以太网口为主，路由器支持Serial、POS等广域网接口",
      "三层交换机的转发性能低于路由器，因为它需要处理更多VLAN信息"
    ],
    "answer": ["A", "C"],
    "explain": "三层交换机通过ASIC芯片实现线速转发，性能高，接口以以太网口为主；路由器接口类型丰富，支持广域网接口，并在NAT、VPN等业务功能上更强。B选项并非绝对（部分高端设备支持），D选项说法与事实相反。"
  },
  {
    "id": "HG007",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "三层交换机实现“一次路由，多次交换”是指？",
    "options": [
      "第一个报文由CPU进行路由查找并建立转发信息，后续同流报文直接由硬件按缓存信息高速转发",
      "每个报文都要送CPU进行路由查找",
      "所有报文都由软件转发，只有ARP报文由硬件转发",
      "第一个报文由硬件转发，后续报文必须送CPU处理"
    ],
    "answer": "A",
    "explain": "三层交换机对首个数据流报文由CPU参与路由计算并重写MAC地址，生成硬件转发表项；后续属于同一数据流的报文直接查硬件表项完成快速转发，因此称为“一次路由，多次交换”。"
  },
  {
    "id": "HG008",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "SVI（Switch Virtual Interface）即交换机虚拟接口，在华为设备上通常以VLANIF接口的形式实现，用于为VLAN提供三层网关。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "SVI是为VLAN提供三层处理能力的虚拟接口，华为设备上体现为VLANIF接口。为VLANIF配置IP地址后即可作为该VLAN内主机的网关，实现VLAN间路由。"
  },
  {
    "id": "HG009",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "在三层交换机上为VLAN 20创建三层网关接口，使用 interface Vlanif 20 进入接口视图后配置端口链路类型是不允许的。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "VLANIF是三层逻辑接口，进入 interface Vlanif 20 视图后只能配置IP地址等三层属性，不能配置 port link-type 这类二层端口属性。为VLANIF配置IP地址后它即可作为该VLAN的网关。"
  },
  {
    "id": "HG010",
    "type": "fill",
    "chapter": "VLAN间路由",
    "stem": "在华为三层交换机上查看所有VLANIF接口的IP地址及状态，应使用命令 display ip ______ brief。",
    "options": [],
    "answer": ["interface"],
    "explain": "display ip interface brief 可以列出设备上所有三层接口（含VLANIF）的IP地址、物理状态和协议状态。通过该命令可快速判断VLANIF是否UP以及是否已配置IP地址。"
  },
  {
    "id": "HG011",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上VLANIF 30的状态显示为down，最可能的原因是？",
    "options": [
      "VLAN 30 内没有任何处于UP状态的成员端口",
      "VLANIF 30 未配置描述信息",
      "交换机上没有配置默认路由",
      "VLAN 30 的VLAN ID大于10"
    ],
    "answer": "A",
    "explain": "VLANIF的UP依赖两个条件：VLAN已创建、该VLAN内有UP的成员端口。若VLAN 30内的端口全部shutdown或尚未加入任何端口，VLANIF 30就会保持down状态。描述信息、路由和VLAN ID大小均不影响其状态。"
  },
  {
    "id": "HG012",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于路由器子接口与主接口的关系，下列说法正确的有？",
    "options": [
      "子接口是依附于主接口的逻辑接口，主接口物理状态down时子接口必然down",
      "子接口可以配置独立的IP地址和VLAN终结封装",
      "子接口拥有独立的物理带宽，不受主接口带宽限制",
      "主接口下可以创建多个子接口，分别对应不同的VLAN"
    ],
    "answer": ["A", "B", "D"],
    "explain": "子接口是基于主接口划分的逻辑接口，其状态跟随主接口，共享主接口的物理带宽。子接口可各自配置IP地址和 dot1q termination vid 等封装参数，从而在一个物理接口上承载多个VLAN的网关。C选项错误。"
  },
  {
    "id": "HG013",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "主机A（VLAN 10，网关10.1.1.1）访问主机B（VLAN 20，网关10.1.2.1），报文在三层交换机上的完整转发路径是？",
    "options": [
      "A→接入交换机→三层交换机VLANIF 10→三层交换机VLANIF 20→B",
      "A→网关路由器→三层交换机→B",
      "A→B直接二层转发，无需经过网关",
      "A→三层交换机VLANIF 20→VLANIF 10→B"
    ],
    "answer": "A",
    "explain": "跨VLAN通信时，主机A先将报文发给自己的网关（VLANIF 10），三层交换机进行路由查找后从VLANIF 20转发出去，最终送达主机B。源VLAN的VLANIF是入接口，目的VLAN的VLANIF是出接口，顺序不能颠倒。"
  },
  {
    "id": "HG014",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "在单臂路由场景中，下列关于子接口的说法正确的有？",
    "options": [
      "子接口编号通常与所终结的VLAN ID保持一致以便管理",
      "子接口需要配置所属VLAN网段的IP地址才能作为网关",
      "子接口通过 dot1q termination vid 指定要终结的VLAN",
      "子接口必须额外申请一个独立的物理接口才能创建"
    ],
    "answer": ["A", "B", "C"],
    "explain": "单臂路由中一个物理接口下可创建多个子接口，编号习惯与VLAN ID对应；子接口需配置该VLAN网段的IP地址并通过 dot1q termination vid 终结标签。子接口是逻辑接口，不需要额外占用物理接口，D选项错误。"
  },
  {
    "id": "HG015",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在单臂路由场景中，若交换机与路由器之间使用Trunk链路，则交换机连接路由器的端口应配置为？",
    "options": [
      "Trunk类型并允许相关VLAN通过",
      "Access类型并加入VLAN 10",
      "Hybrid类型且不打标签",
      "三层接口并配置IP地址"
    ],
    "answer": "A",
    "explain": "单臂路由依靠子接口终结不同VLAN的标签，因此交换机侧必须使用Trunk（或Hybrid带标签）方式，并允许需要路由的各VLAN通过该链路。若配置为Access，报文将不带标签，子接口无法区分VLAN。"
  },
  {
    "id": "HG016",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "下列关于单臂路由的描述，正确的有？",
    "options": [
      "只需一个物理接口即可实现多个VLAN之间的三层互通",
      "VLAN间流量全部经过该物理链路，容易成为带宽瓶颈",
      "单臂路由不依赖任何三层转发能力，纯二层即可实现",
      "子接口数量与需要互通的VLAN数量相对应"
    ],
    "answer": ["A", "B", "D"],
    "explain": "单臂路由在一个物理接口上通过多个子接口承载多个VLAN的网关，节省接口但流量集中，存在带宽瓶颈和单点故障。其本质仍是三层路由转发，C选项错误。"
  },
  {
    "id": "HG017",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在华为三层交换机上，将端口G0/0/1从二层模式切换为三层模式应使用哪条命令？",
    "options": [
      "portswitch",
      "undo portswitch",
      "switchport",
      "undo switchport"
    ],
    "answer": "B",
    "explain": "华为交换机端口默认为二层模式，使用 undo portswitch 可将以太网端口切换为三层模式，之后可直接配置IP地址。portswitch 则是把端口从三层模式切回二层模式。"
  },
  {
    "id": "HG018",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "在三层交换机上，两个VLANIF接口之间可以直接完成路由转发，报文不需要离开设备再回到路由器。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "VLANIF是三层交换机内部的三层接口，不同VLANIF之间的报文在设备内部完成路由和转发，无需外接路由器。这也是三层交换机实现VLAN间路由效率高的原因。"
  },
  {
    "id": "HG019",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "某工程师在三层交换机上完成了 interface Vlanif 10 和 ip address 配置，但主机仍无法Ping通网关，且 display ip interface brief 显示VLANIF 10为down。应优先检查？",
    "options": [
      "是否配置了静态路由",
      "VLAN 10 是否存在，以及是否有处于UP状态的端口加入VLAN 10",
      "是否开启了DHCP服务",
      "VLANIF 10 的IP地址是否与其他接口冲突"
    ],
    "answer": "B",
    "explain": "VLANIF接口UP的前提是对应VLAN存在且有UP的成员端口。若VLAN未创建或没有UP端口，VLANIF保持down，主机自然无法与其通信。应先创建VLAN并将UP端口加入，再检查IP地址等配置。"
  },
  {
    "id": "HG020",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "三层交换机配置VLANIF实现VLAN间路由的一般步骤包括？",
    "options": [
      "为每个VLAN单独采购一台路由器做网关",
      "为各VLAN创建VLANIF接口并配置网关IP地址",
      "创建VLAN并将用户端口以Access方式加入VLAN",
      "确保各VLAN内至少有一个UP的成员端口使VLANIF变为UP"
    ],
    "answer": ["B", "C", "D"],
    "explain": "典型步骤是创建VLAN、把端口划入VLAN、创建VLANIF并配置IP地址，同时保证VLAN内有UP端口使VLANIF生效。三层交换机自身即可完成VLAN间路由，无需为每个VLAN单独配置路由器，A选项错误。"
  },
  {
    "id": "HG021",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在单臂路由中，路由器子接口的MAC地址通常？",
    "options": [
      "由管理员手工配置且必须全网唯一",
      "每个子接口都有完全独立、与主接口无关的MAC地址",
      "与主接口的MAC地址相同",
      "与交换机上联端口的MAC地址相同"
    ],
    "answer": "C",
    "explain": "子接口是逻辑接口，通常借用主接口的MAC地址，不额外占用独立MAC资源。因此同一物理接口下多个子接口返回的ARP响应携带相同MAC，这也是单臂路由场景中需要注意的一点。"
  },
  {
    "id": "HG022",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "单臂路由的子接口可以不配置IP地址，仅依靠主接口的IP地址即可完成多个VLAN的网关功能。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "子接口要作为VLAN的三层网关，必须各自配置该VLAN网段的IP地址，同时配置 dot1q termination vid 终结对应VLAN标签。仅靠主接口的IP地址无法为多个VLAN提供网关，因此该说法错误。"
  },
  {
    "id": "HG023",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于多个VLAN共用同一个子接口的做法，下列说法错误的有？",
    "options": [
      "一个子接口可以终结任意多个VLAN并为它们提供不同网关",
      "一个子接口只需开启ARP广播就能服务所有VLAN",
      "一个子接口只能终结一个VLAN，需要多个网关时应创建多个子接口",
      "一个子接口通常只配置一个该网段的IP地址"
    ],
    "answer": ["A", "B"],
    "explain": "华为设备上一个子接口通过一条 dot1q termination vid 只能终结一个VLAN，且通常只配置一个该网段的IP地址。因此为多个VLAN提供网关需创建多个子接口，开启ARP广播并不能让一个子接口服务所有VLAN。C、D为正确描述。"
  },
  {
    "id": "HG024",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "相比单臂路由，三层交换机VLANIF方式的优势包括？",
    "options": [
      "转发由硬件完成，性能高、时延低",
      "不需要额外的路由器设备，节省成本",
      "VLAN间流量不必全部绕行到外部路由器的单一链路",
      "完全不需要为VLAN配置网关地址"
    ],
    "answer": ["A", "B", "C"],
    "explain": "三层交换机通过ASIC硬件转发，性能远优于单臂路由，且无需额外路由器、不易形成链路瓶颈。但VLANIF仍必须配置IP地址作为网关，D选项错误。"
  },
  {
    "id": "HG025",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "路由器上执行 display ip interface brief 时看到 GigabitEthernet0/0/0.10 状态为 up，但同网段主机仍无法访问其他VLAN，最可能缺少的配置是？",
    "options": [
      "子接口下的 description",
      "子接口下的 arp broadcast enable",
      "主接口下的 ip address",
      "全局的 vlan batch 命令"
    ],
    "answer": "B",
    "explain": "子接口未开启ARP广播功能时会丢弃广播报文，主机ARP请求无法得到响应，表现为无法通信。此时接口状态仍显示up，因此需重点检查 arp broadcast enable 是否配置。"
  },
  {
    "id": "HG026",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上可以为同一个VLAN创建多个VLANIF接口，从而为同一VLAN提供多个网关。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "VLANIF接口编号与VLAN ID一一对应，一个VLAN只能有一个对应的VLANIF接口。若需要冗余网关，应采用VRRP等机制在同一VLANIF上配置虚拟IP，而不是创建多个VLANIF。"
  },
  {
    "id": "HG027",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上VLANIF接口转发数据时，重写的是报文的哪一部分？",
    "options": [
      "IP报头的源IP地址和TTL字段",
      "TCP报头的端口号",
      "二层帧头的源MAC和目的MAC以及VLAN标签",
      "整个IP报文的内容"
    ],
    "answer": "C",
    "explain": "三层转发过程中，IP报头的源和目的IP地址保持不变（除非经过NAT），交换机需要重新封装二层帧：修改源MAC为自己的出接口MAC、目的MAC为下一跳MAC，并按出接口所属VLAN封装相应标签。"
  },
  {
    "id": "HG028",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于VLANIF接口的描述，正确的有？",
    "options": [
      "VLANIF接口必须绑定物理端口才能创建",
      "VLANIF是三层逻辑接口，可为VLAN内主机提供网关",
      "VLANIF的编号通常与VLAN ID一致",
      "VLANIF必须配置IP地址才能参与三层转发"
    ],
    "answer": ["B", "C", "D"],
    "explain": "VLANIF是逻辑三层接口，编号与VLAN ID对应，需配置IP地址后作为网关使用。它的UP依赖于VLAN存在且有UP成员端口，但创建VLANIF本身并不需要显式绑定物理端口，A选项错误。"
  },
  {
    "id": "HG029",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "某公司要求VLAN 10与VLAN 20互通，且希望转发性能最高、不增加额外设备，最佳方案是？",
    "options": [
      "使用路由器配置单臂路由",
      "使用三层交换机配置VLANIF 10和VLANIF 20",
      "使用二层交换机堆叠",
      "将两个VLAN合并为一个VLAN"
    ],
    "answer": "B",
    "explain": "三层交换机通过VLANIF实现VLAN间路由，硬件转发性能高且无需新增路由器，是本场景的最佳方案。单臂路由会引入带宽瓶颈，而合并VLAN会破坏原有的广播域隔离设计。"
  },
  {
    "id": "HG030",
    "type": "fill",
    "chapter": "VLAN间路由",
    "stem": "路由器子接口下用于终结VLAN 10标签的命令是 dot1q ______ vid 10。",
    "options": [],
    "answer": ["termination"],
    "explain": "dot1q termination vid 10 命令使子接口能够识别并剥离VLAN 10的标签，从而终结该VLAN的二层封装并进入三层处理。这是华为路由器单臂路由子接口的核心配置。"
  },
  {
    "id": "HG031",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "如果三层交换机与接入交换机之间的链路出现故障，最可能的结果是？",
    "options": [
      "所有VLANIF都会立即变为down",
      "该链路承载VLAN的VLANIF可能变为down，相关VLAN间通信中断",
      "交换机会自动改用单臂路由方式",
      "VLANIF状态不受影响，通信照常"
    ],
    "answer": "B",
    "explain": "VLANIF的UP依赖于VLAN内存在UP的成员端口。若链路上所有承载该VLAN的端口都down，则该VLAN没有UP成员端口，对应VLANIF也会变为down，导致相关VLAN间的三层通信中断。"
  },
  {
    "id": "HG032",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上的VLANIF接口可以像物理接口一样配置IP地址，并可作为主机默认网关。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "VLANIF是三层接口，可配置IP地址并参与路由转发，通常被配置为VLAN内主机的默认网关。其行为与物理三层接口在路由意义上是一致的。"
  },
  {
    "id": "HG033",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "单臂路由场景下，若主机A的网关配置错误（指向了不存在的地址），最可能的现象是？",
    "options": [
      "主机A无法与同VLAN内主机通信",
      "主机A的ARP表无法建立",
      "主机A无法与其它VLAN通信，但同VLAN内通信正常",
      "主机A的IP地址会自动变为网关地址"
    ],
    "answer": "C",
    "explain": "同VLAN通信只依赖二层转发，不经过网关，因此不受影响。跨VLAN通信必须先送到网关，网关地址错误时报文无法送达正确的三层接口，导致跨VLAN通信失败。"
  },
  {
    "id": "HG034",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "下列哪些情况会导致三层交换机上VLANIF接口处于down状态？",
    "options": [
      "对应VLAN尚未创建",
      "对应VLAN内所有成员端口均处于down状态",
      "对应VLAN的VLANIF未配置描述信息",
      "对应VLAN内没有任何端口加入"
    ],
    "answer": ["A", "B", "D"],
    "explain": "VLANIF UP的必要条件是VLAN存在且存在UP的成员端口。VLAN未创建、无成员端口或成员端口全部down都会导致VLANIF down。未配置描述信息属于可选项，不影响接口状态，C选项错误。"
  },
  {
    "id": "HG035",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在三层交换机上执行 display vlan 命令的主要目的是？",
    "options": [
      "查看VLANIF的IP地址配置",
      "查看路由表",
      "查看MAC地址表",
      "查看VLAN是否存在及其成员端口，辅助判断VLANIF为何down"
    ],
    "answer": "D",
    "explain": "display vlan 可显示各VLAN的ID、状态和成员端口列表，是排查VLANIF down问题的关键命令。确认VLAN存在且有UP端口后，才能判断VLANIF为何无法UP。"
  },
  {
    "id": "HG036",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "在单臂路由配置中，如果路由器子接口没有配置 dot1q termination vid，则带标签的报文会被丢弃或无法正确进入三层处理。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "子接口必须通过 dot1q termination vid 指定要终结的VLAN，才能正确剥离标签并进入三层转发。缺少该配置时，带标签报文无法被正确识别，通信将失败。"
  },
  {
    "id": "HG037",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于三层交换机的转发流程，下列描述正确的有？",
    "options": [
      "对跨网段报文需查路由表确定出接口与下一跳",
      "转发时需重写二层帧头的源MAC和目的MAC",
      "首个报文处理后生成硬件转发表项，后续同流报文由硬件快速转发",
      "三层交换机对跨网段报文只查MAC地址表，不查路由表"
    ],
    "answer": ["A", "B", "C"],
    "explain": "三层交换机对跨网段报文先查路由表确定出接口和下一跳，再重写二层帧头完成封装，并生成硬件转发表项；后续同一数据流由硬件直接转发，这个流程即“一次路由，多次交换”。D选项错误。"
  },
  {
    "id": "HG038",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于单臂路由的局限性，下列说法正确的有？",
    "options": [
      "所有VLAN间流量共享一条物理链路，容易拥塞",
      "路由器一旦故障，全部VLAN间通信中断",
      "无法实现不同VLAN之间的三层互通",
      "配置相对复杂，子接口数量随VLAN增长而增加"
    ],
    "answer": ["A", "B", "D"],
    "explain": "单臂路由存在带宽瓶颈、单点故障和配置随VLAN数量膨胀等缺点，但它确实能够实现VLAN间三层互通，C选项错误。"
  },
  {
    "id": "HG039",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上配置VLANIF后，若希望该接口不再参与路由，可执行的操作是？",
    "options": [
      "在VLANIF接口下执行 shutdown",
      "删除VLANIF接口的IP地址之外无法关闭",
      "执行 undo vlan 命令删除所有VLAN",
      "重启交换机"
    ],
    "answer": "A",
    "explain": "VLANIF作为三层接口支持 shutdown/undo shutdown 操作，执行 shutdown 可使接口管理状态为down，从而停止该接口上的三层转发。这比删除VLAN影响更小。"
  },
  {
    "id": "HG040",
    "type": "fill",
    "chapter": "VLAN间路由",
    "stem": "在华为三层交换机上创建VLAN 10对应的三层网关接口，应进入 interface ______ 10 视图。",
    "options": [],
    "answer": ["Vlanif", "vlanif"],
    "explain": "interface Vlanif 10 命令用于创建并进入VLAN 10对应的VLANIF接口视图，随后配置IP地址即可作为该VLAN的网关。VLANIF是华为设备上SVI的实现形式。"
  },
  {
    "id": "HG041",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "某主机属于VLAN 10，网关为VLANIF 10的地址。该主机发送跨VLAN报文时，帧的目的MAC地址是？",
    "options": [
      "目的主机的MAC地址",
      "接入交换机的MAC地址",
      "广播地址FFFF-FFFF-FFFF",
      "VLANIF 10 的MAC地址"
    ],
    "answer": "A",
    "explain": "主机跨网段通信时，目的IP为远端主机但目的MAC为网关（VLANIF 10）的MAC地址，报文先交给网关。网关再重新封装帧头，按下一跳MAC转发。"
  },
  {
    "id": "HG042",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "三层交换机物理接口切换为三层模式后，其接口下不能再配置 port link-type access 等二层属性。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "执行 undo portswitch 后接口成为三层接口，只能配置IP地址等三层属性，二层相关命令如 port link-type 将不再适用。若要恢复二层属性需先执行 portswitch。"
  },
  {
    "id": "HG043",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在单臂路由中，路由器与交换机之间的链路类型若配置为Access，会导致？",
    "options": [
      "只有VLAN 1能通信",
      "子接口自动变为三层物理接口",
      "所有VLAN报文进入路由器时不带标签，子接口无法区分VLAN，路由失败",
      "链路无法UP"
    ],
    "answer": "C",
    "explain": "Access链路会剥离VLAN标签，路由器收到的是无标签报文，子接口依赖 dot1q termination vid 识别VLAN，因此无法区分报文归属，VLAN间路由失败。单臂路由要求该链路为Trunk。"
  },
  {
    "id": "HG044",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "下列关于VLAN间通信方式的说法，正确的有？",
    "options": [
      "单臂路由适用于VLAN数量少、流量不大的小型网络",
      "三层交换机VLANIF方式适用于VLAN数量多、流量大的场景",
      "三层交换机使用物理三层接口划分VLAN时，每个VLAN需占用一个物理接口",
      "VLAN间通信不需要三层设备的参与"
    ],
    "answer": ["A", "B", "C"],
    "explain": "单臂路由部署简单但性能受限，适合小型网络；VLANIF方式性能高，适合中大型网络；使用三层物理接口时每个VLAN对应一个物理接口，端口消耗大。VLAN间通信必须有三层设备参与，D选项错误。"
  },
  {
    "id": "HG045",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上，VLANIF 10 与 VLANIF 20 之间转发报文时，VLAN标签的处理方式是？",
    "options": [
      "入方向保留VLAN 10标签，出方向仍带VLAN 10标签",
      "入方向剥离VLAN 10标签，出方向封装VLAN 20标签",
      "两端都不带标签",
      "出方向同时封装VLAN 10与VLAN 20两个标签"
    ],
    "answer": "B",
    "explain": "报文从VLAN 10进入时被剥离VLAN 10标签进入三层处理，路由后在从VLANIF 20转发时重新封装VLAN 20的标签。标签的剥离与重新封装是VLAN间路由的必然过程。"
  },
  {
    "id": "HG046",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "三层交换机的VLANIF接口配置IP地址后，即使VLAN内没有任何活动端口，该VLANIF也能正常转发跨VLAN流量。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "若VLAN内没有UP的成员端口，VLANIF将处于down状态，无法进行三层转发。VLANIF必须在VLAN存在且有UP成员端口时才会UP，才能承担网关转发功能。"
  },
  {
    "id": "HG047",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在三层交换机上检查VLANIF 10是否已经UP，最直接有效的命令是？",
    "options": [
      "display mac-address",
      "display arp",
      "display ip interface brief",
      "display current-configuration | include vlan"
    ],
    "answer": "C",
    "explain": "display ip interface brief 会列出包括VLANIF在内的三层接口的物理状态与协议状态，可直接判断VLANIF是否UP。display mac-address 查看的是二层转发表，无法反映三层接口状态。"
  },
  {
    "id": "HG048",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于三层交换机与路由器在VLAN间路由场景中的角色，下列说法正确的有？",
    "options": [
      "三层交换机通常作为内网各VLAN的网关，实现高速VLAN间路由",
      "路由器通常承担出口、NAT及广域网互联等职责",
      "两者可以配合使用，三层交换机做内网汇聚，路由器做出口",
      "三层交换机完全取代路由器，可承担所有广域网互联功能"
    ],
    "answer": ["A", "B", "C"],
    "explain": "典型组网中三层交换机负责内网VLAN间的高速路由，路由器负责出口NAT、VPN和广域网连接，二者分工互补。三层交换机广域网接口和业务功能有限，不能完全取代路由器，D选项错误。"
  },
  {
    "id": "HG049",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "关于三层交换机与路由器差异的说法，下列正确的有？",
    "options": [
      "三层交换机更适合承担广域网接口互联和复杂VPN业务",
      "三层交换机基于硬件转发，通常更适合内网高速VLAN间路由",
      "路由器在NAT、VPN等复杂三层业务功能上通常更强",
      "三层交换机不具备任何路由功能"
    ],
    "answer": ["B", "C"],
    "explain": "三层交换机依靠ASIC硬件转发，适合内网VLAN间的高速路由；广域网互联、NAT、VPN等复杂三层业务通常由路由器承担，其业务功能更强。A选项说反了，D选项明显错误。"
  },
  {
    "id": "HG050",
    "type": "fill",
    "chapter": "VLAN间路由",
    "stem": "在路由器子接口上，为确保广播报文能够被正确处理，必须配置 arp ______ enable。",
    "options": [],
    "answer": ["broadcast"],
    "explain": "arp broadcast enable 用于开启子接口的ARP广播功能，使其能够正常收发广播报文完成ARP解析。华为路由器子接口默认不处理广播，缺少该命令将导致主机无法解析网关MAC。"
  },
  {
    "id": "HG051",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "华为设备上基本ACL的编号范围是？",
    "options": [
      "2000-2999",
      "3000-3999",
      "4000-4999",
      "5000-5999"
    ],
    "answer": "A",
    "explain": "基本ACL编号范围为2000-2999，只能基于源IP地址等二层以上信息进行匹配。3000-3999为高级ACL，4000-4999为二层ACL，5000-5999为用户自定义ACL。"
  },
  {
    "id": "HG052",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "高级ACL的编号范围是？",
    "options": [
      "2000-2999",
      "3000-3999",
      "4000-4999",
      "6000-6999"
    ],
    "answer": "B",
    "explain": "高级ACL编号范围为3000-3999，可基于源/目的IP地址、协议类型、源/目的端口号等丰富信息进行匹配，常用于精细化流量控制。"
  },
  {
    "id": "HG053",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL对报文的匹配顺序是？",
    "options": [
      "按照rule编号从大到小匹配",
      "所有规则全部匹配完成后综合判断",
      "按照rule编号从小到大自上而下匹配，首次命中即生效",
      "随机顺序匹配"
    ],
    "answer": "C",
    "explain": "ACL规则按编号从小到大依次匹配，报文一旦命中某条规则即按该规则的动作处理，不再继续向下匹配。因此规则顺序直接影响匹配结果，配置时需注意顺序安排。"
  },
  {
    "id": "HG054",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL末尾隐含一条 deny 规则，如果报文没有匹配任何已配置的规则，将被拒绝。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "华为ACL在所有规则之后隐含一条拒绝所有的规则。若报文未匹配任何显式规则，最终会被丢弃。因此在做流量过滤时，通常需要显式配置 permit 规则以放行允许的流量。"
  },
  {
    "id": "HG055",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL通配符掩码中，比特位为0表示？",
    "options": [
      "该位被忽略，可以是任意值",
      "该位必须为0",
      "该位必须为1",
      "该位必须严格匹配"
    ],
    "answer": "D",
    "explain": "通配符掩码中0表示对应比特位需要严格匹配，1表示该位可以是任意值（被忽略）。例如192.168.1.0 0.0.0.255表示匹配192.168.1.0/24网段的所有地址。"
  },
  {
    "id": "HG056",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于ACL中 any 与 host 关键字，下列说法正确的有？",
    "options": [
      "any 表示匹配所有地址",
      "host 192.168.1.1 表示只匹配192.168.1.1这一个地址",
      "any 表示只匹配主机所在网段",
      "host 192.168.1.1 等价于 192.168.1.1 0.0.0.0"
    ],
    "answer": ["A", "B", "D"],
    "explain": "any 表示匹配任意地址，host 后跟具体地址表示精确匹配单个主机。host 192.168.1.1 与 192.168.1.1 0.0.0.0 等价，因为通配符全0表示所有位都必须严格匹配。C选项错误。"
  },
  {
    "id": "HG057",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "基本ACL在应用时应尽量部署在靠近哪一侧？",
    "options": [
      "靠近源端",
      "靠近目的端",
      "任意位置效果相同",
      "必须部署在核心层"
    ],
    "answer": "B",
    "explain": "基本ACL只能匹配源IP地址，若部署在靠近源端，会误伤其他源地址相同的合法流量；部署在靠近目的端可以更精确地过滤目标流量，因此原则是基本ACL靠近目的。"
  },
  {
    "id": "HG058",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "高级ACL在应用时应尽量部署在靠近哪一侧？",
    "options": [
      "靠近目的端",
      "靠近源端",
      "任意位置效果相同",
      "必须部署在接入层"
    ],
    "answer": "B",
    "explain": "高级ACL可以精确匹配源/目的地址、协议和端口，部署在靠近源端可以在流量进入网络前就将其过滤，减少无效流量占用带宽，因此原则是高级ACL靠近源。"
  },
  {
    "id": "HG059",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL的inbound方向是指报文离开路由器接口的方向，outbound方向是指报文进入路由器接口的方向。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "inbound 表示从该接口进入设备的报文，outbound 表示从该接口发出的报文，题目中的描述正好说反了。同一ACL应用在不同方向效果不同，配置时必须结合流量走向选择正确的方向。"
  },
  {
    "id": "HG060",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在接口上应用ACL对流量进行过滤的命令是 traffic-______ inbound acl 3000。",
    "options": [],
    "answer": ["filter"],
    "explain": "traffic-filter inbound acl 3000 表示在接口入方向调用ACL 3000对报文进行过滤。traffic-filter 是华为设备上实现基于ACL的流量过滤的标准命令。"
  },
  {
    "id": "HG061",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "查看设备上ACL配置时，下列哪些命令可以获得有用信息？",
    "options": [
      "display acl all 查看所有ACL规则及匹配计数",
      "display ip routing-table 查看路由表即可获知ACL规则",
      "display acl 3000 查看指定ACL的规则",
      "display nat session all 查看NAT会话表"
    ],
    "answer": ["A", "C", "D"],
    "explain": "display acl all 与 display acl 3000 用于查看ACL规则，display nat session all 可查看NAT会话（NAT常与ACL配合，可辅助验证感兴趣流是否被匹配）。路由表与ACL规则无关，B选项错误。"
  },
  {
    "id": "HG062",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL在设备上可以应用于下列哪些场景？",
    "options": [
      "接口流量过滤（traffic-filter）",
      "NAT地址转换的匹配条件（nat outbound）",
      "路由策略中过滤路由",
      "限制远程登录（Telnet/SSH）的源地址"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "ACL是通用的匹配工具，可用于接口流量过滤、NAT的匹配条件、路由策略中过滤路由以及通过 user-interface 下的 acl 命令限制远程登录源地址等多种场景。"
  },
  {
    "id": "HG063",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在ACL 2000中只允许源地址为192.168.1.0/24的报文通过，则规则中应使用的动作关键字是 ______。",
    "options": [],
    "answer": ["permit"],
    "explain": "基本ACL的规则格式为 rule permit source 地址 通配符掩码，ACL使用通配符掩码而非子网掩码，因此应写为 rule permit source 192.168.1.0 0.0.0.255。permit 表示允许匹配该条件的报文通过。"
  },
  {
    "id": "HG064",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL可以通过 rule 命令中的 time-range 参数实现基于时间的访问控制，在指定时间段内才生效。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "华为ACL支持在规则中引用 time-range，先在 time-range 视图下定义时间段，再在规则中引用，即可实现仅在特定时间段生效的访问控制，例如限制上班时间的非业务流量。"
  },
  {
    "id": "HG065",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于ACL对分片报文的匹配，下列说法正确的是？",
    "options": [
      "分片报文无法被ACL匹配",
      "高级ACL匹配非首片分片报文时，通常只匹配三层信息，不能匹配四层端口信息",
      "所有分片报文都携带完整TCP/UDP端口信息",
      "ACL对分片报文一律放行"
    ],
    "answer": "B",
    "explain": "只有首片分片报文包含四层报头信息，后续非首片分片报文中没有TCP/UDP端口字段，因此高级ACL在匹配非首片报文时只能依据源/目的IP等三层信息进行判断。"
  },
  {
    "id": "HG066",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于ACL分类，下列对应关系正确的有？",
    "options": [
      "基本ACL：2000-2999，仅匹配源IP等",
      "高级ACL：3000-3999，可匹配协议、端口等",
      "二层ACL：4000-4999，匹配源/目的MAC等二层信息",
      "基本ACL：1000-1999，可匹配源端口号"
    ],
    "answer": ["A", "B", "C"],
    "explain": "华为ACL按编号区间分类：基本ACL为2000-2999，高级ACL为3000-3999，二层ACL为4000-4999，用户自定义ACL为5000-5999。D选项编号区间和匹配能力均描述错误。"
  },
  {
    "id": "HG067",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "静态NAT的特点是什么？",
    "options": [
      "多个私网地址共用一个公网地址",
      "公网地址动态分配，用完为止",
      "公网地址与私网地址一对一固定映射，双向均可发起访问",
      "不需要任何配置即可生效"
    ],
    "answer": "C",
    "explain": "静态NAT建立一对一的固定映射关系，公网地址与私网地址绑定不变，因此不仅内部可以访问外部，外部也可以主动访问内部主机，常与NAT Server配合发布内部服务。"
  },
  {
    "id": "HG068",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "动态NAT与NAPT的主要区别在于？",
    "options": [
      "动态NAT是一对一的地址转换，NAPT还转换端口，可实现多对一",
      "动态NAT支持端口转换，NAPT不支持",
      "两者本质上完全相同",
      "动态NAT只能用于静态地址"
    ],
    "answer": "A",
    "explain": "动态NAT从地址池中为每个内部会话分配一个公网地址，是一对一转换，地址数限制了并发会话数；NAPT在转换IP地址的同时转换端口，使多个内网主机可以共用少量公网地址。"
  },
  {
    "id": "HG069",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "Easy IP方式的特点是？",
    "options": [
      "必须预先配置一个包含多个地址的地址池",
      "直接使用接口IP地址作为转换后的公网地址，无需配置地址池",
      "只能做一对一的静态映射",
      "不需要配置ACL即可转换所有流量"
    ],
    "answer": "B",
    "explain": "Easy IP直接借用出接口的IP地址进行NAT转换，不需要配置 nat address-group 地址池，特别适用于通过拨号或DHCP动态获取公网地址的场景。它同样需要用ACL指定感兴趣流。"
  },
  {
    "id": "HG070",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "NAT转换只修改IP报文的源IP地址和目的IP地址，不会修改TCP/UDP端口号。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "在NAPT（PAT）场景下，NAT设备不仅转换IP地址，还会转换TCP/UDP的端口号，以便用同一个公网地址区分多个内部会话。因此“不会修改端口号”的说法是错误的。"
  },
  {
    "id": "HG071",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于NAT的优点，下列说法正确的有？",
    "options": [
      "节省公网IP地址资源，实现地址复用",
      "可以完全避免网络攻击",
      "隐藏内部网络结构，提高一定的安全性",
      "使内部网络可以使用私有地址，无需为每个终端申请公网地址"
    ],
    "answer": ["A", "C", "D"],
    "explain": "NAT的核心价值在于节省公网地址、支持私网地址规划并对外隐藏内网结构，从而提供一定的安全收益。但NAT并不能阻止所有攻击，例如针对已建立会话的攻击仍可能生效，B选项错误。"
  },
  {
    "id": "HG072",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "NAPT（PAT）转换中使用的端口号信息来自哪里？",
    "options": [
      "由内部主机固定指定且不可更改",
      "由目的主机指定",
      "由NAT设备分配并维护，用于区分不同内部会话",
      "取自ACL的规则编号"
    ],
    "answer": "C",
    "explain": "NAPT由NAT设备为每个内部会话分配不同的源端口号，并维护转换会话表，从而用同一个公网地址区分多个内部主机的连接。这也是NAPT能够实现多对一转换的关键。"
  },
  {
    "id": "HG073",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "配置NAT地址池使用的命令是？",
    "options": [
      "nat outbound 2000",
      "nat server",
      "acl number 2000",
      "nat address-group 1"
    ],
    "answer": "D",
    "explain": "nat address-group 1 用于创建编号为1的NAT地址池并进入其视图，随后可用 section 命令指定地址范围。nat outbound 用于在接口上关联ACL与地址池，nat server 用于配置内部服务器映射。"
  },
  {
    "id": "HG074",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在接口上配置 nat outbound 2000 address-group 1 的含义是？",
    "options": [
      "对匹配ACL 2000的报文，出方向使用地址池1进行NAT转换",
      "对匹配ACL 2000的报文进行入方向过滤",
      "把所有报文转换为地址池1中的地址",
      "创建编号为2000的地址池"
    ],
    "answer": "A",
    "explain": "nat outbound 命令将ACL与地址池关联，对匹配该ACL的流量在出方向执行NAT转换。若不加 address-group 而直接跟ACL编号，则表示使用Easy IP方式借用接口地址。"
  },
  {
    "id": "HG075",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "NAT Server通过配置“公网地址+端口”与“私网地址+端口”的映射关系，可以让外部用户访问内部服务器。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "nat server 命令建立公网地址端口到内网服务器地址端口的静态映射，外部用户访问公网地址的指定端口时，报文会被转换并转发到内部服务器，实现内部服务的对外发布。"
  },
  {
    "id": "HG076",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "查看设备当前NAT会话表的命令是？",
    "options": [
      "display acl all",
      "display nat session all",
      "display nat address-group",
      "display ip interface brief"
    ],
    "answer": "B",
    "explain": "display nat session all 可查看当前NAT会话的转换关系，包括私网地址端口与公网地址端口的对应情况，是排查NAT是否生效的重要命令。display nat address-group 只显示地址池配置。"
  },
  {
    "id": "HG077",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于NAT的局限性，下列说法正确的有？",
    "options": [
      "NAT设备需要维护会话表，增加了设备资源开销",
      "NAT会降低链路带宽的物理速率",
      "地址转换破坏了端到端的透明性，某些应用协议需要ALG支持",
      "会话表超时后连接会被清除，长连接应用可能受到影响"
    ],
    "answer": ["A", "C", "D"],
    "explain": "NAT需要维护会话表并可能因超时清除表项，同时破坏了端到端透明性，对FTP、SIP等携带地址信息的协议需要ALG配合。NAT不会改变链路的物理带宽，B选项错误。"
  },
  {
    "id": "HG078",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "NAT与ACL配合使用时，ACL的作用是？",
    "options": [
      "对NAT转换后的报文进行二次封装",
      "为NAT提供地址池",
      "指定哪些流量需要进行NAT转换，即定义感兴趣流",
      "替代NAT完成地址映射"
    ],
    "answer": "C",
    "explain": "在NAT配置中，ACL用于匹配需要进行地址转换的流量，未匹配ACL的报文将不做NAT转换而直接转发（或走其他策略）。因此ACL定义的感兴趣流范围必须准确。"
  },
  {
    "id": "HG079",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "某企业使用PPPoE拨号上网，公网地址由运营商动态分配。最适合的NAT方式是？",
    "options": [
      "静态NAT",
      "配置固定地址池的动态NAT",
      "NAT Server",
      "Easy IP"
    ],
    "answer": "D",
    "explain": "Easy IP直接使用接口地址进行转换，不依赖固定公网地址，非常适合同步获取动态公网地址的拨号场景。静态NAT和地址池方式都需要明确、固定的公网地址。"
  },
  {
    "id": "HG080",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在接口上配置Easy IP方式实现NAT，命令为 nat ______ 2000。",
    "options": [],
    "answer": ["outbound"],
    "explain": "nat outbound 2000 表示对匹配ACL 2000的流量在出方向进行NAT转换，由于未指定地址池，设备将使用接口IP地址，即Easy IP方式。"
  },
  {
    "id": "HG081",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于动态NAT的地址池，下列说法正确的有？",
    "options": [
      "地址池中的公网地址数量决定了可同时转换的内部主机数量",
      "动态NAT是一对一转换，一个内部会话占用一个公网地址",
      "地址池用尽后新的内部会话将无法完成NAT转换",
      "动态NAT在转换IP地址的同时也会转换源端口号以复用地址"
    ],
    "answer": ["A", "B", "C"],
    "explain": "动态NAT为每个内部会话一对一分配一个公网地址，地址池大小直接限制并发会话数，用尽后新会话无法转换。转换端口是NAPT的特性，纯动态NAT不转换端口，D选项错误。"
  },
  {
    "id": "HG082",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL规则中，编号较小的规则会被优先匹配，因此如果先配置了permit所有，后续的deny规则将不会生效。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "ACL按编号从小到大自上而下匹配，首次命中即停止匹配。若编号较小的规则已经permit了全部报文，后面编号较大的deny规则永远不会被匹配到，因此在配置时应先精确后宽泛。"
  },
  {
    "id": "HG083",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "用户自定义ACL的编号范围是？",
    "options": [
      "4000-4999",
      "3000-3999",
      "2000-2999",
      "5000-5999"
    ],
    "answer": "D",
    "explain": "用户自定义ACL的编号范围为5000-5999，可以通过 rule 命令中的 l2-protocol、source-mac 等参数或指定偏移量来灵活匹配报文内容，适用于二层及特殊字段的匹配需求。"
  },
  {
    "id": "HG084",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "下列关于NAT类型的说法，正确的有？",
    "options": [
      "静态NAT是一对一映射，公网地址与私网地址固定绑定",
      "动态NAT从地址池动态分配公网地址，也是一对一",
      "NAPT在转换地址的同时转换端口，实现多对一",
      "Easy IP属于NAPT的一种特例，使用接口地址作为转换地址"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "静态NAT为固定一对一映射；动态NAT从地址池分配地址，同时仍是一对一；NAPT通过端口区分会话实现多对一；Easy IP不配置地址池而直接使用接口地址，本质上属于NAPT的特例。"
  },
  {
    "id": "HG085",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在ACL 3000中配置规则拒绝源地址192.168.1.0/24访问Web服务器80端口，正确的规则是？",
    "options": [
      "rule deny source 192.168.1.0 0.0.0.255",
      "rule deny tcp source 192.168.1.0 0.0.0.255 destination 10.1.1.1 0 destination-port eq 80",
      "rule permit tcp source 192.168.1.0 0.0.0.255 destination-port eq 80",
      "rule deny ip source 192.168.1.0 0.0.0.255"
    ],
    "answer": "B",
    "explain": "高级ACL需指定协议类型、源地址、目的地址以及目的端口。B选项完整表达了拒绝192.168.1.0/24访问10.1.1.1的80端口。A选项缺少协议和端口信息，C是放行动作，D未指定端口。"
  },
  {
    "id": "HG086",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "同一个ACL可以被应用到多个接口的多个方向上，且在不同位置应用的效果完全相同。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "同一ACL确实可以被多处引用，但应用在不同接口或不同方向时，过滤的流量范围不同，效果并不相同。例如inbound过滤的是进入该接口的报文，outbound过滤的是从该接口发出的报文。"
  },
  {
    "id": "HG087",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL中的反掩码（通配符掩码）与子网掩码的关系是？",
    "options": [
      "两者完全相同",
      "通配符掩码与子网掩码无关",
      "通配符掩码是子网掩码按位取反的结果",
      "通配符掩码只能是0或255"
    ],
    "answer": "C",
    "explain": "通配符掩码与子网掩码互为按位取反关系：子网掩码中1表示网络位，通配符中0表示需要严格匹配的位。例如子网掩码255.255.255.0对应的通配符掩码为0.0.0.255。"
  },
  {
    "id": "HG088",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于NAT的转换过程，下列说法正确的有？",
    "options": [
      "出方向转换时，私网源地址被替换为公网地址",
      "回程报文进入时，NAT设备依据会话表将公网目的地址还原为私网地址",
      "NAPT场景下端口号也会被转换并在会话表中记录",
      "NAT转换后IP报文的校验和无需重新计算，保持原值即可"
    ],
    "answer": ["A", "B", "C"],
    "explain": "NAT出方向替换源地址（NAPT还替换源端口），并建立会话表项；回程报文依据会话表将目的地址和端口还原为私网值。由于IP头字段被修改，校验和必须重新计算，D选项错误。"
  },
  {
    "id": "HG089",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "配置NAT Server发布内部Web服务器（私网10.1.1.10:80，公网200.1.1.1:8080）的命令是？",
    "options": [
      "nat outbound 2000 address-group 1",
      "nat address-group 1",
      "traffic-filter inbound acl 3000",
      "nat server protocol tcp global 200.1.1.1 8080 inside 10.1.1.10 80"
    ],
    "answer": "D",
    "explain": "nat server 命令通过 protocol、global、inside 参数建立公网地址端口与内部服务器地址端口的映射。此处将公网的200.1.1.1:8080映射到内网10.1.1.10的80端口，外部用户即可通过该地址端口访问内部Web服务。"
  },
  {
    "id": "HG090",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在ACL视图下配置允许源地址为192.168.1.0/24的报文的规则是 rule ______ source 192.168.1.0 0.0.0.255。",
    "options": [],
    "answer": ["permit"],
    "explain": "rule permit source 192.168.1.0 0.0.0.255 表示允许源地址属于192.168.1.0/24网段的报文通过。permit 为允许动作，与 deny 相对，是ACL中最常用的两种动作。"
  },
  {
    "id": "HG091",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "限制只有特定网段可以Telnet登录设备，应在哪个视图下应用ACL？",
    "options": [
      "接口视图下使用 traffic-filter",
      "user-interface 视图下使用 acl 命令",
      "system 视图下使用 acl number",
      "NAT地址池视图下"
    ],
    "answer": "B",
    "explain": "通过 user-interface vty 视图下的 acl 2000 命令可只允许ACL匹配的源地址登录设备，实现对远程登录的限制。接口下的 traffic-filter 用于流量过滤，不能控制登录权限。"
  },
  {
    "id": "HG092",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "NAPT可以让多个内部主机共用同一个公网IP地址同时上网，依靠不同的端口号区分不同会话。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "NAPT在转换IP地址的同时转换源端口，为每个内部会话分配唯一的公网端口号，从而用同一个公网地址承载大量并发会话。这是家庭和企业出口最常用的NAT方式。"
  },
  {
    "id": "HG093",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "若在接口上应用了 traffic-filter inbound acl 3000，但ACL 3000中没有任何规则，则结果是？",
    "options": [
      "所有报文都被放行",
      "只有广播报文被拒绝",
      "所有报文都被拒绝，因为命中末尾隐含的deny",
      "接口会自动shutdown"
    ],
    "answer": "C",
    "explain": "空ACL中没有任何显式规则，报文无法命中任何规则，最终会命中ACL末尾隐含的deny规则而被丢弃。因此在应用ACL前应确保已配置必要的permit规则，避免误断业务。"
  },
  {
    "id": "HG094",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "下列命令中，属于NAT相关配置或查询命令的有？",
    "options": [
      "nat address-group 1",
      "traffic-filter inbound acl 3000",
      "nat outbound 2000",
      "display nat session all"
    ],
    "answer": ["A", "C", "D"],
    "explain": "nat address-group 用于配置NAT地址池，nat outbound 用于在接口上关联ACL实现出方向转换，display nat session all 用于查看NAT会话表。traffic-filter 属于ACL流量过滤命令，与NAT配置无关。"
  },
  {
    "id": "HG095",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "某公司希望禁止市场部（192.168.10.0/24）在上班时间访问视频网站，最合适的技术是？",
    "options": [
      "配置静态NAT",
      "使用单臂路由",
      "创建更多VLAN",
      "基于时间的ACL，在特定时间段内拒绝该网段访问视频服务器"
    ],
    "answer": "D",
    "explain": "基于时间的ACL通过 time-range 定义时间段，并在规则中引用，可实现在指定时间内拒绝特定流量。NAT、单臂路由和VLAN划分都无法实现按时间维度的访问控制。"
  },
  {
    "id": "HG096",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "基本ACL可以匹配源IP地址、目的IP地址和端口号。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "基本ACL只能匹配源IP地址等有限信息，不能匹配目的IP地址、协议类型和端口号。需要基于目的地址、协议或端口进行匹配时，必须使用高级ACL（3000-3999）。"
  },
  {
    "id": "HG097",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "NAT会话表项在长时间没有流量匹配后会被老化删除，从而释放所占用的公网地址和端口资源。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "NAT会话表项具有老化时间，超过该时间没有报文匹配的表项会被删除，释放所占用资源供其他会话使用。老化时间的长短会影响长连接应用的稳定性，与ACL编号无关。"
  },
  {
    "id": "HG098",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于ACL匹配原则，下列说法正确的有？",
    "options": [
      "报文自上而下与规则逐一比对，命中即执行对应动作并停止匹配",
      "ACL末尾存在隐含的deny规则",
      "若需要放行大部分流量，应先配置精确的deny规则再配置permit规则",
      "ACL规则的匹配与规则编号顺序无关"
    ],
    "answer": ["A", "B", "C"],
    "explain": "ACL按编号从小到大顺序匹配，命中即生效；末尾隐含deny；因此放行大部分流量时应先用较小号规则精确拒绝需要禁止的流量，再用较大号规则放行其余流量。D选项错误，顺序至关重要。"
  },
  {
    "id": "HG099",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "内部主机经出口路由器访问互联网，路由器采用 Easy IP 方式进行地址转换，则转换后使用的公网地址是路由器出接口的______。",
    "options": [],
    "answer": ["IP地址","IP","ip地址"],
    "explain": "Easy IP 是 NAPT 的一种特例，直接使用出接口的 IP 地址作为转换后的公网地址，无需单独配置地址池，特别适用于通过拨号或 DHCP 动态获取地址的出口场景。"
  },
  {
    "id": "HG100",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "配置基于ACL的流量过滤后，若要查看ACL各条规则的匹配次数，应使用命令 display ______ all。",
    "options": [],
    "answer": ["acl"],
    "explain": "display acl all 会列出所有ACL的规则及其匹配报文计数，通过计数可以判断ACL是否被正确调用、哪些规则实际生效，是验证ACL配置效果的常用手段。"
  }
];