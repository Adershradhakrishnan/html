import React from "react";
import first from "./images/first.png";
import second from "./images/second.png";
import third from "./images/third.png";
function Navbar() {

    return(
        <>

          <div>
            <nav className="bg-black">
                <div className="ml-20">
                    <img src={first} alt="#"/>
                </div>
                <div className="list-none flex">
                    <li className="text-white"><a href="#">store</a></li>
                    <li className="text-white"><a href="#">Mac</a></li>
                    <li className="text-white"><a href="#">ipad</a></li>
                    <li className="text-white"><a href="#">iphone</a></li>
                    <li className="text-white"><a href="#">Watch</a></li>
                    <li className="text-white"><a href="#">Airpods</a></li>
                    <li className="text-white"><a href="#">Tv & Home</a></li>
                    <li className="text-white"><a href="#">Entertainment</a></li>
                    <li className="text-white"><a href="#">Accessories</a></li>
                    <li className="text-white"><a href="#">Support</a></li>
                    

                </div>
                <div className="ml-20">
                    <img src={second} alt="#"/>

                </div>
                <div className="ml-20">
                    <img src={third} alt="#"/>
                </div>
            </nav>
          </div>
        </>
    )
}

export default Navbar;