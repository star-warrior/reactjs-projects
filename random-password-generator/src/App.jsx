import { useCallback, useState, useEffect, use } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [characters, setCharacters] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  function copytext() {
    navigator.clipboard.writeText(password);
    setShowPopup(true);
  }

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [showPopup]);

  const generatePassword = useCallback(() => {
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
  }, [characters, numbers, specialCharacters]);

  // Auto-generate password when settings change
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  function toggleNumber(value) {
    setNumbers(value);
  }

  function toggleSpCharacter(value) {
    setSpecialCharacters(value);
  }

  return (
    <div className="App flex items-center justify-center flex-col min-h-screen w-full bg-blue-500">
      {/* Popup meassage */}

      {showPopup && (
        <div className="absolute top-4 bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Password Copied</span>
          </div>
        </div>
      )}
      <div className="password-picker flex flex-col justify-center bg-gray-800 bg-opacity-75 w-[70%] max-w-lg p-8 rounded-lg">
        <div className="password-field flex mb-7">
          <input
            type="text"
            name="password"
            className="bg-white w-full h-10 px-4 rounded-lg"
            value={password}
            readOnly
          />
          <button
            onClick={copytext}
            className="copy bg-blue-400 hover:bg-blue-500 px-4 py-2 text-sm rounded-lg ml-4 text-white transition-colors"
          >
            Copy
          </button>
        </div>

        <div className="param-field flex flex-col space-y-4">
          <div className="flex items-center">
            <input
              type="range"
              name="characters"
              value={characters}
              onChange={(e) => setCharacters(Number(e.target.value))}
              min={4}
              max={20}
              className="flex-1"
            />
            <span className="text-white font-bold ml-3 min-w-[3rem]">
              {characters}
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <label className="flex items-center text-white cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                name="numbers"
                checked={numbers}
                onChange={(e) => toggleNumber(e.target.checked)}
              />
              Numbers
            </label>

            <label className="flex items-center text-white cursor-pointer">
              <input
                type="checkbox"
                name="specialCharacters"
                className="mr-2"
                checked={specialCharacters}
                onChange={(e) => toggleSpCharacter(e.target.checked)}
              />
              Special Characters
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
