import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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

        {/* <div className="pt-20 bg">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<About />} />
          </Routes>
        </div> */}

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

function About() {
  return (
    <div className="flex flex-row items-center align-center w-full bg-gray-100 dark:bg-gray-800 pt-7 pb-1 px-20 gap-12">
      <div className="relative">
        <img
          src="src/assets/profile.png"
          alt="isha-gupta"
          className="h-auto object-cover w-64"
        />
      </div>
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-weight-300 tracking-wide dark:text-white font-normal">
          hi! I'm Isha
        </h1>
        <p className="text-lg mt-4 font-light text-black dark:text-gray-300 leading-relaxed">
          I am a graduate student in Computer Science at ETH Zürich. Currently,
          I am based in Stanford as a visiting researcher at the STAIR Lab with
          Sanmi Koyejo. My research interests broadly include AI safety,
          robustness and multimodality. <br />
          <br />
          My Master’s degree specializes in secure and reliable systems and in
          machine intelligence. I have also had the opportunity to work in
          various software engineering roles during my Bachelor’s degree in
          Zürich and take a special interest in entrepreneurship. <br /> <br />
          In my free time, I enjoy running,{" "}
          <a
            href="https://www.instagram.com/liebe.gruesse.isha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            analog photography and making clothes
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function News() {
  const [expanded, setExpanded] = useState(false);

  const newsEntries = [
    { date: "Feb 2025", text: 'I wrapped up my work at Cambridge on adversarial attacks on Audio-Language Models into a paper: "I am bad": Interpreting Stealthy, Universal and Robust Audio Jailbreaks in Audio-Language Models.', link: "https://ethz.zoom.us/rec/play/dysX4oBwg_CBuId8Y9YWkKmMmn3yO6JPhHcGpLQmRIaBBxXWDvPYPLqbixy9pYZK4p-F5z7UnG8YGOjL.Lt6TqV75SDCJMNWA?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fethz.zoom.us%2Frec%2Fshare%2FgOays-BuY25YVouECSBbIdjvbI-BH_vr_ajfOoiJW8SBlSwI-oTlmCG1pfweFz9y.hF1ri3S5HIwUoPv2" },
    { date: "Jan 2025", text: "Very excited to be joining the STAIR LAB at Stanford University with Prof. Sanmi Koyejo for six months as a visiting researcher!", link: "https://stair.cs.stanford.edu" },
    { date: "Oct 2024", text: "I will be spending the rest of the year at the University of Cambridge as a visiting research scholar working with Prof Robert Mullins." },
    { date: "Sep 2024", text: 'Very happy to share our "Fragile Giants" paper which uncovers the role of model complexity in subpopulation poisoning robustness.' },
    { date: "Aug 2024", text: "Our paper on Chain-of-Thought visualization was accepted to the IEEE NLViz workshop!", link: "https://ieeevis.org/year/2024/program/papers.html?filter=titles" },
    { date: "Apr 2024", text: "We won the Cyber 9/12 challenge amongst 30 international teams!", link: "https://inf.ethz.ch/news-and-events/spotlights/infk-news-channel/2024/04/first-place-for-eth-students-at-cyber-912-strategy-challenge.html" },
    { date: "Sep 2023", text: "I have completed my Bachelor's degree and am continuing graduate studies in Computer Science at ETH Zurich." },
    { date: "May 2023", text: "I completed my Bachelor’s Thesis at the PPS Lab on data poisoning and robustness.", link: "https://youtu.be/RaCILP1HBew" },
    { date: "Mar 2023", text: "Our engineering team at SwissLoop Tunneling placed second in this year’s edition of Elon Musk’s Not-A-Boring competition!" },
  ];

  const displayedEntries = expanded ? newsEntries : newsEntries.slice(0, 4);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 px-20 pb-6">
      <hr className="border-t-2 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-sans mt-10">news</h2>
      <div className="mt-6 space-y-6">
        {displayedEntries.map((entry, index) => (
          <p key={index} className="text-lg font-light">
            <strong>{entry.date}</strong> {entry.text}{" "}
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                [link]
              </a>
            )}
          </p>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-blue-500 hover:underline text-lg mt-5"
        >
          {expanded ? "Show Less" : "Show More"}{" "}
          {expanded ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
        </button>
      </div>
    </div>
  );
}



function Publications() {
  return (
    <div className=" bg-gray-100 dark:bg-gray-800 px-20 gap-12">
      <hr className="border-t-2 border-gray-300 dark:border-gray-600" />
      <h2 className="text-3xl font-sans mt-10"> selected publications</h2>
      <PublicationCard
        label="preprint"
        labelColor="bg-purple-400"
        title="I am bad: Interpreting Stealthy, Universal and Robust Audio Jailbreaks in Audio-Language Models"
        authors="Isha Gupta, David Khachaturov, Robert Mullins"
        year="2025"
        description="We demonstrate the first universal audio jailbreaks for Audio-Language Models, showing that adversarial perturbations generalize across inputs and are interpreted as imperceptible yet harmful first-person speech, posing critical security risks."
        link="https://arxiv.org/abs/2502.00718"
      />
      <PublicationCard
        label="preprint"
        labelColor="bg-purple-400"
        title="Fragile Giants: Understanding the Susceptibility of Models to Subpopulation Attacks"
        authors="Isha Gupta, Hidde Lycklama, Emanuel Opel, Evan Rose, Anwar Hithnawi"
        year="2024"
        description="We investigate the connection between model complexity and vulnerability to subpopulation-targeted poisoning attacks for real-world overparameterized models and datasets."
        link="https://arxiv.org/abs/2410.08872"
      />
      <PublicationCard
        label="IEEE NLVIS 2024"
        title="iToT: An Interactive System for Customized Tree-of-Thought Generation"
        authors="Alan Boyle, Isha Gupta, Sebastian Hönig, Lukas Mautner, Kenza Amara, Furui Cheng, Mennatallah El-Assady"
        year="2024"
        description="We introduce iToT (interactive Tree-of-Thoughts), a generalized and interactive Tree of Thought prompting system."
        link="https://ieeevis.org/year/2024/program/paper_w-nlviz-1019.html"
      />
    </div>
  );
}

function PublicationCard({ label, labelColor = "bg-purple-600", title, authors, year, link }) {
  return (
    <div className="border rounded-lg p-3 my-3 shadow-sm dark:border-gray-600 flex items-center justify-between">
      <div className="flex flex-col">
      <span className={`${labelColor} text-white text-xs font-bold px-2 py-1 rounded-full self-start`}>
          {label}
        </span>
        <h3 className="text-lg font-semibold mt-2 truncate">{title}</h3>
        <p className="text-xs text-gray-500">
          {authors} • {year}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-xs ml-4 mr-5 hover:underline"
        >
          <FaLink size={24} />
        </a>
      )}
    </div>
  );
}

export default App;
