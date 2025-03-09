"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Github, Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ openSearch, openFeedback }: { openSearch: () => void; openFeedback: () => void }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // Ensure correct theme after mounting
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Update dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Fetch GitHub stars after mount
  useEffect(() => {
    fetch("https://api.github.com/repos/mmahesh09/Careercraft")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch((err) => console.error("Failed to fetch stars:", err));
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Keyword Extractor", href: "/keywordextractor" },
    { name: "Project", href: "/projects" },  // The route to your Projects section
    { name: "Feedback", href: "/feedback" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 dark:bg-black/70 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-black dark:text-white transition-all">
            Career<span className="text-blue-500 dark:text-blue-400">Craft</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="group">
                {item.name === "Feedback" ? (
                  <button
                    onClick={openFeedback}
                    className="relative px-4 py-2 text-black dark:text-white transition-all duration-300 hover:text-blue-400"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full transform -translate-x-1/2" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-black dark:text-white transition-all duration-300 hover:text-blue-400",
                      pathname === item.href && "text-blue-500 dark:text-blue-400 font-medium"
                    )}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute left-1/2 bottom-0 h-[2px] w-6 bg-blue-500 dark:bg-blue-400 transform -translate-x-1/2 transition-all duration-300" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Buttons: GitHub, Search, Dark Mode */}
          <div className="flex items-center space-x-3">
            {/* GitHub Button */}
            <a
              href="https://github.com/mmahesh09/Careercraft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-w-[120px] rounded-lg border border-gray-300 dark:border-white/10 bg-white/90 dark:bg-black/30 px-3 py-2 text-black dark:text-white shadow-sm transition hover:bg-gray-100 dark:hover:bg-white/10 hover:shadow-md"
            >
              <Github className="size-5 opacity-80 hover:opacity-100" />
              <span className="text-sm">{stars !== null ? `${stars} Stars` : "Loading..."}</span>
            </a>

            {/* Search Button */}
            <button
              onClick={openSearch}
              className="flex items-center space-x-2 rounded-lg border border-gray-300 dark:border-white/10 bg-white/90 dark:bg-black/30 px-3 py-2 text-black dark:text-white shadow-sm transition hover:bg-gray-100 dark:hover:bg-white/10 hover:shadow-md"
            >
              <Search className="size-5 opacity-80 hover:opacity-100" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-gray-300 dark:border-white/10 bg-white/90 dark:bg-black/30 text-black dark:text-white transition hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-black dark:text-white md:hidden">
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-white dark:bg-black text-black dark:text-white flex flex-col items-center z-40 shadow-lg transition-all duration-300 transform ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              if (item.name === "Feedback") {
                openFeedback();
              }
              setMenuOpen(false);
            }}
            className="w-full py-3 text-center hover:bg-blue-500 dark:hover:bg-blue-400 transition"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Space to prevent overlap */}
      <div className="mt-20"></div>
    </>
  );
};

export default Navbar;
