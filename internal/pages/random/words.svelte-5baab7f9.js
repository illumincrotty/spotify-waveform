import{S as B,i as S,s as q,j as h,v as b,E as C,d as f,l as _,w as k,f as m,x as y,p as j,n as E,A as x,u as L,a3 as M,e as p,t as R,c as $,a as g,g as V,F as v,h as z,b as w,P as D}from"../../chunks/vendor-4237203b.js";import{B as F}from"../../chunks/buttonPlus-982daac4.js";import{P as T}from"../../chunks/page-d2feb634.js";import"../../chunks/button-7043fb29.js";const P=async(i=1)=>{const t=await fetch(`https://random-word-api.herokuapp.com/word?number=${i}`);if(t.ok)return await t.json();throw new Error(await t.json())};const{document:I}=M;function W(i,t,o){const n=i.slice();return n[4]=t[o],n}function A(i){let t,o=i[4]+"",n;return{c(){t=p("li"),n=R(o)},l(s){t=$(s,"LI",{});var e=g(t);n=V(e,o),e.forEach(f)},m(s,e){m(s,t,e),v(t,n)},p(s,e){e&1&&o!==(o=s[4]+"")&&z(n,o)},d(s){s&&f(t)}}}function U(i){let t,o,n,s,e,c=i[0],l=[];for(let a=0;a<c.length;a+=1)l[a]=A(W(i,c,a));return s=new F({}),s.$on("click",i[1]),{c(){t=p("ul");for(let a=0;a<l.length;a+=1)l[a].c();o=h(),n=p("div"),b(s.$$.fragment),this.h()},l(a){t=$(a,"UL",{class:!0});var u=g(t);for(let d=0;d<l.length;d+=1)l[d].l(u);o=_(u),n=$(u,"DIV",{id:!0,class:!0});var r=g(n);k(s.$$.fragment,r),r.forEach(f),u.forEach(f),this.h()},h(){w(n,"id","add_button"),w(n,"class","center svelte-wg20e3"),w(t,"class","unlist center-i stack")},m(a,u){m(a,t,u);for(let r=0;r<l.length;r+=1)l[r].m(t,null);v(t,o),v(t,n),y(s,n,null),e=!0},p(a,u){if(u&1){c=a[0];let r;for(r=0;r<c.length;r+=1){const d=W(a,c,r);l[r]?l[r].p(d,u):(l[r]=A(d),l[r].c(),l[r].m(t,o))}for(;r<l.length;r+=1)l[r].d(1);l.length=c.length}},i(a){e||(j(s.$$.fragment,a),e=!0)},o(a){E(s.$$.fragment,a),e=!1},d(a){a&&f(t),D(l,a),x(s)}}}function G(i){let t,o,n,s;return n=new T({props:{title:"Random Words",$$slots:{default:[U]},$$scope:{ctx:i}}}),{c(){t=h(),o=h(),b(n.$$.fragment),this.h()},l(e){C('[data-svelte="svelte-1fzxoal"]',I.head).forEach(f),t=_(e),o=_(e),k(n.$$.fragment,e),this.h()},h(){I.title="Spotify Waveforms"},m(e,c){m(e,t,c),m(e,o,c),y(n,e,c),s=!0},p(e,[c]){const l={};c&129&&(l.$$scope={dirty:c,ctx:e}),n.$set(l)},i(e){s||(j(n.$$.fragment,e),s=!0)},o(e){E(n.$$.fragment,e),s=!1},d(e){e&&f(t),e&&f(o),x(n,e)}}}function H(i,t,o){let n,s=[];L(()=>{n=document.getElementById("add_button"),e()});const e=async()=>{o(0,s=[...await P(10)])};function c(){P(1).then(l=>{o(0,s=[...s,...l]),setTimeout(function(){n.scrollIntoView({block:"center"})},100)})}return[s,c]}class Q extends B{constructor(t){super();S(this,t,H,G,q,{})}}export{Q as default};
