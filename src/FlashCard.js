import seta_play from './assets/img/seta_play.png'
import seta_virar from './assets/img/seta_virar.png'
import styled from 'styled-components';
import { useState } from 'react';

export default function FlashCard({ cards, numero }) {
    const [abrirCard, setAbrirCard] = useState("PerguntaFechada")


    function abrirPergunta() {
        setAbrirCard("PerguntaAberta")
    }
    function abrirResposta() {
        setAbrirCard("RespostaAberta")
    }
    function finalizar() {
        setAbrirCard("PerguntaFechada finalizada")
    }


    if (abrirCard == "PerguntaFechada") {
        return (

            <PerguntaFechada>
                <p>Pergunta {numero + 1}</p>
                <img numero={numero} onClick={abrirPergunta} src={seta_play}></img>
            </PerguntaFechada>
        )
    }
    else if (abrirCard == "PerguntaAberta") {
        return (

            <PerguntaAberta>
                <p> {cards[numero].question}</p>
                <img onClick={abrirResposta} src={seta_virar}></img>
            </PerguntaAberta>
        )
    }

    else if (abrirCard == "RespostaAberta") {
        return (
            <RespostaAberta>
                <p> {cards[numero].answer}</p>
                <ContainerBotoes>
                    <button onClick={finalizar} > Não lembrei</button>
                    <button onClick={finalizar} >Quase não lembrei</button>
                    <button onClick={finalizar} >Zap!</button>
                </ContainerBotoes>
            </RespostaAberta>
        )

    }

    else if (abrirCard == "PerguntaFechada finalizada") {
        return (

            <PerguntaFechada>
                <p>Pergunta {numero + 1}</p>
                <img numero={numero} src={seta_play}></img>
            </PerguntaFechada>
        )
    }

}

const PerguntaFechada = styled.div`
 width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;}
  `
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
  `
const RespostaAberta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  `

const ContainerBotoes = styled.div`
    display:flex;

  button{
  width:85px;
  height: 37px;
  margin-left: 7px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
    }

> button:nth-child(1){
background: #FF3030;
border: 1px solid #FF3030;
}
> button:nth-child(2){
background: #FF922E;
border: 1px solid #FF922E;
}
> button:nth-child(3){
background: #2FBE34;
border: 1px solid #2FBE34;
}
`