import{K as J,S as C,i as L,s as S,e as v,L as I,c as p,a as m,M,d as f,b as l,f as V,F as _,N as A,O as q,P as K,l as O,t as P,g as Q,h as U,k as T,j as W,n as z,m as X,Q as Y,R as j,o as Z,x as ee,u as te,T as se,v as re,J as ae}from"./vendor-cdbb4087.js";import{b as D}from"./paths-28a87002.js";const le=()=>{const r=J("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session}},ne={subscribe(r){return le().page.subscribe(r)}};function oe(r){let t,e,s,a,i,d;return{c(){t=v("button"),e=I("svg"),s=I("path"),a=I("path"),this.h()},l(c){t=p(c,"BUTTON",{class:!0,"aria-pressed":!0});var u=m(t);e=M(u,"svg",{viewBox:!0,xmlns:!0,"fill-rule":!0,"clip-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,class:!0});var g=m(e);s=M(g,"path",{d:!0}),m(s).forEach(f),a=M(g,"path",{d:!0}),m(a).forEach(f),g.forEach(f),u.forEach(f),this.h()},h(){l(s,"d","M6.507 16.127A8.983 8.983 0 013 9c0-4.966 4.033-9 9-9 4.966 0 9 4.034 9 9 0 2.9-1.374 5.481-3.507 7.126l.003.003c-.996 1.038-.996 1.038-.996 2.83h-9c0-1.791 0-1.791-.996-2.83l.003-.003zm9.835-.962c-.667.702-.96 1.106-1.132 1.598-.07.198-.119.416-.152.695H8.941a3.132 3.132 0 00-.151-.695c-.173-.493-.465-.896-1.132-1.598a1.513 1.513 0 00-.235-.225A7.49 7.49 0 014.5 9c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.49 7.49 0 01-2.923 5.94 1.513 1.513 0 00-.235.225z"),l(a,"d","M16.5 17.5h-9v3.841c0 1.468 1.237 2.66 2.761 2.66h3.478c1.523 0 2.761-1.192 2.761-2.66V17.5zM15 19v2.341c0 .656-.58 1.16-1.261 1.16H10.26C9.582 22.5 9 21.996 9 21.34V19h6z"),l(e,"viewBox","0 0 24 24"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"fill-rule","evenodd"),l(e,"clip-rule","evenodd"),l(e,"stroke-linejoin","round"),l(e,"stroke-miterlimit","2"),l(e,"class","svelte-1m0sput"),l(t,"class","svgo-button svelte-1m0sput"),l(t,"aria-pressed",r[0])},m(c,u){V(c,t,u),_(t,e),_(e,s),_(e,a),i||(d=[A(t,"click",r[1]),A(t,"mousedown",r[2]),A(t,"blur",r[3]),A(t,"mouseout",r[4])],i=!0)},p(c,[u]){u&1&&l(t,"aria-pressed",c[0])},i:q,o:q,d(c){c&&f(t),i=!1,K(d)}}}function ie(r,t,e){let s=!1;return[s,()=>{document.documentElement.classList.toggle("theme-flip")},()=>{e(0,s=!0)},()=>e(0,s=!1),()=>e(0,s=!1)]}class ce extends C{constructor(t){super();L(this,t,ie,oe,S,{})}}function R(r,t,e){const s=r.slice();return s[2]=t[e],s}function F(r){let t,e,s=r[2].label+"",a,i;return{c(){t=v("div"),e=v("a"),a=P(s),this.h()},l(d){t=p(d,"DIV",{class:!0});var c=m(t);e=p(c,"A",{"sveltekit:prefetch":!0,href:!0});var u=m(e);a=Q(u,s),u.forEach(f),c.forEach(f),this.h()},h(){l(e,"sveltekit:prefetch",""),l(e,"href",i=`${D}/${r[2].href}`),l(t,"class","svelte-1x4nsf9")},m(d,c){V(d,t,c),_(t,e),_(e,a)},p(d,c){c&1&&s!==(s=d[2].label+"")&&U(a,s),c&1&&i!==(i=`${D}/${d[2].href}`)&&l(e,"href",i)},d(d){d&&f(t)}}}function G(r){let t,e=r[1].path!==`/${r[2].href}`&&F(r);return{c(){e&&e.c(),t=O()},l(s){e&&e.l(s),t=O()},m(s,a){e&&e.m(s,a),V(s,t,a)},p(s,a){s[1].path!==`/${s[2].href}`?e?e.p(s,a):(e=F(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(s){e&&e.d(s),s&&f(t)}}}function ue(r){let t,e,s,a,i,d,c,u,g,y,E,b,x,$=r[0],h=[];for(let o=0;o<$.length;o+=1)h[o]=G(R(r,$,o));return b=new ce({}),{c(){t=v("header"),e=v("nav"),s=v("div"),a=v("a"),i=v("img"),c=T(),u=v("div"),g=T();for(let o=0;o<h.length;o+=1)h[o].c();y=T(),E=v("div"),W(b.$$.fragment),this.h()},l(o){t=p(o,"HEADER",{id:!0,role:!0,class:!0});var k=m(t);e=p(k,"NAV",{class:!0});var n=m(e);s=p(n,"DIV",{style:!0,class:!0});var w=m(s);a=p(w,"A",{href:!0,id:!0,style:!0,class:!0});var B=m(a);i=p(B,"IMG",{src:!0,alt:!0}),B.forEach(f),w.forEach(f),c=z(n),u=p(n,"DIV",{style:!0,class:!0}),m(u).forEach(f),g=z(n);for(let H=0;H<h.length;H+=1)h[H].l(n);y=z(n),E=p(n,"DIV",{class:!0});var N=m(E);X(b.$$.fragment,N),N.forEach(f),n.forEach(f),k.forEach(f),this.h()},h(){Y(i.src,d=`${D}/favicon.svg`)||l(i,"src",d),l(i,"alt","Logo"),l(a,"href",`${D}/`),l(a,"id","link-to-base"),j(a,"display","block"),j(a,"max-width","2em"),l(a,"class","svelte-1x4nsf9"),j(s,"flex-grow","3"),l(s,"class","svelte-1x4nsf9"),j(u,"flex-grow","40"),l(u,"class","svelte-1x4nsf9"),l(E,"class","svelte-1x4nsf9"),l(e,"class","switcher"),l(t,"id","page-top"),l(t,"role","banner"),l(t,"class","pad")},m(o,k){V(o,t,k),_(t,e),_(e,s),_(s,a),_(a,i),_(e,c),_(e,u),_(e,g);for(let n=0;n<h.length;n+=1)h[n].m(e,null);_(e,y),_(e,E),Z(b,E,null),x=!0},p(o,[k]){if(k&3){$=o[0];let n;for(n=0;n<$.length;n+=1){const w=R(o,$,n);h[n]?h[n].p(w,k):(h[n]=G(w),h[n].c(),h[n].m(e,y))}for(;n<h.length;n+=1)h[n].d(1);h.length=$.length}},i(o){x||(ee(b.$$.fragment,o),x=!0)},o(o){te(b.$$.fragment,o),x=!1},d(o){o&&f(t),se(h,o),re(b)}}}function he(r,t,e){let s;ae(r,ne,i=>e(1,s=i));let{links:a=[]}=t;return console.log(s.path),r.$$set=i=>{"links"in i&&e(0,a=i.links)},[a,s]}class _e extends C{constructor(t){super();L(this,t,he,ue,S,{links:0})}}export{_e as H};
