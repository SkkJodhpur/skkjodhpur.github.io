import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* Handle Input */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* Validation */
  const validate = () => {
    const err = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,}$/;

    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.email.trim()) err.email = "Email is required";
    else if (!emailRegex.test(formData.email)) err.email = "Invalid Email";
    if (!formData.phone.trim()) err.phone = "Phone is required";
    else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) err.phone = "Phone must be at least 10 digits";

    if (!formData.subject.trim()) err.subject = "Required";
    if (!formData.message.trim()) err.message = "Required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please complete all fields correctly");
      return;
    }

    setLoading(true);

    const params = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "skk.jodhpur@gmail.com",
    };

    emailjs
      .send(
        "service_f0581cc",
        "template_xnflqxb",
        params,
        "uJUBiDVqtLOR-WwkY"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Submission failed. Try again later.");
      })
      .finally(() => setLoading(false));
  };

  /* Contact Cards */
  const contactInfo = [
    {
      title: "Mumbai Office",
      value:
        "Neelyog Veydanta, Ghatkopar West, Mumbai - 400086",
      icon: "📍",
    },
    {
      title: "Jodhpur Office",
      value:
        "Upper Chopasni Rd, Sardarpura, Jodhpur - 342003",
      icon: "🏠",
    },
    {
      title: "Phone",
      value: "+91-8946864160",
      icon: "📞",
    },
    {
      title: "Email",
      value: "skk.jodhpur@gmail.com",
      icon: "✉️",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"
    >
      <ToastContainer />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] [background-size:4rem_4rem] opacity-30" />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur">
            💬 Let's Connect
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Exceptional</span> Together
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Open for consulting, leadership roles, AI projects, and strategic collaborations. Let's explore how we can create impact together.
          </p>

          {/* Availability Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-500/30 border border-emerald-400/50 text-emerald-300 font-semibold shadow-lg backdrop-blur">
            <span className="flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-emerald-400"></span>
            </span>
            Available for New Opportunities
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

          {/* Left: Contact Info */}
          <div className="space-y-6 sm:space-y-7">

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-5">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="group relative flex gap-4 sm:gap-5 items-start bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-blue-400/50 p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/20 group-hover:to-cyan-400/20 transition opacity-0 group-hover:opacity-100" />

                  <div className="relative text-3xl sm:text-4xl group-group-hover:scale-110 transition">
                    {info.icon}
                  </div>

                  <div className="relative flex-1">
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      {info.title}
                    </h4>
                    <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm group-hover:text-slate-300 transition">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Block */}
            <div className="relative group mt-8 sm:mt-10 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 hover:from-blue-600/40 hover:to-indigo-600/40 text-white rounded-2xl border border-blue-400/30 hover:border-blue-400/60 p-6 sm:p-8 shadow-xl backdrop-blur transition-all duration-300">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-transparent to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition opacity-0 group-hover:opacity-100" />

              <div className="relative">
                <h4 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  Why Connect With Me?
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-center gap-3">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-200">12+ Years Leadership & Enterprise Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-200">4+ Years AI & LLM Systems Expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-200">Proven Delivery & Global Client Exposure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-200">Strategic Advisory & Engineering Mentorship</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right: Form */}
          <div className="relative group">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition duration-500 blur" />

            <div className="relative bg-slate-800/40 hover:bg-slate-800/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 hover:border-blue-400/50 shadow-2xl p-6 sm:p-8 md:p-10 transition-all duration-300">

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-blue-400">✉️</span>
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mb-8">
                I'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                {/* Name */}
                <div className="group/input">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border focus:ring-2 outline-none transition placeholder-slate-500 text-white ${
                      errors.name
                        ? "border-red-400/50 focus:ring-red-400/30 focus:border-red-400"
                        : "border-white/10 focus:ring-blue-400/30 focus:border-blue-400"
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-2">Name is required</p>}
                </div>

                {/* Email */}
                <div className="group/input">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border focus:ring-2 outline-none transition placeholder-slate-500 text-white ${
                      errors.email
                        ? "border-red-400/50 focus:ring-red-400/30 focus:border-red-400"
                        : "border-white/10 focus:ring-blue-400/30 focus:border-blue-400"
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="group/input">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border focus:ring-2 outline-none transition placeholder-slate-500 text-white ${
                      errors.phone
                        ? "border-red-400/50 focus:ring-red-400/30 focus:border-red-400"
                        : "border-white/10 focus:ring-blue-400/30 focus:border-blue-400"
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone}</p>}
                </div>
                <div className="group/input">
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project or Inquiry Type"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border focus:ring-2 outline-none transition placeholder-slate-500 text-white ${
                      errors.subject
                        ? "border-red-400/50 focus:ring-red-400/30 focus:border-red-400"
                        : "border-white/10 focus:ring-blue-400/30 focus:border-blue-400"
                    }`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-2">Subject is required</p>}
                </div>

                {/* Message */}
                <div className="group/input">
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project or inquiry..."
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border focus:ring-2 outline-none transition placeholder-slate-500 text-white resize-none ${
                      errors.message
                        ? "border-red-400/50 focus:ring-red-400/30 focus:border-red-400"
                        : "border-white/10 focus:ring-blue-400/30 focus:border-blue-400"
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-2">Message is required</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          opacity="0.25"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>🚀</span>
                    </>
                  )}
                </button>

              </form>

              {/* Privacy Note */}
              <p className="mt-6 text-xs text-slate-500 text-center">
                Your information is safe and secure. I respect your privacy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
