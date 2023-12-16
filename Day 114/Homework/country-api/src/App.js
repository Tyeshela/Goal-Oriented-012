import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setCountry(null);

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${input}`);
      if (!response.ok) {
        throw new Error('Country not found');
      }
      const data = await response.json();
      setCountry(data[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrencies = (currencies) => {
    return currencies ? Object.values(currencies).map(currency => currency.name).join(', ') : 'N/A';
  };

  const formatLanguages = (languages) => {
    return languages ? Object.values(languages).join(', ') : 'N/A';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center p-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Enter country name"
          />
          <button 
            onClick={handleSearch} 
            className="bg-blue-500 text-white p-2 ml-2 hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}

        {error && <p className="text-red-600 text-center">{error}</p>}

        {country && (
          <div className="bg-white border border-gray-300 p-4 mt-4 text-center">
            <h2 className="text-xl font-bold">{country.name.common}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Languages:</strong> {formatLanguages(country.languages)}</p>
            <p><strong>Currencies:</strong> {formatCurrencies(country.currencies)}</p>
            <p>
              <strong>Map:</strong> 
              <a 
                href={`https://www.google.com/maps/place/${country.name.common}`} 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-500 hover:text-blue-400"
              >
                Google Maps
              </a>
            </p>
            <img 
              src={country.flags.png} 
              alt={`Flag of ${country.name.common}`} 
              className="max-w-xs mt-4 mx-auto" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
