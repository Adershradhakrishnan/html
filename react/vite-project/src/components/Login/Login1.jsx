import React,{useState} from "react";

function Login1() {
    let [isLoggedIn,setLogin] = useState(true);

    let content;

    if(isLoggedIn) {
        content = <h1>welcome user!</h1>
    }else{
        content = <h1>please login</h1>
    }

    return(
        <>
        {content}
        </>
    )
}

export default Login1;