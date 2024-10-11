import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="flex justify-center items-center p-10 h-full">
      <nav className="h-dvh pb-[100px] w-full max-w-[1200px]">
        <div className="w-full h-[80%]  flex justify-center items-start flex-col">
          <h1
            className="Gilroy-Bold text-[75px] text-slate-50 text-balance uppercase"
            style={{ 
              fontSize: "clamp(23px, 15vw, 155px)",
              lineHeight: "clamp(55px, 13vw, 125px)"
            }}
          >
            You <span className="text-[#3a86ff]">Dream</span> It,
            <br />
            We Code It
          </h1>
          <p
            className="Gilroy-Regular text-[15px] text-[#999999] w-full max-w-[768px] pl-[10px]"
            style={{ fontSize: "clamp(12px, 3.5vw, 35px)" }}
          >
            Clamp, we scale with you - scaling made easy.
          </p>
          <div className="flex items-center my-5 gap-4">
            <a href="#Pricing">
              <Button className="flex items-center gap-2 rounded-[16px] p-6 hover:gap-4 duration-150 ease-in-out">
                Explore{" "}
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
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-[16px] p-6 bg-transparent text-slate-50 border-slate-50"
            >
              Book us now{" "}
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
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </nav>
    </main>
  );
}
