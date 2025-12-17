import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"lang",
    initialState:{
        currentLanguage:"en"
    },
    reducers:{
        changeLanguage:(state,action) => {
            state.currentLanguage = action.payload
        }
    }
})

export const {changeLanguage} = langSlice.actions

export default langSlice.reducer