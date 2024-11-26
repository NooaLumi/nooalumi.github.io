"use strict";(self.webpackChunkhomepage_and_blog=self.webpackChunkhomepage_and_blog||[]).push([[15],{6547:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return u}});var a=n(8453),o=n(6540);function l(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",strong:"strong"},(0,a.RP)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.h1,{id:"obligatory-hello-world-post",style:{position:"relative"}},o.createElement(t.a,{href:"#obligatory-hello-world-post","aria-label":"obligatory hello world post permalink",className:"anchor before"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Obligatory 'Hello World!' post"),"\n",o.createElement(t.p,null,"As expected, the moment I got this blog up-and-running I completely forgot what I even wanted to write about in the first place.\nI'm sure it'll come back to me, but in the meanwhile I might as well tell you about how I set this site up."),"\n",o.createElement(t.h2,{id:"the-alright-gatsby",style:{position:"relative"}},o.createElement(t.a,{href:"#the-alright-gatsby","aria-label":"the alright gatsby permalink",className:"anchor before"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"The Alright Gatsby"),"\n",o.createElement(t.p,null,"I picked ",o.createElement(t.a,{href:"https://www.gatsbyjs.com/"},"Gatsby")," for its flexibility and familiarity (not with Gatsby itself, but with React and GraphQL). I briefly also considered ",o.createElement(t.a,{href:"https://jekyllrb.com/"},"Jekyll"),", but\nthen saw that it's built on Ruby. I'm not going to talk shit on something I've never tried, but I don't trust a language who's primary package manager\ncalls its packages RubyGems. I thought Rust was being cute with it's Cargo Crates, but this is next level."),"\n",o.createElement(t.p,null,"I used the ",o.createElement(t.strong,null,"Typescript")," starter with some related plugins pre-installed, but no themes or templates. I couldn't find one I liked and assumed it wouldn't take too long\nto slap some styles together."),"\n",o.createElement(t.p,null,"For CSS, I went with the ",o.createElement(t.a,{href:"https://milligram.io/"},"milligram")," stylesheet which I extended with my own colors and typography stuff. ",o.createElement(t.strong,null,"CSS modules")," came pre-installed, so I used those for all\nstand-alone components. They're kind of a pain to use with typescript so I might install a CSS-in-JS library at some point instead."),"\n",o.createElement(t.p,null,"These blog posts use ",o.createElement(t.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/"},"MDX"),", which is just markdown with the option to embed JSX down the line if need be."),"\n",o.createElement(t.h2,{id:"conclusion",style:{position:"relative"}},o.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor before"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Conclusion"),"\n",o.createElement(t.p,null,"Err.. that's about it. It took me some six hours total to set this up, so it definitely delivered on efficiency. I also like the whole ",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Local files -> GraphQL -> Build-time React props</code>'}}),"\nworkflow that's going on. Makes things very flexible."),"\n",o.createElement(t.p,null,"I guess I'll also try to attach an image at the end here to see if that whole thing works. And maybe some code to check syntax highlighting as well."),"\n",o.createElement(t.p,null,"Oh! And you can find the code for this site ",o.createElement(t.a,{href:"https://github.com/NooaLumi/nooalumi.github.io/tree/develop"},"here")," in case you're curious"),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> sayHello <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",o.createElement("br"),"\n",o.createElement(t.p,null,"If this works, you should see the icon I made for this site blown up below. Fingers crossed!"),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 512px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/cdbe948cb195a33c3337e27a409b15c8/01e7c/homepage_icon.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 104.70588235294119%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAB9uAAAfbgGlCTbNAAAC60lEQVR42oWUTUtbQRSG86UmfiSWpCsXLsSF7caFbuJHFBTMxq7ERUFiI7VF2r0YjKv4A0oF203iwrhpYyvibxC6syhIhSbVje5KaGIy956edzoTJrfaHngzc+ec8+TMmTvX5VJGRG6WF/Pz8/MgzxOsAqvEEkqY78OHGJXnRa7LNBPG41NWsVwu0+7urr20tEQzMzNSmGMNPsQg9k4oHubm5rC4hcjNzU27u7vbYpdwu902QiA1F8Fg0MpkMjb9sS2VC6Dbpck8vqlUKjQ6OlrnR8vj8ZDP5yOv19uQfoaPY2zEIoftrS5MV/hMCEFjY2MCgePj4zQxMSGr0hCujoxKqaWlRUMFcsGQsGKx+IAfvm1sbCAA26R0Ok3o08DAgASoiv5Sa2urzFlfXwfwAixU9/zm5oa4Z0IHHh0dyeZcXl7S9vY2raysUCQSaVRnVooxFAoJMNiSAH7K5XJwSGAqlSJs4fb2lur1ugQfHh6S3++XAGe1aAlyd3Z2ELoPYCmZTMp+LC4ukrZarSbHfD4vQfowzAohrGPbYLB9BbA2PT0tnV1dXdTf308LCwtUKpUkcHJyspHc09NDnZ2ddwHtWCyG8J8A1qemphpOvaWRkRE6PT2VvWtvb6f5+Xk6OTmhwcHBpoNyAMsA/kgkEnJRvx4qiHp7e2ViOBym4+NjWXGhUNB9M2ObtnyQzWZlYzVIV2DCZ2dnaW9vj/r6+qitrc25ZYGDxQED+PL6+hr9E87XwjzRjo4OKbN/Oha5YLAt48vykCff19bWZOl6O07pas1dqFhrdXVVfiyurq4i+uot470bGhqq3XczALyr+uHh4Vq1WgXwhcu80Dy+AzQajVr/um6mj98ECzls7xssA+g7Ozv7GI/HSX9t/gMUiOWcD8ht+tqw+dT4WiVVWHV1HS0DZinB90utvXIwpHnwEwgEnvC/64+EfV+F2sexFnIUw+u6xx6zUqzPrC+sC1ZV6UKtHaiYR87s3+3quDl4VQl9AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="A magical orb, the icon of this website"\n        title=""\n        src="/static/cdbe948cb195a33c3337e27a409b15c8/01e7c/homepage_icon.png"\n        srcset="/static/cdbe948cb195a33c3337e27a409b15c8/04472/homepage_icon.png 170w,\n/static/cdbe948cb195a33c3337e27a409b15c8/9f933/homepage_icon.png 340w,\n/static/cdbe948cb195a33c3337e27a409b15c8/01e7c/homepage_icon.png 512w"\n        sizes="(max-width: 512px) 100vw, 512px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?o.createElement(t,e,o.createElement(l,e)):l(e)},r=n(801),i=n(8209),c=n(8127),p=n(9278);const m=e=>{let{data:t,children:n}=e;return o.createElement(i.A,null,o.createElement("p",{className:"text-minor"},"Posted on ",t.mdx.frontmatter.date),n,o.createElement("br",null),o.createElement("hr",null),o.createElement(p.A,{doomText:p._.OtherRecentPosts}),o.createElement(c.A,{hidePostId:t.mdx.id,postCount:3}))},h=e=>{let{data:t}=e;return o.createElement(r.A,{title:`${t.mdx.frontmatter.title} | Nooa's Blog`,description:t.mdx.excerpt,pathname:`/blog/${t.mdx.frontmatter.slug}`})};function u(e){return o.createElement(m,e,o.createElement(s,e))}},8127:function(e,t,n){n.d(t,{A:function(){return l}});var a=n(6540),o=n(4810);var l=e=>{let{postCount:t,hidePostId:n}=e;const{allMdx:l}=(0,o.GR)("3039944820"),s=a.useMemo((()=>t&&l.nodes.length>t?l.nodes.slice(0,t):l.nodes),[l,t]);return a.createElement(a.Fragment,null,s.map((e=>(!n||n!==e.id)&&a.createElement("article",{key:e.id},a.createElement("h3",{className:"feed-module--postName--b6626"},a.createElement(o.N_,{to:`/blog/${e.frontmatter.slug}`},e.frontmatter.title)),a.createElement("p",{className:"feed-module--excerptText--471b1"},e.excerpt),a.createElement("p",{className:"feed-module--postDate--213a2"},e.frontmatter.date)))),0===s.length&&a.createElement("h4",null,"Nothing here yet!"),n&&1===s.length&&a.createElement("h4",null,"No other posts yet :("))}},801:function(e,t,n){n.d(t,{A:function(){return l}});var a=n(6540),o=n(4810);var l=e=>{let{title:t,description:n,pathname:l,children:s}=e;const{title:r,description:i,siteUrl:c}=(0,o.GR)("3764592887").site.siteMetadata,p={title:t||r,description:n||i,url:`${c}${l||""}`};return a.createElement(a.Fragment,null,a.createElement("title",null,p.title),a.createElement("meta",{name:"description",content:p.description}),a.createElement("meta",{property:"og:title",content:p.title}),a.createElement("meta",{property:"og:description",content:p.description}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:locale",content:"en_FI"}),void 0===l&&a.createElement(a.Fragment,null,a.createElement("meta",{property:"og:image",content:`${c}/threat.png`}),a.createElement("meta",{property:"og:image:type",content:"image/png"}),a.createElement("meta",{property:"og:image:width",content:"1137"}),a.createElement("meta",{property:"og:image:height",content:"1137"})),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:p.title}),a.createElement("meta",{name:"twitter:description",content:p.description}),a.createElement("meta",{name:"twitter:url",content:p.url}),a.createElement("link",{rel:"icon",type:"image/x-icon",href:`${c}/favicon.ico`}),a.createElement("script",{type:"application/ld+json"},'\n          {\n            "@context": "https://schema.org",\n            "@type": "Person",\n            "url": "https://nooalumi.github.io",\n            "description": "A 22-year-old Full-Stack Web Developer with a passion for technology and creative problem-solving.",\n            "name": "Nooa Lumilaakso",\n            "givenName": "Nooa",\n            "jobTitle": "Full-Stack Web Developer",\n            "sameAs": [\n              "https://www.linkedin.com/in/nooa-lumilaakso-212581243/"\n            ],\n            "knowsLanguage": [\n              "English",\n              "Finnish"\n            ],\n            "email": "nooa.lumilaakso@gmail.com",\n            "gender": "Male"\n          }\n        '),s)}},8453:function(e,t,n){n.d(t,{RP:function(){return l}});var a=n(6540);const o=a.createContext({});function l(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-content-blog-hello-world-index-mdx-78afa47472715657ac14.js.map