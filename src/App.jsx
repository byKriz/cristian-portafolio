import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './container/Home/Home'
import { AboutMe } from './container/AboutMe/AboutMe'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
    </div>
  )
}

export default App
