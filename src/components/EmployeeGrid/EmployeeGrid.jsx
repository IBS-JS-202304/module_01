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
        dataKey: 'action',
        renderCell: (value, rowData) => {
            return <Link to={`/employee/${rowData.id}`}>Details</Link>
        }
    }
];

const tableMessage = (text) => {
    return <tbody><tr><td colSpan={99}>{text}</td></tr></tbody>;
}

export const EmployeeGrid = () => {
    const { data, isFetching, isLoaded } = useEmployeeList();

    const prepareList = useCallback(() => {
        if (isFetching) {
            return tableMessage("Data loading...");
        } else if (!isFetching && isLoaded && data) {
            return <tbody>{data.map((user, i) =>
                <EmployeeGridRow rowData={user} columns={columns} key={`${i}-${user.id}`} />
            )}</tbody>
        }

        return tableMessage("No data.");
    }, [data, isFetching, isLoaded]);

    return (<div className="employee-list-wrapper">
        <table className='employee-grid-table'><EmployeeGridHeader columns={columns} key='table-herder' />{prepareList()}</table>
    </div>);
}