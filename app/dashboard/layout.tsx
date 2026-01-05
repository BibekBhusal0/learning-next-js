import { ReactNode } from "react";
import "@/app/ui/global.css"
import SideNav from "../ui/dashboard/sidenav";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-hidden md:p-12">{children}</div>
    </div>
  );
}
