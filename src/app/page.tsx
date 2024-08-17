import Image from "next/image";
import { ThemeSwitcher } from "@/component/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <ThemeSwitcher />
      </div>
    </main>
  );
}
