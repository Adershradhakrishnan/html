import React,{useContext} from "react";
import { MyContext } from "./UseContextComponent";
function ComponentB() {
    console.log("ComponentB re-rendering...");

    const contextValue = useContext(MyContext);
    return<div>Component B : {contextValue}</div>
}

export default ComponentB;