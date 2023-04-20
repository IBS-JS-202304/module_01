import { useParams } from "react-router-dom";
import { EmployeeFullData as data } from '../../store/EmployeeFullData';
import './EmployeeCard.css'
import { useEffect, useState } from 'react';

export const EmployeeCard = () => {
    const { employeeId } = useParams();

    const [employee, setEmploye] = useState();

    useEffect(() => {
        if (employeeId) {
            setEmploye(data.find((el) => el.id === Number(employeeId)));
        }
    }, [employeeId, setEmploye]);

    return (<div className="employee-page-wrapper">
        {employee ? (<div className="employee-info-wrapper">
            <div className='employee-bage'>
                <div className='avatar'></div>
                <div className='user-info'>
                    <div className='employee-name'>{employee.name}</div>
                    <div className='employee-position'>{employee.position}</div>
                </div>
            </div>
            <div className="info-item">
                <div className="label">Email</div>
                <div className="value">{employee.email}</div>
            </div>
            <div className="info-item">
                <div className="label">Call office</div>
                <div className="value">{employee.phone.office}</div>
            </div>
            <div className="info-item">
                <div className="label">Call mobile</div>
                <div className="value">{employee.phone.cell}</div>
            </div>
            <div className="info-item">
                <div className="label">SMS</div>
                <div className="value">{employee.phone.sms}</div>
            </div>
        </div>) : (<h1>NO EMPLOYEE DATA</h1>)}
    </div>);
}