import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlide";


export const loginUser = (user,dispatch,navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/v1/auth/login",user);
        dispatch(loginSuccess(res.data));
        navigate("/")//chuyen huong

    }catch(e) {
        dispatch(loginFailed());
    }
};


export const registerUser = async (user,dispatch,navigate) => {
    dispatch(loginStart());
    try{
        await axios.post("/v1/auth/register",user);
        dispatch(registerSuccess());
        navigate("/login");//chuyen huong

    }catch(e){
        dispatch(registerFailed());
    }
};

export const getAllUsers = async (accessToken,dispatch) => {
    dispatch(getUsersStart());
    try{
        const res =await axios.get("/v1/users",{
            header: {token: `Bearer ${accessToken}`},
        });
        dispatch(getUsersSuccess(res.data));
    }catch(e) {
        dispatch(getUsersFailed());
    }
}