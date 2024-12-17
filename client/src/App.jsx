import './App.css'
import Hero from './Components/Hero';
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
    </>
  );
}

export default App;
