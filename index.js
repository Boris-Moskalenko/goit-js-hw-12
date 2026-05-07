import{a as w,S as v,i as a}from"./assets/vendor-Do60_h77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const S="55649789-ea1366a0c5eeef6462f857085",q="https://pixabay.com/api/";async function f(s,e=1){return(await w.get(q,{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),M=new v(".gallery a",{captionsData:"alt",captionDelay:250});function B(){m.innerHTML=""}function p(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}function L(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}function b(s){const e=s.map(r=>`
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
    `).join("");m.insertAdjacentHTML("beforeend",e),M.refresh()}const u=document.querySelector(".form"),P=document.querySelector(".load-more");let n=1,c="";u.addEventListener("submit",async s=>{if(s.preventDefault(),c=u.elements["search-text"].value.trim(),!c){a.error({message:"Enter search query!"});return}n=1,B(),l(),p();try{const e=await f(c,n);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(e.hits);const r=Math.ceil(e.totalHits/15);n<r?L():(l(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong!"})}finally{g()}});P.addEventListener("click",async()=>{n+=1,l(),p();try{const s=await f(c,n);b(s.hits);const e=document.querySelector(".gallery-item");if(e){const i=e.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}const r=Math.ceil(s.totalHits/15);n>=r?(l(),a.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch{a.error({message:"Something went wrong!"})}finally{g()}});
//# sourceMappingURL=index.js.map
