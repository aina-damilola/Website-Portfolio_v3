import './App.css'
import Footer from './apps/footer'
import Main_page from './apps/main_page'
// import startup_sound from './assets/audio/startup_sound.mp3'

function App() {
  return (
    <>
    <div id='loading_page' >
      
    </div>
    <div id='main_app'>
      <Main_page/>
      <div id="message">
        <p id='header'>Activate Windows</p>
        <p>Go to Settings to activate Windows. =)</p>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
