import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import AuthModal from "../../components/AuthModal";

export default function ClientLayout() {
  const [isLoggedIn] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(true);

  // Only show modal if not logged in
  if (!isLoggedIn) {
    return (
      <>
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
