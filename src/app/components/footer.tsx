import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function footer() {
  return (
    <main>
      <footer className="footer-container flex justify-center mt-[200px] items-center py-[75px] bg-[#f1f1f1]">
        <div className="w-full max-w-[1325px] px-[35px]">
          <nav className="footer-nav flex justify-center items-center pb-[15px]">
            <div className="flex flex-col items-center leading-[100px]">
              <h1 className="Gilroy-Semibold shalom-footer font-semibold text-[#0d0d0d] flex flex-col p-0 m-0 text-[100px]">
                clamp{" "}
              </h1>
              <div className="flex items-center gap-3 my-5">
                <Link href="/Contact">
                  <Button className="p-5 rounded-full">Contact</Button>
                </Link>
                <Link href="#accordion">
                  <Button variant="outline" className="p-5 rounded-full">
                    FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="pb-[25px] flex justify-center gap-5">
            <Link href="" className="Gilroy-Regular hover:-translate-y-2 duration-150 ease-in-out">
              About
            </Link>
            <Link href="" className="Gilroy-Regular hover:-translate-y-2 duration-150 ease-in-out">
              Work
            </Link>
            <Link href="" className="Gilroy-Regular hover:-translate-y-2 duration-150 ease-in-out">
              Contact
            </Link>
            <Link href="" className="Gilroy-Regular hover:-translate-y-2 duration-150 ease-in-out">
              Terms Of Service
            </Link>
            <Link href="" className="Gilroy-Regular hover:-translate-y-2 duration-150 ease-in-out">
              Privacy Policy
            </Link>
          </div>
          <hr />
          <div className="footer-footer flex justify-between items-center py-3">
            <div className="flex gap-5">
              <div className="scroll-container">
                <p className="Gilroy-Regular font-[600] scroll-holder text-[#0d0d0d] hover:text-[#6d6d6d] hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer">
                  © clamp 2024. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-[1px] border-[#0d0d0d] p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer size-[22px] text-[#0d0d0d]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="hover:translate-y-[-3px] duration-100 ease-in-out cursor-pointer size-[22px] text-[#0d0d0d]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
