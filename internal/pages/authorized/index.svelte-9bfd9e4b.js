import{S as b,i as w,s as x,j as p,m as g,o as h,x as _,u as d,v as $,J as y,A as M,e as j,c as S,a as D,d as k,b as A,f as E}from"../../chunks/vendor-cdbb4087.js";import{L}from"../../chunks/loader-6cbed9a5.js";import{P}from"../../chunks/page-64d29f08.js";import{g as f}from"../../chunks/navigation-51f4a605.js";import{b as m}from"../../chunks/paths-28a87002.js";import{t as v}from"../../chunks/storeSession-2643e21d.js";import{v as C}from"../../chunks/authentication-a60c1d91.js";/* empty css                                                                */import"../../chunks/singletons-12a22614.js";function R(i){let s,n,t;return n=new L({}),{c(){s=j("div"),p(n.$$.fragment),this.h()},l(e){s=S(e,"DIV",{class:!0});var o=D(s);g(n.$$.fragment,o),o.forEach(k),this.h()},h(){A(s,"class","center-i")},m(e,o){E(e,s,o),h(n,s,null),t=!0},i(e){t||(_(n.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),t=!1},d(e){e&&k(s),$(n)}}}function T(i){let s,n;return s=new P({props:{title:"Authenticating",$$slots:{default:[R]},$$scope:{ctx:i}}}),{c(){p(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,e){h(s,t,e),n=!0},p(t,[e]){const o={};e&8&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){n||(_(s.$$.fragment,t),n=!0)},o(t){d(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function U(i,s,n){let t;y(i,v,c=>n(0,t=c)),M(()=>{t!=="empty"?(console.log("already exists"),console.log(t),f(`${m}/data`)):o()});const e=({status:c,error:u,redirect:r})=>{const l=r!=null?r:`${m}/`;f(l)},o=async()=>{const c=new URLSearchParams(window.location.search),u=c.get("code"),r=c.get("state");if(!u)return e({status:302,error:"Missing Code Data"});r||e({status:302,error:"Missing State Data"});const l=await C(u,r);if(l.ok){const a=await l.json();(a==null?void 0:a.access_token)||e({status:412,error:"Missing Access Token"}),(a==null?void 0:a.refresh_token)||e({status:412,error:"Missing Refresh Token"}),(a==null?void 0:a.expires_in)||e({status:412,error:"Missing Expiration"}),v.set({access_token:a.access_token,refresh_token:a.refresh_token,expires_at:Date.now()+1e3*+a.expires_in}),console.log("Debug: 200"),console.log(t),f(`${m}/data`)}else console.log("1"),e({status:404,error:"response not ok"});e({status:404,error:"Unknown Error"})};return[]}class K extends b{constructor(s){super();w(this,s,U,T,x,{})}}export{K as default};
