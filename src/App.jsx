import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import News from "./News";
import ChainsOfThought from "./ChainsOfThought";

function App() {
  // Link style for Bodoni font and subtle underline on hover
  const linkStyle = {
    color: '#111',
    textDecoration: 'none',
    fontFamily: 'Bodoni 72, serif',
    fontWeight: 300,
    transition: 'border-bottom 0.2s',
    borderBottom: '1px solid transparent',
    paddingBottom: 2,
  };

  const mainContent = (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        fontFamily: 'Bodoni 72, serif',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
        boxSizing: 'border-box',
      }}
    >
      <div className="landing-flex">
        <img
          src="/profile.png"
          alt="profile"
          style={{ width: 310, height: 310, objectFit: "cover", borderRadius: 0, marginTop: 24 }}
        />
        <div>
          <h1 style={{ fontSize: 48, fontWeight: 300, margin: 0, fontFamily: 'Bodoni 72, serif' }}>isha gupta</h1>
          <div style={{ fontSize: 22, margin: "32px 0 0 0", fontFamily: 'Bodoni 72, serif', fontWeight: 300 }}>
            <p style={{ margin: 0, fontWeight: 300 }}>
              I am currently a MATS scholar working with the Anthropic Alignment Team.
            </p>
            <p style={{ fontSize: 20, margin: "24px 0 0 0", fontWeight: 300 }}>
              I hold a Bachelor's and Master's degree in Computer Science from ETH Zürich, with a major in cybersecurity and minor in machine intelligence. Within my Master's degree, I was a visiting research scholar at Stanford (Prof. Sanmi Koyejo) and before that in Cambridge (Prof. Robert Mullins). My professional interests broadly include (tooling and infra for) AI safety and alignment, multimodal and embodied AI systems, and dissemination of frontier AI into the broader economy.
            </p>
          </div>
          <div style={{ fontSize: 20, margin: "40px 0 0 0", fontFamily: 'Bodoni 72, serif', fontWeight: 300 }}>
            <div style={{ marginBottom: 8, fontWeight: 300, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <a href="mailto:isha.gpt@outlook.com" className="bodoni-link">email</a>
              <span>|</span>
              <a href="https://scholar.google.com/citations?hl=en&user=QdXdaVEAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="bodoni-link">publications</a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/isha-gupta-ch/" target="_blank" rel="noopener noreferrer" className="bodoni-link">linkedin</a>
              <span>|</span>
              <a href="https://github.com/isha-gpt" target="_blank" rel="noopener noreferrer" className="bodoni-link">github</a>
              <span>|</span>
              <a href="https://x.com/isha_gpt_" target="_blank" rel="noopener noreferrer" className="bodoni-link">x</a>
              <span>|</span>
              <Link to="/news" className="bodoni-link">news</Link>
            </div>
            <div style={{ fontWeight: 300 }}>
              <a href="https://tide-polonium-5e9.notion.site/Books-60733d8cf2f24a839239648b8d55caa9" target="_blank" rel="noopener noreferrer" className="bodoni-link">books</a> |
              <a href="https://vsco.co/isha-17/gallery" target="_blank" rel="noopener noreferrer" className="bodoni-link" style={{ marginLeft: 4, marginRight: 4 }}>
                gallery
              </a>
              | 
              <a href="https://www.instagram.com/liebe.gruesse.isha/" target="_blank" rel="noopener noreferrer" className="bodoni-link" style={{ marginLeft: 4, marginRight: 4 }}>
                handmade
              </a>
              | <Link to="/chains-of-thought" className="bodoni-link">chains of thought</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={mainContent} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/chains-of-thought" element={<ChainsOfThoughtPage />} />
      </Routes>
    </Router>
  );
}

// NewsPage: minimal style wrapper for News content
function NewsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        fontFamily: 'Bodoni 72, serif',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: 800, width: "100%" }}>
        <News />
      </div>
    </div>
  );
}

// ChainsOfThoughtPage: minimal style wrapper for ChainsOfThought content
function ChainsOfThoughtPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#fff",
        fontFamily: 'Bodoni 72, serif',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 56,
        paddingBottom: 12,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: 800, width: "100%" }}>
        <ChainsOfThought />
      </div>
    </div>
  );
}

export default App;
