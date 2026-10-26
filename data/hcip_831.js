// HCIP-Datacom H12-831 高级路由交换技术 题库
// 共 120 题，9 个章节
window.BANK_HCIP_831 = [
  // ================= 园区网架构与堆叠技术 =================
  {
    "id": "P831001",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在典型的大型园区网三层架构中，负责汇聚各接入层设备的流量、并作为接入层网关实现策略控制的是哪一层？",
    "options": ["汇聚层", "核心层", "接入层", "出口层"],
    "answer": "A",
    "explain": "典型三层架构由核心层、汇聚层、接入层组成。汇聚层位于接入层与核心层之间，通常作为接入用户的网关，承担策略控制、流量收敛和VLAN终结等职能。核心层只负责高速无阻塞的数据转发，接入层负责终端接入与二层隔离。"
  },
  {
    "id": "P831002",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在某交换机上执行命令 stack slot 0 priority 200，该命令的作用是？",
    "options": ["把堆叠系统的总优先级设置为200", "把堆叠成员ID为0的交换机的堆叠优先级设置为200", "把0号槽位的单板优先级设置为200", "把堆叠端口0的优先级设置为200"],
    "answer": "B",
    "explain": "命令 stack slot slot-id priority priority 用于设置指定堆叠成员设备的堆叠优先级。slot 0 表示堆叠成员 ID 为 0，priority 200 表示优先级值为 200，数值越大越容易当选主交换机。"
  },
  {
    "id": "P831003",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于交换机堆叠（iStack）的优点，下列说法正确的有？",
    "options": ["多台交换机虚拟化为一台逻辑设备，简化网络管理", "堆叠系统内实现跨设备链路聚合，提高链路可靠性", "堆叠后端口数量增加，可提升整体转发带宽", "堆叠后各成员设备的路由表相互独立、互不影响"],
    "answer": ["A", "B", "C"],
    "explain": "堆叠把多台交换机虚拟成一台逻辑设备，具有简化管理、提高可靠性、增加端口与带宽等优点。堆叠系统内各成员共享同一控制平面，由主交换机统一管理，路由表并非各自独立，因此 D 错误。"
  },
  {
    "id": "P831004",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统中的备用交换机（Standby）在主交换机故障时可以接替其工作，成为新的主交换机。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "iStack 中成员角色分为主交换机（Master）、备用交换机（Standby）和从交换机（Slave）。主交换机故障后，备用交换机会接替成为新的主交换机，其余从交换机保持从角色，从而保证业务不中断。"
  },
  {
    "id": "P831005",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "构建交换机堆叠时，关于堆叠连接方式与线缆的说法正确的有？",
    "options": ["环形连接的可靠性高于链形连接，任一链路中断堆叠仍可正常工作", "链形连接中若中间链路中断，会导致堆叠分裂", "堆叠需使用专用堆叠线缆连接堆叠端口，不能使用普通业务网线", "堆叠线缆只能连接两台交换机，无法组成环形"],
    "answer": ["A", "B", "C"],
    "explain": "堆叠支持链形和环形两种连接方式。环形连接具有冗余性，任一方向链路故障时数据可从另一方向绕行，可靠性高于链形；链形连接中若中间链路中断会导致堆叠分裂。堆叠需使用专用堆叠线缆连接堆叠端口，多台设备可以组成环，故 D 错误。"
  },
  {
    "id": "P831006",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于华为 CSS 集群技术的描述，正确的是？",
    "options": ["CSS 只能在同一机框内实现，不支持跨机框", "CSS 是路由器专用的虚拟化技术", "CSS 将多台框式交换机虚拟化为一台逻辑设备，通常通过集群卡或业务口连接", "CSS 与 iStack 完全相同，只是名称不同"],
    "answer": "C",
    "explain": "CSS（Cluster Switch System）集群是把两台或多台框式交换机通过集群卡或集群端口连接，虚拟化为一台逻辑交换机的技术，可提升可靠性与带宽利用率。iStack 多用于盒式设备，CSS 多用于框式设备，两者属于同类虚拟化技术但实现和适用场景不同。"
  },
  {
    "id": "P831007",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "以下哪些技术可以实现多台设备的虚拟化或链路级冗余？",
    "options": ["iStack 堆叠", "CSS 集群", "M-LAG 跨设备链路聚合", "DHCP Snooping"],
    "answer": ["A", "B", "C"],
    "explain": "iStack 与 CSS 属于设备虚拟化技术，M-LAG 是跨设备链路聚合技术，可将两台设备的一对链路聚合成一条逻辑链路，实现双活接入。DHCP Snooping 是 DHCP 安全特性，与虚拟化/冗余无关。"
  },
  {
    "id": "P831008",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠成员的堆叠 ID 必须唯一，且同一堆叠系统中不同成员的堆叠 ID 相同时可以通过优先级自动区分。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "堆叠 ID 即槽位号，用于标识堆叠中的成员设备，必须全局唯一。若两台设备堆叠 ID 冲突，堆叠无法正常建立，需要先修改其中一台的堆叠 ID（stack slot 命令）后再连线。"
  },
  {
    "id": "P831009",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于园区网三层架构各层职责的说法，正确的有？",
    "options": ["核心层负责高速无阻塞的数据转发，追求高可靠与低时延", "汇聚层通常作为接入用户的网关，承担策略控制与流量收敛", "接入层负责终端接入，可通过端口隔离、端口安全等特性实现二层管控", "复杂的 ACL 与 QoS 策略应尽量部署在核心层以简化汇聚层配置"],
    "answer": ["A", "B", "C"],
    "explain": "核心层专注高速转发与高可靠，汇聚层担任网关与策略控制，接入层负责终端接入及二层安全管控。核心层应尽量简化策略配置以降低转发时延与故障面，复杂 ACL/QoS 一般部署在汇聚层或接入层，故 D 错误。"
  },
  {
    "id": "P831010",
    "type": "fill",
    "chapter": "园区网架构与堆叠技术",
    "stem": "华为交换机堆叠（iStack）中，堆叠优先级的默认值为 ______，数值越大越容易当选主交换机。",
    "options": [],
    "answer": ["100"],
    "explain": "堆叠优先级的默认值为 100，取值范围通常为 1~255。系统启动选举主交换机时优先级高者获胜，优先级相同时比较 MAC 地址，MAC 地址小者优先。"
  },
  {
    "id": "P831011",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于堆叠系统与链路聚合的配合使用，说法正确的有？",
    "options": ["跨成员设备的链路聚合称为跨设备链路聚合，可提供链路级冗余", "跨设备链路聚合中一条成员链路故障不影响聚合口整体状态", "下游设备通过两条链路分别连接堆叠的两个成员，可形成跨设备聚合", "堆叠系统内不支持跨设备链路聚合"],
    "answer": ["A", "B", "C"],
    "explain": "堆叠系统将多台设备虚拟成一台，因此下游设备连接到不同成员设备的链路可以加入同一聚合组，形成跨设备链路聚合（M-LAG 类似思想）。该方式可提供链路冗余与负载分担，单条链路故障时聚合口仍正常工作，故 D 错误。"
  },
  {
    "id": "P831012",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统建立后，主交换机和从交换机各自独立运行管理面与控制面，并分别维护一份独立的配置。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "堆叠系统对外表现为一台逻辑设备，由主交换机统一运行管理面与控制面协议并统一下发配置，其余成员同步配置。从交换机并非独立维护管理面，而是主要负责本地端口的数据转发。"
  },
  {
    "id": "P831013",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统发生分裂（Split）后，为防止出现双主导致地址冲突等异常，通常采用什么机制处理？",
    "options": ["双主检测（MAD）", "堆叠优先级抢占", "STP 根保护", "BPDU 保护"],
    "answer": "A",
    "explain": "堆叠分裂后，原堆叠的两个部分可能各自选举主交换机形成双主，引发 IP/MAC 冲突。双主检测 MAD（Multi-Active Detection）可通过直连检测、跨设备聚合口检测或代理检测方式发现双主，并使其中一方进入 Recovery 状态。"
  },
  {
    "id": "P831014",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在堆叠系统中查看堆叠成员数量、各成员堆叠 ID、优先级与主备角色，应使用哪条命令？",
    "options": ["display device", "display stack", "display version", "display interface brief"],
    "answer": "B",
    "explain": "display stack 用于查看堆叠系统的成员数量、各成员的堆叠 ID、优先级与角色（Master/Standby/Slave）等信息。display device 主要查看设备与单板信息，display version 查看版本信息，均无法反映堆叠角色。"
  },

  // ================= RSTP/MSTP高级特性 =================
  {
    "id": "P831015",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP 中规定的端口状态共有几种？",
    "options": ["4 种", "5 种", "3 种", "6 种"],
    "answer": "C",
    "explain": "RSTP 将端口状态简化为 Discarding（丢弃）、Learning（学习）、Forwarding（转发）三种，把 STP 中的 Disabled、Blocking、Listening 统一合并为 Discarding，从而简化状态机加快收敛。"
  },
  {
    "id": "P831016",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP 中不会转发用户数据、但会学习 MAC 地址的端口状态是？",
    "options": ["Discarding", "Forwarding", "Blocking", "Learning"],
    "answer": "D",
    "explain": "Learning 状态下端口会进行 MAC 地址学习并参与拓扑计算，但不转发用户数据。RSTP 中不存在 Blocking 状态，原 STP 的 Blocking 被归入 Discarding。"
  },
  {
    "id": "P831017",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP 中实现快速收敛的核心机制——提议/同意（Proposal/Agreement）机制，其主要作用是？",
    "options": ["让下游网桥无需等待计时器即可快速将端口转为转发状态", "用于选举根桥", "用于抑制 TC 报文泛洪", "用于检测链路故障"],
    "answer": "A",
    "explain": "P/A 机制通过上游网桥发送 Proposal 置位的 BPDU、下游网桥同步阻塞非边缘端口并回复 Agreement，使指定端口可跳过 Listening/Learning 的转发时延直接进入转发状态，实现秒级甚至毫秒级收敛。"
  },
  {
    "id": "P831018",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP 的边缘端口（Edge Port）在链路 Up 后仍需依次经历 Discarding、Learning 状态，等待转发延迟计时器超时后才能进入转发状态。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "边缘端口用于连接终端设备，不参与生成树计算，链路 Up 后立即进入 Forwarding 状态，无需经历状态迁移与转发延迟，从而避免终端长时间等待。配置命令为 stp edged-port enable。"
  },
  {
    "id": "P831019",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "在华为交换机上配置 RSTP 边缘端口后，为防止该端口下接入交换机导致环路，通常还应配置什么保护特性？",
    "options": ["根保护 stp root-protection", "BPDU 保护 stp bpdu-protection", "环路保护 stp loop-protection", "TC 保护 stp tc-protection"],
    "answer": "B",
    "explain": "BPDU 保护用于边缘端口：当边缘端口收到 BPDU 时，交换机将该端口关闭（Error-Down），防止用户误接入交换机形成环路。配置命令为 stp bpdu-protection，可配合 shutdown 自动恢复时间使用。"
  },
  {
    "id": "P831020",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "stp root-protection 根保护功能的生效范围是？",
    "options": ["所有端口", "只在根端口上生效", "只在指定端口上生效，收到更优 BPDU 时端口进入 Discarding 且不再转发", "只在边缘端口上生效"],
    "answer": "C",
    "explain": "根保护配置在指定端口上（通常是根桥的下行端口），当该端口收到优先级更高的 BPDU 时，端口立即进入 Discarding 状态且不再转发报文，从而保护根桥地位不被抢走。若攻击持续，端口会一直保持阻塞；攻击停止后经一定时间恢复。"
  },
  {
    "id": "P831021",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于 MSTP 中的总根、域根和主桥，说法正确的有？",
    "options": ["总根是整个 MSTP 网络中 CIST 的根桥", "域根是某个 MST 域内该实例的根桥", "主桥是该 MST 域内距离总根最近的设备，负责域的对外表示", "一个 MST 域内可以有多个主桥"],
    "answer": ["A", "B", "C"],
    "explain": "总根（CIST Root）是全网的根，域根（MSTI Root）是各实例在域内的根，主桥（Master Bridge）是该域中通往总根最近的设备。一个 MST 域只能有一个主桥，故 D 错误。"
  },
  {
    "id": "P831022",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "配置 MSTP 多实例后，必须执行哪条命令使域配置立即生效？",
    "options": ["commit", "apply", "save", "active region-configuration"],
    "answer": "D",
    "explain": "在 stp region-configuration 视图下完成域名、修订级别与实例映射配置后，需要执行 active region-configuration 使配置立即生效，否则需要重启设备才会生效。"
  },
  {
    "id": "P831023",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP 中把 VLAN 10 和 VLAN 20 映射到实例 1，正确的配置命令是？",
    "options": ["instance 1 vlan 10 20", "vlan 10 20 instance 1", "instance 1 vlan 10 to 20 only", "map instance 1 vlan 10-20"],
    "answer": "A",
    "explain": "在 MST 域配置视图下使用 instance instance-id vlan vlan-id 命令进行映射，多个 VLAN 之间用空格分隔，也可使用 vlan 10 to 20 的形式表示范围。"
  },
  {
    "id": "P831024",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP 兼容 STP 和 RSTP，当与运行 RSTP 的设备互连时可以正常进行拓扑计算。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "MSTP 向下兼容 STP 与 RSTP。MSTP 设备运行 CIST，与 STP/RSTP 设备互连时按对应协议进行拓扑计算，保证互操作性。"
  },
  {
    "id": "P831025",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于 MSTP 的配置与运行机制，说法正确的有？",
    "options": ["需先用 stp mode mstp 将生成树模式设置为 MSTP", "在 stp region-configuration 视图下配置域名、修订级别与实例映射", "配置完成后需执行 active region-configuration 使域配置立即生效", "MSTP 与 RSTP 不兼容，互连时无法进行拓扑计算"],
    "answer": ["A", "B", "C"],
    "explain": "MSTP 的配置流程为：stp mode mstp 设置模式、stp region-configuration 进入域视图配置 region-name/revision-level/instance 映射、active region-configuration 激活。MSTP 向下兼容 STP/RSTP，可与 RSTP 设备正常互操作，故 D 错误。"
  },
  {
    "id": "P831026",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP 中，决定两台交换机是否属于同一 MST Region 的三个要素是？",
    "options": ["域名、优先级、MAC 地址", "域名、修订级别、VLAN 与实例的映射关系", "修订级别、优先级、端口开销", "域名、实例号、根桥 ID"],
    "answer": "B",
    "explain": "MST Region 由域名（region name）、修订级别（revision level）以及 VLAN 与 MSTI 的映射关系三要素共同决定。三者完全一致的两台设备才属于同一 MST 域，否则被视为不同域并各自独立计算生成树。"
  },
  {
    "id": "P831027",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "交换机遭受 TC-BPDU 泛洪攻击时的影响及可行的防护手段包括？",
    "options": ["攻击者伪造 TC 报文导致交换机频繁刷新 MAC 地址表，影响转发性能", "可通过 stp tc-protection 开启 TC 保护，限制单位时间内处理的 TC 报文数量", "可配置 stp tc-protection threshold 指定单位时间内的 TC 报文处理阈值", "TC 保护开启后交换机将忽略所有 TC 报文，不再刷新任何表项"],
    "answer": ["A", "B", "C"],
    "explain": "TC-BPDU 泛洪会使交换机不断刷新 MAC 与 ARP 表项，浪费 CPU 并造成短暂流量泛洪。华为设备通过 stp tc-protection 与 stp tc-protection threshold 限制单位时间内处理 TC 报文的次数与阈值，超出部分按周期统一处理一次，而非完全忽略，故 D 错误。"
  },
  // ================= VLAN高级特性与QinQ =================
  {
    "id": "P831028",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "IEEE 802.1Q 标准中 VLAN ID 字段长度为 12 比特，理论上可标识的 VLAN 数量为？",
    "options": ["1024", "2048", "4094", "65535"],
    "answer": "C",
    "explain": "802.1Q 标签中 VLAN ID 为 12 位，理论范围 0~4095。其中 0 和 4095 为保留值，可使用范围是 1~4094，共 4094 个可用 VLAN，这也是需要通过 QinQ 扩展 VLAN 数量的原因。"
  },
  {
    "id": "P831029",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ 技术通过在用户报文中打上几层 VLAN 标签来扩展 VLAN 数量？",
    "options": ["1 层", "3 层", "4 层", "2 层"],
    "answer": "D",
    "explain": "QinQ（802.1Q-in-802.1Q）在原有私网 VLAN 标签（CVLAN）之外再打上一层公网 VLAN 标签（SPVLAN），形成双层标签，使可用的 VLAN 空间从 4094 扩展到约 4094×4094，满足城域网/园区多租户场景需求。"
  },
  {
    "id": "P831030",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ 报文中外层标签与内层标签分别对应？",
    "options": ["外层是公网 VLAN 标签（SPVLAN），内层是私网 VLAN 标签（CVLAN）", "外层是私网 VLAN 标签，内层是公网 VLAN 标签", "外内层都是公网 VLAN 标签", "外层是 MPLS 标签，内层是 VLAN 标签"],
    "answer": "A",
    "explain": "QinQ 报文的外层标签由运营商网络分配，称为公网 VLAN 标签或 SPVLAN；内层标签由用户网络保留，称为私网 VLAN 标签或 CVLAN。运营商设备通常只根据外层标签转发，内层标签对用户透明。"
  },
  {
    "id": "P831031",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于 QinQ 的分类，说法正确的有？",
    "options": ["基本 QinQ 基于端口实现，进入该端口的报文统一打上指定的外层 VLAN 标签", "灵活 QinQ 可基于 VLAN ID 或流分类为不同业务打上不同的外层标签", "基本 QinQ 中同一端口下所有 VLAN 的报文使用相同外层 VLAN", "灵活 QinQ 不能根据报文优先级进行区分"],
    "answer": ["A", "B", "C"],
    "explain": "基本 QinQ 在接口上通过 qinq vlan-translation enable 与 port vlan-stacking 等配置实现，进入端口的所有报文统一封装同一外层 VLAN。灵活 QinQ 可基于 VLAN ID、802.1p 优先级或流分类（ACL）为不同业务流打不同外层标签，实现差异化承载，故 D 错误。"
  },
  {
    "id": "P831032",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ 外层标签的 TPID 值默认为 0x8100，部分场景下可以修改为 0x88A8。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "默认情况下内外层标签的 TPID 都是 0x8100。为兼容不同厂商或运营商网络，华为设备支持通过 qinq ethernet-type 命令将外层 TPID 修改为 0x88A8 或 0x9100 等值，便于跨厂商互通。"
  },
  {
    "id": "P831033",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "VLAN 聚合（Super VLAN）技术中，关于 Super VLAN 与 Sub VLAN 的说法正确的是？",
    "options": ["Super VLAN 内的 Sub VLAN 之间可以二层互通", "所有 Sub VLAN 共用 Super VLAN 的网关 IP 地址，Sub VLAN 之间二层隔离、三层可互通", "一个 Super VLAN 只能关联一个 Sub VLAN", "Sub VLAN 需要单独配置网关 IP"],
    "answer": "B",
    "explain": "Super VLAN（VLAN 聚合）中，多个 Sub VLAN 共用 Super VLAN 的 VLANIF 接口地址作为网关。Sub VLAN 之间在二层相互隔离，但可以通过 Super VLAN 网关实现三层互通，从而节省 IP 地址并隔离广播域。"
  },
  {
    "id": "P831034",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "Voice VLAN 的主要作用是？",
    "options": ["把语音流量转换成模拟信号", "加密语音报文", "为 IP 电话流量自动分配专用 VLAN 并提升其转发优先级", "为所有终端统一分配 IP 地址"],
    "answer": "C",
    "explain": "Voice VLAN 通过识别 IP 电话的源 MAC 或 OUI 自动将语音报文划分到专用 VLAN，并可为其提升 802.1p 优先级，保证语音质量。华为设备可通过 voice-vlan enable 与 voice-vlan mac-address 等命令配置。"
  },
  {
    "id": "P831035",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ 可以突破 4094 个 VLAN 的数量限制，使运营商能够为大量用户分配独立的外层 VLAN 标签。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "单层 VLAN 最多 4094 个，无法满足城域网海量用户隔离需求。QinQ 通过双层标签将可用组合扩展到约 4094×4094，并可用外层标签区分不同用户，是解决 VLAN 数量不足的经典方案。"
  },
  {
    "id": "P831036",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在华为交换机上把接口配置为 QinQ 隧道端口，使进入该接口的报文统一封装外层 VLAN 标签，正确的接口类型命令是？",
    "options": ["port link-type access", "port link-type trunk", "port link-type hybrid", "port link-type dot1q-tunnel"],
    "answer": "D",
    "explain": "port link-type dot1q-tunnel 将接口配置为 QinQ 隧道端口，进入该端口的报文会被统一打上接口 PVID 所指定 VLAN 的外层标签，而报文原有的内层 VLAN 标签被完整保留。配合 port default vlan 100 指定外层 VLAN。"
  },
  {
    "id": "P831037",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于 MUX VLAN 的说法，正确的有？",
    "options": ["MUX VLAN 由主 VLAN 和从 VLAN 组成", "从 VLAN 分为互通型从 VLAN 和隔离型从 VLAN", "隔离型从 VLAN 内的用户之间相互隔离，但都可以与主 VLAN 通信", "互通型从 VLAN 内的用户之间也相互隔离"],
    "answer": ["A", "B", "C"],
    "explain": "MUX VLAN 通过主 VLAN 与从 VLAN 划分访问权限：互通型从 VLAN（Group VLAN）内部用户可互相通信，隔离型从 VLAN（Separate VLAN）内部用户相互隔离，但两类从 VLAN 均可与主 VLAN 通信，常用于员工网络与访客网络共存场景，故 D 错误。"
  },
  {
    "id": "P831038",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于华为交换机三种链路类型接口的说法，正确的有？",
    "options": ["Access 接口只能属于一个 VLAN，通常用于连接终端", "Trunk 接口可以允许多个 VLAN 通过，通常用于交换机之间互联", "Hybrid 接口可以灵活指定哪些 VLAN 带标签发送、哪些 VLAN 去标签发送", "Hybrid 接口只能属于一个 VLAN"],
    "answer": ["A", "B", "C"],
    "explain": "Access 接口属于单一 VLAN；Trunk 接口可放行多个 VLAN，但除 PVID 外均带标签发送；Hybrid 接口可同时以 tagged 和 untagged 方式放行多个 VLAN，灵活性最高，故 D 错误。"
  },
  {
    "id": "P831039",
    "type": "fill",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在华为交换机上查看所有 VLAN 及其包含端口的命令是 display ______。",
    "options": [],
    "answer": ["vlan"],
    "explain": "display vlan 可显示设备上已创建的所有 VLAN、各 VLAN 包含的端口及端口类型；display vlan 10 可查看指定 VLAN 的详细信息，是排查 VLAN 不通问题的常用命令。"
  },

  // ================= DHCP高级与IP地址管理 =================
  {
    "id": "P831040",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于 DHCP Snooping 的工作原理与部署，说法正确的有？",
    "options": ["通过把接口分为信任端口与非信任端口，只允许从信任端口收到的 DHCP 应答报文通过", "连接合法 DHCP 服务器或中继的接口应配置为信任端口", "设备会依据 DHCP 报文生成包含 MAC、IP、VLAN、接口的绑定表", "DHCP Snooping 的主要作用是对 DHCP 报文进行加密传输"],
    "answer": ["A", "B", "C"],
    "explain": "DHCP Snooping 通过信任/非信任端口区分合法与非法 DHCP 服务器，丢弃非信任端口收到的 DHCP Offer/ACK，防止私设服务器导致的地址分配混乱；同时生成动态绑定表供 IPSG、DAI 使用。该特性并不提供报文加密功能，故 D 错误。"
  },
  {
    "id": "P831041",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "启用 DHCP Snooping 后，连接合法 DHCP 服务器的接口应配置为？",
    "options": ["信任端口", "非信任端口", "隔离端口", "边缘端口"],
    "answer": "A",
    "explain": "需要在连接合法 DHCP 服务器或 DHCP 中继的接口上执行 dhcp snooping trusted，将其配置为信任端口，只有信任端口上收到的 DHCP 应答报文才被允许转发。其余用户侧接口保持默认的非信任状态。"
  },
  {
    "id": "P831042",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "IP Source Guard 的主要功能是？",
    "options": ["防止 MAC 地址泛洪", "防止 IP 地址伪造，只允许源 IP 与绑定表匹配的报文通过", "防止 ARP 欺骗", "限制接口带宽"],
    "answer": "B",
    "explain": "IP Source Guard 基于 DHCP Snooping 或静态绑定表检查报文的源 IP（可选源 MAC），对不匹配的报文直接丢弃，防止用户私自配置 IP 地址造成地址冲突或冒用他人地址。"
  },
  {
    "id": "P831043",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于动态 ARP 检测（DAI）与 IP Source Guard（IPSG）的说法，正确的有？",
    "options": ["DAI 利用 DHCP Snooping 绑定表对 ARP 报文做合法性检查，防范 ARP 欺骗", "IPSG 检查报文的源 IP 与绑定表是否匹配，防范 IP 地址伪造", "两者都可基于 DHCP Snooping 生成的动态绑定表工作", "DAI 主要用于防范 DHCP 饿死攻击"],
    "answer": ["A", "B", "C"],
    "explain": "DAI 通过绑定表校验 ARP 报文的 MAC-IP 对应关系，丢弃伪造 ARP，防止中间人攻击；IPSG 校验报文源 IP（可选源 MAC）是否与绑定表一致，防止私自配置或冒用 IP。二者均可依赖 DHCP Snooping 动态绑定表工作，DHCP 饿死攻击的防护与 DAI 无关，故 D 错误。"
  },
  {
    "id": "P831044",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP 饿死攻击是指攻击者不断发送大量伪造 MAC 的 DHCP 请求，耗尽 DHCP 服务器地址池，使正常用户无法获得 IP 地址。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "攻击者通过变换源 MAC 大量申请地址，导致地址池耗尽。可通过在接口上限制 DHCP 报文速率或使用 DHCP Snooping 的 dhcp snooping check mac-address / 最大用户数限制来防护。"
  },
  {
    "id": "P831045",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Option 82 由 DHCP 中继或 DHCP Snooping 设备插入，用于携带客户端接入的端口、VLAN 等位置信息，供服务器进行地址分配策略控制。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Option 82（中继代理信息选项）记录客户端接入的位置信息（接口、VLAN 等），服务器可据此为不同位置的用户分配不同网段的地址，也可用于防止地址盗用。"
  },
  {
    "id": "P831046",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于 DHCP 中继（DHCP Relay）的说法，正确的有？",
    "options": ["DHCP 中继用于实现跨网段的地址分配", "中继设备把客户端的广播请求转换为单播发送给 DHCP 服务器", "配置中继时需要使用 dhcp relay 或 dhcp select relay 并指定服务器 IP", "中继设备必须与 DHCP 服务器在同一广播域"],
    "answer": ["A", "B", "C"],
    "explain": "DHCP 广播报文无法跨越三层网关，因此需要中继设备将请求转为单播发给跨网段的 DHCP 服务器，并把服务器应答转发回客户端。中继设备与服务器不需要在同一广播域，故 D 错误。"
  },
  {
    "id": "P831047",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在华为三层交换机上配置作为 DHCP 服务器时，创建全局地址池的命令是？",
    "options": ["dhcp pool <name>", "ip address-pool <name>", "ip pool <name>", "dhcp-server pool <name>"],
    "answer": "C",
    "explain": "在系统视图下使用 ip pool pool-name 创建全局地址池，然后在地址池视图下配置 network 网段、gateway-list、dns-list、lease 等参数，最后在接口下使用 dhcp select global 启用全局地址池分配方式。"
  },
  {
    "id": "P831048",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "Device 上出现 IP 地址冲突告警，为快速定位冲突源，最有效的操作是？",
    "options": ["直接重启交换机", "修改所有终端的 IP 地址", "关闭 DHCP 服务", "在网关设备上执行 display arp 查看冲突 IP 对应的 MAC，再用 display mac-address 定位接入端口"],
    "answer": "D",
    "explain": "先通过 display arp | include <IP> 找到冲突 IP 对应的 MAC 地址，再用 display mac-address <MAC> 查出该 MAC 学习在哪个接口，即可定位到冲突终端的接入位置。这是 IP 冲突排查的标准思路。"
  },
  {
    "id": "P831049",
    "type": "fill",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在华为交换机上开启 DHCP Snooping 功能并查看绑定表的命令分别是 dhcp snooping enable 和 display dhcp snooping ______。",
    "options": [],
    "answer": ["binding-table", "binding table"],
    "explain": "display dhcp snooping binding-table 可查看动态绑定表，包含 MAC、IP、VLAN、接口、租期等信息，是排查 IPSG/DAI 未生效问题的关键命令。"
  },
  {
    "id": "P831050",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于 DHCP Option 43 的描述，正确的是？",
    "options": ["用于向 AP 下发 AC 的 IP 地址，实现 AP 自动发现 AC", "用于下发网关地址", "用于下发租约时间", "用于标识客户端主机名"],
    "answer": "A",
    "explain": "在 WLAN 三层组网中，AP 通过 DHCP 获取 IP 地址后，需要知道 AC 的地址才能建立 CAPWAP 隧道。DHCP Option 43 用于携带 AC 的 IP 地址信息下发给 AP，实现 AP 的自动上线。"
  },
  {
    "id": "P831051",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "配置静态 ARP 表项可以防止针对特定 IP 的 ARP 欺骗攻击。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "为关键设备（如网关、服务器）配置静态 ARP 表项后，该 IP 与 MAC 的映射不会被动态 ARP 学习覆盖，从而避免被伪造 ARP 报文欺骗。命令为 arp static ip-address mac-address。"
  },
  {
    "id": "P831052",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "以下哪些措施可用于防范 ARP 攻击？",
    "options": ["配置静态 ARP 表项", "配置 ARP 报文限速 arp speed-limit", "启用严格学习 arp learning strict", "开启 DHCP Snooping 的非信任端口转发 DHCP Offer"],
    "answer": ["A", "B", "C"],
    "explain": "静态 ARP 可固定映射，ARP 限速可抑制 ARP 泛洪，严格学习使设备只学习自身触发的 ARP 表项，三者都是常用的 ARP 防护手段。D 项描述错误，非信任端口不应转发 DHCP Offer。"
  },

  // ================= 网络设备安全加固 =================
  {
    "id": "P831053",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "端口隔离（port-isolate）实现的是？",
    "options": ["不同 VLAN 之间的三层隔离", "同一 VLAN 内不同端口之间的二层隔离", "设备之间的路由隔离", "不同接口的带宽隔离"],
    "answer": "B",
    "explain": "端口隔离用于同一 VLAN 内部，将用户端口加入隔离组后，组内端口之间的二层报文相互隔离，但仍可与上行端口通信。可节省 VLAN 资源，常用于酒店、小区等场景。"
  },
  {
    "id": "P831054",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在华为交换机上把接口加入隔离组 1，并使隔离组内端口二层相互隔离，正确的配置是？",
    "options": ["isolate enable group 1", "port-isolate group 1 enable", "port-isolate enable group 1", "am isolate group 1"],
    "answer": "C",
    "explain": "在接口视图下执行 port-isolate enable group group-id 即可把接口加入指定隔离组。同一隔离组内的端口之间二层流量相互隔离，与未加入隔离组的端口（如上行口）之间正常通信。"
  },
  {
    "id": "P831055",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "端口安全的违规动作（port-security protect-action）包括？",
    "options": ["protect", "restrict", "shutdown", "discard-arp"],
    "answer": ["A", "B", "C"],
    "explain": "华为端口安全的违规动作有三种：protect（丢弃违规报文，不告警）、restrict（丢弃违规报文并上报告警）、shutdown（关闭接口，可通过 port-security shutdown-recovery 或手动恢复）。"
  },
  {
    "id": "P831056",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "端口安全违规动作中，会导致接口被关闭的是？",
    "options": ["protect", "restrict", "warning", "shutdown"],
    "answer": "D",
    "explain": "shutdown 动作在检测到违规时直接关闭接口，接口状态变为 Error-Down。可通过 port-security shutdown-recovery interval 配置自动恢复时间，否则需要手动执行 shutdown 与 undo shutdown 恢复。"
  },
  {
    "id": "P831057",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "端口安全中 protect 动作在丢弃违规报文的同时会向网管上报告警。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "protect 动作只静默丢弃违规报文，不产生告警；restrict 动作在丢弃违规报文的同时会上报告警。这是两者最本质的区别。"
  },
  {
    "id": "P831058",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "风暴控制（storm-control）的作用是？",
    "options": ["限制接口上广播、组播或未知单播报文的速率，防止广播风暴影响设备", "对接口带宽进行物理限速", "对端口进行隔离", "对报文进行加密"],
    "answer": "A",
    "explain": "风暴控制通过配置 storm-control broadcast/multicast/unicast min-rate 等参数限制指定类型报文进入接口的速率，超出部分被丢弃，从而抑制广播风暴，保护设备 CPU 与链路带宽。"
  },
  {
    "id": "P831059",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "华为交换机防止 CPU 遭受协议报文攻击的机制是？",
    "options": ["storm-control", "cpu-defend policy", "port-isolate", "acl 规则"],
    "answer": "B",
    "explain": "CPU 防攻击通过 cpu-defend policy 定义策略，为不同类型的上送 CPU 报文配置速率限制（car）、丢弃或告警动作，并通过 cpu-defend-policy 命令应用到全局或指定槽位，防止协议报文耗尽 CPU 资源。"
  },
  {
    "id": "P831060",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "为提升设备远程管理安全性，下列措施中合理的有？",
    "options": ["使用 SSH 替代 Telnet 进行远程登录", "关闭不使用的服务（如 FTP、HTTP）", "配置 ACL 限制允许登录的源地址", "使用 telnet 并配置明文密码以便维护"],
    "answer": ["A", "B", "C"],
    "explain": "SSH 对会话进行加密，可防止口令与数据被窃听；关闭无用服务可减少攻击面；ACL 可限制管理源地址。Telnet 明文传输口令，属于不安全的做法，故 D 错误。"
  },
  {
    "id": "P831061",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在华为设备上为本地用户配置权限级别为 15 的命令是？",
    "options": ["local-user huawei level 15", "privilege level 15 user huawei", "local-user huawei privilege level 15", "user-privilege huawei 15"],
    "answer": "C",
    "explain": "在 AAA 视图下使用 local-user user-name privilege level level 配置本地用户权限级别，15 为最高级别。配合 local-user user-name service-type telnet/ssh 与 password 命令完成本地用户配置。"
  },
  {
    "id": "P831062",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "华为设备支持配置登录失败次数限制，超过阈值后在指定时间内禁止该用户再次登录。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "通过 aaa 视图下的 local-aaa-user wrong-password retry-interval、retry-time、block-time 等命令，可配置密码重试间隔、最大重试次数和锁定时间，防止口令暴力破解。"
  },
  {
    "id": "P831063",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于设备管理与时钟同步的安全加固措施，正确的有？",
    "options": ["配置 NTP 使全网设备时间一致，便于日志与告警的关联分析", "开启登录失败次数限制，防止口令被暴力破解", "配置日志服务器集中收集设备日志，便于审计与回溯", "为方便维护，应关闭日志功能以减少设备资源占用"],
    "answer": ["A", "B", "C"],
    "explain": "NTP 保证全网时间戳统一，登录失败锁定可抵御口令爆破，日志集中收集便于审计和故障回溯。关闭日志会丧失审计能力，不利于安全事件追溯，故 D 错误。"
  },
  {
    "id": "P831064",
    "type": "fill",
    "chapter": "网络设备安全加固",
    "stem": "华为交换机上开启端口安全功能的命令是 port-security ______。",
    "options": [],
    "answer": ["enable"],
    "explain": "在接口视图下执行 port-security enable 开启端口安全功能，再配合 port-security max-mac-num、port-security protect-action 等命令完成完整配置。"
  },
  // ================= 网络故障排查 =================
  {
    "id": "P831065",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "在华为设备上查看接口的 up/down 状态、速率、双工及错包统计，应使用命令？",
    "options": ["display ip interface brief", "display version", "display arp", "display interface GigabitEthernet 0/0/1"],
    "answer": "D",
    "explain": "display interface 可查看接口的物理状态与管理状态、速率双工协商结果、收发字节数与 CRC 错包、丢包等统计信息，是物理层与数据链路层排查的核心命令。display ip interface brief 只显示三层简要信息。"
  },
  {
    "id": "P831066",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "接口出现大量 CRC 错误时，可能的原因与排查手段包括？",
    "options": ["网线质量差、水晶头接触不良或线序不规范", "光模块老化、光纤接头污染或光衰过大", "接口速率双工协商不一致或对端设备故障", "设备上未配置默认路由"],
    "answer": ["A", "B", "C"],
    "explain": "CRC 错误表示接收帧校验失败，属于物理层/链路层问题：常见原因有网线质量差与接触不良、光模块老化或光纤污染导致光衰过大、速率双工协商不一致等。可用 display interface 观察错包增量，并更换线缆/模块验证。未配置默认路由属于三层问题，不会引起 CRC 错误，故 D 错误。"
  },
  {
    "id": "P831067",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "两台交换机之间 Trunk 链路本身正常，但 VLAN 10 的用户无法互通，最需要优先检查的是？",
    "options": ["Trunk 接口是否允许 VLAN 10 通过（allow-pass）以及两端 PVID 是否一致", "接口速率是否一致", "设备型号是否相同", "设备版本是否一致"],
    "answer": "A",
    "explain": "Trunk 不通的典型原因是接口未放行对应 VLAN（缺少 port trunk allow-pass vlan 10），或两端 PVID 不一致导致无标签报文被划入不同 VLAN。可使用 display port vlan 与 display vlan 确认两端配置。"
  },
  {
    "id": "P831068",
    "type": "fill",
    "chapter": "网络故障排查",
    "stem": "要在设备上查看 CPU 占用率，排查因协议报文大量上送导致的性能问题，可使用命令 display ______。",
    "options": [],
    "answer": ["cpu-usage"],
    "explain": "display cpu-usage 显示设备 CPU 的整体占用率以及各任务（如协议栈、转发任务）的占用情况。配合 display cpu-defend statistics 可判断是否遭受协议报文攻击。"
  },
  {
    "id": "P831069",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "执行 ping 命令时使用 -a 参数的作用是？",
    "options": ["指定发送次数", "指定发送 ICMP 请求报文的源 IP 地址", "指定报文大小", "指定超时时间"],
    "answer": "B",
    "explain": "ping -a source-ip 用于指定源地址，常用于验证特定源地址的可达性；-c 指定发送次数，-s 指定报文长度，-t 指定超时时间。华为 VRP 中这些参数与常见实现一致。"
  },
  {
    "id": "P831070",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "排查两台主机之间无法通信的问题时，下列说法正确的有？",
    "options": ["使用 ping 可验证两台主机之间的基本三层可达性", "使用 tracert 可定位数据转发路径在哪个节点中断", "使用 display ip routing-table 可检查本机是否存在到达目的网段的路由", "若 ping 不通则说明一定是物理链路故障"],
    "answer": ["A", "B", "C"],
    "explain": "ping 验证三层可达性，tracert 逐跳定位路径中断点，display ip routing-table 检查路由是否正确。ping 不通的原因可能是物理链路、VLAN 配置、路由缺失、ACL 阻断等多种情况，不能直接断言为物理链路故障，故 D 错误。"
  },
  {
    "id": "P831071",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "debugging 命令会占用较多 CPU 资源，在生产环境应谨慎使用，并尽量配合 ACL 限定调试范围。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "debugging 会输出大量调试信息，消耗 CPU 与内存，严重时影响业务转发。建议在业务低峰期使用，通过 terminal monitor 与 terminal debugging 开启输出，并用 ACL 限定只对特定流量调试，排查完成后立即 undo debugging all。"
  },
  {
    "id": "P831072",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "要通过终端显示设备产生的 debugging 信息，需要执行哪些命令？",
    "options": ["terminal display 与 debug on", "screen monitor 与 debug enable", "terminal monitor 与 terminal debugging", "logging monitor 与 debug all"],
    "answer": "C",
    "explain": "默认情况下调试信息不会输出到终端，需要执行 terminal monitor 允许监视信息输出到终端，再执行 terminal debugging 允许调试信息输出。二者缺一不可。"
  },
  {
    "id": "P831073",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "清除接口统计计数以便重新观察故障现象，应使用命令？",
    "options": ["clear interface GigabitEthernet 0/0/1", "reset interface counters all", "undo counters interface", "reset counters interface GigabitEthernet 0/0/1"],
    "answer": "D",
    "explain": "reset counters interface 用于清零接口的收发统计计数，便于在故障复现时观察增量。排查错包、丢包问题时常先清零再观察，避免历史累计数据的干扰。"
  },
  {
    "id": "P831074",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "用户反映网络时断时续，检查发现交换机 CPU 利用率长期高于 90%，最不可能的原因是？",
    "options": ["设备电源功率不足", "广播风暴导致报文大量上送 CPU", "设备遭受协议报文攻击", "开启了大量 debugging 调试信息"],
    "answer": "A",
    "explain": "CPU 高的常见原因包括广播风暴、协议报文攻击、大量调试输出、ARP 攻击等。电源功率不足会导致设备重启或无法上电，通常不表现为 CPU 占用率高。"
  },
  {
    "id": "P831075",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "数据包单向可达（A 能 ping 通 B，B 不能 ping 通 A）的常见原因有？",
    "options": ["A 到 B 方向的路由存在，反方向缺少回程路由", "中间设备 ACL 只放行了单向流量", "NAT 转换只配置了单向", "两端接口速率不一致"],
    "answer": ["A", "B", "C"],
    "explain": "单向可达通常源于回程路由缺失、ACL 只放行单向、NAT 转换不完整、防火墙状态化策略不对称等。接口速率不一致一般导致协商失败或性能下降，并不会只造成单向不通。"
  },
  {
    "id": "P831076",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "display logbuffer 命令可以查看设备缓冲区中的日志信息，是故障回溯的重要手段。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "display logbuffer 显示日志缓冲区中的历史日志，包含接口 Up/Down、协议状态变化、告警等信息，可通过 display logbuffer reverse 从最新日志开始查看，是定位间歇性故障的关键命令。"
  },
  {
    "id": "P831077",
    "type": "fill",
    "chapter": "网络故障排查",
    "stem": "在华为设备上查看 IP 路由表，判断是否存在到达目标网段的路由，应使用命令 display ip ______。",
    "options": [],
    "answer": ["routing-table"],
    "explain": "display ip routing-table 显示路由表，可查看目的网段、下一跳、出接口、协议类型与优先级；配合 display ip routing-table <目的地址> 可精确检查是否存在最长匹配路由。"
  },
  {
    "id": "P831078",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "display stp brief 显示某端口角色为 Root、状态为 Forwarding，说明该端口是？",
    "options": ["该交换机的指定端口", "该交换机到达根桥的根端口", "被阻塞的替代端口", "未参与生成树计算的端口"],
    "answer": "B",
    "explain": "根端口（Root）是本地交换机到根桥路径开销最小的端口，处于 Forwarding 状态说明生成树收敛正常。若某端口角色为 Alternate 且状态为 Discarding，则是被阻塞的备份端口。"
  },
  // ================= 网络自动化与SDN =================
  {
    "id": "P831079",
    "type": "single",
    "chapter": "网络自动化与SDN",
    "stem": "SDN 架构中，负责集中掌握全网拓扑与转发策略、并向转发设备下发流表的是哪一层？",
    "options": ["应用层", "转发层", "控制层", "管理层"],
    "answer": "C",
    "explain": "SDN 分为应用层、控制层与转发层。控制层由控制器组成，负责集中管理网络状态、计算转发路径并通过南向接口向转发设备下发流表；应用层通过北向接口调用控制器能力；转发层只负责按流表转发。"
  },
  {
    "id": "P831080",
    "type": "single",
    "chapter": "网络自动化与SDN",
    "stem": "OpenFlow 协议在 SDN 架构中属于？",
    "options": ["北向接口协议", "东西向接口协议", "管理面协议", "南向接口协议"],
    "answer": "D",
    "explain": "OpenFlow 是控制器与转发设备之间的南向接口协议，定义了流表、安全通道等机制。北向接口通常采用 RESTful API 供应用层调用。"
  },
  {
    "id": "P831081",
    "type": "judge",
    "chapter": "网络自动化与SDN",
    "stem": "SDN 中，控制器与转发设备之间的接口称为南向接口（如 OpenFlow），控制器与应用层之间的接口称为北向接口（如 RESTful API）。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "南向接口用于控制器向转发设备下发流表与策略，典型协议是 OpenFlow、NETCONF；北向接口面向应用层，通常以 RESTful API 形式暴露网络能力，供业务系统调用。"
  },
  {
    "id": "P831082",
    "type": "multi",
    "chapter": "网络自动化与SDN",
    "stem": "与传统网络相比，SDN 的优势包括？",
    "options": ["控制与转发分离，实现集中控制", "网络能力可编程，便于快速部署新业务", "网络资源可灵活调度与自动化运维", "转发设备承担全部路由计算，控制器只做监控"],
    "answer": ["A", "B", "C"],
    "explain": "SDN 的核心特征是控制与转发分离、集中控制、开放可编程，从而使网络资源调度更灵活、业务上线更快。D 项描述与 SDN 理念相反，控制器才是路由与策略的计算者。"
  },
  {
    "id": "P831083",
    "type": "judge",
    "chapter": "网络自动化与SDN",
    "stem": "NETCONF 协议基于 XML 编码承载配置与状态数据，使用 YANG 模型描述数据结构，其传输层通常由 SSH 承载。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "NETCONF 使用 XML 格式承载数据，数据模型由 YANG 定义，通过 <get>、<edit-config> 等操作读写配置，传输层通常使用 SSH 提供安全通道。它是自动化运维的核心协议之一。"
  },
  {
    "id": "P831084",
    "type": "judge",
    "chapter": "网络自动化与SDN",
    "stem": "华为设备提供的 OPS（Open Programmability System）允许在网络设备上运行 Python 脚本，实现配置自动下发和事件联动。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "OPS 是华为 VRP 提供的内置可编程系统，支持在设备上运行 Python 脚本，可基于定时器、事件或命令行触发脚本执行，实现设备级的自动化运维。"
  },
  {
    "id": "P831085",
    "type": "multi",
    "chapter": "网络自动化与SDN",
    "stem": "关于使用 Python 对华为设备进行自动化配置的说法，正确的有？",
    "options": ["Paramiko 是 Python 的 SSH 协议实现库，可用于登录设备执行命令", "Netmiko 在 Paramiko 基础上针对网络设备做了封装，可自动处理分页与提示符", "ncclient 是 NETCONF 客户端库，通过 XML 报文读写设备配置", "NumPy 是专门用于网络设备配置下发的库"],
    "answer": ["A", "B", "C"],
    "explain": "Paramiko 实现 SSH 协议，Netmiko 在其之上封装了网络设备交互细节（如关闭分页、识别提示符），ncclient 用于 NETCONF 会话。NumPy 是数值计算库，与设备配置无关，故 D 错误。"
  },
  {
    "id": "P831086",
    "type": "single",
    "chapter": "网络自动化与SDN",
    "stem": "华为 iMaster NCE-Campus 主要面向的场景是？",
    "options": ["园区网络的集中管理、自动化部署与智能运维", "广域网骨干路由器硬件制造", "移动核心网计费", "终端安全杀毒"],
    "answer": "A",
    "explain": "iMaster NCE-Campus 是华为园区网络控制器，支持设备的即插即用、业务自动化编排、网络虚拟化与智能运维（如体验保障、故障智能定位）。"
  },
  {
    "id": "P831087",
    "type": "multi",
    "chapter": "网络自动化与SDN",
    "stem": "关于网络自动化运维工具 Ansible 的说法，正确的有？",
    "options": ["Ansible 是基于 SSH 的免代理（Agentless）自动化工具", "通过 Playbook（YAML 格式）描述任务流程", "可借助社区网络模块对华为等厂商设备下发配置", "Ansible 必须在每台被管设备上安装客户端程序"],
    "answer": ["A", "B", "C"],
    "explain": "Ansible 采用无代理架构，通过 SSH 连接被管设备，使用 YAML 编写的 Playbook 描述任务，并可通过厂商提供的模块（如 community.network 中的华为模块）实现配置下发，故 D 错误。"
  },
  {
    "id": "P831088",
    "type": "judge",
    "chapter": "网络自动化与SDN",
    "stem": "SDN 中控制层与转发层之间的接口称为北向接口，应用层与控制器之间的接口称为南向接口。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "方向定义相反：控制器与转发设备之间的接口是南向接口（如 OpenFlow、NETCONF），控制器与应用层之间的接口是北向接口（如 RESTful API）。"
  },
  {
    "id": "P831089",
    "type": "fill",
    "chapter": "网络自动化与SDN",
    "stem": "在 SDN 三层架构中，由交换机、路由器等设备组成、仅依据控制器下发的流表执行报文处理的层次称为 ______ 层。",
    "options": [],
    "answer": ["转发", "数据转发"],
    "explain": "SDN 架构自下而上为转发层、控制层、应用层。转发层由交换机、路由器等设备组成，仅根据控制器下发的流表执行转发，不再独立进行复杂的路由计算与控制决策。"
  },
  {
    "id": "P831090",
    "type": "multi",
    "chapter": "网络自动化与SDN",
    "stem": "关于常见网络管理协议及其端口，说法正确的有？",
    "options": ["SNMP 使用 UDP 161 接收管理站的请求，使用 UDP 162 接收 Trap 告警", "NTP 使用 UDP 123 进行时间同步", "SSH 使用 TCP 22，Telnet 使用 TCP 23", "SNMP 使用 TCP 514 与 515 传输管理报文"],
    "answer": ["A", "B", "C"],
    "explain": "SNMP 基于 UDP，161 端口接收 Get/Set 请求、162 端口接收 Trap/Inform；NTP 使用 UDP 123；SSH 使用 TCP 22，Telnet 使用 TCP 23。SNMP 并不使用 TCP 514/515，故 D 错误。"
  },
  {
    "id": "P831091",
    "type": "single",
    "chapter": "网络自动化与SDN",
    "stem": "Telemetry 相比传统 SNMP 轮询的主要优势是？",
    "options": ["不需要网络连接即可采集数据", "采用推模式（Push）主动上报数据，支持高频采集与更高精度", "采集频率更低但更节省资源", "只能采集设备的温度信息"],
    "answer": "B",
    "explain": "Telemetry 由设备主动、周期性地把数据推送到采集器，支持毫秒级高频采集，精度远高于 SNMP 的分钟级轮询，且对设备 CPU 的压力更小，适合大规模网络的实时监控。"
  },
  // ================= IPv6进阶与过渡技术 =================
  {
    "id": "P831092",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 的基本报头长度固定为多少字节？",
    "options": ["20 字节", "32 字节", "40 字节", "60 字节"],
    "answer": "C",
    "explain": "IPv6 基本报头固定为 40 字节，取消了选项字段，改由扩展报头实现，并取消了首部校验和，从而简化了路由器处理流程，提高了转发效率。"
  },
  {
    "id": "P831093",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 取消了广播地址，原 IPv4 中\"向本网段所有节点发送\"的功能主要由下列哪种地址类型承担？",
    "options": ["2000::/3", "FC00::/7", "FF00::/8", "FE80::/10"],
    "answer": "C",
    "explain": "IPv6 没有广播地址，原先广播承担的一对多功能改由组播实现，例如 ff02::1 表示链路上所有节点、ff02::2 表示所有路由器。全球单播、链路本地、唯一本地地址都属于单播范畴，用于一对一通信。"
  },
  {
    "id": "P831094",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 中未指定地址与环回地址分别是？",
    "options": [":: 和 ::1", "::1 和 ::", "0:0:0:0:0:0:0:0 和 FF02::1", ":: 和 FE80::1"],
    "answer": "A",
    "explain": "未指定地址为全零地址 ::，表示地址未配置，常用于 DAD 检测的源地址；环回地址为 ::1，相当于 IPv4 的 127.0.0.1，用于本机测试。"
  },
  {
    "id": "P831095",
    "type": "multi",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "关于 IPv6 地址类型及其前缀，说法正确的有？",
    "options": ["全球单播地址使用 2000::/3 前缀", "链路本地地址使用 FE80::/10 前缀，仅在本链路有效", "唯一本地地址使用 FC00::/7 前缀，类似于 IPv4 私有地址", "组播地址使用 FE00::/8 前缀"],
    "answer": ["A", "B", "C"],
    "explain": "IPv6 全球单播为 2000::/3，链路本地为 FE80::/10，唯一本地（ULA）为 FC00::/7（常用 FD00::/8），组播地址前缀为 FF00::/8 而非 FE00::/8，故 D 错误。"
  },
  {
    "id": "P831096",
    "type": "multi",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 过渡技术主要包括哪几类？",
    "options": ["双栈技术", "隧道技术", "翻译技术", "广播技术"],
    "answer": ["A", "B", "C"],
    "explain": "IPv4 向 IPv6 过渡主要有三大类技术：双栈（设备同时运行 IPv4 与 IPv6 协议栈）、隧道（如 6to4、ISATAP、GRE 隧道，把 IPv6 报文封装在 IPv4 中穿越）、翻译（如 NAT64/DNS64，实现协议转换）。IPv6 本身没有广播。"
  },
  {
    "id": "P831097",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "NAT64 与 DNS64 配合使用时，DNS64 的主要作用是？",
    "options": ["把 AAAA 记录转换为 A 记录", "把 IPv4 的 A 记录合成 AAAA 记录返回给 IPv6 主机", "为 IPv6 主机分配链路本地地址", "加密 DNS 查询"],
    "answer": "B",
    "explain": "当 IPv6-only 主机访问 IPv4 资源时，DNS64 在查询不到 AAAA 记录的情况下，把 A 记录与 NAT64 前缀合成为 AAAA 记录返回，使主机发出 IPv6 报文，再由 NAT64 完成地址与协议转换。"
  },
  {
    "id": "P831098",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 的地址自动配置中，SLAAC 依据的报文交互是？",
    "options": ["NS/NA（邻居请求/邻居通告）", "DHCP Discover/Offer", "RS/RA（路由器请求/路由器通告）", "ARP Request/Reply"],
    "answer": "C",
    "explain": "SLAAC 通过主机发送 RS、路由器回应 RA 的方式获取网络前缀，再结合接口标识生成全球单播地址。RA 报文中的 M 标志决定是否使用 DHCPv6 获取地址，O 标志决定是否通过 DHCPv6 获取其他配置信息。"
  },
  {
    "id": "P831099",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "RA 报文中 M 标志位置 1 表示？",
    "options": ["主机应使用无状态地址自动配置", "主机应仅获取 DNS 信息", "主机不应配置任何地址", "主机应通过 DHCPv6 获取有状态地址"],
    "answer": "D",
    "explain": "M（Managed）标志置 1 表示地址由 DHCPv6 有状态分配；O（Other）标志置 1 表示主机通过 DHCPv6 获取除地址外的其他配置信息（如 DNS），地址仍可由 SLAAC 生成。"
  },
  {
    "id": "P831100",
    "type": "judge",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 中路由器不对报文进行分片，分片工作由源端通过路径 MTU 发现机制完成。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IPv6 取消了中间路由器分片功能，源端通过 PMTU（路径 MTU 发现）确定路径上的最小 MTU 并据此调整报文大小，中间路由器对超大数据包直接回复 ICMPv6 Packet Too Big 报文。链路上最小 MTU 要求为 1280 字节。"
  },
  {
    "id": "P831101",
    "type": "fill",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "在华为设备接口上启用无状态地址自动配置、使接口根据 RA 前缀自动生成全球单播地址，命令是 ipv6 address auto ______。",
    "options": [],
    "answer": ["global"],
    "explain": "ipv6 address auto global 使接口通过接收 RA 报文获取前缀并自动生成全球单播地址；ipv6 address auto link-local 仅自动生成链路本地地址；ipv6 address dhcp 表示通过 DHCPv6 有状态获取地址。"
  },
  {
    "id": "P831102",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 中实现地址解析与重复地址检测（DAD）的协议是？",
    "options": ["NDP（邻居发现协议）", "ARP", "DHCPv6", "ICMPv4"],
    "answer": "A",
    "explain": "IPv6 使用 NDP 完成地址解析（NS/NA）、路由器发现（RS/RA）、重复地址检测与重定向等功能，取代了 IPv4 中的 ARP，并基于 ICMPv6 实现。"
  },
  {
    "id": "P831103",
    "type": "single",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "IPv6 组播地址的范围是？",
    "options": ["FE80::/10", "FF00::/8", "FC00::/7", "2000::/3"],
    "answer": "B",
    "explain": "IPv6 组播地址以 FF00::/8 为前缀，其中 FF02::1 表示链路本地所有节点，FF02::2 表示链路本地所有路由器，FF02::1:FF00:0/104 为被请求节点组播地址。"
  },
  {
    "id": "P831104",
    "type": "multi",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "关于 IPv6 报头相比 IPv4 的改进，说法正确的有？",
    "options": ["取消了首部校验和字段", "取消了选项字段，改用扩展报头实现", "基本报头固定为 40 字节，便于硬件快速处理", "保留了广播地址以兼容 IPv4"],
    "answer": ["A", "B", "C"],
    "explain": "IPv6 取消首部校验和（由链路层与传输层保证）、取消选项字段改为扩展报头、固定 40 字节基本报头，简化了转发处理。IPv6 取消了广播，用组播和任意播替代，故 D 错误。"
  },
  {
    "id": "P831105",
    "type": "judge",
    "chapter": "IPv6进阶与过渡技术",
    "stem": "ISATAP 和 6to4 都属于 IPv6 隧道过渡技术，通过把 IPv6 报文封装在 IPv4 报文中实现穿越 IPv4 网络。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "ISATAP 与 6to4 都通过 IPv4 网络承载 IPv6 报文，属于自动隧道技术；此外还有手工配置隧道和 GRE 隧道。隧道技术适用于 IPv6 孤岛穿越 IPv4 骨干的场景。"
  },
  // ================= WLAN基础 =================
  {
    "id": "P831106",
    "type": "single",
    "chapter": "WLAN基础",
    "stem": "802.11ac 和 802.11ax 分别对应 Wi-Fi 的哪一代？",
    "options": ["Wi-Fi 4 和 Wi-Fi 5", "Wi-Fi 6 和 Wi-Fi 5", "Wi-Fi 5 和 Wi-Fi 6", "Wi-Fi 5 和 Wi-Fi 7"],
    "answer": "C",
    "explain": "802.11n 对应 Wi-Fi 4，802.11ac 对应 Wi-Fi 5，802.11ax 对应 Wi-Fi 6。802.11ac 主要工作在 5GHz 频段，802.11ax 同时支持 2.4GHz 与 5GHz，并引入 OFDMA、MU-MIMO 等技术。"
  },
  {
    "id": "P831107",
    "type": "fill",
    "chapter": "WLAN基础",
    "stem": "2.4GHz 频段共有 13 个信道，组网规划时通常推荐使用 1、6、______ 这三个互不重叠的信道。",
    "options": [],
    "answer": ["11"],
    "explain": "2.4GHz 每个信道带宽 20MHz，相邻信道中心频率间隔仅 5MHz，因此相邻信道彼此重叠。1、6、11 三个信道之间各间隔 5 个信道，互不重叠，是常用的组网规划方案。"
  },
  {
    "id": "P831108",
    "type": "single",
    "chapter": "WLAN基础",
    "stem": "胖 AP（FAT AP）与瘦 AP（FIT AP）的主要区别是？",
    "options": ["胖 AP 体积更大，瘦 AP 体积更小", "胖 AP 只能工作在 2.4GHz", "瘦 AP 不能通过 PoE 供电", "胖 AP 可独立完成配置与认证，瘦 AP 需要由 AC 统一管理"],
    "answer": "D",
    "explain": "胖 AP 具备完整的 WLAN 功能，可独立配置和管理，适合小型网络；瘦 AP 功能简化，零配置上线后由 AC 通过 CAPWAP 协议统一下发配置和管理，适合大规模组网。"
  },
  {
    "id": "P831109",
    "type": "single",
    "chapter": "WLAN基础",
    "stem": "CAPWAP 协议使用的传输层端口是？",
    "options": ["控制隧道 UDP 5246，数据隧道 UDP 5247", "控制隧道 TCP 5246，数据隧道 TCP 5247", "控制隧道 UDP 5247，数据隧道 UDP 5246", "控制与数据隧道均使用 UDP 161"],
    "answer": "A",
    "explain": "CAPWAP 协议中，AC 与 AP 之间建立两条隧道：控制隧道使用 UDP 5246 承载配置下发、状态上报等控制报文，数据隧道使用 UDP 5247 承载用户数据报文。"
  },
  {
    "id": "P831110",
    "type": "multi",
    "chapter": "WLAN基础",
    "stem": "关于无线安全协议，说法正确的有？",
    "options": ["WEP 加密算法存在严重缺陷，已被证明不安全", "WPA2 支持 AES-CCMP 加密，安全性优于 WPA 的 TKIP", "WPA3 进一步增强了安全性，引入了 SAE 等机制", "WEP 是当前最推荐的无线加密方式"],
    "answer": ["A", "B", "C"],
    "explain": "WEP 的 RC4 实现存在 IV 重用等缺陷，可被轻易破解；WPA2 采用 AES-CCMP，安全性显著提升；WPA3 引入 SAE 抵御离线字典攻击。因此 WEP 绝不应在新网络中部署，D 错误。"
  },
  {
    "id": "P831111",
    "type": "single",
    "chapter": "WLAN基础",
    "stem": "WLAN 认证方式中，PSK 与 802.1X 的主要区别是？",
    "options": ["PSK 需要 RADIUS 服务器，802.1X 不需要", "PSK 使用预共享密钥认证，802.1X 使用认证服务器进行用户级认证", "两者都需要证书", "PSK 安全性一定高于 802.1X"],
    "answer": "B",
    "explain": "PSK（WPA-PSK）所有用户共享同一密钥，部署简单但密钥泄露风险高；802.1X 基于 RADIUS 服务器实现用户级的身份认证与密钥协商，适合企业网络，安全性更高。"
  },
  {
    "id": "P831112",
    "type": "judge",
    "chapter": "WLAN基础",
    "stem": "802.11 帧分为管理帧、控制帧和数据帧三大类。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "802.11 帧分为管理帧（如 Beacon、Probe Request/Response、Authentication、Association）、控制帧（如 RTS、CTS、ACK）和数据帧。管理帧负责网络发现与接入，控制帧负责信道争用与确认。"
  },
  {
    "id": "P831113",
    "type": "fill",
    "chapter": "WLAN基础",
    "stem": "CAPWAP 协议的数据隧道使用 UDP 端口 ______，用于承载用户数据报文。",
    "options": [],
    "answer": ["5247"],
    "explain": "CAPWAP 控制隧道使用 UDP 5246 承载配置下发等控制报文，数据隧道使用 UDP 5247 承载用户数据报文。部署防火墙时需放行这两个端口的双向流量，否则 AP 无法上线或用户业务不通。"
  },
  {
    "id": "P831114",
    "type": "single",
    "chapter": "WLAN基础",
    "stem": "无线漫游中，终端从一个 AP 移动到另一个 AP 时发生的行为是？",
    "options": ["终端必须重新获取 IP 地址", "终端必须重新输入密码并更换 SSID", "终端重新关联到新的 AP，但保持同一 SSID 与 IP 地址不变", "终端连接会永久中断"],
    "answer": "C",
    "explain": "在 ESS 中，多个 AP 使用相同 SSID 且二层网络连通时，终端移动到新 AP 覆盖范围后会重新关联（Reassociation），保持 IP 地址不变，业务基本不中断，这一过程称为漫游。"
  },
  {
    "id": "P831115",
    "type": "judge",
    "chapter": "WLAN基础",
    "stem": "5GHz 频段相比 2.4GHz 频段，可用信道更多、干扰更少，但穿透能力相对较弱。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "5GHz 频段可用信道数量多、非重叠信道多、干扰源少，可提供更高带宽；但频率越高波长越短，绕射与穿墙能力弱于 2.4GHz，覆盖范围相对较小。"
  },
  {
    "id": "P831116",
    "type": "single",
    "chapter": "WLAN基础",
    "stem": "关于天线增益的描述，正确的是？",
    "options": ["增益越高覆盖越均匀", "增益单位为 dBm，表示发射功率", "增益越高天线体积越小", "增益表示天线将能量集中到特定方向的能力，单位为 dBi"],
    "answer": "D",
    "explain": "天线增益表示天线在特定方向上集中辐射能量的能力，单位为 dBi。高增益天线方向性强、覆盖距离远，但垂直覆盖角度小，适合狭长走廊等场景；dBm 是功率单位，与增益概念不同。"
  },
  {
    "id": "P831117",
    "type": "multi",
    "chapter": "WLAN基础",
    "stem": "关于 WLAN 中的 SSID、BSSID 与漫游，说法正确的有？",
    "options": ["SSID 是用户可见的无线网络名称，长度不超过 32 字节", "BSSID 用于唯一标识一个基本服务集，通常是 AP 射频接口的 MAC 地址", "在 ESS 中终端漫游到新 AP 后会重新关联，但 IP 地址保持不变", "漫游时终端必须重新获取 IP 地址并重新输入密钥"],
    "answer": ["A", "B", "C"],
    "explain": "SSID 为网络名称（≤32 字节），BSSID 唯一标识一个 BSS，通常即 AP 射频 MAC。在 ESS 内多 AP 使用相同 SSID 且二层连通时，终端漫游会重新关联并保持 IP 不变；由于 SSID 相同且密钥一致，无需重新输入密钥，也不必重新获取 IP，故 D 错误。"
  },
  {
    "id": "P831118",
    "type": "multi",
    "chapter": "WLAN基础",
    "stem": "关于 AC+AP 组网中瘦 AP 的上线过程，说法正确的有？",
    "options": ["AP 上电后首先通过 DHCP 获取 IP 地址", "AP 可通过 DHCP Option 43 或 DNS 方式发现 AC 的 IP 地址", "AP 与 AC 之间建立 CAPWAP 隧道后由 AC 下发配置", "AP 上线不需要 AC 参与，可自行加载配置文件"],
    "answer": ["A", "B", "C"],
    "explain": "瘦 AP 的上线流程为：通过 DHCP 获取 IP 地址、发现 AC（广播/组播/DHCP Option 43/DNS 等方式）、建立 CAPWAP 隧道、由 AC 下发配置与版本。整个过程必须有 AC 参与，故 D 错误。"
  },
  {
    "id": "P831119",
    "type": "fill",
    "chapter": "WLAN基础",
    "stem": "CAPWAP 协议的控制隧道使用 UDP 端口 ______。",
    "options": [],
    "answer": ["5246"],
    "explain": "CAPWAP 控制隧道使用 UDP 5246，数据隧道使用 UDP 5247。部署防火墙时需放行这两个端口的双向流量，否则 AP 无法上线或用户业务不通。"
  },
  {
    "id": "P831120",
    "type": "judge",
    "chapter": "WLAN基础",
    "stem": "在 AC+AP 组网中，若 AP 已正常上线但无线用户无法获取 IP 地址，应优先排查数据隧道（UDP 5247）是否被阻断以及 DHCP 服务器是否可达。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "AP 已上线说明控制隧道（UDP 5246）正常，此时用户无法获取地址的问题多出在数据转发路径：数据隧道 UDP 5247 被阻断、DHCP 服务器不可达、地址池耗尽或 AC 上未配置正确的转发模式。"
  }
];