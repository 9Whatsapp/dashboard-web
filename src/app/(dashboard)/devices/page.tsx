import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function DevicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Devices</h1>
          <p className="text-ink-muted text-sm mt-1">
            Manage your connected WhatsApp instances.
          </p>
        </div>
        <Button type="button" onClick={() => alert('Fitur ini sedang dalam pengembangan')}>Connect New Device</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Connected Device Card */}
        <Card>
          <CardContent className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-secondary">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Instance 1</h3>
                  <p className="text-xs text-ink-muted">+62 812-3456-7890</p>
                </div>
              </div>
              <Badge dotColor="primary" className="border-primary/20 text-primary bg-primary/5">
                Connected
              </Badge>
            </div>
            
            <div className="pt-4 border-t border-border-subtle flex justify-between">
              <button type="button" onClick={() => alert('Fitur ini sedang dalam pengembangan')} className="text-xs text-ink-secondary hover:text-ink-primary transition-colors">View Logs</button>
              <button type="button" onClick={() => alert('Fitur ini sedang dalam pengembangan')} className="text-xs text-red-500 hover:text-red-400 transition-colors">Disconnect</button>
            </div>
          </CardContent>
        </Card>

        {/* Reconnecting Device Card */}
        <Card>
          <CardContent className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-secondary">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Instance 2</h3>
                  <p className="text-xs text-ink-muted">+62 898-7654-3210</p>
                </div>
              </div>
              <Badge dotColor="yellow" ping={true}>
                Connecting
              </Badge>
            </div>
            
            <div className="pt-4 border-t border-border-subtle flex justify-between">
              <button className="text-xs text-ink-secondary hover:text-ink-primary transition-colors">View Logs</button>
              <button className="text-xs text-red-500 hover:text-red-400 transition-colors">Disconnect</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
