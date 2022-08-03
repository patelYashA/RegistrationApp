import React from 'react'
import Navbar from './Components/Navbar';
import Read from './Components/Read';
import Signin from './Components/Signin';
import Edit from './Components/Edit';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='create' element={<Signin />} />
          <Route path='edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
