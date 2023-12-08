import Menu from "./componentes/Menu.jsx";
import Card from "./componentes/card.jsx";

export default function Home(){
    const listaVideosSalva = JSON.parse(localStorage.getItem("ListaVideos"))|| [];
    return(
        <body>
            <Menu/>
            {listaVideosSalva.map((ativ) => <Card ativ = {ativ}/>)}


        </body> 
     );
}