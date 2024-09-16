"use client";
import { useRouter } from "next/navigation";
import { Card } from "@nextui-org/card";
import OverallIncomeExpense from "@/components/home/overallIncomeExpense";
import PendingTransfer from "@/components/home/pendingTransfer";
import IncomeSummary from "@/components/home/incomeSummary";
import ExpenseSummary from "@/components/home/expenseSummary";
import AccountSummary from "@/components/home/accountSummary";

export default function Home() {
  const router = useRouter();

  return (
    // outter container
    <div className="flex min-h-screen bg-blue-100 px-12 lg:px-20">
      {/* inner container */}
      <div className="flex flex-col my-20 flex-grow w-full">
        {/* data box */}
        <div className="grid grid-cols-3 gap-4 grid-rows-2 w-full h-full flex-grow">
          <OverallIncomeExpense />
          <PendingTransfer />
          <IncomeSummary />
          <ExpenseSummary />
          <AccountSummary />
        </div>
      </div>
    </div>
  );
}
