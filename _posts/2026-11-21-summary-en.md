---
layout: default
title: "Horizon Summary: 2026-11-21 (EN)"
date: 2026-11-21
lang: en
---

> From 35 items, 10 important content pieces were selected

---

**Technology News**
1. [Lean community blog post references joint statement on Riemann Hypothesis verification](#item-tech-news-1) ⭐️ 8.0/10
2. [Tao Post Discusses Unforced Navier-Stokes Singularity and Generalized Riemann Hypothesis](#item-tech-news-2) ⭐️ 8.0/10
3. [Thinking Machines Releases Open-Weight Inkling 2 Mini Looped Transformer](#item-tech-news-3) ⭐️ 8.0/10
4. [Report: TSMC Halts 16nm-and-Below Orders From Chinese Firms](#item-tech-news-4) ⭐️ 8.0/10
5. [Zhejiang University reports first real-machine QRAM on superconducting chip](#item-tech-news-5) ⭐️ 8.0/10
6. [Levent Alpöge Claims Claude-Assisted Riemann Hypothesis Proof](#item-tech-news-6) ⭐️ 7.0/10
7. [Microsoft previews RDMA over USB4 to pool multiple PCs for local AI](#item-tech-news-7) ⭐️ 7.0/10
8. [OpenRouter: MiniMax model prompts may have been read by third parties](#item-tech-news-8) ⭐️ 7.0/10

**Technology Blog**
1. [Why Caching LLM Outputs Saves Little](#item-tech-blog-1) ⭐️ 6.0/10

**Financial News**
1. [Fed officials speak more as Warsh withholds rate guidance](#item-finance-news-1) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Lean community blog post references joint statement on Riemann Hypothesis verification](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 8.0/10

A Lean community blog post reportedly presents a joint statement about Lean verification of the Riemann Hypothesis, but the supplied item contains no statement text, so the claimed result, its authors, and its conditions cannot be assessed. The available evidence does not establish that the Riemann Hypothesis has been proved or that any Lean proof has been independently checked. Treat the headline as notice of a statement, not confirmation of a verified proof.

hackernews · g-b-r · Nov 21, 14:36 · [Discussion](https://news.ycombinator.com/item?id=50589618)

**「Background」** Lean is an interactive theorem prover that mechanically checks proofs against a formal statement, and Mathlib is its community-maintained library of formalized mathematics. The project material describes the formal target as the claim that every nontrivial zero of \`riemannZeta\` has real part 1/2, while the Lean community post presents the effort as a joint Lean–Mathlib statement endorsed by the Lean FRO and the Mathlib Initiative \[tool-2-1\]\[tool-2-2\]. That distinction matters because a proof assistant checks the formal derivation, not whether the formal statement captures the intended informal conjecture.

**「Verification burden falls on the checker setup」** Mathematicians and proof-assistant users who would cite this result cannot yet treat it as a settled proof: the supplied material includes no joint statement, Lean or Mathlib version, or axiom list, so independent checking requires those artifacts first. Commenters also noted that a past fake Collatz refutation passed an &quot;independent&quot; checker, a reason to scrutinize the specific checker configuration rather than the headline before downstream work relies on the claim.

**「Community Discussion」** Commenters questioned how independent proof checkers really are: one cited a past fake Collatz refutation that reportedly got through an independent checker, while noting that a human expert was involved in this case and that the statement’s four described points do not depend on that involvement. Other commenters asked what practical consequences a proof would have and whether the Riemann Hypothesis was already widely assumed true.

<details><summary>References</summary>
<ul>
<li><a href="https://leanprover-community.github.io/blog/posts/riemann-hypothesis/">Lean verification of the Riemann Hypothesis | Lean community blog</a></li>
<li><a href="https://github.com/CocoSgt/riemann-hypothesis-lean">GitHub - CocoSgt/ riemann - hypothesis - lean : Mirror of Levent...</a></li>

</ul>
</details>

**Tags**: `#formal verification`, `#Lean`, `#Riemann Hypothesis`, `#AI for math`, `#proof assistants`

---

<a id="item-tech-news-2"></a>
### [Tao Post Discusses Unforced Navier-Stokes Singularity and Generalized Riemann Hypothesis](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 8.0/10

Terry Tao published a blog post on unforced Euler and Navier-Stokes singularities and the generalized Riemann hypothesis, tied in the supplied item to major mathematical claims. The item provides no source text, proof details, or independent confirmation, so the validity and precise status of those claims cannot be assessed here. The attached Hacker News discussion centers on Lean formal verification and AI-assisted proof development rather than resolving the mathematical claims.

hackernews · archon1410 · Nov 20, 17:21 · [Discussion](https://news.ycombinator.com/item?id=50578358)

**「Background」** Finite-time blowup for the three-dimensional incompressible Navier–Stokes equations—whether smooth solutions can spontaneously develop a singularity—is a long-standing open problem, and the &quot;unforced&quot; version drops any external forcing term. The Euler equations are the inviscid limit of Navier–Stokes, so a singularity result for the unforced Euler equations bears directly on the viscous case, and reports describe the November 20 posting as covering both along with an unforced Euler result formalized in Lean.

**「Community discussion」** Commenters focused on whether Lean verification establishes the intended result: one reported that two independent kernels accept the proof, while another asked how a large Lean codebase can rule out a build that passes without proving the claimed theorem. Others debated whether AI-assisted proof search can generate new mathematical abstractions, not just verify existing ones.

<details><summary>References</summary>
<ul>
<li><a href="https://letsdatascience.com/news/buckmaster-and-alpoge-post-ai-aided-proof-of-unforced-navier-fcca1e31">Buckmaster and Alpöge post AI-aided proof of unforced Navier ...</a></li>
<li><a href="https://conyso.com/lawtome/wild/unforced-navier-stokes-blow-up-alpoge-buckmaster/">Has the Navier-Stokes Problem Been Solved Without a Force?</a></li>

</ul>
</details>

**Tags**: `#formal verification`, `#Lean`, `#Navier-Stokes`, `#Riemann hypothesis`, `#AI-assisted mathematics`

---

<a id="item-tech-news-3"></a>
### [Thinking Machines Releases Open-Weight Inkling 2 Mini Looped Transformer](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Thinking Machines has released Inkling 2 Mini, an open-weight model built on a looped-transformer architecture and aimed at local inference and coding use. Early Hacker News reports are substantive but uneven: one commenter measured about 27 tokens/s decoding on a Ryzen 395 using llama.cpp with Vulkan, while another got about 10 tokens/s on a 32GB M1 Pro at q4. Local users say several unmerged llama.cpp pull requests and a small patch are needed for better performance, and comparisons to Qwen3.8-27B remain community-reported rather than independently validated.

hackernews · jasondavies · Nov 20, 20:12 · [Discussion](https://news.ycombinator.com/item?id=50581260)

**「Background」** Unlike a conventional transformer, which passes each token through every layer once, a looped transformer reuses a block of middle layers across repeated iterations. That lets the model spend more computation per token without adding proportionally more parameters; Thinking Machines applies the design to a 26.4B-parameter mixture-of-experts model with about 5.4B active parameters and roughly a 20GB memory footprint.

**「What local deployment requires」** Developers running Inkling 2 Mini locally should expect memory use set by its 26.4B total parameters rather than its 3.4B active ones, since only the compute per token shrinks under the looped design; Artificial Analysis puts it at 20.13 on its Intelligence Index versus 20.11 for Qwen 3.8-27B, but with roughly 5x fewer active parameters. Early testers report roughly 27 tokens/s decode on a Ryzen 395 via llama.cpp&\#x27;s Vulkan backend and about 10 tokens/s on a 32GB M1 Pro, with the faster figure requiring several still-unmerged llama.cpp PRs \(32694, 32657, 32429, 32704\) plus a small local patch one commenter says yields about a 30% speed boost, so users on current release builds should not expect those numbers yet.

**「Community discussion」** Commenters welcomed an openly available looped-transformer model, with one predicting that most open models will adopt the architecture, but they also reported uneven results: coding prompts worked well while a harder coin-identification test failed. Reported throughput and speed-up figures come from individual setups and should be treated as anecdotal until independently reproduced.

<details><summary>References</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Introducing Inkling 2 Mini - Thinking Machines Lab</a></li>
<li><a href="https://artificialanalysis.ai/articles/inkling-2-mini">Thinking Machines has released Inkling 2 Mini, an open ...</a></li>
<li><a href="https://www.unite.ai/thinking-machines-lab-releases-inkling-2-mini-for-local-devices/">Thinking Machines Lab Releases Inkling 2 Mini for Local Devices</a></li>
<li><a href="https://www.youtube.com/watch?v=ypSOPhFp05E">Inkling 2 Mini vs Qwen 3 . 8 27 B : Looping Finally Works! - YouTube</a></li>
<li><a href="https://artificialanalysis.ai/articles/inkling-2-mini">Thinking Machines has released Inkling 2 Mini , an... | Artificial Analysis</a></li>

</ul>
</details>

**Tags**: `#open-weight models`, `#looped transformers`, `#local inference`, `#llama.cpp`, `#AI benchmarks`

---

<a id="item-tech-news-4"></a>
### [Report: TSMC Halts 16nm-and-Below Orders From Chinese Firms](https://appleinsider.com/articles/26/11/20/apple-supplier-tsmc-cuts-off-china-chip-orders-amid-tighter-export-controls) ⭐️ 8.0/10

TSMC has reportedly told customers it is suspending orders from Chinese companies for 16nm-and-below process nodes, with shipments allowed only if the customer first obtains a U.S. export license or exemption under tightened U.S. semiconductor export rules. The reported change confines Chinese firms to older nodes such as 28nm and 40nm and cuts off access to high-bandwidth memory needed for AI data-center hardware, according to the AppleInsider report relayed in the item. Previously TSMC could assess whether a customer&\#x27;s design qualified for an exemption itself; customers must now apply in advance. The report says the U.S. approved-customer list includes Apple, AMD, and Nvidia but no Chinese companies, and TSMC says it will comply with the new rules.

telegram · zaihuapd · Nov 21, 02:01

**「Background」** The tightened U.S. export rules shift compliance work onto customers: TSMC previously assessed whether a customer’s chip design qualified for an exemption, but Chinese companies must now obtain U.S. authorization or an exemption before TSMC can accept orders for advanced nodes. The affected 16nm-and-below processes are the advanced nodes covered by these controls, while 28nm and 40nm are older processes that remain outside the immediate restriction.

**「Impact」** Chinese chip designers that rely on TSMC for 16nm-and-below production now need a US export license or exemption before orders can be filled; without one, the report says they are confined to 28nm/40nm-class nodes and lose access to the high-bandwidth memory required for AI data-center hardware. The shift from TSMC self-assessing exemptions to requiring customers to apply in advance also adds a compliance step before those firms can place advanced-node orders.

**Tags**: `#semiconductors`, `#export-controls`, `#TSMC`, `#China`, `#AI-hardware`

---

<a id="item-tech-news-5"></a>
### [Zhejiang University reports first real-machine QRAM on superconducting chip](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

Zhejiang University researchers report what is described as the first real-machine demonstration of quantum random-access memory \(QRAM\), using a prototype on their independently fabricated superconducting chip Tianmu 2 and published in Nature Physics. The device retrieved 4-bit and 8-bit data with 80.9% and 60.4% accuracy, respectively, while reducing circuit depth by more than 30% relative to an unoptimized scheme. The team also reports the first validation of local noise resistance for the architecture and says its next step is scaling QRAM research.

telegram · zaihuapd · Nov 21, 08:31

**「Background」** QRAM is a quantum memory intended to let a quantum computer fetch classical data efficiently; a Nature Physics paper describes it as a prerequisite for many quantum algorithms to achieve quantum speed-up. The Zhejiang University device uses a bucket-brigade QRAM architecture, an approach examined in Nature Physics in March 2026 and identified in a June 2026 report as the basis of this team’s four- and eight-bit demonstration.

**「Impact」** For quantum-software developers, this remains a research prototype rather than usable memory: the 60.4% success rate for 8-bit retrieval means QRAM-dependent routines would need error mitigation or correction before they could rely on this hardware.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nature.com/articles/s41567-026-03218-2">A bucket-brigade quantum random access memory | Nature Physics</a></li>
<li><a href="https://thequantuminsider.com/2026/06/05/chinese-scientists-demonstrate-quantum-random-access-memory-architecture-aimed-at-solving-data-bottleneck/">Chinese Scientists Demonstrate Quantum Random Access Memory ...</a></li>

</ul>
</details>

**Tags**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#research`, `#hardware`

---

<a id="item-tech-news-6"></a>
### [Levent Alpöge Claims Claude-Assisted Riemann Hypothesis Proof](https://simonwillison.net/2026/Nov/20/levent-alpoge/) ⭐️ 7.0/10

Mathematician Levent Alpöge claims that, working with Claude, he discovered a proof of the Riemann Hypothesis and formalized the arguments without assumptions; he says the method extends to the Generalized Riemann Hypothesis and expects it to reach the Extended Riemann Hypothesis with more time. Simon Willison&\#x27;s post relays that claim from Alpöge&\#x27;s PDF but provides no proof, independent verification, or technical detail. The excerpt does not name the Claude model, link a formal proof artifact, or report peer review. It should therefore be read as an unverified claim, not an established mathematical or AI-assisted result.

rss · Simon Willison · Nov 20, 16:30

**「Background」** The Riemann Hypothesis is the longstanding conjecture that every nontrivial zero of the Riemann zeta function has real part 1/2 — a statement whose proof would settle many open questions about how the primes are distributed. Alpöge describes the argument as formalized &quot;without assumptions&quot; in Lean, a proof assistant that checks each inference mechanically, so a complete formalization can in principle be validated by compiling the code rather than only by referees reading a paper; a third-party mirror of the Lean development has also been posted.

**「Verification burden」** Mathematicians assessing the claim should focus on the claimed assumption-free formalization, since a machine-checkable proof—not the prose announcement—is what independent reviewers can audit. The excerpt provides no proof artifact, repository, or independent confirmation, so the result remains a claim until that formalization is checked.

<details><summary>References</summary>
<ul>
<li><a href="https://alpo.ge/remark.pdf">The Riemann Hypothesis is the classic problem in number theory.</a></li>
<li><a href="https://github.com/CocoSgt/riemann-hypothesis-lean">CocoSgt/ riemann - hypothesis -lean: Mirror of Levent Alpöge &#x27;s Lean...</a></li>

</ul>
</details>

**Tags**: `#AI-assisted mathematics`, `#Riemann Hypothesis`, `#Claude`, `#formal verification`, `#research claims`

---

<a id="item-tech-news-7"></a>
### [Microsoft previews RDMA over USB4 to pool multiple PCs for local AI](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 7.0/10

Microsoft released a Windows developer preview of RDMA over USB4, which lets multiple PCs share memory and GPU compute to run a single local AI model over ordinary USB4 connections, without dedicated network cards or switches. In the demonstrated setup, three AMD Ryzen AI Max+ 395 systems running Qwen3-235B-A22B at 4-bit quantization produced roughly 18.5 tokens per second. The preview is slated to ship through the Windows Insider program, so it is not yet a generally available capability. The source did not detail supported Windows builds, hardware requirements, or performance beyond the three-machine example.

telegram · zaihuapd · Nov 21, 06:13

**「Background」** RDMA \(Remote Direct Memory Access\) lets one computer access another device&\#x27;s memory directly, bypassing the CPU and reducing overhead for distributed workloads. Microsoft&\#x27;s preview applies that mechanism over USB4, allowing multiple Windows PCs to share memory and GPU resources without a dedicated network card or switch.

**「What It Means」** Windows developers in the Insider program can test distributed local inference by linking USB4-equipped PCs, without a dedicated RDMA network card or switch. The capability remains a developer preview, and the supplied example—three Ryzen AI Max+ 395 systems running 4-bit Qwen3-235B-A22B at about 18.5 token/s—does not establish production performance or support on other hardware.

<details><summary>References</summary>
<ul>
<li><a href="https://habr.com/ru/articles/1110636/">Microsoft представила решение на базе USB 4 и RDMA для... / Хабр</a></li>

</ul>
</details>

**Tags**: `#RDMA`, `#USB4`, `#Windows`, `#local AI`, `#distributed inference`

---

<a id="item-tech-news-8"></a>
### [OpenRouter: MiniMax model prompts may have been read by third parties](https://news.ycombinator.com/item?id=50585962) ⭐️ 7.0/10

OpenRouter emailed users warning that request content sent to MiniMax models may have been accessed by third parties, according to a secondary Telegram report. Security researchers sent prompts containing test URLs to MiniMax models between July and October 2026, and third parties visited those URLs 40 to 130 hours later. OpenRouter attributed the problem to MiniMax and its forwarding providers AtlasCloud, Novita and StreamLake, removed the &quot;zero data retention&quot; label from the affected endpoints, and advised users who may have exposed sensitive credentials to rotate API keys and passwords. No corresponding notice had been published on OpenRouter&\#x27;s website at the time of the report, and the disclosure has not been independently confirmed.

telegram · zaihuapd · Nov 21, 06:53

**「Background」** OpenRouter acts as a routing layer between API customers and multiple model providers, so a provider-side data-handling problem can affect users who never contract directly with that provider. A “zero data retention” label on a model endpoint is a routing-level signal that prompts and outputs are not retained; removing it means users can no longer treat that endpoint as suitable for sensitive inputs.

**「Credential exposure risk」** OpenRouter users who sent confidential prompts to MiniMax models via AtlasCloud, Novita, or StreamLake can no longer treat those requests as covered by a zero-data-retention guarantee, because OpenRouter has removed the label from the affected endpoints. The notice advises anyone who included sensitive credentials in such prompts to rotate the related API keys and passwords.

**Tags**: `#AI security`, `#privacy`, `#OpenRouter`, `#MiniMax`, `#API security`

---

## Technology Blog

<a id="item-tech-blog-1"></a>
### [Why Caching LLM Outputs Saves Little](https://seangoedecke.com/why-output-caching-doesnt-work/) ⭐️ 6.0/10

rss · Sean Goedecke · Nov 21, 00:00

**「Background」** LLM inference already relies on caching inputs, typically in the KV cache, so the full conversation history is not recomputed on every turn. Sean Goedecke asks whether outputs should be cached similarly, given that agents often repeat code, evidence, or sample results, and output tokens are more expensive because they are generated sequentially.

**「Solution」** One approach would be to fine-tune or prompt a model to emit references such as file line ranges or conversation segments, with the harness expanding them transparently. Goedecke argues this is not worthwhile because it only optimizes visible output. In his own agent histories, visible output is about 6% of output tokens, while 50% are reasoning tokens and 44% are tool calls. By Amdahl&\#x27;s law, even saving two-thirds of visible output would cut only about 4% of total output tokens. He suspects internal chain-of-thought rarely repeats itself, though he is only moderately confident and wonders whether tool calls sometimes duplicate content. Real savings must come from the invisible 94%, which depends largely on model intelligence and harness quality: a model that costs 5x more per token can be cheaper overall if it needs 6x fewer tokens. Speculative decoding may already exploit some repetition for speed.

**「Takeaway」** Output caching targets a small visible fraction of model output, so its savings are sharply limited. The larger economic lever is reducing reasoning and tool-call tokens through smarter models and better harnesses, which makes per-token price a poor proxy for total cost.

**Tags**: `#LLM inference`, `#caching`, `#token economics`, `#Amdahl&\#x27;s law`, `#AI agents`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Fed officials speak more as Warsh withholds rate guidance](https://www.cnbc.com/2026/11/20/warsh-fed-forward-guidance-rate-hikes.html) ⭐️ 7.0/10

Federal Reserve officials are speaking more often about rate increases, with Cleveland Fed President Beth Hammack having dissented in October in favor of a quarter-point hike and Governor Christopher Waller raising the possibility of a half-point move in December, while Chairman Kevin Warsh avoids forward guidance. Bank of America said the past two weeks brought more Fed commentary than any comparable period since the start of 2025.

rss · CNBC Finance · Nov 20, 21:10

**「Background」** Warsh argues that forward guidance—public signals about future policy—can lock policymakers in before they must decide; Bank of America analysts say his refusal to guide markets may instead be encouraging other FOMC members to speak more forcefully.

**「Impact」** Traders are pricing a 100% chance of at least a quarter-point rate increase in December, according to CME Group’s FedWatch, which would raise borrowing costs for households and businesses with variable-rate debt if the Fed follows through.

**Tags**: `#Federal Reserve`, `#monetary policy`, `#interest rates`, `#FOMC communication`, `#forward guidance`

---