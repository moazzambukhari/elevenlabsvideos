import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — VoiceFlow AI" }, { name: "description", content: "Start building with VoiceFlow AI." }] }),
  component: () => (
    <AuthLayout title="Create your account" subtitle="Start free. No credit card required.">
      <div className="grid grid-cols-2 gap-2">
        <Button variant="secondary">Google</Button>
        <Button variant="secondary">GitHub</Button>
      </div>
      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
        <div className="h-px bg-border flex-1" /> OR <div className="h-px bg-border flex-1" />
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5"><Label>Full name</Label><Input placeholder="Ada Lovelace" /></div>
        <div className="space-y-1.5"><Label>Email</Label><Input type="email" placeholder="you@company.com" /></div>
        <div className="space-y-1.5"><Label>Password</Label><Input type="password" placeholder="••••••••" /></div>
        <Link to="/dashboard"><Button className="w-full gradient-primary border-0 mt-2">Create account</Button></Link>
      </form>
      <p className="text-sm text-muted-foreground mt-6 text-center">
        Already have an account? <Link to="/login" className="text-foreground hover:underline">Sign in</Link>
      </p>
    </AuthLayout>
  ),
});
