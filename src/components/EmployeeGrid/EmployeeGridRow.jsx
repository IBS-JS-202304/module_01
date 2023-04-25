import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import './EmployeeGridRow.css';

export const EmployeeGridRow = ({ rowData, columns }) => {
    const navigate = useNavigate();

    const onRowClick = useCallback(() => {
        navigate(`/employee/${rowData.id}`);
    }, [navigate, rowData]);

    const cells = columns.map(({ dataKey, renderCell }) => <td>{renderCell ? renderCell(rowData[dataKey], rowData) : rowData[dataKey]}</td>);
    return <tr onClick={onRowClick} className="table-row">{cells}</tr>;
}