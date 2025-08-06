import { Link } from "react-router-dom";
import sawir from "../images/pexels-steve-30018099.jpg"

function Contact () {
  return <div className="bg-purple-950 sm:w-full sm:h-[1200px] h-[2000px] relative overflow-hidden">
          <img className="shadow-3xl shadow-black  w-full h-[1200px] " src={sawir} alt="" />
    
  
     <div className="bg-purple-950 border-2 sm:w-[900px] h-14  border-gray-200 shadow-lg shadow-gray-300 rounded-[70px]  text-white flex justify-between py-3 px-16 sm:ml-80 mt-10 absolute top-20 font-extralight ">
            <h1 className="text-2xl font-bold text-white">My <span className="text-purple-100">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl hidden">
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
            </ul>
        </div>
    <div className="min-h-[96] bg-gradient-to-br from-purple-800 to-black text-white p-8 absolute top-80 sm:left-36 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
     
        <div>
          <h2 className="text-3xl font-bold mb-4">Send Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-3 rounded bg-gray-800 text-white w-full" />
              <input type="text" placeholder="Last Name" className="p-3 rounded bg-gray-800 text-white w-full" />
            </div>
            <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white w-full" />
            <input type="text" placeholder="Subject" className="p-3 rounded bg-gray-800 text-white w-full" />
            <textarea placeholder="Tell me about your project..." rows="4" className="p-3 rounded bg-gray-800 text-white w-full"></textarea>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-semibold">
              Send
            </button>
          </form>
        </div>

       
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
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
    
 <div className="sm:flex sm:justify-around gap-20 w-full sm:pl-0 pl-10  text-white bg-black sm:h-[300px] h-[1200px]  pt-10 text-2xl absolute sm:top-[900px] top-[1200px] left-23">
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
