import React,{useState} from "react";
import Input from "./Input";
import Display from "./Display";

function Parent() {
    console.log("parent component rendering...");
    const [dataToDisplay,setDataToDisplay] = useState('');


    const handleSubmit = (data) => {
        console.log("data: ",data);
        setDataToDisplay(data);
    }
    return(
        <>
        <Input onsubmit={handleSubmit}/>
        <Display data={dataToDisplay}/>
        </>
    )
}

export default Parent;