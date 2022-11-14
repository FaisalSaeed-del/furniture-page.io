import "./App.css";
import Aboutus from "./components/about/Aboutus";
import Contact from "./components/contactus/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MobileResponsive from "./components/mobileresponsive/MobileResponsive";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Review from "./components/review/Review";

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
      <Products />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
