import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import pic1 from "../images/2831784b08fe699e5f689948006abfbe.jpg"
import Footer from "../Footer"
import { useEffect, useState } from "react"
import axios from "axios"

function Home(){


  const [projectData , setprojectData] = useState([])

  const handleReadData = ()=>{
    axios.get("http://localhost:9000/read/project").then((res)=>{{
      setprojectData(res.data)

    }})
  }

  useEffect(()=>{
    handleReadData()
  },[])


   const handleDelete = (id)=>{
      axios.delete(`http://localhost:9000/delete/project/${id}`).then(()=>{
        alert("success delete")
    setprojectData(prevData => prevData.filter(item => item._id !== id));

      }).catch(err => console.log(err));
    }
      
    return <div>
<motion.div className=" w-full h-screen bg-cover bg-center" 
 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, }}

style={{ backgroundImage: "url('https://images.hdqwalls.com/download/mountain-range-abstract-b9-2932x2932.jpg')" }}>

        
       <div className="pt-20">
         <div className=" z-0    text-white flex justify-between px-20 items-center ">
            <h1 className="sm:text-4xl font-bold   text-white hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">My <span className="text-yellow-500">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl font-extrabold hidden text-white">
                <Link to="/"><li className="hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Home</li></Link>
                <Link to="/About"><li className="hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">About</li></Link>
                <Link to="/Contact"><li className="hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Contact</li></Link>
            </ul>
        </div>

       </div>
                 <div className="text-center sm:text-6xl  text-white pt-10">
                    <motion.h1 className="font-bold"
                    initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>Hi, I'm <span className="text-purple-200 font-bold " 
                    >SUMAYA </span> </motion.h1>
                    <motion.h1 className="font-bold pt-6"
                     initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,  }}>Building Of My Portfolio Design </motion.h1>
                    <motion.p className="text-[20px] font-extralight pt-10"
                     initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,  }}> ipsum dolor sit amet consectetur adipisicing elit. Officia nihil cum placeat maiores dolor. <br /> Aspernatur nemo asperiores perferendis sint impedit.</motion.p>
 <button className="bg-gradient-to-tr from-red-950 via-purple-400 to-white hover:bg-purple-900  rounded-full py-1 px-1 mt-4 hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="bg-black py-2 px-6 rounded-full">
                    <p className="text-white text-xl">explore now</p></div> </button>    
 <button className="bg-gradient-to-tr from-red-950 via-purple-400 to-white hover:bg-purple-900  rounded-full py-1 px-1 mt-4 hover:scale-105 transition-all duration-500 cursor-pointer ml-10">
                <div className="bg-black py-2 px-6 rounded-full">
                    <p className="text-white text-xl">Hire me</p></div> </button>                 </div>
              </motion.div>


        
    <div className="sm:flex justify-center gap-20  text-white items-center mt-10 overflow-hidden    ">
                
                <div className=" sm:text-2xl ml-7 mt-10 sm:mt-0 sm:ml-0 animate-slideLeft overflow-hidden">
                    <h1 className="text-5xl font-bold text-purple-400 ">About me</h1>
            <p className="pt-10 text-[15px]"> Hello! I'm Sumaya Abdi Ali a passionate front-end developer <br /> dedicated  to creating
              beautiful, responsive, and user-friendly websites. <br /> My expertise lies in combining 
              modern design principles with clean, <br /> efficient code to bring ideas to life on the web
              Whether it's building  <br />personal portfolios, e-commerce platforms, or business websites
              </p>
 <button className="bg-gradient-to-tr from-red-950 via-red-950 to-white hover:bg-purple-900  rounded-full py-1 px-1 mt-4 hover:scale-105 transition-all duration-500 cursor-pointer ml-10">
                <div className="bg-black py-2 px-10 rounded-full">
                    <p className="text-white text-xl">contact</p></div> </button>     
                </div>
                <div className="animate-slideRight overflow-hidden">
                    <img className="rounded-full sm:w-[300px] sm:h-80 w-[300px] h-[250px] border-2 border-blue-950 shadow-lg shadow-blue-300 " src={pic1} alt="" />
                </div>
     
            </div>


           <div className="animate-translateYUpDown">
             <div className="font-bold mt-20 text-center ">
            <h1 className="text-5xl ">My Skills</h1>
            <p className="text-2xl font-light py-3">I'm Full-Stack Developer with expertise  <span >in modern web technologies</span></p>

            </div>


           <div className="animate-rotateYHover2">
             
            <div className="font-bold mt-20 text-center">
            <h1 className="text-5xl ">Frontend Side skills</h1>

            </div>



            <div className="sm:flex gap-10 sm:justify-center text-white mt-10 ">
    <div className="bg-transparent border-2 border-gray-600 hover:bg-gradient-to-tr from-green-950 via-yellow-950 to-white hover:bg-purple-900  rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">HTML</p>
    </div>
    <div className="bg-transparent border-2 border-gray-600 hover:bg-gradient-to-tr from-red-950 via-purple-950 to-white hover:bg-purple-900  rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">CSS</p>
    </div>
    <div className="bg-transparent border-2 border-gray-600 hover:bg-gradient-to-tr from-red-950 via-red-950 to-white hover:bg-purple-900  rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">JavaScript</p>
    </div>
    <div className="bg-transparent border-2 border-gray-600 hover:bg-gradient-to-tr from-red-950 via-red-950 to-yellow-500 hover:bg-black  rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">React</p>
    </div>
  </div>

           </div>
           <div className="animate-rotateYHover2">
             
            <div className="font-bold mt-20 text-center">
            <h1 className="text-5xl ">Backend Side skills</h1>

            </div>



            <div className="sm:flex gap-10 sm:justify-center text-white mt-10 ">
    <div className="bg-transparent border-2 border-gray-600  hover:bg-gradient-to-tr from-red-950 via-red-950 to-yellow-500 hover:bg-black rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">Node.js</p>
    </div>
    <div className="bg-transparent border-2  border-gray-600 hover:bg-gradient-to-tr from-red-950 via-red-950 to-white hover:bg-purple-900  rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">Express</p>
    </div>
    <div className="bg-transparent border-2 border-gray-600 hover:bg-gradient-to-tr from-red-950 via-purple-950 to-white hover:bg-purple-900  rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">Mongodb</p>
    </div>
    <div className="bg-transparent border-2 border-gray-600 hover:bg-gradient-to-tr from-red-950 via-purple-950 to-white hover:bg-purple-900 rounded-lg p-6 text-center shadow-lg  transition duration-300 hover:animate-rotateYHover">
      <p className="text-xl font-semibold">database</p>
    </div>
  </div>

           </div>
           </div>

 <div className="text-center text-white mt-20 relative animate-zoomOut">
            <h1 className="sm:text-5xl text-3xl font-bold text-purple-400">My Projects</h1>
            
            <div className="sm:grid sm:grid-cols-2 sm:mr-52 ">
            {projectData.map((item , index)=>{
          return <div key={index} className="w-80 border-2 h-96 border-gray-600 p-4 sm:mx-40 mx-10 my-20">
 <img className="w-72 h-60 rounded-lg" src={`http://localhost:9000/allimages/${item.pImage}`} alt={item.title} />


          <h1 className="text-4xl font-semibold py-3">{item.title}</h1>
          <p className="text-white">{item.description}</p>

          <div className="flex justify-around text-2xl">
            <i onClick={()=> handleDelete(item._id)} class="fa-solid fa-trash mt-3 text-purple-700"></i>
          </div>
        </div>
         
              })

            }
            </div>

             
  

            <Link to="/Projects"><li className=" hover:bg-gradient-to-tr from-white via-purple-950 to-black bg-red-950  rounded-full py-1 px-7 mt-4 hover:scale-105 transition-all duration-500 cursor-pointer text-1xl font-bold absolute top-[40px]  text-white border-2 border-white sm:left-[1000px] " href="Projects">View All</li></Link>

 
        </div>



<Link to="Seminars"><button className="text-2xl text-center bg-black px-8 py-4 rounded-3xl text-white mt-20 ml-[500px] hover:bg-gradient-to-tr from-gray-950 via-purple-950 to-black hover:bg-purple-900   hover:scale-105 transition-all duration-500">View Seminars</button></Link>

        <div>


              <div className="flex justify-between mx-20 text-white mt-14 ">
                 <h1 className="text-3xl font-bold pt-4">Comments of My Clients</h1>
                 {/* <button className="text-2xl text-center bg-blue-600 px-8 py-4 rounded-3xl text-white">View Seminars</button> */}
              </div>

              <div className="sm:grid sm:grid-cols-2 mx-20 my-20 text-black  hover:transform transition-transform duration-500">
                    <div className="sm:flex bg-gray-200 w-130 px-10 py-4 mb-5 rounded-2xl ">
                        <img className="w-40 h-40 rounded-full" src={pic1} alt="" />
                        <div className="mt-10 ml-6">
                             <h1 className="text-2xl font-semibold pb-3">Fatma Mohamud</h1>
                             <p className="text-2xl"> your design skill is going to be perfect</p>
                        </div>
                    </div>

                     <div className="sm:flex bg-gray-200 w-150 px-10 py-4 mb-5 rounded-2xl sm:ml-10">
                        <img className="w-40 h-40 rounded-full" src={pic1} alt="" />
                        <div className="mt-10 ml-6">
                             <h1 className="text-2xl font-semibold pb-3">hamdi hanad</h1>
                            <p className="text-2xl"> your design skill is going to be perfect</p>
                        </div>
                    </div>

                     

                     
                    
        </div>


       


     


        <Footer/>



    </div>
    </div>
}
export default Home

