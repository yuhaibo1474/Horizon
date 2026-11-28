---
layout: default
title: "Horizon Summary: 2026-11-28 (EN)"
date: 2026-11-28
lang: en
---

> From 30 items, 9 important content pieces were selected

---

**Technology News**
1. [OpenSec reports critical Linux NFS server flaw enabling remote root](#item-tech-news-1) ⭐️ 8.0/10
2. [Unkernel compiles a real Linux kernel to WebAssembly](#item-tech-news-2) ⭐️ 7.0/10
3. [Google proposes DeepCrossAttention, claiming up to 3x faster training](#item-tech-news-3) ⭐️ 7.0/10
4. [Skimming scripts reportedly used WebRTC on popular shopping sites](#item-tech-news-4) ⭐️ 7.0/10
5. [Hacker News debate pushes back on false computer-checked proof critique](#item-tech-news-5) ⭐️ 7.0/10
6. [State attorneys general sue SpaceX over Grok-generated sexual abuse and revenge-porn images](#item-tech-news-6) ⭐️ 7.0/10
7. [SemiAnalysis: Trainium3 trades blows with GB300 on inference cost](#item-tech-news-7) ⭐️ 7.0/10
8. [Microsoft expands built-in Windows drivers, starting with printers](#item-tech-news-8) ⭐️ 7.0/10

**Financial News**
1. [China&\#x27;s central bank cuts minimum purchase for large-denomination CDs to 100,000 yuan](#item-finance-news-1) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [OpenSec reports critical Linux NFS server flaw enabling remote root](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 8.0/10

OpenSec disclosed CVE-2026-99362, a pre-authentication heap overflow in the Linux kernel&\#x27;s nfsd NFS server that it rates CVSS 9.8 and says can give an unauthenticated attacker a root shell through a single connection to tcp/2049. The flaw is reported to have existed since Linux 3.16 in 2014 and to affect hosts with NFSv4.1 or 4.2 enabled, including file servers, NAS devices and clustered storage nodes. Fixes are listed for Linux 6.12.117, 6.18.61, 7.3.2 and 7.4-rc1; applying them requires a kernel upgrade and reboot. The CVE was published on November 20, 2026.

telegram · zaihuapd · Nov 27, 12:57

**「Background」** nfsd is the Linux kernel&\#x27;s NFS server, exporting filesystems to remote clients over TCP port 2049; the affected code is reached when a server offers NFSv4.1 or 4.2. The flaw has existed since Linux 3.16 in 2014, so older long-term-support and appliance kernels can carry it even though the current upstream fix is in newer releases.

**「Impact」** Administrators running affected NFS servers need to upgrade to a fixed kernel and reboot; where an immediate upgrade is not possible, the disclosed fallback is to restrict access to tcp/2049 at the firewall.

<details><summary>References</summary>
<ul>
<li><a href="https://opensec.in/blog/nfs2root-cve-2026-99362">NFS 2ROOT ( CVE - 2026 - 99362 ): pre-auth root in Linux nfsd | OpenSec</a></li>
<li><a href="https://www.getpagespeed.com/server-setup/security/nfs2root-cve-2026-99362-centos-7">NFS 2ROOT ( CVE - 2026 - 99362 ) on CentOS 7: Fixed Kernel</a></li>

</ul>
</details>

**Tags**: `#Linux kernel`, `#NFS`, `#security vulnerability`, `#remote code execution`, `#patching`

---

<a id="item-tech-news-2"></a>
### [Unkernel compiles a real Linux kernel to WebAssembly](https://unkernel.dev/) ⭐️ 7.0/10

The Unkernel project presents a real Linux kernel compiled to WebAssembly; the item describes interest in it for browser-based sandboxing and as an alternative to POSIX runtimes for WASM. The supplied item does not include a version, performance measurements, or compatibility details, so the extent of the working capability is not independently established. For developers evaluating WASM sandboxes, it adds a kernel-level option alongside smaller POSIX-style runtimes.

hackernews · nreece · Nov 28, 03:19 · [Discussion](https://news.ycombinator.com/item?id=50674218)

**「Background」** Earlier ways of putting a Linux shell in a browser typically relied on full-system emulation: linuxontab.com, for example, boots an x86 kernel and Alpine userland on top of the v86 emulator running via WebAssembly, with no local install. Unkernel takes a different route by compiling the kernel itself straight to WebAssembly, with user programs running on kwemu — an aarch64 CPU written in Zig and linked into the kernel that walks the kernel&\#x27;s own page tables, so memory management is handled by the real Linux code.

**「Performance trade-off for adopters」** Developers choosing between Unkernel and existing browser-based Linux emulation should expect uneven performance: one developer reported in a Hacker News thread that a test workload ran 40% slower on jslinux than on Unkernel, while some microbenchmarks differed by a factor of 4 to 40. That makes the full-kernel approach a compatibility play rather than a uniform speed win, and a competing POSIX-runtime author argued in the same discussion that most workloads do not need 90% of the Linux kernel, so smaller sandboxes may still be better served by the lighter approach.

**「Community discussion」** Commenters responded positively, but daugasauron argued that POSIX runtimes for WASM still suit small, specialized agent sandboxes because most workloads do not need most of the Linux kernel, while noting that the project&\#x27;s comparison table marks those runtimes poorly. Other commenters pointed to related projects and proposed running Windows programs in the browser through WebUSB.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/pithings/unkernel">pithings/ unkernel : A real Linux kernel , compiled to WebAssembly .</a></li>
<li><a href="https://linuxontab.com/shell/">Real Linux terminal in your browser (v86 + WebAssembly )</a></li>
<li>A real Linux kernel, compiled to WebAssembly - Hacker News</li>

</ul>
</details>

**Tags**: `#WebAssembly`, `#Linux kernel`, `#virtualization`, `#sandboxing`, `#open source`

---

<a id="item-tech-news-3"></a>
### [Google proposes DeepCrossAttention, claiming up to 3x faster training](https://research.google/blog/supercharging-transformer-residual-connections/) ⭐️ 7.0/10

Google researchers have proposed DeepCrossAttention \(DCA\), a depth-wise cross-attention method for transformer residual connections. The research blog claims the approach can deliver comparable model quality with up to 3x faster training. The supplied evidence does not include independent validation, a released implementation, or independently measured benchmarks, so the speed and quality claims remain the authors&\#x27; claims.

hackernews · ComputedCamp995 · Nov 27, 23:06 · [Discussion](https://news.ycombinator.com/item?id=50672565)

**「Background」** Transformer residual connections normally pass a layer&\#x27;s output forward so later layers can build on earlier representations. Standard attention, by contrast, mixes information across tokens at a given layer. DCA changes that split by applying attention across depth, with each token querying a weighted mix of embeddings from prior layers, according to the description quoted in the discussion.

**「Impact」** Teams training deep transformers cannot yet treat DCA as a drop-in speedup: the supplied evidence describes a research method and claimed result, not a shipped library or independently reproduced benchmark. Practical adoption would require implementation details and tests on the team&\#x27;s own model and data.

**「Community discussion」** One commenter highlighted the retrofit result quoted from the research: adding DCA to an already pre-trained transformer and briefly continuing training reduced LM1B perplexity by 0.19, versus 0.02 for standard continued training, and called mid-training architecture changes promising. Another objected to the blog&\#x27;s line charts, arguing that the compared methods have no temporal relation and should be shown as bar charts.

**Tags**: `#machine learning`, `#transformers`, `#attention mechanisms`, `#model efficiency`, `#research`

---

<a id="item-tech-news-4"></a>
### [Skimming scripts reportedly used WebRTC on popular shopping sites](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

A Hacker News submission reports that credit-card skimming scripts found on popular shopping sites used WebRTC, presented as a detection-evasion variant rather than a new class of attack. The item supplies no underlying technical report, so the affected merchants, number of sites, script injection path, and campaign timing are unconfirmed. Commenters disputed that WebRTC is essential to the attack, arguing the same data exfiltration could be carried out with ordinary HTTP requests.

hackernews · scanr · Nov 27, 15:40 · [Discussion](https://news.ycombinator.com/item?id=50668145)

**「Background」** Web-skimming attacks of this type, often labeled Magecart, work by getting JavaScript onto an online store&\#x27;s checkout page — frequently through a compromised third-party script — so card details are copied as shoppers type them. WebRTC is a browser API for real-time peer-to-peer audio, video and data; commenters on the item argued that its traffic can sit outside a site&\#x27;s \`connect-src\` Content-Security-Policy rules, which would explain why attackers used it instead of ordinary HTTP requests.

**「What to check」** The practical task for e-commerce and checkout teams is auditing which third-party scripts run on payment pages and verifying that policy controls cover the channels those scripts can reach. One commenter speculated that WebRTC traffic may escape a site&\#x27;s connect-src CSP, but that was asserted in discussion rather than demonstrated by the report.

**「Commenter debate」** Several commenters argued the WebRTC angle is incidental: afavour and kevsamuel said the exfiltration could work over ordinary HTTP requests, and that the underlying failure is embedding third-party scripts or failing to restrict CSP. jszymborski cited the report as a reason not to feel bad about blocking ads, while snickerer argued browsers should receive data rather than execute remotely supplied code.

**Tags**: `#web security`, `#payment skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce security`

---

<a id="item-tech-news-5"></a>
### [Hacker News debate pushes back on false computer-checked proof critique](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

The linked critique examines false computer-checked proofs and proof-checker soundness, and what the risk means for formal-verification users. Hacker News commenters argued that major accepted proof bases are not protected by a single checker: Metamath&\#x27;s set.mm and iset.mm require five independently created verifiers in five programming languages, and Lean has multiple checkers. Commenters also cited a case in which a DeepMind researcher passed Lean and a then-week-old nanoda by exploiting a different bug in each, while disputing how far such cases generalize and arguing that historical soundness bugs are rare and hard to turn into a misleading result.

hackernews · \_tk\_ · Nov 27, 15:26 · [Discussion](https://news.ycombinator.com/item?id=50667989)

**「Background」** Computer-checked proofs rely on a proof checker to validate each step, so a soundness bug—one that lets the checker accept a false statement—undermines the guarantee the proof is supposed to provide. Such bugs have been reported for HOL Light, Mizar, Metamath, Isabelle, Lean, HOL98/HOL4, and Coq/Rocq, and in many cases were demonstrated exploitable.

**「Practical assurance gap」** Teams relying on proof assistants for high-stakes correctness claims should not treat one checker&\#x27;s acceptance as final: the discussion cites a proof that passed Lean and a then-week-old nanoda only by exploiting a different bug in each, so independent verification or expert review remains part of the assurance case.

**「Community discussion」** Commenters pushed back on the critique&\#x27;s practical implications, with dwheeler noting Metamath&\#x27;s five-verifier requirement and twotwotwo noting that Lean has multiple checkers. twotwotwo also cited the DeepMind researcher&\#x27;s Lean-and-nanoda case as evidence that multi-verifier assurance is not absolute, while gr\_norm argued that the known soundness bugs are few enough to fit in a tweet and remain a low practical risk for most software.

<details><summary>References</summary>
<ul>
<li><a href="https://cr.yp.to/proofs/falseccp.html">False computer-checked proofs (djb) - cr.yp.to</a></li>
<li><a href="https://daily.dev/posts/false-computer-checked-proofs-k95nubjp0">False computer-checked proofs - daily.dev</a></li>
<li><a href="https://news.lavx.hu/article/d-j-bernstein-catalogs-soundness-bugs-in-seven-proof-checkers">D. J. Bernstein catalogs soundness bugs in seven proof checkers</a></li>
<li>It is true soundness bugs have been found, and the Lean ... - Hacker News</li>

</ul>
</details>

**Tags**: `#formal verification`, `#proof assistants`, `#soundness bugs`, `#software correctness`, `#Lean`

---

<a id="item-tech-news-6"></a>
### [State attorneys general sue SpaceX over Grok-generated sexual abuse and revenge-porn images](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

Two state attorneys general have sued SpaceX, which the announcement identifies as the parent company of X and xAI and the company behind Grok, alleging that Grok generated child sexual abuse material and non-consensual intimate images, including revenge porn. The suit seeks to stop Grok from producing such material. The allegations have not been established in court, and the supplied material does not include the complaint, the requested relief, or a response from SpaceX or xAI.

hackernews · DeepLogin · Nov 27, 19:42 · [Discussion](https://news.ycombinator.com/item?id=50670855)

**「Background」** The suit names SpaceX, the corporate parent of X and xAI, as the defendant rather than the Grok developer itself, so the liability theory rests on the parent company&\#x27;s oversight of the model&\#x27;s image-generation features. Virginia&\#x27;s attorney general framed the case around X account holders allegedly being misled by the company, and Oregon Attorney General Dan Rayfield publicized the filing alongside Virginia. Reuters reported that the two states brought the action against &quot;SpaceX Super Intelligence Corp&quot; over a Grok feature the filing says the company profited from.

**「Legal exposure shifts to integrators」** For teams integrating Grok&\#x27;s image-generation features, the immediate consequence is provider-level legal risk: Virginia and Oregon are pursuing SpaceX over how Grok was built and promoted, not only over individual users&\#x27; prompts, so abuse-detection controls, acceptable-use enforcement, and prompt/output logging become material. xAI&\#x27;s reported practice of suing its own users over alleged misuse adds a separate liability channel, making indemnity and terms-of-service exposure worth reviewing.

**「Community discussion」** Commenters questioned how Grok produced such images if the material is already widely banned and whether users, rather than only the company, should face liability. One commenter asserted that U.S. Supreme Court precedent protects AI-generated child sexual abuse material made for personal use when no real children are depicted, while noting uncertainty about revenge porn; that legal assertion was not verified in the supplied material.

<details><summary>References</summary>
<ul>
<li>Attorneys General Jones and Rayfield File Suit Against SpaceX, Parent ...</li>
<li>We&#x27;re holding SpaceX accountable for allowing its Grok AI program to ...</li>
<li>Virginia, Oregon sue Musk&#x27;s SpaceX over Grok AI&#x27;s creation of ... - Reuters</li>
<li><a href="https://www.politico.com/news/2026/08/28/elon-musk-xai-lawsuits-grok-deepfakes-01053817">Musk’s AI company sues its users as victim lawsuits over Grok ...</a></li>
<li><a href="https://apnews.com/article/grok-lawsuit-elon-musk-ai-abuse-images-452cc64e7169a55868f797982d0e8238">Sexual images from Elon Musk&#x27;s AI chatbot harmed consumers ...</a></li>
<li><a href="https://www.reuters.com/legal/government/virginia-oregon-sue-musks-spacex-over-grok-ais-creation-child-sexual-abuse-2026-11-23/">Virginia, Oregon sue Musk&#x27;s SpaceX over Grok AI&#x27;s creation of ...</a></li>

</ul>
</details>

**Tags**: `#AI safety`, `#generative AI`, `#content moderation`, `#AI regulation`, `#xAI/Grok`

---

<a id="item-tech-news-7"></a>
### [SemiAnalysis: Trainium3 trades blows with GB300 on inference cost](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 7.0/10

SemiAnalysis has added AWS Trainium3 to its InferenceX and UBenchX inference benchmarks and published a microarchitecture deep dive, giving AI infrastructure teams a new comparison point against Nvidia GPUs. In its tests, a Trainium3 PDS plus vLLM configuration is reported to trade blows with, or beat, Nvidia GB300 on cost to generate tokens at total cost of ownership \(TCO\), and to trail only Nvidia&\#x27;s Vera Rubin across the full TCO-versus-p90-interactivity curve. The analysis credits Trainium&\#x27;s ML-first tile architecture and Descriptor Generation Engines with reaching peak HBM bandwidth utilization at small message sizes, which the authors say is not possible on Nvidia GPUs. These are SemiAnalysis benchmark claims made with AWS architecture-team assistance; the supplied excerpt gives no absolute performance numbers or independent reproduction.

rss · Semianalysis · Nov 27, 15:54

**「Context: Trainium and InferenceX」** Trainium is AWS&\#x27;s in-house family of machine-learning accelerators, positioned as an alternative to Nvidia&\#x27;s GPUs for training and inference; Nvidia&\#x27;s datacenter chips, by contrast, descend from graphics processors that have had AI-specific units such as Tensor Cores and TMA added generation by generation. SemiAnalysis&\#x27;s InferenceX is an open benchmark suite that replots each accelerator as a throughput-versus-latency frontier so systems can be compared on performance per total cost of ownership. In the source&\#x27;s framing, Trainium&\#x27;s ML-first design previously made software a &quot;humongous challenge&quot; — a penalty the author says no longer applies to Trainium3.

**「Impact」** AI infrastructure teams can use the results to weigh Trainium3&\#x27;s token economics against GB300 and Vera Rubin, but the ranking is tied to agentic coding sessions and a TCO-versus-p90-interactivity target. Buyers should validate their own latency target and vLLM configuration rather than treating the result as workload-independent.

**Tags**: `#AWS Trainium`, `#AI accelerators`, `#inference`, `#microarchitecture`, `#Nvidia`

---

<a id="item-tech-news-8"></a>
### [Microsoft expands built-in Windows drivers, starting with printers](https://www.techspot.com/news/114721-microsoft-wants-replace-most-third-party-device-drivers.html) ⭐️ 7.0/10

At Ignite 2026, Microsoft confirmed it is developing more in-box Windows class drivers to reduce third-party code running in the kernel. For printers, the company said that from July its Windows Ready Print platform will default new installations of compatible printers to the built-in IPP driver. Windows product manager Mehmet Kucukgoz said SoundWire and SDCA audio class drivers will soon become Windows components, while I3C bus, USB Ethernet, and MIPI camera class drivers are still in development. Microsoft also pointed to its May Driver Quality Initiative, which encourages vendors to prioritize compatible in-box class drivers.

telegram · zaihuapd · Nov 28, 02:09

**「Background」** Windows class drivers are Microsoft-supplied drivers that support a whole category of devices through a standard interface, allowing hardware to work without a vendor-written kernel driver. Microsoft&\#x27;s Driver Quality Initiative, launched in May, already encouraged manufacturers to prefer compatible in-box class drivers over third-party ones.

**「Impact」** For IT teams, the immediate effect is that newly installed compatible printers will use the inbox IPP driver by default from July, so deployments should validate print workflows and confirm which devices are covered. Because the change applies to compatible printers, organizations should inventory models rather than assume every existing device will move to the inbox driver.

<details><summary>References</summary>
<ul>
<li><a href="https://techcommunity.microsoft.com/blog/partnernews/introducing-windows-ready-print-and-modernized-driver-selection/4526895">Introducing Windows Ready Print and Modernized Driver ...</a></li>
<li><a href="https://4sysops.com/archives/windows-protected-print-and-ipp-internet-printing-protocol-eliminating-third-party-printer-drivers/">Windows Protected Print and IPP (Internet Printing Protocol ...</a></li>

</ul>
</details>

**Tags**: `#Windows`, `#device drivers`, `#Microsoft`, `#OS internals`, `#hardware compatibility`

---

## Financial News

<a id="item-finance-news-1"></a>
### [China&\#x27;s central bank cuts minimum purchase for large-denomination CDs to 100,000 yuan](https://www.news.cn/fortune/20261127/70789d77822242cc82216f51a416f872/c.html) ⭐️ 7.0/10

The People&\#x27;s Bank of China published new rules for large-denomination certificates of deposit on Nov 27, lowering the minimum individual purchase to 100,000 yuan from 200,000 yuan and the institutional minimum to 5 million yuan from 10 million yuan, effective March 21, 2027.

telegram · zaihuapd · Nov 27, 11:36

**「Background」** The measures replace the PBOC&\#x27;s 2015 interim rules and a 2016 announcement, and a companion regulation issued the same day requires financial institutions to set deposit and lending rates themselves and bars improper practices such as luring deposits with unusually high interest.

**Tags**: `#PBOC`, `#large-denomination CDs`, `#banking regulation`, `#deposit rates`, `#China retail savings`

---