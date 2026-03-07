import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bottomPadding, setBottomPadding] = useState(0);
  const footerRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0003-4510-2193",
      icon: <i className="fa-brands fa-orcid text-[#A6CE39] text-xl"></i>,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ershaileshkumarkhanchandani/",
      icon: <i className="fa-brands fa-linkedin text-[#0A66C2] text-xl"></i>,
    },
    { name: "Github", url: "https://github.com/SkkJodhpur", icon: <i className="fa-brands fa-github text-black text-xl"></i> },
    { name: "Email", url: "mailto:Skk.jodhpur@gmail.com", icon: <i className="fa-solid fa-envelope text-[#D44638] text-xl"></i> },
    { name: "WhatsApp", url: "https://wa.me/918946864160", icon: <i className="fa-brands fa-whatsapp text-[#25D366] text-xl"></i> },
    { name: "Medium", url: "https://medium.com/@skk.jodhpur", icon: <i className="fa-brands fa-medium text-black text-xl"></i> },
    { name: "Salesforce", url: "https://www.salesforce.com/trailblazer/skkjodhpur", icon: <i className="fa-brands fa-salesforce text-[#00A1E0] text-xl"></i> },
  ];

  // 🧭 Scroll progress + header behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.body.scrollHeight - window.innerHeight || 1;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧱 Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  // ⚙️ Dynamic footer handling
  useEffect(() => {
    const adjustBottomPadding = () => {
      setBottomPadding(0);
    };

    adjustBottomPadding();
    window.addEventListener("scroll", adjustBottomPadding);
    window.addEventListener("resize", adjustBottomPadding);
    return () => {
      window.removeEventListener("scroll", adjustBottomPadding);
      window.removeEventListener("resize", adjustBottomPadding);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-900 z-[70] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Header */}
      <header
        className={`fixed w-full z-[60] transition-all duration-500 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-xl shadow-sm border-b border-gray-100/50"
            : "bg-white/95 backdrop-blur-lg"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Minimal Logo */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-tight">SK</span>
              </div>
              <div className="block min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-semibold text-slate-900 tracking-wide truncate">Shailesh Kumar</div>
                <div className="text-xs text-slate-600 font-medium truncate">AI Engineer</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={600}
                  className="relative px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-all duration-300 group cursor-pointer"
                  activeClass="text-slate-900"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-900 to-slate-700 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Book a Call Button */}
            <div className="hidden md:flex items-center ml-8 space-x-4">
              <button
                onClick={() =>
                  window.open(
                    "https://cal.com/shailesh-kumar-khanchandani-43bjwb/secret)",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="
                group
                relative
                flex items-center gap-2
                px-5 py-2.5
                rounded-full
                bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700
                text-white text-sm font-semibold
                shadow-md
                hover:shadow-xl
                hover:scale-[1.03]
                transition-all duration-300
                ring-1 ring-white/20
                hover:ring-white/40
                overflow-hidden
              "
            >
              {/* Glow effect */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10m-9 4h5m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
                Book a Call
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/918946864160",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="p-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 transition-all duration-200 cursor-pointer"
                title="Call via WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </button>
            </div>

            {/* Minimal Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-200 cursor-pointer flex-shrink-0"
            >
              <div className="w-5 h-5 flex flex-col justify-center">
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[50] animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 w-72 max-w-[85vw] h-full bg-white shadow-xl z-[60] flex flex-col border-l border-slate-200 animate-slide-in-right">
            {/* Minimal Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">SK</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Navigation</div>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Clean Navigation Links */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-85}
                  duration={600}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between w-full px-4 py-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{link.name}</span>
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}

              {/* Social Icons */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="text-sm font-semibold text-slate-900 mb-4">Connect With Me</div>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all duration-200"
                      title={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Book My Cal */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <button
                  onClick={() =>
                    window.open(
                      "https://cal.com/shailesh-kumar-khanchandani-43bjwb/secret)",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10m-9 4h5m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Book My Cal
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main
        className="transition-all duration-300"
        style={{ paddingBottom: `${bottomPadding}px` }}
      >
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="bg-gray-900 border-t border-gray-800 text-white mt-0 pb-0"
      >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
