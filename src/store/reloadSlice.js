import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
}

export const reloadSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        load:(action)=>{
            state.status = true
        },
        stopLoad:(state)=>{
            state.status = false
        }
    },
})
export const { load, stopLoad } = authSlice.actions
export default reloadSlice.reducer
