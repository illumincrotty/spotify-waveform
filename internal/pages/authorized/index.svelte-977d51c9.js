import{S as b,i as y,s as x,j as l,m,o as p,x as _,u as g,v as h,J as d,A as j,e as w,c as S,a as q,d as $,b as A,f as D,X as L}from"../../chunks/vendor-b1344eba.js";import{L as M}from"../../chunks/loader-60a167ad.js";import{P}from"../../chunks/page-9c40ea66.js";import{t as k}from"../../chunks/storeSession-e6d207ba.js";import{g as i}from"../../chunks/navigation-51f4a605.js";import{p as z}from"../../chunks/stores-efe9605b.js";import{v as C}from"../../chunks/authentication-a60c1d91.js";import{b as v}from"../../chunks/paths-28a87002.js";/* empty css                                                                */import"../../chunks/singletons-12a22614.js";function E(c){let t,n,e;return n=new M({}),{c(){t=w("div"),l(n.$$.fragment),this.h()},l(s){t=S(s,"DIV",{class:!0});var o=q(t);m(n.$$.fragment,o),o.forEach($),this.h()},h(){A(t,"class","center-i")},m(s,o){D(s,t,o),p(n,t,null),e=!0},i(s){e||(_(n.$$.fragment,s),e=!0)},o(s){g(n.$$.fragment,s),e=!1},d(s){s&&$(t),h(n)}}}function G(c){let t,n;return t=new P({props:{title:"Authenticating",$$slots:{default:[E]},$$scope:{ctx:c}}}),{c(){l(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){p(t,e,s),n=!0},p(e,[s]){const o={};s&8&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){h(t,e)}}}function I(c,t,n){let e,s;d(c,k,r=>n(0,e=r)),d(c,z,r=>n(1,s=r)),j(()=>{e!=="empty"&&(console.log("already exists"),console.log(e)),o()});const o=async()=>{const r=s.query.get("code"),u=s.query.get("state");if(!r)return{status:302,redirect:`${v}/`};if(!u)return{status:302,redirect:`${v}/`};if(r&&u){const f=await C(r,u,fetch);if(f.ok){const a=await f.json();(a==null?void 0:a.access_token)||i(""),(a==null?void 0:a.refresh_token)||i(""),(a==null?void 0:a.expires_in)||i(""),L(k,e={access_token:a.access_token,refresh_token:a.refresh_token,expires_at:Date.now()+1e3*+a.expires_in},e),console.log("Good"),console.log(e)}else i("")}};return[]}class R extends b{constructor(t){super();y(this,t,I,G,x,{})}}export{R as default};
