import { useState, useEffect, useRef } from 'react';

const DISPLAY_MS = 2000;

function Gallery() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    fetch('/gallery-images.json')
      .then(r => r.json())
      .then(data => {
        const urls = data || [];
        setImages(urls);
        urls.forEach(url => { new Image().src = url; });
      })
      .catch(() => {});
  }, []);

  const dismiss = () => {
    clearTimeout(timerRef.current);
    setFading(true);
    setTimeout(() => { setCurrent(null); setFading(false); }, 300);
  };

  const showRandom = (e) => {
    e.preventDefault();
    if (!images.length) return;
    clearTimeout(timerRef.current);
    const url = images[Math.floor(Math.random() * images.length)];
    setCurrent(url);
    setFading(false);
    timerRef.current = setTimeout(dismiss, DISPLAY_MS);
  };

  return (
    <>
      <a href="#" className="bodoni-link" onClick={showRandom}>
        random.choice(gallery)
      </a>

      {current && (
        <div
          onClick={dismiss}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          <img
            src={current}
            alt=""
            style={{
              maxHeight: '49vh',
              maxWidth: '49vw',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
      )}
    </>
  );
}

export default Gallery;
