import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Play } from "lucide-react";
import { PageHeader } from "@/components/dashboard/StatCard";
import { Input } from "@/components/ui/input";
import { conversations } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/conversations")({
  head: () => ({ meta: [{ title: "Conversations — VoiceFlow AI" }] }),
  component: Conversations,
});

function Conversations() {
  const [active, setActive] = useState(conversations[0]);

  return (
    <div>
      <PageHeader title="Conversations" subtitle="Every call, transcribed and searchable." />

      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        <div className="glass rounded-2xl p-4 space-y-3 overflow-y-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations…" className="pl-9" />
          </div>
          {conversations.map((c) => (
            <button
              key={c.id} onClick={() => setActive(c)}
              className={`w-full text-left p-3 rounded-xl transition ${active.id === c.id ? "bg-primary/15" : "hover:bg-white/5"}`}
            >
              <div className="font-medium text-sm">{c.agent}</div>
              <div className="text-xs text-muted-foreground mt-1">{c.date} · {c.duration}</div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 glass rounded-2xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
            <div>
              <div className="font-semibold">{active.agent}</div>
              <div className="text-xs text-muted-foreground">{active.date} · {active.duration}</div>
            </div>
            <button className="h-10 w-10 rounded-full gradient-primary grid place-items-center"><Play className="h-4 w-4 ml-0.5 text-primary-foreground" /></button>
          </div>
          <div className="space-y-4">
            {active.messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.from === "agent" ? "" : "flex-row-reverse"}`}>
                <div className={`h-9 w-9 rounded-full grid place-items-center text-xs font-semibold shrink-0 ${m.from === "agent" ? "gradient-primary" : "bg-secondary"}`}>
                  {m.from === "agent" ? "AI" : "U"}
                </div>
                <div className="max-w-md">
                  <div className={`rounded-2xl px-4 py-3 ${m.from === "agent" ? "glass" : "bg-primary/15"}`}>{m.text}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 px-1">{m.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
