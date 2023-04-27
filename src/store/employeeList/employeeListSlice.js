import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEmployeeListQuery } from './client';

const extraActions = {
    getList: createAsyncThunk(`getEmployeeList`, getEmployeeListQuery)
}

const employeeListSlice = createSlice({
    name: 'employeeList',
    initialState: {
        data: [],
        pending: false,
        loaded: false,
        error: false,
    },
    reducers: {
        addEmployee: (state, { payload }) => {
            const { id } = state.data.at(-1);
            state.data.push({
                ...payload,
                id: id + 1
            });
        },
        updateEmployee: (state, { payload }) => {
            const targetIndex = state.data.findIndex(({ id }) => id === payload.id);
            if (targetIndex > -1) {
                state.data[targetIndex] = payload;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraActions.getList.pending, (state) => {
                state.data = [];
                state.pending = true;
                state.loaded = false;
                state.error = false;

            })
            .addCase(extraActions.getList.fulfilled, (state, { payload }) => {
                state.data = payload;
                state.pending = false;
                state.loaded = true;
                state.error = false;
            })
            .addCase(extraActions.getList.rejected, (state, { error }) => {
                console.error(error);
                state.data = [];
                state.pending = false;
                state.loaded = false;
                state.error = true;

            });
    }
})

// Action creators are generated for each case reducer function
export const { getList } = extraActions;
export const { addEmployee, updateEmployee } = employeeListSlice.actions;

export default employeeListSlice.reducer;