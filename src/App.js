import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import {
  Link, Route, Switch, useLocation,
} from 'react-router-dom';
import AppDetails from './Components/appDetail';
import Home from './Components/home';
import './styles/App.css';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <header>
        <Navbar className="px-4 text-white bg-blue1 d-flex justify-content-between">
          <Link to="/" className="text-decoration-none text-white fw-bold">
            HOME
          </Link>
          <h3 className="m-0">COVID-19 CASELOAD</h3>
          <span>
            <i className="me-4 fas fa-microphone" />
            <i className="fas fa-cog" />
          </span>
        </Navbar>
      </header>
      <main>
        <Switch>
          <Route path="/details/:id">
            <AppDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
