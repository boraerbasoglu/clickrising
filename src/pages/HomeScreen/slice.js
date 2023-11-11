import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    noData: false,
}

export const mainSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setNoData: (state, action) => {
            state.noData = action.payload
        },
    },
})

export const { setNoData } = mainSlice.actions

export const selectNoData = (state) => state.home.noData

export default mainSlice.reducer
