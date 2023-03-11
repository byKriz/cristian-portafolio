import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './container/Home/Home'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
