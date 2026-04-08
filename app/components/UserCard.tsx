import React from "react";

const bgMap: Record<string, string> = {
  student: "bg-lamaSky",
  teacher: "bg-lamaPurple",
  parent: "bg-lamaYellow",
  staff: "bg-lamaSkyLight",
};

const UserCard = ({ type }: { type: string }) => {
  const bg = bgMap[type] ?? "bg-white";
  return (
    <div className={`${bg} rounded-2xl p-4 flex-1 min-w-[130px]`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs bg-white px-2 py-1 rounded-full text-green-600 font-medium">
          2024/25
        </span>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {type.charAt(0).toUpperCase() + type.slice(1)}s
      </h2>
    </div>
  );
};

export default UserCard;
