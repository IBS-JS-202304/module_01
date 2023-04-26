import { PageHeader } from '../../components/PageHeader';
import { SearchBar } from '../../components/SearchBar';
import { EmployeeGrid } from '../../components/EmployeeGrid';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();

    const onAddClick = useCallback(() => {
        navigate(`/employee/add`);
    }, [navigate]);

    return (<>
        <PageHeader text="Employee Directory" />
        <SearchBar />
        <EmployeeGrid />
        <button onClick={onAddClick}>Add employee</button>
    </>)
}
