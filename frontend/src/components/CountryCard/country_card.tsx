import React, { useState } from 'react';
import axios from 'axios';
import CountryDetails from './countryDetail.tsx';


interface Country {
    name: string;
    countryCode: string;
}

interface CountryInfo {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Array<{ commonName: string; officialName: string; countryCode: string; region: string }>;
}

interface CountryCardProps {
    country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);

    const handleClick = async () => {
        try {
            const response = await axios.get<CountryInfo>(`https://date.nager.at/api/v3/CountryInfo/${country.countryCode}`);
            setCountryInfo(response.data);
        } catch (error) {
            console.error('Error fetching country info:', error);
        }
    };

    return (
        <div className="border rounded-lg p-4 shadow-md bg-white w-full cursor-pointer" onClick={handleClick}>
            <h2 className="text-xl text-gray-800 font-bold mb-2">{country.name}</h2>
            {countryInfo && <CountryDetails country={countryInfo} />}
        </div>
    );
};

export default CountryCard;
