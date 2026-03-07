import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    if (!formData.name.trim()) err.name = "Required";
    if (!formData.email.trim()) err.email = "Required";
    else if (!emailRegex.test(formData.email)) err.email = "Invalid Email";

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
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50"
    >
      <ToastContainer />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Let’s Build Something Together
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Open for consulting, leadership roles, AI projects,
            and strategic collaborations.
          </p>

          {/* Availability Badge */}
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium shadow">
            🟢 Available for New Opportunities
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Contact Info */}
          <div className="space-y-6">

            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white rounded-2xl border border-slate-200 p-5 shadow-md hover:shadow-lg transition"
              >
                <div className="text-3xl">{info.icon}</div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {info.title}
                  </h4>

                  <p className="text-slate-600 mt-1">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Trust Block */}
            <div className="mt-10 bg-indigo-600 text-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold mb-2">
                Why Connect With Me?
              </h4>

              <ul className="space-y-2 text-sm opacity-95">
                <li>✔ 5+ Years Leadership Experience</li>
                <li>✔ AI & Enterprise Systems Expert</li>
                <li>✔ Proven Delivery Record</li>
                <li>✔ Global Client Exposure</li>
              </ul>
            </div>

          </div>

          {/* Right: Form */}
          <div className="bg-white/90 backdrop-blur rounded-3xl border border-indigo-200 shadow-xl p-8">

            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-4 rounded-xl border focus:ring-2 outline-none transition ${
                    errors.name
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-200 focus:ring-indigo-200"
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full p-4 rounded-xl border focus:ring-2 outline-none transition ${
                    errors.email
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-200 focus:ring-indigo-200"
                  }`}
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full p-4 rounded-xl border focus:ring-2 outline-none transition ${
                    errors.subject
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-200 focus:ring-indigo-200"
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full p-4 rounded-xl border focus:ring-2 outline-none transition resize-none ${
                    errors.message
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-200 focus:ring-indigo-200"
                  }`}
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition flex items-center justify-center gap-2"
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
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>🚀</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
