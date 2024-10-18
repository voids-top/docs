import{_ as s,c as n,a3 as e,o as p}from"./chunks/framework.BBsZgXWd.js";const h=JSON.parse('{"title":"Mail","description":"","frontmatter":{},"headers":[],"relativePath":"mail.md","filePath":"mail.md","lastUpdated":null}'),t={name:"mail.md"};function i(l,a,o,u,c,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="mail" tabindex="-1">Mail <a class="header-anchor" href="#mail" aria-label="Permalink to &quot;Mail&quot;">​</a></h1><h2 id="tempmail-m-kuku-lu" tabindex="-1">tempmail (m.kuku.lu) <a class="header-anchor" href="#tempmail-m-kuku-lu" aria-label="Permalink to &quot;tempmail (m.kuku.lu)&quot;">​</a></h2><h3 id="create-email" tabindex="-1">Create email <a class="header-anchor" href="#create-email" aria-label="Permalink to &quot;Create email&quot;">​</a></h3><br><h5 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET https://api.voids.top/m-kuku-lu/create?domain=send4.uk</span></span>
<span class="line"><span>Host: api.voids.top</span></span></code></pre></div><h5 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;success&quot;: true,</span></span>
<span class="line"><span>  &quot;email&quot;: &quot;sokyuryo794@addrin.uk&quot;,</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;9815da76-7c9a-4821-890a-2a626e959233&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><br><h3 id="get-inbox" tabindex="-1">Get inbox <a class="header-anchor" href="#get-inbox" aria-label="Permalink to &quot;Get inbox&quot;">​</a></h3><br><h5 id="request-1" tabindex="-1">Request <a class="header-anchor" href="#request-1" aria-label="Permalink to &quot;Request&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST https://api.voids.top/m-kuku-lu/receive</span></span>
<span class="line"><span>Host: api.voids.top</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;email&quot;: &quot;sokyuryo794@addrin.uk&quot;,</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;9815da76-7c9a-4821-890a-2a626e959233&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;success&quot;: true,</span></span>
<span class="line"><span>  &quot;data&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;from&quot;: &quot;example@example.com&quot;,</span></span>
<span class="line"><span>      &quot;to&quot;: &quot;sokyuryo794@addrin.uk&quot;,</span></span>
<span class="line"><span>      &quot;body&quot;: &quot;a&quot;,</span></span>
<span class="line"><span>      &quot;title&quot;: &quot;a&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="tempmail-tempmail-lol" tabindex="-1">tempmail (tempmail.lol) <a class="header-anchor" href="#tempmail-tempmail-lol" aria-label="Permalink to &quot;tempmail (tempmail.lol)&quot;">​</a></h2><h3 id="create-email-1" tabindex="-1">Create email <a class="header-anchor" href="#create-email-1" aria-label="Permalink to &quot;Create email&quot;">​</a></h3><br><h5 id="request-2" tabindex="-1">Request <a class="header-anchor" href="#request-2" aria-label="Permalink to &quot;Request&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET https://api.voids.top/tempmail/create</span></span>
<span class="line"><span>Host: api.voids.top</span></span></code></pre></div><h5 id="response-2" tabindex="-1">Response <a class="header-anchor" href="#response-2" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;success&quot;: true,</span></span>
<span class="line"><span>  &quot;email&quot;: &quot;corty23944@qk82.4evrmail.shop&quot;,</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;2m78kirs3qed106nr7rojtqppi0ydqdqslk3rn&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><br><h3 id="get-inbox-1" tabindex="-1">Get inbox <a class="header-anchor" href="#get-inbox-1" aria-label="Permalink to &quot;Get inbox&quot;">​</a></h3><br><h5 id="request-3" tabindex="-1">Request <a class="header-anchor" href="#request-3" aria-label="Permalink to &quot;Request&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST https://api.voids.top/tempmail/receive</span></span>
<span class="line"><span>Host: api.voids.top</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;email&quot;: &quot;corty23944@qk82.4evrmail.shop&quot;,</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;2m78kirs3qed106nr7rojtqppi0ydqdqslk3rn&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h5 id="response-3" tabindex="-1">Response <a class="header-anchor" href="#response-3" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;success&quot;: true,</span></span>
<span class="line"><span>  &quot;data&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;from&quot;: &quot;example@example.com&quot;,</span></span>
<span class="line"><span>      &quot;to&quot;: &quot;corty23944@qk82.4evrmail.shop&quot;,</span></span>
<span class="line"><span>      &quot;body&quot;: &quot;a&quot;,</span></span>
<span class="line"><span>      &quot;subject&quot;: &quot;a&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="email-validity-check" tabindex="-1">Email validity check <a class="header-anchor" href="#email-validity-check" aria-label="Permalink to &quot;Email validity check&quot;">​</a></h2><br><h5 id="request-4" tabindex="-1">Request <a class="header-anchor" href="#request-4" aria-label="Permalink to &quot;Request&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET https://api.voids.top/mail/check/voidpro.dev@example.com</span></span>
<span class="line"><span>Host: api.voids.top</span></span></code></pre></div><h5 id="response-4" tabindex="-1">Response <a class="header-anchor" href="#response-4" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;valid&quot;: true, // bool</span></span>
<span class="line"><span>  &quot;reach_level&quot;: &quot;safe&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,35)]))}const q=s(t,[["render",i]]);export{h as __pageData,q as default};
