import Menu from "./Menu.jsx";
import "./../style.css";
import { useState } from "react";

export default function ListaCadastro(){
    const [listaVideos, setListaVideos] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState(1);
    /* estados */

    const salvar = (e) =>{
        e.preventDefault(); //não recarregar a página
        setListaVideos([...listaVideos, { //"..." serve para pegar tudo que tem na lista e add algo a mais
            titulo:titulo, descricao:descricao, id:id
        }]); 
        //para fazer com que apague as informações do input quando chamar a função
        setTitulo("")
        setDescricao("")
        setId(id + 1)
        console.log(listaVideos)
    };

    //função de remover
    const remover = (id) => {
        const auxLista = [];
        listaVideos.map((listaVideos) => {
            if (listaVideos.id !== id) {
                auxLista.push(listaVideos);
            }
        });
        setListaVideos(auxLista);
    }

    return(
        <body>
            <Menu/>
            <div class="cadastro">
            <h1>Lista de livros para ler!</h1>
            <form onSubmit={salvar}>
                <input placeholder="adicione o título" type="text" value={titulo} onChange={(e)=>{setTitulo(e.target.value)}}/>
                <input placeholder="adicione a descrição" type="text" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}}/>
                <div>
                    <button class="add">Adicionar</button>
                </div>    
            </form>

            )}
            </div>
        </body>
     );
}