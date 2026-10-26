window.BANK_HCIA_A = [
  {
    "id": "HA001",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "OSI参考模型共分为七层，下列哪一层负责为数据包选择转发路径并实现逻辑寻址？",
    "options": [
      "物理层",
      "数据链路层",
      "网络层",
      "传输层"
    ],
    "answer": "C",
    "explain": "网络层位于OSI第三层，负责逻辑寻址（IP地址）和路由选择，把数据包从源网络转发到目的网络。物理层处理比特流传输，数据链路层处理MAC寻址，传输层负责端到端可靠性。"
  },
  {
    "id": "HA002",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "在OSI参考模型中，数据链路层的协议数据单元（PDU）被称为什么？",
    "options": [
      "比特",
      "帧",
      "包",
      "段"
    ],
    "answer": "B",
    "explain": "各层PDU自下而上分别为：物理层比特、数据链路层帧、网络层包、传输层段、应用层数据。数据链路层在帧头中加入源和目的MAC地址实现同网段寻址。"
  },
  {
    "id": "HA003",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "TCP/IP四层模型中，ARP协议工作在哪个层次？",
    "options": [
      "网络接口层",
      "网络层",
      "传输层",
      "应用层"
    ],
    "answer": "B",
    "explain": "在TCP/IP四层模型中，ARP用于根据IP地址解析出对应MAC地址，属于网络层协议。它虽然产生二层广播帧，但逻辑功能归类为网络层。"
  },
  {
    "id": "HA004",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "TCP报文段头部的最小长度是多少字节？",
    "options": [
      "8",
      "16",
      "20",
      "24"
    ],
    "answer": "C",
    "explain": "TCP头部固定部分为20字节，加上最多40字节的选项字段，最大为60字节。UDP头部固定为8字节，比TCP简单但不提供可靠性保证。"
  },
  {
    "id": "HA005",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "下列关于UDP的描述，正确的是哪一项？",
    "options": [
      "UDP提供面向连接的可靠传输",
      "UDP通过三次握手建立连接",
      "UDP头部长度固定为8字节",
      "UDP提供流量控制和重传机制"
    ],
    "answer": "C",
    "explain": "UDP是无连接的传输层协议，头部固定8字节，仅包含源端口、目的端口、长度和校验和。它不提供确认、重传、排序和流量控制，因此开销小、时延低。"
  },
  {
    "id": "HA006",
    "type": "multi",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "下列关于TCP三次握手的描述，正确的有哪些？（多选）",
    "options": [
      "第一个报文携带SYN标志位",
      "第二个报文同时携带SYN和ACK标志位",
      "第三个报文携带ACK标志位",
      "第三次握手由客户端发起请求建立连接"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "TCP三次握手依次为SYN、SYN+ACK、ACK，前两个报文由客户端和服务器分别发出，第三个ACK仍由客户端发出但属于确认而非新请求。三次握手用于同步双方序号并确认双向可达。"
  },
  {
    "id": "HA007",
    "type": "multi",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "下列关于数据封装与解封装的描述，正确的有哪些？（多选）",
    "options": [
      "发送方数据封装自上而下逐层添加首部",
      "接收方解封装自下而上逐层剥离首部",
      "传输层封装添加的是TCP或UDP首部",
      "数据链路层封装添加的是IP首部"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "发送方从应用层向下逐层封装，接收方从物理层向上逐层解封装。传输层添加TCP/UDP首部，网络层添加IP首部，数据链路层添加以太网帧头帧尾。因此选项D把两层职责弄反了。"
  },
  {
    "id": "HA008",
    "type": "judge",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "在OSI参考模型中，会话层负责建立、管理和终止会话，并对数据传输进行同步。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "OSI第五层为会话层，负责建立、维护和拆除会话连接，并设置同步点以便在通信中断后从检查点恢复。表示层负责数据格式转换与加密，应用层面向具体应用。"
  },
  {
    "id": "HA009",
    "type": "judge",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "TCP连接的正常释放过程需要四次挥手，因为TCP连接是全双工的，每个方向都需要单独关闭。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "TCP是全双工通信，关闭时发送方和接收方各需发送一个FIN并得到ACK确认，因此通常为四次挥手。半关闭状态下，一端仍可继续发送数据。"
  },
  {
    "id": "HA010",
    "type": "judge",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "OSI参考模型的七层自下而上依次为物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "这是OSI标准的分层顺序，可用口诀“物数网传会表应”记忆。下三层面向数据通信，上三层面向数据处理，传输层承上启下。"
  },
  {
    "id": "HA011",
    "type": "fill",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "OSI参考模型共分为______层。",
    "options": [],
    "answer": [
      "7",
      "七"
    ],
    "explain": "OSI参考模型自下而上分为物理层、数据链路层、网络层、传输层、会话层、表示层、应用层，共七层。TCP/IP模型则划分为四层。"
  },
  {
    "id": "HA012",
    "type": "fill",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "UDP报文头部长度固定为______字节。",
    "options": [],
    "answer": [
      "8",
      "八"
    ],
    "explain": "UDP头部固定8字节，包含源端口、目的端口、长度、校验和四个字段各2字节。TCP头部最小为20字节，比UDP多出序号、确认号、标志位和窗口等字段。"
  },
  {
    "id": "HA013",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "下列哪一项不属于TCP/IP模型中的应用层协议？",
    "options": [
      "HTTP",
      "FTP",
      "ICMP",
      "Telnet"
    ],
    "answer": "C",
    "explain": "ICMP是网络层协议，用于传递差错和控制报文，如ping和tracert都基于ICMP。HTTP、FTP、Telnet均为应用层协议。"
  },
  {
    "id": "HA014",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "当主机A需要访问同一网段内主机B时，数据帧的目的MAC地址是什么？",
    "options": [
      "主机A的MAC地址",
      "主机B的MAC地址",
      "网关的MAC地址",
      "广播MAC地址"
    ],
    "answer": "B",
    "explain": "同一网段内通信属于二层直接转发，目的MAC为对端主机B的MAC地址。只有跨网段通信时，目的MAC才封装为网关（下一跳）的MAC地址，而目的IP仍为最终主机。"
  },
  {
    "id": "HA015",
    "type": "single",
    "chapter": "网络基础与OSI/TCP-IP模型",
    "stem": "TCP首部中的窗口字段的主要作用是什么？",
    "options": [
      "标识报文的优先级",
      "指示报文是否为紧急数据",
      "记录IP地址信息",
      "实现流量控制，通告可接收的数据量"
    ],
    "answer": "D",
    "explain": "TCP窗口字段用于通告本端当前可接收的字节数，实现滑动窗口机制的流量控制，避免发送方发送过快导致接收方缓冲区溢出。拥塞控制则由拥塞窗口等机制配合完成。"
  },
  {
    "id": "HA016",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "以太网MAC地址的长度是多少位？",
    "options": [
      "32位",
      "48位",
      "64位",
      "128位"
    ],
    "answer": "B",
    "explain": "MAC地址长度为48比特，通常用12位十六进制数表示，如00e0-fc12-3456。其中前24位为OUI厂商标识，后24位由厂商自行分配。"
  },
  {
    "id": "HA017",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "交换机进行MAC地址学习时，是依据数据帧中的哪个字段建立的？",
    "options": [
      "目的MAC地址",
      "源IP地址",
      "源MAC地址",
      "以太网类型字段"
    ],
    "answer": "C",
    "explain": "交换机收到帧后，把帧的源MAC地址与接收端口绑定写入MAC地址表。转发时则查询目的MAC地址对应的出端口，若查不到则进行泛洪。"
  },
  {
    "id": "HA018",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "交换机收到一个目的MAC地址在MAC表中不存在的数据帧时，会如何处理？",
    "options": [
      "直接丢弃该帧",
      "从接收端口原路返回",
      "除接收端口外泛洪到本VLAN内所有其他端口",
      "上报给CPU后丢弃"
    ],
    "answer": "C",
    "explain": "这种帧称为未知单播帧，交换机会在本VLAN内除入端口以外的所有端口泛洪，以保证目的主机能够收到。若目的主机回复，交换机即可学习到其MAC地址。"
  },
  {
    "id": "HA019",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "下列哪种交换机转发方式在收到帧的完整帧头和目的MAC地址后立即开始转发？",
    "options": [
      "存储转发",
      "无碎片转发",
      "直通转发",
      "碎片隔离"
    ],
    "answer": "C",
    "explain": "直通转发只需读取目的MAC地址（前6字节）即开始转发，时延最小但会转发CRC错误的帧。存储转发需要接收完整帧并校验后才转发，可靠性最高但时延较大。"
  },
  {
    "id": "HA020",
    "type": "multi",
    "chapter": "以太网与交换机基础",
    "stem": "交换机常见的转发模式包括下列哪些？（多选）",
    "options": [
      "存储转发",
      "直通转发",
      "无碎片转发",
      "广播转发"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "以太网交换机有三种转发模式：存储转发（收完整帧并校验）、直通转发（读目的MAC即转发）、无碎片转发（读取前64字节避免转发碎片帧）。广播转发是帧的传播方式而非转发模式。"
  },
  {
    "id": "HA021",
    "type": "multi",
    "chapter": "以太网与交换机基础",
    "stem": "下列关于ARP协议的描述，正确的有哪些？（多选）",
    "options": [
      "ARP请求报文以广播方式发送",
      "ARP应答报文通常以单播方式发送",
      "ARP请求帧的目的MAC地址为FFFF-FFFF-FFFF",
      "ARP用于根据MAC地址解析出IP地址"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "ARP的作用是根据IP地址解析出MAC地址，请求以广播发送、应答以单播回复。选项D把解析方向说反了，根据MAC查IP的是RARP。"
  },
  {
    "id": "HA022",
    "type": "judge",
    "chapter": "以太网与交换机基础",
    "stem": "交换机在转发数据帧时，即使目的MAC地址与源MAC地址在同一端口，也会将该帧泛洪到其他所有端口。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "若帧的目的MAC对应的出端口就是接收该帧的端口，说明该主机与本端口相连，交换机会直接丢弃该帧而不会泛洪。这样可以避免不必要的链路带宽浪费。"
  },
  {
    "id": "HA023",
    "type": "judge",
    "chapter": "以太网与交换机基础",
    "stem": "以太网使用CSMA/CD机制来避免共享介质上的数据冲突。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "传统共享式以太网采用CSMA/CD（载波侦听多路访问/冲突检测）机制：先监听信道空闲再发送，发送中检测冲突并退避重发。在全双工交换式以太网中不再需要该机制。"
  },
  {
    "id": "HA024",
    "type": "judge",
    "chapter": "以太网与交换机基础",
    "stem": "以太网II帧格式中，类型（Type）字段用于标识上层协议，例如0x0800表示上层为IP协议。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "Ethernet II帧格式包含目的MAC、源MAC、类型、数据和FCS，类型字段标识上层协议。0x0800代表IPv4，0x0806代表ARP，0x86DD代表IPv6。"
  },
  {
    "id": "HA025",
    "type": "fill",
    "chapter": "以太网与交换机基础",
    "stem": "MAC地址长度为48比特，通常写成______位十六进制数的形式。",
    "options": [],
    "answer": [
      "12",
      "十二"
    ],
    "explain": "48比特等于12个十六进制数字（每4比特对应1位十六进制）。例如00e0-fc12-3456即由12个十六进制字符组成，常用4位一组加连字符表示。"
  },
  {
    "id": "HA026",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "主机A与主机B不在同一网段，主机A发送数据给主机B时，帧的目的MAC地址是什么？",
    "options": [
      "主机B的MAC地址",
      "主机A的MAC地址",
      "主机A所在网段网关接口的MAC地址",
      "全F广播MAC地址"
    ],
    "answer": "C",
    "explain": "跨网段通信时，主机A发现目的IP不在本网段，于是把数据交给网关。帧的目的MAC封装为网关接口的MAC，目的IP仍为主机B的IP地址。"
  },
  {
    "id": "HA027",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "关于交换机MAC地址表的老化机制，下列描述正确的是哪一项？",
    "options": [
      "表项永不老化",
      "表项只能手工删除",
      "表项在默认老化时间300秒内无流量后会被删除",
      "表项老化时间为30秒"
    ],
    "answer": "C",
    "explain": "华为交换机MAC地址表项默认老化时间为300秒，若在该时间内未再收到以该MAC为源地址的帧，表项将被删除。可通过命令调整老化时间。"
  },
  {
    "id": "HA028",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "二层交换机与集线器（Hub）相比，其最本质的优势是什么？",
    "options": [
      "端口数量更多",
      "可以隔离冲突域，实现端口间独立带宽",
      "可以隔离广播域",
      "支持路由功能"
    ],
    "answer": "B",
    "explain": "集线器工作在物理层，所有端口属于同一冲突域，共享带宽；交换机工作在数据链路层，每个端口是独立的冲突域，可实现全双工通信。隔离广播域需要VLAN或路由器。"
  },
  {
    "id": "HA029",
    "type": "single",
    "chapter": "以太网与交换机基础",
    "stem": "以太网中最小帧长为64字节，其主要目的是什么？",
    "options": [
      "提高传输效率",
      "便于交换机进行MAC学习",
      "减少CRC校验开销",
      "保证发送方在发送完毕前能够检测到冲突"
    ],
    "answer": "D",
    "explain": "CSMA/CD要求发送方在发送过程中持续检测冲突，若帧太短则可能在检测到冲突前已发送完毕。64字节对应10Mbps以太网的最小碰撞检测时间，因此成为标准最小帧长。"
  },
  {
    "id": "HA030",
    "type": "multi",
    "chapter": "以太网与交换机基础",
    "stem": "下列关于广播域与冲突域的描述，正确的有哪些？（多选）",
    "options": [
      "交换机的每个端口是一个独立的冲突域",
      "交换机默认所有端口属于同一个广播域",
      "路由器可以隔离广播域",
      "集线器的每个端口是一个独立的冲突域"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "交换机每端口隔离冲突域，但默认所有端口同属一个广播域，需用VLAN划分广播域。路由器（或三层设备）可隔离广播域；集线器所有端口同属一个冲突域。"
  },
  {
    "id": "HA031",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "IEEE 802.1Q标签（Tag）的总长度是多少字节？",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": "B",
    "explain": "802.1Q标签共4字节，其中TPID为2字节（固定0x8100），TCI为2字节（含3位优先级、1位CFI和12位VLAN ID）。插入标签后以太网帧最大长度由1518字节变为1522字节。"
  },
  {
    "id": "HA032",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "802.1Q标签中VLAN ID字段的长度是多少位？",
    "options": [
      "8位",
      "12位",
      "10位",
      "16位"
    ],
    "answer": "B",
    "explain": "VLAN ID字段占12比特，可表示0～4095共4096个值。其中0和4095为保留值，因此实际可用的VLAN ID范围是1～4094。"
  },
  {
    "id": "HA033",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "下列关于VLAN 1的描述，正确的是哪一项？",
    "options": [
      "VLAN 1可以被删除",
      "VLAN 1只能用于管理",
      "VLAN 1不能承载业务流量",
      "VLAN 1是默认VLAN，不能被删除"
    ],
    "answer": "D",
    "explain": "VLAN 1是系统默认VLAN，所有接口默认属于VLAN 1，且不能被删除。用户可以直接使用VLAN 1承载业务，但不建议在大型网络中这样做。"
  },
  {
    "id": "HA034",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "在华为交换机上，将接口GE0/0/1配置为Access类型并加入VLAN 10，正确的命令是？",
    "options": [
      "port link-type access / port default vlan 10",
      "port link-type trunk / port trunk allow-pass vlan 10",
      "port link-type hybrid / port hybrid vlan 10 tagged",
      "vlan 10 / port link-type access"
    ],
    "answer": "A",
    "explain": "Access接口配置需先执行port link-type access指定链路类型，再用port default vlan 10把接口加入VLAN 10。Access接口只能属于一个VLAN，发出的帧不带标签。"
  },
  {
    "id": "HA035",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "下列关于Trunk接口的描述，正确的有哪些？（多选）",
    "options": [
      "Trunk接口可以允许多个VLAN通过",
      "Trunk接口的默认PVID为1",
      "Trunk接口发出的帧一定携带标签",
      "port trunk allow-pass vlan命令用于配置允许通过的VLAN"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "Trunk接口可承载多个VLAN，默认PVID为1，通过allow-pass命令指定允许列表。当发出的帧属于PVID对应VLAN时会被剥离标签，因此选项C的“一定携带标签”不成立。"
  },
  {
    "id": "HA036",
    "type": "multi",
    "chapter": "VLAN与Trunk",
    "stem": "下列关于Hybrid接口的描述，正确的有哪些？（多选）",
    "options": [
      "Hybrid接口可以允许多个VLAN的帧通过",
      "Hybrid接口可以对不同VLAN的帧分别配置带标签或不带标签发送",
      "Hybrid接口只能属于一个VLAN",
      "port hybrid untagged vlan命令用于配置某VLAN的帧以不带标签方式发送"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explain": "Hybrid接口兼具Access和Trunk的特性，可同时承载多个VLAN，并能为每个VLAN单独指定tagged或untagged发送方式，常用于连接IP电话或服务器。选项C描述的是Access接口的特点。"
  },
  {
    "id": "HA037",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "VLAN可以隔离广播域，同一VLAN内的主机可以直接进行二层通信，不同VLAN之间的通信必须经过三层设备。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "VLAN的本质是把一个物理交换机在逻辑上划分为多个广播域，同一VLAN内属于同一广播域可二层互通。不同VLAN属于不同广播域，必须借助路由器或三层交换机进行三层转发。"
  },
  {
    "id": "HA038",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "华为交换机的Access接口在发送数据帧时，如果该帧所属VLAN与接口PVID相同，则会剥离VLAN标签后再发送。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "Access接口只属于一个VLAN，其PVID即该VLAN ID。发出的帧会去掉标签以普通以太网帧形式发送，因为对端主机不需要也不识别VLAN标签。"
  },
  {
    "id": "HA039",
    "type": "judge",
    "chapter": "VLAN与Trunk",
    "stem": "在华为交换机上，使用port trunk allow-pass vlan 10 20命令可以允许VLAN 10和VLAN 20的帧通过该Trunk接口。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "port trunk allow-pass vlan命令用于配置Trunk接口的允许VLAN列表，可跟多个VLAN ID或VLAN范围（如vlan 10 to 20）。只有允许列表中的VLAN帧才能通过该接口。"
  },
  {
    "id": "HA040",
    "type": "fill",
    "chapter": "VLAN与Trunk",
    "stem": "802.1Q标签中，TPID字段的固定取值为0x______。",
    "options": [],
    "answer": [
      "8100"
    ],
    "explain": "802.1Q标签的TPID字段固定为0x8100，用于标识该帧携带VLAN标签。接收设备通过检查该字段判断是否需要按带标签帧进行处理。"
  },
  {
    "id": "HA041",
    "type": "fill",
    "chapter": "VLAN与Trunk",
    "stem": "VLAN ID由12比特表示，其中0和4095为保留值，因此可用的VLAN ID范围是1～______。",
    "options": [],
    "answer": [
      "4094"
    ],
    "explain": "12比特可表示0～4095共4096个取值，其中0和4095被保留，所以用户可以配置的VLAN ID为1～4094。VLAN 1为默认VLAN且不可删除。"
  },
  {
    "id": "HA042",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "两台交换机通过Trunk链路互连，若某VLAN未在Trunk接口的允许列表中，则该VLAN的帧会如何处理？",
    "options": [
      "照常转发",
      "被丢弃",
      "自动加入允许列表",
      "转为广播发送"
    ],
    "answer": "B",
    "explain": "Trunk接口只转发允许列表（allow-pass vlan）中指定的VLAN帧，未在列表中的VLAN帧会被直接丢弃。配置Trunk时必须确保两端允许的VLAN列表一致。"
  },
  {
    "id": "HA043",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "下列关于GVRP的描述，正确的是哪一项？",
    "options": [
      "GVRP用于动态注册和注销VLAN信息",
      "GVRP用于VLAN间路由",
      "GVRP是华为私有协议",
      "GVRP可以替代STP消除环路"
    ],
    "answer": "A",
    "explain": "GVRP（GARP VLAN Registration Protocol）是IEEE 802.1Q定义的VLAN注册协议，可在交换机之间动态传播和注册VLAN配置，减少手工配置。它是通用标准协议而非华为私有协议。"
  },
  {
    "id": "HA044",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "某交换机上配置interface GigabitEthernet 0/0/1进入接口视图后，执行port link-type hybrid，该接口默认的PVID是多少？",
    "options": [
      "1",
      "10",
      "100",
      "4094"
    ],
    "answer": "A",
    "explain": "华为交换机接口的默认PVID为1，无论接口类型为Access、Trunk还是Hybrid。若需要把接口的PVID改为其他值，可使用port hybrid pvid vlan命令。"
  },
  {
    "id": "HA045",
    "type": "single",
    "chapter": "VLAN与Trunk",
    "stem": "下列哪种接口类型最常用于连接用户终端主机？",
    "options": [
      "Access",
      "Trunk",
      "Hybrid",
      "QinQ"
    ],
    "answer": "A",
    "explain": "Access接口只属于一个VLAN，发出的帧不带标签，普通终端网卡可以正常识别，因此最适合连接用户主机。Trunk和Hybrid通常用于交换机之间的互连链路。"
  },
  {
    "id": "HA046",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "华为交换机上STP的桥优先级默认值是多少？",
    "options": [
      "0",
      "4096",
      "65535",
      "32768"
    ],
    "answer": "D",
    "explain": "STP桥优先级默认为32768，取值范围0～61440，步长为4096。桥ID由优先级和MAC地址组成，数值最小的桥ID对应的交换机被选为根桥。"
  },
  {
    "id": "HA047",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP中桥ID（BID）由哪两部分组成？",
    "options": [
      "优先级和IP地址",
      "优先级和MAC地址",
      "MAC地址和端口号",
      "系统名称和优先级"
    ],
    "answer": "B",
    "explain": "桥ID共8字节，前2字节为桥优先级，后6字节为交换机桥MAC地址。比较时先比优先级，优先级相同时再比较MAC地址，越小越优先。"
  },
  {
    "id": "HA048",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP中根桥发送配置BPDU的周期默认是多少秒？",
    "options": [
      "1秒",
      "2秒",
      "5秒",
      "10秒"
    ],
    "answer": "B",
    "explain": "根桥默认每2秒发送一次配置BPDU（Hello Time），非根桥从根端口收到后触发自己的BPDU发送。Hello Time可在根桥上通过stp timer hello修改。"
  },
  {
    "id": "HA049",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP的Max Age（最大老化时间）默认是多少秒？",
    "options": [
      "10秒",
      "15秒",
      "20秒",
      "30秒"
    ],
    "answer": "C",
    "explain": "Max Age默认20秒，表示端口保存的BPDU信息在20秒内未刷新则失效，从而触发重新计算。另外Forwarding Delay默认15秒。"
  },
  {
    "id": "HA050",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "STP中端口的角色包括下列哪些？（多选）",
    "options": [
      "根端口（Root Port）",
      "指定端口（Designated Port）",
      "Alternate端口",
      "边缘端口"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "STP定义了根端口、指定端口、Alternate端口和禁用端口四种角色。边缘端口（edged-port）是RSTP中的端口属性而非端口角色，配置后不参与生成树计算。"
  },
  {
    "id": "HA051",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "与STP相比，RSTP的主要改进有哪些？（多选）",
    "options": [
      "增加了Alternate端口和Backup端口角色",
      "引入了边缘端口概念，可快速进入转发状态",
      "通过P/A机制实现快速收敛",
      "取消了根桥的选举过程"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "RSTP通过新增Alternate和Backup端口角色、引入边缘端口、使用Proposal/Agreement握手机制，使收敛速度提升到秒级。它仍然需要选举根桥，并未取消该过程。"
  },
  {
    "id": "HA052",
    "type": "multi",
    "chapter": "STP与RSTP",
    "stem": "下列关于STP端口状态的描述，正确的有哪些？（多选）",
    "options": [
      "Disabled状态不转发报文也不学习MAC地址",
      "Blocking状态接收BPDU但不转发用户数据",
      "Learning状态学习MAC地址但不转发用户数据",
      "Forwarding状态既学习MAC地址又转发用户数据"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "STP端口有五种状态：Disabled、Blocking、Listening、Learning、Forwarding。其中Learning开始学习MAC地址但不转发数据，Forwarding同时学习和转发，用于避免临时环路。"
  },
  {
    "id": "HA053",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "STP中选举根桥时，桥ID最小的交换机被选为根桥；若优先级相同，则MAC地址较大的交换机优先。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。根桥选举比较桥ID：先比优先级（默认32768，步长4096），优先级相同时比较桥MAC地址，数值较小者胜出，而非较大者。根桥的所有端口都是指定端口并处于转发状态。"
  },
  {
    "id": "HA054",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "在华为交换机上，使用命令stp edged-port enable可以将接口配置为边缘端口，该端口接入终端后无需等待转发延时即可进入转发状态。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "边缘端口用于连接终端设备，链路UP后立即进入转发状态，不参与生成树计算，也不会因拓扑变化而震荡。若收到BPDU则会失去边缘端口属性，防止误接交换机引起环路。"
  },
  {
    "id": "HA055",
    "type": "judge",
    "chapter": "STP与RSTP",
    "stem": "STP通过阻塞冗余链路来消除二层环路，但被阻塞的备用链路在主链路故障后无法自动恢复转发。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。STP的核心思想是通过逻辑上阻塞冗余端口，把环形拓扑修剪成无环的树形结构，从而避免广播风暴和MAC地址表震荡。当主链路故障时，备用链路经重新计算后会转为转发状态，能够自动恢复，这正是STP提供冗余的意义。"
  },
  {
    "id": "HA056",
    "type": "fill",
    "chapter": "STP与RSTP",
    "stem": "STP中根桥发送配置BPDU的周期默认为______秒。",
    "options": [],
    "answer": [
      "2",
      "两",
      "二"
    ],
    "explain": "根桥每2秒发送一次配置BPDU，该周期称为Hello Time。非根桥不会主动周期性发送BPDU，而是在根端口收到BPDU后触发发送。"
  },
  {
    "id": "HA057",
    "type": "fill",
    "chapter": "STP与RSTP",
    "stem": "STP中端口从Listening状态进入Learning状态需要等待的转发延时（Forwarding Delay）默认为______秒。",
    "options": [],
    "answer": [
      "15",
      "十五"
    ],
    "explain": "Forwarding Delay默认为15秒。端口从Blocking经Listening（15秒）到Learning，再经15秒到达Forwarding，合计约30秒，加上Max Age 20秒，STP收敛时间通常为30～50秒。"
  },
  {
    "id": "HA058",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "STP中选举根端口的顺序，下列哪一项是正确的？",
    "options": [
      "最小根路径开销→最小发送者桥ID→最小发送者端口ID",
      "最小发送者桥ID→最小根路径开销→最小端口ID",
      "最小端口ID→最小根路径开销→最小桥ID",
      "最大根路径开销→最小桥ID→最小端口ID"
    ],
    "answer": "A",
    "explain": "非根桥在每条链路上比较收到的BPDU，先比较根路径开销（越小越优），开销相同再比较发送者桥ID，最后比较发送者端口ID。比较胜出的端口成为根端口。"
  },
  {
    "id": "HA059",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "关于STP路径开销与带宽的关系，下列描述正确的是哪一项？",
    "options": [
      "带宽越高，路径开销越大",
      "带宽越高，路径开销越小",
      "路径开销与带宽无关",
      "路径开销仅由跳数决定"
    ],
    "answer": "B",
    "explain": "STP路径开销由链路带宽决定，带宽越高开销值越小。华为采用IEEE规定的开销标准，例如千兆链路开销为20000，百兆链路为200000。根路径开销是到根桥沿途所有链路开销之和。"
  },
  {
    "id": "HA060",
    "type": "single",
    "chapter": "STP与RSTP",
    "stem": "在运行STP的网络中，下列哪个端口始终处于转发状态且不会被阻塞？",
    "options": [
      "根桥上的所有端口",
      "非根桥的根端口",
      "非根桥的Alternate端口",
      "所有边缘端口"
    ],
    "answer": "A",
    "explain": "根桥上的所有端口都是指定端口，始终处于转发状态。非根桥上只有一个根端口处于转发，Alternate端口处于阻塞状态，边缘端口虽转发但不参与生成树计算。"
  },
  {
    "id": "HA061",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "在华为交换机上创建编号为1的Eth-Trunk接口，正确的命令是？",
    "options": [
      "interface Eth-Trunk 1",
      "interface Trunk 1",
      "eth-trunk 1",
      "interface GigabitEthernet 0/0/1 trunk 1"
    ],
    "answer": "A",
    "explain": "在系统视图下执行interface Eth-Trunk 1即可创建并进入Eth-Trunk 1接口视图。随后可通过trunkport命令将物理接口加入该聚合组。"
  },
  {
    "id": "HA062",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "在Eth-Trunk接口视图下，将GE0/0/1和GE0/0/2加入聚合组的命令是？",
    "options": [
      "add port GigabitEthernet 0/0/1 0/0/2",
      "member GigabitEthernet 0/0/1 0/0/2",
      "trunkport GigabitEthernet 0/0/1 to 0/0/2",
      "bind GigabitEthernet 0/0/1 0/0/2"
    ],
    "answer": "C",
    "explain": "在Eth-Trunk接口视图下使用trunkport命令将物理成员接口加入聚合组，支持to关键字表示连续范围。成员接口加入后其原有配置会被清除，需在Eth-Trunk接口上统一配置。"
  },
  {
    "id": "HA063",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "LACP协议中，成员接口的LACP优先级默认值是多少？",
    "options": [
      "1",
      "100",
      "32768",
      "65535"
    ],
    "answer": "C",
    "explain": "LACP优先级默认32768，取值范围0～65535，数值越小优先级越高。在活动链路数量受上限限制时，LACP优先级和端口号共同决定哪些接口成为活动链路。"
  },
  {
    "id": "HA064",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "华为设备上Eth-Trunk接口默认最多支持多少个活动成员接口？",
    "options": [
      "4",
      "6",
      "8",
      "16"
    ],
    "answer": "C",
    "explain": "Eth-Trunk默认最多支持8个活动成员接口，可通过max active-linknumber命令调整上限。超过上限的成员接口作为备份链路，当活动链路故障时自动接管。"
  },
  {
    "id": "HA065",
    "type": "multi",
    "chapter": "链路聚合与堆叠",
    "stem": "链路聚合（Eth-Trunk）的主要优点包括下列哪些？（多选）",
    "options": [
      "增加链路带宽",
      "提供链路冗余备份",
      "实现负载分担",
      "自动隔离广播域"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "链路聚合把多条物理链路捆绑成一条逻辑链路，带宽叠加、流量在多条成员链路上分担，同时某条成员链路故障时业务不中断，提高可靠性。它不改变广播域范围，隔离广播域要靠VLAN。"
  },
  {
    "id": "HA066",
    "type": "multi",
    "chapter": "链路聚合与堆叠",
    "stem": "华为交换机支持的Eth-Trunk工作模式有哪些？（多选）",
    "options": [
      "手工负载分担模式",
      "LACP静态模式",
      "LACP动态模式",
      "自动协商模式"
    ],
    "answer": [
      "A",
      "B"
    ],
    "explain": "华为Eth-Trunk支持两种工作模式：手工负载分担模式和LACP（静态）模式。手工模式由管理员手工指定成员接口，不运行LACP协议；LACP模式通过LACPDU协商，可提供链路故障检测。"
  },
  {
    "id": "HA067",
    "type": "judge",
    "chapter": "链路聚合与堆叠",
    "stem": "Eth-Trunk成员接口加入聚合组后，其原有的接口配置不会被清除。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "物理接口加入Eth-Trunk后，其原有的二层或三层配置会被清除，接口配置以Eth-Trunk接口的配置为准。因此应在Eth-Trunk接口上统一配置VLAN、链路类型等参数。"
  },
  {
    "id": "HA068",
    "type": "judge",
    "chapter": "链路聚合与堆叠",
    "stem": "配置链路聚合时，同一Eth-Trunk内成员接口的速率、双工模式等物理参数必须保持一致。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "成员接口的速率、双工模式、流控等物理属性必须相同，否则接口无法成功加入聚合组或被置为未选中状态。此外两端设备对应接口的链路类型和允许VLAN也应保持一致。"
  },
  {
    "id": "HA069",
    "type": "judge",
    "chapter": "链路聚合与堆叠",
    "stem": "华为 iStack 堆叠技术最多只能将两台物理交换机虚拟化为一台逻辑交换机。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。iStack 支持多台交换机堆叠（具体上限取决于产品型号），并非只能两台。堆叠后对外表现为一台逻辑设备，统一管理、统一配置，还可实现跨设备链路聚合以提高转发可靠性。"
  },
  {
    "id": "HA070",
    "type": "fill",
    "chapter": "链路聚合与堆叠",
    "stem": "在Eth-Trunk接口视图下，使用______ GigabitEthernet 0/0/1 to 0/0/2命令可以将两个物理接口加入聚合组。",
    "options": [],
    "answer": [
      "trunkport"
    ],
    "explain": "trunkport命令用于在Eth-Trunk接口视图下将物理成员接口批量加入聚合组。也可在物理接口视图下使用eth-trunk 1命令把接口加入指定的聚合组。"
  },
  {
    "id": "HA071",
    "type": "fill",
    "chapter": "链路聚合与堆叠",
    "stem": "LACP协议中，成员接口的LACP优先级默认值为______。",
    "options": [],
    "answer": [
      "32768"
    ],
    "explain": "LACP优先级默认为32768，数值越小优先级越高，取值范围0～65535。当活动链路数达到上限时，系统根据LACP优先级和端口号选择活动链路，其余作为备份。"
  },
  {
    "id": "HA072",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "在LACP模式下，Eth-Trunk的活动链路数量达到上限后，多余的成员接口处于什么状态？",
    "options": [
      "被删除",
      "继续转发流量",
      "作为备份链路处于非活动状态",
      "自动转为Trunk接口"
    ],
    "answer": "C",
    "explain": "当活动链路数量达到max active-linknumber设定的上限时，其余成员接口成为备份链路（非活动状态），不参与流量转发。当某条活动链路故障时，优先级最高的备份链路自动切换为活动状态。"
  },
  {
    "id": "HA073",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "下列关于链路聚合负载分担方式的描述，正确的是哪一项？",
    "options": [
      "默认根据源IP和目的IP进行分担",
      "可以根据源MAC、目的MAC、源IP、目的IP等组合进行分担",
      "只能根据源MAC分担",
      "流量在成员链路之间随机分配且不断变化"
    ],
    "answer": "B",
    "explain": "华为设备支持多种负载分担模式，可通过load-balance命令配置，常见的有基于源MAC、目的MAC、源IP、目的IP及其组合的哈希算法。同一数据流始终走同一条成员链路，避免报文乱序。"
  },
  {
    "id": "HA074",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "堆叠系统中，负责整个堆叠系统管理和控制的主交换机被称为？",
    "options": [
      "备交换机",
      "从交换机",
      "主交换机（Master）",
      "成员交换机"
    ],
    "answer": "C",
    "explain": "堆叠系统通过角色选举产生一台主交换机（Master）负责管理和控制，其余为备交换机（Standby）和从交换机（Slave）。主备之间可互相备份，主设备故障时备设备接管。"
  },
  {
    "id": "HA075",
    "type": "single",
    "chapter": "链路聚合与堆叠",
    "stem": "在两台交换机之间配置跨设备链路聚合（M-LAG或堆叠后聚合），相比单条链路的最大优势是什么？",
    "options": [
      "可以完全代替STP的功能且无环路风险",
      "可以自动划分VLAN",
      "既提升带宽又提供设备级冗余",
      "可以替代路由器的功能"
    ],
    "answer": "C",
    "explain": "跨设备链路聚合使一台服务器的两条上行链路分别连接到两台交换机，既叠加了带宽，又在一台交换机故障时保持业务不中断。它仍需配合STP或M-LAG机制防范环路。"
  },
  {
    "id": "HA076",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "下列哪个IP地址属于B类地址？",
    "options": [
      "172.16.1.1",
      "10.1.1.1",
      "192.168.1.1",
      "224.1.1.1"
    ],
    "answer": "A",
    "explain": "B类地址第一字节范围为128～191，默认掩码为255.255.0.0。10.1.1.1为A类，192.168.1.1为C类，224.1.1.1为D类组播地址。"
  },
  {
    "id": "HA077",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "192.168.1.0/24网段中，可分配给主机的IP地址数量是多少？",
    "options": [
      "256",
      "255",
      "254",
      "252"
    ],
    "answer": "C",
    "explain": "可用主机数等于2的h次方减2，其中h为主机位数。/24有8位主机位，2^8-2=254。需要减去网络地址（主机位全0）和广播地址（主机位全1）。"
  },
  {
    "id": "HA078",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "子网掩码为255.255.255.252时，该子网可分配给主机的地址数量是多少？",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "answer": "B",
    "explain": "255.255.255.252对应/30前缀，主机位为2位，2^2-2=2个可用地址。这种子网常用于点对点的互联链路，例如两台路由器之间的直连链路。"
  },
  {
    "id": "HA079",
    "type": "multi",
    "chapter": "IP编址与子网划分",
    "stem": "下列哪些地址属于RFC1918定义的私有IP地址？（多选）",
    "options": [
      "10.0.0.0/8",
      "172.16.0.0/12",
      "192.168.0.0/16",
      "169.254.0.0/16"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "私有地址包括10.0.0.0/8、172.16.0.0/12（即172.16.0.0～172.31.255.255）和192.168.0.0/16，不能在公网上路由。169.254.0.0/16是链路本地地址，通常由DHCP失败时自动生成。"
  },
  {
    "id": "HA080",
    "type": "multi",
    "chapter": "IP编址与子网划分",
    "stem": "下列关于IP地址分类的描述，正确的有哪些？（多选）",
    "options": [
      "A类地址第一字节范围为1～126",
      "C类地址第一字节范围为192～223",
      "D类地址用于组播，范围为224～239",
      "E类地址用于普通单播通信"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "A类1～126，B类128～191，C类192～223，D类224～239为组播地址，E类240～255为保留实验用。127网段保留作环回地址，因此不在A类可用范围内。"
  },
  {
    "id": "HA081",
    "type": "judge",
    "chapter": "IP编址与子网划分",
    "stem": "127.0.0.0/8 网段属于私有地址，可以分配给企业内部主机使用。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。127.0.0.0/8 是环回地址段，不是私有地址。发往该网段的报文不会出现在网络上，常用于本机协议栈测试（如 ping 127.0.0.1），不能分配给主机或接口。私有地址段是 10.0.0.0/8、172.16.0.0/12 和 192.168.0.0/16。"
  },
  {
    "id": "HA082",
    "type": "judge",
    "chapter": "IP编址与子网划分",
    "stem": "在一个子网中，网络地址的主机位全部为1，广播地址的主机位全部为0。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。恰好相反：网络地址用于标识整个子网，主机位全部为 0；广播地址用于向本子网内所有主机发送数据，主机位全部为 1。两者都不能分配给主机使用。"
  },
  {
    "id": "HA083",
    "type": "fill",
    "chapter": "IP编址与子网划分",
    "stem": "将192.168.1.0/24划分为/26的子网，共可划分出______个子网。",
    "options": [],
    "answer": [
      "4",
      "四"
    ],
    "explain": "从/24借2位作为子网位，2^2=4，因此可划分4个子网，每个子网有2^6-2=62个可用主机地址。四个子网分别为.0/26、.64/26、.128/26和.192/26。"
  },
  {
    "id": "HA084",
    "type": "fill",
    "chapter": "IP编址与子网划分",
    "stem": "子网掩码为255.255.255.240时，对应的CIDR前缀长度为/______。",
    "options": [],
    "answer": [
      "28"
    ],
    "explain": "255.255.255.240的二进制中前28位为1，因此对应/28。该子网有4位主机位，可用主机地址为2^4-2=14个。"
  },
  {
    "id": "HA085",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "IP地址192.168.10.100/27所在的子网网络地址是什么？",
    "options": [
      "192.168.10.0",
      "192.168.10.64",
      "192.168.10.96",
      "192.168.10.128"
    ],
    "answer": "C",
    "explain": "/27的子网块大小为32，子网边界为0、32、64、96、128……。100落在96～127区间内，因此网络地址是192.168.10.96，广播地址为192.168.10.127。"
  },
  {
    "id": "HA086",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "下列哪个IP地址不能作为主机地址分配给设备？",
    "options": [
      "192.168.1.100/24",
      "10.1.1.255/16",
      "192.168.1.255/24",
      "172.16.1.1/24"
    ],
    "answer": "C",
    "explain": "192.168.1.255/24的主机位为最后一个字节8位，取值全为1，是该子网的广播地址，不能分配给主机。10.1.1.255/16的广播地址是10.1.255.255，因此10.1.1.255是合法主机地址。"
  },
  {
    "id": "HA087",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "将192.168.0.0/24和192.168.1.0/24两条路由聚合后，得到的最优聚合路由是什么？",
    "options": [
      "192.168.0.0/23",
      "192.168.0.0/22",
      "192.168.0.0/24",
      "192.168.0.0/16"
    ],
    "answer": "A",
    "explain": "两个网段的第三个字节为0和1，二进制前7位相同，仅第24位不同，因此可聚合为192.168.0.0/23。聚合路由的前缀必须覆盖所有被聚合网段且尽可能精确。"
  },
  {
    "id": "HA088",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "某公司需要为一个部门分配至少50个可用主机地址的子网，使用VLSM划分时最合适的掩码长度是多少？",
    "options": [
      "/25",
      "/26",
      "/27",
      "/28"
    ],
    "answer": "B",
    "explain": "/26有6位主机位，可用地址为2^6-2=62个，满足至少50个的需求且浪费最少。/27只有30个可用地址不满足需求，/25则有126个可用地址造成浪费。"
  },
  {
    "id": "HA089",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "IP地址172.16.20.30/20所在的子网广播地址是什么？",
    "options": [
      "172.16.31.255",
      "172.16.15.255",
      "172.16.20.255",
      "172.16.23.255"
    ],
    "answer": "A",
    "explain": "/20意味着前20位是网络位，第三个字节的前4位属于网络位，块大小为16。/20的子网边界为16.0、32.0……，172.16.20.30落在172.16.16.0～172.16.31.255之间，故广播地址为172.16.31.255。"
  },
  {
    "id": "HA090",
    "type": "single",
    "chapter": "IP编址与子网划分",
    "stem": "下列哪个地址是有效的C类私有地址范围内的主机地址？",
    "options": [
      "192.167.1.1",
      "192.168.100.200",
      "192.169.1.1",
      "192.168.0.0"
    ],
    "answer": "B",
    "explain": "私有C类地址范围为192.168.0.0～192.168.255.255。192.168.100.200属于该范围且不是网络地址或广播地址，可作为主机地址。192.168.0.0是网络地址不可分配。"
  },
  {
    "id": "HA091",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为VRP中，下列哪种路由协议的默认优先级数值最小、最优先？",
    "options": [
      "直连路由",
      "OSPF",
      "静态路由",
      "RIP"
    ],
    "answer": "A",
    "explain": "华为设备各类路由默认优先级为：直连0、OSPF 10、IS-IS 15、静态60、RIP 100、BGP 255，数值越小越优先。因此直连路由优先级最高。"
  },
  {
    "id": "HA092",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "华为VRP中静态路由的默认优先级是多少？",
    "options": [
      "0",
      "10",
      "60",
      "100"
    ],
    "answer": "C",
    "explain": "静态路由默认优先级为60，可通过在ip route-static命令末尾添加preference参数修改，取值范围1～255。将备份静态路由设为较大优先级即可实现浮动静态路由。"
  },
  {
    "id": "HA093",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "当路由器收到一个目的IP地址的数据包时，如果有多个路由表项都能匹配，路由器会依据什么原则选择？",
    "options": [
      "优先级数值最小的路由",
      "度量值最小的路由",
      "掩码长度最长（最精确）的路由",
      "最先学习到的路由"
    ],
    "answer": "C",
    "explain": "路由选路的第一原则是最长前缀匹配，掩码越长表示网段越精确，优先被选择。只有在多条路由的前缀长度相同时，才比较优先级，再比较度量值。"
  },
  {
    "id": "HA094",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列关于默认路由0.0.0.0/0的描述，正确的有哪些？（多选）",
    "options": [
      "默认路由可以匹配所有目的IP地址",
      "默认路由的前缀长度为0",
      "当路由表中没有更精确匹配的路由时才会使用默认路由",
      "默认路由只能通过动态路由协议产生"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "0.0.0.0/0表示前缀长度为0，可匹配任意目的地址，常在末梢网络或连接ISP的出口使用。只有在没有更长前缀匹配时才使用默认路由，它既可由静态配置也可由动态协议产生。"
  },
  {
    "id": "HA095",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列关于路由表构成的描述，正确的有哪些？（多选）",
    "options": [
      "路由表项包含目的网络、掩码、下一跳和出接口",
      "直连路由由接口配置IP地址并UP后自动生成",
      "路由表中的下一跳必须与本机某接口在同一网段才能递归成功",
      "路由表中的所有路由都是手工配置的"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "路由表项通常包含目的网络/掩码、协议类型、优先级、度量值、下一跳和出接口。直连路由在接口配置地址并处于UP状态时自动生成。若下一跳不可达，路由无法下发到转发表，配置静态路由时必须保证下一跳可达。"
  },
  {
    "id": "HA096",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "浮动静态路由通过配置比主路由更小的优先级来实现备份，当主路由失效时备份路由才会被激活。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。浮动静态路由要为备份路由配置\"更大\"的 preference 值（如 100），而不是更小。主路由（默认 60）正常时只在路由表中激活主路由；主路由失效后，备份路由才被优选并加入转发表。"
  },
  {
    "id": "HA097",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "华为VRP中路由优先级的取值范围是0～255，数值越大表示该路由越优先。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "路由优先级取值范围是0～255没错，但数值越小表示越优先，0为直连路由的最高优先级。这一点与度量值不同，不同协议之间的度量值无法直接比较。"
  },
  {
    "id": "HA098",
    "type": "fill",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为VRP中，配置静态路由的命令格式为ip ______-static 目标网络 掩码 下一跳地址。",
    "options": [],
    "answer": [
      "route"
    ],
    "explain": "静态路由配置命令为ip route-static，例如ip route-static 192.168.2.0 24 10.1.1.2。可使用display ip routing-table查看路由表验证配置是否生效。"
  },
  {
    "id": "HA099",
    "type": "fill",
    "chapter": "IP路由基础与静态路由",
    "stem": "默认路由的目的网络和掩码通常写为0.0.0.0/______。",
    "options": [],
    "answer": [
      "0"
    ],
    "explain": "默认路由表示为0.0.0.0/0，前缀长度为0意味着不关心目的网络，可匹配任何目的地址。它在路由表中优先级最低，只在无更精确匹配时使用。"
  },
  {
    "id": "HA100",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "某路由器上配置了ip route-static 192.168.1.0 24 10.1.1.2和ip route-static 192.168.1.0 16 10.1.1.3，当访问192.168.1.10时选择哪条路由？",
    "options": [
      "掩码24的路由",
      "掩码16的路由",
      "两条等价负载分担",
      "随机选择一条"
    ],
    "answer": "A",
    "explain": "目的地址192.168.1.10同时匹配这两条路由，但/24的前缀长度大于/16，根据最长前缀匹配原则优先选择掩码为24的路由，下一跳为10.1.1.2。"
  },
  {
    "id": "HA101",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列哪条命令可以查看设备当前的路由表信息？",
    "options": [
      "display ip routing-table",
      "display mac-address",
      "display interface brief",
      "display current-configuration"
    ],
    "answer": "A",
    "explain": "display ip routing-table用于查看IP路由表，可显示目的网络、掩码、协议、优先级、开销、下一跳和出接口。display mac-address查看MAC地址表，display current-configuration查看当前配置。"
  },
  {
    "id": "HA102",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由器在转发数据包时，若路由表中存在多条到达同一目的网络的等价路由，通常会如何处理？",
    "options": [
      "只使用最先加入的一条",
      "丢弃多余路由",
      "进行负载分担，在等价路径间分配流量",
      "随机选择并频繁切换"
    ],
    "answer": "C",
    "explain": "当存在多条前缀长度、优先级和度量值都相同的等价路由时，华为路由器会进行等价路由负载分担，把流量分摊到多条路径上。这提高了链路利用率，代价是可能引起报文乱序。"
  },
  {
    "id": "HA103",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列关于直连路由的描述，正确的是哪一项？",
    "options": [
      "直连路由需要手工配置",
      "接口配置IP地址且物理和协议状态均为UP时自动生成直连路由",
      "直连路由的优先级为60",
      "直连路由不会出现在路由表中"
    ],
    "answer": "B",
    "explain": "直连路由是路由器接口所在网段的路由，当接口配置了IP地址且物理层与协议层状态均UP时自动生成。其优先级为0，是路由表中最优先的路由。"
  },
  {
    "id": "HA104",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "在点到点链路上配置静态路由时，推荐的做法是什么？",
    "options": [
      "只指定下一跳IP地址",
      "只指定出接口",
      "同时指定出接口和下一跳地址可以更可靠",
      "无需任何参数"
    ],
    "answer": "C",
    "explain": "在广播网络（如以太网）上应指定下一跳地址；在点到点链路上可以只指定出接口。同时指定出接口和下一跳可避免ARP解析和递归查找问题，配置更可靠。"
  },
  {
    "id": "HA105",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "当路由器收到一个目的地址在路由表中查不到任何匹配表项的数据包时，会如何处理？",
    "options": [
      "交给默认路由转发，若无默认路由则丢弃并返回ICMP不可达",
      "向所有接口泛洪",
      "缓存等待路由出现",
      "按MAC地址转发"
    ],
    "answer": "A",
    "explain": "路由器执行最长前缀匹配，若无任何匹配且配置了默认路由则按默认路由转发，否则丢弃报文并向源端返回ICMP网络不可达消息。路由器不会像交换机那样泛洪。"
  },
  {
    "id": "HA106",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF协议中，默认情况下华为设备的OSPF路由优先级是多少？",
    "options": [
      "0",
      "10",
      "60",
      "110"
    ],
    "answer": "B",
    "explain": "华为设备OSPF默认优先级为10，仅次于直连路由的0，优于静态路由的60和RIP的100。可通过preference命令在OSPF进程下修改。"
  },
  {
    "id": "HA107",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF使用哪种报文来建立邻居关系并协商参数？",
    "options": [
      "Hello报文",
      "DD报文",
      "LSR报文",
      "LSU报文"
    ],
    "answer": "A",
    "explain": "OSPF共有五种报文：Hello用于发现和维护邻居，DD用于交换数据库摘要，LSR用于请求缺失的LSA，LSU用于发送LSA，LSAck用于确认。Hello报文周期默认10秒（广播网络）。"
  },
  {
    "id": "HA108",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF中Router LSA（Type 1 LSA）的传播范围是什么？",
    "options": [
      "整个OSPF自治系统",
      "本区域内部",
      "本路由器接口所在网段",
      "所有非骨干区域"
    ],
    "answer": "B",
    "explain": "Type 1 Router LSA描述路由器的接口状态和开销，只在本区域内泛洪。Type 2 Network LSA同样限于本区域，Type 3 Summary LSA由ABR产生并可在区域间传播。"
  },
  {
    "id": "HA109",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "在OSPF广播网络中，DR和BDR的选举主要依据什么？",
    "options": [
      "接口的DR优先级和Router ID",
      "接口的IP地址大小",
      "接口的带宽",
      "路由器的型号"
    ],
    "answer": "A",
    "explain": "DR/BDR选举先比较接口的DR优先级（默认1，范围0～255，0表示不参与选举），优先级高者当选；优先级相同时比较Router ID，数值大者当选。选举具有非抢占性。"
  },
  {
    "id": "HA110",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "下列关于OSPF区域（Area）的描述，正确的有哪些？（多选）",
    "options": [
      "Area 0是骨干区域",
      "所有非骨干区域都必须与骨干区域直接相连",
      "区域划分可以减少LSA泛洪范围",
      "OSPF区域内每台路由器都需要了解整个自治系统的完整拓扑"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explain": "OSPF通过划分区域把网络分层，Area 0为骨干区域，非骨干区域必须与骨干区域相连（否则需要虚连接）。区域划分限制了LSA泛洪范围，减少了路由器的LSDB规模和计算量。"
  },
  {
    "id": "HA111",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "OSPF的报文类型包括下列哪些？（多选）",
    "options": [
      "Hello",
      "DD（Database Description）",
      "LSR（Link State Request）",
      "LSU（Link State Update）"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explain": "OSPF共有五种报文：Hello、DD、LSR、LSU和LSAck。Hello用于邻居建立和保活；DD交换LSDB摘要；LSR请求缺少的LSA；LSU携带完整LSA；LSAck对收到的LSU进行确认。"
  },
  {
    "id": "HA112",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPF正常运行需要邻居路由器的Hello报文中的Area ID、 Hello时间间隔、Dead时间间隔等参数保持一致。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "T",
    "explain": "OSPF邻居建立要求Hello报文中的Area ID、Hello/Dead定时器、认证信息、网络掩码（广播网络）等参数一致，MTU不一致还会导致停留在ExStart状态。"
  },
  {
    "id": "HA113",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPF 是一种距离矢量路由协议，每台路由器只与直连邻居交换各自的路由表。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "F",
    "explain": "错误。OSPF 属于链路状态路由协议，而非距离矢量协议。同一区域内所有路由器通过泛洪 LSA 使 LSDB 保持同步，每台路由器基于 LSDB 运行 SPF 算法计算以自己为根的最短路径树。只与邻居交换完整路由表的是 RIP 这类距离矢量协议。"
  },
  {
    "id": "HA114",
    "type": "fill",
    "chapter": "OSPF基础",
    "stem": "OSPF的骨干区域固定为Area ______。",
    "options": [],
    "answer": [
      "0",
      "0.0.0.0"
    ],
    "explain": "OSPF骨干区域为Area 0，可以用0或0.0.0.0表示。所有非骨干区域都必须与骨干区域相连，区域间的路由信息通过ABR在骨干区域和其他区域之间传递。"
  },
  {
    "id": "HA115",
    "type": "fill",
    "chapter": "OSPF基础",
    "stem": "链路状态路由协议使用______算法计算最短路径树，该算法以自身为根计算到各目的地的最短路径。",
    "options": [],
    "answer": [
      "SPF",
      "spf",
      "Dijkstra",
      "dijkstra"
    ],
    "explain": "OSPF基于链路状态数据库运行SPF（Shortest Path First，即Dijkstra）算法，以自身为根计算到各目的地的最短路径。这与距离矢量协议（如RIP）逐跳传递路由的方式完全不同。"
  },
  {
    "id": "HA116",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF中Router ID的作用是什么？",
    "options": [
      "在OSPF域内唯一标识一台OSPF路由器",
      "用于标识路由器的接口IP地址",
      "用于计算接口开销",
      "用于标识区域号"
    ],
    "answer": "A",
    "explain": "Router ID是OSPF域内唯一标识一台路由器的32位标识符，通常取Loopback接口地址或最大的物理接口IP。若未手工配置且无可用接口地址，OSPF无法正常运行。"
  },
  {
    "id": "HA117",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF邻居状态机的正确演进顺序是下列哪一项？（以广播网络为例）",
    "options": [
      "Down→Init→2-Way→ExStart→Exchange→Loading→Full",
      "Down→Init→ExStart→2-Way→Exchange→Loading→Full",
      "Down→2-Way→Init→ExStart→Loading→Exchange→Full",
      "Down→Init→2-Way→Exchange→ExStart→Loading→Full"
    ],
    "answer": "A",
    "explain": "OSPF邻居状态依次为Down、Init、2-Way、ExStart、Exchange、Loading、Full。其中2-Way表示双方互相收到Hello，ExStart开始协商主从并确定DD序号，最终在Full状态完成数据库同步。"
  },
  {
    "id": "HA118",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF中使用Bandwidth-Reference值计算接口开销时，华为设备默认的参考带宽是多少？",
    "options": [
      "10Mbit/s",
      "100Mbit/s",
      "1000Mbit/s",
      "10000Mbit/s"
    ],
    "answer": "B",
    "explain": "华为设备OSPF默认参考带宽为100Mbit/s，接口开销等于参考带宽除以接口带宽。因此在默认情况下，百兆、千兆和万兆接口的开销分别为1、1、1，需要手工修改参考带宽才能区分。"
  },
  {
    "id": "HA119",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "下列关于OSPF DR/BDR选举的描述，正确的是哪一项？",
    "options": [
      "DR选举是抢占的，优先级更高的路由器加入后会立即成为DR",
      "DR选举是非抢占的，除非DR失效否则不会重新选举",
      "DR的优先级最高为100",
      "BDR不需要与DR建立邻接关系"
    ],
    "answer": "B",
    "explain": "DR/BDR选举具有非抢占性，选举完成后新加入的高优先级路由器不会抢占DR，直到DR失效才会重新选举。DR优先级取值0～255，DROther之间停留在2-Way状态，只与DR/BDR建立Full邻接。"
  },
  {
    "id": "HA120",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "在华为设备上启动OSPF进程1并进入区域0的配置命令是？",
    "options": [
      "ospf 1 / area 0",
      "router ospf 1 / network 0",
      "ospf 1 / network 0.0.0.0",
      "ospf area 0 / network 1"
    ],
    "answer": "A",
    "explain": "华为VRP配置OSPF时，先在系统视图执行ospf 1启动进程1并进入OSPF视图，再执行area 0进入区域视图，最后用network命令宣告网段。华为使用ospf进程号而非router ospf命令。"
  }
];
