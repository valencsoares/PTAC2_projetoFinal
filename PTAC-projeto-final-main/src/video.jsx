import { useParams } from "react-router-dom"
import Card from "./componentes/card.jsx";
import Menu from "./componentes/Menu.jsx";
import Navbar from "./componentes/navbar.jsx";
import DetalhesVideos from "./componentes/DetalhesVideos.jsx";
import "./style.css"

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
            <Navbar/>    
            <div className="container">
                <Menu/>
                <div className="videoCard">
                    <DetalhesVideos ativ={atividade[0]}/>
                </div>
            </div>
        </body>
    ) 
}