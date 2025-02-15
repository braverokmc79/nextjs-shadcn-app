import React from "react";
import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const MainMenu:React.FC = () => {
  
    return (
  <div className="bg-muted overflow-auto p-4 flex flex-col h-full">          
    <div className="border-b dark:border-b-black border-b-zinc-300  pb-4">      
      <MenuTitle />
    </div>

     <div className="py-4 grow">  
        <MenuItem  href="/dashboard">
            대시보드
        </MenuItem>
        <MenuItem  href="/dashboard/teams">
            팀
        </MenuItem>
        <MenuItem  href="/dashboard/employee">
            직원 
        </MenuItem>
        <MenuItem  href="/dashboard/account">
            시용자정보 
        </MenuItem>
        <MenuItem  href="/dashboard/settings">
            설정 
        </MenuItem>        
     </div>

     <div className="flex gap-2 items-center">
        <Avatar>
            <AvatarFallback className="bg-pink-300 dark:bg-pink-800"> TP </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline" >로그아웃</Link>
        <ThemeToggle className="ml-auto"  />
     </div>

  </div>);
};

export default MainMenu;
