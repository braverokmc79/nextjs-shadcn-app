import React from "react";
import MenuTitle from "./menu-title";

const MainMenu:React.FC = () => {
  
    return (
  <div className="bg-muted overflow-auto p-4">          
    <div className="border-b dark:border-b-black border-b-zinc-300  pb-4">      
      <MenuTitle />
    </div>
  </div>);
};

export default MainMenu;
