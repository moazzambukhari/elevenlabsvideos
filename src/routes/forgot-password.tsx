import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — VoiceFlow AI" }, { name: "description", content: "Reset your VoiceFlow AI password." }] }),
  component: () => (
    <AuthLayout title="Reset your password" subtitle="We'll email you a secure reset link.">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5"><Label>Email</Label><Input type="email" placeholder="you@company.com" /></div>
        <Button className="w-full gradient-primary border-0 mt-2">Send reset link</Button>
      </form>
      <p className="text-sm text-muted-foreground mt-6 text-center">
        Back to <Link to="/login" className="text-foreground hover:underline">sign in</Link>
      </p>
    </AuthLayout>
  ),
});
