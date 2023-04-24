export const EmployeeGridHeader = ({columns}) => {

    const preparedColumns = columns.map(({title}, i) => <th key={i}>{title}</th>);

    return <tr>{preparedColumns}</tr>;
}
