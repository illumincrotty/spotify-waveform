import{sleep as i}from"./sleep-8e06002e.js";import{ai as c}from"./vendor-1c0fa305.js";const e=(s,n)=>Math.floor(Math.random()*(n-s)+s),o=async s=>i(Array.isArray(s)?s[e(0,s.length)]:s),p=async({currentNode:s,text:n},r)=>{c(s,r.parentElement,a=>{const t=s===a?"typing":"finished-typing";a.classList.add(t)});for(let a=0;a<=n.length;a++)n[a]==="<"&&(a=n.indexOf(">",a)),s.innerHTML=n.slice(0,a),await o(r.interval)};export{e as r,o as t,p as w};
