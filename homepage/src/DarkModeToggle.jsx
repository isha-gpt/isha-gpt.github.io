import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-16 h-8 flex items-center bg-blue-500 dark:bg-blue-400 rounded-full p-1 transition"
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-all ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}
      />
      <FaMoon className="absolute left-2 text-white" />
      <FaSun className="absolute right-2 text-white" />
    </button>
  );
};

export default DarkModeToggle;
