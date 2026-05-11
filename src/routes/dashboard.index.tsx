import { createFileRoute } from "@tanstack/react-router";
import { Mic2, Activity, Library, PhoneCall, Sparkles } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { StatCard, PageHeader } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { recentGenerations, recentCalls, usageData } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({ meta: [{ title: "Dashboard — VoiceFlow AI" }] }),
  component: DashboardHome,
});

function DashboardHome() {
  return (
    <div>
      <PageHeader
        title="Welcome back, Ada"
        subtitle="Here's what's happening with your voice products today."
        action={<Button className="gradient-primary border-0">+ New generation</Button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Audio generated" value="14.2 hrs" delta="+12% wk" icon={Mic2} />
        <StatCard label="API requests" value="68,210" delta="+8% wk" icon={Activity} />
        <StatCard label="Voices" value="42" delta="+3 new" icon={Library} />
        <StatCard label="AI calls" value="1,284" delta="+24% wk" icon={PhoneCall} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-6">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold">Usage this week</div>
              <div className="text-xs text-muted-foreground">Characters synthesized per day</div>
            </div>
            <div className="text-xs text-muted-foreground">Last 7 days</div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usageData}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.66 0.24 295)" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="oklch(0.66 0.24 295)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="oklch(0.68 0.04 280)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.68 0.04 280)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ background: "oklch(0.18 0.025 280)", border: "1px solid oklch(1 0 0 / 10%)", borderRadius: 12 }}
                  labelStyle={{ color: "white" }}
                />
                <Area type="monotone" dataKey="chars" stroke="oklch(0.78 0.22 195)" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs text-neon">
              <Sparkles className="h-3.5 w-3.5" /> AI Insights
            </div>
            <div className="font-semibold mt-3">You're trending toward your monthly limit.</div>
            <p className="text-sm text-muted-foreground mt-2">
              At your current pace you'll hit 1.04M characters by May 31. Consider upgrading to Scale before then.
            </p>
            <Button variant="secondary" size="sm" className="mt-5">View recommendations</Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-4">Recent generations</div>
          <div className="space-y-2">
            {recentGenerations.map((g) => (
              <div key={g.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition">
                <div className="h-9 w-9 rounded-lg gradient-primary grid place-items-center text-xs font-semibold shrink-0">{g.voice[0]}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm truncate">{g.text}</div>
                  <div className="text-xs text-muted-foreground">{g.voice} · {g.duration}</div>
                </div>
                <div className="text-xs text-muted-foreground">{g.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="font-semibold mb-4">Recent AI calls</div>
          <div className="space-y-2">
            {recentCalls.map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition">
                <div className="h-9 w-9 rounded-lg bg-accent/20 grid place-items-center shrink-0">
                  <PhoneCall className="h-4 w-4 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm truncate">{c.agent}</div>
                  <div className="text-xs text-muted-foreground">{c.caller}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs">{c.duration}</div>
                  <div className={`text-[10px] uppercase tracking-wider ${
                    c.sentiment === "Positive" ? "text-neon" : c.sentiment === "Negative" ? "text-destructive" : "text-muted-foreground"
                  }`}>{c.sentiment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
