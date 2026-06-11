"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-6 md:px-20 py-20 w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[700px] flex flex-col items-center gap-6 text-center"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">GET IN TOUCH</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-gray-400 text-[16px] leading-[1.8] max-w-[550px]"
        >
          I&apos;m actively exploring AI, DSA, and system design. Open to discussing
          exciting projects, collaborations, and learning opportunities.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <Link
            href="https://github.com/shivvrai"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2A0E61] bg-[rgba(3,0,20,0.6)] text-gray-300 hover:border-[#7042f8] hover:text-white hover:shadow-[0_0_25px_rgba(112,66,248,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            <span>🐙</span>
            <span className="font-medium text-[14px]">GitHub</span>
          </Link>

          <Link
            href="https://linkedin.com/in/yashmitrai01"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2A0E61] bg-[rgba(3,0,20,0.6)] text-gray-300 hover:border-[#7042f8] hover:text-white hover:shadow-[0_0_25px_rgba(112,66,248,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            <span>💼</span>
            <span className="font-medium text-[14px]">LinkedIn</span>
          </Link>

          <Link
            href="mailto:yashmitrai01@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2A0E61] bg-[rgba(3,0,20,0.6)] text-gray-300 hover:border-[#7042f8] hover:text-white hover:shadow-[0_0_25px_rgba(112,66,248,0.2)] transition-all duration-300 hover:-translate-y-1"
          >
            <span>📧</span>
            <span className="font-medium text-[14px]">Email</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
