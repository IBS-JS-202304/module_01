import { useCallback } from 'react';
import { useEmployeeList } from '../../store/useEmployeeList';
import { EmployeeGridRow } from './EmployeeGridRow';
import { EmployeeGridHeader } from './EmployeeGridHeader';
import { formatUserName } from '../../utils';
import './EmployeeGrid.css';
import { Link } from 'react-router-dom';

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
    },
    {
        title: 'Employee info',
        dataKey: 'id',
        renderCell: (value, rowData) => {
            return <Link to={`/employee/${value}`}>Details</Link>
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
                <EmployeeGridRow rowData={user} columns={columns} key={`${i}-${user.id}`} />
            )
        }

        return <>No data.</>;
    }, [data, isFetching, isLoaded]);

    return (<div className="employee-list-wrapper">
        <table style={{"border-spacing": 0}}><EmployeeGridHeader columns={columns} key='table-herder' />{prepareList()}</table>
    </div>);
}