"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ACHIEVEMENTS } from "@/constants";

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center px-6 md:px-20 py-20 w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[1100px] flex flex-col gap-6"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">ACHIEVEMENTS & CERTIFICATIONS</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Milestones & Recognition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#7042f8] transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)] hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="text-3xl mb-3">{achievement.icon}</div>
                
                <h3 className="text-white font-semibold text-[16px] mb-2">
                  {achievement.link ? (
                    <Link
                      href={achievement.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-colors"
                    >
                      {achievement.title} ↗
                    </Link>
                  ) : (
                    achievement.title
                  )}
                </h3>
                
                <p className="text-gray-400 text-[14px] leading-[1.7] mb-4">
                  {achievement.description}
                </p>
                
                <div className="text-[12px] text-gray-500 font-medium tracking-wide border-t border-[#2A0E61] pt-3 mt-auto">
                  {achievement.meta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
