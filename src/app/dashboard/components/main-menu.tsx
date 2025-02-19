import React from "react";
import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import {cn} from "@/lib/utils";

interface MainMenuProps {
  className?: string; 
}

const MainMenu: React.FC<MainMenuProps> = ({className}) => {
  return (
    <nav className={cn(`bg-muted overflow-auto p-4 flex flex-col`,className)}  >

      <header className="border-b dark:border-b-black border-b-zinc-300  pb-4">
        <MenuTitle />
      </header>

      <ul className="py-4 grow flex flex-col gap-1">
        <MenuItem href="/dashboard">대시보드</MenuItem>
        <MenuItem href="/dashboard/teams">팀</MenuItem>
        <MenuItem href="/dashboard/employee">직원</MenuItem>
        <MenuItem href="/dashboard/account">시용자정보</MenuItem>
        <MenuItem href="/dashboard/settings">설정</MenuItem>
      </ul>

      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            {" "}
            TP{" "}
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          로그아웃
        </Link>
        <ThemeToggle className="ml-auto" />
      </footer>
    </nav>
  );
};

export default MainMenu;
