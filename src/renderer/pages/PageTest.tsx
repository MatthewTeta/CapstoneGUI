import React from 'react';
import FooterBar from '../components/FooterBar';

const pageContainerStyle = {
  width: '100%',
  height: '100%',
};

function PageTest() {
  return (
    <div style={pageContainerStyle}>
      <FooterBar />
    </div>
  );
}

export default PageTest;
