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
      className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 mt-24 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start items-center lg:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Computer Science Student
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
            Rai Yashmit
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-[18px] md:text-[22px] text-gray-300 font-medium max-w-[600px] italic"
        >
          Not at my peak. Not even close.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 not-italic font-semibold">
            Leveling up.
          </span>
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-[14px] md:text-[16px] text-gray-400 my-3 max-w-[560px] leading-[1.8]"
        >
          Transforming curiosity into expertise through{" "}
          <span className="text-gray-200 font-medium">Artificial Intelligence</span>,{" "}
          <span className="text-gray-200 font-medium">Deep Learning</span>,{" "}
          <span className="text-gray-200 font-medium">Data Structures & Algorithms</span>,
          and{" "}
          <span className="text-gray-200 font-medium">scalable backend systems</span>.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1.1)}
          className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
        >
          <a
            href="/CV.pdf"
            target="_blank"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-medium w-full sm:w-auto"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="py-2 px-6 text-center text-gray-300 cursor-pointer rounded-lg border border-[#7042f88b] hover:border-[#7042f8] transition-all duration-300 font-medium w-full sm:w-auto"
          >
            View My Work
          </a>
        </motion.div>
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
