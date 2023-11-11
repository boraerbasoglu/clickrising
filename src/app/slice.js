import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        stopLoading: (state) => {
            state.loading = false
        }
    },
})

export const { startLoading, stopLoading } = appSlice.actions

export const selectLoading = (state) => state.app.loading

export default appSlice.reducer
