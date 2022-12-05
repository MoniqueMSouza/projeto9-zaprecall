import FlashCards from './FlashCards';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { useState } from 'react';
import GlobalStyle from './assets/css/GlobalStyle';


export default function App() {
  const [contador, setContador] = useState(0)

  return (

    <ScreenContainer>
      <GlobalStyle/>
      <Header></Header>
      <FlashCards
      contador={contador}
      setContador={setContador}
      ></FlashCards>
      <Footer
      contador={contador}
      ></Footer>
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



