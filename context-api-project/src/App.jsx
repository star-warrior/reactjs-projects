import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeButton";
import Card from "./Components/Card";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
    console.log("Theme toggled to:", newTheme);
    console.log("HTML classes:", document.documentElement.className);
  };

  // Apply initial theme
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme Button */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card  */}
              <Card toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
