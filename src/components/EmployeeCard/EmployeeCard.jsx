import { useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { EmployeeCardElement } from './EmployeeCardElement';
import { updateEmployee } from '../../store/employeeList/employeeListSlice';
import './EmployeeCard.css';
import { useState } from 'react';

export const EmployeeCard = () => {
    const [employee, setEmployee] = useState();
    const { employeeId } = useParams();
    const { data } = useSelector((state) => state.employeeList);
    const dispatch = useDispatch();

    const prepOnSave = useCallback((fieldName) => (newValue) => {
        const newState = {};
        switch (fieldName) {
            case 'email':
                newState.email = newValue;
                break;
            case 'phone-office':
                newState.phone.office = newValue;
                break;
            case 'phone-cell':
                newState.phone.cell = newValue;
                break;
            case 'phone-sms':
                newState.phone.sms = newValue;
                break;
        }
        setEmployee((state) => {
            const upd = { ...state, ...newState };
            dispatch(updateEmployee(upd));
            return upd;
        });
    }, [setEmployee, dispatch, updateEmployee]);

    useEffect(() => {
        const employee = data.find(({ id }) => Number(employeeId) === id);
        if (employee) {
            setEmployee(employee);
        }
    }, [data, setEmployee, employeeId]);

    return (<div className="employee-page-wrapper">
        {employee && (<div className="employee-info-wrapper">
            <div className='employee-bage'>
                <div className='avatar'></div>
                <div className='user-info'>
                    <div className='employee-name'>{employee?.name}</div>
                    <div className='employee-position'>{employee?.position}</div>
                </div>
            </div>
            <EmployeeCardElement label="Email" value={employee?.email} onSave={prepOnSave('email')} />
            <EmployeeCardElement label="Call office" value={employee?.phone?.office} onSave={prepOnSave('phone-office')} />
            <EmployeeCardElement label="Call mobile" value={employee?.phone?.cell} onSave={prepOnSave('phone-cell')} />
            <EmployeeCardElement label="SMS" value={employee?.phone?.sms} onSave={prepOnSave('phone-sms')} />
        </div>)}
    </div>);
}