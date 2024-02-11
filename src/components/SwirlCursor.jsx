import React, { useState, useEffect } from 'react';


const SwirlCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
    </div>
  );
};

export default SwirlCursor;
