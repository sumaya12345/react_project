import { Link } from "react-router-dom"
import swr3 from "../images/7866f4508301f5b75c26cb328948bbc1.jpg"
import { motion } from "framer-motion"
import Footer from "../Footer"


function About (){
    return  <div>
<motion.div className=" w-full h-screen bg-cover bg-center" 
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

            
            <div className="sm:flex justify-center gap-20  text-white items-center mt-10 overflow-hidden    ">
                        
                        <div className=" sm:text-2xl ml-7 mt-10 sm:mt-0 sm:ml-0 animate-slideLeft overflow-hidden">
                            <h1 className="text-5xl  font-bold  sm:text-purple-400 ">About me</h1>
                    <p className="pt-10 text-[15px]"> Hello! I'm Sumaya Abdi Ali a passionate front-end developer <br /> dedicated  to creating
                      beautiful, responsive, and user-friendly websites. <br /> My expertise lies in combining 
                      modern design principles with clean, <br /> efficient code to bring ideas to life on the web
                      Whether it's building  <br />personal portfolios, e-commerce platforms, or business websites
                      </p>
         <button className="bg-gradient-to-tr from-red-950 via-red-950 to-white hover:bg-purple-900   rounded-full py-1 px-1 sm:mt-4 hover:scale-105 transition-all duration-500 cursor-pointer ml-10">
                        <div className="bg-black py-2 px-10 rounded-full">
                            <p className="text-white text-xl">contact</p></div> </button>     
                        </div>
                        <div className="animate-slideRight overflow-hidden sm:mt-0 mt-10 mb-20 s:mb-0">
                            <img className="rounded-full sm:w-[300px] sm:h-80 w-[300px] h-[250px] border-2 border-blue-950 shadow-lg shadow-blue-300 " src={swr3} alt="" />
                        </div>
             
                    </div>

       </div>
                 
              </motion.div>

            <Footer/>

            </div>
}


export default About