import './home.css';
function Home (){
    return (
        <div className="home">
            <h1>Welcome to Chuck Norris Jokes!</h1>
            <p>Click the button belowe to generate a random Chuck Norris joke.</p><br/><br/>
            <a className='a' href='/jokes'><button style={{fontSize:"25px",background:"#fc3314",color:"white",borderRadius:"10px",border:"none",padding:"10px",cursor:"pointer"}}>Show Jokes</button></a>
        </div>
    )
};

export default Home;