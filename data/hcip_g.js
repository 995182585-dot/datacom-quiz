window.BANK_HCIP_G = [
  {
    "id": "PG001",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在典型的三层园区网架构中，核心层最主要的设计目标是以下哪一项？",
    "options": [
      "提供高速无阻塞的数据转发与高可靠性",
      "对终端用户进行802.1X接入认证",
      "部署大量ACL实现部门间访问控制",
      "提供高密度千兆端口接入能力"
    ],
    "answer": "A",
    "explain": "核心层位于网络顶层，职责是高速转发与高可靠，要求设备具备大容量交换和冗余能力。接入认证、密集端口属于接入层职责，复杂ACL策略一般放在汇聚层或核心层仅作必要控制。"
  },
  {
    "id": "PG002",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "某园区网要求核心层设备尽可能减少策略配置，其主要原因是？",
    "options": [
      "核心层设备不支持配置ACL",
      "复杂策略会增加转发时延并降低可靠性与可维护性",
      "核心层不承载任何业务流量",
      "策略只能配置在接入层才能生效"
    ],
    "answer": "B",
    "explain": "核心层的核心价值是快速、稳定地转发，复杂的ACL、NAT、策略路由会消耗设备资源、增加时延并带来故障点。因此一般提倡核心层\"简单、高速、冗余\"，策略功能下沉到汇聚层。"
  },
  {
    "id": "PG003",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "汇聚层在园区网中的典型作用不包括以下哪一项？",
    "options": [
      "作为接入层的网关，终结二层VLAN",
      "部署ACL、QoS等策略实现部门间访问控制",
      "汇聚接入层流量并上行至核心层",
      "为终端PC提供千兆到桌面的接入端口"
    ],
    "answer": "D",
    "explain": "汇聚层负责聚合接入层流量、终结VLAN/充当网关、实施策略与路由，是接入层与核心层之间的中间层。为终端PC提供接入端口是接入层的职责。"
  },
  {
    "id": "PG004",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于接入层的设计原则，下列说法正确的有哪些？",
    "options": [
      "应提供高密度的接入端口以支撑大量终端",
      "应部署端口安全、DHCP Snooping、802.1X等接入安全功能",
      "接入层设备通常承担整个园区网的路由计算核心",
      "可通过PoE为AP、IP电话等终端供电"
    ],
    "answer": ["A", "B", "D"],
    "explain": "接入层关注端口密度、接入安全与供电能力，PoE、端口安全、DHCP Snooping、802.1X都是典型部署点。路由计算核心属于核心层/汇聚层，接入层一般只做二层接入。"
  },
  {
    "id": "PG005",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "对于小型园区（终端数量少、地理位置集中），常采用的组网方式是？",
    "options": [
      "必须严格部署三层架构，缺一不可",
      "采用二层扁平化组网，核心兼作汇聚与网关",
      "只部署接入层，不配置网关",
      "必须部署M-LAG跨设备链路聚合"
    ],
    "answer": "B",
    "explain": "三层架构是设计参考模型而非强制要求，小型园区常采用二层扁平化组网以降低成本和运维复杂度。核心设备可同时承担汇聚职责并作为VLAN网关。"
  },
  {
    "id": "PG006",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在园区网三层架构中，核心层的主要职责是部署大量ACL策略，对接入用户进行精细的访问控制和认证。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "核心层的职责是高速无阻塞转发与高可靠互联，应尽量避免复杂策略以降低时延和故障点。ACL等访问控制策略通常部署在汇聚层，接入认证属于接入层职责。"
  },
  {
    "id": "PG007",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于二层组网与三层组网的对比，下列说法正确的是？",
    "options": [
      "三层组网中接入交换机需要运行OSPF才能接入终端",
      "二层组网收敛依赖STP/RSTP，三层组网收敛依赖路由协议",
      "三层组网无法实现链路冗余",
      "二层组网的故障域比三层组网更小"
    ],
    "answer": "B",
    "explain": "二层组网的冗余收敛靠STP/RSTP/MSTP，三层组网靠路由协议快速收敛。三层组网故障域被限制在单台设备之下，通常比二层组网故障域更小，且天然支持多路径负载。"
  },
  {
    "id": "PG008",
    "type": "fill",
    "chapter": "园区网架构与堆叠技术",
    "stem": "华为iStack堆叠技术中，通过命令stack slot ______可以配置成员设备的堆叠优先级，数值越大越优先。",
    "options": [],
    "answer": ["priority"],
    "explain": "stack slot <slot-id> priority <priority> 用于配置堆叠优先级，取值范围一般为1~255，默认值为100，数值越大角色选举时越优先，越容易成为主交换机。"
  },
  {
    "id": "PG009",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "华为交换机iStack堆叠中，堆叠优先级的默认值是多少？",
    "options": ["1", "100", "128", "255"],
    "answer": "B",
    "explain": "堆叠优先级默认为100，取值越大表示优先级越高，在主备选举中越优先被选为主交换机。若优先级相同，则比较设备的MAC地址，MAC地址小者优先。"
  },
  {
    "id": "PG010",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于iStack堆叠建立时Master选举规则，下列说法正确的有哪些？",
    "options": [
      "先比较堆叠优先级，优先级大者优先",
      "优先级相同时比较设备的MAC地址，MAC地址小者优先",
      "只有启动完成、运行状态正常的成员设备才有资格参与选举",
      "堆叠优先级相同时优先选择堆叠ID较小的设备"
    ],
    "answer": ["A", "B", "C"],
    "explain": "Master选举先比优先级（大者优），再比MAC地址（小者优），且只有状态正常的成员才参与。堆叠优先级相同时比较的是MAC地址而非堆叠ID，因此选项D错误。"
  },
  {
    "id": "PG011",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "iStack中除主交换机（Master）和备用交换机（Standby）之外的其余成员设备角色是？",
    "options": ["Slave（从交换机）", "Backup", "Candidate", "Observer"],
    "answer": "A",
    "explain": "堆叠系统角色分为Master、Standby和Slave三种。Master负责管理和控制，Standby是备份，其余成员为Slave，仅参与转发并由Master统一管理。"
  },
  {
    "id": "PG012",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在iStack堆叠系统中，备用交换机（Standby）的主要作用是？",
    "options": [
      "代替Master进行配置管理",
      "在Master故障时接替其工作，实现主备倒换",
      "只负责转发，不参与任何控制",
      "负责堆叠线缆的供电"
    ],
    "answer": "B",
    "explain": "Standby是Master的备份，实时同步Master的配置与状态，当Master故障时立即接替其管理控制职责，保证堆叠系统不中断。Slave则只参与流量转发。"
  },
  {
    "id": "PG013",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "iStack堆叠线缆既可以采用链形连接，也可以采用环形连接，环形连接相比链形连接具有更高的可靠性。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "链形连接中任意一段堆叠线缆或一台设备故障都可能导致堆叠分裂；环形连接提供了冗余路径，单点故障时堆叠系统仍可保持完整，可靠性更高。"
  },
  {
    "id": "PG014",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "某堆叠系统采用链形连接，中间一台成员设备的堆叠线缆全部断开，最可能的后果是？",
    "options": [
      "堆叠系统自动变成环形继续工作",
      "堆叠系统分裂为两个堆叠系统（发生双主）",
      "该设备自动重启后恢复堆叠",
      "其余设备全部下电"
    ],
    "answer": "B",
    "explain": "链形连接中链路中断会把堆叠切断为两个独立部分，若未部署MAD检测，两部分都可能认为自己是主，形成双主（双活）冲突。因此推荐环形连接并配合MAD检测。"
  },
  {
    "id": "PG015",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "iStack堆叠相比单机运行，具有以下哪些优点？",
    "options": [
      "堆叠后每台设备的CPU处理能力直接翻倍",
      "多台设备统一管理、统一配置，简化运维",
      "可跨设备配置Eth-Trunk链路聚合，提高带宽利用率",
      "通过设备冗余提高系统可靠性"
    ],
    "answer": ["B", "C", "D"],
    "explain": "堆叠把多台设备虚拟成一台逻辑设备，实现统一管理、统一配置、跨设备链路聚合与设备级冗余。但堆叠不会让单台设备CPU算力叠加，控制平面仍由Master独立承担。"
  },
  {
    "id": "PG016",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠技术可能带来的主要风险是？",
    "options": [
      "堆叠后设备无法再配置VLAN",
      "堆叠分裂后若没有MAD检测会产生双主，导致网络异常",
      "堆叠后无法再使用Eth-Trunk",
      "堆叠会导致所有接口变为二层口"
    ],
    "answer": "B",
    "explain": "堆叠把多台设备绑成一台逻辑设备，一旦堆叠链路全部断开而业务链路仍连通，两部分会各自选举主设备形成双主，出现IP地址冲突、MAC表项混乱等问题。部署MAD检测是必要措施。"
  },
  {
    "id": "PG017",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "MAD（Multi-Active Detection）双主检测的作用是？",
    "options": [
      "检测堆叠线缆的带宽是否达标",
      "在堆叠分裂时检测并抑制双主，避免网络冲突",
      "检测堆叠成员设备的软件版本",
      "自动为主交换机分配堆叠ID"
    ],
    "answer": "B",
    "explain": "MAD多主检测用于在堆叠分裂后识别出两个各自为政的堆叠系统，并按照规则关闭其中一侧的业务接口或使其进入Recovery状态，从而避免双主造成的网络故障。"
  },
  {
    "id": "PG018",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于MAD双主检测的两种方式，下列说法正确的有哪些？",
    "options": [
      "直连检测通过在成员设备之间直接连接专用检测链路实现",
      "代理检测通过中间设备（代理设备）转发检测报文实现",
      "代理检测要求参与检测的接口加入同一个Eth-Trunk",
      "直连检测方式下检测报文由代理设备代为转发"
    ],
    "answer": ["A", "B", "C"],
    "explain": "MAD分为直连检测与代理检测：直连检测用专用链路直连成员设备；代理检测借助中间代理设备转发，且要求被检测接口加入同一Eth-Trunk。直连检测不经过代理设备。"
  },
  {
    "id": "PG019",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "iStack堆叠的堆叠优先级默认值为100，且数值越小的成员设备在Master选举中越优先。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "堆叠优先级默认值确实是100，但选举规则是数值越大越优先，取值范围一般为1~255。这与MSTP桥优先级\"数值小者优先\"的规则相反，是考试中常见的易混淆点。"
  },
  {
    "id": "PG020",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统建立后，成员设备上的物理接口在配置时的完整表示形式是？",
    "options": [
      "interface GigabitEthernet0/0/1",
      "interface GigabitEthernet1/0/1（其中1为堆叠ID）",
      "interface Stack-Port1/1",
      "interface Vlanif1"
    ],
    "answer": "B",
    "explain": "堆叠后接口编号规则为\"堆叠ID/子卡号/端口号\"，例如堆叠ID为1的设备上第1个千兆口表示为GigabitEthernet1/0/1。堆叠ID决定了接口编号的第一位。"
  },
  {
    "id": "PG021",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "配置堆叠端口时，华为交换机上用于承载堆叠链路的逻辑端口是？",
    "options": ["Eth-Trunk", "Stack-Port", "Vlanif", "Loopback"],
    "answer": "B",
    "explain": "Stack-Port是逻辑堆叠端口，需要与物理成员端口绑定后组成堆叠链路。每个Stack-Port可以绑定多个物理端口以实现冗余。"
  },
  {
    "id": "PG022",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统中，堆叠ID可以重复配置，只要各成员设备的堆叠优先级不同就不会影响堆叠建立。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "堆叠ID是成员设备在堆叠系统中的槽位标识，必须在整个堆叠系统内唯一。ID冲突会导致堆叠建立失败或成员无法正常加入，与优先级是否相同无关。"
  },
  {
    "id": "PG023",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于堆叠升级流程，下列说法正确的有哪些？",
    "options": [
      "堆叠升级必须拆开堆叠逐台独立升级",
      "可以先升级Standby设备，再升级Slave设备，最后升级Master",
      "升级Master时会触发主备倒换，业务可能出现短暂中断",
      "堆叠系统升级一般需要保证升级后各成员版本一致"
    ],
    "answer": ["B", "C", "D"],
    "explain": "平滑升级思路是先升级非主设备，最后升级Master，Master升级时发生主备倒换导致短暂业务中断，升级后必须保证版本一致。拆堆叠逐台升级会长时间中断业务，不是推荐做法。"
  },
  {
    "id": "PG024",
    "type": "fill",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在华为交换机上查看堆叠系统的成员信息、主备角色和堆叠优先级，可以使用display ______命令。",
    "options": [],
    "answer": ["stack"],
    "explain": "display stack 用于查看堆叠系统的成员设备信息、堆叠ID、优先级与角色；display stack configuration可查看堆叠相关配置。这是排查堆叠问题的常用命令。"
  },
  {
    "id": "PG025",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "CSS集群与iStack堆叠的主要区别在于？",
    "options": [
      "CSS只能用于接入层设备",
      "CSS是框式设备之间的集群，通常通过集群卡/集群线缆连接，iStack多用于盒式设备堆叠",
      "iStack不支持跨设备链路聚合",
      "CSS不需要进行主备选举"
    ],
    "answer": "B",
    "explain": "CSS（Cluster Switch System）通常指框式交换机通过集群卡或业务口集群组成一台逻辑设备，iStack多用于盒式交换机堆叠。两者都需要主备选举，都支持跨设备链路聚合。"
  },
  {
    "id": "PG026",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "园区网中，接入交换机双上行到两台汇聚交换机，若两台汇聚交换机堆叠为一台逻辑设备，则接入交换机的两条上行链路可以？",
    "options": [
      "必须由STP阻塞其中一条",
      "通过跨设备Eth-Trunk聚合，两条链路同时转发并互为备份",
      "只能作为主备链路，不能同时使用",
      "必须配置为不同VLAN才能同时转发"
    ],
    "answer": "B",
    "explain": "汇聚设备堆叠后成为一台逻辑设备，接入交换机的两条上行可加入同一Eth-Trunk实现跨设备聚合，带宽叠加且无需STP阻塞，收敛速度也远快于STP。"
  },
  {
    "id": "PG027",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "部署跨设备Eth-Trunk时，接入交换机两条上行链路分别连到堆叠系统的两台成员设备，此时Eth-Trunk的工作模式应配置为？",
    "options": ["手工负载分担模式或LACP模式均可", "只能配置为手工模式", "只能配置为静态路由模式", "必须配置为MSTP模式"],
    "answer": "A",
    "explain": "跨设备Eth-Trunk既可以用手工负载分担模式，也可以用LACP模式，LACP模式还可通过活动链路数提供更精细的可靠性保障。路由模式与MSTP模式与链路聚合无关。"
  },
  {
    "id": "PG028",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "M-LAG是一种跨设备链路聚合技术，两台设备共享同一个控制平面并共用一份配置文件，其工作方式与iStack堆叠完全相同。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "M-LAG与堆叠有本质区别：M-LAG两台设备控制平面相互独立、各有一份配置，可逐台独立升级；而iStack由Master统一控制、共享一份配置。两者都对外表现为一台逻辑设备且都需要双主检测。"
  },
  {
    "id": "PG029",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于M-LAG与iStack堆叠的对比，下列说法正确的有哪些？",
    "options": [
      "M-LAG的两台设备控制平面相互独立，升级可逐台进行",
      "iStack堆叠的控制平面由Master统一管理",
      "M-LAG同样需要部署双主检测机制",
      "M-LAG设备之间必须共享同一个配置文件"
    ],
    "answer": ["A", "B", "C"],
    "explain": "M-LAG双机控制面独立、可独立升级，减少升级中断时间；堆叠由Master统一控制。两者都需要双主/分裂检测。M-LAG两台设备各有一份配置，不共享同一配置文件。"
  },
  {
    "id": "PG030",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "园区网高可用组网中，常将VRRP、MSTP与Eth-Trunk配合使用，其中VRRP的主要作用是？",
    "options": [
      "实现链路层防环",
      "为终端提供冗余网关，实现网关的高可用",
      "实现跨设备链路带宽叠加",
      "实现接入用户的认证"
    ],
    "answer": "B",
    "explain": "VRRP通过虚拟IP和虚拟MAC为终端提供冗余网关，主设备故障时备用设备接管。防环由MSTP完成，带宽叠加由Eth-Trunk完成，认证由接入安全特性完成。"
  },
  {
    "id": "PG031",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在VRRP+MSTP配合的园区组网中，为实现流量负载分担，通常的做法是？",
    "options": [
      "让所有VLAN的根桥都在同一台设备上",
      "配置不同MSTP实例的根桥分别落在两台设备上，并让VRRP Master与MSTP根桥保持一致",
      "关闭其中一台设备的VRRP",
      "将所有VLAN映射到同一实例"
    ],
    "answer": "B",
    "explain": "通过MSTP多实例把不同VLAN的根桥分布到不同设备，使二层转发路径分离；同时让各实例的VRRP Master与根桥同设备，避免流量绕行，实现负载分担与路径最优。"
  },
  {
    "id": "PG032",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "MAD双主检测中的直连检测方式，是成员设备之间通过专用链路直接互联来交互检测报文，不需要代理设备参与。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "直连检测通过专用链路把成员设备直接互联来传递检测报文，无需代理设备；需要借助中间设备转发检测报文的是代理检测方式，且代理检测要求检测接口加入同一Eth-Trunk。"
  },
  {
    "id": "PG033",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "园区网汇聚层设备作为VLAN网关时，其上行到核心层通常采用什么方式实现冗余？",
    "options": [
      "单条链路直连即可",
      "双上行组成Eth-Trunk或运行三层路由协议实现冗余",
      "通过STP阻塞一条上行链路并保持备用",
      "必须使用M-LAG才能冗余"
    ],
    "answer": "B",
    "explain": "汇聚上行到核心的冗余方式包括跨设备Eth-Trunk（核心堆叠时）或运行三层路由协议形成等价多路径。STP阻塞会造成带宽浪费，单链路无冗余。"
  },
  {
    "id": "PG034",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于接入层安全设计，下列说法正确的有哪些？",
    "options": [
      "端口安全可以限制接口学习的MAC地址数量，防止MAC泛洪攻击",
      "DHCP Snooping可以防止非法DHCP Server欺骗",
      "IP Source Guard可以防止IP地址欺骗",
      "接入层必须部署OSPF才能实现上述安全功能"
    ],
    "answer": ["A", "B", "C"],
    "explain": "端口安全、DHCP Snooping、IP Source Guard、动态ARP检测等都是接入层常用安全手段。这些特性与路由协议无关，接入层通常不运行OSPF。"
  },
  {
    "id": "PG035",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "园区网中部署堆叠后，接入交换机的管理方式发生的变化是？",
    "options": [
      "每台成员设备需要单独登录管理",
      "整个堆叠系统只有一个管理IP，可统一登录管理所有成员",
      "堆叠后无法远程管理",
      "只能通过Console管理"
    ],
    "answer": "B",
    "explain": "堆叠系统对外表现为一台逻辑设备，共享一个管理IP地址，登录后可通过指定堆叠ID进入成员设备视图，极大简化了运维管理。"
  },
  {
    "id": "PG036",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统中，若两台成员设备配置了相同的堆叠ID，最可能出现的现象是？",
    "options": [
      "堆叠系统自动为其分配新ID且一切正常",
      "堆叠ID冲突导致堆叠建立失败或设备无法正常加入堆叠",
      "两台设备自动合并为Master",
      "设备自动重启后优先级提升"
    ],
    "answer": "B",
    "explain": "堆叠ID在堆叠系统内必须唯一。ID冲突会造成堆叠建立失败、成员无法加入或运行异常。规划时应为每台成员设备分配互不相同的堆叠ID。"
  },
  {
    "id": "PG037",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统中，Slave（从交换机）需要独立运行控制平面并自行计算转发表，与Master互不干涉。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "堆叠系统由Master统一管理控制平面，Standby作为备份，Slave只参与流量转发，不独立运行控制平面。这正是堆叠能实现统一管理、统一配置的原因。"
  },
  {
    "id": "PG038",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统分裂后，若两部分设备的业务链路仍然连通，且未部署MAD检测，则两部分会各自保持原有配置和管理IP，形成双主。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "堆叠分裂后两侧各自选举主设备，都会保留原配置和管理IP，形成双主（双活）状态，造成IP/MAC冲突与转发异常。部署MAD检测可将其中一侧置为Recovery状态加以抑制。"
  },
  {
    "id": "PG039",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于堆叠带宽与堆叠线缆的要求，下列说法正确的有哪些？",
    "options": [
      "堆叠链路带宽越大，堆叠系统内部转发性能越好",
      "堆叠线缆可以随意使用普通网线且无长度限制",
      "建议使用专用堆叠线缆或高速业务口进行堆叠连接",
      "堆叠线缆长度过大时信号质量下降，可能影响堆叠稳定性"
    ],
    "answer": ["A", "C", "D"],
    "explain": "堆叠链路承担跨设备转发流量，带宽越大越不易成为瓶颈；应使用厂商认证的专用堆叠线缆或高速端口，且线缆长度受规格限制，过长会导致链路不稳定。普通网线且无长度限制的说法是错误的。"
  },
  {
    "id": "PG040",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统主备倒换时，业务流量的表现通常是？",
    "options": [
      "完全无感知，无任何丢包",
      "会有短暂中断（通常百毫秒到秒级），随后由新Master接管",
      "永久中断，需要人工恢复",
      "所有成员设备重启"
    ],
    "answer": "B",
    "explain": "主备倒换过程中，新Master需要重新接管控制平面并刷新转发信息，因此会出现短暂丢包。可通过缩短倒换时间和部署跨设备聚合降低影响，但无法做到绝对零丢包。"
  },
  {
    "id": "PG041",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "某园区采用两台核心交换机堆叠，接入交换机双上行接入，此时接入交换机上还需要运行MSTP的主要原因是？",
    "options": [
      "为了防止因误接线形成的二层环路",
      "为了实现三层路由",
      "为了进行用户认证",
      "为了分配IP地址"
    ],
    "answer": "A",
    "explain": "跨设备Eth-Trunk已解决双上行链路问题，但接入层内部或误接线仍可能形成二层环路。运行MSTP作为兜底的防环机制是必要的，可防止广播风暴。"
  },
  {
    "id": "PG042",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统中，主交换机（Master）选举时若各成员设备的堆叠优先级相同，则比较设备的MAC地址，MAC地址较小者优先成为Master。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "堆叠选举规则为先比较优先级，数值大者优先；优先级相同时比较设备MAC地址，MAC地址小者优先成为Master。因此默认情况下可通过MAC地址预判哪台设备会成为主。"
  },
  {
    "id": "PG043",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于园区网核心层设备选型，通常最关注以下哪组指标？",
    "options": [
      "端口密度与PoE功率",
      "交换容量、包转发率、可靠性（电源/主控冗余）与虚拟化能力",
      "是否支持802.1X",
      "是否支持端口安全"
    ],
    "answer": "B",
    "explain": "核心层要求高速无阻塞转发与高可靠，选型关注交换容量、包转发率、硬件冗余（双主控双电源）、虚拟化（CSS/iStack）等。端口密度、PoE、802.1X属于接入层关注点。"
  },
  {
    "id": "PG044",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在园区网中进行VLAN规划时，下列做法合理的有哪些？",
    "options": [
      "按部门或功能划分VLAN，控制广播域大小",
      "管理VLAN与业务VLAN分离，提高安全性",
      "将所有终端放在同一个VLAN中以简化配置",
      "为后续扩展预留一定的VLAN ID段"
    ],
    "answer": ["A", "B", "D"],
    "explain": "合理的VLAN规划应控制广播域、隔离管理与业务流量并预留扩展空间。把全部终端放在同一VLAN会导致广播域过大、安全隔离缺失，不是推荐做法。"
  },
  {
    "id": "PG045",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统在规划时，如果将Master角色规划在指定的核心设备上，通常的做法是？",
    "options": [
      "把该设备的堆叠优先级配置为比其它设备更大（大于100）",
      "把该设备的堆叠优先级配置为比其它设备更小",
      "关闭其它设备的堆叠功能",
      "把该设备的堆叠ID配置为0"
    ],
    "answer": "A",
    "explain": "优先级数值越大越优先成为Master，因此需要指定某台设备为主时，将其优先级配置得高于其他成员（默认100）。也可通过降低其他设备优先级实现。"
  },
  {
    "id": "PG046",
    "type": "judge",
    "chapter": "园区网架构与堆叠技术",
    "stem": "部署堆叠后，接入层仍需保留MSTP等防环机制作为兜底，因为堆叠并不能防止接入层内部或误接线造成的二层环路。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "堆叠解决的是设备级冗余与跨设备链路聚合问题，无法防止接入层内部或误接线形成的二层环路。因此MSTP等防环机制应与堆叠配合使用，二者是互补关系而非替代关系。"
  },
  {
    "id": "PG047",
    "type": "fill",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统中，若堆叠链路全部断开使系统分裂为两部分，且未部署任何检测机制，则两部分会各自认为自己是主设备，这种故障状态称为______。",
    "options": [],
    "answer": ["双主","双主冲突","split-brain","脑裂"],
    "explain": "堆叠分裂后两个子系统都会选举出自己的主设备并各自转发，导致 IP 地址冲突、MAC 表项混乱等严重问题，这一状态称为双主（也叫脑裂）。部署 MAD 双主检测（直连检测或代理检测）可在分裂时关闭其中一个子系统。"
  },
  {
    "id": "PG048",
    "type": "fill",
    "chapter": "园区网架构与堆叠技术",
    "stem": "堆叠系统中，堆叠优先级的默认值是______，数值越大越容易被选举为主交换机。",
    "options": [],
    "answer": ["100"],
    "explain": "堆叠优先级默认为100，取值范围一般为1~255。优先级越大越优先成为Master；优先级相同时比较MAC地址，MAC地址小者优先。"
  },
  {
    "id": "PG049",
    "type": "multi",
    "chapter": "园区网架构与堆叠技术",
    "stem": "关于园区网三层架构各区段的职责，下列说法正确的有哪些？",
    "options": [
      "接入层负责整个园区网的路由域边界划分",
      "接入层负责终端接入与接入安全控制",
      "汇聚层负责策略实施、VLAN终结与流量汇聚",
      "核心层负责高速转发与全网可靠互联"
    ],
    "answer": ["B", "C", "D"],
    "explain": "接入层管接入与安全，汇聚层管策略与网关，核心层管高速转发与可靠互联。路由域边界一般划在汇聚层或核心层，而非接入层，因此选项A错误。"
  },
  {
    "id": "PG050",
    "type": "single",
    "chapter": "园区网架构与堆叠技术",
    "stem": "在某园区网中，接入交换机上行双链路分别连接两台独立运行（未堆叠、未M-LAG）的汇聚交换机，若要实现链路冗余且避免二层环路，最合适的做法是？",
    "options": [
      "配置跨设备Eth-Trunk且无需其他机制",
      "运行MSTP实现防环与冗余，或部署堆叠/M-LAG后再做跨设备聚合",
      "关闭其中一条上行链路",
      "将两条上行链路配置为同一VLAN的Trunk并同时转发"
    ],
    "answer": "B",
    "explain": "两台汇聚设备独立运行时无法做跨设备Eth-Trunk，需依赖MSTP阻塞冗余链路实现防环；若希望链路同时转发，则先将汇聚设备堆叠或部署M-LAG，再做跨设备聚合。两条Trunk同时转发会形成环路。"
  },
  {
    "id": "PG051",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP相对STP在端口角色上的改进是新增了哪两种角色？",
    "options": [
      "Root和Designated",
      "Master和Slave",
      "Alternate和Backup",
      "Edge和Normal"
    ],
    "answer": "C",
    "explain": "STP只有根端口、指定端口和阻塞端口；RSTP细化为根端口、指定端口、Alternate端口、Backup端口和边缘端口（禁用端口）。Alternate和Backup用于实现快速切换。"
  },
  {
    "id": "PG052",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于RSTP中端口状态与端口角色的关系，下列说法正确的是？",
    "options": [
      "根端口始终处于Discarding状态",
      "Alternate端口可以长期保持Forwarding状态",
      "指定端口在同步过程中处于Discarding状态，同步完成后进入Forwarding",
      "Learning状态可以持续转发用户数据帧"
    ],
    "answer": "C",
    "explain": "RSTP中指定端口在P/A同步过程中先处于Discarding，收到下游的Agreement后进入Forwarding。根端口和Alternate端口都不能处于Forwarding（Alternate为Discarding），Learning状态只学习MAC不转发数据。"
  },
  {
    "id": "PG053",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP中，端口状态由STP的5种简化为几种？",
    "options": ["4种", "2种", "3种", "5种"],
    "answer": "C",
    "explain": "RSTP将STP的Disabled、Blocking、Listening、Learning、Forwarding五种状态简化为Discarding、Learning、Forwarding三种，其中Discarding合并了禁用、阻塞和监听三种状态。"
  },
  {
    "id": "PG054",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于RSTP的Alternate端口与Backup端口，下列说法正确的有哪些？",
    "options": [
      "Alternate端口是根端口的备份端口，提供到根桥的替代路径",
      "Backup端口是指定端口的备份端口，用于在同一网段提供冗余",
      "Backup端口在RSTP中会被选举为根端口",
      "Alternate端口在RSTP中始终处于Forwarding状态"
    ],
    "answer": ["A", "B"],
    "explain": "Alternate端口作为根端口的备份，提供到根桥的替代路径；Backup端口作为指定端口的备份，用于同一设备同一网段的冗余。Backup端口不会被选为根端口，Alternate端口正常情况下处于Discarding状态，故C、D错误。"
  },
  {
    "id": "PG055",
    "type": "fill",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP中实现快速收敛的核心机制是提议/同意（Proposal/Agreement）握手机制，该机制要求链路必须是______链路才能正常生效。",
    "options": [],
    "answer": ["点对点", "P2P", "point-to-point"],
    "explain": "P/A机制依赖点对点链路上的可靠快速交互。若链路被识别为共享链路，RSTP会退回类似STP的收敛方式，速度明显变慢。因此交换机互联端口应正确配置为全双工点对点模式。"
  },
  {
    "id": "PG056",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于RSTP的边缘端口（Edge Port）与BPDU保护的配合，下列说法正确的是？",
    "options": [
      "边缘端口收到BPDU后会保持边缘属性并继续转发",
      "在边缘端口上部署BPDU保护后，一旦收到BPDU设备会将该端口关闭（Error-Down），防止非法交换机接入引发环路",
      "BPDU保护只能部署在根桥的根端口上",
      "边缘端口必须参与生成树计算后才能转发数据"
    ],
    "answer": "B",
    "explain": "边缘端口链路UP即转发、不参与生成树计算。若其下误接了交换机，收到BPDU后边缘属性会丢失并引发拓扑震荡，因此常配合BPDU保护：一旦收到BPDU就关闭端口，需错误恢复或手工恢复。"
  },
  {
    "id": "PG057",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于RSTP快速收敛机制中P/A握手的处理过程，下列描述正确的是？",
    "options": [
      "上游设备发送Proposal后立即将端口置为Forwarding",
      "下游设备收到Proposal后无需任何操作即完成收敛",
      "上游设备发送Proposal并将端口置为Discarding，下游设备同步其余端口后回送Agreement，上游端口随即进入Forwarding",
      "P/A机制只用于根桥选举"
    ],
    "answer": "C",
    "explain": "RSTP中上游设备发送Proposal并把指定端口置为Discarding，下游设备收到后同步自身其余端口（将其置为Discarding）并回送Agreement，上游指定端口收到后立即进入Forwarding，从而省去两倍转发时延。"
  },
  {
    "id": "PG058",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP中拓扑变化的处理方式与STP的主要区别是？",
    "options": [
      "RSTP仍然使用TCN BPDU逐级上报根桥",
      "RSTP不做任何拓扑变化通知",
      "RSTP只在根桥发生变化时才通知",
      "RSTP不再使用TCN，检测到拓扑变化后直接泛洪TC置位的BPDU"
    ],
    "answer": "D",
    "explain": "RSTP取消了TCN BPDU和TCA的逐级确认机制，检测到拓扑变化后直接向全网泛洪TC（Topology Change）置位的BPDU，同时启动TC While定时器，加快了拓扑变化传播与MAC表刷新。"
  },
  {
    "id": "PG059",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "当RSTP交换机与运行STP的交换机互联时，该端口会按照STP的方式工作，实现向下兼容。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "RSTP具有向下兼容能力。当端口收到STP格式的BPDU时，该端口会降级为STP模式运行，收敛速度按STP处理。因此混用STP设备会拖慢整网收敛。"
  },
  {
    "id": "PG060",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP技术产生的主要原因是？",
    "options": [
      "RSTP无法防止二层环路",
      "RSTP只能实现单一生成树，无法实现基于VLAN的流量负载分担",
      "RSTP不支持边缘端口",
      "RSTP收敛速度比STP慢"
    ],
    "answer": "B",
    "explain": "RSTP虽然收敛快，但全VLAN共用一棵生成树，冗余链路只能被阻塞而无法分担流量，造成带宽浪费。MSTP通过多实例让不同VLAN走不同的转发路径，实现负载分担。"
  },
  {
    "id": "PG061",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中，一个MSTI（多生成树实例）对应的概念是？",
    "options": [
      "一个VLAN",
      "一台交换机",
      "一组VLAN映射到的一个独立生成树实例",
      "一条链路"
    ],
    "answer": "C",
    "explain": "MSTI是多生成树实例，一个实例可以关联多个VLAN，实例内部独立计算生成树。通过把不同VLAN映射到不同实例，可以实现不同实例路径分离的负载分担。"
  },
  {
    "id": "PG062",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MST Region的三要素包括以下哪些？",
    "options": [
      "区域名称（Region Name，即域名）",
      "修订级别（Revision Level）",
      "VLAN与实例的映射关系",
      "设备的MAC地址"
    ],
    "answer": ["A", "B", "C"],
    "explain": "MST Region由域名、修订级别、VLAN与实例的映射关系三者共同确定。三要素完全一致的两台设备才属于同一区域，否则视为不同区域。设备MAC地址不是区域三要素。"
  },
  {
    "id": "PG063",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "两台交换机若配置了相同的MSTP域名和修订级别，但VLAN与实例的映射关系不同，它们仍属于同一个MST Region。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "MST Region的三要素必须完全一致，域名、修订级别、VLAN与实例映射缺一不可。映射关系不同会被判定为不同区域，导致生成树计算异常和流量转发问题。"
  },
  {
    "id": "PG064",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中，总根（CIST Root）指的是？",
    "options": [
      "每个实例各自的根桥",
      "整个CIST（公共生成树）的根桥，是全网唯一的根",
      "区域内优先级最高的设备",
      "主桥的备份设备"
    ],
    "answer": "B",
    "explain": "总根是CIST（公共和内部生成树）的根桥，全网唯一。各MST Region内部选举出域根，并通过主桥与总根相连，形成层次化的生成树结构。"
  },
  {
    "id": "PG065",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中，关于域根（Regional Root）的含义，下列描述正确的是？",
    "options": [
      "整个网络唯一的根桥，等同于总根",
      "主桥的别名",
      "接入层交换机的统称",
      "每个MST Region内部计算出的根桥，每个实例可各有自己的域根"
    ],
    "answer": "D",
    "explain": "域根是各MST Region内部针对每个MSTI计算出的根桥，不同实例的域根可以落在不同设备上以实现负载分担。全网唯一的根桥称为总根（CIST Root）。"
  },
  {
    "id": "PG066",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "在华为交换机上配置MSTP的域名和实例映射后，配置会自动立即生效，不需要执行额外命令。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "MSTP区域配置在stp region-configuration视图下修改后不会自动生效，必须执行active region-configuration进行手工激活。修改后未激活是常见的排错点。"
  },
  {
    "id": "PG067",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中，每个MST Region内部针对每个实例都会计算出一个域根，不同实例的域根可以落在不同的设备上。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "域根是区域内各实例独立计算出的根桥，正因为不同实例的域根可以位于不同设备，MSTP才能实现基于实例的流量负载分担，让不同VLAN走不同的二层路径。"
  },
  {
    "id": "PG068",
    "type": "fill",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中，桥优先级的取值范围为0~61440，其配置步长是______。",
    "options": [],
    "answer": ["4096"],
    "explain": "MSTP桥优先级以4096为步长，共16个取值，数值越小优先级越高。因此执行stp priority时必须使用4096的整数倍。stp root primary对应0，stp root secondary对应4096。"
  },
  {
    "id": "PG069",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "执行stp root primary命令后，设备在该实例中的桥优先级会被设置为？",
    "options": ["0", "4096", "16384", "32768"],
    "answer": "A",
    "explain": "stp root primary将设备在该实例中的优先级设为0，使其成为根桥；stp root secondary则设为4096，默认优先级为32768。二者是配置根桥的快捷方式，比手工指定优先级更直观。"
  },
  {
    "id": "PG070",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "执行stp root secondary命令后，设备在该实例中的桥优先级被设置为？",
    "options": ["0", "4096", "8192", "32768"],
    "answer": "B",
    "explain": "stp root secondary把优先级设置为4096，使设备在根桥故障时最有可能成为新的根桥，实现根桥备份。默认桥优先级为32768。"
  },
  {
    "id": "PG071",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中要实现基于实例的流量负载分担，合理的做法有哪些？",
    "options": [
      "把不同VLAN映射到不同MSTI",
      "为不同的MSTI指定不同的根桥设备",
      "让所有实例共用同一个根桥",
      "两台汇聚设备互为对方实例的根桥与备份根桥"
    ],
    "answer": ["A", "B", "D"],
    "explain": "负载分担的关键是把VLAN分配到不同实例并为各实例指定不同的根桥。两台汇聚设备通常互为根桥/备份根桥，使不同实例的二层路径分别经过不同设备。所有实例共用同一根桥无法实现分担。"
  },
  {
    "id": "PG072",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "BPDU保护（stp bpdu-protection）通常部署在什么位置，其作用是？",
    "options": [
      "部署在边缘端口上，收到BPDU时将端口关闭（Error-Down），防止非法设备接入影响生成树",
      "部署在根桥的上行端口，防止根桥被抢占",
      "部署在所有Trunk链路上，防止TC报文攻击",
      "部署在环网端口上，防止单向链路故障"
    ],
    "answer": "A",
    "explain": "BPDU保护针对边缘端口：一旦边缘端口收到BPDU，说明该端口下接了交换设备，设备会将该端口关闭以防环路和拓扑震荡，需要错误恢复或手工恢复。防止根桥被抢占的是根保护。"
  },
  {
    "id": "PG073",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "根保护（stp root-protection）的作用是？",
    "options": [
      "防止边缘端口收到BPDU",
      "防止TC报文泛洪",
      "在指定端口上收到优先级更高的BPDU时，将端口置为Discarding状态，防止下游设备抢占根桥",
      "防止单向链路导致的环路"
    ],
    "answer": "C",
    "explain": "根保护部署在根桥的下行指定端口上。当该端口收到更优的BPDU时，端口进入Discarding并保持，从而保证根桥地位不被下游设备抢占。注意它不能部署在根端口上。"
  },
  {
    "id": "PG074",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "环路保护（stp loop-protection）主要解决什么问题？",
    "options": [
      "防止下游设备抢占根桥",
      "防止TC-BPDU泛洪攻击",
      "防止边缘端口接入交换机",
      "防止因单向链路故障导致根端口或Alternate端口长时间收不到BPDU而误转入转发状态形成环路"
    ],
    "answer": "D",
    "explain": "在光纤单向故障等场景下，根端口或Alternate端口可能长期收不到BPDU，超时后误进入转发状态形成环路。环路保护使这些端口在收不到BPDU时进入Discarding状态，从而避免环路。"
  },
  {
    "id": "PG075",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "TC-BPDU泛洪攻击防护（stp tc-protection）的作用是？",
    "options": [
      "限制设备在单位时间内处理TC-BPDU的次数，防止MAC表被频繁刷新导致资源耗尽",
      "防止根桥被抢占",
      "防止边缘端口接入交换机",
      "防止单向链路故障"
    ],
    "answer": "A",
    "explain": "攻击者发送大量TC置位的BPDU会导致设备频繁刷新MAC和ARP表项，消耗CPU资源。stp tc-protection限制单位时间内（默认2秒）处理TC-BPDU的次数（默认1次），超出部分只刷新一次。"
  },
  {
    "id": "PG076",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "根保护功能应该配置在根桥设备的根端口上，以防止根桥被抢占。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "根保护应配置在根桥的下行指定端口上，用于阻止下游设备发送更优BPDU抢占根桥。若配置在根端口上将无法起到保护作用，因为根端口本身接收的就是来自上游的BPDU。"
  },
  {
    "id": "PG077",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中，CIST（Common and Internal Spanning Tree）指的是？",
    "options": [
      "仅存在于单个域内部的生成树",
      "每个实例独立的生成树",
      "仅在接入层计算的生成树",
      "连接所有MST Region的公共和内部生成树，保证全网连通无环"
    ],
    "answer": "D",
    "explain": "CIST是公共和内部生成树，它把各个MST Region连接起来，保证整个交换网络的连通和无环。每个Region通过主桥把自身的CST接到CIST上。"
  },
  {
    "id": "PG078",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中CST（Common Spanning Tree）与IST（Internal Spanning Tree）的关系是？",
    "options": [
      "CST和IST是同一个概念",
      "CST负责区域间的连通，IST负责区域内部的连通，二者共同构成CIST",
      "IST用于区域间，CST用于区域内部",
      "CST只存在于根桥设备上"
    ],
    "answer": "B",
    "explain": "MSTP把整个网络划分为区域，区域间的公共生成树称为CST，区域内的生成树称为IST，IST与CST共同组成CIST。主桥是IST与CST的连接点，负责将区域内部拓扑接到外部。"
  },
  {
    "id": "PG079",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中外部路径开销（External Path Cost）指的是？",
    "options": [
      "区域内部到域根的开销",
      "端口自身的物理带宽开销",
      "主桥到域根的开销",
      "从本设备经主桥到总根（CIST Root）之间的路径开销"
    ],
    "answer": "D",
    "explain": "外部路径开销是从本设备到总根之间经过区域外的路径开销，用于区域间CST计算；内部路径开销是区域内到域根的路径开销，用于IST计算。两者共同决定总路径开销。"
  },
  {
    "id": "PG080",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于MSTP的主桥（Master Bridge）与域根（Regional Root），下列说法正确的有哪些？",
    "options": [
      "主桥是区域中距离总根最近的设备，是区域与外部通信的出口",
      "对实例0（CIST）而言，主桥同时也是该区域的域根",
      "主桥负责将区域内部的IST与区域间的CST连接起来",
      "每个区域内可以有多台主桥设备同时工作"
    ],
    "answer": ["A", "B", "C"],
    "explain": "主桥是区域内到总根开销最小的设备，承担区域对外出口的角色，并把IST与CST连接起来。对于CIST（实例0），主桥即域根。每个区域对每个实例只有一台主桥。"
  },
  {
    "id": "PG081",
    "type": "fill",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中要查看当前生效的区域名称、修订级别以及VLAN与实例的映射关系，应使用display ______命令。",
    "options": [],
    "answer": ["region-configuration", "stp region-configuration"],
    "explain": "display stp region-configuration用于显示MST域配置的三要素，包括Format Selector、Region Name、Revision Level和Instance Vlans Mapped，是排查区域不一致问题的重要命令。"
  },
  {
    "id": "PG082",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "display stp region-configuration命令可以查看MSTP的域名、修订级别以及VLAN与实例的映射关系。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "该命令显示MST域配置的三要素：Format Selector、Region Name、Revision Level以及Instance Vlans Mapped，是排查MSTP区域不一致问题的重要命令。"
  },
  {
    "id": "PG083",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "某网络中两台汇聚交换机配置了不同MSTP域名，导致的现象最可能是？",
    "options": [
      "生成树计算完全正常，无任何影响",
      "两台设备分属不同MST Region，生成树收敛和负载分担规划失效，可能出现流量绕行",
      "设备自动修改域名使其一致",
      "VRRP自动切换到备用设备"
    ],
    "answer": "B",
    "explain": "域名不一致则分属不同Region，各自的实例映射无法对应，负载分担规划失效；同时主桥选举可能使流量绕行，甚至出现次优路径。配置时应确保三要素完全一致。"
  },
  {
    "id": "PG084",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于RSTP相比STP的改进，下列说法正确的有哪些？",
    "options": [
      "端口角色在根端口、指定端口之外新增了Alternate和Backup端口",
      "端口状态由5种简化为Discarding、Learning、Forwarding三种",
      "通过P/A（Proposal/Agreement）机制实现快速收敛",
      "边缘端口链路UP后立即转发，无需等待转发时延"
    ],
    "answer": ["A", "B", "C", "D"],
    "explain": "RSTP相比STP有四项典型改进：新增Alternate和Backup端口角色、端口状态简化为三种、引入P/A提议同意机制实现快速收敛、支持边缘端口使终端接入立即可用。四项描述均正确。"
  },
  {
    "id": "PG085",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP中，某端口被选举为Alternate端口的典型场景是？",
    "options": [
      "该端口收到了来自下游设备更优的BPDU",
      "该端口连接的是终端PC",
      "该端口收到了来自其他网桥的、优先级低于本设备所发BPDU的BPDU，成为到根桥的另一条备用路径",
      "该端口被配置为边缘端口"
    ],
    "answer": "C",
    "explain": "当设备通过某个端口收到由其他网桥发送的BPDU，说明该网段还有其他网桥，此端口不会成为指定端口；若它是到达根桥的另一个可选路径，则被选举为Alternate端口，作为根端口的备份。"
  },
  {
    "id": "PG086",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP的Backup端口提供的是到根桥的替代路径，用于替代根端口。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "提供到根桥替代路径的是Alternate端口，它是根端口的备份。Backup端口是指定端口的备份，出现在同一台设备通过多个端口连接到同一网段的情况下，二者容易混淆。"
  },
  {
    "id": "PG087",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "在网络中部署MSTP与VRRP配合时，为实现二层路径与三层网关一致，通常应保证？",
    "options": [
      "VRRP Master与对应实例的MSTP根桥在同一台设备上",
      "VRRP Master与MSTP根桥在两台不同设备上",
      "关闭MSTP只保留VRRP",
      "所有VLAN使用同一个实例"
    ],
    "answer": "A",
    "explain": "VRRP Master与MSTP根桥保持同设备，可使上行流量沿最优二层路径转发，避免流量先绕行到根桥再回到网关的次优路径，实现路径优化与负载分担。"
  },
  {
    "id": "PG088",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "某交换机端口配置为边缘端口后，连接了一台新交换机，且未部署BPDU保护，则结果是？",
    "options": [
      "端口保持边缘属性，立即转发",
      "端口收到BPDU后失去边缘端口属性，重新参与生成树计算，可能引起拓扑变化",
      "端口永久关闭",
      "整个生成树失效"
    ],
    "answer": "B",
    "explain": "边缘端口收到BPDU后会立即失去边缘属性并参与生成树计算，可能引发拓扑变化和短暂的转发中断。为防止这种风险，应在边缘端口上部署BPDU保护。"
  },
  {
    "id": "PG089",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于MSTP的四种保护机制，下列说法正确的有哪些？",
    "options": [
      "BPDU保护部署在边缘端口，收到BPDU即关闭端口",
      "根保护部署在根桥的下行指定端口，防止根桥被抢占",
      "TC-BPDU保护主要用于防止根桥被抢占",
      "环路保护只能部署在边缘端口上"
    ],
    "answer": ["A", "B"],
    "explain": "BPDU保护针对边缘端口，收到BPDU即关闭端口（Error-Down）；根保护部署在根桥的下行指定端口，防止根桥被抢占。TC-BPDU保护用于限制TC报文处理频率、防止MAC表频繁刷新，与根桥抢占无关；环路保护部署在根端口或Alternate端口，故C、D错误。"
  },
  {
    "id": "PG090",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中实例0（MSTI 0）的特殊之处在于？",
    "options": [
      "它是可选实例，可以删除",
      "它是默认实例，CIST就是由MSTI 0构成的，不能删除",
      "它只能映射一个VLAN",
      "它必须由用户手工创建"
    ],
    "answer": "B",
    "explain": "MSTI 0是默认实例，所有未显式映射到其他实例的VLAN都属于它，CIST由MSTI 0构成，不能被删除。用户可以创建1~64的其他实例进行流量分担规划。"
  },
  {
    "id": "PG091",
    "type": "judge",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中，未被显式映射到其他实例的VLAN默认属于实例0。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "MSTI 0是默认实例，所有未在instance命令中显式映射的VLAN都归属实例0。因此在做负载分担规划时，应把所有业务VLAN明确映射到对应实例，避免落入实例0。"
  },
  {
    "id": "PG092",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "若两台汇聚交换机上配置的MSTP实例映射关系一致，但其中一台上执行了stp root primary，则该实例的域根是？",
    "options": [
      "两台设备都可能成为域根",
      "MAC地址较小的设备",
      "总根设备",
      "执行stp root primary的那台设备（优先级为0）"
    ],
    "answer": "D",
    "explain": "stp root primary将优先级置为0，在同区域内优先级最高，必然成为该实例的域根。另一台通常配置stp root secondary作为备份根桥。"
  },
  {
    "id": "PG093",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于RSTP拓扑变化时的MAC地址表刷新，正确的是？",
    "options": [
      "RSTP不需要刷新MAC地址表",
      "RSTP只刷新根桥的MAC表",
      "RSTP依靠TCN BPDU刷新",
      "收到TC置位的BPDU后，设备会缩短MAC地址表项的老化时间，实现快速刷新"
    ],
    "answer": "D",
    "explain": "RSTP通过泛洪TC置位的BPDU通知全网拓扑变化，设备收到后将MAC表项老化时间缩短为Forward Delay，从而快速清除失效表项。RSTP不使用TCN BPDU。"
  },
  {
    "id": "PG094",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "在排查MSTP负载分担未生效的问题时，应重点检查以下哪些内容？",
    "options": [
      "各设备的MSTP域名、修订级别是否一致",
      "VLAN与实例映射是否一致，且配置后是否执行了active region-configuration",
      "不同实例的根桥是否分别配置在不同设备上",
      "设备的堆叠优先级是否为100"
    ],
    "answer": ["A", "B", "C"],
    "explain": "负载分担失效常见原因是区域三要素不一致、映射未激活、或各实例根桥配置在同一台设备。堆叠优先级与MSTP负载分担无关。"
  },
  {
    "id": "PG095",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "RSTP中，设备的BPDU发送间隔（Hello Time）默认值以及超时时间的关系是？",
    "options": [
      "Hello默认为2秒，端口连续3个Hello时间未收到BPDU即认为链路故障",
      "Hello默认为5秒，超时为30秒",
      "Hello默认为1秒，超时为1秒",
      "Hello默认为10秒，超时为30秒"
    ],
    "answer": "A",
    "explain": "Hello Time默认为2秒，RSTP规定连续3个Hello周期（约6秒）未收到BPDU即判定链路故障，比STP的Max Age 20秒快得多，这是RSTP快速收敛的重要基础。"
  },
  {
    "id": "PG096",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中主桥发送到外部区域的BPDU中，关于实例信息的处理方式是？",
    "options": [
      "把所有实例的信息全部发送出去",
      "只发送优先级最高的实例信息",
      "主桥只把CIST的信息作为公共信息发送，区域内部各实例信息对外部不可见",
      "不发送任何BPDU"
    ],
    "answer": "C",
    "explain": "MSTP中区域内部的实例细节对外部不可见，主桥对外发送的是CIST的公共信息，外部设备只感知到整个区域的CST。这正是MSTP具有良好扩展性的原因。"
  },
  {
    "id": "PG097",
    "type": "fill",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "MSTP中用于选举根桥的桥ID由桥优先级和设备的______地址两部分组成。",
    "options": [],
    "answer": ["MAC", "mac"],
    "explain": "桥ID为8字节，高2字节为桥优先级，低6字节为设备MAC地址。选举根桥时先比较优先级（小者优），优先级相同再比较MAC地址（小者优），与RSTP的规则一致。"
  },
  {
    "id": "PG098",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "某接入交换机上配置了stp edged-port enable，但该端口同时下挂了一台小型交换机，为防止环路最佳做法是？",
    "options": [
      "保持边缘端口并关闭生成树功能",
      "把该端口配置为根端口",
      "保持边缘端口并关闭BPDU保护",
      "取消边缘端口配置，并把该端口作为普通生成树端口参与计算"
    ],
    "answer": "D",
    "explain": "边缘端口应连接终端设备。若端口下挂交换机，应取消边缘端口配置，使其正常参与生成树计算；如需保留边缘端口，则必须部署BPDU保护以防环路。关闭生成树会直接导致环路风险。"
  },
  {
    "id": "PG099",
    "type": "multi",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "关于MSTP相比RSTP的优势，下列说法正确的有哪些？",
    "options": [
      "不再需要选举根桥，配置更加简单",
      "支持多实例，可实现不同VLAN的流量负载分担",
      "具备良好的区域划分能力，便于大型网络分层扩展",
      "支持快速收敛机制（继承RSTP的P/A机制等）"
    ],
    "answer": ["B", "C", "D"],
    "explain": "MSTP继承了RSTP的快速收敛特性，同时通过多实例实现负载分担，并通过Region划分提升大规模网络的可扩展性。MSTP仍然需要选举总根、域根和主桥，因此\"不再需要选举根桥\"不正确。"
  },
  {
    "id": "PG100",
    "type": "single",
    "chapter": "RSTP/MSTP高级特性",
    "stem": "在某园区网中，两台汇聚交换机互为根桥与备份根桥，实例1的根桥为SW1、实例2的根桥为SW2，同时运行VRRP。若实例1对应VLAN的VRRP Master配置在SW2上，可能导致的问题是？",
    "options": [
      "生成树无法收敛",
      "二层转发路径与三层网关不一致，流量出现绕行，负载分担效果变差",
      "VRRP无法建立",
      "MSTP自动修改实例映射"
    ],
    "answer": "B",
    "explain": "VRRP Master与MSTP根桥不在同一设备时，上行流量需先绕行至根桥再回到网关，形成次优路径，浪费带宽并增加时延。部署时应让各实例的VRRP Master与根桥保持在同一台设备上。"
  }
];