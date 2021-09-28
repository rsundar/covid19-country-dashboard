import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { addCountry } from '../redux/data/covidData';
import store from '../redux/configStore';
import App from '../App';

global.scrollTo = jest.fn();

test('Should display the header', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const headerText = screen.getByText(/COVID-19 CASELOAD/i);
  expect(headerText).toBeInTheDocument();
});

test('Should go to the details page when a country is clicked', () => {
  store.dispatch(addCountry({
    name: 'AUSTRALIA',
    id: 'australia',
    total_confirmed: 92179,
    regions: [],
  }));

  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const countryElement = screen.getByText(/AUSTRALIA/i);
  fireEvent.click(countryElement);
  const subHeading = screen.getByText(/AUSTRALIA REGION WISE BREAKDOWN/i);
  expect(subHeading).toBeInTheDocument();
});

test('Should go back to the home page when the back button is clicked', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );
  const countryElement = screen.getByText('AUSTRALIA');
  fireEvent.click(countryElement);

  const backButton = screen.getByText(/HOME/i);
  fireEvent.click(backButton);

  const heading = screen.getByText(/GLOBAL/i);
  expect(heading).toBeInTheDocument();
});
