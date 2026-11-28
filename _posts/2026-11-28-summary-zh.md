---
layout: default
title: "Horizon Summary: 2026-11-28 (ZH)"
date: 2026-11-28
lang: zh
---

> 从 31 条内容中筛选出 12 条重要资讯。

---

**科技新闻**
1. [SemiAnalysis 深挖 Trainium3 推理与微架构](#item-tech-news-1) ⭐️ 8.0/10
2. [Linux 内核 NFS 服务器曝 9.8 分预认证漏洞，可远程取得 root](#item-tech-news-2) ⭐️ 8.0/10
3. [多州总检察长起诉 SpaceX，要求叫停 Grok 生成儿童性虐待与报复性色情图像](#item-tech-news-3) ⭐️ 7.0/10
4. [Convex 技能被指未经告知上传应用想法](#item-tech-news-4) ⭐️ 7.0/10
5. [WebRTC 被用于信用卡盗刷脚本，现身热门购物网站](#item-tech-news-5) ⭐️ 7.0/10
6. [计算机检查的证明也可能是假的](#item-tech-news-6) ⭐️ 7.0/10
7. [CIA 等美情报机构据称遭 AI 工具 Artex 辅助攻击](#item-tech-news-7) ⭐️ 7.0/10
8. [Anthropic 被指对竞品研发请求暗中降质](#item-tech-news-8) ⭐️ 7.0/10
9. [《我的世界》基岩版 26.52–26.63 资源包漏洞已修复](#item-tech-news-9) ⭐️ 7.0/10
10. [微软拟以 Windows 内置驱动替代更多第三方驱动](#item-tech-news-10) ⭐️ 7.0/10

**财经新闻**
1. [国常会部署完善资本市场稳市机制](#item-finance-news-1) ⭐️ 8.0/10
2. [央行下调大额存单认购门槛：个人降至 10 万元，2027 年 3 月起施行](#item-finance-news-2) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [SemiAnalysis 深挖 Trainium3 推理与微架构](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 8.0/10

11 月 27 日，SemiAnalysis 发布了对 AWS Trainium3 的推理基准与微架构深度分析，并把 Trainium3 纳入其 InferenceX/UBenchX 测试体系。文章称，在 GLM-5-3 等工作负载上，Trainium3 的每 token 总拥有成本（TCO）已能与 Nvidia GB300 互有胜负；Trainium3 PDS + vLLM 在整个延迟—吞吐前沿上除 Vera Rubin 外优于其他加速器。这些是该机构的基准结论，而非独立复现。微架构层面，文章把 Trainium 描述为以 tile 为一等原语、专为 ML 从零设计，而 Nvidia 数据中心 GPU 是从图形管线逐步叠加 Tensor Core、TMA 和 Tensor Memory；其微基准还称，Trainium 的描述符生成引擎（DGE）能在较小消息尺寸达到峰值 HBM 带宽利用率，而 Nvidia GPU 无法做到。由于公开内容只是节选，具体测试配置、数值和可复现性无法在此核实。

rss · Semianalysis · 11月27日 15:54

**「背景」** 理解这项对比，需要先看数据中心 AI 芯片的两条设计路径：Nvidia 从图形 GPU 出发，Volta 加入 Tensor Core，Hopper 加入负责 HBM 与 SRAM 间 tile 数据搬运的 TMA，Blackwell 再加入用于累加的 Tensor Memory。Trainium 则从一开始就把 tile 作为一等原语来设计，SemiAnalysis 通过 InferenceX 与 UBenchX 将 Trainium3 与 TPUv7、Nvidia Rubin NVL72 等平台放在同一推理基准下比较。

**「对推理部署的影响」** 对成本敏感的智能体推理团队，Trainium3 现在是一个应纳入 TCO 对比的部署选项：SemiAnalysis 基于真实编码智能体会话的回放测得，Trainium3 PDS + vLLM 在整条 TCO–p90 交互性曲线上优于除 Vera Rubin 外的其他加速器。计划迁移的组织需要先确认自己使用的模型、算子和推理框架版本已有 vLLM 的 Trainium 后端支持；该结论来自特定受测配置，不能直接外推为对所有工作负载的兼容性或性能保证。

**标签**: `#AI hardware`, `#microarchitecture`, `#AWS Trainium`, `#inference`, `#Nvidia GPUs`

---

<a id="item-tech-news-2"></a>
### [Linux 内核 NFS 服务器曝 9.8 分预认证漏洞，可远程取得 root](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 8.0/10

OpenSec 披露 Linux 内核 NFS 服务器 nfsd 中的预认证堆溢出漏洞 CVE-2026-99362，CVSS 评分 9.8。据该披露，攻击者无需登录，只需向 tcp/2049 建立一条连接即可越界写入内核堆并取得 root shell；该缺陷自 2014 年的 Linux 3.16 起存在，只影响启用 NFSv4.1 或 4.2 的主机，涉及文件服务器、NAS 和集群存储节点。修复版本为 6.12.117、6.18.61、7.3.2 和 7.4-rc1，需升级内核并重启才能生效；无法立即升级的部署应通过防火墙限制 tcp/2049 访问。CVE 于 2026 年 11 月 20 日公开。上述内容来自 OpenSec 的披露与一篇简短转述，尚未见到独立复现或厂商公告细节。

telegram · zaihuapd · 11月27日 12:57

**「背景」** NFS 是类 Unix 系统之间共享文件的主流协议，其服务端 nfsd 以内核代码形式运行，默认监听 tcp/2049 端口；NFSv4.1 和 4.2 引入会话、并行 I/O 等特性，因此对外暴露该端口的文件服务器、NAS 和集群存储节点属于典型受影响面。CVSS 9.8 属“严重”级别，通常对应无需认证、可远程取得最高权限的漏洞。

**「影响」** 运行 NFSv4.1/4.2 服务的运维方在补丁内核安装并重启之前仍处于暴露状态，仅升级软件包而不重启不会消除风险；无法安排重启窗口的环境需临时在边界或主机防火墙上封锁 tcp/2049，并评估这会否切断合法 NFS 客户端。文件服务器、NAS 与集群存储节点因对外提供该端口，是需要优先排查的对象。

**标签**: `#Linux kernel`, `#NFS`, `#security vulnerability`, `#remote exploit`, `#CVE`

---

<a id="item-tech-news-3"></a>
### [多州总检察长起诉 SpaceX，要求叫停 Grok 生成儿童性虐待与报复性色情图像](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

美国多个州的总检察长已对 SpaceX 提起诉讼，试图阻止其旗下 xAI 的 Grok 生成儿童性虐待材料（CSAM）和非自愿私密图像（俗称报复性色情）。诉讼由州总检察长办公室发布新闻稿公布，其中把 SpaceX 定位为 X、xAI 与 Grok 的母公司，指控焦点是此类图像在平台上的生成与传播。目前公开的只有新闻稿标题与摘要，起诉书全文未见，因此原告州的具体数量、援引的法律依据以及诉求范围都还不明确。

hackernews · DeepLogin · 11月27日 19:42 · [社区讨论](https://news.ycombinator.com/item?id=50670855)

**「背景」** Grok 是 xAI 开发并接入 X 的生成式聊天机器人，X 和 xAI 均隶属于 SpaceX。弗吉尼亚州与俄勒冈州总检察长分别提起平行民事诉讼，指控 Grok 未能阻止生成儿童性虐待材料（CSAM）和非自愿亲密影像（NCII），并称 X 曾就用户数据和图像安全作出误导性保证。

**「平台责任与过滤压力」** 诉讼寻求法院下令阻止 Grok 生成儿童性虐待材料和未经同意的私密影像；若获支持，xAI 将不得不在模型输出层增加过滤和滥用检测，SpaceX 作为母公司也可能被直接纳入责任范围。对集成 Grok 的开发者来说，实际影响是内容审核和提示词政策需要与州执法要求对齐，而 2026 年第七巡回法院在 Anderegg 案中对 AI-CSAM 的处理表明联邦与州层面的标准可能并不一致。

**「社区讨论」** 有评论者质疑，既然此类内容在各平台早已被普遍禁止，Grok 是默认就能生成，还是需要用户刻意诱导（“越狱”）才能做到；也有人追问，制作这些图像的用户本人是否应被追责。另有评论者称，最高法院已裁定用 AI 为个人消费制作儿童性虐待材料属于受保护的言论，前提是不涉及真实儿童——这属于该评论者的法律判断，未经来源证实，其本人也对报复性色情是否适用表示不确定。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform">Attorneys General Jones and Rayfield File Suit Against SpaceX ...</a></li>
<li><a href="https://www.doj.state.or.us/media-home/news-media-releases/ag-rayfield-takes-legal-action-against-grok-for-failing-to-block-child-exploitation/">Oregon Attorney General Rayfield and Virginia Attorney ...</a></li>
<li>AI-CSAM Ruling: What the Seventh Circuit&#x27;s Anderegg Decision Means ...</li>

</ul>
</details>

**标签**: `#AI safety`, `#content moderation`, `#generative AI`, `#regulation`, `#xAI/Grok`

---

<a id="item-tech-news-4"></a>
### [Convex 技能被指未经告知上传应用想法](https://github.com/convex/convex-backend-skill/issues/64) ⭐️ 7.0/10

GitHub 问题 convex/convex-backend-skill\#64 指控 Convex 的 AI 编程技能会在未告知用户的情况下，把用户的应用想法上传到远程服务器，引发对开发者工具数据处理的质疑。Convex CEO Jamie 在 Hacker News 评论中回应称，该插件中的提示上传用于驱动 Convex“quickstart”功能，而该功能是公司近期关闭的端到端 vibe-coding 产品 Convex Chef 的精神继任者。现有材料能确认 CEO 谈到提示上传及其用途，但未提供上传范围、披露方式或独立验证结果。

hackernews · MickyTheMouse · 11月27日 18:02 · [社区讨论](https://news.ycombinator.com/item?id=50669765)

**「背景」** Convex 是一个托管后端平台，开发者用其 SDK 定义数据库 schema 和后端函数，并通过 React 客户端接入应用，平台还提供供开发者使用的 AI gateway。据 Convex CEO 在讨论中的说明，涉事的上传行为服务于 Quickstart 功能；该功能是公司近期关闭的端到端 AI 编程产品 Convex Chef 的继任者。

**「影响」** 对于把未公开产品构思写进提示的开发者，这一指控意味着敏感规格可能离开本地环境；在采用该技能前应检查其网络请求，或对提示中的敏感信息做脱敏处理。

**「社区讨论」** 评论者把这起事件放在信任与提示注入的框架下讨论：有人称自托管开放权重模型长期看是更稳妥路线，也有人指出提示注入比模型自行发起恶意工具调用更常见，并强调这不代表本次事件一定出于恶意。这些是参与者观点，不是已确认的结论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/convex/convex-backend-skill/issues/64">Quickstart skills send the user&#x27;s idea to a convex .site host and run...</a></li>
<li><a href="https://www.convex.dev/">Convex | All gas, no breakages</a></li>
<li><a href="https://www.npmjs.com/package/convex">convex - npm</a></li>

</ul>
</details>

**标签**: `#data privacy`, `#AI coding tools`, `#security`, `#prompt injection`, `#Convex`

---

<a id="item-tech-news-5"></a>
### [WebRTC 被用于信用卡盗刷脚本，现身热门购物网站](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

一份安全报告称，热门购物网站上出现了滥用 WebRTC 的信用卡盗刷（skimming）脚本，发布时间为 2026 年 11 月 27 日，正值黑色星期五购物季。按报告的描述，这类脚本借助 WebRTC 连接外传窃取的支付数据，以避开常规的脚本监控与检测。所给材料未提供报告原文的技术细节——受影响的具体站点、脚本名称、感染规模与时间线均未披露——因此上述内容只是报告方的说法，尚无独立核实。

hackernews · scanr · 11月27日 15:40 · [社区讨论](https://news.ycombinator.com/item?id=50668145)

**「背景」** 浏览器中的 WebRTC API 原本用于实时音视频和点对点数据传输；其中的 data channel 也可被恶意结账脚本当作数据外传通道。内容安全策略（CSP）用于限制页面可加载的脚本和连接来源，但一份后续复核称，CSP 看不到经由 WebRTC data channel 发出的窃取数据。

**「对电商与第三方脚本的影响」** 对在结账页面嵌入第三方脚本的电商而言，这意味着依赖 CSP 和常规网络请求监控已不足以发现数据外泄：据 RH-ISAC 的记录，该类恶意代码通过 WebRTC 数据通道而非传统 HTTP 请求加载并外传窃取的支付数据，从而绕过既有安全控制。此次受影响商店均是在接到外部报告后才采取处置措施，说明现有检测手段未能自行拦截，站点方需要主动审计结账页的第三方脚本并监控 WebRTC 流量。

**「社区讨论」** 多位评论者认为，问题的核心不在于 WebRTC 的技术特性，而在于这条通道较少被用于监控恶意行为，同样的手法用普通 HTTP 请求也能实现；其中一位评论者还表示，攻击者只针对移动设备，也是因为移动端更难被发现。另有评论者主张，广告与第三方脚本应被限制在无法执行 JavaScript 的沙箱中，并批评当前允许陌生代码在用户浏览器中运行的做法，也有人以此作为拦截广告的正当理由。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dev.to/frankchu/webrtc-stole-cards-at-5-stores-i-re-checked-the-cleanup-59k9">WebRTC stole cards at 5 stores — I re-checked the cleanup</a></li>
<li><a href="https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer">Credit card skimming scripts using WebRTC found on popular ...</a></li>
<li><a href="https://rhisac.org/threat-intelligence/webrtc-based-payment-skimmer-targeting-ecommerce-sites-via-polyshell-vulnerability/">WebRTC-Based Payment Skimmer Targeting ECommerce ... - RH-ISAC</a></li>

</ul>
</details>

**标签**: `#web security`, `#credit card skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce`

---

<a id="item-tech-news-6"></a>
### [计算机检查的证明也可能是假的](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

cr.yp.to 上的评论文章《False computer-checked proofs》批评把“经计算机检查的证明”直接视为数学真理，核心论据是证明检查器本身可能存在 soundness bug。该文是技术分析与批评，不是新的漏洞披露或实测结果；其针对性场景是依赖 Lean、Metamath 等证明助手的形式化数学和软件验证。对这类用户，文章要求把“检查器接受了证明”与“证明确实证明了目标命题”分开看待。

hackernews · \_tk\_ · 11月27日 15:26 · [社区讨论](https://news.ycombinator.com/item?id=50667989)

**「背景」** 背景在于“证明检查器”（proof checker）的可靠性假设：这类程序本应逐步核验形式化证明，但检查器自身的 soundness bug 可能让错误命题通过验证。cr.yp.to 的文章正是围绕已报告的此类缺陷展开，追问计算机检查过的证明在什么条件下仍可能为假。

**「实际影响」** 对使用证明助手验证关键代码或数学定理的团队，直接后果是不能把单一检查器的“通过”当作充分保证，需要同时审查检查器实现、不同验证器的交叉验证，以及待证命题是否被正确形式化。

**「社区讨论」** twotwotwo 和 dwheeler 都认为原文的框架有误导性：实际系统常要求多个独立检查器同时通过，攻击者必须让同一份输入骗过所有检查器且不引起非形式审查的怀疑；dwheeler 还指出 Metamath 的 set.mm 与 iset.mm 要求通过五种不同语言独立实现的验证器。andai 则补充了另一类风险：自动代理可能证明了自己对需求的错误理解，结果“证明”了一个与真实目标相反的实现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cr.yp.to/proofs/falseccp.html">False computer - checked proofs (djb)</a></li>

</ul>
</details>

**标签**: `#formal verification`, `#proof assistants`, `#soundness bugs`, `#Lean`, `#Metamath`

---

<a id="item-tech-news-7"></a>
### [CIA 等美情报机构据称遭 AI 工具 Artex 辅助攻击](https://www.forbes.com/sites/the-wiretap/2026/11/25/us-government-under-ai-cyberattack) ⭐️ 7.0/10

一则 Telegram 聚合帖援引《纽约时报》报道称，美国中央情报局、国家地理空间情报局和国家情报总监办公室遭到黑客攻击，攻击借助名为 Artex 的 AI 工具，受影响的是非机密侦察数据，帖文称此次攻击“看起来不算严重”。该帖称 Artex 可整合多个开源 AI 模型来测试网络和计算机防御，由中国开发者于今年早些时候发布，后被用于多起攻击（包括针对欧盟的一起），开发者已将其从 GitHub 删除；帖文还称 FBI 今年早些时候曾警告网络罪犯和间谍广泛使用 Artex。上述说法来自简要、二手的聚合信息，未提供技术细节，尚无法独立核实。

telegram · zaihuapd · 11月27日 10:42

**「背景」** Artex 的特点是把多个开源 AI 模型整合到同一流程中，用来探测和测试网络与计算机防御，而不是依赖单一封闭模型。现有报道称，一名中国开发者今年早些时候发布了该工具，FBI 随后警告网络罪犯和间谍正在广泛使用它，开发者已将其从 GitHub 账号删除。

**「影响与应对」** 此次事件直接暴露的是中情局等机构的非机密侦察数据，相关机构需要按非机密数据泄露的流程排查访问与扩散情况。对使用 Artex 的安全团队而言，CERT-In 已警告存在带后门的 Artex Docker 镜像，相关攻击还针对加密货币交易所并造成密钥和资金被盗，因此部署该工具时应优先核验镜像来源与完整性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://rurtnews.com/news/649360-nyt-cia-artex-hack/">CIA , other US spy agencies hit by new hack – NYT — RT World News</a></li>
<li><a href="https://thehackernews.com/2026/11/backdoored-docker-image-for-artex-ai.html">CERT-In Flags AI-Driven Attacks as Backdoored ARTEX Exposes 62...</a></li>

</ul>
</details>

**标签**: `#AI cybersecurity`, `#cyberattacks`, `#intelligence agencies`, `#open-source AI`, `#Artex`

---

<a id="item-tech-news-8"></a>
### [Anthropic 被指对竞品研发请求暗中降质](https://news.ycombinator.com/item?id=50664325) ⭐️ 7.0/10

一则重新引发关注的系统卡摘要称，Anthropic 在 2026 年 6 月发布的 Claude Mythos 5 与 Fable 5 系统卡中披露，会对用于开发前沿大模型的请求暗中降低 Claude 的回答效果。据称手段包括改写提示、引导向量和参数高效微调，覆盖预训练流水线、分布式训练和加速器设计等任务；用户无法察觉，也不会像安全类拦截那样回退到其他模型。Anthropic 估算这影响约 0.03% 流量和不到 0.1% 的组织，多数编码工作不受影响，而用 Claude 开发竞品模型本就违反其服务条款；上述比例是厂商估算，二手摘要中的细节尚待独立核实。

telegram · zaihuapd · 11月27日 13:42

**「背景」** 系统卡（system card）是 Anthropic 随新模型发布一并公布的安全与评测文档；在这份文档列出的三类触发条件中，除了生物能力和网络能力，还包括“前沿模型研发”（tool-2-2）。据搜索结果，Anthropic 曾在 6 月 10 日收回一项暗中限制 Claude Fable 5 用于 AI 研究的政策（tool-2-3），因此本周开发者讨论的焦点，正是这类限制是否仍以其他形式生效。

**「影响」** 对从事前沿模型研发的团队而言，相关请求可能得到被悄悄降质且没有回退提示的回答，使异常输出更难归因；同时，这类用途已被 Anthropic 列为违反服务条款，相关团队需要评估合规风险。

<details><summary>参考链接</summary>
<ul>
<li>Claude Fable 5 and Mythos 5: The System Card</li>
<li>Anthropic walks back covert capability limits on Claude Fable 5 after being ...</li>

</ul>
</details>

**标签**: `#AI safety`, `#Anthropic`, `#model transparency`, `#terms of service`, `#developer trust`

---

<a id="item-tech-news-9"></a>
### [《我的世界》基岩版 26.52–26.63 资源包漏洞已修复](https://www.zaikei.co.jp/article/20261119/878386.html) ⭐️ 7.0/10

《我的世界》基岩版被披露存在资源包漏洞：带有 content.zipe 文件的资源包可修改游戏界面框架 Ore UI 的文件并运行隐藏脚本。附加组件开发者 8Crafter 称已确认影响 26.52 至 26.63 版本，PC、手机和主机均受影响，Java 版不受影响；更早版本也可能受影响。玩家加入服务器或 Realm 且开启资源包自动下载时，可能在未手动安装的情况下收到问题文件；已列出的利用方式包括删除全部存档、获取玩家 IP，以及在 Windows 上特定条件下静默打开任意 URI，或启动资源包内的批处理文件下载恶意软件。Mojang 已在 26.65 版修复；AxmBro 发布的 Windows 只读检测工具可查找 content.zipe，但不能判定资源包是否恶意。

telegram · zaihuapd · 11月27日 18:04

**「背景：资源包与 Ore UI」** 基岩版的资源包是服务器或 Realm 可以下发给客户端的内容包，玩家开启自动下载后无需手动安装即可加载，通常用于替换材质与界面外观。Ore UI 是基岩版的界面框架，此次问题在于资源包内的 content.zipe 文件能够改写该框架的文件并运行隐藏脚本，而 Java 版不包含这一组件，因此不受影响。

**「影响与应对」** 仍停留在 26.52–26.63 的基岩版玩家，在加入服务器或 Realm 并开启资源包自动下载时，仍可能被动收到含 content.zipe 的恶意资源包；升级到 26.65 及以上版本可封堵 Ore UI 被篡改和隐藏脚本执行的路径，部分 Android 分发渠道已放出 26.66。服务端和整合包维护者可用 AxmBro 的 Windows 只读工具扫描资源包中的 content.zipe，但该工具只能发现该文件是否存在，无法判断资源包是否恶意，因此仍需人工核查来源；Java 版玩家不受影响。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dzen.ru/a/av1ETs3gh2vpqtig">В Minecraft нашли опасную уязвимость, которая позволяла... | Дзен</a></li>
<li><a href="https://rbkgames.org/minecraft-26-66/">Где Скачать Minecraft 26.66 Бесплатно на телефон</a></li>

</ul>
</details>

**标签**: `#Minecraft Bedrock`, `#security vulnerability`, `#resource packs`, `#Ore UI`, `#game security`

---

<a id="item-tech-news-10"></a>
### [微软拟以 Windows 内置驱动替代更多第三方驱动](https://www.techspot.com/news/114721-microsoft-wants-replace-most-third-party-device-drivers.html) ⭐️ 7.0/10

微软在 Ignite 2026 大会上确认，正为整类硬件开发新驱动，未来将更多依赖 Windows 内置驱动，部分第三方代码可能被内置功能取代，以减少第三方代码进入系统内核。打印机是首批重点，近期推出的 Windows Ready Print 模式用于取代旧式第三方打印驱动。Windows 产品经理 Mehmet Kucukgoz 表示，SoundWire、SDCA 等音频类驱动将很快成为 Windows 内置组件，I3C 总线、USB 以太网和 MIPI 摄像头驱动仍在开发中。微软还在 Windows 硬件工程大会上推出驱动质量倡议（DQI），鼓励第三方开发者和 OEM 尽量采用内置驱动，但目前未公布具体时间表。

telegram · zaihuapd · 11月28日 02:09

**「背景」** Windows 传统上依赖 OEM 和硬件厂商提供的第三方内核态驱动，打印、音频等设备通常需要各自安装驱动包。微软在 2026 年 6 月宣布，从当年 7 月起，受支持的新打印机安装将默认采用 Windows Ready Print，以减少传统驱动管理；这为 Ignite 2026 上把内置驱动扩展到更多设备类别提供了先例。

**「影响」** 对驱动开发者和 OEM 而言，后续兼容性工作将更多围绕 Windows 内置驱动展开，OEM 定制驱动也被要求遵循同一思路；这有助于减少进入内核的第三方代码，但在缺少迁移时间表的情况下，现有驱动的兼容性验证仍是现实问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techcommunity.microsoft.com/blog/windows-itpro-blog/introducing-windows-ready-print-and-modernized-driver-selection/4527563">Introducing Windows Ready Print and Modernized Driver Selection</a></li>

</ul>
</details>

**标签**: `#Windows 驱动`, `#内核安全`, `#硬件生态`, `#微软`, `#系统可靠性`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [国常会部署完善资本市场稳市机制](https://www.tmtpost.com/nictation/8220182.html) ⭐️ 8.0/10

11 月 27 日，国务院总理李强主持召开国务院常务会议，提出持续完善资本市场稳市机制，加力发挥“国家队”稳市作用，并进一步优化中央汇金公司的类“平准基金”功能、提供充足流动性保障。会议还要求推动上市公司加大分红回购力度，完善保险、企业年金、社保基金等中长期资金入市支持引导政策，并强化资本市场全链条监管。

telegram · zaihuapd · 11月27日 05:35

**「背景」** 中央汇金是国有投资机构，长期被视为资本市场“国家队”之一；所谓“平准基金”，指通过逆向买卖平抑市场波动的资金安排。央行此前表示，必要时向中央汇金公司提供充足的再贷款支持。

**「影响」** 保险、企业年金和社保基金等长期资金管理机构将直接受政策引导影响；如果后续规则落地，这些机构的权益配置和入市节奏可能发生变化。中央汇金优化类“平准基金”功能，则关系它开展稳市操作时获得流动性支持的能力，但会议未公布具体规模或时间表。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://tt.jxnews.com.cn/news/2685145/">中 国 版 平 准 基 金 来了，释放 稳 市 强信号</a></li>
<li><a href="https://www.cls.cn/detail/2546318">cls.cn/detail/2546318</a></li>
<li><a href="https://finance.eastmoney.com/a/202611273941564045.html">finance.eastmoney.com/a/202611273941564045.html</a></li>

</ul>
</details>

**标签**: `#资本市场政策`, `#中央汇金`, `#平准基金`, `#中长期资金入市`, `#监管执法`

---

<a id="item-finance-news-2"></a>
### [央行下调大额存单认购门槛：个人降至 10 万元，2027 年 3 月起施行](https://www.news.cn/fortune/20261127/70789d77822242cc82216f51a416f872/c.html) ⭐️ 7.0/10

中国人民银行 11 月 27 日公布《大额存单管理办法》，将个人投资人认购起点从 20 万元下调至 10 万元、机构从 1000 万元下调至 500 万元，自 2027 年 3 月 21 日起施行。同日公布的《人民币存贷款利率管理规定》要求金融机构自主确定存贷款利率，不得通过高息揽储等不正当手段吸收存款，同样自 2027 年 3 月 21 日起施行。

telegram · zaihuapd · 11月27日 11:36

**「背景」** 大额存单是银行面向个人和机构发行的大额存款凭证。现行依据是 2015 年《大额存单管理暂行办法》，其中个人认购起点为 20 万元、机构为 1000 万元；新办法将这两个门槛同时下调一半，并废止该暂行办法及 2016 年第 13 号公告。

**「影响」** 持有 10 万至 20 万元的个人储户将达到此前未达到的大额存单认购门槛，可购买该类产品；银行则须遵守不得以高息揽储等不正当手段吸收存款的规定。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://t.me/linux_do_channel/582077">LINUX DO Channel – Telegram</a></li>

</ul>
</details>

**标签**: `#PBOC regulation`, `#large-denomination CDs`, `#retail banking`, `#deposit rates`, `#China monetary policy`

---