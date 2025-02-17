import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Releases from "./components/Releases";
import What from "./components/What";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
      </div>
      <About />
      <What />
      <Releases />
      <Footer />
    </>
  );
}

export default App;
