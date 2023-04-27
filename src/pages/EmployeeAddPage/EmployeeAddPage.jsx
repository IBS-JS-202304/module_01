import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import { EmployeeAddForm } from '../../components/EmployeeAddForm';
import { PageHeader } from '../../components/PageHeader';
import { Layout } from '../../components/common/Layout';

export const EmployeeAddPage = () => {
    const navigate = useNavigate();

    const onGoBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return <Layout>
        <PageHeader onGoBack={onGoBack} text="Add Employee" />
        <EmployeeAddForm />
    </Layout>
}