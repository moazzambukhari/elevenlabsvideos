import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, PhoneCall, PhoneOff, Mic, Activity, Smile, Meh, Frown } from "lucide-react";
import { PageHeader, StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Waveform } from "@/components/voice/Waveform";
import { agents } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/agents")({
  head: () => ({ meta: [{ title: "AI Call Agents — VoiceFlow AI" }] }),
  component: Agents,
});

function Agents() {
  const [live, setLive] = useState(true);

  return (
    <div>
      <PageHeader
        title="AI Call Agents" subtitle="Autonomous agents that handle real phone calls 24/7."
        action={<Button className="gradient-primary border-0">+ New agent</Button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Active calls" value="12" delta="live" icon={Activity} />
        <StatCard label="Calls today" value="384" delta="+18%" icon={Phone} />
        <StatCard label="Avg duration" value="2:41" delta="-12s" icon={Activity} />
        <StatCard label="CSAT" value="94%" delta="+2pt" icon={Smile} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Agents list */}
        <div className="space-y-3">
          <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Agents</div>
          {agents.map((a) => (
            <div key={a.id} className="glass rounded-2xl p-4 flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center">
                <PhoneCall className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{a.name}</div>
                <div className="text-xs text-muted-foreground">{a.role} · {a.calls.toLocaleString()} calls</div>
              </div>
              <span className={`h-2 w-2 rounded-full ${a.status === "active" ? "bg-neon animate-pulse" : "bg-muted-foreground"}`} />
            </div>
          ))}
        </div>

        {/* Live call */}
        <div className="lg:col-span-2 glass-strong rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-neon flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" /> LIVE CALL
                </div>
                <div className="font-semibold mt-1">Restaurant Booking · +1 (415) 555-0142</div>
              </div>
              <div className="text-2xl font-mono">02:14</div>
            </div>

            <div className="my-8 flex flex-col items-center">
              <div className="h-32 w-32 rounded-full gradient-primary grid place-items-center animate-pulse-glow relative">
                <Mic className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="mt-6 w-full">
                <Waveform bars={64} className="h-16" active={live} />
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full"><Mic className="h-5 w-5" /></Button>
              <Button onClick={() => setLive(!live)} size="icon" className="h-14 w-14 rounded-full bg-destructive hover:bg-destructive/90 border-0">
                <PhoneOff className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full"><Activity className="h-5 w-5" /></Button>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <SentimentCard icon={Smile} label="Positive" value="78%" tone="text-neon" />
              <SentimentCard icon={Meh} label="Neutral" value="18%" tone="text-muted-foreground" />
              <SentimentCard icon={Frown} label="Negative" value="4%" tone="text-destructive" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 mt-6">
        <div className="font-semibold mb-4">Live transcript</div>
        <div className="space-y-3 text-sm">
          {[
            { who: "caller", text: "Hi, I'd like to book a table for two on Friday at 7pm." },
            { who: "agent", text: "Of course! Friday at 7pm for two. May I have your name?" },
            { who: "caller", text: "Sarah Chen." },
            { who: "agent", text: "Booked, Sarah. You'll get a confirmation by SMS." },
          ].map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.who === "agent" ? "" : "flex-row-reverse"}`}>
              <div className={`h-8 w-8 rounded-full grid place-items-center text-[10px] font-semibold shrink-0 ${m.who === "agent" ? "gradient-primary" : "bg-secondary"}`}>
                {m.who === "agent" ? "AI" : "SC"}
              </div>
              <div className={`max-w-md rounded-2xl px-4 py-2.5 ${m.who === "agent" ? "glass" : "bg-primary/15"}`}>{m.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SentimentCard({ icon: Icon, label, value, tone }: { icon: any; label: string; value: string; tone: string }) {
  return (
    <div className="glass rounded-xl p-4 flex items-center gap-3">
      <Icon className={`h-5 w-5 ${tone}`} />
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
