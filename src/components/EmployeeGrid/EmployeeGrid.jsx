import { useCallback } from 'react';
import { useEmployeeList } from '../../store/useEmployeeList';
import { EmployeeGridRow } from './EmployeeGridRow';
import { EmployeeGridHeader } from './EmployeeGridHeader';
import { formatUserName } from '../../utils';

const columns = [
    {
        title: 'ID',
        dataKey: 'id'
    },  
    {
        title: 'Email',
        dataKey: 'email'
    },
    {
        title: 'Employee Name',
        dataKey: 'name',
        renderCell: (value, rowData) => {
            return formatUserName(rowData);
        }
    }
];

export const EmployeeGrid = () => {
    const { data, isFetching, isLoaded } = useEmployeeList();

    const prepareList = useCallback(() => {
        if (isFetching) {
            return <>Data loading...</>;
        } else if (!isFetching && isLoaded && data) {
            return data.map((user, i) =>
                <EmployeeGridRow rowData={user} columns={columns} />
            )
        }

        return <>No data.</>;
    }, [data, isFetching, isLoaded]);

    return (<div className="employee-list-wrapper">
        <table><EmployeeGridHeader columns={columns}/>{prepareList()}</table>
    </div>);
}