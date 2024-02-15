import React,{useState} from "react";

const MyPureComponent = React.memo(({message})=>{
    console.log("Re rendering...");
    return<div>{message}</div>
});

function MyPureComponent1(){
    const [count,setCount] = useState(1);

    return(
        <>
        <MyPureComponent message={"hai,i am a pure componeent"}/>
        <p>count: {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </>
    )
}

export default MyPureComponent1;