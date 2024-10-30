import{S as u,i as d}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/",h="46797369-0299d472bccce8abfeee5d8f9";function m(i){const n=`${f}?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(t=>{if(!t.ok)throw new Error("Failed to fetch images");return t.json()}).catch(t=>{throw console.error("Error fetching images:",t),t})}let l;function p(){l=new u(".gallery a",{})}function y(i){const n=document.querySelector(".gallery"),t=i.map(r=>`
    <a href="${r.largeImageURL}">
      <img src="${r.webformatURL}" alt="${r.tags}" title="${r.tags}" />
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </a>
  `).join("");n.innerHTML=t,l.refresh()}function g(){document.querySelector(".gallery").innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function a(){document.querySelector(".loader").classList.add("hidden")}function c(i){d.error({title:"Error",message:i})}document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".search-form"),n=document.querySelector(".search-input");p(),i.addEventListener("submit",t=>{t.preventDefault();const r=n.value.trim();if(!r){c("Please enter a search term");return}g(),L(),n.value="",m(r).then(e=>{if(a(),e.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}y(e.hits)}).catch(e=>{a(),c("An error occurred while fetching images")})})});
//# sourceMappingURL=index.js.map
