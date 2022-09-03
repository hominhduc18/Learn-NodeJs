import {createSlide} from "@reduxjs/toolkit";



const userSlide = createSlide({
    name: "user",
    initialState: {
        user: {
            allUsers:null,
            isFetching:false,
            error:false
        },
    },
    reduce:{
        getUsersStart: (state) => {
            state.user.isFetching = true; 
        },
        getUsersSuccess: (state) => {
            state.uses.isFetching = false;
            state.user.allUsers = action.payload;
        },
        getUsersFailed: (state) => {
            state.users.isFetching = false;
            state.users.error = true;
        }
    }
})


export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed
} = userSlide.action;

export default userSlide.reduce;