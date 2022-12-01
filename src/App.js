import logo from './assets/img/logo.png'
import FlashCards from './FlashCards';



function App() {

  return (
    <div className="screen-container">
      <div className="logo-container">
        <img src={logo}></img>
        <h1> ZapRecall</h1>
      </div>

      <FlashCards></FlashCards>
      
    </div>
  )
}

export default App;
