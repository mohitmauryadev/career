import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Users, GraduationCap, Briefcase } from "lucide-react";

export default function Insights() {
  const insights = [
    {
      icon: <Lightbulb className="w-7 h-7 text-yellow-400 drop-shadow-glow" />,
      title: "Interdisciplinary Careers Are the Future",
      text: `The boundaries between academic streams are disappearing. Hybrid skills are the future.
      
- Commerce + Data Analytics = FinTech  
- Arts + UX = Tech Industry  
- Science + Economics = AI Policy  

Build a skillset that connects multiple fields.`,
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-green-400 drop-shadow-glow" />,
      title: "The Two-Step Career Plan",
      text: `Most career growth happens with specialization:
      
- Science → M.Tech / MBA / MSc  
- Commerce → CA / CFA / MBA  
- Arts → LLB / Journalism / UPSC  

UG = Foundation → PG = Career Accelerator.`,
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-blue-400 drop-shadow-glow" />,
      title: "Align Aptitude with Opportunity",
      text: `Your strengths decide your best path:
      
- Analytical → Engineering / Data Science  
- Creative → Media / Architecture  
- Empathetic → Medicine / Psychology  

Best career = Talent + Demand + High Income.`,
    },
    {
      icon: <Users className="w-7 h-7 text-purple-400 drop-shadow-glow" />,
      title: "Importance of Soft Skills",
      text: `Top companies value soft skills equally:
      
- Communication  
- Leadership  
- Creativity  
- Critical Thinking  

Develop them through projects & real-world experience.`,
    },
    {
      icon: <Briefcase className="w-7 h-7 text-red-400 drop-shadow-glow" />,
      title: "Internships Matter Most",
      text: `Internships improve confidence & jobs:
      
- Semester Internships  
- Live Projects  
- Freelancing  
- Certifications  

Experience beats just theory.`,
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-yellow-400 drop-shadow-glow" />,
      title: "Class 12 Stream Does Not Decide Destiny",
      text: `Your stream at age 16 is not a lifetime tag:
      
- Science → Law  
- Commerce → Psychology  
- Arts → UX / Tech  

Future belongs to flexible learners.`,
    },
  ];

  return (
    <section className="min-h-screen w-full relative py-20 px-4 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black">

      {/* PAGE TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-lg"
      >
        Strategic Insights for a Successful Future
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mt-4"
      >
        Key insights to help students from Science, Commerce, and Arts make smarter decisions.
      </motion.p>

      {/* CARDS */}

      <div className="max-w-6xl mx-auto mt-16 space-y-10">
        {insights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="
              backdrop-blur-xl 
              bg-white/10 
              border border-white/20 
              shadow-xl 
              rounded-2xl 
              p-6 md:p-10 
              hover:bg-white/15 
              hover:border-white/30 
              transition 
              hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
            "
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
            </div>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
