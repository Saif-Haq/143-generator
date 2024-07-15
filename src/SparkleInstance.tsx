import { FC } from "react";
import { SparkleInstanceProps } from "./interfaceTypes";

export const SparkleInstance: FC<SparkleInstanceProps> = ({ color, size, style }) => {
  return (
    <div
      className="wrapper"
      style={{
        zIndex: 2,
        width: size,
        height: size,
        ...style
      }}
    >
      <svg
        className="svg"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
      >
        <path d="all that stuff from before" fill={color} />
      </svg>
    </div >
  );
};
