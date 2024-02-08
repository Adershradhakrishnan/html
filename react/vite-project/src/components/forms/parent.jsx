import React,{useState} from "react";
import Input from "./input";
import Display from "./display";

function Parent() {
    console.log("parent component rendering...");
    const [dataToDisplay,setDataToDisplay] = useState('');

    const handleSubmit = (data) => {
        setDataToDisplay(data);
    }
    return(
        <>
        <Input onsubmit={handleSubmit}/>
        <Display data = {dataToDisplay}/>
        </>
    )
}

export default Parent;