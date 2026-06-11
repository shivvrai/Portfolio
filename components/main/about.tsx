"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-6 md:px-20 py-20 w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[900px] flex flex-col gap-6"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">ABOUT ME</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Who I Am
        </motion.h2>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-5 text-gray-300 text-[16px] leading-[1.9]"
        >
          <p>
            I&apos;m a Computer Science student at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              Lovely Professional University
            </span>{" "}
            with a strong foundation in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              Data Structures & Algorithms, Machine Learning, and System Design
            </span>
            . I love building efficient, scalable solutions and exploring the deep
            technical concepts that power modern software systems.
          </p>

          <p>
            Currently, I&apos;m deeply exploring{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              AI technologies, advanced DSA patterns, and system design fundamentals
            </span>{" "}
            to understand how complex systems work under the hood. My journey involves
            learning the &quot;why&quot; behind technology—from distributed systems architecture
            to deep learning model optimization.
          </p>

          <p>
            I enjoy solving complex algorithmic problems, implementing cutting-edge ML
            models from scratch, and designing robust backend systems. I&apos;m a quick
            learner who thrives in challenging environments and stays updated with
            emerging technologies in AI, cloud computing, and backend development.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
