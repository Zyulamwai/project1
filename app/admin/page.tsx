import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, FileText, MessageSquare } from "lucide-react";

const stats = [
  {
    title: "Total Case Studies",
    value: "12",
    icon: Box,
  },
  {
    title: "Published Articles",
    value: "24",
    icon: FileText,
  },
  {
    title: "Active FAQs",
    value: "48",
    icon: MessageSquare,
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}