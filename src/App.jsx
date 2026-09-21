import {HashRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Order from './pages/Order';
import {CartProvider} from './context/CartContext';

export default function App(){
  return <HashRouter>
    <CartProvider>
      <ScrollTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
      <Footer/>
    </CartProvider>
  </HashRouter>
}