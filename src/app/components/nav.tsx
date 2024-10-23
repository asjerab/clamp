"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex justify-center items-center p-6">
      <nav className="w-full max-w-[1200px] relative py-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <h1
                className="Gilroy-Semibold font-[700] text-[45px] text-[#1b1b1b]"
                id="Logo"
              >
                clamp
              </h1>
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            {isMenuOpen ? (
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 text-[#1b1b1b] cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 text-[#1b1b1b] cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="openMenuNav absolute right-0 bg-[#1b1b1b] z-50 p-6 mt-2 rounded-[16px] w-full max-w-[350px]">
            <Link
              className="flex items-center justify-between text-slate-50 text-[20px] mb-2 p-2 hover:underline decoration-[#3a86ff] duration-150 ease-in-out"
              href="/About"
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <Link
              className="flex items-center justify-between text-slate-50 text-[20px] mb-2 p-2 hover:underline decoration-[#3a86ff] duration-150 ease-in-out"
              href="/Work"
            >
              Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
            <Link
              className="flex items-center justify-between text-slate-50 text-[20px] p-2 hover:underline decoration-[#3a86ff] duration-150 ease-in-out"
              href="/Contact"
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        )}
      </nav>
    </main>
  );
};

export default Nav;
