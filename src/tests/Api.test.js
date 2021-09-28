import { fetchCovidData } from '../utils/Api';

beforeEach(() => {
  fetch.resetMocks();
});

it('Test to check if the data was updated today', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        updated_at: new Date().toISOString().split('T')[0],
      }],
  }));
  const res = await fetchCovidData();
  const today = new Date().toISOString().split('T')[0];
  expect(res.result[0].updated_at).toBe(today);
});

it('Test to check the value of total confirmed from the fetchCovidData function', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        total: {
          total_confirmed: 12345678,
        },
      }],
  }));
  const response = await fetchCovidData();

  expect(response.result[0].total.total_confirmed).toBe(12345678);
});
