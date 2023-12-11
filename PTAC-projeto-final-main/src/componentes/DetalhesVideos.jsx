import "./../style.css";

export default function Detalhes({ativ}){
const idDoVideo = ativ.url.slice(17)

  return(
    <div className="paginaVideo" key={ativ.id}>
            <div className="divVideo">
                <iframe
                    className="videoYoutube"
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${idDoVideo}`}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="divDetalhes">    
                <p className="tituloVideo">{ativ.titulo}</p>
                <p className="descVideo">{ativ.descricao}</p>
                <div className="boxDetalhes">
                    <p><span className="tempoVideo">Descrição: </span>{ativ.tempo}</p>
                    <p><span className="dataVideo">Data: </span>{ativ.data}</p>
                    <p><span className="canalVideo">Canal: </span>{ativ.canal}</p>
                </div>
            </div>
    </div>
  )
}