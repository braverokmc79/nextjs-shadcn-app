import React from "react";
import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";

const MainMenu:React.FC = () => {
  
    return (
  <div className="bg-muted overflow-auto p-4">          
    <div className="border-b dark:border-b-black border-b-zinc-300  pb-4">      
      <MenuTitle />
    </div>

     <div className="py-4">  
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

  </div>);
};

export default MainMenu;
