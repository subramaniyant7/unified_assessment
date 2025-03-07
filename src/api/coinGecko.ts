import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'eur',
        order: 'market_cap_desc',
        per_page: 10,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch coins');
  }
};

export const getCoinDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch coin details');
  }
};
