import { useState, useCallback, useRef } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const inpurRef = useRef(null);

    const doSearch = useCallback(() => {
        setIsSearchDisabled(true);
        setTimeout(() => {
            setIsSearchDisabled(false);
            console.log(inpurRef.current);
            //alert(inpurRef.current);
        }, 2000);
    }, [setIsSearchDisabled, inpurRef]);

    return (<div className="search-wrapper">
        <div className="search-input-wrapper"><input ref={inpurRef} className="search-input" type="text" disabled={isSearchDisabled} /></div>
        <div><button disabled={isSearchDisabled} onClick={doSearch}>Find this!</button></div>
    </div>
    );
}