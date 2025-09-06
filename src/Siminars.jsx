import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import maqaal from "./images/jamhuriya.jpg"


function About (){
    return  <div>
<motion.div className=" w-full h-[800px] bg-cover bg-center" 
 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, }}

style={{ backgroundImage: "url('https://images.pexels.com/photos/8738493/pexels-photo-8738493.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200')" }}>

        
       <div className="pt-20">
         <div className=" z-0    text-white flex justify-between px-20 items-center ">
            <h1 className="sm:text-4xl text-4xl font-bold   text-white hover:bg-gradient-to-tr from-red-200 via-black to-purple-200 rounded-lg py-1 px-8 sm:mb-10 mb-0 hover:scale-105 transition-all duration-500 cursor-pointer">My <span className="text-yellow-500">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl font-extrabold hidden text-white">
                <Link to="/"><li className="hover:bg-gradient-to-tr from-red-500 via-black to-purple-500 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Home</li></Link>
                <Link to="/About"><li className="hover:bg-gradient-to-tr from-red-500 via-black to-purple-500 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">About</li></Link>
                <Link to="/Contact"><li className="hover:bg-gradient-to-tr from-red-500 via-black to-purple-500 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Contact</li></Link>
            </ul>
        </div>

             <div className="py-10 absolute top-44">
            <h1 className="text-center text-white text-3xl font-bold pb-10 ml-[400px]">IT day For jamhuirya university</h1>

              <div className=" ml-[400px] text-white">
                    <div className="">
                        <img className="w-[300px] h-[310px]  " src={maqaal} alt="" />
                        <h1  className="text-3xl font-extralight pt-6">dawasho oo kaliya</h1>
                        <p className="font-extralight pt-3">waxay utagay inan arko wxybaha ay so bandhigyaan ardayda sagega ah <br /> si aan anigna ugu dhirado si lamid ah sidas oo kale </p>
                    </div>

                
              </div>

        </div>

       </div>
                 
              </motion.div>


            </div>
}


export default About


