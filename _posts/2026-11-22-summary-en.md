---
layout: default
title: "Horizon Summary: 2026-11-22 (EN)"
date: 2026-11-22
lang: en
---

> From 23 items, 7 important content pieces were selected

---

**Technology News**
1. [Claimed Lean proof of Riemann Hypothesis lacks verification details](#item-tech-news-1) ⭐️ 9.0/10
2. [Zhejiang University reports first real-device QRAM on superconducting chip](#item-tech-news-2) ⭐️ 8.0/10
3. [A Monitor&\#x27;s USB Ethernet Adapter Was Cutting Download Speed by 75%](#item-tech-news-3) ⭐️ 7.0/10
4. [GPGME before 2.3.0 has memory-safety flaw; RCE label disputed](#item-tech-news-4) ⭐️ 7.0/10
5. [Microsoft releases Windows RDMA over USB4 preview for multi-PC AI](#item-tech-news-5) ⭐️ 7.0/10
6. [OpenRouter warns MiniMax prompts may be read, drops zero-retention tags](#item-tech-news-6) ⭐️ 7.0/10

**Technology Blog**
1. [Good Programming Is Mostly About Avoiding Blunders](#item-tech-blog-1) ⭐️ 6.0/10

---

## Technology News

<a id="item-tech-news-1"></a>
### [Claimed Lean proof of Riemann Hypothesis lacks verification details](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 9.0/10

For Lean users and formal-mathematics researchers, a Lean Prover Community blog post titled Lean verification of the Riemann Hypothesis is a claim rather than a demonstrated formal verification: the supplied item provides no theorem statement, Lean version, proof artifact, or independent confirmation. The comment thread treats it as potentially a very large formalization effort—one commenter speculates that Claude formalized a huge chunk of modern mathematics—while others focus on whether a bug could survive multiple Lean kernels and on how much human expert involvement there was.

hackernews · g-b-r · Nov 21, 14:36 · [Discussion](https://news.ycombinator.com/item?id=50589618)

**「Background」** Lean is an interactive theorem prover in which a small kernel checks each proof step against the library it imports, so a formal proof’s trust rests on that kernel and the broader Mathlib formalization rather than on prose. The item follows the reported November 20, 2026 release of Levent Alpöge’s Riemann Hypothesis proof as a 17-million-line Lean library; search results say the Lean and Mathlib communities certified it the following day.

**「Impact」** Readers evaluating the claim should require the exact Lean theorem statement, the source repository, and checks across independent kernels before treating the Riemann Hypothesis as formalized; commenters note that a prior fake Collatz refutation passed one such checker, so a single validation is weak evidence.

**「Community Discussion」** Commenters disagree mainly over trust in checkers: one argues that with multiple implementations and self-consistency proofs, a bug that fools both the consistency proofs and the RH proof is vanishingly unlikely, while another cites a past fake Collatz refutation that got through an independent checker. Several also credit Levent with drawing the result out of Claude, and one asks what larger mathematical questions such a result might unlock.

<details><summary>References</summary>
<ul>
<li>Lean verification of the Riemann Hypothesis | Lean community blog</li>
<li>Lean experts certify Claude-aided Riemann proof - Nacionale</li>

</ul>
</details>

**Tags**: `#Lean`, `#formal verification`, `#Riemann Hypothesis`, `#theorem proving`, `#AI-assisted mathematics`

---

<a id="item-tech-news-2"></a>
### [Zhejiang University reports first real-device QRAM on superconducting chip](https://finance.sina.com.cn/stock/2026-11-21/doc-iniznhsk3530826.shtml) ⭐️ 8.0/10

Zhejiang University researchers say they have demonstrated the first real-hardware QRAM \(quantum random-access memory\) on a self-fabricated superconducting chip, &quot;Tianmu 2,&quot; and published the work in Nature Physics. The chip ran prototypes that retrieved 4-bit and 8-bit data with 80.9% and 60.4% accuracy, respectively, while reducing circuit depth by more than 30% versus an unoptimized implementation. The team also reports the first validation that the architecture has local noise resilience. It plans to scale up the QRAM research next.

telegram · zaihuapd · Nov 21, 08:31

**「Background」** QRAM is a quantum-memory architecture that retrieves stored data using an address that can be held in superposition, rather than only a definite classical location. A QRAM lookup differs from reading a fixed qubit register because the address itself is quantum and the stored data must remain coherent through the retrieval process. The Zhejiang University experiment ran on the team&\#x27;s superconducting chip “Tianmu 2” and was published in Nature Physics.

**「Impact」** The demonstration remains a small-scale prototype: 4- and 8-bit retrieval at up to 80.9% accuracy is far from the capacity and reliability needed for practical quantum algorithms, so scaling the architecture and improving fidelity are the next compatibility hurdles.

**Tags**: `#quantum computing`, `#QRAM`, `#superconducting qubits`, `#hardware research`, `#quantum memory`

---

<a id="item-tech-news-3"></a>
### [A Monitor&\#x27;s USB Ethernet Adapter Was Cutting Download Speed by 75%](https://blog.tymscar.com/posts/studiodisplayethernet/) ⭐️ 7.0/10

A debugging write-up traces a roughly 75% drop in download speed to the USB Ethernet adapter built into the author&\#x27;s monitor. Added latency through the monitor delayed TCP acknowledgements, allowing the adapter&\#x27;s buffer to fill and packets to be dropped. According to the account, a different adapter that required less frequent acknowledgement fixed the problem.

hackernews · soheilpro · Nov 21, 10:36 · [Discussion](https://news.ycombinator.com/item?id=50587875)

**「Why TCP latency matters here」** TCP throughput on a fast link depends on timely acknowledgements; when the path adds latency, the receiving adapter can buffer and then drop packets, so throughput falls well below the raw link rate. The display involved was identified in discussion as Apple&\#x27;s Studio Display XDR, whose Thunderbolt 5 connection advertises 80 Gbps—far above the 2.5 Gbps Ethernet service—which helps explain why the monitor&\#x27;s role in the path was easy to overlook.

**「Impact」** For anyone diagnosing slow wired throughput on a laptop, this points to the monitor or dock&\#x27;s integrated USB Ethernet path as a suspect, not just the router or ISP. Testing a direct connection or a different adapter is a concrete next step when throughput is far below the expected link speed.

**「Community Discussion」** Commenters argued the monitor itself was incidental and the real culprit was the USB network adapter, while one reader reported a similar long-running problem with a MacBook and Thunderbolt dock. Another shared a separate but similarly opaque case in which Ghostty&\#x27;s io\_uring use registered as I/O pressure and throttled Baldur&\#x27;s Gate 3&\#x27;s Vulkan shader compilation.

<details><summary>References</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50587875">My monitor was cutting my download speed by 75% | Hacker News</a></li>
<li><a href="https://blog.tymscar.com/">The Tymscar Blog</a></li>

</ul>
</details>

**Tags**: `#networking`, `#debugging`, `#USB-C`, `#TCP performance`, `#hardware`

---

<a id="item-tech-news-4"></a>
### [GPGME before 2.3.0 has memory-safety flaw; RCE label disputed](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) ⭐️ 7.0/10

A GnuPG-announce advisory discloses a memory-safety vulnerability in GPGME versions before 2.3.0, affecting applications that use the library to verify or handle GPG signatures. The affected component is GPGME rather than GnuPG core. The item&\#x27;s “RCE” framing is disputed in the discussion, where one commenter describes the bug as a double free rather than a demonstrated remote-code-execution chain.

hackernews · gdgghhhhh · Nov 21, 08:32 · [Discussion](https://news.ycombinator.com/item?id=50587208)

**「What GPGME is」** GPGME is the library layer applications use to call GnuPG for OpenPGP operations such as signature verification and key handling, so a memory-safety defect there reaches every linked program rather than only the GnuPG command-line tools. The defect is tracked as CVE-2026-129975, a double free that a crafted OpenPGP key can trigger.

**「Impact」** Applications that link GPGME, including many mail and XMPP clients, Samba, Flatpak, Gpg4win, and other bundled or statically linked copies, need to move to GPGME 2.3.1 or the 1.24.4 legacy release and rebuild dependents rather than only replacing a shared library. The flaw, CVE-2026-129975, is triggered by malicious OpenPGP keys and can expose application data; no exploitation or public proof-of-concept was known as of 2026-11-21, so patching priority can reflect that uncertainty.

**「Community discussion」** Commenters dispute the RCE framing: mik1998 says the flaw is a double free, not a demonstrated RCE chain, while uptrails reports that a Red Hat packaging fix existed five years ago but upstream missed it. miduil says Johan Carlsson discovered the bug, GitLab notified the project on 2026-11-12, and disclosure moved from 2026-11-25 to 2026-11-20 because of the Ruby2Shell bug; wannabe44 lists affected GPGME users including Gpg4win, Samba, Flatpak, and many mail and XMPP clients, and asks whether apt is affected.

<details><summary>References</summary>
<ul>
<li>GnuPG Warns Critical GPGME Flaw Could Expose App Data via ...</li>
<li>GPGME Critical Bug: Update Email Clients and Flatpak Now</li>
<li><a href="https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html">GnuPG Warns Critical GPGME Flaw Could Expose App Data via ...</a></li>
<li><a href="https://lists.gnu.org/archive/html/info-gnu/2026-11/msg00006.html">GnuPG Security Advisory for GPGME (T8557,CVE-2026-129975)</a></li>
<li><a href="https://blog.ostorlab.co/gpgme-double-free-cve-2026-129975.html">GPGME Double Free: Data Theft, Possible RCE (CVE-2026-129975)</a></li>

</ul>
</details>

**Tags**: `#security-vulnerability`, `#gnupg`, `#gpgme`, `#memory-safety`, `#open-source`

---

<a id="item-tech-news-5"></a>
### [Microsoft releases Windows RDMA over USB4 preview for multi-PC AI](https://videocardz.com/newz/microsoft-brings-rdma-over-usb4-to-windows-allowing-multiple-pcs-to-run-one-local-ai-model) ⭐️ 7.0/10

Microsoft released a Windows developer preview of RDMA over USB4 that lets multiple PCs share memory and GPU compute to run a single local AI model over ordinary USB4 connections, without a dedicated network card or switch. In the supplied benchmark, three AMD Ryzen AI Max+ 395 systems ran Qwen3-235B-A22B with 4-bit quantization at about 18.5 tokens per second. Microsoft says the preview will be distributed through Windows Insider.

telegram · zaihuapd · Nov 21, 06:13

**「Background」** RDMA, or remote direct memory access, lets one system read or write another machine&\#x27;s approved memory with less operating-system and CPU involvement than conventional networking. For this preview, Microsoft adapted its NetworkDirect API — the interface Windows already uses with datacenter RDMA adapters — to run over USB4 links, so a compatible inference framework can draw on several PCs&\#x27; combined memory and GPU compute as one pool.

**「Impact」** Developers can test pooling several USB4-equipped Windows PCs for local LLM inference instead of buying dedicated networking hardware, but the preview&\#x27;s performance is demonstrated only for a three-node Ryzen AI Max+ 395 cluster running a 4-bit Qwen3-235B-A22B model, so results on other hardware and link configurations remain unmeasured.

<details><summary>References</summary>
<ul>
<li><a href="https://techcommunity.microsoft.com/blog/microsoftusbblog/introducing-rdma-over-usb4%C2%AE-on-windows-run-larger-local-ai-models-across-pcs/4574602">Introducing RDMA over USB 4 ® on Windows : run larger local AI ...</a></li>
<li><a href="https://www.guru3d.com/story/microsoft-previews-usb4-links-that-let-windows-pcs-pool-memory-and-gpu-resources/">Microsoft previews USB 4 links that let Windows PCs pool memory ...</a></li>

</ul>
</details>

**Tags**: `#RDMA over USB4`, `#local LLM inference`, `#Windows`, `#distributed computing`, `#AMD Ryzen AI Max+`

---

<a id="item-tech-news-6"></a>
### [OpenRouter warns MiniMax prompts may be read, drops zero-retention tags](https://news.ycombinator.com/item?id=50585962) ⭐️ 7.0/10

OpenRouter has notified users that prompts sent to MiniMax models may have been read by third parties, and it removed the &quot;zero data retention&quot; label from affected endpoints. The notice attributed the issue to MiniMax and forwarders AtlasCloud, Novita, and StreamLake. Security researchers who sent prompts containing test URLs to MiniMax models between July and October 2026 observed third-party access to those URLs 40 to 130 hours later, according to the report. OpenRouter advised users with sensitive credentials to rotate API keys and passwords; the notice was not published on OpenRouter&\#x27;s website at the time of the report.

telegram · zaihuapd · Nov 21, 06:53

**「What the ZDR label means」** OpenRouter&\#x27;s “Zero Data Retention” \(ZDR\) label is an endpoint designation indicating that prompts are not retained under that route; OpenRouter documents ZDR as part of its model-routing features. The label&\#x27;s removal matters here because the warning concerns MiniMax and the forwarders AtlasCloud, Novita and StreamLake, which reportedly confirmed forwarding requests to MiniMax.

**「Impact」** Users of the affected MiniMax endpoints should treat prompt contents as potentially exposed and rotate any API keys or passwords included in those requests. Removing the zero-data-retention label also means customers cannot rely on those endpoints for a zero-retention guarantee.

<details><summary>References</summary>
<ul>
<li><a href="https://openrouter.ai/docs/features/message-transforms">Message Transforms | Pre-process AI... | OpenRouter | Documentation</a></li>
<li><a href="https://1275.ru/news/minimax-metka-zero-retention-okazalas-releem_53059">MiniMax : метка zero retention оказалась релеем | SEC-1275-1</a></li>

</ul>
</details>

**Tags**: `#AI security`, `#privacy`, `#OpenRouter`, `#MiniMax`, `#LLM APIs`

---

## Technology Blog

<a id="item-tech-blog-1"></a>
### [Good Programming Is Mostly About Avoiding Blunders](https://seangoedecke.com/to-code-well-avoid-blunders/) ⭐️ 6.0/10

rss · Sean Goedecke · Nov 22, 00:00

**「Background」** Sean Goedecke argues that engineers often treat good programming as a search for brilliant insights or beautiful abstractions, but that this misses the main source of quality: avoiding catastrophic mistakes.

**「Solution」** He compares this to chess and tennis, where never hanging a piece or always returning the ball can beat most opponents without spectacular winners; in code, blunders include introducing a parallel system for the same task, creating a second source of truth, turning safe synchronous work into delicate asynchronous work, adding subtle failure points, or complicating a key interface. The cardinal sins are inconsistency and unnecessary requirements. Inconsistency destroys trust, forcing engineers to hunt for surprises, while unnecessary requirements are sticky because later readers must assume they are needed unless they investigate, and they interact combinatorially with each new feature—the burden that makes large codebases hard to change. His prescription is to fit a task as normally as possible into the existing codebase and trim it to the smallest set of requirements, treating &quot;I could use this clever pattern&quot; as a warning sign; he scopes the advice to large commercial codebases with big teams, and says it applies to AI agents too, though current agents are worse at avoiding unnecessary requirements.

**「Takeaway」** The broader point is that good programming depends less on cleverness than on attention to detail and restraint: preserving consistency and refusing unnecessary requirements. Cleverness can even be a disadvantage when it distracts from avoiding blunders.

**Tags**: `#software engineering`, `#code quality`, `#maintainability`, `#simplicity`, `#technical debt`

---