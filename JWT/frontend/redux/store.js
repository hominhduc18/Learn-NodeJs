import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlide";
import userReducer from "./userReducer";
export default configureStore({
    reduce:{
        auth: authReducer,
        user: userReducer,
    },
});