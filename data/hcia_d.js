window.BANK_HCIA_D = [
  {
    "id": "HD001",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机上执行 display port vlan GigabitEthernet0/0/1 命令，输出中显示 PVID: 10，且该接口为 Access 类型。当该接口收到一个不带标签的帧时，交换机的处理方式是？",
    "options": ["丢弃该帧","打上 VLAN 1 的标签后在 VLAN 1 内转发","直接按 MAC 地址表转发并保持无标签","打上 VLAN 10 的标签后在 VLAN 10 内转发"],
    "answer": "D",
    "explain": "Access 接口对未打标签的帧按照接口 PVID 加上标签后再进行二层转发。PVID 为 10，因此帧被划入 VLAN 10。Access 接口收到带标签帧时，只有标签与本接口 PVID 相同才接收，否则丢弃。"
  },
  {
    "id": "HD002",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "关于 802.1Q 帧标签中的字段，下列说法正确的有？",
    "options": ["TPID 长度为 2 字节，标准取值为 0x8100","PRI 占 3 位，用于表示帧的优先级，取值 0~7","CFI 占 1 位，以太网中通常置 0","VID 占 16 位，用于标识 VLAN ID"],
    "answer": ["A","B","C"],
    "explain": "802.1Q 标签共 4 字节：2 字节 TPID（0x8100）、3 位 PRI、1 位 CFI、12 位 VID。VID 为 12 位而非 16 位，因此选项 D 错误。"
  },
  {
    "id": "HD003",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "802.1Q 标签共 4 字节，其中 VID 字段占多少位？可表示的 VLAN ID 范围是多少？",
    "options": ["8 位，范围 0~255","12 位，范围 0~4095","16 位，范围 0~65535","12 位，范围 1~4094（可用）"],
    "answer": "D",
    "explain": "802.1Q 标签中 VID 字段为 12 bit，理论取值 0~4095。其中 0 表示优先级标签（帧中携带 PRI 但无 VLAN 信息），4095 为保留值，实际可用于划分 VLAN 的 ID 范围是 1~4094。"
  },
  {
    "id": "HD004",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "某 Trunk 接口配置为 port trunk allow-pass vlan 10 20，接口 PVID 为 1。当该接口发送 VLAN 10 的帧时，其处理方式是？",
    "options": ["剥离标签后发送","重新标记为 VLAN 1 后发送","携带 VLAN 10 标签发送","丢弃该帧"],
    "answer": "C",
    "explain": "Trunk 接口发送帧时，只有 VID 等于本接口 PVID 的帧才剥离标签，其余允许通过的 VLAN 帧一律带标签发送。VLAN 10 不等于 PVID 1，因此带标签发出。"
  },
  {
    "id": "HD005",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "某 Trunk 接口 PVID 为 1，允许通过的 VLAN 列表为 10、20。当该接口收到一个不带标签的帧时，处理方式是？",
    "options": ["丢弃该帧","按 MAC 表转发，不改变标签状态","打上 VLAN 10 的标签后转发","打上 VLAN 1 的标签，若 VLAN 1 在允许列表中则转发，否则丢弃"],
    "answer": "D",
    "explain": "Trunk 接口收到不带标签的帧时，按接口 PVID 打标签，本例即打上 VLAN 1 标签。但接口允许列表中没有 VLAN 1，因此该帧会被丢弃。这说明 PVID 与允许 VLAN 列表是两个独立概念。"
  },
  {
    "id": "HD006",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于 Hybrid 接口的 port hybrid untagged vlan 命令，下列描述正确的是？",
    "options": ["该命令使指定 VLAN 的帧在从本接口发出时携带标签","该命令使接口在接收不带标签帧时打上指定 VLAN 标签","该命令使指定 VLAN 的帧在从本接口发出时剥离标签","该命令用于设置接口的 PVID"],
    "answer": "C",
    "explain": "Hybrid 接口的 untagged 列表控制发送时哪些 VLAN 去标签，tagged 列表控制发送时哪些 VLAN 保留标签。设置 PVID 使用 port hybrid pvid vlan 命令。"
  },
  {
    "id": "HD007",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "需要在交换机上创建 VLAN 100 并进入其视图，正确的命令是？",
    "options": ["vlan batch 100","interface vlan 100","vlan 100","create vlan 100"],
    "answer": "C",
    "explain": "vlan 100 用于创建 VLAN 100 并进入 VLAN 视图；vlan batch 100 只批量创建而不进入视图；interface vlanif 100 用于创建 VLANIF 三层接口。"
  },
  {
    "id": "HD008",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "数据帧在交换机内部转发时，关于标签状态的说法正确的是？",
    "options": ["交换机内部转发的帧一律不带标签","交换机内部转发时标签状态由入接口的 PVID 决定","交换机内部转发时只有跨 VLAN 的帧才带标签","交换机内部转发的帧一律带标签，出接口再决定是否剥离"],
    "answer": "D",
    "explain": "交换机内部按照带标签的方式处理帧，入接口负责给帧加上标签（或校验已有标签），出接口根据接口类型和 VLAN 配置决定剥离还是保留标签。"
  },
  {
    "id": "HD009",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "两台交换机通过 Trunk 互联，本端允许 VLAN 10，对端未在允许列表中加入 VLAN 10。VLAN 10 的流量会出现什么结果？",
    "options": ["流量正常通过，因为标签已经携带","流量被自动改划到 VLAN 1","流量在对端接口被丢弃，无法跨交换机通信","流量被缓存等待对端配置后再转发"],
    "answer": "C",
    "explain": "Trunk 接口的允许列表对收发双向生效。对端未允许 VLAN 10，收到的带 VLAN 10 标签的帧会被直接丢弃。两端 Trunk 的允许列表必须一致。"
  },
  {
    "id": "HD010",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "下列关于 Access 接口收发帧规则的说法，正确的有？",
    "options": ["发送任意 VLAN 的帧时都剥离标签后发出","收到带标签且标签等于 PVID 的帧时，接收并转发","发送 VLAN 等于 PVID 的帧时，剥离标签后发出","收到不带标签的帧时，按 PVID 打标签并接收"],
    "answer": ["B","C","D"],
    "explain": "Access 接口只属于一个 VLAN，行为可概括为：无标签帧按 PVID 打标接收；带标签帧仅当标签等于 PVID 时接收；发送时一律剥离标签。因此不存在“任意 VLAN 都能发出”的情况。"
  },
  {
    "id": "HD011",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "Hybrid 接口相比 Trunk 接口的优势体现在哪些方面？（多选）",
    "options": ["可以在一个接口上让不同 VLAN 的帧以不同标签状态发送","可以同时承载多个 VLAN 且各 VLAN 的发送标签策略独立配置","可以基于 MAC 地址自动划分 VLAN","一个接口可以同时连接属于不同 VLAN 的终端并按需去标签"],
    "answer": ["A","B","D"],
    "explain": "Hybrid 接口的 tagged/untagged 列表可以针对每个 VLAN 单独指定发送时是否携带标签，因此能灵活连接服务器、IP 电话等多种终端。基于 MAC 自动划分 VLAN 属于 VLAN 分配策略，与接口类型无关。"
  },
  {
    "id": "HD012",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "下列关于 PVID 的描述，正确的有？",
    "options": ["PVID 用于给接口收到的 untagged 帧打上 VLAN 标签","PVID 是接口属性，不同接口可以配置不同的 PVID","PVID 决定了接口发送帧时是否剥离标签（对 Trunk/Hybrid）","PVID 必须等于接口允许 VLAN 列表中的某个 VLAN 才有意义"],
    "answer": ["A","B","C","D"],
    "explain": "PVID（Port VLAN ID）是接口的缺省 VLAN 标识：untagged 帧按 PVID 打标进入交换机；Trunk/Hybrid 接口发送 VID 等于 PVID 的帧时去标签。若 PVID 不在允许列表中，该 VLAN 的帧会被丢弃，因此配置上应保证一致性。"
  },
  {
    "id": "HD013",
    "type": "fill",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机上查看各接口的接口类型、PVID 及允许 VLAN 列表的命令是 display ______ vlan。",
    "options": [],
    "answer": ["port"],
    "explain": "display port vlan 显示各接口的接口类型、PVID 和允许通过的 VLAN 列表，是排查 VLAN 配置问题的常用命令。display vlan 则显示 VLAN 及其成员接口。"
  },
  {
    "id": "HD014",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "某接口配置如下：port link-type hybrid、port hybrid pvid vlan 20、port hybrid untagged vlan 20、port hybrid tagged vlan 30。该接口收到 VLAN 30 的带标签帧时？",
    "options": ["丢弃，因为 30 不在 untagged 列表","接收后改为 VLAN 20","接收后剥离标签再转发","接收并转发，因为 30 在 tagged 列表"],
    "answer": "D",
    "explain": "Hybrid 接口的 tagged 和 untagged 列表都表示该 VLAN 允许通过，区别仅在发送时是否保留标签。VLAN 30 在 tagged 列表中，帧被正常接收并带标签转发。"
  },
  {
    "id": "HD015",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于 Native VLAN 与 PVID 的关系，下列说法正确的是？",
    "options": ["Native VLAN 必须为 VLAN 1，PVID 可以是任意 VLAN","Native VLAN 是 Cisco 术语，功能上对应华为接口的 PVID（缺省 VLAN）","Native VLAN 用于接收带标签帧，PVID 用于发送","两者是完全相同的概念，名称不同但取值范围不同"],
    "answer": "B",
    "explain": "Cisco 的 Native VLAN 与华为的 PVID 在功能上等价，都表示 Trunk 接口上不打标签的那个 VLAN。两者取值范围相同（1~4094），并非只有 VLAN 1。"
  },
  {
    "id": "HD016",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "Trunk 链路两端 PVID 配置不一致时，带标签的 VLAN 流量仍可正常转发，受影响的主要是无标签流量。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "带标签帧携带 VID，对端直接依据标签判定所属 VLAN，不受 PVID 差异影响。而无标签帧按各自接口的 PVID 打标签，两端不一致会导致同一数据流被划入不同广播域，造成通信异常。"
  },
  {
    "id": "HD017",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机缺省情况下，所有接口的接口类型和 PVID 分别是？",
    "options": ["Trunk，PVID 为 1","Hybrid，PVID 为 1","Access，PVID 为 1","Access，PVID 为 0"],
    "answer": "C",
    "explain": "华为 VRP 中接口缺省为 Access 类型，PVID 为 1，且缺省已加入 VLAN 1。VLAN 1 是缺省的 VLAN，不可被删除，但可以通过配置改变其成员。"
  },
  {
    "id": "HD018",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "VLAN 1 是华为交换机的缺省 VLAN，可以被删除。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "VLAN 1 是缺省 VLAN，系统保留，不能使用 undo vlan 1 删除。所有接口缺省都属于 VLAN 1，PVID 也是 1。"
  },
  {
    "id": "HD019",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于 Voice VLAN，下列描述正确的是？",
    "options": ["Voice VLAN 只能用于数据终端，不能用于 IP 电话","Voice VLAN 通过识别语音报文的源 MAC 或 OUI，将 IP 电话流量划分到专用 VLAN 以便提供 QoS 保障","Voice VLAN 必须使用 VLAN 4095","Voice VLAN 只能手工在 IP 电话上配置，交换机不支持"],
    "answer": "B",
    "explain": "Voice VLAN 是专为语音流量设计的 VLAN，交换机通过源 MAC 地址的 OUI 或 DHCP 等方式识别语音报文，自动为其打上 Voice VLAN 标签，便于统一部署优先级和 QoS 策略。"
  },
  {
    "id": "HD020",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机上使能 Voice VLAN 功能的命令是？",
    "options": ["vlan 10 voice","port voice enable","voice-vlan 10 enable","voice enable vlan 10"],
    "answer": "C",
    "explain": "在接口视图下使用 voice-vlan vlan-id enable 使能 Voice VLAN 功能，还可配合 voice-vlan mode auto 让接口自动识别语音报文并加入 Voice VLAN。"
  },
  {
    "id": "HD021",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于 MUX VLAN，下列说法正确的是？",
    "options": ["MUX VLAN 中所有从 VLAN 之间都可以互相通信","MUX VLAN 只能有一个 Separate VLAN 和多个 Group VLAN 之外的第三种类型","MUX VLAN 用于替代 Trunk，实现链路聚合","MUX VLAN 包含 Principal VLAN 和 Subordinate VLAN，Subordinate VLAN 又分为 Group VLAN 与 Separate VLAN"],
    "answer": "D",
    "explain": "MUX VLAN 通过 Principal VLAN 与主接口、Subordinate VLAN（Group 与 Separate）实现同一接口下的用户隔离：Group VLAN 内用户可互通，Separate VLAN 内用户彼此隔离，二者都只能与 Principal VLAN 通信。"
  },
  {
    "id": "HD022",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "在 MUX VLAN 中，Group VLAN 内的用户可以？",
    "options": ["与任意 VLAN 用户互通","与本 Group VLAN 内其他用户互通，并与 Principal VLAN 互通，但不能与其他 Group VLAN 互通","只能与 Principal VLAN 互通，组内彼此隔离","不能与任何 VLAN 互通"],
    "answer": "B",
    "explain": "Group VLAN 的特性是组内用户可二层互通，并可访问 Principal VLAN，但不同 Group VLAN 之间相互隔离。Separate VLAN 则连组内用户之间都不能互通。"
  },
  {
    "id": "HD023",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于 VLAN 聚合（Super VLAN）技术，下列描述正确的是？",
    "options": ["Super VLAN 内每个 Sub VLAN 必须使用不同的网段","Super VLAN 只能用于二层隔离，无法实现三层互通","Super VLAN 内各 Sub VLAN 使用同一个网段的 IP 地址，通过 Super VLAN 的 VLANIF 接口实现三层互通","Super VLAN 中的 Sub VLAN 之间默认可以直接二层通信"],
    "answer": "C",
    "explain": "Super VLAN 用于节省 IP 地址：多个 Sub VLAN 共用一个 IP 网段，各 Sub VLAN 之间二层隔离，需通过 Super VLAN 的 VLANIF 接口进行三层转发才能互通。"
  },
  {
    "id": "HD024",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "关于 VLAN 聚合（Super VLAN）的特点，下列说法正确的有？",
    "options": ["Sub VLAN 只是广播域的划分，不能配置 VLANIF 接口","Sub VLAN 数量不受限制，可以无限创建","Sub VLAN 之间的通信必须经过三层转发","所有 Sub VLAN 共用 Super VLAN 的 VLANIF 接口地址"],
    "answer": ["A","C","D"],
    "explain": "Super VLAN 中 Sub VLAN 只作二层广播域隔离用，不能创建 VLANIF；三层网关统一由 Super VLAN 的 VLANIF 提供，因此 Sub VLAN 间通信需三层转发。Sub VLAN 数量依然受设备规格限制。"
  },
  {
    "id": "HD025",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于 GVRP 协议，下列说法正确的是？",
    "options": ["GVRP 用于动态协商链路聚合","GVRP 用于动态学习 MAC 地址","GVRP 只能在 Access 接口上运行","GVRP 基于 GARP 实现 VLAN 属性的动态注册与注销，可减少手工配置"],
    "answer": "D",
    "explain": "GVRP（GARP VLAN Registration Protocol）基于 GARP 机制，在 Trunk 链路上动态注册和注销 VLAN，使交换机之间自动同步 VLAN 配置，但会带来一定的安全风险。"
  },
  {
    "id": "HD026",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机上全局使能 GVRP 并进入接口使能的命令组合是？",
    "options": ["gvrp enable 与 gvrp run","gvrp（系统视图）与 gvrp（接口视图）","garp enable 与 vlan enable","vlan gvrp 与 port gvrp"],
    "answer": "B",
    "explain": "GVRP 需要在系统视图执行 gvrp 全局使能，再到接口视图执行 gvrp 使能该接口的 GVRP 功能，此外接口必须为 Trunk 类型并配置允许 VLAN。"
  },
  {
    "id": "HD027",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "某公司使用一台交换机连接三个部门，要求部门内互通、部门间二层隔离但都能访问同一台服务器。最合适的技术是？",
    "options": ["VLAN 聚合","Voice VLAN","MUX VLAN","GVRP"],
    "answer": "C",
    "explain": "MUX VLAN 通过 Principal VLAN（服务器所在）与多个 Separate/Group VLAN（部门）实现部门间二层隔离与统一访问服务器。VLAN 聚合侧重节省 IP 地址，不解决访问控制。"
  },
  {
    "id": "HD028",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机上一个 Trunk 接口可以同时配置多个 PVID，分别对应不同的 VLAN。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "PVID 是接口的单一属性，每个接口只能配置一个 PVID，它决定接口收到无标签帧时被打上的 VLAN 标签。而允许 VLAN 列表可以包含多个 VLAN，二者相互独立。"
  },
  {
    "id": "HD029",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "在华为交换机上使用 port trunk allow-pass vlan all 命令的效果是？",
    "options": ["仅允许 VLAN 1 通过","允许 VLAN 1~4094 中所有 VLAN 通过，无论是否创建","撤销接口的所有 VLAN 配置","允许所有已创建的 VLAN（包括后续创建的 VLAN）通过该接口"],
    "answer": "D",
    "explain": "vlan all 表示允许所有已创建和以后创建的 VLAN 通过，是动态生效的配置方式，常用于简化 Trunk 配置，但存在一定安全风险。"
  },
  {
    "id": "HD030",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "同一个 VLAN 的主机跨越两台交换机通信时，若两台交换机之间使用 Access 链路互联，该 VLAN 流量仍可正常通过。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "Access 链路只承载一个 VLAN 且收发不带标签，无法区分多个 VLAN。跨交换机的同一 VLAN 流量必须在 Trunk 链路上以带标签方式传输，由对端依据 802.1Q 标签判定所属 VLAN。"
  },
  {
    "id": "HD031",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "关于 VLAN ID 的取值范围，下列说法正确的有？",
    "options": ["802.1Q 中 VID 字段为 12 位，理论取值 0~4095","VLAN 0 表示帧中只携带优先级信息而不含 VLAN 标识","VLAN 4095 为协议保留值，不能作为普通业务 VLAN 使用","可用业务 VLAN ID 范围为 1~4094"],
    "answer": ["A","B","C","D"],
    "explain": "VID 为 12 位，理论范围 0~4095：0 用于优先级标签（帧中无 VLAN 信息），4095 为保留值，因此实际可用的业务 VLAN ID 为 1~4094。设备实际支持数量还受硬件规格限制。"
  },
  {
    "id": "HD032",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "VLAN 4095 在华为交换机上的特殊用途是？",
    "options": ["作为 Voice VLAN 专用 ID","保留作为接口不与任何 VLAN 关联时的缺省标识（表示未加入 VLAN）","作为管理 VLAN","作为 Trunk 的缺省 PVID"],
    "answer": "B",
    "explain": "VLAN 4095 是协议保留值，华为设备中用于表示接口未加入任何 VLAN 或未配置时的占位标识，用户不能将其作为普通业务 VLAN 使用。"
  },
  {
    "id": "HD033",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "下列属于 VLAN 优点或作用的有？",
    "options": ["提高链路带宽，实现物理链路捆绑","提高网络安全性，实现不同用户组的二层隔离","提高网络管理的灵活性，用户可逻辑分组而不受物理位置限制","限制广播域，减少广播风暴的影响范围"],
    "answer": ["B","C","D"],
    "explain": "VLAN 的核心价值在于控制广播域、增强安全隔离和灵活的逻辑组网。提高链路带宽属于链路聚合（Eth-Trunk）的功能，与 VLAN 无关。"
  },
  {
    "id": "HD034",
    "type": "fill",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机上批量创建 VLAN 10、20、30 的命令是 vlan ______ 10 20 30。",
    "options": [],
    "answer": ["batch"],
    "explain": "vlan batch 10 20 30 可一次创建多个 VLAN，与逐个执行 vlan 10 相比更高效。若需创建连续范围，可使用 vlan batch 10 to 20。"
  },
  {
    "id": "HD035",
    "type": "fill",
    "chapter": "VLAN与Trunk",
    "stem": "802.1Q 帧的 TPID 字段标准取值为 ______（用十六进制表示，需带 0x 前缀）。",
    "options": [],
    "answer": ["0x8100","8100","0X8100"],
    "explain": "802.1Q 标签的前两字节为 TPID，标准值为 0x8100，用于标识该帧带有 802.1Q 标签。收到 TPID 非 0x8100 的帧时，普通接口会当作无标签帧或直接丢弃。"
  },
  {
    "id": "HD036",
    "type": "fill",
    "chapter": "VLAN与Trunk",
    "stem": "把接口设置为 Trunk 类型的华为命令是 port ______ trunk。",
    "options": [],
    "answer": ["link-type"],
    "explain": "华为交换机使用 port link-type trunk 将接口设置为 Trunk 类型，另外两种类型分别是 port link-type access 与 port link-type hybrid。"
  },
  {
    "id": "HD037",
    "type": "fill",
    "chapter": "VLAN与Trunk",
    "stem": "接口的缺省 VLAN 标识称为 ______，它决定了接口收到不带标签帧时被打上的 VLAN 标签。（填英文缩写）",
    "options": [],
    "answer": ["PVID","pvid"],
    "explain": "PVID（Port VLAN ID）是接口的缺省 VLAN ID。Access 接口的 PVID 即其所属 VLAN；Trunk/Hybrid 接口的 PVID 决定了收到的 untagged 帧归属哪个 VLAN。"
  },
  {
    "id": "HD038",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "Hybrid 接口可以同时对同一个 VLAN 既配置为 tagged 又配置为 untagged，发送时按需选择。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "对同一个 VLAN，Hybrid 接口的发送标签状态只能是 tagged 或 untagged 之一，两条命令对同一 VLAN 互斥，后配置的覆盖先配置的。不同 VLAN 之间才可以有不同的标签策略。"
  },
  {
    "id": "HD039",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于 Access 接口与 Hybrid 接口的联系，下列说法正确的是？",
    "options": ["Access 接口不能配置 PVID，Hybrid 接口可以","Hybrid 接口不能配置 PVID，Access 接口可以","Access 接口可以视为一种简化形式的 Hybrid 接口：只允许一个 VLAN 以 untagged 方式收发","两者完全等价，命令可以互换使用"],
    "answer": "C",
    "explain": "从转发行为看，Access 接口等价于只配置了单一 untagged VLAN 的 Hybrid 接口。但 Access 无法承载多个 VLAN，而 Hybrid 可以灵活配置多个 VLAN 的标签策略。"
  },
  {
    "id": "HD040",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "某交换机的 Hybrid 接口同时连接 PC 和 IP 电话，要求 PC 数据在 VLAN 20 中以不带标签方式收发，IP 电话语音在 VLAN 30 中以带标签方式收发。正确的配置思路是？",
    "options": ["port hybrid pvid vlan 30；port hybrid untagged vlan 20 30","port link-type trunk；port trunk pvid vlan 20；port trunk allow-pass vlan 20 30","port link-type access；port default vlan 20","port hybrid pvid vlan 20；port hybrid untagged vlan 20；port hybrid tagged vlan 30"],
    "answer": "D",
    "explain": "PVID 设为 20 使 PC 的无标签帧划入 VLAN 20，untagged 列表使 VLAN 20 发往 PC 时去标签；tagged 列表使 VLAN 30 的语音帧带标签发往 IP 电话。这是 Hybrid 接口的典型应用。"
  },
  {
    "id": "HD041",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "下列关于接口允许 VLAN 列表（allow-pass / tagged / untagged）的说法，正确的有？",
    "options": ["允许列表会改变帧的 VLAN ID","Trunk 接口的允许列表通过 port trunk allow-pass vlan 配置","Hybrid 接口的允许列表由 tagged 与 untagged 两个列表共同构成","允许列表对接收方向也生效，未允许的 VLAN 帧会被丢弃"],
    "answer": ["B","C","D"],
    "explain": "允许列表是收发双向的准入条件，未列入的 VLAN 帧在入方向同样被丢弃。允许列表只决定“是否通过、是否带标签”，从不修改帧的 VLAN ID。"
  },
  {
    "id": "HD042",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "使用 display vlan 命令时，输出中的 Tagged 列表示该接口以带标签方式承载该 VLAN，Untagged 列表示该接口属于该 VLAN 且发送时不带标签。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "display vlan 列出每个 VLAN 的成员接口及其标签属性：Untagged 表示该接口发送该 VLAN 帧时去标签，Tagged 表示保留标签。两列都表示接口是该 VLAN 的成员。"
  },
  {
    "id": "HD043",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "某接口配置为 Trunk，PVID 为 10，允许 VLAN 10 与 20。若该接口收到 VLAN 20 的无标签帧，结果如何？",
    "options": ["丢弃，因为无标签帧只能属于 PVID 对应 VLAN 以外的 VLAN","按 PVID 打上 VLAN 10 标签，在 VLAN 10 内转发","按 VLAN 20 处理，因为 20 在允许列表中","广播到所有 VLAN"],
    "answer": "B",
    "explain": "无标签帧一律按收到接口的 PVID 归属 VLAN，与接口允许列表无关，因此该帧被划入 VLAN 10 并在 VLAN 10 内转发，不会进入 VLAN 20。"
  },
  {
    "id": "HD044",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "同一台交换机上，VLAN 10 与 VLAN 20 的主机通过同一台交换机的不同接口接入，若两个 VLAN 未配置三层接口，则两 VLAN 主机之间？",
    "options": ["可以直接二层通信，因为经过同一台交换机","可以通信，但需经过生成树计算","无法二层通信，因为处于不同广播域","可以通信，只要接口类型相同"],
    "answer": "C",
    "explain": "VLAN 在二层实现了广播域隔离，不同 VLAN 的主机即使接在同一台交换机上也不能直接二层通信，必须借助三层设备（如 VLANIF 接口）转发。"
  },
  {
    "id": "HD045",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "在一台交换机上，Trunk 接口只能属于一个 VLAN，而 Access 接口可以同时属于多个 VLAN。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "两者的关系正好相反：Access 接口只属于一个 VLAN，收发均基于该 VLAN；Trunk 接口通过允许 VLAN 列表可以同时承载多个 VLAN 的带标签流量，因此可以同时属于多个 VLAN。"
  },
  {
    "id": "HD046",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "关于交换机内部为无标签帧添加标签的位置，下列说法正确的是？",
    "options": ["在出接口添加，入接口不做处理","由 CPU 统一添加后转发","只在跨 VLAN 转发时才添加","在入接口完成 VLAN 判定后添加，转发过程中一直携带，出接口再决定是否剥离"],
    "answer": "D",
    "explain": "帧进入交换机后，入接口根据接口类型与 PVID 判定其 VLAN 并打上标签，交换芯片内部始终按带标签方式转发，出接口依据配置决定是否剥离标签。"
  },
  {
    "id": "HD047",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机上配置端口默认 VLAN（Access 接口所属 VLAN）的命令是？",
    "options": ["port access vlan 10","port default vlan 10","port pvid vlan 10","switchport access vlan 10"],
    "answer": "B",
    "explain": "华为交换机在 Access 接口下使用 port default vlan 10 指定接口所属 VLAN，该命令同时把接口的 PVID 设为 10。switchport access vlan 是 Cisco 命令。"
  },
  {
    "id": "HD048",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "下列场景中，必须使用带标签方式承载 VLAN 流量的有？",
    "options": ["两台交换机之间的 Trunk 链路上承载多个 VLAN","交换机与支持 802.1Q 的服务器网卡之间承载多个 VLAN","交换机连接普通 PC 的 Access 接口","交换机通过 Hybrid 接口以 tagged 列表承载 VLAN 30 给 IP 电话"],
    "answer": ["A","B","D"],
    "explain": "一条链路要区分多个 VLAN 时必须使用带标签方式；连接普通 PC 的 Access 接口只承载单一 VLAN，收发均不带标签。"
  },
  {
    "id": "HD049",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "VLAN 聚合（Super VLAN）中，Sub VLAN 之间要实现互通，必须满足的条件是？",
    "options": ["将所有 Sub VLAN 合并为一个 VLAN","在 Sub VLAN 之间配置 Trunk","配置 Super VLAN 的 VLANIF 接口地址作为网关，并启用 Sub VLAN 的 ARP 代理","使能 GVRP"],
    "answer": "C",
    "explain": "Super VLAN 中 Sub VLAN 二层隔离，互通依赖 Super VLAN 的 VLANIF 作为三层网关，并通常需要使能 Sub VLAN 的 ARP 代理功能以实现同网段内跨 Sub VLAN 的地址解析。"
  },
  {
    "id": "HD050",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "GVRP 只能在用户接入侧接口上启用，交换机之间的互联链路上不能启用。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "GVRP 恰恰应在受控的交换机互联链路上启用，用于动态同步 VLAN 配置。用户接入侧启用存在风险：攻击者可伪造 GARP 报文注册大量 VLAN 导致资源耗尽，因此接入侧通常建议关闭。"
  },
  {
    "id": "HD051",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP 配置 BPDU 中，用于标识发送者所在网桥的字段是？",
    "options": ["Root ID","Root Path Cost","Port ID","Bridge ID"],
    "answer": "D",
    "explain": "配置 BPDU 主要字段包括 Root ID（当前根桥的桥 ID）、Root Path Cost（到根桥的路径开销）、Bridge ID（发送该 BPDU 的网桥 ID）和 Port ID（发送端口 ID）。Bridge ID 标识发送者自身。"
  },
  {
    "id": "HD052",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 STP 的 Bridge ID，下列说法正确的有？",
    "options": ["比较时先比 MAC 地址，再比桥优先级","桥优先级缺省值为 32768","桥优先级以 4096 为步长调整","共 8 字节，由 2 字节桥优先级与 6 字节 MAC 地址组成"],
    "answer": ["B","C","D"],
    "explain": "Bridge ID 为 8 字节，高 2 字节是桥优先级（缺省 32768，步长 4096），低 6 字节是交换机 MAC 地址。比较时先比优先级，优先级相同再比 MAC，MAC 小者优先。"
  },
  {
    "id": "HD053",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP 选举根桥时，首先比较的参数是？",
    "options": ["交换机的 MAC 地址","桥优先级（Bridge Priority）","端口数量","链路带宽"],
    "answer": "B",
    "explain": "根桥选举先比较桥优先级，数值最小者当选；若优先级相同，再比较 MAC 地址，MAC 最小者当选。因此通过降低桥优先级可以指定某台交换机为根桥。"
  },
  {
    "id": "HD054",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "华为交换机上把当前设备指定为根桥的命令是？",
    "options": ["stp priority 0","stp root primary","stp root enable","stp root bridge"],
    "answer": "B",
    "explain": "stp root primary 将该设备桥优先级设为 0，使其成为根桥；stp root secondary 设为 4096 作为备份根桥。也可用 stp priority 命令手工指定优先级。"
  },
  {
    "id": "HD055",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "华为交换机执行 stp root secondary 后，该设备的桥优先级被设置为？",
    "options": ["0","4096","8192","32768"],
    "answer": "B",
    "explain": "stp root secondary 将桥优先级设为 4096，作用是作为备份根桥：当主根桥失效时可以较快接替。stp root primary 对应优先级 0。"
  },
  {
    "id": "HD056",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP 中根路径开销（Root Path Cost）指的是？",
    "options": ["本端口到根桥之间的链路开销","从根桥到本网桥所经过的所有链路的累计路径开销","根桥到所有交换机路径开销的平均值","本交换机所有端口的开销之和"],
    "answer": "B",
    "explain": "根路径开销是配置 BPDU 中携带的、从根桥到发送该 BPDU 的网桥之间所有链路开销的累加值。根桥自身发送的 BPDU 中该值为 0。"
  },
  {
    "id": "HD057",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "在华为设备缺省使用的 STP 路径开销标准下，下列端口开销对应关系正确的有？",
    "options": ["十兆链路为 2000000","百兆链路为 200000","千兆链路为 20000","万兆链路为 2000"],
    "answer": ["A","B","C","D"],
    "explain": "华为缺省路径开销标准按链路速率递减：十兆 2000000、百兆 200000、千兆 20000、万兆 2000。速率越高开销越小，越容易被选为根端口。可通过 stp pathcost-standard 切换为 IEEE 802.1t 标准。"
  },
  {
    "id": "HD058",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "根桥发送的配置 BPDU 中，根路径开销（Root Path Cost）字段的值为 0。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "根路径开销表示从根桥到发送 BPDU 的网桥所经过链路的累计开销，根桥自身到根桥的开销自然为 0。非根桥转发时会把本端口开销累加后再向下游发送。"
  },
  {
    "id": "HD059",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP 中选举根端口的顺序，下列说法正确的是？",
    "options": ["先比较发送者端口 ID，再比较根路径开销","先比较本端口 ID，再比较根路径开销","先比较根路径开销，再比较发送者 BID，最后比较发送者端口 ID","只比较根路径开销，相同时随机选择"],
    "answer": "C",
    "explain": "根端口选举的判决顺序为：最小根路径开销 → 最小发送者 Bridge ID → 最小发送者 Port ID（先比端口优先级，再比端口号）。这是 STP 端口选举的核心判决链。"
  },
  {
    "id": "HD060",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "在一条链路上选举指定端口时，若两台交换机到根桥的根路径开销相同，接下来比较的是？",
    "options": ["端口速率","端口编号，较大者为指定端口","随机选择一个","Bridge ID，较小者对应的端口为指定端口"],
    "answer": "D",
    "explain": "指定端口选举在两个方向上比较：根路径开销小者获胜；相同时比较 Bridge ID（小者胜）；再相同比较 Port ID。胜者一侧的端口成为指定端口，另一侧被阻塞。"
  },
  {
    "id": "HD061",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 STP 的 Port ID，下列说法正确的有？",
    "options": ["长度为 2 字节，由 1 字节端口优先级与 1 字节端口号组成","比较时先比较端口号，再比较端口优先级","端口优先级以 16 为步长调整，有效取值 0~240","端口优先级缺省值为 128"],
    "answer": ["A","C","D"],
    "explain": "Port ID 为 2 字节：高 8 位端口优先级（缺省 128，步长 16）、低 8 位端口号。比较时先看优先级，优先级相同再比端口号，端口号小者优先。"
  },
  {
    "id": "HD062",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "STP 的端口状态中，既不转发用户数据也不学习 MAC 地址的状态有？",
    "options": ["Blocking","Listening","Learning","Forwarding"],
    "answer": ["A","B"],
    "explain": "STP 五种状态中，Blocking 与 Listening 既不转发数据也不学习 MAC 地址；Learning 状态学习 MAC 但不转发；Forwarding 状态两者都具备。Disabled 状态端口不参与生成树。"
  },
  {
    "id": "HD063",
    "type": "fill",
    "chapter": "STP与RSTP",
    "stem": "STP 中端口由 Learning 状态迁移到 Forwarding 状态前需要等待的定时器称为 Forward ______（缺省 15 秒）。",
    "options": [],
    "answer": ["Delay","delay"],
    "explain": "Listening 与 Learning 状态各需等待一个 Forward Delay（缺省 15 秒），因此 STP 收敛通常需要 30 秒以上。这是 STP 收敛慢、RSTP 引入 P/A 机制的直接动因之一。"
  },
  {
    "id": "HD064",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP 的三个重要定时器 Hello Time、Forward Delay、Max Age 的缺省值分别是？",
    "options": ["2 秒、20 秒、15 秒","2 秒、15 秒、20 秒","15 秒、2 秒、20 秒","1 秒、15 秒、20 秒"],
    "answer": "B",
    "explain": "STP 缺省 Hello Time 为 2 秒，Forward Delay 为 15 秒，Max Age 为 20 秒。定时器由根桥统一指定并通过 BPDU 下发，非根桥不能自行修改生效值。"
  },
  {
    "id": "HD065",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP 中非根桥的定时器参数由谁决定？",
    "options": ["由各交换机独立配置并各自生效","由管理员的任意配置决定","由根桥决定，通过配置 BPDU 下发","由链路速率自动决定"],
    "answer": "C",
    "explain": "非根桥虽然可以配置定时器，但一旦收到根桥的 BPDU，就采用根桥指定的定时器值。这种统一机制保证了全网 BPDU 老化判断的一致性。"
  },
  {
    "id": "HD066",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "配置 BPDU 中的 Hello Time、Forward Delay、Max Age 字段长度均为 2 字节，且以 1/256 秒为单位存储。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "这三个定时器字段均为 2 字节，但单位是 1/256 秒，因此 Hello Time 2 秒对应数值 512，Forward Delay 15 秒对应 3840，Max Age 20 秒对应 5120。"
  },
  {
    "id": "HD067",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 STP 中配置 BPDU 与 TCN BPDU 的区别，下列说法正确的有？",
    "options": ["配置 BPDU 的 BPDU Type 为 0x00，TCN BPDU 的 BPDU Type 为 0x80","TCN BPDU 中也携带完整的根桥信息","配置 BPDU 携带根桥 ID、根路径开销等完整参数","TCN BPDU 只包含 Protocol ID、Protocol Version、BPDU Type 三个字段，长度很短"],
    "answer": ["A","C","D"],
    "explain": "STP 报文 Protocol ID 均为 0x0000，通过 BPDU Type 区分：0x00 为配置 BPDU，0x80 为 TCN BPDU。TCN 报文极短，只用于通知拓扑变化，不携带根桥参数。"
  },
  {
    "id": "HD068",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 TCN BPDU 的说法，正确的有？",
    "options": ["TCN BPDU 中携带新的根路径开销","非根桥检测到拓扑变化后，从根端口向根桥方向发送 TCN BPDU","中间交换机收到 TCN 后需继续向上游转发并回送 TCA 确认","TCN BPDU 只包含 Protocol ID、Protocol Version 和 BPDU Type 三个字段"],
    "answer": ["B","C","D"],
    "explain": "TCN 报文很短，只用于通知拓扑变化，不含根路径开销等参数。非根桥从根端口上报 TCN，上级交换机回送 TCA 置位的配置 BPDU 确认，并继续向根桥转发，最终由根桥下发 TC 置位的配置 BPDU。"
  },
  {
    "id": "HD069",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "根桥收到 TCN BPDU 后，会采取什么动作？",
    "options": ["立即重新选举根桥","把发送 TCN 的端口阻塞","向发送者回送 TCN 报文","在后续配置 BPDU 中把 TC 位置 1，并持续一段时间通知全网缩短 MAC 表老化时间"],
    "answer": "D",
    "explain": "根桥收到 TCN 后在配置 BPDU 中置 TC 位并持续 Forward Delay + Max Age 的时间，收到 TC 置位 BPDU 的交换机把 MAC 地址表老化时间缩短为 Forward Delay，从而快速清除失效表项。"
  },
  {
    "id": "HD070",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "交换机收到 TC 置位的配置 BPDU 后，会把动态 MAC 地址表项的老化时间从缺省的 300 秒缩短为 Forward Delay。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "拓扑变化时地址表可能残留失效表项，收到 TC 置位 BPDU 的交换机会把动态 MAC 老化时间缩短为 Forward Delay（缺省 15 秒），加速清除无用表项，避免流量被发往已失效的路径。"
  },
  {
    "id": "HD071",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "下列情况中，会触发 STP 拓扑变化（TCN 上报）的有？",
    "options": ["交换机收到一个普通数据帧","端口从 Blocking 变为 Forwarding","指定端口从 Forwarding 变为 Disabled","端口从 Forwarding 变为 Blocking"],
    "answer": ["B","C","D"],
    "explain": "STP 中拓扑变化主要指端口状态在 Forwarding 与 Blocking/Disabled 之间的迁移，包括转发端口变为非转发、非转发端口变为转发等。普通数据帧转发不影响拓扑，不触发 TCN。"
  },
  {
    "id": "HD072",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 STP 中 BPDU 的发送方式，下列说法正确的有？",
    "options": ["非根桥只有在收到 BPDU 时才被动响应，从不主动发送","非根桥从根端口收到 BPDU 后，经指定端口向下游转发","BPDU 使用组播地址 01-80-C2-00-00-00 作为目的 MAC","根桥每隔 Hello Time 主动发送配置 BPDU"],
    "answer": ["B","C","D"],
    "explain": "根桥周期性地主动发送配置 BPDU；非根桥收到后更新并向下游转发，因此也表现为周期性发送。BPDU 以组播地址 01-80-C2-00-00-00 发送，属于 IEEE 桥接保留地址。"
  },
  {
    "id": "HD073",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP/RSTP/MSTP 的 BPDU 报文使用的目的 MAC 地址是？",
    "options": ["FF-FF-FF-FF-FF-FF","01-80-C2-00-00-00","01-00-5E-00-00-01","01-80-C2-00-00-03"],
    "answer": "B",
    "explain": "生成树 BPDU 使用 IEEE 保留的桥接组播地址 01-80-C2-00-00-00 发送，普通终端网卡通常不会处理该地址的帧，因此 BPDU 只在交换机之间交互。"
  },
  {
    "id": "HD074",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 STP 中边缘端口的描述，正确的有？",
    "options": ["边缘端口连接的是终端设备，不参与生成树计算","边缘端口链路 UP 后立即进入 Forwarding，不经过 Listening 和 Learning","边缘端口收到 BPDU 后会失去边缘端口属性并参与生成树计算","边缘端口可以连接另一台运行 STP 的交换机而不受影响"],
    "answer": ["A","B","C"],
    "explain": "边缘端口（华为 RSTP 中的 edged-port）专门用于接入终端，链路 UP 立即转发，从而避免终端等待 30 秒。一旦收到 BPDU，说明接入了交换机，边缘属性失效并触发重新计算。"
  },
  {
    "id": "HD075",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "华为交换机上配置边缘端口的命令是？",
    "options": ["stp edge enable","port edge-port","stp edged-port","stp portfast"],
    "answer": "C",
    "explain": "在接口视图下使用 stp edged-port 将端口配置为边缘端口。stp portfast 为 Cisco 命令。边缘端口通常配合 BPDU 保护使用以增强安全性。"
  },
  {
    "id": "HD076",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "BPDU 保护（BPDU Protection）的作用是？",
    "options": ["阻止交换机向外发送 BPDU","防止根桥被非法抢占","防止环路保护失效","当边缘端口收到 BPDU 时，把该端口关闭（Error-Down）并上报告警"],
    "answer": "D",
    "explain": "BPDU 保护作用于边缘端口：一旦边缘端口收到 BPDU（说明有非法设备接入或用户私接交换机），立即将端口关闭并告警，防止生成树被恶意改写。"
  },
  {
    "id": "HD077",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "根保护（Root Protection）的典型作用是？",
    "options": ["在指定端口上防止下游设备发送更优 BPDU 抢占根桥，收到更优 BPDU 时把端口置为 Discarding 并告警","保护根桥的 MAC 地址不被学习","禁止根桥发送 BPDU","加速根桥选举"],
    "answer": "A",
    "explain": "根保护配置在根桥的指定端口上。若该端口收到优先级更高的 BPDU，端口进入 Discarding 状态而不再转发，从而保证根桥地位不被下游非法设备抢占。"
  },
  {
    "id": "HD078",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "环路保护（Loop Protection）主要配置在什么端口上，解决什么问题？",
    "options": ["配置在根端口或备份端口上，防止链路单向故障导致 BPDU 收不到而误转为指定端口形成环路","配置在边缘端口上，防止用户私接交换机","配置在指定端口上，防止根桥被抢占","配置在所有端口上，防止广播风暴"],
    "answer": "A",
    "explain": "当链路发生单向故障时，根端口长时间收不到 BPDU 会超时并转为指定端口，可能形成环路。环路保护使这类端口在收不到 BPDU 时进入 Discarding 状态，避免环路。"
  },
  {
    "id": "HD079",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "关于 TC-BPDU 攻击防护（stp tc-protection），下列描述正确的是？",
    "options": ["设备在单位时间内只处理指定次数的 TC 置位 BPDU，超出的报文按周期统一处理，防止频繁刷新 MAC 表","禁止设备处理任何 TC BPDU","把发送 TC 的端口关闭","限制 BPDU 的发送速率"],
    "answer": "A",
    "explain": "攻击者发送大量 TC BPDU 会使交换机频繁刷新 MAC 地址表，影响性能。stp tc-protection 限制单位时间内处理的 TC 报文数量（缺省为 2 秒内 1 次），其余报文仅做一次统一处理。"
  },
  {
    "id": "HD080",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "在华为交换机上，边缘端口缺省是使能的。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "华为交换机端口缺省不是边缘端口，需要手工使用 stp edged-port 使能。而 Cisco 的 PortFast 也是缺省关闭的，两者行为一致。"
  },
  {
    "id": "HD081",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "RSTP 相比 STP，端口角色增加到了几种？",
    "options": ["5 种：根端口、指定端口、替代端口、备份端口、边缘端口","3 种：根端口、指定端口、阻塞端口","4 种：根端口、指定端口、替代端口、备份端口","6 种：增加禁用端口"],
    "answer": "A",
    "explain": "RSTP 在 STP 的根端口、指定端口基础上，把原阻塞端口细分为替代端口（Alternate，根端口的备份）和备份端口（Backup，指定端口的备份），再加上边缘端口，共 5 种角色。"
  },
  {
    "id": "HD082",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "RSTP 中替代端口（Alternate Port）的定义是？",
    "options": ["由于学习到其他网桥发送的配置 BPDU 而被阻塞的端口，是根端口的备份","由于学习到自己发送的配置 BPDU 而被阻塞的端口，是指定端口的备份","直接连接终端的端口","处于 Learning 状态的端口"],
    "answer": "A",
    "explain": "替代端口收到的是其他网桥发来的更优 BPDU，因此它是根端口的备份；备份端口收到的是自己发出的 BPDU，是指定端口的备份。当根端口失效时，替代端口可快速切换。"
  },
  {
    "id": "HD083",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "RSTP 中备份端口（Backup Port）的判别依据是？",
    "options": ["端口收到的是本网桥自己发送的配置 BPDU","端口收到的是其他网桥发送的更优 BPDU","端口处于 Forwarding 状态","端口配置了根保护"],
    "answer": "A",
    "explain": "备份端口是同一网桥内两个端口连到同一网段时产生的：其中一个为指定端口，另一个收到自己发出的 BPDU 而成为备份端口，作为指定端口的备份。"
  },
  {
    "id": "HD084",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "RSTP 把端口状态简化为几种？",
    "options": ["3 种：Discarding、Learning、Forwarding","5 种：Disabled、Blocking、Listening、Learning、Forwarding","4 种：Blocking、Learning、Forwarding、Disabled","2 种：Blocking、Forwarding"],
    "answer": "A",
    "explain": "RSTP 将 Disabled、Blocking、Listening 三种不转发也不学习的状态合并为 Discarding，只保留 Discarding、Learning、Forwarding 三种状态，简化了状态机。"
  },
  {
    "id": "HD085",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 RSTP 的 P/A（Proposal/Agreement）机制，下列说法正确的有？",
    "options": ["用于在点到点链路上实现指定端口的快速协商，无需等待定时器超时","P/A 机制在有共享介质（Hub）的链路上同样可以正常协商","对端若同意则回送 Agreement 置位的 BPDU，本端端口立即进入 Forwarding","Proposal 置位的 BPDU 由处于 Discarding 状态的新指定端口发出"],
    "answer": ["A","C","D"],
    "explain": "P/A 机制要求在点到点全双工链路上运行，通过两次握手让新指定端口迅速进入转发状态，避免 Listening/Learning 延时。若链路类型为共享介质，RSTP 无法使用 P/A，只能退回类似 STP 的定时器方式。"
  },
  {
    "id": "HD086",
    "type": "fill",
    "chapter": "STP与RSTP",
    "stem": "查看生成树运行状态及各端口角色、状态、链路类型的华为命令是 display ______。",
    "options": [],
    "answer": ["stp"],
    "explain": "display stp 显示生成树模式、根桥 ID、本桥 ID 以及各端口的角色、状态和链路类型；display stp brief 显示简要信息，display stp interface 查看指定接口。"
  },
  {
    "id": "HD087",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "RSTP 中，如果边缘端口收到 BPDU，它会立即失去边缘端口属性并参与生成树计算。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "边缘端口一旦收到 BPDU，说明连接的不是终端而是网桥，端口立即转为普通生成树端口并触发重新计算。若同时配置了 BPDU 保护，端口会被直接关闭。"
  },
  {
    "id": "HD088",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "RSTP 中非根桥在什么情况下会立即认为链路故障并发起快速切换？",
    "options": ["连续 3 个 Hello Time（约 6 秒）未收到 BPDU，即认为协商失败","必须等待 Max Age 20 秒","必须等待 30 秒","收到 TCN 报文时"],
    "answer": "A",
    "explain": "RSTP 把 BPDU 老化时间从 STP 的 Max Age（20 秒）缩短为 3 个 Hello Time（约 6 秒），一旦超时即认为对端失效，替代端口可迅速接管，从而提高收敛速度。"
  },
  {
    "id": "HD089",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "关于 RSTP 与 STP 的兼容性，下列说法正确的是？",
    "options": ["RSTP 端口运行在 RSTP 模式时可以向下兼容 STP；当端口收到 STP 的配置 BPDU 时，会退化为 STP 行为","RSTP 与 STP 完全无法互通","RSTP 交换机收到 STP BPDU 后会丢弃并保持快速收敛","RSTP 交换机必须手工切换为 STP 才能与 STP 交换机互通"],
    "answer": "A",
    "explain": "RSTP 具有良好的向下兼容性：当某端口收到 STP 格式的配置 BPDU 时，该端口按 STP 方式工作（发送 STP BPDU、使用定时器迁移状态），链路对端为 STP 时无法使用 P/A 快速收敛。"
  },
  {
    "id": "HD090",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "华为交换机的生成树模式只能在设备启动时通过启动文件指定，运行中无法切换。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "在系统视图下可通过 stp mode stp / rstp / mstp 在运行中切换生成树模式，缺省为 MSTP。切换会导致生成树重新计算并引起短暂流量中断，宜在业务空闲窗口操作。"
  },
  {
    "id": "HD091",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "MSTP 引入的主要原因是？",
    "options": ["解决 STP/RSTP 中所有 VLAN 共用一棵生成树导致的链路利用率低和负载分担问题","解决 STP 无法防止环路的问题","解决 BPDU 无法跨交换机传输的问题","解决 VLAN 数量不足的问题"],
    "answer": "A",
    "explain": "STP/RSTP 中所有 VLAN 共享一棵生成树，被阻塞的链路完全不能承载流量，无法实现负载分担。MSTP 通过把多个 VLAN 映射到一个 Instance，每个 Instance 独立计算生成树，实现按 VLAN 的负载分担。"
  },
  {
    "id": "HD092",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "关于 MSTP 的描述，正确的有？",
    "options": ["MSTP 中所有实例共用一棵生成树","MSTP 支持多实例，每个实例独立计算生成树","MSTP 可以兼容 STP 和 RSTP","MSTP 中一个 MST Region 由域名、修订级别和 VLAN 与 Instance 的映射关系共同确定"],
    "answer": ["B","C","D"],
    "explain": "MSTP 的域由域名、修订级别和 VLAN 映射表三者共同标识，三者任一不同即属于不同域。域内每个实例独立计算生成树并支持负载分担，同时还具备对 STP/RSTP 的兼容能力。"
  },
  {
    "id": "HD093",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "在华为交换机上查看生成树相关信息，可使用的命令有？",
    "options": ["display stp","display stp interface GigabitEthernet0/0/1","display spanning-tree","display stp brief"],
    "answer": ["A","B","D"],
    "explain": "display stp 系列命令用于查看生成树全局信息、简要信息和指定接口信息。display spanning-tree 是 Cisco 命令，华为设备不支持。"
  },
  {
    "id": "HD094",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "display stp 输出中的 CIST Root/ERPC 表示什么？",
    "options": ["公共生成树的根桥及其到本设备的根路径开销","本设备所有端口开销之和","备份根桥的 ID","边缘端口的路径开销"],
    "answer": "A",
    "explain": "CIST 即公共与内部生成树，CIST Root 是整网公共生成树的根桥，ERPC（External Root Path Cost）是本设备到该根桥的外部根路径开销，用于 MSTP 与其他生成树模式互通。"
  },
  {
    "id": "HD095",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "某 STP 网络中，交换机的桥优先级被配置为 0 和 4096，其他交换机为缺省值。下列说法正确的是？",
    "options": ["优先级为 0 的成为根桥，优先级为 4096 的成为备份根桥","优先级为 4096 的成为根桥","两台设备进行 MAC 比较后决定根桥","两台设备都不参与根桥选举"],
    "answer": "A",
    "explain": "桥优先级数值最小者当选根桥，因此优先级 0 的设备为根桥，4096 的设备为备份根桥。这与 stp root primary / stp root secondary 的效果一致。"
  },
  {
    "id": "HD096",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "STP 端口的端口优先级默认值为 128，可以通过配置修改，取值范围为 0~255，步长为 16。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "端口优先级的有效取值为 0、16、32……240，缺省 128。在根端口和指定端口选举的比较链中，端口优先级先于端口号被比较。"
  },
  {
    "id": "HD097",
    "type": "fill",
    "chapter": "STP与RSTP",
    "stem": "STP 中 Hello Time 的缺省值为 ______ 秒。",
    "options": [],
    "answer": ["2","2秒","2s"],
    "explain": "Hello Time 缺省 2 秒，是根桥发送配置 BPDU 的周期。非根桥使用根桥下发的定时器参数，最大老化时间 Max Age 与之存在约束关系。"
  },
  {
    "id": "HD098",
    "type": "fill",
    "chapter": "STP与RSTP",
    "stem": "RSTP 中用于快速协商的机制称为 ______ 机制（填英文缩写，两个字母加斜杠形式或直接两个字母）。",
    "options": [],
    "answer": ["P/A","PA","Proposal/Agreement","proposal/agreement"],
    "explain": "P/A 即 Proposal/Agreement 机制，通过一次请求与一次确认的握手，让新的指定端口迅速进入 Forwarding，是 RSTP 快速收敛的核心手段，前提是点到点全双工链路。"
  },
  {
    "id": "HD099",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "在 STP 中，根桥上的所有端口都是指定端口，且都处于 Forwarding 状态。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "根桥的根路径开销为 0，其所有端口到根桥的开销最小，因此在各自网段上都被选举为指定端口并处于转发状态。根桥没有根端口。"
  },
  {
    "id": "HD100",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "同一台交换机上的两个端口之间不可能形成环路，因此 RSTP 中不会出现备份端口。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "当同一台交换机的两个端口连接在同一网段（例如都接到一个 Hub 或同一条共享链路）时，就可能出现备份端口。此时一个端口为指定端口，另一个因收到自己发出的 BPDU 而成为备份端口。"
  }
];
