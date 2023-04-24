import { useParams } from "react-router-dom";
import { useEmployeeFullData } from '../../store/useEmployeeFullData';
import { EmployeeCardElement } from './EmployeeCardElement';
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
            <EmployeeCardElement label="Email" value={employee.email} onEditClick={() => { }} />
            <EmployeeCardElement label="Call office" value={employee.phone.office} onEditClick={() => { }} />
            <EmployeeCardElement label="Call mobile" value={employee.phone.cell} onEditClick={() => { }} />
            <EmployeeCardElement label="SMS" value={employee.phone.sms} onEditClick={() => { }} />
        </div>)}

        {(!employee && isFetching) && (<>Employee data loading...</>)}

        {(!employee && !isFetching && isLoaded) && (<>No employee data.</>)}

    </div>);
}