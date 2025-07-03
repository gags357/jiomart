
import { ChartData, ChartOptions } from 'chart.js';

export interface ChartProps<T extends 'line' | 'bar' | 'doughnut' | 'radar'> {
  data: ChartData<T>;
  options: ChartOptions<T>;
  inView: boolean;
}

export interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  inView: boolean;
  fractionDigits?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export interface SectionProps {
  className?: string;
}
