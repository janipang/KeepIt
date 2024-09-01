import NavBar from "@/component/NavBar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <div>{children}</div>
    </div>
  );
}
