import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Users, MapPin, GraduationCap, Briefcase, Lightbulb } from "lucide-react";

export default function Hero() {
  const images = [
    "https://thumbs.dreamstime.com/b/feels-amazing-to-finally-graduate-four-happy-college-graduates-graduation-gowns-throwing-their-mortar-boards-smiling-138546651.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-d-illustration-of-a-practical-science-laboratory-for-education-with-students-image_3793087.jpg",
    "https://img.freepik.com/premium-photo/plants-hand-with-biochemistry-structure-illustrations_488220-60960.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/courses_1200x768.png",
    "https://st4.depositphotos.com/9999814/31016/i/450/depositphotos_310162948-stock-photo-team-of-young-students-studying.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden text-white flex items-center justify-center min-h-screen w-full">

      {/* Background Image — Fully Responsive */}
      <motion.div
        key={currentImage}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Floating icons — hidden on small screen */}
      <div className="absolute top-30 left-5 hidden xl:flex flex-col gap-4">
         <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="bg-white/10 text-white p-3 rounded-xl border border-white/20 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <Lightbulb size={18} /><a href="https://www.geeksforgeeks.org/"> Learning</a>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="bg-white/10 text-white p-3 rounded-xl border border-white/20 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <GraduationCap size={18} /><a href="https://www.linkedin.com"> Freshers</a>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="bg-white/10 text-white p-3 rounded-xl border border-white/20 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <Briefcase size={18} />
          <a href="https://internshala.com/">Internships</a>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="bg-white/10 text-white p-3 rounded-xl border border-white/20 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <Users size={18} /><a href="https://recruittalent.com"> Recruiters</a>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center px-4">

        <motion.h1
          className="text-3xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Build Your <span className="text-yellow-300">Dream Career</span>
        </motion.h1>

        <motion.p
          className="mt-3 text-base md:text-xl text-gray-200 max-w-xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Explore top opportunities in{" "}
          <span className="text-yellow-300">IT • Engineering • Management • Finance</span>
          {" "}and more.
        </motion.p>

        {/* Search Bar — Fully Mobile Responsive */}
        <motion.div
          className="mt-6 bg-white/20 rounded-full border border-white/30 shadow-xl flex items-center gap-3 px-4 py-3 backdrop-blur-lg max-w-lg mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Search className="text-white" />
          <input
            type="text"
            placeholder="Search jobs, internships, companies..."
            className="flex-grow bg-transparent placeholder-white/60 text-white outline-none text-sm md:text-base"
          />
          <button className="bg-yellow-400 text-black px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 text-sm md:text-base">
            Search
          </button>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 shadow-lg text-sm md:text-base">
            <Briefcase size={20} />
            <a href="https://internshala.com/"> Find Jobs</a>
          </button>

          <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 shadow-lg text-sm md:text-base">
            <Users size={20} />
            <a href="https://recruittalent.com"> Recruit Talent</a>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
