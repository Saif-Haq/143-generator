import { useState } from "react";
import albumArt from "/Katy_Perry_-_143-Photoroom.png"
import { Sparkles } from "./Sparkles";
import "./index.css"
import vinyl from "/signed-vinyl.gif"
import { SplashScreen } from "./SpalshScreen";


function App() {
  const [text, setText] = useState<string>("");
  const [toggleCover, setToggleCover] = useState<boolean>(false);
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  return (
    <div>
      {showSplash && <SplashScreen onSplashEnd={handleSplashEnd} />}
      {!showSplash &&
        (
          <div style={{ paddingTop: "40px" }}>
            <div className="cover-picker" style={{ backgroundColor: !toggleCover ? "#ED5027" : "#EDFCFF" }} onClick={() => setToggleCover(prev => !prev)}></div>

            <div className="container">
              <input type="text" id="textInput" placeholder="Type here..." value={text} onChange={(e) => setText(e.target.value)} />

              <div className={`image-container ${toggleCover && 'red-cover'}`}>
                {!toggleCover && <img src={albumArt} alt="" width={500} height={500} />}
                <div className="textOverlay chrome-text">{text}</div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <Sparkles>
                  Take A Screenshot To Save :)
                </Sparkles>

                <a target="_blank" href="https://katyperry.com" style={{ marginTop: "20px" }}>
                  Visit katyperry.com
                  <img src={vinyl} width={100} height={100} alt="signed vinyl" />
                </a>
              </div>

            </div>

            <p className="footer-heart">
              Made with <span className="g-emoji" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></span> by <a href="https://www.github.com/Saif-Haq">Saif</a>
            </p>
          </div>
        )
      }
    </div >
  )
}

export default App;
