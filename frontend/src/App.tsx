import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/search/searchbar';
import CountryCard from './components/CountryCard/country_card';
import './index.css';

interface Country {
    name: string;
    countryCode: string;
}

const App = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get<Country[]>('http://localhost:3000/countries/AllCountries');
            console.log(response.data);
            setCountries(response.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                <SearchBar onSearch={handleSearch} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                    {countries.map((country) => (
                        <CountryCard key={country.countryCode} country={country} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
