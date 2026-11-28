---
layout: default
title: "Horizon Summary: 2026-11-28 (ZH)"
date: 2026-11-28
lang: zh
---

> 从 31 条内容中筛选出 10 条重要资讯。

---

**科技新闻**
1. [OpenSec 披露 Linux nfsd 预认证漏洞，可远程获取 root](#item-tech-news-1) ⭐️ 8.0/10
2. [两州总检察长起诉 SpaceX，要求限制 Grok 生成非法图像](#item-tech-news-2) ⭐️ 7.0/10
3. [Unkernel 将真实 Linux 内核编译为 WebAssembly](#item-tech-news-3) ⭐️ 7.0/10
4. [热门购物网站被发现使用 WebRTC 的信用卡盗刷脚本](#item-tech-news-4) ⭐️ 7.0/10
5. [Google DeepCrossAttention 宣称同等模型质量下最高提速 3 倍](#item-tech-news-5) ⭐️ 7.0/10
6. [机器检查的证明仍可能为假：检查器健全性缺陷之争](#item-tech-news-6) ⭐️ 7.0/10
7. [报道称美情报机构遭 AI 辅助攻击，涉 Artex](#item-tech-news-7) ⭐️ 7.0/10
8. [《我的世界》基岩版资源包漏洞 26.65 修复](#item-tech-news-8) ⭐️ 7.0/10

**财经新闻**
1. [央行发布大额存单新规 个人起购门槛降至 10 万元](#item-finance-news-1) ⭐️ 7.0/10
2. [市场监管总局集中约谈雅迪、台铃、爱玛等 15 家电动自行车企业](#item-finance-news-2) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [OpenSec 披露 Linux nfsd 预认证漏洞，可远程获取 root](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 8.0/10

一则 Telegram 聚合帖称，OpenSec 披露 Linux 内核 NFS 服务器 nfsd 存在预认证堆溢出 CVE-2026-99362，CVSS 9.8；攻击者无需登录，向 tcp/2049 发送一条连接即可越界写入内核堆，并可能取得 root shell。该问题据称自 2014 年 Linux 3.16 起存在，影响启用 NFSv4.1 或 4.2 的文件服务器、NAS 和集群存储节点。帖中列出的修复版本为 6.12.117、6.18.61、7.3.2 和 7.4-rc1，升级内核后需重启；无法立即升级的环境可限制 tcp/2049 访问。该信息目前仅见单一聚合来源，实施前应以 OpenSec 原始公告和内核补丁核对 CVE 编号、受影响范围与修复状态。

telegram · zaihuapd · 11月27日 12:57

**「背景」** NFS 是类 Unix 系统常用的网络文件系统协议，Linux 内核中的 nfsd 负责在 tcp/2049 上向客户端提供共享目录；此次受影响的是启用 NFSv4.1 或 4.2 的主机。所谓“预认证”是指攻击者在完成登录或凭据校验之前就能触发漏洞，因此直接暴露该端口的主机风险更高。

**「运维影响」** 对仍运行受影响 nfsd 并开放 tcp/2049 的文件服务器、NAS 和集群存储节点，未认证攻击者一旦利用该漏洞即可取得 root。运维方应优先升级到已修复内核（如 6.12.117、6.18.61 或 7.3.2）并重启；无法立即重启时，应限制 tcp/2049 访问并核对合法 NFS 客户端，以免缓解措施中断正常挂载。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://opensec.in/blog/nfs2root-cve-2026-99362">NFS2ROOT ( CVE - 2026 - 99362 ): pre-auth root in Linux nfsd | OpenSec</a></li>
<li><a href="https://dbu.gs/vulnerability/PT-2026-151543">CVE - 2026 - 99362 — Vulnerability in Linux Kernel | dbugs</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/new-nfs2root-linux-flaw-can-let-attackers-gain-root-privileges/">New NFS2ROOT Linux flaw can let attackers gain root privileges</a></li>

</ul>
</details>

**标签**: `#Linux kernel`, `#security vulnerability`, `#NFS`, `#remote root`, `#CVE-2026-99362`

---

<a id="item-tech-news-2"></a>
### [两州总检察长起诉 SpaceX，要求限制 Grok 生成非法图像](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

弗吉尼亚州总检察长办公室称，杰伊·琼斯（Jay Jones）与雷菲尔德（Rayfield）已对 SpaceX 提起诉讼，要求阻止其旗下 xAI 的 Grok 生成儿童性虐待材料和未经同意的私密影像（即报复性色情）。诉讼还指称，该平台被用于创建和推广这类内容；SpaceX 是 X 和 xAI 的母公司，因此被列为被告。目前案件处于起诉阶段，相关指控尚未经法院认定。

hackernews · DeepLogin · 11月27日 19:42 · [社区讨论](https://news.ycombinator.com/item?id=50670855)

**「背景」** 这起诉讼是围绕 Grok 生成非法图像的一系列法律行动中的最新一步。据 The Guardian 2026 年 9 月报道，一名儿童性虐待幸存者已起诉 xAI，指控该聊天机器人利用她遭受侵害的照片生成了新的非法色情图像；Ars Technica 2026 年 7 月报道的另一起诉讼则称，一名男子使用 Grok 生成了约 7000 张儿童性虐待图像，而 xAI 的儿童安全系统直到出现“轮奸”提示词时才介入，并向美国失踪与受虐儿童中心（NCMEC）发出 CyberTip。上述案件均针对具体用户行为或个别受害者，而此次是由多州总检察长以执法者身份，起诉 xAI 与 X 的母公司 SpaceX。

**「影响」** 如果法院签发禁令，SpaceX 将需要调整 Grok 的图像生成或内容过滤，以避免生成涉案类别的内容；使用 Grok 图像功能的用户和开发者需要提前评估更严格的提示词限制、审核或功能可用性变化。

**「社区讨论」** 评论区里有人质疑 Grok 的内容限制为何能被绕过，并追问它是默认宽松，还是用户需要“诱导”才能生成这类内容；也有人把焦点放在生成者本人是否应被追责。另有评论者声称，最高法院已裁定，仅为自己消费而用 AI 制作儿童性虐待材料属于受保护的言论；但这只是评论者的说法，未在讨论中得到证实。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theguardian.com/technology/2026/sep/03/elon-musk-ai-grok-child-porn-lawsuit">Child sexual abuse survivor alleges Elon Musk’s AI... | The Guardian</a></li>
<li><a href="https://arstechnica.com/tech-policy/2026/07/lawsuit-grok-user-made-7k-child-sex-images-xai-only-reported-one-gang-rape-prompt/">Lawsuit : Man used Grok to make 7K sex images of... - Ars Technica</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#generative AI`, `#content moderation`, `#AI regulation`, `#Grok/xAI`

---

<a id="item-tech-news-3"></a>
### [Unkernel 将真实 Linux 内核编译为 WebAssembly](https://unkernel.dev/) ⭐️ 7.0/10

Unkernel 是一个把真实 Linux 内核编译为 WebAssembly 的项目，目标用户是希望在 WebAssembly 环境中运行 Linux 的系统开发者和运行时开发者。它目前更像一次可操作的演示，而不是带有版本号、性能数据和兼容性说明的正式发布。现有信息尚未给出支持范围、安装方式或可复现的基准结果。

hackernews · nreece · 11月28日 03:19 · [社区讨论](https://news.ycombinator.com/item?id=50674218)

**「背景」** Unkernel 的关键前提是把 Linux 内核本身编译成 WebAssembly，而不是让浏览器远程连接一台 Linux 主机；其 GitHub 说明称整个环境在用户设备上运行，无需安装，也没有服务器端。项目页面称它能在不到一秒内启动到 shell，dev.to 的介绍还列出 /proc、epoll、cgroups、overlayfs 以及用于恢复系统的 safe mode，这些是判断它能否替代本地小型 Linux 环境的具体观察点。

**「实际影响」** 对希望避免启动完整虚拟机的开发者，评论中提到的直接用途是快速运行很小的后端脚本；但有人尝试在已安装 Chromium 的环境中嵌套运行 Unkernel 失败，说明复杂的浏览器或虚拟化负载仍受到限制。

**「社区讨论」** 有评论者报告并发测试结果：4 个 md5sum 同时运行的墙钟时间与单进程相同，但在 Chromium 中嵌套运行 Unkernel 未成功。另一位评论者称其用例是免去启动虚拟机、快速运行小型后端脚本，并对此表示感谢。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://unkernel.dev/">unkernel</a></li>
<li><a href="https://github.com/pithings/unkernel">GitHub - pithings/unkernel: A real Linux kernel, compiled to ...</a></li>
<li><a href="https://dev.to/jamilxt/linux-compiled-to-webassembly-how-unkernel-works-and-how-to-try-it-22ec">Linux Compiled to WebAssembly: How unkernel Works and How to ...</a></li>

</ul>
</details>

**标签**: `#webassembly`, `#linux-kernel`, `#browser-runtime`, `#virtualization`, `#systems`

---

<a id="item-tech-news-4"></a>
### [热门购物网站被发现使用 WebRTC 的信用卡盗刷脚本](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

据 InfoHawk 于 2026 年 11 月 27 日（黑色星期五）发布的报道，安全研究人员在多个热门购物网站上发现信用卡盗刷（skimming）脚本，这些脚本借助 WebRTC 运行。盗刷脚本一般被植入电商结账页面，用于窃取支付卡数据。不过，目前可获取的报道内容没有列出受影响网站名单、脚本注入途径、攻击者身份或受影响用户规模。该发现来自媒体与研究人员的报告，尚无厂商确认的修复状态，也没有独立复现结果。

hackernews · scanr · 11月27日 15:40 · [社区讨论](https://news.ycombinator.com/item?id=50668145)

**「背景」** WebRTC 的 DataChannel 允许浏览器在对等连接中直接收发数据，这类流量不经过页面常规的 fetch/XHR 请求路径，因此难以被内容安全策略（CSP）和常见的第三方脚本监控所覆盖。据安全研究记录，Sansec 于 2026 年 3 月 24 日公开了首个利用 WebRTC DataChannel 传输并外泄支付数据的盗刷脚本，当时被描述为绕过传统安全控制的新手法；本次报道的购物网站事件属于同一攻击思路在 Black Friday 购物季前后的又一次出现。

**「对电商站点防护的影响」** 对电商站点而言，这意味着仅靠 CSP 和针对 XHR 的出口监控并不足以覆盖此类窃取方式：已有安全研究记录显示，基于 WebRTC 数据通道的支付窃取脚本可绕过 CSP 接收载荷并外传数据（tool-3-1、tool-3-2、tool-3-3）。因此，运营方需要把第三方脚本清单审计，以及对浏览器内 WebRTC 连接的检测和拦截，纳入支付页面的常规检查。

**「社区讨论」** 评论中，jszymborski 认为这类事件正是他不必为屏蔽广告感到愧疚的理由之一；afavour 则指出，问题并不在于 WebRTC 的技术能力，而在于它较少被监控，而且攻击者主要针对更难被检测的移动设备，同类手法用普通 HTTP 请求也能实现，只要网站嵌入第三方脚本，就始终存在风险。s\_u\_d\_o 追问为何广告平台不沙箱化广告内容、浏览器为何不彻底禁止广告执行 JavaScript，\_\_MatrixMan\_\_ 则以“密码学早已存在”为由批评支付体系仍然依赖对称密钥。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://rhisac.org/threat-intelligence/webrtc-based-payment-skimmer-targeting-ecommerce-sites-via-polyshell-vulnerability/">RH-ISAC | WebRTC-Based Payment Skimmer Targeting ECommerce ...</a></li>
<li><a href="https://rfxn.com/research/webrtc-skimmer-csp-bypass">WebRTC Skimmers: How Payment Thieves Bypass Content Security ...</a></li>
<li><a href="https://securityarsenal.com/blog/how-to-defend-against-webrtc-skimmers-bypassing-csp-in-e-commerce">How to Defend Against WebRTC Skimmers Bypassing CSP in E-Commerce</a></li>
<li><a href="https://cyberreplay.com/blog/webrtc-skimmer-detection-detect-block-csp-bypassing-payment-skimmers/">WebRTC Skimmer Detection: How to Detect and Block CSP ...</a></li>
<li><a href="https://thehackernews.com/2026/03/webrtc-skimmer-bypasses-csp-to-steal.html">WebRTC Skimmer Bypasses CSP to Steal Payment Data from E ...</a></li>

</ul>
</details>

**标签**: `#web security`, `#credit card skimming`, `#WebRTC`, `#e-commerce`, `#third-party scripts`

---

<a id="item-tech-news-5"></a>
### [Google DeepCrossAttention 宣称同等模型质量下最高提速 3 倍](https://research.google/blog/supercharging-transformer-residual-connections/) ⭐️ 7.0/10

Google Research 公布了 DeepCrossAttention，一种在 Transformer 残差连接上跨层应用注意力的技术，并声称在模型质量相当的情况下最高可实现 3 倍加速。该结果目前来自 Google Research 博客的厂商表述，所给材料未包含独立复现、具体基准设置或适用条件。对 Transformer 开发者而言，这意味着一种可能影响深层模型注意力开销的架构选项，但其实际收益仍需外部验证。

hackernews · ComputedCamp995 · 11月27日 23:06 · [社区讨论](https://news.ycombinator.com/item?id=50672565)

**「背景」** 传统 Transformer 的残差连接只是把此前各层的输出逐层相加；Google 研究团队指出，这种做法可能稀释关键信息。DeepCrossAttention 改为在层与层之间做注意力，让每个 token 以可学习权重组合此前所有层的表示，相关论文已在 ICML 2025 发表。

**「影响」** 对训练和推理团队而言，DCA 的直接影响是可能以更少计算达到同等验证困惑度，从而降低扩展 Transformer 的算力成本；但“最高快 3 倍”目前只是 Google 研究博客的厂商声明，公开对比也集中在 LM1B 和 C4 的验证困惑度上。采用前应在自有模型、序列长度和硬件上复测实际吞吐与质量，而不能直接把该加速比外推到生产负载。

**「社区讨论」** 有评论者批评图表用折线图连接不同方法，认为应改用柱状图，因为这些方法之间没有时间关系；另一名评论者猜测跨层注意力可能为“strawberry problem”提供思路，但未给出验证。讨论中没有出现对 3 倍加速主张的独立复现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2502.06785">DeepCrossAttention : Supercharging Transformer Residual ...</a></li>
<li><a href="https://scholar.google.com/citations?user=SZpFJqIAAAAJ&amp;hl=en">Google - Cited by 399 - Machine Learning - Data Mining - Algorithms</a></li>
<li><a href="https://research.google/blog/supercharging-transformer-residual-connections/">Supercharging transformer residual connections</a></li>

</ul>
</details>

**标签**: `#DeepCrossAttention`, `#transformer architecture`, `#model efficiency`, `#Google Research`, `#residual connections`

---

<a id="item-tech-news-6"></a>
### [机器检查的证明仍可能为假：检查器健全性缺陷之争](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

cr.yp.to 上发表的评论文章《False computer-checked proofs》提出：证明即使通过了计算机检查，结论仍可能是假的，因为证明检查器本身可能存在健全性（soundness）缺陷，从而接受错误的证明。文章据此主张，不应把“通过检查”当成数学真理的最终保证，而应对检查器本身做高保障验证。这是一篇论证性文章，而非披露新的具体漏洞事件。

hackernews · \_tk\_ · 11月27日 15:26 · [社区讨论](https://news.ycombinator.com/item?id=50667989)

**「背景」** 形式化证明的可靠性通常依赖“信任内核”原则（de Bruijn 判据）：证明助手把庞大的自动化与策略层同最终校验分开，只要求一个很小的检查器逐步验证证明项。于是检查器本身成为整条信任链的根基——所谓 soundness（可靠性），即检查器绝不接受不成立的命题；一旦检查器存在 soundness bug，“通过机器检查”就不再等于“命题为真”。djb 的文章正是围绕已报告的这类检查器可靠性缺陷展开讨论。

**「影响」** 对依赖 Lean、Metamath 等形式化验证系统的开发者和数学工作者而言，实际做法是用多个独立编写、独立实现的检查器交叉验证同一份证明，并保留非形式化的人工审阅环节，而不是只信任单一检查器的通过结果。

**「社区讨论」** 评论者 twotwotwo 认为文章低估了“一次错误验证”与“成功误导数学家”之间的差距：需要多个检查器同时存在缺陷，且输入在非形式化审阅下看不出问题；他举例说，一名 DeepMind 研究者构造的“证明”曾分别利用不同 bug 同时通过 Lean 和一个当时仅一周新的 nanoda 版本。dwheeler 补充说，Metamath 的 set.mm 和 iset.mm 主数据库要求证明通过 5 个由不同作者、用不同语言编写的独立验证器（包括 C 写的 metamath 和 Java 写的 mmj2）；gr\_norm 则认为这些检查器已存在数十年，其全部健全性 bug“几乎能塞进一条推文”，对 99.9% 的软件足够；andai 还指出另一类风险：代理可能针对自己对需求的错误理解去“证明”正确性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cr.yp.to/proofs/falseccp.html">False computer - checked proofs (djb)</a></li>

</ul>
</details>

**标签**: `#formal verification`, `#proof assistants`, `#Lean`, `#Metamath`, `#software correctness`

---

<a id="item-tech-news-7"></a>
### [报道称美情报机构遭 AI 辅助攻击，涉 Artex](https://www.forbes.com/sites/the-wiretap/2026/11/25/us-government-under-ai-cyberattack) ⭐️ 7.0/10

据《纽约时报》报道，黑客对美国中央情报局、国家地理空间情报局和国家情报总监办公室发动了由 AI 工具辅助的攻击；福布斯称此次攻击看起来不算严重，影响的是非机密侦察数据。攻击者使用的工具名为 Artex，可整合多个开源 AI 模型来测试网络和计算机防御，由一名中国开发者于今年早些时候发布。报道还称 Artex 后来被用于多起攻击，包括针对欧盟的一起，开发者已将其从 GitHub 账号删除；FBI 今年早些时候曾警告网络罪犯和间谍正在广泛使用 Artex。公开摘要未提供攻击规模、入侵路径或数据泄露的更多细节。

telegram · zaihuapd · 11月27日 10:42

**「背景」** Artex 是一款开源 AI 渗透测试框架，能整合多个开源模型自动执行网络侦察和攻击流程。据 Forbes 11 月 24 日报道，FBI 此前警告黑客正利用它自动化攻击，部分案例不到三小时即获得特权访问；BleepingComputer 11 月 15 日的报道也称该工具被用于全球攻击活动。

**「防御方面临的新压力」** 对防御方而言，ARTEX 这类由 DeepSeek、Claude 等通用大模型驱动的开源自主攻击框架，使侦察与入侵能够以较低成本自动化批量执行；有安全团队在实验环境中重建该框架后，追踪到 2,269 台暴露在外的服务器。CTI 机构 Enigma Global 汇总的 CERT 警报也指出，以红队和渗透测试为名销售的 AI 工具（如 ARTEX、CyberStrikeAI）正被攻击者用来自主发起攻击，因此开发者从 GitHub 删除仓库并不能收回已被复制的副本，相关机构需要把这类代理式工具的探测行为纳入检测范围。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.forbes.com/sites/larsdaniel/2026/11/24/fbi-warns-hackers-are-using-artex-ai-tool-to-automate-cyberattacks/">FBI Warns Hackers Are Using ARTEX AI Tool To Automate ...</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/fbi-warns-artex-ai-hacking-tool-is-powering-global-cyberattacks/">FBI warns ARTEX AI hacking tool is powering global cyberattacks</a></li>
<li><a href="https://ai-threat.watch/aof/artex/">ARTEX : agentic offensive framework | AI Threat Watch</a></li>
<li><a href="https://www.enigma-global.com/cert-alerts/13714">ARTEX and AI -Powered Red Teaming Tools ... - Enigma Global CTI</a></li>

</ul>
</details>

**标签**: `#AI cybersecurity`, `#government cyberattack`, `#Artex`, `#open-source AI`, `#intelligence agencies`

---

<a id="item-tech-news-8"></a>
### [《我的世界》基岩版资源包漏洞 26.65 修复](https://www.zaikei.co.jp/article/20261119/878386.html) ⭐️ 7.0/10

据该报道，附加组件开发者 8Crafter 于 11 月 15 日在 Reddit 披露，《我的世界》基岩版资源包可通过 content.zipe 文件改动 Ore UI 界面文件并运行隐藏脚本，已确认影响 26.52 至 26.63 版，覆盖 PC、手机和主机，Java 版不受影响。玩家加入开启资源包自动下载的服务器或 Realm 时，可能在未手动安装的情况下收到问题文件；披露列出的后果包括删除存档、获取玩家 IP，以及在 Windows 特定条件下无提示打开任意 URI、启动资源包内批处理文件下载恶意软件。报道称 Mojang 已在 26.65 版修复，AxmBro 也发布了 Windows 只读检测工具，可查找 content.zipe，但无法判定资源包是否恶意。报道未提供 CVE 编号、根因分析或 Mojang 官方公告，影响范围与利用方式均来自开发者披露。

telegram · zaihuapd · 11月27日 18:04

**「背景」** Ore UI 是《我的世界》基岩版的界面框架，资源包则是服务器或 Realm 可向加入玩家下发的自定义内容；当资源包能改写 Ore UI 文件时，隐藏脚本就可能随包进入客户端。基岩版覆盖 Windows、手机和主机，Java 版是另一套版本，报道称此次问题不影响 Java 版。

**「影响与处置」** 仍运行 26.52 至 26.63 版的玩家应升级到 26.65；在升级前加入启用资源包自动下载的服务器或 Realm，仍可能暴露于该问题。Windows 用户可用 AxmBro 的只读检测工具查找 content.zipe，但该工具不能判断资源包是否恶意，不能替代升级或人工审查。

**标签**: `#security vulnerability`, `#Minecraft Bedrock`, `#sandbox/UI tampering`, `#resource packs`, `#patch release`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [央行发布大额存单新规 个人起购门槛降至 10 万元](https://www.news.cn/fortune/20261127/70789d77822242cc82216f51a416f872/c.html) ⭐️ 7.0/10

中国人民银行 11 月 27 日公布《大额存单管理办法》，将个人投资人认购起点从 20 万元下调至不低于 10 万元，机构门槛从 1000 万元降至不低于 500 万元，均下调一半，自 2027 年 3 月 21 日起施行。同日公布的《人民币存贷款利率管理规定》要求金融机构自主确定存贷款利率，不得通过高息揽储等不正当手段吸收存款，同样自 2027 年 3 月 21 日起施行。

telegram · zaihuapd · 11月27日 11:36

**「背景」** 大额存单此前依据 2015 年《大额存单管理暂行办法》管理，个人与机构认购起点分别为 20 万元和 1000 万元；新办法将这两项门槛各下调一半，并同时废止该暂行办法及 2016 年第 13 号公告。

**「影响」** 存款在 10 万至 20 万元之间的个人投资者将首次跨过大额存单门槛；同日公布的贷款罚息上下限取消、改由金融机构与借款人协商确定，逾期借款人的罚息成本将更多取决于合同约定。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://t.me/linux_do_channel/582077">LINUX DO Channel – Telegram</a></li>
<li><a href="https://www.workercn.cn/papers/grrb/2026/06/15/4/grrb202606154.pdf">grrb0420260615C</a></li>
<li><a href="https://original.ifeng.com/c/8yP3q4DAFxV">央行发布两部利率新规：大额存单门槛降至10万元，2027年3月21日起施行</a></li>
<li><a href="https://www.sohu.com/a/1107555598_121844216">大额存单个人认购起点降至10万元 2027年3月起施行_管理_市场_银行负债</a></li>

</ul>
</details>

**标签**: `#China`, `#PBOC`, `#banking regulation`, `#large-denomination CDs`, `#interest rates`

---

<a id="item-finance-news-2"></a>
### [市场监管总局集中约谈雅迪、台铃、爱玛等 15 家电动自行车企业](https://www.news.cn/20261127/0c8c665ce70c417b9263b39fa8a519f0/c.html?hl=zh-CN) ⭐️ 7.0/10

11 月 27 日，市场监管总局对雅迪、台铃、爱玛、九号、小牛等 15 家电动自行车企业进行集中约谈。监管部门在 CCC 认证全覆盖飞行检查中发现，部分企业存在质量保证能力不足、产品一致性管控不严、销售违反强制性国家标准的不合格产品等问题，并要求企业整改，执行“一车一池一充一码”规定，承担售后责任，并对确认存在缺陷的产品立即召回。

telegram · zaihuapd · 11月27日 12:06

**「背景」** 电动自行车在中国须通过强制性产品认证（CCC 认证）才能出厂销售；2019 年新国标实施后，监管部门持续加强销售环节检查，近期又对生产企业开展全覆盖工厂检查，重点核查产品一致性。

**「影响范围」** 对已购买这 15 家企业相关车型的消费者来说，监管要求明确了退车和缺陷召回的责任，经销商不得再以“证书很快恢复”为由拒绝退车，也不得强制折价退车；相关企业则须按“一车一池一充一码”整改生产与售后流程，否则不合格产品不得流入市场。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gov.cn/gongbao/content/2019/content_5407678.htm">gov.cn/gongbao/content/2019/content_5407678.htm</a></li>
<li><a href="https://food.cnr.cn/gstj/20261103/t20261103_527860850.shtml">堵住改装漏洞 电 动 自 行 车 新 规 给消费安全上把锁_央广网</a></li>

</ul>
</details>

**标签**: `#电动自行车`, `#市场监管约谈`, `#产品质量`, `#CCC认证`, `#缺陷召回`

---