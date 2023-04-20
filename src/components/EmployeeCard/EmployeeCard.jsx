import { useParams } from "react-router-dom";
import { useEmployeeFullData } from '../../store/useEmployeeFullData';
import './EmployeeCard.css';
import { useEffect } from 'react';

export const EmployeeCard = () => {
    const { employeeId } = useParams();

    const { data: employee, isFetching, isLoaded, getEmployee, } = useEmployeeFullData();

    useEffect(() => {
        if (!employee && !isFetching && !isLoaded && employeeId) {
            getEmployee(employeeId);
        }
    }, [employee, isFetching, isLoaded, getEmployee, employeeId]);

    return (<div className="employee-page-wrapper">
        {employee && (<div className="employee-info-wrapper">
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
        </div>)}

        {(!employee && isFetching) && (<>Employee data loading...</>)}

        {(!employee && !isFetching && isLoaded) && (<>No employee data.</>)}

    </div>);
}