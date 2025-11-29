import { motion } from "framer-motion";
import {
  Briefcase,
  BarChart3,
  GraduationCap,
  LineChart,
  Building2,
} from "lucide-react";

export default function Commerce() {
  return (
    <div className="min-h-screen w-full relative pt-28 pb-20 px-4 
      bg-gradient-to-b from-[#131b2c] via-[#1e293b] to-[#0f172a]">

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,#4f46e5,transparent_50%)]"></div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-inner shadow-black/40"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-300 flex items-center gap-2">
          <span className="hover:text-blue-400 transition cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-blue-400 font-medium">Commerce Stream</span>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Commerce Stream
          </h1>
          <div className="w-32 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        {/* Overview Section */}
        <GlassCard>
          <SectionTitle icon={<Briefcase className="text-blue-400 w-7 h-7" />}>
            Overview
          </SectionTitle>
          <p className="text-gray-300 leading-relaxed text-lg">
            Commerce builds a strong foundation for finance, business, economics,
            management, accounting, banking, consulting, entrepreneurship, and
            corporate leadership. When paired with CA, CFA, CMA, CS, or an MBA,
            it opens doors to India's highest-paying careers.
          </p>
        </GlassCard>

        {/* Undergraduate Degree Options */}
        <div className="space-y-10">
          <SectionTitle
            icon={<GraduationCap className="w-7 h-7 text-green-400" />}
          >
            Undergraduate Degree Options
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="B.Com / B.Com Hons."
              icon={<Building2 className="w-6 h-6 text-blue-400" />}
              text="Covers Accounting, Taxation, Economics, Business Law, Auditing. Hons version is highly preferred."
            />

            <Card
              title="BBA"
              icon={<BarChart3 className="w-6 h-6 text-green-400" />}
              text="Management-focused degree with specializations like Marketing, HR, Analytics, and Finance."
            />

            <Card
              title="BA/BS Economics"
              icon={<LineChart className="w-6 h-6 text-purple-400" />}
              text="Strong analytical program covering Econometrics, Statistics, Micro & Macro Economics."
            />
          </div>
        </div>

        {/* Professional Courses */}
        <GlassCard>
          <SectionTitle icon={<Briefcase className="text-orange-400 w-7 h-7" />}>
            Professional Courses
          </SectionTitle>
          <ul className="list-disc pl-8 text-lg space-y-2 text-gray-300">
            <li>CA – Taxation, auditing, corporate finance.</li>
            <li>CS – Legal compliance & corporate governance.</li>
            <li>CMA – Cost analysis, budgeting & strategy.</li>
          </ul>
        </GlassCard>

        {/* Salary Tables */}
        <div className="space-y-20">
          <SalaryTable
            title="Finance Careers"
            rows={[
              {
                role: "Chartered Accountant",
                entry: "₹7–15 LPA",
                mid: "₹15–25 LPA",
                senior: "₹35 LPA–₹1 Cr+",
              },
              {
                role: "Investment Banker",
                entry: "₹10–15 LPA",
                mid: "₹25–40 LPA",
                senior: "₹50 LPA–₹1.5 Cr+",
              },
              {
                role: "Financial Analyst",
                entry: "₹3.5–5 LPA",
                mid: "₹8–12 LPA",
                senior: "₹15–25 LPA",
              },
            ]}
          />

          <SalaryTable
            title="Management Careers"
            rows={[
              {
                role: "Marketing Manager",
                entry: "₹3–6 LPA",
                mid: "₹8–12 LPA",
                senior: "₹15–30 LPA",
              },
              {
                role: "HR Manager",
                entry: "₹3–5.5 LPA",
                mid: "₹6–9 LPA",
                senior: "₹12–20 LPA",
              },
              {
                role: "Business Consultant",
                entry: "₹8–12 LPA",
                mid: "₹20–35 LPA",
                senior: "₹40 LPA–₹1 Cr+",
              },
            ]}
          />
        </div>

        {/* Entrepreneurship */}
        <GlassCard>
          <SectionTitle>Entrepreneurship</SectionTitle>
          <p className="text-gray-300 text-lg leading-relaxed">
            Commerce education builds the perfect foundation for launching
            startups in retail, finance, consulting, e-commerce, and corporate
            services.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}

/* ------------------------------------------ */
/* Reusable Components */
/* ------------------------------------------ */

function GlassCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl 
      shadow-xl border border-white/20 space-y-4"
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ children, icon }) {
  return (
    <div className="flex items-center gap-3 text-3xl font-bold text-white">
      {icon}
      {children}
    </div>
  );
}

function Card({ title, icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 
      rounded-3xl p-7 shadow-md hover:shadow-2xl hover:bg-white/20 
      transition-all space-y-3 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 text-xl font-semibold text-white">
        {icon}
        {title}
      </div>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
}

function SalaryTable({ title, rows }) {
  return (
    <GlassCard>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-gray-200">
          <thead>
            <tr className="bg-white/10 backdrop-blur-lg border-b border-white/20">
              <th className="p-3 font-semibold">Profession</th>
              <th className="p-3 font-semibold">Entry Salary</th>
              <th className="p-3 font-semibold">Mid-Career</th>
              <th className="p-3 font-semibold">Senior Level</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`border-t border-white/10 ${
                  i % 2 === 0 ? "bg-white/5" : "bg-white/10"
                }`}
              >
                <td className="p-3">{r.role}</td>
                <td className="p-3">{r.entry}</td>
                <td className="p-3">{r.mid}</td>
                <td className="p-3">{r.senior}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
