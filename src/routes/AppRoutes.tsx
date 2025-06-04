import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Catering from "../pages/Catering";

function AppRoutes() {
  const handleContactClick = () => {
    // Example: navigate to contact page
    window.location.href = "/";
  };

  return (
    <Routes>
      <Route path="/" element={<Home onContactClick={handleContactClick} />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/catering" element={<Catering />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
