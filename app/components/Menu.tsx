"use client";

import Link from "next/link";
import React from "react";
import {
  Home,
  Users,
  User,
  BookOpen,
  School,
  ClipboardList,
  FileText,
  BarChart,
  Calendar,
  MessageCircle,
  Megaphone,
  Settings,
  LogOut,
} from "lucide-react";

// 🔥 Replace with real auth later
const role = "admin";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: Home, label: "Home", href: "/", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Users, label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: User, label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: Users, label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
      { icon: BookOpen, label: "Subjects", href: "/list/subjects", visible: ["admin"] },
      { icon: School, label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: ClipboardList, label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: FileText, label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: FileText, label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: BarChart, label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: ClipboardList, label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Calendar, label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: MessageCircle, label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Megaphone, label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: User, label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Settings, label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: LogOut, label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm px-2">
      {menuItems.map((section) => (
        <div key={section.title} className="mb-6">

          {/* Section Title */}
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2 px-2">
            {section.title}
          </p>

          {/* Items */}
          <div className="flex flex-col gap-1">
            {section.items.map((item) => {
              if (!item.visible.includes(role)) return null;

              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;