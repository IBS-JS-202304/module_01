import { PageHeader } from '../../components/PageHeader';
import { SearchBar } from '../../components/SearchBar';
import { EmployeeList } from '../../components/EmployeeList';
import { EmployeeGrid } from '../../components/EmployeeGrid';

export const MainPage = () => {
    return (<>
        <PageHeader text="Employee Directory" />
        <SearchBar />
        {/* <EmployeeList /> */}
        <EmployeeGrid />
    </>)
}
