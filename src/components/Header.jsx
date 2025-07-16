import { useEffect, useState } from "react";
import {
  CloudMoon,
  CloudSun,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Header({ type }) {
  const [theme, setTheme] = useState("dark");

  // Load mode dari localStorage saat pertama kali
  useEffect(() => {
    const html = document.documentElement;
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    html.classList.toggle("dark", saved === "dark");
  }, []);

  // Fungsi toggle
  const toggleMode = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Jika di halaman work
  if (type === "work") {
    return (
      <header className="w-full max-w-4xl mx-auto px-6 py-6 md:py-12 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* ← HOME */}
        <a
          href="/"
          className="group font-bold text-sm md:text-base relative inline-block opacity-0 animate-fadeIn delay-[400ms] transition duration-300"
        >
          <span className="relative z-10 group-hover:text-black dark:group-hover:text-white">
            ← HOME
          </span>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/30 dark:bg-white/30 group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 origin-left" />
        </a>

        {/* Toggle Mode */}
        <button
          title="Toggle Mode"
          onClick={toggleMode}
          className="justify-self-center text-2xl transition-all duration-300"
        >
          {theme === "dark" ? <CloudMoon /> : <CloudSun />}
        </button>

        {/* Judul */}
        <h1 className="font-bold text-sm md:text-base opacity-0 animate-fadeIn delay-[300ms] justify-self-end truncate">
          My Work
        </h1>
      </header>
    );
  }

  // Jika di halaman utama
  return (
    <header className="flex items-center justify-between gap-4 px-6 py-6 md:py-12 max-w-4xl mx-auto">
      {/* Nama */}
      <span className="font-bold text-left leading-tight">
        ACHMAD <br />
        FAUZI.
      </span>

      {/* Toggle Mode */}
      <button
        title="Toggle Mode"
        onClick={toggleMode}
        className="text-2xl transition-all duration-300"
      >
        {theme === "dark" ? <CloudMoon /> : <CloudSun />}
      </button>

      {/* → WORK */}
      <Link
        to="/work"
        className="group font-bold text-sm md:text-base relative inline-block opacity-0 animate-fadeIn delay-[400ms] transition duration-300"
      >
        <span className="relative z-10 group-hover:text-black dark:group-hover:text-white">
          → WORK
        </span>
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/30 dark:bg-white/30 group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 origin-left" />
      </Link>
    </header>
  );
}
