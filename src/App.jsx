import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

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
      <div className={`min-h-screen w-full ${darkMode ? "dark:bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} font-sans`}>
      <nav className="flex justify-end items-center space-x-10 p-5 w-full fixed pr-10 bg-">
        <div className="space-x-6 text-lg flex bg-gray-100 dark:bg-gray-800">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-solid decoration-2 underline-offset-4" : "hover:text-blue-400 transition"}>
            about
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => isActive ? "underline decoration-solid decoration-2 underline-offset-4" : "hover:text-blue-400 transition"}>
            work
          </NavLink>
        </div>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} className="ml-6" />
      </nav>
        <div className="pt-20 bg">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
        {/* <footer className="flex justify-center items-center p-4 bg-gray-100 dark:bg-gray-900">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-blue-500">
            <FaGithub size={24} />
          </a>
        </footer> */}
      </div>
    </Router>
  );
}

function About() {
  return (
    <div className="flex flex-row items-center align-center w-full bg-gray-100 dark:bg-gray-800 py-12 px-20 gap-12">
      <div className="relative">
        <img src="src/assets/profile.png" alt="isha-gupta" className="h-auto object-cover, w-64" />
      </div>
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-weight-300 tracking-wide dark:text-white font-normal">
          hi! I'm Isha
        </h1>
        <p className="text-lg mt-4 font-light text-black dark:text-gray-300 leading-relaxed ;">
        I am a graduate student in Computer Science at ETH Zürich. Currently, I am based in Stanford as a visiting researcher at the STAIR Lab with Sanmi Koyejo. My current research interests broadly include AI safety and robustness and multimodality. <br /><br />
        My Master’s degree specializes in secure and reliable systems. I have also had the opportunity to work in various software engineering roles during my Bachelor’s degree in Zürich. <br /> <br />
        In my free time, I enjoy running, analog photography and making clothes.
        </p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-12 w-full">
      <h2 className="text-3xl font-bold tracking-wide">My Work</h2>
      <p className="text-lg mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Showcase of my projects and professional experience.
      </p>
    </div>
  );
}

export default App;