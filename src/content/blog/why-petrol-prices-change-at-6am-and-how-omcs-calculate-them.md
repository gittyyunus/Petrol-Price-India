---
title: "Why Petrol Prices Change at 6 AM Every Day (And How OMCs Actually Get to That Number)"
description: "A plain-language breakdown of the real mechanism behind India's daily 6 AM fuel price update — the 15-day rolling average, the Indian Basket, Trade Parity Pricing, the rupee-dollar rate, and the tax layers stacked on top."
pubDate: 2026-08-08
category: "Fuel Prices"
tags: ["petrol prices", "6 AM price update", "OMC pricing", "crude basket", "rolling average"]
---

A few months back I set a price alert on my fuel app before a road trip, planning to fill up right before leaving at 7 AM. When I checked the price the night before it was ₹101.90. By the time I actually reached the pump the next morning, it had already ticked up to ₹102.12. Twenty-two paise doesn't sound like much, but it genuinely confused me — nothing dramatic had happened overnight, no news headline, nothing. So why did the number move at all?

That question sent me down a proper rabbit hole. I ended up reading OMC pricing circulars, a couple of research papers, and messaging a friend who works at a fuel distribution company to understand what's actually happening behind that 6 AM update. Turns out it's not random, and it's definitely not "just because the government feels like it." There's an actual formula running in the background every single morning.

Here's what I learned, in plain language, without the jargon that makes most articles on this topic unreadable.

## First, why 6 AM specifically

Before June 2017, fuel prices in India only changed twice a month — on the 1st and 16th — based on the average international price over the previous fortnight. That system had an obvious problem: because everyone knew exactly when the price would jump, people used to rush to fill their tanks the night before a price hike, then avoid the pump for a few days after. Dealers hated it because demand became completely unpredictable.

When India moved to daily revision in June 2017, OMCs picked 6 AM because it needed to happen before the morning rush, and it needed to be consistent enough that automated pumps could update prices centrally without a human manually typing in a new number at every single station. Today, roughly 20% of India's petrol pumps are automated and get the price pushed centrally at 6 AM. The rest still update manually every morning, which is honestly the part that surprised me most — I assumed every pump in the country was automated by now.

## What actually goes into that 6 AM number

This is where most articles get vague, so let me break down the real components, because I had to piece this together from a few different sources myself.

**1. The 15-day rolling average, not the spot price**

Here's the thing I got wrong initially — I assumed OMCs check yesterday's crude oil closing price and just apply it directly. They don't. They use a rolling average of international crude prices over roughly the previous two weeks. This smooths out single-day spikes so a random one-day jump in Brent crude doesn't slam Indian consumers with a sudden price shock. It's also why a big overnight crude price move rarely shows up as a big overnight petrol price move at your local pump — the effect gets spread out over days.

**2. India's crude basket, not just Brent**

India doesn't buy pure Brent crude. The pricing reference is the "Indian Basket," which blends Oman and Dubai sour grade crude with Brent sweet crude. So when financial news says "Brent crude fell 2%," that's only part of the story — the actual number OMCs use is a weighted blend, which sometimes moves differently than the Brent headline figure you see on business news.

**3. Trade Parity Pricing (TPP)**

This is the part that took me the longest to properly understand. OMCs don't price fuel just based on what it costs to refine domestically. They calculate something called Trade Parity Price, which is a weighted average of two theoretical numbers:

- **Import Parity Price (IPP)** — what it would cost if India imported the finished, refined petrol or diesel directly from abroad, including freight, insurance, and customs
- **Export Parity Price (EPP)** — what an Indian refinery would earn if it exported that same fuel instead of selling it domestically

These two get blended in roughly an 80:20 ratio (import parity weighted higher), which makes sense because India still imports a large chunk of its crude and refined product needs. The logic is that domestic refiners shouldn't be able to charge more than what importing the fuel would cost, but also shouldn't be forced to sell for less than what they'd earn by exporting it instead. It keeps domestic pricing roughly aligned with what the fuel is actually worth on the global market.

**4. The rupee-dollar exchange rate**

Crude oil is traded in US dollars globally, but you're paying in rupees. So even if crude oil prices stay completely flat internationally, a weaker rupee still pushes up the price you pay at the pump because OMCs need more rupees to buy the same dollar-priced barrel. I noticed this myself during a stretch last year when crude prices were basically unchanged for weeks, but the pump price still crept up slightly — that was almost entirely the rupee weakening against the dollar during that period.

**5. Freight, refining margin, and dealer commission**

After the base fuel cost is worked out through TPP, OMCs add the cost of transporting the fuel from refineries to depots, a small refining margin, and the dealer's commission. These don't change daily the way crude and currency do — they get revised periodically, usually a few times a year.

**6. Excise duty and state VAT**

Finally, central excise duty (a flat per-litre amount) and state VAT (a percentage, so it compounds on everything above it) get added on top. These are policy decisions, not daily market movements, so they only change when the government announces a change — but when they do change, it's usually the biggest single jump you'll see in the price, much bigger than a typical day's crude-driven movement.

## Step-by-step: how to actually track this yourself

If you want to understand why your local price moved (or predict roughly what might happen), here's what I now do:

**Step 1** — Check the Indian Basket crude price trend, not just Brent headlines. The Petroleum Planning & Analysis Cell (PPAC) website publishes this daily.

**Step 2** — Check the USD/INR exchange rate trend over the same period. A quick Google search or any forex tracking app shows this.

**Step 3** — Remember it's a 15-day rolling average, so don't expect yesterday's crude move to show up in today's price. Give it a few days to filter through.

**Step 4** — Watch for excise duty or VAT announcements separately — these show up as sudden, larger jumps rather than the usual few-paise daily movement, and they're usually reported in the news well before or right when they take effect.

**Step 5** — Use apps like Fuel@IOC (Indian Oil), HP Pay, or simply check MyPetrolPrice.com or GoodReturns each morning if you want the actual number rather than trying to predict it yourself.

## Where I got confused initially

My biggest early mistake was assuming that if crude oil prices fell sharply, my local pump price should fall by a proportional amount almost immediately. It doesn't work like that, for two reasons I didn't appreciate at first.

One, the 15-day averaging genuinely delays and softens the transmission — a sharp one-day crude crash gets diluted across two weeks of averaging.

Two, and this is the bigger one: excise duty is a flat rupee amount, not a percentage. So when crude prices fall, the government sometimes doesn't pass that entire saving on to consumers — it can choose to leave excise duty unchanged (or even raise it slightly) to shore up its own revenue, especially when the fiscal situation calls for it. I watched this happen during a stretch when global crude dropped noticeably but pump prices barely moved, and the excise duty piece was exactly why.

## Common mistakes people make when tracking fuel prices

- **Comparing today's pump price directly to today's Brent crude headline.** The rolling average and TPP mechanism mean there's rarely a same-day correlation.
- **Assuming a crude price crash guarantees a proportional pump price drop.** Flat excise duty and government fiscal decisions can absorb some or all of that saving.
- **Ignoring the rupee-dollar rate.** People fixate purely on crude oil news and miss that currency movement alone can shift prices even when crude stays flat.
- **Expecting every petrol pump in a city to show the exact same price.** Non-automated pumps sometimes lag by a few hours in updating, and very minor differences can exist between outlets of the same company based on transport distance from the depot.
- **Confusing the daily crude-driven movement with policy-driven jumps.** A ₹2-3 sudden jump is almost always a tax change announcement, not a crude oil swing — daily crude movements are usually measured in single-digit paise.

## Final thoughts

Once you actually see the mechanism laid out — the rolling average, the import-export parity blend, the currency conversion, and the tax layers stacked on top — that daily 6 AM price change stops feeling arbitrary. It's a genuinely calculated number, just one built from more moving parts than most of us ever bother to look into.

Next time your fuel app pings you about a few-paise change overnight, you'll actually know what's behind it instead of just shrugging and filling up anyway.
