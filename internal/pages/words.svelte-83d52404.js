import{S as R,i as S,s as q,k as _,j as b,F as A,d as f,n as h,m as k,f as m,o as y,x as j,u as x,v as E,A as C,_ as L,e as p,t as M,c as $,a as g,g as V,G as v,h as z,b as w,R as D}from"../chunks/vendor-1761bc09.js";import{B as F}from"../chunks/buttonPlus-10186dcb.js";import{P as G}from"../chunks/page-bf6a53fe.js";const I=async(i=1)=>{const e=await fetch(`https://random-word-api.herokuapp.com/word?number=${i}`);if(e.ok){const a=await e.json();return console.log(a),a}else throw new Error(await e.json())};const{document:P}=L;function W(i,e,a){const n=i.slice();return n[4]=e[a],n}function B(i){let e,a=i[4]+"",n;return{c(){e=p("li"),n=M(a)},l(s){e=$(s,"LI",{});var t=g(e);n=V(t,a),t.forEach(f)},m(s,t){m(s,e,t),v(e,n)},p(s,t){t&1&&a!==(a=s[4]+"")&&z(n,a)},d(s){s&&f(e)}}}function T(i){let e,a,n,s,t,c=i[0],l=[];for(let o=0;o<c.length;o+=1)l[o]=B(W(i,c,o));return s=new F({}),s.$on("click",i[1]),{c(){e=p("ul");for(let o=0;o<l.length;o+=1)l[o].c();a=_(),n=p("div"),b(s.$$.fragment),this.h()},l(o){e=$(o,"UL",{class:!0});var u=g(e);for(let d=0;d<l.length;d+=1)l[d].l(u);a=h(u),n=$(u,"DIV",{id:!0,class:!0});var r=g(n);k(s.$$.fragment,r),r.forEach(f),u.forEach(f),this.h()},h(){w(n,"id","add_button"),w(n,"class","center svelte-wg20e3"),w(e,"class","unlist center-i stack")},m(o,u){m(o,e,u);for(let r=0;r<l.length;r+=1)l[r].m(e,null);v(e,a),v(e,n),y(s,n,null),t=!0},p(o,u){if(u&1){c=o[0];let r;for(r=0;r<c.length;r+=1){const d=W(o,c,r);l[r]?l[r].p(d,u):(l[r]=B(d),l[r].c(),l[r].m(e,a))}for(;r<l.length;r+=1)l[r].d(1);l.length=c.length}},i(o){t||(j(s.$$.fragment,o),t=!0)},o(o){x(s.$$.fragment,o),t=!1},d(o){o&&f(e),D(l,o),E(s)}}}function U(i){let e,a,n,s;return n=new G({props:{title:"Random Words",$$slots:{default:[T]},$$scope:{ctx:i}}}),{c(){e=_(),a=_(),b(n.$$.fragment),this.h()},l(t){A('[data-svelte="svelte-1fzxoal"]',P.head).forEach(f),e=h(t),a=h(t),k(n.$$.fragment,t),this.h()},h(){P.title="Spotify Waveforms"},m(t,c){m(t,e,c),m(t,a,c),y(n,t,c),s=!0},p(t,[c]){const l={};c&129&&(l.$$scope={dirty:c,ctx:t}),n.$set(l)},i(t){s||(j(n.$$.fragment,t),s=!0)},o(t){x(n.$$.fragment,t),s=!1},d(t){t&&f(e),t&&f(a),E(n,t)}}}function H(i,e,a){let n,s=[];C(()=>{n=document.getElementById("add_button"),t()});const t=async()=>{a(0,s=[...await I(10)])};function c(){I(1).then(l=>{a(0,s=[...s,...l]),setTimeout(function(){n.scrollIntoView({block:"center"})},100)})}return[s,c]}class O extends R{constructor(e){super();S(this,e,H,U,q,{})}}export{O as default};
