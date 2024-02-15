import React,{useState} from "react";
import './Login.css';

const Login = () =>{
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    return(
        <div className="data">
            <h2>Login</h2>
            <form className="logindata">
                <label htmlFor="name">Enter Your UserName</label>
                <input type="text" placeholder="Username" name="name" value={username} onChange={(e)=>setUserName(e.target.value)}/>
                <label htmlFor="password">Enter Your PassWord</label>
                <input type="password" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <div className="detail">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;

