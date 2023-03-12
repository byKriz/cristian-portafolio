import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./container/Home/Home";
import { AboutMe } from "./container/AboutMe/AboutMe";
import { Skills } from "./container/Skills/Skills";
import { Portfolio } from "./container/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
