import{t as s,r as c,w as m}from"./writeEffect-42c0037e.js";import{ak as f}from"./vendor-bb5dd8bc.js";import"./sleep-8e06002e.js";const d=async(t,e)=>{e.dispatch("done"),await s(typeof e.loop=="number"?e.loop:1500);const n=t.innerHTML.replaceAll("&amp;","&");for(let a=n.length-1;a>=0;a--)n[a]===">"&&(a=n.lastIndexOf("<",a)),t.innerHTML=n.slice(0,a),await s(e.interval)};let i=[];const p=t=>{for(;;){const e=c(0,t.length),n=typeof i=="number"&&e!==i,a=Array.isArray(i)&&!i.includes(e);if(t.length===1||a||n)return n&&(i=[]),i.push(e),t[e];i.length===t.length&&(i=i.pop())}},o=async({currentNode:t,text:e},n)=>{await m({currentNode:t,text:e},n);const a=e.replaceAll("&","&amp;");t.innerHTML===a&&await d(t,n),f(t,n.parentElement,r=>{t===r?r.classList.remove("typing"):r.classList.remove("finished-typing")})},T=async(t,e)=>{for(;;)if(e.loop)for(const n of t)await o(n,e);else if(e.loopRandom){const n=p(t);await o(n,e)}};export{T as mode};
