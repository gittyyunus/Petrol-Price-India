---
title: "How a Petrol Pump Works: The Complete Journey from Underground Tank to Your Fuel Tank"
description: "A step-by-step engineering breakdown of how a petrol pump actually works — the submersible turbine pump, air separator, nutating-disc flow meter, electronic head and auto-cut-off nozzle — plus the Legal Metrology accuracy rules that decide how many litres really reach your tank."
pubDate: 2026-10-19
category: "Fuel Prices"
tags: ["fuel pump", "petrol pump", "dispensing accuracy", "legal metrology", "flow meter", "fuel quality"]
heroImage: "/blog-images/petrol-1600.jpg"
heroImageWidth: 1600
heroImageHeight: 1067
---

**The short version:** a petrol pump is not one machine with a motor and a counter. It is four machines working in series — an underground storage tank, a submersible turbine pump buried inside that tank, a dispenser that filters, separates air and *counts* fuel in fixed physical pockets, and a spring-loaded nozzle that shuts itself off — with a set of Legal Metrology seals deciding whether the number on the display is honest. Everything you can actually perceive at the forecourt (the speed of the fill, the click of the nozzle, a nozzle that drips, a meter that seems to run fast) traces back to one of those four stages.

I've written plenty on this site about *what* petrol costs and *why* — excise duty, state VAT, dealer commission, crude in dollars. This one is about the machine. Because once you understand how the fuel physically gets from a hole in the ground into your tank, two things get much clearer: why accuracy is a mechanical problem rather than a moral one, and which of your pump-side suspicions are real and which are superstition.

---

## 1. The four stages, and what each one is responsible for

| Stage | Where it lives | What it does | What you notice when it fails |
|---|---|---|---|
| Storage | Underground tank, 1–2 m below the forecourt | Holds fuel, keeps water and air out, monitors level and temperature | Slow filling, water alarms, wetstock loss |
| Pressure | Submersible turbine pump, *inside* the tank | Pushes fuel up and along the pipe run to the dispenser | Weak or surging flow, pump cycling on and off |
| Measurement | Dispenser (the box you lean on) | Filters, removes air, counts litres, multiplies by price | Wrong-looking numbers, air in the sight glass, display not zeroing |
| Delivery | Hose and nozzle | Delivers fuel safely and stops itself when the tank is full | Nozzle won't stay open, clicks off early, drips |

Nothing in that chain is a counter attached to a pipe. The single most important thing to internalise: **fuel is measured in fixed-volume pockets, not estimated by flow speed**. The pump's job is only to move the liquid. The counting is done downstream, by geometry.

---

## 2. Stage one: the underground storage tank

Beneath every forecourt sit one or more tanks, typically holding 10,000–20,000 litres per compartment, with separate compartments for petrol and diesel at larger outlets. Modern tanks are double-walled — an inner steel or fibreglass shell inside an outer shell, with the gap between them (the interstitial space) continuously monitored for leaks. A single pinhole in a tank that has been in the ground for twenty years is exactly why that interstitial monitoring exists.

A few things happen inside the tank that most drivers never think about:

- **Water sits at the bottom, and petrol floats.** Petrol's density is 720–775 kg/m³ against water's 1000, so any water — from condensation, a bad delivery or a leaking tank cover — forms a distinct layer under the fuel. The pump's pickup strainer deliberately sits well above the tank floor so it draws fuel, not that water layer. Attendants at good outlets check for water with paste on a dip stick during deliveries; that check exists for a reason.
- **Ethanol makes this worse.** E20 petrol contains 20% ethanol, which is hygroscopic — it actively attracts and holds water from the atmosphere. This is the real E20 storage story, and it's why tank water monitoring became far more important between 2023 and 2026 than it was in the E0 era. A detailed treatment of that chemistry is in [what E20 petrol actually does to your car](/blog/what-is-e20-petrol/).
- **An automatic tank gauge (ATG) probe runs down the middle of the tank.** It measures level, temperature, product density and the water interface height, usually on a schedule of seconds, and feeds a console in the kiosk. This is how the dealer knows a delivery went in correctly, how the oil company reconciles wetstock, and how a leak gets caught before anyone smells anything.
- **The tank breathes.** Every litre pumped out has to be replaced by air coming in through a vent pipe, fitted with a flame arrester. You can sometimes hear this: the faint huff from a vent near the canopy as a tanker fills the tank.

Deliveries themselves go through a strainer and are gauged against the delivery challan before the tanker leaves. Most everyday wetstock shrinkage — the industry's polite word for fuel that vanished — happens at delivery or through water, not through your nozzle.

---

## 3. Stage two: the submersible turbine pump — why modern pumps *push*

Here is the part that surprises most people: **in a modern forecourt, the pump is not in the dispenser at all.** It is submerged inside the underground tank, on the end of a vertical column, with a multi-stage centrifugal impeller stack and an electric motor (typically 0.75–2 hp for a retail outlet) sitting in the fuel it is pumping.

It works by pushing, not sucking. And the distinction matters.

A suction pump at street level can only lift fuel by atmospheric pressure pushing it up the pipe. The theoretical ceiling is about 10 metres of water; with petrol, which is volatile and easily vaporises, the practical ceiling is far lower — a couple of metres on a hot afternoon, before the fuel ahead of the impeller flashes into vapour and the pump loses its prime entirely. That failure has a name everyone in the trade knows: **vapour lock**. Older suction-type dispensers, still found at some smaller Indian outlets, are the ones that cough, surge and stop mid-fill on a 44°C day.

A submersible turbine pump (STP) sidesteps the whole problem by pressurising the line instead of evacuating it:

1. The impellers spin and push fuel up the column.
2. Fuel travels along buried pipe to the dispenser under positive pressure — Indian dispenser specifications allow a maximum working pressure of about 3.5 kg/cm² (roughly 3.4 bar).
3. A check valve and pressure relief valve at the pump keep the line charged when idle and stop water-hammer damage.
4. The pump's static pressure is adjustable (typically 0–40 psi at the manifold) so it can be tuned to the pipe run's length and the number of nozzles.

Delivery rates are specified per nozzle, not per station: Indian oil company dispenser tenders call for a **minimum of 30 litres per minute** per nozzle in standard duty and **60 litres per minute** in heavy-duty configurations, with a 4-metre hose (19 mm bore for standard duty, 25 mm for heavy duty).

Two less obvious features are worth knowing:

- **Line leak detection.** The pump or its controller holds the pressurised line after each dispensing cycle and watches the pressure decay. Systems of this class are specified to catch leaks above roughly 11.4 litres per hour — a trickle you would never see on the ground, but a number that adds up fast over a year and a serious one in a residential area.
- **Hydraulic hammer.** When a nozzle snaps shut, the moving column of fuel stops dead and the pressure wave rebounds back down the pipe. Over thousands of cycles it fatigues joints and fittings. Variable-speed pump drives ramp flow up and down instead of slamming it, which is one reason newer canopies are quieter.

Failure at this stage looks like: flow that starts strong then fades, a pump that cycles on and off during a fill, or one nozzle that is always slower than the others when two are running at once.

---

## 4. Stage three: the dispenser — filter, air separator, and the meter that does the counting

This is the machine you actually interact with. It's worth knowing that the Indian Standard for dispensing pumps, **IS 3033**, defines a meter-type dispenser as essentially seven parts: a casing, a pumping unit, a metering unit, a register for quantities, a flexible hose with nozzle, a filter, and an air separator. On a modern STP-fed unit the "pumping unit" has migrated underground, so the box is left with the four parts that matter to you.

### The filter

Fuel passes through a replaceable filter element — commonly in the 10–20 micron range — before it reaches the meter. Its job is to protect *you*: particulate that gets past a filter erodes the meter's internal clearances, which is a slow, permanent way for accuracy to drift. Filters are a scheduled consumable, and clogged ones are the single most common cause of a nozzle that fills slowly. Dirt and sludge increase with tank age, with dirty deliveries, and (in ethanol blends) with the corrosion products ethanol can mobilise in an older fuel system.

### The air separator — the component nobody talks about

If air bubbles reach the meter, the meter will happily count them as fuel, because it measures *volume passing through*, and an air bubble occupies volume. You would then pay for air. The air separator (air eliminator) sits ahead of the meter and gives bubbles a place to rise and escape instead.

This is why a partly empty tank, a leaky pipe joint on the suction side of an older dispenser, or a pump running near its limit can produce the classic "the pump is giving me air" complaint. Air in the line is not a metering trick — it is a fault, and it works against the customer.

### The meter: counting in fixed pockets

Retail fuel meters are **positive displacement** devices, most commonly a nutating disc (some use oval gears or a piston stack). The principle is beautifully simple:

- Fuel entering the measuring chamber pushes against a disc that is seated on a ball.
- The disc cannot spin like a propeller; instead it *wobbles* around the ball in a fixed, repeating path — nutation.
- Each complete wobble cycle traps and expels an exact, repeatable volume of fuel.
- A gear converts that wobble into rotation, and the rotation drives the pulser.

Because the chamber volume is fixed by manufacture, the meter counts rather than estimates. Flow speed changes how *fast* the pockets fill, not how much each pocket holds — which is why a pump reading is broadly trustworthy across a wide range of speeds, and why fraud has to be achieved by physically altering the meter or the electronics, not by turning a knob on flow.

Wear matters though. The clearance between disc and chamber wall lets a small amount of fuel slip past uncounted; as that clearance grows with billions of litres, the meter slowly starts **under-registering** — delivering more fuel than it displays. That is the direction almost all natural drift runs, and it is the reason verification exists.

### The pulser and the electronic head

The pulser is a magnetic or optical pickup bolted directly to the meter that converts rotation into electrical pulses. Modern Indian specs insist the pulser be **an integral part of the metering unit** — no intermediate gears or cables — precisely because an external drive is something that can be tampered with.

The electronic head (calculator) does the arithmetic you see:

- pulses → litres, via a calibration factor (k-factor) stored in the head
- litres × price per litre = rupees, refreshed whenever the oil company pushes the daily price revision
- preset authoring (the attendant keying ₹500 or 10 litres before you arrive)
- totaliser tracking

On tamper protection, the level of detail in an Indian oil company dispenser specification is instructive: the head is required to raise an error and stop dispensing if a chip is inserted into the pulser circuit, if the pulser card or CPU is removed while the unit is powered off, or if pulses are detected running backwards. The calibration adjustment itself is only reachable **when the Legal Metrology seal is broken**, and the permitted correction range is capped — BPCL's published specification, for example, allows a maximum of 1% adjustment on the short-delivery side.

### The totalisers — the numbers nobody reads

Behind the front panel sit registers that behave differently:

- **Transaction display** — resets to zero every time, the one you watch.
- **Shift/day totals** — reset by the attendant's login, used for reconciliation.
- **Non-resettable grand total** — the lifetime litre count of that nozzle, which no dealer can zero.

That last one is the reason an outlet's printed grand total can be compared against its purchase and delivery records. When a pump is recalibrated, the calibration factor changes and the grand total keeps running — auditors read both.

---

## 5. How India actually enforces accuracy

This is where "is the pump cheating?" stops being a matter of opinion.

**IS 3033 (Accuracy requirements for dispensing pumps used in petroleum trade)** sets the permissible error: **15 ml on a 5-litre check, and 0.25 per cent above 5 litres**. The same standard says the pump must deliver correctly anywhere between 15 litres per minute and its maximum rate. Indian oil company procurement specifications are tighter still for new equipment — a typical requirement is **+15 ml to 0 ml on a 5-litre measure** (never short, at most 15 ml over) and **±0.3 per cent or better** for the complete system including pipework, valves, hose and nozzle.

Verification is a physical, witnessed procedure. The Delhi Controller of Weights and Measures procedure, drawn from the Legal Metrology rules, spells out the practical steps:

1. Test with the actual product the dispenser is intended to deliver, using stamped check measures.
2. Check measures are themselves re-verified against working standards at least once every six months.
3. Run the pump first so the hose is fully wetted — a dry hose distorts the first reading.
4. Prime and check for leakage before checking accuracy.
5. Dispense at a uniform rate of **not less than 10 litres per minute**.
6. Dispense **20 litres** when checking the totaliser.
7. Seal the dispensing unit and totaliser with lead and wire so any later opening is visible.

Those lead blobs on the dispenser's calibration panel are not decoration. Breaking one to adjust the calibration factor without an inspector present is the offence, and it is a visible, auditable one.

The regulatory machinery has been expanding. In **May 2026** the Government of India amended the Legal Metrology (Government Approved Test Centre) Rules to add petrol/diesel, CNG, LPG, LNG and hydrogen dispensers to the instruments that Government Approved Test Centres can verify, with verification fees fixed at **₹5,000 per nozzle** for petrol and diesel — a reform aimed squarely at reducing the verification backlog at existing outlets.

And the backlog matters, because field results are not flattering. A **2026 Karnataka Legal Metrology drive checked 805 petrol stations**; at **101 of them the dispensing error was outside permissible limits**, and **85.2 per cent of the nozzles at those outlets were found defective** — at stations that had been recalibrated within the previous year. Accuracy is not a problem you solve once. Meters wear, hoses age, nozzles' internal valves erode, and verification has to be periodic to mean anything.

Which brings it back to what a driver can do. The three checks that actually work take under a minute:

- **Confirm the display reads zero before fuel starts.** The single most common real-world short-changing mechanism, and it's free to check.
- **Watch the display rather than your phone** during the fill.
- **Ask for the 5-litre jar test** if you genuinely suspect the machine. Every outlet is required to keep a certified 5-litre measure. The full procedure — including the filter paper test and density test for adulteration, which are separate problems from measurement — is covered in [the tests you can legally ask for at any pump in India](/blog/why-my-motorcycle-mileage-dropped-fuel-pump-tests/).

Take the receipt either way. Without it there is no paper trail, and a complaint that can't be tied to a date, time and outlet code goes nowhere.

---

## 6. Why "a litre" isn't a fixed amount of energy

Petrol expands as it warms: roughly **1.2 ml per litre per degree Celsius** (diesel is around 0.8 ml). The fuel sitting in an underground tank in June is not at the same temperature as the fuel in your tank on a January morning in Srinagar, and a volumetric meter counts litres of *expanded* fuel just as happily as litres of dense fuel.

India verifies dispensers on delivered volume at ambient conditions — the face of the machine reads litres, not "litres at 15 °C", the way temperature-compensated dispensers are labelled in some countries. So a litre dispensed on a 42°C afternoon can carry roughly **2–3 per cent less energy** than the same litre dispensed at 15°C, purely from thermal expansion. That's not a swindle; it's the same physics that makes a hot day a bad day for fuel density, and it's small next to the tax stack.

What *is* regulated is the density band: petrol must fall within **720–775 kg/m³ at 15°C**, and E20 is formulated to sit inside that same band despite the ethanol. That is why a density reading that looks unusual is not automatically evidence of adulteration — see the density test section of the [fuel pump tests guide](/blog/why-my-motorcycle-mileage-dropped-fuel-pump-tests/) for the correct interpretation.

For the money side of the same litre — how base price, excise duty, dealer commission and state VAT assemble into the number the electronic head multiplies by — the worked arithmetic is in [how fuel excise duty and state VAT are calculated](/blog/how-fuel-excise-duty-and-state-vat-are-calculated/) and [why prices change at 6 AM](/blog/why-petrol-prices-change-at-6am-and-how-omcs-calculate-them/). Today's rate for your city is on our [petrol price tracker](/petrol-price-in-india/).

---

## 7. What actually happens when you squeeze the trigger

1. **The attendant presets the transaction** (say ₹500) or starts it in autorun mode. The price per litre was already pushed to the dispenser by the forecourt controller when today's price took effect.
2. **Lifting the nozzle from its boot closes a switch** that wakes the dispenser; on STP systems the underground pump starts and the buried line pressurises.
3. **Fuel leaves the tank** through the pickup strainer, up the pump column, past the check valve, along the buried pipe run.
4. **Inside the dispenser it passes the filter**, then the air separator, where bubbles are shed before they can be counted.
5. **Fuel enters the measuring chamber.** The disc nutates; each cycle is a fixed volume; the pulser emits pulses proportional to rotation.
6. **The electronic head converts pulses to litres** using its sealed calibration factor, multiplies by the price, and updates the three displays.
7. **Fuel travels up the 4-metre hose** and through the nozzle valve, which is held open by your grip.
8. **As the vehicle tank fills, fuel rises in the filler neck** until it covers the small sensing hole near the tip of the spout.
9. **The nozzle shuts itself off** — more on that mechanism below — with the familiar click, usually before the tank is truly brim-full.
10. **You release the trigger, the nozzle goes back in its boot**, the display freezes for a moment while the transaction prints, and the pump resets to zero for the next customer. Fuel left in the hose drains back; the line stays charged and ready.

The order of that sequence explains a lot of everyday behaviour. The line pressurising is why flow is weak for the first second. The filter and air separator being upstream of the meter is why a fault there changes what you're *charged* for, not just what you see. And the nozzle sensing hole being the trigger for the cut-off is why the finish of every fill is governed by your car's filler geometry rather than by anything the attendant does.

---

## 8. The auto-cut-off nozzle: the cleverest part of the pump

The pressure-sensitive automatic nozzle (models from ZVA, OPW, Tatsuno and similar makers are specified in Indian oil company tenders, in 13/16-inch spout size for standard duty) is a purely mechanical safety device — no wires, no sensor, no power.

How it works:

- Fuel rushing through the spout past a small **sensing hole** at the tip creates a low-pressure region — the Venturi effect.
- That hole is connected through a tube to a chamber containing a **diaphragm**, with a spring-loaded latch holding the trigger open.
- While the hole is uncovered, air flows through it freely and the pressure either side of the diaphragm stays close to balance, so the latch holds.
- The moment rising fuel in the filler neck **covers the hole**, air flow stops, the vacuum in the sensing line increases sharply, and the pressure difference pulls the diaphragm.
- The diaphragm trips the latch, the trigger snaps part-way shut, and dispensing stops.

Everything about it is a consequence of fluid mechanics, which is why it works with the power off and why it fails in a predictable, mechanical way — a blocked sensing hole (from dirt or heavy wax) makes a nozzle click off repeatedly or not at all, and a worn latch makes it slow. It is also why the nozzle must be positioned so the spout points into the tank neck and not resting against the filler pipe: if the hole is pinned against metal, it can be "covered" without real fuel being there, and the nozzle cuts off after half a litre.

Two related details:

- **Why it cuts off before the tank feels full:** the vehicle's own filler neck and evaporative vapour path determine when fuel backs up to the spout. It's the car's design, not a restriction at the pump.
- **The last few drops:** a small quantity of fuel remains in the spout and hose after every fill. Some outlets drip; that's a worn or dirty nozzle valve, and the fuel in it is fuel you already paid for.

---

## 9. Symptoms, causes, and what they actually mean

| What you see | Most likely cause | What it means for you |
|---|---|---|
| Fill is slow from the start | Clogged filter element, or a partially closed valve | A maintenance issue; ask the attendant to check the filter |
| Flow surges and fades | Low tank level, vapour in the line, or a suction-type dispenser on a hot day | Not a metering fault; fuel delivered is still counted correctly |
| Air bubbles visible in sight glass | Air ingress upstream of the meter | Real fault — air is being counted, ask them to check the line |
| Nozzle clicks off repeatedly | Blocked or mispositioned sensing hole in the spout | Reposition or reholster the nozzle; often clears itself |
| Display doesn't read zero at start | Reset not pressed, or a stuck register | The classic short-changing route — always check first |
| Meter keeps creeping after shut-off | Worn valve letting fuel creep through the meter | Under-delivery over time; grounds for a complaint |
| Outlet smells strongly of petrol | Vapour loss, a leaking nozzle valve or a vent problem | Worth mentioning at the counter; report if persistent |

Note what is *absent* from that list: pump speed. A fast fill is not a cheating fill. Flow rate affects accuracy only at the extremes — which is why the Indian standard defines correctness from 15 litres per minute upward, and why verification is done at a steady, moderate rate rather than flat out.

---

## 10. Safety: why the forecourt looks the way it does

Petrol vapour is flammable across a wide range of air mixtures, and the whole installation is designed on that assumption:

- **Electrical equipment in the hazard zone is flameproof/explosion-proof** — sealed enclosures that can contain an internal ignition without igniting the atmosphere outside. This is why dispenser housings are heavy and the cabling is glanded, and why nobody sensible repairs one with a screwdriver and a torch.
- **Grounding and bonding** keep the vehicle, the nozzle and the dispenser at the same electrical potential, so filling a plastic jerrycan or leaning across a metal tank can't generate a spark in the vapour path. Use the bonding clip; it's there for the container, not for show.
- **Tank and installation approvals** come through PESO, with oil industry safety standards (OISD) governing design, layout and maintenance across the industry.
- **No smoking, engine off** rules are engineering requirements, not etiquette.
- **Nozzle spouts and hoses are specified for ethanol-blended fuel** — hoses rated for petrol blended with ethanol, with seals compatible with E20. An outlet running old, non-rated hose on E20 is a genuine compatibility problem, not a theoretical one.

---

## 11. Frequently asked questions

### Does a petrol pump measure mass or volume?

Volume. Indian retail dispensers are volumetric positive-displacement meters, so what you buy is litres at whatever temperature the fuel happens to be. Mass-based (weighing) dispensers exist in industrial and custody-transfer settings, and tank gauging uses temperature and density to convert, but at the retail nozzle the number on the display is a count of physical pockets of liquid.

### Why does the display always reset to zero?

Because the transaction register is designed to reset on each sale while a separate, non-resettable grand total keeps accumulating the lifetime litre count of that nozzle. The reset is what makes "check that it reads zero" a meaningful test — if it hasn't reset, the previous customer's litres are being added to yours.

### Can I really ask for a 5-litre test at any outlet?

Yes. Every retail outlet is required to keep a government-certified 5-litre measure, and a deviation beyond the permitted tolerance is a legitimate basis for complaint. Bring the receipt, note the outlet code, and ask for the complaint register if it goes further. Full procedure, plus the adulteration tests, in [the fuel pump tests guide](/blog/why-my-motorcycle-mileage-dropped-fuel-pump-tests/).

### Is a faster pump less accurate?

Within its specified range, no. A positive-displacement meter counts fixed volumes regardless of speed; what changes with speed is how quickly those volumes pass. Accuracy is only specified from a minimum rate (15 litres per minute under IS 3033) upward, and extreme flow can aggravate air entrainment — so a pump specified at 30–60 litres per minute per nozzle is operating well inside its accurate band.

### Does the pump know the fuel's temperature?

Not for pricing. Indian retail dispensers deliver and bill by uncorrected volume at ambient temperature; there is no automatic temperature compensation applied to what you pay. Temperature and density are monitored inside the tank by the ATG probe for inventory purposes, which is a different job.

### What does the attendant actually control?

The preset (amount or litres), starting and stopping the transaction, and the price display — which is pushed down from the oil company when the daily revision takes effect. The calibration factor is not in their hands: it sits behind a Legal Metrology seal, and breaking it without an inspector is an offence.

---

## Final thoughts

The thing that changed for me in writing this is how much of a petrol pump's reputation problem comes from the parts nobody explains. The counter is the only part you can read, so the counter gets the blame for what a twenty-year-old tank, a clogged filter, a thermal expansion curve and a worn nozzle valve are each quietly contributing to.

What holds up under scrutiny is the core mechanism: fuel is counted in fixed physical pockets by a sealed, verifiable meter, under a standard that permits 15 ml of error on a five-litre check — and that meter's adjustable components are behind lead seals a government inspector applies. What doesn't hold up is assuming the machine is either magic or a con. It's plumbing, geometry and arithmetic, and like anything mechanical it wears, which is why periodic verification exists and why the checks that cost you nothing — zero on the display, eyes on the screen, receipt in hand — are the ones worth doing every single time.

If you want the other half of the picture — what each of those litres is made of, chemically, before it ever reaches the forecourt — start with [how petrol is extracted from crude oil](/blog/how-petrol-is-extracted-from-crude-oil/). And for turning litres into money, [how to calculate petrol cost per km](/blog/how-to-calculate-petrol-cost-per-km/) does the arithmetic for your own vehicle.
