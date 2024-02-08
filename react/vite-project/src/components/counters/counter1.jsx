import React, { useState } from "react";

function counter1(props) {
    const [count,setCount] = useState(props.initialValue);

    const handleClick = ()=>{
        setCount(count + 1);
    }
    return(
        <>
        <p>Count : {count}</p>
        <button onClick = {handleClick}>Increment</button>
        </>
    )
       
    
}
export default counter1;