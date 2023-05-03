import { useState } from "react"

export default function ShowName(){

    const [nome, setNome] = useState("");
    
    return(
        <form>
            <label htmlFor="">Nome: </label>
            <input type="text" onChange={(event)=>setNome(event.target.value.toUpperCase())}/>
            <p>{nome}</p>
        </form>
    )
}