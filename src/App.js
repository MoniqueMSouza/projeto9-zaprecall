
import FlashCards from './FlashCards';
import { useState } from 'react';
import Header from './Header';



function App() {


  return (

    <div className="screen-container">
      <Header></Header>
      <FlashCards
      
      ></FlashCards>

      <div className="footer-concluidos"> 0/4 Concluídos</div>
    </div>
  )
}

export default App;
