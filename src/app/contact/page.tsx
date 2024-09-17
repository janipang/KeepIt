"use client"
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Contact() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="rounded-lg shadow-lg grid grid-rows-[1fr_5fr] bg-white">
      <div className="flex flex-col">
        <span>ผู้ติดต่อ</span>
        <Accordion selectionMode="multiple">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
      <div></div>
    </div>
  );
}
