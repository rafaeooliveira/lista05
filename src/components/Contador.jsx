import { useState } from "react"

export default function Contador(props){

    const [cont, setCont] = useState(props.inicial)

    function incrementar() {
        if(cont < props.final){
            setCont(cont+1);
        } else {
            alert("Você atingiu o valor máximo do contador");
        }
    }
    function decrementar() {
        if(cont > props.inicial){
            setCont(cont-1);
        } else{
            alert("Você atingiu o valor minímo do contador");
        }
    }

    return(
        <div>
            <p className="intervalo">Intervalo (limite) do Contador: [{props.inicial}, {props.final}]</p>
            <p className="contador">Contador: {cont}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <hr/>
        </div>
    )
}