"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What materials do you work with?",
    category: "Materials",
    status: "Published",
    lastUpdated: "2024-03-20",
  },
  {
    id: 2,
    question: "What is your minimum order quantity (MOQ)?",
    category: "Orders",
    status: "Published",
    lastUpdated: "2024-03-19",
  },
  {
    id: 3,
    question: "How long does it take to develop a new mold?",
    category: "Production",
    status: "Published",
    lastUpdated: "2024-03-18",
  },
];

export default function FAQsPage() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">FAQs</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add FAQ
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Manage FAQs</CardTitle>
          <CardDescription>
            View and manage frequently asked questions displayed on the website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faqs.map((faq) => (
                <TableRow key={faq.id}>
                  <TableCell className="font-medium">{faq.question}</TableCell>
                  <TableCell>{faq.category}</TableCell>
                  <TableCell>{faq.status}</TableCell>
                  <TableCell>{faq.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}