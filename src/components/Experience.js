import React, { useState, useEffect, useRef } from "react";

const Experience = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const timelineRef = useRef(null);

  const experiences = [
    {
      company: "Vishleshan Software Solutions Pvt. Ltd",
      position: "Project Manager – AI Product & Delivery Manager",
      duration: "Aug 2025 - Present",
      responsibilities: [
        "Managed the implementation of AI-driven solutions and analytics platforms for enterprise clients in automotive and manufacturing sectors.",
        "Maintained clear communication and coordination between client leadership teams and internal engineering units.",
        "Served as the primary point of contact for clients like Polycab, Luminous, and TMCV, ensuring smooth project delivery.",
        "Oversaw project timelines, scope, resource allocation, and payment progress tracking under Agile methodology.",
        "Designed and deployed AI-powered modules including automated workflow systems and intelligent assistant/chatbot solutions.",
      ],
      achievements: [
        "Successfully deployed AI-enabled operational and reporting modules across key enterprise clients.",
        "Improved process efficiency and decision-making through ML model integration and workflow automation.",
        "Built strong stakeholder trust and long-term relationships, leading to continuous technology engagement and expansion.",
      ],
      technologies: [
        "JIRA",
        "Taiga",
        "React",
        "Python",
        "MySQL",
        "Node",
        "My SQL",
        "My SQL Server",
        "Jenkins",
        "Git",
        "Docker",
        "AWS",
        "MS Planner",
        "No-code Tools: Cursor, Trae, Lovable",
      ],
    },
    {
      company: "Edulab Edutech",
      position: "Senior Project Manager – Education ERP Implementation & Management",
      duration: "Sept 2024 - July 2025",
      responsibilities: [
        "Implemented Admission, Exam, SRM, and AI-powered modules.",
        "Maintained effective communication with university officials and internal teams.",
        "Acted as main point of contact for universities.",
        "Oversaw timelines, scope, resources, and payment reconciliation.",
        "Designed and deployed AI modules including student flow bots.",
      ],
      achievements: [
        "Successfully implemented ERP solutions across major universities.",
        "Enhanced academic efficiency through AI-powered modules.",
        "Established strong stakeholder relationships.",
      ],
      technologies: [
        "JIRA",
        "Trello",
        "Confluence",
        "Slack",
        "React",
        "Python",
        "My SQL",
        "My SQL Server",
        "Jenkins",
        "Git",
        "Docker",
        "AWS",
        "Node",
        "No-code Tools: Cursor, Trae, Lovable",
      ],
    },
    {
      company: "CHIRPN IT SOLUTION",
      position: "Senior Associate Project Manager",
      duration: "July 2021 – July 2024",
      responsibilities: [
        "Led projects involving advanced AI technologies.",
        "Established robust communication channels with stakeholders.",
        "Conducted project studies for improvement areas.",
        "Provided leadership to teams of up to 40 individuals.",
        "Managed project documentation and large-scale engagements.",
        "Utilized JIRA and TRELLO for project management.",
        "Offered guidance in Functional Testing and UAT.",
        "Facilitated Agile ceremonies and team collaboration.",
      ],
      achievements: [
        "Successfully delivered innovative solutions exceeding customer expectations.",
        "Optimized project performance through effective tool utilization.",
        "Enhanced team engagement and alignment through Agile practices.",
      ],
      technologies: [
        "JIRA",
        "Trello",
        "Confluence",
        "Salesforce",
        "Zoho One",
        "Slack",
        "React",
        "Python",
        "My SQL",
        "Node",
        "Jenkins",
        "Docker",
        "Git",
        "No-code Tools: Cursor, Trae, Lovable",
      ],
    },
    {
      company: "Utkarsh Classes & Edutech Pvt. Ltd",
      position: "Technical Lead (UI & UX Designer) and Web Developer",
      duration: "September 2019 - June 2021",
      responsibilities: [
        "Oversaw development and structural enhancements of Utkarsh's website and application.",
        "Designed structured layouts for in-house applications using Adobe XD and Wireframe.",
        "Implemented media delivery platforms like Vimeo, AWS, and JW Player.",
        "Conducted Functional Testing and User Acceptance Testing.",
      ],
      achievements: [
        "Successfully led technical aspects of website and application development.",
        "Enhanced user experience through intuitive UI/UX design.",
        "Implemented efficient media delivery solutions.",
      ],
      technologies: [
        "Zoho One",
        "WordPress",
        "React",
        "Python",
        "MySQL",
        "Adobe XD",
        "Figma",
        "Vimeo",
        "AWS",
        "JW Player",
      ],
    },
    {
      company: "SIE Krishnas Group",
      position: "Buyer Coordination E-Commerce Specialist",
      duration: "June 2016 - March 2019",
      responsibilities: [
        "Created and distributed engaging written and graphic content across multiple platforms.",
        "Utilized SEO and SMO techniques to enhance brand visibility.",
        "Managed inventory for various e-commerce platforms.",
        "Processed shipping for multiple companies.",
      ],
      achievements: [
        "Enhanced brand visibility through effective SEO and SMO strategies.",
        "Successfully managed inventory across multiple e-commerce platforms.",
        "Improved customer engagement through strategic content distribution.",
      ],
      technologies: [
        "Marketing Ads: Instagram, Facebook",
        "SEO/SMO: Inpage / Offpage",
        "WordPress",
        "HTML/CSS",
      ],
    },
    {
      company: "Golechha Investments",
      position: "Business Development and Technical Support Officer",
      duration: "December 2015 - June 2016",
      responsibilities: [
        "Provided technical and software support to customers and employees.",
        "Implemented strategies to drive sales growth.",
        "Managed customer relationships and resolved technical issues.",
      ],
      achievements: [
        "Improved customer satisfaction through efficient technical support.",
        "Contributed to business growth through effective sales strategies.",
      ],
      technologies: [
        "Technical Support Systems: Windows and Linux",
        "Zoho CRM",
        "Sales Tools",
      ],
    },
    {
      company: "Jodhpur Informatics",
      position: "Senior E-Research Data Analyst",
      duration: "August 2013 - September 2015",
      responsibilities: [
        "Analyzed and corrected errors in e-research data.",
        "Collaborated with Perfume Worldwide Inc. (USA) for data analysis projects.",
        "Provided resolution support to customers and vendors in the US and Canada.",
      ],
      achievements: [
        "Successfully managed data analysis projects with international clients.",
        "Improved data accuracy and research quality.",
      ],
      technologies: ["MS Office", "SQL", "Mendeley", "E-research Platforms"],
    },
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );
      setScrollProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".timeline-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.18)_1px,transparent_0)] [background-size:36px_36px] opacity-30" />

      {/* Glow */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-blue-300/30 blur-[150px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-indigo-300/30 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center md:text-left">
          Professional Experience
        </h2>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative border-l-2 border-blue-200 pl-6 md:pl-12"
        >
          <div
            className="absolute left-0 top-0 w-1 bg-blue-600 rounded-full"
            style={{ height: `${scrollProgress}%` }}
          ></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className="timeline-card relative mb-14 group"
            >
              {/* Dot */}
              <div
                className={`absolute -left-[18px] w-9 h-9 rounded-full border-4 border-white shadow-lg transition ${
                  visibleIndices.includes(index)
                    ? "bg-blue-600 animate-pulse"
                    : "bg-blue-300"
                }`}
              ></div>

              {/* Desktop Card */}
              <div className="hidden md:block rounded-3xl bg-white/85 backdrop-blur-xl border border-blue-200/40 shadow-xl p-8 hover:shadow-2xl transition">
                <div className="mb-4">
                  <h3 className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">
                    {exp.position}
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">{exp.duration}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-semibold mb-2">Responsibilities</h5>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="text-sm text-slate-600 flex">
                          <span className="text-blue-500 mr-2">•</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold mb-2">Achievements</h5>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="text-sm text-slate-600 flex">
                          <span className="text-emerald-500 mr-2">✓</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-sm font-semibold mb-2">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Card */}
              <div className="md:hidden rounded-2xl bg-white/85 backdrop-blur-xl border border-blue-200/40 shadow-lg p-6">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-start text-left"
                >
                  <div>
                    <h3 className="text-blue-700 text-xs font-semibold uppercase">
                      {exp.company}
                    </h3>
                    <h4 className="text-base font-bold mt-1">
                      {exp.position}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {exp.duration}
                    </p>
                  </div>

                  <svg
                    className={`w-5 h-5 transform transition ${
                      activeSection === index ? "rotate-180" : ""
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
                    activeSection === index
                      ? "max-h-[1200px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-5 border-t border-blue-100 pt-4">
                    <div>
                      <h5 className="text-sm font-semibold mb-2">
                        Responsibilities
                      </h5>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="text-sm text-slate-600 flex">
                            <span className="text-blue-500 mr-2">•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold mb-2">Achievements</h5>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="text-sm text-slate-600 flex">
                            <span className="text-emerald-500 mr-2">✓</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-blue-50 text-blue-700 text-[11px] px-2 py-1 rounded-full border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
