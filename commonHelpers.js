import{S as l,i as d,a as u}from"./assets/vendor-2618a76b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector(".feedback-form"),i=document.querySelector(".gallery"),c=document.querySelector(".loader"),f=new l(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"});async function p(o){const s="42040031-47a3b216d4f97a43df3da958a",r=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`https://pixabay.com/api/?${r}`;try{return(await u.get(e,r)).data.hits}catch{throw new Error(response.status)}}m.addEventListener("submit",h);async function h(o){o.preventDefault(),c.classList.remove("is-hidden"),i.innerHTML="";const s=o.currentTarget.elements.search.value.trim();try{const r=await p(s);console.log(r),i.innerHTML=y(r),f.refresh(),c.classList.add("is-hidden")}catch{d.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}function y(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,comments:e,likes:t,downloads:n})=>`<li class="item"> 
     <a href='${r}'><img class="image" src="${s}" alt="" /></a>
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
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
