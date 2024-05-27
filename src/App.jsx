import './App.css'
import './index.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import { About, Home, Contact, Services } from "./components/pages";


function App() {


  return (
    <>
    <Navbar />
      <Routes>
        
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Services' element={<Services />}/>

        
      </Routes>
    </>
  )
}

export default App
