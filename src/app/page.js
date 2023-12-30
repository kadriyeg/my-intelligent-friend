'use client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from  "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;