import{S as O,i as T,s as S,$ as N,l as P,f as m,a0 as R,x as d,u as $,d as f,e as v,t as w,c as b,a as k,g as E,R as U,b as g,F as h,O as _,k as x,n as q,a1 as V,j as Q,m as j,o as B,v as C,E as z,A,a2 as D,r as F,w as M,T as W}from"../../chunks/vendor-cdbb4087.js";import{B as G}from"../../chunks/buttonPlus-6a52491b.js";import{P as H}from"../../chunks/page-d5e70828.js";function J(a){let e,l=a[3].message+"",t;return{c(){e=v("p"),t=w(l),this.h()},l(n){e=b(n,"P",{style:!0,class:!0});var o=k(e);t=E(o,l),o.forEach(f),this.h()},h(){U(e,"color","red"),g(e,"class","svelte-1vfx2vb")},m(n,o){m(n,e,o),h(e,t)},p:_,i:_,o:_,d(n){n&&f(e)}}}function X(a){let e,l,t,n;const o=[Z,Y],s=[];function p(r,c){return r[0]?0:1}return e=p(a),l=s[e]=o[e](a),{c(){l.c(),t=P()},l(r){l.l(r),t=P()},m(r,c){s[e].m(r,c),m(r,t,c),n=!0},p(r,c){l.p(r,c)},i(r){n||(d(l),n=!0)},o(r){$(l),n=!1},d(r){s[e].d(r),r&&f(t)}}}function Y(a){let e,l,t=a[2].content+"",n,o,s,p=a[2].author+"",r;return{c(){e=v("blockquote"),l=v("p"),n=w(t),o=x(),s=v("p"),r=w(p),this.h()},l(c){e=b(c,"BLOCKQUOTE",{class:!0});var u=k(e);l=b(u,"P",{class:!0});var i=k(l);n=E(i,t),i.forEach(f),o=q(u),s=b(u,"P",{class:!0});var y=k(s);r=E(y,p),y.forEach(f),u.forEach(f),this.h()},h(){g(l,"class","svelte-1vfx2vb"),g(s,"class","author svelte-1vfx2vb"),g(e,"class","svelte-1vfx2vb")},m(c,u){m(c,e,u),h(e,l),h(l,n),h(e,o),h(e,s),h(s,r)},p:_,i:_,o:_,d(c){c&&f(e)}}}function Z(a){let e,l;return e=new V({props:{cursor:"var(--text)",cascade:!0,$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){Q(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,n){const o={};n&16&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function ee(a){let e,l,t=a[2].content+"",n,o,s,p=a[2].author+"",r;return{c(){e=v("blockquote"),l=v("p"),n=w(t),o=x(),s=v("p"),r=w(p),this.h()},l(c){e=b(c,"BLOCKQUOTE",{class:!0});var u=k(e);l=b(u,"P",{class:!0});var i=k(l);n=E(i,t),i.forEach(f),o=q(u),s=b(u,"P",{class:!0});var y=k(s);r=E(y,p),y.forEach(f),u.forEach(f),this.h()},h(){g(l,"class","svelte-1vfx2vb"),g(s,"class","author svelte-1vfx2vb"),g(e,"class","svelte-1vfx2vb")},m(c,u){m(c,e,u),h(e,l),h(l,n),h(e,o),h(e,s),h(s,r)},p:_,d(c){c&&f(e)}}}function te(a){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function le(a){let e,l,t={ctx:a,current:null,token:null,hasCatch:!0,pending:te,then:X,catch:J,value:2,error:3,blocks:[,,,]};return N(a[1],t),{c(){e=P(),t.block.c()},l(n){e=P(),t.block.l(n)},m(n,o){m(n,e,o),t.block.m(n,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(n,[o]){a=n,R(t,a,o)},i(n){l||(d(t.block),l=!0)},o(n){for(let o=0;o<3;o+=1){const s=t.blocks[o];$(s)}l=!1},d(n){n&&f(e),t.block.d(n),t.token=null,t=null}}}async function oe(){const a=await fetch("https://api.quotable.io/random"),e=await a.json();if(a.ok)return e;throw new Error(e)}function ne(a,e,l){const t=!0;let n=oe();return[t,n]}class re extends O{constructor(e){super();T(this,e,ne,le,S,{typewriter:0})}get typewriter(){return this.$$.ctx[0]}}const{document:I}=D;function K(a,e,l){const t=a.slice();return t[3]=e[l],t}function L(a){let e,l;return e=new re({}),{c(){Q(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){$(e.$$.fragment,t),l=!1},d(t){C(e,t)}}}function se(a){let e,l,t,n,o={length:a[0]},s=[];for(let r=0;r<o.length;r+=1)s[r]=L(K(a,o,r));const p=r=>$(s[r],1,1,()=>{s[r]=null});return t=new G({}),t.$on("click",a[1]),{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=x(),l=v("div"),Q(t.$$.fragment),this.h()},l(r){for(let u=0;u<s.length;u+=1)s[u].l(r);e=q(r),l=b(r,"DIV",{id:!0});var c=k(l);j(t.$$.fragment,c),c.forEach(f),this.h()},h(){g(l,"id","add_button")},m(r,c){for(let u=0;u<s.length;u+=1)s[u].m(r,c);m(r,e,c),m(r,l,c),B(t,l,null),n=!0},p(r,c){if(c&1){const u=o.length;o={length:r[0]};let i;for(i=u;i<o.length;i+=1)K(r,o,i),s[i]?d(s[i],1):(s[i]=L(),s[i].c(),d(s[i],1),s[i].m(e.parentNode,e));for(F(),i=o.length;i<s.length;i+=1)p(i);M()}},i(r){if(!n){for(let c=0;c<o.length;c+=1)d(s[c]);d(t.$$.fragment,r),n=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)$(s[c]);$(t.$$.fragment,r),n=!1},d(r){W(s,r),r&&f(e),r&&f(l),C(t)}}}function ae(a){let e,l,t,n;return t=new H({props:{title:"Quotes",$$slots:{default:[se]},$$scope:{ctx:a}}}),{c(){e=x(),l=x(),Q(t.$$.fragment),this.h()},l(o){z('[data-svelte="svelte-1fzxoal"]',I.head).forEach(f),e=q(o),l=q(o),j(t.$$.fragment,o),this.h()},h(){I.title="Spotify Waveforms"},m(o,s){m(o,e,s),m(o,l,s),B(t,o,s),n=!0},p(o,[s]){const p={};s&65&&(p.$$scope={dirty:s,ctx:o}),t.$set(p)},i(o){n||(d(t.$$.fragment,o),n=!0)},o(o){$(t.$$.fragment,o),n=!1},d(o){o&&f(e),o&&f(l),C(t,o)}}}function ce(a,e,l){let t;A(()=>{t=document.getElementById("add_button")});let n=1;function o(){l(0,n+=1),setTimeout(function(){t.scrollIntoView({block:"center"})},100)}return[n,o]}class _e extends O{constructor(e){super();T(this,e,ce,ae,S,{})}}export{_e as default};
