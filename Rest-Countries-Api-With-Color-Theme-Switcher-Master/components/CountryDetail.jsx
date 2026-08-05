import { Link, useNavigate, useParams } from "react-router-dom";
import countriesData from "../data.json";

export function CountryDetail({ isDark }) {
  const { code } = useParams();
  const navigate = useNavigate();

  const country = countriesData.find((c) => {
    const searchCode = code.toUpperCase();
    return c.alpha3Code?.toUpperCase() === searchCode || c.alpha2Code?.toUpperCase() === searchCode || c.name.toLowerCase() === code.toLowerCase();
  });

  if (!country) {
    return (
      <div className="px-6 md:px-20 py-10">
        <button
          type="button"
          onClick={() => navigate("/")}
          className={`flex items-center gap-2 px-6 py-2 rounded-md shadow-md mb-10 cursor-pointer ${
            isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"
          }`}
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold">Country not found</h2>
      </div>
    );
  }

  const { flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = country;

  const borderCountries = borders
    ? borders.map((borderCode) => {
        const borderCountry = countriesData.find((c) => c.alpha3Code?.toUpperCase() === borderCode.toUpperCase());
        return {
          code: borderCode.toLowerCase(),
          name: borderCountry ? borderCountry.name : borderCode,
        };
      })
    : [];

  return (
    <div className="px-6 md:px-20 py-10">
      <button
        type="button"
        onClick={() => navigate("/")}
        className={`flex items-center gap-2 px-8 py-2 rounded-md shadow-md mb-16 cursor-pointer ${
          isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"
        }`}
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="w-full">
          <img src={flags?.svg || flags?.png} alt={`Flag of ${name}`} className="w-2xl max-h-100 object-cover rounded-md shadow-md " />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-extrabold">{name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Native Name: <span className="font-normal">{nativeName || name}</span>
              </p>
              <p className="font-semibold">
                Population: <span className="font-normal">{population?.toLocaleString()}</span>
              </p>
              <p className="font-semibold">
                Region: <span className="font-normal">{region}</span>
              </p>
              <p className="font-semibold">
                Sub Region: <span className="font-normal">{subregion || "N/A"}</span>
              </p>
              <p className="font-semibold">
                Capital: <span className="font-normal">{capital || "N/A"}</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Top Level Domain: <span className="font-normal">{topLevelDomain?.join(", ") || "N/A"}</span>
              </p>
              <p className="font-semibold">
                Currencies: <span className="font-normal">{currencies?.map((c) => c.name).join(", ") || "N/A"}</span>
              </p>
              <p className="font-semibold">
                Languages: <span className="font-normal">{languages?.map((l) => l.name).join(", ") || "N/A"}</span>
              </p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <span className="font-semibold text-lg mr-2">Border Countries:</span>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((b) => (
                  <Link
                    key={b.code}
                    to={`/country/${b.code}`}
                    className={`px-4 py-1 rounded shadow-md transition-all hover:scale-105 ${
                      isDark ? "bg-dark-elements text-white-custom" : "bg-white-custom text-light-text"
                    }`}
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
