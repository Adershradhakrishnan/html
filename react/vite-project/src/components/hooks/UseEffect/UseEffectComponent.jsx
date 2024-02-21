import React,{useEffect} from "react";

function UseEffectComponent(){
    console.log("component rendering...");

    useEffect(()=>{
        //code to run after the component has rendered
        console.log("component has rendered..");

    },[]);//empty dependency array means that it run once after the initial render

    return <div>My Content</div>
}

export default UseEffectComponent;