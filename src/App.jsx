import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <div>
        <h3>contact me</h3>
      </div>
    </>
  );
}

export default App;
