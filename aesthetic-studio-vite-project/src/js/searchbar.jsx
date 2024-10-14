import React, {useState} from 'react';

export function Searchbar({onSearch}) {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div style={{backgroundColor: 'lightgray',padding: '8px', width: '200px', borderRadius: '2px', border: '1px solid #ccc'}}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                style={{ padding: '8px', borderRadius: '4px', border: 'none', backgroundColor: 'lightgray' }}
            />
            <button onClick={handleSearch} style={{ borderRadius: '4px', color: 'white', border: 'none' }}>
                :)

            </button>
        </div>
    );
}
