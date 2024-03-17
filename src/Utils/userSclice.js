import { createSlice } from "@reduxjs/toolkit";

const userSclice = createSlice({
        name : 'user',
        initialState : null,
        reducers: {
            adduser : (state, action) =>{
                    return action.payload;
            },
            removeuser : (state, action) =>{
                    return null;
            },
        },
})


export const {adduser, removeuser} = userSclice.actions;
export default userSclice.reducer;