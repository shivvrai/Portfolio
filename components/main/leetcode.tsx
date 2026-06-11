"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import Image from "next/image";

type LeetCodeStats = {
  total: number;
  easy: number;
  medium: number;
  hard: number;
};

export const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/leetcode");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (!data.error) {
          setStats(data);
        }
      } catch (err) {
        console.error("LeetCode fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 relative w-full z-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[800px] flex flex-col items-center gap-6"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">CODING METRICS</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 text-center"
        >
          LeetCode Statistics
        </motion.h2>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-full skill-card-wrapper"
        >
          <div className="skill-card-inner flex flex-col md:flex-row items-center justify-between gap-8 p-8 relative">
            {/* Leetcode Logo & Profile */}
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="w-16 h-16 rounded-full bg-[#1e1e1e] border border-[rgba(255,161,22,0.3)] flex items-center justify-center shadow-[0_0_20px_rgba(255,161,22,0.15)]">
                {/* Leetcode Brand Icon (SVG) */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#FFA116]"
                >
                  <path
                    d="M16.102 16.225c-1.467 1.29-3.384 2.013-5.38 2.013-4.418 0-8.037-3.626-8.037-8.044 0-4.417 3.619-8.043 8.037-8.043 2.062 0 4.024.78 5.485 2.193.308.3.314.783.013 1.09-.3.307-.783.313-1.091.013-1.196-1.157-2.798-1.794-4.407-1.794-3.585 0-6.536 2.957-6.536 6.542 0 3.584 2.951 6.541 6.536 6.541 1.63 0 3.19-.59 4.394-1.649.33-.292.835-.262 1.127.067.291.33.261.834-.067 1.127l-.074.064z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.043 8.21c-.347-.35-.91-.354-1.261-.01-.352.345-.356.908-.01 1.26l.011.011 3.528 3.54-3.528 3.54c-.346.352-.343.915.01 1.26.353.345.916.342 1.261-.01l.01-.01 4.16-4.173c.338-.34.338-.888 0-1.228l-4.16-4.18H19.043z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.252 14.195H5.437c-.454 0-.822.368-.822.822 0 .453.368.822.822.822h7.815c.454 0 .822-.369.822-.822 0-.454-.368-.822-.822-.822z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <a
                href="https://leetcode.com/u/rai_yashmit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] font-semibold text-white hover:text-[#FFA116] transition-colors"
              >
                @rai_yashmit
              </a>
            </div>

            {/* Loading State or Stats */}
            <div className="flex-1 w-full z-10">
              {loading ? (
                <div className="flex flex-col gap-4 animate-pulse">
                  <div className="h-10 bg-[rgba(112,66,248,0.2)] rounded-lg w-full max-w-[200px] mx-auto md:mx-0"></div>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <div className="h-16 bg-[rgba(112,66,248,0.1)] rounded-lg flex-1"></div>
                    <div className="h-16 bg-[rgba(112,66,248,0.1)] rounded-lg flex-1"></div>
                    <div className="h-16 bg-[rgba(112,66,248,0.1)] rounded-lg flex-1"></div>
                  </div>
                </div>
              ) : stats ? (
                <div className="flex flex-col gap-6">
                  {/* Total Solved */}
                  <div className="text-center md:text-left">
                    <span className="text-gray-400 text-[14px]">Total Solved</span>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 flex items-baseline justify-center md:justify-start gap-2 mt-1">
                      {stats.total}
                      <span className="text-[14px] text-gray-500 font-normal">
                        Problems
                      </span>
                    </div>
                  </div>

                  {/* Difficulty Breakdown */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Easy */}
                    <div className="bg-[rgba(3,0,20,0.6)] border border-[rgba(0,184,163,0.3)] rounded-lg p-3 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[rgba(0,184,163,0.6)] transition-all">
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,184,163,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-[12px] text-gray-400 font-medium mb-1 z-10">
                        Easy
                      </span>
                      <span className="text-[20px] font-bold text-[#00b8a3] z-10">
                        {stats.easy}
                      </span>
                    </div>

                    {/* Medium */}
                    <div className="bg-[rgba(3,0,20,0.6)] border border-[rgba(255,192,30,0.3)] rounded-lg p-3 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[rgba(255,192,30,0.6)] transition-all">
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,192,30,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-[12px] text-gray-400 font-medium mb-1 z-10">
                        Medium
                      </span>
                      <span className="text-[20px] font-bold text-[#ffc01e] z-10">
                        {stats.medium}
                      </span>
                    </div>

                    {/* Hard */}
                    <div className="bg-[rgba(3,0,20,0.6)] border border-[rgba(255,55,95,0.3)] rounded-lg p-3 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[rgba(255,55,95,0.6)] transition-all">
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,55,95,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-[12px] text-gray-400 font-medium mb-1 z-10">
                        Hard
                      </span>
                      <span className="text-[20px] font-bold text-[#ff375f] z-10">
                        {stats.hard}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-red-400 text-center">
                  Could not load stats.
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
