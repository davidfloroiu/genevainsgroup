// Unsplash image URLs (free, no attribution required)
export const images = {
  hero: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  philosophy: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?auto=format&fit=crop&w=800&q=80',
  autoInsurance: 'https://images.unsplash.com/photo-1669941060931-6912c4538ba3?auto=format&fit=crop&w=1400&q=80',
  homeInsurance: 'https://images.unsplash.com/photo-1753012442320-b450d8b80b8b?auto=format&fit=crop&w=1400&q=80',
  commercial: 'https://images.unsplash.com/photo-1745342283859-06b9389a023b?auto=format&fit=crop&w=1400&q=80',
  lifeHealth: 'https://plus.unsplash.com/premium_photo-1661688361733-a50696e91db6?auto=format&fit=crop&w=1400&q=80',
  specialty: 'https://images.unsplash.com/photo-1598737285721-29346a5c9278?auto=format&fit=crop&w=1400&q=80',
  umbrella: 'https://images.unsplash.com/photo-1513172128806-2d00531a9f20?auto=format&fit=crop&w=1400&q=80',
};

export const serviceCards = [
  {
    slug: 'home-insurance',
    title: 'Home Insurance',
    desc: 'Tailored homeowners, condo, renters, and landlord policies that protect your most valuable assets with the coverage depth most agencies overlook.',
    icon: 'home',
  },
  {
    slug: 'auto-insurance',
    title: 'Auto Insurance',
    desc: 'Full-spectrum vehicle protection from standard auto to classic cars, motorcycles, and recreational vehicles — all optimized for your driving profile.',
    icon: 'auto',
  },
  {
    slug: 'life-health',
    title: 'Life & Health',
    desc: 'Term life, whole life, health, dental, and vision — structured to protect your family\'s wellbeing and your financial legacy for decades to come.',
    icon: 'heart',
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    desc: 'General liability, BOP, workers\' comp, professional liability, and commercial property — custom-fitted to your industry and growth trajectory.',
    icon: 'briefcase',
  },
  {
    slug: 'umbrella',
    title: 'Umbrella',
    desc: 'Extended liability protection that sits above your existing policies, providing crucial coverage for high-net-worth individuals and families.',
    icon: 'shield',
  },
  {
    slug: 'specialty',
    title: 'Specialty',
    desc: 'High-value home programs, trust-owned policies, collectibles coverage, and specialty lines for clients whose protection needs go beyond the standard.',
    icon: 'clock',
  },
];

export const servicePages = {
  'auto-insurance': {
    title: 'Auto Insurance',
    pageTitle: 'Auto Insurance Quote | Car Insurance Coverage | Geneva Insurance Group',
    metaDescription: 'Get an auto insurance quote from 25+ carriers. Multi-car discounts, teen driver coverage, classic car insurance, and full-spectrum vehicle protection from an independent agency.',
    hero: {
      heading: 'Auto coverage that actually keeps up with you',
      description: 'Whether you drive a daily commuter, a classic car, or a fleet of work vehicles, we match you with the right carrier and coverage structure so you never overpay or come up short.',
      image: images.autoInsurance,
    },
    coverages: [
      { title: 'Liability', description: 'Bodily injury and property damage coverage that protects your assets. We help you set limits that reflect your actual financial exposure — not just the state minimum.' },
      { title: 'Collision & Comprehensive', description: 'Coverage for damage to your own vehicle — whether from an accident, theft, hail, vandalism, or animal strikes. We help you choose the right deductible balance.' },
      { title: 'Uninsured / Underinsured', description: 'Protection when the other driver lacks adequate coverage. More common than you think — and critical for protecting yourself and your passengers.' },
      { title: 'Roadside & Rental', description: 'Towing, lockout assistance, and rental car reimbursement when your vehicle is in the shop. Small add-ons that make a real difference when you need them.' },
      { title: 'Classic & Specialty', description: 'Agreed-value policies for classic cars, exotics, and collector vehicles. Standard auto policies undervalue these — specialty coverage ensures proper protection.' },
      { title: 'SR-22 & High-Risk', description: 'Need an SR-22 filing or have a complicated driving history? We work with specialized carriers to find you the most competitive rates available.' },
    ],
    whyGeneva: [
      { title: 'Multi-Carrier Shopping', description: 'Unlike captive agents locked into one company, we compare rates and coverage from dozens of carriers to find the best combination for your specific situation.' },
      { title: 'Bundle Optimization', description: 'We look at your full insurance picture — home, auto, umbrella — and structure bundles that maximize discounts without forcing you into a carrier that is not the best fit.' },
      { title: 'Limit Guidance', description: 'Most people carry liability limits that are far too low for their actual asset exposure. We help you understand what you should carry and why — in plain language.' },
      { title: 'Discount Maximization', description: 'Multi-vehicle, good driver, defensive driving, telematics, pay-in-full — we make sure every eligible discount is applied to bring your premium down as far as it can go.' },
    ],
    faqs: [
      { q: 'How much auto insurance do I really need?', a: 'State minimums are almost never enough. We recommend liability limits that reflect your total assets and earning potential — because in a serious accident, you could be personally liable for amounts well beyond minimum coverage. We walk you through the math so the decision is clear.' },
      { q: 'Will switching carriers cause a coverage gap?', a: 'Never — we coordinate the timing of your new policy to start the same day your old one ends. There is zero lapse in coverage, and we handle the entire transition for you including notifying your lienholder if applicable.' },
      { q: 'Do you handle claims or just sell the policy?', a: 'We are your advocate throughout the entire claims process. We help you file, coordinate with the adjuster, and push back if the settlement does not reflect what you are owed. You are never on your own.' },
    ],
    cta: {
      heading: 'Ready to review your auto insurance?',
      description: 'Let us shop your coverage and show you what better protection looks like. No obligation, no pressure — just clarity.',
    },
  },
  'home-insurance': {
    title: 'Home Insurance',
    pageTitle: 'Home Insurance Quote | Homeowners Insurance Coverage | Geneva Insurance Group',
    metaDescription: 'Homeowners, condo, renters, and landlord insurance from 25+ carriers. High-value home coverage, flood insurance, and scheduled property protection from an independent agency.',
    hero: {
      heading: 'Your home is your most significant investment',
      description: 'We build homeowners coverage that accounts for the details most agencies miss — from replacement cost accuracy to liability gaps that could leave you exposed.',
      image: images.homeInsurance,
    },
    coverages: [
      { title: 'Homeowners', description: 'Dwelling, personal property, liability, and additional living expenses — all calibrated to your home\'s true replacement cost, not just its market value.' },
      { title: 'Condo', description: 'Coverage that fills the gap between your HOA\'s master policy and what\'s actually your responsibility — interior walls, fixtures, personal property, and liability.' },
      { title: 'Renters', description: 'Protect your belongings and shield yourself from personal liability. Affordable coverage that most renters don\'t realize they need until it\'s too late.' },
      { title: 'Landlord', description: 'Protect your rental properties with dwelling fire, liability, and loss-of-income coverage designed specifically for investment property owners.' },
      { title: 'Flood & Earthquake', description: 'Standard policies don\'t cover these. We help you evaluate your actual risk and find the most cost-effective supplemental coverage available.' },
      { title: 'Scheduled Property', description: 'Jewelry, art, collectibles, and other high-value items that exceed standard policy limits — individually scheduled for full replacement value.' },
    ],
    whyGeneva: [
      { title: 'Replacement Cost Accuracy', description: 'Most homeowners are underinsured because their dwelling coverage hasn\'t kept up with construction costs. We audit your replacement cost annually to make sure you\'re covered for what it would actually cost to rebuild.' },
      { title: 'Carrier Competition', description: 'We shop your coverage across 25+ carriers to find the best combination of price, coverage breadth, and claims reputation. You get options — not a single take-it-or-leave-it quote.' },
      { title: 'Gap Analysis', description: 'We review your full risk picture — sewer backup, ordinance or law coverage, personal liability limits, identity theft — and flag the gaps that could cost you tens of thousands in an uncovered loss.' },
      { title: 'Claims Advocacy', description: 'When you need to file a claim, we\'re in your corner. We coordinate with adjusters, push back when settlement offers fall short, and make sure you\'re treated fairly throughout the process.' },
    ],
    faqs: [
      { q: 'How much homeowners insurance do I actually need?', a: 'Your dwelling coverage should reflect the full cost to rebuild your home from the ground up — not your purchase price or market value. We use current construction cost data for your area to ensure your limits are accurate.' },
      { q: 'What doesn\'t a standard homeowners policy cover?', a: 'Standard policies typically exclude flood, earthquake, sewer and drain backup, mold (beyond limited amounts), and wear-and-tear. Many also cap payouts for jewelry, electronics, and other high-value items.' },
      { q: 'How often should I review my homeowners policy?', a: 'At minimum, annually — and always after major life changes like renovations, large purchases, adding a pool, or changes to your family situation. We schedule proactive annual reviews with every client.' },
      { q: 'Can you help lower my premium without reducing coverage?', a: 'Often, yes. By shopping across multiple carriers, bundling policies, adjusting deductibles, and applying eligible discounts, we frequently find ways to improve your rate while maintaining or even expanding coverage.' },
    ],
    cta: {
      heading: 'Ready to review your home insurance?',
      description: 'Let\'s have an honest conversation about where you stand and how we can help. No obligation, no pressure — just clarity.',
    },
  },
  'commercial': {
    title: 'Commercial',
    pageTitle: 'Business Insurance | Commercial Insurance Quote | Geneva Insurance Group',
    metaDescription: 'Commercial insurance from 25+ carriers. General liability, BOP, workers comp, commercial auto, and professional liability for contractors, restaurants, and small businesses.',
    hero: {
      heading: 'Business insurance built for how you operate',
      description: 'Your business faces risks that are unique to your industry, your size, and your growth plans. We build commercial coverage programs that protect what you have built and support where you are headed.',
      image: images.commercial,
    },
    coverages: [
      { title: 'General Liability', description: 'Protection against third-party bodily injury, property damage, and advertising injury claims. The foundation of any commercial insurance program.' },
      { title: 'Business Owners Policy', description: 'A bundled package combining general liability and commercial property coverage — often with broader terms and better pricing than purchasing each separately.' },
      { title: 'Workers\' Compensation', description: 'Required in most states for businesses with employees. Covers medical expenses, lost wages, and rehabilitation for work-related injuries and illnesses.' },
      { title: 'Professional Liability', description: 'Errors and omissions coverage for service-based businesses. Protects against claims of negligence, mistakes, or failure to deliver promised services.' },
      { title: 'Commercial Auto', description: 'Coverage for vehicles used in business operations — from single company cars to full fleets. Includes liability, physical damage, and hired/non-owned auto.' },
      { title: 'Cyber & Inland Marine', description: 'Cyber liability for data breaches and digital threats. Inland marine for tools, equipment, and property in transit that standard policies do not cover.' },
    ],
    whyGeneva: [
      { title: 'Industry Expertise', description: 'We understand the specific risks facing contractors, restaurants, professional services, retail, and other industries. Your coverage program is built around how your business actually operates.' },
      { title: 'Certificate Management', description: 'Need certificates of insurance for contracts, leases, or clients? We handle COI requests quickly and accurately — usually same-day — so your operations are never held up.' },
      { title: 'Growth-Ready Coverage', description: 'As your business grows — new employees, new locations, new services — your coverage needs to grow with it. We build programs that scale and review them regularly to keep pace.' },
      { title: 'Claims Support', description: 'A commercial claim can disrupt your entire operation. We manage the process from first notice through resolution, advocating for fair and timely outcomes so you can focus on running your business.' },
    ],
    faqs: [
      { q: 'What insurance does my small business need?', a: 'At minimum, most businesses need general liability and, if you have employees, workers\' compensation. Beyond that, your specific needs depend on your industry, contracts, property, and risk exposure.' },
      { q: 'What is the difference between a BOP and standalone policies?', a: 'A Business Owners Policy bundles general liability and commercial property into one package, often at a lower cost than purchasing them separately. For many small to mid-size businesses, a BOP is the most cost-effective starting point.' },
      { q: 'How quickly can you provide a certificate of insurance?', a: 'Usually same-day, often within hours. We understand that COIs are frequently needed to close contracts or start work, and we prioritize these requests.' },
    ],
    cta: {
      heading: 'Ready to protect your business?',
      description: 'Let us build a commercial insurance program that matches the way you operate. No cookie-cutter policies — just coverage that fits.',
    },
  },
  'life-health': {
    title: 'Life & Health',
    pageTitle: 'Life Insurance Quote | Term & Whole Life Coverage | Geneva Insurance Group',
    metaDescription: 'Term life, whole life, health, dental, and vision insurance from an independent agency. Estate planning, trust-owned life insurance, and needs-based coverage analysis.',
    hero: {
      heading: 'Protect the people who depend on you',
      description: 'Life and health insurance are not just policies — they are promises to the people you love. We help you build protection that ensures your family is taken care of no matter what happens.',
      image: images.lifeHealth,
    },
    coverages: [
      { title: 'Term Life', description: 'Affordable, straightforward protection for a specific period — 10, 20, or 30 years. Ideal for covering a mortgage, income replacement, or your children\'s education years.' },
      { title: 'Whole Life', description: 'Permanent protection with a guaranteed death benefit and cash value accumulation. A foundational tool for estate planning and long-term financial strategy.' },
      { title: 'Universal Life', description: 'Flexible permanent coverage with adjustable premiums and death benefits. Ideal for those who want lifelong protection with the ability to adapt as circumstances change.' },
      { title: 'Health Insurance', description: 'Individual and family health plans from top carriers, including ACA-compliant options. We help you navigate deductibles, networks, and out-of-pocket limits to find the best fit.' },
      { title: 'Dental & Vision', description: 'Standalone dental and vision plans that keep preventive care affordable and cover the procedures and services your family actually uses.' },
      { title: 'Disability & Supplemental', description: 'Income protection if illness or injury prevents you from working. Short-term, long-term, and supplemental options to fill gaps your employer plan may leave.' },
    ],
    whyGeneva: [
      { title: 'Needs-Based Analysis', description: 'We do not guess at coverage amounts. We walk through your income, debts, future obligations, and goals to calculate exactly how much coverage your family needs — and for how long.' },
      { title: 'Policy Structuring', description: 'Sometimes the answer is not one policy — it is a layered approach combining term and permanent coverage to maximize protection while managing cost.' },
      { title: 'Trust & Estate Integration', description: 'For clients with estate planning needs, we coordinate with your attorney to ensure policies are properly structured — including trust ownership, beneficiary designations, and ILIT considerations.' },
      { title: 'Ongoing Review', description: 'Life changes — marriages, children, home purchases, career shifts. We proactively review your coverage as your life evolves to make sure your protection keeps pace.' },
    ],
    faqs: [
      { q: 'How much life insurance do I need?', a: 'A common starting point is 10-15x your annual income, but the real answer depends on your debts, dependents, future obligations like college funding, and your spouse\'s earning capacity. We run a detailed needs analysis so your number is based on your actual life.' },
      { q: 'Should I get term or whole life?', a: 'It depends on your goals. Term is the most affordable way to cover temporary needs like a mortgage or raising children. Whole life provides permanent protection and cash value accumulation. Many clients benefit from a combination of both.' },
      { q: 'Can I get life insurance if I have health issues?', a: 'In most cases, yes. Different carriers underwrite differently — a condition that gets you declined at one company may be standard-rated at another. We know which carriers are most favorable for specific health situations.' },
    ],
    cta: {
      heading: 'Ready to protect your family\'s future?',
      description: 'Let us help you build life and health coverage that gives you real peace of mind. No obligation — just an honest conversation.',
    },
  },
  'specialty': {
    title: 'Specialty',
    pageTitle: 'Specialty Insurance | High-Value Home & Collectibles | Geneva Insurance Group',
    metaDescription: 'Specialty insurance for high-value homes, trust-owned policies, collectibles, classic cars, and unique assets. Expert coverage from an independent agency with specialty market access.',
    hero: {
      heading: 'For the risks that standard policies were not built for',
      description: 'Some clients have protection needs that go beyond conventional coverage. High-value homes, trust-owned policies, collectibles, and unique assets require specialized insurance solutions — and that is exactly where we excel.',
      image: images.specialty,
    },
    coverages: [
      { title: 'High-Value Homes', description: 'Specialized programs for homes valued at $750K and above. Guaranteed replacement cost, extended coverage for custom features, and concierge-level claims service.' },
      { title: 'Trust-Owned Policies', description: 'Life insurance structured within irrevocable trusts for estate tax efficiency. We coordinate with your estate planning attorney to ensure proper ownership and beneficiary designations.' },
      { title: 'Collectibles & Valuables', description: 'Fine art, jewelry, wine collections, antiques, and other high-value items individually scheduled at agreed value — so you are never underinsured on irreplaceable possessions.' },
      { title: 'Excess & Surplus Lines', description: 'Coverage for risks that standard carriers will not write — unique properties, unusual liability exposures, or businesses with complex risk profiles that need creative solutions.' },
      { title: 'Classic & Exotic Vehicles', description: 'Agreed-value policies for collector cars, exotics, and vintage vehicles. Standard auto policies dramatically undervalue these — specialty carriers ensure proper protection.' },
      { title: 'Event & Short-Term', description: 'Special event liability, short-term rental coverage, and other temporary insurance needs that require flexible, purpose-built solutions.' },
    ],
    whyGeneva: [
      { title: 'Market Access', description: 'We have relationships with specialty carriers and surplus lines markets that most agencies do not access. This means we can place coverage for risks that others cannot.' },
      { title: 'Estate Planning Integration', description: 'For clients with trusts, we understand the intersection of insurance and estate planning. We work alongside your attorney and financial advisor to ensure policies are structured correctly.' },
      { title: 'Valuation Expertise', description: 'High-value items and properties need accurate appraisals to ensure proper coverage. We help coordinate valuations and make sure your scheduled items reflect current replacement costs.' },
      { title: 'White-Glove Claims', description: 'Specialty carriers offer a different level of claims experience — from dedicated adjusters to preferred repair networks. We match you with carriers whose service matches the value of what is being protected.' },
    ],
    faqs: [
      { q: 'When does a home qualify for a high-value program?', a: 'Most high-value home programs start at $750K in replacement cost, with some carriers beginning at $1M. These programs offer broader coverage, higher limits, and superior claims service compared to standard homeowners policies.' },
      { q: 'How does trust-owned life insurance work?', a: 'An Irrevocable Life Insurance Trust (ILIT) owns the policy, keeping the death benefit out of your taxable estate. We help coordinate the insurance side while your attorney handles the trust structure.' },
      { q: 'Do I need a separate policy for my jewelry and art?', a: 'If your items exceed your homeowners policy sub-limits (typically $1,500-$2,500 for jewelry), then yes — scheduling them individually ensures they are covered for their full appraised value with no deductible.' },
    ],
    cta: {
      heading: 'Have a unique insurance need?',
      description: 'If your situation does not fit neatly into a standard policy, that is exactly where we do our best work. Let us find the right solution.',
    },
  },
  'umbrella': {
    title: 'Umbrella',
    pageTitle: 'Umbrella Insurance | Excess Liability Coverage | Geneva Insurance Group',
    metaDescription: 'Umbrella insurance and excess liability coverage for high-net-worth individuals and families. Protect your assets with affordable umbrella policies starting from $200/year.',
    hero: {
      heading: 'The safety net your other policies can\'t provide',
      description: 'An umbrella policy extends your liability protection beyond the limits of your home, auto, and other underlying policies — providing a crucial extra layer of defense for your assets and future earnings.',
      image: images.umbrella,
    },
    coverages: [
      { title: 'Excess Liability', description: 'When a claim exceeds your auto or home liability limits, your umbrella policy pays the difference — up to $1M, $2M, $5M or more depending on your needs.' },
      { title: 'Broader Coverage', description: 'Umbrella policies often cover claims that your underlying policies exclude — like certain defamation, libel, or false arrest claims that could otherwise come straight out of your pocket.' },
      { title: 'Legal Defense', description: 'Umbrella policies typically cover legal defense costs above and beyond the policy limit — meaning your full coverage amount goes toward the settlement, not attorney fees.' },
      { title: 'Homeowners', description: 'A guest injury on your property, a dog bite, a trampoline accident — liability claims against homeowners can easily exceed standard policy limits. An umbrella closes that gap.' },
      { title: 'Drivers & Families', description: 'A serious auto accident involving injuries to multiple people can generate claims of $500K or more. If your auto liability limit is $300K, you are personally responsible for the rest — unless you have an umbrella.' },
      { title: 'Property Owners & Landlords', description: 'Rental properties create additional liability exposure. An umbrella extends protection across all your properties and underlying policies for comprehensive coverage.' },
    ],
    whyGeneva: [
      { title: 'Cost-Effective Protection', description: 'Umbrella insurance is surprisingly affordable — typically $200-$400 per year for $1 million in coverage. It is one of the highest-value policies you can own.' },
      { title: 'Coordinated Coverage', description: 'We make sure your umbrella works seamlessly with your underlying auto, home, and other policies — no gaps, no overlaps, no surprises at claim time.' },
      { title: 'Asset Protection', description: 'The more you have, the more you have to lose. Umbrella coverage is one of the most cost-effective ways to protect accumulated wealth and future earnings.' },
      { title: 'Personal Guidance', description: 'We help you determine the right amount of umbrella coverage based on your total net worth, including home equity, savings, investments, and future earning potential.' },
    ],
    faqs: [
      { q: 'How much does umbrella insurance cost?', a: 'Umbrella insurance is surprisingly affordable — typically $200-$400 per year for $1 million in coverage. Additional millions are usually $75-$150 each. It is one of the highest-value policies you can own relative to its cost.' },
      { q: 'Do I need to increase my underlying limits first?', a: 'Usually, yes. Most umbrella carriers require minimum underlying limits on your auto and home policies — typically $300K/$300K on auto and $300K liability on your homeowners. We coordinate everything so your policies work together seamlessly.' },
      { q: 'How much umbrella coverage should I carry?', a: 'A good starting point is coverage equal to your total net worth — including home equity, savings, investments, and future earning potential. For many families, $1-2 million is appropriate.' },
    ],
    cta: {
      heading: 'Ready to add an umbrella to your coverage?',
      description: 'It is one of the smartest and most affordable moves you can make. Let us show you how it fits into your overall protection strategy.',
    },
  },
};
