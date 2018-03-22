webpackJsonp([0xa90872d64088],{354:function(n,s){n.exports={data:{markdownRemark:{html:'<p><code class="language-text">man node</code> 命令将列出 Node.js CLI 的有关信息，包括所有允许的 CLI 可选项（options）和 环境变量（Environment Variables）。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">NAME\n       node - Server-side JavaScript runtime\n\n\n\nSYNOPSIS\n       node <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>v8 options<span class="token punctuation">]</span> <span class="token punctuation">[</span>script.js <span class="token operator">|</span> -e <span class="token string">"script"</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">]</span>\n       node debug <span class="token punctuation">[</span>script.js <span class="token operator">|</span> -e <span class="token string">"script"</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>host<span class="token operator">></span>:<span class="token operator">&lt;</span>port<span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">..</span>.\n       node <span class="token punctuation">[</span>--v8-options<span class="token punctuation">]</span>\n\n       Execute without arguments to start the REPL.\n\n\n\nDESCRIPTION\n       Node.js  is  a  <span class="token keyword">set</span>  of  libraries  <span class="token keyword">for</span> JavaScript <span class="token function">which</span> allows it to be used outside of the\n       browser. It is primarily focused on creating simple,  easy  to  build  network  clients  and\n       servers.\n\n\n\nOPTIONS\n       -v, --version\n              Print node\'s version.\n\n\n       -h, --help\n              Print  node  <span class="token function">command</span>  line  options.  The output of this option is <span class="token function">less</span> detailed than\n              this document.\n\n\n       -e, --eval <span class="token string">"script"</span>\n              Evaluate the following argument as JavaScript.\n\n\n       -p, --print <span class="token string">"script"</span>\n              Identical to -e but prints the result.\n\n\n       -c, --check\n    <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>\n</code></pre>\n      </div>\n<h1>常用的 Node.js CLI 可选项</h1>\n<ul>\n<li>-v 或 —version：查看当前使用的 node 版本</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node -v\nv6.11.2\n</code></pre>\n      </div>\n<ul>\n<li>-h 或 —help：查看帮助，快捷查看部分支持的可选项和环境变量</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node -h\nUsage: node <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span> -e script <span class="token operator">|</span> script.js <span class="token punctuation">]</span> <span class="token punctuation">[</span>arguments<span class="token punctuation">]</span>\n       node debug script.js <span class="token punctuation">[</span>arguments<span class="token punctuation">]</span>\n\nOptions:\n  -v, --version         print Node.js version\n  -e, --eval script     evaluate script\n  -p, --print           evaluate script and print result\n  -c, --check           syntax check script without executing\n  -i, --interactive     always enter the REPL even <span class="token keyword">if</span> stdin\n                        does not appear to be a terminal\n  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>\n</code></pre>\n      </div>\n<ul>\n<li>-e 或 —eval ‘代码’（>=v0.5.2）：命令行执行代码。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node -e <span class="token string">\'console.log("-e test")\'</span>\n-e <span class="token function">test</span>\n</code></pre>\n      </div>\n<ul>\n<li>-p 或 —print ‘代码’（>=v0.6.4）：输出结果的带命令行执行代码</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node -p <span class="token string">\'console.log("-p test")\'</span>\n-p <span class="token function">test</span>\nundefinded\n$ node -p <span class="token string">\'2+3\'</span>\n5\n</code></pre>\n      </div>\n<ul>\n<li>-c 或 —check（>=v5.0.0）：检查指定脚本（文件）的语法，不实际执行。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node -c <span class="token string">\'index.js\'</span>\n/Users/cxswow/Documents/work/tmp/test/index.js:3\nconsole.log<span class="token punctuation">(</span><span class="token string">\'a\'</span>\n            ^^^\nSyntaxError: missing <span class="token punctuation">)</span> after argument list\n    at startup <span class="token punctuation">(</span>bootstrap_node.js:134:11<span class="token punctuation">)</span>\n    at bootstrap_node.js:535:3\n</code></pre>\n      </div>\n<ul>\n<li>—inspect<a href="%3E=v6.3.0">=host:port</a>：对指定地址和端口激活\ninspector（实时调试观察） ，默认地址端口：127.0.0.1:9229。调试工具与 Node.js 实例通过一个使用 <a href="https://chromedevtools.github.io/devtools-protocol/">Chrome Debugging Protocol</a> 的 tcp 端口进行通信。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node --inspect\nDebugger listening on port 9229.\nWarning: This is an experimental feature and could change at any time.\nTo start debugging, <span class="token function">open</span> the following URL <span class="token keyword">in</span> Chrome:\n    chrome-devtools://devtools/bundled/inspector.html?experiments<span class="token operator">=</span>true<span class="token operator">&amp;</span>v8only<span class="token operator">=</span>true<span class="token operator">&amp;</span>ws<span class="token operator">=</span>127.0.0.1:9229/******\n<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>在浏览器里打开那个链接将看到和在谷歌浏览器里打开检查以后类似的调试器。</p>\n<ul>\n<li>—inspect-brk[=host:port]（>=v7.6.0）：与 —inspect 类似，不同的是会在用户代码的第一行暂停。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ node --inspect-brk\nDebugger listening on ws://127.0.0.1:9229/*********\nFor <span class="token function">help</span> see https://nodejs.org/en/docs/inspector\n</code></pre>\n      </div>\n<ul>\n<li>\n<p>—zero-fill-buffers（>=v6.0.0）：在新建的 Buffer 实例时全都用 0 填充，因为新建的 Buffer 实例里可能包含敏感数据。</p>\n</li>\n<li>\n<p>—prof-process（>=v6.0.0）：输出 V8 profiler 的输出。\n<code class="language-text">node --prof-process index.js</code> 命令正常运行 <code class="language-text">index.js</code> 然后生成一个 isolate- 开头的 log 文件，然后就可以运行 <code class="language-text">node --prof-process isolate-0x103000000-v8.log(刚生成的文件名) &gt; output.txt</code> 来生成 output.txt 文件，文件里包含 V8 profiler 的各种信息，如 JavaScript 耗时、C++ 层耗时等。</p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">Statistical profiling result from isolate-0x103000000-v8.log, <span class="token punctuation">(</span>312 ticks, 14 unaccounted, 0 excluded<span class="token punctuation">)</span>.\n\n <span class="token punctuation">[</span>Shared libraries<span class="token punctuation">]</span>:\n   ticks  total  nonlib   name\n     43   13.8%          /usr/lib/system/libsystem_malloc.dylib\n      5    1.6%          /usr/lib/system/libsystem_kernel.dylib\n      3    1.0%          /usr/lib/system/libsystem_c.dylib\n      2    0.6%          /usr/lib/system/libsystem_platform.dylib\n      1    0.3%          /usr/lib/system/libsystem_pthread.dylib\n      1    0.3%          /usr/lib/libc++abi.dylib\n      1    0.3%          /usr/lib/libc++.1.dylib\n\n <span class="token punctuation">[</span>JavaScript<span class="token punctuation">]</span>:\n   ticks  total  nonlib   name\n      1    0.3%    0.4%  Builtin: StoreICStrict_Uninitialized\n\n <span class="token punctuation">[</span>C++<span class="token punctuation">]</span>:\n   ticks  total  nonlib   name\n     21    6.7%    8.2%  t node::<span class="token punctuation">(</span>anonymous namespace<span class="token punctuation">)</span>::ContextifyScript::New<span class="token punctuation">(</span>v8::FunctionCallbackInfo<span class="token operator">&lt;</span>v8::Value<span class="token operator">></span> const<span class="token operator">&amp;</span><span class="token punctuation">)</span>\n  \n  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>\n</code></pre>\n      </div>\n<h1>V8 可选项</h1>\n<p><code class="language-text">node --v8-options</code> 命令将输出所有可用的 V8 可选项（超级多！！）。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">SSE3<span class="token operator">=</span>1 SSSE3<span class="token operator">=</span>1 SSE4_1<span class="token operator">=</span>1 SAHF<span class="token operator">=</span>1 AVX<span class="token operator">=</span>0 FMA3<span class="token operator">=</span>0 BMI1<span class="token operator">=</span>0 BMI2<span class="token operator">=</span>0 LZCNT<span class="token operator">=</span>0 POPCNT<span class="token operator">=</span>1 ATOM<span class="token operator">=</span>0\nUsage:\n  shell <span class="token punctuation">[</span>options<span class="token punctuation">]</span> -e string\n    execute string <span class="token keyword">in</span> V8\n  shell <span class="token punctuation">[</span>options<span class="token punctuation">]</span> file1 file2 <span class="token punctuation">..</span>. filek\n    run JavaScript scripts <span class="token keyword">in</span> file1, file2, <span class="token punctuation">..</span>., filek\n  shell <span class="token punctuation">[</span>options<span class="token punctuation">]</span>\n  shell <span class="token punctuation">[</span>options<span class="token punctuation">]</span> --shell <span class="token punctuation">[</span>file1 file2 <span class="token punctuation">..</span>. filek<span class="token punctuation">]</span>\n    run an interactive JavaScript shell\n  d8 <span class="token punctuation">[</span>options<span class="token punctuation">]</span> file1 file2 <span class="token punctuation">..</span>. filek\n  d8 <span class="token punctuation">[</span>options<span class="token punctuation">]</span>\n  d8 <span class="token punctuation">[</span>options<span class="token punctuation">]</span> --shell <span class="token punctuation">[</span>file1 file2 <span class="token punctuation">..</span>. filek<span class="token punctuation">]</span>\n    run the new debugging shell\n\nOptions:\n  --experimental_extras <span class="token punctuation">(</span>enable code compiled <span class="token keyword">in</span> via v8_experimental_extra_library_files<span class="token punctuation">)</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --use_strict <span class="token punctuation">(</span>enforce strict mode<span class="token punctuation">)</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --es_staging <span class="token punctuation">(</span>enable test-worthy harmony features <span class="token punctuation">(</span>for internal use only<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony <span class="token punctuation">(</span>enable all completed harmony features<span class="token punctuation">)</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_shipping <span class="token punctuation">(</span>enable all shipped harmony features<span class="token punctuation">)</span>\n        type: bool  default: <span class="token boolean">true</span>\n  --harmony_array_prototype_values <span class="token punctuation">(</span>enable <span class="token string">"harmony Array.prototype.values"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_function_sent <span class="token punctuation">(</span>enable <span class="token string">"harmony function.sent"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_tailcalls <span class="token punctuation">(</span>enable <span class="token string">"harmony tail calls"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_sharedarraybuffer <span class="token punctuation">(</span>enable <span class="token string">"harmony sharedarraybuffer"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_do_expressions <span class="token punctuation">(</span>enable <span class="token string">"harmony do-expressions"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_class_fields <span class="token punctuation">(</span>enable <span class="token string">"harmony public fields in class literals"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_async_iteration <span class="token punctuation">(</span>enable <span class="token string">"harmony async iteration"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_dynamic_import <span class="token punctuation">(</span>enable <span class="token string">"harmony dynamic import"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  --harmony_promise_finally <span class="token punctuation">(</span>enable <span class="token string">"harmony Promise.prototype.finally"</span> <span class="token punctuation">(</span>in progress<span class="token punctuation">))</span>\n        type: bool  default: <span class="token boolean">false</span>\n  \n  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>\n</code></pre>\n      </div>\n<h3>常用 V8 可选项</h3>\n<ul>\n<li>\n<p>—harmony：JavaScript 下一个版本是 Harmony，这个可选项让我们可以使用下一个版本已经实现的功能，像是 Async 之类的。</p>\n</li>\n<li>\n<p>—max<em>old</em>space_size：可以设置旧空间堆最大的大小，直接影响进程可以分配的内存。在低内存环境下很有用的一个选项。</p>\n</li>\n<li>\n<p>—optimize<em>for</em>size：和之前一个可选项使用情景类似，这个选项可以指示 V8 牺牲一些性能来优化内存空间大小。</p>\n</li>\n</ul>\n<h1>常用的 Node.js CLI 环境变量</h1>\n<ul>\n<li>NODE_DEBUG=module[,…]：列出的模块将输出 debug 信息，模块名字之间用逗号分隔。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ NODE_DEBUG<span class="token operator">=</span>module,fs,http,timers node index.js\n</code></pre>\n      </div>\n<p>不是所有的原生模块都支持 debug 输出，目前支持的模块有：\ncluster, net, http, fs, tls, module, timers。</p>\n<ul>\n<li>NODE_PATH=path[:…]：添加额外的 Node.js 寻找模块的地址，不同地址之间用冒号分隔（ windows 上面用分号分隔）。</li>\n</ul>\n<p><strong>参考</strong>：</p>\n<p><a href="https://nodejs.org/dist/latest-v6.x/docs/api/cli.html">Node.js v6.11.2 Documentation</a></p>\n<p><a href="https://blog.risingstack.com/mastering-the-node-js-cli-command-line-options/">Mastering the Node.js CLI &#x26; Command Line Options</a></p>',fields:{tagSlugs:["/blog/tags/node-js/"]},frontmatter:{title:"Node.js CLI",tags:["Node.js"],date:"2017-08-18"}}},pathContext:{slug:"/blog/2017-08-18-nodejs-cli"}}}});
//# sourceMappingURL=path---blog-2017-08-18-nodejs-cli-3444774ebdb1ac31af79.js.map