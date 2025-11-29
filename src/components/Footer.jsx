import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {

   const scrollToSection = (id) => {
        const section = document.getElementById(id);

        { ({ isActive }) => ({ color: isActive ? 'blue' : '#90E0EF' }) }

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <footer className="relative w-full text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://media.istockphoto.com/id/1322829761/video/blueberry-plants-moving-in-the-wind.mp4?s=mp4-640x640-is&k=20&c=NhkR6AIOsUCHmPMNFFD-Cw5cUd3rkQnN_-axrFfZXFc=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400">CareerHub</h2>
          <p className="text-gray-300">
            Empowering students and professionals to find the perfect career path,
            internships, jobs, and skill development opportunities.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.facebook.com/share/1CuKN9F4tG/" className="hover:text-yellow-400 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Twitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shubham-kushwaha-2b9681360" className="hover:text-yellow-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><button className="hover:text-yellow-400 transition" onClick={() => scrollToSection('home')}>Home</button> </li>
            <li><button className="hover:text-yellow-400 transition" onClick={() => scrollToSection('science')}>Science Stream</button></li>
            <li><button className="hover:text-yellow-400 transition" onClick={() => scrollToSection('commerce')}>Commerce Stream</button></li>
            <li><button className="hover:text-yellow-400 transition" onClick={() => scrollToSection('arts')}>Arts & Humanities</button></li>
            <li><button className="hover:text-yellow-400 transition" onClick={() => scrollToSection('job')}>Job Toolkit</button></li>
            <li><button className="hover:text-yellow-400 transition" onClick={() => scrollToSection('insights')}>Insights</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">Contact Us</h3>
          <div className="flex items-center gap-3 text-gray-300">
            <MapPin size={20} />
            <span>BBD University Lucknow, India</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Phone size={20} />
            <span>+91 95698 60694</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Mail size={20} />
            <span>shubhamkushwaha3657@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-700 text-gray-400 text-center py-6 mt-10">
        © {new Date().getFullYear()} CareerHub. All Rights Reserved.
      </div>
    </footer>
  );
}
