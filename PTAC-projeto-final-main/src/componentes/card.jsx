import "./../style.css";
import {Link, useNavigate} from "react-router-dom";

export default function Card({ativ}){
const idDoVideo = ativ.url.slice(17)

  return(
  <div class="cardd" key={ativ.id}>
        <div class="card">
        <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${idDoVideo}`}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
            <div>
                <Link to={`/video/${ativ.id}`}>
                    <p class="titulo">{ativ.titulo}</p>
                </Link> {/* //essa linha cria um link que leva o usuário para a rota prescrita, onde :identidade será substituído pelo valor da propriedade identidade da atividade atual.  */}
                <p><span>Descrição:</span> {ativ.descricao}</p>
            </div>
        </div>
    </div>
  )
}
