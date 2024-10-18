import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Technologies />
      <div>
        <h3>projects</h3>
      </div>
    </>
  );
}

export default App;
