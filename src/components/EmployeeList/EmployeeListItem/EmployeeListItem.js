import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { formatUserName } from '../../../utils';
import './EmployeeListItem.css';

export const EmployeeListItem = ({ user }) => {
    const navigate = useNavigate();

    const onClick = useCallback(() => {
        navigate(`/employee/${user.id}`);
    }, [navigate, user]);

    return (<div className='employee-list-item' onClick={() => onClick(user)}>
        <div className='avatar'></div>
        <div className='user-info'>
            <div className='employee-name'>{formatUserName(user)}</div>
            <div className='employee-position'>{user.position}</div>
        </div>
    </div>);
}
