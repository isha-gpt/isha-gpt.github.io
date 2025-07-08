import { Link } from "react-router-dom";

function ChainsOfThought() {
  return (
    <div>
      <h1 style={{ 
        fontSize: 48, 
        fontWeight: 300, 
        margin: "0 0 2rem 0", 
        fontFamily: 'Bodoni 72, serif',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <Link
          to="/"
          style={{
            color: '#111',
            textDecoration: 'none',
            fontFamily: 'Bodoni 72, serif',
            fontWeight: 300,
            fontSize: 24,
            borderBottom: '1px solid transparent',
            transition: 'border-bottom 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.borderBottom = '1px solid #111';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderBottom = '1px solid transparent';
          }}
        >
          ←
        </Link>
        chains of thought
      </h1>
      
      <div style={{ 
        fontSize: 22, 
        fontFamily: 'Bodoni 72, serif', 
        fontWeight: 300,
        color: '#666'
      }}>
        wip
      </div>
    </div>
  );
}

export default ChainsOfThought; 