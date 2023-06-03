import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Cas17 from './Cas/cas17';
import './App.css';
import Home from './Cas/Home'
import Cas10 from './Cas/Cas10'
import Domaci2 from './Domaci/domaci2'
import Domaci3 from './Domaci/domaci3'
import Projekat from './Mini-projekat/zacini'

import { useEffect, useState } from "react"

function App() {
  return(
  <Router>
      <div>
        <footer style={{backgroundColor: "grey",bottom:"0"}}>
        <ul className="naviv">
          <li>
            <Link to="/home">Home</Link>
            {console.log("ovde radio")}
          </li>
          <li>
            <Link to="/domaci2">Domaci2</Link>
          </li>
          <li>
            <Link to="/domaci3">Domaci3</Link>
          </li>
          <li>
            <Link to="/cas10">Cas10</Link>
          </li>
          <li>
            <Link to="/cas17">Cas17</Link>
          </li>
          <li>
            <Link to="/zacini">Projekat</Link>
          </li>
        </ul>
        </footer>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cas10' element={<Cas10></Cas10>}></Route>
        <Route path='/cas17' element={<Cas17></Cas17>}></Route>
        <Route path='/domaci2' element={<Domaci2></Domaci2>}></Route>
        <Route path='/domaci3' element={<Domaci3></Domaci3>}></Route>
        <Route path='/zacini' element={<Projekat/>}></Route>
      </Routes>
      </div>

  </Router>)
}


// export default App;
// import './App.css';

// import Navbare from './components/Navbar.js';

// function App() {
//   return(
// <div>
// <Navbare/>
// </div>
//   )
// }

// function App (){
//   const [brojac,setBrojac] = useState(0)
//   const dugme = () => {
//     setBrojac(brojac + 1)
//   }
//   return(
//     <>
//     <button onClick={dugme}>Povecaj count</button>
//     <p>Trenutna vrednost brojaca je: {brojac}</p>
//     </>
//   )
// }


export default App;
