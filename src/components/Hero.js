import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
  Download,
  BadgeCheck,
} from "lucide-react";

import profileImage from "../assets/images/profile.png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200);

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
      className="relative overflow-hidden bg-[#030712] text-white min-h-screen flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div
            className={`transition-all duration-1000 ${
              loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm text-slate-300 tracking-wide">
                AI Architect • Engineering Mentor • Program Leader
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Enterprise AI
              </span>
              Systems
            </h1>

            {/* Intro */}
            <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Hi, I'm{" "}
              <span className="font-semibold text-white">
                Shailesh Kumar Khanchandani
              </span>
              . I help enterprises design scalable AI ecosystems,
              LLM-powered applications, automation workflows,
              and architecture-driven engineering solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                <h3 className="text-3xl font-bold text-cyan-400">12+</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                <h3 className="text-3xl font-bold text-blue-400">4+</h3>
                <p className="text-sm text-slate-400 mt-1">
                  AI & LLM Years
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                <h3 className="text-3xl font-bold text-indigo-400">50+</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Projects Delivered
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={handleViewCV}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-cyan-500/20"
              >
                <Download size={18} />
                Download CV
              </button>

              <Link
                to="contact"
                smooth
                offset={-60}
                duration={500}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                Let's Connect
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                "LLM Systems",
                "Generative AI",
                "React",
                "Python",
                "FastAPI",
                "RAG",
                "AI Consulting",
              ].map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`relative flex justify-center transition-all duration-1000 delay-200 ${
              loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-cyan-500/30 to-blue-500/20 rounded-full blur-3xl animate-pulse" />

            {/* Main Card */}
            <div className="relative w-full max-w-md">
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0f172a]/80 border border-white/10 backdrop-blur-xl shadow-xl">
                <BrainCircuit className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm font-semibold">AI Solutions</p>
                  <p className="text-xs text-slate-400">
                    Enterprise Ready
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0f172a]/80 border border-white/10 backdrop-blur-xl shadow-xl">
                <BadgeCheck className="text-blue-400" size={22} />
                <div>
                  <p className="text-sm font-semibold">Leadership</p>
                  <p className="text-xs text-slate-400">
                    Delivery & Strategy
                  </p>
                </div>
              </div>

              {/* Profile Container */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.25)]">
                {/* Top Bar */}
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* Image */}
                <div className="p-6">
                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <img
                      src={profileImage}
                      alt="Shailesh Kumar Khanchandani"
                      className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-2xl font-bold">
                        Shailesh Kumar
                      </h3>

                      <p className="text-slate-300 mt-1">
                        AI Value Creator & Technology Strategist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}