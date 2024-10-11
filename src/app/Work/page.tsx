"use client";
import Nav from "../components/nav";
import RectangleImage from "../../app/images/Rectangle 41.png";
import { useState } from "react";
// Import other images

export default function Work() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "asjer",
      image: RectangleImage,
      name: "Asjer Project 1",
      year: "2024",
    },
    {
      id: "timur",
      image: RectangleImage,
      name: "Timur Project 1",
      year: "2024",
    },
    {
      id: "asjer",
      image: RectangleImage,
      name: "Asjer Project 2",
      year: "2023",
    },
    {
      id: "timur",
      image: RectangleImage,
      name: "Timur Project 2",
      year: "2023",
    },
    {
      id: "asjer",
      image: RectangleImage,
      name: "Asjer Project 3",
      year: "2022",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.id === filter);

  return (
    <main>
      <Nav />
      <div className="p-[25px]">
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
              Our expertise{" "}
            </h1>
          </nav>
        </div>

        <div className="filter-container w-full max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center py-[50px] sm:py-[100px] gap-6 sm:gap-0">
          <div className="w-full sm:w-auto">
            <h1
              className="Gilroy-Regular text-slate-50 text-[24px] sm:text-[30px] font-[600] leading-[30px] sm:leading-[50px]"
              style={{
                fontSize: "clamp(20px, 4vw, 30px)",
              }}
            >
              Filter
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={() => setFilter("all")}
              className={`primaryFontRegular py-2 px-4 sm:py-3 sm:px-6 border-[1px] border-slate-50 rounded-full text-slate-50 text-[14px] sm:text-[15px] hover:bg-slate-50 hover:text-black ${
                filter === "all" ? "bg-slate-50  text-black" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("asjer")}
              className={`primaryFontRegular py-2 px-4 sm:py-3 sm:px-6 border-[1px] border-slate-50 rounded-full text-slate-50 text-[14px] sm:text-[15px] hover:bg-slate-50 hover:text-black ${
                filter === "asjer" ? "bg-slate-50 text-black" : ""
              }`}
            >
              Asjer
            </button>
            <button
              onClick={() => setFilter("timur")}
              className={`primaryFontRegular py-2 px-4 sm:py-3 sm:px-6 border-[1px] border-slate-50 rounded-full text-slate-50 text-[14px] sm:text-[15px] hover:bg-slate-50 hover:text-black ${
                filter === "timur" ? "bg-slate-50 text-black" : ""
              }`}
            >
              Timur
            </button>
          </div>
        </div>
        <div className="work-box-container w-full max-w-[1200px] mx-auto grid grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div key={index} className="w-full max-w-[580.778px]">
              <div>
                <img
                  className="w-full max-w-[580.778px] h-full"
                  src={project.image.src}
                  alt={project.name}
                />
              </div>
              <div className="flex justify-between items-center py-[15px] px-[10px]">
                <h1
                  className="Gilroy-Regular font-[600] text-slate-50"
                  style={{ fontSize: "clamp(12px, 3.5vw, 25px)" }}
                >
                  {project.name}
                </h1>
                <p
                  className="Gilroy-Regular font-[400] text-[#999999]"
                  style={{ fontSize: "clamp(10px, 3.5vw, 15px)" }}
                >
                  {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
