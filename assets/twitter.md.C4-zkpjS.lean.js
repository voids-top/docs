import{_ as s,c as n,a3 as e,o as t}from"./chunks/framework.BBsZgXWd.js";const q=JSON.parse('{"title":"Twitter","description":"","frontmatter":{},"headers":[],"relativePath":"twitter.md","filePath":"twitter.md","lastUpdated":null}'),p={name:"twitter.md"};function o(l,a,i,c,u,r){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="twitter" tabindex="-1">Twitter <a class="header-anchor" href="#twitter" aria-label="Permalink to &quot;Twitter&quot;">​</a></h1><h2 id="solve-js-inst-js-metrics" tabindex="-1">Solve js_inst/js_metrics <a class="header-anchor" href="#solve-js-inst-js-metrics" aria-label="Permalink to &quot;Solve js_inst/js_metrics&quot;">​</a></h2><br><h5 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST https://api.voids.top/twitter/js?code=&lt;code&gt;</span></span>
<span class="line"><span>Host: api.voids.top</span></span></code></pre></div><h5 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;rf&quot;: {</span></span>
<span class="line"><span>    &quot;addc9a899d6f3c19c29f10f59c56cd27e8bdbd33e5adcf6c07ad566e7b6aaaf1&quot;: -240,</span></span>
<span class="line"><span>    &quot;a0ecfb0baa19b9c3cc08ccee2a6073a97610eb203ee266218414807d03d61970&quot;: 67,</span></span>
<span class="line"><span>    &quot;a35ef7e116377112282f0c11de29cb0faeb55f06b030bf555c8927ec33302406&quot;: -45,</span></span>
<span class="line"><span>    &quot;a00a99a087cac8eabca7e306bf7907df294ec7f7bbdee2e9a2c84876870db78e&quot;: -81</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;s&quot;: &quot;gnlf9-in3NVz-ztoXclJpXj3zS1OQu3-MxRwhPf...&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="get-random-profile" tabindex="-1">Get random profile <a class="header-anchor" href="#get-random-profile" aria-label="Permalink to &quot;Get random profile&quot;">​</a></h2><br><h5 id="request-1" tabindex="-1">Request <a class="header-anchor" href="#request-1" aria-label="Permalink to &quot;Request&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET https://api.voids.top/twitter/profiles</span></span>
<span class="line"><span>Host: api.voids.top</span></span></code></pre></div><h5 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-label="Permalink to &quot;Response&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;banner&quot;: &quot;https://pbs.twimg.com/profile_banners/...&quot;,</span></span>
<span class="line"><span>  &quot;birthdate&quot;: {</span></span>
<span class="line"><span>    &quot;day&quot;: null,</span></span>
<span class="line"><span>    &quot;month&quot;: null,</span></span>
<span class="line"><span>    &quot;year&quot;: null</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;blocked_by&quot;: false,</span></span>
<span class="line"><span>  &quot;blocking&quot;: false,</span></span>
<span class="line"><span>  &quot;created_at&quot;: {</span></span>
<span class="line"><span>    &quot;timestamp&quot;: 100000000.0,</span></span>
<span class="line"><span>    &quot;timezone&quot;: &quot;UTC&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;abcdef&quot;,</span></span>
<span class="line"><span>  &quot;favorite_count&quot;: 100,</span></span>
<span class="line"><span>  &quot;followed_by&quot;: false,</span></span>
<span class="line"><span>  &quot;follower_count&quot;: 100,</span></span>
<span class="line"><span>  &quot;following&quot;: false,</span></span>
<span class="line"><span>  &quot;following_count&quot;: 100,</span></span>
<span class="line"><span>  &quot;icon&quot;: &quot;https://pbs.twimg.com/profile_images/...&quot;,</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;1234567890&quot;,</span></span>
<span class="line"><span>  &quot;location&quot;: null,</span></span>
<span class="line"><span>  &quot;media_count&quot;: 100,</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;example&quot;,</span></span>
<span class="line"><span>  &quot;protected&quot;: false,</span></span>
<span class="line"><span>  &quot;screen_name&quot;: &quot;example_user&quot;,</span></span>
<span class="line"><span>  &quot;tweet_count&quot;: 100,</span></span>
<span class="line"><span>  &quot;url&quot;: null,</span></span>
<span class="line"><span>  &quot;verified&quot;: false,</span></span>
<span class="line"><span>  &quot;verified_info&quot;: {}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,13)]))}const h=s(p,[["render",o]]);export{q as __pageData,h as default};
