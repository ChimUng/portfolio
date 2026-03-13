import { useState, useRef, useEffect } from "react";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RevealOnScroll from "../animations/RevealOnScroll";
import { fadeInUp, fadeInLeft, fadeInRight } from "../animations/animations";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const MyContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const headerControls = useAnimation();
  const contactInfoControls = useAnimation();
  const formControls = useAnimation();
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const contactInfoInView = useInView(contactInfoRef, { once: true, threshold: 0.3 });
  const formInView = useInView(formRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (headerInView) headerControls.start("visible");
    if (contactInfoInView) contactInfoControls.start("visible");
    if (formInView) formControls.start("visible");
  }, [headerInView, contactInfoInView, formInView, headerControls, contactInfoControls, formControls]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <RevealOnScroll>
      <section id="contact" className="w-full py-20 px-6 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">

          <motion.div ref={headerRef} initial="hidden" animate={headerControls} variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out — I'm open to internship opportunities and collaboration!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Social Networks */}
            <motion.div ref={contactInfoRef} initial="hidden" animate={contactInfoControls} variants={fadeInLeft}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col gap-4 transition-colors duration-300">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Social Networks</h2>

              <a href="mailto:duynguyen19087@gmail.com"
                className="flex items-center gap-4 border border-red-200 dark:border-red-800 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-red-600 hover:text-white group w-full">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-red-500">
                  <FaEnvelope className="text-3xl text-red-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-white">Gmail</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-red-100">duynguyen19087@gmail.com</p>
                </div>
              </a>

              <a href="tel:0982870931"
                className="flex items-center gap-4 border border-green-200 dark:border-green-800 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-green-600 hover:text-white group w-full">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-green-500">
                  <FaPhone className="text-3xl text-green-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-white">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-green-100">0982 870 931</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/hong-duy-8a2a6b368/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-blue-300 dark:border-blue-700 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-blue-600 hover:text-white group">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-500">
                    <FaLinkedin className="text-2xl text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-white">LinkedIn</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-100">@hong-duy-chimung</p>
                  </div>
                </a>

                <a href="https://github.com/ChimUng" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-gray-800 hover:text-white group">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-gray-700">
                    <FaGithub className="text-2xl text-gray-800 dark:text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-white">GitHub</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-300">@ChimUng</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div ref={formRef} initial="hidden" animate={formControls} variants={fadeInRight}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>

              {isSubmitted && (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 p-4 rounded-lg mb-6 flex items-center">
                  <span className="text-xl mr-3">🎉</span>
                  <div>
                    <div className="font-semibold">Thank you for your message!</div>
                    <div className="text-sm">I'll get back to you soon.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {["name", "email"].map((field) => (
                  <input key={field} type={field === "email" ? "email" : "text"} name={field}
                    placeholder={field === "name" ? "Full Name *" : "Email Address *"}
                    value={formData[field]} onChange={handleChange} required
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-500 outline-none transition-colors" />
                ))}
                <textarea name="message" rows="5" placeholder="Your message..."
                  value={formData.message} onChange={handleChange} required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-500 resize-none outline-none transition-colors" />
                <button type="submit" disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black"
                  }`}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default MyContact;