import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex flex-col md:flex-row md:justify-between md:items-center">
          <li className="mr-6">
            <Link to='/' className="text-white hover:text-gray-300">Portfolio</Link>
          </li>
          
          <li className="mr-6">
            <Link to='/education' className="text-white hover:text-gray-300">Education</Link>
          </li>
          <li className="mr-6">
           <Link to='/project' className="text-white hover:text-gray-300">Projects</Link> 
          </li>
          <li>
          <Link to='/contact' className="text-white hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


import React from "react";
import Navbar from "../Navbar/Navbar";
import Akshay from './Images/akshay.jpeg';

function About() {
    return (
        <div>
            <Navbar />

            <div className=" bg-gray-800 py-16 px-4 lg:px-0">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:mr-20">
                        <div className="lg:hidden mb-6 text-center">
                            <img src={Akshay} alt="Akshaypic" className="h-48 w-48 rounded-lg shadow-lg  border-4 border-white mx-auto" />
                        </div>
                        <div className="hidden lg:block">
                         <img src={Akshay} alt="Akshaypic" className="h-96 w-96 rounded-lg shadow-lg  border-4 border-white" />
                        </div>
                    </div>

                    <div className="text-white lg:w-1/2">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-4"> Hello, I am Akshay Subramanian</h1>
                        <p className="text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvi bibendum tincidunt. Sed vel urna vel nibh molestie tempor. Quisque nec tellus et nisi tempor vehicula. Nullam lobortis erat sed orci lacinia varius.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;




import React from "react";
import email from './images/email.png'
import insta from './images/insta.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'

function Contact() {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center">
            <img src={phone} alt="Phone Icon" className="w-8 h-8 mr-4" />
            <h6 className="text-lg">8606570103</h6>
          </div>
          <div className="flex items-center">
            <img src={email} alt="Email Icon" className="w-8 h-8 mr-4" />
            <h6 className="text-lg">akshaysubramanian55@gmail.com</h6>
          </div>
          <div className="flex items-center">
            <img src={linkedin} alt="LinkedIn Icon" className="w-8 h-8 mr-4" />
            <h6 className="text-lg">Your LinkedIn Profile</h6>
          </div>
          <div className="flex items-center">
            <img src={insta} alt="Instagram Icon" className="w-8 h-8 mr-4" />
            <h6 className="text-lg">Your Instagram Profile</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


import React from "react";
import education from './images/edu.jpg';

function Education() {
    return (
        <div className="text-white bg-gray-800">
            <div className="container mx-auto py-8">
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Education</h1>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold">Mern Stack Development</h2>
                            <p>Syneffo Solutions</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold">Bachelor Of Electronics & Communication</h2>
                            <p>Adi Shankara Institute Of Engineering & Technology</p>
                            <p>Kerala Technological University 2019-2023</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold">Higher Secondary Education</h2>
                            <p>Government Higher Secondary School Cheranalloor</p>
                            <p>Kerala State Board</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold">Secondary Education</h2>
                            <p>S.T Joseph's Public School Thottuva</p>
                            <p>Central Board Of Secondary Education</p>
                        </div>
                    </div>


                    <img src={education} alt="Education"className="lg:w-1/2 lg:h-auto rounded-lg shadow-lg" style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Education;



import React, { useState } from "react";
import pushup from './images/pushup.png';
import pushup2 from './images/push2.png';

function Project() {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        if (expanded === index) {
            setExpanded(null);
        } else {
            setExpanded(index);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-200 p-4 cursor-pointer" onClick={() => toggleExpand(0)}>
                    <h1 className="text-xl font-semibold">Smart Gym : Implementing Machine Learning For A More Efficient Workout Experience</h1>
                </div>
                {expanded === 0 && (
                    <div className="p-4">
                    <p className="text-gray-700 text-justify">
    The Smart Gym application utilizes a technology called MediaPipe to analyze and correct the user's posture during workout sessions. MediaPipe is an open-source framework developed by Google that offers ready-to-use ML solutions for various perception tasks, including pose estimation, hand tracking, and object detection.
    <br></br>
    By integrating MediaPipe into the Smart Gym application, users can receive real-time feedback on their posture while performing exercises. This feedback is crucial for ensuring proper form and technique, which are essential for maximizing the effectiveness of workouts and reducing the risk of injury.
    <br></br>
    The application employs advanced algorithms to accurately detect the user's body movements and alignment. It then compares these movements to predefined standards of correct posture, providing users with instant visual and/or auditory cues to help them adjust and maintain proper form.
</p>

                        <div className="flex gap-4">

                            <div>
                                <img src={pushup} alt="" className="max-w-1/2 h-auto flex" />

                            </div>
                            <div>
                                <img src={pushup2} alt="" className="max-w-1/2 h-auto flex" />

                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="border rounded-md overflow-hidden">
                <div className="bg-gray-200 p-4 cursor-pointer" onClick={() => toggleExpand(1)}>
                    <h1 className="text-xl font-semibold">Solar Tracker</h1>
                </div>
                {expanded === 1 && (
                    <div className="p-4">
                        <p className="text-gray-700 text-justify">
    The project aims to develop a solar energy system that maximizes energy production by optimizing the alignment of photovoltaic modules with the sunbeam. This optimization increases the exposure of the solar plant to sunlight, enhancing efficiency, and consequently boosting the amount of power generated by the solar plant.
    <br></br>
    Solar energy systems rely on photovoltaic modules to convert sunlight into electricity. However, the efficiency of these systems heavily depends on the angle and orientation of the modules relative to the sun's position. Suboptimal alignment can result in reduced energy production due to decreased sunlight exposure.
    <br></br>
    By implementing a solar tracker system, the project aims to dynamically adjust the position of the photovoltaic modules throughout the day to ensure they are always facing the sun. This tracking mechanism optimizes sunlight capture, maximizing energy output and improving the overall performance of the solar plant.
    <br></br>
    Additionally, advanced control algorithms and sensors may be integrated into the solar tracker system to precisely calculate the sun's position and adjust module angles accordingly. This intelligent tracking mechanism further enhances energy production efficiency and contributes to the sustainability of renewable energy solutions.
</p>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Project;
