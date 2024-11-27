"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RessourceComponent() {
  return (
    <Tabs defaultValue="human" className="flex-1 w-full">
      <div className="h-full w-full py-1 border border-slate-200 rounded-lg">
        <TabsList className="w-auto h-10  bg-transparent ">
          <TabsTrigger value="human" className="w-full h-10">
            Ressources humaines
          </TabsTrigger>
          <TabsTrigger value="materiel" className="h-10 w-full">
            Ressources Matériels
          </TabsTrigger>
          <TabsTrigger value="document" className="h-10 w-full">
            Ressources Documentaires
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="human"></TabsContent>
      {/* <TabsContent value="department"></TabsContent>
      <TabsContent value="service"></TabsContent>
      <TabsContent value="process"></TabsContent>
      <TabsContent value="project"></TabsContent> */}
    </Tabs>
  );
}
