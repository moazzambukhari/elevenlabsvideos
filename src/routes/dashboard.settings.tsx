import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({ meta: [{ title: "Settings — VoiceFlow AI" }] }),
  component: Settings,
});

function Settings() {
  return (
    <div>
      <PageHeader title="Settings" subtitle="Manage your account, security, and workspace." />

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="glass rounded-2xl p-6 max-w-2xl space-y-5">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full gradient-primary grid place-items-center font-semibold text-lg">AL</div>
              <Button variant="secondary" size="sm">Change avatar</Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5"><Label>Full name</Label><Input defaultValue="Ada Lovelace" /></div>
              <div className="space-y-1.5"><Label>Email</Label><Input defaultValue="ada@voiceflow.ai" /></div>
              <div className="space-y-1.5"><Label>Company</Label><Input defaultValue="VoiceFlow" /></div>
              <div className="space-y-1.5"><Label>Role</Label><Input defaultValue="Founder" /></div>
            </div>
            <Button className="gradient-primary border-0">Save changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="glass rounded-2xl p-6 max-w-2xl space-y-5">
            <div className="space-y-1.5"><Label>Current password</Label><Input type="password" /></div>
            <div className="space-y-1.5"><Label>New password</Label><Input type="password" /></div>
            <div className="flex items-center justify-between pt-2">
              <div>
                <div className="font-medium">Two-factor authentication</div>
                <div className="text-sm text-muted-foreground">Require a code on every sign-in.</div>
              </div>
              <Switch defaultChecked />
            </div>
            <Button className="gradient-primary border-0">Update password</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="glass rounded-2xl p-6 max-w-2xl divide-y divide-border/60">
            {[
              ["Product updates", "New features and improvements"],
              ["Usage alerts", "Notify me when I approach my plan limit"],
              ["Billing", "Invoices and payment receipts"],
              ["Security", "Sign-in attempts and password changes"],
            ].map(([t, d], i) => (
              <div key={t} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div>
                  <div className="font-medium">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
                <Switch defaultChecked={i !== 3} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team">
          <div className="glass rounded-2xl p-6 max-w-2xl space-y-3">
            {[
              { n: "Ada Lovelace", e: "ada@voiceflow.ai", r: "Owner" },
              { n: "Alan Turing", e: "alan@voiceflow.ai", r: "Admin" },
              { n: "Grace Hopper", e: "grace@voiceflow.ai", r: "Member" },
            ].map((m) => (
              <div key={m.e} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
                <div className="h-10 w-10 rounded-full gradient-primary grid place-items-center text-sm font-semibold">{m.n[0]}</div>
                <div className="flex-1">
                  <div className="font-medium">{m.n}</div>
                  <div className="text-xs text-muted-foreground">{m.e}</div>
                </div>
                <span className="text-xs text-muted-foreground">{m.r}</span>
              </div>
            ))}
            <Button className="gradient-primary border-0 mt-2">+ Invite member</Button>
          </div>
        </TabsContent>

        <TabsContent value="appearance">
          <div className="glass rounded-2xl p-6 max-w-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Reduced motion</div>
                <div className="text-sm text-muted-foreground">Minimize animations across the app.</div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Compact density</div>
                <div className="text-sm text-muted-foreground">Tighter spacing for power users.</div>
              </div>
              <Switch />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
