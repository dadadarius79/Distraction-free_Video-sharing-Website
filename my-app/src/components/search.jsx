import React from 'react';
import './style.css';


const Search = () => {
    return(
        <>
        <main className="search_main">
        <input type="text" name="search" id="search_bar_main"/><br/>
        <button value="Lorem" className="button_main">Search</button>
        <button value="Lorem" className="button_main">Lorem Ipsum</button>
        </main>
        </>
    )
}

export default Search;