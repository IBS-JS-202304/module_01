import { useCallback } from 'react';
import { useEmployeeList } from '../../store/employeeList/useEmployeeList';
import { EmployeeListItem } from './EmployeeListItem';

export const EmployeeList = () => {
    const { data, isFetching, isLoaded } = useEmployeeList();

    const prepareList = useCallback(() => {
        if (isFetching) {
            return <>Data loading...</>;
        } else if (!isFetching && isLoaded && data) {
            return <>{data.map((user, i) => <EmployeeListItem
                user={user}
                key={`${i}-${user.name}`}
            />)}</>
        }

        return <>No data.</>;
    }, [data, isFetching, isLoaded]);

    return (<div className="employee-list-wrapper">
        {prepareList()}
    </div>);
}