import Contador from "./components/Contador";
import CaixaMensagem from "./components/CaixaMensagem";
import NomeSobrenome from "./components/NomeSobrenome";
import ParagrafosAuto from "./components/ParagrafosAuto";
import ShowName from "./components/ShowName";

export default function App() {

  return (
    <div>
    <div>Questão 01:</div>
    <Contador inicial={4} final={12}/>
    <div>Questão 02:</div>
    <br/>
    <ShowName/>
    <hr/>
    <div>Questão 03:</div>
    <br/>
    <CaixaMensagem qteCaracteres={120}/>
    <hr/>
    <div>Questão 04:</div>
    <br/>
    <NomeSobrenome/>
    <hr/>
    <div>Questão 05:</div>
    <br/>
    <ParagrafosAuto/>
    <hr/>
    </div>
  )
}

