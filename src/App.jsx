import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import {
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
} from "react-icons/fa";
import News from "./News";
import About from "./About";
import Publications from "./Publications";
import Writing from "./Writing";
import WritingPost from "./WritingPost";
import useDeviceDetect from "./hooks/useDeviceDetect";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const { isMobile } = useDeviceDetect();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const MobileNav = () => (
    <nav className="w-full fixed bg-gray-100 dark:bg-gray-800 z-50">
      <div className="flex justify-between items-center p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl"
        >
          <FaBars />
        </button>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center space-y-4 py-4 bg-gray-100 dark:bg-gray-800">
          <NavLink
            to="/"
            className="hover:text-blue-400 transition"
            onClick={() => {
              scrollToSection("about");
              setIsMenuOpen(false);
            }}
          >
            about
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-blue-400 transition"
            onClick={() => {
              scrollToSection("news");
              setIsMenuOpen(false);
            }}
          >
            news
          </NavLink>
          <NavLink
            to="/"
            className="hover:text-blue-400 transition"
            onClick={() => {
              scrollToSection("publications");
              setIsMenuOpen(false);
            }}
          >
            publications
          </NavLink>
          <NavLink
            to="/writing"
            className="hover:text-blue-400 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            writing
          </NavLink>
          <a
            href="/cv_ishagupta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            cv
          </a>
        </div>
      )}
    </nav>
  );

  const DesktopNav = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleSectionClick = (id) => {
      if (!isHome) {
        // If not on home page, first navigate home then scroll
        window.location.href = '/#' + id;
      } else {
        // If already on home page, just scroll
        scrollToSection(id);
      }
    };

    return (
      <nav className="flex justify-end items-center space-x-10 p-5 w-full fixed pr-10 bg-gray-100 dark:bg-gray-800 z-50">
        <div className="space-x-6 text-lg flex">
          <button
            onClick={() => handleSectionClick("about")}
            className="hover:text-blue-400 transition"
          >
            about
          </button>
          <button
            onClick={() => handleSectionClick("news")}
            className="hover:text-blue-400 transition"
          >
            news
          </button>
          <button
            onClick={() => handleSectionClick("publications")}
            className="hover:text-blue-400 transition"
          >
            publications
          </button>
          <NavLink
            to="/writing"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${isActive ? 'text-blue-500' : ''}`
            }
          >
            writing
          </NavLink>
          <a
            href="/cv_ishagupta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            cv
          </a>
        </div>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} className="ml-6" />
      </nav>
    );
  };

  const HomePage = () => (
    <>
      <section id="about" className={`py-6 ${isMobile ? 'px-4' : 'px-20'}`}>
        <About />
      </section>
      <section id="news" className={`pt-6 ${isMobile ? 'px-4' : 'px-20'}`}>
        <News />
      </section>
      <section id="publications" className={`py-6 ${isMobile ? 'px-4' : 'px-20'}`}>
        <Publications />
      </section>
    </>
  );

  return (
    <Router>
      <div
        className={`min-h-screen w-full ${
          darkMode ? "dark:bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
        } font-sans flex flex-col`}
      >
        {isMobile ? <MobileNav /> : <DesktopNav />}

        <div className={`${isMobile ? 'pt-24' : 'pt-20'} flex-grow`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<WritingPost />} />
          </Routes>
        </div>

        <footer className={`flex justify-center items-center bg-gray-200 dark:bg-gray-900 ${isMobile ? 'space-x-4 py-6' : 'space-x-6 py-8'}`}>
          <a
            href="mailto:igupta@student.ethz.ch"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaEnvelope size={isMobile ? 20 : 24} />
          </a>
          <a
            href="https://github.com/isha-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaGithub size={isMobile ? 20 : 24} />
          </a>
          <a
            href="https://x.com/isha1859"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaTwitter size={isMobile ? 20 : 24} />
          </a>
          <a
            href="https://www.linkedin.com/in/isha-gupta-ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <FaLinkedin size={isMobile ? 20 : 24} />
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
