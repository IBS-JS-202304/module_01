import { createSlice } from '@reduxjs/toolkit';
import { mock } from './employeeListMock';

export const employeeListSlice = createSlice({
    name: 'employeeList',
    initialState: {
        data: [],
    },
    reducers: {
        getList: (state, action) => {
            state.data = mock;
        }
    },
})

// Action creators are generated for each case reducer function
export const { getList } = employeeListSlice.actions;

export default employeeListSlice.reducer;