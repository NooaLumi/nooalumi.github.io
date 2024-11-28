"use strict";(self.webpackChunkhomepage_and_blog=self.webpackChunkhomepage_and_blog||[]).push([[245],{8127:function(e,t,a){a.d(t,{A:function(){return o}});var c=a(6540),n=a(4810);var o=e=>{let{postCount:t,hidePostId:a}=e;const{allMdx:o}=(0,n.GR)("3039944820"),i=c.useMemo((()=>t&&o.nodes.length>t?o.nodes.slice(0,t):o.nodes),[o,t]);return c.createElement(c.Fragment,null,i.map((e=>(!a||a!==e.id)&&c.createElement("article",{key:e.id},c.createElement("h3",{className:"feed-module--postName--b6626"},c.createElement(n.N_,{to:`/blog/${e.frontmatter.slug}`},e.frontmatter.title)),c.createElement("p",{className:"feed-module--excerptText--471b1"},e.excerpt),c.createElement("p",{className:"feed-module--postDate--213a2"},e.frontmatter.date)))),0===i.length&&c.createElement("h4",null,"Nothing here yet!"),a&&1===i.length&&c.createElement("h4",null,"No other posts yet :("))}},801:function(e,t,a){a.d(t,{A:function(){return o}});var c=a(6540),n=a(4810);var o=e=>{let{title:t,description:a,pathname:o,children:i}=e;const{title:r,description:l,siteUrl:s}=(0,n.GR)("3764592887").site.siteMetadata,m={title:t||r,description:a||l,url:`${s}${o||""}`};return c.createElement(c.Fragment,null,c.createElement("title",null,m.title),c.createElement("meta",{name:"description",content:m.description}),c.createElement("meta",{property:"og:title",content:m.title}),c.createElement("meta",{property:"og:description",content:m.description}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:locale",content:"en_FI"}),c.createElement("meta",{name:"google-site-verification",content:"xUcUZTKNJE05sOB3nDI6HRucWFe3TY-cBmKRnPWZNKs"}),void 0===o&&c.createElement(c.Fragment,null,c.createElement("meta",{property:"og:image",content:`${s}/nooa_lumilaakso_profile_picture.jpg`}),c.createElement("meta",{property:"og:image:type",content:"image/jpg"}),c.createElement("meta",{property:"og:image:width",content:"1342"}),c.createElement("meta",{property:"og:image:height",content:"1342"})),c.createElement("meta",{name:"twitter:card",content:"summary"}),c.createElement("meta",{name:"twitter:title",content:m.title}),c.createElement("meta",{name:"twitter:description",content:m.description}),c.createElement("meta",{name:"twitter:url",content:m.url}),c.createElement("link",{rel:"icon",type:"image/x-icon",href:`${s}/favicon.ico`}),c.createElement("script",{type:"application/ld+json"},'\n          {\n            "@context": "https://schema.org",\n            "@type": "Person",\n            "url": "https://nooalumi.github.io",\n            "description": "A 22-year-old Full-Stack Web Developer with a passion for technology and creative problem-solving.",\n            "name": "Nooa Lumilaakso",\n            "givenName": "Nooa",\n            "jobTitle": "Full-Stack Web Developer",\n            "sameAs": [\n              "https://www.linkedin.com/in/nooa-lumilaakso-212581243/"\n            ],\n            "knowsLanguage": [\n              "English",\n              "Finnish"\n            ],\n            "email": "nooa.lumilaakso@gmail.com",\n            "gender": "Male"\n          }\n        '),i)}},9319:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h},default:function(){return g}});var c=a(6540),n=a(4810),o=a(801),i=a(8209),r="doomguy-module--hurt--652b3",l="doomguy-module--image--8113f",s="doomguy-module--imageHidden--119d1",m=a(2532);var d=()=>{const{0:e,1:t}=(0,c.useState)(0),{0:n,1:o}=(0,c.useState)(!1);return(0,c.useEffect)((()=>(document.body.classList[n?"add":"remove"](r),()=>document.body.classList.remove(r))),[n]),(0,c.useEffect)((()=>{const a=setInterval((()=>{t(3===e?0:e+1),o(!1)}),600);return()=>clearInterval(a)})),c.createElement("div",{className:"doomguy-module--imageContainer--26cab",onClick:()=>o(!0),"aria-hidden":!0}," ",c.createElement(m.S,{className:`${l} doomguy-module--imageBase--b9c37 ${e>1?" "+s:""}`,alt:"Male face looking forwards",src:"../images/nocrawl/face_forwards.png",__imageData:a(5088)}),c.createElement(m.S,{className:`${l} ${2!==e?" "+s:""}`,alt:"Male face looking left",src:"../images/nocrawl/face_left.png",__imageData:a(6615)}),c.createElement(m.S,{className:`${l} ${3!==e?" "+s:""}`,alt:"Male face looking right",src:"../images/nocrawl/face_right.png",__imageData:a(2892)}),c.createElement(m.S,{className:`${l} ${!1===n?" "+s:""}`,alt:"Male face looking angry",src:"../images/nocrawl/face_hurt.png",__imageData:a(5760)}))},b=a(8159);var f=()=>c.createElement("div",{className:"profile-module--info--07a02"},c.createElement(d,null),c.createElement("div",null,"Hello! My name is Nooa, and I do programming and a bunch of other cool ",c.createElement("span",{className:"no-wrap-text"},"stuff ",c.createElement("span",{className:"fire-icon"},"🔥")),c.createElement("br",null),c.createElement(b.A,null))),p=a(8127),u=a(9278);const h=()=>c.createElement(o.A,{title:"Nooa's Homepage"});var g=()=>c.createElement(i.A,null,c.createElement(f,null),c.createElement(u.A,{doomText:u._.ThingsILike}),c.createElement("ul",{className:"list-fun"},c.createElement("li",null,c.createElement("a",{href:"https://www.poetry.com/poem/105446/what-is-the-price-of-experience%3F",title:"What is the Price of Experience? by William Blake"},"This poem")," by William Blake"),c.createElement("li",null,c.createElement("a",{href:"https://www.gog.com/en/game/terraria",title:"GOG - Terraria"},"Terraria")," by Re-Logic and ",c.createElement("a",{href:"https://www.gog.com/game/Prey",title:"GOG - Prey"},"Prey")," by Arkane Austin (RIP)"),c.createElement("li",null,"Maybe a quarter of the reciprocal of 1 ÷ 16 of my four siblings"),c.createElement("li",null,c.createElement("a",{href:"https://www.youtube.com/watch?v=4XeeIFsysK4&list=PLgtvGkabBTggcwXCMx7hyeVJ_D0GyNPGw",title:"Youtube - May Our Chambers Be Full by Thou & Emma Ruth Rundle"},"This album")," by Thou & Emma Ruth Rundle"),c.createElement("li",null,c.createElement("a",{href:"https://www.goodreads.com/book/show/103761.Zen_in_the_Art_of_Writing",title:"Goodreads - Zen in the Art of Writing by Ray Bradbury"},"This book")," on writing by Ray Bradbury, and ",c.createElement("a",{href:"https://www.goodreads.com/book/show/103758.Zen_in_the_Art_of_Archery",title:"Goodreads - Zen in the Art of Archery by Eugen Herrigel"},"its namesake")," by Eugen Herrigel"),c.createElement("li",null,c.createElement("a",{href:"https://neovim.io/",title:"Neovim"},"VIM")," (suck it, Emacs)"),c.createElement("li",null,"The only ",c.createElement("a",{href:"https://www.amazon.com/Kindle-Paperwhite-10th-Gen-Built/dp/B09BW9Y2L2",title:"Amazon - Kindle Paperwhite 10th Gen"},"perfect piece of hardware")," in existence (the software still sucks)"),c.createElement("li",null,"The live version of ",c.createElement("a",{href:"https://www.youtube.com/watch?v=iz8m9sL8FUQ",title:"Youtube - The Wholly Ghost (live) by King Gizzard"},"this King Gizzard song")),c.createElement("li",null,c.createElement("a",{href:"https://www.goodreads.com/book/show/23754.The_Sandman_Vol_1",title:"Goodreads - The Sandman VOl 1 by Neil Gaiman"},"This comic book series")," by Neil Gaiman et al."),c.createElement("li",null,c.createElement("a",{href:"https://www.codedojo.com/?p=1620",title:"Two guys made an MMO: The Growtopia Postmortem by Seth A. Robinson"},"This article")," by Seth A. Robinson about how he and Mike Hommel made a mobile MMO game back in 2012"),c.createElement("li",null,c.createElement("a",{href:"https://www.youtube.com/watch?v=gBu77h2FSCM",title:"Youtube - RetroAhoy: X-COM by Ahoy"},"This video")," by Ahoy about the X-COM fanchise"),c.createElement("li",null,c.createElement("a",{href:"https://www.youtube.com/watch?v=yuxss1kBQWw",title:"Youtube - Private Life by Oingo Boingo"},"This music video")," by Oingo Boingo"),c.createElement("li",null,c.createElement("a",{href:"https://commons.wikimedia.org/wiki/File:Dammen_p%C3%A5_Kloumann-sj%C3%B8en_(The_dam_at_Lake_Klouman),_1908.jpg",title:"Wikipedia Commons - Dammen på Kloumann-sjøen by Theodor Kittelsen"},"This painting")," by Theodor Kittelsen"),c.createElement("li",null,"TLDR: Cool stuff and the people that make it")),c.createElement("br",null),c.createElement(u.A,{doomText:u._.CheckoutMyBlog}),c.createElement(p.A,{postCount:3}),c.createElement(n.N_,{to:"/blog",className:"button button-outline button-main"},"See all posts"))},2892:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/b0fd64bf5ecf4b147fbc6e84c07741fd/13677/face_right.png","srcSet":"/static/b0fd64bf5ecf4b147fbc6e84c07741fd/de391/face_right.png 250w,\\n/static/b0fd64bf5ecf4b147fbc6e84c07741fd/82c11/face_right.png 500w,\\n/static/b0fd64bf5ecf4b147fbc6e84c07741fd/13677/face_right.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/b0fd64bf5ecf4b147fbc6e84c07741fd/e7160/face_right.webp 250w,\\n/static/b0fd64bf5ecf4b147fbc6e84c07741fd/5f169/face_right.webp 500w,\\n/static/b0fd64bf5ecf4b147fbc6e84c07741fd/3cd29/face_right.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1000}')},5760:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a8b8a8","images":{"fallback":{"src":"/static/e3264dd032b7c7888efe612c2d7b76c6/13677/face_hurt.png","srcSet":"/static/e3264dd032b7c7888efe612c2d7b76c6/de391/face_hurt.png 250w,\\n/static/e3264dd032b7c7888efe612c2d7b76c6/82c11/face_hurt.png 500w,\\n/static/e3264dd032b7c7888efe612c2d7b76c6/13677/face_hurt.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/e3264dd032b7c7888efe612c2d7b76c6/e7160/face_hurt.webp 250w,\\n/static/e3264dd032b7c7888efe612c2d7b76c6/5f169/face_hurt.webp 500w,\\n/static/e3264dd032b7c7888efe612c2d7b76c6/3cd29/face_hurt.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1000}')},6615:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/3b32fe10cbcb0b77c7cbd199b7d653fd/13677/face_left.png","srcSet":"/static/3b32fe10cbcb0b77c7cbd199b7d653fd/de391/face_left.png 250w,\\n/static/3b32fe10cbcb0b77c7cbd199b7d653fd/82c11/face_left.png 500w,\\n/static/3b32fe10cbcb0b77c7cbd199b7d653fd/13677/face_left.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/3b32fe10cbcb0b77c7cbd199b7d653fd/e7160/face_left.webp 250w,\\n/static/3b32fe10cbcb0b77c7cbd199b7d653fd/5f169/face_left.webp 500w,\\n/static/3b32fe10cbcb0b77c7cbd199b7d653fd/3cd29/face_left.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1000}')},5088:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/313cbeb0ca34d8acb22dc9b6a33387ed/13677/face_forwards.png","srcSet":"/static/313cbeb0ca34d8acb22dc9b6a33387ed/de391/face_forwards.png 250w,\\n/static/313cbeb0ca34d8acb22dc9b6a33387ed/82c11/face_forwards.png 500w,\\n/static/313cbeb0ca34d8acb22dc9b6a33387ed/13677/face_forwards.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/313cbeb0ca34d8acb22dc9b6a33387ed/e7160/face_forwards.webp 250w,\\n/static/313cbeb0ca34d8acb22dc9b6a33387ed/5f169/face_forwards.webp 500w,\\n/static/313cbeb0ca34d8acb22dc9b6a33387ed/3cd29/face_forwards.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5344f8cdf335e5daf78f.js.map