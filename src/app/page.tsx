"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { Calendar } from "@nextui-org/calendar";

interface LabelsMap {
  merge: string;
  squash: string;
  rebase: string;
}

export default function Home() {
  const router = useRouter();

  const rows = [
    {
      key: "1",
      name: "Pinyo T.",
      role: "UX/UI Designer",
      status: "Active",
    },
    {
      key: "2",
      name: "Janipang K.",
      role: "Front-End Developer",
      status: "Active",
    },
    {
      key: "3",
      name: "Tuatang P.",
      role: "Project Manager",
      status: "Planning",
    },
    {
      key: "4",
      name: "Sai P.",
      role: "Backend Developer",
      status: "Exploring",
    },
    {
      key: "5",
      name: "Tan P.",
      role: "Backend Developer",
      status: "Studying",
    },
    ,
    {
      key: "6",
      name: "Kasidit S.",
      role: "API Engineer",
      status: "Exploring",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">
      <div className="">
        <h1 className="text-2xl font-extrabold mt-10 mb-6">Our Team</h1>
        <Table aria-label="Example table with dynamic content" className="my-6">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item?.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <h1 className="text-2xl font-extrabold mt-10 mb-6">Testing</h1>
        <div className="flex flex-row gap-6 w-full">
          <Button onClick={() => router.push("/login")}>Verify</Button>
          <Button onClick={() => router.push("/home")}>Home</Button>
          <Button onClick={() => router.push("/contact")}>
            Contact
          <Button onClick={() => router.push("/setting")} isDisabled>
            Setting
          </Button>
          </Button>
        </div>
        <h1 className="text-2xl font-extrabold mt-10 mb-6">Dev Plan</h1>
        <Calendar calendarWidth={320} visibleMonths={2} />
      </div>
    </main>
  );
}
