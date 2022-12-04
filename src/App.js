import FlashCards from './FlashCards';
import Header from './Header';
import styled from 'styled-components';
import GlobalStyle from './assets/css/GlobalStyle';


export default function App() {
  
  return (

    <ScreenContainer>
      <GlobalStyle/>
      <Header></Header>
      <FlashCards
      
      ></FlashCards>

      <div className="footer-concluidos"> 0/4 Concluídos</div>
    </ScreenContainer>
  )
}

 const ScreenContainer = styled.div`
 background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
 `



