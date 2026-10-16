---
title: "Why Diesel Gives More Mileage Than Petrol — The Real Physics, With the Numbers Worked Out"
description: "Diesel's extra mileage isn't magic and it isn't because diesel 'burns better'. It's density, compression ratio, and the missing throttle plate — each effect worked out with Indian fuel specs, real car numbers, and the exact conditions where the advantage vanishes."
pubDate: 2026-10-16
category: "Fuel Prices"
tags: ["diesel mileage", "mileage", "petrol vs diesel", "fuel efficiency", "diesel engine", "thermal efficiency"]
heroImage: "/blog-images/fuel-1600.jpg"
heroImageWidth: 1600
heroImageHeight: 1066
---

My cousin bought a diesel mid-size SUV last year and has never let our family group chat forget it. At a relative's wedding last month, over a second helping of biryani, he announced that his car was returning "sixteen, seventeen easy in city" while the petrol version of the same car struggles to touch twelve. Then he offered his theory, with total confidence: "Diesel is a thicker fuel. More power packed in. Slower burning. That's why the mileage is more. Simple."

Everyone at the table nodded. It sounded right. It is also, at best, one-third right — and the two-thirds he was missing are the interesting parts, because they explain not just *that* diesel gives more mileage, but exactly *how much more*, in *which conditions*, and precisely *when the advantage disappears*.

I went looking for a proper answer — the Bureau of Indian Standards fuel specifications, the thermodynamics textbooks the engine companies would rather you didn't read, Rudolf Diesel's own 1897 certification test results, and owner-reported mileage numbers from real Indian cars — because every explanation I could find online either stopped at "diesel has more energy" (half true, and for the wrong reason) or turned into an engineering lecture with no rupee attached. Here's the whole thing, worked out properly, including the part where I realised the physics predicts a 40% advantage that no actual car delivers, and why that gap between theory and your speedometer is itself worth understanding.

## The short answer

Diesel gives more mileage because three separate effects stack on top of each other:

**1. A litre of diesel physically contains about 10–13% more energy than a litre of petrol** — not because diesel is a "stronger" fuel, but because it's denser. Per kilogram, the two fuels are essentially twins (about 45.5 MJ/kg each). Per litre, diesel wins, because a litre of diesel weighs about 830 grams while a litre of petrol weighs about 745.

**2. A diesel engine converts a much larger share of that energy into motion** — roughly 35–45% thermal efficiency in a modern diesel against about 25–36% in a petrol engine. This comes from higher compression ratios, leaner combustion, and one piece of hardware the petrol engine carries and the diesel engine doesn't: the throttle plate.

**3. Multiply the two** and the physics ceiling is around 40% more kilometres per litre. Real cars deliver 15–30%, because diesel powertrains are heavier, BS6 aftertreatment takes a cut, and the advantage is at its weakest exactly where most brochure comparisons are done — steady highway cruising.

The single most useful thing to know before the deep dive: **the gap is biggest in city driving and smallest on the highway.** A petrol hatch at 18 km/l in the city typically has a diesel sibling at 21–22 (about +22%); the same pair on a steady highway run narrows to 20 vs 23 (about +15%). That pattern isn't an accident — it falls straight out of *why* diesel engines are more efficient, as you'll see in Advantage 3.

## Advantage 1: a litre of diesel simply holds more energy — because it's denser

Start with the fuel itself, because this part is pure physics and no engineer can argue with it.

The Bureau of Indian Standards publishes the legal specification for both fuels. Under the BS-VI regime:

| Property (BIS spec, BS-VI) | Petrol (IS 2796) | Diesel (IS 1460) |
|---|---|---|
| Density at 15°C | 720–745 kg/m³ | 810–845 kg/m³ |
| Energy per kilogram | ~45.5–45.8 MJ/kg | ~45.5 MJ/kg |
| Energy per litre (mid-spec) | **~33–34 MJ** | **~37–38 MJ** |

Read the density row again. A litre of diesel is legally required to weigh about 810–845 grams. A litre of petrol weighs about 720–745 grams. Diesel is roughly 10–12% heavier per litre — those long, straight hydrocarbon molecules simply pack more tightly than petrol's lighter, branchier ones.

Now the crucial nuance my cousin had backwards: **per kilogram, the two fuels contain almost identical energy** — about 45.5 MJ in a kilogram of diesel, about 45.5–45.8 MJ in a kilogram of petrol. If you burned them by weight in a laboratory, they'd be a dead heat. Diesel doesn't contain "more power". It contains the same power, in a smaller volume, because it's a denser liquid.

But engines don't burn fuel by the kilogram. They burn it by the litre — your tank holds litres, the pump sells litres, and your mileage is measured in kilometres per litre. And per litre, diesel wins by about 10–13%.

That advantage alone, with identical engines (which you can't actually have, but stay with me), would give diesel about 10–13% more range. It's the smallest of the three effects, it's the one everybody quotes, and on its own it would not explain the 22–30% gaps people actually see. The rest of the story is in the engine.

## Advantage 2: the diesel cycle squeezes the air harder and extracts more work from it

Here is the sentence the whole post hangs on: **a diesel engine is, thermodynamically, a more aggressive machine than a petrol engine — and that's by design, not by accident.**

Both engines are four-stroke machines that compress an air-fuel mixture and extract work as the hot gases push the piston down. The difference is how hard they compress, and how that changes the physics of the burn.

| | Petrol engine | Diesel engine |
|---|---|---|
| Typical compression ratio (passenger cars) | 9:1 – 12:1 | 14:1 – 22:1 |
| How fuel ignites | Spark plug, timed by ECU | Compression alone heats air to 500–700°C; injected fuel auto-ignites |
| Fuel spec that enables this | RON 91 (anti-knock) | Cetane 51 (ignition quality) |
| Typical thermal efficiency | ~25–36% | ~35–45% |

The compression ratio is the ratio of the cylinder's volume at the bottom of the piston's stroke to its volume at the top. Compress the same charge into a smaller space, and you get a hotter, higher-pressure mixture to extract work from — and crucially, the expansion stroke (where the actual work happens) is proportionally longer, so more of the heat gets converted to push rather than exiting through the exhaust as waste.

This isn't marketing, it's the fundamental result of the Otto and Diesel thermodynamic cycles, and the efficiency gain from raising compression is steep up to about 10:1 and continues to climb after that, only tapering off as mechanical friction and heat losses start eating into the gains. A petrol engine can't chase that climb, because compress an air-petrol mixture too far and it self-ignites uncontrollably — knock, which destroys pistons. That's what the 91 RON minimum in Indian petrol is protecting against: knock resistance, not energy content.

A diesel engine faces no such limit, because there's no fuel in the cylinder during compression — only air. Compress air as hard as you like (within mechanical limits) and it simply gets hotter; inject fuel into that superheated air and it ignites on contact, no spark needed. That's what the cetane number measures — the fuel's *willingness* to ignite promptly (minimum 51 for BS-VI diesel), the exact opposite property to octane's resistance to ignition.

The result shows up where it matters — in the share of fuel energy that becomes useful work:

| Engine type | Thermal efficiency |
|---|---|
| Typical petrol passenger engine (2026) | ~25–36% |
| Best Atkinson-cycle petrol engines | up to ~40–41% |
| Typical modern turbo-diesel | ~35–45% |
| Large marine diesels (for perspective) | over 50% |

### Rudolf Diesel knew exactly what he was building

This is worth two minutes, because it reframes the whole question. Rudolf Diesel wasn't trying to build a cheaper engine — he was trying to build a *thermodynamically superior* one. He had watched the steam engines of the 1890s convert perhaps 10% of their fuel into useful work, and set out to approach the theoretical Carnot limit.

His certification test, conducted in Munich on 17 February 1897 by Professor Moritz Schröter, measured a net efficiency of about **26%** — and within months of further tuning, about 30%. That was roughly *double* the best gasoline engines of the era. The engine wasn't an accidental efficiency winner; efficiency was the entire product brief. (As a footnote, at the 1900 Paris World's Fair a small diesel engine ran happily on groundnut oil — the French government wanted a motor that could run on colonial vegetable fuels. Diesel's engine was flexible about fuel decades before "flex-fuel" was a marketing term.)

A century and a quarter later, the gap has narrowed — petrol engines have gained direct injection, Atkinson cycles, and variable valve timing — but it has never closed. Today's best diesel passenger engines still sit a solid 15–25% ahead of comparable petrol ones in converting fuel to motion, before you even count diesel's density advantage.

## Advantage 3: the petrol engine's invisible tax — the throttle plate

This is the effect almost nobody mentions, and it's the reason the mileage gap is biggest in city driving.

A petrol engine controls its power with a **throttle plate** — a butterfly valve in the intake that physically restricts how much air enters. At 15–20% load (cruising slowly in city traffic, which is where most Indian kilometres happen), that plate is nearly closed. The pistons then have to *fight* to suck air past it, creating a partial vacuum in the intake that acts as a constant brake on every intake stroke. Engineers call this **pumping loss**, and in typical city driving it can quietly consume 5–10% of the engine's total output — fuel burnt, work done, zero extra motion. You pay it at exactly the moment you're trying to save fuel.

A diesel engine has **no throttle plate at all**. It always sucks in a full, unrestricted breath of air, and controls power by simply injecting more or less fuel into that air. At light load, it's not fighting a vacuum — it's just burning a small squirt of fuel in a sea of excess air. The pumping loss that taxes the petrol engine at every city crawl simply doesn't exist on the diesel side.

There's a second, subtler layer to this. A petrol engine with a catalytic converter must hold its air-fuel mixture at a very specific ratio — about 14.7:1, "stoichiometric" — because the catalyst only cleans emissions effectively inside that narrow window. The calibration is boxed in. A diesel engine, always running lean with excess air, faces no such straitjacket and can be calibrated purely for efficiency across its whole operating range.

This one physical fact — the missing throttle plate — explains the pattern every owner reports and no fuel-spec sheet mentions: **diesel's mileage advantage peaks in stop-start city driving (often 25–30% better) and shrinks on the open highway (often 10–20% better)**, because at sustained higher speeds the petrol engine's throttle is opened up, its pumping losses shrink, and both engines approach their natural comfort zone.

## Two smaller contributors worth knowing

Neither of these decides the argument alone, but they add a percentage point here and there:

**Torque where you actually drive.** Modern Indian turbo-diesels (the 1.5-litre units in Creta, Seltos, Thar, Scorpio-N and their relatives) produce peak torque at roughly 1,600–2,500 rpm — right in the band you live in during city driving and highway merges. The engine doesn't need to be revved hard or downshifted frequently to get moving, so less fuel is spent spinning the engine up. A petrol engine makes its peak power much higher up the rev range, and much of city driving is spent below that sweet spot.

**Cooler, leaner burn.** Because diesel combustion always runs with excess air, it burns more completely and at a slightly lower peak flame temperature than a stoichiometric petrol burn. Less energy leaves as unburnt fuel; more is available as work. (This is also, incidentally, where diesel's historical NOx and particulate problem comes from — lean combustion is efficient but chemically "dirty" in other ways. BS6's DPF and, on some engines, urea dosing exist precisely to clean up that side-effect. The efficiency didn't disappear under BS6; the side-effects got scrubbed, at a hardware cost.)

## The stack: what the physics predicts vs what your speedometer shows

Do the multiplication my cousin skipped:

- Energy per litre: diesel ×1.10 to ×1.13
- Thermal efficiency: diesel ×1.15 to ×1.30
- **Physics ceiling: roughly ×1.35 to ×1.45 — up to 40–45% more kilometres per litre**

Now look at what real, unmodified Indian cars actually deliver:

| Segment (real-world city driving, owner-reported) | Petrol | Diesel | Diesel's advantage |
|---|---|---|---|
| Hatchback (Swift/i20 class) | ~18 km/l | ~21–22 km/l | **+17–22%** |
| Mid-size SUV (Creta/Seltos class) | ~12 km/l | ~15–16 km/l | **+25–33%** |
| Large SUV / MPV (Innova class) | ~9–10 km/l | ~13–14 km/l | **+35–45%** |

The hatchback and mid-size SUV both land *below* the physics ceiling. The big MPV hits the ceiling almost exactly — and that's not a coincidence: the heavier the vehicle and the more stop-start the driving, the more of the diesel advantage survives contact with reality, because the petrol engine's penalties (throttling, lower torque requiring more revs) grow with load while the diesel's weaknesses (extra weight, aftertreatment) stay roughly constant as a fraction.

What closes the gap between the ×1.45 ceiling and the ×1.22 your hatchback actually shows:

- **Weight.** A diesel powertrain — bigger block, turbo plumbing, heavier gearbox, DPF, sometimes an AdBlue tank — adds roughly 50–80 kg over the petrol sibling. That's real mass to haul through every traffic light.
- **Aftertreatment backpressure.** The DPF and its sensors sit in the exhaust stream and restrict flow slightly; the engine works a touch harder for every kilometre.
- **Full-throttle behaviour.** Modern diesels are tuned for tractability and emissions at high load, not peak efficiency; petrol turbo engines have closed the gap at wide-open throttle more than they have at light load.
- **Driver behaviour.** Diesel's effortless low-end torque invites brisker acceleration. It's a psychological mileage loss, not a mechanical one — but it's real, and it shows up in owner data.

Use your own city's rates before converting any of this to money: today's [diesel price by city](/diesel-price-in-india/) and [petrol price by city](/petrol-price-in-india/) change the rupee value of every extra kilometre. And the full cost-per-kilometre picture — diesel's premium price, breakeven distance, the lot — is worked out in [which car is best, petrol or diesel](/blog/which-car-is-best-petrol-or-diesel/).

## Where diesel's mileage advantage shrinks or disappears

An honest answer has to include the conditions where the physics stops paying out:

**Short trips, cold engine.** A diesel takes noticeably longer than a petrol to reach efficient operating temperature — more metal to heat, higher compression losses when cold, glow-plug-assisted starts that smell of incomplete combustion. The first two or three kilometres of any diesel trip are its least efficient by a wide margin. A pure 4-km office commute never leaves that zone.

**City-only lives and the DPF regeneration tax.** A diesel particulate filter captures soot and must periodically burn it off at sustained exhaust temperatures — typically a proper 30–40 minute run at steady speed. A diesel that only ever crawls 8 km through traffic never completes a clean regeneration cycle; the soot loads up, the car eventually forces a prolonged, fuel-hungry regeneration, and in the bad case you're looking at limp mode and a dealer visit. This is the same failure mode covered in much more detail in [which car is best, petrol or diesel](/blog/which-car-is-best-petrol-or-diesel/) — the short version: if your daily drive is under 15 km of pure city traffic, a diesel is fighting its own design.

**Steady high-speed highway.** As covered above, the throttle-plate penalty largely evaporates at higher loads. Two cars that gap by 25% in city traffic may gap by only 10–15% cruising at a constant 100 km/h.

**Strong hybrids.** A petrol hybrid doesn't beat diesel's thermodynamics — it beats them *by cheating*, recovering braking energy a conventional engine throws away as heat and reusing it at low load. A 22–25 km/l hybrid matches or beats the diesel's per-litre advantage with none of the DPF constraints. It's the one legitimate rival to the physics, and it's why diesel's share has stabilised rather than recovered.

**Old naturally aspirated diesels.** The pre-2015 Indian diesel hatchbacks — the original Indica, Esteem diesel, older Swift DDiS — delivered a smaller real-world gap than modern turbo units, with far more vibration and smoke. If your mental image of "diesel mileage" comes from a 2010 taxi, recalibrate: modern common-rail turbo diesels are a different machine.

One wildcard cuts the other way: **E20 petrol.** India's move to 20% ethanol blend trims petrol's energy content by about 3–4% (ethanol simply packs less energy per litre than petrol), which *widens* diesel's mileage gap by a couple of points against new-generation petrol. The compatibility and mileage implications are covered fully in [what is E20 petrol](/blog/what-is-e20-petrol/).

## How to check the gap in your own case

Don't take anyone's word for it — not your cousin's, not mine. The tank-fill method settles it:

**Step 1** — Fill the tank of the diesel to the auto cut-off, note the odometer.

**Step 2** — Drive your normal routes for a full tank — city, highway, school runs, everything, in normal proportions.

**Step 3** — Fill to auto cut-off again; note litres and the new odometer reading. Mileage = (difference in odometer) ÷ (litres).

**Step 4** — Repeat the same process in the petrol version of the same car (a friend's, a rental, a colleague's) over the same routes and the same week, ideally the same traffic conditions.

**Step 5** — Compare the two numbers, not the brochure numbers. And ignore the dashboard's own fuel-efficiency display for this comparison — most trip computers flatter themselves by 1–2 km/l; the same point is made with actual pump-test data in [my fuel pump mileage tests piece](/blog/why-my-motorcycle-mileage-dropped-fuel-pump-tests/) and the tracking method in [how I cut my fuel bill by 15%](/blog/how-i-cut-my-fuel-bill-by-15-percent/).

If you want the simplest possible sanity check without a second car: in India's real market, a petrol hatch returning 18 km/l in mixed city driving should have a diesel sibling returning about 21–22 on the same routes. If yours returns 14, the problem is the car or the driving, not the fuel chemistry. If it returns 26, tell me which model — that would be genuinely interesting.

## Common mistakes people make

- **"Diesel is a more powerful fuel, that's why the mileage is more."** Per kilogram, diesel and petrol contain almost the same energy (~45.5 MJ/kg each). Diesel wins per *litre* because it's denser — a volume advantage, not an energy advantage. The bigger win is in the engine's efficiency, not the fuel's potency.
- **"Diesel burns hotter, so it goes farther."** Diesel combustion actually runs somewhat cooler and always leaner than a stoichiometric petrol burn. The efficiency comes from how hard the air is squeezed and how far the gases expand — compression ratio and expansion ratio — not from burn temperature.
- **"A bigger engine should be thirstier, so diesel shouldn't win."** Engine *size* is nearly irrelevant to the comparison; engine *cycle* is everything. A 1.5-litre diesel beats a 1.5-litre petrol on efficiency for the reasons above, and a modern 1.0-litre turbo petrol is more efficient than an old 1.6-litre NA petrol for the mirror-image reasons (downspeeding, direct injection).
- **"ARAI says my diesel does 23, so 23 is normal."** Certified figures are lab numbers for both fuels — steady speed, no traffic, no AC. Real-world is 15–25% lower on both sides; always compare owner-reported numbers.
- **"Better mileage means cheaper to run."** Per-litre price, variant premium, maintenance and resale can swamp the mileage advantage — the diesel hatch's extra ₹1.0–1.2 lakh takes 75,000–90,000 km to repay, as [which car is best, petrol or diesel](/blog/which-car-is-best-petrol-or-diesel/) works out, and [petrol vs diesel vs CNG running costs](/blog/petrol-vs-diesel-vs-cng-running-costs/) reaches the same place from tracked bills.
- **"Diesel cars can't give bad mileage."** They can, and for boring mechanical reasons — clogged air filters, worn injectors, under-inflated tyres, a DPF stuck mid-regeneration. The physics advantage sets the ceiling; maintenance and habits decide how close you get. The habit-side levers are the ones detailed in [how I cut my fuel bill by 15%](/blog/how-i-cut-my-fuel-bill-by-15-percent/).
- **"The petrol-diesel mileage gap is a fixed number."** It's a range that moves with segment, driving cycle, speed, load, ambient temperature, and — increasingly — whether you're comparing against a plain petrol or a hybrid.

## Frequently asked questions

### Which gives more mileage, petrol or diesel?

Diesel, in essentially every comparable pairing — typically 15–30% more kilometres per litre in real Indian driving, from a combination of about 10–13% more energy per litre and 15–30% better thermal efficiency in the engine. The advantage is largest in city driving (25–33% in hatchbacks and SUVs) and smallest at steady highway speeds (10–20%). It does not automatically mean lower total cost — the diesel variant usually costs ₹1–1.5 lakh more up front.

### Why does diesel give more mileage in the city but less of an advantage on the highway?

Because the petrol engine's biggest efficiency penalty — pumping loss through a mostly closed throttle plate — is worst at the light loads of city driving and largely disappears at sustained higher speeds where the throttle opens up. The diesel also has peak torque low in the rev range, perfectly matched to stop-start traffic. On a steady highway run both engines approach their efficient zones and the gap narrows to roughly 10–20%.

### Does diesel have more energy than petrol?

Yes per litre, no per kilogram. BIS specifications put diesel at 810–845 kg/m³ density against petrol's 720–745 kg/m³, so a litre of diesel carries about 37–38 MJ against petrol's 33–34 MJ — roughly 10–13% more. But per kilogram both fuels are almost identical at about 45.5 MJ/kg. Diesel's advantage at the pump is a packing advantage, not a chemical one.

### How much more mileage does a diesel car actually give in India?

Owner-reported, mixed city driving: a petrol hatch at 18 km/l typically has a diesel sibling at 21–22 km/l (+17–22%); a petrol mid-size SUV at 12 km/l has a diesel at 15–16 km/l (+25–33%); large MPVs and SUVs can gap 35–45% because the petrol engine's penalties scale with vehicle weight. Highway-only comparisons narrow these gaps by roughly 5–10 percentage points on each.

### Do BS6 diesel cars still have the mileage advantage, or did emissions gear kill it?

They still have it, slightly trimmed. DPF, urea dosing (where fitted) and the extra weight of aftertreatment cost roughly 2–5% of fuel economy against a hypothetical pre-emissions diesel of the same engine — but a modern BS6 turbo-diesel still comfortably beats its petrol sibling. What changed under BS6 was the purchase price (₹50,000–₹1,00,000 of hardware added to the variant) and the maintenance regime (DPF care), not the fundamental physics.

### Is diesel mileage better because diesel is thicker or slower-burning?

No. Viscosity ("thickness") doesn't deliver energy; density does, and as shown above diesel's edge is real but modest on its own (~10–13% per litre). Burn speed isn't the driver either — the dominant factor is the engine: higher compression ratio, longer effective expansion, no throttle plate, lean unthrottled combustion. The fuel and the engine each contribute; the engine contributes more.

### Will diesel cars lose their mileage advantage to hybrids?

Against plain petrol cars, no — the density and compression-ratio advantages are physics, not fashion, and they'll hold as long as both fuels are burned. Against strong hybrids, the race is genuinely close: hybrids recover braking energy that neither diesel nor petrol can keep, and top hybrids already match or beat diesel's real-world km/l in city driving with none of the DPF constraints. The diesel's remaining advantages over hybrids are torque, highway load-carrying, and range — the reasons diesel survived as an SUV fuel.

## Final thoughts

Diesel's mileage advantage isn't one thing, it's three things multiplied together: a denser liquid that packs ~10–13% more energy into every litre, an engine cycle that converts 35–45% of that energy into motion against petrol's 25–36%, and a city-driving profile that hands the diesel its biggest win precisely where most Indians actually drive. Rudolf Diesel designed the machine in 1897 specifically to beat the efficiency of everything around it, and 129 years later the physics argument he bet his name on still hasn't been overturned — only narrowed at the edges by hybrids.

The honest caveats matter as much as the physics: short trips, pure-city DPF struggles, and steady highway cruising each shrink the gap, and the gap is worth ₹1–2 per kilometre, not ₹5. If you want to convert "more mileage" into "more savings", the full decision — variant premium, breakeven, resale, Delhi-NCR rules — is in [which car is best, petrol or diesel](/blog/which-car-is-best-petrol-or-diesel/), and the price side of the equation, [why diesel sits below petrol at every pump](/blog/why-diesel-is-cheaper-than-petrol/), has its own official-number working. Check [today's diesel price](/diesel-price-in-india/) and [petrol price](/petrol-price-in-india/) for your city, run the tank-fill method on your own car once, and you'll have your own answer — the only version of this question worth trusting.
