import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

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
      <div className={`min-h-screen w-full ${darkMode ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-900"} font-sans`}>
        {/* Top Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 w-full fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md">
          <div className="space-x-6 text-lg ">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 underline" : "hover:text-blue-400 transition"}>
              about
            </NavLink>
            <NavLink to="/work" className={({ isActive }) => isActive ? "text-blue-500 underline" : "hover:text-blue-400 transition"}>
              work
            </NavLink>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white dark:bg-blue-400 hover:bg-blue-600 transition"
          >
            {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Page Content */}
        <div className="pt-20 bg">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-gray-100 dark:bg-gray-800 min-h-screen px-12">
      <div className="relative">
        <h1 className="mb-4 text-4xl font-bold ">
          isha gupta
        </h1>
        <img src="src/assets/profile.png" alt="isha-gupta" className="w-80 h-100 " />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold tracking-wide">About Me</h2>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
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