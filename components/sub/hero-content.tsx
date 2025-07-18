"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            My Portfolio Website
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              ROSHAN
            </span>{" "}
            VENKATESH LAVANYA
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I have a strong foundation in Full Stack Software Development, 
          Artificial Intelligence, Machine Learning, Cloud Computing, and Data Science. 
          I specialize in building scalable applications, developing intelligent systems, 
          and deriving insights through data-driven analysis. With hands-on experience 
          across diverse tools and technology stacks, I bring a multidisciplinary approach to 
          solving real-world challenges. Explore my portfolio to see how I apply these skills through impactful projects...
        
        </motion.p>

      <motion.a
  variants={slideInFromLeft(1)}
  href="https://drive.google.com/file/d/1oN_lj7JKk7uYHkktFA2QpjRIk0xTWtpn/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center justify-center px-6 py-3 mt-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_20px_rgba(112,66,248,0.4)]"
>
  <svg
    className="w-5 h-5 mr-2 text-white group-hover:translate-y-0.5 transition-transform"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4v16m8-8H4"
    />
  </svg>
  View Resume
</motion.a>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
