---
layout: default
title: "Horizon Summary: 2026-11-21 (EN)"
date: 2026-11-21
lang: en
---

> From 34 items, 10 important content pieces were selected

---

**Technology News**
1. [Inkling 2 Mini open-weights release draws local-inference tests](#item-tech-news-1) ⭐️ 8.0/10
2. [Zhejiang University reports first QRAM prototype on a superconducting chip](#item-tech-news-2) ⭐️ 8.0/10
3. [arXiv preprint claims a model can rewrite its own weights without training](#item-tech-news-3) ⭐️ 7.0/10
4. [Terry Tao Post Links Unforced Navier–Stokes Singularity to Generalized Riemann Hypothesis](#item-tech-news-4) ⭐️ 7.0/10
5. [TSMC Reportedly Suspends 16nm-and-Below Orders From Chinese Firms](#item-tech-news-5) ⭐️ 7.0/10
6. [Microsoft previews RDMA over USB4 to pool PCs for local AI](#item-tech-news-6) ⭐️ 7.0/10
7. [OpenRouter Warns MiniMax Prompts May Have Been Read by Third Parties](#item-tech-news-7) ⭐️ 7.0/10

**Technology Blog**
1. [Why Output Caching Barely Dents Agent Token Costs](#item-tech-blog-1) ⭐️ 7.0/10

**Financial News**
1. [Fed officials speak more as Warsh avoids rate guidance](#item-finance-news-1) ⭐️ 7.0/10
2. [Trump backs Lutnick, seeks Huang apology and return](#item-finance-news-2) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Inkling 2 Mini open-weights release draws local-inference tests](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Inkling 2 Mini has been released as an open-weights model, with community testers reporting local runs and describing a looped transformer architecture. Throughput reports include about 27 tokens/s decode on a Ryzen 395 using llama.cpp Vulkan and roughly 10 tokens/s on a 32GB M1 Pro at q4. Claims that its benchmarks approach a model identified as Qwen3.8-27B remain unverified, and one tester recommended unmerged llama.cpp pull requests plus a small patch claimed to add about 30% speed.

hackernews · jasondavies · Nov 20, 20:12 · [Discussion](https://news.ycombinator.com/item?id=50581260)

**「Background」** Thinking Machines already publishes the Inkling family of open-weights models for text, images, and audio \(tool-2-3\); Inkling 2 Mini is a 26B-parameter image-text-to-text member of that line \(tool-2-2\). Its distinguishing design is that it reuses \(&quot;loops&quot;\) its middle layers rather than adding new ones, spending more computation per token in order to reach answers in fewer tokens \(tool-2-1\). That architectural choice is what the release materials present as the model&\#x27;s efficiency mechanism, though the benchmark and local-inference claims themselves remain unverified in the supplied material.

**「Impact」** For local users, the release&\#x27;s practical value hinges on llama.cpp support: testers pointed to unmerged PRs 32694, 32657, 32429, and 32704, plus a source patch claimed to yield about 30% faster decode. Until those changes land in standard builds, throughput on Vulkan and Apple hardware will vary by setup, as the 27 tokens/s and 10 tokens/s reports already show.

**「Community Discussion」** The comments mixed enthusiasm for an open-weights looped architecture with uneven hands-on results: one tester called a Python sorting task successful, while another&\#x27;s coin-identification test failed after about 12,000 tokens of speculation. Discussion focused on concrete llama.cpp fixes and per-device throughput rather than agreement on the benchmark claims.

<details><summary>References</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://huggingface.co/thinkingmachines/Inkling-2-Mini">thinkingmachines/Inkling-2-Mini - Hugging Face</a></li>
<li><a href="https://thinkingmachines.ai/inkling/">Inkling - Thinking Machines Lab</a></li>

</ul>
</details>

**Tags**: `#open-weights models`, `#transformer architecture`, `#local LLM inference`, `#llama.cpp`, `#model release`

---

<a id="item-tech-news-2"></a>
### [Zhejiang University reports first QRAM prototype on a superconducting chip](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

Researchers at Zhejiang University report implementing a quantum random-access memory \(QRAM\) prototype on a superconducting quantum chip they call &quot;Tianmu 2,&quot; describing it as the first real-machine QRAM demonstration; the work was published in Nature Physics. The prototype retrieved 4-bit data with 80.9% accuracy and 8-bit data with 60.4%, while using a circuit depth more than 30% lower than an unoptimized approach. The team also reports the first validation that the architecture has local noise resilience and says its next step is scaling QRAM. These are the team&\#x27;s reported prototype results, not an independently verified or fault-tolerant QRAM.

telegram · zaihuapd · Nov 21, 08:31

**「Background」** QRAM, or quantum random-access memory, is a memory architecture that lets a quantum processor address stored data. The reported prototype ran on Zhejiang University&\#x27;s Tianmu-2 superconducting chip, which search context describes as a 125-bit device.

**「Impact」** The consequence lands first on algorithm designers who treat QRAM as the data-loading primitive for linear-algebra and search routines: the reported prototype is not yet dependable memory, since retrieval accuracy drops from 80.9% at 4 bits to 60.4% at 8 bits as the address space grows. Anyone planning to build on this architecture must budget for error correction or repeated queries, and should track the team&\#x27;s stated next step of scaling the device rather than assume the current chip supports reliable multi-bit addressing.

<details><summary>References</summary>
<ul>
<li><a href="https://min.news/en/science/9d612a3843afe20d520f8cd04c93ff5a.html">Tsinghua University team collaborates with Nature to achieve first...</a></li>

</ul>
</details>

**Tags**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#quantum memory`, `#hardware research`

---

<a id="item-tech-news-3"></a>
### [arXiv preprint claims a model can rewrite its own weights without training](https://arxiv.org/abs/2611.21885) ⭐️ 7.0/10

An arXiv preprint \(2611.21885\) claims a language model can rewrite its own weights through its own reasoning and improve, with no gradients and no conventional training — described in the paper&\#x27;s abstract, as quoted by commenters, as a first. Under that described protocol, the model tests each candidate weight edit on practice problems and submits only what works, with accuracy reportedly rising across eight consecutive sessions. No paper text was supplied with this item, so the model used, the benchmarks, and the size of the claimed gains could not be checked here. The work is a preprint claim rather than an independently reproduced result.

hackernews · lwhsiao · Nov 20, 16:29 · [Discussion](https://news.ycombinator.com/item?id=50577265)

**「Background」** Recent work has already explored repairing a language model by editing its weights directly rather than retraining it with gradients. A related paper, Tree-Ising, reports that a GPT-6 Astra agent corrected reasoning loops in Qwen3.5-0.8B without gradients over 158 agent turns, 89.7 million tokens and 50 forward-pass requests, framing the repair as sparse discrete optimization over the model’s BF16 weights \[tool-2-2\]. That prior result provides a baseline for assessing the new claim that a model can rewrite its own weights through reasoning alone.

**「Community discussion」** Commenters questioned how general the improvement is: aesthesia argued the only self-modification that helped was shortening the model&\#x27;s reasoning traces to avoid a token limit, and said this overlaps with a recent weight-space programming write-up that found a model could not improve performance without such an obvious flaw, while gavinray noted Google&\#x27;s Sleep framework already updates weights using self-generated practice examples offline. LarsDu88 raised a safety objection, arguing that an autonomous model with weight access could in principle target activations tied to safety behavior and suppress them, and that later generations of such a model could then be deployed.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/papers/2611.14210">Paper page - Tree-Ising: Repairing Language Models with Bit-Level...</a></li>

</ul>
</details>

**Tags**: `#language models`, `#weight editing`, `#self-improvement`, `#AI safety`, `#arXiv`

---

<a id="item-tech-news-4"></a>
### [Terry Tao Post Links Unforced Navier–Stokes Singularity to Generalized Riemann Hypothesis](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 7.0/10

Terry Tao published a blog post titled “Unforced Navier–Stokes Singularity and the Generalized Riemann Hypothesis,” which also refers to an unforced Euler singularity. The item drew Hacker News discussion centered on Lean formal verification and AI-assisted proof work rather than on details of the mathematical argument. The post text was not supplied, so its specific claims and whether they amount to a proof cannot be assessed here.

hackernews · archon1410 · Nov 20, 17:21 · [Discussion](https://news.ycombinator.com/item?id=50578358)

**「Background」** OpenAI published an AI-generated solution to the Navier–Stokes Millennium Prize problem in September 2026, including a writeup and a formal proof in Lean. On 20 November 2026, Tristan Buckmaster and Levent Alpöge posted an AI-assisted proof that the unforced 3D incompressible Navier–Stokes equations blow up in finite time; the pair say it closes a loophole in OpenAI&\#x27;s September solution, and Terence Tao writes that the argument has a Lean formalization but still needs more work to become a professionally written paper.

**「Impact」** For mathematicians and Lean users, the thread points to a practical validation gap: a passing build or kernel acceptance verifies a formal statement, while independent kernel checks reduce the risk of a checker bug but not the risk that the formal statement misstates the intended theorem.

**「Community discussion」** Commenters debated whether Lean verification confirms the intended theorem rather than merely a passing formal statement; one reported that two independent kernels accepted the result. Another thread asked whether AI-assisted proof work can create new mathematical abstractions, such as those behind the Langlands program, rather than only exploit existing ones.

<details><summary>References</summary>
<ul>
<li><a href="https://letsdatascience.com/news/buckmaster-and-alpoge-post-ai-aided-proof-of-unforced-navier-fcca1e31">Buckmaster and Alpöge post AI-aided proof of unforced Navier ...</a></li>
<li><a href="https://openai.com/index/navier-stokes-solution/">On the Navier–Stokes Millennium Prize Problem | OpenAI</a></li>

</ul>
</details>

**Tags**: `#formal verification`, `#Lean`, `#mathematics`, `#AI-assisted proof`, `#Navier-Stokes`

---

<a id="item-tech-news-5"></a>
### [TSMC Reportedly Suspends 16nm-and-Below Orders From Chinese Firms](https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls) ⭐️ 7.0/10

TSMC has reportedly told customers it is suspending orders from Chinese companies for 16nm-and-below advanced processes unless they first obtain a US export license or exemption under tightened US semiconductor rules. The change ends TSMC&\#x27;s prior ability to assess on its own whether a customer&\#x27;s design qualified for an exemption; Chinese customers must now apply in advance. The reported restrictions leave Chinese firms with older 28nm and 40nm processes and cut off access to high-bandwidth memory needed for AI data centers, according to the report. The US approved list includes Apple, AMD, and Nvidia but no Chinese companies; TSMC said it will comply with the rules.

telegram · zaihuapd · Nov 21, 02:01

**「Background」** US export controls already required licenses for advanced chips destined for China, but TSMC had been permitted to judge for itself whether a customer&\#x27;s design met the exemption criteria. Under the tightened rules, that assessment moves to the US government: Chinese customers must obtain a license in advance, and the approved list cited in coverage includes Apple, AMD and Nvidia but no Chinese firms \(tool-2-1\). The shift is not confined to one foundry — the Financial Times reported that Samsung Electronics also suspended some chip shipments to Chinese customers after the new controls took effect \(tool-2-2\).

**「Impact」** Chinese chip designers now need a US export license or exemption before taping out at 16nm and below, and unlike the earlier arrangement — where TSMC itself assessed whether a customer&\#x27;s design qualified — the customer must apply in advance, which adds licensing lead time to any advanced-node project. Without approvals, those firms are pushed back to 28nm and 40nm-class processes and lose access to the high-bandwidth memory required for AI data-center parts, while approved customers such as Apple, AMD and Nvidia keep their slots. Demand for restricted HBM has already been flowing through gray-market brokers, as Tom&\#x27;s Hardware has reported, so further tightening shifts sourcing toward unofficial channels rather than eliminating it.

<details><summary>References</summary>
<ul>
<li><a href="https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls">TSMC has suspended some chip orders amid tighter export controls</a></li>
<li><a href="https://www.ft.com/content/d42dd235-7b0e-4651-a8d2-f7b7b4963a74?syn-25a6b1a6=1">TSMC and Samsung suspend some chip shipments to Chinese customers</a></li>
<li><a href="https://www.tomshardware.com/tech-industry/semiconductors/ai-chip-smugglers-exploit-trade-control-loophole-to-bring-banned-hbm-from-south-korea-into-china-expensive-memory-chips-packaged-with-cheap-unsanctioned-processors-to-become-legal-exports">AI chip smugglers exploit trade control loophole to bring banned HBM ...</a></li>

</ul>
</details>

**Tags**: `#semiconductors`, `#export-controls`, `#TSMC`, `#AI-hardware`, `#supply-chain`

---

<a id="item-tech-news-6"></a>
### [Microsoft previews RDMA over USB4 to pool PCs for local AI](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 7.0/10

Microsoft has published a developer preview of RDMA over USB4 for Windows that lets multiple PCs share memory and GPU compute to run a single local large language model without a dedicated network card or switch. In a demonstration, three AMD Ryzen AI Max+ 395 systems ran Qwen3-235B-A22B at 4-bit quantization at roughly 18.5 tokens per second. The preview is to be distributed through Windows Insider. The performance figure comes from a vendor demonstration reported by VideoCardz; supported hardware beyond the demo systems and a general-availability date were not stated.

telegram · zaihuapd · Nov 21, 06:13

**「Background」** RDMA \(remote direct memory access\) lets one machine read and write another machine&\#x27;s memory directly, bypassing the normal CPU and operating-system networking path; conventional deployments rely on specialized network adapters. Microsoft&\#x27;s developer preview applies that mechanism to USB4 links between Windows PCs, allowing compatible AI software to split a model across machines and pool their memory. The demonstration used Qwen3-235B-A22B, a 235-billion-parameter mixture-of-experts model whose 4-bit footprint exceeds what a single one of the three Ryzen AI Max+ 395 systems can hold.

**「Impact」** For developers and enthusiasts with USB4-equipped PCs, the preview points to a way to run models too large for any single machine&\#x27;s memory by combining several consumer systems. Practical use is constrained: the demonstration used specific AMD Ryzen AI Max+ 395 hardware, requires a Windows Insider build, and reached only about 18.5 tokens/s with a 4-bit 235B model, so throughput and broader hardware compatibility remain unverified.

<details><summary>References</summary>
<ul>
<li>Introducing RDMA over USB4® on Windows: run larger local AI models ...</li>
<li>Microsoft previews linking Windows PCs over USB4 to run larger AI ...</li>

</ul>
</details>

**Tags**: `#RDMA`, `#USB4`, `#local AI inference`, `#Windows`, `#distributed inference`

---

<a id="item-tech-news-7"></a>
### [OpenRouter Warns MiniMax Prompts May Have Been Read by Third Parties](https://news.ycombinator.com/item?id=50585962) ⭐️ 7.0/10

OpenRouter emailed users warning that requests sent to MiniMax models may have been readable by third parties, according to the notice described in the report. A security researcher sent prompts containing test URLs to MiniMax models between July and October 2026, and third parties accessed those URLs 40 to 130 hours later. OpenRouter attributed the issue to MiniMax and its forwarding providers AtlasCloud, Novita, and StreamLake, and said it removed the “zero data retention” label from the affected endpoints. It advised users who may have exposed sensitive credentials to rotate API keys and passwords; OpenRouter had not published the warning on its website at the time of the report.

telegram · zaihuapd · Nov 21, 06:53

**「What the zero-data-retention label covers」** OpenRouter is a routing layer that sends a single API call to whichever upstream provider serves the chosen model, and its &quot;zero data retention&quot; badge is meant to signal that the endpoint does not keep prompts after a request completes. The evidence behind the warning comes from a canary technique — unique URLs planted in prompts that log when anything fetches them — which reporting describes as an established method for testing whether a provider retains and later reads request content. Because MiniMax traffic is forwarded through AtlasCloud, Novita and StreamLake, the retention question spans those intermediaries as well as the model vendor.

**「Practical consequence」** For teams that relied on OpenRouter’s zero-data-retention label when sending sensitive prompts to affected MiniMax endpoints, the label’s removal means they should treat those prompts as potentially exposed, rotate any API keys or passwords included in them, and verify an endpoint’s data-policy tier before resuming confidential workloads.

<details><summary>References</summary>
<ul>
<li><a href="https://startupfortune.com/openrouter-warns-minimax-prompts-may-have-been-read-by-a-third-party/">OpenRouter warns MiniMax prompts may have been read by a ...</a></li>
<li><a href="https://thecybersecguru.com/news/openrouter-minimax-zero-data-retention-canary-prompts/">OpenRouter MiniMax exposure: why zero data retention labels ...</a></li>
<li><a href="https://www.kucoin.com/news/flash/minimax-zero-data-retention-policy-found-to-leak-user-prompt-links">MiniMax&#x27;s &quot;Zero Data Retention&quot; Policy Found to Leak User ...</a></li>
<li><a href="https://www.kucoin.com/news/flash/minimax-zero-data-retention-policy-exposed-after-user-prompt-links-accessed-by-third-parties">MiniMax&#x27;s &quot;Zero Data Retention&quot; Policy Revealed ... - KuCoin</a></li>
<li><a href="https://openrouter.ai/docs/guides/features/zdr">Zero Data Retention - How OpenRouter gives you control over ...</a></li>

</ul>
</details>

**Tags**: `#AI security`, `#data privacy`, `#LLM APIs`, `#OpenRouter`, `#MiniMax`

---

## Technology Blog

<a id="item-tech-blog-1"></a>
### [Why Output Caching Barely Dents Agent Token Costs](https://seangoedecke.com/why-output-caching-doesnt-work/) ⭐️ 7.0/10

rss · Sean Goedecke · Nov 21, 00:00

**「Background」** LLM inference economics relies on caching inputs in the KV cache so the entire conversation history is not recomputed on every message. The author asks whether caching model outputs could similarly reduce repeated work, since coding agents often repeat code snippets, evidence documents, or sample outputs in their visible responses.

**「Solution」** The proposed mechanism would prompt or fine-tune a coding model to emit references such as “src/script.py:12-15” or point to earlier conversation history instead of regurgitating content, with the harness transparently expanding those references. The author argues this is misguided because it optimizes only visible output. From his own agent histories, he roughly estimates that visible output is about 6% of output tokens, while reasoning tokens account for 50% and tool calls 44%. By Amdahl’s law, even saving two-thirds of visible tokens would cut only about 4% of total output tokens. The remaining 94% depends largely on model intelligence: smarter models need fewer reasoning and tool-call tokens, so a model that costs 5x more per token but uses 6x fewer tokens can be cheaper overall. The author is only moderately confident that frontier models rarely repeat themselves in chain of thought, and invites readers with better data on tool-call repetition to respond.

**「Takeaway」** Output caching targets a small fraction of agent token spend. The author concludes that reducing hidden reasoning and tool-call tokens through smarter models and better harnesses is the more meaningful lever than de-duplicating visible output.

**Tags**: `#LLM inference economics`, `#output caching`, `#Amdahl&\#x27;s law`, `#reasoning tokens`, `#coding agents`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Fed officials speak more as Warsh avoids rate guidance](https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html) ⭐️ 7.0/10

Federal Reserve officials are speaking more often and openly debating near-term rate increases even as Chairman Kevin Warsh avoids signaling the policy path. A Bank of America analysis found more Fed commentary in the past two weeks than in any comparable period since the start of 2025, with Governor Christopher Waller raising the possibility of a half-point hike in December.

rss · CNBC Finance · Nov 20, 21:10

**「Background」** Warsh, in his first six months as chairman, has argued that forward guidance—public signals about future policy—can lock policymakers in prematurely; the resulting gap has left other FOMC participants to air conflicting views.

**「Impact」** Traders are pricing a 100% chance of at least a quarter-point increase in December, according to CME Group&\#x27;s FedWatch, a market-implied move that would raise costs for borrowers tied to the Fed&\#x27;s benchmark rate.

**Tags**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#FOMC`, `#Kevin Warsh`

---

<a id="item-finance-news-2"></a>
### [Trump backs Lutnick, seeks Huang apology and return](https://www.reuters.com/world/us/trump-says-he-still-backs-lutnick-urges-nvidias-huang-apologize-2026-11-20/) ⭐️ 7.0/10

President Trump said on Nov. 20 that he still supports Commerce Secretary Howard Lutnick amid scrutiny of Nvidia&\#x27;s China chip sales, and that he wants Jensen Huang to apologize and return after resigning as Nvidia CEO, Reuters reported. Trump also said he discussed the matter with Chinese President Xi Jinping, while Treasury Secretary Scott Bessent said the call did not involve Huang, according to the report.

telegram · zaihuapd · Nov 21, 05:03

**「Background」** Nvidia CEO Jensen Huang resigned after 33 years following reports of extramarital affairs, including an alleged relationship with a woman suspected of having ties to Chinese intelligence, amid scrutiny of Commerce Secretary Howard Lutnick’s handling of Nvidia chip sales to China.

**「Impact」** Nvidia and its Chinese customers are directly exposed because Commerce Department export decisions, now under scrutiny, determine which advanced AI chips can be shipped.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/11/16/trump-lutnick-nvidia-national-security-jensen-huant.html">Trump says he&#x27;s OK with Jensen Huang returning as Nvidia CEO</a></li>
<li><a href="https://www.aa.com.tr/en/americas/top-us-senate-democrat-accuses-trump-of-putting-national-security-at-risk-with-ai-chip-sales-to-china/4132631">Anadolu Ajansı: Top US Senate Democrat accuses Trump of putting...</a></li>
<li><a href="https://www.axios.com/2026/11/11/trump-lutnick-nvidia-china-chip-export-controls">Trump backed Nvidia chip controls aimed at China 3 times as ...</a></li>
<li><a href="https://www.npr.org/2026/11/14/nx-s1-6040379/commerce-department-under-pressure-for-delaying-export-controls-on-nvidia-chips">Commerce Department under pressure for delaying export ...</a></li>

</ul>
</details>

**Tags**: `#US-China tech policy`, `#semiconductor export controls`, `#Nvidia`, `#Commerce Department`, `#corporate leadership`

---