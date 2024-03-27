import React from "react";
import one from './images/one.png';
import './Imacs.css';
import imac from './images/imac.jpg';

function Product({ title,description,image}) {

    return(
        <div className="relative">
            <div className="product-info">
                <h4 className="text-5xl font-semibold my-10">{title}</h4>
                <h4 className="text-2xl font-semibold">{description}</h4>
                <h4 className="opacity-0.5">Available Starting 11.7</h4>
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        <a href="#" style={{ color: 'skyblue'}}>Learn More</a>
                        <img src={one} alt="one"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="#" style={{ color: 'skyblue'}}>Buy</a>
                        <img src={one} alt="one"/>
                    </div>
                </div>
            </div>
            <img src={image} alt={title} className="product-image" />
        </div>
    );
}

function Imacs() {
    return(
        <div className="flex">
        <Product title="IMAC" description="Mind Blowing.Head Turning" image={imac} />
        </div>
    );
}

export default Imacs;