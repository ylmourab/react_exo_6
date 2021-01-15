import React from 'react'
import './css/searchBar.css'

function SearchBar() {
    return (
        <div className="search-bar">
            <label htmlFor="">Search</label>
            <input type="text"/>
            <button>Go</button>
            
        </div>
    )
}

export default SearchBar
