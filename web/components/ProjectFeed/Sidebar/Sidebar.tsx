import React from "react";
import { Categories } from "./Categories";

const categories = [
  { isPrivate: false, name: "Updates", isSelected: true },
//   { isPrivate: false, name: "Welcome", isSelected: false },
  { isPrivate: false, name: "Questions", isSelected: false },
//   { isPrivate: false, name: "API", isSelected: false },
  { isPrivate: false, name: "Web", isSelected: false },
  { isPrivate: false, name: "CDN", isSelected: false },
  { isPrivate: false, name: "Team", isSelected: false },
];

export const Sidebar = () => {
  return (
    <div className="w-72 h-full border-r border-white-seperator">
      <Categories categories={categories} />
    </div>
  );
};