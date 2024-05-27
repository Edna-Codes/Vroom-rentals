import './App.css'
import './index.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Home from './components/pages/Home';

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
