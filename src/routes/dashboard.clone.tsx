import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UploadCloud, Sparkles, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Waveform } from "@/components/voice/Waveform";

export const Route = createFileRoute("/dashboard/clone")({
  head: () => ({ meta: [{ title: "Clone voice — VoiceFlow AI" }] }),
  component: Clone,
});

function Clone() {
  const [progress, setProgress] = useState(0);
  const [training, setTraining] = useState(false);

  const startTrain = () => {
    setTraining(true); setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(id); setTraining(false); return 100; }
        return p + 4;
      });
    }, 120);
  };

  return (
    <div>
      <PageHeader title="Voice Cloning" subtitle="Clone any voice from 60 seconds of audio." />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-2xl p-10 border-2 border-dashed border-border hover:border-primary/40 transition text-center">
            <div className="h-14 w-14 mx-auto rounded-2xl gradient-primary grid place-items-center mb-4 animate-float">
              <UploadCloud className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="font-semibold">Drop your audio sample here</div>
            <div className="text-sm text-muted-foreground mt-1">MP3, WAV, or M4A. Up to 25 MB.</div>
            <Button variant="secondary" className="mt-5">Choose file</Button>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-semibold">sample-recording.mp3</div>
                <div className="text-xs text-muted-foreground">1:24 · 4.2 MB</div>
              </div>
              <div className="text-xs text-neon flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> Quality: Excellent
              </div>
            </div>
            <Waveform bars={64} className="h-16" active={false} />
          </div>

          {training || progress > 0 ? (
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold flex items-center gap-2"><Sparkles className="h-4 w-4 text-neon" /> Training your voice</div>
                <span className="text-sm text-muted-foreground">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="text-xs text-muted-foreground mt-2">{progress < 100 ? "Analyzing prosody and timbre…" : "Done. Your voice is ready."}</div>
            </div>
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-5 space-y-4">
            <div className="font-semibold">Voice settings</div>
            <div className="space-y-1.5"><Label>Voice name</Label><Input placeholder="My voice" /></div>
            <div className="space-y-1.5"><Label>Description</Label><Input placeholder="Warm, narrator style" /></div>
            <Button onClick={startTrain} disabled={training} className="w-full gradient-primary border-0">
              {training ? "Training…" : "Clone voice"}
            </Button>
          </div>
          <div className="glass rounded-2xl p-5 text-sm">
            <div className="text-xs text-neon flex items-center gap-2"><ShieldCheck className="h-3 w-3" /> Consent required</div>
            <p className="text-muted-foreground mt-2">You must own or have explicit permission to clone this voice. We watermark every output.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
