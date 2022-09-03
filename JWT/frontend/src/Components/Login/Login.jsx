import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Login = () => {
    const [username,setUsername] =useState(" ");
    const [password,setPassword] = useState();
    const [dispatch] = useDispatch();
    const navigate =useNavigation();
    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        //cho vao API
        loginUser(newUser, dispatch, navigate);
    }
    return ( 
        <section className="login-container">
            <div className="login-title"> Log in</div>
            <form onSubmit= {handleSubmit}>
                <label>USERNAME</label>
                <input type="text" placeholder="Enter your username" 
                onchange={(e) => setUsername(e.target.value)} />
                
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" 
                            onchange={(e) => setPassword(e.target.value)} // cach luu tru khi nhap vao
                 />
                <button type="submit"> Continue </button>
            </form>
            <div className="login-register"> Don't have an account yet? </div>
            <Link className="login-register-link" to="/register">Register one for free </Link>
        </section>
     );
}
 
export default Login;