import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — VoiceFlow AI" }, { name: "description", content: "Sign in to your VoiceFlow AI account." }] }),
  component: () => (
    <AuthLayout title="Welcome back" subtitle="Sign in to your VoiceFlow account.">
      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary">Google</Button>
        <Button variant="secondary">GitHub</Button>
      </div>
      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
        <div className="h-px bg-border flex-1" /> OR <div className="h-px bg-border flex-1" />
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5"><Label>Email</Label><Input type="email" placeholder="you@company.com" /></div>
        <div className="space-y-1.5">
          <div className="flex justify-between"><Label>Password</Label><Link to="/forgot-password" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</Link></div>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Link to="/dashboard"><Button className="w-full gradient-primary border-0 mt-2">Sign in</Button></Link>
      </form>
      <p className="text-sm text-muted-foreground mt-6 text-center">
        Don't have an account? <Link to="/register" className="text-foreground hover:underline">Sign up</Link>
      </p>
    </AuthLayout>
  ),
});
