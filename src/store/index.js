import { configureStore } from '@reduxjs/toolkit';
import employeeListReducer from './employeeList/employeeListSlice';

export default configureStore({
    reducer: {
        employeeList: employeeListReducer
    },
})