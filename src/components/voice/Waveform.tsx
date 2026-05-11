import { cn } from "@/lib/utils";

interface WaveformProps {
  bars?: number;
  className?: string;
  active?: boolean;
}

export function Waveform({ bars = 36, className, active = true }: WaveformProps) {
  return (
    <div className={cn("flex items-center gap-[3px] h-10", className)}>
      {Array.from({ length: bars }).map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.6)) * 80;
        return (
          <span
            key={i}
            className={cn(
              "w-[3px] rounded-full bg-gradient-to-t from-primary to-neon",
              active && "animate-wave-bar"
            )}
            style={{
              height: `${h}%`,
              animationDelay: `${(i % 12) * 80}ms`,
              animationPlayState: active ? "running" : "paused",
            }}
          />
        );
      })}
    </div>
  );
}
