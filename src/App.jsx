import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./container/Home/Home";
import { AboutMe } from "./container/AboutMe/AboutMe";
import { Skills } from "./container/Skills/Skills";
import { Portfolio } from "./container/Portfolio/Portfolio";
import { Contact } from "./container/Contact/Contact";
import { Footer } from "./container/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
