import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/Aboutme/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;