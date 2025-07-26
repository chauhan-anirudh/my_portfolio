import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About_me from './pages/About_me';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function PageWrapper({ children }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes >
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About_me /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-300 dark:bg--500 dark:text-gray-100 transition-colors">
        <Navbar/>
        <main className="container mx-auto flex-grow px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 grid gap-10">
        <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}
