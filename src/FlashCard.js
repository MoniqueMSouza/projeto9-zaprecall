import seta_play from './assets/img/seta_play.png'
import seta_virar from './assets/img/seta_virar.png'
import icone_erro from './assets/img/icone_erro.png'
import icone_certo from './assets/img/icone_certo.png'
import icone_quase from './assets/img/icone_quase.png'
import styled from 'styled-components';
import { useState } from 'react';

export default function FlashCard({ cards, numero, setContador, contador }) {
    const [abrirCard, setAbrirCard] = useState("PerguntaFechada")


    function abrirPergunta() {
        setAbrirCard("PerguntaAberta")
    }
    function abrirResposta() {
        setAbrirCard("RespostaAberta")
    }
    function finalizar1() {
        setContador(contador + 1)
        setAbrirCard("PerguntaFechada finalizada1")
    }
    function finalizar2() {
        setContador(contador + 1)
        setAbrirCard("PerguntaFechada finalizada2")
    }
    function finalizar3() {
        setContador(contador + 1)
        setAbrirCard("PerguntaFechada finalizada3")
    }


    if (abrirCard === "PerguntaFechada") {
        return (

            <PerguntaFechada data-test="flashcard">
                <p data-test="flashcard-text">Pergunta {numero + 1}</p>
                <img numero={numero} onClick={abrirPergunta} src={seta_play} data-test="play-btn"></img>
            </PerguntaFechada>
        )
    }
    else if (abrirCard === "PerguntaAberta") {
        return (

            <PerguntaAberta data-test="flashcard">
                <p data-test="flashcard-text"> {cards[numero].question}</p>
                <img onClick={abrirResposta} src={seta_virar} data-test="turn-btn"></img>
            </PerguntaAberta>
        )
    }

    else if (abrirCard === "RespostaAberta") {
        return (
            <RespostaAberta data-test="flashcard">
                <p data-test="flashcard-text"> {cards[numero].answer}</p>
                <ContainerBotoes>
                    <button data-test="no-btn" onClick={finalizar1} > Não lembrei</button>
                    <button data-test="partial-btn" onClick={finalizar2} >Quase não lembrei</button>
                    <button data-test="zap-btn" onClick={finalizar3} >Zap!</button>
                </ContainerBotoes>
            </RespostaAberta>
        )

    }

    else if (abrirCard === "PerguntaFechada finalizada1") {
        return (

            <PerguntaFechada data-test="flashcard">
                <NaoLembrei data-test="flashcard-text">Pergunta {numero + 1}</NaoLembrei>
                <img numero={numero} src={icone_erro} data-test="no-icon"></img>
            </PerguntaFechada>
        )
    }

    else if (abrirCard === "PerguntaFechada finalizada2") {
        return (

            <PerguntaFechada data-test="flashcard">
                <QuaseNaoLembrei data-test="flashcard-text"> Pergunta {numero + 1}</QuaseNaoLembrei>
                <img numero={numero} src={icone_quase} data-test="partial-icon" ></img>
            </PerguntaFechada>
        )
    }
    else if (abrirCard === "PerguntaFechada finalizada3") {
        return (

            <PerguntaFechada data-test="flashcard">
                <Zap data-test="flashcard-text"> Pergunta {numero + 1}</Zap>
                <img numero={numero} src={icone_certo} data-test="zap-icon" ></img>
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
const NaoLembrei = styled.div`
color:#FF3030;
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: line-through;
`
const QuaseNaoLembrei = styled.div`
color:#FF922E;
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: line-through;
`
const Zap = styled.div`
color:#2FBE34;
font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: line-through;
`