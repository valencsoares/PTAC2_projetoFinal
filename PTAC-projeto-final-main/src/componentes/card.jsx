import "./../style.css";
import {Link, useNavigate} from "react-router-dom";

export default function Card({ativ}){
const idDoVideo = ativ.url.slice(17)

  return(
  <div className="card" key={ativ.id}>
        <iframe
            className="iframeVideo"
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${idDoVideo}`}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
            <div>
                <Link to={`/video/${ativ.id}`}>
                    <p className="titulo">{ativ.titulo}</p>
                </Link> {/* //essa linha cria um link que leva o usuário para a rota prescrita, onde :identidade será substituído pelo valor da propriedade identidade da atividade atual.  */}
                <p><span>Data: </span>{ativ.data}</p>
            </div>
    </div>
  )
}
