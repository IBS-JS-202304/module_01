import { EmployeeList as data } from '../../store/EmployeeList';
import { EmployeeListItem } from './EmployeeListItem';

export const EmployeeList = () => {
    const list = data.map((user, i) => {
        return <EmployeeListItem user={user} key={`${i}-${user.name}`} />
    });
    return (<div>{list}</div>);
}