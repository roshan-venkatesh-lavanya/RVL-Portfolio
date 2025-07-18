"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 pt-20 text-gray-300">
      {/* Heading */}
      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-center text-white mb-12"
      >
        Education{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          &amp;
        </span>{" "}
        Internships
      </motion.h1>

      {/* Education Section */}
      <div className="w-full max-w-4xl text-left space-y-4 px-2">
        <h2 className="text-xl font-semibold text-white">🎓 Education</h2>
        <div>
          <p>
            <strong>Northeastern University</strong>, Boston, MA <br />
            <em>Master of Science in Computer Science and Information Science</em> (Jan 2025 – Dec 2026, Expected)
            <br />
            <span className="text-sm text-gray-400">
              Coursework: Algorithms, Program Design, Web Development, Database Management
            </span>
          </p>
        </div>
        <div>
          <p>
            <strong>Vellore Institute of Technology</strong>, Chennai, India <br />
            <em>Bachelor of Technology in Computer Science</em> (2020 – 2024)
            <br />
            <span className="text-sm text-gray-400">
              Coursework: OOP, Data Structures, DBMS, OS, Virtualization & Cloud, Computer Vision & Image Processing, AI, Robotics, IoT, Software Engineering
            </span>
          </p>
        </div>
      </div>

      {/* Lock Centered */}
      <div className="my-12 relative">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        {/* Optional: faint animation bg */}
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] opacity-40 z-[-1]"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Internships Section */}
      <div className="w-full max-w-4xl text-left space-y-4 px-2">
        <h2 className="text-xl font-semibold text-white">💼 Internships</h2>
        <div>
          <p>
            <strong>Internship on AI</strong> — Pantech Solutions, Chennai <br />
            <span className="text-sm text-gray-400">
              Worked with pre-trained models in ML, DL, OpenCV, and Reinforcement Learning.
              Explored foundation models, use cases for generative AI, and AWS Generative AI services.
            </span>
          </p>
        </div>
        <div>
          <p>
            <strong>Web Development Intern</strong> — The Sparks Foundation, Singapore (Remote) <br />
            <span className="text-sm text-gray-400">
              Built a responsive payment gateway with email automation, modern UI, and secure transactions using JavaScript, Bootstrap, HTML5, and CSS3.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
