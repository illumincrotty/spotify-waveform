import{S as W,i as A,s as R,j as m,v as b,D as q,d as f,l as _,w as k,f as h,x as y,p as j,n as E,A as x,u as C,a2 as D,e as p,t as L,c as $,a as g,g as M,E as v,h as V,b as w,R as z}from"../../chunks/vendor-2fcdb5a7.js";import{B as T}from"../../chunks/buttonPlus-39418e5b.js";import{P as U}from"../../chunks/page-c4296348.js";import"../../chunks/buttonBase-0387f9a7.js";import"../../chunks/storeSession-c7aabff2.js";import"../../chunks/paths-94b66ca7.js";const B=async(i=1)=>{const t=await fetch(`https://random-word-api.herokuapp.com/word?number=${i}`);if(t.ok)return await t.json();throw new Error(await t.json())};const{document:I}=D;function P(i,t,o){const s=i.slice();return s[4]=t[o],s}function S(i){let t,o=i[4]+"",s;return{c(){t=p("li"),s=L(o)},l(n){t=$(n,"LI",{});var e=g(t);s=M(e,o),e.forEach(f)},m(n,e){h(n,t,e),v(t,s)},p(n,e){e&1&&o!==(o=n[4]+"")&&V(s,o)},d(n){n&&f(t)}}}function F(i){let t,o,s,n,e,c=i[0],r=[];for(let a=0;a<c.length;a+=1)r[a]=S(P(i,c,a));return n=new T({}),n.$on("click",i[1]),{c(){t=p("ul");for(let a=0;a<r.length;a+=1)r[a].c();o=m(),s=p("div"),b(n.$$.fragment),this.h()},l(a){t=$(a,"UL",{class:!0});var u=g(t);for(let d=0;d<r.length;d+=1)r[d].l(u);o=_(u),s=$(u,"DIV",{id:!0,class:!0});var l=g(s);k(n.$$.fragment,l),l.forEach(f),u.forEach(f),this.h()},h(){w(s,"id","add_button"),w(s,"class","center svelte-wg20e3"),w(t,"class","unlist center-i stack")},m(a,u){h(a,t,u);for(let l=0;l<r.length;l+=1)r[l].m(t,null);v(t,o),v(t,s),y(n,s,null),e=!0},p(a,u){if(u&1){c=a[0];let l;for(l=0;l<c.length;l+=1){const d=P(a,c,l);r[l]?r[l].p(d,u):(r[l]=S(d),r[l].c(),r[l].m(t,o))}for(;l<r.length;l+=1)r[l].d(1);r.length=c.length}},i(a){e||(j(n.$$.fragment,a),e=!0)},o(a){E(n.$$.fragment,a),e=!1},d(a){a&&f(t),z(r,a),x(n)}}}function G(i){let t,o,s,n;return s=new U({props:{title:"Random Words",$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){t=m(),o=m(),b(s.$$.fragment),this.h()},l(e){q('[data-svelte="svelte-1fzxoal"]',I.head).forEach(f),t=_(e),o=_(e),k(s.$$.fragment,e),this.h()},h(){I.title="Spotify Waveforms"},m(e,c){h(e,t,c),h(e,o,c),y(s,e,c),n=!0},p(e,[c]){const r={};c&129&&(r.$$scope={dirty:c,ctx:e}),s.$set(r)},i(e){n||(j(s.$$.fragment,e),n=!0)},o(e){E(s.$$.fragment,e),n=!1},d(e){e&&f(t),e&&f(o),x(s,e)}}}function H(i,t,o){let s,n=[];C(()=>{s=document.getElementById("add_button"),e()});const e=async()=>{o(0,n=[...await B(10)])};function c(){B(1).then(r=>{o(0,n=[...n,...r]),setTimeout(function(){s.scrollIntoView({block:"center"})},100)})}return[n,c]}class Y extends W{constructor(t){super();A(this,t,H,G,R,{})}}export{Y as default};