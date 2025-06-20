import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [characters, setCharacters] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);

  function copytext() {
    navigator.clipboard.writeText(password);
  }

  function generatePassword(value) {
    setCharacters(value);
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) {
      chars += "0123456789";
    }
    if (specialCharacters) {
      chars += "_-/@.";
    }

    let generatedPassword = "";
    for (let i = 0; i < characters; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  }

  async function toggleNumber(value) {
    await setNumbers(value);
    console.log("Numbers:", value);

    generatePassword(characters);
  }

  async function toggleSpCharacter(value) {
    await setSpecialCharacters(value);
    generatePassword(characters);
  }

  return (
    <>
      <div className="App flex align-middle justify-center w-[100vw] bg-[blue]">
        <div className="password-picker flex flex-col justify-center bg-[#3d3636b9] w-[70%] p-8">
          <div className="passwrd-field flex mb-7">
            <input
              type="text"
              name="password"
              className="bg-white w-[60%] h-[40px] p-4 rounded-2xl"
              value={password}
            />
            <button
              onClick={copytext}
              className="copy bg-blue-400 px-4 text-xl rounded-2xl ml-4 text-white"
            >
              Copy
            </button>
          </div>
          <div className="param-field flex">
            <input
              type="range"
              name="characters"
              value={characters}
              onChange={(e) => generatePassword(e.target.value)}
              min={4}
              max={20}
            />
            <span className="characters text-white font-bold ml-3">
              {" "}
              {characters}{" "}
            </span>

            <div className="param-cb ml-10">
              <input
                type="checkbox"
                className="mx-1 "
                name="numbers"
                id=""
                onChange={(e) => toggleNumber(e.target.checked)}
              />
              <label htmlFor="numbers" className="mr-3 text-white">
                Numbers
              </label>
              <input
                type="checkbox"
                name="characters"
                className="mx-1"
                id=""
                onChange={(e) => toggleSpCharacter(e.target.checked)}
              />
              <label htmlFor="characters" className="mr-3 text-white">
                characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
