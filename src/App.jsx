import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import EcommerceProvider from "./routes/Ecommerce.jsx"
import "./App.css";




function App() {
  

  return (
   <>
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/ecommerce/home" replace />} />
        <Route path="/ecommerce/*" element= {<EcommerceProvider/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
