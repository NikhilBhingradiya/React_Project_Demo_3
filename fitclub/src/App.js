import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join1 from './components/Join/Join1';

import Plans from './components/Plans/Plans';
import Program from './components/Program/Program';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimomonials/Testimonials';

function App() {
  return (
    <div className="App">
         <Hero />
         <Program />
         <Reasons />
         <Plans />
         <Testimonials />
         <Join1 />
         <Footer />
    </div>
  );
}

export default App;
