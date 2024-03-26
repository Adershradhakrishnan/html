import React from "react";
import iphone from './Contentimage/iphone.jpg';
import one from './Contentimage/one.png';
import './Content.css';

function Content() {
    return (
        <div>
            <div className="h-screen" style={{ backgroundImage: `url(${iphone})`,backgroundSize: 'cover'}}>
                <div className="absolute top-20 left-0 right-0 text-center text-white">
                    <h3 className="text-5xl font-semibold">iphone 15 pro</h3>
                    <h4 className="text-2xl font-semibold">Titanium.So strong.So light.So pro</h4>
                </div>

                <div className="absolute top-40 left-0 right-0 flex items-center justify-center">
                    <div className="mt-auto flex items-center">
                        <a href="#" style={{ color: 'skyblue'}}>Learn More</a>
                        <img src={one} alt="one" className="ml-2"/>

                    </div>
                    <div className="mt-auto flex items-center">
                        <a href="#" style={{ color: 'skyblue'}}>Buy</a>
                        <img src={one} alt="one" className="ml-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;