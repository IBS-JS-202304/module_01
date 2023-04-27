import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { SearchBar, SearchResult } from '../../components/Search';
import { Layout } from '../../components/common/Layout';

export const SearchPage = () => {
    const navigate = useNavigate();

    const onGoBack = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (<Layout>
        <PageHeader text="Search result"  onGoBack={onGoBack} />
        <SearchBar />
        <SearchResult />
    </Layout>)
}