import ThemeToggle from "@/components/ThemeToggle";
import LightDarkToggle from "@/components/ui/light-dark-toggle";
import React from "react";

type LoggedOutLayoutProps = {
  children: React.ReactNode;
};


const LoggedOutLayout: React.FC<LoggedOutLayoutProps> = ({ children }) => {
  return <div className="w-full  flex flex-col gap-4 min-h-screen p-2 md:p-24  items-center justify-center">
     {children}
     {/* <LightDarkToggle className="fixed top-1/2 right-2 -mt-4" /> */}
     <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2 " />

     <div className="fixed top-[calc(50%-102px)] right-2">
         <ThemeToggle />
     </div>

    </div>;
};

export default LoggedOutLayout;
