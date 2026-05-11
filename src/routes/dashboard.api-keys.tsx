import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, KeyRound, Plus, Eye, EyeOff } from "lucide-react";
import { PageHeader } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiKeys } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/api-keys")({
  head: () => ({ meta: [{ title: "API Keys — VoiceFlow AI" }] }),
  component: Keys,
});

const codeSamples = {
  node: `import VoiceFlow from "voiceflow";

const vf = new VoiceFlow({ apiKey: process.env.VOICEFLOW_KEY });

const audio = await vf.tts.create({
  voice: "aurora",
  text: "Hello from VoiceFlow."
});

audio.save("out.mp3");`,
  python: `from voiceflow import VoiceFlow

vf = VoiceFlow(api_key=os.environ["VOICEFLOW_KEY"])

audio = vf.tts.create(
    voice="aurora",
    text="Hello from VoiceFlow.",
)

audio.save("out.mp3")`,
  curl: `curl https://api.voiceflow.ai/v1/tts \\
  -H "Authorization: Bearer $VOICEFLOW_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "voice": "aurora",
    "text": "Hello from VoiceFlow."
  }' --output out.mp3`,
};

function Keys() {
  const [shown, setShown] = useState<string | null>(null);

  return (
    <div>
      <PageHeader title="API Keys" subtitle="Manage credentials for production and development."
        action={<Button className="gradient-primary border-0"><Plus className="h-4 w-4 mr-2" /> New key</Button>} />

      <div className="space-y-3">
        {apiKeys.map((k) => (
          <div key={k.id} className="glass rounded-2xl p-5 flex flex-wrap items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center"><KeyRound className="h-4 w-4 text-neon" /></div>
            <div className="flex-1 min-w-[200px]">
              <div className="font-medium">{k.name}</div>
              <div className="text-xs text-muted-foreground">Created {k.created} · Last used {k.lastUsed}</div>
            </div>
            <code className="font-mono text-sm bg-secondary/50 px-3 py-1.5 rounded-lg">
              {shown === k.id ? k.key : k.key.slice(0, 7) + "•".repeat(16)}
            </code>
            <Button variant="ghost" size="icon" onClick={() => setShown(shown === k.id ? null : k.id)}>
              {shown === k.id ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon"><Copy className="h-4 w-4" /></Button>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 mt-8">
        <div className="font-semibold mb-1">Quickstart</div>
        <p className="text-sm text-muted-foreground mb-4">Generate your first audio with one of the snippets below.</p>
        <Tabs defaultValue="node">
          <TabsList>
            <TabsTrigger value="node">Node.js</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="curl">cURL</TabsTrigger>
          </TabsList>
          {(["node", "python", "curl"] as const).map((k) => (
            <TabsContent key={k} value={k}>
              <pre className="rounded-xl bg-[oklch(0.1_0.02_280)] p-5 text-sm overflow-x-auto font-mono leading-relaxed border border-border">
                <code>{codeSamples[k]}</code>
              </pre>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
