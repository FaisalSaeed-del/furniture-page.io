import "./App.css";
import Aboutus from "./components/about/Aboutus";
import Hero from "./components/hero/Hero";
import MobileResponsive from "./components/mobileresponsive/MobileResponsive";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileResponsive />
      </div>
      <Hero />
      <Aboutus />
    </div>
  );
}

export default App;
