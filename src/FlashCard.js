import seta_play from './assets/img/seta_play.png'
function FlashCard({cards, numero}) {

function numeroPergunta(){

console.log(cards.length)

}

    return (
       
        <div className='pergunta-fechada'>
            <p>Pergunta {numero+1}</p>
            <img onClick={numeroPergunta} src={seta_play}></img>
            </div>
       )
}


export default FlashCard;

