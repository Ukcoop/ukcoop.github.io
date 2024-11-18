'use client';

import { useRef, useEffect, useState } from 'react';
const p5: any = require('p5');
//import p5 from 'p5';

export default function Sketch() {
  const sketchRef: any = useRef();
  const containerRef: any = useRef();
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setCanvasWidth(containerRef.current.offsetWidth);
        setCanvasHeight(containerRef.current.offsetHeight);
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const Sketch = (p: any) => {
      let canvas;
      let d = 0;

      p.setup = () => {
        canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(sketchRef.current);
        canvas.style.zIndex = '-10';
        p.background(0,0,0,0);
        p.noStroke();
      };

      p.draw = () => {
        if(d > canvasHeight) {
          d = 0;
        }

        p.rect(p.random(0, canvasWidth), d, 10, 20);
        p.fill(p.random(0,255), p.random(0,255), p.random(0,255));
        d++;
      };

      p.windowResized = () => {
        p.resizeCanvas(canvasWidth, canvasHeight);
        p.background(0,0,0,0);
      };
    };

    const myP5 = new p5(Sketch);

    return () => myP5.remove();
  }, [canvasWidth, canvasHeight]);

  return (
    <div ref={containerRef} className="w-full h-full -z-10">
      <div ref={sketchRef}></div>
    </div>
  );
}
