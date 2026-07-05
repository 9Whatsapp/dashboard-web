import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Messages</h1>
          <p className="text-ink-muted text-sm mt-1">
            Send messages and view routing history.
          </p>
        </div>
        <Button type="button" onClick={() => alert('Fitur ini sedang dalam pengembangan')}>Send New Message</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Send Form */}
        <Card className="h-fit">
          <CardContent className="p-5">
            <h2 className="font-semibold mb-4">Quick Send</h2>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Fitur kirim pesan sedang dalam pengembangan."); }}>
              <div className="space-y-1.5">
                <Label>Instance</Label>
                <select className="w-full bg-bg-deep border border-border-subtle rounded-md px-3 py-2 text-sm text-ink-primary focus:outline-none focus:border-primary/50">
                  <option>Instance 1 (+62 812...)</option>
                  <option>Instance 2 (+62 898...)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label>Recipient Number</Label>
                <Input placeholder="628..." />
              </div>
              <div className="space-y-1.5">
                <Label>Message</Label>
                <textarea 
                  rows={4}
                  placeholder="Type your message here..." 
                  className="w-full bg-bg-deep border border-border-subtle rounded-md px-3 py-2 text-sm text-ink-primary focus:outline-none focus:border-primary/50 resize-none"
                ></textarea>
              </div>
              <Button type="button" className="w-full justify-center flex">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Message Logs */}
        <Card className="lg:col-span-2 overflow-hidden flex flex-col h-[600px]">
          <div className="p-5 border-b border-border-subtle flex justify-between items-center">
            <h2 className="font-semibold">Message Logs</h2>
            <div className="flex gap-2">
              <Input placeholder="Search..." className="py-1 px-3 h-8 w-48" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-bg-elevated text-ink-secondary border-b border-border-subtle sticky top-0">
                <tr>
                  <th className="px-5 py-3 font-medium">To</th>
                  <th className="px-5 py-3 font-medium">Preview</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle text-ink-muted">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <tr key={i} className="hover:bg-bg-elevated transition-colors">
                    <td className="px-5 py-3">+62 812-3456...</td>
                    <td className="px-5 py-3 max-w-[200px] truncate">Hello, this is a test message...</td>
                    <td className="px-5 py-3">
                      <Badge dotColor="primary" className="border-none bg-transparent px-0 text-ink-primary">Delivered</Badge>
                    </td>
                    <td className="px-5 py-3 text-ink-dim text-xs">10:42 AM</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
