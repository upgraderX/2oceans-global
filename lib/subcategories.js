// Subcategory pages. Industry slug -> list of subcategories.
// Add a new entry here and its page, nav link, and industry card appear automatically.

export const SUBCATEGORIES = {
  "sports-goods": [
    {
      slug: "soccer-balls",
      name: "Soccer Balls",
      blurb:
        "Hand-stitched, machine-stitched, and thermo-bonded footballs — match grade to promotional.",
      items: ["Match balls (FIFA quality level)", "Training balls", "Futsal balls", "Promotional & mini balls", "Beach soccer balls"],
      spec: "Sizes 1–5 · PU / TPU / PVC covers · 32-panel and custom panel counts · 2–4 ply lining · custom printing",
    },
    {
      slug: "baseball",
      name: "Baseball",
      blurb:
        "Leather baseball gloves, mitts, and balls — built on Sialkot's leather and hand-stitching expertise.",
      items: ["Fielding gloves", "Catcher's mitts", "Batting gloves", "Baseballs & softballs", "Equipment bags"],
      spec: "Full-grain cowhide, steerhide, and synthetic options · custom web patterns · adult and youth sizing · lacing and relacing · private label branding",
    },
    {
      slug: "boxing-mma",
      name: "Boxing & MMA",
      blurb:
        "Gloves, bags, and protective equipment for boxing, MMA, and combat training.",
      items: ["Boxing gloves (training, sparring, competition)", "MMA gloves", "Punching & heavy bags", "Focus mitts & coaching pads", "Head guards & shin guards", "Hand wraps"],
      spec: "Genuine leather and PU · multi-layer foam padding · lace-up and hook-and-loop closures · 8–16 oz · custom colorways",
    },
    {
      slug: "martial-arts",
      name: "Martial Arts",
      blurb:
        "Uniforms, belts, and protective gear for karate, judo, taekwondo, and BJJ.",
      items: ["Karate gi", "Judo gi", "Taekwondo dobok", "BJJ gi", "Belts (all ranks)", "Protective gear"],
      spec: "Single, double, and pearl weave cotton · 350–750 GSM · pre-shrunk options · custom embroidery and patches",
    },
    {
      slug: "cricket",
      name: "Cricket",
      blurb: "Bats, balls, protective gear, and kit for club and professional play.",
      items: ["Cricket bats (English & Kashmir willow)", "Leather & training balls", "Batting pads & gloves", "Helmets & guards", "Kit bags"],
      spec: "Grade 1–5 willow · custom stickers and branding · senior, youth, and junior sizing",
    },
    {
      slug: "fitness-training",
      name: "Fitness & Training",
      blurb: "Gym accessories and training equipment for retail and club supply.",
      items: ["Weightlifting belts", "Resistance bands", "Jump ropes", "Agility ladders & cones", "Lifting straps & wraps"],
      spec: "Leather and nylon construction · latex and fabric bands · custom sizing and branding",
    },
  ],
  gloves: [
    {
      slug: "goalkeeper-gloves",
      name: "Goalkeeper Gloves",
      blurb: "Professional and training goalkeeper gloves with German latex palms.",
      items: ["Match / professional", "Training", "Junior", "Finger-save models"],
      spec: "3–4mm German latex palms · roll finger, flat, negative, and hybrid cuts · custom colorways and branding",
    },
    {
      slug: "sports-gloves",
      name: "Sports Gloves",
      blurb: "Cycling, weightlifting, golf, cricket, and ski gloves.",
      items: ["Cycling gloves", "Weightlifting & gym gloves", "Golf gloves", "Cricket batting gloves", "Ski gloves"],
      spec: "Cabretta leather, synthetic suede, lycra · padded palms · touchscreen compatible options",
    },
    {
      slug: "motorcycle-gloves",
      name: "Motorcycle Gloves",
      blurb: "Racing, touring, cruiser, and off-road gloves built for protection.",
      items: ["Racing gloves", "Touring gloves", "Cruiser gloves", "Off-road / motocross"],
      spec: "Goatskin and cowhide · knuckle armour and TPU sliders · CE-certifiable constructions · perforated and waterproof options",
    },
    {
      slug: "industrial-safety-gloves",
      name: "Industrial & Safety Gloves",
      blurb: "Work, welding, mechanics, and cut-resistant gloves for industrial supply.",
      items: ["Leather work gloves", "Welding gloves", "Mechanics gloves", "Cut-resistant gloves", "Driver gloves"],
      spec: "Split and grain leather · Kevlar stitching · cut levels to spec · EN388-testable constructions",
    },
    {
      slug: "fashion-dress-gloves",
      name: "Fashion & Dress Gloves",
      blurb: "Leather dress and winter gloves for fashion and corporate gifting.",
      items: ["Leather dress gloves", "Winter lined gloves", "Touchscreen gloves", "Driving gloves"],
      spec: "Lambskin, deerskin, peccary · cashmere, wool, and silk linings · custom sizing runs",
    },
  ],
  leather: [
    {
      slug: "leather-jackets",
      name: "Leather Apparel",
      blurb: "Biker, bomber, and fashion jackets in full-grain and lambskin leather.",
      items: ["Biker jackets", "Bomber jackets", "Fashion & tailored jackets", "Vests", "Leather pants & coats"],
      spec: "Full-grain cowhide, lambskin, goatskin · vegetable and chrome tanning · YKK hardware · quilted and satin linings",
    },
    {
      slug: "small-leather-goods",
      name: "Small Leather Goods",
      blurb: "Wallets, belts, and everyday carry in premium leather.",
      items: ["Wallets & cardholders", "Belts", "Keychains", "Watch straps"],
      spec: "Full-grain and top-grain · edge painting and burnishing · debossing and foil stamping · custom hardware",
    },
    {
      slug: "leather-bags",
      name: "Leather Bags",
      blurb: "Duffles, briefcases, and backpacks built for retail programs.",
      items: ["Duffle & weekender bags", "Briefcases & laptop bags", "Backpacks", "Crossbody bags"],
      spec: "Full-grain and buffalo leather · canvas-leather combinations · YKK zippers · custom lining and branding",
    },
    {
      slug: "leather-accessories",
      name: "Leather Accessories",
      blurb: "Aprons, journal covers, and specialty leather goods.",
      items: ["Work & barber aprons", "Journal & notebook covers", "Tool rolls", "Corporate leather gifts"],
      spec: "Waxed and oiled leathers · brass and copper hardware · custom embossing",
    },
  ],
};

export function getSubcategories(industrySlug) {
  return SUBCATEGORIES[industrySlug] || [];
}

export function getSubcategory(industrySlug, subSlug) {
  return getSubcategories(industrySlug).find((s) => s.slug === subSlug);
}
