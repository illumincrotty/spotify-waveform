import{S as H,i as S,s as E,e as h,j as g,v as b,E as q,c as $,d as m,l as y,w as v,b as u,F as d,f as k,x as j,p,n as _,A as L,G as A,u as D,H as G,k as K,I as O,J as C,K as F,m as J,o as M}from"../../chunks/vendor-cee53150.js";import{b as N}from"../../chunks/paths-28a87002.js";import{H as T}from"../../chunks/header-4264c2c9.js";import{O as z}from"../../chunks/overlayLogin-cbdb0430.js";import{t as w}from"../../chunks/storeSession-bb05b2b6.js";import{B as P}from"../../chunks/base-f4d5fd0f.js";import"../../chunks/buttonBase-4b7a79ec.js";import"../../chunks/spotifyButton-9c693a52.js";import"../../chunks/overlay-a9d99749.js";import"../../chunks/stateGen-632403f6.js";import"../../chunks/singletons-a42a5e91.js";function B(f){let s,o;return s=new z({}),{c(){b(s.$$.fragment)},l(r){v(s.$$.fragment,r)},m(r,l){j(s,r,l),o=!0},i(r){o||(p(s.$$.fragment,r),o=!0)},o(r){_(s.$$.fragment,r),o=!1},d(r){L(s,r)}}}function Q(f){let s,o,r,l,i;s=new T({props:{links:[{href:"data",label:"Data"},{href:"data/search",label:"Search"},{href:"data/top",label:"Top Data"}]}});const c=f[3].default,a=G(c,f,f[4],null);let t=f[0]&&f[1]==="empty"&&B();return{c(){b(s.$$.fragment),o=g(),a&&a.c(),r=g(),t&&t.c(),l=K()},l(e){v(s.$$.fragment,e),o=y(e),a&&a.l(e),r=y(e),t&&t.l(e),l=K()},m(e,n){j(s,e,n),k(e,o,n),a&&a.m(e,n),k(e,r,n),t&&t.m(e,n),k(e,l,n),i=!0},p(e,n){a&&a.p&&(!i||n&16)&&O(a,c,e,e[4],i?F(c,e[4],n,null):C(e[4]),null),e[0]&&e[1]==="empty"?t?n&3&&p(t,1):(t=B(),t.c(),p(t,1),t.m(l.parentNode,l)):t&&(J(),_(t,1,1,()=>{t=null}),M())},i(e){i||(p(s.$$.fragment,e),p(a,e),p(t),i=!0)},o(e){_(s.$$.fragment,e),_(a,e),_(t),i=!1},d(e){L(s,e),e&&m(o),a&&a.d(e),e&&m(r),t&&t.d(e),e&&m(l)}}}function R(f){let s,o,r,l,i,c,a,t;return a=new P({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){s=h("link"),o=h("link"),r=h("link"),l=h("link"),i=h("link"),c=g(),b(a.$$.fragment),this.h()},l(e){const n=q('[data-svelte="svelte-1o76hds"]',document.head);s=$(n,"LINK",{rel:!0,href:!0}),o=$(n,"LINK",{rel:!0,href:!0,type:!0}),r=$(n,"LINK",{rel:!0,href:!0}),l=$(n,"LINK",{rel:!0,href:!0,crossorigin:!0}),i=$(n,"LINK",{href:!0,rel:!0}),n.forEach(m),c=y(e),v(a.$$.fragment,e),this.h()},h(){u(s,"rel","icon"),u(s,"href",""+(N+"/favicon.png")),u(o,"rel","icon"),u(o,"href",""+(N+"/favicon.svg")),u(o,"type","image/svg+xml"),u(r,"rel","preconnect"),u(r,"href","https://fonts.googleapis.com"),u(l,"rel","preconnect"),u(l,"href","https://fonts.gstatic.com"),u(l,"crossorigin",""),u(i,"href","https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"),u(i,"rel","stylesheet")},m(e,n){d(document.head,s),d(document.head,o),d(document.head,r),d(document.head,l),d(document.head,i),k(e,c,n),j(a,e,n),t=!0},p(e,[n]){const I={};n&19&&(I.$$scope={dirty:n,ctx:e}),a.$set(I)},i(e){t||(p(a.$$.fragment,e),t=!0)},o(e){_(a.$$.fragment,e),t=!1},d(e){m(s),m(o),m(r),m(l),m(i),e&&m(c),L(a,e)}}}function U(f,s,o){let r;A(f,w,t=>o(1,r=t));let{$$slots:l={},$$scope:i}=s;const c="Example";let a=!1;return D(()=>{r!=="empty"&&(w.valid()||w.refresh()),o(0,a=!0)}),f.$$set=t=>{"$$scope"in t&&o(4,i=t.$$scope)},[a,r,c,l,i]}class ne extends H{constructor(s){super();S(this,s,U,R,E,{title:2})}get title(){return this.$$.ctx[2]}}export{ne as default};
