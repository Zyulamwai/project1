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

const caseStudies = [
  {
    id: 1,
    title: "Automotive Lighting Components",
    industry: "Automotive",
    status: "Published",
    lastUpdated: "2024-03-20",
  },
  {
    id: 2,
    title: "Consumer Electronics Enclosure",
    industry: "Electronics",
    status: "Published",
    lastUpdated: "2024-03-19",
  },
  {
    id: 3,
    title: "Medical Device Housing",
    industry: "Medical",
    status: "Published",
    lastUpdated: "2024-03-18",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Case Study
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Manage Case Studies</CardTitle>
          <CardDescription>
            View and manage case studies displayed on the website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caseStudies.map((study) => (
                <TableRow key={study.id}>
                  <TableCell className="font-medium">{study.title}</TableCell>
                  <TableCell>{study.industry}</TableCell>
                  <TableCell>{study.status}</TableCell>
                  <TableCell>{study.lastUpdated}</TableCell>
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