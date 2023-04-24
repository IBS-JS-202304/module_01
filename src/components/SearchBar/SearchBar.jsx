import { useState, useCallback, useRef } from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    const [isSearchDisabled, setIsSearchDisabled] = useState(false);
    const inputTextElementRef = useRef(null);  // https://react.dev/learn/manipulating-the-dom-with-refs

    const doSearch = useCallback(() => {
        setIsSearchDisabled(true);
        console.log("Search request is", inputTextElementRef.current.value);
        setTimeout(() => { setIsSearchDisabled(false) }, 2000);
    }, [setIsSearchDisabled, inputTextElementRef]);

    return (<div className="search-wrapper">
        <div className="search-input-wrapper">
            <input ref={inputTextElementRef} className="search-input" type="text" disabled={isSearchDisabled} />
        </div>
        <div><button disabled={isSearchDisabled} onClick={doSearch}>Find this!</button></div>
    </div>
    );
}