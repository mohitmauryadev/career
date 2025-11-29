import React from "react";
import { motion } from "framer-motion";

export default function JobToolkit() {
  const sections = [
    {
      title: "Top Job Portals",
      items: [
        {
          category: "General & Broad-Based Portals",
          tools: [
            "Naukri.com: India’s largest job portal with roles across all industries.",
            "LinkedIn: Networking + job search; essential for professional branding.",
            "Indeed: Aggregated job listings from various sources.",
            "Foundit (formerly Monster): Long-standing job site for all sectors.",
            "Shine.com: Over 300,000 active job listings.",
          ],
        },
        {
          category: "Freshers & Internships",
          tools: [
            "Internshala: Top platform for internships & student opportunities.",
            "Freshersworld: Entry-level jobs for graduates.",
          ],
        },
        {
          category: "Tech & Startup Jobs",
          tools: [
            "Wellfound (AngelList): Startup roles with potential equity.",
            "Cutshort: Fast-matching for tech & product roles.",
            "Hirect: Direct chat with startup founders.",
            "Hirist: Tech-focused careers.",
          ],
        },
        {
          category: "Women-Focused Job Portals",
          tools: [
            "HerKey (Jobs for Her): Jobs for women restarting careers or seeking flexible roles.",
          ],
        },
        {
          category: "Local & Blue-Collar Jobs",
          tools: [
            "Apna: Hyperlocal jobs with language support.",
            "WorkIndia: Blue-collar and entry-level roles.",
          ],
        },
      ],
    },
    {
      title: "Company Research & Salary Comparison",
      items: [
        {
          category: "Salary & Company Insights",
          tools: [
            "Glassdoor: Company reviews, interview tips, salary insights.",
            "Payscale: Salary benchmarks by role & industry.",
            "6figr: Real-time, verified salary comparison tool.",
            "Michael Page Salary Tool: Professional-level salary benchmarks.",
          ],
        },
      ],
    },
    {
      title: "Interview Preparation Platforms",
      items: [
        {
          category: "Coding & Technical Interviews",
          tools: [
            "LeetCode: Best platform for coding interview prep.",
            "HackerRank: Used by companies for coding assessments.",
            "InterviewBit: Company-specific interview questions.",
            "AlgoExpert: Curated video explanations for coding problems.",
          ],
        },
        {
          category: "Mock Interview Platforms",
          tools: [
            "Huru: AI-powered interview practice.",
            "Pramp: Peer-to-peer mock interviews.",
            "Preplaced: 1-on-1 mock interviews with industry professionals.",
            "Exponent: Interview prep for FAANG-level roles.",
          ],
        },
        {
          category: "Aptitude & General Prep",
          tools: [
            "IndiaBix: Aptitude, reasoning, and verbal practice.",
            "Quora: Insights on company interview experiences.",
          ],
        },
      ],
    },
  ];

  return (
    
<section className="min-h-screen w-full relative py-20 px-4 md:px-10 text-white">
           <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.pixabay.com/video/2024/04/03/206779_large.mp4" type="video/mp4" />
      </video>

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
      >
        Job Seeker's Toolkit
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mt-4"
      >
        Your essential guide to job search, salary comparison, interview prep, and professional growth.
      </motion.p>

      {/* SECTION CARDS */}
      <div className="max-w-6xl mx-auto mt-16 space-y-16">
        {sections.map((section, idx) => (
          <div key={idx}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-6 
              bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            >
              {section.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="
                    p-6 rounded-2xl shadow-xl border border-white/10 
                    bg-white/10 backdrop-blur-xl 
                    hover:bg-white/20 hover:shadow-2xl transition-all"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    {item.category}
                  </h3>

                  <ul className="list-disc list-inside text-gray-200 space-y-1">
                    {item.tools.map((tool, j) => (
                      <li key={j}>{tool}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
