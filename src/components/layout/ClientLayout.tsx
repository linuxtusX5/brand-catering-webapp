import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import AuthModal from "../../components/AuthModal";

export default function ClientLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        user={user}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
        openAuthModal={(mode) => {
          setAuthMode(mode);
          setAuthModalOpen(true);
        }}
      />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
    </>
  );
}
