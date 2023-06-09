import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useCallback, createRef } from 'react';
import { addEmployee } from '../../store/employeeList/employeeListSlice';
import { EmployeeAddFormEl } from './EmployeeAddFormEl';
import './EmployeeAddForm.css';
import React from "react";

const getValueFromRef = (ref) => {
    if (!ref || !ref.current) {
        return null;
    }
    return ref.current.value;
}

export const EmployeeAddForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const nameRef = createRef();
    const positionRef = createRef();
    const emailRef = createRef();
    const officePhoneRef = createRef();
    const cellPhoneRef = createRef();
    const smsPhoneRef = createRef();

    const onGoBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    const onAddClick = useCallback(() => {
        const newEmployee = {
            name: getValueFromRef(nameRef),
            avatar: '',
            position: getValueFromRef(positionRef),
            email: getValueFromRef(emailRef),
            phone: {
                office: getValueFromRef(officePhoneRef),
                cell: getValueFromRef(cellPhoneRef),
                sms: getValueFromRef(smsPhoneRef),
            },
        }
        dispatch(addEmployee(newEmployee));
        navigate('/');

    }, [nameRef, positionRef, emailRef, officePhoneRef, cellPhoneRef, smsPhoneRef, dispatch, addEmployee]);

    return (<div className="form-wrapper">
        <EmployeeAddFormEl label="Name" ref={nameRef} />
        <EmployeeAddFormEl label="Position" ref={positionRef} />
        <EmployeeAddFormEl label="Email" ref={emailRef} />
        <EmployeeAddFormEl label="Call office" ref={officePhoneRef} />
        <EmployeeAddFormEl label="Call mobile" ref={cellPhoneRef} />
        <EmployeeAddFormEl label="SMS" ref={smsPhoneRef} />
        <div className="form-buttons"><button onClick={onAddClick}>Add</button><button onClick={onGoBack}>Cancel</button></div>

    </div>)
}