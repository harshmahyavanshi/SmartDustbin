import React, { useRef, useEffect } from "react";
const Canvas = ({ distance }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    let multiplier =  12.8/16;
    
    if(distance<3)
      ctx.fillStyle = "red";
    else
      ctx.fillStyle = "#6464ff";

    ctx.rect(10, 170, 120, -distance * multiplier);
    ctx.fill();
  }, [distance]);

  return <canvas ref={canvasRef} width={140} height={180} />;
};

export default Canvas;