import React from "react";

type LoggedOutLayoutProps = {
  children: React.ReactNode;
};


const LoggedOutLayout: React.FC<LoggedOutLayoutProps> = ({ children }) => {
  return <div className="flex flex-col gap-4 min-h-screen p-24 items-center justify-center">
     {children}
    </div>;
};

export default LoggedOutLayout;
