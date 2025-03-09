"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">CareerCraft</h2>
            <p className="mt-2 text-gray-400">
              Turn job descriptions into opportunities with AI.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <Link href="/about" className="text-gray-400 hover:text-white transition">
              About Us
            </Link>
            <Link href="/keyword-extractor" className="text-gray-400 hover:text-white transition">
              Keyword Extractor
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition">
              Projects
            </Link>
            <Link href="/feedback" className="text-gray-400 hover:text-white transition">
              Feedback
            </Link>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <Link href="https://github.com/mmahesh09" target="_blank">
                <Github className="text-gray-400 hover:text-white transition" />
              </Link>
              <Link href="https://www.linkedin.com/in/maheshbabu23/" target="_blank">
                <Linkedin className="text-gray-400 hover:text-white transition" />
              </Link>
              <Link href="https://twitter.com/DevMahesh23" target="_blank">
                <Twitter className="text-gray-400 hover:text-white transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm mt-6">
          <p>© {new Date().getFullYear()} CareerCraft. All rights reserved.</p>
          <p>Built with ❤️ by CareerCraft Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
