import React from "react";
import first from "./images/first.png";
import second from "./images/second.png";
import third from "./images/third.png";
function Navbar() {

    return(
        

          
            <nav className="flex flex-row bg-black sticky top-0 z-50">
                <div className="flex items-center justify-between w-full mx-auto px-4">
                    <div className="flex items-center">
                    <img src={first} alt="Apple Icon" className="w-12 h-12 mr-4 md:w-10 md:h-10"/>
                
                <ul className="hidden md:flex list-none space-x-10">
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
                    </ul>

                </div>
                </div>
                {/* <div className="ml-20">
                    <img src={second} alt="#"/>

                </div>
                <div className="ml-20">
                    <img src={third} alt="#"/>
                </div> */}
            </nav>
          
        
    );
}

export default Navbar;