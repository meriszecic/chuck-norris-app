import './home.css';
import { useEffect, useState } from "react";

function Jokes (){
    const [categories,setCategories] = useState([])
    const [categorie,setCategorie] = useState("")
    const [jokes,setJokes] = useState([])


    useEffect(() =>{
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(json => setCategories(json))
        console.log("uzeo listu kategorija");
    },[])

    const HandleChange = (e) => {
        setCategorie(e.target.value);
        console.log(e.target.value);
        fetch('https://api.chucknorris.io/jokes/random?category='+e.target.value+'')
        .then(response => response.json())
        .then(json => setJokes(json))
        console.log(jokes);
        return (
            <div>
                <p>{jokes.value}</p>
            </div>
        )
    };


    useEffect(() => {
        console.log(categorie);
    }, [categorie])
    return (
        <div className='home'>
            <p>Click select the gender of the joke.</p>
            <br></br>
            <select id="categorical" onChange={(e) => HandleChange(e)}>
                <option disabled selected>Categories</option>
                {categories?.map((category) => (
                    <option value={category} key={category}>
                        {category}
                    </option>
                ))}
            </select>
            <h3>{jokes.value}</h3>
        </div>
    )
}

export default Jokes;