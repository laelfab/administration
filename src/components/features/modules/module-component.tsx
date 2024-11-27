import ModuleItem from "@/components/core/module-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BoxesIcon,
  RadiationIcon,
  ShipWheelIcon,
  SirenIcon,
} from "lucide-react";
import React from "react";

function ModuleComponent() {
  return (
    <div className="flex-1 py-4  w-full">
      <ScrollArea className="w-ful">
        <ModuleItem label="Gestion des cas d'urgences">
          <SirenIcon size={18} />
        </ModuleItem>
        <ModuleItem label="Gestion des diagnostics de vulnérabilité">
          <ShipWheelIcon size={18} />
        </ModuleItem>
        <ModuleItem label="Gestion des risques">
          <BoxesIcon size={18} />
        </ModuleItem>
        <ModuleItem label="Gestion du BIA">
          <RadiationIcon size={18} />
        </ModuleItem>
      </ScrollArea>
    </div>
  );
}

export default ModuleComponent;
