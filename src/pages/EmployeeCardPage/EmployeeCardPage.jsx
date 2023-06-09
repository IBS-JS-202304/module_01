import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { EmployeeCard } from '../../components/EmployeeCard';
import { Layout } from '../../components/common/Layout';

export const EmployeeCardPage = () => {
    const navigate = useNavigate();

    const onGoBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (<Layout>
        <PageHeader onGoBack={onGoBack} text="Employee" />
        <EmployeeCard />
    </Layout>)
}