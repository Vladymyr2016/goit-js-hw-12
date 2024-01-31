import{S as f,i as h,a as y}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g=document.querySelector(".feedback-form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),d=document.querySelector(".load-more");let l,L;const v=new f(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"});let i=1,b;async function m(r){const s={key:"42040031-47a3b216d4f97a43df3da958a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,pageSize:40},e="https://pixabay.com/api/";try{return(await y.get(e,{params:s})).data.hits}catch{throw new Error(response.status)}}g.addEventListener("submit",E);d.addEventListener("click",x);async function x(){i+=1;const r=await m(l),o=p(r);c.insertAdjacentHTML("beforeend",o),w(),S()}function S(){const r=Math.ceil(L/b);d.disabled=i>=r}async function E(r){r.preventDefault(),u.classList.remove("is-hidden"),c.innerHTML="",i=1,l=r.currentTarget.elements.search.value.trim();try{const o=await m(l);c.innerHTML=p(o),v.refresh(),u.classList.add("is-hidden")}catch{h.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}function p(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,comments:e,likes:t,downloads:n})=>`<li class="item"> 
     <a href='${s}'><img class="image" src="${o}" alt="" /></a>
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
      </li>`).join("")}function w(){d.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
