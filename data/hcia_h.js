window.BANK_HCIA_H = [
  {
    "id": "HH001",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端首次获取地址时，用于寻找DHCP服务器的第一个报文是？",
    "options": ["DHCP Discover","DHCP Offer","DHCP Request","DHCP Ack"],
    "answer": "A",
    "explain": "客户端首次入网时并不知道服务器地址，因此以广播方式发送DHCP Discover报文寻找服务器，其目的地址为255.255.255.255。Offer、Request、Ack都发生在服务器应答或后续交互中。"
  },
  {
    "id": "HH002",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP Discover报文的目的IP地址和目的MAC地址分别是？",
    "options": ["255.255.255.255 和 FF-FF-FF-FF-FF-FF","0.0.0.0 和 FF-FF-FF-FF-FF-FF","255.255.255.255 和客户端自身MAC","服务器单播地址和服务器MAC"],
    "answer": "A",
    "explain": "Discover报文源IP为0.0.0.0（客户端尚无地址），目的IP为广播地址255.255.255.255，目的MAC为全F广播地址FF-FF-FF-FF-FF-FF。这样才能被同一广播域内的所有服务器收到。"
  },
  {
    "id": "HH003",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "关于DHCP Offer报文，下列说法正确的有？",
    "options": ["Offer由DHCP服务器发出，用于向客户端提供地址等配置参数","Offer报文的源端口为UDP 67","Offer报文中可以携带网关、DNS等选项参数","Offer必须由客户端发出"],
    "answer": ["A","B","C"],
    "explain": "Offer是服务器对Discover的响应，源端口为UDP 67，可携带IP地址、网关、DNS等选项参数。它由服务器发出而非客户端，因此D错误。"
  },
  {
    "id": "HH004",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "关于DHCP四种主要报文，下列描述正确的有哪些？",
    "options": ["Discover由客户端发出，用于寻找DHCP服务器","Offer由服务器发出，携带为客户端分配的地址等参数","Request既可以用于选择服务器，也可以用于续租","Ack由服务器发出，对Request进行确认"],
    "answer": ["A","B","C","D"],
    "explain": "四种报文的分工为：Discover（客户端广播找服务器）、Offer（服务器提供参数）、Request（客户端请求/确认使用某服务器提供的地址，也用于续租）、Ack（服务器确认）。四个选项的描述均正确。"
  },
  {
    "id": "HH005",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端在收到多个服务器的Offer后，只会向选中的那一台服务器单播Request，其他服务器无法得知自己的Offer未被采用。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "客户端选择Offer后会以广播方式发送Request，其中携带被选中服务器的标识。广播的目的正是让其他服务器得知自己的Offer未被选中，从而回收已预留的地址，因此该说法错误。"
  },
  {
    "id": "HH006",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP报文是基于下列哪种协议发展而来的？",
    "options": ["BOOTP","TFTP","SNMP","RARP"],
    "answer": "A",
    "explain": "DHCP由BOOTP扩展而来，沿用了BOOTP的报文格式（如giaddr、yiaddr、chaddr等字段），并增加了租期、选项等机制，因此DHCP报文也被称为BOOTP报文格式的扩展。"
  },
  {
    "id": "HH007",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "DHCP报文封装在UDP之上，下列关于其端口号的说法正确的有？",
    "options": ["服务器端使用UDP 67","客户端使用UDP 68","服务器端使用UDP 68","客户端使用UDP 67"],
    "answer": ["A","B"],
    "explain": "DHCP服务器监听并发送于UDP 67端口，客户端监听并发送于UDP 68端口，这是DHCP/BOOTP的标准规定。C、D选项把两个端口颠倒，是错误的。"
  },
  {
    "id": "HH008",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端在租期达到多少时会进入续租阶段，以单播方式发送Request？",
    "options": ["租期的75%","租期的50%","租期的87.5%","租期到期时"],
    "answer": "B",
    "explain": "租期过半（50%）时，客户端进入续租状态，以单播方式向原服务器发送DHCP Request请求延长租期。若服务器应答Ack则续租成功，租期重新计算。"
  },
  {
    "id": "HH009",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "当DHCP客户端在租期的87.5%时仍未收到原服务器的续租应答，它会采取什么动作？",
    "options": ["继续单播Request直到租期结束","直接释放地址并停止通信","向网关发送ARP请求","重新广播发送DHCP Discover，向所有服务器申请地址"],
    "answer": "D",
    "explain": "租期达到87.5%时仍收不到续租应答，客户端会重新进入初始化状态，广播发送DHCP Discover，向网络中所有DHCP服务器重新申请地址，这一过程称为重绑定。"
  },
  {
    "id": "HH010",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端在租期达到50%进行续租时，以单播方式向原DHCP服务器发送Request报文。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "租期50%时客户端已知道原服务器地址，续租采用单播Request方式直接向原服务器申请延长租期，服务器回Ack后租期重新计算。只有在87.5%重绑定阶段才会重新广播Discover。"
  },
  {
    "id": "HH011",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "DHCP服务器向客户端发送DHCP NAK报文的典型场景有哪些？",
    "options": ["客户端请求的IP地址已被其他客户端占用","客户端请求的地址不属于本服务器管理的网段","客户端MAC地址与服务器的绑定记录不一致","客户端首次广播发送Discover报文时"],
    "answer": ["A","B","C"],
    "explain": "NAK表示服务器拒绝客户端请求，常见于地址已被占用、请求地址不在本机地址池网段内，或客户端身份与绑定记录不符等场景。客户端首次Discover时服务器正常回应Offer，不会回NAK。"
  },
  {
    "id": "HH012",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "下列关于DHCP NAK报文的描述，正确的有？",
    "options": ["NAK报文由服务器发出，表示拒绝客户端的请求","客户端收到NAK后需要重新发起地址申请流程","NAK通常采用广播方式发送，以便客户端能够收到","NAK报文由客户端发出，表示拒绝服务器分配的地址"],
    "answer": ["A","B","C"],
    "explain": "NAK由服务器发出，含义是拒绝客户端的请求（如地址不可用），客户端收到后必须重新走Discover流程。由于此时客户端可能尚无有效地址，NAK通常以广播方式发送。D选项把方向说反了。"
  },
  {
    "id": "HH013",
    "type": "fill",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备上配置DHCP地址池时，用于指定地址池网段及掩码的命令是 network 192.168.1.0 ______ 24。",
    "options": [],
    "answer": ["mask"],
    "explain": "华为设备在ip pool视图下使用 network 192.168.1.0 mask 24 指定地址池的网段和掩码长度，也可写作 network 192.168.1.0 mask 255.255.255.0。该命令决定了地址池可分配的地址范围。"
  },
  {
    "id": "HH014",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备上开启DHCP服务功能的全局命令是？",
    "options": ["dhcp select global","service dhcp","dhcp enable","dhcp server enable"],
    "answer": "C",
    "explain": "华为设备必须在系统视图下执行 dhcp enable 才能开启DHCP功能，这是使用地址池、DHCP中继等所有DHCP特性的前提。若未开启，接口下的DHCP相关配置不会生效。"
  },
  {
    "id": "HH015",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "要使接口下的地址池能够为客户端分配全球地址池中的地址，接口下应配置哪条命令？",
    "options": ["dhcp select global","dhcp select interface","dhcp select relay","dhcp enable"],
    "answer": "A",
    "explain": "接口下配置 dhcp select global 表示该接口采用全局地址池方式为客户端分配地址。dhcp select interface 则使用接口地址所在网段的接口地址池。"
  },
  {
    "id": "HH016",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备接口下配置 dhcp select interface 表示使用该接口地址所在网段作为地址池为客户端分配地址。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "dhcp select interface 采用接口地址池方式，以该接口的IP地址和掩码确定网段并自动生成地址池，客户端网关默认为该接口地址。它与 dhcp select global 是两种互斥的地址池选择方式。"
  },
  {
    "id": "HH017",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备全局地址池视图下，可以配置下列哪些参数？",
    "options": ["gateway-list，指定分配给客户端的网关地址","dns-list，指定分配给客户端的DNS服务器地址","excluded-ip-address，指定地址池中不参与分配的地址","lease，指定地址的租期"],
    "answer": ["A","B","C","D"],
    "explain": "全局地址池视图下常用配置包括 network（网段）、gateway-list（网关）、dns-list（DNS服务器）、excluded-ip-address（排除地址）、lease（租期）等，四项均可在该视图下配置。"
  },
  {
    "id": "HH018",
    "type": "fill",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备的全局地址池视图下，配置默认网关为192.168.1.1的命令是 ______ 192.168.1.1。",
    "options": [],
    "answer": ["gateway-list"],
    "explain": "gateway-list 命令用于为地址池指定分配给客户端的默认网关地址，可以配置多个以实现网关备份。客户端获得该参数后会将其作为默认路由的下一跳。"
  },
  {
    "id": "HH019",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "地址池中配置 excluded-ip-address 192.168.1.1 192.168.1.10 的含义是？",
    "options": ["该范围内的地址不参与自动分配","只允许分配该范围内的地址","把该范围内的地址静态绑定给客户端","把该范围内的地址租期设为10分钟"],
    "answer": "A",
    "explain": "excluded-ip-address 用于将地址池中的一段地址排除，使其不参与自动分配，通常用于保留给服务器、网关、打印机等需要固定地址的设备。"
  },
  {
    "id": "HH020",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "在地址池视图下执行 lease 3 命令，其含义是？",
    "options": ["地址租期为3小时","地址租期为3分钟","地址池最多分配3个地址","地址租期为3天"],
    "answer": "D",
    "explain": "lease 命令用于配置地址租期，不带单位时默认以“天”为单位，因此 lease 3 表示租期为3天。也可写成 lease 3 0 0 的形式分别指定天、小时、分钟。"
  },
  {
    "id": "HH021",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端的地址租期越长，地址利用率越高，因此应尽量把租期配置得很长。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "租期过长会导致已离线客户端占用的地址长时间无法回收，降低地址利用率；租期过短则会增加续租报文带来的网络开销。应根据网络规模与终端流动性合理设置租期。"
  },
  {
    "id": "HH022",
    "type": "fill",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备全局地址池视图下，把IP地址192.168.1.100与MAC地址0011-2233-4455绑定的命令是 ______ ip-address 192.168.1.100 mac-address 0011-2233-4455。",
    "options": [],
    "answer": ["static-bind"],
    "explain": "static-bind 命令用于在地址池中把指定IP地址与客户端MAC地址静态绑定，该地址将只分配给对应的客户端。也可只绑定IP或只绑定MAC地址。"
  },
  {
    "id": "HH023",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "使用静态绑定（static-bind）的优点包括哪些？",
    "options": ["客户端每次获取的地址固定不变，便于管理","避免了客户端擅自修改IP造成地址冲突","相比手工配置静态IP，仍由DHCP统一管理，便于集中维护","可以不再需要配置地址池网段"],
    "answer": ["A","B","C"],
    "explain": "静态绑定把固定地址与特定客户端关联，既保证地址稳定，又保留DHCP集中管理的优势，可避免客户端自行改址引发冲突。但地址池仍必须配置network网段，静态绑定的地址需在该网段内，因此D错误。"
  },
  {
    "id": "HH024",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "关于DHCP中继的作用与原理，下列说法正确的有？",
    "options": ["使DHCP广播请求能够跨越三层网段到达远端服务器","中继把接收请求的接口IP填入giaddr字段","服务器根据giaddr选择对应网段的地址池","中继会代替服务器为客户端分配地址"],
    "answer": ["A","B","C"],
    "explain": "DHCP中继负责在客户端与远端服务器之间转发报文，通过giaddr字段告知服务器客户端所属网段，服务器据此选择地址池。地址实际由服务器分配，中继只做转发，故D错误。"
  },
  {
    "id": "HH025",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP中继在转发客户端请求报文时，会填写报文中的哪个字段以告知服务器客户端所在的网段？",
    "options": ["yiaddr","giaddr（网关IP地址字段）","chaddr","siaddr"],
    "answer": "B",
    "explain": "中继收到客户端广播请求后，把接收该请求的接口IP地址填入giaddr字段，服务器据此判断客户端所属网段并从对应地址池中选取地址。这是中继能够支持多网段的关键。"
  },
  {
    "id": "HH026",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备接口上配置DHCP中继，通常需要配置下列哪些命令？",
    "options": ["dhcp select relay，使能接口的DHCP中继功能","dhcp relay server-ip，指定DHCP服务器地址","在系统视图下执行 dhcp enable","dhcp select global，使能全局地址池方式"],
    "answer": ["A","B","C"],
    "explain": "配置中继需先全局 dhcp enable 开启DHCP功能，再在接口下 dhcp select relay 使能中继，并通过 dhcp relay server-ip 指定服务器地址。dhcp select global 是服务器本地分配地址的方式，与中继互斥，不冲突但不需要配置。"
  },
  {
    "id": "HH027",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP服务器收到经中继转发的请求后，回应的应答报文如何处理？",
    "options": ["直接广播到客户端所在网段","以单播方式发送给中继的giaddr地址，由中继再转交给客户端","发送给客户端的MAC地址","丢弃该请求"],
    "answer": "B",
    "explain": "服务器根据giaddr字段把应答报文单播发送给中继设备，中继再根据报文中的客户端信息将其转发给客户端。这样应答报文也能跨网段正确送达。"
  },
  {
    "id": "HH028",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "使用DHCP中继后，DHCP服务器上需要为每个客户端网段配置网段匹配的地址池。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "服务器根据中继填入的giaddr字段判断客户端所在网段，因此需要为每个需要服务的网段配置对应的地址池。否则服务器找不到匹配地址池，会拒绝为该客户端分配地址。"
  },
  {
    "id": "HH029",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端第二次接入网络（此前已获得过地址且服务器中仍有其绑定记录）时，通常发送哪种报文？",
    "options": ["发送DHCP Discover寻找服务器","发送DHCP Offer","直接广播发送DHCP Request，请求继续使用原地址","发送DHCP NAK"],
    "answer": "C",
    "explain": "客户端再次接入时若仍希望使用上次的地址，会直接广播发送携带原IP地址的Request。若服务器同意则回Ack继续使用，若地址已被占用或不可用则回NAK，客户端再重新Discover。"
  },
  {
    "id": "HH030",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端首次获取地址与再次获取地址的区别包括哪些？",
    "options": ["首次获取以Discover开始，再次获取可直接以Request开始","首次获取时客户端没有地址，源IP为0.0.0.0","再次获取时客户端会请求使用原来分配过的地址","再次获取一定不需要服务器的确认"],
    "answer": ["A","B","C"],
    "explain": "首次获取必须经过Discover→Offer→Request→Ack完整交互，源IP为0.0.0.0；再次获取可直接以Request请求原地址，但是否成功仍需服务器回Ack确认，若地址不可用服务器会回NAK，因此D错误。"
  },
  {
    "id": "HH031",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP饿死攻击（地址耗尽攻击）的原理是？",
    "options": ["攻击者伪造大量不同MAC地址不断申请地址，耗尽地址池","攻击者发送大量ICMP报文占用带宽","攻击者伪造DHCP服务器分配错误地址","攻击者篡改DHCP报文中的网关字段"],
    "answer": "A",
    "explain": "攻击者不断变换伪造的源MAC地址向DHCP服务器申请地址，使地址池中的地址被大量无效租约占用直至耗尽，导致合法用户无法获得地址，这种攻击称为DHCP饿死攻击。"
  },
  {
    "id": "HH032",
    "type": "fill",
    "chapter": "DHCP与DNS",
    "stem": "为防止DHCP饿死攻击，接入交换机上通常部署 ______ 功能，并对报文中的CHADDR字段与源MAC地址进行一致性检查。",
    "options": [],
    "answer": ["DHCP Snooping","dhcp snooping","DHCPSnooping"],
    "explain": "DHCP Snooping把连接合法DHCP服务器的接口设为信任接口，其余为不信任接口，并通过检查CHADDR字段与帧源MAC是否一致来阻断伪造MAC的大量申请，从而防止地址池被耗尽。"
  },
  {
    "id": "HH033",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "DHCP Snooping的信任接口可以接收DHCP服务器的应答报文，非信任接口收到此类报文会被丢弃。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "DHCP Snooping将连接合法DHCP服务器的接口配置为信任接口，允许其发送Offer、Ack等应答；非信任接口收到服务器应答报文将被丢弃，从而防止私设DHCP服务器欺骗客户端。"
  },
  {
    "id": "HH034",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "DHCP Snooping可以起到的安全作用有哪些？",
    "options": ["防止私设DHCP服务器为客户端分配错误地址","防止DHCP饿死攻击耗尽地址池","结合IPSG实现基于绑定表的源IP地址检查","对DHCP报文进行加密传输"],
    "answer": ["A","B","C"],
    "explain": "DHCP Snooping通过信任接口机制防范伪造的DHCP服务器，通过检查CHADDR与源MAC一致性防范饿死攻击，并生成绑定表供IPSG等特性使用。它不负责加密DHCP报文，D错误。"
  },
  {
    "id": "HH035",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP Option 82字段的主要作用是？",
    "options": ["指定DNS服务器地址","指定客户端的主机名","由中继设备插入客户端接入位置信息，供服务器作为分配策略依据","指定租期长度"],
    "answer": "C",
    "explain": "Option 82即中继代理信息选项，DHCP中继把客户端接入的接口、VLAN、设备标识等信息插入该选项，服务器可据此选择地址池或进行安全校验，实现基于位置的地址分配。"
  },
  {
    "id": "HH036",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP Option 43常用于下列哪种场景？",
    "options": ["下发客户端的主机名","为AP等设备下发AC的IP地址","指定网关地址","指定广播地址"],
    "answer": "B",
    "explain": "在无线网络中，AP通过DHCP获取自身IP地址后，还需要知道AC的地址以便建立CAPWAP隧道，这一信息通常由DHCP服务器的Option 43字段下发。"
  },
  {
    "id": "HH037",
    "type": "fill",
    "chapter": "DHCP与DNS",
    "stem": "DHCP中继在转发客户端请求时，会把接收请求的接口IP地址填入BOOTP报文的 ______ 字段，服务器据此选择地址池。",
    "options": [],
    "answer": ["giaddr"],
    "explain": "giaddr表示网关IP地址（Gateway IP Address），是BOOTP/DHCP报文中的字段。中继填写该字段后，服务器便能得知客户端所在网段，从而从对应地址池中分配地址。"
  },
  {
    "id": "HH038",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备上，只要接口下配置了 dhcp select global，即使不执行 dhcp enable 也能正常分配地址。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "dhcp enable 是开启设备DHCP功能的总开关，属于前提配置。未执行该命令时，接口下的地址池选择、中继等配置均不会实际生效，客户端无法获得地址。"
  },
  {
    "id": "HH039",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备上查看DHCP地址池分配情况，可以使用下列哪些命令？",
    "options": ["display ip pool","display ip pool name <pool-name> used","display dhcp server statistics","display dhcp snooping binding"],
    "answer": ["A","B","C"],
    "explain": "display ip pool 可查看地址池总体使用情况，带used参数可查看已分配地址明细，display dhcp server statistics 可查看DHCP报文统计。display dhcp snooping binding 是查看Snooping绑定表，与其他无关，故选A、B、C。"
  },
  {
    "id": "HH040",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DHCP客户端执行 ipconfig /release 后，其效果是？",
    "options": ["客户端重新申请一个新地址","客户端续租当前地址","客户端刷新DNS缓存","客户端释放当前租用的IP地址，并通知服务器回收"],
    "answer": "D",
    "explain": "释放操作会向服务器发送DHCP Release报文，服务器收到后回收该地址并删除相应绑定，客户端随后不再拥有该地址。刷新DNS缓存使用的是 ipconfig /flushdns。"
  },
  {
    "id": "HH041",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "关于 DNS 使用的传输层协议与端口，下列说法正确的是？",
    "options": ["常规域名查询使用 UDP 53，区域传送和超长应答使用 TCP 53","常规查询使用 TCP 53，区域传送使用 UDP 53","查询与区域传送都只使用 UDP 53","查询与区域传送都只使用 TCP 53"],
    "answer": "A",
    "explain": "DNS 服务器监听 53 端口：常规的域名解析查询报文短小，采用 UDP 53 以降低开销；区域传送（主从服务器同步）以及应答报文超过 512 字节时，改用 TCP 53 以保证可靠性。"
  },
  {
    "id": "HH042",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DNS递归查询与迭代查询的主要区别是？",
    "options": ["递归查询只能用于IPv6，迭代查询只能用于IPv4","递归查询由被查询服务器负责给出最终结果，迭代查询只返回下一步应查询的服务器地址","递归查询使用TCP，迭代查询使用UDP","两者完全相同，只是名称不同"],
    "answer": "B",
    "explain": "递归查询中，客户端只需发出一次请求，被查询的DNS服务器负责代为查询并返回最终结果；迭代查询中，服务器只返回“下一步去哪里查”的提示，由查询者自行继续查询。通常客户端到本地DNS服务器是递归，本地DNS到其他服务器之间是迭代。"
  },
  {
    "id": "HH043",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "下列属于常见DNS资源记录类型的有哪些？",
    "options": ["A记录，用于把域名映射到IPv4地址","AAAA记录，用于把域名映射到IPv6地址","CNAME记录，用于把一个域名指向另一个域名","MX记录，用于指定邮件服务器"],
    "answer": ["A","B","C","D"],
    "explain": "A记录解析IPv4地址，AAAA记录解析IPv6地址，CNAME是别名记录，MX是邮件交换记录。此外还有NS（域名服务器）、PTR（反向解析）等，四个选项均正确。"
  },
  {
    "id": "HH044",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "把IP地址解析为域名的DNS查询称为？",
    "options": ["正向解析，使用A记录","反向解析，使用PTR记录","别名解析，使用CNAME记录","邮件解析，使用MX记录"],
    "answer": "B",
    "explain": "由域名查IP地址是正向解析，使用A或AAAA记录；由IP地址查域名是反向解析，使用PTR记录，其域名形式为in-addr.arpa。反查常用于日志分析和垃圾邮件过滤。"
  },
  {
    "id": "HH045",
    "type": "judge",
    "chapter": "DHCP与DNS",
    "stem": "NS记录用于指明某个域由哪些DNS服务器负责解析。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "NS（Name Server）记录指定该域名的权威域名服务器，是域名委派的关键记录。上级域通过NS记录把子域的解析工作委派给指定的服务器。"
  },
  {
    "id": "HH046",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "DNS域名结构自右向左的顺序正确的一项是？",
    "options": ["主机名、顶级域、二级域、根域","根域、顶级域、二级域、主机名","顶级域、根域、主机名、二级域","二级域、顶级域、根域、主机名"],
    "answer": "B",
    "explain": "域名采用层次结构，最右侧的点代表根域，其左依次是顶级域（如com、cn）、二级域（如example），最左侧是主机名。例如www.example.com中，com是顶级域，example是二级域。"
  },
  {
    "id": "HH047",
    "type": "fill",
    "chapter": "DHCP与DNS",
    "stem": "在华为设备系统视图下开启域名解析功能并指定DNS服务器的命令是 dns ______ 和 dns server 8.8.8.8。",
    "options": [],
    "answer": ["resolve"],
    "explain": "dns resolve 用于使能设备的域名解析功能，dns server 用于指定DNS服务器地址。两者配置完成后，设备本身即可作为DNS客户端解析域名。"
  },
  {
    "id": "HH048",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "关于DNS缓存，下列说法正确的有？",
    "options": ["DNS服务器和客户端都可以缓存解析结果以减少查询次数","缓存有生存时间（TTL）限制，过期后需要重新查询","清除本地DNS缓存可以使用 ipconfig /flushdns","DNS缓存会永久保存解析结果，永不失效"],
    "answer": ["A","B","C"],
    "explain": "DNS缓存可显著降低解析延迟和服务器负载，客户端与各级服务器均可缓存；缓存条目受TTL控制，超时即失效。Windows下可用 ipconfig /flushdns 清空缓存，D选项“永不失效”错误。"
  },
  {
    "id": "HH049",
    "type": "single",
    "chapter": "DHCP与DNS",
    "stem": "在Windows系统中，DNS解析的优先级顺序通常是？",
    "options": ["先查询本地hosts文件，未命中再向DNS服务器查询","先向DNS服务器查询，未命中再查询hosts文件","只查询hosts文件，不使用DNS服务器","只查询DNS服务器，hosts文件仅用于反向解析"],
    "answer": "A",
    "explain": "hosts文件是本地静态解析表，系统解析域名时会先检查该文件，命中则直接返回结果；未命中时才向配置的DNS服务器发起查询。因此修改hosts文件可立即影响本机解析结果。"
  },
  {
    "id": "HH050",
    "type": "multi",
    "chapter": "DHCP与DNS",
    "stem": "关于DNS负载均衡的实现，下列说法正确的有？",
    "options": ["为同一域名配置多条A记录可实现请求的分散","DNS服务器按轮询等方式返回不同的地址","把TTL设置得过大不利于流量的及时调整","负载均衡必须依赖CNAME记录指向自身"],
    "answer": ["A","B","C"],
    "explain": "为同一域名配置多条A记录并采用轮询应答，即可把客户端请求分散到多台服务器；TTL过大会使缓存长期不更新，不利于流量调整。负载均衡并不依赖指向自身的CNAME，故D错误。"
  },
  {
    "id": "HH051",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "与局域网相比，广域网的主要特点是？",
    "options": ["覆盖范围小、完全由企业自建","只能在楼宇内部使用","覆盖范围大、通常需要向运营商租用链路、传输时延相对较高","不需要任何网络设备即可互联"],
    "answer": "C",
    "explain": "广域网用于跨城市、跨地域的远距离互联，链路通常向运营商租用，成本高、时延大。局域网则范围小、带宽高、一般由企业自行建设和管理。"
  },
  {
    "id": "HH052",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "下列哪种广域网链路类型在通信前需要先建立连接、通信结束后释放连接？",
    "options": ["电路交换（如PSTN/ISDN）","专线（如 leased line）","分组交换（如帧中继）","以太网交换"],
    "answer": "A",
    "explain": "电路交换采用“建立连接—数据传输—释放连接”的方式，通信期间独占一条物理通路，典型代表是PSTN和ISDN。专线则是长期固定占用，分组交换按分组统计复用。"
  },
  {
    "id": "HH053",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "下列属于常见广域网链路类型的有哪些？",
    "options": ["专线方式","电路交换方式","分组交换方式","共享以太网VLAN方式"],
    "answer": ["A","B","C"],
    "explain": "广域网链路按实现方式通常分为专线、电路交换和分组交换三类，分别对应固定独占、按需建立连接和统计复用分组转发。VLAN是局域网内部技术，不属于广域网链路类型。"
  },
  {
    "id": "HH054",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "华为路由器串口（Serial接口）的默认链路层协议是？",
    "options": ["PPP","HDLC","Frame Relay","Ethernet"],
    "answer": "B",
    "explain": "华为路由器Serial接口默认封装的链路层协议是HDLC，如需使用PPP必须通过 link-protocol ppp 命令修改。这一默认值与Cisco设备一致，但两者的HDLC实现并不兼容。"
  },
  {
    "id": "HH055",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "与HDLC相比，PPP协议最显著的优势是？",
    "options": ["支持身份认证和多协议封装","传输速率更高","不需要任何配置","只能在同厂商设备间使用"],
    "answer": "A",
    "explain": "PPP具有认证（PAP/CHAP）、多协议支持（IP、IPX等）和链路质量监测等能力，并具有良好的厂商互通性；HDLC是厂商私有实现，既不支持认证也不支持多协议。"
  },
  {
    "id": "HH056",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "华为设备与Cisco设备之间的HDLC封装可以直接互通。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "虽然两家厂商的Serial接口默认都是HDLC，但它们对HDLC的字段定义和实现方式不同（如Cisco使用私有的类型字段），彼此并不兼容，因此不能直接互通，跨厂商互联通常改用PPP。"
  },
  {
    "id": "HH057",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "关于PPP的LCP协议，下列说法正确的有？",
    "options": ["LCP负责PPP链路的建立、维护和终止","LCP负责协商认证方式及MRU等链路参数","链路进入认证或NCP阶段后，LCP报文仍可发送","LCP负责为IP协议协商IP地址"],
    "answer": ["A","B","C"],
    "explain": "LCP是PPP的链路控制协议，负责链路建立、维护、拆除以及认证方式、MRU等参数协商，并在后续阶段继续承担保活与质量监测。为IP协商地址的是IPCP（属于NCP），故D错误。"
  },
  {
    "id": "HH058",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "关于PPP协议的分层结构，下列说法正确的有？",
    "options": ["物理层用于承载PPP帧的比特流传输","LCP负责链路的建立、维护和拆除","NCP负责为不同的网络层协议协商参数","IPCP是NCP的一个典型实例，用于协商IP地址等参数"],
    "answer": ["A","B","C","D"],
    "explain": "PPP采用分层设计：物理层负责比特传输，LCP负责链路控制与认证协商，NCP负责网络层参数协商，IPCP是NCP中用于IP协议的具体实现。四项均正确。"
  },
  {
    "id": "HH059",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "PPP链路建立过程的正确顺序是？",
    "options": ["认证阶段→链路建立阶段→网络层协商阶段","链路建立阶段（LCP）→认证阶段（PAP/CHAP）→网络层协商阶段（NCP）","网络层协商阶段→认证阶段→链路建立阶段","链路建立阶段→网络层协商阶段→认证阶段"],
    "answer": "B",
    "explain": "PPP先通过LCP协商链路参数完成链路建立，随后根据协商结果进行PAP或CHAP认证，认证通过后进入NCP阶段协商网络层参数，之后链路才可承载数据。"
  },
  {
    "id": "HH060",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "如果PPP链路双方配置的认证方式不一致，链路协商会失败，无法进入网络层协商阶段。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "PPP认证方式需由LCP协商确定。若一端配置CHAP而另一端配置PAP，或一方要求认证而另一方未提供相应配置，认证阶段将无法通过，链路停留在认证阶段而不能进入NCP。"
  },
  {
    "id": "HH061",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "PAP认证的特点是？",
    "options": ["三次握手，密码以密文传输","不需要传输用户名","两次握手，用户名和密码以明文方式传输","使用MD5算法对密码加密"],
    "answer": "C",
    "explain": "PAP为两次握手认证：被认证方直接发送用户名和密码，认证方校验后回应通过或拒绝。由于密码以明文发送，安全性较低，容易被窃取。"
  },
  {
    "id": "HH062",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "CHAP认证中，密码在链路上是如何传输的？",
    "options": ["密码以明文传输","密码不在链路上传输，只传输由MD5计算出的摘要值","密码以简单异或加密后传输","密码被压缩后传输"],
    "answer": "B",
    "explain": "CHAP采用三次握手，认证方发送随机Challenge，被认证方用该随机数加上密码做MD5运算后把摘要值回送，认证方用自己保存的密码做同样运算并比对。密码本身从不在链路上出现，安全性高于PAP。"
  },
  {
    "id": "HH063",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "关于CHAP认证的工作过程，下列描述正确的有？",
    "options": ["认证方首先向被认证方发送包含随机数的Challenge报文","被认证方用随机数和密码经MD5计算后回送Response","认证方比对成功后发送Success报文，认证失败则发送Failure","CHAP在链路建立后不会再次进行认证"],
    "answer": ["A","B","C"],
    "explain": "CHAP的典型流程是Challenge→Response→Success/Failure三次握手，且可在链路运行期间周期性重新认证以确认对方仍在线。因此D选项“不会再次认证”错误。"
  },
  {
    "id": "HH064",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "在认证方接口上配置 ppp authentication-mode chap 表示要求对端以CHAP方式通过认证。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "ppp authentication-mode 用于在认证方指定认证方式，chap表示使用CHAP。被认证方则需通过 ppp chap user 与 ppp chap password 提供本端用户名和密码。"
  },
  {
    "id": "HH065",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "被认证方需要向CHAP认证方提供用户名和密码，应配置哪些命令？",
    "options": ["ppp authentication-mode chap 和 ppp authentication-mode pap","ppp pap local-user 和 ppp pap password","只需配置 ppp authentication-mode chap","ppp chap user 和 ppp chap password"],
    "answer": "D",
    "explain": "被认证方通过 ppp chap user <用户名> 指定发送给认证方的用户名，通过 ppp chap password 指定对应密码。认证方则需在本地配置同名用户及密码以便校验。"
  },
  {
    "id": "HH066",
    "type": "fill",
    "chapter": "广域网与PPP",
    "stem": "在华为路由器Serial接口上把链路层协议封装为PPP的命令是 link-protocol ______。",
    "options": [],
    "answer": ["ppp"],
    "explain": "link-protocol ppp 命令用于把接口的链路层封装类型从默认的HDLC改为PPP。执行后接口下才能进一步配置 ppp authentication-mode、ppp chap 等PPP相关参数。"
  },
  {
    "id": "HH067",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "PAP认证方式比CHAP更安全，因此在实际组网中应优先选用PAP。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "PAP以明文方式传送用户名和密码，容易被窃听；CHAP通过MD5摘要方式校验，密码不在链路上传输，还可周期性重认证，安全性明显更高，因此应优先选用CHAP。"
  },
  {
    "id": "HH068",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "PPP协议的主要用途不包括下列哪一项？",
    "options": ["为拨号链路提供认证与链路协商","实现不同厂商路由器之间的串口互通","为以太网交换机之间提供链路聚合","在链路上同时承载多种网络层协议"],
    "answer": "C",
    "explain": "PPP主要用于点到点链路的链路建立、认证与多协议承载，广泛用于拨号、专线等场景，也是跨厂商串口互联的通用选择。链路聚合属于以太网技术（如Eth-Trunk），与PPP无关。"
  },
  {
    "id": "HH069",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "PPPoE的会话建立过程分为哪两个阶段？",
    "options": ["认证阶段和计费阶段","链路建立阶段和释放阶段","发现阶段和会话阶段","协商阶段和加密阶段"],
    "answer": "C",
    "explain": "PPPoE分为发现（Discovery）阶段和会话（Session）阶段。发现阶段用于确定对端AC的MAC地址并建立PPPoE会话标识，会话阶段则在此会话之上运行PPP，完成LCP协商、认证和NCP协商。"
  },
  {
    "id": "HH070",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "关于PPPoE，下列说法正确的有？",
    "options": ["PPPoE在以太网上承载PPP报文","发现阶段通过PADI、PADO、PADR、PADS报文交互确定会话","会话建立后由PPP完成认证与地址协商","PPPoE会话阶段不需要任何认证"],
    "answer": ["A","B","C"],
    "explain": "PPPoE把PPP帧封装在以太网帧中，发现阶段用PADI/PADO/PADR/PADS四步确定AC并分配Session ID；进入会话阶段后由PPP的LCP、认证（PAP/CHAP）和NCP完成后续工作。因此D错误。"
  },
  {
    "id": "HH071",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "关于PPPoE发现阶段的报文交互，下列说法正确的有？",
    "options": ["客户端广播发送PADI寻找可用的AC","AC收到PADI后回应PADO","客户端发送PADR请求建立会话，AC用PADS确认并分配Session ID","PADI由AC主动发出以寻找客户端"],
    "answer": ["A","B","C"],
    "explain": "发现阶段依次为客户端广播PADI、AC回应PADO、客户端发送PADR、AC以PADS确认并分配Session ID。PADI由客户端发起，故D错误。"
  },
  {
    "id": "HH072",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "PPP的链路质量监测功能通常由哪个协议实现？",
    "options": ["LCP","IPCP","PAP","LQR"],
    "answer": "D",
    "explain": "LQR（Link Quality Report，链路质量报告）用于周期性统计链路上的报文收发与差错情况，据此判断链路质量，必要时可拆除质量过差的链路。LCP负责链路控制，IPCP负责IP参数协商。"
  },
  {
    "id": "HH073",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "MP（Multilink PPP）可以把多条PPP链路捆绑成一条逻辑链路，从而增加可用带宽。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "MP多链路捆绑将多条物理PPP链路聚合为一个逻辑链路，实现带宽叠加和负载分担，同时可提供一定的链路冗余。它在对端也需配置MP才能正常工作。"
  },
  {
    "id": "HH074",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "在华为路由器上查看Serial接口的PPP链路状态及LCP、IPCP协商情况，应使用哪条命令？",
    "options": ["display ip routing-table","display interface Serial 1/0/0","display current-configuration","display version"],
    "answer": "B",
    "explain": "display interface Serial 1/0/0 可以查看接口的物理状态、链路层协议状态（Line protocol current state）以及LCP、IPCP的开启情况等，是排查PPP链路问题最常用的命令。"
  },
  {
    "id": "HH075",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "两台路由器串口背靠背直连时，必须在两侧接口上都配置时钟频率才能正常通信。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "背靠背直连时只需在DCE侧配置 clock rate 提供同步时钟，DTE侧使用DCE提供的时钟即可，无需也不能配置时钟频率。判断某侧是DCE还是DTE可通过 display interface 查看。"
  },
  {
    "id": "HH076",
    "type": "fill",
    "chapter": "广域网与PPP",
    "stem": "在作为DCE的路由器Serial接口上，指定时钟频率为64000bps的命令是 ______ 64000。",
    "options": [],
    "answer": ["clock rate"],
    "explain": "clock rate 命令在DCE侧接口上配置，用于指定同步串口的时钟频率，本例为64000bps。若该侧为DTE则不需要也不能配置该命令。"
  },
  {
    "id": "HH077",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "下列关于DCE和DTE的描述，正确的有？",
    "options": ["DCE全称为数据电路端接设备，通常由运营商侧设备承担","DTE全称为数据终端设备，通常是用户侧的路由器","在背靠背连接时必须在DCE侧配置时钟频率","DTE侧必须配置时钟频率才能通信"],
    "answer": ["A","B","C"],
    "explain": "DCE提供时钟与同步信号，通常位于运营商侧；DTE为用户侧设备。背靠背连接时由DCE侧提供时钟，DTE侧不需要配置clock rate，故D错误。"
  },
  {
    "id": "HH078",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "POS接口指的是？",
    "options": ["基于SDH的分组传送物理接口","一种以太网接口","一种无线接口","一种拨号接口"],
    "answer": "A",
    "explain": "POS（Packet Over SONET/SDH）接口用于在SDH/SONET传输网上直接承载分组数据，具有高速率和高可靠性，常用于运营商骨干或大带宽广域网互联。"
  },
  {
    "id": "HH079",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "PPP链路两端的IP地址只能由运营商通过IPCP协商动态分配，不能手工配置。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "PPP链路的IP地址既可以由一端通过IPCP协商动态分配给对端（如拨号场景中由服务器分配），也可以在两端的接口上手工配置静态地址。两种方式都是允许的。"
  },
  {
    "id": "HH080",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "在PPP的LCP协商中，如果链路两端都没有配置认证，则后续过程是？",
    "options": ["跳过认证阶段，直接进入NCP网络层协商阶段","链路无法建立，停留在LCP阶段","默认使用PAP认证","默认使用CHAP认证"],
    "answer": "A",
    "explain": "认证阶段在PPP中是可选的。若LCP协商中双方都未向对端提出认证要求，则跳过认证直接进入网络层协商阶段；只要有一方要求认证，就必须完成PAP或CHAP认证。"
  },
  {
    "id": "HH081",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "HDLC帧中用于标识帧边界的字段是？",
    "options": ["标志字段F（01111110）","地址字段A","控制字段C","帧校验序列FCS"],
    "answer": "A",
    "explain": "HDLC帧以标志字段F（比特序列01111110）作为帧的起始和结束标志，用于帧定界。地址字段标识从站地址，控制字段表示帧类型，FCS用于差错检测。"
  },
  {
    "id": "HH082",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "下列关于PPP与HDLC对比的说法，正确的有？",
    "options": ["PPP支持认证，HDLC不支持认证","PPP支持多协议承载，HDLC通常只支持单一协议","HDLC是面向比特的协议，采用统一的帧格式","PPP的互通性好于HDLC"],
    "answer": ["A","B","C","D"],
    "explain": "PPP支持PAP/CHAP认证与多协议封装且标准化程度高、互通性好；HDLC是面向比特的协议，采用统一帧格式（标志、地址、控制、信息、FCS），但不支持认证与多协议。四项均正确。"
  },
  {
    "id": "HH083",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "在华为设备上查看PPP的LCP和IPCP协商状态，display interface 命令输出中哪一项最直接相关？",
    "options": ["接口的带宽值","接口的MAC地址","Line protocol current state 字段及 LCP opening/IPCP opening 等信息","接口的MTU值"],
    "answer": "C",
    "explain": "display interface 输出中的 Line protocol current state 反映链路层是否Up，其后还会显示LCP、IPCP的开启情况。这些信息可直接用于判断PPP协商进行到哪一阶段。"
  },
  {
    "id": "HH084",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "PPP支持在一条物理链路上同时承载IP、IPX等多种网络层协议。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "PPP通过NCP为每种网络层协议分别协商参数，可以在同一条PPP链路上承载多种协议，这正是PPP相比HDLC的重要优势之一。"
  },
  {
    "id": "HH085",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "下列哪一项不是广域网常用的接口类型？",
    "options": ["G.703/E1接口","Serial同步串口","POS接口","USB接口"],
    "answer": "D",
    "explain": "广域网常见接口包括同步串口（Serial）、E1/G.703接口、POS接口、ADSL接口等。USB接口属于通用外设接口，不作为广域网互联接口使用。"
  },
  {
    "id": "HH086",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "关于PPP认证，下列说法正确的有？",
    "options": ["认证方需要配置 ppp authentication-mode","被认证方需要配置本端的用户名和密码","CHAP认证方需要在本地配置与对端用户名对应的密码","认证只在链路建立的NCP阶段进行"],
    "answer": ["A","B","C"],
    "explain": "认证方通过 ppp authentication-mode 指定方式，被认证方提供用户名与密码；CHAP认证方需要本地存在同名用户及密码才能完成校验。认证发生在LCP之后、NCP之前，故D错误。"
  },
  {
    "id": "HH087",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "将PPP链路封装的报文中的协议类型字段用于标识什么？",
    "options": ["帧的长度","发送方的地址","该PPP帧承载的上层协议类型（如IP、LCP、IPCP等）","差错校验结果"],
    "answer": "C",
    "explain": "PPP帧中的协议字段用于区分该帧承载的载荷类型，例如0x0021表示IP、0xC021表示LCP、0x8021表示IPCP，从而在同一链路上复用多种协议。"
  },
  {
    "id": "HH088",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "关于广域网中的专线方式，下列描述正确的是？",
    "options": ["多个用户共享链路带宽，费用低廉","用户独占一条固定链路，带宽稳定但费用较高","通信前必须先拨号建立连接","只能承载语音业务"],
    "answer": "B",
    "explain": "专线为用户提供固定、独占的点到点链路，带宽与质量有保障，但租用费用较高。电路交换需要先拨号建立连接，分组交换则是多用户共享链路资源。"
  },
  {
    "id": "HH089",
    "type": "fill",
    "chapter": "广域网与PPP",
    "stem": "PPP认证方式中，采用两次握手并明文传输密码的是 ______ 认证。",
    "options": [],
    "answer": ["PAP"],
    "explain": "PAP（Password Authentication Protocol）采用两次握手，被认证方直接把用户名和密码以明文发送给认证方校验。由于其安全性不足，工程中更推荐使用CHAP。"
  },
  {
    "id": "HH090",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "PPP的LCP报文在认证阶段和网络层协商阶段仍然可以发送，用于维护链路状态。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "LCP不仅负责链路建立，还负责链路的维护与终止。即使链路已进入认证或NCP阶段，LCP报文仍可发送，用于回声请求/应答保活、质量监测和链路拆除等。"
  },
  {
    "id": "HH091",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "MP多链路捆绑中，若捆绑的各成员链路速率不同，可能带来的问题是？",
    "options": ["链路完全无法建立","分片报文可能因各链路时延不同而乱序到达，需要重组处理","带宽会自动降为0","必须关闭LCP才能工作"],
    "answer": "B",
    "explain": "MP把报文分片后通过多条成员链路发送，若各链路时延差异较大，分片可能乱序到达，需要在接收侧按序号重组，否则会降低有效吞吐。因此实际部署中成员链路速率宜尽量一致。"
  },
  {
    "id": "HH092",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "在PPP链路上，客户端通过IPCP协商通常可以获得下列哪些参数？",
    "options": ["MAC地址和VLAN ID","本端IP地址和DNS服务器地址","端口号和会话ID","路由优先级和度量值"],
    "answer": "B",
    "explain": "IPCP属于NCP的一种，用于协商网络层参数，典型可协商本端IP地址以及DNS服务器地址等。MAC地址、VLAN ID属于链路层参数，与IPCP无关。"
  },
  {
    "id": "HH093",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "下列属于PPP相较HDLC优点的有？",
    "options": ["提供PAP和CHAP认证机制","支持链路质量监测","支持多链路捆绑（MP）","帧结构比HDLC更简单因而开销更小"],
    "answer": ["A","B","C"],
    "explain": "PPP具备认证、链路质量监测（LQR）、多链路捆绑等丰富功能，并支持多协议。正因功能丰富，其帧头开销并不比HDLC小，D的说法不成立。"
  },
  {
    "id": "HH094",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "在华为设备上配置CHAP认证时，若认证方本地没有配置对应的用户和密码，会出现什么现象？",
    "options": ["认证仍然成功","自动降级为PAP认证","自动跳过认证直接建立链路","认证失败，PPP链路无法进入网络层协商阶段"],
    "answer": "D",
    "explain": "CHAP认证方需要用本地保存的用户名和密码参与摘要计算与比对。若本地缺少相应用户或密码不匹配，认证将失败并反复重试，链路停留在认证阶段而无法进入NCP。"
  },
  {
    "id": "HH095",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "关于PPP协商中的MRU参数，下列说法正确的是？",
    "options": ["MRU表示链路的最大传输速率","MRU表示最多可捆绑的链路条数","MRU表示认证重试次数","MRU表示PPP链路可接收的最大接收单元长度"],
    "answer": "D",
    "explain": "MRU（Maximum Receive Unit）在LCP协商中确定本端能够接收的最大报文长度，默认通常为1500字节。它不是速率、捆绑条数或重试次数。"
  },
  {
    "id": "HH096",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "PPPoE的会话阶段中，LCP协商、认证和NCP协商都是由PPP完成的。",
    "options": ["正确","错误"],
    "answer": "T",
    "explain": "PPPoE的发现阶段只负责确定AC并建立PPPoE会话标识，之后的LCP协商、PAP/CHAP认证以及IPCP等NCP参数协商全部由承载在PPPoE会话之上的PPP完成。"
  },
  {
    "id": "HH097",
    "type": "single",
    "chapter": "广域网与PPP",
    "stem": "广域网互联中，若两台不同厂商的路由器需要通过串口互连，最稳妥的链路层封装选择是？",
    "options": ["各厂商私有的HDLC","Ethernet","Frame Relay","PPP"],
    "answer": "D",
    "explain": "PPP是国际标准协议，各厂商实现一致，互通性最好，因此跨厂商串口互联应选用PPP。私有HDLC互不兼容，以太网与帧中继也不适用于该串口直连场景。"
  },
  {
    "id": "HH098",
    "type": "multi",
    "chapter": "广域网与PPP",
    "stem": "排查PPP链路无法建立的问题时，可以采取的步骤包括哪些？",
    "options": ["使用 display interface Serial 查看物理层与链路层状态","检查两端链路层封装是否一致为PPP","检查认证方式与用户名密码是否匹配","检查DCE侧是否配置了时钟频率"],
    "answer": ["A","B","C","D"],
    "explain": "PPP链路故障排查应逐层进行：先确认物理层与时钟配置正常，再检查两端封装是否均为PPP，最后核对认证方式与用户名密码是否一致。四项均为有效排查步骤。"
  },
  {
    "id": "HH099",
    "type": "fill",
    "chapter": "广域网与PPP",
    "stem": "PPP认证方式中，采用三次握手并通过MD5摘要校验、不在链路上传送密码的是 ______ 认证。",
    "options": [],
    "answer": ["CHAP"],
    "explain": "CHAP（Challenge Handshake Authentication Protocol）通过Challenge、Response、Success/Failure三次握手完成认证，密码仅参与本地MD5计算而不在链路上传输，安全性优于PAP。"
  },
  {
    "id": "HH100",
    "type": "judge",
    "chapter": "广域网与PPP",
    "stem": "PPP协议只能运行在同步串口上，不能在异步串口或以太网上运行。",
    "options": ["正确","错误"],
    "answer": "F",
    "explain": "PPP既可运行在同步串口上，也可运行在异步串口上（如拨号链路），还可以通过PPPoE封装在以太网上运行。其适用范围较广，并非仅限同步串口。"
  }
];
