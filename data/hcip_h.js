window.BANK_HCIP_H = [
  {
    "id": "PH001",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "某企业接入层交换机下有多个部门，网管希望把大量分散的VLAN聚合成一个Super VLAN（VLAN聚合），以节省IP地址。关于Super VLAN的原理，下列说法正确的是：",
    "options": [
      "Super VLAN本身承载所有Sub VLAN的广播报文，各Sub VLAN共用Super VLAN的广播域",
      "Super VLAN只是逻辑管理单元，不承载业务流量，各Sub VLAN在二层相互隔离，通过Super VLAN的VLANIF接口实现三层互通",
      "Sub VLAN之间可以直接二层互通，无需经过Super VLAN的三层转发",
      "Super VLAN下所有Sub VLAN必须使用不同的网段，因此不能节省IP地址"
    ],
    "answer": "B",
    "explain": "Super VLAN只作为三层管理单元，不承载业务流量；各Sub VLAN二层隔离、共享Super VLAN的VLANIF地址作为网关实现三层互通。这样多个Sub VLAN可共用一个网段，达到节省IP地址的目的。"
  },
  {
    "id": "PH002",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在Super VLAN组网中，Sub VLAN内的主机访问其他网段的主机时，需要先解析Super VLAN的VLANIF接口MAC地址。交换机针对该场景默认开启的功能是：",
    "options": [
      "DHCP中继",
      "GVRP",
      "ARP代理（Proxy ARP），由Super VLAN的VLANIF接口代答ARP请求",
      "STP根保护"
    ],
    "answer": "C",
    "explain": "Super VLAN特性依赖VLANIF接口的ARP代理功能：Sub VLAN主机请求网关MAC时由Super VLAN的VLANIF接口代答，报文才能经三层正确转发。该代理行为在配置Super VLAN后自动生效。"
  },
  {
    "id": "PH003",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于MUX VLAN，下列描述正确的有：（多选）",
    "options": [
      "MUX VLAN分为主VLAN（Principal VLAN）、互通型从VLAN（Group VLAN）和隔离型从VLAN（Separate VLAN）三种角色",
      "主VLAN内的接口可以与所有从VLAN内的接口通信",
      "互通型从VLAN内的接口之间可以互相通信，也可以与主VLAN通信",
      "隔离型从VLAN内的接口之间不能互相通信，也不能与主VLAN通信"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "MUX VLAN中主VLAN可与所有从VLAN互通；互通型从VLAN内部可互通且能访问主VLAN；隔离型从VLAN内部互相隔离但可访问主VLAN。隔离型从VLAN与主VLAN之间是可以通信的，故D错误。"
  },
  {
    "id": "PH004",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "某酒店每个房间需要一个独立VLAN，房间之间必须完全二层隔离，但所有房间都要能访问同一台服务器。使用MUX VLAN实现时，房间端口应加入的VLAN角色是：",
    "options": [
      "主VLAN（Principal VLAN）",
      "互通型从VLAN（Group VLAN）",
      "隔离型从VLAN（Separate VLAN）",
      "Voice VLAN"
    ],
    "answer": "C",
    "explain": "房间之间需完全隔离且需访问公共服务器，正好对应隔离型从VLAN：其成员之间二层隔离，但都可与主VLAN（服务器所在VLAN）互通。互通型从VLAN成员之间可以通信，不符合隔离要求。"
  },
  {
    "id": "PH005",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "MUX VLAN中的隔离型从VLAN内的用户之间不能互相通信，但可以与主VLAN内的用户通信。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "隔离型从VLAN（Separate VLAN）的端口之间二层完全隔离，但可与主VLAN内的端口互通，这是MUX VLAN的典型设计意图。该特性常用于酒店、小区等需要用户隔离又要访问公共资源的场景。"
  },
  {
    "id": "PH006",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "Voice VLAN功能的核心价值在于：",
    "options": [
      "为语音流量加密",
      "为语音流量做NAT转换",
      "自动为IP电话分配静态IP地址",
      "为语音流量自动划分独立VLAN并提升其转发优先级，保证通话质量"
    ],
    "answer": "D",
    "explain": "Voice VLAN让IP电话发出的语音报文自动进入专用VLAN，并可携带较高802.1p优先级，从而获得更好的转发保障。它不做加密、NAT或地址分配。"
  },
  {
    "id": "PH007",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "配置Voice VLAN时，可以通过哪些方式识别语音流量？（多选）",
    "options": [
      "基于OUI（组织唯一标识符）自动识别，即根据源MAC地址的OUI字段判断是否为语音设备",
      "基于手工配置，由管理员在接口上通过命令指定该接口连接语音设备",
      "基于报文中的DSCP值自动识别语音报文",
      "基于接口收到的VLAN Tag自动识别语音流量"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explain": "Voice VLAN支持自动模式（基于源MAC的OUI识别语音设备）和手动模式（管理员手工指定接口为语音接口）。DSCP与VLAN Tag均不是Voice VLAN的识别依据。"
  },
  {
    "id": "PH008",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在接口上配置 voice-vlan mode auto 后，要使OUI识别生效，还必须保证：",
    "options": [
      "接口上必须配置为Trunk类型且PVID等于Voice VLAN",
      "接口上已通过 voice-vlan enable 使能Voice VLAN功能，且该接口允许Voice VLAN通过",
      "必须关闭接口的STP功能",
      "必须为语音设备配置静态ARP"
    ],
    "answer": "B",
    "explain": "自动模式只是识别方式，真正让接口启用Voice VLAN需要执行voice-vlan enable，同时接口需放通Voice VLAN。Trunk或PVID并非强制要求，也不涉及关闭STP或静态ARP。"
  },
  {
    "id": "PH009",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "Voice VLAN的自动模式下，交换机根据IP电话发送报文的源MAC地址中的OUI字段来判断是否为语音流量。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "自动模式通过比对报文源MAC地址前24位（OUI）与设备内置或管理员配置的OUI列表来识别语音设备。识别成功后，该接口收到的报文会被打上Voice VLAN标签。"
  },
  {
    "id": "PH010",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于Voice VLAN的安全模式（voice-vlan security enable），下列说法正确的是：",
    "options": [
      "开启安全模式后，Voice VLAN被加密传输",
      "开启安全模式后，语音报文不再携带VLAN标签",
      "开启安全模式后，若接口收到的报文源MAC不在OUI列表中，则该报文会被丢弃，防止非法设备接入Voice VLAN",
      "开启安全模式后，接口自动变为Access类型"
    ],
    "answer": "C",
    "explain": "Voice VLAN安全模式用于防止非法终端冒充语音设备接入：当接口收到源MAC不在OUI列表中的报文时直接丢弃。它不涉及加密、去标签或接口类型变更。"
  },
  {
    "id": "PH011",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "下列关于VLAN Mapping（VLAN映射）的描述，正确的有：（多选）",
    "options": [
      "VLAN Mapping可以将报文中的单层VLAN Tag替换为另一个VLAN ID，实现不同VLAN规划的两张网络互通",
      "VLAN Mapping可以在接口入方向对报文的外层和内层Tag同时进行映射，即支持双标签映射",
      "VLAN Mapping通常部署在运营商边缘设备的用户侧接口上",
      "VLAN Mapping会修改报文的MAC地址"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "VLAN Mapping按映射关系替换报文的VLAN Tag（支持单标签和双标签），常用于运营商边缘把用户VLAN转换为规划内的VLAN。它只修改Tag信息，不修改MAC地址。"
  },
  {
    "id": "PH012",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "某园区网中，用户侧设备规划使用VLAN 10、20，而汇聚层规划使用VLAN 100、200。要在汇聚设备用户侧接口上完成对应转换，应使用：",
    "options": [
      "QinQ，为报文再封装一层Tag",
      "VLAN Mapping，将VLAN 10映射为100、VLAN 20映射为200",
      "MUX VLAN",
      "Voice VLAN"
    ],
    "answer": "B",
    "explain": "将一种VLAN ID替换为另一种VLAN ID正是VLAN Mapping的功能，在接入接口入方向配置映射关系即可。QinQ是叠加外层标签，MUX VLAN与Voice VLAN均不实现ID替换。"
  },
  {
    "id": "PH013",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "VLAN Mapping只能在接口的入方向配置，且需要与接口的VLAN放通配置配合才能正常转发。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "VLAN Mapping配置在接口入方向，报文进入设备时完成Tag替换，随后设备按映射后的VLAN进行转发，因此该VLAN必须在接口上被允许通过。若映射后VLAN未放通，报文仍会被丢弃。"
  },
  {
    "id": "PH014",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ报文中的双层标签，其外层和内层分别是：",
    "options": [
      "外层为公网VLAN标签（SPVLAN），内层为用户私网VLAN标签（CVLAN）",
      "外层为用户私网VLAN标签（CVLAN），内层为公网VLAN标签（SPVLAN）",
      "外层为MPLS标签，内层为VLAN标签",
      "外层为TPID，内层为PRI"
    ],
    "answer": "A",
    "explain": "QinQ报文结构为外层SPVLAN（Service Provider VLAN，公网标签）加内层CVLAN（Customer VLAN，私网标签）。运营商设备只需根据外层Tag转发，内层Tag对公网透明。"
  },
  {
    "id": "PH015",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ技术最主要解决的问题是：",
    "options": [
      "用户报文无法携带优先级信息",
      "MAC地址表容量不足",
      "单层VLAN Tag只有12bit，可用VLAN数量最多4094个，无法满足大量用户隔离的需求",
      "IP地址分配效率低"
    ],
    "answer": "C",
    "explain": "VLAN ID字段为12bit，可用VLAN数为4094个，在城域网/园区多租户场景下远远不够。QinQ通过叠加外层标签，使内层用户VLAN可以在不同外层VLAN中重复使用，从而突破数量限制。"
  },
  {
    "id": "PH016",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于基本QinQ（基于端口）与灵活QinQ（基于VLAN或流分类）的区别，下列描述正确的有：（多选）",
    "options": [
      "基本QinQ在接口上通过 port link-type dot1q-tunnel 实现，接口收到的所有报文统一添加同一个外层Tag",
      "灵活QinQ可根据报文原有的VLAN ID或流分类结果，为不同用户报文添加不同的外层Tag",
      "基本QinQ的配置比灵活QinQ更简单，但对同一接口下不同用户无法区分外层Tag",
      "灵活QinQ只能对已带Tag的报文生效，无法处理Untagged报文"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "基本QinQ基于端口，接口下所有报文统一封装同一外层VLAN；灵活QinQ通过VLAN或流分类为不同报文封装不同外层VLAN，配置更灵活。灵活QinQ同样可以处理Untagged报文（可按PVID处理），故D错误。"
  },
  {
    "id": "PH017",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在某交换机接口GigabitEthernet0/0/1上配置基本QinQ，使该接口收到的所有报文都加上VLAN 100的外层标签，正确的命令是：",
    "options": [
      "interface GigabitEthernet0/0/1 → port link-type trunk → port trunk allow-pass vlan 100",
      "interface GigabitEthernet0/0/1 → port link-type access → port default vlan 100",
      "interface GigabitEthernet0/0/1 → qinq vlan-translation 100",
      "interface GigabitEthernet0/0/1 → port link-type dot1q-tunnel → port default vlan 100"
    ],
    "answer": "D",
    "explain": "基本QinQ的关键是把接口配置为dot1q-tunnel类型，并用port default vlan指定外层SPVLAN。这样接口收到的Untagged或Tagged报文都会被封装上外层Tag 100。"
  },
  {
    "id": "PH018",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ的外层标签TPID可以被配置为0x88A8，以兼容不同厂商或不同标准的设备。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "标准以太网VLAN Tag的TPID默认为0x8100，QinQ场景下可将外层TPID配置为0x88A8（IEEE 802.1ad），以便与其他设备对接。内层TPID通常仍为0x8100。"
  },
  {
    "id": "PH019",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于QinQ报文的转发过程，下列说法正确的是：",
    "options": [
      "运营商设备依据外层SPVLAN标签进行转发，内层CVLAN标签对公网设备透明",
      "运营商设备必须同时解析内外两层标签才能转发",
      "公网设备会修改内层CVLAN标签",
      "QinQ报文在公网中传输时必须去掉内层标签"
    ],
    "answer": "A",
    "explain": "QinQ的设计核心就是公网设备只依据外层Tag转发，内层Tag作为用户私网信息被透明传输。这样不同用户的相同内层VLAN可以互不冲突。"
  },
  {
    "id": "PH020",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于QinQ对MTU的影响，下列描述正确的有：（多选）",
    "options": [
      "QinQ为报文增加了一层4字节的VLAN Tag，报文长度增大",
      "如果设备或链路MTU仍按1518字节限制，可能导致较大报文被丢弃",
      "实际部署中通常需要适当增大接口MTU或确认设备支持超长帧",
      "QinQ会增加8字节标签，因此MTU必须增大16字节以上"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "每个VLAN Tag占4字节，QinQ在原有标签基础上再加4字节，报文最大长度增大，需关注MTU是否足够。D中的8字节、16字节说法错误。"
  },
  {
    "id": "PH021",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "以太网VLAN Tag中VLAN ID字段的位数为：",
    "options": [
      "8bit",
      "12bit",
      "16bit",
      "24bit"
    ],
    "answer": "B",
    "explain": "VLAN Tag共4字节，其中VLAN ID字段为12bit，理论取值范围0~4095。可用VLAN为4094个，这也是QinQ技术出现的根本原因。"
  },
  {
    "id": "PH022",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "下列VLAN ID中，属于协议保留、不能作为普通业务VLAN使用的是：",
    "options": [
      "VLAN 0",
      "VLAN 10",
      "VLAN 100",
      "VLAN 1000"
    ],
    "answer": "A",
    "explain": "VLAN 0为优先级标签（Priority Tagged）保留值，仅用于携带优先级而不表示VLAN；VLAN 4095为保留值。普通可配置VLAN范围为1~4094。"
  },
  {
    "id": "PH023",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "VLAN ID的取值范围是0~4095，其中0和4095为保留值，可用的业务VLAN为1~4094，共4094个。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "12bit VLAN ID理论范围0~4095，VLAN 0和VLAN 4095被保留，实际可分配的业务VLAN为1~4094，共4094个。"
  },
  {
    "id": "PH024",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在接口上执行 display port vlan 命令，主要可以查看：",
    "options": [
      "设备的MAC地址表项",
      "ARP表项",
      "路由表",
      "接口的链路类型、PVID以及允许通过的VLAN列表"
    ],
    "answer": "D",
    "explain": "display port vlan用于查看接口的链路类型（Access/Trunk/Hybrid/dot1q-tunnel）、PVID和放通的VLAN。它是排查VLAN转发不通问题的常用命令。"
  },
  {
    "id": "PH025",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "执行 display vlan 命令可以查看到的信息不包括：",
    "options": [
      "该VLAN内包含的接口列表",
      "VLAN的类型（如common、super、sub等）",
      "接口的IP地址",
      "VLAN的状态"
    ],
    "answer": "C",
    "explain": "display vlan可以显示VLAN的ID、类型、状态及其包含的接口等信息，但不显示接口IP地址。查看接口IP应使用display ip interface等命令。"
  },
  {
    "id": "PH026",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于GVRP，下列描述正确的有：（多选）",
    "options": [
      "GVRP是通用VLAN注册协议，可实现VLAN的自动注册与动态分发，减少手工配置",
      "GVRP通过GARP机制传递VLAN注册信息，工作在三层以上设备之间",
      "GVRP存在安全隐患，如果接口误开GVRP，可能被非法设备注册大量VLAN消耗交换机资源",
      "GVRP必须在Trunk接口上配置，且两端设备的GVRP功能都要使能"
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "explain": "GVRP实现VLAN自动注册分发，需在Trunk接口两端均使能，可以减少手工配置，但存在被滥用注册大量VLAN的安全风险。GVRP工作在二层，不涉及三层，故B错误。"
  },
  {
    "id": "PH027",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "为防止非信任区域通过GVRP注册大量VLAN导致设备资源耗尽，推荐的措施是：",
    "options": [
      "把接口配置为Access类型并放通全部VLAN",
      "关闭STP",
      "把设备所有接口的PVID都改为1",
      "在用户接入侧接口上不使能GVRP，或使用GVRP的注册限制功能限制可注册的VLAN范围"
    ],
    "answer": "D",
    "explain": "GVRP的安全隐患主要来自用户侧接口被恶意注册。应在接入侧关闭GVRP，或通过GVRP注册限制功能限定可注册的VLAN，避免资源被耗尽。"
  },
  {
    "id": "PH028",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "GVRP可以动态注册VLAN，因此网络中不需要任何手工VLAN配置，也不会带来安全问题。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "GVRP虽然能自动注册VLAN，但通常仍需手工创建静态VLAN或配置注册限制，且存在被非法注册VLAN的安全隐患。故该说法错误。"
  },
  {
    "id": "PH029",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "两台主机连接在同一台交换机的同一VLAN内，但网管希望二者二层流量互相隔离，同时都能访问网关。下列方案中最合适的是：",
    "options": [
      "使用MUX VLAN，将两个主机端口分别加入隔离型从VLAN，网关/服务器端口加入主VLAN",
      "将两个端口配置为不同的PVID并关闭ARP代理",
      "使用QinQ为两个端口封装不同外层标签",
      "使用Voice VLAN"
    ],
    "answer": "A",
    "explain": "同VLAN内主机互相隔离又要都能访问网关，MUX VLAN的隔离型从VLAN加主VLAN是最直接的方案。端口隔离（port-isolate）也可实现隔离，但选项中未给出。"
  },
  {
    "id": "PH030",
    "type": "fill",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在接口上配置基本QinQ时，需要把接口的链路类型配置为______类型。",
    "options": [],
    "answer": [
      "dot1q-tunnel"
    ],
    "explain": "基本QinQ基于端口实现，核心命令是port link-type dot1q-tunnel，接口收到的报文将被统一封装上由port default vlan指定的外层VLAN标签。"
  },
  {
    "id": "PH031",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "某运营商网络需要把用户私网VLAN 10的报文在PE设备上转换并叠加外层VLAN 200，同时在内层保留原有VLAN信息。应使用的技术组合是：",
    "options": [
      "QinQ（叠加外层Tag），必要时配合VLAN Mapping调整内层Tag",
      "仅使用Access接口",
      "仅使用Voice VLAN",
      "仅使用GVRP"
    ],
    "answer": "A",
    "explain": "需要保留内层VLAN信息并叠加外层标签，正是QinQ的能力；当内层VLAN ID需要调整时再配合VLAN Mapping使用。Access接口会剥离标签，无法满足要求。"
  },
  {
    "id": "PH032",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于QinQ与VLAN Mapping配合使用，下列说法正确的有：（多选）",
    "options": [
      "当不同用户使用了相同的内层VLAN ID但需要区分时，可先通过VLAN Mapping调整内层Tag，再叠加外层Tag",
      "VLAN Mapping可以只映射外层或内外层同时映射",
      "两种技术都涉及对VLAN Tag的修改，配置时需明确映射/封装的方向和顺序",
      "VLAN Mapping会把报文封装成三层报文"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "QinQ负责加外层标签，VLAN Mapping负责替换标签，二者配合可处理复杂的多租户VLAN规划。VLAN Mapping仍工作在二层，不会把报文变成三层报文。"
  },
  {
    "id": "PH033",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在QinQ网络中，如果内层用户报文本身是Untagged报文，接入设备通常的处理方式是：",
    "options": [
      "直接丢弃该报文",
      "根据接口的PVID为其打上内层VLAN Tag，再叠加外层SPVLAN Tag",
      "只打外层标签，不带内层标签",
      "把报文上送CPU处理"
    ],
    "answer": "B",
    "explain": "对于Untagged报文，设备按接口PVID打上内层Tag后再进行QinQ封装，最终形成双层标签报文。直接丢弃或不带内层标签都不符合QinQ的正常转发行为。"
  },
  {
    "id": "PH034",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在QinQ网络中，公网设备可以识别并处理内层CVLAN标签，因此不同用户的相同CVLAN ID会互相冲突。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "公网设备只识别外层SPVLAN标签，内层CVLAN对公网透明，因此不同用户可以重复使用相同的CVLAN ID而互不冲突，这正是QinQ扩展VLAN数量的原理。"
  },
  {
    "id": "PH035",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "某交换机接口配置为dot1q-tunnel并指定port default vlan 100，当该接口收到带VLAN 10标签的报文时，报文最终：",
    "options": [
      "只有一个VLAN 10标签",
      "只有一个VLAN 100标签，内层标签被丢弃",
      "外层标签为VLAN 100，内层标签为VLAN 10",
      "报文被丢弃"
    ],
    "answer": "C",
    "explain": "dot1q-tunnel接口收到带Tag的报文时，会在原有Tag之外再封装一层由port default vlan指定的外层Tag，形成外层100、内层10的双层标签报文。"
  },
  {
    "id": "PH036",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "灵活QinQ相比基本QinQ的最大优势在于：",
    "options": [
      "可以根据报文的VLAN ID或流分类结果为不同用户流添加不同的外层VLAN标签",
      "配置命令更少",
      "可以自动学习MAC地址",
      "可以节省IP地址"
    ],
    "answer": "A",
    "explain": "灵活QinQ支持基于VLAN或基于流分类的封装策略，同一物理接口下不同用户可被封装到不同外层VLAN，便于精细化管理。基本QinQ只能统一封装一个外层VLAN。"
  },
  {
    "id": "PH037",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "下列场景中，适合部署QinQ的有：（多选）",
    "options": [
      "运营商城域网中需要为大量企业用户提供二层VPN隔离，单层VLAN数量不足",
      "园区网中不同楼栋使用了相同的VLAN ID，汇聚时需要区分",
      "需要为用户保留私网VLAN规划并透明传输到对端",
      "需要为服务器做链路聚合提高带宽"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "QinQ用于突破VLAN数量限制、区分相同VLAN ID以及透明传输用户VLAN规划，广泛应用于运营商二层VPN。链路聚合属于Eth-Trunk功能，与QinQ无关。"
  },
  {
    "id": "PH038",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "基本QinQ配置完成后，接口上仍然可以像普通Trunk一样通过配置放通多个VLAN来区分不同用户。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "基本QinQ的dot1q-tunnel接口对所有进入的报文统一封装同一个外层VLAN，无法在该接口上再按VLAN区分用户。需要区分不同用户应使用灵活QinQ。"
  },
  {
    "id": "PH039",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在Super VLAN中，Sub VLAN与Super VLAN之间的对应关系，下列描述正确的是：",
    "options": [
      "一个Super VLAN可以包含多个Sub VLAN，一个Sub VLAN只能属于一个Super VLAN",
      "一个Sub VLAN可以同时属于多个Super VLAN",
      "一个Super VLAN只能包含一个Sub VLAN",
      "Super VLAN与Sub VLAN必须使用相同的VLAN ID"
    ],
    "answer": "A",
    "explain": "Super VLAN与Sub VLAN是一对多的关系：一个Super VLAN可关联多个Sub VLAN，而一个Sub VLAN只能属于一个Super VLAN。二者VLAN ID必须不同。"
  },
  {
    "id": "PH040",
    "type": "fill",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "MUX VLAN中，成员之间完全二层隔离、但都可以与主VLAN通信的从VLAN类型称为______从VLAN。",
    "options": [],
    "answer": [
      "隔离型",
      "Separate VLAN"
    ],
    "explain": "隔离型从VLAN（Separate VLAN）内的接口之间二层完全隔离，但均可与主VLAN互通，常用于酒店客房、小区住户等场景。"
  },
  {
    "id": "PH041",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于Voice VLAN中语音报文携带的VLAN标签，下列说法正确的是：",
    "options": [
      "语音报文进入Voice VLAN后必须去除所有Tag",
      "语音报文只能以Untagged方式发送",
      "语音报文的优先级固定为0",
      "语音报文进入Voice VLAN后会被打上Voice VLAN的Tag，并可根据配置提高其802.1p优先级"
    ],
    "answer": "D",
    "explain": "Voice VLAN为语音流量分配专用VLAN并提升优先级（802.1p），保证语音转发质量。IP电话与交换机之间的Tag处理方式取决于具体配置，但优先级提升是其关键特性。"
  },
  {
    "id": "PH042",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "排查“QinQ接口下用户无法通信”的问题时，可以检查的方面有：（多选）",
    "options": [
      "接口链路类型是否正确配置为dot1q-tunnel（基本QinQ场景）",
      "外层SPVLAN是否已在相关接口及上行链路上正确放通",
      "两端设备的外层TPID是否一致",
      "接口的MAC地址老化时间是否设置为0"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "QinQ不通常见原因是接口类型配置错误、外层VLAN未放通或两端TPID不一致。MAC老化时间与QinQ转发是否正常无关。"
  },
  {
    "id": "PH043",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在QinQ网络中，外层TPID与内层TPID必须配置为相同的值，否则报文无法转发。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "外层TPID通常配置为0x88A8以便与标准QinQ对接，内层TPID一般为0x8100，二者可以不同。只有要求两端设备对外层TPID的识别一致，并非要求内外层相同。"
  },
  {
    "id": "PH044",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "某接口配置为Hybrid类型，PVID为10，且配置了undo port hybrid vlan 10 untagged、port hybrid vlan 10 tagged。该接口收到Untagged报文后将：",
    "options": [
      "打上VLAN 10的Tag，并以Tagged方式从该VLAN转发",
      "不打Tag，直接按VLAN 10转发",
      "直接丢弃报文",
      "把报文送到Voice VLAN"
    ],
    "answer": "A",
    "explain": "Hybrid接口收到Untagged报文时按PVID打Tag；出口是否带Tag取决于untagged/tagged配置。此处VLAN 10配置为tagged，故以带标签方式转发。"
  },
  {
    "id": "PH045",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "VLAN间二层隔离的常用实现方式不包括：",
    "options": [
      "端口隔离（port-isolate）",
      "MUX VLAN的隔离型从VLAN",
      "将接口划分到不同的VLAN",
      "配置接口的MTU为1500"
    ],
    "answer": "D",
    "explain": "端口隔离、MUX VLAN隔离型从VLAN以及划分不同VLAN都可以实现二层隔离。修改MTU只影响报文长度，不能实现隔离。"
  },
  {
    "id": "PH046",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "在一台华为交换机上查看某VLAN内包含哪些接口，最合适的命令是：",
    "options": [
      "display vlan <vlan-id>",
      "display mac-address",
      "display arp",
      "display interface brief"
    ],
    "answer": "A",
    "explain": "display vlan <vlan-id>可直接显示该VLAN的类型、状态以及包含的接口列表。其余命令分别用于查看MAC表、ARP表和接口简要信息。"
  },
  {
    "id": "PH047",
    "type": "multi",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "关于VLAN聚合（Super VLAN）的优点，下列描述正确的有：（多选）",
    "options": [
      "多个Sub VLAN共用一个网段和网关地址，节省IP地址",
      "Sub VLAN之间二层隔离，减少广播域规模，提升安全性",
      "不同Sub VLAN之间的互通通过Super VLAN的VLANIF接口完成三层转发",
      "Sub VLAN内的主机可以直接通过二层互相访问"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "Super VLAN的核心价值是节省IP地址并缩小广播域；Sub VLAN之间二层隔离，跨Sub VLAN通信必须经Super VLAN的VLANIF接口三层转发。故D错误。"
  },
  {
    "id": "PH048",
    "type": "fill",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "QinQ 报文中，外层标签称为 SPVLAN，主要用于公网设备转发；内层标签称为______，用于标识用户私网。",
    "options": [],
    "answer": ["CVLAN","cvlan","内层VLAN"],
    "explain": "QinQ 双层标签中，外层为 SPVLAN（Service Provider VLAN，公网标签），由运营商网络使用；内层为 CVLAN（Customer VLAN，私网标签），保留用户原有的 VLAN 信息。这样运营商可以用一层公网标签区分不同用户，突破 4094 个 VLAN 的限制。"
  },
  {
    "id": "PH049",
    "type": "judge",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "灵活QinQ可以基于VLAN或流分类为报文封装不同的外层VLAN标签，适用于同一接口下区分不同用户的场景。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "灵活QinQ的管理方式正是基于VLAN或流分类，能够为同一物理接口下的不同用户流添加不同外层标签，弥补基本QinQ无法区分用户的不足。"
  },
  {
    "id": "PH050",
    "type": "single",
    "chapter": "VLAN高级特性与QinQ",
    "stem": "某公司有多台交换机，用户反映部分VLAN内主机无法互访。使用 display port vlan 排查时发现某Trunk接口未放通该VLAN。正确的解决方法是：",
    "options": [
      "修改接口MTU",
      "关闭STP",
      "把接口改为Access类型",
      "在该Trunk接口上通过 port trunk allow-pass vlan 命令放通对应VLAN"
    ],
    "answer": "D",
    "explain": "Trunk接口仅转发allow-pass列表中放通的VLAN报文，未放通则报文被丢弃。正确做法是在Trunk接口上放通相应VLAN。其余操作均不能解决该问题。"
  },
  {
    "id": "PH051",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping的核心作用是：",
    "options": [
      "为客户端加密DHCP报文",
      "监听DHCP报文并建立绑定表，同时通过信任端口/非信任端口的划分过滤非法DHCP报文",
      "为DHCP服务器分配静态IP地址",
      "把DHCP报文转换为DNS报文"
    ],
    "answer": "B",
    "explain": "DHCP Snooping通过监听DHCP交互过程建立“MAC+IP+VLAN+接口”绑定表，并将接口划分为信任端口和非信任端口，从而屏蔽非法DHCP服务器。它也是IP Source Guard和DAI的基础。"
  },
  {
    "id": "PH052",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在启用DHCP Snooping的设备上，连接DHCP服务器的接口应配置为：",
    "options": [
      "信任端口（dhcp snooping trusted）",
      "非信任端口",
      "黑洞端口",
      "镜像端口"
    ],
    "answer": "A",
    "explain": "只有连接合法DHCP服务器或上行合法DHCP中继的接口才配置为信任端口，其DHCP应答报文可正常转发。其余用户接入接口保持非信任状态，其DHCP应答报文会被丢弃。"
  },
  {
    "id": "PH053",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping的非信任端口会丢弃收到的DHCP Offer、DHCP ACK等服务器应答报文，从而防止用户侧私设DHCP服务器。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "非信任端口只允许客户端请求报文通过，收到DHCP Offer/ACK等应答报文时直接丢弃，使用户无法从私设的DHCP服务器获得地址，这是防止私设DHCP服务器的关键机制。"
  },
  {
    "id": "PH054",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于DHCP Snooping绑定表，下列描述正确的有：（多选）",
    "options": [
      "绑定表项记录了客户端的MAC地址、IP地址、VLAN ID和入接口等信息",
      "动态绑定表项由DHCP Snooping通过监听DHCP交互过程自动生成",
      "管理员可以手工配置静态绑定表项，用于地址固定的终端",
      "绑定表一旦生成就永远不会老化"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "DHCP Snooping绑定表包含MAC、IP、VLAN、接口等关键信息，支持动态生成和静态手工配置。动态表项会随租期老化，静态表项则需手工删除，故D错误。"
  },
  {
    "id": "PH055",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于DHCP Snooping绑定表的老化机制，下列说法正确的是：",
    "options": [
      "所有绑定表项都会在固定30秒后老化",
      "绑定表项只能由管理员手工删除",
      "动态绑定表项会随DHCP租期到期或探测不到用户而被老化删除，静态绑定表项不会自动老化",
      "绑定表项老化后设备会立即重启"
    ],
    "answer": "C",
    "explain": "动态绑定表项与DHCP租期关联，租期到期或用户下线后会被老化清除；静态绑定表项由管理员维护，不参与自动老化。设备不会因表项老化而重启。"
  },
  {
    "id": "PH056",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "IPSG（IP Source Guard）的实现原理是：",
    "options": [
      "对报文进行加密解密",
      "对报文进行NAT转换",
      "对报文进行流量限速",
      "基于DHCP Snooping绑定表（或静态绑定表）对接口收到的报文源IP和源MAC进行匹配检查，不匹配则丢弃"
    ],
    "answer": "D",
    "explain": "IPSG依赖绑定表对入接口报文的源IP/MAC进行校验，只有与绑定表匹配的报文才允许转发，可有效防止IP地址盗用。它不做加密、NAT或限速。"
  },
  {
    "id": "PH057",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "IPSG（IP Source Guard）要正常工作，必须先在设备上启用DHCP Snooping并生成绑定表，或手工配置静态绑定表。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "IPSG的过滤依据是绑定表，而绑定表来源于DHCP Snooping的动态学习或管理员手工配置的静态绑定。没有绑定表，IPSG无法进行有效校验。"
  },
  {
    "id": "PH058",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DAI（动态ARP检测）能够正常工作的前提是：",
    "options": [
      "设备上启用了Voice VLAN",
      "设备上启用了GVRP",
      "设备上配置了Super VLAN",
      "设备上已启用DHCP Snooping并建立了绑定表，DAI依据该表检查ARP报文的合法性"
    ],
    "answer": "D",
    "explain": "DAI通过DHCP Snooping绑定表校验ARP报文的源IP与源MAC是否匹配，不匹配的ARP报文被丢弃，从而防止ARP欺骗。因此必须先有绑定表。"
  },
  {
    "id": "PH059",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "ARP欺骗常见的类型包括：（多选）",
    "options": [
      "伪造网关ARP，冒充网关欺骗用户主机",
      "伪造用户主机ARP，冒充用户欺骗网关",
      "泛洪ARP报文，造成网关ARP表项溢出",
      "伪造DNS响应报文，篡改域名解析结果"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "ARP欺骗主要表现为冒充网关欺骗主机、冒充主机欺骗网关，以及通过大量ARP报文冲击设备ARP表资源。伪造DNS响应属于DNS欺骗，不属于ARP欺骗类型。"
  },
  {
    "id": "PH060",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "为防止ARP表项被大量伪造ARP报文冲击导致表项溢出，可在设备上部署的功能是：",
    "options": [
      "GVRP",
      "ARP表项严格学习（strict learning）以及ARP报文限速",
      "Voice VLAN",
      "QinQ"
    ],
    "answer": "B",
    "explain": "ARP表项严格学习只允许本设备触发的ARP请求对应的应答报文学习表项，配合ARP报文限速可抑制伪造ARP报文对ARP表资源的冲击。其余功能与ARP安全无关。"
  },
  {
    "id": "PH061",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在客户端上手工配置静态ARP绑定（IP与MAC的固定对应关系）的主要作用是：",
    "options": [
      "防止该IP对应的ARP表项被伪造ARP报文篡改，保证与可信主机/网关的通信安全",
      "提高报文转发速度到线速",
      "节省IP地址",
      "实现VLAN间路由"
    ],
    "answer": "A",
    "explain": "静态ARP绑定使IP与MAC的对应关系不被动态学习的伪造报文覆盖，可有效防止针对特定主机的ARP欺骗。它不改变转发速度级别，也不涉及IP地址节省或VLAN间路由。"
  },
  {
    "id": "PH062",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DAI（动态ARP检测）可以脱离DHCP Snooping绑定表独立工作，无需任何绑定表即可判断ARP报文是否合法。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "DAI的合法性判断依据就是DHCP Snooping（或静态配置）的绑定表，没有绑定表就无法判断ARP报文的源IP与源MAC是否匹配。故该说法错误。"
  },
  {
    "id": "PH063",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Option 43字段的典型用途是：",
    "options": [
      "指定客户端的DNS服务器地址",
      "在DHCP应答中携带AC的IP地址信息，供AP获取后与AC建立CAPWAP隧道",
      "指定客户端的默认网关",
      "指定DHCP服务器的租期"
    ],
    "answer": "B",
    "explain": "Option 43为厂商特定信息选项，在华为WLAN中常用于下发AC的IP地址列表，使AP在获得IP地址后能自动找到AC并建立CAPWAP隧道。网关、DNS和租期分别由Option 3、6、51指定。"
  },
  {
    "id": "PH064",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Option 82的主要作用是：",
    "options": [
      "加密DHCP报文",
      "指定客户端的启动文件名",
      "由DHCP中继或DHCP Snooping插入位置信息（如接口、VLAN），使服务器能够据此分配地址或进行用户定位",
      "指定客户端的主机名"
    ],
    "answer": "C",
    "explain": "Option 82为DHCP中继代理信息选项，由中继或Snooping设备插入电路的接口/VLAN等信息，服务器可据此实现按位置分配地址、用户定位与审计。不用于加密或指定主机名。"
  },
  {
    "id": "PH065",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于DHCP中继的giaddr字段，下列描述正确的有：（多选）",
    "options": [
      "giaddr是DHCP中继收到客户端请求后填入的网关IP地址字段",
      "DHCP服务器根据giaddr判断客户端所属网段，并从对应地址池中分配地址",
      "giaddr通常填写为DHCP中继上连接客户端方向的三层接口地址",
      "giaddr字段由客户端自己填写，中继不做修改"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "客户端请求经中继转发时，中继会在giaddr中填入面向客户端的三层接口地址；服务器据此选择相应地址池。客户端自身不会填写giaddr，故D错误。"
  },
  {
    "id": "PH066",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping配置中，使能DHCP Snooping功能以及把接口配置为信任端口，正确的命令顺序是：",
    "options": [
      "在系统视图执行 dhcp snooping enable，再在接口视图执行 dhcp snooping trusted",
      "在接口视图直接执行 dhcp snooping trusted 即可，无需全局使能",
      "在系统视图执行 dhcp snooping trusted，再在接口视图执行 dhcp snooping enable",
      "在系统视图执行 dhcp enable 即可自动完成"
    ],
    "answer": "A",
    "explain": "必须先通过dhcp snooping enable使能Snooping功能，再进入接口视图用dhcp snooping trusted将连接服务器的接口设为信任端口。全局dhcp enable只使能DHCP服务，不等价于Snooping。"
  },
  {
    "id": "PH067",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping使能后，设备上所有接口默认都是非信任端口，只有连接合法DHCP服务器的接口才需要手工配置为信任端口。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "使能DHCP Snooping后接口默认处于非信任状态，非信任端口会丢弃DHCP应答报文。因此必须手工把连接合法DHCP服务器/中继的接口配置为信任端口，否则客户端无法获取地址。"
  },
  {
    "id": "PH068",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "查看设备上DHCP Snooping绑定表信息的命令是：",
    "options": [
      "display dhcp server statistics",
      "display dhcp snooping binding",
      "display arp all",
      "display mac-address"
    ],
    "answer": "B",
    "explain": "display dhcp snooping binding可查看DHCP Snooping生成的动态和静态绑定表项，包括MAC、IP、VLAN、接口和剩余租期等信息，是排查IPSG/DAI问题的常用命令。"
  },
  {
    "id": "PH069",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "某用户私自把一台家用路由器接在办公网接口上，导致同网段主机获取到错误的IP地址。部署下列哪项功能最能直接解决该问题？",
    "options": [
      "在接入交换机上部署Voice VLAN",
      "在接入交换机上部署QinQ",
      "在接入交换机上部署GVRP",
      "在接入交换机上部署DHCP Snooping，并将用户接入接口置为非信任端口"
    ],
    "answer": "D",
    "explain": "私设DHCP服务器的问题由DHCP Snooping解决：用户接入接口保持非信任状态，其DHCP应答报文被丢弃，主机只能从合法服务器获取地址。其余功能与DHCP安全无关。"
  },
  {
    "id": "PH070",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于DHCP饿死攻击（DHCP Starvation）及其防范，下列描述正确的有：（多选）",
    "options": [
      "攻击者通过伪造大量源MAC地址不断申请IP地址，耗尽DHCP服务器地址池",
      "在接入设备上限制接口允许学习的MAC地址数量，可缓解基于MAC泛洪的饿死攻击",
      "DHCP Snooping限制接口允许的DHCP请求速率也能起到抑制作用",
      "饿死攻击只能通过重启DHCP服务器解决"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "饿死攻击的本质是伪造大量MAC消耗地址池，可通过端口MAC地址学习限制、DHCP报文限速等方式缓解。重启服务器只是临时恢复，并非解决办法，故D错误。"
  },
  {
    "id": "PH071",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "为防止DHCP报文泛洪冲击设备CPU，可在设备上配置：",
    "options": [
      "关闭DHCP功能",
      "把接口MTU调大",
      "DHCP报文限速（对上送CPU的DHCP报文进行速率限制）",
      "开启Voice VLAN"
    ],
    "answer": "C",
    "explain": "DHCP报文需要上送CPU处理，大量报文会造成CPU冲击。配置DHCP报文限速（或CPCAR）可以限制上送CPU的DHCP报文速率，保护设备稳定运行。"
  },
  {
    "id": "PH072",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping的绑定表既可以通过监听DHCP报文动态生成，也可以由管理员手工配置静态表项。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "对于通过DHCP获取地址的终端，绑定表由Snooping动态学习生成；对于使用静态IP地址的终端，可由管理员手工配置静态绑定表项，以便IPSG和DAI同样对其生效。"
  },
  {
    "id": "PH073",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于DHCP地址冲突检测（DHCP服务器在分配前使用ICMP或ARP探测地址是否被占用），下列说法正确的是：",
    "options": [
      "冲突检测会终止DHCP服务",
      "冲突检测只能检测MAC地址冲突",
      "冲突检测必须在客户端上配置",
      "服务器在分配地址前探测该地址是否已被使用，可避免把已占用的地址分配出去"
    ],
    "answer": "D",
    "explain": "华为DHCP服务器可开启地址冲突检测，在分配前通过发送探测报文（如ICMP Echo）确认地址空闲，避免分配到已被静态占用的地址。该功能在服务器（或设备）侧配置。"
  },
  {
    "id": "PH074",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "某企业使用两台DHCP服务器为同一网段提供地址，要求一台故障时另一台能继续提供服务且不产生地址冲突，合理的设计是：",
    "options": [
      "两台服务器配置互不重叠的地址池范围（或采用双机热备/VRRP方案），并保证中继指向可靠",
      "两台服务器配置完全相同的地址池范围且不做任何协调",
      "取消DHCP中继",
      "把两台服务器接到同一台交换机的非信任端口上"
    ],
    "answer": "A",
    "explain": "双机备份需要地址范围互不重叠，或通过双机热备机制统一管理地址池，避免同一地址被两台服务器同时分配造成冲突。完全相同且无协调的地址池会直接导致地址冲突。"
  },
  {
    "id": "PH075",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于使用三层交换机作为DHCP服务器，下列描述正确的有：（多选）",
    "options": [
      "需要先执行 dhcp enable 使能设备的DHCP功能",
      "需要创建地址池并配置网段、网关、DNS等参数",
      "需要在对应VLANIF接口（或全局）上指定使用该地址池",
      "三层交换机作为DHCP服务器时必须额外配置DHCP中继"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "三层交换机做DHCP服务器的基本步骤是使能DHCP、创建地址池并配置参数、在接口上引用地址池。客户端与服务器在同一设备上时无须中继，故D错误。"
  },
  {
    "id": "PH076",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP租期管理的作用是：",
    "options": [
      "强制客户端每次上线都使用同一个IP地址",
      "通过设置合理的租期，使地址在客户端不再使用时能够被及时回收再利用，提高地址利用率",
      "把IP地址转换为MAC地址",
      "限制客户端的带宽"
    ],
    "answer": "B",
    "explain": "租期决定客户端可使用地址的时长，租期到期前客户端需续租。合理设置租期可以在保证稳定性的同时及时回收闲置地址，提高地址池利用率。"
  },
  {
    "id": "PH077",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP客户端在租期达到50%时会向服务器发送单播DHCP Request报文请求续租。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "客户端在租期过半（T1）时向原服务器单播发送续租请求；若到租期87.5%（T2）仍未得到响应，则改为广播向任意服务器请求续租。"
  },
  {
    "id": "PH078",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP中继收到客户端广播的DHCP Discover报文后，正确的处理方式是：",
    "options": [
      "直接丢弃广播报文",
      "把广播报文转换为单播报文，将giaddr设置为接收接口的地址后转发给DHCP服务器",
      "把报文再广播到所有接口",
      "把报文封装为QinQ报文"
    ],
    "answer": "B",
    "explain": "DHCP中继的作用就是实现跨网段的DHCP报文转发：把客户端的广播请求转为单播发往服务器，并在giaddr中填入面向客户端的接口地址，使服务器能够选择正确的地址池。"
  },
  {
    "id": "PH079",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在DHCP Snooping场景下，如果管理员忘记把连接DHCP服务器的接口配置为信任端口，可能出现的现象是：",
    "options": [
      "客户端无法获取IP地址，因为服务器返回的DHCP应答报文在非信任端口被丢弃",
      "客户端可以正常获取地址，但无法上网",
      "服务器会重启",
      "交换机MAC地址表被清空"
    ],
    "answer": "A",
    "explain": "非信任端口会丢弃DHCP Offer/ACK等应答报文，导致客户端收不到服务器的响应而无法获取地址。这是DHCP Snooping部署中最常见的配置疏漏。"
  },
  {
    "id": "PH080",
    "type": "fill",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在接口上把连接DHCP服务器的接口配置为信任端口所使用的命令是 dhcp snooping ______。",
    "options": [],
    "answer": [
      "trusted"
    ],
    "explain": "接口视图下执行dhcp snooping trusted即可把该接口配置为信任端口，允许其转发DHCP应答报文；其余接口默认是非信任端口。"
  },
  {
    "id": "PH081",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "IPSG在接口上生效后，对于源IP地址与绑定表不匹配的报文，设备的处理动作是：",
    "options": [
      "修改报文的源IP地址后转发",
      "丢弃该报文",
      "把报文上送CPU",
      "把报文广播到所有接口"
    ],
    "answer": "B",
    "explain": "IPSG对不匹配绑定表的报文直接丢弃，从而阻止IP地址盗用。它不会改写报文源地址，也不会泛洪该报文。"
  },
  {
    "id": "PH082",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "IPSG可以只检查报文的源IP地址，也可以同时检查源IP地址和源MAC地址，具体取决于绑定表的配置方式。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "IPSG的检查粒度取决于绑定表内容：当绑定表仅包含IP信息时按源IP过滤，当绑定表同时包含MAC信息时可对源IP与源MAC一并校验，安全性更高。"
  },
  {
    "id": "PH083",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "下列关于ARP欺骗防护手段的描述，正确的有：（多选）",
    "options": [
      "在客户端和网关上配置静态ARP绑定，可防止关键表项被伪造报文篡改",
      "部署DAI，依据DHCP Snooping绑定表丢弃非法ARP报文",
      "配置ARP报文限速，抑制ARP泛洪对设备资源的冲击",
      "开启ARP表项严格学习，只学习本设备触发请求对应的ARP应答"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "静态ARP绑定、DAI、ARP报文限速和ARP表项严格学习都是常用的ARP安全防护手段，可以从不同角度防止ARP欺骗与ARP泛洪。"
  },
  {
    "id": "PH084",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping绑定表项中包含的信息不包括：",
    "options": [
      "客户端的MAC地址",
      "客户端获取的IP地址",
      "VLAN ID与入接口",
      "客户端CPU占用率"
    ],
    "answer": "D",
    "explain": "绑定表记录MAC、IP、VLAN、接口以及租期等信息，用于IPSG和DAI的校验。客户端CPU占用率不属于绑定表内容。"
  },
  {
    "id": "PH085",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在华为设备上使能DHCP Snooping功能的命令是：",
    "options": [
      "dhcp snooping enable（系统视图）",
      "dhcp enable",
      "dhcp snooping trusted",
      "ip source check user-bind enable"
    ],
    "answer": "A",
    "explain": "系统视图下执行dhcp snooping enable开启DHCP Snooping功能；dhcp enable是开启DHCP服务，ip source check user-bind enable是开启IP地址检查（IPSG）功能。"
  },
  {
    "id": "PH086",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "某公司要求：办公终端必须使用公司DHCP分配的地址，私自配置静态IP的终端不能上网。实现该需求最合适的功能是：",
    "options": [
      "Voice VLAN",
      "IP Source Guard（IPSG），基于DHCP Snooping绑定表校验源IP与源MAC",
      "GVRP",
      "QinQ"
    ],
    "answer": "B",
    "explain": "IPSG要求报文源IP/MAC必须与DHCP Snooping绑定表一致，私自配置静态IP的终端因无绑定表匹配而被丢弃，从而强制终端使用DHCP。"
  },
  {
    "id": "PH087",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping功能只能在二层接入设备上部署，不能在作为网关的三层设备上部署。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "DHCP Snooping可以在二层接入设备上部署，也可以在承担网关角色的三层设备上部署（网关常作为DHCP中继或服务器）。部署位置取决于组网与防护需求。"
  },
  {
    "id": "PH088",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "当DHCP Snooping设备收到非信任端口发来的DHCP Discover广播报文时，其处理方式是：",
    "options": [
      "直接丢弃该报文",
      "修改giaddr后转发",
      "正常转发给信任端口方向（如上游DHCP服务器），同时记录客户端信息",
      "把报文转换为ARP请求"
    ],
    "answer": "C",
    "explain": "非信任端口只允许客户端请求类报文通过，Discover/Request等请求报文会被正常转发到信任端口方向，Snooping据此记录绑定信息。被丢弃的是服务器应答类报文。"
  },
  {
    "id": "PH089",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于DHCP Option 43与Option 82的区别，下列描述正确的有：（多选）",
    "options": [
      "Option 43用于向AP等设备下发厂商特定信息，如AC的IP地址",
      "Option 82用于DHCP中继/Snooping向服务器传递客户端位置信息",
      "Option 43通常出现在服务器给客户端的应答报文中",
      "Option 82由客户端在请求报文中填写"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "Option 43承载厂商特定信息（如AC地址），由服务器下发；Option 82由中继或Snooping设备插入，用于标识客户端的位置。Option 82不是客户端填写的，故D错误。"
  },
  {
    "id": "PH090",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在DHCP Snooping环境中，如果接入端口下连接的是另一个DHCP Snooping设备或合法DHCP中继，则该接口应：",
    "options": [
      "根据其上游是否为合法DHCP服务器/中继方向，将其配置为信任端口",
      "必须保持非信任状态",
      "配置为镜像端口",
      "配置为黑洞端口"
    ],
    "answer": "A",
    "explain": "信任端口的判断标准是报文来源是否可信。面向合法DHCP服务器或合法中继方向的接口应配置为信任端口，否则应答报文会被丢弃，客户端无法获取地址。"
  },
  {
    "id": "PH091",
    "type": "fill",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP协议中，用于在AP上线场景下向AP下发AC地址的选项是Option ______。",
    "options": [],
    "answer": [
      "43"
    ],
    "explain": "Option 43是厂商特定信息选项，华为WLAN中常用于向AP下发AC的IP地址列表，使AP获取地址后能够找到并连接AC。"
  },
  {
    "id": "PH092",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "下列关于DHCP中继与DHCP Snooping在报文处理上的关系，说法正确的是：",
    "options": [
      "二者可以同时部署：Snooping负责安全过滤与绑定表生成，中继负责跨网段转发DHCP报文",
      "二者功能完全冲突，不能同时部署",
      "部署Snooping后必须关闭中继",
      "中继会自动替代Snooping生成绑定表"
    ],
    "answer": "A",
    "explain": "DHCP中继解决跨网段转发问题，DHCP Snooping解决安全与绑定表问题，二者职责不同且可共存。三层设备常同时作为中继和Snooping部署点。"
  },
  {
    "id": "PH093",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在DHCP Snooping场景中，如果客户端配置了静态IP地址，则DAI和IPSG无法对该客户端进行校验，必须手工配置静态绑定表项。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "静态IP客户端不会触发DHCP交互，因而没有动态绑定表项，DAI/IPSG会因找不到匹配表项而丢弃其报文。此时需手工配置静态绑定表项才能使其正常通信。"
  },
  {
    "id": "PH094",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Relay（中继）能够跨网段工作的根本原因是：",
    "options": [
      "中继把客户端的MAC地址改为自己的MAC",
      "中继为客户端提供NAT转换",
      "中继把DHCP报文封装为VLAN标签",
      "中继将客户端的广播请求转为单播发往服务器，并通过giaddr告知服务器客户端所在网段"
    ],
    "answer": "D",
    "explain": "DHCP广播报文无法跨越三层网段，中继将其转为单播发往服务器，并在giaddr中填写客户端侧接口地址，使服务器从相应地址池分配地址。中继不修改客户端MAC。"
  },
  {
    "id": "PH095",
    "type": "multi",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "排查客户端无法获取IP地址的问题时，可以采取的步骤有：（多选）",
    "options": [
      "检查DHCP服务器地址池是否耗尽或配置是否正确",
      "检查DHCP中继配置及giaddr是否正确、到服务器的路由是否可达",
      "检查DHCP Snooping信任端口配置是否正确",
      "检查客户端网卡是否被设置为全双工"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "地址池、中继配置与路由、Snooping信任端口都是导致DHCP获取失败的常见原因。全双工/半双工设置一般不会导致DHCP获取失败，不属于排查要点。"
  },
  {
    "id": "PH096",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "某办公网内主机频繁出现IP地址冲突告警，经排查发现部分终端手工配置了与DHCP地址池重叠的静态IP。除调整地址池外，最有效的技术手段是：",
    "options": [
      "部署IPSG，禁止未在绑定表中的源IP报文通过，并开启DHCP服务器的地址冲突检测",
      "开启GVRP",
      "部署Voice VLAN",
      "把交换机接口配置为dot1q-tunnel"
    ],
    "answer": "A",
    "explain": "IPSG可以阻止私设静态IP的终端通信，配合服务器侧地址冲突检测可避免把已占用的地址分配出去，从根本上减少地址冲突。其余功能与IP地址管理无关。"
  },
  {
    "id": "PH097",
    "type": "judge",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "DHCP Snooping信任端口只在收到DHCP应答报文时才起作用，对客户端请求报文没有任何影响。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "信任端口与非信任端口的区别是双向的：非信任端口会丢弃服务器应答报文，同时信任端口方向的请求报文转发也参与绑定表生成。该说法过于绝对，故错误。"
  },
  {
    "id": "PH098",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "关于DHCP Snooping绑定表与DAI的联动，下列说法正确的是：",
    "options": [
      "DAI会修改绑定表内容",
      "DAI只能检查ARP请求报文，不能检查ARP应答报文",
      "DAI工作在网络层，与绑定表无关",
      "DAI在接口上检查ARP报文时，会查询绑定表；若报文的源IP与源MAC在绑定表中不匹配，则丢弃该ARP报文"
    ],
    "answer": "D",
    "explain": "DAI依据绑定表对ARP报文的源IP、源MAC进行匹配校验，不匹配即丢弃。它不修改绑定表，且对ARP请求和应答报文均可检查，工作位置在二层接入侧。"
  },
  {
    "id": "PH099",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "某企业希望员工终端只能获得公司内部DNS服务器地址，不允许被私设DHCP服务器篡改DNS配置。部署DHCP Snooping后还需注意：",
    "options": [
      "确保所有用户接入接口均为非信任端口，只有连接合法DHCP服务器的接口为信任端口",
      "把所有接口都配置为信任端口",
      "关闭DHCP中继",
      "把DHCP服务器接口配置为非信任端口"
    ],
    "answer": "A",
    "explain": "防止私设DHCP服务器的关键是端口信任状态的正确划分：用户接入接口为非信任端口，合法服务器方向为信任端口。若全部配置为信任端口，则防护失效。"
  },
  {
    "id": "PH100",
    "type": "single",
    "chapter": "DHCP高级与IP地址管理",
    "stem": "在设备上查看DHCP地址池的使用情况（已分配地址数、剩余地址数等），最合适的命令是：",
    "options": [
      "display dhcp snooping binding",
      "display ip pool（或 display ip pool name <池名>）",
      "display arp all",
      "display vlan"
    ],
    "answer": "B",
    "explain": "display ip pool可查看地址池的网段、已用/闲置地址数量及具体地址分配状态，是排查地址池耗尽问题的关键命令。其余命令分别用于查看绑定表、ARP表和VLAN信息。"
  }
];