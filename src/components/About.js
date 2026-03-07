import React, { useState } from "react";

const About = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) =>
    setOpenSection(openSection === section ? null : section);

  const personalInfo = [
    { label: "Date of Birth", value: "01/07/1991" },
    { label: "Languages Known", value: "English and Hindi" },
    { label: "Father's Name", value: "Mr. Vijay Kumar Khanchandani" },
    { label: "Mother's Name", value: "Mrs. Kavita Khanchandani" },
  ];

  const ORCIDIcon = () => (
    <i className="fa-brands fa-orcid text-[#A6CE39] text-2xl"></i>
  );
  const LinkedInIcon = () => (
    <i className="fa-brands fa-linkedin text-[#0A66C2] text-2xl"></i>
  );
  const GithubIcon = () => (
    <i className="fa-brands fa-github text-black text-2xl"></i>
  );
  const EmailIcon = () => (
    <i className="fa-solid fa-envelope text-[#D44638] text-2xl"></i>
  );
  const WhatsAppIcon = () => (
    <i className="fa-brands fa-whatsapp text-[#25D366] text-2xl"></i>
  );
  const MediumIcon = () => (
    <i className="fa-brands fa-medium text-black text-2xl"></i>
  );
  const SalesforceIcon = () => (
    <i className="fa-brands fa-salesforce text-[#00A1E0] text-2xl"></i>
  );

  const socialLinks = [
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0003-4510-2193",
      icon: <ORCIDIcon />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ershaileshkumarkhanchandani/",
      icon: <LinkedInIcon />,
    },
    { name: "Github", url: "https://github.com/SkkJodhpur", icon: <GithubIcon /> },
    { name: "Email", url: "mailto:Skk.jodhpur@gmail.com", icon: <EmailIcon /> },
    { name: "WhatsApp", url: "https://wa.me/918946864160", icon: <WhatsAppIcon /> },
    { name: "Medium", url: "https://medium.com/@skk.jodhpur", icon: <MediumIcon /> },
    { name: "Salesforce", url: "https://www.salesforce.com/trailblazer/skkjodhpur", icon: <SalesforceIcon /> },
  ];

  const publications = [
    {
      type: "Research Paper",
      icon: "fa-solid fa-file-lines text-blue-500",
      title:
        "A COMPARATIVE ANALYSIS OF PROACTIVE ROUTING PROTOCOLS (DSDV, OLSR) & REACTIVE ROUTING PROTOCOLS (AODV, DSR) IN MANET USING NS-3",
      journal:
        "International Journal of Scientific Research in Engineering and Management (IJSREM)",
      date: "2024-04-15",
      doi: "10.55041/ijsrem30773",
      url: "https://ijsrem.com/download/a-comparative-analysis-of-proactive-routing-protocols-dsdv-olsr-reactive-routing-protocols-aodv-dsr-in-manet-using-ns-3/",
    },
    {
      type: "Book Chapter",
      icon: "fa-solid fa-book text-purple-500",
      title: "Harnessing Artificial Intelligence to Ensure Diverse Global Teams",
      publisher: "Elsevier",
      edition: "1st Edition - March 1, 2026",
      paperback: "9780443341359",
      ebook: "9780443341366",
      url: "https://shop.elsevier.com/books/harnessing-artificial-intelligence-to-ensure-diverse-global-teams/garg/978-0-443-34135-9",
    },
  ];

  const teachingExperience = [
    {
      institute: "HSNC University, Mumbai",
      role: "Visiting Faculty",
      subjects: "Analytics, AI and Engineering Modules",
    },
    {
      institute: "IAQS Institute, Mumbai",
      role: "Visiting Faculty",
      subjects: "AI and Engineering Modules",
    },
    {
      institute: "MBM University, Jodhpur- 2024",
      role: "Guest Faculty - Computer Science",
      subjects: "AI, Engineering, Networking",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.2)_1px,transparent_0)] [background-size:36px_36px] opacity-30" />

      {/* Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-300/30 blur-[140px] rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-300/30 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14 tracking-tight text-center md:text-left">
          About Me
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-14">

          {/* Left Column */}
          <div className="space-y-10">

            {/* Summary Card */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-200/40 shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-l-4 border-blue-600 pl-3">
                Professional Summary
              </h3>
              <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  AI Value Creator, Project Manager, Technical Consultant in React and Python, and Educator with 12+ years of diverse experience in AI/ML development, EdTech innovation, and enterprise software delivery. With a strong academic foundation—ME with Honours in Computer Science—and hands-on expertise in LLM fine-tuning, RAG pipelines, model optimization, and end-to-end AI solution design, I bring both technical depth and strategic execution.
                </p>
                <p>
                  I have led cross-functional teams, driven complex AI projects, and contributed to industry research, including authorship in an Elsevier publication on global AI adoption.
                </p>
                <p>
                  As a Guest Faculty in Computer Science, I combine industry experience with teaching, focusing on helping students understand modern AI, ML, and system-design principles. I am passionate about building practical, impactful AI products for education, government processes, and large-scale enterprise environments.
                </p>
              </div>
            </div>

            {/* Teaching */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-200/40 shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-l-4 border-blue-600 pl-3">
                Industry & Academic Teaching Experience
              </h3>
              <div className="space-y-4">
                {teachingExperience.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-sky-50 border border-blue-100"
                  >
                    <p className="font-semibold">{t.institute}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                    <p className="text-xs text-gray-500">Subjects: {t.subjects}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">

            {/* Personal Info */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-200/40 shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-l-4 border-blue-600 pl-3">
                Personal Information
              </h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-blue-100 pb-2 text-sm"
                  >
                    <span className="font-medium">{info.label}</span>
                    <span>{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-200/40 shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-l-4 border-blue-600 pl-3">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border shadow hover:shadow-lg hover:scale-105 transition"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-200/40 shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-l-4 border-blue-600 pl-3">
                Publications & Research
              </h3>
              <div className="space-y-4">
                {publications.map((pub, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-sky-50 border border-blue-100"
                  >
                    <i className={`${pub.icon} text-lg mb-1`}></i>

                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 underline block"
                    >
                      {pub.title}
                      <i className="fa-solid fa-up-right-from-square ml-2"></i>
                    </a>

                    {pub.paperback && (
                      <p className="text-xs text-gray-600">Paperback ISBN: {pub.paperback}</p>
                    )}
                    {pub.ebook && (
                      <p className="text-xs text-gray-600">eBook ISBN: {pub.ebook}</p>
                    )}
                    {pub.journal && (
                      <p className="text-sm text-gray-600">{pub.journal}</p>
                    )}
                    {pub.date && (
                      <p className="text-xs text-gray-600">Published: {pub.date}</p>
                    )}
                    {pub.doi && (
                      <p className="text-xs text-gray-600">
                        DOI:{" "}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          className="underline text-blue-600"
                        >
                          {pub.doi}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-5">

          <Accordion
            label="Professional Summary"
            section="summary"
            open={openSection}
            toggle={toggleSection}
          >
            <div className="space-y-3">
              <p>
                AI Value Creator, Project Manager ,Technical Consultant in React and Python, and Educator with 12+ years of diverse experience in AI/ML development, EdTech innovation, and enterprise software delivery. With a strong academic foundation—ME with Honours in Computer Science—and hands-on expertise in LLM fine-tuning, RAG pipelines, model optimization, and end-to-end AI solution design, I bring both technical depth and strategic execution.
              </p>
              <p>
                I have led cross-functional teams, driven complex AI projects, and contributed to industry research, including authorship in an Elsevier publication on global AI adoption.
              </p>
              <p>
                As a Guest Faculty in Computer Science, I combine industry experience with teaching, focusing on helping students understand modern AI, ML, and system-design principles. I am passionate about building practical, impactful AI products for education, government processes, and large-scale enterprise environments.
              </p>
            </div>
          </Accordion>

          <Accordion
            label="Personal Information"
            section="personal"
            open={openSection}
            toggle={toggleSection}
          >
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-blue-100 pb-1"
              >
                <span className="font-medium">{info.label}</span>
                <span>{info.value}</span>
              </div>
            ))}
          </Accordion>

          <Accordion
            label="Industry & Academic Teaching Experience"
            section="teach"
            open={openSection}
            toggle={toggleSection}
          >
            {teachingExperience.map((t, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-sky-50 border border-blue-100"
              >
                <p className="font-semibold">{t.institute}</p>
                <p className="text-xs">{t.role}</p>
                <p className="text-xs text-gray-500">{t.subjects}</p>
              </div>
            ))}
          </Accordion>

          <Accordion
            label="Publications & Research"
            section="pub"
            open={openSection}
            toggle={toggleSection}
          >
            {publications.map((pub, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/80 border border-blue-100"
              >
                <i className={`${pub.icon} text-lg`}></i>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 underline block"
                >
                  {pub.title}
                  <i className="fa-solid fa-up-right-from-square ml-2"></i>
                </a>
                {pub.paperback && (
                  <p className="text-xs text-gray-600">Paperback ISBN: {pub.paperback}</p>
                )}
                {pub.ebook && (
                  <p className="text-xs text-gray-600">eBook ISBN: {pub.ebook}</p>
                )}
                {pub.journal && (
                  <p className="text-xs text-gray-600">{pub.journal}</p>
                )}
                {pub.date && (
                  <p className="text-xs text-gray-600">Published: {pub.date}</p>
                )}
              </div>
            ))}
          </Accordion>

          <Accordion
            label="Connect With Me"
            section="connect"
            open={openSection}
            toggle={toggleSection}
          >
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 rounded-xl bg-white border shadow"
                >
                  <span className="w-8 h-8 flex items-center justify-center">
                    {link.icon}
                  </span>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Accordion Component
const Accordion = ({ label, section, open, toggle, children }) => (
  <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-200/40 shadow">
    <button
      type="button"
      className="w-full flex justify-between items-center p-4 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => toggle(section)}
    >
      <span className="text-left">{label}</span>
      <i
        className={`fa-solid ${
          open === section ? "fa-chevron-up" : "fa-chevron-down"
        }`}
      ></i>
    </button>

    {open === section && (
      <div className="p-4 text-gray-700 text-sm leading-relaxed">{children}</div>
    )}
  </div>
);

export default About;
