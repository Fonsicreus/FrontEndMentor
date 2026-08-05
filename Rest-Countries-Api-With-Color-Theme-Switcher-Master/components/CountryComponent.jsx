import { Link } from "react-router-dom";

export function CountryCard({ country, isDark }) {
  const { flags, name, population, region, capital, alpha3Code } = country;
  const countryCode = (alpha3Code || name).toLowerCase();

  return (
    <Link
      to={`/country/${countryCode}`}
      className={`${
        isDark ? "bg-dark-elements" : "bg-white-custom"
      } rounded-md shadow-md overflow-hidden flex-col justify-between cursor-pointer transition-all hover:scale-105 duration-500 w-full max-w-xs block`}
    >
      <img src={flags?.svg || flags?.png} alt={`Flag of ${name}`} className="w-full h-40 object-cover" />
      <div className="p-6 flex flex-col gap-2">
        <h2 className="font-extrabold text-lg mb-2">{name}</h2>
        <p className="text-sm font-semibold">
          Population: <span className="font-normal">{population?.toLocaleString()}</span>
        </p>
        <p className="text-sm font-semibold">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="text-sm font-semibold">
          Capital: <span className="font-normal">{capital || "N/A"}</span>
        </p>
      </div>
    </Link>
  );
}

export function CountryComponent({ countries = [], isDark }) {
  return (
    <div className="w-full flex flex-wrap justify-between gap-10">
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code || country.name} country={country} isDark={isDark} />
      ))}
    </div>
  );
}

export default CountryComponent;
