// components/ScrollIndicator.js
import React from 'react';
import styled from 'styled-components';

const Indicator = styled.div`
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 200px;
  background: linear-gradient(#ff7e5f, #feb47b);
  border-radius: 2px;
  overflow: hidden;
  z-index:99999;
`;

const Progress = styled.div`
  width: 100%;
  height: ${(props) => props.scroll}%;
  background: #fff;
  transition: height 0.2s ease-out;
`;

function ScrollIndicator() {
  const [scroll, setScroll] = React.useState(0);

  const onScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScroll(scrolled);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Indicator>
      <Progress scroll={scroll} />
    </Indicator>
  );
}

export default ScrollIndicator;