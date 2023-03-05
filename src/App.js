
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
   <>
h

<BrowserRouter>
   <Navbar />
   <div className="app">
    <Routes>

      <Route exact path='/' element={ <Carousel />}></Route>
      <Route exact path='/Cards' element={ <Cards />}></Route>
      <Route exact path='/ContactForm' element={ <ContactForm />}> </Route>

   </Routes>
   </div>
   
   </BrowserRouter>

   <Footer />
   </>
  );
}

export default App;
