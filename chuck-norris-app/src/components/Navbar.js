import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

import Jokes from './apiFetch'
import Home from './Home'
import Footer from './Footer.js'
import Contact from './Kontakt.js'
import About from './About.js'

import './Navbar.css'

function Navbar (){ 
    return(
        <Router>    
          <nav className="navbar">
        <ul className="nav-links">
                <li  className='li'>
                  <Link className='a' to="/"> Home </Link>
                </li>
                <li className='li'>
                  <Link  className='a' to="/Jokes"> Jokes </Link>
                </li>
                <li className='li'>
                  <Link  className='a' to="/Kontakt"> Contact </Link>
                </li>
                <li className='li'>
                  <Link className='a' to="/About"> About </Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/Jokes' element={<Jokes></Jokes>}></Route>
              <Route path='/Kontakt' element={<Contact></Contact>}></Route>
              <Route path='/About' element={<About></About>}></Route>
            </Routes>
      <Footer></Footer>
        </Router>
        )
      }

export default Navbar;