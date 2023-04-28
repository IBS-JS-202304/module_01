import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        data: {
            version: '1.4',
            theme: 'light'
        },
        pending: false,
        loaded: false,
        error: false,
    },
    reducers: {
        setTheme: (state, { payload }) => {
            state.data.theme = payload;
        }
    },
})

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;