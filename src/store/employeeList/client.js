import { mock } from './employeeListMock';

export const getListQuery = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(mock) }, 2000);
});