import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";
import News from "./News";
import About from "./About";
import Publications from "./Publications";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`min-h-screen w-full ${
          darkMode ? "dark:bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
        } font-sans`}
      >
        <nav className="flex justify-end items-center space-x-10 p-5 w-full fixed pr-10 bg-gray-100 dark:bg-gray-800">
          <div className="space-x-6 text-lg flex">
            <NavLink
              to="#about"
              className="hover:text-blue-400 transition"
              onClick={() => scrollToSection("about")}
            >
              about
            </NavLink>
            <NavLink
              to="#news"
              className="hover:text-blue-400 transition"
              onClick={() => scrollToSection("news")}
            >
              news
            </NavLink>
            <NavLink
              to="#publications"
              className="hover:text-blue-400 transition"
              onClick={() => scrollToSection("publications")}
            >
              publications
            </NavLink>
            <a
              href="src/assets/cv_ishagupta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              cv
            </a>
          </div>
          <DarkModeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            className="ml-6"
          />
        </nav>

        <div className="pt-20">
          <section id="about" className="py-6 px-20">
            <About />
          </section>
          <section id="news" className="pt-6 px-20">
            <News />
          </section>
          <section id="publications" className="py-6 px-20">
            <Publications />
          </section>
        </div>

        <footer className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 space-x-6 pb-10">
          <a
            href="mailto:igupta@student.ethz.ch"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/isha-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/isha1859"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/isha-gupta-ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
        </footer>
      </div>
    </Router>
  );
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default App;
