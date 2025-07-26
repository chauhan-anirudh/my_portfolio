import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formError, setFormError] = useState("");
  const [showImageFirst, setShowImageFirst] = useState(true);

  useEffect(() => {
    const timeout = window.innerWidth < 768 ? 1500 : 3000; // reduced time for mobile
    const timer = setTimeout(() => setShowImageFirst(false), timeout);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (!form.name.value || !form.email.value || !form.message.value) {
      setFormError("All fields are required.");
      return;
    }

    fetch("https://formsubmit.co/ajax/chauhananirudh4321@gmail.com", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then(() => {
        setShowPopup(true);
        form.reset();
        setFormError("");
        setTimeout(() => setShowPopup(false), 4000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setFormError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-cover bg-center w-full min-h-[calc(100vh-10rem)] px-4 pt-4 md:pt-10 gap-20 md:gap-10 ">
      <AnimatePresence>
        <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 w-full px-2 sm:px-4 md:w-4/5"
            >
              {/* Contact Info Box */}
              <div className="flex-1 w-full max-w-xl p-8 rounded-2xl shadow-xl backdrop-blur-md bg-white/30 border border-white/40">
                <h2 className="text-4xl font-semibold text-gray-700 mb-6 text-center md:text-left">
                  Get in Touch
                </h2>
                <section className="space-y-6 text-center md:text-left">
                  <p className="font-light text-gray-400 text-xl">
                    Feel free to reach out to me via email or connect on LinkedIn.
                  </p>
                  <ul className="space-y-3 text-cyan-700 text-xl">
                    <li className="flex items-center gap-2">
                      <Mail size={20} />
                      <a href="mailto:chauhananirudh4321@gmail.com" className="text-blue-500">
                        chauhananirudh4321@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone size={20} />
                      <a href="tel:9870665763" className="text-blue-500">
                        9870665763
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Github size={20} />
                      <a
                        href="https://github.com/chauhan-anirudh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        chauhan-anirudh
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Linkedin size={20} />
                      <a
                        href="https://www.linkedin.com/in/anirudh3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        linkedin.com/in/anirudh3
                      </a>
                    </li>
                  </ul>
                </section>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden md:flex flex-1 justify-center"
              >
                <img
                  src="contact-us.png"
                  alt="Contact Us"
                  className="max-w-[300px] md:max-w-[350px] h-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl mt-2 md:mt-6 px-4 md:px-0"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 text-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 text-gray-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full p-3 rounded-md border border-gray-300 text-gray-500"
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                  <Send size={18} /> Send Message
                </button>
                {formError && <p className="text-red-600 text-sm">{formError}</p>}
              </form>
            </motion.div>
          </>
      </AnimatePresence>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg"
        >
          Message sent successfully!
        </motion.div>
      )}
    </div>
  );
}
