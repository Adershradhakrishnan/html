import Landingnavbar from "./Landingnavbar/Landingnavbar";
import Landingfooter from "./Landingfooter/Landingfooter";
import Login from "../Login/Login";

import './Landing.css';

function Landingpage(){
    return(
        <>
        <Landingnavbar/>
          <div className="Login">
            <button><Link to={"/login"}>Login</Link></button>
        </div>  
        
        <Landingfooter/>
        </>
    )
}

export default Landingpage;