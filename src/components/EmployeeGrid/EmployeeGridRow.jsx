export const EmployeeGridRow = ({ rowData, columns }) => {
    const cells = columns.map(({ dataKey, renderCell }) => <td>{renderCell ? renderCell(rowData[dataKey], rowData) : rowData[dataKey]}</td>);
    return <tr className="table-row">{cells}</tr>;
}
