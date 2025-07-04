import React from "react";
import { motion } from 'framer-motion'; 
import "./index.css"; 
import srmLogo from "./assets/srm-logo.jpg";
import vitLogo from "./assets/vit-logo.jpg";
import amritaLogo from "./assets/amrita-logo.jpg";
import heroBg from "./assets/hero-bg.jpg";
import kalviLogo from "./assets/kalvizone-logo.jpg";

function App() {
  const colleges = [
    {
      name: "SRM Institute of Science and Technology",
      location: "Chennai",
      image: srmLogo,
    },
    {
      name: "Vellore Institute of Technology (VIT)",
      location: "Vellore",
      image: vitLogo,
    },
    {
      name: "Amrita Vishwa Vidyapeetham",
      location: "Coimbatore",
      image: amritaLogo,
    },
  ];

  return (
    <div className="font-sans">
      {/* ✅ Hero Section */}
      <section
        className="relative text-white py-32 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
{/* 🔰 KalviZone Logo in top-left of hero (larger) */}
<div className="absolute top-6 left-6 z-10">
  <img
    src={kalviLogo}
    alt="KalviZone Logo"
    className="h-14 w-auto object-contain drop-shadow-lg"
  />
</div>


        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Secure Your Admission in Top Colleges
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Direct admission to SRM, VIT, Amrita & more — trusted by 1000+ students.
          </p>
          <a
            href="https://wa.me/919345500113?text=Hi%2C%20I%20am%20interested%20in%20college%20admission.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Book Now
          </a>
        
        </div>
      </section>

      {/* ✅ Colleges Offered Section */}
      <section
        className="relative py-20 px-4 text-gray-800"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-10 font-[Playfair_Display]">
            Colleges Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colleges.map((college, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 text-center transform hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={college.image}
                  alt={college.name}
                  className="mx-auto mb-4 h-16 w-16 object-contain"
                />
                <h3 className="text-lg font-semibold">{college.name}</h3>
                <p className="text-gray-500">{college.location}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div
              className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 text-center cursor-pointer hover:scale-[1.03] transition-transform duration-300 w-full max-w-sm"
              onClick={() =>
                window.open(
                  "https://wa.me/919345500113?text=Hi%2C%20I%20want%20to%20know%20more%20colleges%20available%20for%20admission.",
                  "_blank"
                )
              }
            >
              <div className="text-4xl font-bold text-gray-800 mb-2">20+</div>
              <h3 className="text-lg font-semibold text-gray-800">Colleges Available</h3>
              <p className="text-sm text-gray-600">Tap to contact & get full list</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section
        className="relative py-20 px-4 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 font-[Playfair_Display]">
            Why Choose Us
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              {
                title: "100% Verified Admissions",
                desc: "We ensure safe & secure direct admissions.",
              },
              {
                title: "10+ Years Experience",
                desc: "Trusted by thousands of students across India.",
              },
              {
                title: "No Advance Payment",
                desc: "Pay only after confirmation of your seat.",
              },
              {
                title: "Limited Seats",
                desc: "Get priority support and seat confirmation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-[270px] p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="text-center py-6 bg-white text-gray-700 text-sm font-medium border-t border-gray-300">
  <div className="max-w-screen-md mx-auto px-4">
    <p className="mb-1">
      <span className="mr-2 font-semibold text-black">@ Help</span>
      <a
        href="mailto:kalvizone01@gmail.com"
        className="underline text-blue-600 hover:text-blue-800"
      >
        kalvizone01@gmail.com
      </a>
    </p>
    <p className="text-xs text-gray-500">+91 93455 00113</p>
    <p className="text-xs text-gray-400 mt-1">KalviZone</p>
  </div>
</footer>

    </div>
  );
}

export default App;
