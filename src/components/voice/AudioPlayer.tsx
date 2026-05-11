import { useState } from "react";
import { Play, Pause, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Waveform } from "./Waveform";

interface AudioPlayerProps {
  voice: string;
  initials?: string;
  duration?: string;
  current?: string;
  showActions?: boolean;
}

export function AudioPlayer({
  voice,
  initials = "AU",
  duration = "0:18",
  current = "0:06",
  showActions = true,
}: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="h-12 w-12 rounded-full gradient-primary grid place-items-center text-sm font-semibold text-primary-foreground">
            {initials}
          </div>
          {playing && <div className="absolute inset-0 rounded-full animate-pulse-glow" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">{voice}</div>
          <div className="text-xs text-muted-foreground">Generated voice preview</div>
        </div>
        <Button
          size="icon"
          onClick={() => setPlaying((p) => !p)}
          className="h-11 w-11 rounded-full gradient-primary border-0 hover:opacity-90"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </Button>
      </div>

      <Waveform active={playing} className="h-12" bars={48} />

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{current}</span>
        <span>{duration}</span>
      </div>

      {showActions && (
        <div className="flex gap-2 pt-1">
          <Button variant="secondary" size="sm" className="flex-1">
            <Download className="h-4 w-4 mr-2" /> Download
          </Button>
          <Button variant="secondary" size="sm" className="flex-1">
            <Share2 className="h-4 w-4 mr-2" /> Share
          </Button>
        </div>
      )}
    </div>
  );
}
