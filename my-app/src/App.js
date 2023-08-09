import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

// import EnrollPage from './components/EnrollPage'
import NotFound from './components/NotFound/NotFound.jsx';
import './App.css'

const App=()=>(
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={EnrollPage} />
        <Route exact path="/details" component={DetailsPage} />
        <Route exact path="/thankyou" component={ThankYouPage} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )

export default App;
