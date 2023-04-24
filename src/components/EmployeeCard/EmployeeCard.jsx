import { useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useEmployeeFullData } from '../../store/useEmployeeFullData';
import { EmployeeCardElement } from './EmployeeCardElement';
import './EmployeeCard.css';
import { useState } from 'react';

export const EmployeeCard = () => {
    const [employee, setEmployee] = useState();
    const { employeeId } = useParams();
    const { data, isFetching, isLoaded, getEmployee, } = useEmployeeFullData();

    const prepOnSave = useCallback((fieldName) => (newValue) => {
        switch (fieldName) {
            case 'email':
                setEmployee((state) => { return { ...state, email: newValue } });
                break;
            case 'phone-office':
                setEmployee((state) => {
                    const newState = { ...state };
                    newState.phone.office = newValue;
                    return newState;
                });
                break;
            case 'phone-cell':
                setEmployee((state) => {
                    const newState = { ...state };
                    newState.phone.cell = newValue;
                    return newState;
                });
                break;
            case 'phone-sms':
                setEmployee((state) => {
                    const newState = { ...state };
                    newState.phone.sms = newValue;
                    return newState;
                });
                break;
        }
    }, [setEmployee]);

    useEffect(() => {
        if (!isFetching && !isLoaded && employeeId) {
            getEmployee(employeeId);
        }
    }, [isFetching, isLoaded, getEmployee, employeeId]);

    useEffect(() => {
        if (data) {
            setEmployee(data);
        }
    }, [data, setEmployee]);

    return (<div className="employee-page-wrapper">
        {employee && (<div className="employee-info-wrapper">
            <div className='employee-bage'>
                <div className='avatar'></div>
                <div className='user-info'>
                    <div className='employee-name'>{employee.name}</div>
                    <div className='employee-position'>{employee.position}</div>
                </div>
            </div>
            <EmployeeCardElement label="Email" value={employee.email} onSave={prepOnSave('email')} />
            <EmployeeCardElement label="Call office" value={employee.phone.office} onSave={prepOnSave('phone-office')} />
            <EmployeeCardElement label="Call mobile" value={employee.phone.cell} onSave={prepOnSave('phone-cell')} />
            <EmployeeCardElement label="SMS" value={employee.phone.sms} onSave={prepOnSave('phone-sms')} />
        </div>)}

        {(!employee && isFetching) && (<>Employee data loading...</>)}

        {(!employee && !isFetching && isLoaded) && (<>No employee data.</>)}

    </div>);
}