import pricingImage from "../images/pricingRectangle.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <main className="flex justify-center items-center text-center" id="Pricing">
      <div className="w-full max-w-[1200px] p-5">
        <nav className="flex flex-col items-center gap-4">
          <h1
            className="Gilroy-Bold text-[#0d0d0d] leading-[30px]"
            style={{ fontSize: "clamp(35px, 5vw, 45px)" }}
          >
            Find a plan that suits your needs
          </h1>
          <p
            className="Gilroy-Regular text-[15px] text-[#999999] w-full text-center"
            style={{
              fontSize: "clamp(15px, 2.5vw, 25px)",
              lineHeight: "clamp(12px, 3vw, 30px)",
            }}
          >
            If you’re unsure, feel free to contact us, and we’ll be happy to
            assist you.
          </p>
          <Tabs defaultValue="Monthly" className="w-full">
            <TabsList className="bg-[#00000028] rounded-full mb-5">
              <TabsTrigger className="rounded-[16px]" value="Monthly">
                Monthly
              </TabsTrigger>
              <TabsTrigger className="rounded-[16px]" value="Yearly">
                Yearly
              </TabsTrigger>
            </TabsList>
            <TabsContent className="w-full" value="Monthly">
              <div className="flex justify-between w-full gap-5 pricing-container">
                <div className="pricing-wrapper my-10 w-full">
                  <div className="flex flex-col items-start border-[1px] h-auto w-full border-opacity-25 border-[#3d3d3d] p-6 py-14 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out">
                    <nav className="flex flex-col items-start pb-[25px]">
                      <h1
                        className="Gilroy-Semibold text-[#0d0d0d] leading-[25px]"
                        style={{ fontSize: "clamp(40px, 5vw, 45px)" }}
                      >
                        Low
                      </h1>
                      <p className="Gilroy-Regular text-[#999999] text-[15px]">
                        For easy projects
                      </p>
                    </nav>
                    <div className="w-full">
                      <h1
                        className="flex flex-col items-center justify-center Gilroy-Semibold text-center text-[#0d0d0d] leading-[25px] py-[55px]"
                        style={{
                          fontSize: "clamp(40px, 5vw, 45px)",
                          paddingTop: "clamp(25px, 5vw, 55px)",
                          paddingBottom: "clamp(25px, 5vw, 55px)",
                        }}
                      >
                        $100
                      </h1>
                    </div>
                    <div className="w-full">
                      <Button className="w-full bg-[#0d0d0d] text-[#ffffff] hover:bg-[#1b1b1b] hover:text-[#dddddd] rounded-[16px]">
                        Get Started
                      </Button>
                    </div>
                    <div className="pt-10 flex flex-col items-start gap-2">
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" pricing-wrapper my-10 w-full">
                  <div className="flex flex-col items-start border-[1px] h-auto w-full border-opacity-25 border-[#3d3d3d] p-6 py-14 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out">
                    <nav className="flex flex-col items-start pb-[25px]">
                      <h1
                        className="Gilroy-Semibold text-[#0d0d0d] leading-[25px]"
                        style={{ fontSize: "clamp(40px, 5vw, 45px)" }}
                      >
                        Medium
                      </h1>
                      <p className="Gilroy-Regular text-[#999999] text-[15px]">
                        For more creative sites
                      </p>
                    </nav>
                    <div className="w-full">
                      <h1
                        className="Gilroy-Semibold text-center text-[#0d0d0d] leading-[25px] py-[55px]"
                        style={{
                          fontSize: "clamp(40px, 5vw, 45px)",
                          paddingTop: "clamp(25px, 5vw, 55px)",
                          paddingBottom: "clamp(25px, 5vw, 55px)",
                        }}
                      >
                        $150
                      </h1>
                    </div>
                    <div className="w-full">
                      <Button className="w-full bg-[#0d0d0d] text-[#ffffff] hover:bg-[#1b1b1b] hover:text-[#dddddd] rounded-[16px]">
                        Get Started
                      </Button>
                    </div>
                    <div className="pt-10 flex flex-col items-start gap-2">
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" pricing-wrapper my-10 w-full pricing-container">
                  <div className="flex flex-col items-start border-[1px] h-auto w-full border-opacity-25 border-[#3d3d3d] p-6 py-14 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out">
                    <nav className="flex flex-col items-start pb-[25px]">
                      <h1
                        className="Gilroy-Semibold text-[#0d0d0d] leading-[25px]"
                        style={{ fontSize: "clamp(40px, 5vw, 45px)" }}
                      >
                        High
                      </h1>
                      <p className="Gilroy-Regular text-[#999999] text-[15px]">
                        For more high end sites{" "}
                      </p>
                    </nav>
                    <div className="w-full">
                      <h1
                        className="Gilroy-Semibold text-center text-[#0d0d0d] leading-[25px] py-[55px]"
                        style={{
                          fontSize: "clamp(40px, 5vw, 45px)",
                          paddingTop: "clamp(25px, 5vw, 55px)",
                          paddingBottom: "clamp(25px, 5vw, 55px)",
                        }}
                      >
                        $250
                      </h1>
                    </div>
                    <div className="w-full">
                      <Button className="w-full bg-[#0d0d0d] text-[#ffffff] hover:bg-[#1b1b1b] hover:text-[#dddddd] rounded-[16px]">
                        Get Started
                      </Button>
                    </div>
                    <div className="pt-10 flex flex-col items-start gap-2">
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Yearly">
              <div className="flex justify-between gap-5 w-full pricing-container">
                <div className=" pricing-wrapper my-10 w-full">
                  <div className="flex flex-col items-start border-[1px] h-auto w-full border-opacity-25 border-[#3d3d3d] p-6 py-14 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out">
                    <nav className="flex flex-col items-start pb-[25px]">
                      <h1
                        className="Gilroy-Semibold text-[#0d0d0d] leading-[25px]"
                        style={{ fontSize: "clamp(40px, 5vw, 45px)" }}
                      >
                        Low
                      </h1>
                      <p className="Gilroy-Regular text-[#999999] text-[15px]">
                        For easy projects
                      </p>
                    </nav>
                    <div className="w-full">
                      <h1
                        className="Gilroy-Semibold text-center text-[#0d0d0d] leading-[25px] py-[55px]"
                        style={{
                          fontSize: "clamp(40px, 5vw, 45px)",
                          paddingTop: "clamp(25px, 5vw, 55px)",
                          paddingBottom: "clamp(25px, 5vw, 55px)",
                        }}
                      >
                        $550
                      </h1>
                    </div>
                    <div className="w-full">
                      <Button className="w-full bg-[#0d0d0d] text-[#ffffff] hover:bg-[#1b1b1b] hover:text-[#dddddd] rounded-[16px]">
                        Get Started
                      </Button>
                    </div>
                    <div className="pt-10 flex flex-col items-start gap-2">
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" pricing-wrapper my-10 w-full">
                  <div className="flex flex-col items-start border-[1px] h-auto w-full border-opacity-25 border-[#3d3d3d] p-6 py-14 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out">
                    <nav className="flex flex-col items-start pb-[25px]">
                      <h1
                        className="Gilroy-Semibold text-[#0d0d0d] leading-[25px]"
                        style={{ fontSize: "clamp(40px, 5vw, 45px)" }}
                      >
                        Medium
                      </h1>
                      <p className="Gilroy-Regular text-[#999999] text-[15px]">
                        For more creative sites
                      </p>
                    </nav>
                    <div className="w-full">
                      <h1
                        className="Gilroy-Semibold text-center text-[#0d0d0d] leading-[25px] py-[55px]"
                        style={{
                          fontSize: "clamp(40px, 5vw, 45px)",
                          paddingTop: "clamp(25px, 5vw, 55px)",
                          paddingBottom: "clamp(25px, 5vw, 55px)",
                        }}
                      >
                        $1000
                      </h1>
                    </div>
                    <div className="w-full">
                      <Button className="w-full bg-[#0d0d0d] text-[#ffffff] hover:bg-[#1b1b1b] hover:text-[#dddddd] rounded-[16px]">
                        Get Started
                      </Button>
                    </div>
                    <div className="pt-10 flex flex-col items-start gap-2">
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" pricing-wrapper my-10 w-full">
                  <div className="flex flex-col items-start border-[1px] h-auto w-full border-opacity-25 border-[#3d3d3d] p-6 py-14 rounded-[28px] hover:border-[#3a86ff] duration-150 ease-in-out">
                    <nav className="flex flex-col items-start pb-[25px]">
                      <h1
                        className="Gilroy-Semibold text-[#0d0d0d] leading-[25px]"
                        style={{ fontSize: "clamp(40px, 5vw, 45px)" }}
                      >
                        High
                      </h1>
                      <p className="Gilroy-Regular text-[#999999] text-[15px]">
                        For more high end sites{" "}
                      </p>
                    </nav>
                    <div className="w-full">
                      <h1
                        className="Gilroy-Semibold text-center text-[#0d0d0d] leading-[25px] py-[55px]"
                        style={{
                          fontSize: "clamp(40px, 5vw, 45px)",
                          paddingTop: "clamp(25px, 5vw, 55px)",
                          paddingBottom: "clamp(25px, 5vw, 55px)",
                        }}
                      >
                        $1500
                      </h1>
                    </div>
                    <div className="w-full">
                      <Button className="w-full bg-[#0d0d0d] text-[#ffffff] hover:bg-[#1b1b1b] hover:text-[#dddddd] rounded-[16px]">
                        Get Started
                      </Button>
                    </div>
                    <div className="pt-10 flex flex-col items-start gap-2">
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                      <p
                        className="Gilroy-Regular text-[#0d0d0d] flex items-center gap-2 "
                        style={{ fontSize: "clamp(12px, 2.5vw, 15px)" }}
                      >
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
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span>Something</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </nav>
      </div>
    </main>
  );
}
