import { EmployeeList as data } from '../../store/EmployeeList';
import { EmployeeListItem } from './EmployeeListItem';

export const EmployeeList = () => {
    return (<div className="employee-list-wrapper">{data.map((user, i) => <EmployeeListItem
        user={user}
        key={`${i}-${user.name}`}
    />)}</div>);
}