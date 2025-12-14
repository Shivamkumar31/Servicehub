// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">ServiceHub</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Connecting trusted professionals with customers for home repair, 
            photography, tutoring, pet care & more.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Services</li>
            <li className="hover:text-white transition cursor-pointer">Become a Worker</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white transition cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Contact Us</h3>

          <p className="text-gray-400 text-sm">📍 123 Startup Street, Bangalore, India</p>
          <p className="text-gray-400 text-sm mt-1">📧 support@servicehub.com</p>
          <p className="text-gray-400 text-sm mt-1">📞 +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ServiceHub — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
