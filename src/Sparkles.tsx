import { FC, useState } from "react";
import { useRandomInterval } from "./hooks/useRandomInterval";
import { DEFAULT_COLOR, generateSparkle, range } from "./utils";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { Sparkle } from "./Sparkle";
import { SparklesProps, SparkleType } from "./interfaceTypes";

export const Sparkles: FC<SparklesProps> = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>(() => {
    return range(3).map(() => generateSparkle(color));
  });
  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );

  return (
    <span className="wrapper" {...delegated}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className="child-wrapper">{children}</strong>
    </span>
  );
};