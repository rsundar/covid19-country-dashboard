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
    name: 'India',
    id: 'india',
    total_confirmed: 33417390,
  }));

  expect(newState).toEqual(
    {
      countries: [
        {
          id: 'india',
          name: 'India',
          total_confirmed: 33417390,
        },
      ],
      totalConfirmed: 0,
    },
  );
});
