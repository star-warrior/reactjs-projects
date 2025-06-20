import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import { HexColorPicker } from "react-colorful";

function App() {
  const [color, setColor] = useState("Olive");

  // function handleColorChange(newColor) {
  //   setColor(newColor);
  //   console.log(color);
  //   document.querySelector(".App").style.backgroundColor = newColor;
  // }

  return (
    <>
      <div
        style={{ background: color }}
        className="App bg-black text-white min-h-screen flex flex-col items-center justify-center relative"
      >
        <p className="absolute bottom-4 text-sm">
          <a href="https://github.com/star-warrior">©Jay Mehta</a>
        </p>
        <div className="bg-[#49484881] rounded-2xl text-white p-8 flex flex-col items-center justify-center relative">
          <h1 className="text-4xl  font-bold">Welcome to Color Picker</h1>
          <p className="my-7">
            {color ? `Color: ${color}` : "Pick your color"}
          </p>
          {/* <ColorPicker onColorChange={handleColorChange} /> */}
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
