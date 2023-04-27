import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../store/employeeList/employeeListSlice';

export const SearchResult = () => {
    const [searchResult, setSearchResult] = useState([])
    const params = new URLSearchParams(window.location.search);
    const searchString = params.get("q");

    const { data, pending, loaded } = useSelector((state) => state.employeeList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pending && !loaded) {
            dispatch(getList());
        }
    }, [pending, loaded]);

    useEffect(() => {
        console.log({ data, searchString });

        setSearchResult(data.filter((employee) => {
            if (employee.name.toLowerCase() === searchString.toLowerCase()) {
                return employee;
            }
        }))
    }, [data, searchString, setSearchResult]);

    return <ul>{searchResult.map(({ name, id, email }) => <li key={id}>{name} ({email})</li>)}</ul>
}