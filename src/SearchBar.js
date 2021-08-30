import React from 'react'
import App from './App';
import { useState } from 'react';
import './SearchBar.css';

function SearchBar() {

    const [search, setSearch] = useState('');
    const [tempSearch, setTempSearch] = useState('');

    const [searchTrue, setsearchTrue] = useState(false);

    const [title, setTitle] = useState(true);



    const handleSearch = (e) => {

        e.preventDefault();

        setsearchTrue(true);
        setSearch(tempSearch);

        setTitle(false);

    }




    return (
        <div>


            <div className="search-bar">

                <form action="GET">
                    <div className='input'>


                        <input className="input-field" type="text" placeholder="Enter Location" value={tempSearch} onChange={(e) => {
                            setTempSearch(e.target.value)
                        }} />

                        <i style={{ color: '#053742' }} type="submit" value="submit" onClick={handleSearch} className="fas fa-search"></i>


                    </div>

                    {title ? <div className="title-new">

                        climaX

                    </div> : ''}


                </form>






            </div>

            {searchTrue && <App search={search} />}







        </div>
    )
}

export default SearchBar

