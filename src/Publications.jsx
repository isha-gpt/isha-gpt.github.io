import { FaLink } from "react-icons/fa";

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
          label="IEEE NLVIZ 2024"
          title="iToT: An Interactive System for Customized Tree-of-Thought Generation"
          authors="Alan Boyle, Isha Gupta, Sebastian Hönig, Lukas Mautner, Kenza Amara, Furui Cheng, Mennatallah El-Assady"
          year="2024"
          description="We introduce iToT (interactive Tree-of-Thoughts), a generalized and interactive Tree of Thought prompting system."
          link="https://ieeevis.org/year/2024/program/paper_w-nlviz-1019.html"
        />
      </div>
    );
  }
  
  function PublicationCard({ label, labelColor = "bg-purple-600", title, authors, year, description, link }) {
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
          <p className="text-sm mt-2">{description}</p>
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

export default Publications;