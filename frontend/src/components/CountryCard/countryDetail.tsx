import React from 'react';

interface CountryInfo {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Array<{ commonName: string; officialName: string; countryCode: string; region: string }>;
}

interface CountryDetailsProps {
    country: CountryInfo | null;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
    if (!country) {
        return null;
    }

    return (
        <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Información Adicional</h2>
            <p><strong>Nombre Común:</strong> {country.commonName}</p>
            <p><strong>Nombre Oficial:</strong> {country.officialName}</p>
            <p><strong>Región:</strong> {country.region}</p>
            <p><strong>Código de País:</strong> {country.countryCode}</p>
            <div>
                <h3 className="font-bold mt-2">Países Fronterizos:</h3>
                <ul className="list-disc list-inside">
                    {country.borders.map((border) => (
                        <li key={border.countryCode}>{border.commonName} ({border.officialName})</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CountryDetails;
