import Search from "./search";
import "./index.css";
import Weather from "./weather";
import { useState, useEffect } from "react";
// import "dotenv/config";

export default function WeatherApp() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  async function fetchWeather(city) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeather(data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  }

  function handleSearch() {
    console.log(search);
    fetchWeather(search);
  }

  useEffect(() => {
    fetchWeather("Ahmedabad");
    // console.log(weather);
  }, []);

  return (
    <div className="weather-app">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? <h1>Loading...</h1> : <Weather data={weather} />}
    </div>
  );
}
