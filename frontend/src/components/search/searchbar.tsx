import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-blue flex items-center'>
      
      <br />
      <input
        type="text"
        placeholder="                     Name of the country..."
        value={searchTerm}
        onChange={handleChange}
        className='w-80 h-12 text-black bg-white rounded-xl' 
      />
      <img src="./src/media/lupa.png" alt="" className='w-100 h-100' />
      <br />
      <button type="submit" className='m-5'>search</button>
      <button type="submit">AllCountries</button>
    </form>
  );
}

export default SearchBar;