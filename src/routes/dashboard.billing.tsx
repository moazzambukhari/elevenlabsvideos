import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Download } from "lucide-react";
import { PageHeader } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { invoices } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/billing")({
  head: () => ({ meta: [{ title: "Billing — VoiceFlow AI" }] }),
  component: Billing,
});

function Billing() {
  return (
    <div>
      <PageHeader title="Billing" subtitle="Manage your plan, usage, and invoices." />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-strong rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <div className="text-xs text-neon">CURRENT PLAN</div>
            <div className="flex items-end gap-3 mt-2">
              <div className="text-3xl font-semibold">Pro</div>
              <div className="text-muted-foreground mb-1">$99 / month</div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Renews on June 1, 2026.</p>

            <div className="mt-6 space-y-4">
              <UsageBar label="Characters" used={682_000} total={1_000_000} format={(n) => `${(n / 1000).toFixed(0)}k`} />
              <UsageBar label="Voice clones" used={3} total={5} format={(n) => `${n}`} />
              <UsageBar label="AI minutes" used={420} total={1500} format={(n) => `${n} min`} />
            </div>

            <div className="flex gap-2 mt-6">
              <Button className="gradient-primary border-0">Upgrade plan</Button>
              <Button variant="secondary">Cancel subscription</Button>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Payment method</div>
          <div className="rounded-xl gradient-primary p-5 text-primary-foreground">
            <CreditCard className="h-6 w-6 opacity-80" />
            <div className="font-mono mt-6">•••• •••• •••• 4242</div>
            <div className="flex justify-between mt-3 text-xs opacity-90"><span>Ada Lovelace</span><span>12 / 28</span></div>
          </div>
          <Button variant="secondary" className="w-full mt-4">Update card</Button>
        </div>
      </div>

      <div className="glass rounded-2xl mt-6 overflow-hidden">
        <div className="p-6 border-b border-border/60 font-semibold">Invoices</div>
        <table className="w-full text-sm">
          <thead className="text-xs text-muted-foreground bg-white/[0.02]">
            <tr>{["Invoice", "Date", "Plan", "Amount", "Status", ""].map((h) =>
              <th key={h} className="text-left font-normal px-6 py-3">{h}</th>)}</tr>
          </thead>
          <tbody>
            {invoices.map((i) => (
              <tr key={i.id} className="border-t border-border/60 hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-mono">{i.id}</td>
                <td className="px-6 py-4">{i.date}</td>
                <td className="px-6 py-4">{i.plan}</td>
                <td className="px-6 py-4">{i.amount}</td>
                <td className="px-6 py-4"><span className="text-xs px-2 py-1 rounded-full bg-neon/15 text-neon">{i.status}</span></td>
                <td className="px-6 py-4 text-right"><Button variant="ghost" size="sm"><Download className="h-3.5 w-3.5 mr-2" />PDF</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UsageBar({ label, used, total, format }: { label: string; used: number; total: number; format: (n: number) => string }) {
  const pct = (used / total) * 100;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span>{label}</span>
        <span className="text-muted-foreground">{format(used)} / {format(total)}</span>
      </div>
      <Progress value={pct} className="h-2" />
    </div>
  );
}
