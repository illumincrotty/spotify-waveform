import{S as L,i as N,s as w,D as H,e as _,j as b,v as E,E as S,c as d,d as m,l as y,w as q,b as a,F as k,f as v,x as A,G as D,H as C,I as F,p as j,n as I,A as G,J}from"../chunks/vendor-afb1c40f.js";import{b as K}from"../chunks/paths-28a87002.js";import{H as O}from"../chunks/header-01020b94.js";import{t as z}from"../chunks/storeSession-22863b82.js";import"../chunks/stores-440f6bf6.js";import"../chunks/button-ca07cb2d.js";function B(u){let r,l,o,i,c,p,n,f,h;n=new O({props:{links:u[0]}});const g=u[3].default,s=H(g,u,u[2],null);return{c(){r=_("link"),l=_("link"),o=_("link"),i=_("link"),c=_("link"),p=b(),E(n.$$.fragment),f=b(),s&&s.c(),this.h()},l(e){const t=S('[data-svelte="svelte-1ten0on"]',document.head);r=d(t,"LINK",{rel:!0,href:!0}),l=d(t,"LINK",{rel:!0,href:!0,type:!0}),o=d(t,"LINK",{rel:!0,href:!0}),i=d(t,"LINK",{rel:!0,href:!0,crossorigin:!0}),c=d(t,"LINK",{href:!0,rel:!0}),t.forEach(m),p=y(e),q(n.$$.fragment,e),f=y(e),s&&s.l(e),this.h()},h(){a(r,"rel","icon"),a(r,"href",""+(K+"/favicon.png")),a(l,"rel","icon"),a(l,"href",""+(K+"/favicon.svg")),a(l,"type","image/svg+xml"),a(o,"rel","preconnect"),a(o,"href","https://fonts.googleapis.com"),a(i,"rel","preconnect"),a(i,"href","https://fonts.gstatic.com"),a(i,"crossorigin",""),a(c,"href","https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"),a(c,"rel","stylesheet")},m(e,t){k(document.head,r),k(document.head,l),k(document.head,o),k(document.head,i),k(document.head,c),v(e,p,t),A(n,e,t),v(e,f,t),s&&s.m(e,t),h=!0},p(e,[t]){const $={};t&1&&($.links=e[0]),n.$set($),s&&s.p&&(!h||t&4)&&D(s,g,e,e[2],h?F(g,e[2],t,null):C(e[2]),null)},i(e){h||(j(n.$$.fragment,e),j(s,e),h=!0)},o(e){I(n.$$.fragment,e),I(s,e),h=!1},d(e){m(r),m(l),m(o),m(i),m(c),e&&m(p),G(n,e),e&&m(f),s&&s.d(e)}}}function M(u,r,l){let o;J(u,z,f=>l(4,o=f));let{$$slots:i={},$$scope:c}=r;const p="Example";let n=[{href:"random",label:"Other"}];return o!=="empty"&&(n=[{href:"data",label:"Data"},...n]),u.$$set=f=>{"$$scope"in f&&l(2,c=f.$$scope)},[n,p,c,i]}class W extends L{constructor(r){super();N(this,r,M,B,w,{title:1})}get title(){return this.$$.ctx[1]}}export{W as default};