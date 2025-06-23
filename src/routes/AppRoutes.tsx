import React from "react";
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
import Orders from "../pages/admin/Order";
import Analytics from "../pages/admin/Analytics";
import Staff from "../pages/admin/Staff";
import Inventory from "../pages/admin/Inventory";
import Settings from "../pages/admin/Settings";
import Gallery from "../pages/client/Gallery";
import AuthModal from "../components/AuthModal";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Client Routes */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/catering"
          element={
            <ProtectedRoute>
              <Catering />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthModal isOpen={true} onClose={() => {}} initialMode="login" />
          }
        />
      </Route>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="admin-menu" element={<AdminMenu />} />
        <Route path="customers" element={<Customers />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="staff" element={<Staff />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
