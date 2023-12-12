import Menu from "./componentes/Menu.jsx";
import Card from "./componentes/card.jsx";
import Navbar from "./componentes/navbar.jsx";

export default function Home(){
    const listaVideosSalva = JSON.parse(localStorage.getItem("ListaVideos"))|| [];
    const novaLista = listaVideosSalva.slice(-6)
    return(
        <body>         
            <Navbar/>  
            <div className="container">
                <Menu/>
                <div className="cards">
                    {novaLista.map((ativ) => <Card ativ = {ativ}/>)}
                </div>
            </div>
        </body> 
     );
}