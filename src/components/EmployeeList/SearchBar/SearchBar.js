import { useState } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    const [isLabel, setIsLabel] = useState(false);

    setTimeout(() => { setIsLabel(true) }, 2000);

    return (<div className="search-wrapper">
        {isLabel ? (<div>Search string:</div>):(<>...</>)}
        <div className="search-input-wrapper"><input className="search-input" type="text" /></div>
        <div><button>Find this!</button></div>
    </div>
    );
}