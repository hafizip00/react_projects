import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name : "user",
    initialState : {value : {name : '' , age : 11}},
    reducer : {
        login : (state , action) => {
            state.value = action.payload;
        }
    }

 }
);

export default UserSlice