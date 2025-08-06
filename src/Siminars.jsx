import { Link } from "react-router-dom"
import maqaaal from "./images/jamhuriya.jpg"
function Seminars() {
    return <div className="relative  bg-purple-950 w-full h-[800px]">

        <div className="bg-purple-950 border-2 sm:w-[900px] h-14  border-gray-200 shadow-lg shadow-gray-300 rounded-[70px] opacity-70   text-white flex justify-between py-3 px-16 sm:ml-80 mt-10 absolute top-10 font-extralight  ">
            <h1 className="sm:text-2xl font-bold  text-white">My <span className="text-purple-100">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl hidden">
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
            </ul>
        </div>
         <div className="py-10 absolute top-44">
            <h1 className="text-center text-white text-3xl font-bold pb-10 ml-[500px]">IT day For jamhuirya university</h1>

              <div className=" ml-[600px] text-white">
                    <div className="">
                        <img className="w-[300px] h-[310px]  " src={maqaaal} alt="" />
                        <h1  className="text-3xl font-extralight pt-6">dawasho oo kaliya</h1>
                        <p className="font-extralight pt-3">waxay utagay inan arko wxybaha ay so bandhigyaan ardayda sagega ah <br /> si aan anigna ugu dhirado si lamid ah sidas oo kale </p>
                    </div>

                
              </div>

        </div>

    </div>
}

export default Seminars