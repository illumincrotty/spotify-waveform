import{S as w,i as b,s as x,v as p,w as g,x as h,p as $,n as _,A as d,J as M,u as y,e as j,c as D,a as S,d as k,b as A,f as L,Y as P}from"../../chunks/vendor-7791b14a.js";import{g as l}from"../../chunks/navigation-51f4a605.js";import{b as m}from"../../chunks/paths-28a87002.js";import{t as v}from"../../chunks/storeSession-26f31574.js";import{v as C}from"../../chunks/authentication-336cfe27.js";import{P as E}from"../../chunks/page-9c97327a.js";import{L as R}from"../../chunks/loader-ca43e76f.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/buttonBase-968700bd.js";function T(c){let s,a,e;return a=new R({}),{c(){s=j("div"),p(a.$$.fragment),this.h()},l(t){s=D(t,"DIV",{class:!0});var o=S(s);g(a.$$.fragment,o),o.forEach(k),this.h()},h(){A(s,"class","center-i")},m(t,o){L(t,s,o),h(a,s,null),e=!0},i(t){e||($(a.$$.fragment,t),e=!0)},o(t){_(a.$$.fragment,t),e=!1},d(t){t&&k(s),d(a)}}}function q(c){let s,a;return s=new E({props:{title:"Authenticating",$$slots:{default:[T]},$$scope:{ctx:c}}}),{c(){p(s.$$.fragment)},l(e){g(s.$$.fragment,e)},m(e,t){h(s,e,t),a=!0},p(e,[t]){const o={};t&8&&(o.$$scope={dirty:t,ctx:e}),s.$set(o)},i(e){a||($(s.$$.fragment,e),a=!0)},o(e){_(s.$$.fragment,e),a=!1},d(e){d(s,e)}}}function z(c,s,a){let e;M(c,v,r=>a(0,e=r)),y(()=>{e!=="empty"?(console.log("already exists"),console.log(e),l(`${m}/data`)):o()});const t=({status:r,error:u,redirect:i})=>{const f=i!=null?i:`${m}/#${r}=${u}`;l(f)},o=async()=>{const r=new URLSearchParams(window.location.search),u=r.get("code"),i=r.get("state");if(!u)return t({status:302,error:"Missing Code Data"});i||t({status:302,error:"Missing State Data"});const f=await C(u,i);if(f.ok){const n=await f.json();(n==null?void 0:n.access_token)||t({status:412,error:"Missing Access Token"}),(n==null?void 0:n.refresh_token)||t({status:412,error:"Missing Refresh Token"}),(n==null?void 0:n.expires_in)||t({status:412,error:"Missing Expiration"}),P(v,e={access_token:n.access_token,refresh_token:n.refresh_token,expires_at:Date.now()+1e3*+n.expires_in},e),console.log("Debug: 200"),console.log(e),await l(`${m}/data`)}else console.log("1"),t({status:404,error:"response not ok"})};return[]}class K extends w{constructor(s){super();b(this,s,z,q,x,{})}}export{K as default};
