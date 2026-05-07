import{a as b,S as w,i as a}from"./assets/vendor-Do60_h77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const v="55649789-ea1366a0c5eeef6462f857085",S="https://pixabay.com/api/";async function f(s,e=1){return(await b.get(S,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function M(){m.innerHTML=""}function p(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function B(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}function L(s){const e=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img class="gallery-img"
            src="${r.webformatURL}" 
            alt="${r.tags}" 
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${r.likes}</p>
          <p><b>Views</b> ${r.views}</p>
          <p><b>Comments</b> ${r.comments}</p>
          <p><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",e),q.refresh()}const u=document.querySelector(".form"),P=document.querySelector(".load-more");let n=1,c="";u.addEventListener("submit",async s=>{if(s.preventDefault(),c=u.elements["search-text"].value.trim(),!c){a.error({message:"Enter search query!"});return}n=1,M(),d(),p();try{const e=await f(c,n);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(e.hits);const r=Math.ceil(e.totalHits/15);n<r?B():(d(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong!"})}finally{g()}});P.addEventListener("click",async()=>{n+=1,p();try{const s=await f(c,n);L(s.hits);const e=document.querySelector(".gallery-item");if(e){const i=e.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}const r=Math.ceil(s.totalHits/15);n>=r&&(d(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong!"})}finally{g()}});
//# sourceMappingURL=index.js.map
