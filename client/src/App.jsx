import './App.css'
import Hero from './Components/Hero';
import Informative1 from './Components/Informative1';
import Informative2 from './Components/Informative2';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import Partners from './Components/Partners';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Offers />
      <Testimonials />
      <Informative1 />
      <Informative2 />
    </>
  );
}

export default App;
