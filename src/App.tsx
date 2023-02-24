import './App.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import Location from './Components/Content/Place'
import WeatherSection from './Components/Content/WeatherSection'


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Location>asd</Location>
        <WeatherSection></WeatherSection>
    </div>
  )
}

export default App
