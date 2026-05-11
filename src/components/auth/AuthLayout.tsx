import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Waveform } from "@/components/voice/Waveform";

export function AuthLayout({ children, title, subtitle }: { children: ReactNode; title: string; subtitle: string }) {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left visual */}
      <div className="hidden md:flex relative overflow-hidden p-10 flex-col justify-between">
        <div className="absolute inset-0 gradient-primary opacity-30" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />

        <Link to="/" className="relative flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg glass-strong grid place-items-center">
            <Sparkles className="h-4 w-4 text-neon" />
          </div>
          <span className="font-semibold">VoiceFlow AI</span>
        </Link>

        <div className="relative">
          <div className="glass-strong rounded-3xl p-8 max-w-md">
            <Waveform bars={48} className="h-20" />
            <p className="mt-6 text-lg leading-relaxed">
              "VoiceFlow let us replace 6 vendors with one API. Our team ships a voice feature every week now."
            </p>
            <div className="mt-5 text-sm text-muted-foreground">— Priya Shah, CTO Lumen Studios</div>
          </div>
        </div>

        <div className="relative text-xs text-muted-foreground">© 2026 VoiceFlow AI</div>
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-sm">
          <Link to="/" className="md:hidden flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg gradient-primary grid place-items-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">VoiceFlow AI</span>
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-2">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
