// src/pages/CountryInfoPage.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const CountryInfoPage = () => {
    const { countryCode } = useParams();
    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        const fetchCountryInfo = async () => {
            if (countryCode) {
                const response = await axios.get(`http://localhost:3001/country/info/${countryCode}`);
                setCountryInfo(response.data);
            }
        };
        fetchCountryInfo();
    }, [countryCode]);

    const populationData = {
        labels: countryInfo.population?.map(entry => entry.year),
        datasets: [{
            label: 'Population',
            data: countryInfo.population?.map(entry => entry.value),
            borderColor: 'rgba(75,192,192,1)',
            fill: false
        }]
    };

    return (
        <div>
            <h1>{countryInfo.name}</h1>
            <img src={countryInfo.flag} alt={`${countryInfo.name} flag`} />
            <h2>Border Countries</h2>
            <ul>
                {countryInfo.borders?.map(border => (
                    <li key={border.isoCode}>
                        <Link to={`/countries/${border.isoCode}`}>{border.name}</Link>
                    </li>
                ))}
            </ul>
            <h2>Population Over Time</h2>
            <Line data={populationData} />
        </div>
    );
};

export default CountryInfoPage;
