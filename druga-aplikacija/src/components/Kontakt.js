import './kontakt.css'
function Kontakt () {
    return (
        <div className="home">
            <h1>Contact us</h1>
            <div className="sve">
            <div className="leva-strana">
                <div>
                <h3>Let us help you</h3>
                <label>Za sve nejasnoce ovde nas mozete kontaktirati.</label>
                </div>
                <div>
                <h3>Problems and bugs</h3>
                <label>Takodje ako imate neke probobleme,bagove ili smetenje potrudicemo se da budu resene u najkracem vremenskom roku.</label>
                </div>
                <div>
                <h3>About us</h3>
                <label>Ukoliko smo nesto izostavili na stranici <a href='/About'>About</a> ovde mozete traziti dodatne informacije.</label>
                </div>
            </div>
            <div className='desna-strana'>
            <form className='form' action="mailto: systemduoit@gmail.com">
                <label>Ime i Prezime</label>
                <input type="text" placeholder="Unesite ime i prezime"></input>
                <br></br>
                <label>Email</label>
                <input type="text" placeholder='Unesite email'></input>
                <br></br>
                <label>Uneiste poruku</label>
                <textarea></textarea>
                <br></br>
                <button>Send Message</button>
            </form>
            </div>
            </div>
        </div>
    )
}
export default Kontakt