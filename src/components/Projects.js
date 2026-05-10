import React, { useState, useEffect } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState([]);

  const projects = [
    /* =========================
       NEW AI ENTERPRISE PROJECTS
    ========================== */

    {
      title: "FNI AI",
      subtitle: "Finance & Insurance Lead Automation Engine",
      category: "AI",
      role: "AI Workflow & Enterprise Automation",
      description:
        "Agentic AI ecosystem designed for finance and insurance operations to automate lead handling, workflow orchestration, intelligent routing, and synchronized agent operations for enterprise automotive systems.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "LangChain",
        "Node.js",
        "AI Agents",
      ],
      metrics: {
        users: "Enterprise Operations",
        automation: "65% Faster Lead Processing",
        scale: "Real-Time Agent Workflow",
        impact: "Intelligent Lead Distribution",
      },
      aiCapabilities: [
        "Agentic Workflow",
        "Lead Intelligence",
        "Multi-Agent Coordination",
        "Decision Automation",
      ],
      achievements: [
        "Automated finance & insurance lead distribution",
        "Intelligent workflow synchronization",
        "Real-time operational visibility",
        "Reduced manual lead handling delays",
      ],
    },

    {
      title: "Lumi AI",
      subtitle: "Sales Intelligence & Retail Analytics Platform",
      category: "AI",
      role: "AI Analytics & Business Intelligence",
      description:
        "AI-powered analytics platform for dealers, distributors, retailers, and enterprise sales teams with advanced sales intelligence, KPI tracking, and business performance insights.",
      technologies: [
        "React",
        "Python",
        "FastAPI",
        "MySQL",
        "REST APIs",
        "Analytics AI",
      ],
      metrics: {
        users: "Dealer & Retail Networks",
        automation: "Real-Time KPI Tracking",
        scale: "Monthly & Quarterly Analytics",
        impact: "Sales Performance Intelligence",
      },
      aiCapabilities: [
        "Predictive Analytics",
        "Sales Intelligence",
        "Performance Optimization",
        "Business Insights",
      ],
      achievements: [
        "Dealer and retailer sales performance tracking",
        "Best sales executive identification",
        "Product trend and business analytics",
        "Interactive AI analytics dashboard",
      ],
    },

    {
      title: "WhatsApp AI Assistant",
      subtitle: "LLM-Powered Conversational Automation",
      category: "AI",
      role: "Conversational AI & Workflow Automation",
      description:
        "Enterprise-grade WhatsApp AI assistant built with LLM integration to automate customer communication, provide contextual responses, and streamline business workflows.",
      technologies: [
        "LangChain",
        "Gemini",
        "Python",
        "Twilio",
        "LLM",
        "Vector Database",
      ],
      metrics: {
        users: "24x7 AI Support",
        automation: "70% Query Reduction",
        scale: "Multi-Workflow Automation",
        impact: "Context-Aware Conversations",
      },
      aiCapabilities: [
        "LLM Integration",
        "Conversational AI",
        "Memory-Aware Responses",
        "Workflow Automation",
      ],
      achievements: [
        "AI-powered contextual responses",
        "WhatsApp workflow integration",
        "Multi-step conversational intelligence",
        "Business process automation",
      ],
    },

    {
      title: "AI RAG Platform",
      subtitle: "Document Intelligence & Knowledge Retrieval",
      category: "AI",
      role: "Retrieval-Augmented AI System",
      description:
        "AI-driven document intelligence platform enabling semantic search, contextual question generation, knowledge extraction, and enterprise document analysis.",
      technologies: [
        "FastAPI",
        "LangChain",
        "LlamaIndex",
        "Vector DB",
        "Python",
        "AI Models",
      ],
      metrics: {
        users: "Enterprise Knowledge System",
        automation: "Semantic Knowledge Retrieval",
        scale: "Large Document Processing",
        impact: "AI-Powered Insights",
      },
      aiCapabilities: [
        "RAG Architecture",
        "Semantic Search",
        "Knowledge Extraction",
        "Document Intelligence",
      ],
      achievements: [
        "Automated contextual question generation",
        "Semantic document understanding pipeline",
        "Enterprise knowledge indexing",
        "AI-assisted document workflows",
      ],
    },

    /* =========================
       OLD PROJECTS
    ========================== */

    {
      title: "Biometric Attendance & Device Management System",
      subtitle: "Enterprise Attendance Ecosystem",
      category: "ERP",
      role: "Senior Project Manager — Edulab",
      description:
        "Enterprise biometric attendance platform with secure onboarding, device management, and real-time attendance monitoring across institutions.",
      technologies: ["Angular", "Node", "MySQL", "REST API"],
      metrics: {
        users: "25K+ Students",
        automation: "Automated Attendance",
        scale: "120+ Devices",
        impact: "99.2% Accuracy",
      },
      aiCapabilities: [
        "Real-Time Monitoring",
        "Automation Workflow",
        "Secure Authentication",
      ],
      achievements: [
        "Secure biometric onboarding",
        "Real-time device monitoring",
        "Automated attendance verification",
        "Teacher admin dashboard",
      ],
    },

    {
      title: "CET Registration System",
      subtitle: "Scalable Examination Registration Platform",
      category: "Web",
      role: "Senior Project Manager — Edulab",
      description:
        "Scalable examination registration platform with authentication, analytics dashboard, and high-volume application handling.",
      technologies: ["React", "Node", "MySQL"],
      metrics: {
        users: "50K+ Applicants",
        automation: "60% Faster Processing",
        scale: "State-Level Platform",
        impact: "Pan India Reach",
      },
      aiCapabilities: [
        "Analytics Dashboard",
        "Authentication System",
        "Workflow Optimization",
      ],
      achievements: [
        "Multi-factor authentication",
        "Admin analytics dashboard",
        "RBAC implementation",
        "High-scale applicant processing",
      ],
    },

    {
      title: "OMNI Channel WhatsApp Integration",
      subtitle: "Unified Communication Ecosystem",
      category: "ERP",
      role: "Senior PM — Edulab",
      description:
        "Unified communication system integrating LMS, admissions, examinations, and notifications into a centralized WhatsApp ecosystem.",
      technologies: ["React", "Node", "REST API"],
      metrics: {
        users: "18K+ Students",
        automation: "40% Support Efficiency",
        scale: "Multi-Service Integration",
        impact: "Multi Campus Operations",
      },
      aiCapabilities: [
        "Workflow Automation",
        "API Gateway",
        "Communication Integration",
      ],
      achievements: [
        "Microservice communication linking",
        "API gateway architecture",
        "WhatsApp automation workflows",
        "Cross-platform integration",
      ],
    },

    {
      title: "International Data Analytics System",
      subtitle: "Global Reporting & Data Intelligence",
      category: "Data",
      role: "Senior Analyst — Jodhpur Informatics",
      description:
        "Global analytics and reporting system for large-scale data normalization, reporting, and operational intelligence across international business operations.",
      technologies: ["MySQL", "Excel", "HTML", "CSS"],
      metrics: {
        users: "Corporate Clients",
        automation: "Data Processing Optimization",
        scale: "Millions of Records",
        impact: "35% Accuracy Improvement",
      },
      aiCapabilities: [
        "Data Intelligence",
        "Reporting Automation",
        "Data Normalization",
      ],
      achievements: [
        "Large-scale data normalization",
        "Global client reporting system",
        "Quality improvement workflows",
        "Analytics optimization",
      ],
    },
  ];

  const filters = ["All", "AI", "ERP", "Web", "Data"];

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
      className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
            Enterprise Portfolio
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI Solutions & Enterprise Projects
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Delivering enterprise-grade AI systems, ERP platforms,
            analytics ecosystems, intelligent automation, and scalable
            business solutions across multiple domains.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
              <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
              <p className="text-slate-400 text-sm mt-1">
                Projects Delivered
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
              <h3 className="text-3xl font-bold text-cyan-400">9+</h3>
              <p className="text-slate-400 text-sm mt-1">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
              <h3 className="text-3xl font-bold text-cyan-400">AI</h3>
              <p className="text-slate-400 text-sm mt-1">
                Automation & Analytics
              </p>
            </div>

          </div>

        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">

              {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {filtered.map((project, index) => (

            <div
              key={index}
              data-id={index}
              className={`project-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                visible.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between mb-6">

                <span className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wide">
                  {project.category}
                </span>

                <span className="text-xs text-slate-500">
                  Enterprise Solution
                </span>

              </div>

              {/* Title */}
              <div className="relative z-10 mb-6">

                <h3 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-cyan-300 font-medium mb-3">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-500">
                  {project.role}
                </p>

              </div>

              {/* Description */}
              <p className="relative z-10 text-slate-300 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">

                {Object.entries(project.metrics).map(([k, v], i) => (

                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-cyan-300 font-semibold text-sm mb-1">
                      {v}
                    </p>

                    <p className="text-slate-500 text-xs capitalize">
                      {k}
                    </p>
                  </div>

                ))}

              </div>

              {/* AI Capabilities */}
              <div className="relative z-10 mb-8">

                <h4 className="text-white font-semibold mb-4">
                  Key Capabilities
                </h4>

                <div className="flex flex-wrap gap-2">

                  {project.aiCapabilities.map((item, i) => (

                    <span
                      key={i}
                      className="px-3 py-2 rounded-xl text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-200"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Stack */}
              <div className="relative z-10 mb-8">

                <h4 className="text-white font-semibold mb-4">
                  Technology Stack
                </h4>

                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-2 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Achievements */}
              <div className="relative z-10">

                <h4 className="text-white font-semibold mb-4">
                  Business Outcomes
                </h4>

                <ul className="space-y-3">

                  {project.achievements.map((achievement, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                    >
                      <span className="text-cyan-400 mt-1">✦</span>
                      {achievement}
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