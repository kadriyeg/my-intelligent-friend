'use client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from  "./pages/home/Home";
import 'bootstrap/dist/css/bootstrap.css';import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;