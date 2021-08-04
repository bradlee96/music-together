import './App.scss';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MainView from './pages/MainView.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainView />
          </Route>
          {/* <Route path="/" */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
