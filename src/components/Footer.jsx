import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* School Info */}
        <div>
          <h2 className="text-xl font-bold">Carbon Institute of Paramedical Science, Kasganj</h2>
          <p className="mt-2">Mohalla Nawab, Dhanmill Road, Near Masjid Farooq e Aazam, Kasganj, UP</p>
          <p>Email: info@cips.com</p>
          <p>Phone: +91 8868865268, 9412359913</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/admission" className="hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" className="hover:text-gray-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>


      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p>&copy; 2025 Carbon Institute of Paramedical Science
        . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
