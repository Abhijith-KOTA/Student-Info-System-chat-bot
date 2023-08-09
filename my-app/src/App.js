import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import EnrollPage from './components/EnrollPage/Index.jsx'
import DetailsPage from './components/DetailsPage/Index.jsx'
import ThankYouPage from './components/ThankYouPage/Index.jsx'
import NotFound from './components/NotFound/Index.jsx';
import './App.css'

const App=()=>(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EnrollPage} />
        <Route exact path="/details" component={DetailsPage} />
        <Route exact path="/thankyou" component={ThankYouPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )

export default App;
