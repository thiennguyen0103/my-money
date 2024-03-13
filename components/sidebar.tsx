"use client";

import { cn } from "@/lib/utils";
import { sidebarItems } from "@/utils/constants";
import { MoveHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import { Toggle } from "./ui/toggle";

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={cn(
        "w-sidebar group sticky h-screen",
        isCollapsed &&
          "hover:w-sidebar w-16 shadow-md transition-all duration-200 ease-in-out",
      )}
    >
      <div>
        <div
          className={cn(
            "flex items-center justify-between py-5 pl-6 pr-4",
            isCollapsed && "p-5",
          )}
        >
          <Logo hasText={!isCollapsed} />
          <Toggle
            size="sm"
            onClick={toggleSidebar}
            className={cn(
              "opacity-100 duration-300 group-hover:block",
              isCollapsed && "hidden",
            )}
          >
            <MoveHorizontal className="h-4 w-4" />
          </Toggle>
        </div>
        <ul
          className={cn(
            "space-y-2 pr-5 group-hover:pr-5",
            isCollapsed && "pr-2",
          )}
        >
          {sidebarItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={cn(
                "flex items-center rounded-r-full p-2 pl-6 pr-4",
                pathname === item.path &&
                  "from-start to-end bg-gradient-to-r text-white",
              )}
            >
              <li className="flex items-center space-x-3">
                <item.prefix
                  className={cn(
                    "h-5 w-5 text-gray-500 dark:text-gray-400",
                    pathname === item.path && "text-white",
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium opacity-100 transition-all duration-300 group-hover:opacity-100",
                    isCollapsed && "opacity-0",
                  )}
                >
                  {item.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
