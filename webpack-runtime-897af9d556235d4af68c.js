!function(){"use strict";var e,t,n,o,r,c={},a={};function f(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return c[e](n,n.exports,f),n.exports}f.m=c,e=[],f.O=function(t,n,o,r){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],r=e[l][2];for(var a=!0,i=0;i<n.length;i++)(!1&r||c>=r)&&Object.keys(f.O).every((function(e){return f.O[e](n[i])}))?n.splice(i--,1):(a=!1,r<c&&(c=r));if(a){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,o,r]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);f.r(r);var c={};t=t||[null,n({}),n([]),n(n)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},f.d(r,c),r},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return({15:"component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-content-blog-hello-world-index-mdx",223:"commons",245:"component---src-pages-index-tsx",248:"component---src-pages-blog-index-tsx",445:"component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-content-blog-favorite-albums-2025-index-mdx",453:"component---src-pages-404-tsx",591:"component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-content-blog-mr-pii-poo-index-mdx",618:"component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-content-blog-myth-of-the-solitary-artist-index-mdx",734:"component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-content-blog-favorite-games-2025-index-mdx"}[e]||e)+"-"+{15:"84d2c66e83ca0d10e2f9",108:"7144085c7768115043bd",223:"9fb5df3624cfb61e4266",245:"2e9f2dca77d38e89a6b1",248:"73bf73809006a431dc21",445:"904a16f3526d16c92217",452:"9a48acf9ca491e864c3a",453:"f6829170a47dfda2e486",591:"415a00e3bac59033717e",618:"d90bcb1111adb3a07897",734:"f685db02236e7231a7fc"}[e]+".js"},f.miniCssF=function(e){return"styles.ae5a0a31f09e59505c7c.css"},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o={},r="homepage-and-blog:",f.l=function(e,t,n,c){if(o[e])o[e].push(t);else{var a,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==r+n){a=s;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.setAttribute("data-webpack",r+n),a.src=e),o[e]=[t];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),i&&document.head.appendChild(a)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",function(){var e={311:0,869:0};f.f.j=function(t,n){var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else if(/^(311|869)$/.test(t))e[t]=0;else{var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var c=f.p+f.u(t),a=new Error;f.l(c,(function(n){if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",a.name="ChunkLoadError",a.type=r,a.request=c,o[1](a)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,c=n[0],a=n[1],i=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)f.o(a,o)&&(f.m[o]=a[o]);if(i)var l=i(f)}for(t&&t(n);u<c.length;u++)r=c[u],f.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return f.O(l)},n=self.webpackChunkhomepage_and_blog=self.webpackChunkhomepage_and_blog||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-897af9d556235d4af68c.js.map