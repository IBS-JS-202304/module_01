import { useState } from 'react';

const mock = [
    {
        id: 1,
        name: "John",
        avatar: '',
        position: 'SEO',
        email: 'John@company.name',
        phone: {
            office: '555-23-45',
            cell: '72365488',
            sms: '4050'
        },
    },
    {
        id: 2,
        name: "Bob",
        avatar: '',
        position: 'Manager',
        email: 'bob@company.name',
        phone: {
            office: '555-66-77',
            cell: '72365455',
            sms: '4060'
        },
    },
];
export const useEmployeeFullData = () => {
    const [data, setData] = useState(undefined);
    const [isFetching, setIsFetching] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    const getEmployee = (employeeId) => {
        setIsFetching(true);

        const employee = mock.find((el) => el.id === Number(employeeId));

        setTimeout(() => {
            if (!employee) {
                setIsError(true);
                setIsLoaded(true);
                setIsFetching(false);
                setData(undefined);
            } else {
                setIsError(false);
                setIsLoaded(true);
                setIsFetching(false);
                setData(employee);
            }
        }, 1500);
    }

    return {
        data,
        isError,
        isFetching,
        isLoaded,
        getEmployee,
    };
}