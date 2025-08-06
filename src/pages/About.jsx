import { Link } from "react-router-dom"
// import swr3 from "../images/pexels-marek-piwnicki-3907296-8738493.jpg"
import swr4 from "../images/7866f4508301f5b75c26cb328948bbc1.jpg"


function About (){
    return  <div className="overflow-hidden">
    <div className="bg-purple-950 sm:w-full sm:h-[1400px]  h-[2500px] relative">

      {/* <img className="shadow-3xl shadow-black  w-full h-[1000px] " src={swr3} alt="" /> */}
        
     <div className="bg-purple-950 border-2 sm:w-[900px] h-14  border-gray-200 shadow-lg shadow-gray-300 rounded-[70px]  text-white sm:flex sm:justify-between py-3 px-16 sm:ml-80 mt-10 absolute top-20 font-extralight ">
            <h1 className="text-2xl font-bold text-white">My <span className="text-purple-100">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl hidden">
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
            </ul>
        </div>
    <div className="sm:flex sm:justify-around gap-20 px-20 py-20 font-extralight text-2xl absolute top-72 text-white">
        <div>
        <img className="rounded-full w-[400px] h-96 border-2 border-blue-950 shadow-lg shadow-blue-300 " src={swr4} alt="" />
            
        </div>
                <div className="pt-20 sm:pt-0">
                    <h1 className="text-5xl font-bold text-white ">About me</h1>
        <p className="pt-10"> Hello! I'm Sumaya Abdi Ali a passionate front-end developer dedicated to creating <br />
          beautiful, responsive, and user-friendly websites. My expertise lies in combining <br /> 
          modern design principles with clean, efficient code to bring ideas to life on the web <br />
          Whether it's building personal portfolios, e-commerce platforms, or business websites <br />
          I strive to deliver high-quality solutions that exceed expectations.</p>
            <button className=" hover:shadow-2xl transition duration-300 bg-transparent py-3 px-14 rounded-3xl mt-10 border-2 border-white shadow-lg shadow-black font-bold text-[20px] ">Contact</button>
                </div>

            </div>

            <div className="text-5xl text-center text-white font-bold absolute sm:top-[800px] top-[1790px] left-[600px]">
                <h1>My courses </h1>
            </div>

            <div className="sm:flex justify-center gap-10 absolute top-[900px] left-96">
  <div className="sm:flex gap-10 sm:justify-center text-white">
    <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md hover:bg-purple-700 transition duration-300">
      <p className="text-xl font-semibold">HTML</p>
    </div>
    <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md hover:bg-purple-700 transition duration-300">
      <p className="text-xl font-semibold">CSS</p>
    </div>
    <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md hover:bg-purple-700 transition duration-300">
      <p className="text-xl font-semibold">JavaScript</p>
    </div>
    <div className="bg-gray-900 rounded-lg p-6 text-center shadow-md hover:bg-purple-700 transition duration-300">
      <p className="text-xl font-semibold">React</p>
    </div>
  </div>
</div>

 <div className="sm:flex sm:justify-around gap-20 w-full sm:pl-0 pl-10  text-white bg-black sm:h-[300px] h-[900px]  pt-10 text-2xl absolute sm:top-[1100px] top-[1700px] left-23">
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
            </div>
}


export default About