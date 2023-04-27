import { createSlice } from '@reduxjs/toolkit';
import { mock } from './employeeListMock';

export const employeeListSlice = createSlice({
    name: 'employeeList',
    initialState: {
        data: mock,
    },
    reducers: {
        getList: (state, action) => {
            // state.data = mock;
        },
        addEmployee: (state, action) => {
            const newEmpl = action.payload;
            newEmpl.id = state.data.at(-1).id + 1
            state.data = [...state.data, newEmpl]
        }
    },
})

// Action creators are generated for each case reducer function
export const { getList, addEmployee } = employeeListSlice.actions;

export default employeeListSlice.reducer;
