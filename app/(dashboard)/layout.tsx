"use client";

import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">

      {/* ✅ Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white border-r flex flex-col">
        
        {/* 🔥 SINGLE LOGO (only here) */}
        <div className="flex items-center gap-2 px-4 py-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-gray-800">SchoolApp</span>
          </Link>
        </div>

        {/* 🔥 Menu */}
        <div className="flex-1 overflow-y-auto">
          <Menu />
        </div>

      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 bg-[#F7F8Fa] overflow-scroll p-4">
        <Navbar/>
        {children}
      </div>

    </div>
  );
}