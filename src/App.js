
import './App.css';
import Analytics from './Components/Analytics';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Cards from './Components/Cards'
import Footer from '../src/Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />

    
    </div>
  );
}

export default App;
