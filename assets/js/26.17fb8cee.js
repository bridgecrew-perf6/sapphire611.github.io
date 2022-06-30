(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{545:function(P,t,_){"use strict";_.r(t);var v=_(4),s=Object(v.a)({},(function(){var P=this,t=P.$createElement,_=P._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":P.$parent.slotKey}},[_("h2",{attrs:{id:"科目一-综合知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#科目一-综合知识"}},[P._v("#")]),P._v(" 科目一 : 综合知识")]),P._v(" "),_("h3",{attrs:{id:"_1-前趋图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-前趋图"}},[P._v("#")]),P._v(" 1. 前趋图")]),P._v(" "),_("blockquote",[_("p",[P._v("前趋图 (Precedence Graph)是一个有向无环图，记为:→=(Pi,Pj)Pi must complete before Pj may strat),假设系统中进程P={P1, P2, P3, P4, P5, P6, P7, P8}，且进程的前驱图如下:")])]),P._v(" "),_("img",{staticStyle:{border:"2"},attrs:{src:"/ruankao_2021/01/1.png"}}),P._v(" "),_("p",[P._v("A. => ((P1, P2),(P3, P1),(P4, P1),(P5, P2),(P5, P3), (P6, P4),(P7, P5), (P7, P6),(P5, P6), (P4, P5), (P6, P7),(P7, P6) ]")]),P._v(" "),_("p",[P._v("B. => ((P1, P2),(P1, P3), (P2, P5), (P2, P3),(P3, P4), (P3, P5) ,(P4, P5), (P5, P6),(P5, P7),(P8, P5), (P6, P7),(P7, P8) ]")]),P._v(" "),_("p",[_("strong",[P._v("✅ C. =>((P1, P2),(P1, P3), (P2, P3),(P2, P5), (P3, P4), (P3, P5),(P4, P6), (P5, P6),(P5, P7),(P5, P8), (P6, P8),(P7, P8) ]")])]),P._v(" "),_("p",[P._v("D. =>[ (P1, P2),(P1, P3),(P2, P3),(P2, P5), (P3, P6), (P3, P4) ,(P4, P7) ,(P5,\nP6), (P6, P7),(P6, P5),(P7, P5),(P7, P8) ]")]),P._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[P._v('本题考查操作系统基本概念，图中的每个结点可用干描述一个程序段或进程,乃至一条语句;结点间的有向边则用于表示两个结点之间存在的偏序(Partial Order， 亦称偏序关系)或前趋关系(Precedence Relation) "→"。')]),P._v(" "),_("p",[P._v("对于题中所示的前趋图，存在前趋关系:\nC. => {(P1, P2),(P1, P3),(P2, P3),(P2,P5),(P3, P4), (P3, P5),(P4, P6),(P5， P6)，(P5，P7) ,(P5，P8), (P6，P8),(P7, P8) }")]),P._v(" "),_("p",[P._v("答案: C")])]),_("h3",{attrs:{id:"_2-物理地址计算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-物理地址计算"}},[P._v("#")]),P._v(" 2. 物理地址计算")]),P._v(" "),_("blockquote",[_("p",[P._v("某计算机系统页面大小为4K，进程P1的页面变换表如下图所示，若P1要访问数据的逻辑地址为十六进制1B1AH，那么该逻辑地址经过变换后，其对应的物理地址应为十六进制()。")])]),P._v(" "),_("table",[_("thead",[_("tr",[_("th",[P._v("页号")]),P._v(" "),_("th",[P._v("物理块号")])])]),P._v(" "),_("tbody",[_("tr",[_("td",[P._v("0")]),P._v(" "),_("td",[P._v("1")])]),P._v(" "),_("tr",[_("td",[P._v("1")]),P._v(" "),_("td",[P._v("6")])]),P._v(" "),_("tr",[_("td",[P._v("2")]),P._v(" "),_("td",[P._v("3")])]),P._v(" "),_("tr",[_("td",[P._v("3")]),P._v(" "),_("td",[P._v("6")])])])]),P._v(" "),_("p",[P._v("A. 1B1AH")]),P._v(" "),_("p",[P._v("B. 3B1AH")]),P._v(" "),_("p",[_("strong",[P._v("✅ C. 6B1AH")])]),P._v(" "),_("p",[P._v("D. 8B1AH")]),P._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[P._v("页面大小4K=212，页内地址有12 位。对应十六进行逻辑地址的B1A，逻辑地址中的1\n就是页号，通过查表可知对应的物理块号是6，物理地址为6B1AH。")]),P._v(" "),_("p",[P._v("答案: C")])]),_("h3",{attrs:{id:"_3-地址索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-地址索引"}},[P._v("#")]),P._v(" 3. 地址索引")]),P._v(" "),_("blockquote",[_("p",[P._v("某文件系统文件存储采用文件索引节点法。每个文件索引节点中有8个地址项，每个地址项大小为4字节，其中5个地址项为直接地址索引,2个地址项是一级间接地址索引,1个地址项是二级间接地址索引。磁盘索引块和磁盘数据块大小均为1KB。若要访问iclsClient.dll文件的逻辑块号分别为1、518，则系统应分别采用()")])]),P._v(" "),_("p",[P._v("A. 直接地址索引和直接地址索引")]),P._v(" "),_("p",[P._v("B. 直接地址索引和一级间接地址索引")]),P._v(" "),_("p",[_("strong",[P._v("✅ C. 直接地址索引和二级间接地址索引")])]),P._v(" "),_("p",[P._v("D. 一级间接地址索引和二级间接地址索引")]),P._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[P._v("直接地址索引有5个地址项，对应逻辑块号0-4。")]),P._v(" "),_("p",[P._v("一级间接索引有2个地址项，每个地址项对应1Kb/4B=256个物理块，对应逻辑块号范围是5-516。")]),P._v(" "),_("p",[P._v("二级间接索引有一个地址项，对应256X 256=65536个物理块，对应逻辑块号范围是517以上。")]),P._v(" "),_("p",[P._v("518 > 4 + (2 ^ 10) * 2 = 516")]),P._v(" "),_("p",[P._v("答案: C")])])])}),[],!1,null,null,null);t.default=s.exports}}]);