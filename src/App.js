import './App.css';
import Footer from './componentes/footer/footer';
import NavBarExamples from './componentes/navbar/navbar';
import Home from './componentes/home'
import Contacto from './componentes/contacto'
import Nosotros from './componentes/nostros'
import Tienda from './componentes/tienda'
import nuevaTienda from './componentes/nuevaTienda'
import Personajes from './componentes/personajes';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./componentes/estilos/home.css"

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExamples />}>
            <Route index element={<Home />} />
            <Route path='nosotros' element={<Nosotros />} />
            <Route path='tienda' element={<Tienda />} />
            <Route path='nuevaTienda' element={<nuevaTienda />} />
            <Route path='contacto' element={<Contacto />} />
            <Route path='personajes' element={<Personajes />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
