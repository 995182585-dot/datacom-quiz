window.BANK_HCIP_F = [
  {
    "id": "PF001",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP协议主要解决的是什么问题？",
    "options": [
      "局域网内终端IP地址自动分配",
      "二层环路的破除",
      "默认网关的单点故障问题",
      "路由表条目过多导致的收敛缓慢"
    ],
    "answer": "C",
    "explain": "VRRP通过把多台路由器虚拟成一台虚拟路由器，共用同一个虚拟IP作为网关，从而消除网关单点故障。终端只配置虚拟IP作为网关，无需感知主备切换。"
  },
  {
    "id": "PF002",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP的VRID（虚拟路由器标识），下列说法正确的有？",
    "options": [
      "VRID的取值范围是1～255",
      "VRID为0时表示设备放弃Master身份",
      "同一网段内同一VRID的多台设备构成一个VRRP备份组",
      "同一接口下的多个备份组可以共用同一个VRID"
    ],
    "answer": ["A", "C"],
    "explain": "VRID取值范围1～255，0被保留不作使用；同一网段内同一VRID的设备构成一个备份组。同一接口上的不同备份组必须使用不同的VRID，否则会冲突。"
  },
  {
    "id": "PF003",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP虚拟路由器使用的虚拟MAC地址格式为00-00-5E-00-01-{VRID}，其中00-00-5E是IANA分配给VRRP的OUI。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "VRRP规定虚拟MAC为00-00-5E-00-01-{VRID}，00-00-5E为IANA分配给VRRP的OUI。主机ARP请求虚拟IP时，Master回应此虚拟MAC。"
  },
  {
    "id": "PF004",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP优先级，下列描述正确的有？",
    "options": [
      "取值范围是0～255",
      "默认值为100",
      "数值越大越优先成为Master",
      "数值越小越优先成为Master"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VRRP优先级范围0～255，缺省100，数值越大越容易成为Master。优先级0为保留值，表示设备放弃Master身份，通常用于主动触发切换。"
  },
  {
    "id": "PF005",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "在VRRP中，IP地址拥有者（接口IP与虚拟IP相同）的优先级可以由管理员手工修改为120。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "当设备接口实际IP与虚拟IP相同时，该设备为IP地址拥有者，优先级固定为255且不可修改。它始终是Master，其他设备无法抢占。"
  },
  {
    "id": "PF006",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP的定时器，下列说法正确的有？",
    "options": [
      "默认通告间隔为1秒",
      "Master按通告间隔周期性发送通告报文",
      "Master_Down_Timer = 3 × 通告间隔 + Skew_Time",
      "默认通告间隔为3秒"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VRRPv2默认通告间隔为1秒，Master据此周期性发送通告。Backup的Master_Down_Timer为3倍通告间隔加Skew_Time，超时即认为Master失效。"
  },
  {
    "id": "PF007",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP Backup设备上Master_Down_Timer的计算公式是？",
    "options": [
      "通告间隔 × 2 + Skew_Time",
      "通告间隔 × 3 + Skew_Time",
      "通告间隔 × 3",
      "通告间隔 × 5"
    ],
    "answer": "B",
    "explain": "Master_Down_Timer = 3 × Advertisement_Interval + Skew_Time。Skew_Time用于让优先级高的Backup更快超时，从而加快主备切换速度。"
  },
  {
    "id": "PF008",
    "type": "fill",
    "chapter": "VRRP与高可用",
    "stem": "VRRP报文直接封装在IP报文中，其IP协议号是______。",
    "options": [],
    "answer": ["112"],
    "explain": "VRRP使用IP协议号112进行封装，而不是承载在TCP或UDP之上。它使用组播地址224.0.0.18发送通告报文，TTL固定为255。"
  },
  {
    "id": "PF009",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP通告报文发送时使用的目的IP地址和TTL分别是？",
    "options": [
      "224.0.0.18，TTL=1",
      "224.0.0.18，TTL=255",
      "224.0.0.5，TTL=255",
      "224.0.0.2，TTL=1"
    ],
    "answer": "B",
    "explain": "VRRP通告报文发送到组播地址224.0.0.18，TTL为255。VRRP收到报文时会检查TTL是否为255，以防止跨网段的伪造报文。"
  },
  {
    "id": "PF010",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP的状态，下列说法正确的有？",
    "options": [
      "VRRP中定义了Initialize、Master、Backup三种状态",
      "设备启动时首先处于Initialize状态",
      "收到通告并完成竞选后，设备稳定在Master或Backup状态",
      "VRRP中定义了Initialize、Active、Standby三种状态"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VRRP只有Initialize、Master、Backup三种状态，没有Active/Standby的提法。设备启动进入Initialize，收到通告后按优先级竞选，最终稳定在Master或Backup。"
  },
  {
    "id": "PF011",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP协议默认开启抢占功能，即优先级更高的Backup在收到低优先级Master的通告后会主动抢占成为Master。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "VRRP缺省启用抢占，Backup只要优先级高于当前Master就会抢占。可以通过vrrp vrid preempt-mode disable关闭抢占，或用preempt-mode timer delay设置抢占延时。"
  },
  {
    "id": "PF012",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP的抢占延时（preempt delay），下列说法正确的有？",
    "options": [
      "可避免网络震荡时频繁发生主备切换",
      "可让路由协议先完成收敛再抢占",
      "配置后高优先级设备会等待延时时间后再抢占",
      "只能在Master设备上配置抢占延时"
    ],
    "answer": ["A", "B", "C"],
    "explain": "抢占延时用于在链路恢复或设备重启后延迟抢占，等待路由收敛完成，避免流量黑洞。它配置在Backup（潜在抢占者）设备上，而非Master设备。"
  },
  {
    "id": "PF013",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP的认证，下列说法正确的有？",
    "options": [
      "VRRPv2支持简单字符认证",
      "VRRPv2支持MD5认证",
      "认证用于防止非法设备加入备份组",
      "VRRPv3仍然保留并增强了原有的认证机制"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VRRPv2支持Simple（简单字符）和MD5两种认证方式，用于防止非法设备加入备份组。VRRPv3已取消认证字段，改由IPsec等机制保障安全。"
  },
  {
    "id": "PF014",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "同一VRRP备份组内的所有设备必须配置完全相同的认证方式和认证字，否则报文将被丢弃。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "认证方式和认证字必须一致，否则接收方校验失败会丢弃报文，导致备份组无法正常协商。此外VRID与虚拟IP也必须保持一致。"
  },
  {
    "id": "PF015",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "在华为设备上配置VRRP备份组1的虚拟IP地址192.168.1.254，正确的命令是？",
    "options": [
      "vrrp 1 virtual-ip 192.168.1.254",
      "vrrp vrid 1 virtual-ip 192.168.1.254",
      "vrrp vrid 1 ip 192.168.1.254",
      "vrrp group 1 virtual-address 192.168.1.254"
    ],
    "answer": "B",
    "explain": "华为设备在接口视图下使用vrrp vrid <vrid> virtual-ip <ip>命令配置虚拟IP地址。虚拟IP必须与接口IP处于同一网段。"
  },
  {
    "id": "PF016",
    "type": "fill",
    "chapter": "VRRP与高可用",
    "stem": "查看VRRP备份组详细状态信息（状态、优先级、虚拟IP等）使用的命令是display ______。",
    "options": [],
    "answer": ["vrrp"],
    "explain": "display vrrp用于显示VRRP备份组的详细信息，包括状态、优先级、抢占方式和定时器等。display vrrp brief只显示接口、VRID、状态等概要信息。"
  },
  {
    "id": "PF017",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "display vrrp brief命令的输出中，通常不包含以下哪项信息？",
    "options": [
      "VRRP报文的MD5认证密钥",
      "接口名称与VRID",
      "当前状态（Master/Backup）",
      "虚拟IP地址"
    ],
    "answer": "A",
    "explain": "display vrrp brief以列表形式显示接口、VRID、状态、优先级、虚拟IP等概要信息。出于安全考虑，设备不会显示认证密钥的明文。"
  },
  {
    "id": "PF018",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "下列关于VRRP与HSRP的说法，错误的是？",
    "options": [
      "HSRP是Cisco私有协议，VRRP是IETF标准协议",
      "HSRP使用UDP 1985，VRRP使用IP协议号112",
      "HSRP的虚拟MAC形如00-00-0C-07-AC-XX",
      "VRRP只能支持两个设备组成一个备份组"
    ],
    "answer": "D",
    "explain": "HSRP为Cisco私有，使用UDP 1985，虚拟MAC为00-00-0C-07-AC-XX；VRRP是IETF标准，使用IP协议112。VRRP一个备份组可包含多台设备，不限于两台。"
  },
  {
    "id": "PF019",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP通告报文的发送行为，下列说法正确的有？",
    "options": [
      "正常情况下只有Master周期性发送通告",
      "默认通告间隔为1秒",
      "Backup只监听通告而不发送",
      "Backup也会按相同间隔发送通告报文"
    ],
    "answer": ["A", "B", "C"],
    "explain": "正常情况下只有Master以默认1秒的间隔发送通告，Backup只监听不发送。仅当Backup超时转为Master后，它才开始周期性发送通告。"
  },
  {
    "id": "PF020",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP的Skew_Time计算公式是？",
    "options": [
      "(256 - Priority) / 256 秒",
      "(255 - Priority) / 256 秒",
      "(256 - Priority) / 255 秒",
      "Priority / 256 秒"
    ],
    "answer": "A",
    "explain": "Skew_Time = (256 - Priority)/256 秒，优先级越高该值越小。这样高优先级Backup的Master_Down_Timer更短，能够更快完成切换。"
  },
  {
    "id": "PF021",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "在VRRP中，优先级为0表示该设备立即放弃Master身份，通常用于主动触发主备切换。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "优先级0是一个特殊保留值，设备置0后立即停止作为Master并触发Backup快速切换。常用于管理员期望主动切换流量的场景。"
  },
  {
    "id": "PF022",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "通过VRRP监视上行接口，当接口故障时降低本机VRRP优先级，正确的命令是？",
    "options": [
      "vrrp vrid 1 monitor GigabitEthernet0/0/1",
      "vrrp vrid 1 track ip 192.168.1.1",
      "vrrp vrid 1 track interface GigabitEthernet0/0/1 reduced 30",
      "vrrp vrid 1 priority 30"
    ],
    "answer": "C",
    "explain": "vrrp vrid <vrid> track interface <if> reduced <value>用于监视接口，接口Down时优先级降低指定数值。降低后的优先级低于Backup即触发切换。"
  },
  {
    "id": "PF023",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "下列哪一项不能作为VRRP的track监视对象？",
    "options": [
      "主机的MAC地址表项",
      "上行接口状态",
      "BFD会话状态",
      "通过track监视的路由状态"
    ],
    "answer": "A",
    "explain": "VRRP可通过track监视接口、BFD会话和路由等对象，对象故障时降低优先级以触发切换。主机的MAC地址表项属于二层转发表，不是VRRP的监视对象。"
  },
  {
    "id": "PF024",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP与BFD联动的主要目的是什么？",
    "options": [
      "减少VRRP通告报文的数量",
      "加快故障检测速度，实现快速主备切换",
      "实现虚拟IP地址的自动分配",
      "替代VRRP的认证功能"
    ],
    "answer": "B",
    "explain": "VRRP自身的Master_Down_Timer最短也在秒级，而BFD可提供毫秒级故障检测。通过VRRP监视BFD会话，可实现毫秒级的快速切换。"
  },
  {
    "id": "PF025",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "当VRRP备份组中的Master设备发生故障时，Backup设备在Master_Down_Timer超时后切换为Master并发送免费ARP更新下游交换机的MAC表项。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Backup超时后成为新Master，立即发送免费ARP通告虚拟IP对应的虚拟MAC。下游交换机据此刷新MAC表，把流量切换到新Master。"
  },
  {
    "id": "PF026",
    "type": "fill",
    "chapter": "VRRP与高可用",
    "stem": "VRRP协议的默认优先级是______。",
    "options": [],
    "answer": ["100"],
    "explain": "VRRP设备默认优先级为100，取值范围0～255，数值越大越优先。只有优先级为255的IP地址拥有者无需参与选举即成为Master。"
  },
  {
    "id": "PF027",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "两台路由器R1、R2组成VRRP备份组，R1优先级为120，R2为150，R2故障恢复后会发生什么？",
    "options": [
      "R1继续保持Master，R2变为Backup",
      "两者都成为Master",
      "备份组被删除后重建",
      "R2抢占成为Master"
    ],
    "answer": "D",
    "explain": "默认开启抢占，R2优先级150高于R1的120，R2恢复后会发送通告抢占为Master。若配置了抢占延时，则在延时到达后再发起抢占。"
  },
  {
    "id": "PF028",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "在VRRP中，如果Backup设备长时间未收到Master的通告且Master_Down_Timer超时，它会？",
    "options": [
      "先进入Initialize状态再重新竞选",
      "保持在Backup状态继续等待",
      "直接成为Master",
      "发送ARP请求探测Master是否在线"
    ],
    "answer": "C",
    "explain": "Master_Down_Timer超时后，Backup由Backup状态直接迁移到Master状态，无需重新选举。若组内有多台Backup，优先级高者的定时器更短，会先抢占。"
  },
  {
    "id": "PF029",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP负载分担，下列说法错误的是？",
    "options": [
      "同一备份组内多台设备可以同时担任Master",
      "可以通过创建多个备份组让不同设备分别担任各组Master",
      "可以在同一接口下创建多个备份组，终端分别配置不同网关",
      "可以通过MSTP实例与VRRP备份组绑定实现流量分担"
    ],
    "answer": "A",
    "explain": "同一VRRP备份组内同一时刻只能有一台Master，因此负载分担必须通过多个备份组实现。可以让不同设备分别担任各组Master，并结合MSTP实例实现路径分担。"
  },
  {
    "id": "PF030",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP与MSTP配合实现负载分担时，通常的做法是？",
    "options": [
      "不同的VLAN映射到同一个VRRP备份组",
      "MSTP实例与VRRP优先级必须完全相同",
      "VRRP虚拟IP必须与MSTP根桥地址一致",
      "把不同的MSTP实例映射到不同的VRRP备份组"
    ],
    "answer": "D",
    "explain": "把不同VLAN映射到不同MSTP实例，并让各实例的根桥与对应VRRP备份组的Master处于同一台设备上，可实现流量负载分担与路径最优。"
  },
  {
    "id": "PF031",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP备份组中的虚拟IP地址必须与接口的实际IP地址处于同一网段。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "虚拟IP必须与接口IP处于同一网段，否则终端无法通过ARP解析该网关。若虚拟IP与接口IP完全相同，则该设备成为IP地址拥有者。"
  },
  {
    "id": "PF032",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "修改VRRP备份组1优先级的命令是？",
    "options": [
      "vrrp 1 priority 120",
      "vrrp vrid 1 priority level 120",
      "vrrp vrid 1 preempt 120",
      "vrrp vrid 1 priority 120"
    ],
    "answer": "D",
    "explain": "在接口视图下使用vrrp vrid <vrid> priority <value>配置优先级，取值范围1～254（0和255有特殊含义）。缺省值为100。"
  },
  {
    "id": "PF033",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP中Master设备在切换发生时会发送什么报文通知下游设备更新MAC表？",
    "options": [
      "ICMP重定向报文",
      "VRRP通告报文",
      "免费ARP（Gratuitous ARP）",
      "IGMP加入报文"
    ],
    "answer": "C",
    "explain": "新Master上任后立即发送免费ARP，源IP为虚拟IP、源MAC为虚拟MAC。交换机收到后刷新MAC地址表，把去往网关的流量引导到新Master。"
  },
  {
    "id": "PF034",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP报文，下列说法正确的有？",
    "options": [
      "VRRP通告报文直接封装在IP报文中，协议号为112",
      "VRRP报文的目的地址为224.0.0.18",
      "VRRP报文的TTL为255",
      "VRRP使用TCP 112端口建立连接"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VRRP运行在IP之上，协议号112，目的组播地址224.0.0.18，TTL为255。VRRP不使用TCP，也不建立连接，是纯周期通告机制。"
  },
  {
    "id": "PF035",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP的Master选举，下列说法正确的有？",
    "options": [
      "首先比较优先级，数值大者优先",
      "优先级相同时比较接口IP地址，地址大者优先",
      "优先级为255的IP地址拥有者无需比较即成为Master",
      "优先级相同时比较设备序列号，序号小者优先"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VRRP选举先比优先级，数值大者优先；优先级相同时比较接口主IP地址，大者成为Master。IP地址拥有者优先级为255，必然成为Master。"
  },
  {
    "id": "PF036",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRPv3仍然保留了VRRPv2中的简单字符认证和MD5认证功能，认证方式与VRRPv2完全一致。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "VRRPv3（RFC 5798）已移除认证字段，因为原有认证机制安全强度有限。如需防护伪造报文，需要借助IPsec AH等上层安全机制。"
  },
  {
    "id": "PF037",
    "type": "fill",
    "chapter": "VRRP与高可用",
    "stem": "VRRP通告报文的目的组播地址是224.0.0.______。",
    "options": [],
    "answer": ["18"],
    "explain": "VRRP使用组播地址224.0.0.18发送通告报文，该地址属于本地链路范围组播。备份组内的所有成员设备都会监听该地址。"
  },
  {
    "id": "PF038",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于防火墙双机热备中的VGMP与HRP，下列说法正确的有？",
    "options": [
      "VGMP统一管理多个VRRP备份组的状态",
      "VGMP状态变化时统一调整组内VRRP优先级",
      "HRP负责同步配置、会话表等状态信息",
      "VGMP是IETF定义的标准协议"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VGMP统一管理防火墙上的所有VRRP备份组，保证主备角色一致，状态变化时统一调整优先级。HRP负责同步配置与会话表。VGMP是华为私有机制，不是IETF标准。"
  },
  {
    "id": "PF039",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "华为防火墙双机热备中，HRP协议主要完成的功能是？",
    "options": [
      "选举VRRP的Master设备",
      "实现链路层聚合",
      "同步配置命令、会话表与状态信息",
      "在骨干网中分发MPLS标签"
    ],
    "answer": "C",
    "explain": "HRP（Huawei Redundancy Protocol）用于在双机之间实时备份配置、会话表和动态表项。这样主备切换时已建立的连接不会中断，业务感知不到切换。"
  },
  {
    "id": "PF040",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于防火墙双机热备中的VGMP，下列说法正确的有？",
    "options": [
      "把多个VRRP备份组加入同一个VGMP组统一管理",
      "状态变化时统一调整组内所有VRRP备份组的优先级",
      "可以避免多个备份组主备角色不一致导致的流量丢失",
      "是一个由IETF定义的标准协议"
    ],
    "answer": ["A", "B", "C"],
    "explain": "VGMP是华为私有机制，把多个VRRP备份组纳入统一管理，状态变化时统一调整优先级。它不属于IETF标准，是华为防火墙高可用方案的组成部分。"
  },
  {
    "id": "PF041",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "配置VRRP延时抢占（抢占延时20秒）的命令是？",
    "options": [
      "vrrp vrid 1 preempt delay 20",
      "vrrp vrid 1 preempt-mode timer delay 20",
      "vrrp vrid 1 preempt-mode delay-time 20",
      "vrrp vrid 1 preempt timer 20"
    ],
    "answer": "B",
    "explain": "华为设备使用vrrp vrid <vrid> preempt-mode timer delay <seconds>配置抢占延时。延时期间若收到更高优先级的通告，则放弃本次抢占。"
  },
  {
    "id": "PF042",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP的Backup设备在Backup状态下也会周期性发送VRRP通告报文，以便随时接替Master。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "Backup在Backup状态下只监听通告，不发送通告报文。只有Master才周期性发送通告，Backup超时转为Master后才开始发送。"
  },
  {
    "id": "PF043",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "某接口下配置了两个VRRP备份组，VRID分别为1和2，下列说法正确的有？",
    "options": [
      "两个备份组的虚拟IP必须不同",
      "两个备份组一定使用相同的虚拟MAC地址",
      "两个备份组可以配置不同的优先级以实现负载分担",
      "两个备份组一共只能有一台设备处于Master状态"
    ],
    "answer": ["A", "C"],
    "explain": "同一接口上不同VRID对应不同备份组，虚拟IP必须不同，虚拟MAC也因VRID不同而不同。两个组相互独立，可以各有自己的Master，从而形成负载分担。"
  },
  {
    "id": "PF044",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "排查VRRP备份组状态异常时，下列哪一项通常不是检查重点？",
    "options": [
      "备份组内VRID与虚拟IP配置是否一致",
      "认证方式与认证字是否一致",
      "接口是否Up以及链路是否可达",
      "设备的MAC地址表项数量是否超限"
    ],
    "answer": "D",
    "explain": "VRRP异常常见原因包括配置不一致、认证不匹配、接口Down或通告报文被阻断。MAC地址表项数量限制通常与VRRP协商过程无关。"
  },
  {
    "id": "PF045",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "下列关于VRRP状态迁移的说法，错误的是？",
    "options": [
      "设备启动后首先进入Initialize状态",
      "Initialize状态下收到通告后会按优先级进入Backup或Master",
      "Master收到更高优先级的通告后会迁移到Backup",
      "Backup在Master_Down_Timer超时后会先回到Initialize再竞选"
    ],
    "answer": "D",
    "explain": "VRRP三状态之间可直接迁移：Initialize按收到的通告进入Backup或Master，Master遇到更高优先级通告降为Backup，Backup超时后直接转为Master，无需先回Initialize。"
  },
  {
    "id": "PF046",
    "type": "multi",
    "chapter": "VRRP与高可用",
    "stem": "关于VRRP中的IP地址拥有者（IP Owner），下列说法正确的有？",
    "options": [
      "接口实际IP地址与虚拟IP地址相同",
      "其优先级固定为255且不可修改",
      "它始终是Master，不会被抢占",
      "其优先级默认为100，可手工调整"
    ],
    "answer": ["A", "B", "C"],
    "explain": "当接口实际IP与虚拟IP相同时，该设备即IP地址拥有者，优先级固定为255且不可配置修改。它始终担任Master，其他设备无法抢占。"
  },
  {
    "id": "PF047",
    "type": "fill",
    "chapter": "VRRP与高可用",
    "stem": "VRRP备份组中，当设备优先级为______时表示该设备放弃参与Master选举。",
    "options": [],
    "answer": ["0"],
    "explain": "优先级0为保留值，表示设备放弃Master身份。配置后设备立即停止作为Master，可用于主动触发主备切换。"
  },
  {
    "id": "PF048",
    "type": "judge",
    "chapter": "VRRP与高可用",
    "stem": "VRRP只能用于IPv4网络，不支持IPv6环境下的网关冗余。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "VRRPv3同时支持IPv4和IPv6，可在IPv6网络中提供默认网关冗余。华为设备支持在IPv6接口上配置VRRPv3备份组。"
  },
  {
    "id": "PF049",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "VRRP通告报文中不包含以下哪个字段？",
    "options": [
      "VRID",
      "优先级",
      "通告间隔",
      "主机的MAC地址表"
    ],
    "answer": "D",
    "explain": "VRRP通告报文包含VRID、优先级、通告间隔、认证信息、虚拟IP数量等字段。它不会携带任何主机MAC地址表信息。"
  },
  {
    "id": "PF050",
    "type": "single",
    "chapter": "VRRP与高可用",
    "stem": "下列场景中，部署VRRP没有实际意义的是？",
    "options": [
      "单台路由器连接单条链路的简单接入场景",
      "企业园区网双出口网关冗余",
      "数据中心服务器网关高可用",
      "防火墙双机热备的接口地址冗余"
    ],
    "answer": "A",
    "explain": "VRRP用于在存在冗余设备的网关场景中消除单点故障，如双出口、服务器网关和防火墙热备。单设备单链路本身没有冗余，部署VRRP无法带来高可用收益。"
  },
  {
    "id": "PF051",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS技术产生的主要背景是？",
    "options": [
      "传统IP逐跳转发效率低，且难以支持流量工程与VPN",
      "以太网链路带宽不足",
      "IPv4地址资源枯竭",
      "无线接入速率过低"
    ],
    "answer": "A",
    "explain": "传统IP转发需要每跳查表且只能沿最短路径转发，难以实现显式路径与VPN隔离。MPLS通过标签交换提升转发效率并支持流量工程与VPN。"
  },
  {
    "id": "PF052",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于32位的MPLS标签结构，下列说法正确的有？",
    "options": [
      "标签值（Label）字段占20位",
      "EXP字段占3位",
      "S字段占1位，用于标识标签栈底",
      "标签值（Label）字段占24位"
    ],
    "answer": ["A", "B", "C"],
    "explain": "MPLS标签为32位，由20位Label值、3位EXP、1位S和8位TTL组成。S位为1表示栈底，EXP可用于承载QoS优先级，TTL用于防环。"
  },
  {
    "id": "PF053",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS标签中S位的作用是？",
    "options": [
      "标识该标签是否为标签栈底",
      "标识标签承载的优先级",
      "标识标签的生存时间",
      "标识标签对应的转发等价类"
    ],
    "answer": "A",
    "explain": "S位（Bottom of Stack）为1时表示该标签是标签栈的栈底。设备通过S位判断标签栈是否结束，栈底标签之下即为IP报文。"
  },
  {
    "id": "PF054",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS标签共32位，其中EXP字段占多少位？",
    "options": [
      "1位",
      "3位",
      "8位",
      "20位"
    ],
    "answer": "B",
    "explain": "MPLS标签由20位Label值、3位EXP、1位S和8位TTL组成。EXP常用于承载优先级信息以支持DiffServ QoS，在MPLS TE中还可承载抢占与亲和属性。"
  },
  {
    "id": "PF055",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS标签中的TTL字段共8位，每经过一跳LSR递减1，用于防止报文在MPLS域中无限循环。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "标签TTL为8位，每经过一跳LSR递减1，减到0时丢弃报文并发送ICMP超时。它与IP TTL协同工作，防止环路导致报文反复循环。"
  },
  {
    "id": "PF056",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于MPLS的标签操作，下列说法正确的有？",
    "options": [
      "Push表示压入标签，通常由Ingress LER执行",
      "Swap表示交换标签，由中间LSR执行",
      "Pop表示弹出标签，可由PHP机制在倒数第二跳执行",
      "Flood表示在MPLS域内泛洪标签报文"
    ],
    "answer": ["A", "B", "C"],
    "explain": "MPLS的标签操作只有Push、Swap和Pop三种：入口压入、中间交换、出口或次末跳弹出。Flood是二层泛洪行为，不属于MPLS标签操作。"
  },
  {
    "id": "PF057",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS网络中，位于MPLS域边缘、负责标签压入或弹出的设备称为？",
    "options": [
      "LSR（Label Switching Router）",
      "CE（Customer Edge）",
      "P（Provider）",
      "LER（Label Edge Router）"
    ],
    "answer": "D",
    "explain": "LER位于MPLS域边缘，负责为进入的IP报文压入标签（Ingress）或为离开的报文弹出标签（Egress）。域内只做标签交换的设备称为LSR。"
  },
  {
    "id": "PF058",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "LSR位于MPLS域内部，只根据标签转发报文，因此可以完全不运行IGP等路由协议。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "LSR虽然依据标签转发，但仍需运行IGP以生成路由并据此分配标签。LDP必须依赖IGP路由才能正确建立LSP，因此不能脱离路由协议。"
  },
  {
    "id": "PF059",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于FEC（转发等价类），下列说法正确的有？",
    "options": [
      "FEC是一组以相同方式转发的报文集合",
      "MPLS为每个FEC分配一个标签",
      "通常以目的IP网段来划分FEC",
      "FEC是MPLS域内运行的一种路由协议"
    ],
    "answer": ["A", "B", "C"],
    "explain": "FEC是一组具有相同转发处理方式的报文，MPLS为其分配标签，通常按目的IP网段划分。同一FEC的报文沿同一条LSP转发。FEC不是路由协议。"
  },
  {
    "id": "PF060",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "LSP（标签交换路径）是指？",
    "options": [
      "MPLS域内的最短路由表",
      "报文在MPLS域中经过的一系列LSR组成的转发路径",
      "标签分发协议建立的会话链路",
      "一种VPN实例的名称"
    ],
    "answer": "B",
    "explain": "LSP是由一系列LSR构成的单向转发路径，报文沿LSP逐跳进行标签交换。LSP的建立可以由LDP、RSVP-TE或MP-BGP完成。"
  },
  {
    "id": "PF061",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于PHP（次末跳弹出）机制，下列说法正确的有？",
    "options": [
      "由倒数第二跳LSR提前弹出栈顶标签",
      "出口LSR收到无标签报文后只做IP转发",
      "通过分发隐式空标签3来实现",
      "PHP要求出口LSR也必须执行一次标签交换"
    ],
    "answer": ["A", "B", "C"],
    "explain": "PHP由倒数第二跳LSR弹出标签，使出口LER直接进行IP转发，减少一次标签查表开销。它通过下游分发隐式空标签3来触发，出口LSR无需再做标签交换。"
  },
  {
    "id": "PF062",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于MPLS空标签，下列说法正确的有？",
    "options": [
      "隐式空标签的值为3",
      "显式空标签的值为0",
      "分发隐式空标签表示需要执行PHP",
      "隐式空标签的值为0"
    ],
    "answer": ["A", "B", "C"],
    "explain": "隐式空标签值为3，出口LSR分发它表示要求上游执行PHP；显式空标签值为0，表示报文需带标签到达出口后再弹出。二者取值不可混淆。"
  },
  {
    "id": "PF063",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS中显式空标签（Explicit Null）的值是？",
    "options": [
      "3",
      "0",
      "7",
      "14"
    ],
    "answer": "B",
    "explain": "显式空标签值为0，出口LSR向上游分发该标签表示报文需要携带标签到达出口。出口LSR收到标签0后弹出标签再转发IP报文，不执行PHP。"
  },
  {
    "id": "PF064",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "LDP使用UDP 646端口发送Hello消息发现邻居，使用TCP 646端口建立会话并交互标签映射消息。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "LDP的邻居发现使用UDP 646发送Hello消息，会话建立与标签映射等消息则通过TCP 646可靠传输。LDP运行在TCP/UDP之上，而非IP协议号112。"
  },
  {
    "id": "PF065",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "LDP建立会话时，使用什么报文发现邻居？",
    "options": [
      "Hello消息（UDP 646）",
      "Initialization消息（TCP 646）",
      "Keepalive消息（UDP 646）",
      "Notification消息"
    ],
    "answer": "A",
    "explain": "LDP周期性以组播方式发送Hello消息（UDP 646）用于发现邻居。之后通过TCP 646建立会话，交互Initialization和Keepalive消息维持邻居关系。"
  },
  {
    "id": "PF066",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "LDP的标签保持方式分为Liberal（自由）和Conservative（保守）两种，华为设备默认采用自由方式。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Liberal方式保留所有收到的标签映射，便于快速切换但占用较多资源；Conservative只保留最优路由对应的映射。华为设备默认使用Liberal方式。"
  },
  {
    "id": "PF067",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS域内转发报文时，LSR依据什么进行转发？",
    "options": [
      "仅依据IP路由表",
      "仅依据ARP表",
      "ILM表（入标签映射）与NHLFE（下一跳标签转发表项）",
      "仅依据MAC地址表"
    ],
    "answer": "C",
    "explain": "LSR收到带标签报文后先查ILM表得到对应处理动作，再查NHLFE得到出标签、出接口和下一跳。两者共同完成标签转发决策。"
  },
  {
    "id": "PF068",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "NHLFE表项包含出标签、出接口和下一跳等信息，与ILM表项配合共同完成标签转发。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "LSR收到带标签报文后先查ILM得到处理动作，再查NHLFE得到出标签、出接口和下一跳。在PHP场景中NHLFE的出标签为空。"
  },
  {
    "id": "PF069",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS标签栈深度增加会对网络产生什么影响？",
    "options": [
      "报文转发速度显著提升",
      "报文头部增大，可能触发MTU问题并降低转发效率",
      "标签栈深度不影响MTU",
      "标签栈深度最大只能是2层"
    ],
    "answer": "B",
    "explain": "每层标签占4字节，栈越深报文头越大，容易触发分片或MTU超限问题。同时查表开销增加，转发效率随之下降。"
  },
  {
    "id": "PF070",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS标签栈中的标签数量最多只能有一层，因此不存在多层标签栈的情况。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "MPLS支持多层标签栈，转发时总是先处理栈顶标签。在BGP/MPLS VPN中外层标签用于公网隧道，内层标签用于区分VPN实例。"
  },
  {
    "id": "PF071",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于MPLS VPN中的设备角色，下列说法正确的有？",
    "options": [
      "PE直接连接CE，负责维护VPN实例",
      "P设备位于骨干内部，不感知VPN信息",
      "CE通常不感知MPLS，只运行普通IP路由",
      "P设备必须为每个VPN维护独立的VRF"
    ],
    "answer": ["A", "B", "C"],
    "explain": "PE负责维护VPN实例并连接CE，P设备只做标签转发、不感知VPN，CE通常不感知MPLS。要求P设备维护VRF的说法是错误的，这正是VPN对骨干透明性的体现。"
  },
  {
    "id": "PF072",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于MPLS VPN中P设备的特点，下列说法正确的有？",
    "options": [
      "位于MPLS骨干网络内部",
      "只需支持MPLS标签转发",
      "不需要维护VPN实例",
      "必须运行MP-BGP并维护VPNv4路由"
    ],
    "answer": ["A", "B", "C"],
    "explain": "P设备位于骨干内部，只负责标签转发，不感知VPN，无需维护VRF或运行MP-BGP。这体现了MPLS VPN对骨干设备的透明性。"
  },
  {
    "id": "PF073",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于VPN实例中的RD（Route Distinguisher），下列说法正确的有？",
    "options": [
      "RD的长度为64位",
      "RD与IPv4前缀组合构成VPNv4地址",
      "RD的作用是区分不同VPN中的相同前缀",
      "RD用于控制VPN路由的接收与发布"
    ],
    "answer": ["A", "B", "C"],
    "explain": "RD为64位，与IPv4前缀组合成96位的VPNv4地址，用于区分不同VPN中的相同前缀。控制路由接收与发布的是RT，而不是RD。"
  },
  {
    "id": "PF074",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "关于RD与RT的区别，下列说法正确的是？",
    "options": [
      "RD用于控制路由发布，RT用于区分前缀",
      "RD和RT的作用完全相同",
      "RD用于区分相同前缀，RT用于控制VPN路由的发布与接收",
      "RD是32位，RT是64位"
    ],
    "answer": "C",
    "explain": "RD为64位，附加在前缀前用于唯一标识，接收端不关心其具体取值。RT是BGP扩展团体属性，分为Export RT和Import RT，用于控制路由的发布与接收。"
  },
  {
    "id": "PF075",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "关于RT（Route Target）属性，下列说法错误的是？",
    "options": [
      "RT是BGP的扩展团体属性",
      "PE通过比较Import RT与对端Export RT决定是否接收路由",
      "一个VPN实例可以配置多个VPN Target",
      "RT的作用是在公网中标识唯一的前缀"
    ],
    "answer": "D",
    "explain": "RT是BGP扩展团体属性，用于控制VPN路由的发布与接收，一个VPN实例可配置多个RT。在公网中标识唯一前缀的是RD，它与IPv4前缀组合成VPNv4地址。"
  },
  {
    "id": "PF076",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "在BGP/MPLS IP VPN中，PE之间通过MP-BGP传递VPNv4路由，同时携带私网标签和RT属性。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "PE之间建立MP-IBGP邻居，通过VPNv4地址族发布路由。每条VPNv4路由携带RD、RT扩展团体以及由MP-BGP分配的私网标签。"
  },
  {
    "id": "PF077",
    "type": "fill",
    "chapter": "MPLS与VPN基础",
    "stem": "在BGP/MPLS IP VPN中，PE之间通常通过______邻居传递VPNv4路由。",
    "options": [],
    "answer": ["MP-IBGP", "MP-BGP", "MP-iBGP"],
    "explain": "PE之间通常建立MP-IBGP邻居，并在VPNv4地址族下使能。为减少IBGP全连接数量，也可以引入路由反射器RR。"
  },
  {
    "id": "PF078",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS VPN报文转发中，关于外层标签和内层标签，下列说法正确的有？",
    "options": [
      "外层标签用于在公网隧道中转发报文",
      "内层标签用于对端PE区分报文所属的VPN实例",
      "外层标签通常由LDP或RSVP-TE分配",
      "内层标签由P设备通过LDP分配"
    ],
    "answer": ["A", "B", "C"],
    "explain": "外层标签由LDP或RSVP-TE分配，用于公网隧道转发；内层标签由对端PE通过MP-BGP分配，用于区分VPN实例。P设备不参与私网标签的分配。"
  },
  {
    "id": "PF079",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS VPN中，私网标签由谁分配？",
    "options": [
      "P设备通过LDP分配",
      "对端PE通过MP-BGP分配",
      "CE设备通过静态配置分配",
      "RR通过RSVP-TE分配"
    ],
    "answer": "B",
    "explain": "私网标签由对端PE通过MP-BGP的VPNv4路由携带下发，用于标识报文所属的VPN实例。公网标签则由LDP或RSVP-TE分配。"
  },
  {
    "id": "PF080",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "在华为设备上创建VPN实例的命令是？",
    "options": [
      "vpn-instance vpn1",
      "mpls vpn vpn1",
      "ip vpn-instance vpn1",
      "ip vrf create vpn1"
    ],
    "answer": "C",
    "explain": "华为设备在系统视图下使用ip vpn-instance <name>创建VPN实例，之后进入VPN实例视图配置RD和RT。VPN实例也称为VRF。"
  },
  {
    "id": "PF081",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "在VPN实例视图下为VPN实例配置RD的命令是？",
    "options": [
      "rd 100:1",
      "vpn-target 100:1",
      "route-distinguisher 100:1 export-extcommunity",
      "route-distinguisher 100:1"
    ],
    "answer": "D",
    "explain": "在VPN实例视图下使用route-distinguisher <value>配置RD，例如100:1。RT则通过vpn-target命令配置，可分别指定import和export方向。"
  },
  {
    "id": "PF082",
    "type": "fill",
    "chapter": "MPLS与VPN基础",
    "stem": "在VPN实例视图下，配置VPN Target的命令是vpn-______。",
    "options": [],
    "answer": ["target"],
    "explain": "vpn-target命令用于配置VPN实例的Import/Export RT，控制VPN路由的接收与发布。一条命令中可以同时配置多个RT值。"
  },
  {
    "id": "PF083",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "查看设备上所有VPN实例信息的命令是？",
    "options": [
      "display vrf all",
      "display ip vpn-instance",
      "display mpls vpn",
      "display bgp vpnv4 all"
    ],
    "answer": "B",
    "explain": "display ip vpn-instance显示VPN实例的名称、RD、RT、绑定接口等信息。display bgp vpnv4 all显示的是VPNv4的BGP路由信息。"
  },
  {
    "id": "PF084",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "查看设备MPLS LSP信息的命令是？",
    "options": [
      "display mpls label",
      "display mpls route",
      "display mpls lsp",
      "display mpls ldp neighbor"
    ],
    "answer": "C",
    "explain": "display mpls lsp显示LSP的入标签、出标签、出接口、下一跳等信息，可加verbose参数查看详细信息。display mpls ldp neighbor用于查看LDP邻居。"
  },
  {
    "id": "PF085",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "关于MPLS与IP转发的对比，下列说法错误的是？",
    "options": [
      "IP转发每跳都需要查路由表并做最长匹配",
      "MPLS转发只需查标签转发表，匹配效率更高",
      "MPLS可以基于标签实现显式路径，从而支持流量工程",
      "MPLS转发可以完全脱离IGP等路由协议独立运行"
    ],
    "answer": "D",
    "explain": "IP转发逐跳做最长匹配查表，MPLS只需精确匹配标签，效率更高并支持显式路径。但LSP的建立仍依赖IGP提供路由，MPLS无法脱离路由协议独立运行。"
  },
  {
    "id": "PF086",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于跨域MPLS VPN的Option A方案，下列说法正确的有？",
    "options": [
      "ASBR之间建立背靠背的VRF-to-VRF连接",
      "ASBR需要为每个VPN配置VPN实例",
      "实现简单但扩展性较差",
      "ASBR之间直接交换带标签的VPNv4路由"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Option A在ASBR之间为每个VPN建立背靠背的VRF接口，实现简单但扩展性差。ASBR之间直接交换带标签VPNv4路由的是Option B方案。"
  },
  {
    "id": "PF087",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "跨域MPLS VPN的Option B方案中，ASBR之间传递的是？",
    "options": [
      "普通IPv4路由",
      "带标签的VPNv4路由",
      "仅带RT属性的IPv4路由",
      "纯二层帧"
    ],
    "answer": "B",
    "explain": "Option B中ASBR之间建立MP-EBGP，直接交换VPNv4路由并携带标签。ASBR需要维护VPNv4路由，但不需要为每个VPN配置VRF。"
  },
  {
    "id": "PF088",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "跨域MPLS VPN的Option C方案中，ASBR之间通常？",
    "options": [
      "为每个VPN建立VRF并交换IPv4路由",
      "传递VPNv4路由并重写RT属性",
      "只传递带标签的公网IPv4路由，PE之间直接交换VPNv4路由",
      "不传递任何路由信息"
    ],
    "answer": "C",
    "explain": "Option C中ASBR之间交换带标签的公网路由，用于建立跨域LSP；PE之间通过多跳MP-EBGP直接交换VPNv4路由。其扩展性最好，但对设备能力要求最高。"
  },
  {
    "id": "PF089",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "在跨域MPLS VPN的Option A方案中，ASBR之间是背靠背的VRF连接，因此ASBR需要为每个VPN配置VPN实例。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Option A中ASBR之间为每个VPN建立背靠背的VRF接口，因此每个ASBR都需要配置对应的VPN实例。这种方式的扩展性相对较差。"
  },
  {
    "id": "PF090",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于Hub and Spoke组网，下列说法正确的有？",
    "options": [
      "所有Spoke的路由都指向Hub站点",
      "Spoke之间的流量必须经过Hub中转",
      "便于在Hub上集中部署访问策略",
      "Spoke之间的流量可以直接互通，无需经过Hub"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Hub and Spoke模型中Spoke路由都指向Hub，Spoke间流量必须经Hub中转，便于集中部署策略。其代价是Hub负担加重且转发时延增加。"
  },
  {
    "id": "PF091",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "下列协议中，不能用于分发MPLS标签的是？",
    "options": [
      "LDP",
      "OSPF",
      "RSVP-TE",
      "MP-BGP"
    ],
    "answer": "B",
    "explain": "MPLS标签可由LDP、RSVP-TE和MP-BGP分发：LDP建立普通LSP，RSVP-TE建立TE隧道，MP-BGP分发VPN私网标签。OSPF是IGP，只负责产生路由，不参与标签分发。"
  },
  {
    "id": "PF092",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于RSVP-TE与LDP的对比，下列说法正确的有？",
    "options": [
      "RSVP-TE支持显式路径，可指定LSP经过的节点",
      "RSVP-TE支持带宽预留等约束，可实现流量工程",
      "LDP只能沿IGP最短路径建立LSP",
      "LDP也支持带宽预留和显式路径功能"
    ],
    "answer": ["A", "B", "C"],
    "explain": "RSVP-TE可通过显式路径对象指定转发路径，并支持带宽预留、抢占等约束以实现流量工程。LDP只能沿IGP最短路径建立LSP，不具备TE能力。"
  },
  {
    "id": "PF093",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "关于MPLS VPN中的CE设备，下列说法正确的有？",
    "options": [
      "通常不感知MPLS标签",
      "只需与PE运行普通IP路由协议",
      "其路由通过PE引入到对应的VPN实例中",
      "必须运行MP-BGP并维护VPNv4路由"
    ],
    "answer": ["A", "B", "C"],
    "explain": "CE是客户侧设备，通常不感知MPLS，只需与PE运行静态、OSPF或BGP等普通路由协议。VPNv4路由由PE之间通过MP-BGP交互，CE不参与。"
  },
  {
    "id": "PF094",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "在华为设备上，VPN实例即使不配置RD也可以正常发布VPNv4路由。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "RD是构成VPNv4地址的必要部分，未配置RD的VPN实例无法生成VPNv4路由，也就无法通过MP-BGP发布。华为设备要求先配置RD后才能配置RT。"
  },
  {
    "id": "PF095",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "某接口需要绑定VPN实例vpn1，正确的命令是？",
    "options": [
      "ip vpn-instance vpn1",
      "ip binding vpn-instance vpn1",
      "bind vpn vpn1",
      "vpn-instance vpn1 enable"
    ],
    "answer": "B",
    "explain": "在接口视图下使用ip binding vpn-instance <name>把接口与VPN实例绑定。绑定后该接口下需要重新配置IP地址，且其路由归属该VPN实例。"
  },
  {
    "id": "PF096",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "下列哪项工作不是MPLS VPN中PE设备需要完成的？",
    "options": [
      "维护VPN实例并绑定接入接口",
      "与对端PE交换VPNv4路由",
      "在骨干网中为P设备维护VRF",
      "为私网路由分配并处理私网标签"
    ],
    "answer": "C",
    "explain": "PE负责维护VPN实例、与对端PE交换VPNv4路由以及处理私网标签。P设备位于骨干内部，只需支持标签转发，无需维护VRF，这体现了VPN对骨干的透明性。"
  },
  {
    "id": "PF097",
    "type": "judge",
    "chapter": "MPLS与VPN基础",
    "stem": "在MPLS中，标签值0～15可以由设备自由分配给任意FEC使用。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "标签值0～15属于协议保留值，例如0为IPv4显式空标签、3为隐式空标签，不能自由分配。可以自由分配的标签从16开始。"
  },
  {
    "id": "PF098",
    "type": "single",
    "chapter": "MPLS与VPN基础",
    "stem": "MPLS报文在入LSR进行标签压入时，栈顶标签由谁决定？",
    "options": [
      "由出口LSR直接指定",
      "由CE设备决定",
      "由入LSR根据FEC对应的NHLFE决定",
      "由P设备通过ARP获取"
    ],
    "answer": "C",
    "explain": "Ingress LSR根据报文所属FEC查询NHLFE，得到应压入的标签值、出接口和下一跳。该标签是下游LSR通过LDP或RSVP-TE提前分发的。"
  },
  {
    "id": "PF099",
    "type": "fill",
    "chapter": "MPLS与VPN基础",
    "stem": "LDP使用TCP端口号______来建立会话并交互标签映射消息。",
    "options": [],
    "answer": ["646"],
    "explain": "LDP使用UDP 646发送Hello消息发现邻居，使用TCP 646建立会话并可靠传输标签映射、地址通告等消息。"
  },
  {
    "id": "PF100",
    "type": "multi",
    "chapter": "MPLS与VPN基础",
    "stem": "下列关于MPLS VPN报文转发过程的描述，正确的有？",
    "options": [
      "入口PE查VPN实例路由表后压入私网和公网两层标签",
      "P设备根据栈顶的公网标签进行标签交换转发",
      "对端PE弹出公网标签后根据私网标签确定VPN实例",
      "P设备需要根据私网标签判断报文所属的VPN"
    ],
    "answer": ["A", "B", "C"],
    "explain": "入口PE查VPN实例路由并压入私网与公网标签；P设备只依据栈顶公网标签做交换转发；对端PE弹出公网标签后依据私网标签定位VPN实例。P设备不感知私网标签。"
  }
];