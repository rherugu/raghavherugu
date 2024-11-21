// components/CustomCursor.js
import React, { useEffect, useRef, useState } from 'react';
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device has a touch screen
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touchDevice);

    if (touchDevice) {
      return; // Exit if it's a touch device
    }

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseover', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Return null for touch devices, otherwise render the cursor
  return isTouchDevice ? null : <Cursor ref={cursorRef} />;
}

export default CustomCursor;