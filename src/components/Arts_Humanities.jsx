import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Landmark,
  PenLine,
  Palette,
  Scale,
  Layers,
  Newspaper,
  Users,
} from "lucide-react";

export default function Arts_Humanities() {
  return (
    <section className="min-h-screen w-full py-20 px-4 md:px-10 
        bg-gradient-to-br from-[#0a0f1f] via-[#181f2f] to-[#5c616a] text-white">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.pixabay.com/video/2024/04/03/206779_large.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl -z-10"></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text drop-shadow-xl"
      >
        Arts & Humanities Stream
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-center text-gray-200 max-w-3xl mx-auto mt-4"
      >
        A diverse field shaping leaders in media, civil services, psychology, law, and creative industries.
      </motion.p>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <motion.h2
          className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Overview
        </motion.h2>

        <p className="text-gray-200 mt-4 leading-relaxed text-lg glass-box">
          The Arts & Humanities stream opens opportunities in civil services, psychology, media, social sciences,
          creative industries, and policy-level leadership roles.
        </p>
      </div>

      {/* Degree Options */}
      <div className="max-w-6xl mx-auto mt-14">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Undergraduate Degree Options
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { icon: BookOpen, title: "B.A. – Political Science", desc: "Governance, public policy, diplomacy." },
            { icon: Layers, title: "B.A. – History", desc: "Research, civil services, heritage studies." },
            { icon: Users, title: "B.A. – Psychology", desc: "Mental health, HR, counselling, UX research." },
            { icon: PenLine, title: "B.A. – English Literature", desc: "Journalism, publishing, creative writing." },
            { icon: Landmark, title: "B.A. – Economics", desc: "Policy analysis, finance, data analytics." },
            { icon: Newspaper, title: "Journalism & Mass Communication", desc: "Reporting, media production." },
            { icon: Palette, title: "Fine Arts", desc: "Graphic design, illustration, creative direction." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl glass-card hover:shadow-purple-500/20 hover:-translate-y-1 transition"
            >
              <item.icon className="text-purple-300 mb-3" size={32} />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Degrees */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professional Degrees
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-6 rounded-2xl glass-card border-l-4 border-purple-400"
        >
          <Scale size={32} className="text-purple-300 mb-3" />
          <h3 className="text-xl font-semibold">B.A. LLB</h3>
          <p className="text-gray-300 mt-2">
            The fastest route to becoming a lawyer with opportunities in corporate law, litigation, and public policy.
          </p>
        </motion.div>
      </div>

      {/* Career Path Tables */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Career Paths & Salary Outlook
        </h2>

        <p className="text-gray-300 mt-4 text-lg">
          Arts & Humanities graduates excel in law, civil services, media, psychology, and creative fields.
        </p>

        {/* Public Service */}
        <h3 className="text-2xl font-bold mt-12 text-purple-300">Public Service & Law</h3>
        <CareerTable
          rows={[
            ["Civil Servant (IAS/IPS)", "₹7–8 LPA*", "₹15–18 LPA*", "₹25–30 LPA*"],
            ["Corporate Lawyer", "₹5–9 LPA", "₹12–20 LPA", "₹20–40+ LPA"],
          ]}
        />

        {/* Media */}
        <h3 className="text-2xl font-bold mt-12 text-purple-300">Media & Communication</h3>
        <CareerTable
          rows={[
            ["Journalist", "₹2.5–6 LPA", "₹10–20 LPA", "₹30 LPA–₹1 Cr+"],
            ["Digital Marketing Manager", "₹2.5–7 LPA", "₹10–15 LPA", "₹15–25 LPA"],
            ["Public Relations Manager", "₹3–6 LPA", "₹7–12 LPA", "₹15–25 LPA"],
          ]}
        />

        {/* Psychology */}
        <h3 className="text-2xl font-bold mt-12 text-purple-300">Social Sciences & Psychology</h3>
        <CareerTable
          rows={[
            ["Clinical Psychologist", "₹5–12 LPA", "₹12–18 LPA", "₹15–25+ LPA"],
            ["Social Worker", "₹3–6 LPA", "₹5–8 LPA", "₹8–12 LPA"],
            ["Sociologist", "₹3.5–5 LPA", "₹6–10 LPA", "₹12–20 LPA"],
          ]}
        />
      </div>
    </section>
  );
}



// GLASS TABLE
function CareerTable({ rows }) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full rounded-xl glass-card backdrop-blur-xl text-left border border-white/10">
        <thead className="bg-white/10 text-purple-200">
          <tr>
            <th className="px-4 py-3">Profession</th>
            <th className="px-4 py-3">Entry Salary</th>
            <th className="px-4 py-3">Mid-Career</th>
            <th className="px-4 py-3">Senior Level</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-white/10 hover:bg-white/5">
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
