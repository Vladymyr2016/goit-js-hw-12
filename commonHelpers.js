import{S as h,i as y,a as g}from"./assets/vendor-2618a76b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".feedback-form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),c=document.querySelector(".load-more");let i,L;const v=new h(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"});let l=1,b;async function p(r){const o={key:"42040031-47a3b216d4f97a43df3da958a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,pageSize:40},e="https://pixabay.com/api/";try{return(await g.get(e,{params:o})).data.hits}catch{throw new Error(response.status)}}m.addEventListener("submit",E);c.addEventListener("click",x);async function x(){l+=1;const r=await p(i),s=f(r);d.insertAdjacentHTML("beforeend",s),w(),S()}function S(){const r=Math.ceil(L/b);c.disabled=l>=r}async function E(r){r.preventDefault(),u.classList.remove("is-hidden"),d.innerHTML="",l=1,i=r.currentTarget.elements.search.value.trim();try{const s=await p(i);d.innerHTML=f(s),v.refresh(),i="",u.classList.add("is-hidden")}catch{y.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}c.classList.remove("is-hidden"),m.reset()}function f(r){return r.map(({webformatURL:s,largeImageURL:o,tags:a,comments:e,likes:t,downloads:n})=>`<li class="item"> 
     <a href='${o}'><img class="image" src="${s}" alt="" /></a>
     <div class="box-text"> 
     <div>
     <h2 class="main-text">comments</h2>
      <p class="text">${e}</p>
      </div>
      <div>
      <h2 class="main-text">tags</h2>
      <p class="text">${a}</p>
     </div>
     <div>
      <h2class="main-text">likes</h2class=>
      <p class="text">${t}</p>
      </div>
      <div>
      <h2 class="main-text">downloads</h2>
      <p class="text">${n}</p>
      </div>
      </div>
      </li>`).join("")}function w(){c.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
