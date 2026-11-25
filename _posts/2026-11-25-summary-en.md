---
layout: default
title: "Horizon Summary: 2026-11-25 (EN)"
date: 2026-11-25
lang: en
---

> From 27 items, 10 important content pieces were selected

---

**Technology News**
1. [OpenAI preprint claims 9/4 matrix multiplication exponent](#item-tech-news-1) ⭐️ 8.0/10
2. [VMware vCenter vmdir auth bypass CVE-2026-123903 patched after zero-day](#item-tech-news-2) ⭐️ 8.0/10
3. [OpenAI says GPT-6.2 designed minibinders, but specialized models filled key steps](#item-tech-news-3) ⭐️ 7.0/10
4. [Ternary Bonsai 2.5 27B ships as a ternary-quantized local model](#item-tech-news-4) ⭐️ 7.0/10
5. [GreyNoise reports active intrusion campaign against Check Point management servers](#item-tech-news-5) ⭐️ 7.0/10
6. [Community recompilation runs leaked GTA 6 Xbox build on Windows](#item-tech-news-6) ⭐️ 7.0/10
7. [Simon Willison charts three LLM inflection points in twelve months](#item-tech-news-7) ⭐️ 7.0/10

**Financial News**
1. [Nvidia&\#x27;s Jensen Huang returns as CEO after reported resignation](#item-finance-news-1) ⭐️ 8.0/10
2. [Xiaomi Q3 2026 adjusted net profit falls 56.8% as EV deliveries top 100,000](#item-finance-news-2) ⭐️ 7.0/10
3. [SpaceX forgoes $738 million in federal broadband subsidies to give away Starlink gear](#item-finance-news-3) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [OpenAI preprint claims 9/4 matrix multiplication exponent](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) ⭐️ 8.0/10

An OpenAI math preprint shared on Hacker News claims the matrix multiplication exponent is exactly 9/4, or Θ\(n^2.25\), over every field. The work is an unverified preprint, and commenters describe its new contribution as a lower bound of Ω\(n^2.25\), since an O\(n^2.25\) upper bound was already known. A recent algorithm reaching that bound is reported to be far from practical.

hackernews · E-Reverance · Nov 25, 01:19 · [Discussion](https://news.ycombinator.com/item?id=50637220)

**「Background」** Matrix multiplication cost is conventionally described by the exponent ω, the infimum such that n×n matrix products can be computed in O\(n^ω\) arithmetic operations, while the algorithms in practical use remain cubic. OpenAI&\#x27;s preprint, posted to its public openai/math GitHub repository on November 24, 2026, claims ω equals exactly 9/4 over every field, a claim coverage characterizes as the biggest shift in matrix-multiplication bounds since 1979.

**「Practical impact」** If the preprint’s claimed Ω\(n^2.25\) lower bound survives verification, it would rule out an O\(n^2\) matrix-multiplication algorithm, but it offers no near-term speedup for numerical-library users: commenters note that the known O\(n^2.25\) algorithm is far from practical.

**「Community discussion」** Commenters focused on correcting the headline: one said the result proves a lower bound Ω\(n^2.25\), not a new O\(n^2.25\) upper bound, and another said the title should use Θ\(n^2.25\) or “the matrix multiplication exponent is nine fourths.” Others questioned the provenance, noting that the work reportedly came from an unreleased model and that its recipe was not disclosed.

<details><summary>References</summary>
<ul>
<li><a href="https://cryptobriefing.com/openai-matrix-multiplication-exponent-9-4/">OpenAI preprint claims the matrix multiplication exponent is ...</a></li>
<li><a href="https://letsdatascience.com/news/openai-preprint-claims-matrix-multiplication-exponent-is-exa-7997d3b1">OpenAI preprint claims matrix multiplication exponent is ...</a></li>

</ul>
</details>

**Tags**: `#matrix multiplication`, `#algorithms`, `#complexity theory`, `#OpenAI`, `#AI for math`

---

<a id="item-tech-news-2"></a>
### [VMware vCenter vmdir auth bypass CVE-2026-123903 patched after zero-day](https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html) ⭐️ 8.0/10

Broadcom has released patches for 23 vulnerabilities across the VMware product line, centered on an authentication bypass in vCenter&\#x27;s directory service \(vmdir\) tracked as CVE-2026-123903 with a CVSS score of 9.8. According to the report, anyone who can reach vCenter over the network can exploit the flaw to bypass authentication and get into the system without credentials. The vulnerability was reportedly exploited as a zero-day just days before the fix. The report is a short aggregation and does not identify which vCenter versions are affected, how the zero-day was used, or what mitigations exist short of patching.

telegram · zaihuapd · Nov 24, 14:50

**「Background」** vmdir is the directory service that handles identity and authentication for vCenter, which is why a bypass there lets an attacker in without a valid account — the only precondition the report states is network reachability to the vCenter instance.

**「Impact」** For infrastructure teams, the practical exposure is any vCenter endpoint reachable from untrusted networks, since exploitation requires no credentials; because the report does not list affected versions or interim workarounds, administrators must confirm applicability against Broadcom&\#x27;s own release documentation rather than the summary.

**Tags**: `#vCenter`, `#VMware`, `#vulnerability`, `#zero-day`, `#security`

---

<a id="item-tech-news-3"></a>
### [OpenAI says GPT-6.2 designed minibinders, but specialized models filled key steps](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) ⭐️ 7.0/10

OpenAI reports that GPT-6.2, given the three-dimensional structures of five target proteins with the intended minibinder attachment sites marked, wrote code to produce three-dimensional designs for potential minibinders without using specialized protein AI models. The same account states that converting those designs into proteins testable in the lab required amino acid sequences, which the specialized model SolubleMPNN suggested for each design, and that other specialized protein models helped select candidates predicted to fold as designed and bind at the intended site. The claimed capability is therefore code-level generation of 3D designs at the front of a workflow whose sequence design and candidate filtering still depend on domain-specific models; the excerpts available here include no independently verified wet-lab results. The framing that this goes &quot;beyond specialized models&quot; is a vendor characterization of a computational result, not a demonstrated replacement of those models.

hackernews · acossta · Nov 24, 21:02 · [Discussion](https://news.ycombinator.com/item?id=50634658)

**「Background」** Protein-design workflows have generally relied on specialized biology models for steps such as suggesting amino acid sequences that fold into a proposed structure and selecting candidates predicted to fold and bind at the intended site. OpenAI&\#x27;s preprint, titled “GPT-6 as a Universal Foundation Model for Protein Biology: Beyond Specialized Models,” instead claims that the GPT-6 family can design new protein structures and sequences using reasoning and general-purpose coding tools without specialized biology models.

**「Practical impact」** Protein-design teams should treat GPT-6 as an orchestration layer rather than a replacement for specialized structure and sequence models: the described workflow still depends on tools such as SolubleMPNN for sequence suggestion and other protein models for candidate filtering, so adoption requires integrating those tools and validating designs experimentally. A secondary account of the OpenAI work reports a 10.9% minibinder binding rate in lab tests, indicating that teams should expect substantial screening rather than assuming generated designs are ready to use.

**「Community discussion」** Commenters pushed back on the announcement&\#x27;s framing: fabian2k asked what GPT-6.2 actually designed given that amino acid sequence encodes protein structure, and plaidfuji called &quot;beyond specialized models&quot; premature, describing LLMs instead as a &quot;glue layer&quot; that can coordinate highly specialized tools and sometimes outperform them on individual sub-tasks. joe-esquibel characterized the presented evidence as heavy on computational exploration and light on biological controls from the lab, an assessment offered in the thread rather than an established finding.

<details><summary>References</summary>
<ul>
<li><a href="https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/">GPT-6 models demonstrate intrinsic protein-design ... - OpenAI</a></li>
<li><a href="https://letsdatascience.com/news/openai-reports-gpt-6-models-can-design-proteins-with-lab-evi-b0ee33c8">OpenAI Reports GPT-6 Models Can Design Proteins With Lab ...</a></li>
<li><a href="https://explainx.ai/blog/openai-gpt-6-intrinsic-protein-design-onava-lab-binding-november-2026">GPT-6 Protein Design: 10.9% Minibinder Hits in Lab Tests ...</a></li>

</ul>
</details>

**Tags**: `#protein design`, `#GPT-6`, `#AI for science`, `#specialized models`, `#OpenAI`

---

<a id="item-tech-news-4"></a>
### [Ternary Bonsai 2.5 27B ships as a ternary-quantized local model](https://prismml.com/news/bonsai-2-5-27b) ⭐️ 7.0/10

Ternary Bonsai 2.5 27B is a 27B-parameter local model built around ternary quantization and distributed as a Q2 GGUF, positioned for inference on consumer hardware. The release note itself was not included in the supplied material, so the vendor&\#x27;s own benchmark numbers, licensing terms and quantization recipe cannot be checked here; the concrete figures available come from early users. One commenter reports 22–25 tokens/s generation on a Mac Mini M5 Pro with 24 GB RAM, with prompt processing around 223 tokens/s and 1,860 tokens generated in an 83-second run, and says the full 128k context fits in memory comfortably. Another commenter claims the model scores roughly on par with Opus 4.6 on SWE-bench Verified, while noting the comparison may partly reflect benchmark saturation and frontier-level scores reaching small models with a delay.

hackernews · b0m · Nov 24, 20:08 · [Discussion](https://news.ycombinator.com/item?id=50633922)

**「Background」** Ternary quantization constrains weights to three levels \(typically -1, 0 and +1 with a shared scale\), which cuts memory footprint and memory bandwidth well below 4-bit or 8-bit schemes at some cost in accuracy; the Q2 GGUF packaging places the model in the llama.cpp-style local inference ecosystem. The &quot;2.5&quot; version number implies a prior Bonsai release, and at least one commenter benchmarks the two directly.

**「Impact」** For developers considering local agentic coding, the reported combination of roughly 22–25 tokens/s and a 128k context that fits in 24 GB of unified memory is the deciding constraint, since it determines whether long tool-use loops run on a laptop or Mac Mini rather than a GPU server. All of these numbers are single-machine, self-reported results, so teams should re-measure throughput and task success on their own hardware and prompts before substituting the model for a hosted frontier model.

**「Community Discussion」** One commenter ran an eight-task long-horizon benchmark on a Mac: Bonsai 2 passed 5 of 8 tasks in 358 steps and 107 minutes, while Bonsai 2.5 passed the same 5 of 8 in 296 steps \(17% fewer\) and 76 minutes \(29% less\), with per-token speed unchanged. Others asked for head-to-head results against equivalently quantized small models in the 1B–10B range, and one commenter questioned how much of the SWE-bench parity claim reflects genuine capability versus the benchmark and a roughly six-month lag in frontier-level scores appearing in small models.

**Tags**: `#local LLMs`, `#quantization`, `#ternary models`, `#model benchmarks`, `#agentic coding`

---

<a id="item-tech-news-5"></a>
### [GreyNoise reports active intrusion campaign against Check Point management servers](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) ⭐️ 7.0/10

Operators of Check Point security management servers are the target of an active intrusion campaign, according to GreyNoise. The exploitation path described in the report and relayed in comments begins with repeated POSTs to an HFS loginSrp1 endpoint, each returning a signed session cookie with a &quot;sid&quot; drawn from JavaScript&\#x27;s Math.random\(\). Collecting enough outputs let the actor reconstruct the Node.js V8 PRNG state, recover an HFS session-cookie signing key, and forge a signed admin session cookie. The report excerpt discussed does not establish how initial access was obtained, and affected versions and victim counts are not identified.

hackernews · louiereederson · Nov 24, 16:32 · [Discussion](https://news.ycombinator.com/item?id=50630594)

**「The vulnerability behind the campaign」** The campaign centers on CVE-2026-16232, an authentication bypass in the Check Point SmartConsole login process that lets an unauthenticated remote attacker obtain an application login token and use it to authenticate with full administrative privileges. Check Point&\#x27;s own advisory \(sk185169\) states that successful remote exploitation requires internet access to the Management Server IP address and no restrictions on Trusted Clients, the configuration conditions that would have left affected management servers reachable by the actors.

**「Exposure of management servers is the actionable risk」** The concrete action for defenders is to remove direct internet exposure from Check Point Security Management and Multi-Domain Security Management Servers and apply the vendor fix: Check Point&\#x27;s advisory for CVE-2026-93616, a directory-traversal and file-upload flaw rated CVSS 9.8, states it has been exploited in the wild and that a handful of customers were attacked. GreyNoise attributes the actor&\#x27;s command delivery to a script it describes as an adaptation of the Metasploit module for CVE-2026-16232, and commenters questioned whether every affected organization really had its management server reachable from the internet — a point the supplied material does not resolve.

**「Community discussion」** Commenters pressed on initial access, with one asking whether the apparent link to CVE-2026-16232 means every affected organization had exposed its Check Point Security Management Server to the internet. Another thread argued that Math.random\(\) should be made secure by default rather than leaving hundreds of applications to use it correctly.

<details><summary>References</summary>
<ul>
<li><a href="https://support.checkpoint.com/results/sk/sk185169">sk185169 - CVE-2026-16232 - Authentication bypass with ...</a></li>
<li><a href="https://nvd.nist.gov/vuln/detail/cve-2026-16232">NVD-CVE-2026-16232</a></li>
<li><a href="https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign">An Active Intrusion Campaign Against Check Point Security ...</a></li>
<li><a href="https://support.checkpoint.com/results/sk/sk1000171/">sk1000171 - CVE - 2026 -93616: Directory Traversal and File upload...</a></li>

</ul>
</details>

**Tags**: `#cybersecurity`, `#Check Point`, `#PRNG state recovery`, `#session-cookie forgery`, `#intrusion campaign`

---

<a id="item-tech-news-6"></a>
### [Community recompilation runs leaked GTA 6 Xbox build on Windows](https://twitter.com/raul_bs3/status/2125213756238291075) ⭐️ 7.0/10

A community recompilation effort has posted video of the leaked Xbox build of GTA 6 running on Windows; the primary artifact is a short social-media clip with no accompanying technical write-up or code. Commenters describe two related projects, xcl and Victory, taking a Wine-like recompilation approach rather than decompiling and porting the game, and say the leaked binary carries no special DRM or obfuscation that would have to be defeated. The build itself is attributed in discussion to a leak by Cyberleek, and the described remaining work is compatibility and graphics rather than code protection. These details are secondhand, relayed through Hacker News comments, and are not independently verified by the supplied material.

hackernews · andrem · Nov 24, 13:19 · [Discussion](https://news.ycombinator.com/item?id=50627783)

**「Background」** These attempts follow a leak: an Xbox Series build of GTA 6, including the game executable, surfaced online in November 2026, with one report putting the data at roughly 209GB. Because Xbox consoles share much of the Windows stack and the binary reportedly carries no heavy DRM or obfuscation, community projects have treated it as a compatibility problem — XCL, described as a general Xbox Series compatibility layer for Windows, was reported to be getting past the Rockstar splash screen, while a status roundup described multiple projects reaching the 4K intro video. A separate GTA 6 PC port effort, Leonida, was reported canceled within days of the leak.

**「The demo didn&\#x27;t survive distribution」** The practical consequence for anyone who saw the video and wanted to try it: the project behind the Windows run is gone. Take-Two issued a DMCA takedown against Project Leonida, the effort by 15-year-old developer &quot;NotRexed&quot; to translate the leaked GTA VI Xbox build to run natively on Windows, and its Discord and GitHub servers were taken offline, with the host account banned for two years, per Tom&\#x27;s Hardware. Eurogamer reports the shutdown came mere hours after the modders got the game running on PC, which suggests the enforcement target is the distribution channel — public repositories and a Discord that had grown to roughly 180,000 members — rather than the recompilation technique itself.

**「Community Discussion」** A commenter describing the technical picture \(Tiberium\) argued that modern Xbox hardware is close enough to a Windows PC that running the game code is mainly a compatibility and graphics problem, with no special DRM or obfuscation in the leaked binary. Others disputed the framing: pipes asked why a leaked build was necessary for recompilation at all and predicted publishers might move components to the cloud to prevent it, while ivraatiems argued the project is unlikely to harm game production given GTA 6&\#x27;s scale and reported profitability.

<details><summary>References</summary>
<ul>
<li>Cyberleek has released an Xbox build of GTA 6 (UPDATE: now with the executable) Microsoft - Rockstar | Page 22 | ResetEra</li>
<li>GTA 6 PC Port Status (24 Hours After EXE Drop) : r/FitGirlRepack - Reddit</li>
<li>The developer behind a Switch 2 Zelda: Ocarina of Time remake PC port has canceled their ambitious GTA 6 project</li>
<li><a href="https://www.tomshardware.com/video-games/pc-gaming/rockstar-nukes-15-year-olds-gta-6-recompilation-project-discord-and-github-servers-taken-down-project-leonida-had-almost-180-000-discord-members-host-account-banned-for-two-years">Rockstar nukes 15-year-old’s GTA 6 recompilation project , Discord...</a></li>
<li><a href="https://www.eurogamer.net/grand-theft-auto-6-project-leonida-discord-github-vanish">Unofficial GTA 6 PC port effort suffers setback as... | Eurogamer.net</a></li>
<li><a href="https://www.theverge.com/news/1041690/grand-theft-auto-6-pc-recompilation-project-leonida-takedown-take-two">GTA VI PC recompilation project shut down by Take -Two | The Verge</a></li>

</ul>
</details>

**Tags**: `#reverse engineering`, `#game recompilation`, `#compatibility layers`, `#DRM`, `#open source legal risk`

---

<a id="item-tech-news-7"></a>
### [Simon Willison charts three LLM inflection points in twelve months](https://simonwillison.net/2026/Nov/24/llm-inflection-points/) ⭐️ 7.0/10

In a retrospective post built from his AI Engineer Code Summit keynote, Simon Willison identifies three LLM and coding-agent inflection points across the past twelve months, starting with Claude Opus 4.5&\#x27;s November 2025 release: he says it was the first model whose default Claude Code output was generally right for his daily coding work, while OpenAI&\#x27;s GPT-5.1 Instant, Thinking, Codex and Codex-Max had a similar effect on Codex. He credits Anthropic&\#x27;s announcement claim that Opus 4.5 could reason about tradeoffs and fix complex multi-system bugs without hand-holding as one that held up, though this rests on his own hands-on use rather than an independent benchmark. His second inflection point is &quot;Fable class&quot; models — defined as models that, given a goal and the necessary tools, can brute-force a solution — beginning with Claude Fable 5 in June 2026 \(briefly blocked by US export controls until July 1\) and now including Fable 5, 5.1 and 5.2, Opus 5.5, GPT-6 Astra and possibly Gemini 4 Neon. The third is 3D modeling and game development in September–October, where Blender and Three.js output became credible and Opus 5.5 \(released September 22, 2026\) was the first model he found could act on &quot;make it a LOT more fun&quot; by spending 12 hours playtesting and rebalancing his RTS; the supplied excerpt is truncated before his discussion of whether Fable 5.2 counts as a fourth.

rss · Simon Willison · Nov 24, 23:02

**「Background」** Claude Code had been available since February 2025 alongside Claude 3.7 Sonnet, but Willison says it was not reliable enough to become his daily driver until Claude Opus 4.5 arrived on November 24, 2025 and usually produced the right result by default. His later &quot;Fable class&quot; label describes models that, given a goal and the necessary tools, can solve a problem through brute force—a tier Anthropic previewed in April 2026 when it withheld Claude Mythos on cybersecurity grounds and then shipped the restricted Claude Fable 5 in June.

**「Developer impact」** For developers using coding agents, the practical bar has shifted from occasional assistance to default-correct output on day-to-day coding tasks: Willison reports that Claude Opus 4.5 with Claude Code and GPT-5.1 with Codex crossed that threshold and became faster than doing the work himself. The action is to reassess tools previously dismissed as too correction-heavy, while treating this as one practitioner&\#x27;s experience rather than a benchmark.

**Tags**: `#LLM coding agents`, `#AI engineering`, `#model capabilities`, `#developer tools`, `#retrospective analysis`

---

## Financial News

<a id="item-finance-news-1"></a>
### [Nvidia&\#x27;s Jensen Huang returns as CEO after reported resignation](https://www.cnbc.com/2026/11/25/jensen-huang-nvidia-ai-talent-race.html) ⭐️ 8.0/10

Jensen Huang returned as Nvidia&\#x27;s CEO on Nov. 23 after resigning on Nov. 12 amid reports, which CNBC did not detail, of an affair with a woman U.S. intelligence reportedly believed had links to Chinese intelligence. President Donald Trump told CNBC he intervened to bring Huang back, and the episode has drawn attention to U.S.-China competition for AI engineers, with China surpassing the U.S. in share of global AI talent in just three years, according to Carnegie Endowment research.

rss · CNBC Finance · Nov 25, 01:13

**「Background」** Huang stepped down as Nvidia’s CEO on Nov. 12 after reports of an affair with a woman U.S. intelligence reportedly believed had links to Chinese intelligence, and the company reinstated him on Nov. 23 after President Donald Trump intervened with the board. The reversal comes as China has surpassed the U.S. in the share of global AI talent, according to Carnegie Endowment research cited by CNBC.

<details><summary>References</summary>
<ul>
<li><a href="https://www.reuters.com/technology/nvidia-reinstates-jensen-huang-ceo-2026-11-23/">Huang returns as Nvidia CEO after Trump intervention in ...</a></li>
<li><a href="https://www.theguardian.com/us-news/2026/nov/22/jensen-huang-nvidia-john-kennedy">Jensen Huang ’s reported affair was ‘most expensive... | The Guardian</a></li>
<li><a href="https://thenextweb.com/news/china-overtakes-us-elite-ai-talent-carnegie">More elite AI researchers now work in China than in the US ...</a></li>

</ul>
</details>

**Tags**: `#Nvidia`, `#US-China tech competition`, `#AI talent`, `#semiconductors`, `#executive leadership`

---

<a id="item-finance-news-2"></a>
### [Xiaomi Q3 2026 adjusted net profit falls 56.8% as EV deliveries top 100,000](https://ir.mi.com/static-files/3d372aaa-8ff8-4e33-ba01-68c8d7975a0b) ⭐️ 7.0/10

Xiaomi&\#x27;s adjusted net profit fell 56.8% year on year to RMB 4.884 billion in the third quarter of 2026, slightly above the RMB 4.746 billion market estimate, while revenue declined 5.2% to RMB 107.24 billion. The company delivered 100,975 electric vehicles in the quarter.

telegram · zaihuapd · Nov 24, 10:09

**「背景」** 小米的“经调整净利润”会剔除非经营性项目，是为了更清楚地反映主营业务盈利；本季利润同比降幅较大，公司将其归因于存储芯片等核心元器件涨价，以及研发投入增加。

**Tags**: `#小米集团`, `#季度财报`, `#经调整净利润`, `#汽车交付`, `#智能手机`

---

<a id="item-finance-news-3"></a>
### [SpaceX forgoes $738 million in federal broadband subsidies to give away Starlink gear](https://x.com/SawyerMerritt/status/2125314062997467640) ⭐️ 7.0/10

SpaceX has reportedly agreed to give up $738 million in US federal broadband subsidies under the NTIA&\#x27;s BEAD program, receiving $0 instead, and to provide free Starlink terminals to eligible US households. Under the reported &quot;zero-dollar agreement,&quot; the company must guarantee at least 100 Mbps download and 20 Mbps upload speeds, offer a low-cost monthly plan and commit to 10 years of service, while being exempted from most financial audit and procurement reporting; the account comes from a social-media post rather than official confirmation.

telegram · zaihuapd · Nov 25, 02:17

**「Background」** The Broadband Equity, Access, and Deployment \(BEAD\) program is a federal broadband-expansion subsidy run by NTIA; SpaceX’s zero-dollar arrangement uses a new model contract that keeps performance testing and minimum service requirements but drops the program’s financial terms, according to an NTIA official cited by the Benton Institute.

<details><summary>References</summary>
<ul>
<li><a href="https://www.benton.org/headlines/spacex-declines-bead-awards">SpaceX Declines BEAD Awards | Benton Institute for Broadband ...</a></li>

</ul>
</details>

**Tags**: `#SpaceX`, `#Starlink`, `#BEAD`, `#broadband subsidy`, `#US telecom policy`

---