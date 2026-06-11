"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { EDUCATION_DATA } from "@/constants";

export const Education = () => {
  return (
    <section
      id="education"
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
          <h1 className="Welcome-text text-[13px]">EDUCATION</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.3)}
          className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 md:p-8 hover:border-[#7042f8] transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-white font-semibold text-[20px]">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-gray-400 text-[15px] mt-1">
                {EDUCATION_DATA.institution}
              </p>
            </div>
            <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b]">
              <span className="Welcome-text text-[13px] font-semibold">
                CGPA: {EDUCATION_DATA.cgpa}
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-[14px] mb-5">
            {EDUCATION_DATA.specialization}
          </p>

          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold text-[15px] mb-4">
            Key Coursework & Learning Areas:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {EDUCATION_DATA.coursework.map((course, index) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-[rgba(112,66,248,0.06)] border border-[#2A0E61] rounded-lg px-4 py-3 text-gray-300 text-[14px] hover:border-[#7042f8] hover:bg-[rgba(112,66,248,0.1)] transition-all duration-300"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
