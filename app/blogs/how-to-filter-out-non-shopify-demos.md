---
title: "How to Get Rid of Non-Shopify Demos From Your Calendar (and Never Miss a Real Shopify Lead Again)"
description: "Automation playbook to filter out non-Shopify demo bookings so your calendar stays open for real Shopify leads."
author: "Team ShopifyOrNot.in"
---

# How to Get Rid of Non-Shopify Demos From Your Calendar (and Never Miss a Real Shopify Lead Again)

If you’re building a **Shopify app or plugin**, then your _only_ ICP is **Shopify stores**.

But here’s the painful truth:

> Your calendar is probably filled with demo calls from **non-Shopify stores** — WooCommerce, Wix, Magento, custom-coded shops…  
> **None of them can ever convert.**

While it may _look_ like your campaigns are working (“Wow, 30 demos booked today!”), the reality is:

### 🔥 70% of those demos are noise — and they steal time, energy, and real revenue opportunities.

Let’s break down the _actual_ pain this causes, and how to automate the entire filtering process.

---

## ❌ The Real Pain: Why Non-Shopify Demos Are a Hidden Revenue Leak

There are **two massive problems** that most Shopify app companies ignore:

---

## 1️⃣ Non-Shopify demos waste hours every week

Here’s what your sales rep actually does when a non-Shopify demo gets booked:

1. Open the website
2. Wait for the site to load
3. Open a Shopify-detection plugin
4. Wait for plugin to load
5. Manually verify the site
6. Realize it's **not** Shopify
7. Switch context to calendar
8. Cancel the demo
9. Write a message replying to the lead
10. Update CRM

Now multiply this by **50–100 demo bookings per week**.

💀 That’s hours of wasted manual effort.

Just website loading + plugin loading + context switching easily takes **40–60 seconds per lead**.

-   100 leads → **1–1.5 hours wasted weekly**
-   400 leads → **5–6 hours wasted monthly**

And all of this time is spent on leads that were **never** going to convert.

---

## 2️⃣ Non-Shopify demos block your calendar for real, high-intent Shopify merchants

This is the **bigger** hidden problem.

When a non-Shopify store books a slot:

-   They **block time** on your calendar
-   A real Shopify merchant arrives later…
-   …but sees **no available slots for 2–3 days**
-   High-intent leads don’t wait
-   They go to your competitor who had an open slot
-   You lose a customer you _should have closed first_

### ⚠️ Delayed Shopify demos → lower conversion

### ⚠️ Being late to demo → competitors win

### ⚠️ A packed calendar of wrong leads → real ones drop off

This can cost you **thousands in lost ARR every month**.

---

# ✅ The Fix: Auto-Reject Non-Shopify Demo Bookings (Before They Hit Your Calendar)

Instead of manually checking leads _after_ they book, you should **stop non-Shopify leads at the time of booking**.

And it's only a **1-step automation**.

Here’s how to do it.

---

## 🔄 Step-by-Step: Automatically Reject Non-Shopify Demo Bookings Using Zapier

This works with any calendar tool:

-   Google Calendar
-   Calendly
-   TidyCal
-   HubSpot Meetings
-   Cal.com
-   SavvyCal

Just ensure your booking form **collects the website URL**.

---

## Step 1 — Make sure your demo booking form includes: “Website URL”

This is important.

On Calendly or any booking app, add a required field:

> **“Please enter your website URL”**

Because ShopifyOrNot must evaluate the website before allowing the booking through.

---

## Step 2 — Send new calendar bookings to Zapier

In Zapier:

-   Trigger: **“New Event Scheduled”** (Calendly / Google Calendar / HubSpot Meetings etc.)
-   This pulls the meeting details including the **website field**.

---

## Step 3 — Call ShopifyOrNot API to check if the site is Shopify

Add a Webhook GET request:

```
https://api.shopifyornot.in/check?url={{Website}}&source=YOURAPPNAME
```

Zapier will receive:

```json
{
    "is_shopify": false,
    "confidence": 0.05,
    "shop_domain": null
}
```

---

## Step 4 — Add a filter: Only continue if `is_shopify = true`

If it's NOT Shopify:

-   Reject booking
-   Free up your calendar
-   Notify the person politely

If it IS Shopify:

-   Let the meeting stay
-   Optionally send a welcome flow
-   Create/update in CRM

---

## Step 5 — Auto-Reject Non-Shopify Demos

In Zapier:

-   Add step: **Cancel Event** (Calendly / Google Calendar)
-   Send automated email:

```
Hi! Thanks for showing interest in our product.

Unfortunately, our product is exclusively built for Shopify stores,
so we may not be the best fit for your business right now.

Wishing you the best,
<Your Company>
```

Done.  
Your calendar now stays clean, uncluttered, and focused only on **qualified Shopify demos**.

---

# ⭐ Why This Automation Is a Game-Changer

### ⏱️ Saves 1–5 hours per week

(previously wasted manually checking websites)

### 📅 Opens calendar slots instantly

for real Shopify prospects

### ⚡ Faster demos = higher conversions

### 🧠 Eliminates context switching

for your sales team

### 🏆 Always be the first to demo → win more deals

This is one of the simplest automations you can implement — yet it directly impacts pipeline quality, revenue, and sales efficiency.

---

## 🎯 Final Thought

If non-Shopify leads sneak into your calendar, the cost is not just **time wasted**.

It's the **opportunity you lose** when a real Shopify merchant can’t find a fast demo slot.

A tiny automation using **ShopifyOrNot API** ensures:

-   Your calendar stays **clean**,
-   Your SDRs stay **focused**,
-   And your Shopify leads get **instant demo availability** — before your competitors steal them.

---

## 👉 Want to set this up right now?

Follow the step-by-step guide:  
**[How to check whether a website is Shopify or not in Zapier → /integrations/zapier]**

Or try it instantly on our homepage. Just paste any website → see if it's Shopify.
