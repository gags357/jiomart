
import React, { useRef, useEffect } from 'react';

const BaseChart = <T extends 'line' | 'bar' | 'doughnut' | 'radar'>({ type, data, options, inView }: {type: T, data: any, options: any, inView: boolean}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<any | null>(null); // Using `any` for Chart.js from CDN

  useEffect(() => {
    if (!inView || !canvasRef.current) {
        if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
        }
        return;
    }
    
    if (chartRef.current) {
        chartRef.current.destroy();
    }
    
    const ctx = canvasRef.current.getContext('2d');
    if (ctx && (window as any).Chart) {
      chartRef.current = new (window as any).Chart(ctx, {
        type,
        data,
        options,
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [inView, data, options, type]);

  return <canvas ref={canvasRef}></canvas>;
};

export default BaseChart;
