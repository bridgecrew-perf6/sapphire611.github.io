(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{548:function(e,n,t){"use strict";t.r(n);var o=t(4),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"mongodb-学习笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-学习笔记"}},[e._v("#")]),e._v(" Mongodb 学习笔记")]),e._v(" "),t("blockquote",[t("p",[e._v("某次工作途中测试服务器的mongodb没有上密码，直接被人清库了两次，特此记录")])]),e._v(" "),t("h3",{attrs:{id:"mongodump-mongorestore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodump-mongorestore"}},[e._v("#")]),e._v(" Mongodump & Mongorestore")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7036272188915187742",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何使用mongodump"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("mongodb将主体与插件进行了分离，需要额外下载插件包MongoDB Database Tools 下载地址: "),t("a",{attrs:{href:"https://www.mongodb.com/try/download/database-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),t("OutboundLink")],1)])]),t("div",{staticClass:"language-linux extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("tar -zxvf mongodb.tools.xxxxxxx.tgz # 解压\n")])])]),t("div",{staticClass:"language-linux extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd /bin # 解压后进入 /bin 目录\n./mongodump\n./mongodump --forceTableScan -d [database_name] # 因mongodb版本不一致导致的导出失败解决方案:\n./mongorestore\n")])])]),t("h3",{attrs:{id:"基于-docker-给-mongodb-增加密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-给-mongodb-增加密码"}},[e._v("#")]),e._v(" 基于 docker 给 mongodb 增加密码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run --name mongo -d -p 27017:27017 --restart always mongo --auth # 利用docker挂载mongo，顺便设置自启动\ndocker ps\ndocker exec -it [container_id] mongo admin\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('MongoDB shell version v5.0.6\nconnecting to: mongodb://127.0.0.1:27017/admin?compressors=disabled&gssapiServiceName=mongodb\nImplicit session: session { "id" : UUID("a9721af9-51b8-4771-ba38-20396ca807a9") }\nMongoDB server version: 5.0.6\n================\nWarning: the "mongo" shell has been superseded by "mongosh",\nwhich delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in\nan upcoming release.\nFor installation instructions, see\nhttps://docs.mongodb.com/mongodb-shell/install/\n================\n\n> db.createUser({ user: \'root\', pwd: \'root\', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });\n\nSuccessfully added user: {\n\t"user" : "root",\n\t"roles" : [\n\t\t{\n\t\t\t"role" : "userAdminAnyDatabase",\n\t\t\t"db" : "admin"\n\t\t}\n\t]\n}\n\n> exit\nbye\n')])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("其实到这一步，就可以了，不一定要针对单数据库创建特定的管理员，用一个就行")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# mongodb链接url\n\ndb: mongodb://[username]:[password]@[ip]:[port]/[dbName]?readPreference=primary&directConnection=true&ssl=false&authMechanism=DEFAULT&authSource=admin\n\n# authSource=admin 一定要加\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);