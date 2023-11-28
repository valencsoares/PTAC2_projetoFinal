import Menu from "./componentes/Menu.jsx";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Cadastrar(){
    const listaVideosSalva = localStorage.getItem("ListaVideos")
    const [listaVideos, setListaVideos] = useState(JSON.parse(listaVideosSalva) || []);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState(listaVideosSalva [listaVideosSalva.length - 1]?.id + 1 || 1);
    /* estados */

    useEffect(() => { localStorage.setItem("ListaVideos", JSON.stringify(listaVideos)) }, [listaVideos]);

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
        </div>
    </body>
    )
}