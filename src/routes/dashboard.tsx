import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Mic2, Library, Wand2, PhoneCall, MessagesSquare,
  KeyRound, CreditCard, Settings, Sparkles, Search, Bell, Menu,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/generate", label: "Generate Voice", icon: Mic2 },
  { to: "/dashboard/library", label: "Voice Library", icon: Library },
  { to: "/dashboard/clone", label: "Clone Voice", icon: Wand2 },
  { to: "/dashboard/agents", label: "AI Call Agents", icon: PhoneCall },
  { to: "/dashboard/conversations", label: "Conversations", icon: MessagesSquare },
  { to: "/dashboard/api-keys", label: "API Keys", icon: KeyRound },
  { to: "/dashboard/billing", label: "Billing", icon: CreditCard },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

function DashboardLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed md:sticky top-0 z-40 h-screen w-64 shrink-0 glass-strong border-r border-border/60 p-4 flex flex-col transition-transform",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <Link to="/" className="flex items-center gap-2 px-2 py-2">
          <div className="h-8 w-8 rounded-lg gradient-primary grid place-items-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-semibold">VoiceFlow AI</span>
        </Link>
        <nav className="mt-6 flex-1 space-y-1">
          {nav.map((n) => {
            const active = n.exact ? path === n.to : path.startsWith(n.to) && n.to !== "/dashboard";
            const isHome = n.exact && path === "/dashboard";
            const isActive = isHome || active;
            return (
              <Link
                key={n.to} to={n.to} onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition relative",
                  isActive
                    ? "bg-primary/15 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r gradient-primary" />}
                <n.icon className="h-4 w-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="glass rounded-xl p-4 text-sm">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Pro plan
          </div>
          <div className="text-xs text-muted-foreground mb-2">682k / 1M characters</div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full gradient-primary" style={{ width: "68%" }} />
          </div>
          <Link to="/dashboard/billing" className="block mt-3 text-xs text-neon hover:underline">Upgrade →</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 glass-strong border-b border-border/60">
          <div className="flex items-center gap-3 px-4 md:px-8 h-16">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((o) => !o)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search voices, agents, calls…" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
              <div className="h-9 w-9 rounded-full gradient-primary grid place-items-center text-sm font-semibold">AL</div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-8 py-8 max-w-[1400px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
