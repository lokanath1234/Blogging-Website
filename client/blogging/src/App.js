import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Authpage } from './Components/Authpage/Authpage';
import { Userdashboard } from './Components/userDahsboardpage/Userdashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authpage />}></Route>
        <Route path="/" element={<Userdashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
