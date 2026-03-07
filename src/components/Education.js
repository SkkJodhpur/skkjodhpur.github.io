import React, { useState, useEffect } from "react";

const Education = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [animatedItems, setAnimatedItems] = useState([]);

  const education = [
    {
      title: "ME with Honors in Computer Science Engineering",
      institution: "MBM Engineering College and University Jodhpur",
      year: "2021 - 2023",
      details:
        "Completed Masters in Engineering with specialization in Computer Science.",
    },
    {
      title: "B.Tech in Computer Science Engineering",
      institution: "Rajasthan Technical University",
      year: "2009 - 2013",
      details: "Bachelor of Technology in Computer Science Engineering.",
    },
    {
      title: "Senior Secondary Education",
      institution: "Board of Secondary Education Ajmer (RBSE)",
      year: "2009",
      details:
        "Completed senior secondary education with focus on science and mathematics.",
    },
    {
      title: "Secondary Education",
      institution: "Board of Secondary Education Ajmer (RBSE)",
      year: "2007",
      details: "Completed secondary education with strong academic foundation.",
    },
  ];

  const certifications = [
    {
      name: "Generative AI: The Evolution of Thoughtful Online Search",
      issuer: "LinkedIn Learning",
      date: "Nov 2025",
      skills: [
        "Artificial Intelligence for Business",
        "Search Engine Technology",
        "Generative AI",
      ],
    },
    {
      name: "Responsible AI for Managers",
      issuer: "LinkedIn Learning",
      date: "Nov 2025",
      skills: ["Responsible AI", "AI for Management", "People Management"],
    },
    {
      name: "AI FOR ALL",
      issuer: "Intel Corporation",
      date: "Jul 2025",
      skills: ["Generative AI", "NLP", "Computer Vision", "AI Ethics"],
    },
    {
      name: "Build Real World AI Applications with Gemini and Imagen",
      issuer: "Google Cloud Skills Boost",
      date: "May 2025",
      skills: ["Vertex AI", "Gemini Model", "Machine Learning"],
    },
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild (Student Ambassador Program)",
      date: "Aug 2024",
      skills: ["Machine Learning", "NLP", "AI Ethics", "Neural Networks"],
    },
    {
      name: "Mastering Generative AI with OpenAI, LangChain, and LlamaIndex V2",
      issuer: "iNeuron.ai",
      date: "Jul 2024",
      skills: ["LangChain", "LlamaIndex", "LLMs", "Python", "Generative AI"],
    },
    {
      name: "Neo4j & LLM Fundamentals",
      issuer: "Neo4j",
      date: "Jul 2024",
      skills: ["Graph Databases", "Large Language Models", "AI Integration"],
    },
    {
      name: "Build Your Own GPTs",
      issuer: "Project Management Institute",
      date: "Aug 2024",
      skills: ["Custom GPTs", "Applied Generative AI"],
    },
    {
      name: "AWS for DevOps: Continuous Delivery and Process Automation",
      issuer: "CompTIA",
      date: "Nov 2023",
      skills: ["DevOps", "Automation", "AWS Cloud"],
    },
    {
      name: "Generative AI Overview for Project Managers",
      issuer: "Project Management Institute",
      date: "Nov 2023",
      skills: ["Project Management", "AI Integration", "Deep Learning"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => [...new Set([...prev, idx])]);
            setAnimatedItems((prev) => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.25 }
    );

    document
      .querySelectorAll(".timeline-item")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.18)_1px,transparent_0)] [background-size:36px_36px] opacity-30" />

      {/* Glow */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-blue-300/30 blur-[150px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-indigo-300/30 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Education & Certifications
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            A detailed overview of my educational background and globally recognized
            certifications in AI, ML, and project management.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-16">

          {/* Education Card */}
          <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-blue-200/40 shadow-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🎓</span>
              <h3 className="text-xl font-semibold text-blue-700">Education</h3>
            </div>

            {education.map((edu, i) => (
              <div
                key={i}
                data-index={i}
                className="relative mb-8 pl-8 border-l-2 border-blue-500 timeline-item"
              >
                <div
                  className={`absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full ${
                    visibleIndices.includes(i)
                      ? "bg-blue-600 animate-pulse"
                      : "bg-blue-200"
                  }`}
                ></div>

                <h4 className="font-semibold text-slate-900 text-base">
                  {edu.title}
                </h4>
                <p className="text-blue-600 text-sm">{edu.institution}</p>
                <p className="text-slate-500 text-sm">{edu.year}</p>
                <p className="text-slate-600 text-sm mt-1">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Certification Card */}
          <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-blue-200/40 shadow-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🏆</span>
              <h3 className="text-xl font-semibold text-blue-700">Certifications</h3>
            </div>

            <div className="max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  data-index={i}
                  className={`relative mb-8 pl-8 border-l-2 border-amber-400 timeline-item transition-all duration-700 ${
                    animatedItems.includes(i)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 bg-amber-500 rounded-full animate-pulse"></div>

                  <h4 className="font-semibold text-slate-900 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-amber-600 text-sm">{cert.issuer}</p>
                  <p className="text-slate-500 text-sm mb-2">{cert.date}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="bg-amber-50 text-amber-700 text-xs px-3 py-1 rounded-full border border-amber-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-7 mt-8">

          {/* Education */}
          <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-blue-200/40 shadow-lg overflow-hidden">
            <button
              onClick={() =>
                setActiveSection((prev) => (prev === "edu" ? null : "edu"))
              }
              className="w-full flex justify-between items-center p-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🎓</span>
                <h3 className="font-semibold text-slate-800">Education</h3>
              </div>

              <svg
                className={`w-5 h-5 transform transition ${
                  activeSection === "edu" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                activeSection === "edu"
                  ? "max-h-[1200px] opacity-100 p-5 pt-0"
                  : "max-h-0 opacity-0"
              }`}
            >
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative mb-6 pl-6 border-l-2 border-blue-500"
                >
                  <div className="absolute -left-[6px] top-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>

                  <h4 className="text-sm font-semibold">{edu.title}</h4>
                  <p className="text-blue-600 text-xs">{edu.institution}</p>
                  <p className="text-slate-500 text-xs">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-blue-200/40 shadow-lg overflow-hidden">
            <button
              onClick={() =>
                setActiveSection((prev) => (prev === "cert" ? null : "cert"))
              }
              className="w-full flex justify-between items-center p-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🏆</span>
                <h3 className="font-semibold text-slate-800">Certifications</h3>
              </div>

              <svg
                className={`w-5 h-5 transform transition ${
                  activeSection === "cert" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-500 ${
                activeSection === "cert"
                  ? "max-h-[90vh] opacity-100 overflow-y-auto p-5 pt-0 custom-scrollbar"
                  : "max-h-0 opacity-0"
              }`}
            >
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="relative mb-6 pl-6 border-l-2 border-amber-400"
                >
                  <div className="absolute -left-[6px] top-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>

                  <h4 className="text-sm font-semibold">{cert.name}</h4>
                  <p className="text-amber-600 text-xs">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mb-2">{cert.date}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, j) => (
                      <span
                        key={j}
                        className="bg-amber-50 text-amber-700 text-[10px] px-2 py-1 rounded-full border border-amber-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
