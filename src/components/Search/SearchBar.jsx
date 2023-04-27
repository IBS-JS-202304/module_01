import { useCallback, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './SearchBar.css';

export const SearchBar = () => {
    const inpurRef = useRef(null);
    const navigate = useNavigate();

    const params = new URLSearchParams(window.location.search);
    const searchString = params.get("q");

    const doSearch = useCallback(() => {
        navigate(`/search?q=${inpurRef?.current?.value}`);
    }, [inpurRef, navigate]);

    return (<div className="search-wrapper">
        <div className="search-input-wrapper"><input ref={inpurRef} className="search-input" type="text" defaultValue={searchString} /></div>
        <div className="search-button-wrapper"><button onClick={doSearch}>Find this!</button></div>
    </div>
    );
}