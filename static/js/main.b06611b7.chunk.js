(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(7),i=n.n(a),o=(n(13),n(2)),h=n(3),l=n(5),b=n(4),d=function(e){var t=e.id,n=e.name,s=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:s})]})]})},u=function(e){return e.robots.map((function(e){return Object(r.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}))},j=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},f=function(e){var t=e.searchChange;e.searchfield;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"OOpsss. dat is goed niet"}):this.props.children}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"RoboFriends"}),Object(r.jsx)(f,{searchChange:this.onSearchChange}),Object(r.jsx)(j,{children:Object(r.jsx)(O,{children:Object(r.jsx)(u,{robots:t})})})]})}}]),n}(c.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};n(14);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.b06611b7.chunk.js.map