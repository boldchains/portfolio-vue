(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(t,n,r){"use strict";r.r(n);var e=r(139),a=r(124);for(var i in a)"default"!==i&&function(t){r.d(n,t,function(){return a[t]})}(i);r(142);var u=r(2),o=Object(u.a)(a.default,e.a,e.b,!1,null,"490047dc",null);n.default=o.exports},122:function(t,n,r){},123:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={computed:{posts:function(){return this.$site.pages.filter(function(t){return t.path.startsWith("/works/")&&!t.frontmatter.works_index}).sort(function(t,n){return new Date(n.frontmatter.date)-new Date(t.frontmatter.date)})}}}},124:function(t,n,r){"use strict";r.r(n);var e=r(123),a=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,function(){return e[t]})}(i);n.default=a.a},139:function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"project-list"},t._l(t.posts,function(n){return r("router-link",{key:n.title,staticClass:"post",style:{backgroundImage:"url("+n.frontmatter.thumbnail+")"},attrs:{to:n.path,tag:"div"}},[r("div",{staticClass:"info"},[r("h2",[t._v(t._s(n.frontmatter.title))]),r("p",[t._v(t._s(n.frontmatter.description))])])])}))},a=[];r.d(n,"a",function(){return e}),r.d(n,"b",function(){return a})},142:function(t,n,r){"use strict";var e=r(122);r.n(e).a}}]);