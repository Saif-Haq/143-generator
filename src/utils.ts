export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const range = (start: any, end: any, step = 1) => {
    // eslint-disable-next-line prefer-const
    let output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};