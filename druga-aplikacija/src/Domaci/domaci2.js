import { useState } from "react";
function StudentForm(){

    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [grade, setGrade] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newStudent = {name, surname, grade, image};
        setStudents([...students, newStudent]);
        setName("");
        setSurname("");
        setGrade("");
        setImage("");
    }



    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <button onClick={() => {
                 let stanje = false;
                 let form = document.getElementById('forma').hidden;
                 form? stanje = false: stanje = true;
                 document.getElementById('forma').hidden = stanje
            }}>Prijavi Studenta</button>
            <div id="forma"  style={{width:"100%",justifyContent:"center",paddingLeft:"50%"}}>
            <form   onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"50vh",width:"50%",border:"solid black 1px"}}>
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} name="name" placeholder="Unesi ime"></input><br></br>
                <label>Surname</label>
                <input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} placeholder="Unesi Prezime"></input><br></br>
                <label>Grade</label>
                <input type="number" value={grade} onChange={(event) => setGrade(event.target.value)} placeholder="Unesi Prezime"></input><br></br>
                <label>Image</label>
                <input type="file" accept="image/*" onChange={(event) =>setImage(event.target.files[0])} placeholder="Unesi Prezime" ></input><br></br>
                <button type="submit" >Dodaj studenta</button>
            </form>
            </div>
            <button>Prikazi ucenike</button>

            <div style={{display:"flex",flexDirection:"row"}}>
                {students.map((student,index) => (<div key={index} style={{border: "1px solid black",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",margin:"5%",width:"20vw"}}>
                    <img src={URL.createObjectURL(student.image)} style={{borderRadius:"50%"}} alt="ne valja slika"  width="100px"></img>
                    <h2>{student.name} {student.surname}</h2>
                    <p>ima prosek od : {student.grade}</p>
                </div>))}
            </div>


        </div>
    )

}
export default StudentForm;