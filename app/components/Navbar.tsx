"use client";

import React from "react";
import {
  Search,
  MessageCircle,
  Bell,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-sm">

      {/* 🔍 SEARCH */}
      <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm"
        />
      </div>

      {/* 🔔 RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* 💬 Message */}
        <div className="relative bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200">
          <MessageCircle className="w-5 h-5 text-gray-600" />
        </div>

        {/* 🔔 Notification */}
        <div className="relative bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-200">
          <Bell className="w-5 h-5 text-gray-600" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>

        {/* 👤 User Info */}
        <div className="hidden md:flex flex-col text-right">
          <span className="text-sm font-medium">John Doe</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>

        {/* 👤 Profile Avatar (SVG fallback) */}
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
          <span className="text-sm font-semibold text-gray-600">JD</span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;