import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AudioPlayer } from "@/components/voice/AudioPlayer";
import { voices } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/generate")({
  head: () => ({ meta: [{ title: "Generate voice — VoiceFlow AI" }] }),
  component: Generate,
});

function Generate() {
  const [text, setText] = useState("Welcome to VoiceFlow. The future of voice is conversational, instant, and indistinguishable from human.");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setLoading(true); setGenerated(false);
    setTimeout(() => { setLoading(false); setGenerated(true); }, 1800);
  };

  return (
    <div>
      <PageHeader title="Text to Speech" subtitle="Turn any text into studio-grade audio in seconds." />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-2xl p-6 space-y-5">
          <div>
            <Label className="mb-2 block">Script</Label>
            <Textarea
              value={text} onChange={(e) => setText(e.target.value)}
              rows={10} className="resize-none"
              placeholder="Type or paste your script here…"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Tip: use punctuation and pauses for natural pacing.</span>
              <span>{text.length} / 5000 characters</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <Label className="mb-2 block">Voice</Label>
              <Select defaultValue="1">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {voices.map((v) => <SelectItem key={v.id} value={v.id}>{v.name} — {v.lang}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2 block">Tone</Label>
              <Select defaultValue="neutral">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["neutral", "warm", "excited", "serious", "whisper"].map((t) =>
                    <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2 block">Language</Label>
              <Select defaultValue="en-US">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {[
                    ["en-US", "English (US)"], ["en-GB", "English (UK)"],
                    ["es-ES", "Spanish"], ["fr-FR", "French"], ["ja-JP", "Japanese"],
                  ].map(([v, l]) => <SelectItem key={v} value={v}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2"><Label>Speed</Label><span className="text-xs text-muted-foreground">1.0×</span></div>
            <Slider defaultValue={[1]} min={0.5} max={2} step={0.05} />
          </div>
          <div>
            <div className="flex justify-between mb-2"><Label>Stability</Label><span className="text-xs text-muted-foreground">75%</span></div>
            <Slider defaultValue={[75]} max={100} />
          </div>

          <Button onClick={handleGenerate} disabled={loading} className="w-full gradient-primary border-0 h-11">
            {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Generating…</> : <><Sparkles className="h-4 w-4 mr-2" /> Generate audio</>}
          </Button>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center min-h-[260px]">
              <div className="h-12 w-12 rounded-full gradient-primary grid place-items-center animate-pulse-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-4 text-sm">Synthesizing voice…</div>
              <div className="text-xs text-muted-foreground">~1.8s remaining</div>
            </div>
          ) : generated ? (
            <AudioPlayer voice="Aurora — Conversational" initials="AU" />
          ) : (
            <div className="glass rounded-2xl p-10 text-center text-sm text-muted-foreground min-h-[260px] flex items-center justify-center">
              Generated audio will appear here.
            </div>
          )}

          <div className="glass rounded-2xl p-5">
            <div className="text-xs text-neon flex items-center gap-2"><Sparkles className="h-3 w-3" /> AI suggestion</div>
            <p className="text-sm mt-2">For warmer delivery on this script, try lowering speed to 0.95× and switching to "Atlas".</p>
          </div>
        </div>
      </div>
    </div>
  );
}
