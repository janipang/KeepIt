"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/component/ThemeSwitcher";
import { Calendar } from "@nextui-org/calendar";
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
import { useState } from "react";

interface LabelsMap {
  merge: string;
  squash: string;
  rebase: string;
}

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(
    new Set(["merge"])
  );

  const descriptionsMap = {
    merge:
      "All commits from the source branch are added to the destination branch via a merge commit.",
    squash:
      "All commits from the source branch are added to the destination branch as a single commit.",
    rebase:
      "All commits from the source branch are added to the destination branch individually.",
  };

  const labelsMap:LabelsMap = {
    merge: "Create a merge commit",
    squash: "Squash and merge",
    rebase: "Rebase and merge",
  };
  const selectedOptionValue = Array.from(selectedOption)[0];

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
          <ThemeSwitcher />
          <Button onClick={() => router.push("/login")}>Verify</Button>
          <Button onClick={() => router.push("/home")} isDisabled>Home</Button>
          <Button onClick={() => router.push("/setting")} isDisabled>Setting</Button>
        </div>
        <h1 className="text-2xl font-extrabold mt-10 mb-6">Dev Plan</h1>
        <Calendar calendarWidth={320} visibleMonths={2} />
      </div>
    </main>
  );
}
