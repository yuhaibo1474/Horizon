---
layout: default
title: "Horizon Summary: 2026-11-28 (EN)"
date: 2026-11-28
lang: en
---

> From 30 items, 7 important content pieces were selected

---

**Technology News**
1. [OpenSec Discloses CVSS 9.8 Pre-Auth Root Flaw in Linux NFS Server](#item-tech-news-1) ⭐️ 9.0/10
2. [Unkernel demonstrates a real Linux kernel compiled to WebAssembly](#item-tech-news-2) ⭐️ 8.0/10
3. [Google Research&\#x27;s DeepCrossAttention reports comparable quality at up to 3x speed](#item-tech-news-3) ⭐️ 7.0/10
4. [State attorneys general sue SpaceX over Grok&\#x27;s alleged CSAM and revenge-porn output](#item-tech-news-4) ⭐️ 7.0/10
5. [False computer-checked proofs and the limits of checker trust](#item-tech-news-5) ⭐️ 7.0/10
6. [Reported card-skimming scripts on shopping sites use WebRTC](#item-tech-news-6) ⭐️ 7.0/10
7. [SemiAnalysis: Trainium3 inference beats GB300 on perf/TCO, trails Vera Rubin](#item-tech-news-7) ⭐️ 7.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [OpenSec Discloses CVSS 9.8 Pre-Auth Root Flaw in Linux NFS Server](https://opensec.in/blog/nfs2root-cve-2026-99362) ⭐️ 9.0/10

OpenSec disclosed CVE-2026-99362, a pre-authentication heap overflow in the Linux kernel&\#x27;s nfsd server rated CVSS 9.8, which the firm says lets an unauthenticated attacker obtain a root shell with a single connection to tcp/2049 by writing out of bounds on the kernel heap. According to the report, the flaw has existed since Linux 3.16 in 2014 and affects hosts running NFSv4.1 or NFSv4.2, including file servers, NAS devices and clustered storage nodes. Fixes shipped in kernel releases 6.12.117, 6.18.61, 7.3.2 and 7.4-rc1 and require upgrading and rebooting the kernel. The CVE was published on November 20, 2026; the disclosure comes from a single source, so the details should be checked against the official CVE advisory.

telegram · zaihuapd · Nov 27, 12:57

**「Background」** \`nfsd\` is the Linux kernel&\#x27;s NFS server component, and the affected configurations are hosts serving NFSv4.1 or 4.2 on TCP port 2049. The underlying flaw is long-standing: BleepingComputer reports it has existed since Linux 3.16, released in March 2014.

**「Impact」** Administrators of NFS servers, NAS systems and storage clusters that have NFSv4.1 or 4.2 enabled must upgrade to a fixed kernel and reboot, since the vulnerable nfsd code stays active until the new kernel is running. Where an immediate upgrade is not possible, the report&\#x27;s suggested mitigation is to block access to tcp/2049 at the firewall, which cuts off remote NFS clients as well as any attacker.

<details><summary>References</summary>
<ul>
<li><a href="https://opensec.in/blog/nfs2root-cve-2026-99362">NFS2ROOT ( CVE - 2026 - 99362 ): pre-auth root in Linux nfsd | OpenSec</a></li>
<li><a href="https://www.getpagespeed.com/server-setup/security/nfs2root-cve-2026-99362-centos-7">NFS2ROOT ( CVE - 2026 - 99362 ) on CentOS 7: Fixed Kernel</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/new-nfs2root-linux-flaw-can-let-attackers-gain-root-privileges/">New NFS2ROOT Linux flaw can let attackers gain root privileges</a></li>

</ul>
</details>

**Tags**: `#Linux kernel`, `#NFS`, `#security vulnerability`, `#CVE`, `#remote exploit`

---

<a id="item-tech-news-2"></a>
### [Unkernel demonstrates a real Linux kernel compiled to WebAssembly](https://unkernel.dev/) ⭐️ 8.0/10

Unkernel \(unkernel.dev\), posted to Hacker News, demonstrates a real Linux kernel compiled to WebAssembly, an approach aimed at running Linux environments directly in the browser. The submission provides limited technical detail: no kernel version, build configuration, performance measurements, or release and support status were supplied. It is therefore best treated as a demonstration rather than a shipped, supported capability.

hackernews · nreece · Nov 28, 03:19 · [Discussion](https://news.ycombinator.com/item?id=50674218)

**「Background」** Browser-based Linux environments have generally relied on emulating a full x86 PC in software; LinuxOnTab, for example, boots an x86 Linux kernel and Alpine userland inside the tab using WebAssembly and the v86 emulator. Unkernel takes a different route: its GitHub description says the Linux kernel itself is compiled straight to WebAssembly, while user programs run on kwemu, an aarch64 CPU written in Zig and linked into the kernel. That distinction matters because kwemu walks the kernel&\#x27;s own page tables, so memory management is performed by the real Linux code rather than by a fully emulated machine.

**「Impact」** The clearest use case raised is education: one commenter argued that every student could get a Linux environment in the browser with &quot;virtually zero server infrastructure costs.&quot; That is a community projection rather than a measured result, and the demo supplies no evidence on boot time, memory use, or which kernel features work under WebAssembly.

**「Community discussion」** Commenters connected the work to Gary Bernhardt&\#x27;s 2014 talk &quot;The Birth and Death of JavaScript&quot; as an early prediction of JavaScript- and WebAssembly-based systems, and pointed to related projects such as tabcand and tabernetes. Others proposed running Windows installers in the browser via WebUSB and browser-hosted Linux for students; these are suggestions and opinions, not demonstrated capabilities.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/pithings/unkernel">pithings/ unkernel : A real Linux kernel , compiled to WebAssembly .</a></li>
<li><a href="https://linuxontab.com/shell/">Real Linux terminal in your browser (v86 + WebAssembly )</a></li>

</ul>
</details>

**Tags**: `#WebAssembly`, `#Linux kernel`, `#browser computing`, `#virtualization`, `#systems engineering`

---

<a id="item-tech-news-3"></a>
### [Google Research&\#x27;s DeepCrossAttention reports comparable quality at up to 3x speed](https://research.google/blog/supercharging-transformer-residual-connections/) ⭐️ 7.0/10

Google Research&\#x27;s DeepCrossAttention \(DCA\) changes transformer attention to operate across layers in depth: each token queries a dynamically weighted mix of prior-layer embeddings rather than attending only across tokens in a sequence. The research blog reports comparable model quality with up to 3x faster performance, and says retrofitting DCA onto an already pretrained transformer with brief continued training reduced perplexity by 0.19 on LM1B, versus 0.02 for continued standard training. These are blog-level, vendor-reported results rather than a peer-reviewed or independently verified benchmark, so the headline speedup and quality parity should be treated as claims.

hackernews · ComputedCamp995 · Nov 27, 23:06 · [Discussion](https://news.ycombinator.com/item?id=50672565)

**「Background」** In a standard transformer, residual connections simply add each layer’s output to the running representation; the arXiv paper behind DeepCrossAttention argues this can dilute information from earlier layers. DCA instead applies input-dependent, depth-wise cross-attention across the Query, Key, and Value components, allowing each token to draw on prior-layer embeddings rather than only a summed residual stream.

**「Training-speed implications」** Teams considering DCA should benchmark it as a training-efficiency change: the paper reports the same model quality up to 3x faster while adding a negligible number of parameters, so the payoff is less training time to reach comparable quality, not a 3x faster model at inference. An HN commenter specifically cautioned that the headline &quot;faster&quot; refers to training, so teams should measure inference latency separately before assuming a runtime gain.

**「Community discussion」** Commenters focused on the presentation and implications rather than reporting independent results: one criticized the blog&\#x27;s method comparisons as better suited to bar charts than line graphs, while others speculated that depth-wise cross-attention could help with the “strawberry problem” and that retrofitting model dimensions mid-training is a promising direction.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/html/2502.06785">DeepCrossAttention : Supercharging Transformer Residual ...</a></li>
<li><a href="https://www.alphaxiv.org/overview/2502.06785v1">DeepCrossAttention : Supercharging Transformer Residual ...</a></li>
<li><a href="https://news.ycombinator.com/item?id=50672565">Google&#x27;s DeepCrossAttention achieves comparable model quality ...</a></li>
<li><a href="https://arxiv.org/abs/2502.06785">[2502.06785] DeepCrossAttention : Supercharging Transformer ...</a></li>

</ul>
</details>

**Tags**: `#transformers`, `#deep-cross-attention`, `#model-architecture`, `#training-efficiency`, `#Google Research`

---

<a id="item-tech-news-4"></a>
### [State attorneys general sue SpaceX over Grok&\#x27;s alleged CSAM and revenge-porn output](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) ⭐️ 7.0/10

Attorneys General Jones and Rayfield filed a lawsuit against SpaceX, described in the announcement as the parent company of xAI and its Grok chatbot, over the creation and promotion of child sexual abuse material and non-consensual intimate imagery on the platform. The release frames the action as targeting both the generation of such images and the platform&\#x27;s role in promoting them. The supplied material contains only the announcement headline and summary, so the specific legal claims, the number of states joining, the court, and any requested remedies are not established here. The allegations are accusations filed in a complaint, not findings of liability.

hackernews · DeepLogin · Nov 27, 19:42 · [Discussion](https://news.ycombinator.com/item?id=50670855)

**「Background」** The lawsuits frame the issue as consumer protection rather than purely content regulation: Virginia and Oregon allege that SpaceX, as parent of X, xAI and Grok, allowed Grok users to create non-consensual sexually explicit images while falsely marketing the image generator as generally safe. Coverage describes the two states as the first to sue SpaceX over the issue.

**「Impact」** By naming SpaceX as xAI&\#x27;s corporate parent rather than xAI alone, the suit puts the question of parent-company liability for a model&\#x27;s image outputs directly at issue — a structure other AI developers with parent or affiliated corporate entities would have to account for in their compliance and indemnity planning. It also creates near-term pressure on Grok&\#x27;s image-generation safeguards while the case proceeds.

**「Community Discussion」** Commenters debated whether Grok&\#x27;s image generation was supposed to block this content outright and whether users had to deliberately circumvent safeguards to produce it, with one reader asking why liability is not also pursued against the individuals creating the material. Another commenter asserted that the Supreme Court has already held that AI-generated child sexual abuse material made for personal consumption is protected speech, subject to carveouts requiring that no real children are depicted or involved — a legal interpretation offered without citation and not confirmed by the filing described here.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/11/23/oregon-virginia-spacex-grok-deepfake-lawsuits.html">SpaceX sued by 2 states over AI deepfake porn , Grok safety claims</a></li>
<li><a href="https://www.engadget.com/2325111/two-states-sue-spacex-over-sexually-explicit-grok-deepfakes/">Two States Sue SpaceX Over Sexually Explicit Grok Deepfakes</a></li>

</ul>
</details>

**Tags**: `#AI safety`, `#generative AI`, `#regulation`, `#xAI/Grok`, `#platform liability`

---

<a id="item-tech-news-5"></a>
### [False computer-checked proofs and the limits of checker trust](https://cr.yp.to/proofs/falseccp.html) ⭐️ 7.0/10

The linked essay argues that a proof accepted by a computer checker can still be false if the checker itself has a soundness bug, so “computer-checked” is not an unconditional guarantee of truth. It examines what stronger assurance would require, including scrutiny of the trusted checking path rather than only the proof object.

hackernews · \_tk\_ · Nov 27, 15:26 · [Discussion](https://news.ycombinator.com/item?id=50667989)

**「Background」** A computer-checked proof is only as trustworthy as the small kernel that validates it, so a soundness bug in a checker can in principle certify a false theorem. Lean&\#x27;s Leonardo de Moura published postmortems in August 2026 describing exactly that: in one, a model constructed a proof of False by exploiting reference-counting and GMP bugs, and in another the original Collatz repository passed both Lean and a then week-old version of nanoda, the independent Rust checker, via two unrelated bugs. The critique page examines what assurance practices those episodes imply.

**「Impact」** For developers and mathematicians who rely on machine-checked results, acceptance by a single checker does not by itself establish a theorem; assurance claims need to account for the checker’s trusted base and, where the risk warrants it, independent verification.

**「Community Discussion」** Commenters disputed how much the risk matters in practice: one argued that misleading mathematicians requires defeating multiple checkers and informal review, and another said Metamath’s main databases require proofs to pass five independently created verifiers. A further commenter argued that known soundness bugs are rare and “fit in a tweet,” while another raised the separate hazard of proving a correct implementation against the wrong specification.

<details><summary>References</summary>
<ul>
<li><a href="https://leodemoura.github.io/blog/2026-8-24-postmortem-for-the-kernel-soundness-bug-hunt/">Postmortem for the Kernel Soundness Bug Hunt — Leonardo de Moura</a></li>
<li><a href="https://leodemoura.github.io/blog/2026-8-1-postmortem-for-kernel-soundness-bug-14576/">Postmortem for Kernel Soundness Bug #14576 — Leonardo de Moura</a></li>

</ul>
</details>

**Tags**: `#formal verification`, `#proof assistants`, `#soundness bugs`, `#Lean`, `#Metamath`

---

<a id="item-tech-news-6"></a>
### [Reported card-skimming scripts on shopping sites use WebRTC](https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer) ⭐️ 7.0/10

InfoHawk reports that credit-card skimming scripts using WebRTC were found on popular shopping sites, framed as a Black Friday web-security incident affecting e-commerce shoppers. The supplied material does not name affected sites, give a count, or explain the scripts&\#x27; technical operation, so the campaign&\#x27;s scope and the specific role of WebRTC remain unverified. The security concern raised is that sites embedding third-party scripts can expose shoppers&\#x27; payment data in the browser.

hackernews · scanr · Nov 27, 15:40 · [Discussion](https://news.ycombinator.com/item?id=50668145)

**「Background」** Magecart-style skimming is a known e-commerce threat in which attackers inject card-capture code into a site&\#x27;s payment flow rather than breaching the retailer&\#x27;s own servers; third-party scripts such as payment gateways or chat widgets are a common entry point. A 2019 supply-chain campaign inserted skimming code into a popular third-party JavaScript library from Adverline and compromised nearly 277 e-commerce sites. The reported WebRTC-based campaign follows that general model, though the supplied item does not provide affected-site counts or technical detail to confirm the mechanism.

**「Third-party checkout risk」** For merchants, the concrete consequence is that third-party tags on checkout pages remain a direct path to payment-card data: the reported campaign was planted on five online stores and captured at least one test card. The actionable step is to inventory and restrict scripts loaded on payment pages—CSP is one control—and to treat WebRTC as an exfiltration channel rather than a separate bug class.

**「Community discussion」** Commenters argued that WebRTC is likely being used because it is less closely monitored for malicious behavior than ordinary HTTP requests, not because of a capability unique to WebRTC, and that embedding any third-party script leaves a site vulnerable. One commenter also reported a separate Black Friday purchase from a European site that triggered an immediate card block and replacement, with the cause unknown.

<details><summary>References</summary>
<ul>
<li><a href="https://jscrambler.com/blog/magecart-attacks-in-ecommerce-road-to-mitigation/">Magecart Attacks in E - Commerce : The Path to Mitigation</a></li>
<li><a href="https://thehackernews.com/2019/03/magecart-ecommerce-hackers.html">New MageCart Attacks Target Bedding Retailers My Pillow and...</a></li>
<li><a href="https://www.reflectiz.com/blog/magecart-attack-disguised-gtm/">Magecart attack wears GTM disguise – Reflectiz</a></li>
<li>Credit card skimming scripts using WebRTC found on... - daily.dev</li>
<li>Five stores had skimmers. One test card was captured. | The Shift Wire</li>

</ul>
</details>

**Tags**: `#web security`, `#credit card skimming`, `#WebRTC`, `#third-party scripts`, `#e-commerce`

---

<a id="item-tech-news-7"></a>
### [SemiAnalysis: Trainium3 inference beats GB300 on perf/TCO, trails Vera Rubin](https://newsletter.semianalysis.com/p/trainium3-inferencex) ⭐️ 7.0/10

SemiAnalysis published an InferenceX/UBenchX deep dive and microbenchmarks of AWS Trainium3, reporting that Trainium3 with PDS and vLLM beats every accelerator it lists except Nvidia Vera Rubin on performance per TCO across its throughput-versus-p90-interactivity frontier, and that Trainium3 trades blows with or beats Nvidia GB300 on token-generation cost. SemiAnalysis attributes part of the advantage to Trainium&\#x27;s ML-first, tile-based microarchitecture, including Descriptor Generation Engines that its tests show reaching peak HBM bandwidth utilization at small message sizes—something the authors say is not possible on Nvidia GPUs. The article also details cycle-level SRAM scratchpad latency and bandwidth, rack-scale measurements, attention-shape tests, and AgentX end-to-end replays of coding-agent sessions.

rss · Semianalysis · Nov 27, 15:54

**「Background」** Nvidia&\#x27;s datacenter GPUs descend from a graphics architecture, with AI-specific additions layered on over generations: Volta introduced Tensor Cores, Hopper added the Tensor Memory Accelerator for tile movement between HBM and SRAM, and Blackwell added Tensor Memory for accumulation. AWS instead designed Trainium from the ground up for ML workloads, treating tiles as a first-class primitive rather than starting from a sea of threads and bolting on tensor compute and data-movement engines. That architectural difference is the basis for SemiAnalysis&\#x27;s comparison of Trainium3&\#x27;s inference efficiency with Nvidia&\#x27;s approach.

**「Impact」** Model-serving teams evaluating cost per token should add Trainium3 with vLLM to their own throughput and latency sweeps, because SemiAnalysis&\#x27;s benchmark places it behind only Nvidia Vera Rubin and ahead of GB300 on its reported TCO-versus-p90-interactivity frontier; the figures are the authors&\#x27; measurements rather than an AWS claim, and the excerpt gives no absolute costs.

**Tags**: `#Trainium3`, `#AWS`, `#AI accelerators`, `#microarchitecture`, `#inference`

---