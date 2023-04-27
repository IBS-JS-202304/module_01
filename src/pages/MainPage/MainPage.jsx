import { PageHeader } from '../../components/PageHeader';
import { SearchBar } from '../../components/Search';
import { EmployeeGrid } from '../../components/EmployeeGrid';
import { Layout } from '../../components/common/Layout';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();

    const onAddClick = useCallback(() => {
        navigate(`/employee/add`);
    }, [navigate]);

    return (<Layout>
        <PageHeader text="Employee Directory" />
        <SearchBar />
        <EmployeeGrid />
        <button onClick={onAddClick}>Add employee</button>
    </Layout>)
}
