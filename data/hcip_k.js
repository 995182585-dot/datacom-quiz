window.BANK_HCIP_K = [
  {
    "id": "PK001",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在华为交换机上配置端口隔离时，若希望同一隔离组内的端口之间完全不能互访，但所有端口仍可与上行端口通信，应使用哪种配置？",
    "options": [
      "在隔离组端口上执行 port-isolate enable group 1，上行端口不加入任何隔离组",
      "在所有端口（含上行端口）上执行 port-isolate enable group 1",
      "在上行端口上执行 port-isolate enable group 1，接入端口不配置",
      "执行 port-isolate mode all 后仅配置上行端口"
    ],
    "answer": "A",
    "explain": "端口隔离通过 port-isolate enable group N 把端口划入隔离组，同组端口二层互相隔离但都能与非隔离组端口（上行口）通信。上行端口不能加入隔离组，否则用户将无法访问网关。"
  },
  {
    "id": "PK002",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于华为交换机端口隔离的隔离模式，下列描述正确的有哪些？",
    "options": [
      "二层隔离模式下，同一隔离组内端口之间二层报文不能互通，但可以通过三层转发互通",
      "三层隔离模式下，同一隔离组内端口之间的报文在二层和三层均不能互通",
      "缺省情况下端口隔离采用二层隔离模式",
      "端口隔离只能在同一台设备内生效，无法跨设备实现"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "port-isolate mode l2 只隔离二层转发，若两端处于不同网段仍可经网关三层互通；port-isolate mode all 则在二层和三层都隔离。缺省为二层隔离，且端口隔离是设备本地特性，不能跨设备。"
  },
  {
    "id": "PK003",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在华为交换机接口上启用端口安全并配置 max-mac-num 为 5，当该接口收到第 6 个不同源 MAC 的报文时，默认的处理动作是？",
    "options": ["丢弃该报文并上报告警，端口保持 up","直接关闭该端口使其 error-down","转发该报文并覆盖最早的 MAC 表项","仅记录日志，报文正常转发"],
    "answer": "A",
    "explain": "华为设备端口安全的默认 protect-action 为 restrict，即丢弃超限报文并上报告警，端口本身保持 up。只有显式配置为 shutdown 时端口才会进入 error-down 状态，因此默认情况下端口不会被关闭。"
  },
  {
    "id": "PK004",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "华为交换机端口安全支持的保护动作有 protect、restrict、shutdown 三种，下列关于它们区别的描述，正确的有哪些？",
    "options": [
      "protect 动作只丢弃超限报文，不产生告警，端口保持 up",
      "restrict 动作丢弃超限报文并上报告警，端口保持 up",
      "shutdown 动作使端口进入 error-down 状态并停止转发所有流量",
      "shutdown 动作只丢弃超限报文，不影响端口状态"
    ],
    "answer": ["A", "B", "C"],
    "explain": "protect 静默丢弃最不打扰业务但不易察觉攻击；restrict 丢弃并告警便于定位；shutdown 直接关闭端口，安全强度最高但影响面最大。因此 shutdown 会使端口 error-down 而非仅丢包。"
  },
  {
    "id": "PK005",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "配置 sticky MAC 后，交换机学习到的动态 MAC 地址会被转换为 sticky MAC 表项，设备重启后该表项仍然存在。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "sticky MAC（port-security mac-address sticky）把端口动态学习的 MAC 固化到配置中并保存，设备重启后表项依然有效，无需重新学习。它常用于接入终端位置固定的场景。"
  },
  {
    "id": "PK006",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "端口因端口安全 shutdown 动作进入 error-down 后，若要使其在检测到恢复条件时自动重新使能，应配置哪条命令？",
    "options": [
      "error-down auto-recovery cause port-security interval 300",
      "port-security auto-recovery interval 300",
      "shutdown auto-recovery interval 300",
      "port-security protect-action protect"
    ],
    "answer": "A",
    "explain": "error-down auto-recovery cause port-security interval N 指定端口因端口安全被关闭后，经过 N 秒自动恢复 up。若不配置自动恢复，只能由管理员手工执行 undo shutdown 恢复。"
  },
  {
    "id": "PK007",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "为防止某个端口下大量伪造源 MAC 的报文冲击 MAC 地址表，管理员希望丢弃所有源 MAC 为 0000-0000-0000 的报文并禁止其学习，应使用什么方式？",
    "options": [
      "配置黑洞 MAC 表项 mac-address blackhole 0000-0000-0000 vlan 10",
      "配置静态 MAC 表项 mac-address static 0000-0000-0000 gi0/0/1 vlan 10",
      "配置端口安全 max-mac-num 1",
      "配置风暴控制 storm-control broadcast"
    ],
    "answer": "A",
    "explain": "黑洞 MAC 表项用于丢弃指定源或目的 MAC 的报文，不再转发也不再学习，常用于屏蔽攻击源或非法终端。静态 MAC 表项是正常绑定转发，语义完全不同。"
  },
  {
    "id": "PK008",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于 MAC 地址表安全的加固手段，下列描述正确的有哪些？",
    "options": [
      "静态 MAC 绑定可以把 MAC、VLAN、接口三者固定，防止终端随意更换接入端口",
      "端口安全的 max-mac-num 可以限制单个端口学习的 MAC 数量，抑制 MAC 泛洪攻击",
      "黑洞 MAC 表项既能丢弃指定源 MAC 的报文，也能丢弃指定目的 MAC 的报文",
      "MAC 地址学习限制只能限制源 MAC，无法限制目的 MAC"
    ],
    "answer": ["A", "B", "C"],
    "explain": "静态绑定固化 MAC-VLAN-接口关系；max-mac-num 限制学习数量以抵御 MAC 泛洪；黑洞表项按源或目的 MAC 丢弃。D 项错误，因为黑洞表项可以针对目的 MAC 生效。"
  },
  {
    "id": "PK009",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在交换机接口上执行 storm-control broadcast min-rate 1000，其中 1000 的单位是什么？",
    "options": [
      "1000 个报文每秒（pps）",
      "1000 kbit/s",
      "1000 字节每秒",
      "1000 个报文每分钟"
    ],
    "answer": "A",
    "explain": "storm-control 的 min-rate 参数单位为 pps（包每秒），表示允许通过的广播报文速率下限阈值；超过该阈值的广播报文将被丢弃。若要按带宽比例抑制，应使用 storm-control broadcast percentage 命令。"
  },
  {
    "id": "PK010",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于交换机风暴控制的配置，下列说法正确的有哪些？",
    "options": [
      "可以分别对广播、组播、未知单播报文进行抑制",
      "min-rate 模式按报文速率（pps）设置阈值",
      "percentage 模式按占接口带宽的百分比设置阈值",
      "风暴控制只能抑制广播报文，不能抑制组播和未知单播"
    ],
    "answer": ["A", "B", "C"],
    "explain": "storm-control 支持 broadcast、multicast、unknown-unicast 三类，可同时配置；阈值既可用 min-rate 指定 pps，也可用 percentage 指定带宽百分比。D 项明显错误。"
  },
  {
    "id": "PK011",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "交换机 CPU 占用率异常升高且伴随协议震荡，为限制上送 CPU 的协议报文速率，应优先采用哪种机制？",
    "options": [
      "配置 cpu-defend policy 并设置 CPCAR 限速",
      "配置 storm-control broadcast",
      "配置 port-security max-mac-num",
      "配置端口隔离 port-isolate enable"
    ],
    "answer": "A",
    "explain": "cpu-defend policy 是 CPU 防攻击策略，其中 CPCAR 用于限制各类协议报文上送 CPU 的速率（CAR），从而保护 CPU。风暴控制抑制的是转发层面的广播/组播/未知单播副本，不解决协议报文上送问题。"
  },
  {
    "id": "PK012",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于 cpu-defend 的 CPCAR 与白名单，下列说法正确的有哪些？",
    "options": [
      "CPCAR 对不同类型的协议报文分别设置上送 CPU 的速率上限，超限报文被丢弃",
      "白名单中的报文可以不受 CPCAR 限制，保证关键协议优先上送 CPU",
      "CPCAR 配置过低可能导致正常协议报文被丢弃，引发协议中断",
      "CPCAR 是针对转发流量限速，与上送 CPU 的报文无关"
    ],
    "answer": ["A", "B", "C"],
    "explain": "CPCAR（Committed Packet Car、即承诺访问速率）用于限速上送 CPU 的协议报文，可按协议类型细分；白名单可让关键报文豁免限速。配置过低会误伤正常协议，因此调整 CPCAR 需要谨慎评估。"
  },
  {
    "id": "PK013",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "在交换机上使用 traffic-filter inbound acl 3000 可以把 ACL 应用到接口的入方向，对进入接口的报文进行过滤。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "traffic-filter 是接口下基于 ACL 的流分类过滤命令，inbound 表示对进入该接口的报文匹配 ACL，命中的报文按 ACL 动作 permit 或 deny 处理。ACL 本身只定义规则，必须被引用后才生效。"
  },
  {
    "id": "PK014",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "使用 ACL 结合 traffic-filter 做流量过滤时，若 ACL 规则全部为 deny 且没有配置 permit 规则，则该接口下的流量会出现什么结果？",
    "options": [
      "命中规则的报文被丢弃，未命中的报文被正常转发",
      "所有报文都被丢弃，因为 ACL 末尾隐含 permit 规则",
      "所有报文都被丢弃，因为 ACL 末尾隐含 deny any 规则",
      "ACL 未匹配报文的行为取决于接口类型，与 ACL 规则无关"
    ],
    "answer": "C",
    "explain": "华为 ACL 在末尾隐含一条 deny（拒绝所有）规则，因此只配置 deny 规则而没有任何 permit 规则时，其余流量会被隐含规则丢弃。这是配置 ACL 过滤时最常见的故障原因。"
  },
  {
    "id": "PK015",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "将设备的 Telnet 管理改为 SSH 管理，下列哪些是必须完成的配置步骤？",
    "options": [
      "生成 RSA 或 ECC 密钥对（如 rsa local-key-pair create）",
      "配置 VTY 用户界面的认证方式为 AAA 或 password，并启用 protocol inbound ssh",
      "配置 SSH 用户及其认证方式（密码或 RSA 公钥）",
      "配置 stelnet server enable 使能 SSH 服务器功能"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "完整加固步骤包括：生成密钥对、使能 SSH 服务、配置 VTY 只允许 SSH 接入、创建本地或 AAA 用户并指定服务类型为 ssh。四步缺一不可，否则 SSH 无法登录。"
  },
  {
    "id": "PK016",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "为提升管理安全性，管理员希望 VTY 界面只接受 SSH 接入并拒绝 Telnet，应执行哪条命令？",
    "options": [
      "在 user-interface vty 0 4 下执行 protocol inbound ssh",
      "在 user-interface vty 0 4 下执行 undo telnet server enable",
      "在系统视图下执行 undo telnet client enable",
      "在 user-interface vty 0 4 下执行 authentication-mode none"
    ],
    "answer": "A",
    "explain": "protocol inbound ssh 限制该 VTY 通道只接受 SSH 协议接入，从而禁用 Telnet。undo telnet client enable 关闭的是设备作为 Telnet 客户端的能力，与拒绝他人 Telnet 登录无关。"
  },
  {
    "id": "PK017",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "设备上执行的 display current-configuration | include snmp 命令可以用于核查是否存在使用默认团体名 public 或 private 的 SNMP 配置。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "通过 display current-configuration 管道过滤 snmp 关键字，可以快速查看 snmp-agent community 等配置，发现仍在使用 public/private 默认团体名的风险点并及时整改。"
  },
  {
    "id": "PK018",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "关于密码在配置文件中的存储方式，cipher 与 irreversible-cipher 的关键区别是什么？",
    "options": [
      "cipher 是可逆加密，可以通过一定手段还原出明文；irreversible-cipher 是不可逆加密，无法还原明文",
      "cipher 是不可逆加密，irreversible-cipher 是可逆加密",
      "两者都是明文存储，只是显示效果不同",
      "irreversible-cipher 只能用于 SNMP 团体名，不能用于本地用户密码"
    ],
    "answer": "A",
    "explain": "cipher 采用可逆算法保存密码，理论上可以还原明文，存在被破解的风险；irreversible-cipher 采用不可逆算法（如 HMAC-SHA256 类），只能用于校验，不能还原明文，安全性更高。"
  },
  {
    "id": "PK019",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "为满足密码复杂度与登录安全要求，下列加固措施中合理的有哪些？",
    "options": [
      "配置本地用户的密码最小长度与复杂度检查策略",
      "配置登录失败次数达到阈值后锁定该账号一段时间",
      "配置 VTY 界面的闲置超时时间（idle-timeout）自动断开连接",
      "把所有用户的权限级别统一设置为 15 以便管理"
    ],
    "answer": ["A", "B", "C"],
    "explain": "复杂度校验、失败锁定、闲置超时都是标准加固手段。把所有人提升到 15 级违背最小权限原则，一旦账号泄露将导致设备完全失控，属于高风险配置。"
  },
  {
    "id": "PK020",
    "type": "fill",
    "chapter": "网络设备安全加固",
    "stem": "在系统视图下执行 local-user huawei password irreversible-cipher Huawei@123 后，若要把该用户的权限级别设置为 15，应执行的命令是 local-user huawei ______ 15。",
    "options": [],
    "answer": ["privilege level"],
    "explain": "华为设备通过 local-user 用户名 privilege level 级别 设置本地用户权限级别，级别范围 0~15，15 为最高管理级别。权限级别决定了登录后可执行的命令范围。"
  },
  {
    "id": "PK021",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "管理员希望普通用户级别 1 也能执行 display current-configuration 命令，应使用哪条命令实现分级授权？",
    "options": [
      "command-privilege level 1 view system display current-configuration",
      "user-privilege level 1 display current-configuration",
      "local-user huawei privilege level 15",
      "authorization-mode command"
    ],
    "answer": "A",
    "explain": "command-privilege level N view 视图 命令 可以把指定视图下的命令重新指定到新的用户级别，实现精细化的分级授权。直接提升用户级别会带来越权风险，不如按需调整命令级别。"
  },
  {
    "id": "PK022",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "为保证多台设备日志中记录的时间戳一致、便于关联分析，应配置 NTP 使所有网络设备与统一的时钟源同步。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "时间不同步会导致跨设备日志无法按时间排序关联，严重影响故障定位与审计取证。部署 NTP 统一时钟源是日志与审计体系的基础要求。"
  },
  {
    "id": "PK023",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在华为设备的信息中心日志级别中，级别 0 对应的含义是什么？",
    "options": [
      "emergencies，设备不可用的紧急故障",
      "debugging，调试信息",
      "informational，普通提示信息",
      "warning，警告信息"
    ],
    "answer": "A",
    "explain": "华为日志级别 0~7 依次为 emergencies(0)、alert(1)、critical(2)、error(3)、warning(4)、notification(5)、informational(6)、debugging(7)，数字越小越紧急。数字越大信息越详细但越不重要。"
  },
  {
    "id": "PK024",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于 info-center 日志输出方向与 Syslog 服务器配置，下列说法正确的有哪些？",
    "options": [
      "可以配置日志输出到控制台、VTY 终端、日志缓冲区以及 Syslog 服务器",
      "配置 info-center loghost 指定 Syslog 服务器地址后，日志可通过 UDP 514 端口发送",
      "日志缓冲区有容量上限，写满后新日志会覆盖最早的日志（循环覆盖）",
      "日志只能保存在设备本地，无法发送到外部服务器"
    ],
    "answer": ["A", "B", "C"],
    "explain": "info-center 支持多输出方向（console、monitor、logbuffer、loghost），loghost 通过 UDP 514 发送到 Syslog 服务器便于集中审计。缓冲区循环覆盖，重要日志必须外送保存。"
  },
  {
    "id": "PK025",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "相比 SNMPv2c，SNMPv3 最重要的安全增强是什么？",
    "options": [
      "提供基于用户的安全模型 USM，支持认证与加密，报文可完整性与机密性保护",
      "把团体名长度从 32 位扩展到 128 位",
      "使用 TCP 替代 UDP 传输，保证可靠交付",
      "取消了 MIB 树结构，改用 JSON 编码"
    ],
    "answer": "A",
    "explain": "SNMPv3 引入 USM（基于用户的安全模型）与 VACM，支持 HMAC 认证和 DES/AES 加密，解决了 v1/v2c 明文团体名易被窃听和伪造的问题。它仍基于 UDP 传输并保留 MIB 结构。"
  },
  {
    "id": "PK026",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "某企业需要对设备管理操作做精细的“谁做了什么”审计，并要求授权与认证分离、支持按命令级别授权，应优先选择哪种 AAA 协议？",
    "options": [
      "TACACS+",
      "RADIUS",
      "SNMPv3",
      "Syslog"
    ],
    "answer": "A",
    "explain": "TACACS+ 支持认证、授权、计费三者完全分离，可对每条命令做授权，适合设备管理场景的精细审计。RADIUS 把认证与授权合并，更适合网络接入用户的计费与认证场景。"
  },
  {
    "id": "PK027",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于 RADIUS 与 TACACS+ 的对比，下列说法正确的有哪些？",
    "options": [
      "RADIUS 使用 UDP 传输，TACACS+ 使用 TCP 传输",
      "RADIUS 只对密码字段加密，TACACS+ 可对整个报文体加密",
      "RADIUS 将认证与授权合并处理，TACACS+ 将认证、授权、计费分离",
      "RADIUS 常用于设备命令行级别的逐条命令授权"
    ],
    "answer": ["A", "B", "C"],
    "explain": "RADIUS 基于 UDP（1812/1813），仅加密密码；TACACS+ 基于 TCP 49，加密整个报文体，且 AAA 三者分离。逐条命令授权是 TACACS+ 的典型能力，RADIUS 不具备。"
  },
  {
    "id": "PK028",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "为防止私接 DHCP 服务器导致终端获取错误地址，在接入交换机上应部署哪项安全特性？",
    "options": [
      "DHCP Snooping，并将用户接入端口设为 untrusted、连接合法 DHCP 服务器的端口设为 trusted",
      "IP Source Guard，仅绑定 IP 与 MAC",
      "动态 ARP 检测 DAI",
      "端口隔离 port-isolate enable"
    ],
    "answer": "A",
    "explain": "DHCP Snooping 通过信任端口机制丢弃来自非信任端口的 DHCP 应答报文，并建立 DHCP Snooping 绑定表。trusted 端口连接合法服务器或上行链路，untrusted 为用户接入端口。"
  },
  {
    "id": "PK029",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "IP Source Guard 依赖 DHCP Snooping 或静态绑定表来生成绑定关系，用于防止终端私自修改 IP 地址进行欺骗。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IPSG 通过比对报文的源 IP、源 MAC 与绑定表（来自 DHCP Snooping 动态表项或静态绑定）来决定是否转发，非法源地址报文将被丢弃，从而防止 IP 地址盗用。"
  },
  {
    "id": "PK030",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "部署动态 ARP 检测（DAI）时，交换机主要依据什么来判断 ARP 报文是否合法？",
    "options": [
      "DHCP Snooping 绑定表或静态绑定表，校验 ARP 报文中的 IP 与 MAC 对应关系",
      "ARP 报文的源端口是否属于同一 VLAN",
      "ARP 报文的发送速率是否超过阈值",
      "ARP 报文的以太网类型字段是 0x0806"
    ],
    "answer": "A",
    "explain": "DAI 将 ARP 报文中的发送端 IP 与 MAC 同绑定表比对，不一致的 ARP 报文被丢弃，从而抑制中间人攻击和 ARP 欺骗。没有绑定表时 DAI 无法有效工作，所以通常与 DHCP Snooping 联动部署。"
  },
  {
    "id": "PK031",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "为抵御针对 ARP 表的攻击，下列加固措施中可行的有哪些？",
    "options": [
      "配置 ARP 报文限速（arp anti-attack rate-limit 或 arp speed-limit），限制单位时间内允许处理的 ARP 报文数量",
      "部署静态 ARP 绑定，把关键服务器或网关的 IP-MAC 关系固化",
      "部署动态 ARP 检测 DAI，丢弃 IP 与 MAC 不匹配的 ARP 报文",
      "关闭所有接口的 ARP 学习功能，使设备不再生成 ARP 表项"
    ],
    "answer": ["A", "B", "C"],
    "explain": "ARP 限速抑制 ARP 泛洪对 CPU 的冲击，静态 ARP 绑定保证关键条目不被篡改，DAI 从合法性上过滤伪造 ARP。完全关闭 ARP 学习会导致正常通信无法建立，属于错误做法。"
  },
  {
    "id": "PK032",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在交换机连接终端的边缘端口上，为防止伪造的 STP 报文扰乱生成树拓扑，应配置什么？",
    "options": [
      "BPDU 保护（stp bpdu-protection）",
      "根保护（stp root-protection）",
      "环路保护（stp loop-protection）",
      "TC-BPDU 保护（stp tc-protection）"
    ],
    "answer": "A",
    "explain": "BPDU 保护配置在边缘端口（edged-port）上，一旦收到 BPDU 就把端口关闭为 error-down，防止非法设备接入影响拓扑。根保护配置在根桥的指定端口上，用于防止下游设备抢根。"
  },
  {
    "id": "PK033",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "STP 根保护应配置在根桥的指定端口（Designated Port）上，当该端口收到优先级更高的 BPDU 时，端口会进入 Discarding 状态而不转发报文。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "根保护的目的是保护当前根桥地位不被下游设备抢占。它只对指定端口生效，收到更优 BPDU 时端口进入 Discarding 状态并保持，直到不再收到更优 BPDU。配置在非指定端口上不会生效。"
  },
  {
    "id": "PK034",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "端口安全与 DHCP Snooping 联动时，若希望 DHCP Snooping 绑定表中的用户下线后端口安全表项也同步老化，应使用哪种机制？",
    "options": [
      "配置 DHCP Snooping 的绑定表与端口安全 sticky MAC 联动，使用户 MAC 随着绑定表老化而释放",
      "把端口安全保护动作改为 protect",
      "配置 error-down auto-recovery",
      "配置 MAC 地址黑洞表项"
    ],
    "answer": "A",
    "explain": "端口安全与 DHCP Snooping 联动后，DHCP Snooping 绑定表中的 MAC 会被转换为端口安全的 sticky 表项，用户下线绑定表老化时相应表项同步删除，避免表项被旧终端长期占用导致新终端无法接入。"
  },
  {
    "id": "PK035",
    "type": "multi",
    "chapter": "网络设备安全加固",
    "stem": "关于网络设备的固件与补丁管理，下列做法合理的有哪些？",
    "options": [
      "升级前备份当前配置文件与系统软件，并确认新版本对现网业务无兼容性风险",
      "在业务低谷期进行升级，并提前准备回退版本与回退步骤",
      "升级后核对版本号并验证关键业务，检查日志中是否存在异常告警",
      "为节省时间，跳过测试环境直接在所有现网设备上一次批量升级"
    ],
    "answer": ["A", "B", "C"],
    "explain": "固件与补丁管理的核心是备份、评估、窗口期实施、回退预案和升级后验证。跳过测试在全网批量升级会使风险不可控，一旦出现兼容性问题将导致大面积业务中断。"
  },
  {
    "id": "PK036",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "设备配置备份的正确做法是什么？",
    "options": [
      "将配置导出到可靠的服务器或网管系统保存，并在变更前后各备份一次，形成版本记录",
      "仅保存在设备本地 flash 中即可，无需异地备份",
      "只在设备故障时才临时导出配置",
      "备份配置时无需记录版本与时间信息"
    ],
    "answer": "A",
    "explain": "配置备份应异地保存并保留版本与时间信息，便于故障恢复和变更追溯。仅存本机 flash 会因设备损坏而丢失，故障时临时导出往往已经来不及。"
  },
  {
    "id": "PK037",
    "type": "judge",
    "chapter": "网络设备安全加固",
    "stem": "设备的配置文件可以从 TFTP 或 FTP 服务器导入，执行配置恢复前应先核对当前配置并做好备份，避免恢复过程覆盖有效配置。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "通过 tftp/f tp 或 ftp 把配置文件下载到设备并指定为下次启动配置文件，重启后即可恢复。恢复前必须备份当前配置，否则一旦新配置有问题将无法快速回退。"
  },
  {
    "id": "PK038",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "网络故障排查中，“自下而上”的排查方法通常从哪一层开始？",
    "options": [
      "从物理层开始，逐层向上检查到应用层",
      "从应用层开始，逐层向下检查到物理层",
      "从网络层开始，向两端同时检查",
      "从传输层开始，先检查端口号"
    ],
    "answer": "A",
    "explain": "自下而上从物理层（线缆、接口、光模块）开始逐层向上排查，适合怀疑底层链路故障或链路刚发生变更的场景。自上而下则相反，从应用层入手，适合已知底层正常、怀疑应用配置问题的场景。"
  },
  {
    "id": "PK039",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "关于网络故障排查的三种基本思路，下列说法正确的有哪些？",
    "options": [
      "自下而上法从物理层开始逐层向上排查，适合怀疑链路层故障的场景",
      "自上而下法从应用层开始逐层向下排查，适合底层正常而应用异常的场景",
      "分而治之法先判断故障可能所在的层次区间，再对该区间内逐层验证，可缩小排查范围",
      "分而治之法必须严格从物理层开始逐层排查到应用层，不能跳层"
    ],
    "answer": ["A", "B", "C"],
    "explain": "三种思路各有适用场景：自下而上偏重物理链路，自上而下偏重应用与配置，分而治之通过二分定位缩小范围、提高效率。分而治之正是允许跳层判断，因此 D 项错误。"
  },
  {
    "id": "PK040",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "交换机接口的物理状态显示为 up、协议状态显示为 up，则该接口一定能够正常转发数据报文。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "接口 up/up 仅表示物理层与数据链路层已就绪，若存在 VLAN 未放通、ACL 拦截、STP 阻塞、MAC 表异常等问题，报文依然无法正常转发。因此 up/up 不能等同于业务可达。"
  },
  {
    "id": "PK041",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "某链路两端接口协商状态正常，但业务丢包严重。执行 display interface 后看到大量 CRC 错包计数增长，最可能的原因是？",
    "options": [
      "物理线路质量问题，如光纤脏污、网线接触不良或光模块老化",
      "对端设备配置了错误的 VLAN",
      "本端接口配置了 ACL 过滤",
      "IP 地址配置冲突"
    ],
    "answer": "A",
    "explain": "CRC 错包说明接收到的帧校验失败，是典型的物理层问题，常见于光纤接头污染、网线质量差、光模块或收发器故障。应先清洁光接头、更换跳线或光模块，再复测。"
  },
  {
    "id": "PK042",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "交换机接口统计中出现大量冲突（collision）计数并伴随性能下降，最可能的原因是？",
    "options": [
      "双工模式不匹配，例如一端为全双工而另一端为半双工",
      "网线长度超过 100 米导致信号衰减",
      "接口上配置了端口安全",
      "VLAN 划分过多导致广播域过大"
    ],
    "answer": "A",
    "explain": "冲突计数通常出现在半双工链路上，当一端强制全双工、另一端自协商为半双工时，会持续出现冲突和 CRC 错误。应统一两端双工模式为自协商或同时强制全双工。"
  },
  {
    "id": "PK043",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "关于接口错包统计与故障类型的对应关系，下列说法正确的有哪些？",
    "options": [
      "runts（残帧）通常由冲突或网卡异常发送短帧引起",
      "giants（巨帧）指超过接口最大帧长的帧，可能由对端配置的 MTU 过大引起",
      "CRC 错包与物理线路质量密切相关",
      "alignment error 表示时钟同步问题，与线路编码无关"
    ],
    "answer": ["A", "B", "C"],
    "explain": "runts 多为冲突或异常短帧，giants 常因对端发送超过最大帧长的报文，CRC 错包指向物理层质量。alignment error 反映帧定界与线路编码问题，D 项表述错误。"
  },
  {
    "id": "PK044",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "要查看接口当前的协商速率、双工模式以及收发错包统计，应执行哪条命令？",
    "options": [
      "display interface GigabitEthernet 0/0/1",
      "display ip routing-table",
      "display mac-address",
      "display vlan"
    ],
    "answer": "A",
    "explain": "display interface 输出接口的物理状态、协议状态、带宽、双工模式、速率以及各类收发错包与丢包计数，是排查物理层与链路层故障的首选命令。"
  },
  {
    "id": "PK045",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "故障处理完成后，若希望把接口的错包统计清零以便重新观察，应执行什么命令？",
    "options": [
      "reset counters interface GigabitEthernet 0/0/1",
      "clear ip route-table",
      "reset arp all",
      "undo shutdown"
    ],
    "answer": "A",
    "explain": "reset counters interface 用于清零接口的流量与错包统计计数，便于在更换线缆或光模块后观察新产生的错误是否消失，从而验证故障是否已解决。"
  },
  {
    "id": "PK046",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "关于 ping 命令的参数与结果判读，下列说法正确的有哪些？",
    "options": [
      "-a 用于指定发送 ICMP 请求报文的源 IP 地址",
      "-c 用于指定发送 ICMP 请求报文的次数",
      "-s 用于指定发送的 ICMP 报文大小，可用于测试链路 MTU 与分片",
      "-t 用于指定等待应答的超时时间"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "华为 ping 的常用参数包括 -a（源地址）、-c（次数）、-s（报文大小）、-t（超时时间）以及 -i（出接口）等。掌握这些参数可以对连通性、路径 MTU 与丢包规律做精细测试。"
  },
  {
    "id": "PK047",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "ping 输出中的“.”表示等待应答超时未收到回应，“U”表示收到目的不可达的 ICMP 报文。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "ping 输出中“!”表示收到正常应答，“.”表示超时未收到应答，“U”表示收到目的不可达报文，“?”表示未知类型的应答。通过这些符号可以区分是链路丢包还是路由不可达。"
  },
  {
    "id": "PK048",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "用户反映访问某服务器时通时断，管理员需要确认报文经过的完整路径以定位中断点，应使用哪条命令？",
    "options": [
      "tracert 目标地址，逐跳查看路径与各跳往返时延",
      "ping -c 100 目标地址，观察丢包率",
      "display arp，查看 ARP 表项",
      "display mac-address，查看 MAC 表项"
    ],
    "answer": "A",
    "explain": "tracert 通过逐跳递增 TTL 触发 ICMP 超时，从而列出报文经过的每一跳地址与往返时延，可以定位在哪一跳出现中断或时延突增。ping 只能判断端到端可达性，看不到中间路径。"
  },
  {
    "id": "PK049",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "两台连接在同一台交换机的 PC 配置了相同 VLAN，但无法互通。以下排查顺序中最合理的是？",
    "options": [
      "先确认两端接口 up/up，再检查接口 link-type 与 PVID，然后检查允许通过的 VLAN 列表",
      "先检查 PC 的应用层防火墙规则，再检查交换机路由表",
      "先检查交换机的 NTP 配置，再检查 MAC 表",
      "先重启交换机，再检查 VLAN 配置"
    ],
    "answer": "A",
    "explain": "同 VLAN 不通属于二层问题，应按自下而上顺序：物理接口状态→接口类型与 PVID→VLAN 允许列表→MAC 表学习情况。逐层排除才能快速锁定如 access 口误配为 trunk 之类的典型错误。"
  },
  {
    "id": "PK050",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "两台处于不同 VLAN 的主机无法互访，排查时应重点检查下列哪些内容？",
    "options": [
      "对应 VLANIF 接口是否创建且状态为 up（其状态依赖于 VLAN 内是否存在 up 的物理成员端口）",
      "主机配置的默认网关是否为对应 VLANIF 接口地址",
      "设备上是否存在到达对端网段的路由条目",
      "主机的网卡是否支持全双工模式"
    ],
    "answer": ["A", "B", "C"],
    "explain": "跨 VLAN 通信依赖三层转发：VLANIF 必须 up、主机网关必须正确、路由表必须有可达条目，同时还要确认没有被 ACL 拦截。网卡双工模式属于物理层细节，不是跨网段不通的首要排查点。"
  },
  {
    "id": "PK051",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "某员工反映可以 ping 通网关但访问不了外网服务器。执行 display ip routing-table 发现没有到该服务器网段的路由条目，下一步应重点检查？",
    "options": [
      "设备的路由配置与动态路由协议邻居状态，确认缺省路由或明细路由是否正常",
      "交换机的 VLAN 划分是否正确",
      "终端的 ARP 表项是否老化",
      "接口的 CRC 错包计数"
    ],
    "answer": "A",
    "explain": "能通网关说明二层与直连网段正常，问题出在三层转发路径。应检查是否有缺省路由、动态路由协议邻居是否建立、路由是否被更优路由覆盖或被 ACL 拦截。"
  },
  {
    "id": "PK052",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "客户端无法获取 IP 地址时，若交换机上存在 DHCP Snooping 且用户端口未被正确配置为信任状态，可能导致 DHCP 应答报文被丢弃。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "启用 DHCP Snooping 后，只有信任端口收到的 DHCP 应答（OFFER/ACK）才会被转发，用户接入端口为非信任端口。若把连接 DHCP 服务器或上行链路的端口误配为非信任，应答会被丢弃，客户端将拿不到地址。"
  },
  {
    "id": "PK053",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "客户端无法获取 IP 地址，按分层思路排查时，下列哪些检查项是合理的？",
    "options": [
      "确认客户端网卡与接口物理状态正常，接口处于 up",
      "确认客户端所在 VLAN 与 DHCP 服务器地址池的网段是否匹配",
      "在接入交换机上查看 DHCP Snooping 绑定表或抓包确认是否发出 DHCP Discover、是否收到 OFFER",
      "确认 DHCP 服务器地址池是否已耗尽或租约是否已满"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "DHCP 获取失败可能出在物理层、VLAN 与地址池匹配、报文被中间设备丢弃、服务器资源耗尽等多个环节。完整排查应覆盖从物理层到服务器资源的各个可能点。"
  },
  {
    "id": "PK054",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "客户端可以 ping 通某服务器的 IP 地址，但使用域名访问失败。最可能的故障点是？",
    "options": [
      "DNS 解析异常，如 DNS 服务器不可达或客户端 DNS 配置错误",
      "客户端与服务器之间链路中断",
      "服务器网卡故障",
      "交换机 VLAN 未正确划分"
    ],
    "answer": "A",
    "explain": "能 ping 通 IP 说明三层可达，域名访问失败通常出在 DNS 环节。应检查客户端 DNS 服务器地址配置、DNS 服务器自身可达性以及域名解析记录是否正确。"
  },
  {
    "id": "PK055",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "两台主机之间出现“A 能 ping 通 B，B 却 ping 不通 A”的单向通信现象，最可能的原因是？",
    "options": [
      "路径上存在单向路由缺失或 ACL 只在一个方向放通",
      "A 主机的网卡故障",
      "交换机的 MAC 表为空",
      "两台主机处于不同 VLAN"
    ],
    "answer": "A",
    "explain": "单向通信的典型原因是去程与回程路径不一致，例如某台设备只有单方向路由，或 ACL 只在入方向放行了请求而未放行应答。应分别在两个方向抓包并检查沿途 ACL 与路由表。"
  },
  {
    "id": "PK056",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "设备日志中出现 IP 地址冲突告警，说明局域网内存在两台主机使用了相同的 IP 地址，应结合 ARP 表项定位冲突终端。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IP 地址冲突通常由手工配置地址重复或私接设备引起。可通过日志告警、display arp 查看同一 IP 是否对应多个 MAC，再借助 MAC 表定位到具体接入端口，最终找到冲突主机。"
  },
  {
    "id": "PK057",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "交换机上出现 MAC 地址漂移告警，下列哪些原因可能导致该现象？",
    "options": [
      "网络中存在二层环路，同一 MAC 在两个端口间来回学习",
      "存在非法设备伪造 MAC 地址进行攻击",
      "设备间存在链路聚合配置错误或双上行未做防环处理",
      "交换机的 NTP 时钟未同步"
    ],
    "answer": ["A", "B", "C"],
    "explain": "MAC 地址漂移表示同一 MAC 在短时间内从不同端口被学习到，常见于二层环路、伪造 MAC 攻击以及双上行链路未正确聚合或未启用 STP。NTP 时钟同步属于时间管理，与 MAC 漂移无关。"
  },
  {
    "id": "PK058",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "用户报告网络时断时续、交换机端口指示灯狂闪、CPU 占用率飙升、ping 大量丢包，最可能的故障原因是？",
    "options": [
      "网络中存在二层环路导致广播风暴",
      "终端 IP 地址配置错误",
      "DNS 服务器故障",
      "交换机端口双工模式为全双工"
    ],
    "answer": "A",
    "explain": "指示灯狂闪、CPU 升高、严重丢包是广播风暴的典型组合症状，根源多为二层环路（如误接线缆形成环路而 STP 被关闭）。应检查 STP 状态、排查私接设备与冗余链路。"
  },
  {
    "id": "PK059",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "要查看交换机上生成树各实例的根桥、端口角色与状态，应执行哪条命令？",
    "options": [
      "display stp brief",
      "display vlan",
      "display arp",
      "display ip routing-table"
    ],
    "answer": "A",
    "explain": "display stp brief 可简要显示各端口的 STP 角色（Root/Designated/Alternate）与状态，用于判断是否存在异常阻塞或拓扑震荡。display stp 则显示更完整的生成树信息。"
  },
  {
    "id": "PK060",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "排查交换机 CPU 占用率过高的问题，下列哪些命令或手段有助于定位原因？",
    "options": [
      "display cpu-usage 查看 CPU 占用率及任务占用情况",
      "display cpu-defend statistics 查看各类协议报文上送 CPU 的统计",
      "display logbuffer 查看是否存在环路、MAC 漂移等异常告警",
      "display ntp-service status 查看时钟同步状态"
    ],
    "answer": ["A", "B", "C"],
    "explain": "CPU 高常见原因包括二层环路、协议报文泛洪、MAC 漂移、ARP 攻击等。display cpu-usage 看整体占用，cpu-defend statistics 看协议报文上送情况，logbuffer 查异常告警。NTP 状态与 CPU 占用无关。"
  },
  {
    "id": "PK061",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "使用 debugging 命令排查故障时，为避免设备 CPU 过高和输出刷屏，正确的做法是什么？",
    "options": [
      "先在终端执行 terminal monitor 和 terminal debugging 使调试信息输出到终端，排障结束后立即 undo debugging all",
      "直接开启所有模块的 debugging 并长期保持开启",
      "debugging 信息只能输出到日志缓冲区，不需要 terminal 命令",
      "debugging 对设备性能没有影响，可以随意使用"
    ],
    "answer": "A",
    "explain": "debugging 会产生大量信息并消耗 CPU，必须先执行 terminal monitor 与 terminal debugging 才能在终端看到输出。排查结束后应立即执行 undo debugging all 关闭，禁止在生产环境长期开启。"
  },
  {
    "id": "PK062",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "需要一次性收集设备的软硬件版本、配置、接口状态、日志等多维信息提交给技术支持，最高效的做法是？",
    "options": [
      "执行 display diagnostic-information，把设备诊断信息一键汇总采集",
      "逐条执行 display 命令并手工抄录",
      "重启设备后观察启动日志",
      "仅导出配置文件即可"
    ],
    "answer": "A",
    "explain": "display diagnostic-information 会一次性收集版本、配置、接口、路由、日志等关键诊断信息，避免遗漏并大幅提高效率。它是故障上报和远程支持的标准采集手段。"
  },
  {
    "id": "PK063",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "display memory-usage 可以查看设备内存的使用率，若内存占用持续接近上限，可能导致协议进程异常或设备重启。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "内存占用长期高位运行会影响协议进程申请内存，严重时导致进程异常重启甚至设备复位。应结合 display memory-usage 与日志定位是否存在内存泄漏或异常占用。"
  },
  {
    "id": "PK064",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "要确认交换机某个端口下当前学习到了哪些 MAC 地址，应执行哪条命令？",
    "options": [
      "display mac-address interface GigabitEthernet 0/0/1",
      "display arp interface GigabitEthernet 0/0/1",
      "display vlan 10",
      "display stp brief"
    ],
    "answer": "A",
    "explain": "display mac-address 可按接口、VLAN 或 MAC 过滤显示 MAC 地址表项，用于确认端口学习情况、定位终端接入位置，也可与 MAC 漂移现象结合分析。"
  },
  {
    "id": "PK065",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "关于故障处理记录与复盘，下列做法正确的有哪些？",
    "options": [
      "记录故障现象、影响范围、时间点、排查过程与最终根因",
      "记录所采取的处理措施与恢复验证结果，形成可检索的故障案例库",
      "针对根因制定预防措施，如整改配置、增加监控告警或优化冗余设计",
      "故障恢复后无需记录，口头交接即可"
    ],
    "answer": ["A", "B", "C"],
    "explain": "完整的故障记录包括现象、范围、时间、过程、根因、措施与验证，是知识沉淀和预防复发的基础。仅靠口头交接会导致经验流失，同类故障重复发生。"
  },
  {
    "id": "PK066",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "某接口显示为 down，管理员确认对端设备已上电且接口正常。下一步最合理的排查动作是？",
    "options": [
      "检查本端接口是否被手工 shutdown、是否因安全特性进入 error-down，并检查线缆与光模块",
      "直接更换交换机整机",
      "修改路由协议配置",
      "重新规划 VLAN 划分"
    ],
    "answer": "A",
    "explain": "接口 down 的常见原因包括手工 shutdown、端口安全或 BPDU 保护触发的 error-down、线缆或光模块故障。应先查看接口详细状态与日志确认原因，再决定更换线缆、光模块或恢复端口。"
  },
  {
    "id": "PK067",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "在交换机上执行 display ip routing-table，输出中某条路由的 NextHop 为 0.0.0.0，通常表示什么？",
    "options": [
      "该路由为直连路由，下一跳即本机接口自身",
      "该路由的下一跳不可达",
      "该路由被路由策略过滤",
      "该路由是一条黑洞路由"
    ],
    "answer": "A",
    "explain": "直连路由由接口 IP 自动生成，其下一跳字段显示为 0.0.0.0 并关联本机接口。静态路由的下一跳应为对端地址；若下一跳不可达，路由会被撤销而不是显示为 0.0.0.0。"
  },
  {
    "id": "PK068",
    "type": "judge",
    "chapter": "网络故障排查",
    "stem": "排查 VLAN 不通时，若接口为 access 类型，需要确认其 PVID 与所连接的 VLAN 一致；若接口为 trunk 类型，需要确认对端接口允许通过的 VLAN 列表包含该 VLAN。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "access 口的 PVID 决定其所属 VLAN，配置错误会导致报文被打上错误的 VLAN 标签；trunk 口则依赖 allow-pass 列表，若列表未包含目标 VLAN，报文将被丢弃。这是 VLAN 不通最常见的两类配置原因。"
  },
  {
    "id": "PK069",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "物理层排查中，下列哪些检查项是必要的？",
    "options": [
      "确认接口的物理状态与协议状态是否均为 up",
      "使用光功率计或在设备上执行 display transceiver verbose 检查光模块的收发光功率是否在正常范围",
      "检查网线线序是否符合规范、水晶头是否压接良好、网线长度是否超过标准",
      "检查设备的 SNMP 团体名配置"
    ],
    "answer": ["A", "B", "C"],
    "explain": "物理层排查关注接口状态、光模块收发功率、线缆质量与线序、以及接口错包计数。SNMP 团体名属于管理面安全配置，与物理层连通性无关。"
  },
  {
    "id": "PK070",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "两台交换机之间的链路时通时断，光模块收光功率在正常范围以下接近灵敏度门限，最合理的处理措施是？",
    "options": [
      "清洁光纤接头并检查跳线质量，必要时更换光模块或跳线后复测收发光功率",
      "修改交换机的 VLAN 配置",
      "调整生成树的优先级",
      "修改路由协议的定时器参数"
    ],
    "answer": "A",
    "explain": "收光功率接近或低于接收灵敏度会导致链路闪断、CRC 错包增多。应先清洁光接头、检查光纤与跳线是否弯折损坏，再考虑更换光模块，属于典型的物理层处理手段。"
  },
  {
    "id": "PK071",
    "type": "fill",
    "chapter": "网络故障排查",
    "stem": "要把交换机当前的运行配置打印到终端屏幕上查看，应在用户视图下执行 ______ 命令。",
    "options": [],
    "answer": ["display current-configuration"],
    "explain": "display current-configuration 显示设备当前生效的运行配置，常用于核对配置是否与规划一致。与之对应的是 display saved-configuration，显示下次启动使用的配置文件内容。"
  },
  {
    "id": "PK072",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "管理员怀疑某接口的 ACL 把业务流量拦截了，最直接的验证方法是什么？",
    "options": [
      "查看该接口下 traffic-filter 引用的 ACL 规则，并用 display acl 检查规则的匹配计数是否增长",
      "重启交换机后观察业务是否恢复",
      "修改接口的双工模式为半双工",
      "清空 MAC 地址表"
    ],
    "answer": "A",
    "explain": "display acl 可以查看各条规则的匹配计数（match counter），若 deny 规则计数持续增长说明流量确实被该规则拦截。定位后应调整规则顺序或补充 permit 规则。"
  },
  {
    "id": "PK073",
    "type": "multi",
    "chapter": "网络故障排查",
    "stem": "关于二层环路的排查与处理，下列措施中合理的有哪些？",
    "options": [
      "检查生成树是否启用，确认各实例的根桥与端口角色是否符合预期",
      "查看接口流量是否出现异常突增，CPU 与广播报文速率是否飙升",
      "检查是否存在私接设备或多条冗余链路未做聚合与防环处理",
      "直接关闭所有交换机接口的生成树功能以提升转发效率"
    ],
    "answer": ["A", "B", "C"],
    "explain": "环路排查需要确认 STP 运行状态、观察流量与 CPU 异常、查找未受控的冗余链路和私接设备。关闭生成树会使环路彻底失控并引发广播风暴，是错误做法。"
  },
  {
    "id": "PK074",
    "type": "single",
    "chapter": "网络故障排查",
    "stem": "网络故障发生后，为界定故障边界、判断是单点故障还是区域性问题，最有效的第一步是什么？",
    "options": [
      "确认故障影响范围与起始时间，明确哪些业务、哪些网段、哪些用户受影响，从而缩小排查范围",
      "立即重启所有网络设备",
      "先修改核心交换机的路由配置",
      "先更换所有接入层交换机的线缆"
    ],
    "answer": "A",
    "explain": "准确界定故障边界（影响范围、起始时间、受影响对象）是高效排障的前提，能帮助判断故障位于接入、汇聚还是核心层。盲目重启或修改配置会扩大故障面并破坏现场证据。"
  }
,
  {
    "id": "PK075",
    "type": "single",
    "chapter": "网络设备安全加固",
    "stem": "在华为交换机上启用端口安全功能后，若希望超限的非法接入不仅被丢弃报文还会自动关闭该端口，应把违规动作配置为？",
    "options": [
      "protect",
      "restrict",
      "shutdown",
      "forward"
    ],
    "answer": "C",
    "explain": "端口安全的三种违规动作中，protect 只丢弃超限报文且不告警；restrict 丢弃报文并上报告警；shutdown 则在违规时直接把端口置为 error-down 关闭，安全性最高但需要人工或配置自动恢复（error-down auto-recovery）。"
  }
];
