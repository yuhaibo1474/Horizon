---
layout: default
title: "Horizon Summary: 2026-11-21 (EN)"
date: 2026-11-21
lang: en
---

> From 34 items, 10 important content pieces were selected

---

**Technology News**
1. [Vakil releases Masullo&\#x27;s proposed GRH proof early, citing months of review](#item-tech-news-1) ⭐️ 8.0/10
2. [Inkling 2 Mini: open-weight looped transformer for local inference](#item-tech-news-2) ⭐️ 8.0/10
3. [TSMC Said to Suspend 16nm-and-Below Orders From Chinese Firms](#item-tech-news-3) ⭐️ 8.0/10
4. [Zhejiang University reports first on-chip QRAM prototype with 80.9% accuracy](#item-tech-news-4) ⭐️ 8.0/10
5. [Levent Alpöge claims Claude-assisted proof of the Riemann Hypothesis](#item-tech-news-5) ⭐️ 7.0/10
6. [Microsoft previews RDMA over USB4 for multi-PC local AI on Windows](#item-tech-news-6) ⭐️ 7.0/10
7. [OpenRouter warns MiniMax prompts may have been read by third parties](#item-tech-news-7) ⭐️ 7.0/10

**Technology Blog**
1. [Output Caching Misses Most LLM Agent Tokens](#item-tech-blog-1) ⭐️ 6.0/10

**Financial News**
1. [Fed officials speak more as Warsh withholds rate guidance](#item-finance-news-1) ⭐️ 7.0/10
2. [Trump Backs Lutnick Amid Nvidia China Chip Scrutiny, Seeks Huang Apology](#item-finance-news-2) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Vakil releases Masullo&\#x27;s proposed GRH proof early, citing months of review](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 8.0/10

Ravi Vakil has released the current draft of Alessandro Masullo&\#x27;s proposed proof of the Generalized Riemann Hypothesis rather than waiting for a planned year at Stanford to polish the writing and circulate it. Vakil says Brian Conrad has examined the work closely for months and provided extensive feedback that is being incorporated, and that it &\#x27;is so far looking good&\#x27;; he also states that the proof is entirely human, with no AI. The item&\#x27;s title also references an unforced Navier-Stokes singularity, but the supplied excerpt contains only the GRH announcement and gives no details of that claim. Hacker News commenters focus on Lean verification, including a report that two independent kernels accept the result, and on whether a passing formal build establishes the intended theorem.

hackernews · archon1410 · Nov 20, 17:21 · [Discussion](https://news.ycombinator.com/item?id=50578358)

**「Background」** The Generalized Riemann Hypothesis extends the Riemann Hypothesis from the Riemann zeta function to a broader class of L-functions and is a central open problem in number theory. Lean is an interactive theorem prover that checks proofs against a small trusted kernel; the discussion treats kernel acceptance as evidence about the formal proof, not as independent confirmation that the formal statement matches the intended mathematics.

**「Impact」** Mathematicians can now scrutinize the draft before the planned year of polishing and broad circulation, but that early release also means the argument has not had the review path Vakil originally described. For formal-verification readers, the concrete check is whether the Lean statement formalizes the intended GRH claim, since kernel acceptance alone does not settle that question.

**「Community discussion」** Commenters treat the Lean checks as meaningful but not dispositive: one reports that two independent kernels accept the result, suggesting no kernel-bug exploitation, while another asks how a 15-million-line Lean build can be shown to prove the intended claim rather than something trivial, comparing it to Rust compiling without guaranteeing business logic. A separate thread asks whether the ability to generate language and verify proofs can create new abstractions such as the Langlands program, or mainly works within existing ones.

**Tags**: `#formal verification`, `#Lean theorem prover`, `#AI-assisted mathematics`, `#Navier-Stokes`, `#Riemann Hypothesis`

---

<a id="item-tech-news-2"></a>
### [Inkling 2 Mini: open-weight looped transformer for local inference](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Inkling 2 Mini, an open-weight model built on a looped-transformer architecture, was published on thinkingmachines.ai on November 20, 2026. Commenters describe its published benchmarks as reaching the level of Qwen3.8-27B, and a team note quoted from Reddit says the sizing was chosen for local use and that training was done end-to-end in nvfp4 — vendor claims that have not been independently verified here. Local runs reported in the thread include roughly 27 tokens/s decode on a Ryzen 395 via llama.cpp with the Vulkan backend, and about 10 tokens/s for a Q4 build on a 32GB M1 Pro MacBook while other applications were running. The release drew attention because openly documented looped architectures remain rare, with comparable designs at other labs only rumored.

hackernews · jasondavies · Nov 20, 20:12 · [Discussion](https://news.ycombinator.com/item?id=50581260)

**「What a looped transformer is」** A looped transformer reuses the same shared block of layers across several passes rather than allocating a distinct set of layers for every step, so it can add computation depth without a proportional increase in parameter count. That tradeoff is relevant to local inference, where memory is dominated by weight storage and the extra repeated passes cost time rather than RAM.

**「Local deployment and setup friction」** Because the model is around 26B total parameters with only a few billion active per token, it is small enough to run on a MacBook or an NVIDIA DGX Spark, and one commenter reports roughly 10 tokens/s on a 32GB M1 Pro at q4 and about 27 tokens/s on a Ryzen 395 through llama.cpp&\#x27;s Vulkan backend. That llama.cpp path currently depends on several unmerged PRs plus a small patch the same commenter says gives about a 30% speedup, so expect setup work before mainstream tooling support arrives.

**「Community discussion」** Practitioners report that llama.cpp needs several unmerged PRs \(32694, 32657, 32429, 32704\) plus a small llama-graph.cpp patch for about a 30% speed boost, so out-of-the-box throughput may lag the figures quoted. Early hands-on results were mixed: a commenter said a CSV-sorting coding prompt was handled well, while the same tester&\#x27;s coin-identification prompt produced a long failure, and another called the model interesting but stopped short of endorsing it after testing in Unsloth&\#x27;s &quot;extra high&quot; thinking mode.

<details><summary>References</summary>
<ul>
<li><a href="https://artificialanalysis.ai/articles/inkling-2-mini">Thinking Machines has released Inkling 2 Mini, an open weights ...</a></li>
<li><a href="https://openrouter.ai/thinkingmachines/inkling-2-mini">Inkling 2 Mini - API Pricing &amp; Benchmarks | OpenRouter</a></li>

</ul>
</details>

**Tags**: `#AI models`, `#open weights`, `#local inference`, `#transformer architecture`, `#llama.cpp`

---

<a id="item-tech-news-3"></a>
### [TSMC Said to Suspend 16nm-and-Below Orders From Chinese Firms](https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls) ⭐️ 8.0/10

TSMC has reportedly notified customers that it is suspending orders from Chinese companies for 16nm-and-below processes, citing tighter U.S. semiconductor export rules. Under the reported change, supplies would require a prior U.S. export license or exemption instead of TSMC assessing whether a customer&\#x27;s design qualifies. The source says Chinese companies are therefore limited to older 28nm and 40nm processes and cannot obtain high-bandwidth memory needed for AI data centers. Apple, AMD, and Nvidia are said to be on the U.S. approved list, with no Chinese companies listed; TSMC said it will comply with the rules. The claims come via a Telegram aggregator and were not independently verified in the supplied material.

telegram · zaihuapd · Nov 21, 02:01

**「Why TSMC&\#x27;s order policy gates Chinese chip design」** TSMC is a dedicated contract foundry, manufacturing chips designed by other companies rather than its own products, which is why its compliance decisions directly determine which process nodes fabless Chinese chip designers can access. According to the source, TSMC previously assessed on its own whether a customer&\#x27;s design qualified for a US exemption; under the tightened rules it must now wait for customers to obtain a US export license or exemption in advance, and the approved list so far includes Apple, AMD and Nvidia but no Chinese companies.

**「Impact」** According to the report, Chinese chip designers that rely on TSMC at 16nm and below must now obtain a US export license or exemption before orders can be filled, since the approved list includes Apple, AMD and Nvidia but no Chinese companies. Those affected are left with older 28nm and 40nm processes, and the report says they also lose access to the high-bandwidth memory needed for AI datacenter hardware.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/TSMC">TSMC - Wikipedia</a></li>
<li><a href="https://www.tsmc.com/english">Taiwan Semiconductor Manufacturing Company Limited - TSMC</a></li>

</ul>
</details>

**Tags**: `#semiconductors`, `#export-controls`, `#TSMC`, `#China`, `#AI-hardware`

---

<a id="item-tech-news-4"></a>
### [Zhejiang University reports first on-chip QRAM prototype with 80.9% accuracy](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

A Zhejiang University team reports it has demonstrated a quantum random access memory \(QRAM\) prototype on its own superconducting chip, &quot;Tianmu 2,&quot; described as the first real-machine implementation of the architecture and published in Nature Physics. The prototype retrieved 4-bit and 8-bit data with accuracies of 80.9% and 60.4%, respectively. The team says its circuit design cut line depth by more than 30% compared with an unoptimized scheme and that the experiment provided the first validation of the architecture&\#x27;s local noise resilience. The group&\#x27;s stated next step is scaling the QRAM design; the reported figures come from a brief secondary summary rather than an independent replication.

telegram · zaihuapd · Nov 21, 08:31

**「What QRAM is」** QRAM is a proposed form of quantum memory that would let an algorithm fetch stored data from addresses held in superposition, a capability assumed by many quantum algorithms that need fast random access to classical data. Building such memory on real hardware — rather than in proposal or simulation — has been the outstanding step, and the Zhejiang University team presents its Tianmu 2 experiment as the first real-machine implementation, published in Nature Physics.

**「Impact」** The sharp drop from 80.9% to 60.4% accuracy as retrieval width doubles indicates that fidelity, not just qubit count, is the immediate bottleneck for anyone hoping to use QRAM as a memory layer in quantum algorithms. The reported &gt;30% reduction in circuit depth is the practically useful lever here, since shallower circuits are less exposed to decoherence on current superconducting hardware.

**Tags**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#hardware`, `#research`

---

<a id="item-tech-news-5"></a>
### [Levent Alpöge claims Claude-assisted proof of the Riemann Hypothesis](https://simonwillison.net/2026/Nov/20/levent-alpoge/) ⭐️ 7.0/10

In a short note posted at alpo.ge/remark.pdf and quoted by Simon Willison on November 20, Levent Alpöge says he believes he has, working with Claude, discovered a proof of the Riemann Hypothesis. He states that the method &quot;easily extends&quot; to the Generalized Riemann Hypothesis and that he expects the Extended Riemann Hypothesis to fall with more time, and asserts that he and Claude formalized the arguments &quot;without assumptions.&quot; The item reproduces only that quotation: it supplies no proof sketch, no link to a formalization artifact, and no independent verification, so neither the mathematical claim nor the asserted formalization can be checked from the available material.

rss · Simon Willison · Nov 20, 16:30

**「Background」** Levent Alpöge is a mathematician known for work in number theory and arithmetic statistics, according to Wikipedia. The Riemann Hypothesis is a longstanding open conjecture about the zeros of the Riemann zeta function, and the Generalized Riemann Hypothesis extends the same question to a broader class of L-functions. Formalization means encoding a proof so that a proof assistant can machine-check its steps.

**「Verification still required」** Mathematicians and formal-proof reviewers have no basis yet to rely on the claimed proof: the announcement provides no proof sketch, formal artifact, or independent check of the asserted assumption-free formalization. Any practical use should wait for expert verification of the formal argument.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Levent_Alp%C3%B6ge">Levent Alpöge - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#AI-assisted mathematics`, `#Riemann Hypothesis`, `#Claude`, `#formal verification`, `#unverified claim`

---

<a id="item-tech-news-6"></a>
### [Microsoft previews RDMA over USB4 for multi-PC local AI on Windows](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 7.0/10

Microsoft released a developer preview of RDMA over USB4 for Windows that lets multiple PCs share memory and GPU compute to run a single local AI model over ordinary USB4 connections, without a dedicated network card or switch. In a demonstration, three AMD Ryzen AI Max+ 395 systems ran Qwen3-235B-A22B at 4-bit quantization at about 18.5 tokens per second. The preview is being distributed through Windows Insider.

telegram · zaihuapd · Nov 21, 06:13

**「Background」** RDMA \(remote direct memory access\) lets one machine read and write another machine&\#x27;s memory without the remote CPU or operating system mediating each transfer, which is why it is used for tightly coupled workloads such as distributed inference. It has traditionally required specialised network hardware — InfiniBand or RDMA-capable Ethernet with switches. USB4 tunnels PCIe, so peer-to-peer memory access can in principle run over an ordinary consumer cable, which is the mechanism this preview puts to use.

**「Impact」** Developers with USB4-equipped PCs can experiment with distributed local inference using Windows Insider builds rather than specialized networking hardware, though the demonstrated throughput is modest and the setup remains an early preview.

**Tags**: `#RDMA over USB4`, `#distributed inference`, `#local AI`, `#Windows`, `#AMD Ryzen AI Max+`

---

<a id="item-tech-news-7"></a>
### [OpenRouter warns MiniMax prompts may have been read by third parties](https://news.ycombinator.com/item?id=50585962) ⭐️ 7.0/10

OpenRouter has reportedly emailed users warning that prompts sent to MiniMax models may have been read by third parties, and it removed the “zero-data-retention” label from affected endpoints. Security researchers sent prompts containing test URLs to MiniMax models between July and October 2026; third parties accessed those URLs 40 to 130 hours later, according to the notice. OpenRouter attributed the problem to MiniMax and its forwarding providers AtlasCloud, Novita and StreamLake, and advised users who may have exposed sensitive credentials to rotate API keys and passwords. The details come from a secondary Telegram summary; OpenRouter had not published related information on its website at the time, so the scope and mechanism remain unconfirmed.

telegram · zaihuapd · Nov 21, 06:53

**「Context」** OpenRouter routes API requests to multiple model providers and attaches data-retention labels to endpoints, including a zero-data-retention designation. Such a label is meant to signal that prompts are not retained, a key consideration for developers sending credentials or other sensitive data through third-party LLM APIs.

**「Impact」** Users who chose MiniMax endpoints specifically because they carried OpenRouter&\#x27;s Zero Data Retention label can no longer treat those routes as no-storage: the label was removed, and OpenRouter&\#x27;s own documentation defines ZDR as no routine storage of prompts or responses after processing. Because the suspected exposure is historical — test URLs were fetched 40 to 130 hours after the prompts were sent, per the notice — rotating API keys and any credentials that appeared in past prompts is the remediation step the report attributes to OpenRouter, rather than a precaution against future requests only.

<details><summary>References</summary>
<ul>
<li><a href="https://openrouter.ai/docs/guides/features/zdr">Zero Data Retention - How OpenRouter gives you control over your...</a></li>

</ul>
</details>

**Tags**: `#AI security`, `#privacy`, `#OpenRouter`, `#MiniMax`, `#API security`

---

## Technology Blog

<a id="item-tech-blog-1"></a>
### [Output Caching Misses Most LLM Agent Tokens](https://seangoedecke.com/why-output-caching-doesnt-work/) ⭐️ 6.0/10

rss · Sean Goedecke · Nov 21, 00:00

**「Background」** Input caching is a standard LLM cost optimization: it avoids recomputing the conversation history on every turn. It is tempting to treat repeated output the same way, since agents often restate code snippets, evidence documents, or sample model outputs that the user could otherwise look up.

**「Solution」** The author considers having models emit references to files or earlier conversation segments instead of repeating them, with the harness expanding those references for the user. But this only optimizes visible output. From his own agent histories, he estimates that visible output is about 6% of output tokens, while reasoning tokens are about 50% and tool calls about 44%. Amdahl&\#x27;s law then caps the gain: even saving two-thirds of visible output, an optimistic estimate, would cut only about 4% of total output tokens. The larger target is the invisible 94%, which the author argues depends mainly on model intelligence: smarter models need fewer reasoning tokens and tool calls. That explains why a model charging 5x more per token can be cheaper overall if it reaches the answer with 6x fewer tokens. The author flags the visible-token estimate and the claim that frontier models rarely repeat themselves internally as personal, moderately confident judgments rather than measured facts.

**「Takeaway」** Output caching is a poorly aimed LLM cost optimization because most output tokens are invisible reasoning and tool calls, not repeatable visible text. The author&\#x27;s broader point is that reducing output cost depends more on model intelligence and fewer tokens than on caching repetition.

**Tags**: `#LLM inference economics`, `#output caching`, `#LLM agents`, `#Amdahl&\#x27;s law`, `#token cost optimization`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Fed officials speak more as Warsh withholds rate guidance](https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html) ⭐️ 7.0/10

Federal Reserve officials have offered more public commentary in the past two weeks than in any comparable period since the start of 2025, according to a Bank of America analysis, as the FOMC splits over rate hikes and Chair Kevin Warsh avoids forward guidance. Traders are pricing a 100% chance of at least a quarter-point hike at the December meeting, according to CME Group&\#x27;s FedWatch.

rss · CNBC Finance · Nov 20, 21:10

**「Background」** Warsh has argued that forward guidance—publicly signaling where interest rates are headed—creates unnecessary market dependency and reduces the Fed’s flexibility to change course. The Fed’s October decision to leave rates unchanged, and minutes showing some hike supporters would have accepted that only with clear signals of further tightening, made his no-guidance stance a focus of the current debate.

<details><summary>References</summary>
<ul>
<li><a href="https://cryptorank.io/news/feed/eea2b-kevin-warsh-rejects-forward-guidance">Kevin Warsh Stuns Markets: Fed Chair Nominee Rejects Forward ...</a></li>

</ul>
</details>

**Tags**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#FOMC communication`, `#forward guidance`

---

<a id="item-finance-news-2"></a>
### [Trump Backs Lutnick Amid Nvidia China Chip Scrutiny, Seeks Huang Apology](https://www.reuters.com/world/us/trump-says-he-still-backs-lutnick-urges-nvidias-huang-apologize-2026-11-20/) ⭐️ 7.0/10

President Trump said on Nov. 20 that he still backs Commerce Secretary Lutnick over his handling of Nvidia&\#x27;s China chip sales, and said he hopes Jensen Huang—described in the report as having resigned as Nvidia CEO—will apologize and return. Trump said he discussed the matter with Xi Jinping, an account the report says conflicts with Treasury Secretary Bessent&\#x27;s statement that the call did not involve Huang.

telegram · zaihuapd · Nov 21, 05:03

**「Background」** Nvidia CEO Jensen Huang resigned effective immediately on Nov. 12, 2026, after reports of extramarital affairs, creating the leadership turmoil referenced in Trump’s remarks; Howard Lutnick has served as U.S. commerce secretary since 2025.

<details><summary>References</summary>
<ul>
<li><a href="https://apnews.com/article/nvidia-jensen-huang-resigns-ceo-affairs-314714d463cf578cbb0dbd49de903107">What we know after Jensen Huang resigns as Nvidia CEO</a></li>
<li><a href="https://en.m.wikipedia.org/wiki/Howard_Lutnick">Howard Lutnick - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#Nvidia`, `#US-China chip policy`, `#Commerce Department`, `#executive resignation`, `#Trump administration`

---