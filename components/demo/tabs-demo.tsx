import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import {
  SearchByPosition,
  SearchByCategory,
  SearchByCity,
  SearchByKeyword,
} from "@/config/dummy";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Search } from "lucide-react";

export function TabsDemo() {
  return (
    <Tabs defaultValue="position">
      <ScrollArea>
        <TabsList className="inline-flex h-auto w-full items-center justify-start rounded-none border-b bg-transparent p-0 text-muted-foreground">
          <TabsTrigger
            value="position"
            className="h-auto rounded-none border-b-4 border-transparent px-4 py-2 data-[state=active]:border-b-4 data-[state=active]:border-foreground "
          >
            Posisi Pekerjaan
          </TabsTrigger>
          <TabsTrigger
            value="category"
            className="h-auto rounded-none border-b-4 border-transparent px-4 py-2 data-[state=active]:border-b-4 data-[state=active]:border-foreground "
          >
            Kategori Pekerjaan
          </TabsTrigger>
          <TabsTrigger
            value="city"
            className="h-auto rounded-none border-b-4 border-transparent px-4 py-2 data-[state=active]:border-b-4 data-[state=active]:border-foreground "
          >
            Lokasi
          </TabsTrigger>
          <TabsTrigger
            value="keyword"
            className="h-auto rounded-none border-b-4 border-transparent px-4 py-2 data-[state=active]:border-b-4 data-[state=active]:border-foreground "
          >
            Kata Kunci
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      <TabsContent value="position" className="pt-4 max-md:px-4">
        <JobList jobs={SearchByPosition} />
      </TabsContent>

      <TabsContent value="category" className="pt-4 max-md:px-4">
        <JobList jobs={SearchByCategory} />
      </TabsContent>

      <TabsContent value="city" className="pt-4 max-md:px-4">
        <JobList jobs={SearchByCity} />
      </TabsContent>

      <TabsContent value="keyword" className="pt-4 max-md:px-4">
        <JobList jobs={SearchByKeyword} />
      </TabsContent>
    </Tabs>
  );
}

type JobItemProps = {
  id: string;
  name: string;
};

type JobListProps = {
  jobs: JobItemProps[];
};

const JobList = ({ jobs }: JobListProps) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {jobs?.map((item) => (
        <li key={item.id}>
          <JobItem id={item.id} name={item.name} />
        </li>
      ))}
    </ul>
  );
};

const JobItem = ({ id, name }: JobItemProps) => {
  return (
    <Link
      href="/"
      aria-label={name}
      className="flex items-center gap-1 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
    >
      <Search className="h-3 w-3" />
      {name}
    </Link>
  );
};
