import reducer, { addCountry } from './covidData';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      countries: [],
      totalConfirmed: 0,
    },
  );
});

test('should handle a country\'s data being added to the store', () => {
  const previousState = {
    countries: [],
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
      totalConfirmed: 0,
    },
  );
});
