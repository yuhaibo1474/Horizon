---
layout: default
title: "Horizon Summary: 2026-11-24 (EN)"
date: 2026-11-24
lang: en
---

> From 39 items, 11 important content pieces were selected

---

**Technology News**
1. [Ladybird releases first alpha with installable macOS and Linux builds](#item-tech-news-1) ⭐️ 8.0/10
2. [Z.ai Releases GLM-5.4, Its First Loop Transformer for Coding](#item-tech-news-2) ⭐️ 8.0/10
3. [Nvidia Board Reinstates Jensen Huang as CEO, Citing U.S. Government Input](#item-tech-news-3) ⭐️ 7.0/10
4. [NariQ ships 3-bit Qwen3.8-27B quant in 10 GB, needs custom llama.cpp](#item-tech-news-4) ⭐️ 7.0/10
5. [Codex2api alleged supply-chain compromise exposes secrets](#item-tech-news-5) ⭐️ 7.0/10
6. [Meta AI chief cites machine-verified Riemann proof, warns on superintelligence control](#item-tech-news-6) ⭐️ 7.0/10
7. [Anthropic reports Claude-discovered VP≠VNP proof with Lean 4 formalization](#item-tech-news-7) ⭐️ 7.0/10

**Technology Blog**
1. [vLLM Day-0 Support for ERNIE 5.5 Flash via Plugin](#item-tech-blog-1) ⭐️ 6.0/10

**Financial News**
1. [New York Fed&\#x27;s Williams says more work needed to reach 2% inflation](#item-finance-news-1) ⭐️ 7.0/10
2. [Shanghai to Adjust Subway Fares for First Time in 21 Years](#item-finance-news-2) ⭐️ 7.0/10
3. [Singapore PM: country won&\#x27;t be conduit for evading US chip controls](#item-finance-news-3) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Ladybird releases first alpha with installable macOS and Linux builds](https://ladybird.org/posts/alpha/) ⭐️ 8.0/10

Ladybird released its first alpha, making its independent browser engine available as installable builds for macOS and Linux instead of requiring users to compile it themselves. The engine implements most core browser components itself—including HTML parsing, CSS, layout, JavaScript, and WebAssembly—while relying on external components such as HarfBuzz, Skia, ffmpeg, and SQLite. The project warns that some websites will not work and the browser will sometimes crash, and it offers in-browser reporting for broken sites and optional crash reports. Project figures cited in the source report that Ladybird reached 2,184,722 passing web-platform-tests in October 2026—above Safari&\#x27;s 2,172,990 and just below Firefox&\#x27;s 2,189,315—with much of the gain attributed to AI coding agents filling in missing functionality.

hackernews · janvdberg · Nov 23, 16:13 · [Discussion](https://news.ycombinator.com/item?id=50614249)

**「Background」** Ladybird began as the browser for the from-scratch SerenityOS project and has grown into a standalone engine that implements HTML parsing, CSS, layout, JavaScript, and WebAssembly itself, while relying on external components such as HarfBuzz, Skia, ffmpeg, and SQLite. Before this alpha, using it meant compiling the source yourself; the alpha provides downloadable macOS and Linux builds. The project had also spent 2026 expanding its use of coding agents, including a February port of parts of LibJS to Rust and an October push that added 75,650 web-platform-tests passes.

**「Compatibility and stability caveats」** Ladybird’s first alpha lets macOS and Linux users install the independent engine without compiling it, but they should expect compatibility gaps: a reviewer’s Datasette Lite failed because \`navigator.serviceWorker.startMessages\` is unimplemented, and the project warns that some sites will not work and crashes will occur. Users can report broken sites from inside the browser and review crash reports before deciding whether to send them.

**「Community discussion」** Commenters who tried the alpha reported that many sites rendered correctly, with one calling a NoVNC-based Proxmox interface snappier than in Firefox and another noting slightly jerky scrolling. One commenter said replacing self-developed libraries with established ones such as SQLite and Skia helped the browser but mourned some of the original hacker spirit, while others urged stronger anti-fingerprinting and permission controls and asked what precautions are appropriate for an early alpha.

**Tags**: `#browsers`, `#Ladybird`, `#open source`, `#web rendering`, `#alpha release`

---

<a id="item-tech-news-2"></a>
### [Z.ai Releases GLM-5.4, Its First Loop Transformer for Coding](https://z.ai/blog/glm-5.4) ⭐️ 8.0/10

Zhipu/Z.ai has released GLM-5.4, which it describes as its first &quot;loop transformer&quot; and positions for generalized coding. The architecture runs a group of weight-shared layers for multiple iterations, aiming to increase effective depth without increasing parameter count, according to the vendor. GLM-5.4 is not available as open weights or through Z.ai&\#x27;s regular API or OpenRouter; access currently requires its Coding Plan subscription, whose API keys work with the same OpenAI-compatible endpoint at https://api.z.ai/api/v1. In a hands-on pelican-SVG comparison, Simon Willison found GLM-5.4&\#x27;s output similar in quality to GLM-5.3 at low, high, and max effort levels.

hackernews · foohis · Nov 23, 10:06 · [Discussion](https://news.ycombinator.com/item?id=50609685)

**「Background」** A standard Transformer runs each layer once per forward pass. A loop transformer instead runs a group of weight-shared layers for multiple iterations, increasing effective depth without increasing parameter count. GLM-5.4 is not the first recent model to use the idea: Thinking Machines Lab said its Inkling 2 Mini, released on November 20, runs the model&\#x27;s middle layers three times for every token. GLM-5.4 also follows Z.ai&\#x27;s GLM-5.3, which provides the immediate comparison point for output quality.

**「Impact」** Developers who want to test GLM-5.4 must use a Coding Plan key against the shared Responses API rather than their usual Z.ai API plan or OpenRouter; tooling also lags, since the existing llm-zai plugin did not yet support the model and Willison shipped a separate llm-glm plugin in the interim.

**「Community Discussion」** Commenters praised Zhipu&\#x27;s willingness to disclose architectural detail and discussed how looped layers could ease memory-bandwidth limits, while others reported that the model&\#x27;s &quot;marathon thinking&quot; made even simple tasks slow and that its outputs looked comparable to GLM-5.3.

**Tags**: `#llm`, `#model-release`, `#transformer-architecture`, `#coding-assistants`, `#zhipu-ai`

---

<a id="item-tech-news-3"></a>
### [Nvidia Board Reinstates Jensen Huang as CEO, Citing U.S. Government Input](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) ⭐️ 7.0/10

Nvidia&\#x27;s board has reinstated Jensen Huang as CEO, according to a CNBC report dated Nov. 23, 2026. The board statement quoted in the supplied material says the board &quot;received input from senior levels of the United States government&quot; and, based on that input, is &quot;confident that Mr. Huang&\#x27;s reinstatement poses no national security risk.&quot; The item is a headline, that statement excerpt, and a comment thread: it does not give the reason Huang was removed, the board vote, the terms of reinstatement, or any export-licensing conditions. Claims about a Justice Department non-prosecution decision, Delaware&\#x27;s Caremark liability standard, and chip-export policy come from commenters and are not corroborated by the supplied source.

hackernews · jaz · Nov 23, 14:00 · [Discussion](https://news.ycombinator.com/item?id=50611576)

**「Background」** Jensen Huang is returning to the president, CEO, and board director roles he previously held at Nvidia, effective immediately. The unanimous reinstatement followed a security review tied to a reported affair with a woman alleged to be a Chinese spy; senior U.S. government officials said his return posed no national security risk, according to Fox News’ live coverage.

**「Impact」** Because the board&\#x27;s stated basis is U.S. government input on national security rather than an internal governance review, the reinstatement is framed as a determination that investors, partners, and regulators can point to directly, and the board&\#x27;s own wording ties Huang&\#x27;s position to continued government confidence. The supplied material says nothing about whether export licenses, compliance commitments, or disclosure obligations were attached, so those terms should be treated as unknown.

**「Community Discussion」** Commenters fixated on the board&\#x27;s invocation of government input: chunky1994 called it &quot;the most operative part of the statement,&quot; while apexalpha argued it is hypocritical for Nvidia to receive White House support after ASML and Japanese chipmakers were pressed into China sanctions. icyfox said Delaware&\#x27;s Caremark precedent and a reported DoJ decision not to prosecute would likely shield directors from personal liability, and expressed surprise that the reversal was unanimous so soon after the board removed Huang; x313 disputed the premise that Nvidia had committed a crime, and 015UUZn8aEvW compared the episode to OpenAI&\#x27;s 2023 board crisis as evidence that a firm&\#x27;s formal governance structure is not necessarily its real one.

<details><summary>References</summary>
<ul>
<li><a href="https://wccftech.com/nvidia-reinstates-jensen-huang-ceo-board-of-director/">NVIDIA Says Jensen Huang Isn&#x27;t A Security Risk As It Reinstalls Him...</a></li>
<li><a href="https://www.foxnews.com/live-news/ai-news-tech-markets-nvidia-11-23-26">Jensen Huang reinstated as Nvidia CEO after security review</a></li>

</ul>
</details>

**Tags**: `#Nvidia`, `#semiconductor industry`, `#US government policy`, `#corporate governance`, `#export controls`

---

<a id="item-tech-news-4"></a>
### [NariQ ships 3-bit Qwen3.8-27B quant in 10 GB, needs custom llama.cpp](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) ⭐️ 7.0/10

NariQ released 3-bit-or-lower GGUF quantizations of Qwen3.8-27B, including a 10 GB file it claims retains near-BF16 quality on agentic, math, multilingual, and image tasks; the results are vendor-reported and have not been independently verified. On NariQ&\#x27;s benchmarks, the 3-bit and 2.5-bit variants stay close to BF16 — DeepSWE 41.0 and 41.9 versus 39.8, Terminal-Bench 2.1 63.8 and 60.2 versus 62.6 — while the 2-bit variant drops to 28.6 and 52.4. Running the quants currently requires NariQ&\#x27;s custom llama.cpp fork, and decode speed is described as comparable to other quants on an RTX PRO 6000.

hackernews · toebee · Nov 23, 13:42 · [Discussion](https://news.ycombinator.com/item?id=50611402)

**「Background」** Qwen3.8-27B is a 27-billion-parameter model, and NariQ is distributing quantized versions in GGUF format, the file type used by llama.cpp-family runtimes for local inference. Quantization stores weights at lower numerical precision than the BF16 baseline to reduce disk and memory use; NariQ&\#x27;s 3-bit-or-lower files require its own llama.cpp fork rather than mainline support.

**「Impact」** Local users can fit a 27B model into roughly 10 GB, but they must build and use the NariQ llama.cpp fork, and the benchmark table shows the 2-bit option losing substantial agentic capability \(DeepSWE 28.6 vs 39.8 for BF16; Terminal-Bench 2.1 52.4 vs 62.6\), so the 3-bit or 2.5-bit files are the better-supported choice for those workloads.

**「Community Discussion」** Commenters welcomed the multiple task types and held-out checks but questioned how much of the apparent gain comes from harness differences rather than the quantization, and one asked what information is actually lost as file size falls. A Mac user reported about 3.8 tok/s on an M3 Pro with 18 GB using the 3.0 bpw file and asked whether a 16 GB machine could run it.

**Tags**: `#LLM quantization`, `#local LLM inference`, `#llama.cpp`, `#model compression`, `#benchmark evaluation`

---

<a id="item-tech-news-5"></a>
### [Codex2api alleged supply-chain compromise exposes secrets](https://github.com/WormW/codex2api-incident-2026-11) ⭐️ 7.0/10

A Telegram report alleges that Codex2api’s maintainer account was compromised and that the attacker bypassed the main branch by pushing release tags, causing backdoored builds. The advisory says v3.1.11 removed authentication, allowing unauthenticated remote command execution, while a workflow exfiltrated 16 GitHub Actions secrets and affected at least 21 repositories under the same account. Users who installed or updated to 3.1.10–3.1.12 are urged to stop using it, roll back to 3.1.9, and rotate GitHub tokens, SSH keys, database credentials, and related secrets including DeepSeek keys. The report has limited independent verification in the supplied material.

telegram · zaihuapd · Nov 23, 11:21

**「Background」** GitHub release pipelines are often triggered by version tags, and GitHub Actions secrets are available to workflows running in the repository. A compromised maintainer account that can push a tag can therefore cause a release to be built from a commit that never passed through main-branch review. If the tag-triggered workflow has access to repository secrets, that build can read them.

**「Impact」** Because the alleged exfiltration covers 16 GitHub Actions secrets across at least 21 repositories, affected operators should audit and rotate credentials used in those repositories, not just the Codex2api installation.

**Tags**: `#supply-chain security`, `#GitHub Actions`, `#open source security`, `#security incident`, `#secret exfiltration`

---

<a id="item-tech-news-6"></a>
### [Meta AI chief cites machine-verified Riemann proof, warns on superintelligence control](https://thenextweb.com/news/metas-ai-chief-says-superintelligence-is-arriving-and-control-is-at-risk) ⭐️ 7.0/10

Meta&\#x27;s chief AI officer and Superintelligence Labs head Alexandr Wang wrote on X that superintelligence is no longer a &quot;someday&quot; issue and warned that humans will struggle to retain control of systems that can improve themselves indefinitely or exceed human intelligence by 1,000 times. He cited a Riemann Hypothesis proof produced by mathematician Levent Alpöge with Anthropic&\#x27;s Claude and machine-verified by the Lean/Mathlib community on Saturday, arguing that the gap between AI and top humans now comes down to concrete knowledge, engineering integration, and experimentation. Wang called for urgent investment in safety, alignment, and defense research. The proof has no human-readable version, and the supplied account does not independently verify the claim.

telegram · zaihuapd · Nov 23, 12:49

**「Background」** Wang’s warning rests on a proof of the 19th-century Riemann hypothesis that mathematician Levent Alpöge produced with Anthropic’s Claude over six weeks, according to The Guardian. Lean and Mathlib experts subsequently certified the proof and its statement as correct, but mathematicians still need to explain its ideas and the Clay prize remains years away.

**「Impact」** Because no human-readable write-up exists, mathematicians cannot yet assess whether the formal proof matches the intended Riemann Hypothesis; releasing that write-up is the immediate prerequisite for peer review and for treating the result as a mathematical advance rather than a machine-checked formal claim.

<details><summary>References</summary>
<ul>
<li><a href="https://www.theguardian.com/technology/2026/nov/21/anthropic-riemann-hypothesis-solved-claude-ai">Two groups verify mathematician’s claim that Claude ... | The Guardian</a></li>
<li><a href="https://www.nacionale.com/en/articles/when-will-we-know-riemann-hypothesis-proof-verified-alpoge-claude-lean-what-happens-next">Lean community certifies Riemann proof ; prize years off</a></li>

</ul>
</details>

**Tags**: `#AI safety`, `#superintelligence`, `#theorem proving`, `#Lean/Mathlib`, `#Meta AI`

---

<a id="item-tech-news-7"></a>
### [Anthropic reports Claude-discovered VP≠VNP proof with Lean 4 formalization](https://github.com/anthropics/formal-math/blob/main/vp-vnp/README.md) ⭐️ 7.0/10

Anthropic has reportedly published a paper, “VP ≠ VNP over every field,” and a Lean 4 formalization, dated November 24, claiming that an internal research Claude model discovered the result and that the paper and code were AI-written. The claimed proof gives a superpolynomial arithmetic-circuit lower bound for the Hamiltonian-cycle polynomial and concludes that VP is a proper subset of VNP; if correct, this would resolve Valiant’s 1979 algebraic-complexity conjecture, though it addresses arithmetic circuits rather than P versus NP. The repository reports an audit against three standard axioms and an independent nanoda kernel check with no \`sorry\` outside a placeholder file. The claim still lacks a full human-mathematician review, and Lean cannot by itself confirm that the formal statement matches the claimed theorem; the repository’s Appendix Q lists discrepancies pending independent review.

telegram · zaihuapd · Nov 24, 06:02

**「Background」** VP vs VNP is the algebraic counterpart of P vs NP: VP captures polynomial families computable by polynomial-size arithmetic circuits, while VNP is the algebraic analogue of NP. Leslie Valiant posed the question of whether the two classes differ in 1979, and it has remained open since, as the paper&\#x27;s framing notes that a resolution would not settle P vs NP itself. A Lean 4 proof can certify that a derivation follows from its stated axioms, but it cannot by itself confirm that the formal statement matches the intended mathematical claim, which still requires human review.

**「What it means」** The immediate consequence for complexity theorists and Lean users is that this should be treated as an audit target, not an established theorem: independent mathematicians still need to verify that the encoded statement matches VP ≠ VNP and resolve the discrepancies listed in Appendix Q before anyone cites it as settling Valiant’s 1979 conjecture. The Lean build confirms proof terms against the formal specification, not the specification’s fidelity to the claimed result.

<details><summary>References</summary>
<ul>
<li><a href="https://www.youtube.com/watch?v=UuOiRi9T-9c">Claude&#x27;s VP VNP Proof: 47 Years Open, Still Unchecked... - YouTube</a></li>
<li><a href="https://www.alphaxiv.org/abs/2611.vp-vnp-arithmetic-lower-bounds">VP VNP Over Every Field | alphaXiv</a></li>
<li><a href="https://www.gpts24.com/en/news/anthropic-s-claude-claims-proof-of-vp-vnp-a-47-year-old-computing-conjecture">Anthropic’s Claude Claims Proof of VP ≠ VNP, a 47-Year-Old ...</a></li>

</ul>
</details>

**Tags**: `#AI for math`, `#Lean 4`, `#computational complexity`, `#VP vs VNP`, `#formal verification`

---

## Technology Blog

<a id="item-tech-blog-1"></a>
### [vLLM Day-0 Support for ERNIE 5.5 Flash via Plugin](https://vllm.ai/blog/2026-11-24-ernie-5-5-flash-preview) ⭐️ 6.0/10

rss · vLLM Blog · Nov 24, 00:00

**「Background」** ERNIE 5.5 Flash Preview is a 280B-parameter sparse mixture-of-experts model that activates 14B parameters per token, supports a 1M-token context, and is designed for reasoning and long-horizon agent tasks. Serving it economically required controlling activated compute, KV-cache size, long-context indexing overhead, and the many small kernels introduced by its custom attention and MoE structures.

**「Solution」** Baidu and vLLM delivered day-0 support as vLLM-ERNIE, a standalone plugin installed alongside the official vllm==0.32.0 wheel; vLLM discovers it through the vllm.general\_plugins entrypoint, registers the model architecture, config, tokenizer, chat renderer, and parsers, and imports model code only when that architecture is requested. The plugin supplies ERNIE model code and specialized kernels while reusing vLLM’s attention kernels, KV-cache manager, speculative decoding, parallelism, and server; across 43 layers—37 using HCA and 6 using MLA-DSA—the authors fused structures such as VHA cross-head mixing, Multi-Router Latent MoE, the MultiMax head, and gated attention, reporting 1.55×–6.53× per-kernel gains while preserving bitwise-identical outputs for several fusions. FlashIndexer routes each query token to a few sparse indexer heads and adds threshold pre-filtering; its router is trained on about 1B tokens, leaves downstream DSA kernels unchanged, and is reported to cut indexing cost at 1M context by 40% \(1.4×\). Routed experts use MXFP4 W4A8 with quantization-aware training, other weights and the KV cache use FP8, the DSA indexer cache can use MXFP4, and a bundled three-layer DSpark draft model proposes up to seven tokens per step with reported mean acceptance above 4.0 on coding and agent workloads; deployment options include expert parallelism, attention TP2/4/8, Mooncake PD disaggregation, and CPU KV-cache offload.

**「Takeaway」** The release shows how a model-specific vLLM plugin can provide day-0 support without a fork or custom image, letting model fixes and kernel work ship on the model’s schedule while upstream vLLM features remain available. For this model, the claimed payoff rests on vendor-reported per-kernel and acceptance metrics rather than an independent end-to-end comparison.

**Tags**: `#vLLM`, `#mixture-of-experts`, `#kernel fusion`, `#speculative decoding`, `#sparse attention`

---

## Financial News

<a id="item-finance-news-1"></a>
### [New York Fed&\#x27;s Williams says more work needed to reach 2% inflation](https://www.cnbc.com/2026/11/23/john-williams-fed-inflation-rate-hikes.html) ⭐️ 7.0/10

New York Fed President John Williams said the Federal Reserve still has &quot;work to do&quot; to bring inflation back to its 2% target and that further rate increases can come &quot;over time.&quot; Markets are fully pricing a quarter-point increase at the Dec. 8-9 policy meeting, which would lift the target range above its current 3.75%-4%.

rss · CNBC Finance · Nov 23, 21:02

**「Background」** Inflation has stayed well above the Fed&\#x27;s goal while the economy keeps growing; Williams said he expects inflation to move closer to 2% in 2027 and to reach it the following year, pointing to the conflict in Iran, demand for goods tied to the AI build-out and tariffs as current pressures.

**「Impact」** A quarter-point increase would raise costs on borrowing that tracks the Fed&\#x27;s benchmark rate, including credit cards and variable-rate business loans.

**Tags**: `#Federal Reserve`, `#monetary policy`, `#inflation`, `#interest rates`, `#John Williams`

---

<a id="item-finance-news-2"></a>
### [Shanghai to Adjust Subway Fares for First Time in 21 Years](https://weibo.com/1699432410/5368461393397183) ⭐️ 7.0/10

Shanghai will adjust its subway fares for the first time in 21 years, setting a 3-yuan base fare covering the first 0-4 km, with 1 yuan added at each successive 4/4/4/7/7/10/10 km and every 15 km beyond 50 km. The new fares take effect December 1, alongside four multi-ride passes \(35, 45, 60 and 90 trips\) priced at 190, 210, 270 and 390 yuan, on sale November 26, plus a 10% discount on a payment channel after 90 yuan in monthly spending, per a Xinhua report.

telegram · zaihuapd · Nov 23, 10:45

**「Background」** Shanghai&\#x27;s subway fares had gone 21 years without adjustment, and the new scheme keeps distance-based pricing: riders pay a base fare for the first stretch and then add 1 yuan at set distance intervals, so longer trips cost more.

**「Who is affected」** The change falls most directly on daily commuters and other high-frequency riders, whom the new multi-ride passes and the 10% discount after 90 yuan in monthly spending are designed to shield from the higher base fare.

<details><summary>References</summary>
<ul>
<li><a href="https://news.qq.com/rain/a/20260908A05NH700">news.qq.com/rain/a/20260908A05NH700</a></li>

</ul>
</details>

**Tags**: `#Shanghai`, `#public transit`, `#fare adjustment`, `#commuting costs`, `#urban policy`

---

<a id="item-finance-news-3"></a>
### [Singapore PM: country won&\#x27;t be conduit for evading US chip controls](https://www.bloomberg.com/news/articles/2026-11-24/singapore-won-t-be-conduit-to-skirt-us-chip-curbs-wong-says) ⭐️ 7.0/10

Singapore Prime Minister Lawrence Wong said the country will not be used as a conduit to evade US chip export controls, and authorities are investigating Megaspeed’s purchases of Nvidia chips. The statement came a day after the US Commerce Department added Megaspeed and six other Southeast Asian firms to a trade blacklist, with the Federal Register saying there was a “significant risk” they could divert advanced computing products to unauthorized users.

telegram · zaihuapd · Nov 24, 05:03

**「Background」** A day before Wong spoke, the US Commerce Department added Singapore-based Megaspeed and six other Southeast Asian companies to its trade blacklist — the Entity List, which requires exporters to obtain a US licence before selling controlled technology to listed firms — over what the Federal Register described as a &quot;significant risk&quot; they would pass advanced computing products to unauthorised users.

<details><summary>References</summary>
<ul>
<li>The U.S. has added Singapore-based Megaspeed and six other Southeast Asian ... - Facebook</li>
<li><a href="https://nypost.com/2026/11/23/us-news/commerce-department-blacklists-megaspeed-after-nvidia-reinstates-jensen-huang-as-ceo/">Commerce Department blacklists Megaspeed after Nvidia reinstates...</a></li>

</ul>
</details>

**Tags**: `#semiconductor export controls`, `#Singapore`, `#US-China tech tensions`, `#Nvidia`, `#corporate blacklist`

---