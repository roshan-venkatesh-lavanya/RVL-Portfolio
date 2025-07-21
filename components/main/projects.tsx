'use client';
import { PROJECTS } from "@/constants";
import React from "react";
import { ProjectCard } from "../sub/project-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  // Split projects into groups of 3 for each slide
  const chunkedProjects = [];
  for (let i = 0; i < PROJECTS.length; i += 3) {
    chunkedProjects.push(PROJECTS.slice(i, i + 3));
  }

  return (
    <section id="projects" className="w-full py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
        </span>
      </h1>

      <div className="relative">
        {/* Custom Navigation Arrows */}
        <div className="absolute top-1/2 -left-6 z-30 custom-prev cursor-pointer">
          <img src="/left-arrow.svg" alt="Prev" className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <div className="absolute top-1/2 -right-6 z-30 custom-next cursor-pointer">
          <img src="/right-arrow.svg" alt="Next" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
          }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {chunkedProjects.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {group.map((project, idx) => (
                  <ProjectCard
                    key={project.title + idx}
                    src={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
