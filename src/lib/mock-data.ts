export const voices = [
  { id: "1", name: "Aurora", lang: "English (US)", gender: "Female", category: "Conversational", accent: "American" },
  { id: "2", name: "Atlas", lang: "English (UK)", gender: "Male", category: "Narration", accent: "British" },
  { id: "3", name: "Luna", lang: "Spanish", gender: "Female", category: "Conversational", accent: "Castilian" },
  { id: "4", name: "Kai", lang: "Japanese", gender: "Male", category: "Anime", accent: "Tokyo" },
  { id: "5", name: "Nova", lang: "English (US)", gender: "Female", category: "News", accent: "Neutral" },
  { id: "6", name: "Orion", lang: "French", gender: "Male", category: "Narration", accent: "Parisian" },
  { id: "7", name: "Sage", lang: "German", gender: "Female", category: "Audiobook", accent: "Standard" },
  { id: "8", name: "Echo", lang: "English (AU)", gender: "Male", category: "Podcast", accent: "Australian" },
  { id: "9", name: "Iris", lang: "Italian", gender: "Female", category: "Conversational", accent: "Roman" },
  { id: "10", name: "Phoenix", lang: "Portuguese", gender: "Male", category: "Commercial", accent: "Brazilian" },
  { id: "11", name: "Vega", lang: "Hindi", gender: "Female", category: "News", accent: "Delhi" },
  { id: "12", name: "Zephyr", lang: "Korean", gender: "Male", category: "Gaming", accent: "Seoul" },
];

export const agents = [
  { id: "1", name: "Restaurant Booking", role: "Hospitality", calls: 1284, success: 94, status: "active" },
  { id: "2", name: "Customer Support", role: "Support", calls: 8420, success: 91, status: "active" },
  { id: "3", name: "AI Receptionist", role: "Front Desk", calls: 612, success: 97, status: "active" },
  { id: "4", name: "Sales Outbound", role: "Sales", calls: 3210, success: 38, status: "paused" },
];

export const usageData = [
  { day: "Mon", chars: 12400, calls: 84 },
  { day: "Tue", chars: 18200, calls: 112 },
  { day: "Wed", chars: 15800, calls: 96 },
  { day: "Thu", chars: 24100, calls: 148 },
  { day: "Fri", chars: 28900, calls: 172 },
  { day: "Sat", chars: 16200, calls: 92 },
  { day: "Sun", chars: 21500, calls: 134 },
];

export const recentGenerations = [
  { id: "g1", text: "Welcome to VoiceFlow, your AI voice studio…", voice: "Aurora", duration: "0:18", date: "2m ago" },
  { id: "g2", text: "Today's special is grilled salmon with…", voice: "Atlas", duration: "0:12", date: "14m ago" },
  { id: "g3", text: "Thanks for calling, how may I help you?", voice: "Nova", duration: "0:06", date: "1h ago" },
  { id: "g4", text: "Episode 42 — The future of synthetic voice…", voice: "Echo", duration: "1:42", date: "3h ago" },
];

export const recentCalls = [
  { id: "c1", agent: "Restaurant Booking", caller: "+1 (415) 555-0142", duration: "2:14", sentiment: "Positive" },
  { id: "c2", agent: "Customer Support", caller: "+1 (212) 555-0193", duration: "5:48", sentiment: "Neutral" },
  { id: "c3", agent: "AI Receptionist", caller: "+44 20 7946 0321", duration: "0:54", sentiment: "Positive" },
  { id: "c4", agent: "Sales Outbound", caller: "+1 (646) 555-0117", duration: "3:21", sentiment: "Negative" },
];

export const conversations = [
  {
    id: "1", agent: "Restaurant Booking", date: "Today, 2:14 PM", duration: "2:14",
    messages: [
      { from: "user", text: "Hi, I'd like to book a table for two on Friday at 7pm.", time: "0:02" },
      { from: "agent", text: "Of course! Friday at 7pm for two. May I have your name?", time: "0:08" },
      { from: "user", text: "Sarah Chen.", time: "0:14" },
      { from: "agent", text: "Booked, Sarah. You'll get a confirmation by SMS.", time: "0:22" },
    ],
  },
  {
    id: "2", agent: "Customer Support", date: "Today, 11:02 AM", duration: "5:48",
    messages: [
      { from: "user", text: "My subscription renewed but I cancelled.", time: "0:01" },
      { from: "agent", text: "I'm sorry to hear that. Let me look into your account.", time: "0:09" },
    ],
  },
];

export const invoices = [
  { id: "INV-2041", date: "May 1, 2026", plan: "Pro", amount: "$99.00", status: "Paid" },
  { id: "INV-2018", date: "Apr 1, 2026", plan: "Pro", amount: "$99.00", status: "Paid" },
  { id: "INV-1996", date: "Mar 1, 2026", plan: "Pro", amount: "$99.00", status: "Paid" },
  { id: "INV-1972", date: "Feb 1, 2026", plan: "Starter", amount: "$19.00", status: "Paid" },
];

export const apiKeys = [
  { id: "k1", name: "Production", key: "vf_live_8a92f3b1c4d5e6f7", created: "Mar 12, 2026", lastUsed: "2m ago" },
  { id: "k2", name: "Staging", key: "vf_test_1b8c4d9e2f3a5b6c", created: "Apr 02, 2026", lastUsed: "1d ago" },
];

export const testimonials = [
  { name: "Alex Rivera", role: "Product Lead, Northstar", quote: "VoiceFlow shipped what took our team months in a single afternoon. The voices are eerily real.", initials: "AR" },
  { name: "Priya Shah", role: "CTO, Lumen Studios", quote: "The cleanest voice API we've integrated. Latency is shockingly low for streaming.", initials: "PS" },
  { name: "Marcus Chen", role: "Founder, Vox Labs", quote: "Our AI receptionist handled 12,000 calls last month. Customers can't tell it isn't human.", initials: "MC" },
];

export const plans = [
  { name: "Starter", price: 0, blurb: "For tinkering and prototypes.", cta: "Start free",
    features: ["10,000 characters / month", "20 prebuilt voices", "Community support", "Basic API access"] },
  { name: "Pro", price: 99, blurb: "For makers shipping real products.", featured: true, cta: "Start Pro",
    features: ["1M characters / month", "Voice cloning (5 seats)", "AI Phone Agents", "Priority support", "Streaming API"] },
  { name: "Enterprise", price: null, blurb: "For teams operating at scale.", cta: "Contact sales",
    features: ["Unlimited usage", "Dedicated voices", "SLA + SOC 2", "Private deployment", "Solutions engineer"] },
];

export const features = [
  { title: "Text to Speech", desc: "Studio-grade synthesis in 32 languages with ultra-low latency.", icon: "Mic2" },
  { title: "Voice Cloning", desc: "Clone any voice from 60 seconds of audio with consent controls.", icon: "Wand2" },
  { title: "AI Phone Agents", desc: "Deploy autonomous agents that handle real phone calls 24/7.", icon: "PhoneCall" },
  { title: "Multi-Language", desc: "Generate one voice that speaks fluently across 32 languages.", icon: "Globe2" },
  { title: "Real-time Streaming", desc: "Sub-300ms streaming for live, conversational experiences.", icon: "Zap" },
  { title: "Developer API", desc: "REST + WebSocket APIs, SDKs in Python, Node, Go and Rust.", icon: "Code2" },
];
