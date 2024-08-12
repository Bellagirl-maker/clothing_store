import { createSlice } from '@reduxjs/toolkit';
const clothingSlice = createSlice({
    cname: 'clothing',
    initialState: [],
    reducers: {
        addItem: (state, action)=> {
            state.push(action.payload)
        },
    },
})''