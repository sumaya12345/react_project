import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./Projects"
import Seminars from "./Siminars"
import ContactsPage from "./pages/contactstore"



function App(){
  return <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Projects" element={<Projects/>}/>
  <Route path="/Seminars" element={<Seminars/>}/>
  <Route path="/ContactsPage" element={<ContactsPage/>}/>
  </Routes>
}

export default App