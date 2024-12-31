import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Projects />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
