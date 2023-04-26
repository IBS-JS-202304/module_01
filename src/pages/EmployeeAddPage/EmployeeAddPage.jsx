import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import { EmployeeAddForm } from '../../components/EmployeeAddForm';
import { PageHeader } from '../../components/PageHeader';

export const EmployeeAddPage = () => {
    const navigate = useNavigate();

    const onGoBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return <>
        <PageHeader onGoBack={onGoBack} text="Add Employee" />
        <EmployeeAddForm />
    </>
}