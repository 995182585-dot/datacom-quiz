window.BANK_HCIP_J = [
{
  "id": "PJ001",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "SDN的三层架构中，负责承载业务数据转发、由各类网络设备组成的是哪一层？",
  "options": ["应用层", "控制层", "转发层", "管理层"],
  "answer": "C",
  "explain": "SDN架构自下而上分为转发层、控制层和应用层。转发层由交换机、路由器等转发设备组成，只负责按流表执行数据转发。控制层与应用层均不直接承载业务报文的转发。"
},
{
  "id": "PJ002",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "在SDN架构中，OpenFlow协议位于控制器与转发设备之间，它属于哪一类接口？",
  "options": ["北向接口", "南向接口", "东西向接口", "管理接口"],
  "answer": "B",
  "explain": "南向接口是控制器与转发设备之间的接口，OpenFlow、NETCONF、PCEP均属于南向接口。北向接口是控制器向上层应用开放的接口，如RESTful API。因此OpenFlow属于南向接口。"
},
{
  "id": "PJ003",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "上层业务应用通过RESTful API向SDN控制器下发网络策略，该API属于SDN的哪一类接口？",
  "options": ["南向接口", "东向接口", "北向接口", "内部接口"],
  "answer": "C",
  "explain": "北向接口是控制器向应用层开放的编程接口，常见形式为RESTful API。应用层通过北向接口调用控制器的网络能力，无需关心底层设备差异。南向接口才是控制器与设备之间的接口。"
},
{
  "id": "PJ004",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "关于SDN控制层，下列描述正确的有哪些？",
  "options": ["持有全网拓扑与全局视图", "负责计算转发路径并生成流表", "直接参与业务报文的逐包转发", "向应用层提供北向接口"],
  "answer": ["A", "B", "D"],
  "explain": "控制层掌握全局拓扑，负责路径计算、流表生成并通过北向接口向应用层提供服务。控制层不参与数据报文的实际转发，转发动作由转发层设备完成，因此选项C错误。"
},
{
  "id": "PJ005",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "传统网络采用分布式控制，其最典型的特点是？",
  "options": ["所有设备由统一控制器集中管理", "每台设备独立运行控制协议并独立决策", "设备不支持任何路由协议", "转发与控制完全分离"],
  "answer": "B",
  "explain": "传统网络设备的控制面和转发面都在同一台设备上，每台设备独立运行路由协议并自行决策，属于分布式控制。集中控制与转发控制分离是SDN的特征，不是传统网络的特征。"
},
{
  "id": "PJ006",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "SDN实现了控制面与转发面的分离，设备上的控制功能被集中到控制器，转发设备只负责按流表转发报文。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "控制转发分离是SDN的核心思想之一。控制器集中掌握全网信息并完成路径决策，转发设备只执行流表动作，从而实现全局统一调度。"
},
{
  "id": "PJ007",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "OpenFlow流表项中的优先级字段的作用是？",
  "options": ["标识该流表项由哪个控制器下发", "当报文匹配多条流表项时决定匹配的先后顺序", "统计匹配报文的数量", "指定报文的出接口编号"],
  "answer": "B",
  "explain": "优先级（Priority）用于在多条流表项都能匹配同一报文时，按优先级从高到低选择唯一一条流表项执行。出接口由指令中的动作指定，报文计数由计数器字段完成。"
},
{
  "id": "PJ008",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "OpenFlow流表项通常包含下列哪些组成部分？",
  "options": ["匹配域", "优先级", "计数器", "指令集"],
  "answer": ["A", "B", "C", "D"],
  "explain": "标准OpenFlow流表项由匹配域、优先级、计数器、指令集、超时时间等字段构成。其中匹配域描述报文特征，计数器用于统计，指令集描述匹配后执行的动作为转发或丢弃等。四项均是流表项的组成部分。"
},
{
  "id": "PJ009",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "OpenFlow流表中用于统计匹配报文数量与字节数的字段是？",
  "options": ["匹配域", "优先级", "Cookie", "计数器"],
  "answer": "D",
  "explain": "计数器（Counters）用于统计该流表项匹配到的报文数和字节数，可用于流量监控。Cookie是控制器用来标识流表项的辅助字段，不具备统计功能。"
},
{
  "id": "PJ010",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "在OpenFlow中，若报文未能匹配任何流表项，设备的默认处理方式是直接转发到所有端口。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "报文匹配不到任何流表项时，默认动作是Table-Miss，通常将报文封装后上送控制器处理或直接丢弃。泛洪到所有端口并非默认行为，需要通过指令显式指定。"
},
{
  "id": "PJ011",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "华为iMaster NCE在SDN架构中所扮演的角色是？",
  "options": ["转发设备", "SDN控制器与自动化管理平台", "终端接入设备", "仅提供告警采集的网管"],
  "answer": "B",
  "explain": "iMaster NCE是华为的自动化与智能化网络管理控制平台，承担SDN控制器的职责。它通过南向接口纳管设备，通过北向接口向应用开放能力，并可实现网络自动化部署与智能运维。"
},
{
  "id": "PJ012",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "iMaster NCE-Campus主要面向下列哪类场景？",
  "options": ["骨干传输网络", "光接入网络", "园区网络", "数据中心存储网络"],
  "answer": "C",
  "explain": "iMaster NCE-Campus是面向园区网络的管控析一体化平台，用于园区有线无线一体化管理。数据中心场景通常使用iMaster NCE-Fabric，广域场景使用iMaster NCE-WAN。"
},
{
  "id": "PJ013",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "NETCONF协议在SDN中通常被用作哪一类接口协议？",
  "options": ["北向接口协议", "路由协议", "南向接口协议", "隧道协议"],
  "answer": "C",
  "explain": "NETCONF用于控制器或网管与网络设备之间进行配置下发，属于南向接口协议。它采用XML编码，通过YANG模型描述配置数据，可实现配置的事务化下发与回滚。"
},
{
  "id": "PJ014",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "YANG模型在网络自动化中的作用是？",
  "options": ["加密设备与管理平台之间的报文", "压缩配置文件以节省带宽", "替代路由协议完成选路", "描述网络设备的配置数据模型与结构"],
  "answer": "D",
  "explain": "YANG是一种数据建模语言，用于定义网络设备的配置数据、状态数据和操作的结构。NETCONF或RESTCONF使用YANG模型来规范配置内容的格式，使配置下发标准化、可校验。YANG本身不负责加密、压缩或选路。"
},
{
  "id": "PJ015",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "关于Telemetry与传统SNMP的对比，下列描述正确的有哪些？",
  "options": ["Telemetry采用推模式，设备主动上报数据", "SNMP采用拉模式，由网管周期性查询", "Telemetry可支持毫秒级的高频采集", "SNMP的采集精度和实时性普遍高于Telemetry"],
  "answer": ["A", "B", "C"],
  "explain": "Telemetry由设备主动推送（推模式）数据给采集器，可达到毫秒级采集精度。SNMP由网管轮询设备（拉模式），周期通常在分钟级，实时性较差。因此选项D的描述正好相反。"
},
{
  "id": "PJ016",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "在大规模网络中，SNMP的轮询采集方式在实时性和采集精度上明显优于Telemetry。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "SNMP采用拉模式轮询，采集周期通常为分钟级，在大规模网络中容易出现延迟与精度不足。Telemetry采用推模式，由设备按订阅周期主动上报，可达到毫秒级精度。"
},
{
  "id": "PJ017",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "华为OPS（Open Programmability System）开放可编程系统的核心特点是？",
  "options": ["内置Python脚本运行环境，可调用设备内部接口", "必须依赖外置服务器才能运行脚本", "只能下发静态配置，无法采集状态", "仅支持C语言编写的程序"],
  "answer": "A",
  "explain": "OPS在设备内部提供Python脚本运行环境，脚本可通过开放的API查询设备状态、下发配置或订阅事件。它无需外置服务器即可在设备本地实现自动化逻辑，属于设备侧的可编程能力。"
},
{
  "id": "PJ018",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "Python库Paramiko在自动化运维中的主要用途是？",
  "options": ["解析YANG模型文件", "实现SSH连接并在远程设备上执行命令", "生成网络拓扑图", "管理SNMP的MIB文件"],
  "answer": "B",
  "explain": "Paramiko是纯Python实现的SSH协议库，可建立SSH连接、执行命令并传输文件，是自动化登录设备的基础库。netmiko在其之上做了网络设备适配，ncclient专门用于NETCONF。"
},
{
  "id": "PJ019",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "要使用Python通过NETCONF协议与华为设备交互，最合适的库是？",
  "options": ["Paramiko", "requests", "openpyxl", "ncclient"],
  "answer": "D",
  "explain": "ncclient是专门实现NETCONF协议的Python客户端库，支持通过YANG模型下发配置与获取状态。Paramiko负责底层SSH传输，requests用于HTTP请求，openpyxl用于操作Excel文件。"
},
{
  "id": "PJ020",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "关于Ansible在网络自动化中的应用，下列描述正确的有哪些？",
  "options": ["采用无代理（Agentless）架构，通过SSH下发任务", "使用YAML格式编写Playbook描述任务", "必须在每台被管设备上安装Ansible客户端", "具有幂等性，重复执行同一Playbook结果一致"],
  "answer": ["A", "B", "D"],
  "explain": "Ansible无需在被管设备上安装代理，通过SSH即可执行任务，Playbook使用YAML编写。其模块具备幂等性，重复执行不会产生额外变更。选项C与无代理架构相矛盾。"
},
{
  "id": "PJ021",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "RESTful API中，用于在服务器上创建新资源的HTTP方法是？",
  "options": ["GET", "POST", "PUT", "DELETE"],
  "answer": "B",
  "explain": "在REST风格中，POST通常用于创建资源，PUT用于更新或替换已有资源，GET用于查询，DELETE用于删除。因此创建新资源对应POST方法。"
},
{
  "id": "PJ022",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "RESTful API中，GET方法通常对应下列哪种操作？",
  "options": ["创建资源", "删除资源", "查询资源", "修改资源"],
  "answer": "C",
  "explain": "GET用于从服务器获取或查询资源，是只读操作，不应改变服务器状态。创建用POST，修改用PUT或PATCH，删除用DELETE。"
},
{
  "id": "PJ023",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "RESTful API通常基于HTTP协议，通过GET、POST、PUT、DELETE等方法对资源进行操作。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "RESTful API以资源为中心，使用标准HTTP方法表达操作语义。GET查询、POST创建、PUT更新、DELETE删除是最常见的映射关系。这种风格简单通用，便于与上层应用集成。"
},
{
  "id": "PJ024",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "相比传统网络，SDN带来的主要优势包括哪些？",
  "options": ["集中管控，可从全局视角调度网络资源", "网络能力开放，支持业务快速部署", "设备可编程，便于灵活定制转发行为", "彻底取消转发设备，所有报文由控制器转发"],
  "answer": ["A", "B", "C"],
  "explain": "SDN的优势体现在集中管控、能力开放和设备可编程三个方面。控制器只负责决策，实际转发仍由转发层设备完成，因此选项D错误。"
},
{
  "id": "PJ025",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "VXLAN本质上属于下列哪种网络技术？",
  "options": ["Underlay路由协议", "Overlay网络技术", "链路层聚合技术", "广域承载技术"],
  "answer": "B",
  "explain": "VXLAN通过在物理网络（Underlay）之上构建逻辑隧道，形成虚拟的Overlay网络。它使用MAC-in-UDP封装，可突破VLAN 4094个网段的限制，常用于数据中心与园区虚拟化场景。"
},
{
  "id": "PJ026",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "VXLAN使用哪种封装方式承载二层报文？",
  "options": ["IP-in-IP封装", "GRE封装", "MAC-in-UDP封装", "MPLS标签封装"],
  "answer": "C",
  "explain": "VXLAN将原始以太网帧封装在UDP报文中，外层再封装IP和以太头，即MAC-in-UDP。目的端口通常为4789，通过24位的VNI标识不同的虚拟网络。"
},
{
  "id": "PJ027",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "VXLAN报文中用于标识不同虚拟网络的字段是？",
  "options": ["VLAN ID", "DSCP", "TTL", "VNI"],
  "answer": "D",
  "explain": "VNI是VXLAN网络标识符，长度24位，理论上可支持约1600万个虚拟网络，远多于VLAN的4094个。VLAN ID只有12位，DSCP用于QoS，TTL用于防止环路。"
},
{
  "id": "PJ028",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "Overlay网络依赖Underlay网络提供的IP可达性来承载隧道报文。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "Overlay是在Underlay之上构建的逻辑网络，其隧道报文需要在Underlay中正常路由转发。因此Underlay必须为隧道端点之间提供IP层可达性。Underlay的质量直接影响Overlay的转发性能。"
},
{
  "id": "PJ029",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "下列场景中，最适合引入网络自动化方案的是？",
  "options": ["网络设备数量少且配置长期不变的小型办公室", "仅有一台家用路由器的小型网络", "设备数量多、变更频繁且需保证配置一致性的数据中心", "完全离线不联网的独立实验室"],
  "answer": "C",
  "explain": "网络自动化的价值在规模型、频繁变更和一致性要求高的场景中最突出。设备多、变更频繁时人工配置易出错且效率低，自动化可显著提升效率与准确性。规模极小或长期不变的网络收益有限。"
},
{
  "id": "PJ030",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "网络自动化运维能够带来的价值包括哪些？",
  "options": ["减少人工重复配置，降低人为失误", "提高配置下发的一致性与可重复性", "缩短业务上线时间，提升变更效率", "完全取代网络工程师，无需任何人工审核"],
  "answer": ["A", "B", "C"],
  "explain": "自动化能降低人为错误、保证配置一致性并加快业务上线速度。但自动化工具仍需要工程师设计流程与审核策略，无法完全取代人工判断，因此选项D错误。"
},
{
  "id": "PJ031",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "OpenFlow协议中，控制器向交换机下发流表使用的消息类型是？",
  "options": ["Packet-In", "Port-Status", "Echo-Request", "Flow-Mod"],
  "answer": "D",
  "explain": "Flow-Mod消息由控制器发送给交换机，用于添加、修改或删除流表项。Packet-In是交换机把无法匹配的报文上送控制器，Port-Status用于上报端口状态变化。"
},
{
  "id": "PJ032",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "OpenFlow交换机收到无法匹配任何流表项的报文时，通常会向控制器发送哪种消息？",
  "options": ["Flow-Mod", "Packet-In", "Features-Request", "Barrier-Request"],
  "answer": "B",
  "explain": "Packet-In消息用于将Table-Miss的报文上送控制器，由控制器决定后续处理方式。控制器分析后可通过Packet-Out或Flow-Mod下发处理策略。"
},
{
  "id": "PJ033",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "在SDN架构中，北向接口用于控制器与转发设备之间交互，南向接口用于控制器与应用之间交互。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "该描述把南北向接口的方位说反了。南向接口连接控制器与转发设备，典型协议是OpenFlow。北向接口连接控制器与应用层，典型形式是RESTful API。"
},
{
  "id": "PJ034",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "下列哪些属于SDN的南向接口协议？",
  "options": ["OpenFlow", "NETCONF", "PCEP", "RESTful API"],
  "answer": ["A", "B", "C"],
  "explain": "OpenFlow、NETCONF、PCEP都是控制器与设备之间的南向协议。RESTful API是控制器向应用层开放的北向接口，因此不属于南向接口。"
},
{
  "id": "PJ035",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "关于SDN控制器的高可用部署，下列做法最合理的是？",
  "options": ["部署单台控制器以避免数据不一致", "部署控制器集群，主备或负载分担方式运行", "取消控制器，改由设备自行决策", "将控制器部署在转发设备内部"],
  "answer": "B",
  "explain": "控制器集中管控全网，一旦故障影响面很大，因此生产环境通常采用集群化部署。主备或集群负载分担可以避免单点故障，保证控制面可靠性。"
},
{
  "id": "PJ036",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "OpenFlow流表可以有多级，报文按流水线方式依次匹配各级流表。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "OpenFlow支持多级流表，报文从第一级流表开始匹配，通过指令中的Goto指向下一级流表，形成流水线处理。多级流表可以把复杂匹配逻辑分解，提高流表利用率。"
},
{
  "id": "PJ037",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "华为设备上通过NETCONF下发配置时，配置数据的格式通常由什么来定义？",
  "options": ["MIB文件", "CSV模板", "YANG模型", "HTML页面"],
  "answer": "C",
  "explain": "NETCONF使用XML编码配置数据，其结构由YANG模型定义。YANG明确了各配置节点、类型和约束，使配置可被标准化校验与下发。MIB主要用于SNMP。"
},
{
  "id": "PJ038",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "Telemetry采集架构中，负责接收设备推送数据并存储分析的组件是？",
  "options": ["转发器（Forwarder）", "控制器（Controller）", "客户端（Client）", "采集器（Collector）"],
  "answer": "D",
  "explain": "Telemetry架构中设备作为客户端主动推送数据，采集器负责接收、解析并入库。上层分析平台再基于采集器中的数据做可视化与告警，控制器则负责下发网络策略。"
},
{
  "id": "PJ039",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "关于NETCONF协议的特点，下列描述正确的有哪些？",
  "options": ["使用XML编码配置与状态数据", "基于SSH等安全传输层承载", "支持配置的事务提交与回滚", "只能在设备本地Console口使用"],
  "answer": ["A", "B", "C"],
  "explain": "NETCONF以XML为载体，通常承载在SSH之上以保证安全，并支持候选配置、提交与回滚等事务能力。它通过网络远程调用，并不限于Console本地使用。"
},
{
  "id": "PJ040",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "在典型SDN组网中，控制器与转发设备之间控制面的连接关系是？",
  "options": ["控制器必须与设备直连且不能经过任何中间设备", "只能通过Console线连接设备", "控制器通过带外或带内管理网络与设备建立控制通道", "控制器与设备之间无需任何连接"],
  "answer": "C",
  "explain": "控制器与设备之间需要建立控制通道来传递OpenFlow等协议报文，可通过带外管理网或带内网络可达。并不要求物理直连，也不使用Console线。"
},
{
  "id": "PJ041",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "在纯SDN架构中，转发设备仍必须独立运行完整的路由协议并自行完成路径计算。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "在纯SDN架构中，控制逻辑上移到控制器，转发设备只需按控制器下发的流表转发即可。是否运行传统路由协议取决于具体实现，但转发设备的职责已不再是独立完成路径计算。"
},
{
  "id": "PJ042",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "Python中用于向RESTful API发送HTTP请求的常用库是？",
  "options": ["numpy", "pandas", "matplotlib", "requests"],
  "answer": "D",
  "explain": "requests库封装了HTTP请求的发送与响应处理，可方便地调用RESTful接口。numpy和pandas用于数据处理，matplotlib用于绘图，均不承担HTTP调用职责。"
},
{
  "id": "PJ043",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "netmiko库相比Paramiko的优势主要在于？",
  "options": ["对多种网络设备型号做了适配，简化了交互式命令下发", "完全不依赖SSH协议", "只能用于Linux服务器管理", "内置了图形化配置界面"],
  "answer": "A",
  "explain": "netmiko在Paramiko基础上针对不同厂商与型号的设备做了适配，自动处理提示符匹配、分页关闭等细节。它仍然基于SSH，主要面向网络设备而非图形界面。"
},
{
  "id": "PJ044",
  "type": "multi",
  "chapter": "网络自动化与SDN",
  "stem": "下列哪些属于网络自动化可以实施的典型任务？",
  "options": ["批量下发VLAN与接口配置", "定期自动备份设备配置文件", "自动巡检并生成合规性报告", "自动决定公司采购哪一款网络设备"],
  "answer": ["A", "B", "C"],
  "explain": "批量配置下发、配置备份、自动巡检与合规检查都是自动化的典型运维任务。设备采购属于商务决策，依赖成本与需求评估，不属于网络自动化范畴。"
},
{
  "id": "PJ045",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "iMaster NCE-Campus在园区场景中可以实现下列哪项能力？",
  "options": ["有线无线一体化管理，统一认证与策略下发", "仅管理交换机，无法管理无线AP", "仅做日志收集，不能下发配置", "仅支持单台设备的管理"],
  "answer": "A",
  "explain": "iMaster NCE-Campus面向园区，支持有线无线设备统一纳管、用户统一认证和策略集中下发。它可管理大量设备，并非仅做日志采集或单机管理。"
},
{
  "id": "PJ046",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "在SDN架构下，网络管理员可以通过控制器以编程方式快速调整全网策略，而无需逐台登录设备修改配置。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "控制器提供北向接口供应用或管理员调用，策略在控制器上集中定义后自动下发到相关设备。这种方式避免了逐台登录设备的重复操作，显著提升变更效率与一致性。"
},
{
  "id": "PJ047",
  "type": "single",
  "chapter": "网络自动化与SDN",
  "stem": "关于SDN与传统网络在故障收敛方面的差异，下列描述正确的是？",
  "options": ["SDN必须等待路由协议慢收敛后才能恢复", "SDN控制器可从全局视角快速重算路径并下发新流表", "传统网络收敛速度一定快于SDN", "两者收敛机制完全相同"],
  "answer": "B",
  "explain": "控制器掌握全局拓扑，链路故障时可直接计算备用路径并下发流表，绕过传统路由协议的逐跳收敛过程。传统网络依赖分布式协议的收敛机制，通常耗时更长。"
},
{
  "id": "PJ048",
  "type": "fill",
  "chapter": "网络自动化与SDN",
  "stem": "在SDN架构中，控制器与转发设备之间的接口称为______接口，典型协议为OpenFlow。",
  "options": [],
  "answer": ["南向"],
  "explain": "南向接口是控制器与转发设备之间的接口，用于下发流表与上报设备状态。OpenFlow是最具代表性的南向协议，此外还有NETCONF、PCEP等。"
},
{
  "id": "PJ049",
  "type": "fill",
  "chapter": "网络自动化与SDN",
  "stem": "OpenFlow流表项中，当报文可以匹配多条流表项时，由______字段决定最终执行哪一条流表项。",
  "options": [],
  "answer": ["优先级"],
  "explain": "优先级字段决定了多条匹配流表项之间的选择顺序，数值越高越优先。若优先级相同，则由交换机实现定义的规则选择其中一条执行。"
},
{
  "id": "PJ050",
  "type": "judge",
  "chapter": "网络自动化与SDN",
  "stem": "Telemetry与SNMP都属于拉模式的数据采集方式，需要网管周期性查询设备。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "只有SNMP属于典型的拉模式，由网管主动轮询设备。Telemetry采用推模式，设备按订阅主动上报数据，可实现更高频、更高精度的采集。"
},
{
  "id": "PJ051",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv4向IPv6过渡的三大类技术是？",
  "options": ["路由、交换、安全", "双栈、隧道、翻译", "单播、组播、任播", "NAT、ACL、QoS"],
  "answer": "B",
  "explain": "IPv4向IPv6过渡主要有双栈、隧道和翻译三大类技术。双栈让设备同时运行两种协议，隧道用于穿越IPv4孤岛，翻译技术实现两种协议报文之间的转换。"
},
{
  "id": "PJ052",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "一台设备同时启用IPv4和IPv6协议栈，可分别与IPv4和IPv6节点通信，这种技术称为？",
  "options": ["隧道技术", "NAT64翻译", "代理技术", "双栈技术"],
  "answer": "D",
  "explain": "双栈技术让设备同时具备IPv4和IPv6协议栈，可依据目的地址选择使用哪种协议发送报文。它是过渡技术中实现最简单、应用最广泛的一种。"
},
{
  "id": "PJ053",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "两个IPv6孤岛需要穿越IPv4骨干网互通，此时最适合采用的技术是？",
  "options": ["双栈技术", "地址翻译技术", "隧道技术", "任播技术"],
  "answer": "C",
  "explain": "隧道技术将IPv6报文封装在IPv4报文中，使其可以穿越IPv4网络，在隧道端点解封装后还原IPv6报文。双栈要求沿途设备都支持IPv6，而IPv4骨干通常不具备该条件。"
},
{
  "id": "PJ054",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "NAT64技术的主要作用是？",
  "options": ["加密IPv6报文", "为IPv6主机自动分配地址", "压缩IPv6报文头部", "实现IPv6主机与IPv4主机之间的通信"],
  "answer": "D",
  "explain": "NAT64通过地址与协议转换，使纯IPv6主机能够访问IPv4网络中的资源。它通常与DNS64配合使用，由DNS64合成AAAA记录以引导IPv6主机发起访问。"
},
{
  "id": "PJ055",
  "type": "multi",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "关于DNS64与NAT64的配合，下列描述正确的有哪些？",
  "options": ["DNS64负责为只有A记录的域名合成AAAA记录", "NAT64负责IPv6与IPv4报文之间的地址和协议转换", "二者配合可使纯IPv6主机访问IPv4服务器", "DNS64会直接修改IPv4服务器的地址配置"],
  "answer": ["A", "B", "C"],
  "explain": "DNS64在查询到只有A记录时，会合成带有NAT64前缀的AAAA记录返回给IPv6主机。主机据此发起的IPv6流量由NAT64设备转换为IPv4访问目标服务器。DNS64不会修改服务器自身的地址配置。"
},
{
  "id": "PJ056",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "6to4隧道技术的显著特点是？",
  "options": ["必须手工配置每一对隧道端点", "只能在IPv6骨干网内部使用", "隧道目的地址由IPv4地址嵌在2002::/16前缀中自动生成", "必须依赖NAT64设备"],
  "answer": "C",
  "explain": "6to4使用2002::/16前缀，将边缘设备的IPv4地址嵌入IPv6地址中，从而自动推导出隧道端点地址，无需逐条手工配置。它是自动隧道技术的一种。"
},
{
  "id": "PJ057",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "ISATAP隧道技术主要用于实现什么？",
  "options": ["使IPv4网络内的主机之间通过IPv4网络传输IPv6报文", "在IPv6主机之间建立IPv4连接", "替换IPv6的邻居发现协议", "为IPv6主机分配全球单播地址"],
  "answer": "A",
  "explain": "ISATAP通过在接口标识中嵌入IPv4地址，使处于IPv4网络中的主机之间能够自动建立隧道，传输IPv6报文。它常用于园区或企业网内IPv4主机逐步引入IPv6的场景。"
},
{
  "id": "PJ058",
  "type": "judge",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "手工隧道需要在隧道两端显式配置隧道源地址和目的地址，适用于隧道端点数量较少的场景。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "手工隧道（如手工配置的IPv6 over IPv4隧道）需要明确指定隧道源与目的地址。配置直观可控，但当端点数量增多时配置量急剧增加，因此更适合少量固定端点的组网。"
},
{
  "id": "PJ059",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "GRE隧道在IPv6过渡中的优势之一是？",
  "options": ["只能承载IPv6单播报文", "可承载多种协议报文并支持组播，通用性强", "必须依赖MPLS标签", "无法穿越IPv4网络"],
  "answer": "B",
  "explain": "GRE是通用封装协议，可承载多种网络层协议，并支持组播与广播报文的封装。这使其在承载IPv6过渡流量的同时，也便于支持组播类业务。"
},
{
  "id": "PJ060",
  "type": "multi",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "采用双栈技术时，设备需要具备下列哪些能力？",
  "options": ["同时配置IPv4和IPv6协议栈", "同时拥有IPv4地址和IPv6地址", "能够根据目的地址选择相应协议栈发送报文", "必须关闭IPv4协议栈才能启用IPv6"],
  "answer": ["A", "B", "C"],
  "explain": "双栈设备同时运行两套协议栈并拥有两类地址，转发时根据目的地址选择协议。IPv4与IPv6协议栈可以并存，无需关闭其中一方，因此选项D错误。"
},
{
  "id": "PJ061",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6接口标识使用EUI-64方式生成时，需要在MAC地址中间插入的十六进制数值是？",
  "options": ["0000", "FFFF", "FEFF", "FFFE"],
  "answer": "D",
  "explain": "EUI-64生成接口标识时，先在48位MAC地址的正中间插入FFFE，凑成64位。随后还要翻转第一个字节的第7位（U/L位）。"
},
{
  "id": "PJ062",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "EUI-64生成接口标识时，除了插入FFFE，还需要对MAC地址第一个字节进行什么操作？",
  "options": ["翻转第7位（U/L位）", "翻转最高位", "全部取反", "保持不变"],
  "answer": "A",
  "explain": "EUI-64需要将MAC地址第一个字节的第7位取反，以表示该接口标识是全局唯一还是本地管理。例如MAC首字节00会变为02，02则变为00。"
},
{
  "id": "PJ063",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "已知某接口MAC地址为00-1A-2B-3C-4D-5E，采用EUI-64生成的接口标识中，前两个字节应为？",
  "options": ["001A", "FF1A", "021B", "021A"],
  "answer": "D",
  "explain": "先取MAC前两字节001A，第一个字节00的第7位翻转后变为02，因此前两字节为021A。后续字节保持原样并在中间插入FFFE，最终得到021A:2BFF:FE3C:4D5E。"
},
{
  "id": "PJ064",
  "type": "judge",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "采用EUI-64方式生成的IPv6接口标识会暴露接口的MAC地址信息，存在一定隐私风险。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "EUI-64直接由MAC地址变换而来，攻击者可据此反推设备MAC地址，进而跟踪设备。为保护隐私，RFC 4941提出了临时地址等机制来降低被跟踪的风险。"
},
{
  "id": "PJ065",
  "type": "multi",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "SLAAC无状态地址自动配置过程中，路由器发送的RA报文可以携带下列哪些信息？",
  "options": ["网络前缀信息", "默认网关（路由器）信息", "M标志位与O标志位", "用户的登录口令"],
  "answer": ["A", "B", "C"],
  "explain": "RA报文携带前缀信息供主机生成全球单播地址，同时隐含提供默认网关。标志位中M表示是否使用有状态DHCPv6获取地址，O表示是否通过DHCPv6获取其他配置。用户口令与地址配置无关。"
},
{
  "id": "PJ066",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "SLAAC流程中，主机在配置接口后主动发送的、用于请求路由器立即回应RA的报文是？",
  "options": ["邻居请求（NS）", "路由器请求（RS）", "邻居通告（NA）", "路由器通告（RA）"],
  "answer": "B",
  "explain": "RS由主机发出，用于请求路由器立即发送RA，避免等待周期性的RA。NS和NA用于地址解析与重复地址检测，RA由路由器主动或响应RS发送。"
},
{
  "id": "PJ067",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "RA报文中的M标志位被置为1时，表示什么含义？",
  "options": ["主机应通过SLAAC获取地址", "主机不需要配置任何地址", "主机应通过有状态DHCPv6获取地址", "主机应关闭IPv6协议栈"],
  "answer": "C",
  "explain": "M位为1表示Managed，即主机需要通过有状态DHCPv6从服务器获取IPv6地址等配置。M位为0时主机使用SLAAC根据RA中的前缀自行生成地址。"
},
{
  "id": "PJ068",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "RA报文中的O标志位被置为1时，表示什么含义？",
  "options": ["主机必须获取全球单播地址", "主机通过DHCPv6获取DNS等其他配置信息", "主机应停止发送RS报文", "路由器不承担转发职责"],
  "answer": "B",
  "explain": "O位为Other，表示主机需要通过DHCPv6获取除地址之外的其他配置参数，如DNS服务器地址。此时地址本身仍可通过SLAAC生成，即有状态与无状态配置可以混合使用。"
},
{
  "id": "PJ069",
  "type": "multi",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "关于DHCPv6有状态与无状态两种模式，下列描述正确的有哪些？",
  "options": ["有状态模式由DHCPv6服务器分配IPv6地址", "无状态模式下地址仍由SLAAC生成，DHCPv6只下发其他参数", "有状态模式通常要求RA中M位置1", "无状态模式下主机不能使用DHCPv6"],
  "answer": ["A", "B", "C"],
  "explain": "有状态DHCPv6负责分配地址并记录租约，RA中M位置1提示主机使用它。无状态DHCPv6不分配地址，只下发DNS等参数，通过O位置1提示，因此选项D错误。"
},
{
  "id": "PJ070",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6中的重复地址检测（DAD）通过发送哪种报文实现？",
  "options": ["路由器通告（RA）", "回显请求（Echo Request）", "路由请求（RS）", "邻居请求（NS）"],
  "answer": "D",
  "explain": "DAD通过向该地址对应的被请求节点组播地址发送NS报文，源地址使用未指定地址。若在指定时间内未收到NA应答，则认为该地址可用。"
},
{
  "id": "PJ071",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "主机执行DAD时，发送NS报文的源地址通常是？",
  "options": ["链路本地地址", "未指定地址::", "全球单播地址", "组播地址FF02::1"],
  "answer": "B",
  "explain": "DAD检测的地址尚不能确认可用，因此NS报文的源地址使用未指定地址::，目的地址为该地址对应的被请求节点组播地址。收到NA应答即说明地址已被占用。"
},
{
  "id": "PJ072",
  "type": "judge",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6地址在通过DAD检测之前处于暂定（Tentative）状态，此时不能用于正常通信。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "地址配置后先进入暂定状态并执行DAD。检测通过后地址转为优先（Preferred）状态才能正常收发数据；若检测失败则地址不可用。"
},
{
  "id": "PJ073",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "NDP协议包含的报文类型共有几种？",
  "options": ["2种：NS、NA", "3种：NS、NA、RS", "4种：NS、NA、RS、RA", "5种：NS、NA、RS、RA、Redirect"],
  "answer": "D",
  "explain": "RFC 4861 为 NDP 定义了五种报文：路由器请求（RS）、路由器通告（RA）、邻居请求（NS）、邻居通告（NA）和重定向（Redirect）。前四种用于路由器发现、地址解析与无状态地址自动配置，Redirect 用于告知主机到达某目的地存在更优的下一跳，同属 NDP 报文。"
},
{
  "id": "PJ074",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6邻居发现协议中，用于地址解析的报文交互是？",
  "options": ["发送NS，目标回应NA", "发送RS，目标回应RA", "发送NA，目标回应NS", "发送RA，目标回应RS"],
  "answer": "A",
  "explain": "地址解析时主机向目标地址的被请求节点组播地址发送NS，被请求方以NA单播回应并提供自己的链路层地址。这与IPv4中ARP的请求应答过程作用类似。"
},
{
  "id": "PJ075",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6基本报文头部中，用于表示报文在被丢弃前最多可经过多少跳的字段是？",
  "options": ["流标签", "流量类别", "负载长度", "跳数限制（Hop Limit）"],
  "answer": "D",
  "explain": "Hop Limit字段的作用与IPv4中的TTL相同，每经过一台路由器减1，减到0则丢弃报文。这可以防止报文在网络中无限循环。"
},
{
  "id": "PJ076",
  "type": "multi",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "关于IPv6报文头部的特点，下列描述正确的有哪些？",
  "options": ["基本头部长度固定为40字节", "取消了IPv4中的头部校验和字段", "取消了头部选项字段，改由扩展报头实现", "基本头部长度可变，最长60字节"],
  "answer": ["A", "B", "C"],
  "explain": "IPv6基本头部固定40字节，去掉了校验和以减轻转发处理负担，并把选项功能移到扩展报头。选项D描述的是IPv4头部长度可变的特点。"
},
{
  "id": "PJ077",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6扩展报头在报文中的排列方式是？",
  "options": ["随机插入基本头部中间", "只能出现一个，不能串联", "按固定顺序串联在基本头部之后", "位于负载数据之后"],
  "answer": "C",
  "explain": "IPv6扩展报头按定义的推荐顺序依次排列在基本头部之后，如逐跳选项报头、路由报头、分片报头、目的选项报头等。每个扩展报头通过下一头部字段串接。"
},
{
  "id": "PJ078",
  "type": "judge",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6要求中间路由器不得对报文进行分片，分片工作由源端主机完成。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "IPv6规定中间路由器不对报文分片，只有源端可以分片。源端通过路径MTU发现机制获知路径上的最小MTU，据此调整报文长度。"
},
{
  "id": "PJ079",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6节点必须支持的最小MTU是多少字节？",
  "options": ["576", "1500", "1280", "1024"],
  "answer": "C",
  "explain": "IPv6规定链路MTU至少为1280字节，所有IPv6节点都必须能够处理不小于1280字节的报文。576字节是IPv4中要求的最小重组缓冲区大小。"
},
{
  "id": "PJ080",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6中的路径MTU发现机制的作用是？",
  "options": ["为报文分配流标签", "确定源到目的路径上最小的MTU，避免分片", "计算路由开销", "检测地址是否重复"],
  "answer": "B",
  "explain": "路径MTU发现通过发送逐跳不可分片报文并接收ICMPv6差错报文，确定整条路径上可用的最小MTU。源端据此控制报文长度，从而避免中途分片。"
},
{
  "id": "PJ081",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "被请求节点组播地址（Solicited-Node Multicast Address）的前缀是？",
  "options": ["FF02::1", "FF02::2", "FF02::1:FF00:0/104", "FF05::1:3"],
  "answer": "C",
  "explain": "被请求节点组播地址使用FF02::1:FF00:0/104前缀，后24位取单播地址的低24位。主机加入该组播组后，NS报文只需发送给对应组播地址，避免打扰网段内所有节点。"
},
{
  "id": "PJ082",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6中组播地址FF02::1表示的含义是？",
  "options": ["链路上所有路由器", "链路上所有节点", "所有OSPF路由器", "所有DHCP服务器"],
  "answer": "B",
  "explain": "FF02::1是链路本地范围的所有节点组播地址，链路上的所有IPv6节点都会加入。FF02::2表示链路上所有路由器，FF02::5为OSPFv3的AllSPFRouters。"
},
{
  "id": "PJ083",
  "type": "judge",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6任播地址被分配给多个接口，发往该地址的报文会被交付到路由意义上最近的一个接口。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "任播地址标识一组接口，报文按照路由协议计算出的最近接口进行交付。它常用于提升服务就近访问能力和可用性，IPv6中任播地址不能作为源地址使用。"
},
{
  "id": "PJ084",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "下列关于IPv6链路本地地址的描述，正确的是？",
  "options": ["前缀为FC00::/7，可在企业网内路由", "前缀为2000::/3，全球唯一", "前缀为FF00::/8，属于组播地址", "前缀为FE80::/10，仅在本链路有效且不可被路由转发"],
  "answer": "D",
  "explain": "链路本地地址使用FE80::/10前缀，仅在本地链路范围内有效，路由器不会将其转发到其他链路。FC00::/7是唯一本地地址，2000::/3是全球单播地址，FF00::/8是组播地址。"
},
{
  "id": "PJ085",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "在 IPv6 中，用于取代 IPv4 广播、承担“一对多”通信职能的地址类型是？",
  "options": ["任播地址（Anycast）", "组播地址（Multicast）", "链路本地地址", "唯一本地地址"],
  "answer": "B",
  "explain": "IPv6 取消了广播地址，原有“向本网段所有节点发送”的职能由组播承担，例如 ff02::1 表示链路上所有节点、ff02::2 表示所有路由器。任播是把同一地址配置在多台设备上、由路由选择最近一台响应，属于一对最近通信；链路本地与唯一本地地址都是单播地址。"
},
{
  "id": "PJ086",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6全球单播地址目前分配的地址范围前缀是？",
  "options": ["2000::/3", "FE80::/10", "FC00::/7", "FF00::/8"],
  "answer": "A",
  "explain": "全球单播地址当前从2000::/3范围内分配，其中2001::/16为主要分配段。该范围内地址全球唯一且可被全球路由。"
},
{
  "id": "PJ087",
  "type": "multi",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "关于OSPFv3相比OSPFv2的变化，下列描述正确的有哪些？",
  "options": ["基于链路运行，而非基于网段", "使用链路本地地址建立邻居并作为报文源地址", "通过Router-ID标识路由器，而不再靠接口地址", "不再需要DR与BDR选举"],
  "answer": ["A", "B", "C"],
  "explain": "OSPFv3基于链路运行，邻居建立使用链路本地地址，路由器由Router-ID标识，认证也改由IPv6扩展头实现。OSPFv3在广播网络中依然需要选举DR与BDR，因此选项D错误。"
},
{
  "id": "PJ088",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "RIPng使用的UDP端口号是？",
  "options": ["520", "521", "179", "646"],
  "answer": "B",
  "explain": "RIPng使用UDP端口521，而RIPv2使用端口520。RIPng以FF02::9作为组播目的地址发送路由更新，最大跳数限制仍为15跳。"
},
{
  "id": "PJ089",
  "type": "judge",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "RIPng使用组播地址FF02::9发送路由更新报文，且最大跳数限制为15跳。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "RIPng沿用RIP的距离矢量机制，以跳数为度量，16跳表示不可达，因此有效跳数为15。其更新报文通过FF02::9组播发送，端口为UDP 521。"
},
{
  "id": "PJ090",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IS-IS支持IPv6的方式是？",
  "options": ["必须重新设计全新的协议", "只能支持IPv6，不支持IPv4", "通过新增TLV携带IPv6路由信息，实现方式与IPv4一致", "必须依赖OSPFv3辅助"],
  "answer": "C",
  "explain": "IS-IS通过扩展TLV（如IPv6 Reachability TLV）来携带IPv6可达性信息，协议框架保持不变。这使IS-IS可以在同一进程内同时承载IPv4与IPv6路由。"
},
{
  "id": "PJ091",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "在IPv6 ACL配置中，如果不指定源地址，默认匹配的含义是？",
  "options": ["不匹配任何源地址", "仅匹配链路本地地址", "仅匹配组播地址", "匹配任意源地址"],
  "answer": "D",
  "explain": "IPv6 ACL规则中通配符全部为0时表示精确匹配，而使用any关键字或未指定时表示匹配任意源地址。配置时需明确匹配范围以避免策略过宽。"
},
{
  "id": "PJ092",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6安全机制中，NDP面临的主要安全威胁是？",
  "options": ["报文头部过长", "伪造NS/NA报文进行地址欺骗", "地址空间不足", "跳数限制失效"],
  "answer": "B",
  "explain": "攻击者可以伪造NS或NA报文冒充邻居，实施中间人攻击或地址抢占。为应对该类威胁，可部署SEND或RA Guard等防护机制。"
},
{
  "id": "PJ093",
  "type": "judge",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6地址规划时建议为每类业务预留连续地址块，便于后续汇总与策略部署。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "IPv6地址空间巨大，规划时应按区域或业务划分连续地址块，便于路由汇总和ACL策略编写。合理的层次化规划也能简化后续扩容与运维。"
},
{
  "id": "PJ094",
  "type": "multi",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6地址规划通常应遵循的原则包括哪些？",
  "options": ["层次化分配，便于路由汇总", "为业务或区域预留连续地址空间", "接口标识尽量保持规划一致性", "尽量随机分配地址以便隐藏网络结构"],
  "answer": ["A", "B", "C"],
  "explain": "IPv6规划强调层次化、连续性和一致性，以支持汇总与简化运维。随机分配地址会破坏汇总能力并增加运维难度，不属于规划原则。"
},
{
  "id": "PJ095",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "NAT-PT技术相比NAT64的主要不足是？",
  "options": ["完全不支持地址转换", "只能用于IPv6到IPv6的转换", "需要维护复杂的地址映射且难以支持所有应用，实际应用受限", "必须依赖MPLS网络"],
  "answer": "C",
  "explain": "NAT-PT同时做协议与地址转换，需要维护状态映射并对部分应用不友好，扩展性差，因此已被NAT64/DNS64方案逐步取代。NAT-PT并非不支持转换。"
},
{
  "id": "PJ096",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "在双栈网络中，若设备通过DNS查询同时获得了A记录和AAAA记录，通常优先尝试使用哪种协议通信？",
  "options": ["优先使用IPv6", "优先使用IPv4", "随机选择其一", "同时发送两份报文"],
  "answer": "A",
  "explain": "根据RFC 6724的地址选择规则，在同样可达的情况下优先选择IPv6地址。若IPv6连接失败再回退到IPv4，以保证访问成功率。"
},
{
  "id": "PJ097",
  "type": "single",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "关于IPv6 over IPv4隧道与IPv4 over IPv6隧道，下列说法正确的是？",
  "options": ["两者完全等价，只是名称不同", "前者用于让IPv6报文穿越IPv4网络，后者用于让IPv4报文穿越IPv6网络", "前者用于让IPv4报文穿越IPv6网络", "两者都只能承载二层报文"],
  "answer": "B",
  "explain": "IPv6 over IPv4表示外层封装为IPv4、内层承载IPv6，用于IPv6孤岛穿越IPv4骨干。IPv4 over IPv6则相反，用于IPv4报文穿越IPv6网络，方向上正好相反。"
},
{
  "id": "PJ098",
  "type": "fill",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "使用EUI-64方式生成IPv6接口标识时，需要在48位MAC地址中间插入______这四个十六进制字符。",
  "options": [],
  "answer": ["FFFE"],
  "explain": "EUI-64在MAC地址的前24位与后24位之间插入FFFE，从而将48位扩展为64位。之后还需翻转第一个字节的第7位U/L位。"
},
{
  "id": "PJ099",
  "type": "fill",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "IPv6规定链路的MTU最小不能小于______字节，所有节点都必须能够处理不小于该长度的报文。",
  "options": [],
  "answer": ["1280"],
  "explain": "IPv6要求所有链路的最小MTU为1280字节，这是节点必须支持的下限。小于该值的链路必须通过分片与重组机制在链路层进行适配。"
},
{
  "id": "PJ100",
  "type": "fill",
  "chapter": "IPv6进阶与过渡技术",
  "stem": "RA报文中，将______标志位置1可提示主机使用有状态DHCPv6获取IPv6地址。",
  "options": [],
  "answer": ["M"],
  "explain": "M位即Managed Address Configuration标志，置1表示主机应通过有状态DHCPv6获取地址。与之对应的O位置1表示通过DHCPv6获取DNS等其他配置信息。"
},
{
  "id": "PJ101",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "802.11ax标准对应的Wi-Fi代际名称是？",
  "options": ["Wi-Fi 4", "Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 7"],
  "answer": "C",
  "explain": "802.11ax被命名为Wi-Fi 6，802.11n为Wi-Fi 4，802.11ac为Wi-Fi 5。Wi-Fi 6在高密场景下引入了OFDMA与MU-MIMO等特性以提升并发效率。"
},
{
  "id": "PJ102",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "802.11ac标准工作在哪个频段？",
  "options": ["仅2.4GHz", "仅5GHz", "同时支持2.4GHz和5GHz", "60GHz"],
  "answer": "B",
  "explain": "802.11ac只工作在5GHz频段，通过更宽的信道绑定和更高阶调制提升速率。802.11n则同时支持2.4GHz和5GHz两个频段。"
},
{
  "id": "PJ103",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "2.4GHz频段相比5GHz频段的主要劣势是？",
  "options": ["穿墙能力弱", "覆盖范围小", "不支持802.11n", "干扰大、可用信道少、速率上限较低"],
  "answer": "D",
  "explain": "2.4GHz频段只有3个互不重叠信道，且微波炉、蓝牙等设备众多，干扰严重，速率上限也低于5GHz。但其波长较长，穿墙能力和覆盖范围优于5GHz。"
},
{
  "id": "PJ104",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "5GHz频段相比2.4GHz频段的主要优势是？",
  "options": ["穿墙能力更强", "可用信道多、干扰小、速率更高", "覆盖范围更广", "设备兼容性更好"],
  "answer": "B",
  "explain": "5GHz频段可用信道数量多、非重叠信道丰富，受到的外部干扰小，且支持更宽的频宽以获得更高吞吐。代价是波长较短，穿墙与覆盖能力弱于2.4GHz。"
},
{
  "id": "PJ105",
  "type": "multi",
  "chapter": "WLAN基础",
  "stem": "关于2.4GHz频段的信道规划，下列描述正确的有哪些？",
  "options": ["在中国2.4GHz共有13个可用信道", "互不干扰的信道组合通常选用1、6、11", "相邻信道之间会存在频率重叠", "所有13个信道均可同时使用而不互相干扰"],
  "answer": ["A", "B", "C"],
  "explain": "2.4GHz每个信道带宽20MHz、间隔5MHz，因此相邻信道必然重叠。国内可用13个信道，工程上通常选用1、6、11三个互不重叠的信道进行规划。"
},
{
  "id": "PJ106",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "在2.4GHz频段进行多AP信道规划时，通常选用的三个互不干扰信道是？",
  "options": ["1、2、3", "1、5、9", "1、6、11", "2、7、12"],
  "answer": "C",
  "explain": "1、6、11三个信道之间相隔5个信道，中心频率间隔25MHz，超出20MHz带宽因而互不重叠。这是2.4GHz频段最常用的三信道复用方案。"
},
{
  "id": "PJ107",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "胖AP（FAT AP）的主要特点是？",
  "options": ["必须由AC统一下发配置", "每台AP独立配置和管理，不依赖AC", "只能作为无线客户端使用", "不支持SSID配置"],
  "answer": "B",
  "explain": "胖AP具备完整的配置与管理功能，可独立工作，无需AC配合。它适合AP数量很少的小型网络，但数量增多时配置与维护工作量大。"
},
{
  "id": "PJ108",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "瘦AP（FIT AP）的工作方式是？",
  "options": ["完全独立工作，不依赖任何集中设备", "只能工作在2.4GHz频段", "自身配置简单，由AC统一管理和下发配置", "不能承载用户数据流量"],
  "answer": "C",
  "explain": "瘦AP出厂配置简单，启动后通过CAPWAP与AC建立隧道，由AC统一下发配置并管理。这种架构适合AP数量较多的场景，便于集中运维。"
},
{
  "id": "PJ109",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "在AP数量较多、需要统一管理和漫游的园区场景中，通常采用AC+FIT AP的架构。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "AC+FIT AP架构可对大量AP进行集中配置、射频调优和统一认证，并支持终端在AP之间无缝漫游。相比逐台配置胖AP，该架构的运维效率明显更高。"
},
{
  "id": "PJ110",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "CAPWAP协议中，控制隧道使用的UDP端口号是？",
  "options": ["5247", "5246", "4789", "1812"],
  "answer": "B",
  "explain": "CAPWAP控制隧道使用UDP端口5246，用于传递配置下发、状态上报等控制报文。数据隧道使用UDP端口5247，用于承载用户数据流量。"
},
{
  "id": "PJ111",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "CAPWAP协议中，数据隧道使用的UDP端口号是？",
  "options": ["5246", "4789", "4500", "5247"],
  "answer": "D",
  "explain": "CAPWAP数据隧道使用UDP端口5247，承载经过封装转发的用户数据报文。控制隧道使用5246，两者相互独立，便于分别处理控制与数据流量。"
},
{
  "id": "PJ112",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "CAPWAP隧道建立过程中，AP在发现阶段发送的用于寻找AC的报文是？",
  "options": ["Join Request", "Configuration Status Request", "Discovery Request", "Echo Request"],
  "answer": "C",
  "explain": "AP首先发送Discovery Request报文寻找可用AC，AC以Discovery Response回应。随后AP选择AC发送Join Request加入，再进行配置下发与隧道建立。"
},
{
  "id": "PJ113",
  "type": "multi",
  "chapter": "WLAN基础",
  "stem": "CAPWAP隧道的建立过程通常包含下列哪些阶段？",
  "options": ["AP发现AC", "AP向AC发起加入请求", "AC向AP下发配置并建立数据隧道", "AP直接向终端广播配置信息"],
  "answer": ["A", "B", "C"],
  "explain": "CAPWAP建立依次经过发现、加入、配置下发与隧道建立等阶段。AP不会向终端广播配置信息，终端与AC的交互通过标准802.11和上层协议完成。"
},
{
  "id": "PJ114",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "CAPWAP协议运行在UDP之上，其中控制报文和数据报文分别使用5246和5247端口。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "CAPWAP基于UDP承载，控制隧道使用5246端口，数据隧道使用5247端口。两类隧道分离设计，便于对控制与数据流量分别做QoS和安全策略。"
},
{
  "id": "PJ115",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "SSID在WLAN中表示的含义是？",
  "options": ["AP的物理MAC地址", "AP的射频编号", "用户的数据加密密钥", "无线网络的名称，供用户识别和接入"],
  "answer": "D",
  "explain": "SSID是无线网络的名称，终端扫描后看到并可选择接入的就是SSID。它可由管理员自定义，长度最多32个字符，与AP的物理地址无关。"
},
{
  "id": "PJ116",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "BSSID在WLAN中通常指的是？",
  "options": ["无线网络的名称", "AP上某个射频的MAC地址，用于唯一标识一个基本服务集", "用户的认证账号", "无线信号的强度值"],
  "answer": "B",
  "explain": "BSSID用于唯一标识一个基本服务集，通常对应AP某个射频的MAC地址。SSID是对用户可见的网络名称，两者概念不同，多个BSSID可以共用同一个SSID。"
},
{
  "id": "PJ117",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "ESSID与BSSID的区别在于？",
  "options": ["ESSID是AP的MAC地址", "BSSID是网络名称", "两者完全相同，没有区别", "ESSID标识一个扩展服务集，多个BSS可通过相同ESSID组成同一逻辑网络"],
  "answer": "D",
  "explain": "ESSID用于标识由多个AP组成的扩展服务集，用户在同一ESSID覆盖范围内可以实现漫游。BSSID则是单个AP射频的标识，粒度更细。"
},
{
  "id": "PJ118",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "多个AP只要都开启无线功能，即使配置的SSID和安全参数不同，终端也能在它们之间无缝漫游。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "漫游要求相邻AP使用相同的SSID与一致的安全认证参数，终端才会把它们视为同一逻辑网络。若SSID或密钥不同，终端需要重新关联甚至重新认证，无法实现无缝漫游。"
},
{
  "id": "PJ119",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "下列无线安全协议中，安全性最差、已不推荐使用的是？",
  "options": ["WPA2-PSK", "WEP", "WPA3", "WPA2-802.1X"],
  "answer": "B",
  "explain": "WEP使用的RC4加密与静态密钥机制已被证明容易被破解，早已不推荐使用。WPA2采用AES-CCMP，WPA3进一步增强了加密与密钥协商安全。"
},
{
  "id": "PJ120",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "WPA3相比WPA2在安全性上的主要增强是？",
  "options": ["取消了加密机制", "仅支持开放认证", "降低了密钥长度", "引入SAE对等实体同时认证，抵御离线字典攻击"],
  "answer": "D",
  "explain": "WPA3使用SAE（对等实体同时认证）替代WPA2-PSK的四次握手，可有效抵御离线字典攻击。此外WPA3还提供前向保密和更强的开放网络安全保护。"
},
{
  "id": "PJ121",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "WLAN中采用PSK预共享密钥方式认证的特点是？",
  "options": ["每个用户使用独立账号密码", "必须部署认证服务器", "无需任何加密", "所有用户使用相同的密钥，部署简单但密钥管理较粗放"],
  "answer": "D",
  "explain": "PSK方式下所有接入用户共享同一个预共享密钥，配置简单，适合家庭和小型办公场景。缺点是一旦密钥泄露需要全网更换，无法做到用户级审计。"
},
{
  "id": "PJ122",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "WLAN中802.1X认证方式的典型特点是？",
  "options": ["基于认证服务器为每个用户提供独立账号，支持精细权限控制", "所有用户共用一个密钥", "不需要任何服务器即可完成认证", "仅适用于开放网络"],
  "answer": "A",
  "explain": "802.1X采用基于端口的访问控制，配合RADIUS服务器为每个用户分配独立账号与权限。它适合企业场景，可实现用户级审计与差异化授权。"
},
{
  "id": "PJ123",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "WPA2-PSK方式下，同一SSID的每个接入用户都会获得一个互不相同的预共享密钥。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "PSK即预共享密钥，同一SSID下所有用户使用相同的密钥来派生各自的会话密钥。密钥本身并不因用户而异，这种方式部署简单但不利于按用户区分权限。"
},
{
  "id": "PJ124",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "802.11帧按功能划分，共有哪三种类型？",
  "options": ["单播帧、组播帧、广播帧", "管理帧、控制帧、数据帧", "请求帧、应答帧、确认帧", "上行帧、下行帧、双向帧"],
  "answer": "B",
  "explain": "802.11帧分为管理帧、控制帧和数据帧三大类。管理帧负责关联、认证、扫描等管理功能，控制帧负责信道占用与确认，数据帧承载用户数据。"
},
{
  "id": "PJ125",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "下列802.11帧中，属于控制帧的是？",
  "options": ["Beacon帧", "Probe Request帧", "RTS/CTS", "Association Request帧"],
  "answer": "C",
  "explain": "RTS与CTS是典型的控制帧，用于预约信道、缓解隐藏终端问题。Beacon、Probe Request、Association Request都属于管理帧。"
},
{
  "id": "PJ126",
  "type": "multi",
  "chapter": "WLAN基础",
  "stem": "下列哪些属于802.11的管理帧？",
  "options": ["Beacon帧", "Probe Request帧", "Association Response帧", "ACK帧"],
  "answer": ["A", "B", "C"],
  "explain": "Beacon用于周期广播网络信息，Probe Request用于主动扫描，Association Response用于关联应答，均属于管理帧。ACK是确认帧，属于控制帧。"
},
{
  "id": "PJ127",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "AP通过PoE供电方式的特点是？",
  "options": ["必须额外敷设电源线", "通过以太网线同时传输数据和电力，无需单独电源适配器", "只能为AP提供数据不能供电", "仅适用于胖AP"],
  "answer": "B",
  "explain": "PoE通过以太网线同时传输数据与电力，AP无需再单独敷设电源，便于天花板等位置安装。常见标准包括802.3af与802.3at，供电功率有所不同。"
},
{
  "id": "PJ128",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "PoE+（802.3at）相比PoE（802.3af）的主要提升是？",
  "options": ["单端口可提供的供电功率更高", "只能传输数据不能供电", "使用的网线类型不同", "完全取消了供电协商过程"],
  "answer": "A",
  "explain": "802.3af单端口供电约15.4W，而802.3at（PoE+）可提供约30W，能支持更高功耗的AP或支持更多射频。两者都使用标准以太网线并需要供电协商。"
},
{
  "id": "PJ129",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "无线天线增益的含义是？",
  "options": ["天线放大设备发射总功率的能力", "天线接收数据的速率", "天线将能量集中于特定方向的能力，增益越高方向性越强", "天线的工作频段范围"],
  "answer": "C",
  "explain": "天线增益描述天线在特定方向上集中辐射能量的能力，属于无源器件的方向性指标。增益越高波瓣越窄，覆盖距离更远但角度更小，并不增加总发射功率。"
},
{
  "id": "PJ130",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "天线增益越高，其覆盖方向角通常越窄，适合用于远距离定向覆盖。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "高增益天线通过把能量集中在较窄的波束中来提升特定方向的距离，因此方向角较小。它适合走廊、桥接等定向覆盖场景，不适合需要全向覆盖的区域。"
},
{
  "id": "PJ131",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "WLAN中的漫游指的是？",
  "options": ["AP自动重启的过程", "AC切换管理服务器的过程", "终端在同一ESSID覆盖的不同AP之间移动时保持业务不中断", "终端重新获取IP地址的过程"],
  "answer": "C",
  "explain": "漫游指终端在属于同一扩展服务集的AP之间移动时，自动切换关联AP并保持上层业务不中断。二层漫游在同一子网内切换，三层漫游则跨子网并需保持IP不变。"
},
{
  "id": "PJ132",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "为实现较好的漫游体验，相邻AP的覆盖区域应如何规划？",
  "options": ["完全不重叠，彼此留有明显盲区", "尽量完全重合以提高信号强度", "无需考虑覆盖范围", "保持适当的信号重叠区域"],
  "answer": "D",
  "explain": "相邻AP之间需要一定比例的信号重叠，终端才能在离开原AP前发现并切换到新AP。重叠过小会出现盲区导致掉线，重叠过大会增加同频干扰。"
},
{
  "id": "PJ133",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "WLAN直连式组网的特点是？",
  "options": ["AP旁挂在接入交换机上，AC不在转发路径中", "AP直接连接到AC，数据与控制流量均经过AC", "AP必须通过无线方式连接AC", "AC与AP之间无需任何网络连接"],
  "answer": "B",
  "explain": "直连式组网中AP直接接入AC的端口，AC同时承担管理与数据转发职责。其结构简单、转发路径清晰，但AC端口数量限制了可接入的AP规模。"
},
{
  "id": "PJ134",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "WLAN旁挂式组网的特点是？",
  "options": ["AC必须串接在所有AP的上行链路中", "AP直接连在AC的物理端口上", "AC旁挂在汇聚或核心交换机上，仅管理AP，数据可由接入交换机直接转发", "不需要AC即可完成管理"],
  "answer": "C",
  "explain": "旁挂式组网中AC旁挂于汇聚或核心设备，通过CAPWAP管理AP，实际数据可由接入交换机直接转发，减轻AC压力。该方式便于扩容，是大中型园区常见组网。"
},
{
  "id": "PJ135",
  "type": "multi",
  "chapter": "WLAN基础",
  "stem": "关于AC的隧道转发与直接转发两种模式，下列描述正确的有哪些？",
  "options": ["隧道转发模式下用户数据封装在CAPWAP隧道中经AC转发", "直接转发模式下用户数据由接入交换机直接转发，不经过AC", "隧道转发便于对用户流量做集中控制与策略", "直接转发模式下AC完全不参与AP管理"],
  "answer": ["A", "B", "C"],
  "explain": "隧道转发将数据封装后送至AC，便于集中管控但AC压力较大。直接转发让数据在接入侧转发，减轻AC负担，但AC仍然负责AP的管理与控制。"
},
{
  "id": "PJ136",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "AC的隧道转发模式相比直接转发模式的主要优势是？",
  "options": ["完全不需要占用AC的处理资源", "无需建立CAPWAP隧道", "用户流量集中经过AC，便于统一策略控制与安全管控", "AP可以脱离AC独立运行"],
  "answer": "C",
  "explain": "隧道转发把用户数据统一汇聚到AC处理，便于实施集中安全策略、QoS与流量审计。其代价是AC转发压力大，需要更高性能的AC设备。"
},
{
  "id": "PJ137",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "在AC的直接转发模式下，用户数据报文不经过AC，但AP仍由AC统一管理。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "直接转发只改变用户数据的转发路径，使其在接入交换机侧直接转发，不进入CAPWAP数据隧道。AP的配置下发、状态监控等管理功能仍由AC通过控制隧道完成。"
},
{
  "id": "PJ138",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "WLAN射频调优的主要目的是？",
  "options": ["提升AP的PoE供电电压", "自动调整AP的信道和发射功率，减少干扰并优化覆盖", "修改SSID的名称", "增加AP的MAC地址数量"],
  "answer": "B",
  "explain": "射频调优通过自动分配信道与调整功率，降低同频与邻频干扰，改善覆盖与容量。华为AC支持自动调优与手动调优，通常在业务低谷期执行以避免影响用户。"
},
{
  "id": "PJ139",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "关于WLAN射频调优的执行时间，较合理的做法是？",
  "options": ["必须选择业务高峰期执行", "调优期间用户必然断网，因此不可调优", "选择业务空闲时段执行，避免调优过程中影响用户体验", "只能每台AP手工单独执行，不支持自动"],
  "answer": "C",
  "explain": "调优过程中AP可能切换信道或调整功率，短时影响接入体验，因此通常安排在业务空闲时段。华为AC支持定时自动调优，也可手动触发。"
},
{
  "id": "PJ140",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "华为WLAN产品体系中，AC的主要作用是？",
  "options": ["替代交换机完成有线接入", "仅提供无线信号放大功能", "为AP提供PoE供电", "集中管理AP并控制无线用户的接入与转发策略"],
  "answer": "D",
  "explain": "AC负责AP的集中管理、配置下发、射频调优以及无线用户的认证与转发策略控制。PoE供电由交换机或供电设备提供，信号放大由天线或功放完成。"
},
{
  "id": "PJ141",
  "type": "multi",
  "chapter": "WLAN基础",
  "stem": "下列哪些属于WLAN部署中需要重点关注的规划要素？",
  "options": ["信道规划与功率设置", "覆盖范围与容量估算", "SSID与安全认证方式选择", "AP外壳的颜色"],
  "answer": ["A", "B", "C"],
  "explain": "WLAN规划需关注信道与功率、覆盖与容量、SSID与安全策略等要素。AP外壳颜色不影响无线性能，不属于网络规划要素。"
},
{
  "id": "PJ142",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "802.11n标准相比802.11g的主要改进是？",
  "options": ["仅把频段改为5GHz", "引入MIMO多天线技术并支持40MHz频宽，速率大幅提升", "取消了加密机制", "将最大速率限制在11Mbps"],
  "answer": "B",
  "explain": "802.11n引入MIMO多入多出、信道绑定与帧聚合等技术，速率相比802.11g显著提升。802.11n可工作于2.4GHz和5GHz两个频段。"
},
{
  "id": "PJ143",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "802.11b标准工作的频段和最高速率分别是？",
  "options": ["5GHz，54Mbps", "2.4GHz，54Mbps", "2.4GHz，11Mbps", "5GHz，11Mbps"],
  "answer": "C",
  "explain": "802.11b工作在2.4GHz频段，最高速率为11Mbps。802.11a工作在5GHz且最高54Mbps，802.11g工作在2.4GHz且最高54Mbps。"
},
{
  "id": "PJ144",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "802.11ax只能工作在2.4GHz频段，不支持5GHz频段。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "802.11ax（Wi-Fi 6）可同时工作在2.4GHz和5GHz频段，后续的Wi-Fi 6E还扩展到6GHz。只支持2.4GHz的是802.11b这类早期标准。"
},
{
  "id": "PJ145",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "在WLAN中，终端主动发送Probe Request帧进行扫描的方式称为？",
  "options": ["被动扫描", "主动扫描", "漫游扫描", "信道扫描"],
  "answer": "B",
  "explain": "主动扫描由终端主动发送Probe Request，AP以Probe Response回应，发现速度快但会产生额外报文。被动扫描则是终端静默监听AP周期性发送的Beacon帧。"
},
{
  "id": "PJ146",
  "type": "single",
  "chapter": "WLAN基础",
  "stem": "AP周期发送Beacon帧的作用是？",
  "options": ["为终端分配IP地址", "完成用户的身份认证", "宣告无线网络的存在并广播网络参数", "对用户数据进行加密"],
  "answer": "C",
  "explain": "Beacon帧周期性广播SSID、支持的速率、安全能力等参数，使终端能够被动发现网络。IP地址分配由DHCP完成，身份认证由安全机制完成，均不属于Beacon的职责。"
},
{
  "id": "PJ147",
  "type": "fill",
  "chapter": "WLAN基础",
  "stem": "CAPWAP协议的控制隧道使用UDP端口______，用于传递控制类报文。",
  "options": [],
  "answer": ["5246"],
  "explain": "CAPWAP控制隧道使用UDP 5246，负责AP与AC之间的配置下发和状态上报。数据隧道使用UDP 5247，用于承载用户业务数据。"
},
{
  "id": "PJ148",
  "type": "fill",
  "chapter": "WLAN基础",
  "stem": "在2.4GHz频段的信道规划中，通常选用1、6和______这三个互不重叠的信道。",
  "options": [],
  "answer": ["11"],
  "explain": "2.4GHz每个信道带宽20MHz、间隔5MHz，1、6、11三个信道中心频率相隔25MHz，互不重叠。这种三信道复用方式可有效降低同频干扰。"
},
{
  "id": "PJ149",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "WEP加密方式由于存在严重安全缺陷，目前已不推荐在生产网络中使用。",
  "options": ["正确", "错误"],
  "answer": "T",
  "explain": "WEP采用静态密钥与较弱的RC4实现，存在IV重用等问题，可在较短时间内被破解。生产网络应使用WPA2或WPA3等更安全的加密与认证方式。"
},
{
  "id": "PJ150",
  "type": "judge",
  "chapter": "WLAN基础",
  "stem": "在AC+FIT AP架构中，AP的配置文件保存在AP本地，AC无法对其配置进行统一下发。",
  "options": ["正确", "错误"],
  "answer": "F",
  "explain": "瘦AP的配置由AC统一下发，AP本地只保留少量基础信息如AC地址。AP启动后通过CAPWAP与AC建立连接并获取配置，因此该说法错误。"
}
];