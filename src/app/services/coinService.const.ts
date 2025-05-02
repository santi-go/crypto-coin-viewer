export const COIN_GECKO_API_URL ='https://api.coingecko.com/api/v3'

export const OPTIONS = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-api-key': process.env.COIN_GECK_API_KEY || '' },
  };
