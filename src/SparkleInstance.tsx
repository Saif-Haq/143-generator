export const SparkleInstance = ({ color, size: number, style }) => {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 2,
      }}
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
    >
      <path d="all that stuff from before" fill={color} style={style} />
    </div>
  );
};
