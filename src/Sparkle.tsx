import { useState } from "react";
import { random, range } from "./utils";
import { SparkleInstance } from "./SparkleInstance";

export function Sparkles({ children }) {
  const [sparkles, setSparkles] = useState(() => {
    return range(4).map(() => generateSparkle(color));
  });

  const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
      id: String(random(10000, 99999)),
      createdAt: Date.now(),
      // Bright yellow color:
      color,
      size: random(10, 20),
      style: {
        // Pick a random spot in the available space
        top: random(0, 100) + '%',
        left: random(0, 100) + '%',
        // Float sparkles above sibling content
        zIndex: 2,
      },
    }
  }

  const sparkle = generateSparkle();
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <SparkleInstance
        color={sparkle.color}
        size={sparkle.size}
        style={sparkle.style}
      />
      <div style={{ position: "relative", zIndex: 1, fontWeight: "bold" }}>
        {children}
      </div>
    </div>
  );
}