import React from "react";
import { GraduationCap, Atom, FlaskRound, Microscope, Laptop, Building, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Science() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Science Stream Pathways
        </motion.h1>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          Explore PCM & PCB pathways — India’s most powerful career routes for engineering, medicine, research, technology, and high‑growth industries.
        </p>

        {/* PCM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/10 mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Atom size={32} className="text-yellow-400" />
            <h2 className="text-3xl font-semibold">PCM Pathway (Physics • Chemistry • Mathematics)</h2>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            The PCM pathway is the primary route to engineering, architecture, aviation, planning, and high‑growth tech careers. It builds analytical, quantitative, and problem‑solving strengths.
          </p>

          <h3 className="text-xl font-bold text-yellow-300 mb-3">Undergraduate Degree Options</h3>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li><b>B.Tech/B.E</b> – CSE, Mechanical, Aerospace, Electrical, Civil, IT, Robotics, etc.</li>
            <li><b>B.Arch</b> – Architectural design, CAD, spatial planning.</li>
            <li><b>B.Plan</b> – Urban planning, transport, housing, sustainability.</li>
            <li><b>B.Sc</b> – Physics, Mathematics, CS, IT, Data Science.</li>
            <li><b>BCA</b> – Fast track into software development & IT.</li>
            <li><b>Other:</b> CPL Pilot, Nautical Science, Integrated Law, Integrated BBA‑MBA.</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-300 mt-8 mb-3">Career Outcomes & Salary Outlook</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-3">Profession</th>
                  <th className="p-3">Entry Salary</th>
                  <th className="p-3">Mid-Career</th>
                  <th className="p-3">Senior Level</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr><td className="p-3">Data Scientist</td><td className="p-3">₹5–8 LPA</td><td className="p-3">₹15–28 LPA</td><td className="p-3">₹30–50+ LPA</td></tr>
                <tr><td className="p-3">AI/ML Engineer</td><td className="p-3">₹8–12 LPA</td><td className="p-3">₹20–35 LPA</td><td className="p-3">₹45–120 LPA</td></tr>
                <tr><td className="p-3">Software Developer</td><td className="p-3">₹6–10 LPA</td><td className="p-3">₹18–30 LPA</td><td className="p-3">₹40–90 LPA</td></tr>
                <tr><td className="p-3">Cybersecurity Analyst</td><td className="p-3">₹5–9 LPA</td><td className="p-3">₹15–25 LPA</td><td className="p-3">₹35–100 LPA</td></tr>
                <tr><td className="p-3">Mechanical Engineer</td><td className="p-3">₹3–6 LPA</td><td className="p-3">₹6–12 LPA</td><td className="p-3">₹12–24 LPA</td></tr>
                <tr><td className="p-3">Architect</td><td className="p-3">₹4–6 LPA</td><td className="p-3">₹7–10 LPA</td><td className="p-3">₹15–30 LPA</td></tr>
                <tr><td className="p-3">Urban Planner</td><td className="p-3">₹3–6 LPA</td><td className="p-3">₹6–8 LPA</td><td className="p-3">₹10–20 LPA</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* PCB SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <FlaskRound size={32} className="text-green-400" />
            <h2 className="text-3xl font-semibold">PCB Pathway (Physics • Chemistry • Biology)</h2>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            PCB leads to medicine, dentistry, biotechnology, psychology, forensics, and allied health sciences. NEET courses like MBBS/BDS are highly competitive but PCB offers a wide spectrum of high‑growth careers.
          </p>

          <h3 className="text-xl font-bold text-green-300 mb-3">Undergraduate Degree Options</h3>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li><b>MBBS</b> – Clinical medicine & specialization.</li>
            <li><b>BDS</b> – Dental surgery & orthodontics.</li>
            <li><b>BAMS</b> – Ayurvedic medicine.</li>
            <li><b>B.Pharm</b> – Pharma manufacturing, R&D.</li>
            <li><b>B.Sc Nursing</b> – High global demand.</li>
            <li><b>Allied Health:</b> Biotech, Forensics, Nutrition, MLT, Radiology, Psychology.</li>
            <li><b>Other:</b> Physiotherapy (BPT), Veterinary Science.</li>
          </ul>

          <h3 className="text-xl font-bold text-green-300 mt-8 mb-3">Career Outcomes & Salary Outlook</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-3">Profession</th>
                  <th className="p-3">Entry Salary</th>
                  <th className="p-3">Mid-Career</th>
                  <th className="p-3">Senior Level</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr><td className="p-3">Medical Doctor (Specialist)</td><td className="p-3">₹10–15 LPA</td><td className="p-3">₹25–40 LPA</td><td className="p-3">₹50 LPA–₹2 Cr+</td></tr>
                <tr><td className="p-3">Dentist (MDS)</td><td className="p-3">₹3–6 LPA</td><td className="p-3">₹8–15 LPA</td><td className="p-3">₹20–30+ LPA</td></tr>
                <tr><td className="p-3">Pharmacist</td><td className="p-3">₹4–6 LPA</td><td className="p-3">₹6–9 LPA</td><td className="p-3">₹10–15 LPA</td></tr>
                <tr><td className="p-3">Biotech Research Scientist</td><td className="p-3">₹3–8 LPA</td><td className="p-3">₹8–12 LPA</td><td className="p-3">₹15–25 LPA</td></tr>
                <tr><td className="p-3">Forensic Scientist</td><td className="p-3">₹4–7 LPA</td><td className="p-3">₹7–10 LPA</td><td className="p-3">₹12–18 LPA</td></tr>
                <tr><td className="p-3">Nutritionist</td><td className="p-3">₹4–6 LPA</td><td className="p-3">₹6–8 LPA</td><td className="p-3">₹9–14 LPA</td></tr>
                <tr><td className="p-3">Physiotherapist</td><td className="p-3">₹3–5 LPA</td><td className="p-3">₹5–8 LPA</td><td className="p-3">₹10–15 LPA</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
