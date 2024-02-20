import React,{useContext} from "react";
import { MyContext } from "./UseContextComponent";

function ComponentA() {
    console.log("ComponentA re-rendering...");

    const contextValue = useContext(MyContext);

    return<div>Component A :{contextValue}</div>
}

export default ComponentA;