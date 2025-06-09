import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/SideBar";

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
