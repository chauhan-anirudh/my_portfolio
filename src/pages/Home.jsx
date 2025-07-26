import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  return (
    <div className=" flex justify-center items-center min-h-[calc(100vh-10rem)] w-full md:w-4/5 m-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-10 w-full py-10"
      >
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src="greeting-man.png"
            alt="Greeting"
            className="max-w-[220px] sm:max-w-sm md:max-w-md h-auto drop-shadow-xl drop-shadow-cyan-500"
            animate={{
              y: [0, -10, 0], // float up and down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          {["Welcome", "To", "My", "Portfolio"].map((text, index) => (
            <motion.p
              key={text}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl sm:text-6xl text-gray-900 font-bold tracking-wide"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
