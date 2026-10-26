window.BANK_HCIA_I = [
  {
    "id": "HI001",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6地址由多少位二进制数组成？",
    "options": ["32位", "64位", "128位", "256位"],
    "answer": "C",
    "explain": "IPv6地址长度为128位，通常写成8组、每组4位十六进制数。IPv4地址只有32位，二者长度相差4倍。"
  },
  {
    "id": "HI002",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6地址书写时，连续的全0组可以用双冒号::代替，且一个地址中只能出现一次。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "双冒号::用于压缩连续的全0组，为保持地址唯一可还原，一个地址中::只能使用一次。若使用两次则无法判断各压缩了多少组0。"
  },
  {
    "id": "HI003",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "下列IPv6地址书写正确的是？",
    "options": ["2001::0db8::1", "2001:db8:0:0:0:0:0:1", "2001:db8:0:0:0:0:0:1:2", "2001:db8:::1"],
    "answer": "B",
    "explain": "8组4位十六进制的完整写法完全合法，零组也可以写成单个0。其余写法中::出现两次、组数超过8组、出现:::均为非法。"
  },
  {
    "id": "HI004",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "地址2001:0DB8:0000:0000:0000:0000:0000:0001可以简写为？",
    "options": ["2001::DB8::1", "2001:DB8:0:0:1", "2001:DB8::1", "2001:DB8::0:1"],
    "answer": "C",
    "explain": "前导0可以省略，连续的全0组用::压缩一次，故简写为2001:DB8::1。其余写法要么::使用不当，要么组数不合法。"
  },
  {
    "id": "HI005",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "关于IPv6地址的书写规则，下列说法正确的有？",
    "options": ["每组4位十六进制中的前导0可以省略", "连续的0组可以省略，但每组内部的0不能省略", "::在一个地址中只能出现一次", "地址中可以使用大写字母"],
    "answer": ["A", "C", "D"],
    "explain": "前导0可省略、::只能一次、十六进制字母大小写均可。但组内部的0不能省略，例如2001不能写成201，故B错误。"
  },
  {
    "id": "HI006",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6组播地址的前缀是？",
    "options": ["2000::/3", "fe80::/10", "fc00::/7", "ff00::/8"],
    "answer": "D",
    "explain": "IPv6组播地址以11111111开头，即ff00::/8。2000::/3是全球单播，fe80::/10是链路本地，fc00::/7是唯一本地地址。"
  },
  {
    "id": "HI007",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6链路本地地址的前缀是？",
    "options": ["fec0::/10", "fe80::/10", "fc00::/7", "ff02::/16"],
    "answer": "B",
    "explain": "链路本地地址前缀为fe80::/10，仅在本地链路内有效，不能跨路由器转发。它可自动生成，常用于NDP等链路内通信。"
  },
  {
    "id": "HI008",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6唯一本地地址（ULA）的前缀是？",
    "options": ["fe80::/10", "2000::/3", "fc00::/7", "ff00::/8"],
    "answer": "C",
    "explain": "唯一本地地址前缀为fc00::/7，目前实际使用fd00::/8范围，相当于IPv4的私有地址。它只能在内网使用，不能在公网路由。"
  },
  {
    "id": "HI009",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6取消了广播地址，原广播的功能由组播和任意播实现。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IPv6地址类型只有单播、组播和任意播（Anycast），不再定义广播地址。原先广播承担的功能被组播地址（如ff02::1）所替代。"
  },
  {
    "id": "HI010",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6环回地址是？",
    "options": ["::", "fe80::1", "ff02::1", "::1"],
    "answer": "D",
    "explain": "::1是环回地址，相当于IPv4的127.0.0.1，用于本机测试。::为未指定地址，fe80::1是链路本地地址，ff02::1是所有节点组播地址。"
  },
  {
    "id": "HI011",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6未指定地址（全0地址）的表示及用途是？",
    "options": ["::1，用于本机环回测试", "::，用做DAD检测或地址未配置时的源地址", "fe80::，用于链路本地通信", "ff02::，用于组播通信"],
    "answer": "B",
    "explain": "未指定地址为::（128位全0），不能分配给接口。它常作为DAD重复地址检测报文和地址未配置时的源地址使用。"
  },
  {
    "id": "HI012",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6 中取代 ARP 完成链路层地址解析的协议是？",
    "options": ["NDP（邻居发现协议）", "DHCPv6", "ARPv6", "IGMPv6"],
    "answer": "A",
    "explain": "IPv6 取消了 ARP，改由 NDP（Neighbor Discovery Protocol，邻居发现协议）完成地址解析：通过 NS/NA（邻居请求/通告）获取对端的链路层地址，通过 RS/RA 完成路由器发现与地址自动配置。NDP 基于 ICMPv6 承载，但承担地址解析职能的是 NDP 机制；IPv6 中并不存在 ARPv6。"
  },
  {
    "id": "HI013",
    "type": "fill",
    "chapter": "IPv6基础",
    "stem": "IPv6全球单播地址的地址前缀是______（写出完整前缀，如xxxx::/n）。",
    "options": [],
    "answer": ["2000::/3"],
    "explain": "全球单播地址以001开头，即2000::/3，可在全球范围内路由。目前常用的2001::/16等均属于该范围。"
  },
  {
    "id": "HI014",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6中所有节点组播地址是？",
    "options": ["ff02::2", "ff02::1", "ff02::1:ff00:1", "ff01::1"],
    "answer": "B",
    "explain": "ff02::1是链路范围内所有节点的组播地址，相当于IPv4的广播。ff02::2是所有路由器组播地址，ff01::1是接口范围所有节点。"
  },
  {
    "id": "HI015",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6中所有路由器组播地址是？",
    "options": ["ff02::1", "ff02::9", "ff02::2", "ff02::1:2"],
    "answer": "C",
    "explain": "ff02::2为链路范围所有路由器组播地址，主机发送RS报文时使用该地址。ff02::9为RIPng路由器，ff02::1:2为DHCPv6服务器/中继。"
  },
  {
    "id": "HI016",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "被请求节点组播地址（Solicited-Node Multicast Address）的构成为？",
    "options": ["ff02::1:ff00:0/104 加上被请求地址的低24位", "ff02::2 加上被请求地址的低32位", "ff02::1:ff 加上被请求地址的高24位", "fe80::1:ff 加上被请求地址的低64位"],
    "answer": "A",
    "explain": "被请求节点组播地址前缀为ff02::1:ff00:0/104，后24位取自目标单播地址的低24位。它用于NS报文的目的地址，实现类似ARP的地址解析。"
  },
  {
    "id": "HI017",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "被请求节点组播地址可以用于重复地址检测和地址解析，其前缀长度为104位。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "被请求节点组播地址前缀ff02::1:ff00:0/104，后24位为单播地址低24位。DAD检测和NS地址解析都使用该组播地址，避免影响链路上其他节点。"
  },
  {
    "id": "HI018",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6基本报头的固定长度是多少字节？",
    "options": ["20字节", "32字节", "60字节", "40字节"],
    "answer": "D",
    "explain": "IPv6基本报头固定为40字节，比IPv4的20字节固定头更长。但IPv6报头字段简化，提高了路由器处理效率。"
  },
  {
    "id": "HI019",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "与IPv4报头相比，IPv6基本报头的变化包括？",
    "options": ["取消了报头校验和字段", "取消了选项字段，改用扩展报头实现", "取消了分片字段，分片由源端通过PMTU发现完成", "取消了源地址字段"],
    "answer": ["A", "B", "C"],
    "explain": "IPv6取消了校验和（由链路层和上层保证）、取消选项字段改用扩展报头、取消中间路由器分片，由源端做PMTU发现。但源地址和目的地址字段均保留。"
  },
  {
    "id": "HI020",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6基本报头中用于表示上层协议类型的字段是？",
    "options": ["Traffic Class", "Next Header", "Flow Label", "Hop Limit"],
    "answer": "B",
    "explain": "Next Header（下一报头）字段指明紧随基本报头之后是扩展报头还是上层协议（如TCP=6、UDP=17、ICMPv6=58）。它与IPv4的协议字段作用类似。"
  },
  {
    "id": "HI021",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6报头中的Hop Limit字段相当于IPv4报头中的哪个字段？",
    "options": ["TOS", "Protocol", "Identification", "TTL"],
    "answer": "D",
    "explain": "Hop Limit（跳数限制）与IPv4的TTL作用相同，每经过一台路由器减1，减到0则丢弃报文。目的是防止报文在环路上无限循环。"
  },
  {
    "id": "HI022",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6基本报头中不再包含校验和字段，因此中间路由器无需重新计算校验和。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IPv6取消了报头校验和，由链路层校验和上层协议（如TCP/UDP校验和）保证可靠性。这样减少了路由器每跳的处理开销。"
  },
  {
    "id": "HI023",
    "type": "fill",
    "chapter": "IPv6基础",
    "stem": "IPv6基本报头的长度为______字节，且长度固定不变。",
    "options": [],
    "answer": ["40", "40字节"],
    "explain": "IPv6基本报头固定40字节，通过扩展报头机制来携带可选信息。因此报头长度字段被取消，处理效率更高。"
  },
  {
    "id": "HI024",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6扩展报头中，用于分片处理的报头是？",
    "options": ["Hop-by-Hop Options Header", "Routing Header", "Destination Options Header", "Fragment Header"],
    "answer": "D",
    "explain": "Fragment Header（分片报头）用于标识分片信息。IPv6只允许源节点分片，中间路由器不再分片。"
  },
  {
    "id": "HI025",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6扩展报头中必须被路径上每台路由器处理的是？",
    "options": ["目的选项报头", "分片报头", "逐跳选项报头（Hop-by-Hop Options Header）", "认证报头"],
    "answer": "C",
    "explain": "逐跳选项报头必须紧跟在基本报头之后，且路径上每台路由器都要处理。其他扩展报头一般只由目的节点处理。"
  },
  {
    "id": "HI026",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "下列属于IPv6扩展报头的有？",
    "options": ["逐跳选项报头", "路由报头", "分片报头", "目的选项报头"],
    "answer": ["A", "B", "C", "D"],
    "explain": "常见扩展报头包括逐跳选项、路由、分片、目的选项、认证（AH）、封装安全载荷（ESP）等。它们通过Next Header字段串联成链。"
  },
  {
    "id": "HI027",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6扩展报头必须按照固定顺序出现，中间路由器需要处理所有扩展报头。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "扩展报头确实有推荐顺序，但并非每台路由器都处理所有扩展报头。通常只有逐跳选项报头必须被沿途路由器处理，其余由目的节点处理。"
  },
  {
    "id": "HI028",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6要求链路的最小MTU是多少字节？",
    "options": ["576字节", "1024字节", "1280字节", "1500字节"],
    "answer": "C",
    "explain": "IPv6规定链路最小MTU为1280字节，所有IPv6节点必须能够处理1280字节的报文。IPv4的最小MTU为576字节。"
  },
  {
    "id": "HI029",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6中路径MTU发现（PMTUD）的作用是？",
    "options": ["让中间路由器对报文进行分片", "让源端发现路径最小MTU并据此调整报文长度，避免分片", "强制所有链路使用1500字节MTU", "由目的端对分片进行重组"],
    "answer": "B",
    "explain": "IPv6中间路由器不对报文分片，源端通过PMTUD发现路径上的最小MTU，主动把报文裁剪到合适长度。若报文过大，路由器会回送ICMPv6 Packet Too Big消息。"
  },
  {
    "id": "HI030",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6中报文的分片只能由源节点进行，中间路由器不执行分片操作。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "IPv6取消了中间路由器分片功能，源节点通过PMTUD确定合适报文长度。若报文超过出接口MTU，路由器丢弃并回送Packet Too Big。"
  },
  {
    "id": "HI031",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "使用EUI-64规范生成接口标识时，需要在MAC地址中间插入什么？",
    "options": ["FFFF", "FFFE", "0000", "FE80"],
    "answer": "B",
    "explain": "EUI-64方式在MAC地址前24位和后24位之间插入FFFE，从而扩展为64位。例如MAC 00-1A-2B-3C-4D-5E生成接口标识001A:2BFF:FE3C:4D5E。"
  },
  {
    "id": "HI032",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "使用EUI-64生成接口标识时，还需要对哪个比特位进行翻转？",
    "options": ["第1字节最高位（U/L位）", "第1字节最低位", "第8字节最高位", "第4字节最低位"],
    "answer": "A",
    "explain": "EUI-64需要将MAC地址第一字节的U/L位（最高位起第7位）取反。例如MAC首字节00（00000000）翻转后为02（00000010）。"
  },
  {
    "id": "HI033",
    "type": "fill",
    "chapter": "IPv6基础",
    "stem": "EUI-64接口标识生成时，在MAC地址中间插入的16位十六进制数值是______。",
    "options": [],
    "answer": ["FFFE"],
    "explain": "插入FFFE是为了把48位MAC地址补齐为64位接口标识。插入后再翻转第一字节的U/L位，即得到EUI-64接口标识。"
  },
  {
    "id": "HI034",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "MAC地址为001A-2B3C-4D5E，采用EUI-64生成的接口标识是？",
    "options": ["021A:2BFF:FE3C:4D5E", "001A:2BFF:FE3C:4D5E", "021A:2BFF:FE3C:4D5F", "001A:2B3C:FFFE:4D5E"],
    "answer": "A",
    "explain": "先插入FFFE得到001A:2BFF:FE3C:4D5E，再将首字节00（00000000）的U/L位翻转得到02（00000010）。故结果为021A:2BFF:FE3C:4D5E。"
  },
  {
    "id": "HI035",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "EUI-64方式生成的接口标识会暴露主机的MAC地址，存在一定安全隐患。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "EUI-64接口标识可由MAC地址推导，攻击者能据此推断设备厂商和网卡信息。因此现在多采用随机生成的接口标识（RFC 4941隐私扩展）。"
  },
  {
    "id": "HI036",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "SLAAC（无状态地址自动配置）主要依靠哪两种ICMPv6报文实现？",
    "options": ["NS和NA", "Echo Request和Echo Reply", "RS和RA", "Redirect和Packet Too Big"],
    "answer": "C",
    "explain": "SLAAC通过路由器周期发送RA（路由器通告）报文、主机发送RS（路由器请求）报文来获取前缀信息。主机再结合接口标识生成全球单播地址。"
  },
  {
    "id": "HI037",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "RA报文中的M标志位置1表示？",
    "options": ["主机通过DHCPv6获取地址", "主机通过无状态方式获取地址", "该地址为链路本地地址", "该网络不支持IPv6"],
    "answer": "A",
    "explain": "M（Managed）标志置1表示地址通过DHCPv6有状态方式分配。置0则主机使用RA前缀加接口标识进行无状态自动配置。"
  },
  {
    "id": "HI038",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "RA报文中的O标志位置1表示？",
    "options": ["主机通过无状态方式获取地址", "该接口为路由器接口", "地址需要做重复地址检测", "主机通过DHCPv6获取其他配置信息（如DNS）"],
    "answer": "D",
    "explain": "O（Other）标志置1表示主机通过DHCPv6获取除地址外的其他配置信息，如DNS服务器地址。地址本身仍可无状态生成。"
  },
  {
    "id": "HI039",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "关于IPv6无状态自动配置（SLAAC），下列说法正确的有？",
    "options": ["主机通过RS/RA报文获取网络前缀", "接口标识可通过EUI-64或随机方式生成", "主机需要对生成的地址进行DAD检测", "必须部署DHCPv6服务器才能工作"],
    "answer": ["A", "B", "C"],
    "explain": "SLAAC依靠RS/RA获取前缀，接口标识可EUI-64或随机生成，生成后需做DAD检测。整个过程无需DHCPv6服务器，这正是无状态的含义。"
  },
  {
    "id": "HI040",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "IPv6邻居发现协议（NDP）中，用于地址解析的报文是？",
    "options": ["RS和RA", "Redirect", "NS和NA", "Echo Request"],
    "answer": "C",
    "explain": "NS（邻居请求）和NA（邻居通告）实现地址解析，功能类似IPv4的ARP。NS报文的目的地址为目标地址对应的被请求节点组播地址。"
  },
  {
    "id": "HI041",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "IPv6使用NDP协议实现地址解析和邻居状态跟踪，不再使用ARP协议。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "NDP基于ICMPv6实现地址解析、邻居可达性检测、重复地址检测和路由器发现。ARP在IPv6中已被完全替代。"
  },
  {
    "id": "HI042",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "重复地址检测（DAD）使用的报文是？",
    "options": ["NA报文，源地址为::1", "NS报文，源地址为::，目的地址为被请求节点组播地址", "RS报文，目的地址为ff02::2", "RA报文，目的地址为ff02::1"],
    "answer": "B",
    "explain": "DAD通过发送源地址为未指定地址::、目的地址为该地址对应被请求节点组播地址的NS报文实现。若收到NA回应，说明地址已被占用。"
  },
  {
    "id": "HI043",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "主机执行DAD检测后，若在指定时间内没有收到任何NA应答，说明？",
    "options": ["该地址已被其他节点占用", "链路上没有路由器", "该地址为链路本地地址", "该地址可以正常使用"],
    "answer": "D",
    "explain": "DAD检测中若无节点应答，说明地址唯一，主机可正常使用。若收到NA应答则说明地址冲突，需重新生成接口标识。"
  },
  {
    "id": "HI044",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "NDP（邻居发现协议）可以实现的功能包括？",
    "options": ["地址解析", "重复地址检测", "路由器发现", "邻居可达性检测"],
    "answer": ["A", "B", "C", "D"],
    "explain": "NDP通过NS/NA/RS/RA/Redirect五类报文实现地址解析、DAD、路由器发现、前缀发现、邻居可达性检测和重定向。"
  },
  {
    "id": "HI045",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "下列关于DHCPv6无状态方式（Stateless）的说法正确的是？",
    "options": ["服务器为主机分配IPv6地址", "不需要任何服务器", "主机地址由SLAAC生成，服务器只提供DNS等配置信息", "只能为链路本地地址提供服务"],
    "answer": "C",
    "explain": "DHCPv6无状态方式下主机地址由SLAAC自动生成，服务器只下发DNS等配置参数。有状态方式（Stateful）才由服务器统一分配地址。"
  },
  {
    "id": "HI046",
    "type": "judge",
    "chapter": "IPv6基础",
    "stem": "DHCPv6有状态方式（Stateful）由服务器统一分配IPv6地址，便于集中管理和审计。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "有状态DHCPv6由服务器分配地址并记录租约，便于地址规划与审计。RA中M标志置1即表示主机应使用有状态DHCPv6。"
  },
  {
    "id": "HI047",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "在华为VRP中，开启接口IPv6功能但不配置全球单播地址的命令是？",
    "options": ["ipv6 address auto", "ipv6 enable", "ipv6 address fe80::1 link-local", "undo ipv6"],
    "answer": "B",
    "explain": "ipv6 enable用于在接口上使能IPv6并自动生成链路本地地址，不配置全球单播地址。若要配置全球单播地址则使用ipv6 address命令。"
  },
  {
    "id": "HI048",
    "type": "fill",
    "chapter": "IPv6基础",
    "stem": "在华为 VRP 接口视图下，为接口配置一个全球单播地址所使用的命令关键字是 ipv6 ______。",
    "options": [],
    "answer": ["address","Address"],
    "explain": "在接口视图下执行 ipv6 address 2001:db8::1 64 即可配置全球单播地址，其中 ipv6 address 是命令关键字，后面依次跟地址与前缀长度。链路本地地址可用 ipv6 address auto link-local 自动生成。"
  },
  {
    "id": "HI049",
    "type": "single",
    "chapter": "IPv6基础",
    "stem": "在华为设备上查看接口IPv6地址简要信息的命令是？",
    "options": ["display ip interface brief", "display ipv6 routing-table", "display ipv6 neighbors", "display ipv6 interface brief"],
    "answer": "D",
    "explain": "display ipv6 interface brief可查看各接口的IPv6地址和状态。display ip interface brief显示的是IPv4接口信息。"
  },
  {
    "id": "HI050",
    "type": "multi",
    "chapter": "IPv6基础",
    "stem": "关于IPv6与IPv4的对比，下列说法正确的有？",
    "options": ["IPv6地址长度为128位，IPv4为32位", "IPv6取消了广播地址", "IPv6基本报头取消了校验和字段", "IPv6的地址配置只能手工进行"],
    "answer": ["A", "B", "C"],
    "explain": "IPv6地址128位、无广播、报头无校验和均正确。IPv6支持SLAAC和DHCPv6等多种自动配置方式，并非只能手工配置，故D错误。"
  },
  {
    "id": "HI051",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "华为VRP中，用户登录设备后默认处于哪个视图？",
    "options": ["系统视图", "用户视图", "接口视图", "协议视图"],
    "answer": "B",
    "explain": "登录后默认进入用户视图，提示符为<Huawei>。在用户视图只能执行查看类命令，不能修改配置。"
  },
  {
    "id": "HI052",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "系统视图的提示符是？",
    "options": ["<Huawei>", "[Huawei-GigabitEthernet0/0/1]", "[Huawei]", "(Huawei)"],
    "answer": "C",
    "explain": "系统视图提示符为[Huawei]，用方括号表示。尖括号<Huawei>是用户视图，[Huawei-GigabitEthernet0/0/1]是接口视图。"
  },
  {
    "id": "HI053",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "从用户视图进入系统视图的命令是？",
    "options": ["enable", "configure terminal", "system-view", "sysname"],
    "answer": "C",
    "explain": "华为VRP使用system-view命令从用户视图进入系统视图。configure terminal是思科设备的命令，sysname用于修改设备名称。"
  },
  {
    "id": "HI054",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "在华为设备上执行 save 命令后，配置文件会被保存到 Flash 中的 vrpcfg.zip 文件里，下次启动时加载。",
    "options": ["\u6b63\u786e", "\u9519\u8bef"],
    "answer": "T",
    "explain": "正确。save 会把当前正在运行的配置写入 Flash 中的 vrpcfg.zip（部分版本为 .cfg），下次启动时自动加载。这是\"当前配置\"与\"已保存配置\"的分界：只修改不保存，重启后配置会丢失。"
  },
  {
    "id": "HI055",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "在任意视图下使用return命令或按Ctrl+Z可以直接返回到用户视图。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "return命令用于从当前视图直接跳回用户视图，等价于连续执行多次quit。快捷键Ctrl+Z的作用与之相同。"
  },
  {
    "id": "HI056",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在命令行中输入?（问号）的作用是？",
    "options": ["删除当前字符", "补全命令关键字", "显示当前位置可用的命令或参数提示", "中断当前命令执行"],
    "answer": "C",
    "explain": "输入?可以列出当前位置可用的命令、关键字或参数说明，帮助用户正确输入。Tab键才是用于命令补全。"
  },
  {
    "id": "HI057",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在VRP命令行中，Tab键的主要作用是？",
    "options": ["显示帮助信息", "自动补全当前命令关键字", "删除整行命令", "切换视图"],
    "answer": "B",
    "explain": "Tab键用于自动补全命令关键字或参数，提高输入效率。?键用于显示帮助提示，两者功能不同。"
  },
  {
    "id": "HI058",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "华为VRP支持命令关键字缩写，只要输入的关键字能唯一标识该命令即可执行。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "VRP支持命令缩写，例如system-view可输入sys，display可输入dis。前提是缩写能唯一匹配到该命令，否则系统会提示歧义。"
  },
  {
    "id": "HI059",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "display this命令的作用是？",
    "options": ["显示当前视图下生效的配置", "显示设备全部配置", "显示下次启动配置文件", "显示设备版本信息"],
    "answer": "A",
    "explain": "display this显示当前视图下已经生效的配置，便于快速核对本视图参数。显示全部配置应使用display current-configuration。"
  },
  {
    "id": "HI060",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "在 VRP 中，quit 命令可以从任意视图直接退回到用户视图。",
    "options": ["\u6b63\u786e", "\u9519\u8bef"],
    "answer": "F",
    "explain": "错误。quit 每次只退回上一级视图，例如从接口视图退回系统视图。要从任意视图直接回到用户视图，应使用 return 命令或快捷键 Ctrl+Z。"
  },
  {
    "id": "HI061",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "华为设备保存当前配置的命令是？",
    "options": ["commit", "save", "write memory", "backup"],
    "answer": "B",
    "explain": "save命令把内存中的当前配置保存到存储介质，默认保存为vrpcfg.zip。若不保存，设备重启后配置会丢失。"
  },
  {
    "id": "HI062",
    "type": "fill",
    "chapter": "网络管理与VRP操作",
    "stem": "华为VRP设备执行save命令后，配置文件默认保存为______文件（写出文件名）。",
    "options": [],
    "answer": ["vrpcfg.zip", "vrpcfg"],
    "explain": "save命令默认将配置保存为vrpcfg.zip，该文件即为下次启动时加载的配置文件。可通过display saved-configuration查看其内容。"
  },
  {
    "id": "HI063",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "reset saved-configuration命令的作用是？",
    "options": ["清除当前内存中的配置", "重启设备", "清除设备上保存的配置文件", "恢复接口默认参数"],
    "answer": "C",
    "explain": "reset saved-configuration用于删除设备上保存的配置文件，下次启动将使用出厂配置。它不会立即影响设备当前的运行配置。"
  },
  {
    "id": "HI064",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "执行reset saved-configuration后，若紧接着执行reboot并选择不保存当前配置，设备将以出厂配置启动。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "删除保存的配置文件后，重启时若选择不保存当前配置，设备便加载出厂配置启动，从而实现恢复出厂设置。若选择保存则配置仍会被写回。"
  },
  {
    "id": "HI065",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "display saved-configuration 用于查看设备当前正在运行的配置。",
    "options": ["\u6b63\u786e", "\u9519\u8bef"],
    "answer": "F",
    "explain": "错误。display saved-configuration 查看的是保存在 Flash 中、下次启动将要加载的配置；查看当前正在运行的配置应使用 display current-configuration。两者可能不一致，这正是\"改了没保存\"的排查点。"
  },
  {
    "id": "HI066",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "华为设备用户级别中，最高管理级别是多少？",
    "options": ["0级", "1级", "3级", "15级"],
    "answer": "D",
    "explain": "VRP用户级别为0～15共16级，数值越大权限越高。0级为参观级，1级为监控级，2级为配置级，3～15级为管理级。"
  },
  {
    "id": "HI067",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "关于华为VRP用户级别，下列说法正确的有？",
    "options": ["0级为参观级，只能执行ping、tracert等诊断命令", "1级为监控级，可执行display类命令", "2级为配置级，可进行业务配置", "3～15级为管理级，可执行文件系统等操作"],
    "answer": ["A", "B", "C", "D"],
    "explain": "VRP用户级别0～15分级明确：0级参观级、1级监控级、2级配置级、3～15级管理级。级别越高可执行的命令范围越大。"
  },
  {
    "id": "HI068",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在命令行中删除光标前一个字符的快捷键是？",
    "options": ["Ctrl+C", "Backspace", "Ctrl+Z", "Ctrl+U"],
    "answer": "B",
    "explain": "Backspace用于删除光标前的一个字符。Ctrl+U删除整行，Ctrl+C中断当前命令执行，Ctrl+Z返回用户视图。"
  },
  {
    "id": "HI069",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "在VRP命令行中，Ctrl+C可以中断当前正在执行的命令或取消当前输入。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Ctrl+C用于中断当前命令的执行或放弃当前输入的命令行。例如display命令输出过长时可用它中止显示。"
  },
  {
    "id": "HI070",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "在 VRP 命令行中，Tab 键可用于补全命令关键字，而 ? 键用于显示当前位置可用的命令及帮助信息。",
    "options": ["\u6b63\u786e", "\u9519\u8bef"],
    "answer": "T",
    "explain": "正确。输入命令的不完整前缀后按 Tab 可自动补全，若有多个匹配则列出候选；? 键用于显示当前位置可用的命令及参数说明。两者配合可显著提高命令输入效率。"
  },
  {
    "id": "HI071",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "配置设备系统时钟为2024年6月1日10时30分的命令是？",
    "options": ["set time 2024-06-01 10:30", "time 2024-06-01 10:30:00", "clock set 2024-06-01", "clock datetime 10:30:00 2024-06-01"],
    "answer": "D",
    "explain": "华为VRP使用clock datetime HH:MM:SS YYYY-MM-DD格式设置系统时间，需在用户视图执行。准确的时钟对日志和证书校验很重要。"
  },
  {
    "id": "HI072",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "查看华为设备软件版本和硬件信息的命令是？",
    "options": ["display device", "display version", "display interface", "display clock"],
    "answer": "B",
    "explain": "display version显示VRP软件版本、设备型号和运行时间等信息。display device主要显示单板、电源、风扇等硬件状态。"
  },
  {
    "id": "HI073",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "查看设备各单板、电源和风扇等硬件状态的命令是？",
    "options": ["display version", "display cpu-usage", "display device", "display memory-usage"],
    "answer": "C",
    "explain": "display device用于查看设备各部件的硬件状态，如单板在位情况、电源和风扇工作状态。display version侧重于软件版本信息。"
  },
  {
    "id": "HI074",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "查看接口详细信息的命令是？",
    "options": ["display interface GigabitEthernet0/0/1", "display ip interface", "display version", "display arp"],
    "answer": "A",
    "explain": "display interface加接口名可查看该接口的双工、速率、收发报文统计等详细信息。display ip interface主要显示三层IP相关信息。"
  },
  {
    "id": "HI075",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "reset saved-configuration 命令会立即清空设备的运行配置并重启设备。",
    "options": ["\u6b63\u786e", "\u9519\u8bef"],
    "answer": "F",
    "explain": "错误。reset saved-configuration 只是清除 Flash 中保存的配置文件，并不立即生效，必须配合 reboot 命令并选择不保存当前配置，重启后设备才会以出厂配置启动。"
  },
  {
    "id": "HI076",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "查看设备ARP表项的命令是？",
    "options": ["display mac-address", "display ip routing-table", "display arp", "display ndp"],
    "answer": "C",
    "explain": "display arp用于查看IP地址与MAC地址的映射关系。display mac-address查看的是MAC地址表，二者作用不同。"
  },
  {
    "id": "HI077",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "查看交换机MAC地址表的命令是？",
    "options": ["display arp", "display interface", "display vlan", "display mac-address"],
    "answer": "D",
    "explain": "display mac-address显示交换机学习到的MAC地址表项，包括MAC、VLAN、出接口等信息。display arp显示的是三层ARP映射。"
  },
  {
    "id": "HI078",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "下列可用于查看设备运行状态信息的命令有？",
    "options": ["display cpu-usage", "display memory-usage", "display logbuffer", "display current-configuration"],
    "answer": ["A", "B", "C"],
    "explain": "display cpu-usage查看CPU占用率，display memory-usage查看内存占用率，display logbuffer查看日志缓冲区。display current-configuration显示的是配置而非运行状态。"
  },
  {
    "id": "HI079",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "清除接口统计计数信息的命令是？",
    "options": ["clear interface", "reset counters interface", "undo interface", "reset interface counters all delete"],
    "answer": "B",
    "explain": "reset counters interface可清除接口的报文统计计数，便于重新观察流量。不加接口名则清除所有接口的统计信息。"
  },
  {
    "id": "HI080",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "调试信息（debugging）会占用较多CPU资源，在生产环境中应谨慎使用并及时关闭。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "debugging命令会产生大量调试信息并消耗CPU和内存资源，严重时影响业务转发。应在必要时短暂开启，排障后立即用undo debugging all关闭。"
  },
  {
    "id": "HI081",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "要让调试信息输出到终端显示，需要执行的命令是？",
    "options": ["terminal monitor和terminal debugging", "display debugging", "logging on", "info-center enable"],
    "answer": "A",
    "explain": "terminal monitor开启终端显示功能，terminal debugging允许调试信息输出到终端，二者需配合使用才能看到debugging信息。"
  },
  {
    "id": "HI082",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "华为设备默认情况下 VTY 用户界面的认证方式为 none，即无需认证即可登录。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "错误。VRP 出于安全考虑默认要求对 VTY 登录进行认证；实际部署中应显式配置 authentication-mode aaa 并配合用户名密码，或使用 SSH 替代 Telnet。把认证方式设为 none 会带来严重安全风险。"
  },
  {
    "id": "HI083",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "ping命令中指定源地址的参数是？",
    "options": ["-a", "-c", "-s", "-t"],
    "answer": "A",
    "explain": "ping的-a参数用于指定发送ICMP报文时使用的源IP地址。这在多接口设备上验证特定源地址的可达性时非常有用。"
  },
  {
    "id": "HI084",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在华为设备上，ping命令的-c参数表示？",
    "options": ["指定源地址", "指定报文长度", "指定发送报文个数", "指定超时时间"],
    "answer": "C",
    "explain": "ping -c用于指定发送ICMP回显请求报文的个数，默认发送5个。指定源地址用-a，指定报文长度用-s，指定超时时间用-t。"
  },
  {
    "id": "HI085",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "关于ping命令的参数，下列说法正确的有？",
    "options": ["-s用于指定发送报文的长度", "-t用于指定等待回应报文的超时时间", "-a用于指定源IP地址", "-c用于指定重复发送的次数"],
    "answer": ["A", "B", "C", "D"],
    "explain": "ping的常用参数：-a指定源地址、-c指定发送次数、-s指定报文长度、-t指定超时时间。合理组合可用于路径MTU和连通性排查。"
  },
  {
    "id": "HI086",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "tracert命令的主要作用是？",
    "options": ["测试链路带宽", "查看路由表内容", "检测地址冲突", "逐跳显示报文从源到目的所经过的路由器"],
    "answer": "D",
    "explain": "tracert通过逐跳发送TTL递增的探测报文，显示到达目的所经过的每一跳地址和时延，用于定位路径中断点。"
  },
  {
    "id": "HI087",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "tracert命令可以用于定位网络路径中哪一跳出现故障或延迟异常。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "tracert逐跳输出各跳地址与往返时延，当某跳之后全部超时，通常可判断故障出现在该位置。它是路径类故障排查的常用工具。"
  },
  {
    "id": "HI088",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "查看设备当前目录下文件列表的命令是？",
    "options": ["pwd", "dir", "display file", "ls"],
    "answer": "B",
    "explain": "dir命令用于显示当前目录下的文件和子目录信息，包括文件大小和剩余存储空间。VRP中不使用ls命令。"
  },
  {
    "id": "HI089",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "在VRP中删除文件名为test.txt的文件的命令是？",
    "options": ["remove test.txt", "erase test.txt", "delete test.txt", "undo test.txt"],
    "answer": "C",
    "explain": "delete命令删除文件，删除后的文件通常放入回收站，可用undelete恢复。若要彻底删除需使用delete /unreserved。"
  },
  {
    "id": "HI090",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "在 VRP 中，undo 命令用于删除或取消某项配置，例如 undo sysname 可恢复默认设备名。",
    "options": ["\u6b63\u786e", "\u9519\u8bef"],
    "answer": "T",
    "explain": "正确。在配置命令前加 undo 即可取消该项配置，例如 undo sysname、undo ip address。它是 VRP 中最常用的配置回退手段。"
  },
  {
    "id": "HI091",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "将设备作为TFTP客户端，从TFTP服务器下载文件的命令是？",
    "options": ["tftp 192.168.1.1 get vrpcfg.zip", "tftp 192.168.1.1 put vrpcfg.zip", "ftp get vrpcfg.zip", "copy tftp vrpcfg.zip"],
    "answer": "A",
    "explain": "使用tftp命令连接服务器后，get用于从服务器下载文件到本地，put用于将本地文件上传到服务器。这是配置文件备份与恢复的常见操作。"
  },
  {
    "id": "HI092",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "设备启动时，如果不存在配置文件，将以出厂配置（缺省配置）启动。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "设备启动时若找不到指定的配置文件，会加载出厂缺省配置运行。设备首次上电或执行reset saved-configuration后重启即属于这种情况。"
  },
  {
    "id": "HI093",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "华为路由器的启动过程正确顺序是？",
    "options": ["加载配置文件→加载BootROM→加载系统软件", "加载系统软件→加载BootROM→加载配置文件", "进入命令行→加载配置文件→加载系统软件", "加载BootROM→加载系统软件→加载配置文件→进入命令行"],
    "answer": "D",
    "explain": "设备上电后先运行BootROM进行硬件自检和引导，再加载VRP系统软件，然后加载配置文件，最后进入命令行界面。"
  },
  {
    "id": "HI094",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "关于BootROM的作用，下列说法正确的是？",
    "options": ["负责业务报文的转发", "负责路由计算", "负责设备的基本引导、自检和系统软件加载", "负责用户权限管理"],
    "answer": "C",
    "explain": "BootROM是设备上电后首先运行的引导程序，负责硬件自检、引导加载系统软件，并提供密码恢复等维护功能。它不参与业务转发。"
  },
  {
    "id": "HI095",
    "type": "single",
    "chapter": "网络管理与VRP操作",
    "stem": "首次对华为设备进行本地配置，通常使用哪种接口？",
    "options": ["Telnet", "SSH", "SNMP", "Console口"],
    "answer": "D",
    "explain": "设备初次上电没有IP地址，需通过Console口（或Mini USB口）以本地方式登录进行初始配置。配置IP地址后才可通过Telnet或SSH远程登录。"
  },
  {
    "id": "HI096",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "下列属于华为设备本地登录方式的有？",
    "options": ["Console口登录", "Mini USB口登录", "Telnet登录", "SSH登录"],
    "answer": ["A", "B"],
    "explain": "Console口和Mini USB口属于本地登录方式，需物理连接。Telnet和SSH属于远程登录方式，要求设备已配置IP地址并可达。"
  },
  {
    "id": "HI097",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "与Telnet相比，SSH协议在传输过程中对数据进行了加密，安全性更高。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Telnet以明文传输用户名、密码和配置数据，容易被抓包窃取。SSH采用加密传输，并对身份进行认证，因此是推荐的远程管理方式。"
  },
  {
    "id": "HI098",
    "type": "judge",
    "chapter": "网络管理与VRP操作",
    "stem": "查看设备当前 CPU 占用率的命令是 display memory-usage。",
    "options": ["\u6b63\u786e", "\u9519\u8bef"],
    "answer": "F",
    "explain": "错误。display memory-usage 查看的是内存占用情况；查看 CPU 占用率应使用 display cpu-usage。两者常配合使用来定位设备性能瓶颈。"
  },
  {
    "id": "HI099",
    "type": "fill",
    "chapter": "网络管理与VRP操作",
    "stem": "华为VRP中，在系统视图下进入接口配置视图需要执行的命令是 interface ______（以GigabitEthernet0/0/1为例，写出接口名）。",
    "options": [],
    "answer": ["GigabitEthernet0/0/1", "GigabitEthernet 0/0/1", "GE0/0/1"],
    "explain": "在系统视图下使用interface加接口类型和编号进入相应接口视图。接口名可缩写，例如GigabitEthernet0/0/1可写作GE0/0/1。"
  },
  {
    "id": "HI100",
    "type": "multi",
    "chapter": "网络管理与VRP操作",
    "stem": "关于VRP命令行视图，下列说法正确的有？",
    "options": ["用户视图提示符为<Huawei>", "系统视图提示符为[Huawei]", "接口视图提示符为[Huawei-GigabitEthernet0/0/1]", "在用户视图下可以直接修改接口IP地址"],
    "answer": ["A", "B", "C"],
    "explain": "用户视图、系统视图、接口视图的提示符分别为<Huawei>、[Huawei]、[Huawei-GigabitEthernet0/0/1]。修改接口IP地址必须先进入系统视图和接口视图，故D错误。"
  }
];