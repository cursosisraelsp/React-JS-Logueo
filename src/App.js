import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Logueo from './Pages/Logueo';
import PaxinaApp0 from './Pages/PaxinaApp0';
import { Proveedorcontexto } from './componentes/proveedorContext';
import UtilizoSeleccion from './seleccionDentroApp/UtilizoSeleccion';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Proveedorcontexto>
          <UtilizoSeleccion>
            <Routes>
              <Route path="/" element={<Layout />}>
              
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="logueo" element={<Logueo />} />
                
                <Route path="*" element={<NoPage />} />
                
              </Route>
            </Routes>
          </UtilizoSeleccion>
          
          </Proveedorcontexto>
        </BrowserRouter>
      
     
    </div>
  );
}

export default App;
