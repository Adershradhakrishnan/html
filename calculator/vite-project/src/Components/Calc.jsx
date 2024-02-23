import React,{useState} from "react";

function Calculator(){

    const [input,SetInput] = useState('');
    const [result,setResult] = useState(0);

    const handleInput = (e) =>{
        SetInput(input+e.target.value);
    }

    const handleClear = ()=>{
        SetInput('');
        setResult(0);
    }

    const handleCalculate =()=>{
        try{
            // setResult(eval(input));
            const result = eval(input);
            SetInput(result.toString());
        }catch(error){
            setResult('Error');
        }
    }

    

    return(
        <div>
            <input type="text" value={input}readOnly/>
            <br/>
            <button onClick={handleInput} value={1}>1</button>
            <button onClick={handleInput} value={2}>2</button>
            <button onClick={handleInput} value={3}>3</button>
            <button onClick={handleInput} value={"+"}>+</button>
            <br/>
            <button onClick={handleInput} value={4}>4</button>
            <button onClick={handleInput} value={5}>5</button>
            <button onClick={handleInput} value={6}>6</button>
            <button onClick={handleInput} value={"-"}>-</button>
            <br/>
            <button onClick={handleInput} value={7}>7</button>
            <button onClick={handleInput} value={8}>8</button>
            <button onClick={handleInput} value={9}>9</button>
            <button onClick={handleInput} value={"*"}>*</button>
            <br/>
            <button onClick={handleInput} value={0}>0</button>
            <button onClick={handleInput} value={"."}>.</button>
            <button onClick={handleClear}>C</button>
            <button onClick={handleInput} value={"/"}>/</button>
            <br/>
            <button onClick={handleCalculate}>=</button>
            <br/>
             {/* <p>Result:{result}</p>  */}
        </div>
    );
}

export default Calculator;