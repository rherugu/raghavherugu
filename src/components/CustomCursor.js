// components/CustomCursor.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background: rgba(255, 126, 95, 0.8);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-out, background 0.3s ease-out;
  z-index: 9999;
  mix-blend-mode: difference;
`;

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    });

    const interactiveElements = document.querySelectorAll('a, button');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseover', () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorRef.current.style.background = 'rgba(255, 255, 255, 0.8)';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorRef.current.style.background = 'rgba(255, 126, 95, 0.8)';
        }
      });
    });
  }, []);

  return <Cursor ref={cursorRef} />;
}

export default CustomCursor;