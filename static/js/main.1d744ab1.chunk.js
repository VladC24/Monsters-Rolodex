(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(14),n(4)),l=n(5),i=n(7),h=n(6),u=n(1),m=n(8),d=(n(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null," ",e.monster.name," "),r.a.createElement("p",null," ",e.monster.email," "))}),f=(n(16),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monster:e})})))}),p=(n(17),function(e){e.placeholder;var t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:"search monsters",onChange:t})}),v=(n(18),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Monsters Rolodex "),r.a.createElement(p,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(f,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1d744ab1.chunk.js.map