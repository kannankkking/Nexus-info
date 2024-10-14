import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Home';
import DigitalMarketing from './DigitalMarketing';
import Website_development from './Website_development';
import Contact from './Contact';
import About from './About';
// import Contact from './Contact';
// import DigitalMarketing from './DigitalMarketing';
// import Website_development from './Website_development';
// import About from './About';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/digital" element={<DigitalMarketing/>}/>
      <Route path="/Website_development" element={<Website_development/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>

        </Routes>

        </BrowserRouter>
  )
}
export  default App;