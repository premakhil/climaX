import React from 'react'
import App from './App';
import { useState } from 'react';

function SearchBar() {

    const [search, setSearch] = useState('');
    const [tempSearch, setTempSearch] = useState('');

    const [searchTrue, setsearchTrue] = useState(false);

    const handleSearch = (e) => {

        e.preventDefault();

        setsearchTrue(true);
        setSearch(tempSearch);

    }




    return (
        <div>


            <div className="search-bar">

                <form action="GET">
                    <input type="text" placeholder="Enter location" value={tempSearch} onChange={(e) => {
                        setTempSearch(e.target.value)
                    }} />
                    <input type="submit" value="submit" onClick={handleSearch} />
                </form>

            </div>

            {searchTrue && <App search={search} />}





        </div>
    )
}

export default SearchBar

