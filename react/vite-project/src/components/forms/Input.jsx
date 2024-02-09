import React,{useState} from "react";

function Input({onsubmit}) {
    console.log("input component rendering...");

    const [name,setName] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log("name: ",name);
        onsubmit(name);

    }

    const handleInputChange = (e) =>{
        setName(e.target.value)
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