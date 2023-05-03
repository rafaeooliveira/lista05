import { useState } from "react"

export default function CaixaMensagem({qteCaracteres}){

    const [qteCaracteresMensagem, setQteCaracteresMensagem] = useState(qteCaracteres);

    return(
        <form>
            <label htmlFor="">Mensagem: </label><br/>
            <textarea name="mensagem" rows="4" cols="50" maxLength={qteCaracteres} onChange={(event)=> setQteCaracteresMensagem(qteCaracteres - event.target.value.length)}/>
            <p>Quantidade restante de caracteres: {qteCaracteresMensagem}</p>
        </form>
    )

}