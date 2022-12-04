import seta_play from './assets/img/seta_play.png'
import seta_virar from './assets/img/seta_virar.png'
import { useState } from 'react';

function FlashCard({ cards, numero }) {
    const [abrirCard, setAbrirCard] = useState("pergunta-fechada")

    function abrirPergunta() {
        setAbrirCard("pergunta-aberta")

    }

    function abrirResposta() {
        setAbrirCard("resposta-abertaa")
    }

    if (abrirCard == "pergunta-fechada") {
        return (

            <div className={abrirCard}>
                <p>Pergunta {numero + 1}</p>
                <img numero={numero} onClick={abrirPergunta} src={seta_play}></img>
            </div>
        )
    }
    else if (abrirCard == "pergunta-aberta") {
        return (

            <div className={abrirCard}>
                <p> {cards[numero].question}</p>
                <img onClick={abrirResposta} src={seta_virar}></img>
            </div>
        )
    }

    if (abrirCard == "resposta-abertaa") {
        return (
            <div className={abrirCard}>
                <p> {cards[numero].answer}</p>
                <div className={"container-botoes"}>
                    <button className='naoLembrei'> Não lembrei</button>
                    <button className='quaseNaoLembrei'>Quase não lembrei</button>
                    <button className='zap'>Zap!</button>
                </div>
            </div>
        )

    }

}


export default FlashCard;

