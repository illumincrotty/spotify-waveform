import{S as B,i as R,s as S,k as h,j as b,E as q,d as f,n as _,m as k,f as m,o as y,x as E,u as j,v as x,A as C,a2 as L,e as p,t as M,c as $,a as g,g as V,F as v,h as z,b as w,R as D}from"../../chunks/vendor-b1344eba.js";import{B as F}from"../../chunks/buttonPlus-7560edb2.js";import{P as T}from"../../chunks/page-9c40ea66.js";const I=async(i=1)=>{const e=await fetch(`https://random-word-api.herokuapp.com/word?number=${i}`);if(e.ok)return await e.json();throw new Error(await e.json())};const{document:P}=L;function W(i,e,o){const n=i.slice();return n[4]=e[o],n}function A(i){let e,o=i[4]+"",n;return{c(){e=p("li"),n=M(o)},l(s){e=$(s,"LI",{});var t=g(e);n=V(t,o),t.forEach(f)},m(s,t){m(s,e,t),v(e,n)},p(s,t){t&1&&o!==(o=s[4]+"")&&z(n,o)},d(s){s&&f(e)}}}function U(i){let e,o,n,s,t,c=i[0],l=[];for(let a=0;a<c.length;a+=1)l[a]=A(W(i,c,a));return s=new F({}),s.$on("click",i[1]),{c(){e=p("ul");for(let a=0;a<l.length;a+=1)l[a].c();o=h(),n=p("div"),b(s.$$.fragment),this.h()},l(a){e=$(a,"UL",{class:!0});var u=g(e);for(let d=0;d<l.length;d+=1)l[d].l(u);o=_(u),n=$(u,"DIV",{id:!0,class:!0});var r=g(n);k(s.$$.fragment,r),r.forEach(f),u.forEach(f),this.h()},h(){w(n,"id","add_button"),w(n,"class","center svelte-wg20e3"),w(e,"class","unlist center-i stack")},m(a,u){m(a,e,u);for(let r=0;r<l.length;r+=1)l[r].m(e,null);v(e,o),v(e,n),y(s,n,null),t=!0},p(a,u){if(u&1){c=a[0];let r;for(r=0;r<c.length;r+=1){const d=W(a,c,r);l[r]?l[r].p(d,u):(l[r]=A(d),l[r].c(),l[r].m(e,o))}for(;r<l.length;r+=1)l[r].d(1);l.length=c.length}},i(a){t||(E(s.$$.fragment,a),t=!0)},o(a){j(s.$$.fragment,a),t=!1},d(a){a&&f(e),D(l,a),x(s)}}}function G(i){let e,o,n,s;return n=new T({props:{title:"Random Words",$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){e=h(),o=h(),b(n.$$.fragment),this.h()},l(t){q('[data-svelte="svelte-1fzxoal"]',P.head).forEach(f),e=_(t),o=_(t),k(n.$$.fragment,t),this.h()},h(){P.title="Spotify Waveforms"},m(t,c){m(t,e,c),m(t,o,c),y(n,t,c),s=!0},p(t,[c]){const l={};c&129&&(l.$$scope={dirty:c,ctx:t}),n.$set(l)},i(t){s||(E(n.$$.fragment,t),s=!0)},o(t){j(n.$$.fragment,t),s=!1},d(t){t&&f(e),t&&f(o),x(n,t)}}}function H(i,e,o){let n,s=[];C(()=>{n=document.getElementById("add_button"),t()});const t=async()=>{o(0,s=[...await I(10)])};function c(){I(1).then(l=>{o(0,s=[...s,...l]),setTimeout(function(){n.scrollIntoView({block:"center"})},100)})}return[s,c]}class O extends B{constructor(e){super();R(this,e,H,G,S,{})}}export{O as default};
