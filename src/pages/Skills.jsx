import { motion } from "framer-motion";

const languages = ["Python", "C++", "HTML", "CSS", "JavaScript", "Node.Js"];
const framework_library = ["React.js", "Tailwind CSS"];
const DataBse_Tools = ["MongoDB", "SQL", "Git", "VS Code"];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="px-4 py-8"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-blue-400 underline decoration-solid">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {/* Languages */}
        <div className="flex flex-col gap-4 items-center">
          <p className="text-2xl text-emerald-700 font-semibold">Languages</p>
          {languages.map((lang) => (
            <div
              key={lang}
              className="px-6 py-2 text-center text-sm sm:text-base text-black bg-white hover:bg-sky-400 rounded-full shadow-md transition"
            >
              {lang}
            </div>
          ))}
        </div>

        {/* Framework / Library */}
        <div className="flex flex-col gap-4 items-center">
          <p className="text-2xl text-emerald-700 font-semibold">Framework/Library</p>
          {framework_library.map((item) => (
            <div
              key={item}
              className="px-6 py-2 text-center text-sm sm:text-base text-black bg-white hover:bg-sky-400 rounded-full shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Database / Tools */}
        <div className="flex flex-col gap-4 items-center">
          <p className="text-2xl text-emerald-700 font-semibold">Database/Tools</p>
          {DataBse_Tools.map((tool) => (
            <div
              key={tool}
              className="px-6 py-2 text-center text-sm sm:text-base text-black bg-white hover:bg-sky-400 rounded-full shadow-md transition"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
