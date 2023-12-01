import "./../style.css";

export default function Card(){
    <div class="cardd" key={ativ.id}>
        <div class="card">
            <div>
                <Link to={`/detalhe/${ativ.id}`}>
                    <p class="titulo">{ativ.titulo}</p>
                </Link> {/* //essa linha cria um link que leva o usuário para a rota prescrita, onde :identidade será substituído pelo valor da propriedade identidade da atividade atual.  */}
                <p><span>Descrição:</span> {ativ.descricao}</p>
            </div>
        </div>
    </div>
}
