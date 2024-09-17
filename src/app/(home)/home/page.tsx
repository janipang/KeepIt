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
    <div className="gap-4 flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 w-full h-full flex-grow">
      <OverallIncomeExpense />
      <PendingTransfer />
      <IncomeSummary />
      <ExpenseSummary />
      <AccountSummary />
    </div>
  );
}
