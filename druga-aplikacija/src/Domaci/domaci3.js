import { useState } from "react";

function Domaci3(){
    const [password, setPassword] = useState("")
    const Regex = () => {
        let inp = document.getElementById("inp").value;
        let test = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?!.*?(.)\1{2})(?=.*?[!#"#$%&'()*+@{}[\]:;].*?[!#"#$%&'()*+@{}[\]:;]).{6,24}$/.test(inp)
        console.log(test? "Password is correct" : "Password is incorrect");
    }
    return (
        <div>
            <input type="text" value={password} onChange={(event) => {setPassword(event.target.value) ;Regex()}} id="inp" placeholder="enter your password"></input>
        </div>
    )
}
export default Domaci3