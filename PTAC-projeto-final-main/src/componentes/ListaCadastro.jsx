import Menu from "./Menu.jsx";
import "./../style.css";
import { useState } from "react";

export default function ListaCadastro(){
    const [listaVideos, setListaVideos] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState(1);
    /* estados */
    return(
        <body>
            <Menu/>
            <div class="cadastro">
                <h1>Cadastre já!</h1>
            </div>
        </body>
     );
}