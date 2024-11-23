// src/pages/CountryListPage.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountryListPage = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios.get('http://localhost:3000/countries/AllCountries');
            setCountries(response.data);
        };
        fetchCountries();
    }, []);

    return (
        <div>
            <h1>Country Info:</h1>
            <ul>
                {countries.map(country => (
                    <li key={country}>
                        <Link to={`/countries/`}></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryListPage;
