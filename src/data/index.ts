import type { Service, Stat, Testimonial, Industry, NavItem, FAQItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Security Services", href: "#services" },
      { label: "Housekeeping", href: "#services" },
      { label: "Technical / MEP", href: "#services" },
      { label: "Pest Control", href: "#services" },
      { label: "Gardening", href: "#services" },
      { label: "Swimming Pool", href: "#services" },
    ],
  },
  { label: "Industries", href: "#industries" },
  { label: "Our Strength", href: "#strength" },
  { label: "Clients", href: "#clients" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "security",
    title: "Security Services",
    description:
      "Armed & unarmed guards, CCTV surveillance, access control, fire & safety training, event security, escort services and help desk management.",
    icon: "Shield",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description:
      "Professional cleaning, washroom management, floor care, cafeteria management, janitorial services and hospitality management.",
    icon: "Sparkles",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    id: "mep",
    title: "Technical / MEP",
    description:
      "Mechanical, electrical & plumbing services, HVAC maintenance, STP & WTP operations, planned preventive maintenance and energy audits.",
    icon: "Wrench",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: "pest",
    title: "Pest Control",
    description:
      "Comprehensive pest management, rodent control, fumigation, herbal treatments and periodic preventive pest control programs.",
    icon: "Bug",
    color: "from-red-500 to-red-700",
  },
  {
    id: "gardening",
    title: "Gardening & Landscaping",
    description:
      "Landscape design and maintenance, horticulture services, irrigation management, seasonal planting and green space upkeep.",
    icon: "Leaf",
    color: "from-green-500 to-green-700",
  },
  {
    id: "pool",
    title: "Swimming Pool Maintenance",
    description:
      "Water quality management, chemical dosing, filtration system maintenance, pool cleaning and safety compliance.",
    icon: "Waves",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    id: "helpdesk",
    title: "Help Desk Management",
    description:
      "24/7 help desk operations, complaint management, visitor management, material movement tracking and command control centre.",
    icon: "Headphones",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "clubhouse",
    title: "Club House Management",
    description:
      "Full clubhouse facility management, event coordination, amenity upkeep, member services and recreational space management.",
    icon: "Building2",
    color: "from-pink-500 to-pink-700",
  },
  {
    id: "facade",
    title: "Facade Cleaning",
    description:
      "High-rise building facade cleaning, rope access services, glass cleaning, surface treatment and exterior restoration.",
    icon: "Building",
    color: "from-slate-500 to-slate-700",
  },
  {
    id: "tenant",
    title: "Tenant Management",
    description:
      "Tenant onboarding, lease tracking, move-in/out coordination, tenant communication and grievance redressal.",
    icon: "Users",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    id: "payroll",
    title: "Payroll Management",
    description:
      "End-to-end payroll processing, statutory compliance, PF/ESI management, salary disbursement and audit support.",
    icon: "CreditCard",
    color: "from-teal-500 to-teal-700",
  },
  {
    id: "parking",
    title: "Parking Management",
    description:
      "Smart parking solutions, traffic management, valet services, EV charging coordination and parking revenue optimization.",
    icon: "Car",
    color: "from-amber-500 to-amber-700",
  },
];

export const STATS: Stat[] = [
  {
    value: 20,
    suffix: "M+",
    label: "Sq. Ft. Managed",
    description: "Across diverse property portfolios",
  },
  {
    value: 15000,
    suffix: "+",
    label: "Professionals",
    description: "Skilled and trained workforce",
  },
  {
    value: 100,
    suffix: "+",
    label: "Valued Clients",
    description: "Trusted across India",
  },
  {
    value: 23,
    suffix: "+",
    label: "Years of Excellence",
    description: "Since 2001",
  },
  {
    value: 5,
    suffix: "+",
    label: "States Covered",
    description: "PAN India presence",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Retention",
    description: "Consistent service quality",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "it",
    title: "Commercial & IT Parks",
    description:
      "Serving 25+ technology parks and commercial offices including T Hub, Tech Mahindra, Sattva Knowledge Park and L&T Metro Stations.",
    icon: "MonitorSmartphone",
    clients: 25,
  },
  {
    id: "residential",
    title: "Residential Communities",
    description:
      "Managing 28+ premium gated communities including Rajapushpa, Mahindra Ashvitha, Lanco Hills and L&T Serene County.",
    icon: "Home",
    clients: 28,
  },
  {
    id: "malls",
    title: "Malls & Retail",
    description:
      "Operating in 13+ premier destinations including Nexus Mall, Phoenix Market City, Lulu Mall and Marina Mall.",
    icon: "ShoppingBag",
    clients: 13,
  },
  {
    id: "healthcare",
    title: "Hospitals & Clinics",
    description:
      "Trusted by healthcare facilities including Rainbow Hospitals, Oliva Clinics and Star Health for hygienic environments.",
    icon: "Heart",
    clients: 4,
  },
  {
    id: "education",
    title: "Educational Institutions",
    description:
      "Supporting premier institutions like T Hub, NICMAR, Nalsar, KL University and Delhi Public School.",
    icon: "GraduationCap",
    clients: 11,
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Pharma",
    description:
      "Serving MSN Pharma, Astra Microwave, Renew Power and 9 other industrial and pharmaceutical facilities.",
    icon: "Factory",
    clients: 11,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Nair",
    role: "Facility Manager",
    company: "Sohini Tech Park",
    content:
      "Amaze PMS has transformed the way we manage our 1.2 million sq ft campus. Their team's professionalism, 24/7 responsiveness, and attention to detail has made our facility one of the best-rated workplaces in Hyderabad.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Property Director",
    company: "Rajapushpa Imperia",
    content:
      "From housekeeping to security, every service is executed flawlessly. The dedicated operations team and their technology-driven approach have significantly elevated our resident experience.",
    rating: 5,
  },
  {
    id: "3",
    name: "Arun Mehta",
    role: "General Manager",
    company: "Phoenix Market City",
    content:
      "Managing a high-footfall mall requires absolute precision. Amaze PMS delivers consistently across all touchpoints — cleaning, security, pest control and technical services. Truly a one-stop partner.",
    rating: 5,
  },
  {
    id: "4",
    name: "Dr. Kavitha Reddy",
    role: "Operations Head",
    company: "Rainbow Hospitals",
    content:
      "In healthcare, hygiene is paramount. Amaze PMS understands this perfectly. Their trained housekeeping staff, compliance audits and quick escalation response give us total confidence.",
    rating: 5,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What types of properties does Amaze PMS manage?",
    answer:
      "We manage a diverse portfolio including commercial & IT parks, gated residential communities, shopping malls, hospitals, educational institutions, warehouses, and manufacturing facilities across PAN India.",
  },
  {
    question: "Are all services delivered in-house?",
    answer:
      "Yes. All our services — security, housekeeping, MEP, pest control, gardening, pool maintenance, and more — are delivered by our own trained professionals. This ensures quality control, faster response, and accountability at every level.",
  },
  {
    question: "How quickly can Amaze PMS onboard a new property?",
    answer:
      "Our proven 4-stage onboarding process covers site survey, resource planning, training, parallel deployment, and full handover. Typical onboarding is completed within 2–4 weeks depending on property size and service scope.",
  },
  {
    question: "How does Amaze PMS ensure quality and compliance?",
    answer:
      "We conduct MMR, QBR, bi-annual, and annual audits covering security, engineering, soft services, EHS, safety, risk, inventory, process, AMC tracking, and compliance. Each site also has an Internal Quality Auditor.",
  },
  {
    question: "Is Amaze PMS available outside Hyderabad?",
    answer:
      "Yes. We operate PAN India with a strong presence in Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, and Odisha, with plans for continued expansion.",
  },
  {
    question: "What makes Amaze PMS different from competitors?",
    answer:
      "We combine 23+ years of expertise, a 15,000+ trained workforce, all-in-house services, NSDC-affiliated training, rigorous background verification, dedicated IQA per site, and a staff welfare program unmatched in the industry.",
  },
];

export const CLIENTS_LIST = {
  commercial: [
    "Sohini Tech Park",
    "BSR Tech Park",
    "Divyasree NSL (Orion)",
    "Kapil Towers",
    "Astra Towers",
    "Lanco IT",
    "Rajapushpa Summit",
    "T Hub",
    "Tech Mahindra",
    "Cyber Towers",
    "Sattva Knowledge Park",
    "L&T Metro Stations",
  ],
  residential: [
    "Golf Edge Residences",
    "Aparna Silver Oak",
    "Mahindra Ashvitha",
    "Lanco Hills",
    "Rajapushpa Imperia",
    "The Botanika",
    "L&T Serene County",
    "Rajapushpa Regalia",
    "My Home Avatar",
    "Hill County",
    "Prajay Megapolis",
    "Aditya Empress",
  ],
  malls: [
    "Nexus Mall",
    "Marina Mall",
    "Phoenix Market City",
    "Lulu Mall",
    "GMS Mall",
    "L&T Mall Hitech City",
    "DSL Mall",
    "Max Stores",
    "Life Style",
  ],
  healthcare: ["Rainbow Hospitals", "Oliva Clinics", "Star Health"],
  education: [
    "T Hub",
    "NICMAR",
    "Nalsar",
    "KL University",
    "Delhi Public School",
    "EFL University",
    "Mahindra & Mahindra University",
    "Aga Khan Academy",
  ],
  pharma: ["MSN Pharma", "Astra Microwave", "Renew Power", "ITC", "BMM Ispat"],
};

export const STRENGTH_POINTS = [
  {
    title: "NSDC Affiliated Training",
    description:
      "Affiliated with National Skill Development Corporation for certified, standardized workforce training.",
    icon: "Award",
  },
  {
    title: "Background Verification",
    description:
      "Antecedent verification conducted by an in-house team supervised by a retired police officer.",
    icon: "ShieldCheck",
  },
  {
    title: "All Services In-House",
    description:
      "Every service is delivered by our own professionals — no subcontracting, full accountability.",
    icon: "CheckCircle",
  },
  {
    title: "Emergency Backup Staff",
    description:
      "Availability of backup staff for uninterrupted operations during emergencies or absenteeism.",
    icon: "Zap",
  },
  {
    title: "Regular Internal Audits",
    description:
      "Quarterly, bi-annual and annual audits across 12 categories for continuous quality improvement.",
    icon: "ClipboardCheck",
  },
  {
    title: "Government Liaison",
    description:
      "Experienced team for liaison with government agencies, statutory compliance and regulatory requirements.",
    icon: "Landmark",
  },
  {
    title: "Energy & Cost Optimization",
    description:
      "Power-saving methods and manpower optimization strategies to reduce operational costs.",
    icon: "TrendingDown",
  },
  {
    title: "Staff Welfare Programs",
    description:
      "Comprehensive welfare including insurance, compensation, rewards and festival recognition.",
    icon: "Heart",
  },
];
