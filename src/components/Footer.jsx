export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white w-full container-padding py-3.5 mt-auto">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center text-center gap-4 justify-center">
        <p>© {new Date().getFullYear()} Anirudh Chauhan</p>
        <div className="space-x-4">
          <a href="https://github.com/chauhan-anirudh"  target="_blank" className="hover:text-indigo-400">GitHub</a>
          <a href="https://www.linkedin.com/in/anirudh3" target="_blank" className="hover:text-indigo-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}