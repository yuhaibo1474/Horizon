---
layout: default
title: "Horizon Summary: 2026-11-25 (ZH)"
date: 2026-11-25
lang: zh
---

> 从 27 条内容中筛选出 10 条重要资讯。

---

**科技新闻**
1. [OpenAI 预印本声称矩阵乘法指数为 9/4](#item-tech-news-1) ⭐️ 8.0/10
2. [vCenter 曝 9.8 分免鉴权漏洞，Broadcom 修补 23 个漏洞](#item-tech-news-2) ⭐️ 8.0/10
3. [OpenAI 称 GPT-6 能编写代码设计 minibinder](#item-tech-news-3) ⭐️ 7.0/10
4. [Ternary Bonsai 2.5 27B 三元量化模型发布](#item-tech-news-4) ⭐️ 7.0/10
5. [Check Point 安全管理服务器遭活跃入侵](#item-tech-news-5) ⭐️ 7.0/10
6. [GTA 6 泄露版据称经社区重编译在 Windows 运行](#item-tech-news-6) ⭐️ 7.0/10
7. [Simon Willison 总结 LLM 与编码智能体的三个拐点](#item-tech-news-7) ⭐️ 7.0/10

**财经新闻**
1. [黄仁勋重返英伟达，美中 AI 人才竞争受关注](#item-finance-news-1) ⭐️ 8.0/10
2. [小米 2026 年三季度经调整净利同比下降 56.8%](#item-finance-news-2) ⭐️ 7.0/10
3. [SpaceX 放弃 7.38 亿美元联邦宽带补贴，改为免费提供星链设备](#item-finance-news-3) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [OpenAI 预印本声称矩阵乘法指数为 9/4](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) ⭐️ 8.0/10

一份发布在 OpenAI math GitHub 仓库、标注日期为 2026 年 11 月 24 日的预印本声称矩阵乘法指数为 Θ\(n^2.25\)，即 9/4。该文尚未经同行评审，证明与来源细节未公开；若成立，这将给出匹配的上下界，影响矩阵乘法算法和复杂度理论研究者。当前应将其视为待核实的主张，而非已确认的定理。

hackernews · E-Reverance · 11月25日 01:19 · [社区讨论](https://news.ycombinator.com/item?id=50637220)

**「背景：矩阵乘法指数 ω 的长期开放问题」** 矩阵乘法指数 ω 指使两个 n×n 矩阵能在 O\(n^ω\) 时间内相乘的最小指数；自 Strassen 于 1969 年给出快于 n³ 的算法以来，其精确值一直是复杂性理论的核心开放问题，上界长期徘徊在 2.37 左右，而下界仅为 2。据 letsdatascience 与 AI Weekly 报道，OpenAI 于 2026 年 11 月 24 日在其 openai/math 仓库发布这篇预印本，声称 ω 在任意域上恰为 9/4，Cryptobriefing 将其描述为 1979 年以来幅度最大的一次界变动。评论者 orlp 与 brandonb 则指出，2.25 这一上界此前已由一项尚不实用的近期算法给出，因此该预印本的新意在于给出匹配的下界 Ω\(n^2.25\)。

**「对算法研究的直接影响」** 若该预印本给出的下界成立，则矩阵乘法指数 ω 不可能低于 9/4，研究者长期追求的 ω=2 目标随之被排除，后续工作只能转向常数因子优化、矩形矩阵乘法等现实场景，而非继续压缩渐进指数。评论者同时指出，已知达到 O\(n^2.25\) 的算法距离实用仍很远，因此这一结果目前不会改变 BLAS、深度学习框架等实际库的实现或性能。上述结论均依赖尚未经过同行评审、且未披露来源模型的预印本得到验证。

**「社区讨论」** 评论主要澄清结果边界：orlp 认为标题应写成 Θ\(n^2.25\) 而非 O\(n^2.25\)，brandonb 指出该文证明 Ω\(n^2.25\) 下界、O\(n^2.25\) 上界此前已知；zone411 则称它属于 OpenAI 四篇论文解决的 8 个 Top 500 数学问题之一，并称精确指数 9/4 覆盖每个域。另有评论质疑其来自未公开模型且配方不披露，认为这更像公关展示而非可复现研究。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cryptobriefing.com/openai-matrix-multiplication-exponent-9-4/">OpenAI preprint claims the matrix multiplication exponent is ...</a></li>
<li><a href="https://aiweekly.co/alerts/openai-claims-matrix-multiplication-exponent-is-exactly-94">OpenAI claims matrix multiplication exponent is exactly 9/4</a></li>
<li><a href="https://letsdatascience.com/news/openai-preprint-claims-matrix-multiplication-exponent-is-exa-7997d3b1">OpenAI preprint claims matrix multiplication exponent is ...</a></li>

</ul>
</details>

**标签**: `#matrix multiplication`, `#algorithms`, `#complexity theory`, `#OpenAI`, `#AI for math`

---

<a id="item-tech-news-2"></a>
### [vCenter 曝 9.8 分免鉴权漏洞，Broadcom 修补 23 个漏洞](https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html) ⭐️ 8.0/10

Broadcom 已为 VMware 产品线发布 23 个漏洞的补丁，核心是 vCenter 目录服务（vmdir）的鉴权绕过漏洞 CVE-2026-123903；该漏洞评分 9.8，报道称只要能访问 vCenter 即可绕过认证进入系统。该漏洞在补丁发布前几天已被零日利用。来源未列出受影响版本、利用细节或临时缓解措施，实际暴露范围仍需结合环境确认。

telegram · zaihuapd · 11月24日 14:50

**「背景」** vCenter 是集中管理 ESXi 主机和虚拟机的控制面，vmdir 负责其目录服务。免鉴权绕过意味着攻击者不需要有效凭据，网络可达性本身就可能成为进入控制面的条件。

**「影响」** 对运维和安全团队而言，应优先清查可从非受信网络访问的 vCenter 实例并应用补丁；由于来源未给出受影响版本和缓解措施，无法据此判断具体版本的兼容性或替代防护方案。

**标签**: `#vCenter`, `#VMware`, `#vulnerability`, `#zero-day`, `#security`

---

<a id="item-tech-news-3"></a>
### [OpenAI 称 GPT-6 能编写代码设计 minibinder](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) ⭐️ 7.0/10

OpenAI 报告称，GPT-6 模型（评论中引述的具体版本为 GPT-6.2）在获得五个靶蛋白的三维结构并标注预期结合位点后，能编写代码生成潜在 minibinder 的三维设计，且这一步未使用专门的蛋白质 AI 模型。但要把这些设计变成可在实验室测试的蛋白质，仍需用 SolubleMPNN 等专门模型生成氨基酸序列，并由其他蛋白质模型筛选预测可折叠、能在目标位点结合的候选。因此，现有材料支持的是模型用代码驱动设计流程的能力，尚不足以证明它已独立完成端到端的蛋白质设计。

hackernews · acossta · 11月24日 21:02 · [社区讨论](https://news.ycombinator.com/item?id=50634658)

**「背景」** Minibinder 是小型工程蛋白，设计目标是折叠成指定结构并贴附到目标蛋白的特定位点。此类工作通常要把结构生成、氨基酸序列设计和候选筛选拆给专门模型完成；OpenAI 的预印本则声称 GPT-6 仅靠推理和通用编程工具就能生成设计，但同期报道指出 SolubleMPNN 等专用模型仍用于提供序列和筛选候选。

**「实际影响」** 对蛋白设计团队来说，GPT-6 目前更接近工作流中的“粘合层”，还不能当作端到端替代方案：按 OpenAI 的说法，它只产出三维骨架设计，氨基酸序列仍需由 SolubleMPNN 生成，候选筛选也依赖其他专用蛋白模型；因此实际使用时应保留这些专用工具，并自行核对序列能否折叠成设计结构。外部报道提到，其实验结合命中率约为 10.9%，并且评论者指出证据偏重计算、缺少实验室对照；短期内不宜据此放弃 RFdiffusion 等既有流程。

**「社区讨论」** Hacker News 评论对“超越专门模型”的框架表示保留：plaidfuji 认为 GPT 更像连接各专门模型的“胶水层”，现在称其超越专门模型为时过早；fabian2k 则追问 GPT 究竟设计了什么，因为氨基酸序列才决定蛋白质结构。joe-esquibel 还认为，展示的证据偏重计算探索，实验室对照不足。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/">GPT-6 models demonstrate intrinsic protein-design ... - OpenAI</a></li>
<li><a href="https://letsdatascience.com/news/openai-reports-gpt-6-models-can-design-proteins-with-lab-evi-b0ee33c8">OpenAI Reports GPT-6 Models Can Design Proteins With Lab ...</a></li>
<li><a href="https://explainx.ai/blog/openai-gpt-6-intrinsic-protein-design-onava-lab-binding-november-2026">GPT-6 Protein Design: 10.9% Minibinder Hits in Lab Tests ...</a></li>

</ul>
</details>

**标签**: `#protein design`, `#GPT-6`, `#AI for science`, `#specialized models`, `#OpenAI`

---

<a id="item-tech-news-4"></a>
### [Ternary Bonsai 2.5 27B 三元量化模型发布](https://prismml.com/news/bonsai-2-5-27b) ⭐️ 7.0/10

Ternary Bonsai 2.5 27B 以三元量化本地模型的形式发布，社区讨论集中在它能否在消费级设备上承担长上下文和代理式编程任务。一位用户在 Mac Mini M5 Pro（24GB 内存、512GB SSD）上以 Q2 GGUF 运行，报告生成速度约 22–25 tok/s、首 token 约 2.12 秒，并能较轻松地把 128k 上下文放入内存。另有评论称其在 SWE-bench Verified 上的得分与 Opus 4.6 相当，但该评论者本人对此表示不确定；所给材料中未见独立验证。

hackernews · b0m · 11月24日 20:08 · [社区讨论](https://news.ycombinator.com/item?id=50633922)

**「背景」** 三元量化把权重量化到三种取值，目标是降低内存占用和内存带宽压力，使 27B 级模型更可能在本地设备上运行。评论者还把 Bonsai2.5 与 Bonsai2 放在自建长程任务测试中对比：两者都通过 5/8，Bonsai2 用了 358 步、107 分钟，Bonsai2.5 用了 296 步、76 分钟，速度不变但完成时间缩短。

**「影响」** 对想在本地跑代理式编程的用户，128k 上下文和 22–25 tok/s 的组合让批量、长程任务比交互式对话更现实；但这一速度仍意味着长输出需要等待，基准优势也应先用自己的任务和对照模型复测后再采用。

**「社区讨论」** 评论区的核心分歧是基准可信度：有人称其 SWE-bench Verified 表现接近前沿模型，但怀疑其中存在针对基准优化、基准本身变化或小模型约半年滞后的成分；另有人希望看到与 Qwen3.8 的 Q1/Q2 量化版或 1B–10B 级强模型的直接对比。实际体验方面，有用户报告 Mac 上 128k 上下文可用，且 Bonsai2.5 比 Bonsai2 完成任务更快。

**标签**: `#local LLMs`, `#quantization`, `#ternary models`, `#model benchmarks`, `#agentic coding`

---

<a id="item-tech-news-5"></a>
### [Check Point 安全管理服务器遭活跃入侵](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) ⭐️ 7.0/10

GreyNoise 报告称，Check Point 安全管理服务器正遭到一场活跃的入侵活动，受影响的是这类服务器的管理员和运营团队。评论中引述的片段描述了一条攻击链：攻击者反复请求 HFS 的 loginSrp1 登录端点，收集 JavaScript Math.random\(\) 的输出以恢复 Node.js V8 PRNG 的内部状态，进而取得 HFS 会话 Cookie 的签名密钥并伪造管理员会话 Cookie。现有材料没有给出受影响版本、补丁状态或已确认的初始访问方式；CVE-2026-16232 只是评论中提出的可能入口。

hackernews · louiereederson · 11月24日 16:32 · [社区讨论](https://news.ycombinator.com/item?id=50630594)

**「漏洞背景」** 这一事件利用的入口是 Check Point 管理服务器上的 CVE-2026-16232。Check Point 公告称，远程利用需要攻击者能够通过互联网访问管理服务器 IP，并且未限制受信任客户端；NVD 将该漏洞描述为 SmartConsole 登录流程中的认证绕过，未认证的远程攻击者可取得一个具有完全管理员权限的登录令牌。GreyNoise 表示，已确认的攻击活动发生在 2026 年 10 月 17 日至 11 月 2 日，至少影响 22 个组织。

**「影响」** 对于仍将 Check Point Security Management Server 或多域管理服务器暴露在公网的组织，GreyNoise 称攻击者使用的 exploit.py 疑似改编自 Metasploit 模块，并借此向受害服务器发送命令。Check Point 已确认少数客户遭到实际攻击、相关漏洞 CVSS 为 9.8，管理员应优先限制管理接口的公网访问，并检查是否存在伪造的管理员会话。

**「社区讨论」** 评论对根因和暴露面存在分歧：20after4 认为应直接修复 Math.random，而不是要求大量应用正确使用它；omh 则追问初始访问方式，指出多家机构同时受害暗示 CVE-2026-16232，但不确定这些管理服务器是否都暴露在互联网上。另有评论推测，LLM 会降低更多网络犯罪者发动此类攻击的门槛；这属于观点，并非已证实事实。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://support.checkpoint.com/results/sk/sk185169">sk185169 - CVE-2026-16232 - Authentication bypass with ...</a></li>
<li><a href="https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign">An Active Intrusion Campaign Against Check Point Security ...</a></li>
<li><a href="https://nvd.nist.gov/vuln/detail/cve-2026-16232">NVD-CVE-2026-16232</a></li>
<li><a href="https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign">An Active Intrusion Campaign Against Check Point Security ...</a></li>
<li><a href="https://support.checkpoint.com/results/sk/sk1000171/">sk1000171 - CVE - 2026 -93616: Directory Traversal and File upload...</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#Check Point`, `#PRNG state recovery`, `#session-cookie forgery`, `#intrusion campaign`

---

<a id="item-tech-news-6"></a>
### [GTA 6 泄露版据称经社区重编译在 Windows 运行](https://twitter.com/raul_bs3/status/2125213756238291075) ⭐️ 7.0/10

在 Hacker News 流传的一段视频声称，社区重编译项目已让泄露的 Xbox 版《GTA 6》在 Windows 上运行，讨论中提到的项目包括 xcl 与 Victory/Leonida。评论者 Tiberium 称，现代 Xbox 主机与 Windows PC 很接近，该二进制没有特殊的 DRM 或混淆，因此这类项目主要采用类似 Wine 的兼容层思路，难点集中在兼容性与图形；但这些说法来自讨论和二手描述，所附链接只是短视频，尚无独立技术细节可核验。同一讨论串还链接到 2026 年 11 月关于 Cyberleek 发布 Xbox 版可执行文件、以及 Leonida 项目被 GitHub 下架的帖子，显示事件同时涉及泄露与平台下架争议。

hackernews · andrem · 11月24日 13:19 · [社区讨论](https://news.ycombinator.com/item?id=50627783)

**「背景」** 在这段视频之前，名为 Cyberleek 的泄露者已把 GTA 6 的 Xbox 版本放到网上，先流出资源、后流出可执行文件；相关报道称该构建约 209GB。由于现代 Xbox 主机与 Windows PC 架构接近，社区项目 XCL（面向 Windows 的通用 Xbox Series 兼容层）以及 Leonida/Victory 正尝试用类似 Wine 的重编译/兼容层方案直接运行这份泄露构建，而不是等待 Rockstar 的官方 PC 移植。

**「实际后果」** 对想上手尝试的人来说，直接后果是代码已经拿不到：据 Tom&\#x27;s Hardware、Eurogamer 和 The Verge 报道，发行方 Take-Two 以 DMCA 通知下架了 Project Leonida，其 Discord 与 GitHub 服务器被关闭，主导开发者的账号被封禁两年。这意味着后续基于同一份泄露 Xbox 二进制、走 Wine 式重编译路线的分支，一旦公开托管就要面对同样的下架风险，只能转向私下分发或更小范围的协作。

**「社区讨论」** Tiberium 的技术解释认为 Xbox 版与 Windows 的接近程度让运行游戏代码本身不难，真正的障碍是兼容层和图形；pipes 则质疑为何必须依赖泄露的 Xbox 构建，并担心厂商未来会把关键组件放到云端以阻止反编译和移植。ivraatiems 认为这不会像一些人担心的那样重创游戏生产，理由是《GTA 6》已是极大规模、极预算且预期收益巨大的项目，并把这波行动视为对平台锁定的一次常规反弹。

<details><summary>参考链接</summary>
<ul>
<li>Cyberleek has released an Xbox build of GTA 6 (UPDATE: now with the executable) Microsoft - Rockstar | Page 22 | ResetEra</li>
<li>GTA 6 PC Port Status (24 Hours After EXE Drop) : r/FitGirlRepack - Reddit</li>
<li>The developer behind a Switch 2 Zelda: Ocarina of Time remake PC port has canceled their ambitious GTA 6 project</li>
<li><a href="https://www.tomshardware.com/video-games/pc-gaming/rockstar-nukes-15-year-olds-gta-6-recompilation-project-discord-and-github-servers-taken-down-project-leonida-had-almost-180-000-discord-members-host-account-banned-for-two-years">Rockstar nukes 15-year-old’s GTA 6 recompilation project , Discord...</a></li>
<li><a href="https://www.eurogamer.net/grand-theft-auto-6-project-leonida-discord-github-vanish">Unofficial GTA 6 PC port effort suffers setback as... | Eurogamer.net</a></li>
<li><a href="https://www.theverge.com/news/1041690/grand-theft-auto-6-pc-recompilation-project-leonida-takedown-take-two">GTA VI PC recompilation project shut down by Take -Two | The Verge</a></li>

</ul>
</details>

**标签**: `#reverse engineering`, `#game recompilation`, `#compatibility layers`, `#DRM`, `#open source legal risk`

---

<a id="item-tech-news-7"></a>
### [Simon Willison 总结 LLM 与编码智能体的三个拐点](https://simonwillison.net/2026/Nov/24/llm-inflection-points/) ⭐️ 7.0/10

这是 Simon Willison 基于其在 AI Engineer Code Summit 主题演讲的回顾性分析，并非新模型发布，他以个人使用经验梳理过去十二个月 LLM 与编码智能体的三个拐点。第一个是 2025 年 11 月 24 日发布的 Claude Opus 4.5，同期还有 OpenAI 的 GPT-5.1 Instant、GPT-5.1 Thinking、GPT-5.1-Codex 与 GPT-5.1-Codex-Max；他认为这些模型让 Claude Code 和 Codex 从“需要频繁纠正”变为日常编码任务默认给出正确结果（Anthropic 关于测试者反馈的说法属厂商表述，Willison 称其事后成立）。第二个是 2026 年 6 月的 Claude Fable 5：它是被限制安全能力的 Mythos，能自行搭建 pyobjc 截图工具和本地日志服务器来按目标强推问题；上线三天后即被美国出口管制实际禁用，直到 7 月 1 日恢复，他由此提出“Fable 级模型”这一基准，并把 Opus 5.5、GPT-6 Astra 和可能包括的 Gemini 4 Neon 列入其中。第三个是 2026 年 9 至 10 月的 3D 建模与游戏开发能力：9 月 22 日发布的 Opus 5.5 在 12 小时自动试玩与重新平衡后，把一款即时战略游戏从“无聊”改到“好玩”，但原文摘录在此处截断，关于 Fable 5.2 是否构成下一个拐点的论证无法核实。

rss · Simon Willison · 11月24日 23:02

**「背景」** 这里的“拐点”不是指单次基准测试提升，而是指模型或编程代理在日常使用中从“需要反复纠正”变为“默认结果基本可用”的能力跃迁。Willison 的回顾来自他在 AI Engineer Code Summit 的主题演讲，并以 Claude Code 等工具的实际使用经历为线索：Claude Code 于 2025 年 2 月随 Claude 3.7 Sonnet 推出，到 2025 年 11 月 Claude Opus 4.5 发布时已积累约九个月的使用基础。

**「影响」** 对做游戏或 3D 工具的开发者来说，作者的经历说明可靠性提升不只来自模型本身：他给 Claude Fable 5 接上工具后，模型自行搭起 pyobjc-framework-Quartz 截图机制和带 CORS 的本地日志服务器来定位 Safari 显示故障；Opus 5.5 则在“把这个游戏做得有趣得多”的指令下，花 12 小时试玩并重新平衡了一套即时战略游戏。可操作的结论是把工程投入放在工具接入与自我验证回路的设计上，而不只是追新模型；同时要注意访问条件可能突变——Fable 5 被限制不得用于安全类工作，且 6 月曾因出口管制下线至 7 月 1 日，依赖单一模型的流水线需要备好替代方案。

**标签**: `#LLM coding agents`, `#AI engineering`, `#model capabilities`, `#developer tools`, `#retrospective analysis`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [黄仁勋重返英伟达，美中 AI 人才竞争受关注](https://www.cnbc.com/2026/11/25/jensen-huang-nvidia-ai-talent-race.html) ⭐️ 8.0/10

据 CNBC 报道，英伟达首席执行官黄仁勋在 11 月 12 日因婚外情报道辞职，并于 11 月 23 日重返公司；报道称，涉事女性被美国情报部门认为可能与中国情报机构有关联。卡内基国际和平基金会研究显示，按全球 AI 人才占比计，中国在三年内已超过美国。

rss · CNBC Finance · 11月25日 01:13

**「背景」** 此前，黄仁勋于 11 月 12 日因有关其与一名被美国情报部门认为与中国情报机构有关联的女性有婚外情的报道而辞任，随后在特朗普直接向董事会施压后于 11 月 23 日复职。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reuters.com/technology/nvidia-reinstates-jensen-huang-ceo-2026-11-23/">Huang returns as Nvidia CEO after Trump intervention in ...</a></li>
<li><a href="https://www.theguardian.com/us-news/2026/nov/22/jensen-huang-nvidia-john-kennedy">Jensen Huang ’s reported affair was ‘most expensive... | The Guardian</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#US-China tech competition`, `#AI talent`, `#semiconductors`, `#executive leadership`

---

<a id="item-finance-news-2"></a>
### [小米 2026 年三季度经调整净利同比下降 56.8%](https://ir.mi.com/static-files/3d372aaa-8ff8-4e33-ba01-68c8d7975a0b) ⭐️ 7.0/10

小米集团 2026 年第三季度财报显示，经调整净利润为 48.84 亿元，同比下降 56.8%，但略高于市场预期的 47.46 亿元；总营收 1072.4 亿元，同比下降 5.2%，汽车交付 100,975 辆。

telegram · zaihuapd · 11月24日 10:09

**「背景」** “经调整净利润”是剔除股权激励、投资公允价值变动等非经营项目后的利润口径，常用于与市场预期比较；小米收入仍以“手机×AIoT”为主，汽车及 AI 等创新业务是近年新增板块，手机元器件成本和汽车研发投入都会影响整体盈利。

**标签**: `#小米集团`, `#季度财报`, `#经调整净利润`, `#汽车交付`, `#智能手机`

---

<a id="item-finance-news-3"></a>
### [SpaceX 放弃 7.38 亿美元联邦宽带补贴，改为免费提供星链设备](https://x.com/SawyerMerritt/status/2125314062997467640) ⭐️ 7.0/10

据社交媒体转述，SpaceX 已同意放弃 7.38 亿美元的美国联邦宽带补贴，改为在 NTIA 的 BEAD 计划下签署「零支出协议」，联邦拨付金额为 0 美元，并向符合条件的家庭免费提供星链终端。条款要求其提供最低 100 Mbps 下载、20 Mbps 上传的服务、低价月费套餐，并承诺服务 10 年，同时豁免大部分财务审计和行政报告义务，但仍须接受网络性能测试；该消息尚未获官方确认。

telegram · zaihuapd · 11月25日 02:17

**「背景」** BEAD 是美国国家电信与信息管理局（NTIA）管理的联邦宽带补贴计划；SpaceX 原本获得约 7.38 亿美元补贴，但选择放弃，NTIA 为此设计了一份取消财务拨款、保留性能测试和最低服务要求的合同模板。

**「影响」** 若协议按报道落地，符合条件的美国用户可免付终端费、以低价月费获得下行至少 100 Mbps 的卫星宽带，SpaceX 则以 10 年服务承诺换取大部分财务审计和采购报告义务的豁免。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.benton.org/headlines/spacex-declines-bead-awards">SpaceX Declines BEAD Awards | Benton Institute for Broadband ...</a></li>
<li><a href="https://businessdaily.am/en/psrc-spacex-starlink-satellite-services/">Armenia&#x27;s PSRC prepares the ground for Starlink ... - businessdaily.am</a></li>

</ul>
</details>

**标签**: `#SpaceX`, `#Starlink`, `#BEAD`, `#broadband subsidy`, `#US telecom policy`

---