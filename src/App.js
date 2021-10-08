import About from "./components/About";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
    <Header />
    <main id="main">
      <Hero />
    <About />
    <Testimonial />
    <Footer />
    </main>

    </>
  );
}

export default App;
