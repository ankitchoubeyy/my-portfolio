"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Services",
    path: "#services",
  },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-100 border-b-2 border-[#86abc7] z-40">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-5xl text-white font-semibold">
          Ankit
        </Link>
        <div className="mobile-menu blcok md:hidden">
          {!navbarOpen ? (
            <button
              className="flex items-center border rounded px-3 py-2 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="flex items-center border rounded px-3 py-2 text-slat-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5 text-white" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0sm:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen?<MenuOverlay links={navLinks}/>: null}
    </nav>
  );
}

export default Navbar;
