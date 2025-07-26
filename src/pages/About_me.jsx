import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  return (
    <div className="bg-blue-100/50 w-full min-h-[calc(100vh-10rem)] px-4 py-10 border-b-4 rounded-2xl shadow-xl shadow-blue-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-center items-center text-center md:text-left">
            <img
              src="user.png"
              alt="image"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
            />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Anirudh Chauhan
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-gray-700 text-base md:text-xl px-1 sm:px-2 text-justify">
            <p>
              I'm a Computer Science undergraduate at Galgotias University with a passion for front-end development and creating seamless user experiences. I enjoy transforming ideas into interactive and visually appealing web applications using technologies like React, Tailwind CSS, and JavaScript.
            </p>
            <p>
              During my internship at Prodigy InfoTech, I gained hands-on experience building responsive websites with HTML, CSS, and JavaScript, sharpening both my technical and design skills.
            </p>
            <p>
              I’m a curious and motivated developer who loves learning new technologies and solving real-world problems through clean, efficient, and scalable code.
            </p>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-indigo-500 hover:text-red-800 border-b-2 border-transparent hover:border-red transition-all duration-200 w-fit"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
