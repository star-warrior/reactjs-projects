import { useEffect, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import bg from "../src/assets/bg.png";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("eur");

  const [fromCurrencyValue, setFromCurrencyValue] = useState(1);
  const [toCurrencyValue, setToCurrencyValue] = useState(1);

  const info = useCurrencyInfo(fromCurrency);
  const currencies = Object.keys(info);

  useEffect(() => {
    setToCurrencyValue(info[toCurrency] * fromCurrencyValue);
  }, [setFromCurrencyValue, info, fromCurrency, toCurrency, fromCurrencyValue]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={`bg-cover bg-center text-white  min-h-screen flex items-center justify-center gap-4`}
      >
        <div className="flex flex-col items-center justify-center bg-[#252525e5] p-5 rounded-2xl">
          <h1 className="text-4xl text-center text-amber-400 mb-5">
            Currency Converter
          </h1>
          <div className="p-4 ">
            <label htmlFor="fromCurrency" className="block mb-2 text-gray-400">
              From
            </label>
            <input
              className="bg-white text-black p-2 rounded-md mr-2 text-xl"
              type="number"
              id="fromCurrencyValue"
              value={fromCurrencyValue}
              onChange={(e) => {
                setFromCurrencyValue(e.target.value);
              }}
            />
            <select
              className="text-gray-300 text-xl border-2 p-2 rounded-md"
              name="fromCurrency"
              id="fromCurrency"
              value={fromCurrency}
              onChange={(e) => {
                setFromCurrency(e.target.value);
              }}
            >
              {currencies.map((currency, key) => {
                return (
                  <option key={key} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            className="bg-green-500 px-6 py-3 text-xl rounded-xl mt-4 hover:bg-blue-700 transition-colors duration-300"
            onClick={() => {
              const temp = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(temp);
            }}
          >
            Swap
          </button>

          <div className="p-4">
            <label htmlFor="toCurrency" className="block mb-2 text-gray-400">
              To
            </label>
            <input
              className="bg-white text-black p-2 rounded-md mr-2 text-xl"
              type="number"
              id="fromCurrencyValue"
              value={toCurrencyValue}
              onChange={(e) => setToCurrencyValue(e.target.value)}
            />
            <select
              className="text-gray-300 text-xl border-2 p-2 rounded-md"
              name="toCurrency"
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => {
                setToCurrency(e.target.value);
              }}
            >
              {currencies.map((currency, key) => {
                return (
                  <option key={key} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
