import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-ink-muted text-sm mt-1">
          Monitor your WhatsApp routing infrastructure and instance health.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Metric 1 */}
        <Card>
          <CardContent className="p-5 flex flex-col gap-2">
            <span className="text-sm font-medium text-ink-secondary">Total Messages Sent</span>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight">24,592</span>
              <span className="text-xs text-primary bg-primary-glow px-2 py-0.5 rounded-full mb-1">+12%</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Metric 2 */}
        <Card>
          <CardContent className="p-5 flex flex-col gap-2">
            <span className="text-sm font-medium text-ink-secondary">Active Instances</span>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight">3</span>
              <span className="text-xs text-ink-muted mb-1">/ 5 limit</span>
            </div>
          </CardContent>
        </Card>

        {/* Metric 3 */}
        <Card>
          <CardContent className="p-5 flex flex-col gap-2">
            <span className="text-sm font-medium text-ink-secondary">Delivery Rate</span>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight">99.8%</span>
              <span className="text-xs text-primary bg-primary-glow px-2 py-0.5 rounded-full mb-1">Healthy</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card className="overflow-hidden">
        <div className="p-5 border-b border-border-subtle flex justify-between items-center">
          <h2 className="font-semibold">Recent Routing Activity</h2>
          <Button variant="secondary" type="button" onClick={() => alert('Fitur ini sedang dalam pengembangan')} className="px-3 py-1.5 h-auto text-xs">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-bg-elevated text-ink-secondary border-b border-border-subtle">
              <tr>
                <th className="px-5 py-3 font-medium">Message ID</th>
                <th className="px-5 py-3 font-medium">Recipient</th>
                <th className="px-5 py-3 font-medium">Instance</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-ink-muted">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-bg-elevated transition-colors">
                  <td className="px-5 py-3 font-mono text-xs text-ink-secondary">msg_{Math.random().toString(36).substring(2, 10)}</td>
                  <td className="px-5 py-3">+62 812-3456-7890</td>
                  <td className="px-5 py-3">Instance {Math.ceil(i/2)}</td>
                  <td className="px-5 py-3">
                    <Badge dotColor="primary" className="border-none bg-transparent px-0 text-ink-primary">Delivered</Badge>
                  </td>
                  <td className="px-5 py-3 text-ink-dim">Just now</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
