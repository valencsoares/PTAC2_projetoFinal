import Menu from "./componentes/Menu.jsx";
import Card from "./componentes/card.jsx";
import Navbar from "./componentes/navbar.jsx";

export default function Home(){
    const listaVideosSalva = JSON.parse(localStorage.getItem("ListaVideos"))|| [];
    return(
        <body>         
            <Navbar/>  
        </body> 
     );
}