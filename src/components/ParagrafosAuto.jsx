import { useState } from "react"
import Paragrafo from "./Paragrafo";

export default function ParagrafosAuto() {

    const [paragraphs, setParagraphs] = useState([]);


    const addParagraph = (text) => {
        setParagraphs([...paragraphs, text]);
    }


    return (
        <div>
            <p>Parágrafo 1 (Interface)</p>
            <p>Parágrafo 2 (Interface)</p>
            {paragraphs.map((text, index) => (
                <p key={index}>{text} (Usuário)</p>
            ))}
            <form onSubmit={(e) => {
                e.preventDefault();
                addParagraph(e.target.elements.text.value);
                e.target.reset();
            }}>
                <input type="text" name="text" />
                <button type="submit">Adicionar Parágrafo</button>
            </form>
        </div>
    )
}