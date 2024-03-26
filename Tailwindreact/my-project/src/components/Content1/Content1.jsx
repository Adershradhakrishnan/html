import './Content1.css';
import large from './Content1image/large.jpg';

import one from './Content1image/one.png';

function Content1() {
    return(

        <div>
            <div className="h-screen relative" style={{ backgroundImage: `url(${large})`,backgroundSize: 'cover'}}>
                <div className="absolute top-400 left-0 right-0 text-center text-black">
                    <h3 className="text-5xl font-semibold">iphone 15</h3>
                    <h3 className="text-2xl font-semibold">New camera.New Design.Newphoria</h3>
                </div>

                <div className="absolute top-600 left-0 right-0 flex items-center justify-center">
                    <div className="flex items-center my-20">
                        <a href="#" style={{ color: 'skyblue'}}>Learn More</a>
                        <img src={one} alt="one" className="ml-2"/>
                    </div>

                    <div className="flex items-center my-20">
                        <a href="#" style={{ color: 'skyblue'}}>Buy</a>
                        <img src={one} alt="one" className="ml-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content1;