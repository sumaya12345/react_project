import Header from "../Header"
import image from "../images/pexels-steve-29586678.jpg"
function Home(){
    return <div className="bg-blue-950 h-[2000px] w-full relative">

        <img className="shadow-3xl shadow-black h-[700px] w-full " src={image} alt="" />
        
    <Header/>



    </div>
}
export default Home