import { useState, useCallback, useRef } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const inputTextElement = useRef(null);

    const doSearch = useCallback(() => {
        setIsSearchDisabled(true);
        console.log("Search request is", inputTextElement.current.value);
        setTimeout(() => { setIsSearchDisabled(false) }, 2000);
    }, [setIsSearchDisabled]);

    return (<div className="search-wrapper">
        <div className="search-input-wrapper">
            <input ref={inputTextElement} className="search-input" type="text" disabled={isSearchDisabled} />
        </div>
        <div><button disabled={isSearchDisabled} onClick={doSearch}>Find this!</button></div>
    </div>
    );
}