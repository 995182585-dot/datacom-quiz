window.BANK_HCIP_821B = [
  {
    "id": "P821101",
    "type": "single",
    "chapter": "组播技术",
    "stem": "组播地址使用D类地址空间，其范围是以下哪一项？",
    "options": ["224.0.0.0～239.255.255.255", "224.0.0.0～224.255.255.255", "240.0.0.0～255.255.255.255", "192.0.0.0～223.255.255.255"],
    "answer": "A",
    "explain": "IPv4组播地址即D类地址，范围是224.0.0.0～239.255.255.255，对应前缀224.0.0.0/4。其前4位固定为1110。D类地址只能作为目的地址，不能作为源地址。"
  },
  {
    "id": "P821102",
    "type": "single",
    "chapter": "组播技术",
    "stem": "在组播中，224.0.0.2这个地址的含义是什么？",
    "options": ["所有主机", "所有路由器", "所有PIM路由器", "所有OSPF路由器"],
    "answer": "B",
    "explain": "224.0.0.1表示所有主机（all-hosts），224.0.0.2表示所有路由器（all-routers）。224.0.0.13表示所有PIM路由器，224.0.0.5/224.0.0.6为OSPF使用。这些地址属于本地链路范围，TTL通常为1。"
  },
  {
    "id": "P821103",
    "type": "judge",
    "chapter": "组播技术",
    "stem": "IGMP协议在IP报文头中的协议号是2，PIM协议的协议号是103。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IGMP封装在IP之上，协议号为2；PIM同样直接封装在IP之上，协议号为103。两者都不使用TCP或UDP传输层。因此该说法正确。"
  },
  {
    "id": "P821104",
    "type": "single",
    "chapter": "组播技术",
    "stem": "IGMPv2相比IGMPv1最主要的增强点是什么？",
    "options": ["支持指定源组播", "增加了Leave离开报文和查询器选举机制", "使用TCP承载", "支持SSM模型"],
    "answer": "B",
    "explain": "IGMPv2增加了Leave报文，使主机离开组播组时能主动通告，减少离组延迟；同时增加了查询器选举机制，由IP地址最小的路由器担任查询器。支持指定源组播（SSM）是IGMPv3的能力。"
  },
  {
    "id": "P821105",
    "type": "multi",
    "chapter": "组播技术",
    "stem": "关于IGMPv3的特点，以下描述正确的有哪些？",
    "options": ["支持指定源组播SSM模型", "主机可以通告只接收或不接收某些源", "报文类型仅包含查询和报告两种", "取消了对组播组的统一查询器选举需求"],
    "answer": ["A", "B"],
    "explain": "IGMPv3引入源过滤机制，报告报文中携带源列表，从而支持SSM并允许主机声明接收或拒绝特定源。IGMPv3的报文类型仍包括查询、报告，并新增了特定源查询等，并非仅两种。"
  },
  {
    "id": "P821106",
    "type": "single",
    "chapter": "组播技术",
    "stem": "二层交换机上运行的IGMP Snooping的主要作用是什么？",
    "options": ["在路由器之间交换组播路由", "侦听主机与路由器之间的IGMP报文，建立二层组播转发表", "对组播报文进行RPF检查", "为组播流量进行标签分配"],
    "answer": "B",
    "explain": "IGMP Snooping通过侦听IGMP报文，在交换机上建立组播MAC地址与端口的对应关系，从而将组播帧只转发给有需求的接收者。若未开启该功能，组播帧会在VLAN内广播泛洪。RPF检查和组播路由由三层协议完成。"
  },
  {
    "id": "P821107",
    "type": "judge",
    "chapter": "组播技术",
    "stem": "组播MAC地址以01-00-5E开头，由组播IP地址的低23位映射生成，因此一个组播MAC地址可能对应多个组播IP地址。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IPv4组播MAC地址前24位固定为01-00-5E，第25位固定为0，后23位取组播IP的低23位。由于IP组播地址有28位可变部分，映射时丢失5位，因此存在地址重叠，一个组播MAC可对应32个组播IP。"
  },
  {
    "id": "P821108",
    "type": "single",
    "chapter": "组播技术",
    "stem": "PIM-DM采用的转发机制可以概括为以下哪一项？",
    "options": ["先剪枝后扩散", "洪泛与剪枝，拉（Pull）模型", "洪泛与剪枝，推（Push）模型", "基于RP的共享树模型"],
    "answer": "C",
    "explain": "PIM-DM为密集模式，假设网络中组成员密集，采用洪泛—剪枝（flood and prune）机制，周期性地扩散组播流量并剪掉无需求的分支，属于推（Push）模型。PIM-SM则采用基于RP的拉（Pull）模型。"
  },
  {
    "id": "P821109",
    "type": "multi",
    "chapter": "组播技术",
    "stem": "关于PIM-SM中的RPT和SPT，以下说法正确的有哪些？",
    "options": ["RPT是以RP为根的共享树", "SPT是以组播源为根的最短路径树", "SPT的路径一定比RPT更长", "最后一跳路由器可以从RPT切换到SPT"],
    "answer": ["A", "B", "D"],
    "explain": "RPT（共享树）以RP为根，SPT（最短路径树）以组播源为根。接收端DR在收到源的首个组播报文后，可以触发SPT切换，建立到源的最优路径。SPT通常比RPT路径更短或相当，而非一定更长。"
  },
  {
    "id": "P821110",
    "type": "single",
    "chapter": "组播技术",
    "stem": "组播转发中RPF检查的目的是什么？",
    "options": ["防止组播报文环路并确保转发路径正确", "对组播报文进行加密", "实现组播地址到MAC地址的映射", "进行组播流量的速率限制"],
    "answer": "A",
    "explain": "RPF（反向路径转发）检查根据组播源地址查单播路由表，只有从到达源的出接口收到该报文才允许转发，否则丢弃。该机制保证了组播转发树无环，同时确保转发的路径正确。"
  },
  {
    "id": "P821111",
    "type": "fill",
    "chapter": "组播技术",
    "stem": "在PIM-SM中，共享树的根节点称为______，接收端DR通过向其发送Join报文加入组播组，源侧DR则通过Register报文将组播流量注册到该节点。",
    "options": [],
    "answer": ["RP", "Rendezvous Point", "汇聚点", "会聚点"],
    "explain": "RP（Rendezvous Point，汇聚点）是PIM-SM共享树RPT的根节点。接收端DR向RP发送（S，G）或（*，G）加入报文，源侧DR将组播流量注册到RP，再由RP沿共享树下发。"
  },
  {
    "id": "P821112",
    "type": "single",
    "chapter": "组播技术",
    "stem": "PIM-SM中，源端DR将组播数据封装后单播发送给RP的过程称为以下哪一项？",
    "options": ["注册（Register）", "加入（Join）", "剪枝（Prune）", "断言（Assert）"],
    "answer": "A",
    "explain": "源端DR在没有到RP的SPT时，将组播数据封装在Register单播报文中发送给RP，RP据此建立（S，G）表项并回送Register-Stop，随后源端DR改为沿SPT发送原生组播数据。Join用于加入组播组，Prune用于剪枝。"
  },
  {
    "id": "P821113",
    "type": "judge",
    "chapter": "组播技术",
    "stem": "MSDP主要用于域内组播路由的建立，与域间组播无关。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "MSDP（组播源发现协议）主要用于PIM-SM域间组播，通过在多个RP之间建立MSDP对等体，共享活动源（S，G）信息，从而支持不同域的RP之间发现组播源。域内路由由PIM等协议完成。"
  },
  {
    "id": "P821114",
    "type": "single",
    "chapter": "组播技术",
    "stem": "在华为设备上查看PIM协议运行状态和RP信息的命令是以下哪一项？",
    "options": ["display pim interface", "display igmp group", "display pim rp-info", "display multicast routing-table"],
    "answer": "C",
    "explain": "display pim rp-info用于查看RP（包括静态RP和BSR选举出的RP）的信息。display pim interface查看PIM接口状态，display igmp group查看IGMP组成员，display multicast routing-table查看组播路由表。"
  },
  {
    "id": "P821115",
    "type": "multi",
    "chapter": "组播技术",
    "stem": "以下哪些是PIM协议报文类型？",
    "options": ["Hello", "Join/Prune", "Register", "LSA"],
    "answer": ["A", "B", "C"],
    "explain": "PIM的报文类型包括Hello、Join/Prune、Assert、Register、Register-Stop、Bootstrap和Candidate-RP-Advertisement等。LSA是OSPF的链路状态通告报文，不属于PIM。"
  },
  {
    "id": "P821116",
    "type": "fill",
    "chapter": "组播技术",
    "stem": "二层交换机在没有运行IGMP Snooping时，组播帧会在VLAN内______，从而浪费带宽。",
    "options": [],
    "answer": ["广播", "泛洪", "广播泛洪", "flooding"],
    "explain": "未运行IGMP Snooping时，交换机无法得知哪些端口有组播接收者，只能将组播帧在VLAN内广播泛洪。开启IGMP Snooping后可基于侦听结果精确转发。"
  },
  {
    "id": "P821117",
    "type": "single",
    "chapter": "组播技术",
    "stem": "PIM-SM中，最后一跳路由器触发SPT切换（Switchover）通常是由什么事件引起的？",
    "options": ["收到RP发送的Register报文", "收到来自组播源的第一个组播数据报文", "收到IGMP Leave报文", "BSR选举完成"],
    "answer": "B",
    "explain": "接收端DR原本沿RPT接收流量，当收到来自源S的第一个组播数据报文时，会根据单播路由表向源发起（S，G）加入，建立SPT，随后沿SPT接收，实现SPT切换。该机制缩短了转发路径，降低RP负担。"
  },
  {
    "id": "P821118",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "在华为防火墙中，以下哪个安全区域的优先级为100？",
    "options": ["Trust", "Untrust", "DMZ", "Local"],
    "answer": "D",
    "explain": "华为防火墙各安全区域默认优先级为：Local 100、Trust 85、DMZ 50、Untrust 5。Local区域代表防火墙本身，优先级最高。报文在不同优先级区域间流动时，高优先级到低优先级方向通常更容易被放行。"
  },
  {
    "id": "P821119",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "华为防火墙中，DMZ区域的默认优先级是多少？",
    "options": ["100", "85", "50", "5"],
    "answer": "C",
    "explain": "DMZ（非军事区）通常放置对外提供服务的服务器，默认优先级为50，介于Trust（85）与Untrust（5）之间。Local区域为100。"
  },
  {
    "id": "P821120",
    "type": "multi",
    "chapter": "网络安全与防火墙技术",
    "stem": "华为下一代防火墙的安全策略可以基于以下哪些元素进行匹配？",
    "options": ["源/目的安全区域", "源/目的IP地址", "服务与应用", "用户与时间段"],
    "answer": ["A", "B", "C", "D"],
    "explain": "华为防火墙安全策略支持基于源/目的安全区域、源/目的地址、服务、应用（Application）、用户、时间段等维度进行匹配，并可引用内容安全配置文件。匹配后执行permit或deny动作。"
  },
  {
    "id": "P821121",
    "type": "judge",
    "chapter": "网络安全与防火墙技术",
    "stem": "华为防火墙的安全策略默认动作是拒绝（deny），即未匹配任何策略的流量将被丢弃。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "华为防火墙安全策略遵循“默认拒绝”原则，区域间流量如果未匹配任何permit策略，将被丢弃。因此需要显式配置放行策略才能实现区域间互通。"
  },
  {
    "id": "P821122",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "防火墙状态检测（ASPF/状态化检测）机制的核心依据是什么？",
    "options": ["会话表（Session Table）", "路由表", "MAC地址表", "ARP表"],
    "answer": "A",
    "explain": "状态检测防火墙通过首包建立会话表项，记录五元组及协议状态，后续报文只需匹配会话表即可快速转发，无需重复匹配安全策略。会话表老化时间到期后表项被删除，后续报文需重新匹配策略。"
  },
  {
    "id": "P821123",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "FTP、SIP等协议在协商过程中会在数据连接中携带IP地址和端口，防火墙中用于处理此类协议的机制是？",
    "options": ["NAT Server", "ASPF（应用层状态检测）", "IPSec", "会话限制"],
    "answer": "B",
    "explain": "ASPF（Application Specific Packet Filter）通过应用层网关识别多通道协议（如FTP、SIP、H.323），解析报文中的地址端口信息，动态生成Server-map表项以放行数据连接。NAT Server用于发布内部服务器。"
  },
  {
    "id": "P821124",
    "type": "multi",
    "chapter": "网络安全与防火墙技术",
    "stem": "关于华为防火墙的NAT Server，以下说法正确的有哪些？",
    "options": ["实现公网用户访问内部服务器", "可以配置安全区域和协议端口", "配置后可直接生成server-map表项", "只能对单个IP地址生效，不支持端口映射"],
    "answer": ["A", "B", "C"],
    "explain": "NAT Server（目的NAT）将公网地址端口映射到内部服务器，使外网用户能够访问内网服务，配置中需指定协议、公网地址端口、私网地址端口及所属安全区域。配置后通常生成server-map表项以实现地址转换的持续生效。华为防火墙支持进行端口级映射。"
  },
  {
    "id": "P821125",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "防火墙Trust区域优先级高于Untrust区域，通常情况下以下哪个方向的流量更容易被默认放行？",
    "options": ["从Untrust到Trust", "从Trust到Untrust", "两者完全等同", "任何方向都必须显式配置策略"],
    "answer": "B",
    "explain": "在华为防火墙中，高优先级区域（Trust 85）到低优先级区域（Untrust 5）方向的流量在匹配安全策略时更具优势；但实际是否放行仍取决于安全策略的具体配置。默认情况下未匹配任何策略的流量均被拒绝。"
  },
  {
    "id": "P821126",
    "type": "fill",
    "chapter": "网络安全与防火墙技术",
    "stem": "华为防火墙中，代表防火墙设备本身的安全区域名称是______，其优先级为100。",
    "options": [],
    "answer": ["Local", "local", "本机", "local区域"],
    "explain": "Local区域代表防火墙自身，优先级为100。访问防火墙管理面（如SSH、HTTPS管理）的流量需要配置Local区域相关的安全策略。"
  },
  {
    "id": "P821127",
    "type": "judge",
    "chapter": "网络安全与防火墙技术",
    "stem": "华为防火墙中同一安全区域内部的流量默认可以直接互通，无需配置安全策略。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "在同一安全区域内，流量默认允许通过，不进行安全策略匹配（华为防火墙默认区域内（Intra-zone）流量放行）。若需要限制区域内流量，可开启区域内流量检测功能并配置策略。"
  },
  {
    "id": "P821128",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "在防火墙上配置安全策略时，若需要匹配某个域名对应的多个IP地址，通常采用的方式是？",
    "options": ["配置地址集（Address Set）或地址组", "配置静态路由", "配置NAT地址池", "配置VRRP虚拟地址"],
    "answer": "A",
    "explain": "地址集（Address Set/Address Group）可将多个IP地址或网段组织为一个逻辑对象，在安全策略中引用，便于批量管理和匹配。静态路由用于指导转发，NAT地址池用于地址转换。"
  },
  {
    "id": "P821129",
    "type": "multi",
    "chapter": "网络安全与防火墙技术",
    "stem": "以下哪些属于防火墙双机热备（HA）中常用的协议或技术？",
    "options": ["VGMP", "HRP", "VRRP", "IGMP"],
    "answer": ["A", "B", "C"],
    "explain": "华为防火墙双机热备涉及VRRP（提供虚拟网关）、VGMP（统一管理各组VRRP状态，保证切换一致性）和HRP（Huawei Redundancy Protocol，用于主备设备之间同步会话表、配置等）。IGMP是组播组成员管理协议，与双机热备无关。"
  },
  {
    "id": "P821130",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "华为防火墙双机热备中，HRP协议主要用于实现什么功能？",
    "options": ["实现路由备份", "实现主备设备间会话表和配置的实时同步", "实现链路聚合", "实现组播转发"],
    "answer": "B",
    "explain": "HRP（Huawei Redundancy Protocol）在双机热备中承担主备设备之间的状态同步，包括会话表、Server-map、配置等，使主备切换后现有连接能够继续转发。HRP依赖VGMP管理的VRRP状态触发同步。"
  },
  {
    "id": "P821131",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "防火墙收到一个不属于任何已建立会话的TCP SYN报文且未匹配到permit策略，默认处理方式是？",
    "options": ["建立会话并转发", "丢弃报文", "上送CPU并转发", "修改源地址后转发"],
    "answer": "B",
    "explain": "未匹配任何permit安全策略的流量默认被拒绝。首包无法匹配会话表时才会去匹配安全策略，匹配不到permit动作即被丢弃。"
  },
  {
    "id": "P821132",
    "type": "fill",
    "chapter": "网络安全与防火墙技术",
    "stem": "华为防火墙中用于存放对外提供服务器的安全区域是______，其默认优先级为50。",
    "options": [],
    "answer": ["DMZ", "dmz", "非军事区", "隔离区"],
    "explain": "DMZ（Demilitarized Zone，非军事区/隔离区）用于放置对外发布服务的服务器，默认优先级为50。通常配置Untrust到DMZ放行特定服务的策略，同时限制DMZ主动访问Trust。"
  },
  {
    "id": "P821133",
    "type": "judge",
    "chapter": "网络安全与防火墙技术",
    "stem": "防火墙的会话表老化时间对于TCP和UDP协议是不同的，需要根据业务特征进行调优。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "TCP会话有明确的状态机，老化时间通常较长（如默认数小时），而UDP等无连接协议的老化时间较短（如默认数十秒）。对于长连接业务（如数据库、SIP信令），需要适当延长老化时间以避免连接中断。"
  },
  {
    "id": "P821134",
    "type": "single",
    "chapter": "网络安全与防火墙技术",
    "stem": "在华为防火墙上查看当前会话表的命令是？",
    "options": ["display firewall session table", "display security-policy rule all", "display zone", "display nat server"],
    "answer": "A",
    "explain": "display firewall session table用于查看防火墙当前建立的会话表项，可结合verbose参数查看详细信息。display security-policy rule all查看安全策略，display zone查看安全区域信息。"
  },
  {
    "id": "P821135",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP的虚拟MAC地址，以下说法正确的有哪些？",
    "options": ["虚拟MAC地址格式为00-00-5E-00-01-{VRID}", "VRID取值范围为1～255", "虚拟MAC地址与虚拟IP地址一一对应", "备用路由器使用自己的物理MAC地址响应ARP请求"],
    "answer": ["A", "B", "C"],
    "explain": "VRRP虚拟MAC地址为00-00-5E-00-01-{VRID}，VRID范围为1～255，每个VRID对应一个虚拟MAC和一组虚拟IP。Master路由器负责以虚拟MAC响应ARP请求，Backup不响应该虚拟IP的ARP。"
  },
  {
    "id": "P821136",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP协议报文的默认目的组播地址和IP协议号分别是？",
    "options": ["224.0.0.18，协议号112", "224.0.0.5，协议号89", "224.0.0.2，协议号103", "224.0.0.13，协议号112"],
    "answer": "A",
    "explain": "VRRPv2报文封装在IP之上，协议号为112，目的地址为组播地址224.0.0.18，TTL为255。VRRPv3使用目的地址224.0.0.18（IPv4）并以IPv6组播FF02::12承载。"
  },
  {
    "id": "P821137",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP报文的IP头TTL值必须为255，接收端如果收到TTL不为255的VRRP报文应当丢弃。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "RFC 3768规定VRRP通告报文必须以TTL=255发送，接收方校验TTL必须为255，否则丢弃。该机制用于防止VRRP报文被路由器转发到本地网段之外，是一种安全保护。"
  },
  {
    "id": "P821138",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP中路由器优先级字段的取值范围和默认值分别是？",
    "options": ["0～255，默认100", "1～254，默认100", "0～255，默认255", "1～255，默认1"],
    "answer": "A",
    "explain": "VRRP优先级字段为8比特，取值范围0～255，默认值为100。数值越大越优先；优先级255保留给IP地址拥有者（IP Address Owner）；优先级0表示设备主动放弃Master角色，用于触发快速切换。"
  },
  {
    "id": "P821139",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "当VRRP备份组中某台路由器的优先级被配置为0时，其含义是？",
    "options": ["该路由器立即成为Master", "该路由器主动放弃Master角色，触发其他路由器尽快切换为Master", "该路由器停止参与VRRP", "该路由器成为IP地址拥有者"],
    "answer": "B",
    "explain": "优先级0是特殊值，表示当前Master主动放弃Master角色，会发送优先级为0的VRRP通告，使Backup无需等待Master_Down_Timer超时即可立即切换为Master，实现快速切换。"
  },
  {
    "id": "P821140",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "VRRP定义了哪几种状态？",
    "options": ["Initialize", "Master", "Backup", "Learned"],
    "answer": ["A", "B", "C"],
    "explain": "VRRP设备存在三种状态：Initialize（初始状态）、Master（主状态）和Backup（备状态）。Learned是HSRP中的状态，并非VRRP的标准状态。"
  },
  {
    "id": "P821141",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP的抢占（Preempt）模式默认是开启的，即优先级高的Backup路由器会抢占Master角色。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "在VRRP中，抢占模式默认启用。当Backup路由器发现自己的优先级高于当前Master时，会等待Master_Down_Timer（或Skew_Time）后抢占成为Master。可通过vrrp vrid preempt-mode disable关闭抢占。"
  },
  {
    "id": "P821142",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "在华为设备上配置VRRP监视上行接口的命令是以下哪一项？",
    "options": ["vrrp vrid 1 track interface GigabitEthernet0/0/1 reduced 30", "vrrp vrid 1 track ip route-static", "vrrp vrid 1 priority 120", "vrrp vrid 1 preempt-mode timer delay 20"],
    "answer": "A",
    "explain": "vrrp vrid track interface命令用于监视指定接口，当接口故障时降低本机在该备份组中的优先级（reduced指定降低值），从而触发主备切换。priority用于直接配置优先级，preempt-mode timer delay配置抢占延迟。"
  },
  {
    "id": "P821143",
    "type": "fill",
    "chapter": "VRRP与高可用",
    "stem": "VRRP中，优先级为______的路由器如果拥有虚拟IP地址，则被称为IP地址拥有者，它始终作为Master。",
    "options": [],
    "answer": ["255", "二五五"],
    "explain": "当路由器接口的实际IP地址与虚拟IP地址相同时，该路由器称为IP地址拥有者，其优先级固定为255，始终作为Master，且无需发送通告即可直接进入Master状态（收到低优先级通告时仍保持Master）。"
  },
  {
    "id": "P821144",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP中Master_Down_Timer的计算与什么参数有关？",
    "options": ["通告间隔（Advertisement_Interval）", "接口带宽", "路由开销", "MAC地址表老化时间"],
    "answer": "A",
    "explain": "Master_Down_Timer = 3 × Advertisement_Interval + Skew_Time，其中Skew_Time与优先级相关。默认通告间隔为1秒，因此默认Master_Down_Timer约为3秒左右。"
  },
  {
    "id": "P821145",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP与HSRP的比较，以下说法正确的有哪些？",
    "options": ["VRRP是国际标准（RFC 3768），HSRP是Cisco私有协议", "两者都使用虚拟IP和虚拟MAC实现网关冗余", "VRRP使用224.0.0.18，HSRP使用224.0.0.2", "VRRP支持多厂商互通，HSRP不支持"],
    "answer": ["A", "B", "C", "D"],
    "explain": "VRRP由IETF标准化（RFC 3768），支持多厂商互通；HSRP为Cisco私有协议。两者原理类似，均通过虚拟IP与虚拟MAC提供冗余网关，但报文地址与MAC格式不同：VRRP用224.0.0.18，HSRP用224.0.0.2。"
  },
  {
    "id": "P821146",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "在园区网典型设计中，VRRP通常与以下哪种生成树技术配合使用以实现负载分担？",
    "options": ["MSTP", "RSTP", "STP", "PVST"],
    "answer": "A",
    "explain": "MSTP支持多实例，可基于VLAN映射不同的实例。配合VRRP多备份组，可以实现不同VLAN的流量分别以不同路由器作为网关和根桥，从而达到负载分担与冗余备份的效果。"
  },
  {
    "id": "P821147",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP备份组中，Master路由器发送通告报文的方式是？",
    "options": ["单播给每个Backup", "周期性组播发送", "仅在状态变化时发送", "广播发送"],
    "answer": "B",
    "explain": "Master路由器以固定间隔（默认1秒）向组播地址224.0.0.18周期性发送VRRP通告报文，Backup通过是否按时收到通告来判断Master是否存活。Backup在成为Master时也会立即发送通告以抑制其他设备。"
  },
  {
    "id": "P821148",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP可以在同一台路由器上创建多个备份组，使不同备份组分别承担不同VLAN的网关，实现负载分担。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "VRRP允许在同一接口上创建多个虚拟路由器（备份组），通过配置不同VRID和不同优先级，可以让同一台设备在部分备份组中为Master、在另一些组中为Backup，从而实现网关的负载分担。"
  },
  {
    "id": "P821149",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "在华为设备上，若要查看 VRRP 备份组的简要信息（状态、优先级、虚拟 IP），应使用哪条命令？",
    "options": ["display vrrp brief", "display vrrp statistics", "display vrrp interface", "display vrrp verbose"],
    "answer": "A",
    "explain": "display vrrp brief 以列表形式输出备份组的简要信息，包括状态、优先级和虚拟 IP，适合快速查看。display vrrp 输出详细信息；display vrrp statistics 用于查看 VRRP 报文收发统计；VRRP 没有 display vrrp verbose 这条命令。"
  },
  {
    "id": "P821150",
    "type": "fill",
    "chapter": "VRRP与高可用",
    "stem": "VRRP 备份组由 1～255 之间的一个整数唯一标识，该标识称为______；同一网段内的路由器只有配置相同的该标识和虚拟 IP 才能属于同一个备份组。",
    "options": [],
    "answer": ["虚拟路由器标识符", "虚拟路由器ID", "VRID", "虚拟路由标识"],
    "explain": "VRID（Virtual Router Identifier，虚拟路由器标识符）用于唯一标识一个VRRP备份组，取值范围1～255。同一网段内的设备必须配置相同的VRID和虚拟IP地址才能加入同一备份组并参与主备选举。"
  },
  {
    "id": "P821151",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP协议在TCP/IP模型中工作在什么层次，其报文如何承载？",
    "options": ["应用层，使用TCP承载", "网络层，直接封装在IP之上，协议号112", "数据链路层，使用自定义以太类型", "传输层，使用UDP 112端口"],
    "answer": "B",
    "explain": "VRRP报文直接封装在IP报文中，协议号为112，不使用TCP或UDP。虽然VRRP通告的载荷格式与ICMP类似，但VRRP是独立的网络层协议。"
  },
  {
    "id": "P821152",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS标签字段共32比特，其组成包括以下哪些部分？",
    "options": ["20比特标签值", "3比特EXP", "1比特S（栈底标志）", "8比特TTL"],
    "answer": ["A", "B", "C", "D"],
    "explain": "MPLS标签为32比特（4字节），由20比特标签值（Label）、3比特EXP（用于QoS）、1比特S（Bottom of Stack，标识是否为栈底标签）和8比特TTL组成。标签栈中S=1的标签为最底层标签。"
  },
  {
    "id": "P821153",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS标签中用于标识是否为标签栈底的是哪一个字段？",
    "options": ["EXP", "S", "TTL", "Label"],
    "answer": "B",
    "explain": "S位（Bottom of Stack）为1比特，值为1时表示该标签是标签栈的最底层标签，其后不再有标签。EXP字段用于承载QoS优先级，TTL字段用于防环。"
  },
  {
    "id": "P821154",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "LER和LSR的主要区别是什么？",
    "options": ["LER位于MPLS域边缘，负责标签的压入和弹出；LSR位于域内，主要进行标签交换", "LER只能弹出标签", "LSR负责与外部网络交换普通IP报文", "两者功能完全相同"],
    "answer": "A",
    "explain": "LER（Label Edge Router，标签边缘路由器）位于MPLS域边缘，负责将IP报文压入标签（Ingress）或弹出标签（Egress），实现IP与MPLS域的衔接。LSR（Label Switching Router）位于MPLS域内部，依据标签转发表进行标签交换（swap）。"
  },
  {
    "id": "P821155",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS中标签的基本操作包括以下哪些？",
    "options": ["Push（压入）", "Swap（交换）", "Pop（弹出）", "Drop（丢弃）"],
    "answer": ["A", "B", "C"],
    "explain": "MPLS标签的基本操作有Push（入标签压入）、Swap（用出标签替换入标签）和Pop（弹出标签）。Drop不是标签操作类型，虽然无匹配表项时数据会被丢弃。"
  },
  {
    "id": "P821156",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "PHP（Penultimate Hop Popping）是指倒数第二跳路由器在转发前弹出标签，由最后一跳路由器直接进行IP转发。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "PHP（次末跳弹出）由倒数第二跳LSR执行，将标签弹出后再转发给最后一跳（Egress）LER。这样可以减轻Egress LER的一次标签查表负担，并让Egress无需同时维护LFIB和IP转发表。Egress通过分发隐式空标签（标签值3）请求PHP。"
  },
  {
    "id": "P821157",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "LDP协议使用的端口号是多少？",
    "options": ["TCP 646和UDP 646", "TCP 179", "UDP 520", "TCP 646和UDP 179"],
    "answer": "A",
    "explain": "LDP使用TCP 646建立会话（LDP Session）并可靠地交换标签映射消息，使用UDP 646发送Hello报文进行邻居发现。TCP 179是BGP的端口。"
  },
  {
    "id": "P821158",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS VPN中，RD（Route Distinguisher）的作用是什么？",
    "options": ["区分不同VPN实例的路由，使不同VPN中相同网段的路由能够共存", "控制VPN路由的导入导出", "标识MPLS标签", "标识PE设备的Router ID"],
    "answer": "A",
    "explain": "RD为64比特，与IPv4前缀一起构成VPNv4地址（共96比特）。其作用是区分不同VPN实例中相同的IPv4前缀，使不同VPN的相同网段路由在MP-BGP中能够共存而不冲突。控制路由导入导出的是RT。"
  },
  {
    "id": "P821159",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS VPN中，控制VPN路由的导入与导出、实现VPN成员关系的是哪个属性？",
    "options": ["RD", "RT（Route Target）", "EXP", "SoO"],
    "answer": "B",
    "explain": "RT（Route Target）是BGP扩展团体属性，PE在发布VPN路由时附加Export RT，接收端PE根据本地VPN实例的Import RT决定是否接收该路由。RT决定了VPN成员关系和路由泄露范围，RD只用于区分前缀。"
  },
  {
    "id": "P821160",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于MPLS VPN的报文转发，以下说法正确的有哪些？",
    "options": ["PE之间转发时使用两层标签，外层为公网标签，内层为私网标签", "外层标签由LDP或RSVP-TE等分发，用于在MPLS域内转发", "内层标签由MP-BGP分发，用于标识VPN实例", "CE与PE之间必须使用MPLS标签交互"],
    "answer": ["A", "B", "C"],
    "explain": "MPLS VPN转发时PE为VPN报文压入内层私网标签（由MP-BGP分发，标识VPN实例和路由）和外层公网标签（由LDP或RSVP-TE分发，用于骨干网转发）。CE与PE之间通常是普通IP报文交互，无需MPLS标签。"
  },
  {
    "id": "P821161",
    "type": "fill",
    "chapter": "MPLS与VPN基础",
    "stem": "在PE设备上创建VPN实例（VRF）时，必须配置______，用于区分不同VPN实例中相同的IPv4地址前缀。",
    "options": [],
    "answer": ["RD", "route-distinguisher", "路由 distinguisher", "路由区分符"],
    "explain": "RD（Route Distinguisher，路由区分符）在ip vpn-instance视图下通过route-distinguisher命令配置，格式为ASN:nn或IP:nn。RD与IPv4前缀组合成VPNv4地址，使不同VPN的相同网段可以共存。"
  },
  {
    "id": "P821162",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "MP-BGP通过扩展团体属性携带RT，并且使用VPNv4地址族来传递VPN路由。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "MP-BGP新增了VPNv4地址族，其中路由前缀由RD+IPv4前缀构成（共96比特），并携带RT等扩展团体属性用于控制VPN成员的导入导出。BGP通过Capability Advertisement协商VPNv4地址族能力。"
  },
  {
    "id": "P821163",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "在华为设备上创建VPN实例并使能相应地址族的命令序列是？",
    "options": ["ip vpn-instance vpn1 / ipv4-family", "vrf vpn1 / address-family ipv4", "mpls vpn vpn1 / ipv4-family", "bgp vpn1 / ipv4-family"],
    "answer": "A",
    "explain": "华为VRP使用ip vpn-instance <名称>创建VPN实例，随后进入ipv4-family视图配置RD和RT。Cisco设备使用vrf definition。创建后需要将接口绑定到VPN实例：interface ... / ip binding vpn-instance vpn1。"
  },
  {
    "id": "P821164",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS VPN中P（Provider）设备的主要职责是什么？",
    "options": ["维护VPN路由并向CE发布", "只负责标签交换，不感知VPN路由信息", "与CE交换私网路由", "分配RD和RT"],
    "answer": "B",
    "explain": "P设备位于骨干网内部，只需支持MPLS转发，进行外层标签的交换，不需要维护VPN实例和VPN路由。PE设备负责VPN实例、VPN路由维护及标签分配，CE是用户侧设备。"
  },
  {
    "id": "P821165",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "以下哪些协议可以用于MPLS标签的分发？",
    "options": ["LDP", "RSVP-TE", "MP-BGP", "IGMP"],
    "answer": ["A", "B", "C"],
    "explain": "LDP是常用的标签分发协议，为IGP路由分配标签；RSVP-TE用于流量工程的显式路径并分配标签；MP-BGP为VPN路由分配私网标签。IGMP是组播组成员管理协议，不用于标签分发。"
  },
  {
    "id": "P821166",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS标签中，特殊标签值3代表什么含义？",
    "options": ["显式空标签，表示应弹出标签并使用IPv4转发", "隐式空标签，表示应弹出标签并在弹出后使用IPv4转发", "IPv4显式空标签", "保留用于OAM"],
    "answer": "B",
    "explain": "标签值0为IPv4显式空标签（Explicit Null），表示弹出栈顶标签后需查看IPv4头（通常用于承载EXP信息）；标签值3为隐式空标签（Implicit Null），表示直接弹出栈顶标签并按IPv4转发，即PHP。标签值1为路由器告警标签，14为OAM告警标签。"
  },
  {
    "id": "P821167",
    "type": "fill",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS网络中，由一系列LSR组成的、从入节点到出节点的单向标签转发路径称为______。",
    "options": [],
    "answer": ["LSP", "标签交换路径", "Label Switched Path", "标签交换通道"],
    "explain": "LSP（Label Switched Path，标签交换路径）是报文在MPLS网络中经过的一系列LSR构成的单向路径。LSP与FEC绑定，是MPLS转发的基本单位，同一个FEC的报文沿同一条LSP转发。"
  },
  {
    "id": "P821168",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS VPN中，VPN实例（VRF）通过隔离路由表实现不同VPN之间私网路由的相互隔离。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "每个VPN实例（VRF）拥有独立的路由表、转发表和接口集合，不同VPN实例的路由信息相互隔离。PE通过绑定接口到VPN实例来区分不同用户的流量，从而实现地址空间重叠的多个VPN共存。"
  }
];