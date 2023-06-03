import './Footer.css'
import Logo from './Logo.png'
import {Link} from 'react-router-dom'
function Footer(){
    return (
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={Logo} width={"200px"} alt='chuck was been here'></img>
          <p>Adresa, Grad, Zemlja</p>
          <p>Kontakt: 065-252-252-2</p>
          <p>Email: neko@nekovic.rs</p>
        </div>
        <div className="footer-right">
          <h3>Korisni linkovi</h3>
          <ul>
          <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/Jokes"> Jokes </Link>
                </li>
                <li>
                  <Link to="/Jokes"> Kontakt </Link>
                </li>
                <li>
                  <Link to="/Jokes"> Info </Link>
                </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chuck Norris Jokes. All Rights Reserved.</p>
      </div>
    </footer>
  );
} 
export default Footer;