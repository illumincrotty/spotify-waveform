import{w as c}from"./writeEffect-ae5593de.js";import"./sleep-8e06002e.js";import"./vendor-afb1c40f.js";const o=(t,e)=>{new MutationObserver(n=>{n.forEach(r=>{const i=r.type==="attributes",a=r.target.classList.contains("typing");i&&a&&e()})}).observe(t,{attributes:!0,childList:!0,subtree:!0})},d=t=>t.forEach(e=>e.currentNode.textContent=""),h=async(t,e)=>{if(e.cascade)d(t);else{const{getLongestTextElement:s}=await import("./getLongestTextElement-2be404a1.js"),n=s(t);o(n,()=>e.dispatch("done"))}for(const s of t)e.cascade?(await c(s,e),s.currentNode.classList.replace("typing","finished-typing")):c(s,e).then(()=>{s.currentNode.classList.replace("typing","finished-typing")});e.cascade&&e.dispatch("done")};export{h as mode};