import{sleep as e}from"./sleep-8e06002e.js";import{aa as i}from"./vendor-4237203b.js";const o=(s,n)=>Math.floor(Math.random()*(n-s)+s),c=async s=>e(Array.isArray(s)?s[o(0,s.length)]:s),p=async({currentNode:s,text:n},r)=>{i(s,r.parentElement,a=>{const t=s===a?"typing":"finished-typing";a.classList.add(t)});for(let a=0;a<=n.length;a++)n[a]==="<"&&(a=n.indexOf(">",a)),s.innerHTML=n.slice(0,a),await c(r.interval)};export{o as r,c as t,p as w};
