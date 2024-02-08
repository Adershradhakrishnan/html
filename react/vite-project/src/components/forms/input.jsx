import React,{useState} from "react";

function Input({onsubmit}) {
    console.log("input component rendering...");

    const [name,setName] = useState('');

    const onSubmit = (e)=>{
        e.preventDafault();
        onsubmit(name);
    }

    const handleInputChange = (e) =>{
        setName(e.taret.value)
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input type="text" name="name" id="name" placeholder="enter your name" onChange={handleInputChange}/>
            <input type="submit"/>

            
        </form>
        </>
    )

    
}
export default Input;