import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import components
import Header from '../Header/Header';
import About from '../About/About';
import POPOSList from '../POPOSList/POPOSList';
import Footer from '../Footer/Footer';
import POPOSDetails from '../POPOSDetails/POPOSDetails';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <POPOSList />
          </Route>
          <Route path='/details/:id'>
            <POPOSDetails />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
