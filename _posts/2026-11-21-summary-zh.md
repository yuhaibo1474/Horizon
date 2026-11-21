---
layout: default
title: "Horizon Summary: 2026-11-21 (ZH)"
date: 2026-11-21
lang: zh
---

> 从 35 条内容中筛选出 10 条重要资讯。

---

**科技新闻**
1. [Lean 社区出现黎曼假设验证联合声明](#item-tech-news-1) ⭐️ 8.0/10
2. [陶哲轩讨论无外力 NS 奇点与广义黎曼猜想](#item-tech-news-2) ⭐️ 8.0/10
3. [Thinking Machines 发布循环架构开源权重模型 Inkling 2 Mini](#item-tech-news-3) ⭐️ 8.0/10
4. [台积电据报暂停对中国企业 16nm 及以下芯片订单](#item-tech-news-4) ⭐️ 8.0/10
5. [浙大首次在真机上实现 QRAM](#item-tech-news-5) ⭐️ 8.0/10
6. [Levent Alpöge 称与 Claude 发现黎曼猜想证明](#item-tech-news-6) ⭐️ 7.0/10
7. [微软发布 USB4 RDMA 预览：多台 PC 合跑一个大模型](#item-tech-news-7) ⭐️ 7.0/10
8. [OpenRouter 警告 MiniMax 模型提示词或遭第三方读取](#item-tech-news-8) ⭐️ 7.0/10

**科技博客**
1. [输出缓存为何难以奏效](#item-tech-blog-1) ⭐️ 6.0/10

**财经新闻**
1. [沃什避谈利率指引，美联储官员公开分歧加大](#item-finance-news-1) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [Lean 社区出现黎曼假设验证联合声明](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 8.0/10

Lean 社区博客上出现了一则关于黎曼假设 Lean 验证的联合声明，但当前提供的材料没有声明正文。现有信息无法确认该声明是宣布完成验证、界定验证范围，还是提出合作计划，也无法根据它核对参与方、所用 Lean/Mathlib 版本或任何可机器检验的结果。因此，这只能视为有待原文核实的社区公告，不能据此认定黎曼假设已被形式化证明。

hackernews · g-b-r · 11月21日 14:36 · [社区讨论](https://news.ycombinator.com/item?id=50589618)

**「背景」** 黎曼猜想断言黎曼 ζ 函数的所有非平凡零点实部都等于 1/2；要在 Lean 这类证明助手中处理它，需要先把该命题及推理步骤写成可被机器逐条检查的形式代码。Lean 的 Mathlib 是由社区维护的形式化数学库，此前已积累了大量分析、数论与代数内容，博客文章称此次联合声明属于 Mathlib 中的 RiemannHypothesis 部分（tool-2-1）。需要注意的是，把一个命题形式化地写进库中并可被检查，与给出该命题的完整证明并不是同一件事。

**「对形式化使用者意味着什么」** 对使用 Lean/Mathlib 的开发者与形式化数学小组来说，能否采用这一结果取决于联合声明中被形式化语句的确切范围：所提供的材料没有声明正文，因此无法确认对象是经典黎曼猜想还是更强的广义黎曼猜想（GRH），而同期《科学美国人》的报道将该证明描述为范围更广的 GRH。在声明全文及其公理、未完成证明（sorry）依赖公开之前，把该结果当作可直接引用的定理（例如用于素数分布的条件性推论）并不稳妥。

**「社区讨论」** 评论中的主要争议是检查器是否可靠：有评论者称，此前一个伪造的 Collatz 猜想反证曾通过某个“独立”检查器，因此质疑这些检查器的独立性，并称声明列出的四点均不依赖人类专家介入。另有评论者借这一话题讨论形式化数学的宏观影响，但这些属于个人判断，而非已证实结论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://leanprover-community.github.io/blog/posts/riemann-hypothesis/">Lean verification of the Riemann Hypothesis | Lean community blog</a></li>
<li><a href="https://www.scientificamerican.com/article/what-the-riemann-hypothesis-proof-really-means-about-ai-and-the-future/">What the Riemann hypothesis proof really means about AI and ...</a></li>

</ul>
</details>

**标签**: `#formal verification`, `#Lean`, `#Riemann Hypothesis`, `#AI for math`, `#proof assistants`

---

<a id="item-tech-news-2"></a>
### [陶哲轩讨论无外力 NS 奇点与广义黎曼猜想](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 8.0/10

陶哲轩于 2026 年 11 月 20 日发表博客文章，讨论无外力欧拉奇点、无外力纳维-斯托克斯奇点以及广义黎曼猜想；现有材料将这篇帖子与 Lean 形式化验证和 AI 辅助证明开发的讨论联系起来。由于没有提供定理陈述、证明细节或同行评审结论，不能据此确认这些重大猜想已被证明，能确认的只是相关公开讨论已经出现。

hackernews · archon1410 · 11月20日 17:21 · [社区讨论](https://news.ycombinator.com/item?id=50578358)

**「背景」** 三维不可压缩纳维-斯托克斯方程是否存在全局光滑解，是克雷数学研究所设立的千禧年大奖难题之一；若某类初值在有限时间内发生爆破，解失去光滑性，就等于否定了全局正则性。“无外力”（unforced）指方程中不含外部驱动力，是此次构造所针对的简化设定。据 tool-2-2 的报道，纽约大学的 Tristan Buckmaster 与 Anthropic 的 Levent Alpöge 于 2026 年 11 月 20 日公布了借助 AI 得到的无外力三维情形有限时间爆破证明，Tao 表示该证明附有 Lean 形式化。

**「影响」** 对使用 Lean 的数学形式化项目，两个独立内核接受结果只能作为验收的一部分；研究团队仍需核对定理陈述和形式化命题与原始数学问题的对应关系，否则构建通过并不能证明目标结论。

**「社区讨论」** 评论区的核心争论是形式化验证究竟证明了什么：有评论称两个独立内核接受了结果，因而内核实现漏洞的可能性较低；另有评论以“Rust 编译通过不等于业务逻辑正确”作类比，追问在大型 Lean 代码库中如何确认构建通过的证明没有偷换成“1+1=2”之类无关命题。还有读者提出，当前进展多依赖 Langlands 程序等既有抽象，真正困难的是如何创造新的数学抽象。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://letsdatascience.com/news/buckmaster-and-alpoge-post-ai-aided-proof-of-unforced-navier-fcca1e31">Buckmaster and Alpöge post AI-aided proof of unforced Navier ...</a></li>

</ul>
</details>

**标签**: `#formal verification`, `#Lean`, `#Navier-Stokes`, `#Riemann hypothesis`, `#AI-assisted mathematics`

---

<a id="item-tech-news-3"></a>
### [Thinking Machines 发布循环架构开源权重模型 Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Thinking Machines 发布了开放权重的 Inkling 2 Mini，其特点是采用循环（looped）Transformer 架构，而非主流的一次前向结构。据 Hacker News 评论中引述的官方 Reddit 说明，该模型端到端使用 nvfp4 训练，规模主要按本地部署需求确定；讨论中没有给出具体参数量，其基准成绩也尚无独立验证。早期使用者的实测显示，在 Ryzen 395 上通过 llama.cpp Vulkan 解码约为 27 tokens/s，在 32GB M1 Pro 上以 q4 量化运行约为 10 tokens/s。有用户称其编码能力接近 Qwen3.8-27B，但这只是个人对比而非可复现的评测结果。

hackernews · jasondavies · 11月20日 20:12 · [社区讨论](https://news.ycombinator.com/item?id=50581260)

**「背景」** 循环 Transformer 的核心做法是在一次前向计算中重复执行模型的中间层，从而在不增加参数量的情况下提高每个 token 的计算量，目标是以更少 token 完成推理。Inkling 2 Mini 采用这一架构，是一个约 26B 总参数、5.4B 激活参数的混合专家模型，内存占用约 20GB，定位为可在消费级笔记本上运行的开放权重模型。

**「对本地部署者的影响」** 对本地部署者来说，最直接的影响是硬件门槛降低，但工具链仍存在兼容摩擦：Artificial Analysis 测得该模型在 Intelligence Index 上与 Qwen3.8-27B 持平，激活参数却少约 5 倍（26.4B 总参数、3.4B 激活、Apache 2.0），因此消费级显卡和统一内存机器都有机会运行。不过早期社区测试显示，要获得可用速度，仍需应用尚未合并的 llama.cpp PR 和一个小补丁（Ryzen 395 + Vulkan 约 27 tok/s，M1 Pro 32GB q4 约 10 tok/s）；在这些改动被上游合并之前，部署者应为调试留出时间。

**「社区讨论」** HN 用户 hedgehog 报告称，除了若干尚未合并的 llama.cpp PR 外，只需一个很小的补丁就能带来约 30% 的推理提速；dgacmu 的测试结果有好有坏：Python CSV 排序任务完成得不错，但识别硬币类型和年份的提示在运行约 12000 个 token 后仍无结果。lilytweed 认为多数开源模型此后会转向循环架构，并质疑在如此开放的程度下，安全与可解释性意味着什么。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://artificialanalysis.ai/articles/inkling-2-mini">Thinking Machines has released Inkling 2 Mini, an open ...</a></li>
<li><a href="https://www.unite.ai/thinking-machines-lab-releases-inkling-2-mini-for-local-devices/">Thinking Machines Lab Releases Inkling 2 Mini for Local Devices</a></li>
<li><a href="https://huggingface.co/blog/inkling2mini">Welcome Inkling 2 Mini , Cutting-edge Performance for your Local ...</a></li>
<li><a href="https://artificialanalysis.ai/articles/inkling-2-mini">Thinking Machines has released Inkling 2 Mini , an... | Artificial Analysis</a></li>

</ul>
</details>

**标签**: `#open-weight models`, `#looped transformers`, `#local inference`, `#llama.cpp`, `#AI benchmarks`

---

<a id="item-tech-news-4"></a>
### [台积电据报暂停对中国企业 16nm 及以下芯片订单](https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls) ⭐️ 8.0/10

据 AppleInsider 报道，台积电已通知客户暂停接受中国公司 16nm 及以下先进制程订单；除非事先获得美国出口许可或豁免，否则台积电不得向这些客户供货。报道称，相关中国企业因此只能使用 28nm、40nm 等较旧制程，并无法使用 AI 数据中心所需的高带宽内存。此前台积电可自行评估客户设计是否符合豁免条件，现在客户须提前申请；美国获批名单中有苹果、AMD、英伟达，尚无中国公司。台积电表示将遵守新规。

telegram · zaihuapd · 11月21日 02:01

**「背景」** 制程节点的命名数字越小，单位面积可集成的晶体管越多，能效与性能通常也越高；16nm 及以下多用于 CPU、GPU 与 AI 加速器等高性能逻辑芯片，而 28nm、40nm 等成熟制程更多用于电源管理、模拟和嵌入式类芯片。AI 数据中心所需的高带宽内存（HBM）需要与先进逻辑裸片通过先进封装紧耦合，因此对先进制程节点的限制会间接影响整套 AI 硬件方案的可获得性。

**「影响」** 受影响的中国芯片企业若拿不到美国出口许可或豁免，16nm 及以下订单就无法在台积电投产，只能改用 28nm、40nm 等旧制程，依赖先进制程和高带宽内存的 AI 数据中心芯片供应将直接受限。豁免审核流程也由台积电自行评估改为客户须提前申请，合规负担因此转移到下单企业身上。

**标签**: `#semiconductors`, `#export-controls`, `#TSMC`, `#China`, `#AI-hardware`

---

<a id="item-tech-news-5"></a>
### [浙大首次在真机上实现 QRAM](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

浙江大学团队报告，在自主制备的超导量子芯片“天目 2 号”上首次于真机实现量子随机存储器（QRAM），成果已发表于《自然·物理》。该原型能调取 4 位和 8 位数据，准确率分别为 80.9% 和 60.4%，线路深度较未优化方案降低 30% 以上，并首次验证该架构具备局部抗噪特性。团队称下一步将推进 QRAM 的规模化研究，因此这仍是原型演示，而非可直接用于高保真量子算法的通用内存。

telegram · zaihuapd · 11月21日 08:31

**「背景：QRAM 为何难做」** QRAM 是一种让量子计算机以量子叠加方式按地址读取经典数据的量子存储器：它允许在不必遍历全部条目的情况下并行取出多个数据项，被视为数据密集型量子算法取得量子加速的前提之一。但这类电路依赖大量受控纠缠操作，地址位数一增加，线路深度与噪声就会迅速累积，这正是真机演示此前难以推进的原因；《自然·物理》2026 年 3 月发表的桶旅（bucket-brigade）QRAM 方案研究，针对的正是这一可扩展性与噪声的矛盾。

**「对开发者的影响」** 对量子算法开发者而言，这一原型首次提供了在超导硬件上运行 QRAM 的实验参照；但 8 位检索准确率仅 60.4%，短期内它还不能支撑依赖高保真数据调用的算法，扩大位宽时准确率下降是直接待解问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nature.com/articles/s41567-026-03273-9">Quantum random access memory put to the test | Nature Physics</a></li>
<li><a href="https://www.nature.com/articles/s41567-026-03218-2">A bucket-brigade quantum random access memory | Nature Physics</a></li>

</ul>
</details>

**标签**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#research`, `#hardware`

---

<a id="item-tech-news-6"></a>
### [Levent Alpöge 称与 Claude 发现黎曼猜想证明](https://simonwillison.net/2026/Nov/20/levent-alpoge/) ⭐️ 7.0/10

Simon Willison 引用了 Levent Alpöge 的 remark.pdf，后者称自己与 Claude 合作发现了黎曼猜想的证明，并表示该方法可推广到广义黎曼猜想，预计投入更多时间还能覆盖扩展黎曼猜想。Alpöge 还称，他与 Claude 已在无需额外假设的情况下形式化了相关论证。上述说法目前只是其本人陈述；引用内容未给出证明细节，也没有独立验证或第三方确认。

rss · Simon Willison · 11月20日 16:30

**「背景」** 黎曼猜想是数论中最著名的未解问题之一，它断言黎曼ζ函数的所有非平凡零点都落在临界线 Re\(s\)=1/2 上，其真伪直接决定素数分布的大量精细结论。形式化验证（如 Lean）则把证明写成可被机器逐行检验的代码，从而把「相信作者」变成「检查代码」。在这条引文之外，GitHub 上已出现据称由 Levent Alpöge 与 Claude 合作完成的黎曼猜想 Lean 证明镜像（tool-1-2）；另有一段视频声称，MIT 的 Andrew Sutherland 于 2026 年 11 月 20 日当晚给出独立检查结果，称这份约 1700 万行的 Lean 代码可无错编译（tool-1-3）——但编译通过仅说明代码可运行，并不等同于确认它形式化表述的正是黎曼猜想，且该说法仅见于单一视频，未获本条目所引来源的确认。

**「验证仍是关键一步」** 对数学家和用 Claude 做研究的人而言，可操作的下一步是把形式化证明与其声称的命题对齐：只有在 Lean 等证明助手中确认被形式化的陈述确实就是黎曼猜想与广义黎曼猜想，而非等价变形或较弱版本，这份声明才具备可复核的基础。现有材料中只有 Alpöge 的自述，摘要未附证明，也没有独立确认；外部讨论称已有多个 Lean 内核检查过形式化证明，但同时也有说法称尚未获得独立验证，因此读者应把结论视为待核实，而不是已确立的定理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/CocoSgt/riemann-hypothesis-lean">CocoSgt/ riemann - hypothesis -lean: Mirror of Levent Alpöge &#x27;s Lean...</a></li>
<li><a href="https://www.youtube.com/watch?v=d-ANPBNcTd8">Just in: The Riemann Hypothesis Proof Passed an... - YouTube</a></li>
<li>Levent Alpöge claims proof of the Generalized Riemann Hypothesis ...</li>
<li>Mathematician Levent Alpöge claims to solve Riemann Hypothesis with ...</li>

</ul>
</details>

**标签**: `#AI-assisted mathematics`, `#Riemann Hypothesis`, `#Claude`, `#formal verification`, `#research claims`

---

<a id="item-tech-news-7"></a>
### [微软发布 USB4 RDMA 预览：多台 PC 合跑一个大模型](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 7.0/10

微软发布了面向 Windows 的 RDMA over USB4 开发者预览，让多台 PC 通过普通 USB4 连接共享内存和 GPU 算力，运行同一个本地 AI 大模型，无需专用网卡或交换机。示例中三台搭载 AMD Ryzen AI Max+ 395 的 PC 以 4-bit 量化运行 Qwen3-235B-A22B，达到约 18.5 token/s。该功能将通过 Windows Insider 推送，现阶段仍是开发者预览，而非正式版能力。

telegram · zaihuapd · 11月21日 06:13

**「背景」** RDMA（远程直接内存访问）让一台计算机绕过对方 CPU 和常规网络协议栈，直接读写另一台设备的内存，因此长期用于高性能计算集群，但通常依赖 InfiniBand 或 RoCE 专用网卡与交换机。微软这次把该机制改由 USB4 承载，使普通 USB4 线缆连接的 Windows 机器之间也能进行这种直接内存访问，从而把多台 PC 的内存与 GPU 资源当作一个池来运行同一个模型。

**「实际影响」** 对拥有多台 USB4 电脑的开发者来说，这项预览让他们能用现有接口和线缆试验跨机协同运行本地模型，不必先采购专用网卡或交换机。但该能力目前仅通过 Windows Insider 以开发者预览形式提供，示例环境为三台 Ryzen AI Max+ 395 运行 4-bit Qwen3-235B-A22B，暂不适合作为稳定生产部署的依据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://habr.com/ru/articles/1110636/">Microsoft представила решение на базе USB 4 и RDMA для... / Хабр</a></li>
<li><a href="https://gagadget.com/ru/artificial-intelligence/735249-resursyi-neskolkih-pk-dlya-zapuska-tyazhelogo-ii-nauchilas-obedinyat-microsoft-cherez-usb4/">Microsoft реализовала RDMA через USB 4 для ИИ-кластеров</a></li>

</ul>
</details>

**标签**: `#RDMA`, `#USB4`, `#Windows`, `#local AI`, `#distributed inference`

---

<a id="item-tech-news-8"></a>
### [OpenRouter 警告 MiniMax 模型提示词或遭第三方读取](https://news.ycombinator.com/item?id=50585962) ⭐️ 7.0/10

据一封 OpenRouter 邮件通知，用户发往 MiniMax 模型的请求内容可能已被第三方读取：安全研究者在 2026 年 7 至 10 月向 MiniMax 模型发送带测试 URL 的提示词，结果第三方在 40 到 130 小时后访问了这些 URL。OpenRouter 把问题归于 MiniMax 及其转发方 AtlasCloud、Novita、StreamLake，已下架相关端点的「零数据保留」标签，并建议曾通过这些端点提交敏感信息的用户更换 API Key 和密码。上述内容来自 Telegram 转载，OpenRouter 官网目前没有发布公开公告，受影响的具体范围与用户数量尚不明确。

telegram · zaihuapd · 11月21日 06:53

**「背景」** OpenRouter 是模型调用中转层，用户提示词会经模型提供方及其转发服务处理，因此数据保留与访问控制取决于整条链路。此次 OpenRouter 撤下了 MiniMax 及 AtlasCloud、Novita、StreamLake 相关端点的“零数据保留”标签，表明该标签已不再适用于这些端点。

**「对开发者的直接影响」** 依赖这些端点处理敏感数据的开发者应假定提示词内容和随请求发送的凭证可能已外泄，并按 OpenRouter 建议更换 API Key 与密码；此前依据「零数据保留」标签做出的合规或数据最小化判断也需要重新评估。

**标签**: `#AI security`, `#privacy`, `#OpenRouter`, `#MiniMax`, `#API security`

---

## 科技博客

<a id="item-tech-blog-1"></a>
### [输出缓存为何难以奏效](https://seangoedecke.com/why-output-caching-doesnt-work/) ⭐️ 6.0/10

rss · Sean Goedecke · 11月21日 00:00

**「背景」** LLM 推理普遍缓存输入（KV cache），以免每次消息都重算整个对话历史。既然模型输出也会重复引用已有内容，为什么不顺便缓存输出、减少重复生成？作者认为这条路走不通。

**「方案」** 作者先设想通过微调或提示，让模型只输出“src/script.py:12-15”这类引用，再由执行框架展开，从而避免重复代码或证据文档。但这类重复几乎只发生在用户可见的输出里；按作者对自己智能体记录的粗略分类，可见输出仅约占输出 token 的 6%，推理 token 占 50%，工具调用占 44%。安达尔定律因此很快封顶收益：即便乐观地省掉可见输出的三分之二，也只减少全部输出 token 的约 4%。真正的大头是那 94% 不可见 token，减少它们更多取决于模型智能——模型越强，所需推理和工具调用越少，甚至会出现单价贵 5 倍、总 token 少 6 倍而整体更便宜的情况。作者也承认，“前沿模型不会在思维链里频繁自重复”只是中等置信度的判断，6% 来自个人智能体历史，并非可复现测量。

**「启示」** 输出缓存的收益受限于很小的可见输出占比；控制 LLM 成本的关键不是缓存复述，而是提升模型与执行框架效率，减少不可见的推理和工具调用。只比较每 token 单价会误判实际成本。

**标签**: `#LLM inference`, `#caching`, `#token economics`, `#Amdahl&\#x27;s law`, `#AI agents`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [沃什避谈利率指引，美联储官员公开分歧加大](https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html) ⭐️ 7.0/10

美联储主席沃什上任六个月来拒绝提供利率指引，其同事却更频繁公开发声、就加息步伐出现分歧；美国银行分析称，过去两周的“美联储讲话”为 2025 年初以来同类时期最多。市场通过 CME FedWatch 计入 12 月至少加息 25 个基点的概率为 100%，理事沃勒则提出可能加息 50 个基点。

rss · CNBC Finance · 11月20日 21:10

**「背景」** 所谓前瞻指引，即央行提前暗示未来利率路径；沃什认为这会束缚决策。美联储正应对高于 3%的通胀（目标为 2%），10 月会议维持利率不变，克利夫兰联储主席哈马克当时投反对票并主张加息 25 个基点。

**标签**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#FOMC communication`, `#forward guidance`

---