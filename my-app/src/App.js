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
        <Route exact path="/" element={<EnrollPage/>} />
        <Route exact path="/details" element={<DetailsPage/>} />
        <Route exact path="/thankyou/:name/:age" element={<ThankYouPage/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )

export default App;
