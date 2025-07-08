import { Link } from 'react-router-dom';

function News() {
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
        text: "I completed my Bachelor's Thesis at the PPS Lab on data poisoning and robustness. See ",
        linkedText: "my talk here",
        link: "https://youtu.be/RaCILP1HBew",
        afterText: "."
      },
      { date: "Mar 2023", text: "Our engineering team at SwissLoop Tunneling placed second in this year's edition of Elon Musk's Not-A-Boring competition!" },
      
    ];

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#fff",
          fontFamily: 'Bodoni 72, serif',
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 12,
          paddingBottom: 12,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ paddingLeft: 8, paddingRight: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 32, marginBottom: 24 }}>
            <Link to="/" className="bodoni-link-arrow" style={{ fontSize: 32, fontFamily: 'Bodoni 72, serif', fontWeight: 300, marginRight: 24, border: 'none', background: 'none', cursor: 'pointer', lineHeight: 1 }}>&larr;</Link>
            <h2 style={{ fontSize: 50, fontWeight: 300, fontFamily: 'Bodoni 72, serif', color: '#111', margin: 0 }}>news</h2>
          </div>
          {newsEntries.map((entry, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
              <div style={{ minWidth: 100, fontSize: 24, fontWeight: 300, fontFamily: 'Bodoni 72, serif', color: '#888', marginRight: 32, textAlign: 'right', flexShrink: 0, lineHeight: 1.5 }}>
                {entry.date}
              </div>
              <div style={{ fontSize: 22, fontWeight: 300, fontFamily: 'Bodoni 72, serif' }}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default News;