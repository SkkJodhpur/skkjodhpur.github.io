import React, { useState, useEffect } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState([]);

  const projects = [
    {
      title: "Biometric Attendance & Device Management System",
      category: "ERP",
      role: "Senior Project Manager — Edulab",
      description:
        "Enterprise biometric attendance platform with secure onboarding and real-time device monitoring.",
      technologies: ["Angular", "Node", "MySQL", "REST API"],
      metrics: {
        users: "25K+ Students",
        scale: "120+ Devices",
        impact: "99.2% Accuracy",
        reach: "15 Institutions",
      },
      achievements: [
        "Secure biometric onboarding",
        "Real-time device monitoring",
        "Automated attendance verification",
        "Teacher admin panel",
      ],
    },

    {
      title: "CET Registration System",
      category: "Web",
      role: "Senior Project Manager — Edulab",
      description:
        "Scalable registration platform with authentication and analytics.",
      technologies: ["React", "Node", "MySQL"],
      metrics: {
        users: "50K+ Applicants",
        scale: "State-Level",
        impact: "60% Faster Processing",
        reach: "Pan India",
      },
      achievements: [
        "Multi-factor authentication",
        "Admin analytics dashboard",
        "RBAC implementation",
      ],
    },

    {
      title: "WhatsApp AI Chatbot (Gemini + LangChain)",
      category: "AI",
      role: "Self Project",
      description:
        "AI-powered chatbot with generative responses and automation.",
      technologies: ["Python", "LangChain", "Gemini", "Twilio"],
      metrics: {
        users: "8K+ Users",
        scale: "24x7",
        impact: "70% Query Reduction",
        reach: "Global",
      },
      achievements: [
        "AI-driven responses",
        "Twilio integration",
        "Context-aware NLP",
      ],
    },

    {
      title: "OMNI Channel WhatsApp Integration",
      category: "ERP",
      role: "Senior PM — Edulab",
      description:
        "Unified communication platform for LMS, admissions, exams.",
      technologies: ["React", "Node", "REST API"],
      metrics: {
        users: "18K+ Students",
        scale: "Multi-service",
        impact: "40% Support Efficiency",
        reach: "Multi Campus",
      },
      achievements: [
        "Microservice linking",
        "API gateway design",
        "WhatsApp automation",
      ],
    },

    {
      title: "International Data Analytics System",
      category: "Data",
      role: "Senior Analyst — Jodhpur Informatics",
      description:
        "Global data processing and reporting system.",
      technologies: ["MySQL", "Excel", "HTML", "CSS"],
      metrics: {
        users: "Corporate Clients",
        scale: "Millions Rows",
        impact: "35% Accuracy Gain",
        reach: "USA & Canada",
      },
      achievements: [
        "Data normalization",
        "Quality improvement",
        "Client reporting",
      ],
    },
  ];

  const filters = ["All", "AI", "ERP", "Web", "Data"];

  /* Scroll Reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = Number(e.target.dataset.id);
          if (e.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".project-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Strategic Projects & Leadership Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Enterprise systems, AI platforms, and scalable solutions
            delivering measurable business value.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === f
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {filtered.map((project, index) => (
            <div
              key={index}
              data-id={index}
              className={`project-card rounded-3xl bg-white border border-slate-200 shadow-lg p-8 transition-all duration-700 ${
                visible.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Header */}
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {project.title}
                </h3>

                <p className="text-indigo-600 font-medium">
                  {project.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">

                {Object.entries(project.metrics).map(([k, v], i) => (
                  <div
                    key={i}
                    className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-center"
                  >
                    <p className="font-semibold text-indigo-700">
                      {v}
                    </p>
                    <p className="text-xs text-slate-500 capitalize">
                      {k}
                    </p>
                  </div>
                ))}

              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Technology Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">
                  Key Outcomes
                </h4>

                <ul className="space-y-2 text-sm text-slate-600">
                  {project.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">✔</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
