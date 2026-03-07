import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import profileImage from "../assets/images/profile.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleViewCV = () => {
    window.open(
      "https://drive.google.com/file/d/1jH3HPKTnSJZqiaqek0UoW5vnFPfYncCV/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-0 overflow-hidden bg-gradient-to-br from-sky-100 via-white to-blue-200"
    >
      {/* AI Network Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.25)_1px,transparent_0)] [background-size:32px_32px] opacity-25 sm:opacity-40" />

      {/* Soft Light Overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/30 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-300/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-14 items-center">

          {/* Left Content */}
          <div
            className={`relative z-20 space-y-6 text-center md:text-left transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Shailesh Kumar
              <span className="block text-blue-700">Khanchandani</span>
            </h1>

            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <p className="text-xl sm:text-2xl font-semibold text-blue-800">
                12+ Years of Experience Across Technology and Business Domains
              </p>

              <p className="mt-2 text-base sm:text-lg text-blue-800/80">
                4+ Years in Enterprise AI, LLM Systems, and Digital Transformation with Consulting in React and Python
              </p>
            </div>

            {/* Desktop CTA */}
            <div
              className={`hidden md:flex gap-5 pt-4 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={handleViewCV}
                className="px-7 py-3 rounded-xl bg-blue-700 text-white font-medium shadow-lg hover:bg-blue-800 hover:scale-105 transition"
              >
                View CV
              </button>

              <Link
                to="contact"
                smooth
                offset={-64}
                duration={500}
                className="px-7 py-3 rounded-xl border-2 border-blue-700 text-blue-700 font-medium hover:bg-blue-700 hover:text-white hover:scale-105 transition cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`flex flex-col items-center space-y-7 mt-6 md:mt-0 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Image Card - AI Glass Frame */}
            <div
              className="relative group animate-[float_6s_ease-in-out_infinite]"
              style={{ animationName: "float" }}
            >
              {/* Outer Glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-blue-400/40 via-sky-300/40 to-indigo-400/40 blur-2xl opacity-80 group-hover:opacity-100 transition" />

              {/* Glass Frame */}
              <div className="relative rounded-[2rem] border border-blue-300/40 bg-white/60 backdrop-blur-xl shadow-2xl p-4 transform transition duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
                <img
                  src={profileImage}
                  alt="Shailesh Kumar Khanchandani"
                  className="rounded-[1.5rem] w-64 sm:w-80 md:w-96 lg:w-[420px] object-cover shadow-xl"
                />
              </div>

              {/* Floating Border */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-blue-400/30 pointer-events-none" />
            </div>

            {/* Professional Info Card */}
            <div className="w-full max-w-sm rounded-2xl bg-white/80 backdrop-blur-lg border border-blue-200/40 shadow-lg px-6 py-5 text-center">
              <p className="text-sm font-semibold text-blue-700 tracking-wide">
                AI Architecture • Program Leadership • Engineering Mentorship
              </p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Supporting enterprise teams in building scalable AI systems,
                strengthening delivery governance, and developing strong
                architecture-focused engineering practices.
              </p>
            </div>

            {/* Mobile CTA */}
            <div
              className={`flex flex-col sm:flex-row gap-4 w-full justify-center md:hidden transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={handleViewCV}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-700 text-white font-medium shadow-md hover:bg-blue-800 transition"
              >
                View CV
              </button>

              <Link
                to="contact"
                smooth
                offset={-64}
                duration={500}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-blue-700 text-blue-700 font-medium hover:bg-blue-700 hover:text-white transition text-center cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }
      `}</style>
    </section>
  );
}
