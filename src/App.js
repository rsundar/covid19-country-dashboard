import { Route, Switch } from 'react-router-dom';
import AppDetails from './Components/appDetail';
import Home from './Components/home';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h3 className="m-0">COVID-19 CASELOAD</h3>
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
