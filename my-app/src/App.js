import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import EnrollPage from './components/EnrollPage/Index.jsx'
import DetailsPage from './components/DetailsPage/Index.jsx'
import ThankYouPage from './components/ThankYouPage/Index.jsx'
import NotFound from './components/NotFound/Index.jsx';
import './App.css'

const App=()=>(
    <BrowserRouter>
      <Routes>
        <Route exact path="https://abhijith-kota.github.io/Student-Info-System-chat-bot/" element={<EnrollPage/>} />
        <Route exact path="https://abhijith-kota.github.io/Student-Info-System-chat-bot/details" element={<DetailsPage/>} />
        <Route exact path="https://abhijith-kota.github.io/Student-Info-System-chat-bot/:name/:age" element={<ThankYouPage/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )

export default App;
