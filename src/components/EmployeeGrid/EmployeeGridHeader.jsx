export const EmployeeGridHeader = ({columns}) => {

    const preparedColumns = columns.map(({title}) => <th>{title}</th>);

    return <tr>{preparedColumns}</tr>;
}
