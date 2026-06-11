"use client";

import { motion } from "framer-motion";
import { SkillText } from "@/components/sub/skill-text";
import { SKILL_CATEGORIES } from "@/constants";

const CATEGORY_ICONS: Record<string, string> = {
  Languages: "⟨/⟩",
  "Backend & Frameworks": "⚡",
  "Machine Learning": "🧠",
  "Data & Databases": "🗄️",
  "Computer Vision & Visualization": "👁️",
  "Core Concepts": "🏗️",
  "Tools & Platforms": "🔧",
};

const CATEGORY_ACCENTS: Record<string, string> = {
  Languages: "from-violet-500 to-fuchsia-500",
  "Backend & Frameworks": "from-cyan-500 to-blue-500",
  "Machine Learning": "from-purple-500 to-pink-500",
  "Data & Databases": "from-emerald-500 to-teal-500",
  "Computer Vision & Visualization": "from-amber-500 to-orange-500",
  "Core Concepts": "from-indigo-500 to-violet-500",
  "Tools & Platforms": "from-sky-500 to-cyan-500",
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="skills-bento mt-6 z-10">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: catIndex * 0.12,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="skill-card-wrapper"
          >
            <div className="skill-card-inner flex flex-col gap-4">
              {/* Count badge */}
              <div className="skill-count">{category.skills.length}</div>

              {/* Category header */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="skill-icon-ring">
                  {CATEGORY_ICONS[category.title] || "✦"}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] leading-tight">
                    {category.title}
                  </h3>
                  <div
                    className={`h-[2px] w-8 mt-1.5 rounded-full bg-gradient-to-r ${
                      CATEGORY_ACCENTS[category.title] ||
                      "from-purple-500 to-cyan-500"
                    }`}
                  />
                </div>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 relative z-10 mt-1">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.06,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="skill-chip"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
