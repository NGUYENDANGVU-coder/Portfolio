//import components
import Header from "./components/Header";
import { BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TheEnd from "./components/TheEnd";
import Education from "./components/Education";
import ScrollUp from "./components/ScrollUp";
import SkillsShowcase from "./components/Skills";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main font-Poppins bg-main_bg text-main_color [overflow:hidden]">
          <Header/>
          <Home />
          <About />
          {/* <Skill /> */}
          <SkillsShowcase/>
          <Projects/>
          <Education/>
          <Contact />
          <TheEnd/>
        </div>
        <ScrollUp/>
      </div>
    </BrowserRouter>
  );
}

export default App;
