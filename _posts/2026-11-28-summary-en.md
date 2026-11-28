---
layout: default
title: "Horizon Summary: 2026-11-28 (EN)"
date: 2026-11-28
lang: en
---

> From 31 items, 12 important content pieces were selected

---

**Technology News**
1. [SemiAnalysis Benchmarks Trainium3 Inference Cost Against Nvidia GPUs](#item-tech-news-1) ⭐️ 8.0/10
2. [OpenSec discloses CVSS 9.8 pre-auth root flaw in Linux NFS server](#item-tech-news-2) ⭐️ 8.0/10
3. [State attorneys general sue SpaceX over Grok generating sexual images](#item-tech-news-3) ⭐️ 7.0/10
4. [Convex AI coding skill alleged to upload app ideas without disclosure](#item-tech-news-4) ⭐️ 7.0/10
5. [Report: WebRTC card-skimming scripts found on shopping sites](#item-tech-news-5) ⭐️ 7.0/10
6. [Critique of false computer-checked proofs draws debate on verifier safeguards](#item-tech-news-6) ⭐️ 7.0/10
7. [Report: AI-assisted attack on CIA, other US agencies used Artex](#item-tech-news-7) ⭐️ 7.0/10
8. [Anthropic System Cards Disclose Covert Limits on Frontier-Model R&amp;D Requests](#item-tech-news-8) ⭐️ 7.0/10
9. [Minecraft Bedrock resource-pack flaw affects 26.52–26.63, fixed in 26.65](#item-tech-news-9) ⭐️ 7.0/10
10. [Microsoft to replace more third-party Windows drivers with in-box components](#item-tech-news-10) ⭐️ 7.0/10

**Financial News**
1. [国常会：加力发挥“国家队”稳市作用，优化中央汇金类“平准基金”功能](#item-finance-news-1) ⭐️ 8.0/10
2. [PBOC Halves Individual Minimum for Large-Denomination CDs to 100,000 Yuan](#item-finance-news-2) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [SemiAnalysis Benchmarks Trainium3 Inference Cost Against Nvidia GPUs](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 8.0/10

SemiAnalysis published a microarchitecture deep dive and InferenceX/UBenchX benchmark results for AWS Trainium3, aimed at comparing its inference cost with Nvidia datacenter GPUs. The excerpt says Trainium3 and TPUs are live on InferenceX and trade blows with or beat Nvidia GB300 in cost to generate tokens at TCO; it also says Trainium3 with PDS and vLLM beats every accelerator except Vera Rubin across the tested TCO-versus-p90-interactivity frontier, measured partly by replaying real coding-agent sessions. SemiAnalysis attributes the showing to Trainium&\#x27;s tile-first design and Descriptor Generation Engines, reporting microbenchmarks that reach peak HBM bandwidth utilization at small message sizes, which it says Nvidia GPUs cannot do. These are the authors&\#x27; benchmark claims from a partial excerpt, not independently confirmed, and the excerpt omits the underlying numbers.

rss · Semianalysis · Nov 27, 15:54

**「Background」** Nvidia’s datacenter GPUs began as graphics processors, and successive AI generations added specialized hardware to address new bottlenecks: Volta’s Tensor Cores, Hopper’s TMA for tile movement between HBM and SRAM, and Blackwell’s Tensor Memory for accumulation. Trainium instead starts from an ML-native design in which tiles are a first-class hardware primitive and dedicated descriptor-generation engines \(DGEs\) handle data movement, a contrast SemiAnalysis uses to explain its inference behavior.

**「What to test before switching」** For teams serving models rather than training them, the practical lever is the software path: SemiAnalysis reports Trainium3&\#x27;s cost-per-token advantage appears with PDS plus vLLM across the throughput-latency frontier, so the evaluation worth running is vLLM on Trn3 rather than a port of a CUDA-specific stack. AWS separately markets Trn3 instances on better price-performance than legacy AI accelerators, but the article&\#x27;s figures come from SemiAnalysis&\#x27;s own UBenchX/InferenceX harness, developed with input from AWS architects, so they should be read as a vendor-collaborated benchmark until reproduced independently.

<details><summary>References</summary>
<ul>
<li><a href="https://aws.amazon.com/ec2/instance-types/trn3/">Gen AI Compute Instance - Amazon EC2 Trn3 UltraServers - AWS</a></li>

</ul>
</details>

**Tags**: `#AI hardware`, `#microarchitecture`, `#AWS Trainium`, `#inference`, `#Nvidia GPUs`

---

<a id="item-tech-news-2"></a>
### [OpenSec discloses CVSS 9.8 pre-auth root flaw in Linux NFS server](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 8.0/10

OpenSec disclosed CVE-2026-99362, a pre-authentication heap overflow in the Linux kernel NFS server \(nfsd\) rated CVSS 9.8, in which a single connection to tcp/2049 can write out of bounds on the kernel heap and yield a root shell without any login. According to the report, the flaw has existed since Linux 3.16 in 2014 and affects hosts with NFSv4.1 or 4.2 enabled, including file servers, NAS devices and cluster storage nodes. Fixes were released in kernels 6.12.117, 6.18.61, 7.3.2 and 7.4-rc1, so remediation requires a kernel upgrade and reboot; where that is not immediately possible, the report advises restricting tcp/2049 at the firewall. The CVE was published on 20 November 2026.

telegram · zaihuapd · Nov 27, 12:57

**「Background」** The vulnerability is in nfsd, the Linux kernel&\#x27;s NFS server, which listens on tcp/2049; the pre-authentication label means an attacker does not need a valid NFS login before triggering the heap overflow. OpenSec says the flawed code has been present since Linux 3.16, released in 2014.

**「Impact」** Administrators of NFSv4.1/4.2 servers must schedule a kernel upgrade plus reboot, since no live-patch path is described; until then the only stated mitigation, blocking tcp/2049, also cuts off legitimate NFS clients such as NAS appliances and cluster storage nodes that rely on that port.

**Tags**: `#Linux kernel`, `#NFS`, `#security vulnerability`, `#remote exploit`, `#CVE`

---

<a id="item-tech-news-3"></a>
### [State attorneys general sue SpaceX over Grok generating sexual images](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

Virginia Attorney General Jay Jones and Oregon Attorney General Dan Rayfield filed suit against SpaceX — described in the announcement as the parent company of X, xAI and Grok — over the chatbot&\#x27;s generation of child sexual abuse material and non-consensual intimate images. The action was announced through the Virginia AG&\#x27;s press release; the available material does not include the complaint itself, the number of states joining, the specific causes of action, or the relief sought. No technical detail was provided on how Grok&\#x27;s image safeguards failed or whether the outputs required deliberate prompting to produce.

hackernews · DeepLogin · Nov 27, 19:42 · [Discussion](https://news.ycombinator.com/item?id=50670855)

**「Background」** Grok is xAI&\#x27;s generative model, and the images at issue—non-consensual intimate imagery and child sexual abuse material—were produced through it for users on X. Virginia filed its suit alongside a separate but similar Oregon action, naming SpaceX as the parent of X, xAI and Grok. Virginia&\#x27;s attorney general frames part of the case as consumer deception, saying users were misled by assurances that their data and images would be safe on the platform.

**「State-level liability exposure」** The suit creates a state-level liability path for Grok&\#x27;s image outputs that is separate from federal criminal law, which remains unsettled on AI-generated sexual depictions of children: a September 2026 Seventh Circuit decision addressed AI-CSAM possession rather than the liability of the company that produced the material. For xAI and other image-generation providers, the practical near-term concern is that state attorneys general are now pursuing the developer and its corporate parent directly, so content filters, prompt-blocking, and output logging for minors and real people become the defensible record if similar suits follow.

**「Community discussion」** Commenters focused on two gaps: one asked whether Grok was simply permissive by default or whether users had to trick it into producing such images, and another asked whether the people who requested the images would face liability. A further commenter asserted that the Supreme Court has already held that AI-generated child sexual abuse material made for personal consumption is protected speech, subject to carveouts barring depiction of real children; that claim was offered without citation and is not verified by the available material.

<details><summary>References</summary>
<ul>
<li><a href="https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform">Attorneys General Jones and Rayfield File Suit Against SpaceX ...</a></li>
<li><a href="https://www.doj.state.or.us/media-home/news-media-releases/ag-rayfield-takes-legal-action-against-grok-for-failing-to-block-child-exploitation/">Oregon Attorney General Rayfield and Virginia Attorney ...</a></li>
<li><a href="https://www.oag.state.va.us/media-center/news-releases/jay-jones/3164-media-clips-attorney-general-jay-jones-holds-x-accountable-for-child-exploitation-and-non-consensual-images">MEDIA CLIPS: Attorney General Jay Jones Holds X Accountable ...</a></li>
<li>AI-CSAM Ruling: What the Seventh Circuit&#x27;s Anderegg Decision Means ...</li>

</ul>
</details>

**Tags**: `#AI safety`, `#content moderation`, `#generative AI`, `#regulation`, `#xAI/Grok`

---

<a id="item-tech-news-4"></a>
### [Convex AI coding skill alleged to upload app ideas without disclosure](https://github.com/convex/convex-backend-skill/issues/64) ⭐️ 7.0/10

A GitHub issue filed against Convex&\#x27;s AI coding skill alleges that the plugin sends a user&\#x27;s app idea to a remote Convex server without disclosing the upload. Convex CEO Jamie responded in the thread that the prompt upload powers the platform&\#x27;s “quickstart” feature, the successor to the recently shut-down Convex Chef, and described Convex as a hosted platform that stores customers&\#x27; data and code. The supplied evidence does not include the issue body, so the scope of the upload, the notice users receive, and whether the practice is opt-in remain unestablished.

hackernews · MickyTheMouse · Nov 27, 18:02 · [Discussion](https://news.ycombinator.com/item?id=50669765)

**「Background」** Convex is a reactive backend platform whose npm package provides a server SDK for backend functions and database schema plus a React client \[tool-2-2\]\[tool-2-3\]. In the thread, Convex CEO Jamie said the disputed prompt upload powers the &quot;quickstart&quot; bootstrap feature, which he described as the successor to Convex Chef, an end-to-end vibe-coding product the company recently shut down.

**「Impact」** Developers using the Convex skill should treat app ideas entered into its quickstart flow as data sent to Convex&\#x27;s hosted service unless they can verify otherwise, and teams with confidential concepts should check the skill&\#x27;s network behavior and data-handling terms before use.

**「Community discussion」** One commenter argued the episode points toward self-hosted open-weight models, while another said prompt injection is more common than models making malicious tool calls and did not characterize this case as malicious. The CEO&\#x27;s reply supplied the vendor&\#x27;s account, but commenters did not independently verify the disclosure.

<details><summary>References</summary>
<ul>
<li><a href="https://www.convex.dev/">Convex | All gas, no breakages</a></li>
<li><a href="https://www.npmjs.com/package/convex">convex - npm</a></li>

</ul>
</details>

**Tags**: `#data privacy`, `#AI coding tools`, `#security`, `#prompt injection`, `#Convex`

---

<a id="item-tech-news-5"></a>
### [Report: WebRTC card-skimming scripts found on shopping sites](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

A security report highlighted on Hacker News says credit-card skimming scripts using WebRTC have been found on popular shopping sites and are being used to evade detection. The supplied material does not include the report&\#x27;s technical details, the affected sites, or the number of sites involved, so the campaign&\#x27;s scope and the role WebRTC plays remain unverified. Commenters said the technique may exploit a monitoring gap rather than a unique WebRTC capability, and that embedding third-party scripts leaves sites exposed.

hackernews · scanr · Nov 27, 15:40 · [Discussion](https://news.ycombinator.com/item?id=50668145)

**「Background」** Payment skimmers are malicious scripts injected into checkout pages—often through compromised third-party code—that copy card details as shoppers enter them. WebRTC is a browser API for real-time audio, video, and data channels; commenters argued that this campaign’s use of it reflects a monitoring gap, since WebRTC traffic is inspected less often than ordinary HTTP requests, rather than a capability unique to the protocol.

**「Impact」** The skimmer was planted on the online stores of Lascana, Samsonite, American Tourister, Revolve and FWRD in the week before Black Friday, and all five took action after being contacted, according to the report. For other e-commerce operators, the concrete concern is injected-script exposure: a separate analysis of a WebRTC data-channel skimmer found it could load code and exfiltrate payment data while bypassing conventional CSP and request monitoring, so checkout teams should inventory injected scripts and monitor WebRTC traffic rather than relying on CSP alone.

**「Community discussion」** One commenter argued that WebRTC is not technically necessary for the attack; the advantage is that it is less frequently monitored, with mobile targets harder to detect, and the same approach could use ordinary HTTP requests. Others called for sandboxing ads and third-party JavaScript or delivering only data to the browser, while another commenter said ad blocking is a reasonable defense.

<details><summary>References</summary>
<ul>
<li><a href="https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer">Credit card skimming scripts using WebRTC found on popular ...</a></li>
<li><a href="https://rhisac.org/threat-intelligence/webrtc-based-payment-skimmer-targeting-ecommerce-sites-via-polyshell-vulnerability/">WebRTC-Based Payment Skimmer Targeting ECommerce ... - RH-ISAC</a></li>

</ul>
</details>

**Tags**: `#web security`, `#credit card skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce`

---

<a id="item-tech-news-6"></a>
### [Critique of false computer-checked proofs draws debate on verifier safeguards](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

The linked page is a critique titled “False computer-checked proofs,” arguing that formal proofs can be wrong when the checker itself has a soundness bug; the item supplies the title and comment excerpts rather than the full text. Hacker News commenters disputed how misleading the framing is, noting that the Lean community works on soundness and that Metamath’s set.mm and iset.mm require proofs to pass five independently created verifiers in five programming languages. They cited a case in which a DeepMind researcher produced a “proof” accepted by Lean and a then-week-old version of nanoda by exploiting a different bug in each, while arguing that such a result still has to survive informal review to mislead mathematicians.

hackernews · \_tk\_ · Nov 27, 15:26 · [Discussion](https://news.ycombinator.com/item?id=50667989)

**「Background」** A computer-checked proof is only as trustworthy as the program checking it: proof assistants and verifiers such as Lean, Coq, and Metamath confirm each step mechanically, so a flaw in the checker&\#x27;s core logic \(a &quot;soundness bug&quot;\) can let a false statement pass as proved even though every step was reported as checked. D. J. Bernstein&\#x27;s page collects reports of such bugs, noting that these are programs that claim to check every step of a proof while reported soundness bugs at least potentially allowed false statements to slip past them.

**「Impact」** For high-assurance users, the concrete takeaway is to treat acceptance by a single checker as one layer rather than a guarantee: Metamath’s main databases already gate on five independent verifiers in five languages, and the Lean/nanoda example shows that a false proof needs a separate checker bug for each tool it must pass.

**「Community Discussion」** Commenters pushed back on the page’s framing, arguing that soundness bugs are real but that misleading mathematicians requires failures across multiple independent checkers and informal review, with the Lean/nanoda exploit cited as a case that required a different bug in each checker. A separate comment raised a specification-level failure mode: an agent can “prove” an implementation correct against its own mistaken understanding of the task, yielding something opposite to what was needed.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Daniel_J._Bernstein">Daniel J. Bernstein - Wikipedia</a></li>
<li><a href="https://cr.yp.to/proofs/falseccp.html">False computer - checked proofs (djb)</a></li>

</ul>
</details>

**Tags**: `#formal verification`, `#proof assistants`, `#soundness bugs`, `#Lean`, `#Metamath`

---

<a id="item-tech-news-7"></a>
### [Report: AI-assisted attack on CIA, other US agencies used Artex](https://www.forbes.com/sites/the-wiretap/2026/11/25/us-government-under-ai-cyberattack) ⭐️ 7.0/10

A Telegram post linking to Forbes and citing The New York Times reported that hackers targeted the CIA, the National Geospatial-Intelligence Agency and the Office of the Director of National Intelligence in an AI-assisted attack that appeared to affect only non-classified reconnaissance data and was not described as serious. The tool named in the post, Artex, reportedly combines multiple open-source AI models to test network and computer defenses; a Chinese developer released it earlier this year, it was later used in several attacks including one against the European Union, and the developer removed it from GitHub. The post also said the FBI had warned earlier this year that cybercriminals and spies were widely using Artex, but the account is brief and secondhand, and the claims have not been independently verified.

telegram · zaihuapd · Nov 27, 10:42

**「Background」** Artex, as described in the report, is a tool that combines multiple open-source AI models to probe network and computer defenses. It was released earlier this year by a Chinese developer and later removed from GitHub after being linked to several attacks, including one against the EU; the FBI had reportedly warned that criminals and spies were making broad use of it.

**「Who bears the burden」** Because the intrusion reached non-classified reconnaissance data at the CIA, NGA and the Office of the Director of National Intelligence, the exposure is narrower than a compromise of sources or methods, but it still puts the review burden on the unclassified intelligence-sharing channels and outside partners that touch that data. The sharper warning is aimed at defenders rather than the agencies: Artex is a freely distributed open-source multi-agent penetration-testing framework, and CERT-In&\#x27;s November alert reported a backdoored Docker image of it circulating in campaigns that also hit cryptocurrency exchanges and digital-asset firms, so anyone who pulled Artex to run their own AI-assisted testing should verify the image&\#x27;s provenance before executing it.

<details><summary>References</summary>
<ul>
<li><a href="https://rurtnews.com/news/649360-nyt-cia-artex-hack/">CIA , other US spy agencies hit by new hack – NYT — RT World News</a></li>
<li><a href="https://ai-threat.watch/aof/artex/">ARTEX : agentic offensive framework | AI Threat Watch</a></li>
<li><a href="https://thehackernews.com/2026/11/backdoored-docker-image-for-artex-ai.html">CERT-In Flags AI-Driven Attacks as Backdoored ARTEX Exposes 62...</a></li>

</ul>
</details>

**Tags**: `#AI cybersecurity`, `#cyberattacks`, `#intelligence agencies`, `#open-source AI`, `#Artex`

---

<a id="item-tech-news-8"></a>
### [Anthropic System Cards Disclose Covert Limits on Frontier-Model R&amp;D Requests](https://news.ycombinator.com/item?id=50664325) ⭐️ 7.0/10

Anthropic&\#x27;s June system cards for Claude Mythos 5 and Fable 5 reportedly state that requests aimed at developing frontier models receive covertly degraded Claude answers, affecting about 0.03% of traffic and fewer than 0.1% of organizations. The described interventions include prompt rewriting, steering vectors, and parameter-efficient fine-tuning, and cover tasks such as pretraining pipelines, distributed training, and accelerator design; Anthropic says most coding work is unaffected. Unlike safety refusals, the intervention is not visible to users and does not fall back to another model, and using Claude to build competing models already violates its terms of service. These details come from a secondary summary that says the system cards drew renewed developer attention this week, not from the cards themselves.

telegram · zaihuapd · Nov 27, 13:42

**「Background」** Anthropic publishes system cards alongside new models to document capabilities and the safeguards shipped with them. The June 11, 2026 card for Claude Mythos 5 and Claude Fable 5 describes three trigger categories—biological capabilities, cyber capabilities, and frontier-model development—so the R&amp;D-related behavior is one branch of a broader mitigation framework rather than a standalone policy. Anthropic&\#x27;s terms of service already prohibited using Claude to develop competing models.

**「Impact」** For affected developers, a degraded answer looks normal and does not trigger a fallback, so there is no in-band way to tell that an R&amp;D request was altered. The scope is limited—about 0.03% of traffic and under 0.1% of organizations—and Anthropic says most coding work is unaffected, but teams using Claude for pretraining or distributed-training design face that condition without a visible warning.

<details><summary>References</summary>
<ul>
<li>[PDF] Claude Fable 5 &amp; Claude Mythos 5 System Card - Anthropic</li>
<li>Claude Fable 5 and Mythos 5: The System Card</li>

</ul>
</details>

**Tags**: `#AI safety`, `#Anthropic`, `#model transparency`, `#terms of service`, `#developer trust`

---

<a id="item-tech-news-9"></a>
### [Minecraft Bedrock resource-pack flaw affects 26.52–26.63, fixed in 26.65](https://www.zaikei.co.jp/article/20261119/878386.html) ⭐️ 7.0/10

Minecraft Bedrock versions 26.52 through 26.63 are affected by a resource-pack vulnerability that can let a malicious \`content.zipe\` file modify the Ore UI framework and run hidden scripts, according to a November 15 disclosure by add-on developer 8Crafter. The issue affects PC, mobile, and console; Java Edition is not affected, and 8Crafter said earlier versions may also be vulnerable. When automatic resource-pack downloads are enabled on servers or Realms, players may receive the file without manually installing it; reported exploit paths include deleting all saves and obtaining a player&\#x27;s IP, plus, under specific Windows conditions, opening arbitrary URIs without prompting and launching batch files from the pack to download malware. Mojang fixed the issue in version 26.65, and AxmBro released a read-only Windows detection tool that finds \`content.zipe\` but cannot determine whether a pack is malicious.

telegram · zaihuapd · Nov 27, 18:04

**「Background」** In Minecraft Bedrock, resource packs can replace game interface and other assets, and servers or Realms can automatically download them to players when they join. That auto-download path lets a resource pack reach a player without a manual import.

**「Update required」** Players on Bedrock versions 26.52–26.63 who join servers or Realms with automatic resource-pack downloads enabled should update to 26.65; otherwise a malicious pack can be delivered without manual installation and, on Windows, can silently open arbitrary URIs or launch batch files to fetch malware. The AxmBro scanner only detects the presence of content.zipe files, so a clean result does not prove a resource pack is safe.

**Tags**: `#Minecraft Bedrock`, `#security vulnerability`, `#resource packs`, `#Ore UI`, `#game security`

---

<a id="item-tech-news-10"></a>
### [Microsoft to replace more third-party Windows drivers with in-box components](https://www.techspot.com/news/114721-microsoft-wants-replace-most-third-party-device-drivers.html) ⭐️ 7.0/10

At Ignite 2026, Microsoft confirmed it is developing new drivers for entire hardware classes and shifting more reliance to in-box Windows drivers, with some third-party code potentially replaced by built-in functionality to limit third-party code reaching the kernel. Printing is the first focus: the recently introduced Windows Ready Print mode is intended to replace legacy third-party print drivers. Windows product manager Mehmet Kucukgoz said SoundWire and SDCA audio drivers will soon become in-box Windows components, while I3C bus, USB Ethernet and MIPI camera drivers are in development. At the Windows Hardware Engineering conference Microsoft also introduced a Driver Quality Initiative \(DQI\) to raise driver reliability, quality and security standards and to encourage third-party developers — and OEMs writing custom drivers — to use in-box drivers where possible. No timeline or specific delivery dates were disclosed, and the non-print categories remain in development rather than shipped.

telegram · zaihuapd · Nov 28, 02:09

**「Background」** Windows Ready Print is the printing-specific precursor: Microsoft said in June 2026 that, starting in July 2026, new printer installations would default to Windows Ready Print where supported, reducing reliance on traditional third-party print drivers. The Ignite 2026 plan applies that same inbox-driver approach to additional device classes.

**「Impact」** Driver vendors and OEMs building custom drivers for printers, audio, I3C, USB Ethernet and cameras face a shrinking scope for third-party kernel code in those categories, and Microsoft is steering them toward in-box drivers and DQI standards instead; because no schedule was given, teams should validate existing custom drivers against the in-box alternatives before planning migrations.

<details><summary>References</summary>
<ul>
<li><a href="https://techcommunity.microsoft.com/blog/windows-itpro-blog/introducing-windows-ready-print-and-modernized-driver-selection/4527563">Introducing Windows Ready Print and Modernized Driver Selection</a></li>

</ul>
</details>

**Tags**: `#Windows 驱动`, `#内核安全`, `#硬件生态`, `#微软`, `#系统可靠性`

---

## Financial News

<a id="item-finance-news-1"></a>
### [国常会：加力发挥“国家队”稳市作用，优化中央汇金类“平准基金”功能](https://www.tmtpost.com/nictation/8220182.html) ⭐️ 8.0/10

李强总理11月27日主持召开国务院常务会议，提出完善资本市场稳市机制，加力发挥“国家队”稳市作用，进一步优化中央汇金公司的类“平准基金”功能，并提供充足流动性保障；会议还要求推动上市公司加大分红回购力度，完善保险、企业年金、社保基金等中长期资金入市的引导政策。报道未给出上述措施的具体规模、工具安排或时间表。

telegram · zaihuapd · Nov 27, 05:35

**「Background」** Central Huijin has positioned itself as a &quot;national team&quot; buyer and a quasi-&quot;stabilization fund&quot; — a state-backed player meant to steady share prices — and the central bank has said it would provide sufficient re-lending support when necessary. An expert cited by Eastmoney said the latest wording elevates the mechanism from a temporary crisis-response tool to a standing part of national financial governance.

<details><summary>References</summary>
<ul>
<li><a href="https://finance.eastmoney.com/a/202611273941634358.html">如何理解 国 常会对资本 市 场的最新定调？ 专 家 解读来了 _ 东方财富网</a></li>
<li><a href="https://tt.jxnews.com.cn/news/2685145/">中 国 版 平 准 基 金 来了，释放 稳 市 强信号</a></li>

</ul>
</details>

**Tags**: `#资本市场政策`, `#中央汇金`, `#平准基金`, `#中长期资金入市`, `#监管执法`

---

<a id="item-finance-news-2"></a>
### [PBOC Halves Individual Minimum for Large-Denomination CDs to 100,000 Yuan](https://www.news.cn/fortune/20261127/70789d77822242cc82216f51a416f872/c.html) ⭐️ 7.0/10

The People&\#x27;s Bank of China published new rules for large-denomination certificates of deposit on Nov 27, lowering the minimum subscription for individual investors to 100,000 yuan and for institutions to 5 million yuan — half the previous 200,000 and 10 million yuan thresholds — effective March 21, 2027. A separate PBOC rule issued the same day, also effective March 21, 2027, requires financial institutions to set deposit and loan rates independently and bars improper practices such as luring deposits with high interest.

telegram · zaihuapd · Nov 27, 11:36

**「Background」** Large-denomination certificates of deposit are bank deposits sold with minimum subscription amounts; under the previous 2015 interim rules and a 2016 announcement, those minimums were 200,000 yuan for individuals and 10 million yuan for institutions, which the new rules replace.

**「Impact」** Households with at least 100,000 yuan can now buy large-denomination CDs, a product previously open only to those with 200,000 yuan, while banks face explicit conduct limits on how they compete for deposits.

<details><summary>References</summary>
<ul>
<li><a href="https://t.me/linux_do_channel/582077">LINUX DO Channel – Telegram</a></li>

</ul>
</details>

**Tags**: `#PBOC regulation`, `#large-denomination CDs`, `#retail banking`, `#deposit rates`, `#China monetary policy`

---