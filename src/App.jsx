
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import './App.css'
import LoginPage from "./pages/loginPage";
import ConsultantPage from "./pages/consultantPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para el formulario de inicio de sesión */}
        <Route index element ={<LoginPage />} />

        {/* Ruta para el formulario consulta*/}
        <Route path="/custom-consultation" element ={<ConsultantPage />} />

      
      </Routes>
    </BrowserRouter>
  );
};

export default App
