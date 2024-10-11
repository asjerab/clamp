"use client";

import Nav from "../components/nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export default function About() {
  const [selectedMember, setSelectedMember] = useState("Asjer");

  return (
    <main>
      <Nav />
      <div className="px-[25px]">
        <div
          className="w-full max-w-[1200px] mx-auto"
          style={{
            paddingTop: "clamp(25px, 5vw, 100px)",
            paddingBottom: "clamp(25px, 5vw, 100px)",
          }}
        >
          <nav>
            <h1
              className="Gilroy-Semibold text-slate-50 text-balance leading-[50px] w-full"
              style={{
                fontSize: "clamp(25px, 9vw, 100px)",
                lineHeight: "clamp(30px, 5vw, 50px)",
                paddingTop: "clamp(25px, 5vw, 100px)",
              }}
            >
              Welcome to Clamp{" "}
            </h1>
            <p
              className="Gilroy-Regular text-[15px] text-[#999999] w-full max-w-[500px] pt-3"
              style={{
                paddingBottom: "clamp(25px, 5vw, 100px)",
              }}
            >
              Clamp is a team of developers and designers who are passionate
              about creating beautiful and functional websites.
            </p>
          </nav>
          <div className="mt-[50px]">
            <div>
              <h1 className="Gilroy-Semibold text-slate-50 text-balance text-[25px] pb-4">
                Meet the team
              </h1>
            </div>
            <nav>
              <div className="flex gap-5 flex-wrap">
                <div
                  className={`flex justify-between items-center gap-5 w-full max-w-[500px] h-auto p-6 bg-[#111111] rounded-[8px] border-[1px] ${
                    selectedMember === "Asjer"
                      ? "border-[#3a86ff]"
                      : "border-[#222222]"
                  } cursor-pointer`}
                  onClick={() => setSelectedMember("Asjer")}
                >
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarImage
                        width={100}
                        height={100}
                        src="https://github.com/asjerab.png"
                        alt="Asjer About Profile img"
                      />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="Gilroy-Regular text-slate-50 leading-[10px] text-[20px]">
                        Asjer Bereket
                      </h1>
                      <p className="Gilroy-Regular text-slate-50 leading-[10px] text-[16px]">
                        Front-end Dev, Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex justify-between items-center gap-5 w-full max-w-[500px] h-auto p-6 bg-[#111111] rounded-[8px] border-[1px] ${
                    selectedMember === "Timur"
                      ? "border-[#3a86ff]"
                      : "border-[#222222]"
                  } cursor-pointer`}
                  onClick={() => setSelectedMember("Timur")}
                >
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarImage
                        width={100}
                        height={100}
                        src="https://github.com/tigua002.png"
                        alt="Timur About Profile img"
                      />
                      <AvatarFallback>TG</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="Gilroy-Regular text-slate-50 leading-[10px] text-[20px]">
                        Timur Gusarov
                      </h1>
                      <p className="Gilroy-Regular text-slate-50 leading-[15px] text-[16px]">
                        Back-end Dev, IT-Operator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="mt-10">
            {selectedMember === "Asjer" && (
              <p className="Gilroy-Regular text-[25px] text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                porro deserunt illo eligendi minus architecto, laboriosam dolor
                provident perferendis maiores sed voluptatum saepe repudiandae
                eos aspernatur placeat cum nesciunt commodi eum sapiente iusto.
                Beatae ipsa accusantium eligendi vel laborum expedita rerum,
                libero velit quis nemo debitis illum sapiente eum unde natus
                quisquam, nisi nam cupiditate ad. Explicabo magnam obcaecati
                esse labore deleniti voluptatem,
              </p>
            )}
            {selectedMember === "Timur" && (
              <p className="Gilroy-Regular text-[25px] text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                porro deserunt illo eligendi minus architecto, laboriosam dolor
                provident perferendis maiores sed voluptatum saepe repudiandae
                eos aspernatur placeat cum nesciunt commodi eum sapiente iusto.
                Beatae ipsa accusantium eligendi vel laborum expedita rerum,
                libero velit quis nemo debitis illum sapiente eum unde natus
                quisquam, nisi nam cupiditate ad. Explicabo magnam obcaecati
                esse labore deleniti voluptatem,ad. Explicabo magnam obcaecati
                esse labore deleniti voluptatem,
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
