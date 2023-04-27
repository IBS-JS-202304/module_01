import { mock } from './employeeListMock';

export const getEmployeeListQuery = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve(mock) }, 2000);
});