import { useState } from "react";
import { mock } from './employeeListMock';

export const useEmployeeList = () => {
    const [data, setData] = useState(undefined);
    const [isFetching, setIsFetching] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    const refetch = () => {
        setIsFetching(true);

        setTimeout(() => {
            if (typeof mock === 'string') {
                setIsError(true);
                setIsLoaded(true);
                setIsFetching(false);
                setData(undefined);
            } else {
                setIsError(false);
                setIsLoaded(true);
                setIsFetching(false);
                setData(mock);
            }
        }, 1500);
    }

    if (!data && !isFetching && !isLoaded) {
        refetch();
    }

    return {
        data,
        isError,
        isFetching,
        isLoaded,
        refetch,
    };
}