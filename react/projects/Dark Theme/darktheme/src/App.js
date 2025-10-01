import logo from './logo.svg';
import './App.css';
import Slider from './Components/Slider.js';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './Pages/MainHeader.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import NotFound from './Pages/NotFound.js';
import Contact from './Pages/Contact.js';

function App() {
  return (
    <>

     <Routes>
      <Route path='/' element={<MainHeader/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Route>
    </Routes>
   

    <div>
   <Slider/>
    <section className='dark-theme-section'>
          <h1>This is heading</h1>
          <p>This is paragraph</p>
    </section>
    </div>

    
    </>
  );
}

export default App;
