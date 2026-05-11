import { ReactNode } from "react";
import { LucideIcon, TrendingUp } from "lucide-react";

export function StatCard({
  label, value, delta, icon: Icon,
}: { label: string; value: ReactNode; delta?: string; icon: LucideIcon }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <div className="h-8 w-8 rounded-lg bg-primary/15 grid place-items-center">
          <Icon className="h-4 w-4 text-neon" />
        </div>
      </div>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value}</div>
      {delta && (
        <div className="mt-1 flex items-center gap-1 text-xs text-neon">
          <TrendingUp className="h-3 w-3" /> {delta}
        </div>
      )}
    </div>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
