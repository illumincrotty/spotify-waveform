var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var h=(e,t,o)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&h(e,o,t[o]);if(f)for(var o of f(t))S.call(t,o)&&h(e,o,t[o]);return e};import{r as b,b as v}from"./paths-94b66ca7.js";const I=(e=32)=>globalThis.crypto.getRandomValues(new Uint8Array(e)),p=(e=32)=>u(I(e)),u=e=>window.btoa(String.fromCodePoint(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),x=b,k=C;async function C(e,t){return x.goto(e,t,[])}const g=`https://illumincrotty.github.io${v}/authorized`,i="9f38f4f91f784811b42898766ee7211a",N=async e=>{const t=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",t);return u(new Uint8Array(o))},R=async()=>{const e=p(64),t=p(64);localStorage.setItem("code_verifier",e),localStorage.setItem("state",t);const o={client_id:i,redirect_uri:g,state:`${t}`,scope:"user-read-private user-top-read",response_type:"code",show_dialog:"false",code_challenge_method:"S256",code_challenge:await N(e)};return void k(`https://accounts.spotify.com/authorize/?${new URLSearchParams(m({},o)).toString()}`)},T=(e,t,o=fetch)=>{const s=localStorage.getItem("state"),n=localStorage.getItem("code_verifier");if(!n)throw new Error("No Code Verifier in session");if(!s)throw new Error("No State in session");if(s!==t)throw new Error("State mismatch");return o("https://accounts.spotify.com/api/token",{method:"POST",body:new URLSearchParams({grant_type:"authorization_code",code:e,redirect_uri:g,client_id:i,code_verifier:n})})},P=async e=>{if(console.debug("refreshing"),e.expires_at>=Date.now())return e;const t=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"refresh_token",refresh_token:e.refresh_token,client_id:i})});if(t.ok){const o=await t.json();return U.set({access_token:o.access_token,refresh_token:e.refresh_token,expires_at:Date.now()+1e3*o.expires_in}),{access_token:o.access_token,refresh_token:e.refresh_token,expires_at:Date.now()+1e3*o.expires_in}}return!1},l=(e,t,o="local")=>{let s;{const r=o==="local"?localStorage.getItem(e):sessionStorage.getItem(e);s=r?JSON.parse(r):t}const n=new Set,d=r=>(n.add(r),r(s),()=>{n.delete(r)}),c=r=>{s=r,o==="local"?localStorage.setItem(e,JSON.stringify(r)):sessionStorage.setItem(e,JSON.stringify(r));for(const _ of n)_(s)};return{subscribe:d,set:c,clear:()=>{o==="local"?localStorage.removeItem(e):sessionStorage.removeItem(e)},update:r=>c(r(s)),updateAsync:async r=>c(await r(s)),operation:r=>r(s)}},A=()=>{const{subscribe:e,set:t,updateAsync:o,operation:s}=l("token","empty");return{subscribe:e,set:t,clear:()=>{t("empty")},refresh:async()=>o(async a=>a==="empty"?a:await P(a)||"empty"),valid:()=>s(a=>a!=="empty"&&a.expires_at>=Date.now())}},U=A(),$=l("current-theme",1),j=l("theme-flip",!1);export{j as a,$ as b,k as g,R as l,U as t,T as v};