import { useEffect, useState } from "react"

function Cas (){
    const [niz, setNiz] = useState([])
    const [minimal, setMinimal] = useState(0)

    const podaci = [  
    {    "id": 1,    "name": "Red Ceramic Vase",    "price": 29.99,    "state": "New",    "imgUrl": "https://example.com/red-ceramic-vase.jpg"  }, 
    {    "id": 2,    "name": "Blue Abstract Painting",    "price": 149.99,    "state": "Used",    "imgUrl": "https://example.com/blue-abstract-painting.jpg"  },
    {    "id": 3,    "name": "Wooden Coffee Table",    "price": 349.99,    "state": "New",    "imgUrl": "https://example.com/wooden-coffee-table.jpg"  }, 
    {    "id": 4,    "name": "Vintage Brass Lamp",    "price": 99.99,    "state": "Used",    "imgUrl": "https://example.com/vintage-brass-lamp.jpg"  }, 
    {    "id": 5,    "name": "Handmade Area Rug",    "price": 499.99,    "state": "New",    "imgUrl": "https://example.com/handmade-area-rug.jpg"  }, 
    {    "id": 6,    "name": "Modern Glass Pendant Light",    "price": 79.99,    "state": "New",    "imgUrl": "https://example.com/modern-glass-pendant-light.jpg"  }, 
    {    "id": 7,    "name": "Antique Bronze Mirror",    "price": 199.99,    "state": "Used",    "imgUrl": "https://example.com/antique-bronze-mirror.jpg"  }, 
    {    "id": 8,    "name": "Contemporary Sofa",    "price": 899.99,    "state": "New",    "imgUrl": "https://example.com/contemporary-sofa.jpg"  },  
    {    "id": 9,    "name": "Framed Botanical Prints",    "price": 49.99,    "state": "New",    "imgUrl": "https://example.com/framed-botanical-prints.jpg"  },
    {    "id": 10,    "name": "Vintage Persian Rug",    "price": 799.99,    "state": "Used",    "imgUrl": "https://example.com/vintage-persian-rug.jpg"  }]

        useEffect(() =>{
            setMinimal (document.getElementById("s").value)
            const noviPodaci = podaci.filter((podatak) => podatak.price > document.getElementById("s").value && podatak.price < document.getElementById("s2").value && podatak.state === document.getElementById("s3").value)
            noviPodaci.sort((a,b) => a.price - b.price)
            setNiz(noviPodaci)
        },)

    return(
        <div>
            {/* <label>Odaberi minimalnu cenu</label> */}
            <label>Odaberi cenu {minimal}</label>
            {/* <select id="s">
                <option value={0}>{`>0`}</option>
                <option value={100}>{`>100`}</option>
                <option value={200}>{`>200`}</option>
                <option value={400}>{`>400`}</option>
                <option value={1000}>{`>1000`}</option>
            </select>
             */}
             <input id="s"  type="range" min={0 } max={1000} step={10} ></input>
            <br></br>
            <label>Odaberite maksimalnu cenu</label>
            <select id="s2">
                <option value={50}>{`<50`}</option>
                <option value={100}>{`<100`}</option>
                <option value={200}>{`<200`}</option>
                <option value={400}>{`<400`}</option>
                <option value={1000}>{`<1000`}</option>
            </select>
            <br></br>
            <label>Izabrite kvalitet stvari</label>
            <select id="s3">
                <option value={"New"}>Novo</option>
                <option value={"Used"}>Korisceno</option>
            </select>
            {niz.map((artikal) => (<div key={artikal.id}>
                <h3>{artikal.name}</h3>
                <p>{artikal.price}</p>
                <p>{artikal.state === "New" ? "Novo" : "Korisceno"}</p>
                <br></br>
            </div>
            )
            )}

        </div>
    )
}

export default Cas