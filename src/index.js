import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/configStore';
import { fetchData } from './redux/data/covidData';
import App from './App';

store.dispatch(fetchData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
