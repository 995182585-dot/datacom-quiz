window.BANK_HCIA_B = [
  {
    "id": "HB001",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "在华为设备上配置单臂路由实现VLAN间通信时，路由器子接口下必须配置的命令是？",
    "options": [
      "encapsulation dot1q 10",
      "dot1q termination vid 10",
      "vlan-type dot1q 10",
      "port link-type trunk"
    ],
    "answer": "B",
    "explain": "华为VRP设备在以太网子接口上使用 dot1q termination vid 命令终结指定VLAN的报文，使子接口成为该VLAN的网关。encapsulation dot1q 是Cisco设备的写法，华为设备不支持。"
  },
  {
    "id": "HB002",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "配置单臂路由时，在路由器子接口下配置完 dot1q termination vid 后，通常还需要配置下列哪条命令才能正常转发广播或组播报文？",
    "options": [
      "arp proxy enable",
      "arp learning enable",
      "arp broadcast enable",
      "arp static enable"
    ],
    "answer": "C",
    "explain": "子接口默认不处理广播报文，导致无法响应ARP请求，因此必须配置 arp broadcast enable 使子接口能够转发广播报文并学习ARP。没有该命令，终端无法解析网关MAC地址，VLAN间通信会失败。"
  },
  {
    "id": "HB003",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "三层交换机上创建VLAN 10并配置其网关地址，正确的命令组合是？",
    "options": [
      "interface Vlanif 10 下配置 vlan 10 和 ip address",
      "vlan batch 10，然后 interface GigabitEthernet0/0/1 下配置 ip address",
      "只需 interface Vlanif 10 下配置 ip address，无需创建VLAN",
      "vlan batch 10，然后 interface Vlanif 10 下配置 ip address"
    ],
    "answer": "D",
    "explain": "三层交换机实现VLAN间路由依赖VLANIF接口，必须先用 vlan batch 批量创建VLAN，再进入 interface Vlanif 10 配置IP地址作为该VLAN网关。若VLAN未创建，VLANIF接口协议状态无法UP。"
  },
  {
    "id": "HB004",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "关于三层交换机VLANIF接口的说法，正确的是？",
    "options": [
      "VLANIF接口的物理状态取决于该VLAN内是否存在处于UP状态的成员端口",
      "VLANIF接口是物理接口，可以配置为Trunk类型",
      "VLANIF接口不需要配置IP地址即可实现VLAN间路由",
      "一个VLANIF接口可以同时作为多个VLAN的网关"
    ],
    "answer": "A",
    "explain": "VLANIF是逻辑接口，其Protocol状态依赖VLAN内至少有一个成员端口处于UP状态。VLANIF不能配置链路类型，也不能同时承载多个VLAN的网关功能。"
  },
  {
    "id": "HB005",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "单臂路由相比三层交换机VLANIF实现的VLAN间路由，其缺点包括？",
    "options": [
      "不同VLAN间流量都经过同一条物理链路，容易成为带宽瓶颈",
      "转发依赖路由器软件处理，性能相对较低",
      "一旦该物理链路故障，所有VLAN间通信都会中断",
      "无法支持VLAN间的ARP解析"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "单臂路由把所有VLAN间的流量都汇聚到同一条物理链路上，容易形成带宽瓶颈和单点故障，且转发依赖路由器处理，性能低于三层交换机的硬件转发。单臂路由本身可以正常进行ARP解析。"
  },
  {
    "id": "HB006",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "路由器与交换机相连的接口需要承载多个VLAN的报文，交换机侧该接口应配置为哪种链路类型？",
    "options": [
      "Access",
      "Hybrid且必须不带标签",
      "Trunk",
      "不需要配置，默认即可"
    ],
    "answer": "C",
    "explain": "单臂路由场景中，交换机连接路由器的接口需通过Trunk链路传输多个VLAN的带标签报文。路由器子接口根据dot1q termination vid剥离对应VLAN标签后进行三层转发。"
  },
  {
    "id": "HB007",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "下列哪些方式可以实现VLAN间的三层互通？",
    "options": [
      "在二层交换机上增加VLAN数量",
      "在路由器上配置单臂路由（子接口）",
      "在三层交换机上配置VLANIF接口",
      "在三层交换机上配置VLAN聚合（Super VLAN）"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "VLAN间通信本质是三层转发，可通过路由器子接口（单臂路由）、三层交换机VLANIF以及VLAN聚合等方式实现。单纯增加二层交换机的VLAN数量只能增加广播域，并不能实现VLAN间互通。"
  },
  {
    "id": "HB008",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "配置单臂路由时，在路由器子接口 GigabitEthernet0/0/0.10 下通常需要执行的操作包括？",
    "options": [
      "配置 dot1q termination vid 10",
      "配置 arp broadcast enable",
      "配置该子接口的IP地址作为VLAN 10的网关",
      "配置该子接口的链路类型为Access"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "子接口需要终结VLAN标签（dot1q termination vid）、使能ARP广播（arp broadcast enable）并配置网关IP地址。子接口是逻辑接口，不存在Access/Trunk链路类型的概念。"
  },
  {
    "id": "HB009",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "在三层交换机上，即使没有创建对应的 VLAN，VLANIF 接口也能正常工作。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。VLANIF 接口属于某个 VLAN，只有该 VLAN 已创建且其内存在 UP 状态的成员端口时，VLANIF 的协议状态才能 UP。因此必须先创建 VLAN（如 vlan batch），再配置 VLANIF 的 IP 地址。"
  },
  {
    "id": "HB010",
    "type": "judge",
    "chapter": "VLAN间路由",
    "stem": "配置单臂路由时，路由器子接口只需配置IP地址即可，不需要配置任何VLAN封装相关命令。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "子接口必须通过 dot1q termination vid 指定其终结的VLAN标签，否则无法识别和处理带标签的报文。同时还需配置 arp broadcast enable 以便正常解析ARP。"
  },
  {
    "id": "HB011",
    "type": "fill",
    "chapter": "VLAN间路由",
    "stem": "在华为路由器子接口下，用于使能ARP广播功能的命令是 arp ______ enable。",
    "options": [],
    "answer": [
      "broadcast"
    ],
    "explain": "子接口默认丢弃广播报文，配置 arp broadcast enable 后子接口可以转发广播报文，从而能够响应终端的ARP请求。这是单臂路由能正常工作的必要配置。"
  },
  {
    "id": "HB012",
    "type": "single",
    "chapter": "VLAN间路由",
    "stem": "某公司使用三层交换机作为核心，创建了VLAN 10（192.168.10.0/24）和VLAN 20（192.168.20.0/24），并分别配置了VLANIF 10和VLANIF 20的IP地址。若两个VLAN内的主机网关配置正确，则它们之间的通信？",
    "options": [
      "必须额外配置静态路由才能互通",
      "可以通过三层交换机直接路由互通",
      "必须配置ACL才能互通",
      "无法互通，需要增加路由器"
    ],
    "answer": "B",
    "explain": "三层交换机为每个VLAN配置VLANIF接口后，会自动生成直连网段路由，两个网段的主机只要网关正确即可直接三层互通。无需再配置静态路由或额外设备。"
  },
  {
    "id": "HB013",
    "type": "multi",
    "chapter": "VLAN间路由",
    "stem": "与传统单臂路由相比，使用三层交换机VLANIF实现VLAN间路由的优点包括？",
    "options": [
      "不再需要为终端配置网关地址",
      "转发性能高，由硬件完成三层转发",
      "不需要额外的路由器设备，节省成本",
      "不受单条物理链路带宽瓶颈的限制"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "三层交换机通过ASIC硬件实现线速三层转发，性能远高于依靠路由器软件转发的单臂路由，同时也节省了设备并避免单链路瓶颈。无论采用哪种方式，终端都必须配置正确的网关地址。"
  },
  {
    "id": "HB014",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "华为设备上，基本ACL的编号范围是？",
    "options": [
      "3000～3999",
      "4000～4999",
      "5000～5999",
      "2000～2999"
    ],
    "answer": "D",
    "explain": "华为VRP中基本ACL编号范围为2000～2999，只能基于源IP地址、VPN实例、分片信息等进行匹配。3000～3999为高级ACL，4000～4999为二层ACL，5000～5999为用户自定义ACL。"
  },
  {
    "id": "HB015",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在华为设备上创建基本ACL 2000并配置允许源网段192.168.1.0/24的规则，完整命令为 acl 2000 后执行 rule 5 permit ______ 192.168.1.0 0.0.0.255。",
    "options": [],
    "answer": [
      "source"
    ],
    "explain": "基本ACL只能匹配源IP地址，规则中通过 source 关键字指定源地址和通配符掩码。地址后必须使用通配符掩码而非子网掩码，且基本ACL不能指定协议类型。"
  },
  {
    "id": "HB016",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "华为设备上ACL规则的匹配顺序是？",
    "options": [
      "自上而下逐条匹配，首次命中即执行相应动作并停止匹配",
      "自下而上逐条匹配",
      "所有规则全部匹配后再决定动作",
      "按规则的复杂程度优先匹配"
    ],
    "answer": "A",
    "explain": "ACL中的规则按序号从小到大、自上而下依次匹配，报文一旦命中某条规则即执行其permit或deny动作，不再继续匹配后面的规则。若所有规则都未命中，则匹配末尾的隐式deny。"
  },
  {
    "id": "HB017",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "下列关于华为ACL分类的描述，正确的有？",
    "options": [
      "基本ACL编号范围2000～2999，只能匹配源IP地址",
      "高级ACL编号范围3000～3999，可匹配协议、源/目的IP和端口",
      "二层ACL编号范围4000～4999，可匹配源/目的MAC地址",
      "用户自定义ACL编号范围6000～6999"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "华为ACL分为基本ACL（2000～2999）、高级ACL（3000～3999）、二层ACL（4000～4999）和用户自定义ACL（5000～5999）。6000～6999不是用户自定义ACL的编号范围。"
  },
  {
    "id": "HB018",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于静态NAT，下列说法正确的有？",
    "options": [
      "能够显著节省公网IP地址数量",
      "实现内部私有地址与公网地址的一对一固定映射",
      "常用命令形式为 nat static global ... inside ...",
      "便于外网主机主动访问内网中的特定服务器"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "静态NAT建立私有地址与公网地址的一对一固定映射，配置命令形如 nat static global ... inside ...，常用于让外网主动访问内网服务器。由于每个内网地址都占用一个公网地址，它并不节省公网地址。"
  },
  {
    "id": "HB019",
    "type": "single",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在接口上配置Easy IP，使内网主机复用该接口的公网地址访问Internet，正确命令是？",
    "options": [
      "nat server 2000",
      "nat outbound 2000",
      "nat static outbound 2000",
      "nat address-group 2000"
    ],
    "answer": "B",
    "explain": "Easy IP通过 nat outbound acl-number 命令实现，直接使用接口的IP地址作为转换后的地址，无需额外配置地址池。适用于接口通过DHCP或PPPoE动态获取公网地址的场景。"
  },
  {
    "id": "HB020",
    "type": "multi",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "关于NAPT（网络地址端口转换），下列说法正确的有？",
    "options": [
      "同时转换IP地址和传输层端口号",
      "可以使多个内部主机共用一个公网IP地址",
      "通过端口号区分不同内部主机的会话",
      "只能实现一对一地址映射"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "NAPT在转换IP地址的同时转换TCP/UDP端口号，利用端口号区分不同会话，从而实现大量内网主机共用少量公网地址。一对一映射是静态NAT的特点，不是NAPT。"
  },
  {
    "id": "HB021",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "NAPT 只转换 IP 地址而不转换端口号，因此每个内部主机都必须独占一个公网 IP。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。NAPT（网络地址端口转换）在修改 IP 地址的同时还会修改 TCP/UDP 端口号，通过端口号区分不同内网主机的会话，从而让大量内网主机共用少量公网地址。Easy IP 就是 NAPT 的一种典型应用。"
  },
  {
    "id": "HB022",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在华为ACL中，通配符掩码某一位为0表示该位必须严格匹配，为1表示该位可以忽略。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "ACL通配符掩码的规则是：比特位为0表示对应位必须匹配，为1表示忽略该位。例如 0.0.0.255 表示前24位必须匹配、后8位任意，可用于匹配一个/24网段。"
  },
  {
    "id": "HB023",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "基本 ACL 既可以匹配源 IP 地址，也可以匹配目的 IP 地址和端口号。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。基本 ACL（编号 2000～2999）只能匹配源 IP 地址、分片信息、VPN 实例等有限元素，不能匹配目的 IP 和端口号。若需要匹配目的 IP、协议或端口，必须使用高级 ACL（3000～3999）。"
  },
  {
    "id": "HB024",
    "type": "judge",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "ACL规则匹配时，如果报文没有命中任何一条已配置的规则，则会被ACL末尾的隐式规则丢弃。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "华为ACL末尾存在隐式的 deny 规则，未命中任何显式规则的报文将被丢弃。因此在接口下调用了ACL时，需确保放行的流量被显式permit，否则可能造成业务中断。"
  },
  {
    "id": "HB025",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在华为设备上查看当前所有NAT会话信息的命令是 display nat ______ all。",
    "options": [],
    "answer": [
      "session"
    ],
    "explain": "display nat session all 可以查看当前设备上所有NAT会话的详细信息，包括源/目的地址和端口转换前后的对应关系，是排查NAT问题最常用的命令。"
  },
  {
    "id": "HB026",
    "type": "fill",
    "chapter": "ACL与网络地址转换NAT",
    "stem": "在接口视图下应用ACL过滤入方向报文的命令是 traffic-filter ______ acl 2000。",
    "options": [],
    "answer": [
      "inbound"
    ],
    "explain": "traffic-filter inbound acl 2000 表示对进入该接口的报文按ACL 2000的规则进行过滤。outbound则用于过滤从该接口发出的报文。"
  },
  {
    "id": "HB027",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端首次获取IP地址时，交互的报文顺序是？",
    "options": [
      "Offer → Discover → Request → Ack",
      "Discover → Request → Offer → Ack",
      "Discover → Offer → Request → Ack",
      "Request → Offer → Discover → Ack"
    ],
    "answer": "C",
    "explain": "DHCP采用DORA四步交互：客户端广播Discover发现服务器，服务器回应Offer提供地址，客户端广播Request请求该地址，服务器最终以Ack确认。完成四步后客户端才能使用分配的地址。"
  },
  {
    "id": "HB028",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP服务端和客户端使用的UDP端口号分别是？",
    "options": [
      "服务端67，客户端68",
      "服务端68，客户端67",
      "服务端53，客户端54",
      "服务端69，客户端70"
    ],
    "answer": "A",
    "explain": "DHCP基于UDP传输，服务器监听UDP 67端口，客户端使用UDP 68端口。这是DHCP的标准端口分配，与TFTP的69端口、DNS的53端口不同。"
  },
  {
    "id": "HB029",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备上配置DHCP服务器时，下列命令或步骤正确的有？",
    "options": [
      "在地址池视图下用 ip address 指定网段",
      "在系统视图下执行 dhcp enable 使能DHCP功能",
      "使用 ip pool pool1 创建全局地址池",
      "在地址池视图下用 network 192.168.1.0 mask 255.255.255.0 指定可分配网段"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "配置DHCP服务器需先执行 dhcp enable，再通过 ip pool 创建地址池并用 network 命令指定网段。地址池视图下使用 network 而非 ip address 来指定可分配的地址范围。"
  },
  {
    "id": "HB030",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "在DHCP地址池视图下，用于配置分配给客户端的网关地址的命令是？",
    "options": [
      "ip gateway 192.168.1.1",
      "default-gateway 192.168.1.1",
      "gateway 192.168.1.1",
      "gateway-list 192.168.1.1"
    ],
    "answer": "D",
    "explain": "华为设备在地址池视图下使用 gateway-list 命令指定分配给客户端的默认网关地址。dns-list 用于指定DNS服务器地址，lease 用于指定租期。"
  },
  {
    "id": "HB031",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "配置DHCP中继时，下列描述正确的有？",
    "options": [
      "在连接客户端的接口下配置 dhcp select relay 使接口以中继方式工作",
      "需要指定DHCP服务器地址，如 dhcp relay server-ip 10.1.1.1",
      "中继设备会填充报文的giaddr字段，以便服务器选择正确的地址池",
      "中继设备必须与DHCP服务器处于同一个广播域"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "DHCP中继通过 dhcp select relay 和 dhcp relay server-ip 配置，中继会在转发的报文中填入giaddr（网关地址），服务器据此判断应分配哪个网段的地址。DHCP中继的意义正在于让客户端与服务器跨网段部署，二者无需处于同一广播域。"
  },
  {
    "id": "HB032",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DNS默认使用的服务端口号是？",
    "options": [
      "67",
      "53",
      "69",
      "123"
    ],
    "answer": "B",
    "explain": "DNS服务默认使用UDP/TCP的53端口进行域名解析。67是DHCP服务器端口，69是TFTP端口，123是NTP端口。"
  },
  {
    "id": "HB033",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DNS中用于将域名映射为IPv4地址的记录类型是？",
    "options": [
      "AAAA记录",
      "CNAME记录",
      "A记录",
      "MX记录"
    ],
    "answer": "C",
    "explain": "A记录用于将域名解析为IPv4地址，AAAA记录解析为IPv6地址，CNAME为别名记录，MX为邮件交换记录，NS为域名服务器记录，PTR用于反向解析。"
  },
  {
    "id": "HB034",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备上使能DNS解析功能并指定DNS服务器，正确的命令是？",
    "options": [
      "dns enable，然后在接口视图下 dns server 8.8.8.8",
      "只需 dns server 8.8.8.8，无需其他命令",
      "dns lookup 8.8.8.8",
      "dns resolve，然后在系统视图下 dns server 8.8.8.8"
    ],
    "answer": "D",
    "explain": "华为设备需先在系统视图执行 dns resolve 使能动态域名解析功能，再通过 dns server 命令指定DNS服务器地址。配置完成后设备才能将域名解析为IP地址。"
  },
  {
    "id": "HB035",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "DHCP地址池中可以配置下发的参数包括？",
    "options": [
      "客户端的MAC地址表项",
      "网关地址（gateway-list）",
      "DNS服务器地址（dns-list）",
      "租期（lease）"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "DHCP地址池可配置下发网关地址、DNS服务器地址、租期、WINS服务器等网络参数。客户端MAC地址表项属于交换机二层转发表内容，不是DHCP下发的参数。"
  },
  {
    "id": "HB036",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "关于DHCP的说法，正确的有？",
    "options": [
      "DHCP基于UDP协议传输",
      "客户端首次获取IP地址时使用广播方式发送Discover报文",
      "DHCP可以实现IP地址的集中管理和自动分配",
      "DHCP服务器与客户端之间使用TCP建立连接"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "DHCP基于UDP，客户端首次请求时因尚无IP地址，只能以广播方式发送Discover。DHCP实现了地址的自动分配与集中管理，但它不建立TCP连接。"
  },
  {
    "id": "HB037",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端在首次获取IP地址时，由于尚无IP地址，只能使用广播方式发送Discover报文。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "客户端在首次请求时没有可用的IP地址，无法进行单播通信，因此Discover报文以广播方式发送（源地址0.0.0.0，目的地址255.255.255.255）。在续租阶段客户端已有地址，才可以使用单播。"
  },
  {
    "id": "HB038",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "DNS的递归查询是指客户端向本地域名服务器发出请求后，由本地域名服务器代替客户端完成后续的全部查询过程并返回最终结果。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "递归查询中，本地域名服务器负责替客户端完成全部查询工作，最终返回解析结果，客户端只发出一次请求。而迭代查询中，服务器只返回下一级服务器的地址，由请求方继续查询。"
  },
  {
    "id": "HB039",
    "type": "fill",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备的DHCP地址池视图下，配置租期为3天的命令是 lease day ______。",
    "options": [],
    "answer": [
      "3"
    ],
    "explain": "lease day 3 表示将地址池的IP地址租期设置为3天。也可以使用 lease day 3 hour 12 等形式精确指定租期，默认租期为1天。"
  },
  {
    "id": "HB040",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "PPP协议工作在三层，其建立链路的过程依次经历哪三个阶段？",
    "options": [
      "LCP协商 → 认证 → NCP协商",
      "认证 → LCP协商 → NCP协商",
      "NCP协商 → LCP协商 → 认证",
      "LCP协商 → NCP协商 → 认证"
    ],
    "answer": "A",
    "explain": "PPP链路建立分为三个阶段：首先进行LCP协商，完成链路层参数的建立与配置；然后进行认证（PAP或CHAP）；认证通过后进行NCP协商，为上层网络协议（如IP）协商参数，链路才能承载数据。"
  },
  {
    "id": "HB041",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "关于PAP认证的特点，下列说法正确的是？",
    "options": [
      "三次握手，密码经过MD5加密",
      "两次握手，密码经过加密传输",
      "两次握手，密码以明文方式在链路上传输",
      "三次握手，不传输密码"
    ],
    "answer": "C",
    "explain": "PAP为两次握手认证：被认证方直接发送用户名和明文密码，认证方比对后返回接受或拒绝。由于密码明文传输，安全性较低，不适合对安全要求较高的链路。"
  },
  {
    "id": "HB042",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "关于CHAP认证的特点，下列说法正确的是？",
    "options": [
      "两次握手，密码明文传输",
      "三次握手，使用MD5算法校验，链路上不传输密码",
      "三次握手，密码明文传输",
      "两次握手，不传输用户名"
    ],
    "answer": "B",
    "explain": "CHAP为三次握手认证：认证方发送随机挑战值，被认证方用密码和挑战值经MD5计算出摘要回送，认证方本地做同样运算并比对。密码本身从不在链路上传输，安全性高于PAP。"
  },
  {
    "id": "HB043",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "华为路由器串口默认封装的链路层协议是HDLC，但该实现为华为私有版本，与其他厂商的HDLC不兼容。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "华为路由器串口默认封装HDLC，但华为的HDLC是私有实现，与Cisco等厂商的HDLC无法互通。若需与其他厂商设备对接或使用认证功能，应将接口封装改为PPP。"
  },
  {
    "id": "HB044",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "将串口Serial0/0/0的链路层协议改为PPP，正确命令是？",
    "options": [
      "在系统视图下执行 ppp enable",
      "在接口视图下执行 encapsulation ppp",
      "在接口视图下执行 protocol ppp",
      "在接口视图下执行 link-protocol ppp"
    ],
    "answer": "D",
    "explain": "华为VRP在接口视图下使用 link-protocol ppp 命令将接口的链路层封装改为PPP。encapsulation ppp 是其他厂商设备的语法。"
  },
  {
    "id": "HB045",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "在PPP链路上，由认证方（服务端）配置的CHAP认证命令是？",
    "options": [
      "ppp authentication-mode chap",
      "ppp chap user huawei",
      "ppp chap password cipher huawei",
      "ppp pap local-user huawei password cipher huawei"
    ],
    "answer": "A",
    "explain": "认证方在接口下使用 ppp authentication-mode chap 指定采用CHAP方式认证对端。ppp chap user 和 ppp chap password 则由被认证方配置，用于提供认证所需的用户名和密码。"
  },
  {
    "id": "HB046",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "在PAP认证场景中，被认证方（客户端）配置本地用户名和密码的命令是？",
    "options": [
      "ppp authentication-mode pap",
      "ppp pap local-user huawei password cipher huawei123",
      "ppp chap user huawei",
      "local-user huawei password cipher huawei123"
    ],
    "answer": "B",
    "explain": "PAP被认证方使用 ppp pap local-user 指定发送给认证方的用户名和密码。认证方则配置 ppp authentication-mode pap 并在AAA中创建对应的本地用户。"
  },
  {
    "id": "HB047",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "关于PPP与HDLC的比较，下列说法正确的有？",
    "options": [
      "PPP只能承载IP协议，HDLC可承载多种协议",
      "PPP支持认证功能，HDLC不支持",
      "PPP支持多种网络层协议并可进行协商，HDLC不具备协商机制",
      "PPP是国际标准协议，HDLC在华为设备上为私有实现"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "PPP通过LCP和NCP实现链路参数及网络层参数的协商，并支持PAP/CHAP认证，是国际标准协议。华为的HDLC为私有实现，无认证和协商机制，且不兼容其他厂商的HDLC。"
  },
  {
    "id": "HB048",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "下列关于PPP认证的说法，正确的有？",
    "options": [
      "PAP认证为两次握手，密码以明文方式传输",
      "CHAP认证为三次握手，使用MD5计算摘要，链路上不传输密码",
      "认证方通过 ppp authentication-mode 命令指定认证方式",
      "PPP链路建立的过程中，认证阶段在NCP协商之后进行"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "PAP为两次握手且密码明文传输，CHAP为三次握手并通过MD5摘要校验而不传输密码，认证方使用 ppp authentication-mode 指定认证方式。PPP的三个阶段顺序为LCP协商、认证、NCP协商，认证在NCP之前。"
  },
  {
    "id": "HB049",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "下列属于PPP所包含协议的有？",
    "options": [
      "LCP（链路控制协议）",
      "PAP（口令认证协议）",
      "CHAP（挑战握手认证协议）",
      "NCP（网络控制协议）"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "PPP协议族包含LCP用于链路建立与参数协商、PAP和CHAP用于认证、NCP（如IPCP）用于网络层协议参数协商。它们共同构成PPP完整的链路建立和维护机制。"
  },
  {
    "id": "HB050",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "PPP协议工作在网络层，因此可以直接为上层应用提供数据传输服务。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "PPP是数据链路层（二层）协议，负责在点对点链路上封装和传输网络层报文，本身并不工作在网络层。它通过NCP为IP等网络层协议协商参数后承载其报文。"
  },
  {
    "id": "HB051",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "CHAP认证过程中，密码会以密文形式在链路上传输给认证方。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "CHAP采用三次握手，认证方发送随机挑战值，被认证方用MD5对挑战值和密码计算摘要后回送的是摘要值而非密码本身。密码始终不在链路上传输，因此比PAP安全。"
  },
  {
    "id": "HB052",
    "type": "fill",
    "chapter": "广域网与PPP",
    "stem": "在华为路由器的串口视图下，将链路层封装协议由默认的 HDLC 改为支持认证的协议，应执行 link-protocol ______。",
    "options": [],
    "answer": [
      "ppp",
      "PPP"
    ],
    "explain": "link-protocol ppp 命令用于把接口的链路层封装协议改为PPP。串口默认封装为HDLC，如需认证或与其他厂商设备互通时应改为PPP。"
  },
  {
    "id": "HB053",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6地址的长度是多少位？",
    "options": [
      "64位",
      "32位",
      "128位",
      "256位"
    ],
    "answer": "C",
    "explain": "IPv6地址长度为128位，通常写成8组、每组4位十六进制数的形式。相比IPv4的32位，IPv6地址空间极大扩展，从根本上解决了地址枯竭问题。"
  },
  {
    "id": "HB054",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "关于IPv6地址中双冒号\"::\"的使用，下列说法正确的是？",
    "options": [
      "一个IPv6地址中只能出现一次，用于压缩连续的全0字段",
      "可以出现多次，压缩任意位置的0",
      "只能压缩前导0，不能压缩连续字段",
      "不能使用，必须写全8组"
    ],
    "answer": "A",
    "explain": "双冒号\"::\"用于压缩地址中连续的一段全0字段，但在一个IPv6地址中只能出现一次，否则无法唯一还原地址。此外，每组中的前导0可以省略，但不可省略全0组。"
  },
  {
    "id": "HB055",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6地址类型中不包括下列哪一种？",
    "options": [
      "单播地址",
      "组播地址",
      "任播地址",
      "广播地址"
    ],
    "answer": "D",
    "explain": "IPv6取消了广播（Broadcast）地址，取而代之的是组播地址，用于向一组接口发送数据。IPv6地址分为单播、组播和任播三种类型，组播可以覆盖原广播的功能。"
  },
  {
    "id": "HB056",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6 地址中，仅在本地链路上有效、用于邻居发现和无状态自动配置的地址，其前缀长度表示为？",
    "options": [
      "ff00::/8",
      "fe80::/10",
      "2000::/3",
      "fc00::/7"
    ],
    "answer": "B",
    "explain": "链路本地地址前缀为fe80::/10，仅在本地链路上有效，用于邻居发现、无状态自动配置等。ff00::/8为组播地址，2000::/3为全球单播地址，fc00::/7为唯一本地地址。"
  },
  {
    "id": "HB057",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6中用于请求配置信息、代表\"所有路由器\"的组播地址是？",
    "options": [
      "ff02::1",
      "ff02::1:2",
      "ff02::2",
      "ff05::1"
    ],
    "answer": "C",
    "explain": "ff02::1表示链路上所有节点，ff02::2表示链路上所有路由器，ff02::1:2表示所有DHCPv6服务器和中继代理。路由器发送的RA报文目的地址即为ff02::1。"
  },
  {
    "id": "HB058",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6基本报头固定为40字节，其中取消了校验和字段，改由上层协议负责校验。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "IPv6基本报头固定40字节，字段精简为8个，取消了首部校验和和分片相关字段，校验工作交由上层协议（如TCP/UDP）完成，从而减轻路由器处理负担、提高转发效率。"
  },
  {
    "id": "HB059",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6中实现地址解析、替代IPv4中ARP功能的是？",
    "options": [
      "DHCPv6协议",
      "ICMPv4重定向报文",
      "ARP代理",
      "邻居发现协议NDP，通过NS/NA报文实现"
    ],
    "answer": "D",
    "explain": "IPv6使用邻居发现协议（NDP）替代ARP，通过NS（邻居请求）和NA（邻居通告）报文实现地址解析，通过RS和RA实现路由器发现与前缀通告，基于ICMPv6实现。"
  },
  {
    "id": "HB060",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "EUI-64规范生成IPv6接口标识时，会在MAC地址的什么位置插入FFFE？",
    "options": [
      "在MAC地址中间（第3、4字节之间）插入FFFE，并翻转第7位",
      "在MAC地址末尾追加FFFE",
      "在MAC地址开头插入FFFE，并翻转第1位",
      "在MAC地址中间插入FFFF，不翻转任何位"
    ],
    "answer": "A",
    "explain": "EUI-64规范将48位MAC地址从中间分开，插入FFFE扩展为64位，同时翻转第一个字节的U bit（第7位）。由此生成全球唯一的64位接口标识符，用于SLAAC无状态地址自动配置。"
  },
  {
    "id": "HB061",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "关于IPv6地址的表示方法，下列说法正确的有？",
    "options": [
      "地址由8组4位十六进制数组成",
      "各字段中的前导0可以省略",
      "可以使用双冒号压缩连续的全0字段，且只能出现一次",
      "IPv6地址中必须使用子网掩码而不能使用前缀长度"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "IPv6地址为8组4位十六进制数，可省略前导0并用\"::\"压缩连续全0字段且只允许一次。IPv6使用前缀长度表示网络部分，不再使用点分十进制的子网掩码。"
  },
  {
    "id": "HB062",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "下列属于IPv6地址类型的有？",
    "options": [
      "全球单播地址",
      "链路本地地址",
      "组播地址",
      "任播地址"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "IPv6单播地址包含全球单播地址、链路本地地址、唯一本地地址等，此外还有组播地址和任播地址。任播地址从单播地址空间中分配，标识一组接口，报文只送给最近的一个。"
  },
  {
    "id": "HB063",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6协议中不存在广播地址的概念。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "IPv6取消了广播地址，所有原先依赖广播的场景改由组播实现，例如ff02::1代表链路上所有节点。这样避免了广播风暴，提升链路效率。"
  },
  {
    "id": "HB064",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6中的链路本地地址只能在本地链路上使用，不能被路由器转发到其他链路。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "链路本地地址前缀为fe80::/10，其有效范围仅限本地链路，路由器不会将其转发到其他链路。它主要用于邻居发现、无状态自动配置以及链路内的通信。"
  },
  {
    "id": "HB065",
    "type": "fill",
    "chapter": "IPv6基础",
    "stem": "IPv6中使用______机制可以在没有DHCPv6服务器的情况下，根据路由器通告的前缀自动配置全球单播地址。",
    "options": [],
    "answer": [
      "SLAAC",
      "slaac",
      "无状态地址自动配置"
    ],
    "explain": "SLAAC（无状态地址自动配置）通过接收路由器发送的RA报文获取网络前缀，再结合EUI-64等方式生成的接口标识组合成完整IPv6地址，无需DHCPv6服务器参与。"
  },
  {
    "id": "HB066",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "华为VRP系统中，用户视图下的命令提示符是？",
    "options": [
      "[Huawei]",
      "[Huawei-GigabitEthernet0/0/1]",
      "<Huawei>",
      "<Huawei-GigabitEthernet0/0/1>"
    ],
    "answer": "C",
    "explain": "VRP有三种主要命令视图：用户视图提示符为<Huawei>，系统视图提示符为[Huawei]，接口视图提示符为[Huawei-GigabitEthernet0/0/1]。提示符的变化可以反映当前所处视图。"
  },
  {
    "id": "HB067",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在系统视图下要返回用户视图，可以使用哪条命令？",
    "options": [
      "quit",
      "return 或快捷键 Ctrl+Z",
      "exit",
      "back"
    ],
    "answer": "B",
    "explain": "return 命令或快捷键Ctrl+Z可以直接从任意视图返回到用户视图；quit 命令则是逐级退回到上一级视图。exit 在VRP中并非退出视图的命令。"
  },
  {
    "id": "HB068",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在接口视图下执行 quit 命令后的结果是？",
    "options": [
      "直接返回到用户视图",
      "退出登录",
      "保存配置并退出",
      "返回到系统视图"
    ],
    "answer": "D",
    "explain": "quit 命令的作用是逐级退回上一级视图，从接口视图执行quit将回到系统视图。若要一次性回到用户视图，需要使用return或Ctrl+Z。"
  },
  {
    "id": "HB069",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "华为设备执行 save 命令的作用是？",
    "options": [
      "将当前运行的配置保存到设备存储介质中的配置文件",
      "将配置文件加载到内存中生效",
      "显示当前运行的配置",
      "删除设备中保存的配置文件"
    ],
    "answer": "A",
    "explain": "save 命令将当前内存中运行的配置保存到设备的存储介质（默认保存为vrpcfg.zip），使配置在设备重启后仍然生效。display current-configuration 则是查看当前运行配置。"
  },
  {
    "id": "HB070",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "查看设备当前生效（运行）的配置，应使用哪条命令？",
    "options": [
      "display saved-configuration",
      "display current-configuration",
      "display this",
      "display startup"
    ],
    "answer": "B",
    "explain": "display current-configuration 显示内存中当前正在运行的配置。display saved-configuration 显示保存在存储介质中的配置文件内容，display this 只显示当前视图下的配置。"
  },
  {
    "id": "HB071",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在华为设备上输入命令时，使用Tab键的作用是？",
    "options": [
      "显示帮助信息",
      "删除当前输入",
      "自动补全未输入完整的命令或关键字",
      "切换命令视图"
    ],
    "answer": "C",
    "explain": "Tab键用于命令自动补全，输入命令的前几个字符后按Tab即可补全为完整关键字。问号\"?\"用于显示帮助信息，列出当前可用的命令或参数。"
  },
  {
    "id": "HB072",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "华为设备默认保存配置的文件名是？",
    "options": [
      "vrpcfg.zip",
      "config.txt",
      "startup.cfg",
      "vrp.cfg"
    ],
    "answer": "A",
    "explain": "华为VRP设备执行save命令后，配置文件默认以vrpcfg.zip的名称保存在存储介质中，设备启动时自动加载该文件中的配置。"
  },
  {
    "id": "HB073",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "下列关于VRP命令视图的说法，正确的有？",
    "options": [
      "用户视图下可以执行查看类命令，但不能进行配置",
      "system-view 命令用于从用户视图进入系统视图",
      "接口视图的提示符形如 [Huawei-GigabitEthernet0/0/1]",
      "在任何视图下都可以直接执行所有配置命令"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "用户视图只能执行display等查看类命令，system-view 进入系统视图后才能进行全局配置，接口视图提示符包含接口名。VRP的配置命令有严格的视图限制，不能在任意视图执行。"
  },
  {
    "id": "HB074",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "关于华为设备的配置管理，下列说法正确的有？",
    "options": [
      "save 命令会自动重启设备使配置生效",
      "reset saved-configuration 用于清除设备存储介质中保存的配置文件",
      "display this 用于查看当前视图下的配置",
      "undo 命令用于删除或恢复某项配置到默认状态"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "reset saved-configuration 清除已保存的配置文件，display this 查看当前视图配置，undo 用于取消配置。save 只是保存配置，不会重启设备，重启需要使用 reboot 命令。"
  },
  {
    "id": "HB075",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "在华为VRP中，quit 命令可以一次性从任意视图直接返回到用户视图。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "quit 命令只是逐级退回上一级视图，例如从接口视图退回到系统视图。若要一次性返回到用户视图，应使用 return 命令或快捷键 Ctrl+Z。"
  },
  {
    "id": "HB076",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "华为设备上使用 display saved-configuration 命令可以查看设备下次启动时将要加载的配置内容。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "display saved-configuration 显示保存在存储介质中的配置文件内容，即设备下次启动时加载的配置。它与 display current-configuration 显示的运行配置可能不一致，需要及时save同步。"
  },
  {
    "id": "HB077",
    "type": "fill",
    "chapter": "网络管理与VRP操作",
    "stem": "在用户视图下，使用______命令可以进入系统视图进行全局配置。",
    "options": [],
    "answer": [
      "system-view",
      "system view"
    ],
    "explain": "system-view 命令用于从用户视图进入系统视图，提示符由<Huawei>变为[Huawei]，之后才能执行sysname、interface等全局配置命令。"
  },
  {
    "id": "HB078",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "关于华为设备上 reboot 命令的说法，正确的有？",
    "options": [
      "reboot 用于重启设备，重启后加载已保存的配置文件",
      "若修改配置后未执行 save 就重启，未保存的配置将会丢失",
      "执行 reboot 后设备会提示确认，避免误操作",
      "reboot 会自动将当前运行配置保存到 vrpcfg.zip"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "reboot 命令用于重启设备，重启时加载存储介质中已保存的配置文件。若之前的修改没有通过 save 保存，重启后这些修改会丢失，因此 reboot 并不会自动保存配置。"
  },
  {
    "id": "HB079",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "SSH和Telnet使用的默认端口号分别是？",
    "options": [
      "23和22",
      "21和23",
      "22和80",
      "22和23"
    ],
    "answer": "D",
    "explain": "SSH默认使用TCP 22端口，Telnet默认使用TCP 23端口。SSH对传输数据加密且支持更安全的认证方式，因此在实际组网中推荐使用SSH进行远程管理。"
  },
  {
    "id": "HB080",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "使用Telnet方式远程管理设备比使用SSH方式的主要不足是？",
    "options": [
      "Telnet不能登录设备",
      "Telnet以明文方式传输数据，包括用户名和密码，安全性差",
      "Telnet不支持命令行操作",
      "Telnet占用端口更多"
    ],
    "answer": "B",
    "explain": "Telnet协议的所有报文（包含用户名和密码）均以明文方式在网络中传输，容易被监听和窃取。SSH通过加密和完整性校验保证传输安全，因此生产环境推荐使用SSH。"
  },
  {
    "id": "HB081",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "创建本地用户并设置其用户名为huawei、密码为加密存储的Huawei@123，正确命令是？",
    "options": [
      "local-user huawei password simple Huawei@123",
      "user huawei password cipher Huawei@123",
      "local-user huawei password cipher Huawei@123",
      "local-user huawei cipher password Huawei@123"
    ],
    "answer": "C",
    "explain": "华为设备使用 local-user 命令创建本地用户，password cipher 表示密码以密文形式存储在配置文件中。password simple 则以明文存储，安全性较差。"
  },
  {
    "id": "HB082",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "将本地用户huawei的权限级别设置为最高级15，正确命令是？",
    "options": [
      "local-user huawei priority 15",
      "local-user huawei level 15",
      "local-user huawei super 15",
      "local-user huawei privilege level 15"
    ],
    "answer": "D",
    "explain": "local-user huawei privilege level 15 将用户权限级别设置为15，这是VRP中的最高级别，可执行所有命令。权限级别范围为0～15，级别越高可执行的命令越多。"
  },
  {
    "id": "HB083",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "配置VTY用户界面允许同时最多5个用户登录（VTY 0～4），并采用AAA认证，正确命令是？",
    "options": [
      "user-interface vty 0 4 后执行 authentication-mode aaa",
      "user-interface vty 0 5 后执行 authentication-mode aaa",
      "line vty 0 4 后执行 login aaa",
      "user-interface console 0 后执行 authentication-mode aaa"
    ],
    "answer": "A",
    "explain": "user-interface vty 0 4 表示配置VTY 0到VTY 4共5个虚拟终端线路，authentication-mode aaa 表示采用AAA认证。line vty 和 login 是其他厂商设备的语法。"
  },
  {
    "id": "HB084",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "使用SSH登录设备时通常需要启用的命令以及被指定为SSH服务的用户类型是？",
    "options": [
      "ssh server start，并使用 service-type telnet",
      "telnet server enable，并使用 service-type ssh",
      "stelnet server enable，并使用 local-user huawei service-type ssh 指定服务类型",
      "ssh enable，无需指定service-type"
    ],
    "answer": "C",
    "explain": "华为设备需使用 stelnet server enable 使能SSH服务端功能，并在本地用户视图下通过 local-user huawei service-type ssh 指定该用户可用于SSH登录。若需同时支持Telnet，可配置 service-type telnet ssh。"
  },
  {
    "id": "HB085",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "关于华为设备远程登录管理的安全配置，下列做法正确的有？",
    "options": [
      "为方便管理，所有管理员共用同一个最高权限账号且不设密码",
      "使用SSH替代Telnet实现加密远程管理",
      "通过ACL限制允许登录设备的源IP地址",
      "为本地用户设置足够复杂的密码并配置合适的权限级别"
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explain": "设备远程管理安全应遵循使用SSH加密、通过ACL限制登录源地址、设置复杂密码和最小权限等原则。多管理员共用最高权限且无密码的账号会带来严重安全隐患，应坚决避免。"
  },
  {
    "id": "HB086",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "AAA中的三个A分别代表？",
    "options": [
      "Authentication（认证）",
      "Authorization（授权）",
      "Accounting（计费）",
      "Access（接入）"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "AAA是Authentication、Authorization和Accounting的缩写，分别表示认证（验证用户身份）、授权（决定用户可使用哪些服务）和计费（记录用户对资源的使用情况）。"
  },
  {
    "id": "HB087",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "华为设备上可以为本地用户指定 service-type 为 telnet 或 ssh，从而限制该用户只能通过指定方式登录设备。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "local-user 视图下的 service-type 命令用于指定本地用户可使用的服务类型，例如telnet、ssh、ppp等。仅指定ssh时，该用户将无法通过Telnet登录，从而提升管理安全性。"
  },
  {
    "id": "HB088",
    "type": "fill",
    "chapter": "网络安全与设备管理",
    "stem": "为使设备能够作为SSH服务器接受客户端登录，需要在系统视图下执行 stelnet ______ enable 命令。",
    "options": [],
    "answer": [
      "server"
    ],
    "explain": "stelnet server enable 命令用于使能设备的SSH服务端功能，使客户端可以通过SSH方式登录设备。之后还需配置VTY用户界面的认证方式以及本地用户的service-type。"
  },
  {
    "id": "HB089",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在VTY用户界面视图下，将认证方式配置为使用本地用户名和密码进行AAA认证，正确命令是？",
    "options": [
      "authentication-mode password",
      "authentication-mode aaa",
      "authentication-mode none",
      "login authentication aaa"
    ],
    "answer": "B",
    "explain": "authentication-mode aaa 表示VTY登录时采用AAA认证，即使用 local-user 创建的本地用户名和密码进行验证。authentication-mode password 则只校验一个登录密码，不区分用户名。"
  },
  {
    "id": "HB090",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "使用Telnet远程登录设备时，用户名和密码在网络中以明文方式传输，存在被窃听的风险。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "Telnet协议不对报文进行加密，用户名、密码以及所有交互内容均以明文传输，攻击者通过网络抓包即可获取。因此在安全要求较高的场景应使用SSH替代Telnet。"
  }
];
