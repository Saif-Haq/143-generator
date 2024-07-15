/* eslint-disable no-extra-boolean-cast */
import axios from "axios";
import { useState, useEffect } from "react";
import { Sparkles } from "./Sparkles";
import "./index.css";
import albumArt from "/Katy_Perry_-_143-Photoroom.png";
import useDebounce from "./hooks/useDebounce";
import { SplashScreen } from "./SplashScreen";

function App() {
  const [text, setText] = useState<string>("");
  const [moderatedText, setModeratedText] = useState<string>("");

  const [toggleCover, setToggleCover] = useState<boolean>(false);
  const [showSplash, setShowSplash] = useState(true);

  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText && !!import.meta.env.VITE_OPENAI_API_KEY) {
      moderationApiCall(debouncedText);
    }
  }, [debouncedText]);

  const handleSplashEnd = () => {
    setShowSplash(false);
  };

  const moderationApiCall = async (textToModerate: string) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/moderations', {
        input: textToModerate
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        }
      });
      console.log('API Response:', response.data.results[0].flagged);

      if (response.data.results[0].flagged) {
        setText("");
        setModeratedText("");
      } else {
        setModeratedText(textToModerate);
      }

    } catch (error) {
      console.error('API Error:', error);
    }
  };

  return (
    <div>
      {showSplash && <SplashScreen onSplashEnd={handleSplashEnd} />}
      {!showSplash &&
        (
          <div className="its-a-womans-world">
            <div className="cover-picker" style={{ backgroundColor: !toggleCover ? "#ED5027" : "#EDFCFF" }} onClick={() => setToggleCover(prev => !prev)}></div>
            <div className="container">
              <input type="text" id="textInput" placeholder="Type here..." value={text} onChange={(e) => setText(e.target.value)} />

              <div className={`image-container ${toggleCover && 'red-cover'}`}>
                {!toggleCover && <img src={albumArt} alt="" width={500} height={500} />}
                <div className={`textOverlay ${toggleCover && "chrome-text"}`}>{import.meta.env.VITE_OPENAI_API_KEY ? moderatedText : text}</div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <Sparkles>
                  Take A Screenshot To Save :)
                </Sparkles>
              </div>

            </div>

            <p className="footer-heart">
              Made with <span className="g-emoji" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></span> by <a href="https://www.github.com/Saif-Haq">Saif</a>
            </p>
          </div>
        )
      }
    </div>
  )
}

export default App;
