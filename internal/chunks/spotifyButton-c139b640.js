var B=Object.defineProperty;var S=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(t,e,o)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,b=(t,e)=>{for(var o in e||(e={}))C.call(e,o)&&k(t,o,e[o]);if(S)for(var o of S(e))E.call(e,o)&&k(t,o,e[o]);return t};import{S as j,i as $,s as H,e as U,t as V,P as x,c as N,a as f,g as O,Q as z,d as u,b as h,f as I,G as m,H as T,N as g,T as R,A}from"./vendor-4914c756.js";import{b as L}from"./paths-28a87002.js";import{r as D}from"./singletons-12a22614.js";const J=(t=32)=>crypto.getRandomValues(new Uint8Array(t)),M=(t=32)=>P(J(t)),P=t=>window.btoa(String.fromCodePoint(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),p="9f38f4f91f784811b42898766ee7211a",G=async t=>{const e=new TextEncoder().encode(t),o=await crypto.subtle.digest("SHA-256",e);return P(new Uint8Array(o))},W=async()=>{const t=M(64),e=M(64),o={client_id:p,redirect_uri:`https://illumincrotty.github.io${L}/authorized`,state:`${e}`,scope:"user-read-private user-top-read",response_type:"code",show_dialog:"false",code_challenge_method:"S256",code_challenge:await G(t)};return{login:()=>{q(`https://accounts.spotify.com/authorize/?${new URLSearchParams(b({},o)).toString()}`,"Spotify Login",500,700)},message:async(a,i)=>{if(e===a){const n=await fetch("https://accounts.spotify.com/api/token",{method:"POST",body:new URLSearchParams({grant_type:"authorization_code",code:i,redirect_uri:o.redirect_uri,client_id:p,code_verifier:t})});if(n.ok){const c=await n.json();console.log(c);const l={access_token:c.access_token,refresh_token:c.refresh_token,expires_at:Date.now()+1e3*+c.expires_in};return sessionStorage.setItem("token_set",JSON.stringify(l)),Promise.resolve()}else console.error(n)}return Promise.reject()}}},s1=async()=>{const t=sessionStorage.getItem("token_set");if(t){const e=JSON.parse(t);if(e.expires_at>=Date.now())return!1;const o=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:e.refresh_token,client_id:p})});if(console.log(o),console.log(o),o.ok){const s=await o.json();console.log(s);const r={access_token:s.access_token,refresh_token:e.refresh_token,expires_at:Date.now()+1e3*+s.expires_in};return sessionStorage.setItem("token_set",JSON.stringify(r)),!0}return!1}return!1},q=(t,e,o,s)=>{var _,w,v,y;const r=(_=window.screenLeft)!=null?_:window.screenX,a=(w=window.screenTop)!=null?w:window.screenY,i=((v=window.innerWidth)!=null?v:document.documentElement.clientWidth)?document.documentElement.clientWidth:screen.width,n=((y=window.innerHeight)!=null?y:document.documentElement.clientHeight)?document.documentElement.clientHeight:screen.height,c=(i-o)/2+r,l=(n-s)/2+a,d=window.open(t,e,`scrollbars=yes,width=${o},height=${s},top=${l},left=${c}`);return"focus"in window&&(d==null||d.focus()),d},Q=D,X=Y;async function Y(t,e){return Q.goto(t,e,[])}function F(t){let e,o,s,r,a,i;return{c(){e=U("button"),o=V("Login to "),s=x("svg"),r=x("path"),this.h()},l(n){e=N(n,"BUTTON",{class:!0});var c=f(e);o=O(c,"Login to "),s=z(c,"svg",{xmlns:!0,viewBox:!0,class:!0});var l=f(s);r=z(l,"path",{d:!0}),f(r).forEach(u),l.forEach(u),c.forEach(u),this.h()},h(){h(r,"d","M183.376 100.689c-35.992-21.374-95.36-23.34-129.719-12.912-5.517 1.674-11.352-1.441-13.024-6.958-1.672-5.52 1.44-11.351 6.961-13.028 39.442-11.974 105.007-9.66 146.442 14.936 4.964 2.945 6.592 9.354 3.65 14.31-2.945 4.962-9.36 6.598-14.31 3.652zm-1.179 31.659c-2.524 4.097-7.881 5.381-11.973 2.867-30.007-18.445-75.763-23.788-111.263-13.013-4.604 1.391-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.857C94.456 93.24 144.869 99.2 179.333 120.38c4.092 2.52 5.38 7.88 2.864 11.968zm-13.662 30.404a6.953 6.953 0 01-9.568 2.316c-26.221-16.025-59.224-19.645-98.09-10.767a6.957 6.957 0 01-8.333-5.233 6.95 6.95 0 015.234-8.332c42.533-9.723 79.018-5.538 108.449 12.445a6.959 6.959 0 012.308 9.57zM117.328 1.702C55.662 1.703 5.67 51.693 5.67 113.359c0 61.671 49.992 111.66 111.658 111.66 61.668 0 111.657-49.989 111.657-111.66 0-61.666-49.989-111.655-111.657-111.655M309.452 104.781c-19.279-4.597-22.712-7.824-22.712-14.602 0-6.407 6.032-10.716 15-10.716 8.693 0 17.312 3.273 26.35 10.012.274.204.617.285.954.232.337-.051.635-.235.833-.515l9.414-13.27c.386-.545.281-1.3-.24-1.717-10.756-8.63-22.868-12.826-37.026-12.826-20.816 0-35.356 12.49-35.356 30.365 0 19.167 12.543 25.953 34.218 31.192 18.448 4.25 21.561 7.809 21.561 14.174 0 7.051-6.296 11.435-16.428 11.435-11.252 0-20.432-3.79-30.7-12.682a1.331 1.331 0 00-.927-.302c-.338.028-.649.186-.865.445l-10.555 12.562c-.442.521-.386 1.3.124 1.75 11.948 10.666 26.64 16.3 42.496 16.3 22.431 0 36.926-12.257 36.926-31.226 0-16.032-9.579-24.898-33.067-30.61M409.55 126.268c0 13.537-8.34 22.984-20.28 22.984-11.803 0-20.707-9.876-20.707-22.984 0-13.106 8.904-22.983 20.708-22.983 11.748 0 20.278 9.663 20.278 22.983zm-16.283-40.5c-9.723 0-17.698 3.83-24.274 11.676v-8.832c0-.697-.565-1.265-1.262-1.265h-17.262c-.697 0-1.261.568-1.261 1.265v98.136c0 .697.564 1.265 1.261 1.265h17.262c.697 0 1.262-.568 1.262-1.265v-30.976c6.578 7.381 14.554 10.987 24.274 10.987 18.065 0 36.353-13.907 36.353-40.491 0-26.59-18.288-40.5-36.353-40.5M476.497 149.393c-12.374 0-21.704-9.942-21.704-23.125 0-13.238 9.007-22.845 21.419-22.845 12.455 0 21.847 9.942 21.847 23.134 0 13.236-9.068 22.836-21.562 22.836zm0-63.625c-23.265 0-41.492 17.915-41.492 40.789 0 22.626 18.102 40.353 41.207 40.353 23.348 0 41.63-17.855 41.63-40.642 0-22.71-18.157-40.5-41.345-40.5M567.525 87.347H548.53V67.925c0-.697-.562-1.264-1.26-1.264h-17.26c-.698 0-1.266.567-1.266 1.264v19.422h-8.3c-.696 0-1.258.568-1.258 1.265v14.836a1.26 1.26 0 001.258 1.264h8.3v38.39c0 15.513 7.721 23.378 22.949 23.378 6.192 0 11.33-1.279 16.17-4.024a1.26 1.26 0 00.64-1.095v-14.127a1.268 1.268 0 00-1.83-1.134c-3.325 1.673-6.54 2.445-10.133 2.445-5.538 0-8.01-2.513-8.01-8.149v-35.684h18.996c.698 0 1.259-.567 1.259-1.264V88.612c0-.697-.561-1.265-1.259-1.265M595.34 87.347h-17.263c-.697 0-1.264.568-1.264 1.265v75.313c0 .698.567 1.264 1.264 1.264h17.263c.696 0 1.264-.566 1.264-1.264V88.612c0-.697-.568-1.265-1.264-1.265M586.796 53.055c-6.837 0-12.388 5.537-12.388 12.374 0 6.843 5.55 12.386 12.388 12.386 6.836 0 12.38-5.543 12.38-12.386 0-6.837-5.544-12.374-12.38-12.374M633.708 87.423v-2.386c0-7.017 2.69-10.146 8.725-10.146 3.599 0 6.49.714 9.727 1.794a1.262 1.262 0 001.66-1.202V60.936a1.26 1.26 0 00-.892-1.21c-3.42-1.018-7.796-2.063-14.348-2.063-15.945 0-24.372 8.978-24.372 25.956v3.653h-8.293c-.696 0-1.267.567-1.267 1.264v14.912c0 .697.57 1.264 1.267 1.264h8.293v59.213c0 .698.563 1.264 1.259 1.264h17.261c.697 0 1.265-.566 1.265-1.264v-59.213h16.118L674.8 163.91c-2.803 6.22-5.559 7.457-9.321 7.457-3.042 0-6.244-.908-9.519-2.7a1.293 1.293 0 00-1.005-.095c-.33.117-.607.362-.747.683l-5.85 12.836a1.255 1.255 0 00.542 1.633c6.108 3.308 11.623 4.72 18.436 4.72 12.747 0 19.792-5.939 26.004-21.912l29.948-77.387a1.262 1.262 0 00-1.172-1.723h-17.97c-.538 0-1.02.342-1.197.847l-18.409 52.584-20.164-52.618a1.258 1.258 0 00-1.179-.812h-29.489M738.732 94.838h-3.163v4.034h3.163c1.579 0 2.521-.773 2.521-2.018 0-1.312-.942-2.016-2.521-2.016zm2.05 5.754l3.437 4.811h-2.898l-3.093-4.413h-2.659v4.413h-2.425V92.651h5.687c2.961 0 4.91 1.516 4.91 4.067 0 2.09-1.208 3.368-2.958 3.874zm-2.693-12.184c-6.222 0-10.932 4.945-10.932 11.004 0 6.054 4.676 10.934 10.868 10.934 6.222 0 10.935-4.943 10.935-11.004 0-6.054-4.679-10.934-10.87-10.934zm-.064 23.153c-6.832 0-12.148-5.487-12.148-12.15S731.263 87.2 738.09 87.2c6.831 0 12.148 5.486 12.148 12.143 0 6.664-5.381 12.22-12.212 12.22"),h(s,"xmlns","http://www.w3.org/2000/svg"),h(s,"viewBox","0 0 755.907 226.72"),h(s,"class","svelte-1swvwb7"),h(e,"class","svelte-1swvwb7")},m(n,c){I(n,e,c),m(e,o),m(e,s),m(s,r),a||(i=[T(window,"message",t[1]),T(e,"click",t[3])],a=!0)},p:g,i:g,o:g,d(n){n&&u(e),a=!1,R(i)}}}function K(t,e,o){let s,{url:r=`${L}/tools`}=e;A(()=>{W().then(n=>{o(0,s=n)})});const a=n=>{if(typeof n.data=="string"){const c=new URLSearchParams(n.data);c.get("state")&&c.get("code")&&s.message(c.get("state"),c.get("code")).then(()=>{X(r)},()=>{})}},i=()=>{s.login()};return t.$$set=n=>{"url"in n&&o(2,r=n.url)},[s,a,r,i]}class n1 extends j{constructor(e){super();$(this,e,K,F,H,{url:2})}}export{n1 as S,s1 as r};
