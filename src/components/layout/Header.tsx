import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, User } from "lucide-react";
import { NavLink, useLocation, Link } from "react-router-dom";
// import AuthModal from "../AuthModal";

interface HeaderProps {
  isLoggedIn: boolean;
  user: { name: string; email: string } | null;
  setIsLoggedIn: (value: boolean) => void;
  setUser: (user: { name: string; email: string } | null) => void;
  openAuthModal: (mode: "login" | "register") => void;
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  user,
  setIsLoggedIn,
  setUser,
  openAuthModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  // const [authMode, setAuthMode] = useState<"login" | "register">("login");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState<{ name: string; email: string } | null>(
  //   null
  // );

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    // Update isSolid whenever location or scroll changes
    if (location.pathname !== "/") {
      setIsSolid(true);
    } else {
      setIsSolid(isScrolled);
    }
  }, [location.pathname, isScrolled]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  // const openAuthModal = (mode: "login" | "register") => {
  //   setAuthMode(mode);
  //   setIsAuthModalOpen(true);
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    // In a real app, you would also clear tokens, etc.
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isSolid ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Top contact bar */}
        <div className="bg-[var(--color-primary)] text-white py-2 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@whiskedroot.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Premium Catering Services • Available 7 Days a Week</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center pt-1">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/src/assets/logo.png"
                  alt="Gourmet Catering Co. Logo"
                  className="h-20 w-auto mb-2 text-center"
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 hover:text-[var(--color-primary)] ${
                    isSolid ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Auth buttons */}
              {isLoggedIn && user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isScrolled ? "text-gray-700" : "text-white"
                      }`}
                    >
                      {user.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-[var(--color-primary)] hover:text-amber-700 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => openAuthModal("login")}
                    className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                      isSolid ? "text-gray-700" : "text-white"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => openAuthModal("register")}
                    className="bg-[var(--color-primary)] hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isSolid ? "text-gray-700" : "text-white"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile auth buttons */}
              {isLoggedIn && user ? (
                <div className="px-4 py-2 border-t border-gray-200 mt-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-[var(--color-primary)] hover:text-amber-700 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="px-4 py-2 border-t border-gray-200 space-y-2">
                  <button
                    onClick={() => {
                      openAuthModal("login");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-amber-600 transition-colors duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      openAuthModal("register");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-[var(--color-primary)] hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
                  >
                    Quote
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>
      {/* Auth Modal */}

      {/* <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      /> */}
    </>
  );
};

export default Header;
