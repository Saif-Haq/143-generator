import { useState } from "react";
import albumArt from "/Katy_Perry_-_143-Photoroom.png"

function App() {
  const [text, setText] = useState<string>("");

  return (
    <div className="container">
      <input type="text" id="textInput" placeholder="Type here..." value={text} onChange={(e) => setText(e.target.value)} />

      <div className="image-container">
        <img src={albumArt} alt="" />
        <div className="textOverlay">{text}</div>
      </div>

      <p>Take A Screenshot To Save :)</p>
    </div>
  )
}

export default App;
