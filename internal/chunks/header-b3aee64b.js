import{K as ie,S as R,i as G,s as K,v as H,w as I,x as S,p as N,n as P,A as x,F as O,L as Q,j as V,M as J,a as p,d as i,l as L,b as c,f as b,N as Y,e as _,t as Z,c as g,g as ee,E as d,O as ue,k as te,h as fe,P as he,Q as C,R as me}from"./vendor-2fcdb5a7.js";import{b as A}from"./paths-94b66ca7.js";import{a as se,b as ae}from"./storeSession-c7aabff2.js";import{B as re}from"./buttonBase-0387f9a7.js";const de=()=>{const r=ie("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session}},pe={subscribe(r){return de().page.subscribe(r)}};function _e(r){let t,e,s;return{c(){t=Q("path"),e=V(),s=Q("path"),this.h()},l(a){t=J(a,"path",{d:!0}),p(t).forEach(i),e=L(a),s=J(a,"path",{d:!0}),p(s).forEach(i),this.h()},h(){c(t,"d","M6.507 16.127A8.983 8.983 0 013 9c0-4.966 4.033-9 9-9 4.966 0 9 4.034 9 9 0 2.9-1.374 5.481-3.507 7.126l.003.003c-.996 1.038-.996 1.038-.996 2.83h-9c0-1.791 0-1.791-.996-2.83l.003-.003zm9.835-.962c-.667.702-.96 1.106-1.132 1.598-.07.198-.119.416-.152.695H8.941a3.132 3.132 0 00-.151-.695c-.173-.493-.465-.896-1.132-1.598a1.513 1.513 0 00-.235-.225A7.49 7.49 0 014.5 9c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.49 7.49 0 01-2.923 5.94 1.513 1.513 0 00-.235.225z"),c(s,"d","M16.5 17.5h-9v3.841c0 1.468 1.237 2.66 2.761 2.66h3.478c1.523 0 2.761-1.192 2.761-2.66V17.5zM15 19v2.341c0 .656-.58 1.16-1.261 1.16H10.26C9.582 22.5 9 21.996 9 21.34V19h6z")},m(a,l){b(a,t,l),b(a,e,l),b(a,s,l)},d(a){a&&i(t),a&&i(e),a&&i(s)}}}function ge(r){let t,e;return t=new re({props:{buttonLabel:"Toggle light mode or dark mode",svgLabel:"Light Bulb",$$slots:{default:[_e]},$$scope:{ctx:r}}}),t.$on("click",r[1]),{c(){H(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,a){S(t,s,a),e=!0},p(s,[a]){const l={};a&4&&(l.$$scope={dirty:a,ctx:s}),t.$set(l)},i(s){e||(N(t.$$.fragment,s),e=!0)},o(s){P(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function $e(r,t,e){let s;return O(r,se,l=>e(0,s=l)),[s,()=>{Y(se,s=!s,s),console.log(s),document.documentElement.classList.toggle("theme-flip")}]}class ve extends R{constructor(t){super();G(this,t,$e,ge,K,{})}}function be(r){let t;return{c(){t=Q("path"),this.h()},l(e){t=J(e,"path",{d:!0,"fill-rule":!0}),p(t).forEach(i),this.h()},h(){c(t,"d","M13.525 1.212c-3.658-.498-7.33.876-9.734 3.629a10.95 10.95 0 00-2.579 8.684c.578 4.241 3.767 7.85 7.935 8.981.941.256 1.901.386 2.852.386l.154-.001a3.272 3.272 0 002.741-1.553 3.256 3.256 0 00.166-3.136l-.216-.453a2.09 2.09 0 01.102-2.083 2.183 2.183 0 012.806-.822l.449.214a3.24 3.24 0 001.417.326c1.778 0 3.247-1.45 3.274-3.232a10.834 10.834 0 00-.385-3.006c-1.132-4.167-4.741-7.356-8.982-7.934zm5.618 11.882l-.449-.214c-1.991-.956-4.433-.216-5.593 1.627-.804 1.281-.885 2.806-.222 4.185l.217.453c.164.342.144.723-.056 1.047a1.08 1.08 0 01-.919.521h-.122a8.768 8.768 0 01-2.282-.308c-3.336-.905-5.885-3.789-6.346-7.173-.349-2.565.384-5.036 2.062-6.959a8.715 8.715 0 017.799-2.902c3.384.461 6.268 3.011 7.173 6.346a8.68 8.68 0 01.307 2.404c-.013.879-.92 1.288-1.569.973zm-12.045-.005a1.635 1.635 0 11-.001 3.27 1.635 1.635 0 01.001-3.27zm0-4.357a1.635 1.635 0 11-.001 3.27 1.635 1.635 0 01.001-3.27zm7.625-3.267a1.634 1.634 0 110 3.269 1.634 1.634 0 010-3.269zm-4.357 0a1.634 1.634 0 110 3.269 1.634 1.634 0 010-3.269z"),c(t,"fill-rule","nonzero")},m(e,s){b(e,t,s)},d(e){e&&i(t)}}}function ke(r){let t,e;return t=new re({props:{buttonLabel:"Toggle Theme",svgLabel:"Palette icon",$$slots:{default:[be]},$$scope:{ctx:r}}}),t.$on("click",r[1]),{c(){H(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,a){S(t,s,a),e=!0},p(s,[a]){const l={};a&4&&(l.$$scope={dirty:a,ctx:s}),t.$set(l)},i(s){e||(N(t.$$.fragment,s),e=!0)},o(s){P(t.$$.fragment,s),e=!1},d(s){x(t,s)}}}function Ee(r,t,e){let s;return O(r,ae,l=>e(0,s=l)),[s,()=>{const u=+window.getComputedStyle(document.documentElement).getPropertyValue("--current-theme"),f=u%4+1;Y(ae,s=f,s),console.log(u),document.documentElement.style.setProperty("--current-theme",`${f}`),document.documentElement.style.setProperty("--theme-components",`var(--theme-${f}-components)`)}]}class we extends R{constructor(t){super();G(this,t,Ee,ke,K,{})}}function le(r,t,e){const s=r.slice();return s[2]=t[e],s}function ne(r){let t,e,s,a;return{c(){t=_("div"),e=_("a"),s=Z("Home"),this.h()},l(l){t=g(l,"DIV",{class:!0});var u=p(t);e=g(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var f=p(e);s=ee(f,"Home"),f.forEach(i),u.forEach(i),this.h()},h(){c(e,"sveltekit:prefetch",""),c(e,"href",a=`${A}/`),c(e,"class","svelte-1gkj2au"),c(t,"class","shadow-pop")},m(l,u){b(l,t,u),d(t,e),d(e,s)},p:ue,d(l){l&&i(t)}}}function oe(r){let t,e,s=r[2].label+"",a,l;return{c(){t=_("div"),e=_("a"),a=Z(s),this.h()},l(u){t=g(u,"DIV",{class:!0});var f=p(t);e=g(f,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var $=p(e);a=ee($,s),$.forEach(i),f.forEach(i),this.h()},h(){c(e,"sveltekit:prefetch",""),c(e,"href",l=`${A}/${r[2].href}`),c(e,"class","svelte-1gkj2au"),c(t,"class","shadow-pop")},m(u,f){b(u,t,f),d(t,e),d(e,a)},p(u,f){f&1&&s!==(s=u[2].label+"")&&fe(a,s),f&1&&l!==(l=`${A}/${u[2].href}`)&&c(e,"href",l)},d(u){u&&i(t)}}}function ce(r){let t,e=r[1].url.pathname!==`/${r[2].href}`&&oe(r);return{c(){e&&e.c(),t=te()},l(s){e&&e.l(s),t=te()},m(s,a){e&&e.m(s,a),b(s,t,a)},p(s,a){s[1].url.pathname!==`/${s[2].href}`?e?e.p(s,a):(e=oe(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(s){e&&e.d(s),s&&i(t)}}}function ye(r){let t,e,s,a,l,u,f,$,T,D,M,w,k,F,y,E,B,h=r[1].url.pathname!=="/"&&ne(),z=r[0],m=[];for(let o=0;o<z.length;o+=1)m[o]=ce(le(r,z,o));return k=new ve({}),E=new we({}),{c(){t=_("header"),e=_("nav"),s=_("div"),a=_("a"),l=_("img"),f=V(),$=_("div"),T=V(),h&&h.c(),D=V();for(let o=0;o<m.length;o+=1)m[o].c();M=V(),w=_("div"),H(k.$$.fragment),F=V(),y=_("div"),H(E.$$.fragment),this.h()},l(o){t=g(o,"HEADER",{id:!0,role:!0,class:!0});var v=p(t);e=g(v,"NAV",{class:!0});var n=p(e);s=g(n,"DIV",{style:!0});var j=p(s);a=g(j,"A",{href:!0,id:!0,style:!0,class:!0});var U=p(a);l=g(U,"IMG",{src:!0,alt:!0}),U.forEach(i),j.forEach(i),f=L(n),$=g(n,"DIV",{style:!0}),p($).forEach(i),T=L(n),h&&h.l(n),D=L(n);for(let q=0;q<m.length;q+=1)m[q].l(n);M=L(n),w=g(n,"DIV",{class:!0});var W=p(w);I(k.$$.fragment,W),W.forEach(i),F=L(n),y=g(n,"DIV",{class:!0});var X=p(y);I(E.$$.fragment,X),X.forEach(i),n.forEach(i),v.forEach(i),this.h()},h(){he(l.src,u=`${A}/favicon.svg`)||c(l,"src",u),c(l,"alt","Logo"),c(a,"href",`${A}/`),c(a,"id","link-to-base"),C(a,"display","block"),C(a,"max-width","2em"),c(a,"class","svelte-1gkj2au"),C(s,"flex-grow","3"),C($,"flex-grow","40"),c(w,"class","shadow-pop"),c(y,"class","shadow-pop"),c(e,"class","switcher"),c(t,"id","page-top"),c(t,"role","banner"),c(t,"class","center")},m(o,v){b(o,t,v),d(t,e),d(e,s),d(s,a),d(a,l),d(e,f),d(e,$),d(e,T),h&&h.m(e,null),d(e,D);for(let n=0;n<m.length;n+=1)m[n].m(e,null);d(e,M),d(e,w),S(k,w,null),d(e,F),d(e,y),S(E,y,null),B=!0},p(o,[v]){if(o[1].url.pathname!=="/"?h?h.p(o,v):(h=ne(),h.c(),h.m(e,D)):h&&(h.d(1),h=null),v&3){z=o[0];let n;for(n=0;n<z.length;n+=1){const j=le(o,z,n);m[n]?m[n].p(j,v):(m[n]=ce(j),m[n].c(),m[n].m(e,M))}for(;n<m.length;n+=1)m[n].d(1);m.length=z.length}},i(o){B||(N(k.$$.fragment,o),N(E.$$.fragment,o),B=!0)},o(o){P(k.$$.fragment,o),P(E.$$.fragment,o),B=!1},d(o){o&&i(t),h&&h.d(),me(m,o),x(k),x(E)}}}function ze(r,t,e){let s;O(r,pe,l=>e(1,s=l));let{links:a=[]}=t;return r.$$set=l=>{"links"in l&&e(0,a=l.links)},[a,s]}class De extends R{constructor(t){super();G(this,t,ze,ye,K,{links:0})}}export{De as H};