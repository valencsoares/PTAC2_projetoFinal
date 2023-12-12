import "./../style.css";
export default function Menu(){
    return(
            <div className="menu">
                <ul>
                    <li><a href="/">Página principal</a></li>
                    <li><a href="/destaque">Destaques</a></li>
                    <li><a href="/cadastrar">Cadastrar</a></li>
                </ul>
            </div>
     );
}