export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  image: string;
}

export const products: Product[] = [
  {
    slug: "hdpe-75mm-6mtr",
    name: "HDPE Pipe 75MM 6MTR",
    shortName: "HDPE 75MM 6MTR",
    category: "Pipes",
    description:
      "High-density polyethylene pipe designed for main water supply lines in drip and sprinkler irrigation systems. Built for long-lasting performance under high pressure and harsh agricultural conditions.",
    features: [
      "UV-stabilized for outdoor durability",
      "Smooth inner wall reduces friction loss",
      "Lightweight yet extremely strong",
      "Chemical and corrosion resistant",
      "Easy jointing with compression fittings",
      "IS 4984 compliant",
    ],
    specs: {
      Material: "HDPE (PE100)",
      "Outer Diameter": "75 mm",
      Length: "6 meters",
      "Pressure Rating": "6 kg/cm²",
      Color: "Black with blue strip",
      "Wall Thickness": "3.6 mm",
    },
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
  },
  {
    slug: "lateral-32mm",
    name: "Lateral Pipe 32MM",
    shortName: "LATERAL 32MM",
    category: "Pipes",
    description:
      "Premium quality 32mm lateral pipe for sub-main lines in drip irrigation. Ensures uniform water distribution across the entire field with minimal pressure loss.",
    features: [
      "Uniform wall thickness for consistent flow",
      "Flexible yet kink-resistant",
      "UV-treated for long field life",
      "Compatible with all standard fittings",
      "Suitable for buried and surface installation",
      "Food-grade material safe for crops",
    ],
    specs: {
      Material: "LLDPE",
      "Outer Diameter": "32 mm",
      Length: "100 meters (roll)",
      "Pressure Rating": "4 kg/cm²",
      Color: "Black",
      "Wall Thickness": "1.8 mm",
    },
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    slug: "mini-nozzle-half-inch",
    name: 'Mini Nozzle 1/2"',
    shortName: 'MINI NOZZLE 1/2"',
    category: "Sprinklers",
    description:
      "Compact mini sprinkler nozzle delivering fine mist spray for delicate crops and nursery applications. Provides uniform coverage with minimal water consumption.",
    features: [
      "360° uniform spray pattern",
      "Anti-clog design with large passages",
      "Low pressure operation (1.5 kg/cm²)",
      "Adjustable flow rate",
      "Easy snap-on installation",
      "Ideal for greenhouses and nurseries",
    ],
    specs: {
      "Connection Size": '1/2" male thread',
      "Flow Rate": "70-120 LPH",
      "Spray Radius": "3-5 meters",
      "Operating Pressure": "1.5-3.0 kg/cm²",
      Material: "Engineering Plastic",
      "Spray Type": "Full circle mist",
    },
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  },
  {
    slug: "mini-sprinkler-set",
    name: "Mini Sprinkler Complete Set",
    shortName: "MINI SPRINKLER SET",
    category: "Sprinklers",
    description:
      "Complete mini sprinkler assembly with stake, riser pipe, and nozzle. Ready-to-install solution for efficient micro-irrigation of orchards and row crops.",
    features: [
      "Complete plug-and-play assembly",
      "Durable ground stake included",
      "Height-adjustable riser pipe",
      "Multiple nozzle options available",
      "Wind-resistant low trajectory spray",
      "Covers 5-7 meter diameter area",
    ],
    specs: {
      Components: "Stake + Riser + Nozzle + Connector",
      "Flow Rate": "90-200 LPH",
      "Spray Diameter": "5-7 meters",
      "Riser Height": "30 cm",
      "Stake Length": "20 cm",
      "Operating Pressure": "1.5-2.5 kg/cm²",
    },
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80",
  },
  {
    slug: "drip-emitter-4lph",
    name: "Drip Emitter 4 LPH",
    shortName: "DRIP EMITTER 4LPH",
    category: "Drip",
    description:
      "Precision pressure-compensating drip emitter delivering consistent 4 liters per hour directly to the plant root zone. Ideal for orchards, vineyards, and vegetable crops.",
    features: [
      "Pressure-compensating technology",
      "Self-cleaning diaphragm mechanism",
      "Consistent 4 LPH output",
      "Works on slopes and long runs",
      "Anti-drain valve option",
      "Barb connection for easy inline install",
    ],
    specs: {
      "Flow Rate": "4 LPH (±5%)",
      "Operating Range": "0.5-4.0 kg/cm²",
      "Inlet Connection": "Barb for 12/16mm lateral",
      Material: "PP + Silicone diaphragm",
      "Filtration Requirement": "120 mesh",
      Color: "Black",
    },
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  },
  {
    slug: "inline-dripper-16mm",
    name: "Inline Dripper Lateral 16MM",
    shortName: "INLINE DRIPPER 16MM",
    category: "Drip",
    description:
      "Pre-installed inline drip lateral with factory-integrated emitters at uniform spacing. Perfect for row crops like sugarcane, cotton, and vegetables.",
    features: [
      "Factory-integrated emitters at fixed spacing",
      "Turbulent flow path for self-flushing",
      "Uniform water distribution along entire length",
      "Available in 30/40/50/60 cm emitter spacing",
      "Roll lengths up to 500 meters",
      "Subsurface installation capable",
    ],
    specs: {
      "Pipe Diameter": "16 mm",
      "Emitter Spacing": "30 / 40 / 50 / 60 cm",
      "Emitter Flow": "2 / 4 LPH options",
      "Roll Length": "500 meters",
      "Wall Thickness": "0.9 mm",
      "Operating Pressure": "1.0-2.0 kg/cm²",
    },
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  },
  {
    slug: "screen-filter-2inch",
    name: 'Screen Filter 2"',
    shortName: 'SCREEN FILTER 2"',
    category: "Filters",
    description:
      "Heavy-duty screen filtration unit for drip and sprinkler systems. Removes sand, debris, and organic matter to protect emitters and nozzles from clogging.",
    features: [
      "Stainless steel screen element (120 mesh)",
      "High flow capacity with low pressure drop",
      "Easy-open housing for quick cleaning",
      "Corrosion-resistant body",
      "BSP threaded connections",
      "Transparent bowl option for visual inspection",
    ],
    specs: {
      "Connection Size": '2" BSP (Male)',
      "Flow Rate": "Up to 25 m³/hr",
      "Filtration Grade": "120 mesh (130 micron)",
      "Screen Material": "SS 304",
      "Body Material": "Reinforced Nylon",
      "Max Pressure": "8 kg/cm²",
    },
    image: "https://images.unsplash.com/photo-1586771107445-b3e7eb5e1de4?w=800&q=80",
  },
  {
    slug: "disc-filter-3inch",
    name: 'Disc Filter 3"',
    shortName: 'DISC FILTER 3"',
    category: "Filters",
    description:
      "Advanced disc filtration technology for medium to large irrigation systems. Stacked grooved discs provide superior filtration for both organic and inorganic particles.",
    features: [
      "Grooved disc technology for 3D filtration",
      "Handles both organic and inorganic particles",
      "Color-coded discs for easy grade identification",
      "Compact design saves installation space",
      "Manual or automatic backflush options",
      "Ideal for fertigation systems",
    ],
    specs: {
      "Connection Size": '3" BSP (Male)',
      "Flow Rate": "Up to 50 m³/hr",
      "Filtration Grade": "120/200 mesh options",
      "Disc Material": "Polypropylene",
      "Body Material": "Glass-filled Nylon",
      "Max Pressure": "10 kg/cm²",
    },
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
  },
  {
    slug: "venturi-injector-1inch",
    name: 'Venturi Injector 1"',
    shortName: 'VENTURI INJECTOR 1"',
    category: "Fertigation",
    description:
      "Precision venturi-based fertilizer injector for fertigation systems. Uses differential pressure to inject liquid fertilizers directly into the irrigation line without external power.",
    features: [
      "No external power required",
      "Precise injection ratio control",
      "Works with all liquid fertilizers",
      "Chemical-resistant construction",
      "Easy flow rate adjustment",
      "Low maintenance design",
    ],
    specs: {
      "Connection Size": '1" BSP',
      "Suction Rate": "40-120 LPH",
      "Operating Pressure": "2-6 kg/cm²",
      "Pressure Differential": "30% minimum",
      Material: "PP / PVDF",
      "Max Temperature": "60°C",
    },
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
  },
  {
    slug: "compression-fitting-75mm",
    name: "Compression Fitting 75MM",
    shortName: "COMPRESSION FITTING 75MM",
    category: "Fittings",
    description:
      "Heavy-duty compression coupler for joining HDPE pipes without welding or special tools. Provides leak-proof connection that can be assembled and disassembled in the field.",
    features: [
      "Tool-free assembly and disassembly",
      "Leak-proof compression seal",
      "Reusable — no pipe damage on removal",
      "Available as coupler, elbow, tee, and reducer",
      "UV-resistant body material",
      "Conforms to ISO 14236",
    ],
    specs: {
      "Pipe Size": "75 mm OD",
      Material: "PP (Polypropylene)",
      "Seal Type": "EPDM O-ring",
      "Pressure Rating": "10 kg/cm²",
      "Temperature Range": "-20°C to +60°C",
      Types: "Coupler / Elbow / Tee / End Cap",
    },
    image: "https://images.unsplash.com/photo-1595351298020-038700609878?w=800&q=80",
  },
  {
    slug: "ball-valve-2inch",
    name: 'Ball Valve 2"',
    shortName: 'BALL VALVE 2"',
    category: "Valves",
    description:
      "Full-bore PP ball valve for on/off flow control in irrigation mainlines and sub-mains. Quarter-turn operation for quick and reliable shut-off.",
    features: [
      "Full bore for unrestricted flow",
      "Quarter-turn on/off operation",
      "Double O-ring stem seal",
      "Handle lock in open/closed position",
      "Chemical resistant for fertigation lines",
      "BSP threaded or compression end options",
    ],
    specs: {
      Size: '2" (50 mm)',
      "Port Type": "Full bore",
      Material: "PP body + PTFE seats",
      "Pressure Rating": "10 kg/cm²",
      "End Connection": "BSP Female Thread",
      "Temperature Range": "0-60°C",
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    slug: "pe-grommet-takeoff-16mm",
    name: "PE Grommet Take-off 16MM",
    shortName: "PE GROMMET TAKEOFF 16MM",
    category: "Fittings",
    description:
      "Push-fit grommet connector for branching 16mm lateral lines off the main HDPE pipe. Creates a clean, sealed take-off point without threads or adhesives.",
    features: [
      "Push-fit installation — no tools needed",
      "Self-sealing rubber grommet",
      "Works with all standard 16mm laterals",
      "Punch and insert installation method",
      "Leak-proof even under pressure fluctuations",
      "Available with or without valve",
    ],
    specs: {
      "Outlet Size": "16 mm barb",
      "Grommet Material": "EPDM rubber",
      "Body Material": "PP (Polypropylene)",
      "Hole Size Required": "14.5 mm",
      "Pressure Rating": "4 kg/cm²",
      Variants: "Plain / With valve",
    },
    image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=80",
  },
];

export const productCategories = [
  "All",
  "Pipes",
  "Drip",
  "Sprinklers",
  "Filters",
  "Fertigation",
  "Fittings",
  "Valves",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
