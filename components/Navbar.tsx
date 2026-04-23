"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { IoChevronDown, IoClose, IoMenu } from "react-icons/io5";

const navLinks = [
  { name: "About", href: "#", dropdown: true, active: true },
  { name: "What We Do", href: "#", dropdown: true },
  { name: "Jobs", href: "#", dropdown: true },
  { name: "Projects", href: "#" },
  { name: "TG Academy", href: "#" },
  { name: "Strategic Partnership", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Book a Consultation", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      {/* TOP ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Tobams Group logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop + Tablet Actions */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4">
          {/* Account */}
          <button
            className="flex items-center gap-2 lg:gap-3 h-11 lg:h-12 px-3 lg:px-4 bg-[#571244] text-white rounded hover:bg-[#4a153f]"
            aria-label="Account menu"
          >
            <span className="flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#DDD0DA]">
              <FiUser size={14} className="text-[#571244]" />
            </span>
            <span className="text-sm lg:text-lg font-semibold font-sans">
              Account
            </span>
            <IoChevronDown size={16} className="text-[#DDD0DA]" />
          </button>

          {/* CTA */}
          <Link
            href="#"
            className="flex items-center justify-center h-11 lg:h-12 px-4 lg:px-5 bg-[#EF4353] text-white text-sm lg:text-lg font-semibold rounded hover:bg-red-600 font-sans"
          >
            Take Assessment
          </Link>
        </div>

        {/* Mobile Menu Button ONLY */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex items-center justify-center w-8 h-8 rounded-sm bg-[#151515]"
        >
          {isOpen ? (
            <IoClose size={27} className="text-white" />
          ) : (
            <IoMenu size={27} className="text-white" />
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-[#DDD0DA]" />

      {/* NAVIGATION (Tablet + Desktop visible, Mobile hidden) */}
      <nav
        className="hidden sm:flex w-full justify-center py-2 md:py-3 lg:py-5"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl w-full px-6 lg:px-10 flex justify-center">
          <ul className="flex items-center justify-center gap-3 md:gap-5 lg:gap-6 flex-wrap lg:flex-nowrap">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 whitespace-nowrap transition font-sans ${
                    link.active
                      ? "text-[#571244] border-b border-[#571244] pb-1 font-semibold text-sm lg:text-lg"
                      : "text-[#151515] text-sm lg:text-lg"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <IoChevronDown size={14} className="lg:size-4" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-2 text-lg font-sans ${
                    link.active
                      ? "text-[#571244] font-semibold"
                      : "text-[#151515]"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <IoChevronDown size={16} />}
                </Link>
              </li>
            ))}

            <Link
              href="#"
              className="mt-4 flex items-center justify-center h-12 px-5 bg-[#EF4353] text-white text-lg font-semibold rounded font-sans"
            >
              Take Assessment
            </Link>

            <button className="mt-2 flex items-center justify-center gap-3 h-12 px-4 bg-[#571244] text-white rounded font-sans">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DDD0DA]">
                <FiUser size={14} className="text-[#571244]" />
              </span>
              Account
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
