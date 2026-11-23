---
layout: default
title: "Horizon Summary: 2026-11-23 (ZH)"
date: 2026-11-23
lang: zh
---

> 从 28 条内容中筛选出 5 条重要资讯。

---

**科技新闻**
1. [OpenAI 发文主张困惑度可衡量模型智能](#item-tech-news-1) ⭐️ 7.0/10
2. [O&\#x27;Reilly 长文反思硅谷变迁与机制设计](#item-tech-news-2) ⭐️ 7.0/10

**科技博客**
1. [不确定时，不妨主动“乱撞”](#item-tech-blog-1) ⭐️ 6.0/10

**财经新闻**
1. [美股 AI 科技股大跌，亚洲多市场调整融资与卖空规则](#item-finance-news-1) ⭐️ 9.0/10
2. [蚂蚁集团领投 Simplexity Robotics 1 亿美元 pre-A 轮，投后估值 16 亿美元](#item-finance-news-2) ⭐️ 7.0/10

---

## 科技新闻

<a id="item-tech-news-1"></a>
### [OpenAI 发文主张困惑度可衡量模型智能](https://openai.com/index/perplexity-and-intelligence/) ⭐️ 7.0/10

OpenAI 发表了一篇分析文章，主张语言模型的困惑度（perplexity）能够追踪其智能水平，文章面向关注模型评估与训练的研究者和开发者。文章把预测与压缩能力同智能联系起来，并从这个角度论证困惑度作为评估指标的合理性。可以确认的是，这是一篇观点性分析，不是新系统、新模型或独立基准测试结果的发布。

hackernews · acossta · 11月22日 17:06 · [社区讨论](https://news.ycombinator.com/item?id=50601525)

**「背景」** 困惑度（perplexity）等价于交叉熵损失，长期是语言模型预训练中衡量下一词元预测能力的指标。OpenAI 首席科学家 Jakub Pachocki 在该公司的文章中主张，把这一指标确立为模型开发者之间可比较、并可用于共同安全标准的指标，而不只是内部训练指标。

**「社区讨论」** 评论者 hazrmard 指出，文章并未定义困惑度，并给出直观解释：困惑度衡量模型预测下一个 token 时的惊讶程度，最差等于词表大小，最好为 1。另有评论者 jrflo 表示，在强化学习使用日益增加的背景下，交叉熵损失仍与模型能力呈现清晰关联，这令人意外，并认为这种简单指标比日益复杂的基准更有价值；这些均为评论者观点，不是文章的独立验证。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openai.com/index/perplexity-and-intelligence/">Perplexity and Intelligence | OpenAI</a></li>

</ul>
</details>

**标签**: `#perplexity`, `#language models`, `#model evaluation`, `#OpenAI`, `#machine learning`

---

<a id="item-tech-news-2"></a>
### [O&\#x27;Reilly 长文反思硅谷变迁与机制设计](https://www.oreilly.com/radar/what-happened-to-silicon-valley/) ⭐️ 7.0/10

O&\#x27;Reilly Radar 刊出《What Happened to Silicon Valley?》，检视硅谷的变化，并以市场激励、企业目标和机制设计为线索，解释科技行业为何会朝特定方向优化。文章结尾把机制设计比作“逆向博弈论”，追问“我们应当玩什么游戏”，有评论将其核心主张概括为以“人类繁荣”而非企业利润为优化目标。

hackernews · greenyouse · 11月22日 19:20 · [社区讨论](https://news.ycombinator.com/item?id=50602947)

**「背景」** 这篇 O&\#x27;Reilly 文章是评论而非产品发布，它用“机制设计”来讨论硅谷变迁：重点不只是公司在既定市场规则下如何竞争，更在于规则本身如何塑造激励与行为。相关讨论由此把“股东价值”与“人类繁荣”视为两种可能的优化目标，追问科技行业应当设计怎样的治理和市场机制。

**「社区讨论」** 评论区一方面以“早期谷歌仅约 6%搜索页变现、其余 94%创造丰裕”的回忆，说明当年的乐观；另一方面则争论责任所在：有人主张追究机制设计者、把目标改为人类繁荣，也有人补充 ZIRP 时代的低利率才是扩张的近因，并质疑利率回升后市场能否约束 AI 支出。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50602947">What Happened to Silicon Valley ? | Hacker News</a></li>

</ul>
</details>

**标签**: `#Silicon Valley`, `#tech industry`, `#mechanism design`, `#capitalism`, `#platform economics`

---

## 科技博客

<a id="item-tech-blog-1"></a>
### [不确定时，不妨主动“乱撞”](https://seangoedecke.com/when-in-doubt-flail-about/) ⭐️ 6.0/10

rss · Sean Goedecke · 11月23日 00:00

**「背景」** 作者讨论工程师在缺少明确指引、不知道什么会有帮助时，该先行动还是等待更清晰的理解，并警告乱撞方式不当会损害职业声誉。

**「方案」** 作者把这种策略称为“乱撞”：大量尝试不同做法，密切留意来自同事和现实结果的反馈，并果断放弃没有正反馈的方案。其逻辑是多数计划本就不可靠，多试才能接触真实情况、避免过度投入；只做一件事容易押错，做十件事则可能有一件奏效。他区分了三类场景：产品尚未找到市场契合时，他在现已退役的 GitHub Models 上做了许多未成功的功能，但“用 GitHub Actions 令牌运行 AI 推理”意外有粘性，后来成为“Continuous AI”的种子；工程系统过于复杂时，他主张先做一组试探性改动，再根据效果深入或放弃，并提到 AI 代理可一次生成五个重构方案供筛选；组织问题中，资深工程师可尝试自动化手工工作、主动接手任务或提出长期方案，但此时最需要敏感地接收反馈，及时放弃失败方案以建立信任。作者还提醒，从当事人的主观感受看，这像是在反复失败，但若能坚持反馈和止损，这种不适感是正常甚至积极的信号。

**「启示」** 作者的核心论点是，在高度不确定的工程与组织情境中，主动、快速地试错并依据反馈淘汰方案，通常比等待清晰更有效；关键不在于“乱”，而在于保持反馈敏感和及时止损。

**标签**: `#decision-making under uncertainty`, `#software engineering`, `#experimentation`, `#feedback loops`, `#engineering management`

---

## 财经新闻

<a id="item-finance-news-1"></a>
### [美股 AI 科技股大跌，亚洲多市场调整融资与卖空规则](https://news.bjd.com.cn/2026/11/22/12039852.shtml) ⭐️ 9.0/10

美国 AI 科技股周五遭大规模抛售，纳斯达克指数单日下跌 5.28%，费城半导体指数重挫近 11%。亚洲市场随后出台稳定措施：中国内地下调融资保证金最低比例至 80%，韩国自 11 月 24 日起三个月内放宽上市公司每日回购订单数量限制，中国台湾地区自 11 月 23 日起全面禁止平盘以下卖空并将融券保证金比例由 130%提高至 150%。

telegram · zaihuapd · 11月22日 13:24

**「背景」** 2026 年 11 月 20 日（周五）美股收盘时，纳斯达克综合指数下跌 5.28%、费城半导体指数下跌 10.73%，纳指因此回吐今年全部涨幅，标普 500 与道指跌入回调区间。随后亚洲各交易所在周末至下周开盘前动用融资保证金、回购与卖空限制等既有稳定工具，例如中国内地融资保证金最低比例此前为 100%，此次下调至 80%并定于 11 月 30 日生效。

**「影响」** 这些措施直接改变中国内地融资交易者、韩国回购企业和台湾卖空者的操作条件，例如台湾新规使卖空者无法在平盘以下开仓。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://beinsure.com/news/nasdaq-stock-market-today-ai-selloff-erases-2026-gains/">Nasdaq stock market today: AI selloff erases 2026 gains</a></li>
<li><a href="https://www.tradingkey.com/analysis/stocks/us-stocks/262316111-nasdaq-falls-ai-stock-selloff-nvidia-sec-probe-tradingkey">Nasdaq Plunges 5%, Erasing All Year-to-Date Gains; Nvidia ...</a></li>
<li><a href="https://chinareporter.news/business/china-rolls-out-policy-package-to-stabilize-market-and-anchor-expectations/">China rolls out policy package to stabilize market and anchor ...</a></li>

</ul>
</details>

**标签**: `#US tech selloff`, `#semiconductor stocks`, `#Asian market policy response`, `#margin trading rules`, `#short-selling restrictions`

---

<a id="item-finance-news-2"></a>
### [蚂蚁集团领投 Simplexity Robotics 1 亿美元 pre-A 轮，投后估值 16 亿美元](https://www.bloomberg.com/news/articles/2026-11-22/ant-group-bets-on-simplexity-to-thrive-in-china-s-humanoid-race) ⭐️ 7.0/10

彭博报道，中国具身智能公司 Simplexity Robotics 完成 1 亿美元 pre-A 轮融资，由蚂蚁集团领投，投后估值 16 亿美元，阿里巴巴、腾讯、HongShan（红杉中国）和蓝驰创投跟投。公司董事长兼联合创始人 Wang Kai 向彭博确认了这一消息，并称这笔资金将用于与宇树、优必选等更成熟的厂商争夺市场。

telegram · zaihuapd · 11月23日 02:02

**「背景」** Simplexity Robotics（至简动力）2025 年 7 月成立于杭州，核心团队来自理想汽车。据财中社报道，该公司今年 3 月官宣成立半年内完成 5 轮融资、累计 20 亿元人民币，当时投后估值已超 10 亿美元。

**「行业影响」** 这笔资金将用于和宇树、优必选等更成熟的整机厂商争夺市场，这些已经有出货规模的厂商因此会面临一个背靠阿里和腾讯、估值 16 亿美元的新竞争者。根据 Lanceum 的统计，这已经是蚂蚁集团 18 个月内的第 12 笔人形机器人投资。

<details><summary>参考链接</summary>
<ul>
<li><a href="http://auto.cnfol.com/cheshidongtai/20260310/32055663.shtml">理 想 前高管做机器人，半年 融 了20...</a></li>
<li><a href="https://lanceum.com/analysis/ant-group-humanoid-bets-fintech-robot-future">Twelve Deals in Eighteen Months: Why Ant Group Is... | Lanceum</a></li>

</ul>
</details>

**标签**: `#humanoid robotics`, `#embodied AI`, `#Ant Group`, `#startup financing`, `#China tech`

---