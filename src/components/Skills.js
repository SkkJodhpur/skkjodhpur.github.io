import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openMobile, setOpenMobile] = useState(null);

  const skillCategories = [
    {
      name: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        { name: "Machine Learning", level: 70, color: "bg-indigo-500" },
        { name: "Deep Learning", level: 70, color: "bg-indigo-500" },
        { name: "LangChain", level: 80, color: "bg-blue-500" },
        { name: "Prompt Engineering", level: 85, color: "bg-cyan-500" },
        { name: "RAG", level: 75, color: "bg-teal-500" },
        { name: "NLP", level: 70, color: "bg-emerald-500" },
      ],
    },
    {
      name: "Agile & Project Management Tools",
      icon: "🎯",
      skills: [
        { name: "Jira", level: 95, color: "bg-blue-500" },
        { name: "MS Planner", level: 85, color: "bg-indigo-400" },
        { name: "Taiga", level: 85, color: "bg-indigo-400" },
        { name: "Trello", level: 90, color: "bg-sky-500" },
        { name: "Confluence", level: 85, color: "bg-indigo-400" },
      ],
    },
    {
      name: "Frontend & Backend Development",
      icon: "💻",
      skills: [
        { name: "HTML / CSS", level: 90, color: "bg-indigo-500" },
        { name: "JavaScript (ES6+)", level: 85, color: "bg-yellow-500" },
        { name: "React", level: 80, color: "bg-sky-500" },
        { name: "MySQL", level: 85, color: "bg-green-500" },
        { name: "Python", level: 75, color: "bg-orange-400" },
        { name: "Node.js", level: 70, color: "bg-purple-500" },
      ],
    },
    {
      name: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git / GitHub Actions", level: 85, color: "bg-emerald-500" },
        { name: "Docker", level: 70, color: "bg-indigo-500" },
        { name: "AWS", level: 70, color: "bg-yellow-500" },
        { name: "Contabo", level: 80, color: "bg-orange-500" },
        { name: "Vercel", level: 88, color: "bg-yellow-500" },
        { name: "Adobe XD", level: 90, color: "bg-indigo-500" },
        { name: "Photoshop", level: 85, color: "bg-red-500" },
        { name: "Figma", level: 90, color: "bg-pink-500" },
      ],
    },
    {
      name: "CRM / CMS Suites",
      icon: "📊",
      skills: [
        { name: "Salesforce Admin", level: 75, color: "bg-blue-500" },
        { name: "Sales Cloud", level: 70, color: "bg-blue-600" },
        { name: "Service Cloud", level: 65, color: "bg-blue-700" },
        { name: "Marketing Cloud", level: 60, color: "bg-blue-800" },
        { name: "Salesforce Platform", level: 70, color: "bg-blue-400" },
        { name: "Zoho / Freshdesk", level: 85, color: "bg-green-500" },
        { name: "WordPress / Shopify", level: 80, color: "bg-indigo-500" },
        { name: "Moodle LMS", level: 75, color: "bg-orange-400" },
      ],
    },
    {
      name: "Microsoft Office & Productivity",
      icon: "🧾",
      skills: [
        { name: "MS Excel (Pivot, V-Lookup, H-lookup, Macros)", level: 95, color: "bg-green-600" },
        { name: "MS Word", level: 90, color: "bg-blue-600" },
        { name: "PowerPoint", level: 88, color: "bg-orange-600" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Skill & Proficiency Matrix
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A structured view of my technical and managerial competencies,
            categorized by technology stack and professional tools.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-12 gap-8">
          {/* Categories */}
          <div className="col-span-4 space-y-3">
            {skillCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all text-left ${
                  activeCategory === index
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg"
                    : "bg-white text-slate-700 border-slate-200 hover:border-indigo-400"
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="font-semibold">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="col-span-8">
            <div className="rounded-3xl bg-white/90 backdrop-blur border border-indigo-200 shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">
                  {skillCategories[activeCategory].icon}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {skillCategories[activeCategory].name}
                </h3>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View (Accordion) */}
        <div className="md:hidden space-y-4">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-indigo-200 shadow"
            >
              <button
                onClick={() =>
                  setOpenMobile(openMobile === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="font-semibold text-slate-800">
                    {cat.name}
                  </span>
                </div>

                <i
                  className={`fa-solid ${
                    openMobile === index
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  } text-slate-500`}
                ></i>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openMobile === index
                    ? "max-h-[900px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 space-y-5 border-t border-indigo-100">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="pt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-indigo-600">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-slate-200 rounded-full">
                        <div
                          className={`h-full ${skill.color} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Capabilities */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Core Professional Capabilities
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Strategic, analytical, and creative strengths applied across
            projects, leadership, and technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "UI/UX Design",
              "E-commerce Management",
              "Project Leadership",
              "Stakeholder Communication",
              "Business Analysis",
              "Digital Transformation",
              "Data Analytics",
              "AI Strategy",
              "Cloud Architecture",
            ].map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-full border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition shadow"
              >
                {[
                  "🎨",
                  "⚙️",
                  "🧩",
                  "🤝",
                  "📊",
                  "🚀",
                  "📈",
                  "🧠",
                  "☁️",
                ][index]}{" "}
                <span className="ml-2">{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;