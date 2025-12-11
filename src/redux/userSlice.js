import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action) =>{
            // console.log(state,action,"add user");
            // console.log(action.payload);
            return action.payload
         },
        removeUser:(state,action) =>{
            // console.log(state,action,"remove user");
            return null
        }
    }
})

export const {addUser,removeUser} = userSlice.actions

export default userSlice.reducer