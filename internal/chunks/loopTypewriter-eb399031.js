import{t as s,r as c,w as m}from"./writeEffect-c6a6b872.js";import{aa as f}from"./vendor-a1568714.js";import"./sleep-8e06002e.js";const p=async(e,t)=>{t.dispatch("done"),await s(typeof t.loop=="number"?t.loop:1500);const n=e.innerHTML.replaceAll("&amp;","&");for(let a=n.length-1;a>=0;a--)n[a]===">"&&(a=n.lastIndexOf("<",a)),e.innerHTML=n.slice(0,a),await s(t.interval)};let i=[];const d=e=>{for(;;){const t=c(0,e.length),n=typeof i=="number"&&t!==i,a=Array.isArray(i)&&!i.includes(t);if(e.length===1||a||n)return n&&(i=[]),i.push(t),e[t];i.length===e.length&&(i=i.pop())}},o=async({currentNode:e,text:t},n)=>{await m({currentNode:e,text:t},n);const a=t.replaceAll("&","&amp;");e.innerHTML===a&&await p(e,n),f(e,n.parentElement,r=>{e===r?r.classList.remove("typing"):r.classList.remove("finished-typing")})},T=async(e,t)=>{for(;;)if(t.loop)for(const n of e)await o(n,t);else if(t.loopRandom){const n=d(e);await o(n,t)}};export{T as mode};
