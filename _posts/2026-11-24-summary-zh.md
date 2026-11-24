---
layout: default
title: "Horizon Summary: 2026-11-24 (ZH)"
date: 2026-11-24
lang: zh
---

> 从 39 条内容中筛选出 11 条重要资讯。

---

**科技新闻**
1. [Ladybird 独立浏览器引擎发布首个 alpha 版](#item-tech-news-1) ⭐️ 8.0/10
2. [智谱发布 GLM-5.4：首个循环 Transformer，主打通用编程](#item-tech-news-2) ⭐️ 8.0/10
3. [英伟达董事会恢复黄仁勋 CEO 职务](#item-tech-news-3) ⭐️ 7.0/10
4. [NariQ 发布 Qwen3.8-27B 低比特量化：10 GB 文件称接近 BF16](#item-tech-news-4) ⭐️ 7.0/10
5. [Codex2api 疑遭供应链投毒，v3.1.11 被指含后门](#item-tech-news-5) ⭐️ 7.0/10
6. [Meta AI 负责人称超级智能将至，控制权堪忧](#item-tech-news-6) ⭐️ 7.0/10
7. [Anthropic 称 Claude 发现 VP≠VNP 并公开 Lean 4 证明](#item-tech-news-7) ⭐️ 7.0/10

**科技博客**
1. [vLLM 首日支持 ERNIE 5.5 Flash](#item-tech-blog-1) ⭐️ 6.0/10

**财经新闻**
1. [纽约联储主席威廉姆斯：通胀回到 2%仍需更多行动](#item-finance-news-1) ⭐️ 7.0/10
2. [上海地铁票价 21 年来首次调整，起步价 3 元](#item-finance-news-2) ⭐️ 7.0/10
3. [黄循财称新加坡不会成为规避美国芯片管制的通道](#item-finance-news-3) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [Ladybird 独立浏览器引擎发布首个 alpha 版](https://ladybird.org/posts/alpha/) ⭐️ 8.0/10

Ladybird 发布首个 alpha 版本，macOS 和 Linux 用户现在可以直接下载安装，无需自行编译。该独立浏览器引擎自主实现 HTML 解析、CSS、布局、JavaScript 和 WebAssembly 等核心部分，仅复用 HarfBuzz、Skia、ffmpeg、SQLite 等外部组件。早期试用报告显示多数网站以及 Pyodide、ffmpeg 的 WebAssembly 工具可以运行，但依赖 service worker 的 Datasette Lite 仍会报错；官方也提醒 alpha 阶段会出现崩溃和网站不兼容，并希望安全研究者参与测试。

hackernews · janvdberg · 11月23日 16:13 · [社区讨论](https://news.ycombinator.com/item?id=50614249)

**「项目背景」** 浏览器引擎负责把 HTML、CSS 和 JavaScript 变成可交互页面；Ladybird 的核心代码来自其更早的 SerenityOS 项目，除 HarfBuzz 文本整形、Skia 2D 图形、ffmpeg 视频和 SQLite 外，HTML 解析、CSS、布局、JavaScript 和 WebAssembly 等大多由项目自行实现。2026 年 2 月，项目还宣布借助 Claude Code 和 Codex，在两周内把 LibJS 的部分代码从 C++ 移植成 2.5 万行 Rust。

**「实际可用性与当前限制」** macOS 和 Linux 用户现在可以直接下载安装包试用，无需自己编译；但依赖 Service Worker 的站点仍会失败，例如 Datasette Lite 会报出 \`navigator.serviceWorker.startMessages\` 未定义的错误，Ladybird 源码里对应位置还留有 FIXME 注释。官方也声明这是 alpha，部分网站无法正常工作，且偶尔会崩溃，因此现阶段它更适合作为测试对象，用来从浏览器内报告损坏站点，尚不适合作为日常主力浏览器。

**「社区讨论」** 部分早期试用者称，常用网站以及 Proxmox/NoVNC 等较复杂页面都能正确渲染，NoVNC 甚至比 Firefox 更流畅，但也有人提到页面滚动略有卡顿。另有评论希望 Ladybird 后续认真处理浏览器指纹、权限粒度和标签页可见性等问题，也有人怀念其早期更多采用自研组件、较少依赖 SQLite 和 Skia 的路线。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ladybird.org/">Ladybird is a truly independent web browser , backed by a non-profit.</a></li>

</ul>
</details>

**标签**: `#browsers`, `#Ladybird`, `#open source`, `#web rendering`, `#alpha release`

---

<a id="item-tech-news-2"></a>
### [智谱发布 GLM-5.4：首个循环 Transformer，主打通用编程](https://z.ai/blog/glm-5.4) ⭐️ 8.0/10

中国 AI 实验室 Z.ai（智谱）发布 GLM-5.4，称其为首个采用“循环 Transformer”（Loop Transformer）架构的模型，面向通用编程能力；这也是继 Thinking Machines Lab 于 11 月 20 日发布 Inkling 2 Mini 之后，一周内第二次出现循环 Transformer 模型。按官方描述，一组权重共享的层会在一次前向传播中多次迭代、反复精炼隐藏状态，从而在不增加参数量的前提下加深网络。该模型目前尚未以开放权重形式发布，也无法通过常规 API 套餐或 OpenRouter 调用，需订阅 Coding Plan；Simon Willison 实测发现 Coding Plan 的 API key 可在 https://api.z.ai/api/v1 这一 OpenAI 兼容接口上访问新模型。他用“鹈鹕骑自行车”提示词在低、高、最高三档推理强度下对比后认为，GLM-5.4 与上一代 GLM-5.3 的生成质量相近，而 5.1、5.2 的绘画风格与 OpenAI、Anthropic 模型差异明显更大。

hackernews · foohis · 11月23日 10:06 · [社区讨论](https://news.ycombinator.com/item?id=50609685)

**「背景」** 标准 Transformer 的每一层在一次前向传播中只计算一次；循环 Transformer 则让一组共享权重的层反复迭代、逐步细化隐藏状态，从而在不增加参数量的情况下加深有效网络。GLM-5.4 的上一代 GLM-5.3 已经发布，而 Thinking Machines Lab 在 11 月 20 日推出的 Inkling 2 Mini 也采用了循环结构，说明该思路正被不同实验室尝试。

**「影响」** 对想尝鲜的开发者来说，接入门槛在于渠道而非接口：GLM-5.4 目前只能通过 Coding Plan 订阅取得访问权限，常规 API 套餐和 OpenRouter 均未上架，已有的第三方插件（如 llm-zai）也尚未支持该模型，Willison 因此临时另写了 llm-glm 插件；同时由于没有开放权重，用户也无法自行部署。

**「社区讨论」** 有评论者（如 HarHarVeryFunny）称赞智谱披露的技术细节远比西方公司透明，并认为循环结构是当前前沿模型的自然演进方向，另一位评论者则从推理时显存带宽瓶颈的角度解释了这一设计的动机。也有开发者抱怨这类中国模型的“马拉松式思考”在概念上很简单的任务上仍反复自我怀疑、完成时间明显长于前沿模型，并推测这正是它们在基准上接近对手的原因；关于实际水平，Willison 的对比显示 5.4 与 5.3 差别不大。

**标签**: `#llm`, `#model-release`, `#transformer-architecture`, `#coding-assistants`, `#zhipu-ai`

---

<a id="item-tech-news-3"></a>
### [英伟达董事会恢复黄仁勋 CEO 职务](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) ⭐️ 7.0/10

据 CNBC 报道，英伟达董事会已恢复黄仁勋（Jensen Huang）的首席执行官职务。公司声明称，董事会在作出决定过程中听取了美国联邦政府高层意见，并据此认为黄仁勋复职不构成国家安全风险。报道将此事置于国家安全、责任认定和芯片出口政策的争论背景下，但现有材料主要为标题与社区评论，缺少董事会投票细节、复职生效时间及正式公告全文等一手信息。

hackernews · jaz · 11月23日 14:00 · [社区讨论](https://news.ycombinator.com/item?id=50611576)

**「背景」** 这次人事变动是“复职”而非新任命：Nvidia 董事会此前已将联合创始人黄仁勋免去总裁兼 CEO 职务，相关争议涉及他与一名被指为中国间谍的女性之间的关系以及由此引发的国家安全审查。董事会恢复其职务时称，在听取美国高级政府官员意见后，认定其回归不构成国家安全风险。

**「影响」** 对关注英伟达的用户和投资者而言，关键不确定性在于公司治理的实际约束力：评论者指出，董事会此前在不到两周内完成从解职到复职的 180 度转变，且据称全体一致，而声明把政府高层意见列为决策依据。在正式公告细节公布前，不宜推断对出口许可或公司运营的具体影响。

**「社区讨论」** 有评论者认为声明中最关键的是董事会称收到美国政府高层意见，并据此判断无国家安全风险；另有人援引特拉华州 Caremark 判例的高门槛，推测司法部不起诉的表态或可免除董事个人责任。还有评论者批评美国在要求 ASML 和日本芯片企业遵守对华制裁的同时，对英伟达网开一面，属双重标准；也有人以 2023 年 OpenAI 事件类比，认为公司名义治理结构未必等于真实治理结构——这些均为个人观点，非已核实事实。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wccftech.com/nvidia-reinstates-jensen-huang-ceo-board-of-director/">NVIDIA Says Jensen Huang Isn&#x27;t A Security Risk As It Reinstalls Him...</a></li>
<li><a href="https://www.foxnews.com/live-news/ai-news-tech-markets-nvidia-11-23-26">Jensen Huang reinstated as Nvidia CEO after security review</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#semiconductor industry`, `#US government policy`, `#corporate governance`, `#export controls`

---

<a id="item-tech-news-4"></a>
### [NariQ 发布 Qwen3.8-27B 低比特量化：10 GB 文件称接近 BF16](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) ⭐️ 7.0/10

NariQ 面向本地部署发布了 Qwen3.8-27B 的 3-bit 及以下量化版本，声称可在 10 GB 文件中保留接近 BF16 的质量，覆盖智能体任务、数学、多语言推理和图像理解。发布者给出的 BF16/3-bit/2.5-bit/2-bit 结果为：DeepSWE 39.8/41.0/41.9/28.6，Terminal-Bench 2.1 62.6/63.8/60.2/52.4，AIME 25+26 97.7/98.3/96.5/86.0；这些均为其自测，尚未独立验证。运行目前需要其自定义 llama.cpp fork，发布者称在 RTX PRO 6000 上解码速度与其他量化相当。

hackernews · toebee · 11月23日 13:42 · [社区讨论](https://news.ycombinator.com/item?id=50611402)

**「背景」** 量化通过降低模型权重的位宽来压缩文件体积，BF16 常被用作衡量量化后质量损失的 16 位基线；位宽降到 3-bit 及以下时，通常需要专门校准才能尽量保留原模型能力。此次发布的 GGUF 文件目前无法直接用上游 llama.cpp 加载，而需要改用作者提供的 nari-llama.cpp 分支。

**「部署影响」** 采用前需确认自定义 llama.cpp fork 和目标硬件支持：发布者称在 RTX PRO 6000 上解码速度与其他量化相当，社区引用的说明则称 M3 Pro（18 GB）上 3.0bpw 约 3.8 tok/s、2.0bpw 约 4.9 tok/s，明显慢于 CUDA，其他 Mac 未测试。

**「社区讨论」** 评论者肯定该项目在多种长程任务上展示结果并提到“held out”，但怀疑这类高算力量化会过拟合基准，认为部分提升来自评测 harness 差异而非模型本身；也有人追问降比特究竟丢失了哪些信息。另有用户关心 16 GB Mac 能否运行，并希望看到与 Bonsai 2 27B 及不同量化方法的横向比较。

**标签**: `#LLM quantization`, `#local LLM inference`, `#llama.cpp`, `#model compression`, `#benchmark evaluation`

---

<a id="item-tech-news-5"></a>
### [Codex2api 疑遭供应链投毒，v3.1.11 被指含后门](https://github.com/WormW/codex2api-incident-2026-11) ⭐️ 7.0/10

一则 Telegram 贴文称，Codex2api 作者账号遭入侵，攻击者绕过 main 分支推送标签，使 Release 构建出带后门的版本。贴文称 v3.1.11 移除了鉴权，等同于无密码远程执行命令；另有 workflow 外传仓库的 16 个 GitHub Actions secrets，并波及同一账号下至少 21 个仓库。已安装或更新到 3.1.10–3.1.12 的用户被建议立即停用、回退到 3.1.9，并轮换 GitHub token、SSH key、数据库及 DeepSeek 等相关密钥；上述内容尚缺少供给材料中的独立验证。

telegram · zaihuapd · 11月23日 11:21

**「背景」** GitHub 的 Release 工作流常由推送 tag 触发，而 tag 可以指向从未合并进 main、也未经过评审的提交；只要拿到维护者账号权限，就能让 CI 构建并发布带后门的产物。GitHub Actions secrets 用来以加密形式保存仓库令牌、SSH 私钥、数据库口令等凭据，工作流一旦被改动，这些值就可能被读取并外传。安全厂商 Ox Security 记录过 2026 年 11 月的 wfx-loot 行动：攻击者通过 GitHub Actions 与 npm 窃取 CI 密钥，并从 11 月 12 日起改用 Telegram 机器人外传数据，这说明此类手法当时正在活跃使用。

**「影响与处置」** 影响范围不应只按单个项目回退来处理：同一账号下至少 21 个仓库受到波及，相关凭证轮换范围需要覆盖这些仓库，而不能只限于 codex2api 本身。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ox.security/blog/thousands-of-github-accounts-hijacked-with-wfx-loot-ci-secret-stealing-malware-via-github-actions-npm/">Thousands Of GitHub Accounts Hijacked With wfx-loot CI Secret ...</a></li>

</ul>
</details>

**标签**: `#supply-chain security`, `#GitHub Actions`, `#open source security`, `#security incident`, `#secret exfiltration`

---

<a id="item-tech-news-6"></a>
### [Meta AI 负责人称超级智能将至，控制权堪忧](https://thenextweb.com/news/metas-ai-chief-says-superintelligence-is-arriving-and-control-is-at-risk) ⭐️ 7.0/10

Meta 首席 AI 官、超级智能实验室负责人 Alexandr Wang 在 X 发长文称，超级智能已不再是“未来某天”的议题，并警告人类可能难以控制可无限自我改进、或比自己聪明 1000 倍的系统，呼吁紧急投入安全、对齐与防护研究。他以数学家 Levent Alpöge 借助 Anthropic 的 Claude 完成、周六经 Lean 与 Mathlib 社区机器校验的黎曼猜想证明为例，认为 AI 与顶尖人类的差距只剩具体知识、工程整合与实验三块。该证明目前尚无人类可读版本，上述内容来自 Wang 的表述，所给材料未提供独立验证。

telegram · zaihuapd · 11月23日 12:49

**「背景」** 黎曼猜想是 19 世纪提出的数学猜想；此次 Levent Alpöge 借助 Anthropic 的 Claude 完成的证明，已由 Lean 与 Mathlib 专家认证为正确。Lean/Mathlib 的认证意味着证明语句和推理步骤通过了机器检查，但这不等于数学家已理解其思路：目前仍缺人类可读版本，距离 Clay 奖的正式认定也可能要数年。

**「影响」** 对数学界和 AI 安全研究者而言，目前可引用的依据是 Lean 与 Mathlib 的机器校验结果；在人类可读证明、形式化陈述及其依赖公理公开前，这项黎曼猜想证明无法按常规同行评审方式评估。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theguardian.com/technology/2026/nov/21/anthropic-riemann-hypothesis-solved-claude-ai">Two groups verify mathematician’s claim that Claude ... | The Guardian</a></li>
<li><a href="https://www.nacionale.com/en/articles/when-will-we-know-riemann-hypothesis-proof-verified-alpoge-claude-lean-what-happens-next">Lean community certifies Riemann proof ; prize years off</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#superintelligence`, `#theorem proving`, `#Lean/Mathlib`, `#Meta AI`

---

<a id="item-tech-news-7"></a>
### [Anthropic 称 Claude 发现 VP≠VNP 并公开 Lean 4 证明](https://github.com/anthropics/formal-math/blob/main/vp-vnp/README.md) ⭐️ 7.0/10

Anthropic 于 11 月 24 日在 GitHub 仓库 anthropics/formal-math 公开论文《VP ≠ VNP over every field》及配套 Lean 4 形式化证明，称结果由其内部研究用 Claude 模型发现，论文与代码均由 AI 撰写。论文给出哈密顿圈多项式的超多项式算术电路下界，据此推出 VP 是 VNP 的真子类；若成立，即解决 Valiant 1979 年的代数复杂度猜想，但该结论仅针对算术电路，并不涉及 P 与 NP。仓库称已按三条标准公理进行审计，并由独立内核 nanoda 复核，除预留文件外不存在 sorry；不过尚无人类数学家通读，Lean 无法确认形式化陈述与所声称命题一致，附录 Q 已列出出入，结果仍待独立审阅。

telegram · zaihuapd · 11月24日 06:02

**「背景：Valiant 的代数复杂度猜想」** VP 与 VNP 是代数复杂度理论中的电路复杂度类：VP 大致对应可由多项式规模算术电路计算的多项式族，VNP 则对应可由算术电路“表达”的多项式族，二者被视为 P 与 NP 在代数侧的对应物。Valiant 于 1979 年提出 VP≠VNP 猜想，问的是是否存在属于 VNP 但不属于 VP 的多项式族，其核心是算术电路下界。该猜想不同于 P≠NP：它计算的是多项式所需的算术运算规模，而非图灵机上的位级判定问题。

**「审阅重点与适用边界」** 对准备引用该结果的研究者和开发者来说，实际影响是：Lean 4 内核与 nanoda 的通过只覆盖“证明项相对于所写形式陈述有效”，而仓库自述尚未由人类数学家确认该陈述就是 VP≠VNP，且附录 Q 列出出入；在独立审阅澄清前，不应把该工件当作已解决的 Valiant 猜想使用。另需注意，即便成立，它只给出算术电路下界并推出 VP 是 VNP 真子类，不能外推到 P 与 NP。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.youtube.com/watch?v=UuOiRi9T-9c">Claude&#x27;s VP VNP Proof: 47 Years Open, Still Unchecked... - YouTube</a></li>
<li><a href="https://www.alphaxiv.org/abs/2611.vp-vnp-arithmetic-lower-bounds">VP VNP Over Every Field | alphaXiv</a></li>

</ul>
</details>

**标签**: `#AI for math`, `#Lean 4`, `#computational complexity`, `#VP vs VNP`, `#formal verification`

---

## 科技博客

<a id="item-tech-blog-1"></a>
### [vLLM 首日支持 ERNIE 5.5 Flash](https://vllm.ai/blog/2026-11-24-ernie-5-5-flash-preview) ⭐️ 6.0/10

rss · vLLM Blog · 11月24日 00:00

**「背景」** ERNIE 5.5 Flash Preview 是总参数 280B、每 token 激活 14B 的稀疏 MoE 模型，支持 1M token 上下文，并面向长程 Agent 任务。vLLM 要在发布首日高效支持它，必须同时应对新架构的显存流量、稀疏索引瓶颈和部署维护问题。

**「方案」** 作者的核心做法是把模型代码和专用内核封装成独立 vLLM-ERNIE 插件，安装到 vllm==0.32.0 环境中，由 vllm.general\_plugins 入口自动注册，无需 fork、专用镜像或夜间构建。插件通过模块路径延迟导入，只在配置匹配 ERNIE 架构时加载，且只对共享代码加少量钩子，因此同环境服务其他模型不受影响。针对 VHA、Multi-Router Latent MoE、MultiMax 输出头和门控注意力，作者将可预计算参数折叠进权重，并把中间量化、路由链和分段激活融合进内核，报告单内核较朴素实现快 1.55–6.53 倍。FlashIndexer 用动态头路由和阈值预筛选降低 DSA 索引成本，在 1M 上下文报告约 40%（1.4×）加速；量化方面，路由专家采用 MXFP4 W4A8 并做 QAT，其余权重与 KV 缓存为 FP8，索引器为 FP4。DSpark 三层草稿模型每步最多提议 7 个 token，在编码和 Agent 负载上平均接受长度超过 4.0；此外支持注意力张量并行、专家并行、Mooncake PD 分离和 KV 卸载。上述加速和接受长度均为作者报告，文中未给出完整基准方法或端到端对照。

**「启示」** 作者的结论是，模型架构与推理内核协同设计，再以插件复用 vLLM 的调度、并行和服务能力，可以在不维护 fork 的情况下实现新模型的首日高性能部署。其更大意义在于把模型迭代速度与推理框架发布周期解耦。

**标签**: `#vLLM`, `#mixture-of-experts`, `#kernel fusion`, `#speculative decoding`, `#sparse attention`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [纽约联储主席威廉姆斯：通胀回到 2%仍需更多行动](https://www.cnbc.com/2026/11/23/john-williams-fed-inflation-rate-hikes.html) ⭐️ 7.0/10

纽约联储主席威廉姆斯 11 月 23 日表示，要让通胀回到 2%的目标“仍有工作要做”，并称美联储应随着时间推移采取行动；市场目前完全预期美联储将在 12 月 8 日至 9 日会议上把当前 3.75%—4%的利率区间上调 25 个基点。

rss · CNBC Finance · 11月23日 21:02

**「背景」** 美国通胀仍高于美联储 2%的目标，而美联储官员在加息速度上存在分歧，威廉姆斯主张采取有节制的做法。

**「影响」** 若美联储如市场预期加息 25 个基点，持有浮动利率贷款的家庭和企业将面临更高的借贷成本。

**标签**: `#Federal Reserve`, `#monetary policy`, `#inflation`, `#interest rates`, `#John Williams`

---

<a id="item-finance-news-2"></a>
### [上海地铁票价 21 年来首次调整，起步价 3 元](https://weibo.com/1699432410/5368461393397183) ⭐️ 7.0/10

上海宣布自 12 月 1 日起调整轨道交通票价，这是 21 年来首次调价：起步价 3 元，可乘 0 至 4 公里，之后按 4、4、4、7、7、10、10 公里分段加 1 元，50 公里以上每 15 公里加 1 元。同步推出 190 元、210 元、270 元、390 元四档计次票（分别为 35 次、45 次、60 次、90 次），11 月 26 日开售，官方称旨在减少调价对高频出行人群的影响。

telegram · zaihuapd · 11月23日 10:45

**「背景」** 上海轨道交通票价此前已 21 年未作调整，因此此次调价是该市地铁长期沿用同一票价体系后的首次变动。

**「影响」** 对上海高频通勤者而言，起步价上调会直接抬高日常出行支出；这次推出的四档计次票，以及同一支付渠道当月累计满 90 元后享 9 折的优惠，目的就是减轻这一成本增加。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.qq.com/rain/a/20260908A05NH700">news.qq.com/rain/a/20260908A05NH700</a></li>
<li><a href="https://m.163.com/dy/article/L4N904TQ05568W0A.html?spss=news-hotlist-wap-index">m.163.com/dy/article/L4N904TQ05568W0A.html?spss=news-hotlist...</a></li>

</ul>
</details>

**标签**: `#Shanghai`, `#public transit`, `#fare adjustment`, `#commuting costs`, `#urban policy`

---

<a id="item-finance-news-3"></a>
### [黄循财称新加坡不会成为规避美国芯片管制的通道](https://www.bloomberg.com/news/articles/2026-11-24/singapore-won-t-be-conduit-to-skirt-us-chip-curbs-wong-says) ⭐️ 7.0/10

新加坡总理黄循财表示，不允许新加坡被当作企业规避美国芯片出口管制的通道，当局正在调查 Megaspeed 采购英伟达芯片的交易。此前一天，美国商务部已将 Megaspeed 及另外 6 家东南亚企业列入贸易黑名单，指其存在向未获授权用户转移先进计算产品的“重大风险”。

telegram · zaihuapd · 11月24日 05:03

**「背景」** 美国商务部 11 月 23 日将 Megaspeed 及另外 6 家东南亚企业列入贸易黑名单，上榜企业采购美国受管制芯片和技术通常需申请许可；《纽约时报》此前报道，对 Megaspeed 采购英伟达 AI 芯片的调查已被转交美国司法部。

<details><summary>参考链接</summary>
<ul>
<li>Commerce Dept. Chip Inquiry Was Halted After Nvidia Intervention - The New York Times</li>
<li>The U.S. has added Singapore-based Megaspeed and six other Southeast Asian ... - Facebook</li>

</ul>
</details>

**标签**: `#semiconductor export controls`, `#Singapore`, `#US-China tech tensions`, `#Nvidia`, `#corporate blacklist`

---