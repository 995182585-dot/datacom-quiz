window.BANK_HCIA_J = [
  {
    "id": "HJ001",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "某台华为路由器刚出厂，管理员需要在不依赖网络的情况下完成首次配置。此时应使用哪种登录方式？",
    "options": ["Telnet", "Web网管", "SSH", "Console口"],
    "answer": "D",
    "explain": "Console口是本地物理接口，通过配置线缆直连即可登录，不依赖任何网络配置和IP可达性，是设备首次上电配置的唯一可靠方式。Telnet、SSH、Web网管都需要设备已配置IP地址并网络可达。"
  },
  {
    "id": "HJ002",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "关于Telnet与SSH的区别，下列描述正确的是？",
    "options": ["Telnet报文加密传输，SSH明文传输", "两者都加密，但SSH加密强度更高", "Telnet明文传输用户名和密码，SSH对会话加密", "两者都是明文，只是SSH端口不同"],
    "answer": "C",
    "explain": "Telnet在传输过程中使用明文，用户名、密码和所有配置命令都可被中间人抓包获取。SSH通过加密通道保护整个会话，因此生产环境中应使用SSH替代Telnet。"
  },
  {
    "id": "HJ003",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在华为设备上开启SSH服务器功能，需要执行哪条命令？",
    "options": ["ssh enable", "ssh server enable", "stelnet server enable", "telnet server enable"],
    "answer": "C",
    "explain": "华为VRP中，SSH服务器功能由stelnet server enable命令开启，stelnet是Secure Telnet的缩写，即SSH服务端。ssh server enable不是VRP中的有效命令。"
  },
  {
    "id": "HJ004",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "VTY用户界面下需执行哪条命令，才能允许该线路接收SSH登录请求？",
    "options": ["protocol inbound ssh", "transport input ssh", "ssh inbound all", "login protocol ssh"],
    "answer": "A",
    "explain": "在user-interface vty视图下使用protocol inbound ssh，表示只允许SSH协议接入该VTY线路。protocol inbound all则同时允许Telnet和SSH，安全性较低。"
  },
  {
    "id": "HJ005",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在华为设备上创建SSH用户时，命令ssh user huawei authentication-type password的作用是？",
    "options": ["设置该用户的登录口令", "将该用户加入管理员用户组", "限制该用户只能使用Telnet登录", "指定该SSH用户采用密码认证方式"],
    "answer": "D",
    "explain": "ssh user <用户名> authentication-type用于指定该SSH用户的认证方式，可选择password、rsa、dsa、password-rsa等多种组合。设置登录口令使用的是ssh user <用户名> password命令。"
  },
  {
    "id": "HJ006",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "相比SSHv1，SSHv2支持更完善的密钥交换和更强的加密算法，但完全取消了密码认证方式。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "SSHv2确实重新设计了密钥交换、加密和消息认证机制，支持更强的算法组合，协议分层也更清晰，但并没有取消密码认证，仍然支持password、publickey等多种认证方式，因此题干后半句错误。"
  },
  {
    "id": "HJ007",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "SSH登录过程中，用于保护后续数据机密性的会话密钥是如何得到的？",
    "options": ["由管理员在设备上手工配置", "由服务器主机密钥直接充当", "由客户端与服务器通过密钥交换算法协商生成", "由客户端随机生成后明文发送给服务器"],
    "answer": "C",
    "explain": "SSH在连接建立阶段通过密钥交换算法（如DH算法）协商出会话密钥，服务器主机密钥仅用于身份确认，会话密钥用于后续数据的对称加密和完整性保护。密钥不会明文传输，也不需要管理员手工配置。"
  },
  {
    "id": "HJ008",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "AAA框架中的三个A分别代表什么？",
    "options": ["认证、授权、计费", "接入、审计、告警", "认证、加密、审计", "授权、加密、计费"],
    "answer": "A",
    "explain": "AAA是Authentication（认证）、Authorization（授权）、Accounting（计费）的简称。认证解决“你是谁”，授权解决“你能做什么”，计费解决“你做了什么、用了多少资源”。"
  },
  {
    "id": "HJ009",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "RADIUS服务器默认使用的认证/授权端口和计费端口分别是？",
    "options": ["TCP 1812和TCP 1813", "UDP 1645和UDP 1646", "TCP 49和TCP 50", "UDP 1812和UDP 1813"],
    "answer": "D",
    "explain": "RADIUS使用UDP作为传输层协议，标准端口为认证/授权1812、计费1813。早期的1645/1646为私有实现，现已不作为标准端口。"
  },
  {
    "id": "HJ010",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "TACACS+协议使用的传输层协议和端口号是？",
    "options": ["UDP 49", "TCP 1812", "TCP 49", "UDP 1813"],
    "answer": "C",
    "explain": "TACACS+由思科主导，使用TCP 49端口，传输可靠且支持对整个报文体加密。RADIUS则使用UDP，且只对密码字段加密。"
  },
  {
    "id": "HJ011",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "与RADIUS相比，TACACS+具有哪些特点？（多选）",
    "options": ["使用TCP传输，可靠性更高", "可以对整个报文进行加密", "认证与授权分离，可分别由不同服务器处理", "使用UDP 1812端口通信"],
    "answer": ["A", "B", "C"],
    "explain": "TACACS+基于TCP 49，支持对报文体的完整加密，并把认证、授权、计费三种功能分离。UDP 1812是RADIUS的端口，不是TACACS+的。"
  },
  {
    "id": "HJ012",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "关于VTY用户界面下的认证模式配置，下列描述正确的有哪些？（多选）",
    "options": ["authentication-mode aaa表示登录认证交由AAA模块处理", "authentication-mode password表示只校验VTY下配置的登录口令", "authentication-mode none表示登录时无需任何认证", "authentication-mode aaa只能使用RADIUS服务器认证，无法使用本地用户"],
    "answer": ["A", "B", "C"],
    "explain": "aaa模式把认证交给AAA模块，可按配置顺序使用本地用户或RADIUS/TACACS+等服务器认证，因此选项D错误。password模式只校验VTY口令，none模式不做认证，生产环境严禁使用。"
  },
  {
    "id": "HJ013",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "VTY用户界面下执行authentication-mode none，将产生什么效果？",
    "options": ["用户登录设备时无需认证即可进入", "用户必须先输入用户名和密码", "用户只能通过Console登录", "用户登录后权限自动为15级"],
    "answer": "A",
    "explain": "authentication-mode none表示不进行认证，任何能通过网络访问到该VTY线路的人都可以直接登录设备，存在极大安全风险，生产环境严禁配置。"
  },
  {
    "id": "HJ014",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "华为设备上用户级别共有16个（0～15），数值越大权限越高，其中3级为管理级。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "用户级别0～15共16级，级别越高可执行的命令越多。0级为参观级，1级为监控级，2级为配置级，3～15级为管理级，15级权限最高。"
  },
  {
    "id": "HJ015",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "VRP将命令划分为0～3共四个级别，用户级别不低于命令级别时才允许执行该命令，其中3级对应管理级。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "命令级别分为参观级（0）、监控级（1）、配置级（2）和管理级（3），用户级别必须不低于命令级别才能执行。用户级别本身有0～15共16级，3级及以上均可执行管理级命令。"
  },
  {
    "id": "HJ016",
    "type": "fill",
    "chapter": "网络安全与设备管理",
    "stem": "在 VTY 用户界面视图下，限制管理员只能通过 SSH 登录、禁止 Telnet，应执行的命令是 protocol ______ ssh。",
    "options": [],
    "answer": ["inbound"],
    "explain": "在 user-interface vty 0 4 视图下执行 protocol inbound ssh，表示只接受通过 SSH 建立的连接，从而禁用不加密的 Telnet。这是设备远程管理加固的常用配置。"
  },
  {
    "id": "HJ017",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "命令 local-user admin password cipher Huawei@123 中的cipher关键字表示？",
    "options": ["以明文方式保存密码，display时可查看", "以不可逆加密方式保存密码，无法还原明文", "以可逆加密方式保存密码，设备可还原出明文", "表示该密码仅用于SSH认证"],
    "answer": "C",
    "explain": "cipher表示密码以可逆加密方式存储，掌握密钥的超级管理员仍可还原明文。若使用irreversible-cipher，则密码不可逆，即使管理员也无法查看原始口令，安全性更高。"
  },
  {
    "id": "HJ018",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "某管理员希望本地用户的密码即使被高权限用户查看配置文件也无法还原，应使用哪个关键字？",
    "options": ["simple", "cipher", "plain", "irreversible-cipher"],
    "answer": "D",
    "explain": "irreversible-cipher采用不可逆算法存储密码，配置文件中只保存摘要值，无法还原出原始明文。cipher是可逆的，simple/plain则是明文。"
  },
  {
    "id": "HJ019",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "创建本地用户时，local-user命令可以配置下列哪些属性？（多选）",
    "options": ["privilege level（用户级别）", "password（登录密码）", "service-type（可使用的服务类型，如telnet、ssh、ftp）", "user-group（所属用户组）"],
    "answer": ["A", "B", "C", "D"],
    "explain": "local-user视图下可配置密码、用户级别、服务类型、用户组、接入时间限制等属性。service-type用于限制该账户可以通过哪些方式登录，例如只允许ssh。"
  },
  {
    "id": "HJ020",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在华为设备上为某本地用户配置 service-type telnet ssh，其作用是？",
    "options": ["指定该用户的登录密码", "将该用户的权限提升到15级", "限制该账户只能通过Telnet和SSH服务接入设备", "指定该用户所属的用户组"],
    "answer": "C",
    "explain": "service-type用于约束本地账户可使用的接入服务，配置telnet ssh后该账户无法用于FTP、Web等其他服务登录，体现了最小权限原则。配置密码和用户组分别使用password和user-group命令。"
  },
  {
    "id": "HJ021",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "管理员希望从低级别用户视图临时切换到高级别视图，需要输入哪个密码？",
    "options": ["enable密码", "bootrom密码", "super password", "console密码"],
    "answer": "C",
    "explain": "super password用于配置从低级别切换到高级别（默认3级）时使用的口令。在用户视图下执行super命令并输入该密码，即可提升用户级别。enable密码是思科设备的机制。"
  },
  {
    "id": "HJ022",
    "type": "fill",
    "chapter": "网络安全与设备管理",
    "stem": "在系统视图下执行 user-interface vty 0 ______ 命令，表示允许最多5个用户同时通过Telnet或SSH登录设备。",
    "options": [],
    "answer": ["4"],
    "explain": "vty 0 4 表示VTY 0到VTY 4共5条线路，即最多允许5个用户并发登录。适当减少VTY线路数量可以限制并发登录数，降低被暴力破解的风险。"
  },
  {
    "id": "HJ023",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "为了只允许管理网段192.168.10.0/24的设备登录本机，应在VTY视图下配置哪条命令？",
    "options": ["inbound acl 2000", "acl 2000 apply inbound", "acl 2000 in", "acl 2000 inbound"],
    "answer": "D",
    "explain": "在user-interface vty视图下使用acl <编号> inbound，对登录本VTY线路的源IP进行过滤，只有匹配ACL permit规则的地址才能建立连接。"
  },
  {
    "id": "HJ024",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "以下哪些措施可以提升设备远程登录的安全性？（多选）",
    "options": ["使用SSH替代Telnet", "限制VTY登录的源IP地址", "关闭不使用的VTY线路或减少VTY数量", "配置登录失败次数限制和锁定时间"],
    "answer": ["A", "B", "C", "D"],
    "explain": "加密传输、源地址限制、减少暴露面、失败锁定四项措施分别从机密性、访问控制、攻击面和暴力破解防护角度提升安全性，应组合使用。"
  },
  {
    "id": "HJ025",
    "type": "fill",
    "chapter": "网络安全与设备管理",
    "stem": "为防止暴力破解，可在AAA视图下配置登录失败次数限制，使用命令 local-aaa-user wrong-password retry-interval ______ retry-time 3 block-time 5，表示3次失败后锁定5分钟。",
    "options": [],
    "answer": ["5"],
    "explain": "wrong-password retry-interval指定失败尝试的统计周期（分钟），retry-time指定周期内允许的失败次数，block-time指定锁定时间。超过次数后账户在锁定时间内无法登录。"
  },
  {
    "id": "HJ026",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在VTY用户界面下配置idle-timeout 10 0，其作用是？",
    "options": ["用户登录后空闲10分钟0秒自动断开连接", "用户必须在10秒内完成登录", "用户每天最多登录10次", "登录会话最多持续10小时"],
    "answer": "A",
    "explain": "idle-timeout 10 0表示空闲超时时间为10分钟0秒，超过该时间无操作则自动断开VTY会话。idle-timeout 0 0表示永不超时，存在安全风险。"
  },
  {
    "id": "HJ027",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "设备加固时应关闭未使用的服务，例如FTP、TFTP、HTTP等，以减少攻击面。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "FTP和TFTP均为明文传输协议，HTTP网管同样不加密，未使用时应对应执行undo ftp server、undo tftp server、undo http server等命令关闭，避免成为入侵入口。"
  },
  {
    "id": "HJ028",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "下列哪些属于华为交换机/路由器安全加固的推荐做法？（多选）",
    "options": ["修改默认的Web网管端口和默认账户", "为管理流量使用带外管理或独立管理VLAN", "删除或禁用出厂默认账户，为每个管理员分配独立账户", "把所有管理员共用一个高权限账户以便审计"],
    "answer": ["A", "B", "C"],
    "explain": "共享账户会导致操作无法追溯到个人，违背审计要求，因此不是加固做法。其余三项分别从端口、管理通道和账户三个维度提升安全性。"
  },
  {
    "id": "HJ029",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在交换机端口上开启端口安全功能，应执行哪条命令？",
    "options": ["switchport port-security", "port-security enable", "mac-security enable", "port-security on"],
    "answer": "B",
    "explain": "华为交换机在接口视图下使用port-security enable开启端口安全。switchport port-security是思科命令，不是华为VRP的命令格式。"
  },
  {
    "id": "HJ030",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "端口安全中配置port-security max-mac-num 2，表示该端口最多允许学习多少个MAC地址？",
    "options": ["1个", "2个", "4个", "不限制"],
    "answer": "B",
    "explain": "max-mac-num用于限制接口允许学习的安全MAC地址数量，超出数量后的处理动作由port-security protect-action决定，可选protect、restrict、shutdown。"
  },
  {
    "id": "HJ031",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "端口安全保护动作中，哪一种会在检测到违规MAC时直接关闭端口？",
    "options": ["protect", "restrict", "shutdown", "deny"],
    "answer": "C",
    "explain": "shutdown动作在违规时直接error-down关闭接口，安全级别最高但影响业务；protect静默丢弃违规报文且不告警；restrict丢弃报文并产生告警。"
  },
  {
    "id": "HJ032",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "端口安全中的shutdown保护动作会在检测到违规MAC时关闭接口，且接口一旦关闭只能通过手工执行undo shutdown恢复，无法配置自动恢复。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "shutdown动作确实会关闭接口并产生告警，但接口被error-down后并非只能手工恢复，可以通过error-down auto-recovery配置自动恢复时间。此外protect只静默丢弃不告警，restrict则丢弃并告警。"
  },
  {
    "id": "HJ033",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "端口隔离（port-isolate）可以实现同一VLAN内不同端口之间的二层流量隔离，但隔离端口仍可与上行口通信。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "把端口加入同一隔离组后，组内端口之间的二层报文被禁止互通，但与非隔离端口（通常是上行口）的通信不受影响，常用于酒店、宿舍等场景防止用户互相访问。"
  },
  {
    "id": "HJ034",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "关于DHCP Snooping的功能与配置，下列描述正确的有哪些？（多选）",
    "options": ["将连接合法DHCP服务器的接口配置为trusted，其余接口为untrusted", "丢弃来自untrusted接口的DHCP Offer、ACK等响应报文", "监听DHCP交互过程，生成DHCP Snooping绑定表", "对所有接口的DHCP报文进行加密后转发"],
    "answer": ["A", "B", "C"],
    "explain": "DHCP Snooping通过信任/非信任接口的划分阻止非法DHCP服务器分配地址，并监听DHCP交互生成绑定表，为IPSG和DAI提供依据。它并不对DHCP报文做加密处理，选项D错误。"
  },
  {
    "id": "HJ035",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "IP Source Guard（IPSG）主要防范的是哪类攻击？",
    "options": ["源IP地址欺骗（伪造他人IP接入网络）", "DDoS流量攻击", "ARP欺骗", "DHCP地址耗尽"],
    "answer": "A",
    "explain": "IPSG基于DHCP Snooping或静态绑定表，对接口收到报文的源IP（以及源MAC）进行匹配检查，不匹配的报文被丢弃，从而抑制源IP地址欺骗。"
  },
  {
    "id": "HJ036",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "动态ARP检测DAI（Dynamic ARP Inspection）依赖下列哪张表项来校验ARP报文？",
    "options": ["路由表", "MAC地址表", "DHCP Snooping绑定表", "ARP缓存表"],
    "answer": "C",
    "explain": "DAI利用DHCP Snooping绑定表中的IP、MAC、VLAN、接口信息，对非信任口收到的ARP报文进行合法性检查，丢弃伪造的ARP应答，防止ARP欺骗。"
  },
  {
    "id": "HJ037",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "关于ARP欺骗及其防护，下列描述正确的有哪些？（多选）",
    "options": ["ARP欺骗通过发送伪造的ARP应答，篡改受害者的ARP缓存", "ARP欺骗可导致用户流量被中间人截获或网络中断", "配置静态ARP绑定可以避免对应表项被伪造ARP覆盖", "DAI可以在接入交换机上动态检测并丢弃非法ARP报文"],
    "answer": ["A", "B", "C", "D"],
    "explain": "ARP协议无认证机制，攻击者可伪造应答实现中间人攻击或断网。静态ARP绑定适合关键服务器，DAI则适合大量终端接入的场景，二者可结合使用。"
  },
  {
    "id": "HJ038",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "在华为设备上执行arp static 192.168.1.1 00e0-fc12-3456 命令，可以手工建立IP与MAC的静态绑定关系，该表项不会被动态ARP学习覆盖。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "该命令语法并不完整：arp static要求同时指定IP地址、MAC地址和VLAN ID，缺少VLAN参数时命令无法下发成功。即使配置成功，静态ARP表项也只能避免对应表项被动态覆盖，并不能阻止攻击者伪造其他IP的ARP报文，因此仍建议配合DAI等手段防护。"
  },
  {
    "id": "HJ039",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "交换机上配置风暴控制（storm control）的目的是？",
    "options": ["限制广播、组播或未知单播报文的速率，防止广播风暴耗尽带宽", "防止MAC地址表溢出", "提高端口转发性能", "防止IP地址冲突"],
    "answer": "A",
    "explain": "风暴控制对入方向广播、组播、未知单播流量进行速率或百分比限制，超限部分被丢弃，从而避免广播风暴造成整网性能下降。"
  },
  {
    "id": "HJ040",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "设备上的CPU攻击防御（CPU防攻击）功能主要解决的问题是？",
    "options": ["防止协议报文过多导致CPU占用率过高，保障协议正常运行", "防止设备内存泄漏", "防止配置文件被篡改", "防止风扇故障导致设备过热"],
    "answer": "A",
    "explain": "CPU防攻击通过CAR限速、协议报文上送CPU的队列调度和CPCAR等机制，限制上送CPU的报文速率，防止攻击报文耗尽CPU资源导致协议中断、管理失效。"
  },
  {
    "id": "HJ041",
    "type": "fill",
    "chapter": "网络安全与设备管理",
    "stem": "为使各设备的日志时间戳保持一致、便于安全事件关联与取证，应在设备上配置 ______ 协议实现时间同步。",
    "options": [],
    "answer": ["NTP", "ntp"],
    "explain": "NTP（网络时间协议）为设备提供统一、准确的时间基准。设备时间不一致会导致日志时间戳混乱，安全事故发生后无法准确关联多台设备的日志并还原攻击时间线。"
  },
  {
    "id": "HJ042",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "华为设备上用于开启信息中心、使日志可以向控制台和日志服务器输出的命令是？",
    "options": ["info-center enable", "log enable", "syslog enable", "logging on"],
    "answer": "A",
    "explain": "info-center enable开启信息中心功能，之后可通过info-center loghost指定syslog服务器地址，通过info-center source配置各模块日志的输出通道和级别。"
  },
  {
    "id": "HJ043",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "Syslog日志级别中，emergency（紧急）对应的级别数值是？",
    "options": ["0", "1", "7", "3"],
    "answer": "A",
    "explain": "Syslog共8个级别0～7：0 emergency、1 alert、2 critical、3 error、4 warning、5 notification、6 informational、7 debugging，数值越小越紧急。"
  },
  {
    "id": "HJ044",
    "type": "multi",
    "chapter": "网络安全与设备管理",
    "stem": "关于Syslog日志级别的描述，下列正确的有哪些？（多选）",
    "options": ["级别0表示emergency，是最高紧急程度", "级别7表示debugging，信息最详细", "数值越大表示信息越详细、紧急程度越低", "级别0表示debugging，信息最详细"],
    "answer": ["A", "B", "C"],
    "explain": "Syslog级别0～7按紧急程度递减、详细程度递增排列，0为emergency（最紧急），7为debugging（最详细）。配置输出级别N表示输出0～N级别的日志。"
  },
  {
    "id": "HJ045",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "SNMPv3相比SNMPv1和SNMPv2c，主要增加了身份认证和数据加密功能。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "SNMPv1/v2c使用团体名（community）进行明文认证，安全性差。SNMPv3引入了USM安全模型，支持认证（如MD5/SHA）和加密（DES/AES），可实现报文完整性校验和机密性保护。"
  },
  {
    "id": "HJ046",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "SNMP中，网管站通过UDP 161端口向设备发送请求报文，设备则通过UDP 162端口主动向网管站发送Trap告警。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "SNMP基于UDP，161是代理（设备）的监听端口，用于接收网管站的GetRequest等查询；162是网管站接收Trap的端口。Trap由设备主动推送，不需要网管站轮询。"
  },
  {
    "id": "HJ047",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在配置SNMP团体名时，为降低安全风险应遵循的原则是？",
    "options": ["使用public和private等默认团体名以方便管理", "使用可读写的团体名以便随时修改设备配置", "使用复杂团体名，并尽量配置为只读权限", "团体名越短越安全"],
    "answer": "C",
    "explain": "public/private是出厂默认团体名，最易被扫描利用。生产环境应使用难以猜测的团体名，并优先配置为只读（read-only）权限，避免通过SNMP篡改设备配置。"
  },
  {
    "id": "HJ048",
    "type": "fill",
    "chapter": "网络安全与设备管理",
    "stem": "管理员需要把设备当前配置保存到设备存储介质作为备份，应在用户视图下执行 save 命令；若要把配置文件上传到远端服务器做异地备份，常用的两种文件传输方式对应的协议是 FTP 和______（填缩写）。",
    "options": [],
    "answer": ["SFTP","sftp"],
    "explain": "除 FTP 外，SFTP 基于 SSH 提供加密的文件传输，安全性更高，因此在需要异地备份配置文件的场景中推荐使用 SFTP。两者都可配合 copy 命令上传或下载配置文件。"
  },
  {
    "id": "HJ049",
    "type": "single",
    "chapter": "网络安全与设备管理",
    "stem": "在对现网设备进行固件（系统软件）升级前，最重要的准备工作是？",
    "options": ["直接上传新版本并立即重启设备", "备份当前配置文件和旧版本系统软件，并确认新版本兼容性", "先清空设备的所有配置", "断开所有业务链路后再升级"],
    "answer": "B",
    "explain": "升级存在失败或兼容性风险，必须事先备份配置文件与旧版本系统文件，查阅版本说明书确认硬件和特性兼容性，并规划回退方案和升级窗口，才能把业务影响降到最低。"
  },
  {
    "id": "HJ050",
    "type": "judge",
    "chapter": "网络安全与设备管理",
    "stem": "配置回滚时，只需在设备上执行save命令即可把配置恢复到之前的某个历史版本。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "save只是把当前运行配置保存为下次启动配置，并不具备版本回滚能力。回滚需要事先通过configuration commit或备份配置文件等方式保存历史版本，再使用回滚或指定配置文件启动的方式恢复。"
  }
];