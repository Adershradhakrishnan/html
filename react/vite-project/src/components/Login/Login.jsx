import React,{useState} from "react";

function Login() {
    let [isLoggedIn,setLoggedIn] = useState(true);

    return(
        <>
        {
            isLoggedIn?(<h1>welcome user!</h1>):(<h1>please login</h1>)
        }
        </>
    )
}

export default Login;