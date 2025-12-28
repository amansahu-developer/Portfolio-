import React, { useState } from "react";
import BikeRetal from "../assets/BikeRental.png";
import GravityTeam from "../assets/Gravity Team.png";

const projects = [
  {
    tech: ["#React", "#Tailwind", "#Firebase Auth", "#Vercel"],
    title: "Bike Rental App",
    highlight: "bike rental",
    desc: "A responsive bike rental app with booking and authentication.",
    img: BikeRetal,
    ProjectLink: "https://bike-rental-lac-omega.vercel.app/",
  },
  {
    tech: ["#React", "#Tailwind", "#GSAP", "#Vercel"],
    title: "Gravity Team Landing Page",
    highlight: "Gravity Team",
    desc: "A smooth animated landing page inspired by Gravity Team design.",
    img: GravityTeam,
    ProjectLink: "https://gravity-team-psi.vercel.app/",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < projects.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="ProjectSection mt-20 px-3 lg:px-10 font-[Urbanist] max-w-[1600px] mx-auto">
      {/* Heading */}
      <div className="Heading p-5 max-w-[750px] lg:max-w-[1500px] mx-auto">
        <h3 className="text-xl uppercase text-[#fafafaad] pb-5"> Recent projects</h3>
      </div>

      {/* SLIDER CONTAINER */}
      <div className="relative overflow-hidden max-w-[750px] lg:max-w-[1500px] mx-auto">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="min-w-full flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-[#242526]"
            >
              {/* LEFT SECTION */}
              <div className="bg-white text-black w-full lg:w-[50%] p-10 flex flex-col gap-20">
                <div className="flex gap-3 flex-wrap">
                  {p.tech.map((t, idx) => (
                    <h2
                      key={idx}
                      className=" Tech text-lg border border-[#353535] rounded-full py-2 px-5 whitespace-nowrap  "
                    >
                      {t}
                    </h2>
                  ))}
                </div>

                <div className="flex flex-col gap-5">
                  <h2
                    className="capitalize text-[32px] md:text-[40px] leading-[45px] md:leading-[60px] sm:max-w-[500px] font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: p.desc.replace(
                        p.highlight,
                        `<span class='text-[#ff3b3b] whitespace-nowrap font-semibold'>${p.highlight}</span>`
                      ),
                    }}
                  ></h2>

                  <a href={p.ProjectLink} target="_blank">
                    <button className="cursor-pointer whitespace-nowrap flex justify-center items-center text-lg border w-fit rounded-full py-2 px-6 bg-[#ff3b3b] text-white hover:bg-[#ff3b3b]/85 transition-all duration-200">
                      See project
                    </button>
                  </a>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="w-full lg:w-[50%] p-6 flex items-center justify-center py-16 lg:py-0">
                <div className="h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden">
                  <a href={p.ProjectLink} target="_blank"><img
                    src={p.img}
                    alt="preview"
                    className="w-full h-full object-cover sm:object-top"
                  /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDER BUTTONS */}
        <div className="SlideBtn flex justify-center items-center gap-5 pt-10">
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`group p-3 border border-white rounded-full rotate-180 transition-all
      ${
        index === 0
          ? "opacity-60 cursor-not-allowed"
          : "cursor-pointer hover:bg-white"
      }`}
          >
            <svg
              className={`w-5 h-5 transition-all duration-300 
      ${index === 0 ? "text-white/60" : "text-white group-hover:text-black"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            disabled={index === projects.length - 1}
            className={`group p-3 border border-white rounded-full transition-all
      ${
        index === projects.length - 1
          ? "opacity-60 cursor-not-allowed"
          : "cursor-pointer hover:bg-white"
      }`}
          >
            <svg
              className={`w-5 h-5 transition-all duration-300
      ${
        index === projects.length - 1
          ? "text-white/60"
          : "text-white group-hover:text-black"
      }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
