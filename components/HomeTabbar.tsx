import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}
const productType = [
  { title: "Course", value: "courses" },
  { title: "Festival", value: "event" },
  { title: "Milonga", value: "milonga" },
  { title: "Private Lessons", value: "private" },
];
function HomeTabbar({ selectedTab, onTabSelect }: Props) {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      <div className="flex items-center gap-1">
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.value)}
            key={item?.value}
            className={`border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-darkColor hover:text-white cursor-pointer hoverEffect ${selectedTab === item?.title && "bg-darkColor text-white"}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomeTabbar;
