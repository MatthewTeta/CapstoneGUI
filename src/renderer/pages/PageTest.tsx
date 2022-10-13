import React from 'react';
import CouponCanvas from 'renderer/components/CouponCanvas';
import FooterBar from '../components/FooterBar';

const pageContainerStyle = {
  width: '100%',
  height: '100%',
};

function PageTest() {
  return (
    <div style={pageContainerStyle}>
      <CouponCanvas />
      <FooterBar />
    </div>
  );
}

export default PageTest;
