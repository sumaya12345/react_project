import { Link } from "react-router-dom"
import myp2 from "./images/item.png"
import myp4 from "./images/Calculator.png"
import myp5 from "./images/products.png"
import myp6 from "./images/hospital.png"
import my7 from "./images/coffe.png"

function Projects(){
    return  <div className="bg-slate-800 w-full sm:h-[1400px] h-[4200px] relative overflow-hidden">
 <div className="bg-purple-950 border-2 sm:w-[900px] h-14  border-gray-200 shadow-lg shadow-gray-300 rounded-[70px]  text-white flex justify-between py-3 px-16 sm:ml-80 ml-8 mt-10 absolute top-20 font-extralight ">
            <h1 className="text-2xl font-bold text-white">My <span className="text-purple-100">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl hidden">
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
            </ul>
        </div>

    <div className="text-center text-white absolute top-52 sm:left-48">
                <h1 className="text-5xl font-bold text-white">My Projects</h1>
    
                <div className="sm:grid sm:grid-cols-3 justify-center ml-6 gap-10 mt-10">
                    <div className="bg-gray-900 border-2 border-white w-[360px] h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                        <img className=" w-[360px] h-[250px]" src={myp2} alt="" />
    
                        <h1 className="text-3xl font-extralight pt-10">Sale items Project</h1>
                        <p className="text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>
    
                    </div>
                    <div className="bg-gray-900 border-2 border-white w-[360px] h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                        <img className=" w-[360px] h-[250px]" src={myp4} alt="" />
                        <h1 className="text-3xl font-extralight pt-10">Calculator Project</h1>
                        <p className="text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>
    
                    </div>
                    <div className="bg-gray-900 border-2 border-white w-[360px] h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                        <img className=" w-[360px] h-[250px]" src={myp4} alt="" />
                        <h1 className="text-3xl font-extralight pt-10">Digital watch Project</h1>
                        <p className="text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>
    
                    </div>
                    <div className="bg-gray-900 border-2 border-white w-[360px] h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                        <img className=" w-[360px] h-[300px]" src={myp5} alt="" />
                        <h1 className="text-3xl font-extralight pt-10">Digital watch Project</h1>
                        <p className="text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>
    
                    </div>
                    <div className="bg-gray-900 border-2 border-white w-[360px] h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                        <img className=" w-[360px] h-[300px]" src={myp6} alt="" />
                        <h1 className="text-3xl font-extralight pt-10">Digital watch Project</h1>
                        <p className="text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>
    
                    </div>
                    <div className="bg-gray-900 border-2 border-white w-[360px] h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                        <img className=" w-[360px] h-[300px]" src={my7} alt="" />
                        <h1 className="text-3xl font-extralight pt-10">Digital watch Project</h1>
                        <p className="text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>
    
                    </div>
                </div>
    
                <Link to="/Projects"><a href="Projects">View All</a></Link>
    
            </div>
<div className="sm:flex sm:justify-around gap-20 w-full sm:pl-0 pl-10  text-white bg-black sm:h-[300px] h-[900px]  pt-10 text-2xl absolute sm:top-[1100px] top-[3300px] left-23">
        <div className=" sm:pt-0  pt-10">
            <h3 className="text-3xl pb-2 font-bold">Quick Links</h3>

            <ul className="font-extralight ">
                  <Link to="/"><li className="pt-2 hover:underline">Home</li></Link>
                <Link to="/About"><li className="pt-2 hover:underline">About</li></Link>
                <Link to="/Contact"><li className="pt-2 hover:underline">Contact</li></Link>
            </ul>
        </div>
        <div className=" sm:pt-0 pt-10">
            <h3 className="text-3xl pb-2 font-bold">Contact Info</h3>
            <p className="pt-2">123 Fashion Street</p>
            <p className="pt-2">Mogadishu, Somalia</p>
        </div>
        <div className=" sm:pt-0  pt-10">
            <h3 className="text-3xl pb-2 font-bold">Follow Us</h3>
            <div className="grid grid-cols-1">
                <a className="pt-2" href="#">FB</a>
                <a className="pt-2" href="#">IG</a>
                <a className="pt-2" href="#">TW</a>
            </div>
        </div>

        <div className="text-4xl pt-10">
            <a  href="mailto:sumayaupdyrizak@gmail.com" className="text-red-400  hover:underline text-2xl">sumayaupdyrizak@gmail.com</a>
      <p className="flex items-center text-sm mt-2"><i className="fas fa-map-marker-alt mr-2 text-2xl"></i> Mogadishu, Somalia</p>
      <a href="https://wa.me/252613955250" target="_blank" rel="noopener noreferrer" className="flex items-center  mt-2 text-2xl text-green-400"><i className="fab fa-whatsapp mr-2"></i> ‪+252-613-95-52-50‬</a>

        </div>
    </div>


                </div>
}
export default Projects