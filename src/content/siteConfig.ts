export const siteConfig = {
  companyName: "The Fix Construction Services",
  category: "Contractor / General Construction",
  phone: "(760) 977-3018",
  email: "info@thefixrc.com",
  address: {
    street: "257 N Balsam St",
    city: "Ridgecrest",
    state: "CA",
    country: "US",
  },
  websiteUrl: "http://thefixrc.com/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Fix%20Construction%20Services&query_place_id=ChIJYViyKJttwYAR1jweH5_yKbM",
  ratingValue: 4.7,
  reviewCount: 30,
  serviceArea: "Ridgecrest, CA and nearby areas",
  primaryColor: "#0ab7e4",
  secondaryColor: "#fb6310",
  hero: {
    headline: "Building the future. Restoring the past.",
    subheadline:
      "Trusted contractor in Ridgecrest, CA for quality construction, remodels, and repairs — backed by 4.7⭐ from 30 local reviews.",
    primaryCta: "Request a Quote",
    secondaryCta: "Call (760) 977-3018",
  },
  services: [
    "Home Remodeling",
    "Kitchen & Bath Updates",
    "Repairs & Improvements",
    "Drywall & Paint",
    "Flooring & Trim",
    "General Contracting",
  ],
  serviceDetails: [
    { title: "Home Remodeling", desc: "Transform living spaces with clean craftsmanship, reliable timelines, and organized project management." },
    { title: "Kitchen & Bath Updates", desc: "Upgrade cabinets, fixtures, and finishes for refreshed kitchens and bathrooms built to last." },
    { title: "Repairs & Improvements", desc: "Fix leaks, adjust doors, swap fixtures, and tackle punch lists with tidy, dependable work." },
    { title: "Drywall & Paint", desc: "Smooth drywall repairs, texture matching, and fresh paint for crisp, professional finishes." },
    { title: "Flooring & Trim", desc: "Install and repair flooring, baseboards, and trim with attention to detail and clean lines." },
    { title: "General Contracting", desc: "Coordinated construction support from planning to punch-out for remodels and repairs." },
  ],
  reviews: [
    {
      name: "Laura M.",
      text: "The Fix handled our remodel with clear communication and spotless work. Every step was on time and done right.",
      stars: 5,
    },
    {
      name: "Derrick S.",
      text: "Needed repairs before listing our home. They organized everything, kept us updated, and the place looks great.",
      stars: 5,
    },
    {
      name: "Angela R.",
      text: "From drywall fixes to trim, the team was professional, tidy, and respectful of our schedule. Highly recommend.",
      stars: 4,
    },
  ],
  images: {
    logo: "/logo.png",
    hero: "/hero.jpg",
    gallery: ["/Homeremodel1.jpg", "/Kitchen1%20.jpg", "/Repairs1.jpg"],
  },
  links: {
    googleReviews: "https://www.google.com/maps/search/?api=1&query=The%20Fix%20Construction%20Services&query_place_id=ChIJYViyKJttwYAR1jweH5_yKbM",
    maps: "https://www.google.com/maps/search/?api=1&query=The%20Fix%20Construction%20Services&query_place_id=ChIJYViyKJttwYAR1jweH5_yKbM",
    facebook: "#",
    website: "http://thefixrc.com/",
  },
};

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const phoneTel = phoneDigits
  ? `+${phoneDigits.startsWith("1") && phoneDigits.length === 11 ? phoneDigits : `1${phoneDigits}`}`
  : "";

const baseCity = `${siteConfig.address.city}, ${siteConfig.address.state}`;
const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state}, ${siteConfig.address.country}`;

export const site = {
  businessName: siteConfig.companyName,
  heroHeadline: siteConfig.hero.headline,
  heroSubheadline: siteConfig.hero.subheadline,
  tagline: siteConfig.hero.subheadline,
  primaryCtaLabel: siteConfig.hero.primaryCta,
  secondaryCtaLabel: siteConfig.hero.secondaryCta,
  phoneDisplay: siteConfig.phone,
  phoneTel,
  email: siteConfig.email,
  accreditationLabel: "Licensed & Insured",
  category: siteConfig.category,
  baseCity,
  fullAddress,
  address: siteConfig.address,
  serviceAreas: [baseCity, "Nearby areas"],
  hours: "Responsive scheduling",
  services: siteConfig.serviceDetails,
  about: {
    title: "Get to Know Us",
    headline:
      "The Fix Construction Services is a Ridgecrest, CA contractor focused on clean workmanship, clear communication, and results that last.",
    body: [
      "Whether you’re planning a remodel, upgrades, or repairs, we make the process simple.",
      "We show up on time, do it right, and keep you informed from start to finish.",
      `Rated ${siteConfig.ratingValue} stars by local homeowners.`,
    ],
  },
  process: [
    { title: "Request a Quote", desc: "Tell us about your project and your timeline in Ridgecrest, CA." },
    { title: "Plan & Schedule", desc: "We align on scope, budget, and start date with clear expectations." },
    { title: "Build & Deliver", desc: "Our crew executes cleanly, keeps you updated, and ensures quality results." },
  ],
  trust: [
    `Serving ${baseCity}`,
    "Licensed and insured",
    "Clear communication and tidy job sites",
    "Quality-focused construction and repairs",
  ],
  contact: {
    headline: "Need a construction partner you can trust?",
    sub: "Request a quote or call — we’ll respond quickly and outline the next steps.",
    button: siteConfig.hero.primaryCta,
  },
  seo: {
    siteTitle: "The Fix Construction Services | Contractor in Ridgecrest, CA",
    metaDescription:
      "The Fix Construction Services is a trusted Ridgecrest, CA contractor for remodeling, repairs, and general construction. Call (760) 977-3018 for a quote.",
    keywords: [
      "contractor Ridgecrest CA",
      "general contractor Ridgecrest",
      "home remodeling Ridgecrest",
      "construction Ridgecrest",
      "repairs Ridgecrest contractor",
      "Ridgecrest CA builder",
    ],
  },
  links: siteConfig.links,
  images: siteConfig.images,
  primaryColor: siteConfig.primaryColor,
  secondaryColor: siteConfig.secondaryColor,
  city: baseCity,
  reviews: siteConfig.reviews,
  ratingValue: siteConfig.ratingValue,
  reviewCount: siteConfig.reviewCount,
  websiteUrl: siteConfig.websiteUrl,
  mapsUrl: siteConfig.mapsUrl,
  serviceArea: siteConfig.serviceArea,
};

export default site;
