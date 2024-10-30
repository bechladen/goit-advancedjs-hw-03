import{S as f,i as d}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const h="https://pixabay.com/api/",m="46797369-0299d472bccce8abfeee5d8f9";function p(i){const n=`${h}?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r})}let u;function y(){u=new f(".gallery a",{})}function g(i){const n=document.querySelector(".gallery"),r=i.map(t=>`
    <a href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}" />
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </a>
  `).join("");n.innerHTML=r,u.refresh()}function L(){document.querySelector(".gallery").innerHTML=""}function w(){document.querySelector(".loader").classList.remove("hidden")}function a(){document.querySelector(".loader").classList.add("hidden")}function c(i){d.error({title:"Error",message:i})}const b=document.querySelector(".search-form"),l=document.querySelector(".search-input");y();b.addEventListener("submit",i=>{i.preventDefault();const n=l.value.trim();if(!n){c("Please enter a search term");return}L(),w(),l.value="",p(n).then(r=>{if(a(),r.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}g(r.hits)}).catch(()=>{a(),c("An error occurred while fetching images")})});
//# sourceMappingURL=index.js.map
