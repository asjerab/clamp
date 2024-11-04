"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Logic to log out the user
      setIsLoggedIn(false);
    } else {
      // Logic to log in the user
      setIsLoggedIn(true);
    }
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

          <div className="flex gap-1 items-center">
            <div>
              <button
                className="py-2 px-4 border-[1px] border-[#0d0d0d] rounded-full border-opacity-15 hover:bg-[#f5f5f5]"
                onClick={handleAuthClick} // Updated to handle login/logout
              >Login</button>
            </div>
            {isMenuOpen ? (
              <div className="p-2 border-[1px] border-[#0d0d0d] rounded-full">
                <svg
                  onClick={toggleMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-[#1b1b1b] cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ) : (
              <div className="p-2 border-[1px] border-[#0d0d0d] rounded-full border-opacity-15 hover:bg-[#f5f5f5]">
                <svg
                  onClick={toggleMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-[#1b1b1b] cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="openMenuNav absolute right-0 border-[1px] h-auto border-opacity-5 border-[#3d3d3d] bg-white z-50 p-6 mt-[0.10rem] rounded-[16px] w-full max-w-[350px] shadow-xl">
            <nav>
              <ul className="space-y-2">
                {" "}
                {/* Adjusted spacing */}
                <li className="flex items-center justify-between text-black text-[18px] font-medium">
                  <Link
                    href="/"
                    className="Gilroy-Semibold flex justify-between items-center text-[22px] flex-1 px-2 py-2 rounded-md hover:bg-[#e0e7ff] duration-200 group" // Changed hover color
                  >
                    HOME
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="flex items-center justify-between text-black text-[18px] font-medium">
                  <Link
                    href="/About"
                    className="Gilroy-Semibold flex justify-between items-center text-[22px] flex-1 px-2 py-2 rounded-md hover:bg-[#e0e7ff] duration-200 group"
                  >
                    ABOUT US
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="flex items-center justify-between text-black text-[18px] font-medium">
                  <Link
                    href="/Work"
                    className="Gilroy-Semibold flex justify-between items-center text-[22px] flex-1 px-2 py-2 rounded-md hover:bg-[#e0e7ff] duration-200 group"
                  >
                    WORK
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="flex items-center justify-between text-black text-[18px] font-medium">
                  <Link
                    href="/Contact"
                    className="Gilroy-Semibold flex justify-between items-center text-[22px] flex-1 px-2 py-2 rounded-md hover:bg-[#e0e7ff] duration-200 group"
                  >
                    CONTACT
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </main>
  );
};

export default Nav;
