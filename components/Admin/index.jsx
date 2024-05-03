import AdminHeader from "../commons/AdminHeader";
import { AdminQuickAccessSection } from "../commons/AdminQuickAccessSection";
import AdminSidebar from "../commons/AdminSidebar";

export const Admin = () => {
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <AdminQuickAccessSection />
      </div>
    </div>
  );
};
