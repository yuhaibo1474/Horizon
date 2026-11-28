---
layout: default
title: "Horizon Summary: 2026-11-28 (ZH)"
date: 2026-11-28
lang: zh
---

> 从 30 条内容中筛选出 9 条重要资讯。

---

**科技新闻**
1. [OpenSec 披露 Linux nfsd 9.8 分预认证漏洞](#item-tech-news-1) ⭐️ 8.0/10
2. [Unkernel：将真实 Linux 内核编译为 WebAssembly](#item-tech-news-2) ⭐️ 7.0/10
3. [谷歌 DeepCrossAttention：质量相当，训练最高快 3 倍](#item-tech-news-3) ⭐️ 7.0/10
4. [购物网站被曝用 WebRTC 脚本窃取信用卡数据](#item-tech-news-4) ⭐️ 7.0/10
5. [《False computer-checked proofs》：证明检查器可靠性之争](#item-tech-news-5) ⭐️ 7.0/10
6. [多州总检察长起诉 SpaceX，要求阻止 Grok 生成非法图像](#item-tech-news-6) ⭐️ 7.0/10
7. [SemiAnalysis 深测 AWS Trainium3 推理性价比与微架构](#item-tech-news-7) ⭐️ 7.0/10
8. [微软扩展 Windows 内置驱动，打印机 7 月起默认 IPP](#item-tech-news-8) ⭐️ 7.0/10

**财经新闻**
1. [央行发布大额存单新规：个人认购起点降至 10 万元](#item-finance-news-1) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [OpenSec 披露 Linux nfsd 9.8 分预认证漏洞](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 8.0/10

OpenSec 披露 Linux 内核 NFS 服务器组件 nfsd 存在预认证堆溢出漏洞 CVE-2026-99362，CVSS 评分 9.8：攻击者无需登录，仅通过一条发往 tcp/2049 的连接即可越界写入内核堆，并取得 root shell。按该披露，漏洞自 2014 年 Linux 3.16 起存在，影响启用 NFSv4.1 或 4.2 的文件服务器、NAS 和集群存储节点；修复版本为 6.12.117、6.18.61、7.3.2 和 7.4-rc1，升级后需重启。CVE 于 2026 年 11 月 20 日公开，但上述技术细节来自单一来源，尚无独立验证。

telegram · zaihuapd · 11月27日 12:57

**「背景」** Linux 的 NFS 服务端由内核中的 nfsd 实现，NFSv4.1/4.2 客户端通过 TCP 2049 建立会话并发送文件操作请求。这里的“预认证”意味着攻击者不需要有效账号或完成挂载，只要网络能访问该端口，就可能在内核处理请求时触发漏洞。

**「影响」** 对无法立即升级的 NFS 服务器、NAS 和集群存储节点，披露建议用防火墙限制 tcp/2049 访问；这可缩小暴露面，但不能替代安装修复内核并重启。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://opensec.in/blog/nfs2root-cve-2026-99362">NFS 2ROOT ( CVE - 2026 - 99362 ): pre-auth root in Linux nfsd | OpenSec</a></li>
<li><a href="https://www.getpagespeed.com/server-setup/security/nfs2root-cve-2026-99362-centos-7">NFS 2ROOT ( CVE - 2026 - 99362 ) on CentOS 7: Fixed Kernel</a></li>

</ul>
</details>

**标签**: `#Linux kernel`, `#NFS`, `#security vulnerability`, `#remote code execution`, `#patching`

---

<a id="item-tech-news-2"></a>
### [Unkernel：将真实 Linux 内核编译为 WebAssembly](https://unkernel.dev/) ⭐️ 7.0/10

Unkernel 展示了一个把真实 Linux 内核编译为 WebAssembly 的项目，面向浏览器内的沙箱运行，并把自己定位为面向 WASM 的 POSIX 运行时的替代方案。现有材料没有给出支持的内核版本、性能数据或可复现的兼容性结果，因此目前只能确认这是一个受到关注的技术方案，不能视为已经验证可广泛部署的能力。

hackernews · nreece · 11月28日 03:19 · [社区讨论](https://news.ycombinator.com/item?id=50674218)

**「背景」** WebAssembly 是面向沙箱化执行的字节码目标；一种在浏览器里跑 Linux 的常见做法是用 v86 这类 x86 模拟器启动真实内核。Unkernel 则把 Linux 内核本身编译为 WebAssembly，用户程序运行在链接进内核、用 Zig 实现的 aarch64 CPU 模拟器 kwemu 上，kwemu 遍历内核自己的页表，内存管理仍由真实 Linux 代码完成。

**「性能因负载而异，迁移前需自测」** 对打算用它替代 JSLinux 一类 JavaScript 模拟方案的人而言，现有性能证据并不一致：一位 Hacker News 评论者报告，同一测试负载在 JSLinux 上比 Unkernel 慢约 40%，但部分微基准两者相差 4–40 倍。因此，在把浏览器内沙箱或测试环境迁到 Unkernel 之前，应按自身实际负载做基准验证，而不宜把单一跑分当作结论。

**「社区讨论」** 有评论者认为，面向 WASM 的 POSIX 运行时对小型专用 agent 沙箱仍有优势，因为多数场景不需要 Linux 内核的绝大部分功能，并将其形容为“浏览器里的 Docker”；这是基于其自身使用经验的判断。另有评论者补充了 tabcand、sidebyside 和 tabernetes 等相关项目，但讨论中没有提供 Unkernel 的性能或兼容性实测。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/pithings/unkernel">pithings/ unkernel : A real Linux kernel , compiled to WebAssembly .</a></li>
<li><a href="https://linuxontab.com/shell/">Real Linux terminal in your browser (v86 + WebAssembly )</a></li>
<li>A real Linux kernel, compiled to WebAssembly - Hacker News</li>

</ul>
</details>

**标签**: `#WebAssembly`, `#Linux kernel`, `#virtualization`, `#sandboxing`, `#open source`

---

<a id="item-tech-news-3"></a>
### [谷歌 DeepCrossAttention：质量相当，训练最高快 3 倍](https://research.google/blog/supercharging-transformer-residual-connections/) ⭐️ 7.0/10

Google 研究团队提出 DeepCrossAttention（DCA），一种把注意力从序列 token 之间移到 transformer 层与层之间的残差连接方法，目标是让每个 token 动态组合此前各层的表示。研究博客声称，该方法在模型质量相当的情况下可将训练速度提升至多 3 倍；这一速度与质量结论尚未在现有材料中得到独立验证。博客还报告，在已预训练的 transformer 上改装 DCA 并短暂继续训练，LM1B 困惑度下降 0.19，而仅继续标准训练下降 0.02。上述数字来自对博客的转述，应视为作者报告而非复现结果。

hackernews · ComputedCamp995 · 11月27日 23:06 · [社区讨论](https://news.ycombinator.com/item?id=50672565)

**「背景」** 标准 transformer 的注意力在序列中的 token 之间计算，残差连接则把相邻层的表示相加，使信息沿深度方向传递。DCA 改在深度方向做交叉注意力：让当前 token 查询并加权组合所有先前层的嵌入，从而不靠单纯堆叠传统注意力来扩大可用上下文。作者称其核心卖点是避免为利用跨层历史信息付出常规缩放注意力的计算代价。

**「影响」** 若结果可复现，开发者可在已有预训练模型上短暂续训来试验 DCA，而不必从头训练；但博客数字尚未独立验证，且当前只有 LM1B 上的报告，部署前仍需在目标模型和负载上验证吞吐、显存与质量。

**「社区讨论」** 评论中有人批评论文图表不应把不同方法用折线连接，认为这些方法之间没有时间关系，应改用柱状图；也有人对在训练中途改变模型形状和维度表示兴趣，并援引 DCA 在预训练模型续训中的困惑度改善。另有评论猜测跨层注意力可能有助于解决“草莓问题”这类推理缺陷，但这只是推测，未提供验证。

**标签**: `#machine learning`, `#transformers`, `#attention mechanisms`, `#model efficiency`, `#research`

---

<a id="item-tech-news-4"></a>
### [购物网站被曝用 WebRTC 脚本窃取信用卡数据](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

有安全报告称，热门购物网站上出现了利用 WebRTC 的信用卡窃取脚本，用于截取结账时的支付信息。由于没有提供完整技术报告，受影响站点、脚本数量、攻击持续时间和具体数据外传方式都未得到确认。现有讨论更倾向于把问题归因于第三方脚本供应链和检测盲区，而不是 WebRTC 本身的某个新漏洞。

hackernews · scanr · 11月27日 15:40 · [社区讨论](https://news.ycombinator.com/item?id=50668145)

**「背景」** 电商结账页上的盗刷脚本一般通过注入第三方 JavaScript 实现：当用户在支付表单中输入卡号等信息时，脚本会直接读取表单内容并将其外传。此次报道的变种改用 WebRTC 作为外传通道；有评论者指出，网站的内容安全策略（CSP）通常会用 connect-src 限制 fetch、XHR 等请求，却未必覆盖 WebRTC 流量，因此这种通道更不容易被现有监控发现。

**「实际影响」** 对电商站点来说，直接行动是清点并限制第三方脚本，检查 CSP 中 \`connect-src\` 等出站规则，并监控异常网络请求；评论者指出，同样的数据外传并不需要 WebRTC，普通 HTTP 请求也可能完成。

**「社区讨论」** 评论者争论的焦点不是 WebRTC 的独有能力：多人认为普通 Ajax 或 HTTP 请求同样可以外传数据，根因在于站点允许第三方脚本运行且 CSP 配置不足。也有人主张浏览器应只接收数据并由本地决定如何处理，或认为拦截广告和第三方脚本是合理的自保措施。

**标签**: `#web security`, `#payment skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce security`

---

<a id="item-tech-news-5"></a>
### [《False computer-checked proofs》：证明检查器可靠性之争](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

这篇题为《False computer-checked proofs》的批评文章讨论“经计算机检查的证明必然为真”的假设，指出证明检查器的健全性（soundness）缺陷可能让错误证明通过。Hacker News 讨论补充说，Lean 社区已知并持续处理这类缺陷，Metamath 主证明数据库更要求 5 个独立实现同时通过，因此单次错误验证不等于成功误导数学界。评论还举出 DeepMind 研究者构造的证明分别利用 Lean 和当时发布仅一周的 nanoda 版本的不同缺陷通过检查，说明多重验证提高了门槛，但并不能提供绝对保证。

hackernews · \_tk\_ · 11月27日 15:26 · [社区讨论](https://news.ycombinator.com/item?id=50667989)

**「背景」** 证明检查器（proof checker）是一类声称能逐步验证证明的程序；所谓“可靠性漏洞”（soundness bug），是指检查器可能让虚假命题通过验证的缺陷。D. J. Bernstein 在 cr.yp.to 上维护的“False computer-checked proofs”页面，收集了 HOL Light、Mizar、Metamath、Isabelle、Lean、HOL98/HOL4 和 Coq/Rocq 七个系统中此类漏洞的报告，其中不少已被证明可被利用。

**「复核要求」** 对依赖形式化验证的团队来说，实际影响是不能把单一证明检查器的通过当作最终保证：已有案例显示，研究者利用 Lean 和当时一周前版本的 nanoda 各自的不同缺陷，让同一份“证明”通过了两者。因此，在接受关键证明前，应使用多个独立实现的检查器交叉复核，并把非形式化审阅作为补充。

**「社区讨论」** 评论者对实际风险看法不一：twotwotwo 和 dwheeler 认为，单一检查器的健全性缺陷不足以骗过数学界，Metamath 主库的多重独立验证器就是例子；gr\_norm 则称这些检查器几十年来的健全性缺陷“能塞进一条推文”，对绝大多数软件已足够。amelius 追问检查器为何不能从极小规则集自举，andai 还报告了另一种失效模式：证明可能通过，但证明的是对需求的错误理解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cr.yp.to/proofs/falseccp.html">False computer-checked proofs (djb) - cr.yp.to</a></li>
<li><a href="https://daily.dev/posts/false-computer-checked-proofs-k95nubjp0">False computer-checked proofs - daily.dev</a></li>
<li><a href="https://news.lavx.hu/article/d-j-bernstein-catalogs-soundness-bugs-in-seven-proof-checkers">D. J. Bernstein catalogs soundness bugs in seven proof checkers</a></li>
<li>False computer-checked proofs | Hacker News</li>
<li>It is true soundness bugs have been found, and the Lean ... - Hacker News</li>

</ul>
</details>

**标签**: `#formal verification`, `#proof assistants`, `#soundness bugs`, `#software correctness`, `#Lean`

---

<a id="item-tech-news-6"></a>
### [多州总检察长起诉 SpaceX，要求阻止 Grok 生成非法图像](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

多个州的总检察长已起诉 SpaceX，要求法院阻止其旗下 xAI 的 Grok 生成儿童性虐待材料和报复色情等未经同意的私密图像。诉状把 SpaceX 列为 xAI 与 Grok 的母公司，指控 Grok 被用于制作和传播这类内容；这些仍是诉状中的指控，法院尚未裁定。现有信息未包含诉状全文，也未说明法院是否已受理或发布禁令，因此实际限制效果仍待观察。

hackernews · DeepLogin · 11月27日 19:42 · [社区讨论](https://news.ycombinator.com/item?id=50670855)

**「背景」** Grok 是 xAI 提供的生成式 AI 助手，而 xAI 与 X 同属 SpaceX 旗下；这起诉讼把 Grok 生成图像的内容审核与获利问题直接指向其母公司。路透社报道称，弗吉尼亚州和俄勒冈州总检察长指控 SpaceX 从 Grok 的相关功能中获利。

**「双向法律风险」** 这起诉讼把责任直接指向平台：弗吉尼亚州和俄勒冈州总检察长指控 SpaceX 从 Grok 生成儿童性虐待材料和未经同意的私密图像的功能中获利，因此使用该图像功能的用户可能同时面对两头追责。据 Politico 报道，在受害者起诉 xAI 期间，xAI 已转而起诉自己的用户，这意味着生成或传播过此类图像的个人也可能被列入诉讼，而非只有公司承担后果。

**「社区讨论」** 评论中有用户追问 Grok 是默认缺乏限制，还是用户需要刻意绕过限制，并质疑为何不追究制作图像的个人。另一名评论者声称，美国最高法院已将不涉及真实儿童、仅供个人消费的 AI 生成儿童性虐待材料视为受保护言论，但对报复色情是否同样适用存疑；这些说法未在来源中得到独立核实。

<details><summary>参考链接</summary>
<ul>
<li>Attorneys General Jones and Rayfield File Suit Against SpaceX, Parent ...</li>
<li>Virginia, Oregon sue Musk&#x27;s SpaceX over Grok AI&#x27;s creation of ... - Reuters</li>
<li><a href="https://www.politico.com/news/2026/08/28/elon-musk-xai-lawsuits-grok-deepfakes-01053817">Musk’s AI company sues its users as victim lawsuits over Grok ...</a></li>
<li><a href="https://apnews.com/article/grok-lawsuit-elon-musk-ai-abuse-images-452cc64e7169a55868f797982d0e8238">Sexual images from Elon Musk&#x27;s AI chatbot harmed consumers ...</a></li>
<li><a href="https://www.reuters.com/legal/government/virginia-oregon-sue-musks-spacex-over-grok-ais-creation-child-sexual-abuse-2026-11-23/">Virginia, Oregon sue Musk&#x27;s SpaceX over Grok AI&#x27;s creation of ...</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#generative AI`, `#content moderation`, `#AI regulation`, `#xAI/Grok`

---

<a id="item-tech-news-7"></a>
### [SemiAnalysis 深测 AWS Trainium3 推理性价比与微架构](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 7.0/10

SemiAnalysis 在 11 月 27 日发布的深度分析中，将 AWS Trainium3 纳入其 InferenceX 推理基准，并称在 AgentX 的编码代理会话回放中，Trainium3（PDS + vLLM）在整条 TCO 对 p90 交互性曲线上，除 Nvidia Vera Rubin 外，每美元性能优于其他所有加速器，对 GB300 也能打平甚至胜出。文章称 Trainium3 的微架构以 tile 为一等原语，其 DGE 对应 Nvidia TMA 和 AMD MI455X TDM；SemiAnalysis 的微基准显示，Trainium3 能在较小消息尺寸下达到峰值 HBM 带宽利用率，而 Nvidia GPU 做不到。上述均为 SemiAnalysis 的基准结论，摘要未给出绝对性能数字；AWS 团队参与了架构讲解和实验验证，因此这些结果应视为基准方结论，不能直接当作采购保证。

rss · Semianalysis · 11月27日 15:54

**「背景」** Trainium 是 AWS 自研的 AI 加速器。Nvidia 的数据中心 GPU 源自图形渲染架构，自 2017 年起逐代加装 AI 专用硬件：Volta 引入 Tensor Core，Hopper 加入负责 HBM 与 SRAM 之间分块数据搬运的 TMA，Blackwell 增加用于累加的 Tensor Memory；Trainium 则以 tile 作为一等原语，从底层就面向机器学习负载设计。SemiAnalysis 的 InferenceX 是跨加速器的推理基准与 TCO 对比平台，此前已收录 TPUv7、OpenAI Jalapeño、Nvidia Rubin NVL72 与 AMD 等平台，本次新增 Trainium3。

**「影响」** 计划运行编码代理等推理负载的团队，应把 Trainium3 + vLLM 纳入与 GPU 相同的 TCO 和 p90 延迟口径评估，而不是只比较芯片标价；迁移前仍需用自身模型、软件栈和延迟目标复测，因为上述优势依赖 SemiAnalysis 的 AgentX 回放负载与 TCO 假设。

**标签**: `#AWS Trainium`, `#AI accelerators`, `#inference`, `#microarchitecture`, `#Nvidia`

---

<a id="item-tech-news-8"></a>
### [微软扩展 Windows 内置驱动，打印机 7 月起默认 IPP](https://www.techspot.com/news/114721-microsoft-wants-replace-most-third-party-device-drivers.html) ⭐️ 7.0/10

微软在 Ignite 2026 上确认，正为更多硬件类别开发 Windows 内置类驱动，以减少内核中的第三方代码；这是分阶段的部分替代，并非一次性替换全部第三方驱动。打印机先行：从 7 月起，Windows Ready Print 平台会为新安装的兼容打印机默认选用内置 IPP 驱动。微软产品经理 Mehmet Kucukgoz 表示，SoundWire、SDCA 等音频类驱动将很快成为 Windows 内置组件，I3C 总线、USB 以太网和 MIPI 摄像头类驱动仍在开发中；微软 5 月已推出驱动质量倡议（DQI），鼓励厂商优先采用兼容的内置类驱动。

telegram · zaihuapd · 11月28日 02:09

**「背景」** Windows 的类驱动（class driver）是操作系统为某一类设备提供的通用驱动，硬件厂商可复用系统组件，而不必为每款设备附带专有内核驱动。这类驱动随 Windows 统一维护和分发，因此其覆盖范围直接决定哪些外设可以不再依赖第三方驱动包。

**「对打印机部署与厂商驱动的影响」** 对于支持 IPP 的新打印机，企业及个人用户在全新安装时将默认使用 Windows 内置 IPP 驱动，无需再下载厂商驱动包；微软将该平台的核心描述为把打印流程从传统第三方驱动迁移到基于 IPP 标准的现代打印。不支持 IPP 的旧机型仍需依赖厂商驱动，因此在混合设备环境中负责部署的管理员需要先确认哪些打印机的安装会被内置驱动接管。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techcommunity.microsoft.com/blog/partnernews/introducing-windows-ready-print-and-modernized-driver-selection/4526895">Introducing Windows Ready Print and Modernized Driver ...</a></li>
<li><a href="https://4sysops.com/archives/windows-protected-print-and-ipp-internet-printing-protocol-eliminating-third-party-printer-drivers/">Windows Protected Print and IPP (Internet Printing Protocol ...</a></li>

</ul>
</details>

**标签**: `#Windows`, `#device drivers`, `#Microsoft`, `#OS internals`, `#hardware compatibility`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [央行发布大额存单新规：个人认购起点降至 10 万元](https://www.news.cn/fortune/20261127/70789d77822242cc82216f51a416f872/c.html) ⭐️ 7.0/10

中国人民银行 11 月 27 日公布《大额存单管理办法》，将个人投资人认购起点从 20 万元降至 10 万元、机构投资人从 1000 万元降至 500 万元，自 2027 年 3 月 21 日起施行。同日发布的《人民币存贷款利率管理规定》要求金融机构自主确定存贷款利率，不得通过高息揽储等不正当手段吸收存款，同样于 2027 年 3 月 21 日起施行。

telegram · zaihuapd · 11月27日 11:36

**「背景」** 原有个人 20 万元、机构 1000 万元的认购起点来自 2015 年《大额存单管理暂行办法》，新办法届时将废止该暂行办法及 2016 年第 13 号公告。

**「影响」** 认购起点下调将使更多个人投资者和机构达到大额存单的认购条件，但相关规则要到 2027 年才生效。

**标签**: `#PBOC`, `#large-denomination CDs`, `#banking regulation`, `#deposit rates`, `#China retail savings`

---