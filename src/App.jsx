import './App.css'
import Agentes from './pages/Agentes';
import Contacto from './pages/Contacto';
import Footer from './pages/Footer';
import Home from './pages/Home'
import ListaPropiedades from './pages/ListaPropiedades';
import Nav from './pages/Nav';
import Testimonio from './pages/Testimonio';
import TiposdePropiedades from './pages/TiposdePropiedades'

function App() {

  return (
    <div className='App'>
      <div className="sections">
        <Nav />
        <Home />
        <TiposdePropiedades />
        <ListaPropiedades />
        <Contacto />
        <Agentes />
        <Testimonio />
      </div>
      <Footer />
    </div>
  );
}

export default App
