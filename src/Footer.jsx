import { Link } from "react-router-dom"

function Footer(){
    return <div className="sm:flex sm:justify-around gap-20 sm:w-full sm:pl-0 pl-10  text-white bg-black sm:h-[300px] h-[800px] pt-10 text-2xl absolute">
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
     
}

export default Footer