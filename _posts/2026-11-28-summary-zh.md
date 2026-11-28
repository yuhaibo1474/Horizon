---
layout: default
title: "Horizon Summary: 2026-11-28 (ZH)"
date: 2026-11-28
lang: zh
---

> 从 74 条内容中筛选出 14 条重要资讯。

---

**科技新闻**
1. [Google Research 的 DeepCrossAttention 宣称最高提速 3 倍](#item-tech-news-1) ⭐️ 8.0/10
2. [OpenSec 披露 Linux nfsd 预认证堆溢出漏洞 CVE-2026-99362](#item-tech-news-2) ⭐️ 8.0/10
3. [《我的世界》基岩版资源包漏洞影响 26.52–26.63，26.65 已修复](#item-tech-news-3) ⭐️ 8.0/10
4. [Unkernel：将真实 Linux 内核编译为 WebAssembly](#item-tech-news-4) ⭐️ 7.0/10
5. [购物网站被曝出现基于 WebRTC 的信用卡盗刷脚本](#item-tech-news-5) ⭐️ 7.0/10
6. [多州总检察长起诉 SpaceX，要求阻止 Grok 生成儿童性虐待与报复性私密影像](#item-tech-news-6) ⭐️ 7.0/10
7. [虚假计算机验证证明与检查器缺陷](#item-tech-news-7) ⭐️ 7.0/10
8. [SemiAnalysis 用 GDPx 评测新模型，最高分仅 12%](#item-tech-news-8) ⭐️ 7.0/10
9. [FT：Nvidia 暂停向东南亚四国发运服务器](#item-tech-news-9) ⭐️ 7.0/10
10. [微软扩大 Windows 内置驱动替代范围](#item-tech-news-10) ⭐️ 7.0/10
11. [Karpathy 用 Claude Opus 5.5 构建美国数据文明地图](#item-tech-news-11) ⭐️ 7.0/10

**科技博客**
1. [谁有权判定内容由 AI 生成](#item-tech-blog-1) ⭐️ 5.0/10

**财经新闻**
1. [德银：半导体出口额首次超过石油和天然气](#item-finance-news-1) ⭐️ 9.0/10
2. [央行发布大额存单新规：个人认购起点降至 10 万元](#item-finance-news-2) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [Google Research 的 DeepCrossAttention 宣称最高提速 3 倍](https://research.google/blog/supercharging-transformer-residual-connections/) ⭐️ 8.0/10

Google Research 在博客中提出 DeepCrossAttention（DCA），这是一种改造 transformer 残差连接和注意力的方法。Google 声称，在模型质量相当的情况下，DCA 最高可快 3 倍；把 DCA 加装到已预训练的 transformer 后，它还能带来小幅困惑度改善。该方案面向希望提升 transformer 模型效率、又不想完全重训模型的研究者和工程团队。相关速度和困惑度数字来自 Google 的博客自述，目前尚无独立复现或大规模部署结果。

hackernews · ComputedCamp995 · 11月27日 23:06 · [社区讨论](https://news.ycombinator.com/item?id=50672565)

**「背景」** Transformer 的标准残差连接会把各层输出顺序相加，在深层网络中可能稀释关键信息；DeepCrossAttention（DCA）则改用带可学习权重的跨层路由来增强残差学习。Google Research 的这篇博客正是围绕这一改造展开，对比了标准残差网络与 DCA 的结构差异。

**「实际影响」** 对已有预训练模型的团队而言，DCA 的主要吸引力在于可改造现有模型并继续训练，而不必从头训练；但试点时仍需预算架构修改和继续训练成本，并在自身负载上验证其“最高 3 倍”加速是否成立。

**「社区讨论」** 评论区的技术讨论集中在两点。有评论者引用博客数据称，将 DCA 加装到预训练 transformer 后短暂继续训练，在 LM1B 上把困惑度降低 0.19，而标准继续训练仅降低 0.02；该评论者认为，中途改变模型形状和维度很有前景。也有人提出，按层深做交叉注意力可能有助于解决“草莓问题”；另有评论者批评博客用折线图连接不同方法缺乏时间关系，应改用柱状图。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://research.google/blog/supercharging-transformer-residual-connections/">Supercharging transformer residual connections</a></li>
<li><a href="https://arxiv.org/html/2502.06785">DeepCrossAttention : Supercharging Transformer Residual ...</a></li>
<li>DeepCrossAttention: Supercharging Transformer Residual Connections</li>

</ul>
</details>

**标签**: `#DeepCrossAttention`, `#Transformer Architecture`, `#Model Efficiency`, `#Google Research`, `#Machine Learning`

---

<a id="item-tech-news-2"></a>
### [OpenSec 披露 Linux nfsd 预认证堆溢出漏洞 CVE-2026-99362](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 8.0/10

OpenSec 报告称，Linux 内核 NFS 服务器 nfsd 存在预认证堆溢出漏洞 CVE-2026-99362，CVSS 评分 9.8；攻击者无需登录，向 tcp/2049 发送一条连接即可越界写入内核堆并获取 root shell。据该报告，漏洞自 2014 年的 Linux 3.16 起存在，影响启用 NFSv4.1 或 4.2 的主机，包括文件服务器、NAS 和集群存储节点。修复已在 6.12.117、6.18.61、7.3.2 和 7.4-rc1 发布，需升级内核并重启；无法立即升级者可限制 tcp/2049 访问。CVE 于 2026 年 11 月 20 日公开，但该消息目前仅来自 Telegram 转发，尚待独立核实。

telegram · zaihuapd · 11月27日 12:57

**「背景」** nfsd 是 Linux 内核中的 NFS 服务端组件，通过 tcp/2049 对外提供文件共享；主机只要启用 NFSv4.1 或 4.2，并且该端口可达，就会进入相关的 nfsd 代码路径。该代码缺陷可追溯到 2014 年的 Linux 3.16，因此长期未升级内核的系统也需要按修复版本进行核对。

**「影响与处置」** 对启用了 NFSv4.1/4.2 的文件服务器、NAS 和集群存储节点，运维方需要将内核升级到 6.12.117、6.18.61、7.3.2 或 7.4-rc1 并重启，才能消除这个预认证入口；暂时无法升级时，应限制对 tcp/2049 的访问。否则，任何能连接该端口的主机都可以在未登录状态下触发内核堆越界写入。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://opensec.in/blog/nfs2root-cve-2026-99362">NFS 2ROOT ( CVE - 2026 - 99362 ): pre-auth root in Linux nfsd | OpenSec</a></li>
<li><a href="https://www.getpagespeed.com/server-setup/security/nfs2root-cve-2026-99362-centos-7">NFS 2ROOT ( CVE - 2026 - 99362 ) on CentOS 7: Fixed Kernel</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/new-nfs2root-linux-flaw-can-let-attackers-gain-root-privileges/">New NFS 2ROOT Linux flaw can let attackers gain root privileges</a></li>
<li><a href="https://www.getpagespeed.com/server-setup/security/nfs2root-cve-2026-99362-centos-7">NFS 2 ROOT ( CVE - 2026 - 99362 ) on CentOS 7: Fixed Kernel</a></li>

</ul>
</details>

**标签**: `#Linux kernel`, `#NFS`, `#security vulnerability`, `#remote exploit`, `#CVE`

---

<a id="item-tech-news-3"></a>
### [《我的世界》基岩版资源包漏洞影响 26.52–26.63，26.65 已修复](https://www.zaikei.co.jp/article/20261119/878386.html) ⭐️ 8.0/10

《我的世界》基岩版被确认受资源包漏洞影响的范围为 26.52 至 26.63，更早版本也可能受影响：含 content.zipe 的资源包可修改 Ore UI 界面文件并运行隐藏脚本，覆盖 PC、手机和主机，Java 版不受影响。该问题由附加组件开发者 8Crafter 于 11 月 15 日在 Reddit 公开；当玩家加入服务器或 Realm 且开启资源包自动下载时，可能无需手动安装就收到问题文件。8Crafter 列举的利用方式包括删除存档、获取玩家 IP，以及在 Windows 上无提示打开任意 URI 并启动资源包内批处理文件下载恶意软件；Mojang 已在 26.65 版修复，AxmBro 发布的 Windows 只读检测工具可查找 content.zipe，但不能判断资源包是否恶意。

telegram · zaihuapd · 11月27日 18:04

**「背景」** 在《我的世界》基岩版中，资源包用于向客户端提供材质、界面等资源，Ore UI 则是该版本的界面框架；本次问题的关键在于，资源包内的 content.zipe 能写入 Ore UI 文件并执行隐藏脚本。8Crafter 此前开发过 Ore UI Customizer，可自定义 Ore UI 主题并启用调试标签页，这说明附加组件社区此前已有公开的界面定制实践。

**「影响与应对」** 由于加入开启资源包自动下载的服务器或 Realm 时无需手动安装就可能收到恶意资源包，受影响的 26.52 至 26.63 版玩家应尽快升级到已修复的 26.65。在完成更新之前，可先备份存档，再用 AxmBro 发布的 Windows 只读检测工具查找 content.zipe 文件，但该工具只能定位相关文件，无法判断资源包本身是否恶意。

<details><summary>参考链接</summary>
<ul>
<li>Ore UI Customizer - 8Crafter</li>
<li>Minecraft Bedrock Malware Flaw: Update, Scan, Back Up</li>
<li>Minecraft Bedrock 26.65 Fixes Hidden Resource Pack Malware Flaw</li>

</ul>
</details>

**标签**: `#Minecraft Bedrock`, `#security vulnerability`, `#resource packs`, `#malware`, `#patch`

---

<a id="item-tech-news-4"></a>
### [Unkernel：将真实 Linux 内核编译为 WebAssembly](https://unkernel.dev/) ⭐️ 7.0/10

Unkernel 是一个把真实 Linux 内核编译为 WebAssembly 并在浏览器中运行的项目，面向需要在网页环境里使用 Linux 的开发者与学习者。现有材料没有披露内核版本、浏览器兼容范围、性能数据或发布状态，因此其可用范围和成熟度仍不明确。

hackernews · nreece · 11月28日 03:19 · [社区讨论](https://news.ycombinator.com/item?id=50674218)

**「背景」** WebAssembly 是可在浏览器沙箱中执行的字节码格式。Unkernel 将 Linux 7.x 内核本身（包括系统调用、调度器、内存管理、ext4 和 TCP/IP）编译成单个 wasm 模块，并内置真实 MMU；与硬件模拟不同，它运行的是编译后的内核代码，可直接执行未修改的 arm64 Debian 与 Alpine 程序。

**「实际影响」** 如果内核确实在浏览器内本地执行，计算负载就落在学生或开发者自己的机器上，教育平台可能因此省去为每位学生单独准备后端 Linux 实例的开销；有评论者把这一点形容为“近乎零服务器基础设施成本”。不过这只是社区判断，现有材料没有提供性能、内存占用或浏览器兼容性数据，实际部署前仍需自行验证。

**「社区讨论」** 有评论者指出 JSLinux 早在 2011 年就能在浏览器中运行 Linux，并把该项目放在浏览器内运行操作系统的既有脉络中；也有人提到 Gary Bernhardt 2014 年关于 JavaScript 的演讲曾作过类似预判。另一条评论认为，教育平台可借此为每名学生提供独立的浏览器 Linux 环境，并把近乎零服务器基础设施成本视为潜在优势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://unkernel.dev/">unkernel</a></li>
<li><a href="https://github.com/pithings/unkernel">GitHub - pithings/unkernel: A real Linux kernel, compiled to ...</a></li>
<li><a href="https://www.ithub.directory/virtualization-vdi/unkernel">unkernel: Linux kernel compiled to WebAssembly | iThub</a></li>

</ul>
</details>

**标签**: `#WebAssembly`, `#Linux kernel`, `#browser virtualization`, `#systems programming`, `#education`

---

<a id="item-tech-news-5"></a>
### [购物网站被曝出现基于 WebRTC 的信用卡盗刷脚本](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

据 Infohawk 报道，热门购物网站上发现了使用 WebRTC 的信用卡盗刷脚本，发布时间为 2026 年 11 月 27 日，正值黑色星期五购物季。现有材料没有给出受影响站点、脚本数量或独立验证结果，因此这仍是一则媒体报告，而非已确认的广泛事件。对消费者来说，促销期在相关站点输入支付信息存在被窃取的风险；对电商运营者来说，相关讨论集中在其页面嵌入的第三方脚本。

hackernews · scanr · 11月27日 15:40 · [社区讨论](https://news.ycombinator.com/item?id=50668145)

**「背景：第三方脚本与 WebRTC 的监控盲区」** 这类盗卡脚本的常见载体是电商结账页引入的第三方脚本：页面一旦嵌入外部脚本，就等于把结账流程中的卡片数据暴露给脚本来源，这也是评论者认为“只要嵌入第三方脚本就始终存在风险”的原因。不过多位评论者指出，该手法并不依赖 WebRTC 独有的新能力，普通 HTTP 请求同样能完成数据外传；WebRTC 被选中更可能是因为它较少被安全监控覆盖，或者站点内容安全策略（CSP）的 connect-src 未对其加以限制。

**「影响」** 对电商运营者而言，主要风险是结账页面的第三方脚本成为需要优先审计的信任边界：只要其中任一脚本被篡改，用户输入的卡号就可能在页面内被读取并外传。评论者还指出，若 CSP 的 connect-src 未覆盖 WebRTC，这类外联可能不会被现有策略拦截，应纳入检查。

**「社区讨论」** 多位评论者认为，问题不在 WebRTC 本身的新能力，而在于它较少被监控：同样的数据外传可以用普通 HTTP 请求或 AJAX 完成，根因是站点允许第三方脚本在其页面执行。也有评论者由此主张拦截广告或第三方脚本是合理的自我防护，另有人批评 Web 允许陌生代码在本地执行的设计。

**标签**: `#web security`, `#credit card skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce`

---

<a id="item-tech-news-6"></a>
### [多州总检察长起诉 SpaceX，要求阻止 Grok 生成儿童性虐待与报复性私密影像](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

美国多州总检察长已对 SpaceX 提起诉讼，要求阻止其关联的 xAI 模型 Grok 生成儿童性虐待材料和未经同意的私密影像。诉讼以 SpaceX 作为 X、xAI 和 Grok 的母公司为由将其列为被告，核心指控指向 Grok 的图像生成行为。现有材料只确认了起诉和指控方向，未提供诉讼州数、具体诉请、法院安排，也未说明 Grok 的相关安全机制是否失效。

hackernews · DeepLogin · 11月27日 19:42 · [社区讨论](https://news.ycombinator.com/item?id=50670855)

**「背景」** Grok 是 xAI 开发的生成式 AI 工具，并与 X 平台关联；本案的核心争点是，作为 X 与 xAI 母公司的 SpaceX 是否要为 Grok 生成和传播的图像承担平台责任。弗吉尼亚州和俄勒冈州的总检察长分别寻求民事罚款与禁令，而 xAI 在明尼苏达州另一联邦诉讼中表示，它禁止未经同意生成裸体或性化图像，并已对涉嫌绕过其防护措施的用户采取法律行动。

**「诉讼请求带来的直接影响」** 弗吉尼亚州和俄勒冈州分别提起的诉讼寻求民事罚款，并请求法院下达禁令，阻止 Grok 与 X 生成和分发未经同意的性化图像（包括 NCII 与 CSAM）。对 xAI 和 X 而言，这意味着图像生成功能与内容审核、分发流程可能被迫调整；但这些都是诉讼请求，尚未经法院裁定，两州还指控相关公司在 Grok 安全能力上作出不实陈述。

**「社区讨论」** 评论者主要追问两点：Grok 是默认就很宽松，还是用户需要刻意绕过限制；以及责任是否应更多落在制作和传播这些内容的人身上。另有评论者声称美国最高法院已把私人制作 AI 生成的儿童性虐待材料视为受保护言论，并对其是否适用于报复性私密影像表示不确定；这是评论中的法律主张，未获所给材料证实。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform">Attorneys General Jones and Rayfield File Suit Against SpaceX ...</a></li>
<li><a href="https://www.yahoo.com/news/us/articles/virginia-attorney-general-suing-spacex-152347155.html?fr=sycsrp_catchall">Virginia Attorney General suing SpaceX, says AI tool allows ... Virginia, Oregon attorneys general file lawsuits against ... MEDIA CLIPS: Attorney General Jay Jones Holds X Accountable ... SpaceX sued by 2 states over AI deepfake porn, Grok ... - CNBC Virginia, Oregon Sue SpaceX Over Grok Sexual Images, Allege ...</a></li>
<li><a href="https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform">Attorneys General Jones and Rayfield File Suit Against SpaceX ...</a></li>
<li><a href="https://www.techtimes.com/articles/331385/20261123/virginia-oregon-sue-spacex-over-grok-sexual-images-allege-safety-claims-were-false.htm">Virginia, Oregon Sue SpaceX Over Grok Sexual Images, Allege ...</a></li>
<li><a href="https://www.cnbc.com/2026/11/23/oregon-virginia-spacex-grok-deepfake-lawsuits.html">SpaceX sued by 2 states over AI deepfake porn, Grok ... - CNBC</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#content moderation`, `#generative AI`, `#xAI/Grok`, `#litigation`

---

<a id="item-tech-news-7"></a>
### [虚假计算机验证证明与检查器缺陷](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

cr.yp.to 的《False computer-checked proofs》页面与 Hacker News 讨论聚焦一个具体风险：证明检查器的健全性（soundness）缺陷可能让错误证明通过机器检查，讨论中的缓解办法之一是要求同一证明通过多个独立验证器。评论者 twotwotwo 举例称，一名 DeepMind 研究员构造的“证明”分别利用了 Lean 和当时仅发布一周的 nanoda 版本中的不同缺陷，从而同时通过两者。dwheeler 则表示，Metamath 的 set.mm 和 iset.mm 数据库要求证明通过 5 个独立编写、使用 5 种不同语言的验证器，包括 Norm Megill 的 C 版 metamath 以及 Mel O&\#x27;Cat、Mario Carneiro 的 Java 版 mmj2；不过原始 C 版 metamath 验证器也出现过健全性缺陷。

hackernews · \_tk\_ · 11月27日 15:26 · [社区讨论](https://news.ycombinator.com/item?id=50667989)

**「背景」** 形式化证明依赖 proof checker 逐步验证证明；所谓 soundness bug，就是检查器错误地接受了本应被拒绝的证明，从而可能让假命题通过“机器检查”。djb 的页面围绕这类已报告的问题展开，讨论检查器可信边界为何重要。

**「影响」** 对使用 Lean、Metamath 等做高保障验证的团队，不能把单个检查器接受一个证明视为绝对保证；采用多验证器交叉检查会增加对不同实现和语言栈的维护成本，而 Metamath 主数据库已把 5 个独立验证器作为接纳条件。

**「社区讨论」** 讨论的主要分歧在风险权重：twotwotwo 强调，要误导数学界，需要同时骗过多个检查器，并让错误输入在非正式审查中不显眼；gr\_norm 则认为这些检查器已存在多年，所有健全性缺陷加起来“能塞进一条推文”，对 99.9% 的软件已足够。andai 还提醒，即使实现相对于规范被证明正确，也可能只是规范本身被错误理解。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cr.yp.to/proofs/falseccp.html">False computer - checked proofs (djb)</a></li>

</ul>
</details>

**标签**: `#formal verification`, `#proof assistants`, `#software correctness`, `#Lean`, `#Metamath`

---

<a id="item-tech-news-8"></a>
### [SemiAnalysis 用 GDPx 评测新模型，最高分仅 12%](https://newsletter.semianalysis.com/p/evaluating-recent-model-releases) ⭐️ 7.0/10

SemiAnalysis 于 11 月 1 日发布 GDPx 基准，并在近期模型密集发布后公布了基于该基准的排行榜。GDPx 不以 GDP 占比或 O\*NET 分类选取领域，而是覆盖芯片设计、网络安全、生物学、金融、法律、量化交易、递归自我改进、硬件设计、材料科学、对齐和软件工程共 11 个领域，并由 14 家数据合作方制作了 206 道任务。该基准的显著特点是难度高：发布日得分最高的 Opus 5.5 仅得 12%，远低于常见基准首日超过 50% 的水平，SemiAnalysis 因此认为它仍有足够区分度。文章还提到 Anthropic、OpenAI、Google 的 Gemini 4 系列、阿里巴巴和 Moonshot 的新模型，并指出 Fable 5.2 与 GPT-6.2 Astra 的安全分类器会压低总分，改用剔除网络安全、生物学、对齐并启用部分评分的口径后榜单会变化。

rss · Semianalysis · 11月26日 00:05

**「背景：GDPval 与 GDPx 的取样分歧」** SemiAnalysis 于 2026 年 11 月 1 日发布 GDPx 基准，并在文中明确将其与既有综合基准区分开：OpenAI 在 2025 年 9 月公布的 GDPval 覆盖 9 个行业、44 种职业，相关任务合计年收入约 3 万亿美元。GDPx 针对的正是这类按 GDP 占比或 O\*NET 职业分类来选取任务的方法，认为它无法反映前沿模型影响力真正集中的领域，因此改按 AI 影响而非经济规模选取 11 个方向。按作者说法，GDPx 发布当天最高分模型 Opus 5.5 仅得 12%。

**「影响」** 对使用 GDPx 结果做模型选型或跟踪进展的团队而言，直接比较总分会受到安全分类器影响，尤其是在网络安全、生物学和对齐领域；应同时查看原始榜单，以及剔除这些领域并对法律与金融采用部分评分的调整榜单，才能判断模型的实际能力。

<details><summary>参考链接</summary>
<ul>
<li>Measuring the performance of our models on real-world tasks - OpenAI</li>
<li>GDPval: Evaluating AI Model Performance on Real-World ... - arXiv</li>

</ul>
</details>

**标签**: `#AI benchmarks`, `#frontier models`, `#model evaluation`, `#agentic AI`

---

<a id="item-tech-news-9"></a>
### [FT：Nvidia 暂停向东南亚四国发运服务器](https://aihot.news/daily/2026-11-27) ⭐️ 7.0/10

据 FT 报道，Nvidia 已通知 Dell、Supermicro 等制造伙伴，暂停向马来西亚、新加坡、泰国和印度尼西亚发运服务器；触发因素是，美国要求这些国家以及巴西的先进 AI 芯片出口需申请许可。报道提到，中国 AI 实验室此前通过当地云厂商租用 Nvidia 算力绕过直接出口禁令，而云厂商现有 90 天时间证明没有受限用户，却仍缺乏申请指引。报道还称，Nvidia 2025 年经新加坡部门入账 1040 亿美元，同比增长 72%。

rss · AIHOT 日报 · 11月27日 00:00

**「背景」** 美国此前已对输华先进 AI 芯片实施出口管制，中国 AI 实验室转而通过东南亚本地云厂商租用 Nvidia 算力，以绕开直接出口禁令。据 New York Post 和 Forbes 报道，新一轮管制在 Nvidia 停运前约一周生效，将马来西亚、新加坡、泰国、印尼（以及巴西）列入需申请出口许可的范围，这一许可要求直接触发了此次暂停发运。

**「影响」** 对 Dell、Supermicro 等服务器厂商和当地云厂商而言，暂停发运意味着相关 AI 服务器交付可能延后；云厂商还需在 90 天内完成无受限用户证明，但报道称缺少申请指引，短期合规安排存在不确定性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://nypost.com/2026/11/26/business/nvidia-halts-server-shipments-to-4-southeast-asian-countries-report/">Nvidia halts server shipments to 4 Southeast Asian countries: report</a></li>
<li><a href="https://www.forbes.com/sites/siladityaray/2026/11/26/nvidia-reportedly-halts-ai-chip-shipments-to-southeast-asia-as-us-tightens-china-curbs/">Nvidia Halts Server Shipments To 4 Southeast Asian Countries Amid...</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#AI chips`, `#export controls`, `#AI infrastructure`, `#Southeast Asia`

---

<a id="item-tech-news-10"></a>
### [微软扩大 Windows 内置驱动替代范围](https://www.techspot.com/news/114721-microsoft-wants-replace-most-third-party-device-drivers.html) ⭐️ 7.0/10

微软在 Ignite 2026 上确认，正为更多硬件开发 Windows 内置类驱动，以减少内核中的第三方代码。打印机是重点之一：自 7 月起，Windows Ready Print 平台会为新安装的兼容打印机默认选用内置 IPP 驱动。微软产品经理 Mehmet Kucukgoz 表示，SoundWire 和 SDCA 等音频类驱动将很快成为 Windows 内置组件，I3C 总线、USB 以太网和 MIPI 摄像头类驱动则在开发中。微软已于 5 月推出驱动质量倡议（DQI），鼓励厂商优先采用兼容的内置类驱动。

telegram · zaihuapd · 11月28日 02:09

**「背景」** 类驱动（class driver）是 Windows 为一整类设备提供的通用内置驱动，厂商通常只需补充与具体硬件差异相关的部分，因此可以减少进入内核的第三方代码。微软在 2026 年 5 月 14 日于台北 WinHEC 2026 上提出驱动质量倡议（DQI），称其目标是全面提升 Windows 生态中驱动的质量、可靠性与安全性。此次把内置类驱动扩展到打印、音频、I3C 总线、USB 以太网和 MIPI 摄像头，正是在该倡议下推进的具体举措。

**「对硬件厂商的影响」** 对打印机、音频等外设厂商来说，继续依赖自带内核驱动的做法正受到越来越大的限制：从 2026 年 3 月起，Windows 11 的新内核策略不再默认信任证书过期的旧驱动，4 月的安全更新还会默认阻止存在已知漏洞的第三方驱动，并导致依赖 psmounterex.sys 的备份类应用出现挂载失败。厂商若想让设备在新装系统上完整可用，就需要让驱动符合 DQI 要求，或迁移到兼容的内置类驱动；否则从 7 月起，兼容打印机在新安装时会被默认套用内置 IPP 驱动。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blogs.windows.com/windowsexperience/2026/05/14/raising-the-bar-together-introducing-the-driver-quality-initiative-at-winhec-2026/">Raising the bar together. Introducing the Driver Quality Initiative at...</a></li>
<li><a href="https://tech.yahoo.com/computing/articles/microsoft-changing-windows-talks-hardware-130750734.html">Microsoft is changing how Windows talks to hardware to stop system...</a></li>
<li><a href="https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/04/april-2026-windows-security-updates-introduce-protections-to-known-vulnerable-kernel-drivers">April 2026 Windows security updates introduce protections to ...</a></li>
<li><a href="https://www.techpowerup.com/347807/windows-11-will-no-longer-trust-old-drivers-by-default-under-new-kernel-policy">Windows 11 Will No Longer Trust Old Drivers by Default Under ...</a></li>

</ul>
</details>

**标签**: `#Microsoft Windows`, `#device drivers`, `#kernel security`, `#hardware compatibility`, `#IPP`

---

<a id="item-tech-news-11"></a>
### [Karpathy 用 Claude Opus 5.5 构建美国数据文明地图](https://twitter.com/karpathy/status/tweet-2125779541952246039) ⭐️ 7.0/10

Andrej Karpathy 表示，他让 Claude 把美国真实公共数据填入一张《文明》风格的游戏地图；使用 Opus 5.5、Claude Code 桌面应用并在 medium 档开启“ultracode”后，项目经过约 7 小时、生成 4.5 万行代码后可以运行。地图整合了 Census、BEA、BLS、EIA、NOAA、USGS 等 31 个公共数据源，将海拔、土地覆盖、GDP、就业、电厂、矿山、港口、机场、军事基地、公园、大学、货运和灾害等数据统一到 25 公里六边形网格。数据被转成游戏机制，例如金币产出对应 GDP、城市区块对应真实产业专长、市民对应劳动力结构，奇观则按游客数量或研发支出等已公布规则选取；项目还提供 19 种视图、524 个都会区的城市视图，以及可把 3,100 多个县的数据列转成表格和散点图的 Explorer，但 Claude 跳过了少数州和领地。

twitter · Andrej Karpathy · 11月26日 02:31

**「背景」** Claude Code 是 Anthropic 的命令行/桌面端智能体编程工具，能在一次任务中自行下载数据、编写并运行代码；本次项目正是在桌面版中以 Opus 5.5 并开启 ultracode 模式完成。理解这条消息还需知道，《文明》系列的核心抽象是把地理与经济压缩为六边形格子和“产出”数值，因此把真实统计数据映射到这套规则，本质上是一次跨 31 个数据源的地理与统计口径对齐工作。

**「影响」** 对评估代理式编程的开发者来说，这是一个可浏览的演示：Claude 能跨大量公共数据源完成下载、解析、对账并生成可交互的前端，但它属于个人项目而非可复现的基准测试。规划类似数据整合任务时，应把数小时连续代理运行、数万行代码生成和模型用量上限计入，而不能按普通代码补全的成本来估算。

**标签**: `#AI-assisted coding`, `#LLM agents`, `#data engineering`, `#geospatial data`, `#game simulation`

---

## 科技博客

<a id="item-tech-blog-1"></a>
### [谁有权判定内容由 AI 生成](https://seangoedecke.com/who-gets-to-decide-if-something-is-written-by-ai/) ⭐️ 5.0/10

rss · Sean Goedecke · 11月27日 00:00

**「背景」** 围绕写作奖、出版合同和社交媒体帖子的 AI 生成争议不断。作者认为，检测工具是否可靠只是表层问题，真正的冲突在于谁有权把作品挡在奖项、课堂和公共讨论之外。

**「方案」** 他先替反 AI 一方给出最强论证：Pangram 这类工具属于他们本就不信任的科技行业，而过去几十年社会已从社区判断转向工具化流程，因此用另一个 AI 工具来纠偏像是玩笑。作者自己的立场相反：没有检测工具，就只能靠文学奖委员会调查或社区共识来自查；但不使用 AI 的人并不擅长识别 AI 文本，常把明显痕迹当成人类写作，或把冗长礼貌的推文误判为 AI。若真想守住人类艺术与文化空间，他主张使用最强工具；若不信任科技公司互相审查，就应推动开源方案或政府自建检测平台。文末还转述读者对误报的担忧——多数 AI 工具并不可靠，好工具也可能误报；其论证主要基于个人观察，缺少系统性证据。

**「启示」** 作者的结论是，AI 检测争议最终不是“工具准不准”的技术问题，而是“谁来行使把关权”的制度选择；在工具检测与社区自治之间，他宁可选择前者，尽管误报和信任问题仍未解决。

**标签**: `#AI detection`, `#content provenance`, `#community moderation`, `#AI governance`, `#AI writing`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [德银：半导体出口额首次超过石油和天然气](https://www.cnbc.com/2026/11/26/semiconductor-chips-are-the-new-oil-heres-why.html) ⭐️ 9.0/10

据德意志银行对国际贸易中心数据的分析，按四季度滚动总额计算，2026 年第一季度半导体出口额首次超过石油和天然气，约为 1.61 万亿美元，油气约为 1.53 万亿美元。

rss · CNBC Finance · 11月26日 17:52

**「背景」** 过去几十年，石油出口国的贸易顺差常被用于购买美国国债等资产，形成所谓“石油美元”。德意志银行研究人员据此提出“芯片美元”说法，指亚洲芯片出口国与美国科技企业联系更紧，部分芯片出口收入可能回流美国科技股、初创企业和数据中心；这属于前瞻性解读。

**标签**: `#semiconductors`, `#AI infrastructure`, `#global trade`, `#market volatility`, `#Deutsche Bank`

---

<a id="item-finance-news-2"></a>
### [央行发布大额存单新规：个人认购起点降至 10 万元](https://www.news.cn/fortune/20261127/70789d77822242cc82216f51a416f872/c.html) ⭐️ 7.0/10

中国人民银行 11 月 27 日公布《大额存单管理办法》，将个人投资人认购起点定为不低于 10 万元、机构投资人为不低于 500 万元，两项门槛均比 2015 年暂行办法规定的 20 万元和 1000 万元下调一半，新规自 2027 年 3 月 21 日起施行，同时废止 2015 年暂行办法和 2016 年第 13 号公告。同日公布的《人民币存贷款利率管理规定》也自同日起施行，要求金融机构自主确定存贷款利率，不得以高息揽储等不正当手段吸收存款。

telegram · zaihuapd · 11月27日 11:36

**「背景」** 大额存单是银行发行、利率通常高于普通定期存款的可转让存款凭证；2015 年的《大额存单管理暂行办法》将个人和机构认购起点分别定为 20 万元和 1000 万元，新办法把这两个门槛各下调一半。

**「影响」** 原本存款在 10 万至 20 万元之间的个人储户，从 2027 年 3 月 21 日起达到大额存单认购门槛；同日起，银行须自主确定存贷款利率，并不得以高息揽储等不正当手段吸收存款。

**标签**: `#China banking regulation`, `#large-denomination CDs`, `#deposit rates`, `#central bank policy`, `#savers`

---