import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { Card } from "@components/ui/card";

interface StackCardProps {
  title: string;
  stacks: string[];
}

/**
 * StackCard component to display a technology stack category with an accordion.
 *
 * @param title - The title of the technology stack category (e.g., "Frontend", "Backend").
 * @param stacks - An array of technologies in the stack.
 */
const StackCard: React.FC<StackCardProps> = ({ title, stacks }) => {
  return (
    <Card className="p-4 rounded-xs">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{stacks.join(", ")}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default StackCard;
