import { Link } from "react-router-dom"
import pic1 from "./images/7866f4508301f5b75c26cb328948bbc1.jpg"
import myp2 from "./images/item.png"
import myp4 from "./images/Calculator.png"
import myp3 from "./images/watch.png"
import myoo from "./images/Maan.jpg"

function Header(){
    return  <>
    <div className="overflow-hidden ">

        <div className="bg-purple-950 border-2 sm:w-[900px] h-14  border-gray-200 shadow-lg shadow-gray-300 rounded-[70px] opacity-70   text-white flex justify-between py-3 px-16 sm:ml-80 mt-10 absolute top-20 font-extralight  ">
            <h1 className="sm:text-2xl font-bold  text-white">My <span className="text-purple-100">PorTfolio</span></h1>
            <ul className="sm:flex gap-10 text-2xl hidden">
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Contact"><li>Contact</li></Link>
            </ul>
        </div>
         <div className="text-center sm:text-6xl absolute top-72 sm:left-72 text-white">
            <h1 className="font-bold">Hi, I'm <span className="text-purple-200 font-bold ">SUMAYA ABDI.</span></h1>
            <h1 className="font-bold pt-6">Building Of My Portfolio Design </h1>
            <p className="text-[20px] font-extralight pt-10"> ipsum dolor sit amet consectetur adipisicing elit. Officia nihil cum placeat maiores dolor. <br /> Aspernatur nemo asperiores perferendis sint impedit.</p>
            <button className="bg-purple-900 hover:shadow-2xl transition duration-300 py-3 px-14 rounded-3xl mt-20 border-2  border-black shadow-lg shadow-gray-600 font-bold text-[20px] ">Hire me</button>
            <button className=" hover:shadow-2xl transition duration-300 bg-transparent sm:ml-6 py-3 px-14 rounded-3xl sm:mt-10 border-2 border-white shadow-lg shadow-black font-bold text-[20px] ">Hire me</button>
        </div>

        <div className="sm:flex justify-center gap-20  text-white items-center mt-10   ">
            <div>
                <img className="rounded-full sm:w-[400px] sm:h-96 w-[300px] h-[250px] border-2 border-blue-950 shadow-lg shadow-blue-300 " src={pic1} alt="" />
            </div>
            <div className="font-extralight sm:text-2xl ml-7 mt-10 sm:mt-0 sm:ml-0">
                <h1 className="text-5xl font-bold text-purple-400 ">About me</h1>
        <p className="pt-10"> Hello! I'm Sumaya Abdi Ali a passionate front-end developer dedicated to creating <br />
          beautiful, responsive, and user-friendly websites. My expertise lies in combining <br /> 
          modern design principles with clean, efficient code to bring ideas to life on the web <br />
          Whether it's building personal portfolios, e-commerce platforms, or business websites <br />
          I strive to deliver high-quality solutions that exceed expectations.</p>
            <button className=" hover:shadow-2xl transition duration-300 bg-transparent py-3 px-14 rounded-3xl mt-10 border-2 border-white shadow-lg shadow-black font-bold text-[20px] ">Contact</button>

            </div>
 
        </div>

        <div className="text-center text-white mt-20 relative">
            <h1 className="sm:text-5xl text-3xl font-bold text-purple-400">My Projects</h1>

            <div className="sm:flex justify-center grid grid-cols-1 ml-10 sm:ml-0 gap-10 mt-10">
                <div className="bg-gray-900 border-2 border-white sm:w-[360px] w-[260px]  sm:h-[500px] h-[260px] shadow-lg shadow-gray-300 rounded-lg">
                    <img className=" sm:w-[360px] sm:h-[250px]" src={myp2} alt="" />

                    <h1 className="sm:text-3xl font-extralight pt-10">Sale items Project</h1>
                    <p className="sm:text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>

                </div>
                <div className="bg-gray-900 border-2 border-white h-[300px] w-[260px] sm:w-[360px] sm:h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                    <img className=" sm:w-[360px] sm:h-[250px] h-[190px] w-[270px] " src={myp4} alt="" />
                    <h1 className="sm:text-3xl font-extralight sm:pt-10 pt-2">Calculator Project</h1>
                    <p className="sm:text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>

                </div>
                <div className="bg-gray-900 border-2 border-white h-[260px] w-[260px] sm:w-[360px] sm:h-[500px] shadow-lg shadow-gray-300 rounded-lg">
                    <img className=" sm:w-[360px] sm:h-[250px]   " src={myp3} alt="" />
                    <h1 className="sm:text-3xl font-extralight pt-10">Digital watch Project</h1>
                    <p className="sm:text-2xl font-bold pt-4">Lorem ipsum dolor sit amet adipisicing elit.</p>

                </div>
            </div>

            <Link to="/Projects"><li className="text-2xl font-bold absolute top-72 bg-black py-2 px-8 rounded-3xl shadow-lg shadow-gray-600 border-2 border-white left-[1200px] " href="Projects">View All</li></Link>

 
        </div>


<Link to="Seminars"><button className="text-2xl text-center bg-blue-600 px-8 py-4 rounded-3xl text-white mt-20 ml-[500px]">View Seminars</button></Link>

        <div>


              <div className="flex justify-between mx-20 text-black mt-14 ">
                 <h1 className="text-3xl font-bold pt-4">Comments of My Clients</h1>
                 {/* <button className="text-2xl text-center bg-blue-600 px-8 py-4 rounded-3xl text-white">View Seminars</button> */}
              </div>

              <div className="sm:grid sm:grid-cols-2 mx-20 my-20">
                    <div className="sm:flex bg-gray-200 w-150 px-10 py-4 mb-5 rounded-2xl">
                        <img className="w-40 h-40 rounded-full" src={pic1} alt="" />
                        <div className="mt-10 ml-6">
                             <h1 className="text-2xl font-semibold pb-3">Fatma Mohamud</h1>
                             <p className="text-2xl"> your design skill is going to be perfect</p>
                        </div>
                    </div>

                     <div className="sm:flex bg-gray-200 w-150 px-10 py-4 mb-5 rounded-2xl">
                        <img className="w-40 h-40 rounded-full" src={myoo} alt="" />
                        <div className="mt-10 ml-6">
                             <h1 className="text-2xl font-semibold pb-3">Mohamed hanad</h1>
                            <p className="text-2xl"> your design skill is going to be perfect</p>
                        </div>
                    </div>

                     

                     
                    
              </div>
        </div>

        

    
    </div>

     <div className="sm:flex sm:justify-around gap-20 sm:w-full sm:pl-0 pl-10  text-white bg-black sm:h-[300px] h-[800px] pt-10 text-2xl absolute sm:top-[2390px] top-[390px] left-23">
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
     
    </>
}

export default Header