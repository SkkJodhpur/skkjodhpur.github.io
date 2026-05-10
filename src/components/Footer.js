import React, { useState } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const expertiseAreas = [
    { name: "Technical Leadership", description: "Driving digital transformation initiatives" },
    { name: "Web Development", description: "Full-stack development solutions" },
    { name: "E-commerce", description: "Scalable online store implementations" },
    { name: "Cloud Architecture", description: "AWS & Azure solutions" },
    { name: "Team Management", description: "Building high-performing engineering teams" },
    { name: "Innovation", description: "Transforming business through technology" },
  ];

  const services = [
    { title: "Enterprise Solutions", description: "Custom-tailored software for large organizations" },
    { title: "Cloud Migration", description: "Reliably move your infrastructure to the cloud" },
    { title: "Team Training", description: "Develop your development teams" },
    { title: "Architecture Design", description: "Modern, scalable system architectures" },
  ];

  const contactInfo = [
    {
      type: "location",
      icon: <i className="fa-solid fa-location-dot text-blue-500 text-lg"></i>,
      details: (
        <>
          <span className="font-medium">Mumbai Office:</span> Neelyog Veydanta C-302, 3rd Floor, Nityanand Nagar, Ghatkopar West, Mumbai 400086
        </>
      ),
    },
    {
      type: "home",
      icon: <i className="fa-solid fa-house text-blue-500 text-lg"></i>,
      details: (
        <>
          <span className="font-medium">Jodhpur Office:</span> 805/A Near Dalda Building, Upper Chopasni Road No-7, Sardarpura, Jodhpur - 342003
        </>
      ),
    },
    {
      type: "email",
      icon: <i className="fa-solid fa-envelope text-blue-500 text-lg"></i>,
      details: (
        <>
          Email:{" "}
          <a href="mailto:Skk.jodhpur@gmail.com" className="hover:text-white transition-colors">
            Skk.jodhpur@gmail.com
          </a>
        </>
      ),
    },
    {
      type: "phone",
      icon: <i className="fa-solid fa-phone text-blue-500 text-lg"></i>,
      details: (
        <>
          Phone:{" "}
          <a href="tel:+918946864160" className="hover:text-white transition-colors">
            +91-8946864160
          </a>
        </>
      ),
    },
  ];

  const ORCIDIcon = () => (
    <i className="fa-brands fa-orcid text-[#A6CE39] text-lg"></i>
  );
  const LinkedInIcon = () => (
    <i className="fa-brands fa-linkedin text-[#0A66C2] text-lg"></i>
  );
  const GithubIcon = () => (
    <i className="fa-brands fa-github text-black text-lg"></i>
  );
  const EmailIcon = () => (
    <i className="fa-solid fa-envelope text-[#D44638] text-lg"></i>
  );
  const WhatsAppIcon = () => (
    <i className="fa-brands fa-whatsapp text-[#25D366] text-lg"></i>
  );
  const MediumIcon = () => (
    <i className="fa-brands fa-medium text-black text-lg"></i>
  );
  const SalesforceIcon = () => (
    <i className="fa-brands fa-salesforce text-[#00A1E0] text-lg"></i>
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

  return (
    <footer className="bg-slate-800 border-t border-slate-700 text-white">
      <div className="section-container py-12 px-6 md:px-12">

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <i className="fa-solid fa-bolt text-blue-500 mr-2"></i> Navigation
            </h3>
            <div className="flex flex-col sm:flex-row sm:gap-8">
              <ul className="space-y-2 mb-6 sm:mb-0">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy
                      smooth
                      offset={-80}
                      duration={600}
                      className="text-gray-400 hover:text-white flex items-center transition-all cursor-pointer"
                    >
                      <span className="mr-2">•</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {navLinks.slice(4).map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy
                      smooth
                      offset={-80}
                      duration={600}
                      className="text-gray-400 hover:text-white flex items-center transition-all cursor-pointer"
                    >
                      <span className="mr-2">•</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <i className="fa-solid fa-lightbulb text-blue-500 mr-2"></i> Expertise
            </h3>
            <div className="space-y-4">
              {expertiseAreas.map((area, i) => (
                <div key={i}>
                  <div className="font-semibold">{area.name}</div>
                  <div className="text-gray-400 text-sm">{area.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <i className="fa-solid fa-shield-halved text-blue-500 mr-2"></i> Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="p-3 hover:bg-gray-800 rounded-md transition-colors">
                  <h4 className="font-medium hover:text-blue-400 transition-colors">{service.title}</h4>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <i className="fa-solid fa-address-book text-blue-500 mr-2"></i> Contact
            </h3>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.type} className="flex items-start space-x-3 text-left">
                  {item.icon}
                  <div className="text-gray-400 text-sm">{item.details}</div>
                </div>
              ))}

              {/* Connect with me */}
              <div className="mt-6">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 shadow-md hover:shadow-blue-500/40 transition-all duration-300"
                      aria-label={`Visit ${link.name} profile - Shailesh Kumar Khanchandani`}
                      title={`Connect with Shailesh Kumar Khanchandani on ${link.name}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📱 Mobile Drawer (UNCHANGED) */}
        <div className="md:hidden space-y-4">
          {[
            { id: "nav", title: "Navigation", icon: "fa-bolt", content: (
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        smooth
                        offset={-80}
                        duration={600}
                        className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) },
            { id: "exp", title: "Expertise", icon: "fa-lightbulb", content: (
                <div className="space-y-3">
                  {expertiseAreas.map((e, i) => (
                    <div key={i}>
                      <div className="font-semibold">{e.name}</div>
                      <div className="text-sm text-gray-400">{e.description}</div>
                    </div>
                  ))}
                </div>
              ) },
            { id: "srv", title: "Services", icon: "fa-shield-halved", content: (
                <ul className="space-y-3">
                  {services.map((s, i) => (
                    <li key={i}>
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-sm text-gray-400">{s.description}</div>
                    </li>
                  ))}
                </ul>
              ) },
          ].map((section) => (
            <div key={section.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-semibold"
              >
                <span className="flex items-center">
                  <i className={`fa-solid ${section.icon} text-blue-500 mr-2`}></i>
                  {section.title}
                </span>
                <i className={`fa-solid ${openSection === section.id ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              </button>
              {openSection === section.id && (
                <div className="px-5 pb-4 bg-slate-900 transition-all duration-500">
                  {section.content}
                </div>
              )}
            </div>
          ))}

          {/* Contact always visible */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fa-solid fa-address-book text-blue-500 mr-2"></i> Contact
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div key={item.type} className="flex items-start space-x-3 text-left">
                  {item.icon}
                  <div className="text-gray-400 text-sm">{item.details}</div>
                </div>
              ))}
              <div className="mt-4">
                <h4 className="font-semibold mb-3">Connect with me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300"
                      aria-label={`Visit ${link.name} profile - Shailesh Kumar Khanchandani`}
                      title={`Connect with Shailesh Kumar Khanchandani on ${link.name}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 Newsletter Section */}
        <div className="mt-12 text-center bg-gray-800 rounded-xl py-8 px-4 shadow-md hover:shadow-blue-500/30 transition-all duration-300">
          <h3 className="text-2xl font-bold text-blue-400 mb-2">🗞 NEWSLETTER</h3>
          <h4 className="text-xl font-semibold mb-1">AI Revolution</h4>
          <p className="text-gray-400 mb-5 italic">“AI Revolution: Transforming Our World”</p>
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7151587962542034945"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0A66C2] text-white font-medium py-2 px-6 rounded-full hover:bg-[#004182] transition-colors duration-300"
          >
            Subscribe on LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Shailesh Kumar Khanchandani • All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
