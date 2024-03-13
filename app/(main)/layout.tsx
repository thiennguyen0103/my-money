import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="flex flex-auto">
      <Sidebar />
      <div className="flex flex-1 flex-col ">
        <Header />
        <div className="flex-1 p-6">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
