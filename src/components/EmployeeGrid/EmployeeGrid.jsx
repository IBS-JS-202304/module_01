import { useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../store/employeeList/employeeListSlice';
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
    const data = useSelector((state) => state.employeeList.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList());
    }, []);

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