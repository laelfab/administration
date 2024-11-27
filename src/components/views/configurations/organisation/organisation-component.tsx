"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function OrganisationComponent() {
  return (
    <Tabs defaultValue="direction" className="flex-1 w-full">
      <div className="h-full w-full py-1 border border-slate-200 rounded-lg">
        <TabsList className="w-auto h-10  bg-transparent ">
          <TabsTrigger value="direction" className="w-full h-10">
            Directions
          </TabsTrigger>
          <TabsTrigger value="department" className="h-10 w-full">
            Départements
          </TabsTrigger>
          <TabsTrigger value="service" className="h-10 w-full">
            Services
          </TabsTrigger>
          <TabsTrigger value="process" className="h-10 w-full">
            Processus
          </TabsTrigger>
          <TabsTrigger value="project" className="h-10 w-full">
            Projets
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="direction"></TabsContent>
      {/* <TabsContent value="department"></TabsContent>
      <TabsContent value="service"></TabsContent>
      <TabsContent value="process"></TabsContent>
      <TabsContent value="project"></TabsContent> */}
    </Tabs>
  );
}
