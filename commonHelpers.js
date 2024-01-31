import{S as y,i as u,a as g}from"./assets/vendor-2618a76b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=document.querySelector(".feedback-form"),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),n=document.querySelector(".load-more");let c,L;const v=new y(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"});let l=1,S;async function f(s){const o={key:"42040031-47a3b216d4f97a43df3da958a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,pageSize:40},e="https://pixabay.com/api/";try{return(await g.get(e,{params:o})).data.hits}catch{throw new Error(response.status)}}p.addEventListener("submit",E);n.addEventListener("click",b);async function b(){l+=1;const s=await f(c),r=h(s);d.insertAdjacentHTML("beforeend",r),w(),x()}function x(){const s=Math.ceil(L/S);n.disabled=l>=s}async function E(s){s.preventDefault(),m.classList.remove("is-hidden"),d.innerHTML="",l=1,c=s.currentTarget.elements.search.value.trim();try{const r=await f(c);r.length===0?(u.error({position:"center",title:"Error",message:"Sorry, we don`t have saerch img!"}),n.classList.add("is-hidden")):(d.innerHTML=h(r),v.refresh(),c="",m.classList.add("is-hidden"),n.classList.remove("is-hidden"))}catch{u.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}p.reset()}function h(s){return s.map(({webformatURL:r,largeImageURL:o,tags:a,comments:e,likes:t,downloads:i})=>`<li class="item"> 
     <a href='${o}'><img class="image" src="${r}" alt="" /></a>
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
      <p class="text">${i}</p>
      </div>
      </div>
      </li>`).join("")}function w(){n.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
