import React from 'react'
import App from './App';
import { useState } from 'react';
import './SearchBar.css';

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
                    <div className='search-bar-fields'>
                        <div className="search-field">
                            <input type="text" placeholder="Search" value={tempSearch} onChange={(e) => {
                                setTempSearch(e.target.value)
                            }} />
                        </div>
                        <input type="submit" value="submit" onClick={handleSearch} />
                    </div>
                </form>

            </div>

            {searchTrue && <App search={search} />}





        </div>
    )
}

export default SearchBar

