import {
  Award,
  Heart,
  Clock,
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Cake,
  Building,
  Utensils,
  Wine,
  Coffee,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const services = [
  {
    title: "Corporate Events",
    description:
      "Professional catering for meetings, conferences, and company celebrations.",
    icon: "🏢",
  },
  {
    title: "Weddings",
    description:
      "Make your special day memorable with our custom wedding catering packages.",
    icon: "💍",
  },
  {
    title: "Private Parties",
    description:
      "From birthdays to anniversaries, we cater all types of private celebrations.",
    icon: "🎉",
  },
  {
    title: "Holiday Events",
    description:
      "Seasonal menus and festive presentations for holiday gatherings.",
    icon: "🎄",
  },
];
export const testimonials = [
  {
    name: "Sarah & Michael Johnson",
    event: "Wedding Reception",
    rating: 5,
    text: "Elegant Catering made our wedding day absolutely perfect! The food was exceptional, the presentation was stunning, and the service was flawless. Our guests are still talking about how amazing everything was. We couldn't have asked for a better catering experience.",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "David Chen",
    event: "Corporate Annual Dinner",
    rating: 5,
    text: "We've worked with Whisked Root for three consecutive years for our company events. Their professionalism, attention to detail, and consistently outstanding food quality make them our go-to choice. They understand our needs and always exceed expectations.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Maria Rodriguez",
    event: "50th Anniversary Celebration",
    rating: 5,
    text: "The team at Whisked Root helped us create the perfect celebration for my parents' golden anniversary. From the menu planning to the final cleanup, everything was handled with such care and expertise. The food was restaurant-quality, and the service was impeccable.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Robert Thompson",
    event: "Charity Gala",
    rating: 5,
    text: "Whisked Root catered our annual charity gala for 200 guests, and they absolutely nailed it. The variety of dietary options, the beautiful presentation, and the seamless service allowed us to focus on our cause while knowing our guests were being taken care of perfectly.",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];

export const teamRoles = [
  "Executive Chef",
  "Event Director",
  "Pastry Chef",
  "Operations Manager",
];
export const blogPosts = [
  {
    title: "Corporate Event Catering: Beyond the Basics",
    date: "May 22, 2023",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    summary:
      "Elevate your next corporate event with our premium catering services.",
    content:
      "From breakfast meetings to gala dinners, we provide tailored catering solutions that impress clients and motivate employees. Our corporate packages include customizable menus, professional service staff, and seamless logistics management.",
  },
  {
    title: "Farm-to-Table: Our Commitment to Sustainability",
    date: "April 10, 2023",
    image:
      "https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    summary:
      "Learn about our partnerships with local farmers and our sustainable practices.",
    content:
      "We believe in responsible sourcing and minimal waste. Our relationships with local producers ensure the freshest ingredients while supporting the community. We've implemented eco-friendly practices throughout our operations, from composting to using biodegradable packaging.",
  },
  {
    title: "The Art of Food Presentation",
    date: "March 5, 2023",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    summary:
      "How we create visually stunning dishes that taste as good as they look.",
    content:
      "Our culinary team approaches each plate as a canvas. Using techniques from molecular gastronomy to traditional garnishing, we ensure that every dish is Instagram-worthy without sacrificing flavor or quality. The first taste is with the eyes, and we take that seriously.",
  },
];
export const stats = [
  {
    label: "Today's Revenue",
    value: "$2,847",
    icon: DollarSign,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Active Orders",
    value: "23",
    icon: ShoppingCart,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Total Customers",
    value: "1,247",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    label: "Growth Rate",
    value: "+12%",
    icon: TrendingUp,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export const recentOrders = [
  {
    id: "#ORD-001",
    customer: "Sarah Johnson",
    event: "Corporate Lunch",
    date: "2025-01-16",
    status: "confirmed",
    amount: "$450",
  },
  {
    id: "#ORD-002",
    customer: "Michael Chen",
    event: "Wedding Reception",
    date: "2025-01-18",
    status: "pending",
    amount: "$2,200",
  },
  {
    id: "#ORD-003",
    customer: "Emily Davis",
    event: "Birthday Party",
    date: "2025-01-20",
    status: "in-progress",
    amount: "$320",
  },
  {
    id: "#ORD-004",
    customer: "David Wilson",
    event: "Business Meeting",
    date: "2025-01-22",
    status: "confirmed",
    amount: "$180",
  },
];

export const upcomingEvents = [
  {
    time: "10:00 AM",
    event: "Corporate Lunch Setup",
    location: "Downtown Office",
    client: "Tech Corp",
  },
  {
    time: "2:00 PM",
    event: "Wedding Tasting",
    location: "Venue Hall",
    client: "Johnson Wedding",
  },
  {
    time: "4:30 PM",
    event: "Delivery Prep",
    location: "Kitchen",
    client: "Multiple Orders",
  },
];
export const orders = [
  {
    id: "#ORD-001",
    customer: "Sarah Johnson",
    event: "Corporate Lunch",
    date: "2025-01-16",
    time: "12:00 PM",
    location: "Downtown Office Building",
    guests: 25,
    amount: 450,
    status: "confirmed",
    phone: "+1 (555) 123-4567",
  },
  {
    id: "#ORD-002",
    customer: "Michael Chen",
    event: "Wedding Reception",
    date: "2025-01-18",
    time: "6:00 PM",
    location: "Grand Ballroom",
    guests: 150,
    amount: 2200,
    status: "pending",
    phone: "+1 (555) 987-6543",
  },
  {
    id: "#ORD-003",
    customer: "Emily Davis",
    event: "Birthday Party",
    date: "2025-01-20",
    time: "3:00 PM",
    location: "Backyard Garden",
    guests: 35,
    amount: 320,
    status: "in-progress",
    phone: "+1 (555) 456-7890",
  },
  {
    id: "#ORD-004",
    customer: "David Wilson",
    event: "Business Meeting",
    date: "2025-01-22",
    time: "10:00 AM",
    location: "Conference Room A",
    guests: 12,
    amount: 180,
    status: "confirmed",
    phone: "+1 (555) 321-0987",
  },
  {
    id: "#ORD-005",
    customer: "Lisa Thompson",
    event: "Baby Shower",
    date: "2025-01-25",
    time: "2:00 PM",
    location: "Community Center",
    guests: 40,
    amount: 380,
    status: "cancelled",
    phone: "+1 (555) 654-3210",
  },
];

export const Menu_categories = [
  { id: "all", name: "All Items", count: 24 },
  { id: "appetizers", name: "Appetizers", count: 8 },
  { id: "mains", name: "Main Courses", count: 10 },
  { id: "desserts", name: "Desserts", count: 6 },
];

export const menuItems = [
  {
    id: 1,
    name: "Gourmet Cheese Platter",
    category: "appetizers",
    description: "Selection of artisanal cheeses with crackers and fruits",
    price: 45,
    servings: "10-12",
    popular: true,
    image:
      "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Grilled Salmon Fillet",
    category: "mains",
    description: "Fresh Atlantic salmon with herbs and lemon butter",
    price: 28,
    servings: "1",
    popular: false,
    image:
      "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Chocolate Mousse Tower",
    category: "desserts",
    description: "Rich chocolate mousse with berry compote",
    price: 8,
    servings: "1",
    popular: true,
    image:
      "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Mediterranean Bruschetta",
    category: "appetizers",
    description: "Toasted bread with tomatoes, basil, and mozzarella",
    price: 35,
    servings: "15-20",
    popular: false,
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Beef Wellington",
    category: "mains",
    description: "Premium beef tenderloin wrapped in puff pastry",
    price: 65,
    servings: "1",
    popular: true,
    image:
      "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Tiramisu Cups",
    category: "desserts",
    description: "Classic Italian dessert in individual servings",
    price: 6,
    servings: "1",
    popular: false,
    image:
      "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const customers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Downtown",
    totalOrders: 8,
    totalSpent: 2840,
    lastOrder: "2025-01-10",
    status: "VIP",
    joinDate: "2024-03-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Ave, Suburbs",
    totalOrders: 3,
    totalSpent: 1200,
    lastOrder: "2024-12-28",
    status: "Regular",
    joinDate: "2024-08-20",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "+1 (555) 456-7890",
    address: "789 Pine St, Uptown",
    totalOrders: 12,
    totalSpent: 4560,
    lastOrder: "2025-01-08",
    status: "VIP",
    joinDate: "2024-01-10",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@email.com",
    phone: "+1 (555) 321-0987",
    address: "321 Elm St, Midtown",
    totalOrders: 5,
    totalSpent: 980,
    lastOrder: "2024-12-15",
    status: "Regular",
    joinDate: "2024-06-05",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@email.com",
    phone: "+1 (555) 654-3210",
    address: "654 Maple Ave, Downtown",
    totalOrders: 1,
    totalSpent: 380,
    lastOrder: "2024-11-20",
    status: "New",
    joinDate: "2024-11-20",
  },
];
export const metrics = [
  {
    label: "Monthly Revenue",
    value: "$18,247",
    change: "+15.3%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Total Orders",
    value: "342",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    label: "New Customers",
    value: "67",
    change: "-2.1%",
    trend: "down",
    icon: Users,
  },
  {
    label: "Average Order Value",
    value: "$53.40",
    change: "+4.7%",
    trend: "up",
    icon: TrendingUp,
  },
];

export const revenueData = [
  { month: "Jan", revenue: 12400, orders: 156 },
  { month: "Feb", revenue: 15200, orders: 189 },
  { month: "Mar", revenue: 18700, orders: 234 },
  { month: "Apr", revenue: 16800, orders: 212 },
  { month: "May", revenue: 19500, orders: 267 },
  { month: "Jun", revenue: 22100, orders: 298 },
];

export const topItems = [
  { name: "Gourmet Cheese Platter", orders: 45, revenue: 2025 },
  { name: "Beef Wellington", orders: 32, revenue: 2080 },
  { name: "Grilled Salmon Fillet", orders: 38, revenue: 1064 },
  { name: "Chocolate Mousse Tower", orders: 67, revenue: 536 },
  { name: "Mediterranean Bruschetta", orders: 29, revenue: 1015 },
];
export const staff = [
  {
    id: 1,
    name: "Chef Marcus Rodriguez",
    email: "marcus.rodriguez@cateringpro.com",
    phone: "+1 (555) 101-2345",
    role: "Head Chef",
    department: "Kitchen",
    hireDate: "2023-01-15",
    status: "Active",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    schedule: "Full-time",
  },
  {
    id: 2,
    name: "Anna Thompson",
    email: "anna.thompson@cateringpro.com",
    phone: "+1 (555) 201-3456",
    role: "Event Coordinator",
    department: "Events",
    hireDate: "2023-03-20",
    status: "Active",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    schedule: "Full-time",
  },
  {
    id: 3,
    name: "James Wilson",
    email: "james.wilson@cateringpro.com",
    phone: "+1 (555) 301-4567",
    role: "Sous Chef",
    department: "Kitchen",
    hireDate: "2023-06-10",
    status: "Active",
    avatar:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    schedule: "Full-time",
  },
  {
    id: 4,
    name: "Maria Garcia",
    email: "maria.garcia@cateringpro.com",
    phone: "+1 (555) 401-5678",
    role: "Server",
    department: "Service",
    hireDate: "2023-08-05",
    status: "Active",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    schedule: "Part-time",
  },
  {
    id: 5,
    name: "Robert Kim",
    email: "robert.kim@cateringpro.com",
    phone: "+1 (555) 501-6789",
    role: "Kitchen Assistant",
    department: "Kitchen",
    hireDate: "2023-09-15",
    status: "On Leave",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    schedule: "Full-time",
  },
];
export const categories = [
  { id: "all", name: "All Items" },
  { id: "proteins", name: "Proteins" },
  { id: "vegetables", name: "Vegetables" },
  { id: "dairy", name: "Dairy" },
  { id: "grains", name: "Grains" },
  { id: "spices", name: "Spices" },
];

export const inventory = [
  {
    id: 1,
    name: "Atlantic Salmon",
    category: "proteins",
    currentStock: 15,
    minStock: 20,
    unit: "lbs",
    costPerUnit: 12.5,
    supplier: "Fresh Catch Co.",
    lastRestocked: "2025-01-10",
    status: "low",
  },
  {
    id: 2,
    name: "Organic Spinach",
    category: "vegetables",
    currentStock: 25,
    minStock: 15,
    unit: "lbs",
    costPerUnit: 3.2,
    supplier: "Green Valley Farms",
    lastRestocked: "2025-01-12",
    status: "good",
  },
  {
    id: 3,
    name: "Aged Cheddar",
    category: "dairy",
    currentStock: 8,
    minStock: 12,
    unit: "lbs",
    costPerUnit: 8.75,
    supplier: "Artisan Dairy",
    lastRestocked: "2025-01-08",
    status: "low",
  },
  {
    id: 4,
    name: "Beef Tenderloin",
    category: "proteins",
    currentStock: 35,
    minStock: 25,
    unit: "lbs",
    costPerUnit: 28.0,
    supplier: "Prime Meats Inc.",
    lastRestocked: "2025-01-14",
    status: "good",
  },
  {
    id: 5,
    name: "Arborio Rice",
    category: "grains",
    currentStock: 5,
    minStock: 10,
    unit: "lbs",
    costPerUnit: 4.5,
    supplier: "Gourmet Grains",
    lastRestocked: "2025-01-05",
    status: "critical",
  },
  {
    id: 6,
    name: "Saffron",
    category: "spices",
    currentStock: 2,
    minStock: 1,
    unit: "oz",
    costPerUnit: 45.0,
    supplier: "Spice Masters",
    lastRestocked: "2025-01-01",
    status: "good",
  },
];
export const features = [
  {
    icon: Award,
    iconProps: { className: "w-8 h-8" },
    title: "Award-Winning Quality",
    description:
      "Recognized for excellence in culinary arts and service delivery across the region.",
  },
  {
    icon: Heart,
    iconProps: { className: "w-8 h-8" },
    title: "Passion for Perfection",
    description:
      "Every dish is crafted with love, attention to detail, and the finest ingredients.",
  },
  {
    icon: Clock,
    iconProps: { className: "w-8 h-8" },
    title: "Timely Service",
    description:
      "Punctual, professional service that ensures your event runs seamlessly.",
  },
  {
    icon: Users,
    iconProps: { className: "w-8 h-8" },
    title: "Expert Team",
    description:
      "Our skilled chefs and service staff bring decades of combined experience.",
  },
];
export const serviceCategories = [
  {
    id: 0,
    title: "Wedding Catering",
    iconProps: { className: "w-8 h-8" },
    icon: Cake,
    description:
      "Make your special day unforgettable with our exquisite wedding menus.",
    image:
      "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: [
      "Custom menu design and tasting sessions",
      "Professional service staff and coordination",
      "Elegant presentation and setup",
      "Dietary restrictions accommodated",
      "Full bar service available",
    ],
  },
  {
    id: 1,
    title: "Corporate Events",
    icon: Building,
    iconProps: { className: "w-8 h-8" },
    description:
      "Professional catering solutions for business meetings and corporate functions.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: [
      "Breakfast, lunch, and dinner options",
      "Coffee breaks and refreshment service",
      "Formal plated dinners or casual buffets",
      "On-time delivery and setup",
      "Professional presentation",
    ],
  },
  {
    id: 2,
    title: "Private Parties",
    icon: Users,
    iconProps: { className: "w-8 h-8" },
    description:
      "Celebrate life's special moments with our personalized catering services.",
    image:
      "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: [
      "Birthday parties and anniversaries",
      "Holiday celebrations and family gatherings",
      "Graduation parties and reunions",
      "Cocktail parties and social events",
      "Customizable menu options",
    ],
  },
];

export const menuHighlights = [
  {
    category: "Appetizers",
    icon: Utensils,
    iconProps: { className: "w-8 h-8" },
    items: [
      "Truffle Arancini",
      "Smoked Salmon Canapés",
      "Beef Tenderloin Crostini",
      "Seasonal Bruschetta",
    ],
  },
  {
    category: "Main Courses",
    icon: Wine,
    iconProps: { className: "w-8 h-8" },
    items: [
      "Herb-Crusted Rack of Lamb",
      "Pan-Seared Halibut",
      "Braised Short Ribs",
      "Vegetarian Wellington",
    ],
  },
  {
    category: "Desserts",
    icon: Cake,
    iconProps: { className: "w-8 h-8" },
    items: [
      "Chocolate Lava Cake",
      "Crème Brûlée",
      "Seasonal Fruit Tarts",
      "Artisan Cheese Selection",
    ],
  },
  {
    category: "Beverages",
    icon: Coffee,
    iconProps: { className: "w-8 h-8" },
    items: [
      "Craft Cocktails",
      "Premium Wine Selection",
      "Specialty Coffee Bar",
      "Fresh Juice Blends",
    ],
  },
];
export const footerLinks = {
  services: [
    { name: "Wedding Catering", href: "#services" },
    { name: "Corporate Events", href: "#services" },
    { name: "Private Parties", href: "#services" },
    { name: "Menu Planning", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  resources: [
    { name: "Menu Samples", href: "#" },
    { name: "Planning Guide", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Blog", href: "#" },
  ],
};

export const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    iconProps: { className: "w-8 h-8" },
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    iconProps: { className: "w-8 h-8" },
    href: "#",
  },
  {
    name: "Twitter",
    icon: Twitter,
    iconProps: { className: "w-8 h-8" },
    href: "#",
  },
];
export const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Elegant appetizer plating",
    category: "Appetizers",
  },
  {
    src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Gourmet main course",
    category: "Main Courses",
  },
  {
    src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Wedding cake and desserts",
    category: "Desserts",
  },
  {
    src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Buffet setup",
    category: "Setup",
  },
  {
    src: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Fine dining presentation",
    category: "Plating",
  },
  {
    src: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Corporate event setup",
    category: "Events",
  },
  {
    src: "https://images.pexels.com/photos/1229040/pexels-photo-1229040.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Cocktail service",
    category: "Beverages",
  },
  {
    src: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Wedding reception",
    category: "Weddings",
  },
  {
    src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    alt: "Party catering",
    category: "Parties",
  },
];
export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    iconProps: { className: "w-8 h-8" },
    details: "(555) 123-4567",
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    iconProps: { className: "w-8 h-8" },
    details: "info@whiskedroot.com",
    description: "Send us your questions anytime",
  },
  {
    icon: MapPin,
    title: "Location",
    iconProps: { className: "w-8 h-8" },
    details: "123 Culinary Avenue, Food City, FC 12345",
    description: "Visit our kitchen and tasting room",
  },
  {
    icon: Clock,
    title: "Hours",
    iconProps: { className: "w-8 h-8" },
    details: "Mon-Fri: 9AM-7PM, Sat: 10AM-5PM",
    description: "We're here when you need us",
  },
];
