import { Link } from "react-router-dom";
import Footer from "../Footer";
import { motion } from "framer-motion"

import sawir from "../images/WhatsApp Image 2025-08-25 at 14.11.38_5c508437.jpg"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact () {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/create/contact", {
        name,
        email,
        description: desc
      });
      navigate("/ContactsPage");
    } catch (err) {
      console.log(err);
    }
  };

  return <div className="overflow-x-hidden">
<motion.div className=" relative w-full h-screen bg-cover bg-center shadow-black" 


 initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, }}

style={{ backgroundImage: `url(${sawir})` }}>

    <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        
       <div className="pt-20 absolute inset-0 bg-black/10">
         <div className=" z-0    text-white flex justify-between px-20 items-center ">
            <h1 className="sm:text-4xl text-4xl font-bold hover:text-black   text-white hover:bg-gradient-to-tr  from-white via-white to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">My <span className="text-yellow-500">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl font-extrabold hidden text-white">
                <Link to="/"><li className=" hover:text-black hover:bg-gradient-to-tr  from-white via-white to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Home</li></Link>
                <Link to="/About"><li className=" hover:text-black hover:bg-gradient-to-tr  from-white via-white to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">About</li></Link>
                <Link to="/Contact"><li className=" hover:text-black hover:bg-gradient-to-tr from-white via-white to-purple-950 rounded-lg py-1 px-8 mb-10 hover:scale-105 transition-all duration-500 cursor-pointer">Contact</li></Link>
            </ul>
        </div>

       </div>
                 <div className="text-center sm:text-6xl  text-white pt-10 absolute inset-0 top-40 bg-black/20">
                    <motion.h1 className="font-extrabold sm:text-6xl text-5xl "
                    initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>CONTACT ME
                    </motion.h1>
                    <motion.h1 className="font-bold pt-6 sm:text-2xl text-1xl"
                     initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,  }}>WE'DE LOVE TO HEAR WHAT YOU THINK </motion.h1>
                    
   
 <button className="bg-gradient-to-tr from-white via-black to-purple-950 hover:bg-purple-900  rounded-full py-1 px-3 mt-4 hover:scale-105 transition-all duration-500 cursor-pointer sm:ml-10 ml-0">
                <div className="text-black bg-gradient-to-tr  from-white via-white to-purple-950 py-2 px-6 rounded-full">
                    <p className="text-balck font-bold text-xl">Hire me</p></div> </button>                 </div>
              </motion.div>

    <div className="min-h-[96] absolute top-[470px]  bg-gradient-to-tr  from-red-950 via-purple-950 to-purple-950 text-black p-8 sm:ml-20  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
     
       <div className="sm:p-10 ">
      <h1 className="text-3xl font-bold mb-5 text-white">Contact Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input className="border-2 border-gray-600 outline-none p-2 rounded bg-black text-white" value={name}onChange={e => setName(e.target.value)}placeholder="Name"required/>
        <input className="border p-2 rounded bg-black text-white outline-none"  value={email} onChange={e => setEmail(e.target.value)}placeholder="Email"required/>
        <textarea className="border p-2 rounded bg-black text-white outline-none" value={desc} onChange={e => setDesc(e.target.value)}placeholder="Description"required/>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>


       
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Information</h2>
          <div className="space-y-4 text-white">
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-purple-400">Email</p>
              <p>sumayaupdyrizak@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-purple-400">Phone</p>
              <p>+252-613-95-52-50</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-purple-400">Location</p>
              <p>Mogadishu Somalia, Kahda, 2aad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
<div className="sm:flex sm:justify-around gap-20 sm:w-full sm:pl-0 pl-10  text-white bg-gradient-to-tr from-black via-purple-950 to-black bg-purple-900 sm:h-[300px] h-[800px] pt-10 text-2xl absolute sm:top-[1100px] top-[1300px]">
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
  
};

export default Contact;
