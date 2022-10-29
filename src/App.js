import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import About from './About';
import POPOSList from './POPOSList';
import Footer from './Footer';
import POPOSDetails from './POPOSDetails';

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
