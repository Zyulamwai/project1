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

const articles = [
  {
    id: 1,
    title: "Advances in Injection Molding Technology",
    category: "Technology",
    status: "Published",
    lastUpdated: "2024-03-20",
  },
  {
    id: 2,
    title: "Sustainable Practices in Plastic Manufacturing",
    category: "Sustainability",
    status: "Published",
    lastUpdated: "2024-03-19",
  },
  {
    id: 3,
    title: "Industry 4.0 in Manufacturing",
    category: "Industry Trends",
    status: "Draft",
    lastUpdated: "2024-03-18",
  },
];

export default function ArticlesPage() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Article
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Manage Articles</CardTitle>
          <CardDescription>
            View and manage articles published on the website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>{article.status}</TableCell>
                  <TableCell>{article.lastUpdated}</TableCell>
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