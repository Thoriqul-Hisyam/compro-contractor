"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-green-700 shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PT Pilar Bambu Persada</h1>
        <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wide">
          {[
            { id: "home", label: "Beranda" },
            { id: "about", label: "Tentang" },
            { id: "services", label: "Layanan" },
            { id: "projects", label: "Proyek" },
            { id: "testimonials", label: "Testimoni" },
            { id: "contact", label: "Kontak" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-green-400 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
