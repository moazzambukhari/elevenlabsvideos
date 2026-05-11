import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export function LandingFooter() {
  const cols = [
    { title: "Product", items: ["Text to Speech", "Voice Cloning", "AI Agents", "Pricing"] },
    { title: "Developers", items: ["API", "Docs", "Status", "Changelog"] },
    { title: "Company", items: ["About", "Customers", "Careers", "Contact"] },
    { title: "Legal", items: ["Privacy", "Terms", "Security", "DPA"] },
  ];
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">VoiceFlow AI</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-xs">
            The voice intelligence platform for the next generation of AI products.
          </p>
          <div className="flex gap-3 mt-5 text-muted-foreground">
            <a href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
            <a href="#" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold mb-4">{c.title}</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {c.items.map((i) => <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © 2026 VoiceFlow AI Inc. All rights reserved.
      </div>
    </footer>
  );
}
