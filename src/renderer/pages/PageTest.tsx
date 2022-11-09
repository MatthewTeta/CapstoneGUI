import React from 'react';
import CouponCanvas from 'renderer/components/CouponCanvas';
import MeasurementView from 'renderer/components/MeasurementView';
import FooterBar from '../components/FooterBar';

const pageContainerStyle = {
  width: '100%',
  height: '100%',
};

function PageTest() {
  return (
    <div style={pageContainerStyle}>
      <CouponCanvas />
      <MeasurementView />
      <FooterBar />
    </div>
  );
}

export default PageTest;
