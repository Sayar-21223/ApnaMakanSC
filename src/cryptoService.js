import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const getEthereumPrice = async () => {
  try {
    const response = await axios.get(`${API_URL}/simple/price`, {
      params: {
        ids: 'ethereum',
        vs_currencies: 'usd'
      }
    });
    return response.data.ethereum.usd;
  } catch (error) {
    console.error('Error fetching Ethereum price', error);
    return null;
  }
};
