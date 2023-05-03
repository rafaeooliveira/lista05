import { useState } from "react"

export default function NomeSobrenome(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");


    return(
    <div>
        <div>
            <label>Nome: </label>
            <input type="text" name="firstName" onChange={(event)=> setFirstName(event.target.value)}/>
        </div>
        <div style={{marginTop:"10px"}}>
            <label>Sobrenome: </label>
            <input type="text" name="lastName" onChange={(event)=> setLastName(event.target.value)}/>
        </div>
            <button style={{marginTop:"10px"}} onClick={()=>setFullName(firstName+" "+lastName)}>Exibir nome completo</button>
        <div style={{marginTop:"10px"}}>{fullName}</div>
    </div>
    )
}