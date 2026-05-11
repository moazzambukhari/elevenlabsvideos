import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Play, Search } from "lucide-react";
import { PageHeader } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { voices } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/library")({
  head: () => ({ meta: [{ title: "Voice library — VoiceFlow AI" }] }),
  component: Library,
});

function Library() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Conversational", "Narration", "News", "Audiobook", "Podcast", "Gaming", "Anime", "Commercial"];
  const list = voices.filter((v) =>
    (filter === "All" || v.category === filter) &&
    (v.name.toLowerCase().includes(query.toLowerCase()) || v.lang.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div>
      <PageHeader title="Voice Library" subtitle="Browse 1,200+ voices across 32 languages." />

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search voices…" className="pl-9" />
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c} onClick={() => setFilter(c)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                filter === c ? "gradient-primary border-transparent text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >{c}</button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {list.map((v) => (
          <div key={v.id} className="glass rounded-2xl p-5 group hover:border-primary/40 transition">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center font-semibold">{v.name[0]}</div>
              <button className="text-muted-foreground hover:text-destructive transition"><Heart className="h-4 w-4" /></button>
            </div>
            <div className="mt-4 font-semibold">{v.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{v.lang} · {v.gender}</div>
            <div className="mt-3 inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground">{v.category}</div>
            <Button size="sm" variant="secondary" className="w-full mt-4">
              <Play className="h-3.5 w-3.5 mr-2" /> Preview
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
