import{S as y,i as g,s as h,v as c,w as f,x as m,p as d,n as u,A as $,e as _,c as p,a as v,d as i,b,f as O,E}from"./vendor-2fcdb5a7.js";import{L}from"./loader-061ee870.js";import{O as j}from"./overlay-ea02fd8b.js";function w(r){let t,s,e,n;return e=new L({props:{symbol:r[0],size:"10rem"}}),{c(){t=_("section"),s=_("div"),c(e.$$.fragment),this.h()},l(a){t=p(a,"SECTION",{class:!0});var o=v(t);s=p(o,"DIV",{});var l=v(s);f(e.$$.fragment,l),l.forEach(i),o.forEach(i),this.h()},h(){b(t,"class","svelte-1bkbffv")},m(a,o){O(a,t,o),E(t,s),m(e,s,null),n=!0},p(a,o){const l={};o&1&&(l.symbol=a[0]),e.$set(l)},i(a){n||(d(e.$$.fragment,a),n=!0)},o(a){u(e.$$.fragment,a),n=!1},d(a){a&&i(t),$(e)}}}function x(r){let t,s;return t=new j({props:{$$slots:{default:[w]},$$scope:{ctx:r}}}),{c(){c(t.$$.fragment)},l(e){f(t.$$.fragment,e)},m(e,n){m(t,e,n),s=!0},p(e,[n]){const a={};n&3&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(d(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){$(t,e)}}}function S(r,t,s){let{symbol:e=void 0}=t;return r.$$set=n=>{"symbol"in n&&s(0,e=n.symbol)},[e]}class q extends y{constructor(t){super();g(this,t,S,x,h,{symbol:0})}}export{q as O};