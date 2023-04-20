import { PageHeader } from '../../components/PageHeader';
import { SearchBar } from '../../components/SearchBar';
import { EmployeeList } from '../../components/EmployeeList';

export const MainPage = () => {
    return (<>
        <PageHeader text="Employee Directory" />
        <SearchBar />
        <EmployeeList />
    </>)
}