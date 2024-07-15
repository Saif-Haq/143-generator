export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

export const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      zIndex: 2,
    },
  }
}

export const sparkleAnimation = `
@keyframes sparkle {
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1) rotate(90deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
}
`;

export const growAndShrink = `@keyframes growthAndShrink{
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
}
`;

export const spin = `
@keyframes spin{
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
}
`;

export const range = (start: number, end?: number, step: number = 1): number[] => {
  const output: number[] = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};