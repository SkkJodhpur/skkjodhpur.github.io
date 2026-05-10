import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  ArrowRight,
  Download,
  Sparkles,
  ChevronDown,
  Code2,
  Lightbulb,
  Briefcase,
} from "lucide-react";

import profileImage from "../assets/images/profile.png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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
      className="relative overflow-hidden text-white min-h-screen flex items-center pt-24 md:pt-32 lg:pt-40"
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #1a0033 25%, #0f1729 50%, #1a0033 75%, #0a0e27 100%)",
      }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"
          style={{
            animation: "float 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          style={{
            animation: "float 30s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"
          style={{
            animation: "float 35s ease-in-out infinite",
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0a0e27]/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-180px)]">
          
          {/* LEFT SECTION */}
          <div className="space-y-6 sm:space-y-8">
            {/* Animated Badge */}
            <div
              className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl transition-all duration-1000 ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-cyan-300 whitespace-nowrap">
                  AI • LLM Systems • Engineering
                </span>
              </div>
              <Sparkles size={14} className="text-cyan-400 flex-shrink-0" />
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-1000 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white">Building</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                  Enterprise AI
                </span>
                <span className="block text-white">Systems</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                <span className="font-semibold text-white">Shailesh Kumar Khanchandani</span> — 
                AI value creator, project manager, and technical consultant specializing in scalable LLM architectures, 
                enterprise AI solutions, and high-performance engineering teams.
              </p>
            </div>

            {/* Stats Grid */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { value: "12+", label: "Years Exp" },
                  { value: "4+", label: "AI/LLM" },
                  { value: "50+", label: "Projects" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl p-3 sm:p-4 transition-all duration-300 hover:border-white/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition duration-300" />
                    <p className="relative text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="relative text-xs sm:text-sm text-slate-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-3 transition-all duration-1000 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >

              <Link
                to="projects"
                smooth
                offset={-100}
                duration={500}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative flex items-center justify-center gap-2 text-white">
                  <Briefcase size={18} />
                  <span className="hidden sm:inline">View Projects</span>
                  <span className="sm:hidden">Projects</span>
                </div>
              </Link>

              <button
                onClick={handleViewCV}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative flex items-center justify-center gap-2 text-white">
                  <Download size={18} />
                  <span className="hidden sm:inline">Download CV</span>
                  <span className="sm:hidden">CV</span>
                </div>
              </button>

              <Link
                to="contact"
                smooth
                offset={-100}
                duration={500}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-2xl font-semibold border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 cursor-pointer hover:border-white/40"
              >
                <div className="flex items-center justify-center gap-2 text-white">
                  <span>Let's Connect</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </Link>
            </div>

            {/* Tech Stack */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* <div className="flex flex-wrap gap-2 sm:gap-3">
                {["LLM Systems", "RAG", "FastAPI", "React", "Python", "AI Consulting"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 backdrop-blur hover:bg-cyan-500/10 transition-all duration-300 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
            </div>
          </div>

          {/* RIGHT SECTION - Profile Card */}
          <div
            className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Background Orb */}
            <div className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" />

            {/* Main Card Container */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              
              {/* Floating Badge 1 */}
              {!isMobile && (
                <div className="absolute -top-6 -left-6 z-20 animate-float">
                  <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Code2 className="text-cyan-400 flex-shrink-0" size={18} />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white whitespace-nowrap">AI Engineer</p>
                        <p className="text-xs text-slate-400">Full Stack</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Badge 2 */}
              {!isMobile && (
                <div className="absolute -bottom-6 -right-6 z-20 animate-float-delay">
                  <div className="rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="text-blue-400 flex-shrink-0" size={18} />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white whitespace-nowrap">Innovator</p>
                        <p className="text-xs text-slate-400">Strategy</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Main Profile Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500">
                
                {/* Top Mac Bar */}
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>

                {/* Image Container */}
                <div className="relative p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl group">
                    <img
                      src={profileImage}
                      alt="Shailesh Kumar Khanchandani"
                      className="w-full h-auto max-h-96 sm:max-h-[520px] object-cover object-top group-hover:scale-105 transition duration-700 filter brightness-105 contrast-110"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/90 backdrop-blur border border-green-400/50">
                      <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                      <span className="text-xs font-semibold text-white">Available</span>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Shailesh Kumar
                      </h3>
                      <p className="text-slate-200 text-xs sm:text-sm mt-1">
                        AI • Automation • Digital Transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300"
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
          pointerEvents: scrollY > 300 ? "none" : "auto",
        }}
      >
        <Link
          to="about"
          smooth
          offset={-100}
          duration={500}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-xs text-slate-400 font-medium group-hover:text-cyan-400 transition">
            Scroll to explore
          </span>
          <ChevronDown
            size={24}
            className="text-slate-400 group-hover:text-cyan-400 animate-pulse transition"
          />
        </Link>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 8s ease-in-out infinite 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @supports (background: radial-gradient(from closest-corner at 50% 50%, red, blue)) {
          .bg-radial-gradient {
            background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delay {
            animation: float 6s ease-in-out infinite 3s;
          }
        }
      `}</style>
    </section>
  );
}