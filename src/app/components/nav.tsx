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
                className="Gilroy-Semibold font-[700] text-[45px] text-slate-50"
                id="Logo"
              >
                clamp
              </h1>
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link
              className="hidden-nav-menu-item Gilroy-Medium text-[20px] text-slate-50"
              href="/About"
            >
              About
            </Link>
            <Link
              className="hidden-nav-menu-item Gilroy-Medium text-[20px] text-slate-50"
              href="/Work"
            >
              Work
            </Link>
            <Link
              className="hidden-nav-menu-item Gilroy-Medium text-[16px] text-slate-50 bg-[#3a86ff] px-4 py-2 rounded-[16px]"
              href="/Contact"
            >
              Contact
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="hidden-nav-menu-icon hidden size-10 text-slate-50"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {/*           <div className="relative">
            {" "}
            <button
              onClick={toggleMenu}
              className="Gilroy-Medium flex items-center gap-2 border-[2px] border-[#ffffff] border-opacity-[25%] px-[20px] py-[8px] rounded-[16px] text-slate-50 hover:bg-[#18181b] hover:border-[#18181b]"
            >
              <p className="font-medium text-[20px]">
                {isMenuOpen ? "Close" : "Menu"}
              </p>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-slate-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-slate-50"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
            {isMenuOpen && (
              <div className="Menu-wrapper">
                <div className="Menu absolute right-0 mt-2 w-[360px] h-auto border-[1px] border-[#111111] border-opacity-[25%] p-4 rounded-[8px] bg-[#18181b] z-10">
                  <Link
                    href="/About"
                    className="flex justify-between items-center my-2"
                  >
                    <p className="Gilroy-Semibold text-[17px] text-slate-50">
                      About
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-slate-50"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/"
                    className="flex justify-between items-center my-4"
                  >
                    <p className="Gilroy-Semibold text-[17px] text-slate-50">
                      Portfolio
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-slate-50"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/"
                    className="flex justify-between items-center my-4"
                  >
                    <p className="Gilroy-Semibold text-[17px] text-slate-50">
                      Pricing
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-slate-50"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                  <Link href="/contact">
                    <button
                      className="bg-[#ffffff] w-full p-[7px] my-2 rounded-[8px]"
                      id="button"
                    >
                      <p className="Gilroy-Semibold text-slate-[#111111]">
                        Contact
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </nav>
    </main>
  );
};

export default Nav;
