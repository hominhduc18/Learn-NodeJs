import {createSlide} from '@reduxjs/toolkit';

const authSlide = createSlide({
    name: 'auth',
    initalState:{
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        register: {
            currentUser: null,
            isFetching: false, 
            error: false
        }
    },

    reduce:{
        loginStart: (state) =>{
            state.login.isFetching = true;
        },
        loginSuccess: (state) =>{
            state.login.isFetching = false;
            state.login.currentUser =  action.payload;
            state.login.error = true;
        },
        loginFailed: (state) =>{
            state.login.isFetching = false;
            state.login.error = true;
        },

        registerStart: (state) =>{
            state.register.isFetching = true;
        },
        registerSuccess: (state) =>{
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = true;
        },
        registerFailed: (state) =>{
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
    }
});

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed
} = authSlide.actions;


export default authSlide.reducer;