import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isForceToggled, setIsForceToggled] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // If manually toggled, don't auto-detect
      if (!isForceToggled) {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);
      }
    };

    // Check on mount
    checkDevice();

    // Add event listener for window resize
    window.addEventListener('resize', checkDevice);

    // Add keyboard shortcut (Cmd/Ctrl + M) to toggle mobile view
    const handleKeyPress = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'm') {
        e.preventDefault();
        setIsForceToggled(prev => !prev);
        setIsMobile(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isForceToggled]);

  return { isMobile };
};

export default useDeviceDetect; 