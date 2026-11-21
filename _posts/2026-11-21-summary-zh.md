---
layout: default
title: "Horizon Summary: 2026-11-21 (ZH)"
date: 2026-11-21
lang: zh
---

> 从 34 条内容中筛选出 10 条重要资讯。

---

**科技新闻**
1. [陶哲轩博文将无外力纳维-斯托克斯奇点与广义黎曼猜想相关联](#item-tech-news-1) ⭐️ 8.0/10
2. [Inkling 2 Mini：循环 Transformer 开放权重模型](#item-tech-news-2) ⭐️ 8.0/10
3. [台积电据报暂停对华企 16nm 及以下订单](#item-tech-news-3) ⭐️ 8.0/10
4. [浙大“天目 2 号”实现 QRAM 原型](#item-tech-news-4) ⭐️ 8.0/10
5. [Levent Alpöge 称与 Claude 证明黎曼猜想](#item-tech-news-5) ⭐️ 7.0/10
6. [微软预览 Windows USB4 RDMA，多台 PC 合跑本地模型](#item-tech-news-6) ⭐️ 7.0/10
7. [OpenRouter 警告 MiniMax 模型提示词疑被第三方读取](#item-tech-news-7) ⭐️ 7.0/10

**科技博客**
1. [输出缓存为何难以降低大模型成本](#item-tech-blog-1) ⭐️ 6.0/10

**财经新闻**
1. [美联储官员发言增多，FOMC 加息分歧加深](#item-finance-news-1) ⭐️ 7.0/10
2. [特朗普表态支持卢特尼克，并称希望黄仁勋道歉后回归](#item-finance-news-2) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [陶哲轩博文将无外力纳维-斯托克斯奇点与广义黎曼猜想相关联](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 8.0/10

陶哲轩（Terry Tao）于 11 月 20 日发文，把无外力欧拉方程与纳维-斯托克斯方程的奇点问题同广义黎曼猜想（GRH）放在一起讨论；博文引用了 Ravi Vakil 同日发布的“紧急通告”，后者宣布 Alessandro Masullo 提出了一份广义黎曼猜想证明草案。Vakil 称该证明“完全出自人类、没有使用 AI”，Brian Conrad 已仔细审阅数月并给出大量反馈，这些反馈正在被纳入修订；原计划是让 Masullo 到斯坦福访学一年打磨文稿、并先通过足够多同行审阅再公布，现在决定直接放出当前草稿。现有材料只有博文标题、这段引文和评论区，没有给出纳维-斯托克斯与广义黎曼猜想之间那个关联结果的具体陈述或完整证明细节，因此该关联本身仍属未经独立确认的声明。

hackernews · archon1410 · 11月20日 17:21 · [社区讨论](https://news.ycombinator.com/item?id=50578358)

**「背景」** 广义黎曼猜想把黎曼猜想从黎曼 ζ 函数推广到狄利克雷 L 函数等更广泛的一类 L 函数，长期是数论中最重要的未解问题之一，许多结论都以其成立为前提。讨论中反复提到的 Lean 是带小型内核的交互式定理证明器：内核接受一个证明项，意味着该证明在形式系统内与其所陈述的命题相符，这也是评论者关心“内核是否可靠”的原因。

**「影响」** 对打算依赖这一形式化结果的读者来说，实际的核查重点在于形式化陈述本身，而不只是构建能否通过：正如下方评论指出的，编译或构建成功只说明证明项匹配了所写下的命题，并不自动说明那个命题就是人们真正关心的定理，因此审阅者需要逐条比对形式化定义与经典表述。

**「社区讨论」** 评论者 chunky1994 报告称两个相互独立的内核都接受了该结果，认为这降低了利用内核漏洞的可能性；swingboy 则质疑在规模庞大的 Lean 代码库中，构建通过是否真能保证验证的是正确的命题，而不是某段恰好能通过检查的内容。softwaredoug 提出更长远的问题——机器擅长在既有抽象上生成并验证证明，但新的抽象和概念从何而来；actusual 则描述了在兴奋与不安之间的职业焦虑，maplet 则对陶哲轩未在文中评论该结果的意义表示不解。

**标签**: `#formal verification`, `#Lean theorem prover`, `#AI-assisted mathematics`, `#Navier-Stokes`, `#Riemann Hypothesis`

---

<a id="item-tech-news-2"></a>
### [Inkling 2 Mini：循环 Transformer 开放权重模型](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Inkling 2 Mini 是一款新的开放权重模型，采用循环 Transformer 架构，主打本地推理。早期 Hacker News 测试者报告，它在 Ryzen 395 上通过 llama.cpp 的 Vulkan 后端达到约 27 tokens/s，在 32GB M1 Pro 上以 q4 xl 量化运行约 10 tokens/s；这些是个人测试，未经独立验证。同一讨论提到，llama.cpp 上仍有若干未合并 PR（32694、32657、32429、32704），并建议应用一个可带来约 30% 提速的小补丁。有评论将其与 Qwen3.8-27B 相比，但该比较同样来自社区、尚待复现。

hackernews · jasondavies · 11月20日 20:12 · [社区讨论](https://news.ycombinator.com/item?id=50581260)

**「背景：循环 Transformer 与本地推理栈」** 评论中把 Inkling 2 Mini 称为“循环（looped）”Transformer：这类架构不是单纯堆叠更多互不相同的层，而是让同一组层反复迭代计算，从而在不按比例增加参数量的前提下提高推理阶段的算力投入。有评论者指出，少数闭源模型（如被提及的 GPT Astra 6+、Sol 6.1+）是否采用循环架构目前仍只是传言，因此一款公开权重的循环模型显得少见。本地实测则依赖 llama.cpp 这一常用推理运行时，讨论时相关支持还通过若干尚未合并的 PR 落地。

**「本地部署的实际门槛」** 对想在本地跑模型的用户来说，这款模型小到可以在 MacBook 或 DGX Spark 上运行：Artificial Analysis 记录为 26B 总参数、5.4B 激活参数（含循环层三次前向，每 token 约 3.1B 独立权重），OpenRouter 则标为 26.4B 总参数、3.4B 激活参数，两个来源的激活参数口径并不一致，选型时需以实际权重与配置为准。不过当前工具链支持仍不完整：有评论者报告，在 Ryzen 395 上使用 llama.cpp Vulkan 解码约 27 tokens/s，但需先合入若干尚未合并的 PR，并打一个小补丁才能再获得约 30% 提速；另一位在 32GB M1 Pro 上以 q4 量化实测约 10 tokens/s。因此打算上手的开发者应预留编译、打补丁与调优的时间，而不是把它当作开箱即用的推理后端。

**「社区讨论」** 评论者对开放权重的循环 Transformer 评价积极，认为如果这些基准在真实场景中成立，更多开放模型可能转向该架构，同时也有人追问这对安全与可解释性意味着什么。实际体验并不一致：有人称简单 Python 任务完成得不错，但在识别硬币类型和年份的任务上失败，另有用户在 Unsloth 的“extra high”思考模式下遇到问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://artificialanalysis.ai/articles/inkling-2-mini">Thinking Machines has released Inkling 2 Mini, an open weights ...</a></li>
<li><a href="https://openrouter.ai/thinkingmachines/inkling-2-mini">Inkling 2 Mini - API Pricing &amp; Benchmarks | OpenRouter</a></li>

</ul>
</details>

**标签**: `#AI models`, `#open weights`, `#local inference`, `#transformer architecture`, `#llama.cpp`

---

<a id="item-tech-news-3"></a>
### [台积电据报暂停对华企 16nm 及以下订单](https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls) ⭐️ 8.0/10

据 Telegram 频道转述的报道，台积电已通知客户暂停接受中国公司 16nm 及以下先进制程订单；在收紧后的美国半导体出口新规下，除非事先取得美国出口许可或豁免，否则不得供货。报道还称，新规使中国企业只能使用 28nm、40nm 等较旧制程，并无法使用 AI 数据中心所需的高带宽内存。此前台积电可自行评估客户设计是否符合豁免条件，现在客户须提前申请；美国获批名单中有苹果、AMD、英伟达，尚无中国公司，台积电表示将遵守新规。相关说法尚未独立核实。

telegram · zaihuapd · 11月21日 02:01

**「背景」** 16nm 及以下属于较先进的逻辑制程，28nm、40nm 等则是更成熟的节点；台积电是总部位于台湾的晶圆代工厂，中国芯片设计公司可通过其代工服务获得先进制程产能。此前台积电可自行评估客户设计是否符合美方豁免条件，收紧后的规则要求客户事先取得美国出口许可或豁免。

**「影响」** 对中国芯片设计公司而言，最直接的变化是流程上的变化：过去台积电可以自行判断客户的设计是否符合豁免条件，现在则必须由客户事先向美国申请出口许可或豁免，而获批名单上的苹果、AMD、英伟达都不包括中国公司。这意味着相关企业短期内只能使用 28nm、40nm 等成熟制程，无法采用 AI 数据中心所需的高带宽内存，其先进制程产品和 AI 硬件规划将面临重新设计或延期的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/TSMC">TSMC - Wikipedia</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#export-controls`, `#TSMC`, `#China`, `#AI-hardware`

---

<a id="item-tech-news-4"></a>
### [浙大“天目 2 号”实现 QRAM 原型](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

浙江大学团队报告在自主制备的超导量子芯片“天目 2 号”上首次于真机实现量子随机存储器（QRAM），成果发表于《自然·物理》。团队称，芯片上运行的原型可调取 4 位和 8 位数据，准确率分别为 80.9%和 60.4%。该方案的线路深度较未优化方案降低 30%以上，并首次验证了该架构的局部抗噪特性。团队下一步将推进 QRAM 的规模化研究。

telegram · zaihuapd · 11月21日 08:31

**「背景」** QRAM（量子随机存储器）指的是能以叠加的地址一次性取出数据的量子存储结构，许多宣称具备加速优势的量子算法（如量子数据库搜索和部分线性代数算法）都默认它已经存在。它的工程难点在于寻址电路深度会随数据规模迅速增长、误差不断累积，因此长期难以在真实硬件上落地；此次浙江大学团队强调“线路深度较未优化方案降低 30% 以上”并验证局部抗噪特性，正是针对这一瓶颈。

**「影响」** 对量子算法开发者而言，这一原型尚不能视为可用的高保真量子内存：8 位检索准确率为 60.4%，说明数据位宽增加时检索可靠性明显下降，后续规模化研究需先解决这一问题。

**标签**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#hardware`, `#research`

---

<a id="item-tech-news-5"></a>
### [Levent Alpöge 称与 Claude 证明黎曼猜想](https://simonwillison.net/2026/Nov/20/levent-alpoge/) ⭐️ 7.0/10

Levent Alpöge 在一份被 Simon Willison 引用的声明中声称，他与 Claude 合作发现了黎曼猜想的证明，并表示该方法可推广至广义黎曼猜想，预期投入更多时间还能处理扩展黎曼猜想。他还称两人已在无假设条件下形式化这些论证。该条目仅转述这段声明，没有给出证明细节、形式化产物的链接或任何独立验证，因此应视为未经证实的个人主张，而非已确认的数学突破。

rss · Simon Willison · 11月20日 16:30

**「背景知识」** 黎曼猜想断言黎曼 ζ 函数的所有非平凡零点都落在临界线 Re\(s\)=1/2 上，这一命题至今未被证明，其成立与否直接决定素数分布误差项的量级；广义黎曼猜想把同类断言推广到狄利克雷 L 函数等更广的函数族。提出上述主张的 Levent Alpöge 是一名研究数论与算术统计的土耳其、美国双重国籍数学家，而非无关人士。

**「影响」** 由于阿尔波格（Levent Alpöge）本人是 Anthropic 的员工，而 Claude 正是该公司的模型，外界在评估这一声明时需要计入这层利益关联；据《科学美国人》和《纽约时报》报道，他于 11 月 20 日（周五）公开提出了该主张。对数学界而言，可操作的下一步是等待独立复核而非直接采信：他声称论证已在无假设条件下完成形式化，若这一点属实，机器证明检查器便可逐条核验，而在此之前黎曼猜想不应被视为已解决。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Levent_Alp%C3%B6ge">Levent Alpöge - Wikipedia</a></li>
<li><a href="https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypothesis-most-famous-problem-in-all-of-math/">Anthropic mathematician claims to prove Riemann hypothesis , most...</a></li>
<li><a href="https://www.nytimes.com/2026/11/20/science/anthropic-ai-math-riemann-hypothesis.html">Anthropic Mathematician Claims to Solve Riemann Hypothesis With...</a></li>

</ul>
</details>

**标签**: `#AI-assisted mathematics`, `#Riemann Hypothesis`, `#Claude`, `#formal verification`, `#unverified claim`

---

<a id="item-tech-news-6"></a>
### [微软预览 Windows USB4 RDMA，多台 PC 合跑本地模型](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 7.0/10

据 VideoCardz 报道，微软发布了面向 Windows 的 RDMA over USB4 开发者预览，并将通过 Windows Insider 推送；多台 PC 可通过普通 USB4 连接共享内存和 GPU 算力，共同运行同一个本地 AI 模型，无需专用网卡或交换机。演示使用三台搭载 AMD Ryzen AI Max+ 395 的 PC，以 4-bit 量化运行 Qwen3-235B-A22B，达到约 18.5 token/s。

telegram · zaihuapd · 11月21日 06:13

**「背景」** RDMA（远程直接内存访问）此前通常依赖支持 RDMA 的专用网卡与交换机（如 InfiniBand 或 RoCE），才能让一台机器直接读写另一台机器的内存，绕开常规网络协议栈的开销。微软这次的关键变化是把这套机制搬到消费级 USB4 接口上，使多台普通 PC 能共享内存与 GPU 算力，共同承载单个本地大模型。对 Qwen3-235B-A22B 这类远超单机显存/内存容量的模型而言，跨机聚合算力正是本地推理的前提。

**「影响」** 对希望在本机运行超出单机内存或 GPU 算力的大模型的开发者，这意味着可用现有 USB4 端口把多台兼容 PC 组合起来推理，而不必部署专用网络设备；但当前仅是可经 Windows Insider 获取的开发者预览，需要预览版本和兼容的 USB4 连接，约 18.5 token/s 也是三机组合下的演示结果。

**标签**: `#RDMA over USB4`, `#distributed inference`, `#local AI`, `#Windows`, `#AMD Ryzen AI Max+`

---

<a id="item-tech-news-7"></a>
### [OpenRouter 警告 MiniMax 模型提示词疑被第三方读取](https://news.ycombinator.com/item?id=50585962) ⭐️ 7.0/10

OpenRouter 通过邮件通知用户，发往 MiniMax 模型的请求内容可能已被第三方读取。安全研究者在 2026 年 7 月至 10 月间向这些模型发送了内含测试 URL 的提示词，结果第三方在 40 至 130 小时后访问了这些 URL，说明提示词内容可能被下游环节获取。OpenRouter 将问题指向 MiniMax 及其转发方 AtlasCloud、Novita、StreamLake，并已下架相关端点的「零数据保留」标签，建议曾通过这些端点传递敏感凭证的用户更换 API Key 和密码。截至该消息传播时，OpenRouter 官网尚未发布相关公告；上述内容来自二次转述，具体范围和受影响用户数量仍不明确。

telegram · zaihuapd · 11月21日 06:53

**「背景」** 在第三方大模型 API 聚合服务中，“零数据保留”标签用于标示服务方不会存储用户请求内容，是用户判断敏感提示词能否安全发送的重要依据。OpenRouter 会将请求转交给模型提供方及其转发渠道，因此撤下相关端点的该标签，意味着这条链路上的数据保留承诺已不再被标注为有效。

**「影响」** 对曾通过 OpenRouter 向 MiniMax 模型发送含敏感信息提示词的用户而言，相关端点已不再带有“零数据保留”标签，因此不能再把该标签当作提示词不会被例行存储的保证；OpenRouter 同时建议更换 API Key 和密码，涉及生产环境的团队应尽快轮换凭证并核查这些端点的数据策略。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openrouter.ai/docs/guides/features/zdr">Zero Data Retention - How OpenRouter gives you control over your...</a></li>

</ul>
</details>

**标签**: `#AI security`, `#privacy`, `#OpenRouter`, `#MiniMax`, `#API security`

---

## 科技博客

<a id="item-tech-blog-1"></a>
### [输出缓存为何难以降低大模型成本](https://seangoedecke.com/why-output-caching-doesnt-work/) ⭐️ 6.0/10

rss · Sean Goedecke · 11月21日 00:00

**「背景」** 输入缓存（KV cache）通过避免重复计算整段对话历史来降低大模型推理成本，作者由此追问：是否也能用同样思路缓存输出？输出 token 因必须逐个生成而比输入 token 更贵，所以重复输出看起来尤其浪费。

**「方案」** 作者设想的输出缓存并非直接复用生成结果，而是让模型用“src/script.py:12-15”这类引用代替复述代码或历史，再由运行框架展开；这可通过提示或微调实现。问题在于，这种优化只能作用于用户可见的输出。根据作者对自己代理运行记录的估算，可见输出仅约占输出 token 的 6%，推理 token 约占 50%，工具调用约占 44%；即便乐观地省掉可见部分三分之二的 token，总输出也只减少约 4%，这正是阿姆达尔定律的约束：局部优化再大，整体收益仍受该部分占比限制。要真正节省输出 token，必须减少占 94% 的不可见部分，而这主要取决于模型智能：更聪明的模型需要更少推理和工具调用，因此每 token 贵 5 倍的模型若少用 6 倍 token，总成本反而可能更低。作者也承认这些比例来自个人代理历史，关于前沿模型不会在思维链中频繁重复的判断只有中等信心，工具调用是否重复则仍待验证。

**「启示」** 作者的核心结论是，输出缓存只触及可见重复这一小部分，无法成为 LLM 成本优化的主线；降低总成本更应依靠提升模型智能、减少隐式推理和工具调用。

**标签**: `#LLM inference economics`, `#output caching`, `#LLM agents`, `#Amdahl&\#x27;s law`, `#token cost optimization`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [美联储官员发言增多，FOMC 加息分歧加深](https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html) ⭐️ 7.0/10

据美国银行分析，在美联储主席凯文·沃什拒绝提供前瞻指引、联邦公开市场委员会内部对加息分歧加深之际，美联储官员近两周公开发言频率升至 2025 年初以来同期最高。芝商所 FedWatch 显示，交易员认为 12 月至少加息 25 个基点的概率为 100%。

rss · CNBC Finance · 11月20日 21:10

**「背景」** 沃什在就任美联储主席前就公开批评“前瞻指引”，即央行提前向市场暗示未来利率路径的做法，认为这会让市场对美联储产生不必要的依赖，并削弱政策的灵活性（tool-1-1、tool-1-2）。联邦公开市场委员会共有 19 名参与者，通常由主席出面表态，让市场判断鹰派与鸽派哪一方占上风。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theguardian.com/business/live/2026/aug/28/us-federal-reserve-kevin-warsh-jackson-hole-conference-inflation-economy-ftse-stock-markets-latest-updates">US Federal Reserve ’s Kevin Warsh warns there will... | The Guardian</a></li>
<li><a href="https://cryptorank.io/news/feed/eea2b-kevin-warsh-rejects-forward-guidance">Kevin Warsh Stuns Markets: Fed Chair Nominee Rejects Forward ...</a></li>

</ul>
</details>

**标签**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#FOMC communication`, `#forward guidance`

---

<a id="item-finance-news-2"></a>
### [特朗普表态支持卢特尼克，并称希望黄仁勋道歉后回归](https://www.reuters.com/world/us/trump-says-he-still-backs-lutnick-urges-nvidias-huang-apologize-2026-11-20/) ⭐️ 7.0/10

据路透社报道，美国总统特朗普 11 月 20 日表示，仍支持因英伟达对华芯片销售处理而受质疑的商务部长卢特尼克，称其“做得很好”。他还称希望英伟达 CEO 黄仁勋（报道称其已辞职）“郑重道歉后回归”，并称已与中国国家主席习近平谈及此事；特朗普这一说法与财长贝森特称通话未涉及黄仁勋相矛盾。

telegram · zaihuapd · 11月21日 05:03

**「背景」** 英伟达 CEO 黄仁勋于 11 月 12 日因婚外情报道辞职，即刻生效。卢特尼克自 2025 年起担任美国商务部长，其对中国芯片销售的处理正受到外界质疑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://apnews.com/article/nvidia-jensen-huang-resigns-ceo-affairs-314714d463cf578cbb0dbd49de903107">What we know after Jensen Huang resigns as Nvidia CEO</a></li>
<li><a href="https://en.m.wikipedia.org/wiki/Howard_Lutnick">Howard Lutnick - Wikipedia</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#US-China chip policy`, `#Commerce Department`, `#executive resignation`, `#Trump administration`

---