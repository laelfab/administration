import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";
interface ProfileEnterpriseProps {
  children: React.ReactNode;
}
export const ProfileEnterprise = ({ children }: ProfileEnterpriseProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent align="start">
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  );
};
