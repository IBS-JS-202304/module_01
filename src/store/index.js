import { configureStore } from '@reduxjs/toolkit';
import employeeListReducer from './employeeList/employeeListSlice';
import appReducer from './app/appSlice';

export default configureStore({
    reducer: {
        employeeList: employeeListReducer,
        app: appReducer
    },
})