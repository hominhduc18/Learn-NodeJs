import "./register.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { registerUser } from "../../../redux/apiRequest";
const Register = () => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) =>{
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,// ten phai giong trong bode backend
            username: username
        };
        registerUser(newUser,dispatch,navigate);


    }
    return ( 
        <section className="register-container">
              <div className="register-title"> Sign up </div>
            <form onSubmit={handleRegister}>

                <label>EMAIL</label>
                <input type="text" placeholder="Enter your email" />
                onchange={(e) =>setEmail(e.target.value)}

                <label>USERNAME</label>
                <input type="text" placeholder="Enter your username" />
                onchange={(e) =>setUsername(e.target.value)}

                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" />
                <button type="submit"> Create account </button>
                onchange={(e) =>setPassword(e.target.value)}


            </form>
        </section>
        
     );
}
 
export default Register;