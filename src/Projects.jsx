import { Link } from "react-router-dom"
import myp2 from "./images/item.png"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

// import myp4 from "./images/Calculator.png"
// import myp5 from "./images/products.png"
// import myp6 from "./images/hospital.png"
// import my7 from "./images/coffe.png"



function Projects(){

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
<motion.div className=" w-full h-[840px] bg-cover bg-center" 
 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, }}

style={{ backgroundImage: "url('https://images.hdqwalls.com/download/mountain-range-abstract-b9-2932x2932.jpg')" }}>

        
       <div className="pt-10">
         <div className=" z-0    text-white flex justify-between px-20 items-center ">
            <h1 className="sm:text-4xl font-bold   text-white hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">My <span className="text-yellow-500">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl font-extrabold hidden text-white">
                <Link to="/"><li className="hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Home</li></Link>
                <Link to="/About"><li className="hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">About</li></Link>
                <Link to="/Contact"><li className="hover:bg-gradient-to-tr from-red-950 via-black to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Contact</li></Link>
            </ul>
        </div>

       </div>
                  <div className="text-center text-white mb-20 sm:ml-10 mt-20">
                <h1 className="text-5xl font-bold text-white">My Projects</h1>
    
                <div className="sm:grid sm:grid-cols-2 mr-52">
            {projectData.map((item , index)=>{
          return <div key={index} className="w-80 border-2 h-96 border-gray-600 p-4 sm:mx-40 ml-10 my-20">
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
    
                <Link to="/Projects"><a href="Projects">View All</a></Link>
    
   


    </div>
              </motion.div>

       
<div className="sm:flex sm:justify-around gap-20 sm:w-full sm:pl-0 pl-10  text-white bg-gradient-to-tr from-black via-purple-950 to-black bg-purple-900 sm:h-[300px] h-[800px] pt-10 text-2xl absolute sm:top-[900px] top-[900px]">
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