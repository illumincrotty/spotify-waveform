import{w as r}from"./writeEffect-cb334aa3.js";import"./sleep-8e06002e.js";import"./vendor-2fcdb5a7.js";const o=(t,e)=>{new MutationObserver(n=>{n.forEach(c=>{const a=c.type==="attributes",i=c.target.classList.contains("typing");a&&i&&e()})}).observe(t,{attributes:!0,childList:!0,subtree:!0})},d=t=>t.forEach(e=>e.currentNode.textContent=""),h=async(t,e)=>{if(e.cascade)d(t);else{const{getLongestTextElement:s}=await import("./getLongestTextElement-2be404a1.js"),n=s(t);o(n,()=>e.dispatch("done"))}for(const s of t)e.cascade?(await r(s,e),s.currentNode.classList.replace("typing","finished-typing")):r(s,e).then(()=>{s.currentNode.classList.replace("typing","finished-typing")});e.cascade&&e.dispatch("done")};export{h as mode};
