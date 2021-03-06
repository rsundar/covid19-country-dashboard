import reducer, { addCountry } from '../redux/data/covidData';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      countries: [],
      ready: false,
      totalConfirmed: 0,
    },
  );
});

test('should handle a country\'s data being added to the store', () => {
  const previousState = {
    countries: [],
    ready: false,
    totalConfirmed: 0,
  };

  const newState = reducer(previousState, addCountry({
    name: 'Vanuatu',
    id: 'vanuatu',
    total_confirmed: 4,
  }));

  expect(newState).toEqual(
    {
      countries: [
        {
          id: 'vanuatu',
          name: 'Vanuatu',
          total_confirmed: 4,
        },
      ],
      ready: false,
      totalConfirmed: 0,
    },
  );
});
