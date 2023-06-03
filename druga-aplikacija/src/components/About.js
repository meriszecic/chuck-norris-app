import Chuck from './ChuckNorris.png'
import './About.css'
function About () {
    return(
        <div className='container'>
        <div className="slika">
            <img src={Chuck} alt='Chuck' width={"30%"}></img>
            <h2>Chuck Norris</h2>
            <p>Martial artist, actor, screenwriter</p>
            <p>Texas ranch near Navasota</p>
        </div>
        <div className='desna-strana'>
            <div className='desna-strana-grornji-deo'>
            <table>
                <tr>
                    <td><h3>Full name:</h3></td>
                    <td><p>Chuck Norris</p></td>
                </tr>
                <tr>
                    <td><h3>Email:</h3></td>
                    <td><p>neko@nekovic.rs</p></td>
                </tr>
                <tr>
                    <td><h3>Mobile:</h3></td>
                    <td><p>065-252-252-2</p></td>
                </tr>
                <tr>
                    <td><h3>Address:</h3></td>
                    <td><p>Texas ranch near Navasota</p></td>
                </tr>
            </table>
        </div>
            <div className='donji-deo-desne-strane'>
               <p>If you need more informations you can visite this <a href='https://en.wikipedia.org/wiki/Chuck_Norris'>web site</a></p>
            </div>
        </div>
        </div>
    )
}
export default About