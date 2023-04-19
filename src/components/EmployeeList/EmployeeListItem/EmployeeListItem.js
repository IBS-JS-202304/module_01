import { formatUserName } from '../../../utils';
import './EmployeeListItem.css';

export const EmployeeListItem = ({ user, onClick }) => {
    const userName = formatUserName(user);
    return (<div className='employee-list-item' onClick={() => onClick(user)}>
        <div className='avatar'></div>
        <div className='user-info'>
            <div className='employee-name'>{userName}</div>
            <div className='employee-position'>{user.position}</div>
        </div>
    </div>);
}