import { CSSProperties, ReactNode } from 'react';

export interface SparkleInstanceProps {
  color: string;
  size: number;
  style?: CSSProperties;
}

export type SparklesProps = {
  color?: string;
  children: ReactNode;
};

export type SparkleType = {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
};
