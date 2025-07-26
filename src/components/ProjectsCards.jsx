import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-xl shadow-md p-3"
    >
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300  flex flex-col justify-between">
        <h3 className="text-xl font-bold text-indigo-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
}
