import { useState } from "react";
import albumArt from "/Katy_Perry_-_143-Photoroom.png"
import { Sparkles } from "./Sparkles";
import "./index.css"
import butterFly from "/BUTTERFLY.png"


function App() {
  const [text, setText] = useState<string>("");
  const [toggleCover, setToggleCover] = useState<boolean>(false);

  return (
    <div>
      <div className="cover-picker" style={{ backgroundColor: toggleCover ? "#ED5027" : "#325BAF" }} onClick={() => setToggleCover(prev => !prev)}></div>
      <img src={butterFly} alt="metallic butterfly logo" />

      <div className="container">

        <input type="text" id="textInput" placeholder="Type here..." value={text} onChange={(e) => setText(e.target.value)} />

        <div className="image-container">
          {toggleCover ? <div className="red-cover"></div> : <img src={albumArt} alt="" width={500} height={500} />}
          <div className="textOverlay">{text}</div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Sparkles>
            Take A Screenshot To Save :)
          </Sparkles>
        </div>
      </div>
    </div>
  )
}

export default App;
