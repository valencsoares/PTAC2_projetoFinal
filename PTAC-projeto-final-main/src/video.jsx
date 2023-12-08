import { useParams } from "react-router-dom"
import Card from "./componentes/card.jsx";
import Menu from "./componentes/Menu.jsx";

export default function Video(){
const {id} = useParams();
const lista = JSON.parse(localStorage.getItem("ListaVideos"));

const atividade = lista.filter((ativ) => {
    if(ativ.id == id){
        return ativ;
    }
    return null
    }
   
)
console.log(id)

    return (
        <body>
        <Menu/>
        <Card ativ={atividade[0]}/>
        </body>
    ) 
}