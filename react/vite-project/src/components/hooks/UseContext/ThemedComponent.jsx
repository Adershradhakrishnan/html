import React,{useContext} from "react";

import { ThemeContext } from "./UseContextComponent1";

function ThemedComponent(){
    const {theme} = useContext(ThemeContext);

    return (theme === 'white')? (<div style={{background : theme}}>Themed Component</div>):(<div style={{background: theme,color: "white"}}>Themed Component</div>)

}

export default ThemedComponent;