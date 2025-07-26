import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectsCards';
import { Target } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A sleek, mobile-friendly portfolio showcasing my work, skills, and resume. Built using React, Tailwind CSS, and Framer Motion animations.',
    link: '/',
  },
  {
    title: 'Weather App',
    description:
      'Real-time weather forecasting app using OpenWeatherMap API. Users can search any city and get temperature, humidity, and weather conditions.',
    link: 'https://github.com/chauhan-anirudh/WeatherApp',
  },
  {
    title: 'LeetCode Matrix Tracker',
    description:
      'Responsive HTML/CSS/JS app that visualizes LeetCode topic-wise progress in matrix format. Great for tracking DSA prep efficiently.',
    link: 'https://github.com/chauhan-anirudh/leetCode_matrix',
  },
  {
    title: 'Create Notes App',
    description:
      'Single Page React app with Tailwind CSS that lets users add, edit, delete notes. Notes persist using browser localStorage. Clean dark/light toggle design.',
    link: 'https://github.com/chauhan-anirudh/Own_Notes',
  },
  {
    title: 'Facial Emotion Detection',
    description:
      'Python project using OpenCV, TensorFlow, and Keras. Uses CNN for classifying real-time facial expressions like happy, sad, neutral, angry from webcam feed.',
    link: '',
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 min-h-screen"
    >
      <h2 className="text-4xl font-semibold text-blue-400 underline decoration-solid text-center m-auto pb-8">Projects</h2>
 
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
