import { Routes, Route } from "react-router-dom";
import Home from "../pages/client/Home";
import Menu from "../pages/client/Menu";
import About from "../pages/client/About";
import Contact from "../pages/client/Contact";
import Blog from "../pages/client/Blog";
import Catering from "../pages/client/Catering";

import ClientLayout from "../components/layout/ClientLayout";
import AdminLayout from "../components/layout/AdminLayout";

import Dashboard from "../pages/admin/Dashboard";
import AdminMenu from "../pages/admin/AdminMenu";
import Customers from "../pages/admin/Customers";

function AppRoutes() {
  const handleContactClick = () => {
    // Example: navigate to contact page
    window.location.href = "/";
  };

  return (
    <Routes>
      {/* Client Routes */}
      <Route element={<ClientLayout />}>
        <Route
          path="/"
          element={<Home onContactClick={handleContactClick} />}
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="admin-menu" element={<AdminMenu />} />
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
