import { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

function News() {
    const [expanded, setExpanded] = useState(false);
  
    const newsEntries = [
      { 
        date: "Feb 2025", 
        text: 'I wrapped up my work at Cambridge on adversarial attacks on Audio-Language Models into a paper: "I am bad": Interpreting Stealthy, Universal and Robust Audio Jailbreaks in Audio-Language Models. See my concluding ',
        linkedText: 'talk',
        link: "https://ethz.zoom.us/rec/play/dysX4oBwg_CBuId8Y9YWkKmMmn3yO6JPhHcGpLQmRIaBBxXWDvPYPLqbixy9pYZK4p-F5z7UnG8YGOjL.Lt6TqV75SDCJMNWA?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fethz.zoom.us%2Frec%2Fshare%2FgOays-BuY25YVouECSBbIdjvbI-BH_vr_ajfOoiJW8SBlSwI-oTlmCG1pfweFz9y.hF1ri3S5HIwUoPv2",
        afterText: " at the SPY Lab at ETH."
      },
      { 
        date: "Jan 2025", 
        text: "Very excited to be joining the ",
        linkedText: "STAIR LAB",
        link: "https://stair.cs.stanford.edu",
        afterText: " at Stanford University with Prof. Sanmi Koyejo for six months as a visiting researcher!"
      },
      { date: "Oct 2024", text: "I will be spending the rest of the year at the University of Cambridge as a visiting research scholar working with Prof. Robert Mullins." },
      { date: "Sep 2024", text: 'Happy to share our "Fragile Giants" paper which uncovers the role of model complexity in subpopulation poisoning robustness.' },
      
      { 
        date: "Aug 2024", 
        text: "Our paper on Chain-of-Thought visualization was accepted to the ",
        linkedText: "IEEE NLViz workshop",
        link: "https://ieeevis.org/year/2024/program/papers.html?filter=titles",
        afterText: "!"
      },
      { 
        date: "Apr 2024", 
        text: "We ",
        linkedText: "won the Cyber 9/12 challenge",
        link: "https://inf.ethz.ch/news-and-events/spotlights/infk-news-channel/2024/04/first-place-for-eth-students-at-cyber-912-strategy-challenge.html",
        afterText: " amongst 30 international teams!"
      },
      { date: "Sep 2023", text: "I have completed my Bachelor's degree and am continuing graduate studies in Computer Science at ETH Zurich." },
      { 
        date: "May 2023", 
        text: "I completed my Bachelor’s Thesis at the PPS Lab on data poisoning and robustness. See ",
        linkedText: "my talk here",
        link: "https://youtu.be/RaCILP1HBew",
        afterText: "."
      },
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
                <strong>{entry.date}</strong>{" "}
                {entry.text}
                {entry.link && (
                  <>
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {entry.linkedText}
                    </a>
                    {entry.afterText}
                  </>
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
  
export default News;