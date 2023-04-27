import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../store/employeeList/employeeListSlice';
import { EmployeeGridRow } from './EmployeeGridRow';
import { EmployeeGridHeader } from './EmployeeGridHeader';
import { formatUserName } from '../../utils';
import { useEffect } from 'react';

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
    const { data, pending, loaded } = useSelector((state) => state.employeeList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pending && !loaded) {
            dispatch(getList());
        }
    }, [pending, loaded]);

    useEffect(() => { console.log({ data }) }, [data])

    const prepareList = useCallback(() => {
        if (data.length < 1) {
            return <>Data loading...</>;
        }
        return data.map((user, i) =>
            <EmployeeGridRow rowData={user} columns={columns} key={`${i}-${user.id}`} />
        );
    }, [data]);

    return (<div className="employee-list-wrapper">
        <table><EmployeeGridHeader columns={columns} key='table-herder' />{prepareList()}</table>
    </div>);
}