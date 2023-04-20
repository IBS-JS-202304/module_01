import { useState, useCallback } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);

    const doSearch = useCallback(() => {
        setIsSearchDisabled(true);
        setTimeout(() => { setIsSearchDisabled(false) }, 2000);
    }, [setIsSearchDisabled]);

    return (<div className="search-wrapper">
        <div className="search-input-wrapper"><input className="search-input" type="text" disabled={isSearchDisabled} /></div>
        <div><button disabled={isSearchDisabled} onClick={doSearch}>Find this!</button></div>
    </div>
    );
}