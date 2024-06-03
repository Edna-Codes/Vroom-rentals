import './App.css'
import './index.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import { About, Home, Contact, Services } from "./components/pages";


function App() {


  return (
    <>
  <div className='App'>
  <Navbar />
      <Routes>
        
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>

        
      </Routes>
  </div>
    </>
  )
}

export default App
