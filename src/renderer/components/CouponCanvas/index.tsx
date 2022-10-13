import { useLayoutEffect, useRef } from 'react';
import test_coupon from '../../../../assets/img/test_coupon.png';
// import './CouponCanvas.css'

function CouponCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    // Initialize canvas element
    const { current } = canvasRef;
    if (current === null) return;
    const ctx = current.getContext('2d');
    if (ctx === null) return;

    // Create image and display on canvas
    // const couponImg = ;

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  });

  return (
    <div className="CouponCanvas">
      <canvas ref={canvasRef} width="480" height="270">
        <img src={test_coupon} alt="coupon" />
      </canvas>
    </div>
  );
}

export default CouponCanvas;
