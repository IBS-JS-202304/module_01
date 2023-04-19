import { EmployeeList as data } from '../../store/EmployeeList';
import { EmployeeListItem } from './EmployeeListItem';
import { Header } from './Header';
import { SearchBar } from './SearchBar';

export const EmployeeList = () => {
    return (<>
        <Header />
        <SearchBar />
        <div className="employee-list-wrapper">{data.map((user, i) => <EmployeeListItem
            user={user}
            key={`${i}-${user.name}`}
        />
        )}</div>
    </>);
}