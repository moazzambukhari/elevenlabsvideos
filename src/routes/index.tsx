import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play, Mic2, Wand2, PhoneCall, Globe2, Zap, Code2, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing/Navbar";
import { LandingFooter } from "@/components/landing/Footer";
import { Waveform } from "@/components/voice/Waveform";
import { AudioPlayer } from "@/components/voice/AudioPlayer";
import { features, plans, testimonials } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoiceFlow AI — Create AI voices that sound human" },
      { name: "description", content: "Studio-grade text to speech, voice cloning, and AI phone agents. Build voice products at scale with the VoiceFlow API." },
      { property: "og:title", content: "VoiceFlow AI — Create AI voices that sound human" },
      { property: "og:description", content: "Studio-grade text to speech, voice cloning, and AI phone agents." },
    ],
  }),
  component: Landing,
});

const iconMap = { Mic2, Wand2, PhoneCall, Globe2, Zap, Code2 } as const;

function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <LandingNavbar />
      <Hero />
      <Logos />
      <Features />
      <Demo />
      <Pricing />
      <Testimonials />
      <CTA />
      <LandingFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
          New — Realtime streaming voices in 32 languages
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter leading-[1.05]"
        >
          Create AI voices that <br />
          <span className="gradient-text animate-gradient">sound human.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Studio-grade text to speech, voice cloning, and AI calling agents. One platform to design,
          deploy, and scale voice for every product surface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/register">
            <Button size="lg" className="gradient-primary border-0 h-12 px-6 glow">
              Start free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="secondary" className="h-12 px-6 glass">
            <Play className="mr-2 h-4 w-4" /> Watch demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="relative mt-20 max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-6 md:p-10 noise">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="h-2 w-2 rounded-full bg-destructive" />
              <span className="h-2 w-2 rounded-full bg-chart-5" />
              <span className="h-2 w-2 rounded-full bg-neon" />
              <span className="ml-2 font-mono">voiceflow.ai · live preview</span>
            </div>
            <Waveform bars={80} className="h-32" />
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">"The future of voice is conversational, instant, indistinguishable."</span>
              <span className="font-mono text-neon">0:00 / 0:18</span>
            </div>
          </div>

          <div className="absolute -left-6 -top-8 hidden md:block animate-float">
            <div className="glass rounded-2xl p-4 w-48">
              <div className="text-xs text-muted-foreground">Latency</div>
              <div className="text-2xl font-semibold gradient-text">237ms</div>
            </div>
          </div>
          <div className="absolute -right-6 top-32 hidden md:block animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="glass rounded-2xl p-4 w-48">
              <div className="text-xs text-muted-foreground">Voices online</div>
              <div className="text-2xl font-semibold gradient-text">1,284</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Logos() {
  const logos = ["Google", "Netflix", "Spotify", "OpenAI", "Amazon", "Meta"];
  return (
    <section className="py-16 border-y border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by teams shipping voice at scale
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {logos.map((l) => (
            <span key={l} className="text-2xl font-semibold tracking-tight text-muted-foreground hover:text-foreground transition">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Everything you need to ship voice.</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One API. One studio. Every voice surface, from realtime streaming to autonomous phone agents.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6 group hover:border-primary/40 transition relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="h-11 w-11 rounded-xl gradient-primary grid place-items-center mb-4">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="py-24 px-6">
      <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-neon mb-3">Live demo</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Hear it for yourself.</h2>
          <p className="mt-3 text-muted-foreground">
            Six prebuilt voices. Tap play and listen — no signup required. Every voice on VoiceFlow
            is generated end-to-end with our latest neural model.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Aurora", "Atlas", "Luna", "Nova"].map((v) => (
              <button key={v} className="glass rounded-full px-3.5 py-1.5 text-sm hover:border-primary/50 transition">
                {v}
              </button>
            ))}
          </div>
        </div>
        <AudioPlayer voice="Aurora — Conversational" initials="AU" />
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Pricing for every stage.</h2>
          <p className="mt-4 text-muted-foreground text-lg">Start free. Upgrade when you scale.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 ${p.featured ? "glass-strong border-primary/40 glow" : "glass"}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 text-xs gradient-primary px-3 py-1 rounded-full">Most popular</span>
              )}
              <div className="font-semibold">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price === null ? "Custom" : `$${p.price}`}</span>
                {p.price !== null && p.price > 0 && <span className="text-muted-foreground text-sm">/mo</span>}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{p.blurb}</p>
              <Button className={`w-full mt-6 ${p.featured ? "gradient-primary border-0" : ""}`} variant={p.featured ? "default" : "secondary"}>
                {p.cta}
              </Button>
              <ul className="mt-7 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 text-neon mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">Loved by builders shipping voice.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7">
              <div className="flex gap-0.5 text-neon mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/90">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-6">
                <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-sm font-semibold">{t.initials}</div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Ship your voice product this week.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            10,000 free characters. No credit card. Production-ready in minutes.
          </p>
          <Link to="/register" className="inline-block mt-8">
            <Button size="lg" className="gradient-primary border-0 h-12 px-8 glow">
              Get started free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
