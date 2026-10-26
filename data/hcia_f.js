window.BANK_HCIA_F = [
  {
    "id": "HF001",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备的路由表中，Destination/Mask 字段表示的含义是？",
    "options": ["下一跳设备的接口地址", "该路由的度量值", "报文的目的网络地址及掩码长度", "该路由的出接口编号"],
    "answer": "C",
    "explain": "Destination/Mask 描述的是目的网络/掩码，例如 192.168.1.0/24。它用于与报文目的IP做最长匹配。下一跳和出接口由 NextHop 与 Interface 字段描述。"
  },
  {
    "id": "HF002",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由表中 Proto 字段显示为 Static，说明该路由的来源是？",
    "options": ["管理员手工配置的静态路由", "直连路由", "OSPF 动态学习到的路由", "从邻居 BGP 学到的路由"],
    "answer": "A",
    "explain": "Proto（Protocol）表示路由协议或来源，Static 表示静态路由，Direct 表示直连，OSPF/RIP/ISIS/BGP 表示相应动态协议。静态路由由管理员手工配置，不会自动变化。"
  },
  {
    "id": "HF003",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于路由表中各字段的含义，下列说法正确的有？",
    "options": ["Destination/Mask 表示目的网络地址与掩码长度", "Proto 表示该路由的来源或协议类型", "Pre 表示路由优先级，数值越小越优", "Cost 表示该路由的老化时间，单位是秒"],
    "answer": ["A", "B", "C"],
    "explain": "Destination/Mask 描述目的网络与掩码，Proto 描述路由来源，Pre 描述优先级且数值小者优，Cost 表示度量值而非老化时间，因此选项D错误。"
  },
  {
    "id": "HF004",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "当两条路由的目的网络与掩码都相同、优先级也相同时，路由器将依据什么选路？",
    "options": ["比较路由的度量值 Cost，小者优先", "比较出接口编号，小者优先", "比较下一跳IP地址，小者优先", "随机选择一条，另一条丢弃"],
    "answer": "A",
    "explain": "掩码与优先级都相同时进入第三级比较，即度量值 Cost 小者优先。若 Cost 也相同则形成等价路由，可进行负载分担，而不是随机丢弃。"
  },
  {
    "id": "HF005",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "华为设备上直连路由的默认优先级（Preference）为0，是所有路由来源中最优先的。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "华为设备直连路由优先级默认值为0，是所有来源中最优的。静态路由默认60，OSPF默认10，RIP默认100，BGP默认255，数值越小越优先。"
  },
  {
    "id": "HF006",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备中，OSPF 路由的默认优先级数值是？",
    "options": ["15", "60", "10", "100"],
    "answer": "C",
    "explain": "华为设备中 OSPF 的默认优先级为10，IS-IS 为15，静态为60，RIP 为100。优先级数值越小越优先。"
  },
  {
    "id": "HF007",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列关于华为设备各路由协议默认优先级的描述，正确的有？",
    "options": ["直连路由的默认优先级为0", "OSPF 路由的默认优先级为10，IS-IS 为15", "静态路由的默认优先级为60，RIP 为100", "BGP 路由的默认优先级为150"],
    "answer": ["A", "B", "C"],
    "explain": "默认优先级由小到大为：直连0、OSPF 10、IS-IS 15、静态60、RIP 100、BGP 255。BGP的默认优先级是255而不是150，因此选项D错误。"
  },
  {
    "id": "HF008",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "华为设备中路由优先级 Preference 的取值范围是0～255，且数值越小表示优先级越高。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "优先级 Preference 的取值范围是0～255的整数，数值越小优先级越高。管理员可手工修改静态路由的优先级以实现备份。"
  },
  {
    "id": "HF009",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由器收到目的地址为 10.1.1.1 的报文，路由表中存在 10.1.1.0/30 与 10.1.0.0/16 两条路由，其他条件相同，路由器会选择？",
    "options": ["10.1.1.0/30 的路由", "10.1.0.0/16 的路由", "两条都选，做负载分担", "两条都不选，直接丢弃报文"],
    "answer": "A",
    "explain": "最长掩码匹配优先，/30 掩码长于 /16，因此优选 10.1.1.0/30。只有当掩码长度相同才继续比较优先级和度量值。"
  },
  {
    "id": "HF010",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "默认路由 0.0.0.0/0 在路由表中最显著的特征是？",
    "options": ["掩码长度为32，只匹配主机地址", "只能由动态路由协议生成", "只在没有直连路由时才会生成", "掩码长度为0，匹配任意目的地址但在最长匹配中最不优先"],
    "answer": "D",
    "explain": "0.0.0.0/0 掩码长度为0，可以匹配任意目的网络，但在最长匹配原则下它是最不具体的路由，只有在没有更精确匹配时才被使用。"
  },
  {
    "id": "HF011",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列关于路由选路三原则的描述，正确的有？",
    "options": ["先比较掩码长度，最长掩码匹配优先", "掩码长度相同时比较优先级 Preference，数值小者优先", "优先级相同时比较度量值 Cost，数值小者优先", "优先级相同时比较 Cost，数值大者优先"],
    "answer": ["A", "B", "C"],
    "explain": "路由选路先最长掩码匹配，再比 Preference 小者优，最后比 Cost 小者优。Cost 是比较小者优先，因此选项D错误。"
  },
  {
    "id": "HF012",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备上，当两条路由的掩码长度与优先级都相同时，度量值 Cost 较小的那条会被优先选中。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "路由选路顺序为最长掩码匹配、优先级小者优、度量值小者优。掩码与优先级都相同时比较Cost，数值小者被优选，因此该说法正确。"
  },
  {
    "id": "HF013",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "某台路由器配置了 `ip route-static 0.0.0.0 0.0.0.0 192.168.1.2`，该配置的作用是？",
    "options": ["配置一条指向 192.168.1.2 的默认路由", "配置一条到 192.168.1.2 的主机路由", "禁止所有目的为 192.168.1.2 的流量", "配置一条等价负载分担路由"],
    "answer": "A",
    "explain": "掩码为0.0.0.0表示默认路由，下一跳为192.168.1.2。当没有更精确匹配时，报文将转发给该下一跳。"
  },
  {
    "id": "HF014",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于特定主机路由（/32）与默认路由（0.0.0.0/0），下列说法正确的有？",
    "options": ["特定主机路由的掩码为255.255.255.255", "默认路由的掩码长度为0，可匹配任意目的地址", "报文同时匹配两者时优选特定主机路由", "特定主机路由必须由动态路由协议产生"],
    "answer": ["A", "B", "C"],
    "explain": "特定主机路由掩码为/32即255.255.255.255，默认路由掩码长度为0。按最长掩码匹配原则优选/32。静态路由同样可以配置为/32的主机路由，因此选项D错误。"
  },
  {
    "id": "HF015",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "浮动静态路由实现备份的原理是？",
    "options": ["把备份静态路由的Cost调大，与主路由形成负载分担", "把备份静态路由的掩码调长，使其优先被匹配", "把备份静态路由配置为NULL0接口，防止环路", "把备份静态路由的优先级调大，使其在主路由失效后才生效"],
    "answer": "D",
    "explain": "浮动静态路由通过把备份路由的 preference 设置得比主路由大（数值大、优先级低），使正常情况下不进入转发表；主路由失效后备份路由才生效。"
  },
  {
    "id": "HF016",
    "type": "fill",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备上配置浮动静态路由时，需要在命令末尾使用 ______ 参数指定优先级。",
    "options": [],
    "answer": ["preference"],
    "explain": "浮动静态路由使用 preference 参数指定优先级，例如 `ip route-static 10.1.1.0 24 10.0.0.2 preference 100`。数值越大优先级越低，主路由失效后备份路由才生效。"
  },
  {
    "id": "HF017",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "配置静态路由时，关于下一跳与出接口的写法，下列描述正确的有？",
    "options": ["只指定出接口时，设备需要通过ARP或对端地址解析获得下一跳", "只指定下一跳时，设备需要递归查找出接口", "同时指定出接口和下一跳是最完整的写法，推荐使用", "静态路由必须同时指定出接口和下一跳，否则无法生效"],
    "answer": ["A", "B", "C"],
    "explain": "静态路由可以只写出接口、只写下一跳或两者都写。只写出接口在以太网等广播网络中需要解析下一跳，只写下一跳需要递归查表得到出接口。两者都写最明确，因此推荐。"
  },
  {
    "id": "HF018",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于以太网链路上配置静态路由，下列说法正确的是？",
    "options": ["必须指定下一跳地址，因为以太网是广播网络需要地址解析", "只能指定出接口，不能指定下一跳地址", "出接口和下一跳都不能指定，由ARP自动生成", "以太网链路不支持静态路由配置"],
    "answer": "A",
    "explain": "以太网为广播型网络，同一出接口可能对应多个邻居，因此必须通过下一跳地址进行ARP解析才能封装二层帧。点到点串口则可只指定出接口。"
  },
  {
    "id": "HF019",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "点对点串行链路上配置静态路由时，通常可以直接指定出接口而无需指定下一跳，原因是？",
    "options": ["串口链路不需要二层封装，直接转发三层报文", "串口链路会自动通过OSPF学到下一跳", "点到点链路只有唯一对端，从出接口发出的报文必定到达该对端", "串口链路的掩码固定为/32，无需下一跳"],
    "answer": "C",
    "explain": "点到点链路上出接口唯一对应一个对端，因此直接指定出接口即可完成转发，无需ARP解析下一跳。这是串口与以太网静态路由配置的主要差异。"
  },
  {
    "id": "HF020",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "什么是路由递归（迭代）？",
    "options": ["路由表中的路由被反复刷新覆盖的现象", "数据报文在环路中不断循环转发的现象", "多条路由互相指向对方形成的死循环", "路由的下一跳地址需要通过查表再次解析出出接口的过程"],
    "answer": "D",
    "explain": "当静态路由只指定下一跳时，路由器需要再查一次路由表，找到到达该下一跳的路由，从而确定真正的出接口和二层封装信息，这个过程称为路由递归或迭代。"
  },
  {
    "id": "HF021",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于NULL0接口与路由黑洞，下列说法正确的有？",
    "options": ["NULL0是设备内部的逻辑接口，发往它的报文被直接丢弃", "指向NULL0的静态路由可用于防止路由汇总引入的环路", "NULL0接口不需要物理线缆即可生效", "NULL0接口会把收到的报文原样回送给发送方"],
    "answer": ["A", "B", "C"],
    "explain": "NULL0是逻辑接口，收到报文后直接丢弃且不返回差错响应，常用于路由汇总场景防止环路。它不会回送报文，因此选项D错误。"
  },
  {
    "id": "HF022",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由汇总（路由聚合）的主要作用是？",
    "options": ["把多条明细路由合并为一条掩码更短的路由，减小路由表规模", "把一条路由拆分为多条主机路由，提高转发精度", "把静态路由自动转换为动态路由", "提高单条路由的优先级数值"],
    "answer": "A",
    "explain": "路由汇总将多条具有相同前缀的明细路由合并成一条掩码更短的汇总路由，从而减小路由表规模、降低设备资源消耗。汇总后需注意可能产生的环路，常配合NULL0路由。"
  },
  {
    "id": "HF023",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备上执行 `display ip routing-table`，输出中可能包含的字段有？",
    "options": ["Destination/Mask", "Proto", "Pre", "Cost"],
    "answer": ["A", "B", "C", "D"],
    "explain": "display ip routing-table 输出包含 Destination/Mask（目的网络/掩码）、Proto（协议）、Pre（优先级）、Cost（度量值）、NextHop（下一跳）、Interface（出接口）等字段。这些字段共同描述一条路由。"
  },
  {
    "id": "HF024",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "在路由表中，Proto 字段显示为 Direct 说明该路由的来源是？",
    "options": ["管理员手工配置的静态路由", "由动态路由协议学习到的路由", "直达网段的直连路由", "由BGP从邻居学习到的路由"],
    "answer": "C",
    "explain": "Proto 字段中的 Direct 表示直连路由，即目的网段直接连接在本设备的接口上。静态路由显示为 Static，动态协议显示为 OSPF、RIP 等。"
  },
  {
    "id": "HF025",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由器实际转发报文时查询的是路由表RIB，而不是转发表FIB。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "路由表（RIB）保存设备学习到的所有路由信息，转发时设备查询的是由优选路由下发形成的转发表FIB。FIB中的条目是路由表优选后的结果，因此该说法错误。"
  },
  {
    "id": "HF026",
    "type": "fill",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备上，若要查看当前设备的路由表，应使用命令 display ip ______ 。",
    "options": [],
    "answer": ["routing-table"],
    "explain": "display ip routing-table 用于查看IPv4路由表。若要看具体某个目的地址的匹配情况，可以用 display ip routing-table 1.1.1.1。"
  },
  {
    "id": "HF027",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列关于缺省路由与缺省网关的说法，正确的是？",
    "options": ["缺省路由只能配置在主机上，不能配置在路由器上", "缺省网关就是路由器上配置的NULL0路由", "缺省路由与缺省网关是同一概念，没有任何区别", "缺省网关是主机侧的配置，指主机在无法匹配本地路由时发送报文的下一跳地址"],
    "answer": "D",
    "explain": "缺省网关是终端主机上的概念，主机把不匹配本地网段的报文交给网关。缺省路由是路由器上目的为0.0.0.0/0的路由条目，两者作用相似但所在设备和表现形式不同。"
  },
  {
    "id": "HF028",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于静态路由的特点，下列描述正确的有？",
    "options": ["由管理员手工配置，不占用CPU和带宽进行协议计算", "不会随网络拓扑变化自动收敛，需管理员干预", "适合小型网络或作为大型网络的备份路由", "可以根据网络变化自动计算并更新路由"],
    "answer": ["A", "B", "C"],
    "explain": "静态路由配置简单、不消耗协议报文资源，但不能自动适应拓扑变化，适合小型网络或备份场景。自动计算更新是动态路由协议的特点，因此选项D错误。"
  },
  {
    "id": "HF029",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备上删除静态路由时使用 undo 命令，且命令参数必须与原配置完全一致。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "华为VRP使用 undo 命令删除配置，删除静态路由时参数需与原配置完全一致。若配置时带了preference、cost等参数，删除时也应保持一致。"
  },
  {
    "id": "HF030",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "某路由表中有如下条目：目的 172.16.0.0/16 下一跳 10.0.0.2；目的 172.16.1.0/24 下一跳 10.0.0.3。报文目的地址为 172.16.1.100，将选择？",
    "options": ["10.0.0.3", "10.0.0.2", "两条等价，负载分担", "无匹配路由，丢弃"],
    "answer": "A",
    "explain": "172.16.1.100 同时匹配 /16 与 /24 两条路由，根据最长掩码匹配原则优选 /24，因此下一跳为 10.0.0.3。"
  },
  {
    "id": "HF031",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "直连路由出现在路由表中的条件是？",
    "options": ["只要接口配置了IP地址即可，与状态无关", "接口物理状态与协议状态均为Up且配置了IP地址", "只要接口物理状态为Up即可，无需配置IP地址", "必须配置静态路由后直连路由才会出现"],
    "answer": "B",
    "explain": "接口必须配置IP地址且物理层和协议层状态都为Up，其网段才会作为直连路由加入路由表。接口Down时直连路由会被撤销。"
  },
  {
    "id": "HF032",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "如果要为 192.168.0.0/24 配置一条指向下一跳 10.0.0.2、出接口 GigabitEthernet0/0/1 的静态路由，正确命令是？",
    "options": ["ip route-static 192.168.0.0 24 GigabitEthernet0/0/1 10.0.0.2", "ip route-static 192.168.0.0 24 10.0.0.2 GigabitEthernet0/0/1", "ip route-static 192.168.0.0 255.255.255.0 GigabitEthernet0/0/1", "ip route-static 192.168.0.0 24 Out-Interface GigabitEthernet0/0/1"],
    "answer": "A",
    "explain": "同时指定出接口和下一跳时，VRP命令格式为 `ip route-static 目的网络 掩码 出接口 下一跳`，即出接口写在下一跳之前。"
  },
  {
    "id": "HF033",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "静态路由的度量值 Cost 只能由协议自动计算，管理员无法在配置时手工指定。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "静态路由可通过 `cost` 参数手工指定度量值，例如 `ip route-static 10.1.1.0 24 10.0.0.2 cost 100`。当优先级相同时，Cost 会参与选路比较，因此该说法错误。"
  },
  {
    "id": "HF034",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于等价路由（ECMP）与负载分担，下列说法正确的有？",
    "options": ["形成等价路由要求目的网络、掩码、优先级与Cost都相同", "等价路由的下一跳可以不同", "等价路由可以实现流量的负载分担", "等价路由要求下一跳必须完全相同"],
    "answer": ["A", "B", "C"],
    "explain": "当目的网络、掩码、优先级和度量值全部相同而下一跳不同时，会形成等价路由并进行负载分担。若下一跳也完全相同则是同一条路由，因此选项D错误。"
  },
  {
    "id": "HF035",
    "type": "fill",
    "chapter": "IP路由基础与静态路由",
    "stem": "在路由器上配置丢弃路由时，出接口通常写为 ______ 逻辑接口。",
    "options": [],
    "answer": ["NULL0", "null0"],
    "explain": "Null0 是设备内部的逻辑接口，发往NULL0的报文会被直接丢弃。常用于配置路由黑洞防止环路，也可用于路由汇总场景。"
  },
  {
    "id": "HF036",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于路由优先级与度量值的区别，下列说法正确的有？",
    "options": ["优先级用于比较不同路由协议或来源之间的优劣", "度量值一般用于同一协议内部不同路径之间的比较", "优先级数值小者优，度量值同样是数值小者优", "优先级和度量值的取值范围都是0～255"],
    "answer": ["A", "B", "C"],
    "explain": "优先级比较的是不同来源（协议）的路由，度量值比较的是同一协议内的不同路径。两者都是越小越优。但度量值的取值范围不限于0～255，例如OSPF Cost可达16777215。"
  },
  {
    "id": "HF037",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "管理员希望某条静态路由仅作为备份，主路由为OSPF学习到的路由，则备份静态路由的preference应配置为？",
    "options": ["小于10的值，如5", "大于10的值，如100", "等于10的值", "等于0的值"],
    "answer": "B",
    "explain": "OSPF默认优先级为10，要让静态路由仅作备份，其preference须大于10（数值大优先级低），例如配置100。这样只有OSPF路由失效后静态路由才会生效。"
  },
  {
    "id": "HF038",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由器上执行 `display ip routing-table 10.1.1.1` 的作用是？",
    "options": ["查看所有包含该地址的路由明细列表", "测试到该地址的连通性并返回时延", "清除该地址对应的ARP表项", "查看设备到达该目的地址最终匹配的路由条目"],
    "answer": "D",
    "explain": "在 display ip routing-table 后跟具体IP地址，可查看该目的地址在路由表中最终匹配到的路由，便于验证选路结果。测试连通性应使用 ping 命令。"
  },
  {
    "id": "HF039",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由表中的 Pre 字段表示优先级，其数值越小表示该路由越优先被选中。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "Pre 即 Preference，表示路由优先级，数值越小越优先。它与度量值Cost是路由表中两个不同的字段，需注意区分。"
  },
  {
    "id": "HF040",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "在以太网链路上配置静态路由时，只指定出接口而不指定下一跳不会带来任何问题，是推荐做法。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "以太网为广播网络，只指定出接口时设备需要对每个目的地址进行ARP解析，可能产生大量ARP表项或被错误解析。因此在以太网上推荐同时指定下一跳地址，该说法错误。"
  },
  {
    "id": "HF041",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于路由汇总，下列说法正确的有？",
    "options": ["汇总可以把多条明细路由合并为掩码更短的一条路由", "汇总可以减小路由表的规模", "汇总后配合NULL0路由可避免因汇总覆盖不存在网段而产生的环路", "汇总后路由的掩码一定会变长"],
    "answer": ["A", "B", "C"],
    "explain": "路由汇总是把多条明细路由合并为掩码更短的路由，从而减小路由表规模。汇总路由的掩码变短而不是变长，因此选项D错误。"
  },
  {
    "id": "HF042",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由器上直连路由、静态路由、OSPF路由同时到达同一目的网络且掩码相同时，最终优选的顺序是？",
    "options": ["直连 > OSPF > 静态", "静态 > OSPF > 直连", "OSPF > 直连 > 静态", "静态 > 直连 > OSPF"],
    "answer": "A",
    "explain": "按默认优先级数值由小到大：直连0、OSPF 10、静态60，因此顺序为直连优于OSPF优于静态。数值小者优先。"
  },
  {
    "id": "HF043",
    "type": "fill",
    "chapter": "IP路由基础与静态路由",
    "stem": "在华为设备上配置默认路由时，目的网段与掩码均为全零，掩码部分可以简写为单个数字，即 ip route-static 0.0.0.0 ______ 下一跳地址，该数字是______。",
    "options": [],
    "answer": ["0","零"],
    "explain": "默认路由的目的地址与掩码都是全零，可匹配任意目的地址；掩码 0.0.0.0 可简写为 0，因此命令也可写作 ip route-static 0.0.0.0 0 下一跳地址。默认路由常用于指向出口网关。"
  },
  {
    "id": "HF044",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "下列哪些因素会导致路由表中的静态路由失效（被撤销）？",
    "options": ["静态路由的出接口物理状态变为Down", "静态路由的下一跳地址不可达且无法递归解析出出接口", "管理员手工删除了该静态路由配置", "路由表中的路由条目数量过多"],
    "answer": ["A", "B", "C"],
    "explain": "静态路由依赖出接口状态和下一跳可达性，接口Down或下一跳不可达时路由会被撤销；手工删除配置同样会移除路由。路由条目数量多不会导致失效。"
  },
  {
    "id": "HF045",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "R1 与 R2 直连互联，R1 上存在直连网段 192.168.1.0/24，R2 需要访问该网段，则 R2 上应配置？",
    "options": ["ip route-static 192.168.1.0 24 NULL0", "无需配置，路由会自动学习", "在R2的接口上配置192.168.1.1的从IP地址", "ip route-static 192.168.1.0 24 指向R1互联接口地址的下一跳"],
    "answer": "D",
    "explain": "静态路由需要双向配置，R2需要配置去往192.168.1.0/24的静态路由，下一跳为R1互联接口地址。同时R1也需要配置回程路由。"
  },
  {
    "id": "HF046",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于路由表中 Interface 字段，下列说法正确的是？",
    "options": ["它表示下一跳设备接收报文的接口", "它表示该路由的入接口，即报文进入本设备的接口", "它表示管理接口，仅用于网管登录", "它表示该路由对应的出接口，即报文从本设备发出的接口"],
    "answer": "D",
    "explain": "Interface 字段表示本设备转发该路由报文时的出接口，而不是入接口。入接口由报文的实际接收接口决定，不记录在路由表条目中。"
  },
  {
    "id": "HF047",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "静态路由无法实现负载分担，同一目的网络只能配置一条静态路由。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "在华为设备上可为同一目的网络配置多条下一跳不同的静态路由，条件（掩码、优先级、Cost）相同时形成等价路由，实现流量负载分担，因此该说法错误。"
  },
  {
    "id": "HF048",
    "type": "judge",
    "chapter": "IP路由基础与静态路由",
    "stem": "路由环路会导致报文在设备之间反复转发，从而消耗链路带宽和设备CPU资源。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "路由环路会使报文在两台或多台设备间循环转发，大量消耗带宽和CPU，最终导致链路拥塞和设备性能下降。IP报文的TTL机制可在一定程度上限制环路危害。"
  },
  {
    "id": "HF049",
    "type": "multi",
    "chapter": "IP路由基础与静态路由",
    "stem": "关于静态路由与动态路由的比较，下列说法正确的有？",
    "options": ["静态路由配置简单，不占用网络带宽和CPU资源", "动态路由能自动适应拓扑变化，收敛速度快", "大型网络中通常以动态路由为主，静态路由作为补充", "动态路由比静态路由更节省设备内存和CPU资源"],
    "answer": ["A", "B", "C"],
    "explain": "静态路由简单、无协议开销，但不能自适应拓扑变化。动态路由可以自动收敛，适合大型网络，但会占用一定的CPU、内存和带宽资源。"
  },
  {
    "id": "HF050",
    "type": "single",
    "chapter": "IP路由基础与静态路由",
    "stem": "某路由器路由表中有 0.0.0.0/0 指向 10.0.0.2，同时有 10.1.1.0/24 指向 10.0.0.3，报文目的地址为 10.1.1.5，则？",
    "options": ["匹配 0.0.0.0/0，从 10.0.0.2 转发", "匹配 10.1.1.0/24，从 10.0.0.3 转发", "两条路由等价，负载分担", "两条路由冲突，报文被丢弃"],
    "answer": "B",
    "explain": "10.1.1.5 同时匹配默认路由和 10.1.1.0/24，但 /24 掩码更长，根据最长掩码匹配原则优选 10.1.1.0/24，从 10.0.0.3 转发。"
  },
  {
    "id": "HF051",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 属于下列哪一类路由协议？",
    "options": ["距离矢量型内部网关协议", "链路状态型内部网关协议", "路径矢量型外部网关协议", "静态配置型路由协议"],
    "answer": "B",
    "explain": "OSPF（Open Shortest Path First）是基于链路状态算法的内部网关协议，使用SPF算法计算最短路径树。RIP是距离矢量协议，BGP是路径矢量协议。"
  },
  {
    "id": "HF052",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "OSPF 的三大特征包括？",
    "options": ["采用链路状态算法，每台路由器独立计算最短路径", "支持区域划分，可将大型网络分层管理", "基于SPF算法计算无环路的路径", "采用距离矢量算法，逐跳传递整张路由表"],
    "answer": ["A", "B", "C"],
    "explain": "OSPF的三大特征是链路状态算法、区域划分和采用SPF算法保证无环路。逐跳传递整张路由表是距离矢量协议（如RIP）的特征，因此选项D错误。"
  },
  {
    "id": "HF053",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 路由器 Router-ID 的手工配置命令是？",
    "options": ["ospf router-id 1.1.1.1", "router-id 1.1.1.1", "ospf 1 router-id 1.1.1.1", "ospf 1 id 1.1.1.1"],
    "answer": "C",
    "explain": "在系统视图下配置Router-ID的命令为 `ospf 1 router-id 1.1.1.1`，也可先进入 `ospf 1` 进程再执行 `router-id 1.1.1.1`。修改后需要重置OSPF进程才会生效。"
  },
  {
    "id": "HF054",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "若未手工配置 Router-ID，OSPF 将按照什么顺序选取 Router-ID？",
    "options": ["优先选取最小的Loopback接口地址，若无则选取最小的物理接口地址", "优先选取物理接口地址，若无则选取Loopback地址", "随机从所有接口地址中选择一个", "优先选取最大的Loopback接口地址，若无则选取最大的物理接口地址"],
    "answer": "D",
    "explain": "OSPF的Router-ID选举规则是：手工配置优先；未配置时选取最大的Loopback接口IP地址；若没有Loopback接口，则选取最大的物理接口IP地址。"
  },
  {
    "id": "HF055",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于OSPF的Router-ID，下列说法正确的有？",
    "options": ["Router-ID用于在OSPF域内唯一标识一台路由器", "手工配置的Router-ID优先级高于自动选取", "自动选取时优先使用Loopback接口地址", "Router-ID必须是设备上真实存在的接口地址"],
    "answer": ["A", "B", "C"],
    "explain": "Router-ID用于唯一标识路由器，选取顺序为手工配置优先，其次取最大的Loopback地址，再取最大的物理接口地址。它的格式与IP相同但不要求真实存在，因此选项D错误。"
  },
  {
    "id": "HF056",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "在广播型网络中，OSPF 的 Hello 报文发送间隔与邻居失效时间（Dead Time）分别是？",
    "options": ["30秒和120秒", "10秒和40秒", "5秒和20秒", "40秒和10秒"],
    "answer": "B",
    "explain": "广播型和P2P网络的Hello间隔为10秒，Dead时间为40秒。NBMA和P2MP网络的Hello间隔为30秒，Dead时间为120秒。"
  },
  {
    "id": "HF057",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 邻居失效时间（Dead Time）与 Hello 间隔的默认倍数关系是？",
    "options": ["Dead Time 是 Hello 间隔的2倍", "Dead Time 是 Hello 间隔的3倍", "Dead Time 是 Hello 间隔的4倍", "两者之间没有固定倍数关系"],
    "answer": "C",
    "explain": "默认情况下Dead Time为Hello间隔的4倍，例如广播网络中10秒Hello对应40秒Dead。若在Dead时间内未收到邻居的Hello报文，则认为邻居失效。"
  },
  {
    "id": "HF058",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "两台路由器即使Hello间隔与Dead时间不一致，只要区域ID相同就仍能正常建立OSPF邻居关系。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "建立OSPF邻居需要多个条件同时满足：区域ID一致、Hello与Dead定时器一致、认证方式与密码一致、接口MTU一致（ExStart阶段）、网络类型一致等。Hello和Dead定时器不一致会导致邻居无法建立，因此该说法错误。"
  },
  {
    "id": "HF059",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "在OSPF中，邻居（Neighbor）与邻接（Adjacency）的关系是？",
    "options": ["所有邻居关系都是邻接关系", "邻接是邻居关系发展到2-Way之后进一步建立起来的关系，邻居不一定形成邻接", "邻接关系比邻居关系更早建立", "邻居与邻接是同一个概念"],
    "answer": "B",
    "explain": "两台路由器通过Hello报文建立邻居关系后，在广播网络中DRother之间会停留在2-Way状态，不建立邻接；只有部分邻居对会进一步交换数据库形成邻接（Full状态）。"
  },
  {
    "id": "HF060",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "下列属于OSPF邻居状态机状态的有？",
    "options": ["Down", "Init", "2-Way", "Full"],
    "answer": ["A", "B", "C", "D"],
    "explain": "OSPF邻居状态机共有七种状态：Down、Init、2-Way、ExStart、Exchange、Loading、Full。选项中的四种都是其中的状态。"
  },
  {
    "id": "HF061",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 邻居状态机中，表示路由器已收到邻居的Hello报文但该Hello中未包含自己Router-ID的状态是？",
    "options": ["Down", "Init", "2-Way", "ExStart"],
    "answer": "B",
    "explain": "Init状态表示本端已收到邻居的Hello报文，但该报文中的邻居列表里没有本端Router-ID，说明单向通信。2-Way表示双向通信已建立。"
  },
  {
    "id": "HF062",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 邻居状态机中，2-Way 状态的含义是？",
    "options": ["双方正在进行主从关系选举", "双方正在交换链路状态数据库", "双方都收到了对方的Hello报文且报文中包含自己的Router-ID，实现双向通信", "双方的数据库已完全同步"],
    "answer": "C",
    "explain": "2-Way状态表示双向通信已建立，双方Hello报文中都包含对方的Router-ID。在广播网络中DRother之间会稳定停留在2-Way状态，不再建立邻接。"
  },
  {
    "id": "HF063",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 邻居状态机中，ExStart 状态的主要任务是？",
    "options": ["交换完整的链路状态数据库", "请求缺失的LSA", "确认收到的LSA", "选举主从路由器并协商DD报文的序列号"],
    "answer": "D",
    "explain": "ExStart状态用于协商主从关系并确定DD报文的初始序列号，Router-ID大者成为Master。随后进入Exchange状态交换DD报文摘要。"
  },
  {
    "id": "HF064",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于OSPF邻居状态机中各状态的含义，下列说法正确的有？",
    "options": ["Init状态表示收到了邻居的Hello但其中不含本端Router-ID", "2-Way状态表示双向通信已经建立", "ExStart状态用于选举主从并协商DD序列号", "Loading状态下双方的数据库已经完全同步"],
    "answer": ["A", "B", "C"],
    "explain": "Init表示单向收到Hello，2-Way表示双向通信建立，ExStart进行主从选举。Loading状态是通过LSR请求缺失LSA的阶段，数据库完全同步是Full状态，因此选项D错误。"
  },
  {
    "id": "HF065",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 中 Full 状态表示？",
    "options": ["双方仅完成了Hello报文的交互", "双方正在进行主从选举", "双方邻居关系已断开", "双方的链路状态数据库已完全同步，建立了邻接关系"],
    "answer": "D",
    "explain": "Full状态表示两台路由器的链路状态数据库已经完全同步，形成了邻接关系。只有Full状态的路由器之间才会互相通告LSA并参与SPF计算。"
  },
  {
    "id": "HF066",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于OSPF DR/BDR选举，下列说法正确的有？",
    "options": ["DR选举首先比较接口优先级，优先级数值大者优先", "优先级相同时比较Router-ID，数值大者优先", "接口优先级为0表示不参与DR/BDR选举", "DR可以被后加入的高优先级路由器抢占"],
    "answer": ["A", "B", "C"],
    "explain": "DR/BDR选举先比接口优先级（默认1）大者优，优先级相同再比Router-ID大者优，优先级为0不参选。选举是非抢占的，后加入的高优先级路由器不会抢占已有DR，除非DR失效重新选举。"
  },
  {
    "id": "HF067",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 接口的 DR 优先级默认值和取值范围分别是？",
    "options": ["默认0，范围0～255", "默认1，范围0～255", "默认1，范围0～127", "默认10，范围0～255"],
    "answer": "B",
    "explain": "OSPF接口的DR优先级默认为1，取值范围0～255。数值越大越优先；配置为0表示该接口不参与DR和BDR选举。"
  },
  {
    "id": "HF068",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "在OSPF广播网络中，所有DRother路由器之间都会建立Full状态的邻接关系并相互交换LSA。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "在广播网络中DRother之间只保持2-Way的邻居关系，不建立邻接。所有DRother只与DR和BDR建立Full邻接，从而减少邻接数量，因此该说法错误。"
  },
  {
    "id": "HF069",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 中 DRother 发送的链路状态更新报文发往的组播地址是？",
    "options": ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    "answer": "B",
    "explain": "DRother使用224.0.0.6向DR和BDR发送LSU；DR使用224.0.0.5向所有OSPF路由器泛洪。224.0.0.5代表AllSPFRouters，224.0.0.6代表AllDRouters。"
  },
  {
    "id": "HF070",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 使用的两个组播地址 224.0.0.5 和 224.0.0.6 分别代表？",
    "options": ["AllDRouters 和 AllSPFRouters", "AllOSPF 和 AllDR", "AllSPFRouters 和 AllDRouters", "AllRouters 和 AllHosts"],
    "answer": "C",
    "explain": "224.0.0.5是AllSPFRouters，所有运行OSPF的接口都会监听；224.0.0.6是AllDRouters，只有DR和BDR监听。DRother向DR/BDR发送更新时使用224.0.0.6。"
  },
  {
    "id": "HF071",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "OSPF 的五种报文类型包括？",
    "options": ["Hello报文", "DD报文（数据库描述）", "LSR与LSU报文", "LSAck报文"],
    "answer": ["A", "B", "C", "D"],
    "explain": "OSPF共有五种报文：Hello用于建立和维持邻居；DD用于交换数据库摘要；LSR用于请求LSA；LSU用于发送LSA；LSAck用于确认收到的LSA。"
  },
  {
    "id": "HF072",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 中用于确认收到LSU报文的报文类型是？",
    "options": ["LSR", "LSU", "DD", "LSAck"],
    "answer": "D",
    "explain": "LSAck（Link State Acknowledgment）用于对收到的LSU进行确认，保证链路状态信息的可靠传输。OSPF通过LSAck实现可靠的泛洪机制。"
  },
  {
    "id": "HF073",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "LSA Type 1（Router LSA）的描述正确的是？",
    "options": ["由每台路由器产生，描述本路由器所有接口的链路状态，只在本区域内泛洪", "由ABR产生，描述区域间的路由信息", "由ASBR产生，描述引入的外部路由", "由DR产生，描述广播网络的子网信息"],
    "answer": "A",
    "explain": "Type 1 Router LSA由每台OSPF路由器产生，描述自身接口的链路状态和开销，仅在本区域内泛洪，不跨区域传播。"
  },
  {
    "id": "HF074",
    "type": "fill",
    "chapter": "OSPF基础",
    "stem": "LSA Type 2 即 Network LSA，由广播网络中的 ______ 产生。",
    "options": [],
    "answer": ["DR"],
    "explain": "Type 2 Network LSA由广播或NBMA网络中的DR产生，描述该网段的子网掩码以及连接在该网段上的所有路由器。只有DR才会产生Network LSA。"
  },
  {
    "id": "HF075",
    "type": "fill",
    "chapter": "OSPF基础",
    "stem": "LSA Type 3 即 Network Summary LSA，由 ______ 产生，用于描述区域间的路由信息。",
    "options": [],
    "answer": ["ABR"],
    "explain": "Type 3 Network Summary LSA由ABR产生，用于描述从其他区域学习到的路由信息，实现区域间的路由传递。"
  },
  {
    "id": "HF076",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于LSA类型，下列说法正确的有？",
    "options": ["Type 1 Router LSA由每台路由器产生，只在本区域内泛洪", "Type 2 Network LSA由广播网络中的DR产生", "Type 3 Network Summary LSA由ABR产生，描述区域间路由", "Type 5 AS External LSA由ABR产生，只在本区域内泛洪"],
    "answer": ["A", "B", "C"],
    "explain": "Type 1由每台路由器产生且仅在本区域泛洪，Type 2由DR产生，Type 3由ABR产生描述区域间路由。Type 5由ASBR产生并在整个AS内泛洪，因此选项D错误。"
  },
  {
    "id": "HF077",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "关于LSA Type 5（AS External LSA）的描述，正确的是？",
    "options": ["由ASBR产生，描述引入到OSPF域的外部路由，在整个AS内泛洪", "由ABR产生，只在本区域内泛洪", "由DR产生，只在广播网段内泛洪", "由任意路由器产生，用于描述区域内的链路状态"],
    "answer": "A",
    "explain": "Type 5 AS External LSA由ASBR产生，用于描述引入OSPF域的外部路由（如引入的静态路由或RIP路由），在整个OSPF自治系统内泛洪（Stub区域除外）。"
  },
  {
    "id": "HF078",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPF划分多区域时，非骨干区域可以不与Area 0直接相连，只要该区域配置了正确的Router-ID即可。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "OSPF规定骨干区域为Area 0，所有非骨干区域必须与Area 0直接相连，否则需要通过虚连接（Virtual Link）解决，与Router-ID配置无关。这一规则用于防止区域间路由环路，因此该说法错误。"
  },
  {
    "id": "HF079",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 中 ABR（区域边界路由器）的定义是？",
    "options": ["连接OSPF域与其他路由协议域的路由器", "同时连接骨干区域和至少一个非骨干区域的路由器", "只连接骨干区域的路由器", "被选举为DR的路由器"],
    "answer": "B",
    "explain": "ABR是同时连接骨干区域Area 0和至少一个非骨干区域的路由器，负责在区域之间传递路由信息。连接OSPF域与外部协议域的路由器称为ASBR。"
  },
  {
    "id": "HF080",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于OSPF中的ABR与ASBR，下列说法正确的有？",
    "options": ["ABR同时连接骨干区域和至少一个非骨干区域", "ASBR负责把外部路由引入到OSPF域内", "ASBR会产生Type 5的AS External LSA", "ABR只能连接两个非骨干区域"],
    "answer": ["A", "B", "C"],
    "explain": "ABR连接骨干区域与非骨干区域，ASBR负责引入外部路由并产生Type 5 LSA。ABR必须连接Area 0，不能只连接两个非骨干区域，因此选项D错误。"
  },
  {
    "id": "HF081",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于OSPF区域划分的作用，下列说法正确的有？",
    "options": ["减小区域内链路状态数据库的规模", "缩小拓扑变化的影响范围，加快收敛", "降低对路由器CPU和内存资源的要求", "使所有区域的LSA都在整个OSPF域内泛洪"],
    "answer": ["A", "B", "C"],
    "explain": "区域划分可以把拓扑变化限制在区域内，减小LSDB规模，降低设备资源消耗并加快收敛。区域内LSA只在本区域泛洪，并非全网泛洪，因此选项D错误。"
  },
  {
    "id": "HF082",
    "type": "fill",
    "chapter": "OSPF基础",
    "stem": "OSPF 计算接口开销时使用的默认参考带宽是 ______ Mbps。",
    "options": [],
    "answer": ["100"],
    "explain": "OSPF默认参考带宽为100Mbps，接口开销 = 参考带宽 ÷ 接口带宽。例如100M接口开销为1，1000M接口开销同样为1（计算结果取整且最小为1）。"
  },
  {
    "id": "HF083",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "在OSPF默认参考带宽下，带宽为10Mbps的接口其开销（Cost）计算结果为10。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "开销 = 参考带宽100Mbps ÷ 接口带宽10Mbps = 10。带宽越小开销越大，因此10M接口的开销是100M接口的10倍。"
  },
  {
    "id": "HF084",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "由于默认参考带宽为100Mbps，千兆及以上接口的OSPF开销可能都为1，解决该问题的正确做法是？",
    "options": ["使用命令 bandwidth-reference 修改参考带宽", "使用命令 cost 把接口开销改为0", "把接口带宽改为100Mbps", "关闭OSPF的SPF计算功能"],
    "answer": "A",
    "explain": "可以在OSPF进程下使用 `bandwidth-reference` 命令调大参考带宽（如10000），从而区分不同高速接口的开销。修改参考带宽需要全网一致，否则可能导致选路异常。"
  },
  {
    "id": "HF085",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "在华为设备上启用OSPF进程1并进入其视图的命令是？",
    "options": ["ospf enable 1", "router ospf 1", "enable ospf 1", "ospf 1"],
    "answer": "D",
    "explain": "华为VRP在系统视图下使用 `ospf 1` 启用OSPF进程并进入OSPF视图，其中1为进程号，只具有本地意义。`router ospf 1` 是思科设备的命令。"
  },
  {
    "id": "HF086",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "在OSPF中宣告 192.168.1.0/24 网段时，命令中的掩码应写为 0.0.0.255 这种反掩码形式。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "OSPF的network命令使用反掩码（通配符掩码），/24对应的反掩码是0.0.0.255。命令需在 `area 0` 视图下配置。"
  },
  {
    "id": "HF087",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "反掩码 0.0.0.255 对应的掩码长度是？",
    "options": ["/8", "/16", "/32", "/24"],
    "answer": "D",
    "explain": "反掩码与掩码逐位取反，0.0.0.255取反后为255.255.255.0，即/24。反掩码中0表示必须匹配，1表示不关心。"
  },
  {
    "id": "HF088",
    "type": "fill",
    "chapter": "OSPF基础",
    "stem": "在华为设备上查看OSPF邻居关系的命令是 display ospf ______ 。",
    "options": [],
    "answer": ["peer"],
    "explain": "display ospf peer 用于查看OSPF邻居的状态、Router-ID、接口地址等信息，加 brief 参数可只显示摘要。display ospf routing 用于查看OSPF计算出的路由。"
  },
  {
    "id": "HF089",
    "type": "fill",
    "chapter": "OSPF基础",
    "stem": "在华为设备上查看OSPF计算出的路由信息，应使用的命令是 display ospf ______ 。",
    "options": [],
    "answer": ["routing"],
    "explain": "display ospf routing 显示OSPF进程计算出的OSPF路由；display ospf peer 显示邻居状态；display ospf interface 显示接口的OSPF参数；display ospf lsdb 显示链路状态数据库。"
  },
  {
    "id": "HF090",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPFv3 用于支持 IPv4，OSPFv2 用于支持 IPv6。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "OSPFv2是面向IPv4的OSPF版本，OSPFv3是面向IPv6的版本。题目中的对应关系颠倒，因此该说法错误。"
  },
  {
    "id": "HF091",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPF中NBMA和P2MP网络的Hello间隔与广播网络一样都是10秒，邻居失效时间为40秒。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "广播和P2P网络的Hello间隔为10秒、Dead为40秒；NBMA和P2MP网络的Hello间隔为30秒、Dead为120秒。题目描述与默认值不符，因此该说法错误。"
  },
  {
    "id": "HF092",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "下列关于OSPF邻居状态转换顺序的描述，正确的有？",
    "options": ["Down → Init 表示收到了对端Hello但其中没有本端Router-ID", "Init → 2-Way 表示双向通信建立", "ExStart → Exchange 表示主从选举完成并开始交换DD报文", "Loading → 2-Way 表示邻接关系建立完成"],
    "answer": ["A", "B", "C"],
    "explain": "邻居状态顺序为Down→Init→2-Way→ExStart→Exchange→Loading→Full。Loading之后进入Full表示邻接建立完成，因此选项D的Loading→2-Way是错误的。"
  },
  {
    "id": "HF093",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPF的主从（Master/Slave）关系在ExStart状态选举，接口DR优先级大的一方成为Master。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "主从关系确实在ExStart状态选举，但依据是Router-ID而非接口优先级，Router-ID大的一方成为Master。接口优先级只用于DR/BDR选举，因此该说法错误。"
  },
  {
    "id": "HF094",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "两台路由器接口地址在同一网段、区域ID一致，但接口MTU不一致，OSPF邻居关系通常会停留在？",
    "options": ["2-Way状态", "Full状态", "Init状态", "ExStart状态"],
    "answer": "D",
    "explain": "MTU不一致会导致DD报文协商失败，邻居关系停留在ExStart状态。可通过修改接口MTU或配置 `ospf mtu-ignore` 解决。"
  },
  {
    "id": "HF095",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPF报文直接封装在IP报文中，IP协议号为89，并使用LSAck报文对收到的LSU进行确认。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "OSPF直接封装在IP中，协议号为89，不使用TCP/UDP，因此需要自行实现可靠性机制，即通过LSAck确认LSU，该说法正确。"
  },
  {
    "id": "HF096",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "OSPF的进程号具有全局意义，相邻路由器必须配置相同的OSPF进程号才能建立邻居关系。",
    "options": ["正确", "错误"],
    "answer": "F",
    "explain": "OSPF进程号仅用于本地区分不同的OSPF进程，不携带在报文中，因此两端进程号不同不影响邻居关系建立。影响邻居的是区域ID、定时器、认证等参数。"
  },
  {
    "id": "HF097",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于OSPF DR/BDR的作用，下列说法正确的有？",
    "options": ["在广播网络中减少邻接关系的数量", "DR负责代表广播网段产生Network LSA", "DRother只与DR和BDR建立Full邻接", "BDR不参与任何LSA的接收和发送"],
    "answer": ["A", "B", "C"],
    "explain": "DR/BDR机制通过减少邻接数量来降低LSA泛洪的开销，DR产生Type 2 LSA。BDR作为备份同时接收所有LSA，在DR失效后可快速接管，因此选项D错误。"
  },
  {
    "id": "HF098",
    "type": "judge",
    "chapter": "OSPF基础",
    "stem": "某OSPF接口的DR优先级被配置为0后，该接口将自动成为DRother并仍然可以建立邻居关系。",
    "options": ["正确", "错误"],
    "answer": "T",
    "explain": "接口优先级取值范围为0～255，配置为0表示该接口不参与DR和BDR选举，因此只能成为DRother。该接口仍可与邻居建立邻居及邻接关系。"
  },
  {
    "id": "HF099",
    "type": "single",
    "chapter": "OSPF基础",
    "stem": "OSPF 路由器之间交换 LSA、同步LSDB的前提是双方处于什么状态？",
    "options": ["2-Way", "Full", "Init", "Down"],
    "answer": "B",
    "explain": "只有处于Full状态的邻接路由器之间才会同步LSDB并互相泛洪LSA。2-Way状态下的邻居之间不交换链路状态信息。"
  },
  {
    "id": "HF100",
    "type": "multi",
    "chapter": "OSPF基础",
    "stem": "关于OSPF的SPF算法与区域计算，下列说法正确的有？",
    "options": ["每台路由器以自己为根，基于LSDB独立计算最短路径树", "SPF算法天然保证区域内不会产生路由环路", "各区域分别独立计算，区域内拓扑变化只影响本区域", "SPF计算由DR统一完成后把结果分发给区域内所有路由器"],
    "answer": ["A", "B", "C"],
    "explain": "OSPF每台路由器都以自身为根独立运行SPF算法，基于同步后的LSDB计算最短路径树，天然避免区域内环路，各区域独立计算互不影响。DR不负责统一计算并分发，因此选项D错误。"
  }
];