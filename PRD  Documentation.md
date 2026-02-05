# **Comprehensive Documentation: Terra Water Bottle Landing Page**

This document contains the merged contents of the **Product Requirements Document (PRD)** and the **Visual Asset Checklist**.

# **Part 1: Product Requirements Document (PRD)**

**Product:** Terra Water Bottle (Launch Page)

**Version:** 1.0

**Status:** Approved for Development

**Date:** October 26, 2023

**Author:** Senior Product Manager

## **1\. Executive Summary**

Terra is an early-stage startup based in Ahmedabad, India, disrupting the single-use plastic water bottle market. The product is a biodegradable, plant-based bottle that decomposes into soil, priced at parity with standard plastic competitors (₹18-19).

**The Objective:** Build a high-performance landing page to validate market demand ("Desirability") by capturing email signups (Waitlist) and B2B inquiries (Wedding/Corporate Events). The design must convey "Eco-friendly" without "Greenwashing," utilizing a natural, minimalist aesthetic.

## **2\. Technical Stack (Non-Negotiable)**

| Layer | Technology | Version | Notes |
| :---- | :---- | :---- | :---- |
| **Framework** | React | 18.x | Functional components, custom hooks |
| **Build** | Vite | 5.x | TypeScript template |
| **Language** | TypeScript | 5.x | Strict mode enabled |
| **Styling** | Tailwind CSS | 3.x | Use tailwind.config.js for custom colors |
| **Animation** | Framer Motion | 10.x+ | Scroll-triggered entry animations |
| **Icons** | Lucide React | Latest | **Strictly NO emojis** |
| **Deployment** | Vercel | — | — |

**Project Structure:**

src/  
├── components/  
│   ├── ui/           \# Button, Input, Modal, Badge  
│   ├── sections/     \# Hero, ImpactCalculator, Features, Footer  
│   └── layout/       \# Navbar, Container  
├── hooks/            \# useScrollLock, useMediaQuery  
├── lib/              \# utils.ts (cn), constants.ts  
├── assets/           \# Local images if strictly necessary  
└── styles/           \# globals.css

## **3\. Design System & Visuals**

### **3.1 Color Palette**

Based on the "Bio Beige" and "Terra Teal" brand guidelines.

// tailwind.config.js extension  
colors: {  
  brand: {  
    beige: '\#F5F5DC', // "Bio Beige" \- Backgrounds (Paper feel)  
    teal: '\#2E8B57',  // "Terra Teal" \- Primary Actions/Water accents  
    earth: '\#4B3621', // "Deep Earth" \- Text/Contrast  
    accent: '\#D2B48C', // Secondary details  
  },  
  neutral: {  
    50: '\#FAF9F6',  
    100: '\#F5F5DC', // Using beige as base  
    // ... standard tailwind grays for the rest if needed, keep warm  
    900: '\#1A1A1A',  
  }  
}

### **3.2 Typography**

* **Headings:** Montserrat (Bold/700 for headlines, Medium/500 for subheads).  
* **Body:** Lato (Regular/400).  
* **Scale:** Mobile-first. text-3xl on mobile becomes text-5xl on desktop.

### **3.3 UI Philosophy**

* **Texture:** The background should feel like organic paper (solid color is fine, but avoid clinical white).  
* **Shapes:** Rounded corners (rounded-xl) to feel organic, not sharp.  
* **Iconography:** Use lucide-react exclusively.  
  * Example: \<Leaf /\> for eco, \<Droplets /\> for water, \<Recycle /\> for lifecycle.

## **4\. Visual Asset Manifest**

The developer must use these specific placeholder structures.

| Asset Name | Location | Dimensions | Description |
| :---- | :---- | :---- | :---- |
| **Hero Product Shot** | Hero Section | 1920x1080 | Close up of the Terra bottle sweating condensation, sitting on natural soil. |
| **Lifecycle Diagram** | "How it Works" | 1200x600 | 3-step flow: Plant Material \-\> Bottle \-\> Returns to Soil. |
| **Decomposition Time-lapse** | Impact Section | 1080x1080 | (Video Placeholder) Bottle dissolving into earth over 180 days. |
| **Founder Team** | About/Footer | 800x600 | Group photo of Ishita, Mansi, and Mahi. |
| **Comparison Chart** | Vs Plastic | 800x800 | Side-by-side visual of Terra vs. Bisleri/Kinley. |

## **5\. Page Specifications: Homepage (/)**

### **5.1 Meta Data**

* **Title:** Terra | The ₹19 Biodegradable Water Bottle  
* **Description:** Drink water, not plastic. The plant-based bottle that turns back into soil in 180 days. Pre-order now in Ahmedabad.

### **5.2 Section Breakdown**

#### **A. Navigation (\<Navbar /\>)**

* **Left:** Logo (Text: "TERRA" in Montserrat Bold).  
* **Right (Desktop):** "Why Terra", "Impact", "For Events".  
* **Right (Action):** Button "Join Waitlist" (Solid Brand Teal).  
* **Mobile:** Hamburger menu (locks scroll when open).

#### **B. Hero Section (\<Hero /\>)**

* **Layout:** Split screen (Text Left, Image Right) on Desktop. Stacked on Mobile.  
* **Headline:** "Guilt-Free Hydration."  
* **Subhead:** "The durability of plastic. The price of plastic. But it returns to the earth when you're done."  
* **CTA:**  
  * Primary: "Join the Waitlist" (Input field \+ Button combo).  
  * Secondary: "Watch it disappear" (Play icon link).  
* **Asset:**  
  {/\* PLACEHOLDER: Hero Image \- Bottle on Soil \*/}  
  \<div className="bg-brand-beige aspect-square md:aspect-video rounded-2xl border-2 border-brand-earth/10 flex items-center justify-center relative overflow-hidden"\>  
    \<Leaf className="w-20 h-20 text-brand-teal opacity-20 absolute top-4 right-4" /\>  
    \<span className="text-brand-earth font-montserrat font-bold text-xl"\>Hero: Bottle on Soil\</span\>  
  \</div\>

#### **C. Social Proof / Trust Bar (\<TrustBar /\>)**

* **Content:** "Engineered by students from \[Institute Name Placeholder\]."  
* **Visual:** Row of logos (Monochrome opacity-50): FSSAI Compliant badge, "100% Biodegradable" badge, "Made in India" badge.

#### **D. The Problem vs. Solution (\<Comparison /\>)**

* **Format:** Two cards comparison.  
* **Card 1 (The Old Way):** "Standard Plastic." Icon: \<Trash2 /\>. Points: "400 years to decompose," "Microplastics," "Toxic."  
* **Card 2 ( The Terra Way):** "Terra Bottle." Icon: \<Sprout /\>. Points: "180 days to decompose," "Plant-based," "₹19 (Same Price)."  
* **Design:** Card 2 should have a subtle green glow/border.

#### **E. How It Works (\<Lifecycle /\>)**

* **Headline:** "From Nature, Back to Nature."  
* **Content:** 3-Step Infographic.  
  1. **Sourced:** Corn/Starch based PLA.  
  2. **Used:** Durable for 12 months. Heat resistant up to 45°C.  
  3. **Returned:** Decomposes in soil.  
* **Asset:**  
  {/\* PLACEHOLDER: Infographic \- Lifecycle \*/}  
  \<div className="bg-white/50 border-2 border-dashed border-brand-earth/20 rounded-lg p-8 text-center h-64 flex flex-col items-center justify-center"\>  
    \<RefreshCw className="w-12 h-12 text-brand-teal mb-4" /\>  
    \<p className="text-brand-earth font-medium"\>Infographic: Corn \-\> Bottle \-\> Soil\</p\>  
  \</div\>

#### **F. Impact Calculator (Interactive Component)**

* **Headline:** "Calculate Your Impact."  
* **Logic:** Input slider \[Bottles per week\].  
* **Output:** "You save \[X\] kg of plastic per year."  
* **Formula:** bottles \* 52 \* 0.02kg (approx weight of bottle).  
* **Why:** High engagement, emphasizes the "Impact" value prop.

#### **G. Use Cases (\<UseCases /\>)**

* **Tabs:** "Daily Commute" | "Weddings & Events" | "Corporate".  
* **Content:**  
  * *Events:* "Hosting a wedding? Don't leave a mountain of plastic behind."  
  * *Commute:* "Grab one at the station. Toss it in the compost."

#### **H. Lead Capture / Footer (\<Footer /\>)**

* **Headline:** "Coming soon to Ahmedabad."  
* **Form:** Email Input \+ "Notify Me" Button.  
* **Checkbox:** "I am an event organizer interested in bulk orders."  
* **Links:** Instagram, LinkedIn (Founders), Privacy Policy.  
* **Copyright:** "© 2024 Terra. Drinking Water, Returned to Earth."

## **6\. Mobile Robustness Requirements**

The developer must implement the following CSS/Logic:

1. **Prevent Horizontal Scroll:**  
   html, body { overflow-x: hidden; width: 100%; }

2. **Touch Targets:** All buttons must have min-h-\[44px\] and min-w-\[44px\].  
3. **Input Zoom Prevention:**  
   /\* In Tailwind config or global css \*/  
   input { font-size: 16px; } /\* Prevents iOS zoom on focus \*/

## **7\. SEO & Analytics Specification**

### **7.1 Meta Tags**

\<title\>Terra | The Sustainable Water Bottle\</title\>  
\<meta name="description" content="Meet Terra: The ₹19 plant-based water bottle that decomposes in 180 days. Joining the fight against plastic in Ahmedabad." /\>  
\<meta property="og:image" content="/images/og-terra-bottle.png" /\>

### **7.2 Analytics Events (Mock)**

* hero\_cta\_click: Click on "Join Waitlist" in Hero.  
* calculator\_used: User interacts with the slider.  
* bulk\_interest: User checks the "Event organizer" box.

### **7.3 JSON-LD**

{  
  "@context": "\[https://schema.org\](https://schema.org)",  
  "@type": "Product",  
  "name": "Terra Water Bottle",  
  "description": "Biodegradable water bottle made from plant starch.",  
  "offers": {  
    "@type": "Offer",  
    "price": "19.00",  
    "priceCurrency": "INR",  
    "availability": "\[https://schema.org/PreOrder\](https://schema.org/PreOrder)"  
  }  
}

## **8\. Development Phases**

1. **Setup:** Initialize Vite \+ Tailwind with Brand Colors (Beige/Teal).  
2. **Components:** Build Button, Input, and Card primitives.  
3. **Hero & Impact:** Build the top fold and the Calculator component.  
4. **Content Sections:** Implement Features, Lifecycle, and Comparison.  
5. **Responsiveness:** Audit on mobile view (375px width).  
6. **Interactions:** Add Framer Motion fade-ins on scroll.

## **9\. Clarifications for AI Developer**

* **"No Greenwashing":** Do not use terms like "100% Eco-Friendly" without context. Use "Biodegradable" and specific timeframes ("180 days").  
* **Currency:** Ensure all prices are displayed as **₹** (INR).  
* **Temperature:** Mention heat resistance (45°C) in the FAQ or Features, as this is a key technical validator in the context document.

# **Part 2: Visual Asset Checklist**

**Brand Aesthetic:** Organic, Raw, Minimalist.

**Primary Colors:** Bio Beige (\#F5F5DC), Terra Teal (\#2E8B57), Deep Earth (\#4B3621).

**Rule:** No generic "happy people drinking water" stock photos. Focus on the material and the bottle.

## **1\. Hero & High-Impact Imagery**

*These assets determine the user's first impression (0-3 seconds).*

| Asset Name | Type | Description & Creative Direction | Placeholder Spec (Developer) |
| :---- | :---- | :---- | :---- |
| **Hero Product Shot** | Photo | **Close-up of the Terra bottle sitting on dark soil.** The bottle should have condensation (sweat) to look refreshing. *Goal: Contrast the beige bottle against the dark earth to emphasize "Return to Earth."* | aspect-video or 1920x1080 Bg: Dark Brown Icon: Water Droplet |
| **"In-Hand" Scale Shot** | Photo | **A hand holding the bottle against a blurred urban Indian street background.** *Goal: Prove the bottle is real, ready for market, and fits a standard lifestyle.* | 800x1000 Bg: Gray/Blur Text: "Lifestyle Shot" |
| **Texture Macro** | Photo | **Extreme close-up of the bottle surface.** *Goal: Show the matte, paper-like texture to differentiate it from shiny, cheap plastic.* | 800x800 Bg: Beige Texture Text: "Macro Texture" |

## **2\. Infographics & Diagrams**

*These explain the complex "science" simply.*

| Asset Name | Type | Description & Creative Direction | Placeholder Spec (Developer) |
| :---- | :---- | :---- | :---- |
| **The Lifecycle Loop** | Vector | **Circular 3-step diagram:** 1\. **Source:** Corn/Starch Icon (Plants) 2\. **Use:** Bottle Icon (Hydration) 3\. **End:** Sprout Icon (Decomposition in Soil) *Style: Line art in Terra Teal.* | 1200x600 Bg: Transparent Icons: Lucide Sprout, RefreshCw |
| **Plastic vs. Terra** | Chart | **Comparison Table: Left (Plastic):** Red X icons (400 Years, Toxic). **Right (Terra):** Green Check icons (180 Days, Plant-based). *Goal: Quick visual win for the value prop.* | 800x800 Bg: White Card |
| **Heat Resistance Proof** | Graphic | **Icon of a sun with a thermometer set to 45°C next to the bottle.** *Goal: Address the specific fear of bottles melting in Indian summers.* | 400x400 Icon: ThermometerSun |

## **3\. Trust & Credibility Badges**

*Essential for food-grade products in the Indian market.*

| Asset Name | Type | Description |
| :---- | :---- | :---- |
| **FSSAI Compliance** | Badge | Monochrome (Earth Brown) version of the standard FSSAI logo. |
| **Made in India** | Badge | Stylized lion or map outline. Important for local market pride. |
| **180-Day Bio** | Badge | Custom circular badge: "Biodegradable in 180 Days." |
| **No Microplastics** | Badge | Shield icon with "Microplastic Free" text. |

## **4\. Founder & Team Assets**

*Since this is a student startup, showing faces builds immense trust.*

| Asset Name | Type | Description |
| :---- | :---- | :---- |
| **The Team Photo** | Photo | **Ishita, Mansi, and Mahi together.** Holding prototype bottles, casual/smiling. *Goal: "We are real people solving a real problem."* |
| **The "Lab" Shot** | Photo | One of the founders inspecting materials or conducting the "Stress Test." *Goal: Shows rigor and effort behind the project.* |

## **5\. UI Elements & Icons (Lucide React)**

*For the developer to implement using the icon library.*

* **Eco-Friendly:** \<Leaf /\>, \<Sprout /\>, \<Recycle /\>  
* **Water/Freshness:** \<Droplets /\>, \<GlassWater /\>  
* **Performance:** \<ThermometerSun /\> (Heat resistance), \<ShieldCheck /\> (Durability)  
* **Action:** \<ArrowRight /\>, \<ChevronDown /\>