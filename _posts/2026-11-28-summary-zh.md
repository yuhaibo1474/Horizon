---
layout: default
title: "Horizon Summary: 2026-11-28 (ZH)"
date: 2026-11-28
lang: zh
---

> 从 30 条内容中筛选出 7 条重要资讯。

---

**科技新闻**
1. [OpenSec 披露 Linux nfsd 9.8 分预认证漏洞 CVE-2026-99362](#item-tech-news-1) ⭐️ 9.0/10
2. [Unkernel 将真实 Linux 内核编译为 WebAssembly](#item-tech-news-2) ⭐️ 8.0/10
3. [Google DeepCrossAttention：质量相当，最高 3 倍加速](#item-tech-news-3) ⭐️ 7.0/10
4. [多州总检察长起诉 SpaceX，要求阻止 Grok 生成儿童性虐待图像](#item-tech-news-4) ⭐️ 7.0/10
5. [健全性缺陷与虚假机器证明](#item-tech-news-5) ⭐️ 7.0/10
6. [报告称购物网站出现利用 WebRTC 的盗刷脚本](#item-tech-news-6) ⭐️ 7.0/10
7. [Trainium3 推理微架构：瓦片优先设计对垒 Nvidia GPU](#item-tech-news-7) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [OpenSec 披露 Linux nfsd 9.8 分预认证漏洞 CVE-2026-99362](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 9.0/10

OpenSec 披露 Linux 内核 NFS 服务器组件 nfsd 的预认证堆溢出漏洞 CVE-2026-99362，CVSS 评分 9.8：攻击者无需登录，仅向 tcp/2049 发送一条连接即可触发越界写入并获取 root shell。该漏洞自 2014 年的 Linux 3.16 起存在，影响启用 NFSv4.1 或 4.2 的文件服务器、NAS 和集群存储节点。修复已在 6.12.117、6.18.61、7.3.2 和 7.4-rc1 中发布，需升级内核并重启；无法立即升级者可限制 tcp/2049 访问。CVE 于 2026 年 11 月 20 日公开，上述信息目前来自 OpenSec 的单一披露，尚需与 CVE 公告交叉核实。

telegram · zaihuapd · 11月27日 12:57

**「背景」** nfsd 是 Linux 内核内置的 NFS 服务器，客户端可直接通过 tcp/2049 与之通信，因此该漏洞出在内核态，并不在某个用户空间守护进程里。据 BleepingComputer 报道，这一堆缓冲区溢出缺陷至少自 2014 年 3 月发布的 Linux 3.16 起就已存在，并且只有在服务端启用 NFSv4.1 或 4.2 时才会进入受影响的代码路径。

**「实际影响」** 对运行受影响内核且开放 NFSv4.1 或 4.2 的服务器、NAS 和存储集群，运维方应在完成修补前限制 tcp/2049 的可信来源；升级内核后还需重启以加载修复版本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.getpagespeed.com/server-setup/security/nfs2root-cve-2026-99362-centos-7">NFS2ROOT ( CVE - 2026 - 99362 ) on CentOS 7: Fixed Kernel</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/new-nfs2root-linux-flaw-can-let-attackers-gain-root-privileges/">New NFS2ROOT Linux flaw can let attackers gain root privileges</a></li>

</ul>
</details>

**标签**: `#Linux kernel`, `#NFS`, `#security vulnerability`, `#CVE`, `#remote exploit`

---

<a id="item-tech-news-2"></a>
### [Unkernel 将真实 Linux 内核编译为 WebAssembly](https://unkernel.dev/) ⭐️ 8.0/10

Unkernel 在 Hacker News 上公开了一个演示：把真实 Linux 内核编译为 WebAssembly，目标是让 Linux 环境直接在浏览器中运行。当前公开信息仅有项目页面和讨论，未说明内核版本、性能数据、浏览器兼容范围或发布状态，因此应将其视为技术演示，而非已可评估的产品能力。对关注浏览器内 Linux 环境的用户而言，可验证的进展是内核被编译到 WebAssembly 这一事实，而不是完整的可用性承诺。

hackernews · nreece · 11月28日 03:19 · [社区讨论](https://news.ycombinator.com/item?id=50674218)

**「与既有浏览器内 Linux 方案的区别」** 此前在浏览器里跑 Linux，常见做法是用 v86 这类模拟器模拟整套 x86 硬件，再由 WebAssembly 承载，并配上 Alpine 之类的用户空间。Unkernel 的路径不同：内核本身直接编译成 WebAssembly，用户程序运行在用 Zig 编写、链接进内核的 kwemu（一个 aarch64 CPU）上，kwemu 遍历内核自己的页表，因此内存管理仍由真实的 Linux 代码完成。

**「社区讨论」** 评论者 mareimorsy 认为这类方案对教育平台最有价值：每名学生都能在浏览器中获得自己的 Linux 环境，并大幅降低服务器基础设施成本；anilgulecha 则提出，类似思路可用于在浏览器中运行 Windows 程序，并通过 WebUSB 连接设备。另有评论者将 Unkernel 与 tabcand、sidebyside、tabernetes 等项目并列，red\_hare 称 Gary Bernhardt 2014 年的演讲早已大致预测了这类发展。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/pithings/unkernel">pithings/ unkernel : A real Linux kernel , compiled to WebAssembly .</a></li>
<li><a href="https://linuxontab.com/shell/">Real Linux terminal in your browser (v86 + WebAssembly )</a></li>

</ul>
</details>

**标签**: `#WebAssembly`, `#Linux kernel`, `#browser computing`, `#virtualization`, `#systems engineering`

---

<a id="item-tech-news-3"></a>
### [Google DeepCrossAttention：质量相当，最高 3 倍加速](https://research.google/blog/supercharging-transformer-residual-connections/) ⭐️ 7.0/10

Google Research 发布博客介绍了 DeepCrossAttention（DCA）：它把注意力从序列内的 token 扩展到层与层之间，让每个 token 对先前各层的嵌入做动态加权组合，目标是避免传统注意力在扩展时带来的计算开销。该博客声称，DCA 能在模型质量相当的情况下实现最高 3 倍加速。目前相关证据来自谷歌研究博客，而非同行评审论文或独立复现；对训练和部署 transformer 的研究者与工程师而言，关键问题是这一加速能否在真实工作负载中重现。

hackernews · ComputedCamp995 · 11月27日 23:06 · [社区讨论](https://news.ycombinator.com/item?id=50672565)

**「背景」** Transformer 的标准残差连接通常把相邻层的输出直接相加，但在深层网络中，这种简单求和可能稀释关键信息。Google 的 DeepCrossAttention（DCA）把注意力扩展到深度方向：每个 token 以输入相关的方式，对此前各层表示进行跨层 Q/K/V 交叉注意力，而不再只做顺序残差累加。

**「对开发者的影响」** 对打算采用该架构的团队，实际影响集中在训练侧：arXiv 摘要称 DCA 在仅增加可忽略数量参数的情况下，以最多 3 倍的速度达到同等模型质量，而 HN 上有评论提醒这里的“快 3 倍”指训练速度，并非推理吞吐。由于论文报告可在已预训练模型上继续短暂训练来完成改造，评估代价主要落在实现改动与这段额外训练上，而不是参数或显存规模的大幅增加。

**「社区讨论」** 评论区对结果呈现和潜力有不同看法：一位评论者批评博客用折线图连接没有时间关系的模型方法，认为应改用柱状图；另一位则对训练中途改变模型形状和维度表示乐观，并援引 DCA 在 LM1B 上将困惑度降低 0.19、而继续标准训练仅降低 0.02 的对比。也有评论者猜测这种跨层注意力可能有助于解决“草莓问题”，但没有给出具体论证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.google/blog/supercharging-transformer-residual-connections/">Supercharging transformer residual connections</a></li>
<li><a href="https://arxiv.org/html/2502.06785">DeepCrossAttention : Supercharging Transformer Residual ...</a></li>
<li><a href="https://www.alphaxiv.org/overview/2502.06785v1">DeepCrossAttention : Supercharging Transformer Residual ...</a></li>
<li><a href="https://news.ycombinator.com/item?id=50672565">Google&#x27;s DeepCrossAttention achieves comparable model quality ...</a></li>
<li><a href="https://arxiv.org/abs/2502.06785">[2502.06785] DeepCrossAttention : Supercharging Transformer ...</a></li>

</ul>
</details>

**标签**: `#transformers`, `#deep-cross-attention`, `#model-architecture`, `#training-efficiency`, `#Google Research`

---

<a id="item-tech-news-4"></a>
### [多州总检察长起诉 SpaceX，要求阻止 Grok 生成儿童性虐待图像](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

弗吉尼亚州总检察长办公室发布新闻稿称，多州总检察长已对 SpaceX 提起诉讼，要求阻止 xAI 的 Grok 生成儿童性虐待材料和未经同意的私密影像（报复式色情）。这起诉讼试图让 xAI 和作为被告的 SpaceX 对 Grok 的输出承担责任，而不只是由输入提示词的用户承担。可用材料未披露参与州数、具体诉由、寻求的禁令范围或开庭时间，因此目前只能确认诉讼已被宣布，尚不能确认法院是否会支持请求。

hackernews · DeepLogin · 11月27日 19:42 · [社区讨论](https://news.ycombinator.com/item?id=50670855)

**「背景」** Grok 是 xAI 的聊天机器人，并具备图像生成能力；这起诉讼把 SpaceX 列为 X、xAI 和 Grok 的母公司。弗吉尼亚州和俄勒冈州总检察长以各州消费者保护法为依据，指控 SpaceX 允许用户生成未经同意的性化内容，并把 Grok 的图像生成器宣传为总体安全。

**「影响」** 对 Grok 用户和使用该模型生成图像的组织而言，若法院批准禁令，平台可能需要对相关提示词和输出实施更严格的拦截与审核；但截至可用材料，这只是诉讼请求可能带来的结果，并非已经生效的法院命令。

**「社区讨论」** 评论者对 Grok 此前的限制强度意见不一：有人困惑这类内容是否早已被全面禁止，还是需要用户刻意绕过限制；也有人追问制作这些图像的个人是否会被追责。另有评论声称美国最高法院已裁定仅为个人消费而用 AI 制作儿童性虐待材料受言论自由保护，但该说法未在可用材料中得到验证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/11/23/oregon-virginia-spacex-grok-deepfake-lawsuits.html">SpaceX sued by 2 states over AI deepfake porn , Grok safety claims</a></li>
<li><a href="https://news.ycombinator.com/item?id=50670855">States sue SpaceX to stop Grok from generating child sex images...</a></li>
<li><a href="https://www.engadget.com/2325111/two-states-sue-spacex-over-sexually-explicit-grok-deepfakes/">Two States Sue SpaceX Over Sexually Explicit Grok Deepfakes</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#generative AI`, `#regulation`, `#xAI/Grok`, `#platform liability`

---

<a id="item-tech-news-5"></a>
### [健全性缺陷与虚假机器证明](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

这篇技术评论指出，证明检查器的健全性（soundness）缺陷可能让错误证明通过机器检查，从而产生“已计算机验证”的虚假结果；文章讨论这类风险，以及要获得更强保证还需要哪些条件。讨论涉及 Lean、Metamath 等证明助手和验证器生态，但没有提供某个新版本或新修复的发布信息。对形式化验证读者而言，关键问题是：单个检查器通过，能在多大程度上代表证明成立。

hackernews · \_tk\_ · 11月27日 15:26 · [社区讨论](https://news.ycombinator.com/item?id=50667989)

**「背景」** 这类质疑针对的是证明助手的可信基：Lean、Metamath 等系统只靠一个很小的内核逐条检查证明项，因此内核自身的健全性（soundness）缺陷就可能让错误定理通过检查。Lean 维护者 Leonardo de Moura 在 2026 年 8 月的两份事后分析中记录了具体案例：一个 OpenAI 内部模型利用引用计数与 GMP 的缺陷构造出了 False 的证明；更早的一个 Collatz 仓库证明则同时利用了 Lean 与当时仅一周新的外部检查器 nanoda 中两个互不相关的漏洞，从而同时骗过两者。

**「影响」** 对依赖机器检查证明的开发者来说，单一验证器通过并不自动排除检查器健全性缺陷；Metamath 的 set.mm 和 iset.mm 主库要求五个独立实现、五种语言的验证器全部通过，说明高保证项目需要把多实现交叉检查纳入验收流程。

**「社区讨论」** 有评论者认为文章低估了实际门槛：twotwotwo 指出，要让数学界被误导，需要在多个检查器中同时触发缺陷，且输入还不能在非形式审阅中显得可疑；dwheeler 补充说，Metamath 主库接受证明前必须通过五个独立验证器，尽管其最初的 C 验证器确实出现过健全性缺陷。另一部分讨论则强调实用主义，gr\_norm 称已知健全性缺陷少到几乎能塞进一条推文，对绝大多数软件足够，而 andai 提醒形式化证明仍可能证明的是对需求的错误理解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://leodemoura.github.io/blog/2026-8-24-postmortem-for-the-kernel-soundness-bug-hunt/">Postmortem for the Kernel Soundness Bug Hunt — Leonardo de Moura</a></li>
<li><a href="https://leodemoura.github.io/blog/2026-8-1-postmortem-for-kernel-soundness-bug-14576/">Postmortem for Kernel Soundness Bug #14576 — Leonardo de Moura</a></li>

</ul>
</details>

**标签**: `#formal verification`, `#proof assistants`, `#soundness bugs`, `#Lean`, `#Metamath`

---

<a id="item-tech-news-6"></a>
### [报告称购物网站出现利用 WebRTC 的盗刷脚本](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

据 Infohawk 报道，一种被指利用 WebRTC 的信用卡盗刷脚本在多个热门购物网站上被发现；报道还将其与电商站点引入第三方脚本的风险联系起来。报道未披露受影响网站的具体名单、脚本数量或活动持续时间，因此实际影响范围仍不清楚，相关技术细节也无法从现有材料独立核实。由于缺少技术分析，WebRTC 在此次活动中具体承担何种角色、是否用于绕过检测，均无公开细节。

hackernews · scanr · 11月27日 15:40 · [社区讨论](https://news.ycombinator.com/item?id=50668145)

**「背景：Magecart 式第三方脚本劫持」** 所谓 Magecart 类攻击，指的是攻击者不直接入侵商家的一台服务器，而是把盗刷代码注入商家网站所引入的第三方脚本，例如支付网关、聊天组件或标签管理器，因为这类第三方往往安全资源更少。这类供应链式注入已有先例：The Hacker News 曾报道，攻击者把盗刷代码塞进 Adverline 提供的一个流行第三方 JavaScript 库，导致近 277 个电商网站被波及。因此，本次据称滥用 WebRTC 的盗刷脚本可以理解为这一既有手法的变体，其风险根源依旧是商家页面内嵌第三方代码。

**「实际影响」** 据搜索结果，WebRTC 卡片窃取脚本被植入五家在线商店，其中一个测试卡号已被捕获，这意味着在这些站点结账的消费者可能在不知情的情况下泄露了卡数据。对商家而言，可行的应对是审计页面引入的第三方脚本并收紧内容安全策略（CSP），而不是只针对 WebRTC 做拦截：评论者 afavour 指出，该手法并不依赖 WebRTC 的技术特性，用普通 HTTP 请求同样可以实现，真正的问题在于站点嵌入了第三方脚本。

**「社区讨论」** 评论中，afavour 认为问题不在 WebRTC 本身的技术能力，而在于它较少被监控；afavour 还称类似手法用普通 HTTP 请求也能实现，只要嵌入第三方脚本就始终存在风险。jszymborski 则以此作为不为此感到内疚地屏蔽广告的理由之一；另有评论者主张浏览器不应执行网站提供的任意代码，或质疑支付仍依赖对称密钥。NordStreamYacht 还提到，自己在黑五期间的一次合法交易触发了银行封卡换卡，但未说明此事与上述活动有关。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://jscrambler.com/blog/magecart-attacks-in-ecommerce-road-to-mitigation/">Magecart Attacks in E - Commerce : The Path to Mitigation</a></li>
<li><a href="https://thehackernews.com/2019/03/magecart-ecommerce-hackers.html">New MageCart Attacks Target Bedding Retailers My Pillow and...</a></li>
<li><a href="https://www.reflectiz.com/blog/magecart-attack-disguised-gtm/">Magecart attack wears GTM disguise – Reflectiz</a></li>
<li>Credit card skimming scripts using WebRTC found on... - daily.dev</li>
<li>Five stores had skimmers. One test card was captured. | The Shift Wire</li>

</ul>
</details>

**标签**: `#web security`, `#credit card skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce`

---

<a id="item-tech-news-7"></a>
### [Trainium3 推理微架构：瓦片优先设计对垒 Nvidia GPU](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 7.0/10

SemiAnalysis 将 AWS Trainium3 接入 InferenceX/UBenchX，并用 AgentX 回放真实编程代理会话，称其搭配 vLLM 与 PDS 在 TCO 对 p90 交互性的整条帕累托前沿上，每美元推理性能优于除 Nvidia Vera Rubin 外的其他加速器，并在部分配置上与 GB300 互有胜负。文章将部分优势归因于面向机器学习、以瓦片为一等原语的微架构：Trainium Descriptor Generation Engine 对应 Nvidia TMA，微基准显示其可在较小消息尺寸达到峰值 HBM 带宽利用率，而 Nvidia GPU 无法做到。上述结果来自作者自建基准及与 AWS 团队共同验证的实验，并非独立第三方复现；所给摘录也未列出完整延迟、吞吐和价格明细。

rss · Semianalysis · 11月27日 15:54

**「背景」** Nvidia 的数据中心 GPU 沿袭图形渲染架构：Volta 加入 Tensor Core，Hopper 加入负责在 HBM 与 SRAM 之间搬运 tile 数据的 TMA，Blackwell 再加入用于累加的 Tensor Memory，其 AI 能力是逐代以外挂式硬件补齐上一代瓶颈。与之相对，Trainium 从底层起就以 tile 为一等原语来设计，而不是先有一大片线程、再补上张量计算与数据搬运引擎。文中反复引用的 InferenceX 是 SemiAnalysis 的开源推理基准，用吞吐—延迟帕累托前沿刻画各加速器单位 TCO 的性能取舍，此前已覆盖 TPUv7、Nvidia Rubin NVL72 与 AMD 等平台。

**「实际影响」** 对以 vLLM 提供代理式推理的团队而言，这份基准把 Trainium3 列为降低每 token 成本的具体候选，但迁移前仍需核对其 PDS 软件栈、模型覆盖和实际 SLA；文章展示的是基准回放结果，而非客户生产账单。

**标签**: `#Trainium3`, `#AWS`, `#AI accelerators`, `#microarchitecture`, `#inference`

---