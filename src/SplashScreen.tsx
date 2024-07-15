import { useEffect } from "react";
import butterFly from "/BUTTERFLY.png"

export const SplashScreen: React.FC<{ onSplashEnd: () => void }> = ({ onSplashEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashEnd();
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <div className="splash-screen">
      <h1>Welcome to 143 Generator!</h1>
      <img src={butterFly} alt="metallic butterfly logo" />
    </div>
  );
};
