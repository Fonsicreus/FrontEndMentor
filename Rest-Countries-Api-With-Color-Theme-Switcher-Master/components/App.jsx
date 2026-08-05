import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import countriesData from "../data.json";
import { Attribution } from "./Attribution";
import { CountryComponent } from "./CountryComponent";
import { CountryDetail } from "./CountryDetail";

function CountryList({ countries, isDark, searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }) {
  return (
    <>
      <section className="px-6 md:px-20 pt-8 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6">
        <div className={`flex items-center gap-4 px-6 py-4 rounded-md shadow-md w-full md:w-96 ${isDark ? "bg-dark-elements" : "bg-white-custom"}`}>
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full bg-transparent outline-none text-sm placeholder-gray-400 ${isDark ? "text-white-custom" : "text-light-text"}`}
          />
        </div>

        <div className={`relative w-52 rounded-md shadow-md ${isDark ? "bg-dark-elements" : "bg-white-custom"}`}>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className={`w-full px-6 py-4 bg-transparent outline-none text-sm font-semibold cursor-pointer appearance-none ${
              isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"
            }`}
          >
            <option value="" className={isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"}>
              Filter by Region 🔽
            </option>
            <option value="Africa" className={isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"}>
              Africa
            </option>
            <option value="Americas" className={isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"}>
              Americas
            </option>
            <option value="Asia" className={isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"}>
              Asia
            </option>
            <option value="Europe" className={isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"}>
              Europe
            </option>
            <option value="Oceania" className={isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"}>
              Oceania
            </option>
          </select>
        </div>
      </section>

      <section className="px-6 md:px-20 py-10 w-full">
        <CountryComponent countries={countries} isDark={isDark} />
      </section>
    </>
  );
}

export function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredCountries = countriesData.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <HashRouter>
      <main
        className={`min-h-screen w-full overflow-x-hidden font-sans ${isDark ? "bg-dark-bg text-white-custom" : "bg-light-bg text-light-text"} transition-colors duration-500 flex flex-col justify-between`}
      >
        <div>
          <header
            className={`flex justify-between items-center px-6 md:px-20 py-6 shadow-md ${isDark ? "bg-dark-elements" : "bg-white-custom"} transition-colors duration-500`}
          >
            <Link to="/" className="font-bold text-xl hover:opacity-80">
              Where in the world?
            </Link>
            <button type="button" onClick={toggleTheme} className="flex items-center gap-2 font-semibold cursor-pointer">
              <span>{isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}</span>
            </button>
          </header>

          <Routes>
            <Route
              path="/"
              element={
                <CountryList
                  countries={filteredCountries}
                  isDark={isDark}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                />
              }
            />
            <Route path="/country/:code" element={<CountryDetail isDark={isDark} />} />
          </Routes>
        </div>

        <Attribution />
      </main>
    </HashRouter>
  );
}

export default App;
