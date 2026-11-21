---
layout: default
title: "Horizon Summary: 2026-11-21 (ZH)"
date: 2026-11-21
lang: zh
---

> 从 34 条内容中筛选出 10 条重要资讯。

---

**科技新闻**
1. [Inkling 2 Mini 发布：开放权重的循环 Transformer 模型](#item-tech-news-1) ⭐️ 8.0/10
2. [浙江大学在超导芯片上首次真机实现 QRAM 原型](#item-tech-news-2) ⭐️ 8.0/10
3. [arXiv 论文称语言模型可无梯度重写自身权重](#item-tech-news-3) ⭐️ 7.0/10
4. [陶哲轩：纳维-斯托克斯奇点与广义黎曼猜想](#item-tech-news-4) ⭐️ 7.0/10
5. [台积电据报暂停对华 16nm 及以下订单](#item-tech-news-5) ⭐️ 7.0/10
6. [微软用 USB4 让多台 PC 合跑本地大模型](#item-tech-news-6) ⭐️ 7.0/10
7. [OpenRouter 警告 MiniMax 模型提示词可能遭第三方读取](#item-tech-news-7) ⭐️ 7.0/10

**科技博客**
1. [输出缓存为何节省不了 LLM 代理成本](#item-tech-blog-1) ⭐️ 7.0/10

**财经新闻**
1. [沃什主张少给指引，美联储官员反而更多公开辩论加息](#item-finance-news-1) ⭐️ 7.0/10
2. [特朗普表态支持卢特尼克，并称希望黄仁勋道歉后回归](#item-finance-news-2) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [Inkling 2 Mini 发布：开放权重的循环 Transformer 模型](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Thinking Machines 发布了开放权重的 Inkling 2 Mini；根据 Hacker News 讨论中引述的发布说明，该模型采用循环（looped）Transformer 架构，尺寸定位主要面向本地部署用户，训练全程使用 nvfp4。社区已报告在 llama.cpp/GGUF 上跑通：一位用户在 Ryzen 395 配 Vulkan 后端时测得约 27 tokens/s 解码速度，另一位在 32GB M1 Pro 上用 q4 量化测得约 10 tokens/s。有评论称其基准表现与 Qwen3.8-27B 相当，但这是社区转述，所给材料中没有官方基准或独立验证。

hackernews · jasondavies · 11月20日 20:12 · [社区讨论](https://news.ycombinator.com/item?id=50581260)

**「背景：循环 Transformer 与 Inkling 系列」** 循环（looped）Transformer 的基本思路是让模型反复复用中间层的权重，在几乎不增加参数量的前提下为每个 token 投入更多计算，从而用更少的 token 得出答案。据 Thinking Machines Lab 的发布页介绍，Inkling 2 Mini 正是采用这种“循环中间层”结构、小到可以在笔记本上运行的开源权重模型。它属于该公司的 Inkling 系列，该系列以开放权重、覆盖文本、图像与音频、并可在 Tinker 上微调为定位。

**「影响」** 想在本机运行该模型的用户需注意，现成 llama.cpp 尚未达到最佳状态：一位用户指出，需要合入尚未合并的 PR 32694、32657、32429、32704，并给出一个约带来 30% 提速的小补丁。GGUF 版本已由 unsloth 发布在 Hugging Face 上，可直接配合 Ollama/llama.cpp 使用。

**「社区讨论」** 讨论焦点在于循环架构首次以开放权重形式出现：有评论将其与仅被传闻采用循环架构的闭源模型（如 GPT Astra 6+、Sol 6.1+）对比，预期更多开放模型会跟进，并提出可解释性与安全问题。实际体验褒贬不一——有人称快速编码测试表现不错，也有人在“识别硬币类型和年份”这类任务上失败，模型在约 1.2 万 token 后仍反复猜测；另有评论对基准能否在真实场景中成立持观望态度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://thinkingmachines.ai/inkling/">Inkling - Thinking Machines Lab</a></li>

</ul>
</details>

**标签**: `#open-weights models`, `#transformer architecture`, `#local LLM inference`, `#llama.cpp`, `#model release`

---

<a id="item-tech-news-2"></a>
### [浙江大学在超导芯片上首次真机实现 QRAM 原型](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

浙江大学团队报告称，在自主制备的超导量子芯片「天目 2 号」上首次在真机上实现量子随机存储器（QRAM），成果发表于《自然·物理》。该原型可调取 4 位和 8 位数据，准确率分别为 80.9% 和 60.4%，线路深度较未优化方案降低 30% 以上，并首次验证该架构具备局部抗噪特性。团队表示下一步将推进 QRAM 的规模化研究；上述「全球首次」及性能数据来自团队自述与论文，尚待独立复现。

telegram · zaihuapd · 11月21日 08:31

**「背景：QRAM 是什么」** QRAM（量子随机存储器）是一类面向量子计算机的存储架构：它以量子叠加的地址访问数据，使算法能在一次操作中并行读取多个存储单元，因而被视为需要随机访问数据的量子算法的重要基础组件。

**「对算法设计的实际影响」** 对依赖数据加载的量子算法开发者来说，这次演示仍只是原理验证：4 位与 8 位取数准确率分别只有 80.9% 和 60.4%，说明在 8 位规模下多数检索结果尚不可靠，短期内不能当作可用的量子内存写入算法设计或基准测试。团队称该架构已初步验证局部抗噪特性、线路深度较未优化方案降低 30% 以上，并将下一步定为规模化研究，因此相关应用仍应以纠错和容错为前提来评估 QRAM 假设。

**标签**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#quantum memory`, `#hardware research`

---

<a id="item-tech-news-3"></a>
### [arXiv 论文称语言模型可无梯度重写自身权重](https://arxiv.org/abs/2611.21885) ⭐️ 7.0/10

一篇 arXiv 论文（2611.21885）声称，语言模型能仅凭自身推理重写权重，无需梯度或训练，并在连续八次会话中让准确率持续上升。该说法目前来自论文及 Hacker News 讨论，现有材料未提供独立复现；评论者质疑其适用范围，认为演示中的改进可能主要来自缩短推理轨迹以避开 token 上限。

hackernews · lwhsiao · 11月20日 16:29 · [社区讨论](https://news.ycombinator.com/item?id=50577265)

**「研究背景」** 无梯度地直接修改模型权重并非全新思路：此前已有工作把模型修复建模为对其 BF16 权重的稀疏离散优化，并有智能体在不计算梯度的情况下修正 Qwen3.5-0.8B 的推理循环（158 个智能体回合、8970 万 token）。这篇论文的区别在于让语言模型用自身推理来执行权重编辑，而不是依赖外部优化器或预设的修复流程。

**「影响」** 对试图复现或采用该方法的开发者而言，评估时必须把准确率与推理长度、token 预算分开测量；否则，评论所指出的“靠缩短推理轨迹达标”可能被误读为一般能力提升。

**「社区讨论」** Hacker News 评论对“无梯度、无训练”的说法持保留态度：aesthesia 认为演示中的唯一自我修改只是缩短推理轨迹以避开 token 上限，并称这与近期的 weight-space programming 结果类似；Toutouxc 则追问“只提交有效编辑”为何不算训练。另有 LarsDu88 担忧自主模型可借类似机制抑制安全相关激活，但这属于风险推测，并非论文已验证的结果。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/papers/2611.14210">Paper page - Tree-Ising: Repairing Language Models with Bit-Level...</a></li>

</ul>
</details>

**标签**: `#language models`, `#weight editing`, `#self-improvement`, `#AI safety`, `#arXiv`

---

<a id="item-tech-news-4"></a>
### [陶哲轩：纳维-斯托克斯奇点与广义黎曼猜想](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 7.0/10

陶哲轩（Terry Tao）发布博客文章，讨论无外力欧拉/纳维-斯托克斯奇点问题与广义黎曼猜想；目前可见材料只有帖子标题、摘要和评论，尚不足以独立核验其证明范围或结论。Hacker News 的讨论重点转向相关证明工作的 Lean 形式化：有评论称两个独立内核接受了结果，因此内核漏洞被利用的可能性较低。该说法属于社区转述，并不等同于对形式化陈述或数学证明本身的独立确认。

hackernews · archon1410 · 11月20日 17:21 · [社区讨论](https://news.ycombinator.com/item?id=50578358)

**「背景」** 这则讨论的直接前情是：Buckmaster 与 Alpöge 于 2026 年 11 月 20 日发布了一个 AI 辅助证明，声称无外力三维不可压缩 Navier–Stokes 方程会在有限时间爆破；Tao 表示该证明已有 Lean 形式化，但仍需整理成专业论文。两人还称，这一工作补上了 OpenAI 在 2026 年 9 月给出的 Navier–Stokes 方程 AI 生成 Lean 证明中的一个漏洞。

**「影响」** 对 Lean 形式化验证的使用者而言，这一讨论的实际提醒是：两个独立内核通过只能降低内核实现出错的风险，审阅者仍需检查形式化陈述是否忠实表达目标定理；构建通过不等于被证明的命题就是想要的命题。

**「社区讨论」** 有评论者认为两个独立内核接受结果，说明内核漏洞被利用的可能性较低；也有人追问，1500 万行 Lean 代码通过构建时，如何确认形式化陈述确实对应目标定理，而不是只证明了无关的简单命题。另有评论表达了对 AI 辅助证明既兴奋又不安的职业感受，并质疑陶哲轩为何没有评论该黎曼猜想结果的意义。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://letsdatascience.com/news/buckmaster-and-alpoge-post-ai-aided-proof-of-unforced-navier-fcca1e31">Buckmaster and Alpöge post AI-aided proof of unforced Navier ...</a></li>
<li><a href="https://openai.com/index/navier-stokes-solution/">On the Navier–Stokes Millennium Prize Problem | OpenAI</a></li>

</ul>
</details>

**标签**: `#formal verification`, `#Lean`, `#mathematics`, `#AI-assisted proof`, `#Navier-Stokes`

---

<a id="item-tech-news-5"></a>
### [台积电据报暂停对华 16nm 及以下订单](https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls) ⭐️ 7.0/10

据 AppleInsider 报道，台积电已通知客户，暂停接受中国公司 16nm 及以下先进制程的订单。按收紧后的美国半导体出口新规，除非事先取得美国出口许可或豁免，否则台积电不得向这些客户供货；相关中国企业因此只能使用 28nm、40nm 等较旧制程，也无法获得 AI 数据中心所需的高带宽内存。此前台积电可自行评估客户设计是否符合豁免条件，现在客户须提前申请；美国获批名单中有苹果、AMD、英伟达，尚无中国公司。台积电表示将遵守新规，但该消息目前仅来自单一报道，尚待独立确认。

telegram · zaihuapd · 11月21日 02:01

**「背景」** 美国出口管制对先进制程的对华供货设有许可要求，而台积电此前可以自行评估客户设计是否符合豁免条件。新规把这一判断改为客户须事先取得美国许可；路透报道称，相关暂停始于 11 月 19 日新规生效之后。

**「影响」** 直接影响是：未取得美国出口许可或豁免的中国芯片设计公司无法再在台积电投片 16nm 及以下制程，只能退回 28nm、40nm 等成熟制程，也因此难以获得 AI 数据中心所需的高带宽内存。此前豁免资格由台积电自行评估，现在客户须提前申请，而获批名单中尚无中国公司，相关设计可能面临改版、转厂或等待许可，已安排在先进节点流片的产品也可能延期。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gate.com/news/detail/tsmc-suspends-china-orders-below-16-nanometers-following-new-us-export-25743338">TSMC Suspends China Orders Below 16 Nanometers Following New ...</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#export-controls`, `#TSMC`, `#AI-hardware`, `#supply-chain`

---

<a id="item-tech-news-6"></a>
### [微软用 USB4 让多台 PC 合跑本地大模型](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 7.0/10

微软公布 Windows 的 RDMA over USB4 开发者预览，并称将通过 Windows Insider 推送；多台 PC 可用普通 USB4 连接共享内存和 GPU 算力，运行同一个本地大模型，无需专用网卡或交换机。演示中，三台搭载 AMD Ryzen AI Max+ 395 的机器以 4-bit 量化运行 Qwen3-235B-A22B，速度约 18.5 token/s。该功能目前仍属开发者预览，演示也仅限这一特定硬件组合，实际可用性和更广泛的兼容性尚未得到验证。

telegram · zaihuapd · 11月21日 06:13

**「背景」** RDMA（远程直接内存访问）是一种让一台机器直接读写另一台机器内存、绕过常规网络协议栈的技术，过去主要用于数据中心的高速网络。微软此次把这项能力放到 USB4 上，使普通 Windows PC 之间的 USB4 连接也能充当低延迟数据通道，从而把多台机器的内存和 GPU 资源合并起来，运行单台 PC 放不下的本地模型。

**「影响」** 对拥有 USB4 接口和相应 AMD 硬件的开发者，预览推送后可在 Windows Insider 环境中测试跨机分布式本地推理，而不必为小型集群另配网卡或交换机；但当前证据仅覆盖特定硬件组合的演示，尚不能视为通用生产方案。

<details><summary>参考链接</summary>
<ul>
<li>Introducing RDMA over USB4® on Windows: run larger local AI models ...</li>
<li>Tag:&quot;rdma&quot; - Microsoft Community Hub</li>

</ul>
</details>

**标签**: `#RDMA`, `#USB4`, `#local AI inference`, `#Windows`, `#distributed inference`

---

<a id="item-tech-news-7"></a>
### [OpenRouter 警告 MiniMax 模型提示词可能遭第三方读取](https://news.ycombinator.com/item?id=50585962) ⭐️ 7.0/10

OpenRouter 通过邮件通知用户，发送给 MiniMax 模型的请求内容可能已被第三方读取，并已移除相关端点的「零数据保留」标签。通知称，安全研究者在 2026 年 7 月至 10 月向 MiniMax 模型发送含测试 URL 的提示词，第三方在 40 至 130 小时后访问了这些 URL；OpenRouter 将问题归因于 MiniMax 及其转发方 AtlasCloud、Novita 和 StreamLake。OpenRouter 建议涉及敏感凭证的用户更换 API Key 和密码，但官网尚未发布相关公告，目前也未见 OpenRouter 或 MiniMax 的原始披露。

telegram · zaihuapd · 11月21日 06:53

**「背景」** 带唯一 URL 的“金丝雀”提示词是一种检测数据留存或转发的方法：研究者向模型发送这类提示词，若其中的 URL 随后被访问，就说明提示词内容在模型链路之外被读取或处理。相关报道提到，2026 年 7 月至 10 月埋入的 canary 链接在 40 到 130 小时后被第三方访问，涉及 MiniMax 及 AtlasCloud、Novita、StreamLake 等转发方，随后 OpenRouter 撤下了受影响端点的“零数据保留”标签。

**「凭证轮换与端点数据政策」** 对使用受影响 MiniMax 端点的开发者来说，直接影响是过去依据“零数据保留”标签处理敏感提示词和凭证的假设不再成立：OpenRouter 已移除该标签，并将问题归因于 MiniMax 及 AtlasCloud、Novita、StreamLake 等转发方，而非自身系统被攻破。若提示词中曾出现 API Key 或密码，应按建议立即更换，并重新核对这些端点的数据政策后再发送敏感内容。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://startupfortune.com/openrouter-warns-minimax-prompts-may-have-been-read-by-a-third-party/">OpenRouter warns MiniMax prompts may have been read by a ...</a></li>
<li><a href="https://thecybersecguru.com/news/openrouter-minimax-zero-data-retention-canary-prompts/">OpenRouter MiniMax exposure: why zero data retention labels ...</a></li>
<li><a href="https://www.kucoin.com/news/flash/minimax-zero-data-retention-policy-found-to-leak-user-prompt-links">MiniMax&#x27;s &quot;Zero Data Retention&quot; Policy Found to Leak User ...</a></li>
<li><a href="https://startupfortune.com/openrouter-warns-minimax-prompts-may-have-been-read-by-a-third-party/">OpenRouter warns MiniMax prompts may have been read by a ...</a></li>
<li><a href="https://openrouter.ai/docs/guides/features/zdr">Zero Data Retention - How OpenRouter gives you control over ...</a></li>

</ul>
</details>

**标签**: `#AI security`, `#data privacy`, `#LLM APIs`, `#OpenRouter`, `#MiniMax`

---

## 科技博客

<a id="item-tech-blog-1"></a>
### [输出缓存为何节省不了 LLM 代理成本](https://seangoedecke.com/why-output-caching-doesnt-work/) ⭐️ 7.0/10

rss · Sean Goedecke · 11月21日 00:00

**「背景」** LLM 推理成本的一大杠杆是缓存模型输入（KV cache），避免每条消息都重新计算整段对话历史。作者认为，把“输出缓存”视为同等的优化方向并不可行。

**「方案」** 输出确实会重复：编码代理常被要求复述代码片段、证据文档或示例输出，而输出 token 比输入 token 更贵。一个设想的办法是微调或提示模型输出“src/script.py:12-15”这类引用，由 harness 展开，从而减少显式重复。但作者指出，这只能优化用户可见的输出。根据他自己代理历史的粗略估计，可见输出仅占约 6%，推理 token 占 50%，工具调用占 44%。按 Amdahl 定律，即使能省掉可见输出三分之二的 token，也只节省约 4%的总输出 token。真正要降低的是那 94%的不可见 token，这主要取决于模型智能：模型越强，达到正确答案所需的推理和工具调用越少，甚至可能出现单 token 贵 5 倍、总 token 少 6 倍而整体更便宜的情况；harness 也重要，但作者认为其容易被复制，比较优势有限。作者对推理链是否重复、工具调用是否包含重复仍不完全确定，估计方法也较粗略。

**「启示」** 作者的结论是，输出缓存只触及可见输出这一小部分，无法解决 LLM 代理成本的大头；提升模型与 harness 效率、减少不可见的推理和工具调用 token，才是更有效的方向。

**标签**: `#LLM inference economics`, `#output caching`, `#Amdahl&\#x27;s law`, `#reasoning tokens`, `#coding agents`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [沃什主张少给指引，美联储官员反而更多公开辩论加息](https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html) ⭐️ 7.0/10

美联储主席凯文·沃什上任六个月来避免就利率路径提供指引，但其同僚正更频繁地公开辩论尽快加息，美国银行分析称过去两周的“美联储讲话”为 2025 年初以来同期最多。当前通胀指标高于 3%、美联储目标为 2%，而据 CME Group 的 FedWatch，交易员认为 12 月至少加息 25 个基点的概率为 100%。

rss · CNBC Finance · 11月20日 21:10

**「背景」** 美联储 10 月会议维持利率不变；会议纪要显示，部分希望加息的官员表示，若市场清楚理解进一步收紧即将到来，他们本可支持按兵不动，这一条件指向沃什所反对的前瞻指引（即提前告知未来利率路径）。

**标签**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#FOMC`, `#Kevin Warsh`

---

<a id="item-finance-news-2"></a>
### [特朗普表态支持卢特尼克，并称希望黄仁勋道歉后回归](https://www.reuters.com/world/us/trump-says-he-still-backs-lutnick-urges-nvidias-huang-apologize-2026-11-20/) ⭐️ 7.0/10

美国总统特朗普 11 月 20 日表示，他仍支持商务部长卢特尼克，称后者“做得很好”。特朗普还说，希望已辞职的英伟达 CEO 黄仁勋“郑重道歉后回归”，并称已就此事与中国国家主席习近平交谈；这一说法与财长贝森特称通话未涉及黄仁勋相矛盾。

telegram · zaihuapd · 11月21日 05:03

**「背景」** 据阿纳多卢通讯社报道，黄仁勋在担任英伟达 CEO 33 年后于上周辞职，此前有报道称他存在婚外情，其中一名女性被怀疑与中国情报机构有关联。Ars Technica 报道称，卢特尼克曾公开表示，自己向黄仁勋承诺“非常方便地接触总统”，这种关系助推了特朗普批准向中国出售英伟达 H200 芯片，对华芯片销售的处理也因此受到质疑。

**「影响」** 此时美国商务部正因放行中国企业经手英伟达芯片而受审查，卢特尼克与财长贝森特在对华芯片限制上的分歧也已公开；总统对卢特尼克的支持，意味着英伟达及其中国客户在出口许可与执法尺度上面对更多不确定性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arstechnica.com/tech-policy/2026/11/trump-was-in-bed-with-jensen-critics-balk-at-huangs-wish-to-return-to-nvidia/">“ Trump was in bed with Jensen ”: Critics balk at Huang ’s wish to return...</a></li>
<li><a href="https://www.aa.com.tr/en/americas/top-us-senate-democrat-accuses-trump-of-putting-national-security-at-risk-with-ai-chip-sales-to-china/4132631">Anadolu Ajansı: Top US Senate Democrat accuses Trump of putting...</a></li>
<li><a href="https://www.axios.com/2026/11/11/trump-lutnick-nvidia-china-chip-export-controls">Trump backed Nvidia chip controls aimed at China 3 times as ...</a></li>
<li><a href="https://www.aljazeera.com/economy/2026/11/17/bessent-vs-lutnick-who-is-winning-the-china-chip-debate">Bessent vs Lutnick: Who is winning the China chip debate?</a></li>
<li><a href="https://www.npr.org/2026/11/14/nx-s1-6040379/commerce-department-under-pressure-for-delaying-export-controls-on-nvidia-chips">Commerce Department under pressure for delaying export ...</a></li>

</ul>
</details>

**标签**: `#US-China tech policy`, `#semiconductor export controls`, `#Nvidia`, `#Commerce Department`, `#corporate leadership`

---