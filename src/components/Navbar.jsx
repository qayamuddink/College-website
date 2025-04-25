import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Student Corner", path: "/student-corner" },
  { name: "Admission", path: "/admission" },
  { name: "Academics", path: "/academics" },
  { name: "Career", path: "/career" },
  { name: "Gallery", path: "/gallery" },
  { name: "Major Events", path: "/major-events" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-red-800 text-white relative">
      {/* Logo & Heading (Desktop) */}
      <div className="hidden md:flex items-center py-2 pl-4">
        <img
          src="./public/red logo.jpeg"
          alt="Logo"
          className="h-20 w-auto mr-4 mt-2"
        />
        <div className="w-3"></div>
        <span className="absolute left-1/2 transform -translate-x-1/2 text-4xl ml-3 font-bold whitespace-nowrap">
          CARBON INSTITUTE OF PARAMEDICAL SCIENCE, KASGANJ
        </span>
      </div>

      {/* Navbar */}
      <nav className="p-4 md:py-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Mobile Menu Button */}
          <button className="md:hidden z-50 relative" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Heading */}
          <h1 className="text-base sm:text-lg font-bold mx-auto md:hidden text-center px-4">
            Carbon Institute of Paramedical Science, Kasganj
          </h1>

          {/* Desktop Menu */}
          <div className="mx-auto flex justify-center">
          <ul className="hidden md:flex space-x-8 ml-auto ">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="hover:text-gray-300">
                  {name}
                </Link>
              </li>
            ))}
          </ul></div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button className="absolute top-5 right-5" onClick={toggleMenu}>
          <X size={28} />
        </button>
        <ul className="mt-16 space-y-4 pl-6">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="hover:text-gray-300 text-lg"
                onClick={toggleMenu}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Overlay behind Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
