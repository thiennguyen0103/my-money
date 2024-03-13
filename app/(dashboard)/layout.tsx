import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="relative flex h-full w-full flex-auto">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default DashboardLayout;
