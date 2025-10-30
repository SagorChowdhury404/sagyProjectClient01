import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 items-center border-b border-gray-700 pb-10">
          {/* Left: Let's Work Together */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-[#FFB02E]">Let’s</span> work together
            </h2>
            <p className="text-sm mb-4">Based in Dubai</p>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-[#FFB02E] transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#FFB02E] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#FFB02E] transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Center: Email */}
          <div className="border border-gray-700 rounded-2xl p-6 hover:border-[#FFB02E] transition-colors">
            <p className="text-gray-400 mb-2">Looking for a hectic developer?</p>
            <a
              href="mailto:hello@cibc.com"
              className="text-[#FFB02E] text-lg font-semibold flex items-center gap-2"
            >
              hello@cibc.com <span>↗</span>
            </a>
          </div>

          {/* Right: Phone */}
          <div className="border border-gray-700 rounded-2xl p-6 hover:border-[#FFB02E] transition-colors">
            <p className="text-gray-400 mb-2">
              Want a more in-depth look at my work?
            </p>
            <a
              href="tel:+1234567890"
              className="text-[#FFB02E] text-lg font-semibold flex items-center gap-2"
            >
              +123 456 7890 <span>↗</span>
            </a>
          </div>
        </div>

        {/* Middle: Name */}
        <div className="text-center mt-10 mb-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FFB02E] tracking-widest">
            SAGAR CHOWDHURY
          </h2>
        </div>

        {/* Bottom: Footer Info */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 text-sm">
          <p>©2025, All Rights Reserved</p>
          <a
            href="#top"
            className="flex items-center gap-1 hover:text-[#FFB02E] transition-colors mt-4 md:mt-0"
          >
            Back to Top <FaArrowUp className="text-xs" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
