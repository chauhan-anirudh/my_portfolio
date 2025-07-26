import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  const linkClasses = (path) =>
    `pb-1 border-b-2 transition-all duration-200 ${
      location.pathname === path
        ? "text-white border-white"
        : "text-white border-transparent hover:border-white hover:text-teal-300"
    }`;

  const mobileLinkClasses = (path) =>
    `pb-1 border-b-2 transition-all duration-200 ${
      location.pathname === path
        ? "text-teal-600 border-teal-600"
        : "text-gray-700 border-transparent hover:border-teal-600 hover:text-teal-600"
    }`;

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 to-teal-400 shadow-md sticky top-0 z-50 w-full overflow-hidden">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">Portfolio</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <Link to="/" className={linkClasses("/")}>
              
            </Link>
            <Link to="/about" className={linkClasses("/about")}>
              About Me
            </Link>
            <Link to="/projects" className={linkClasses("/projects")}>
              Projects
            </Link>
            <Link to="/skills" className={linkClasses("/skills")}>
              Skills
            </Link>
            <Link to="/contact" className={linkClasses("/contact")}>
              Contact
            </Link>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={toggleMenu}
        ></div>

        {/* Side Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-800"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col px-6 py-8 space-y-6 text-lg">
            <Link
              to="/"
              onClick={toggleMenu}
              className={mobileLinkClasses("/")}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className={mobileLinkClasses("/about")}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className={mobileLinkClasses("/projects")}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              onClick={toggleMenu}
              className={mobileLinkClasses("/skills")}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={mobileLinkClasses("/contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
