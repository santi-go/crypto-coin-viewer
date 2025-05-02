import { Coin, CoinDetails } from '../interfaces/coinViewer.interface';
import { COIN_GECKO_API_URL, OPTIONS } from './coinService.const';

async function handleApiRequest<T>(url: string): Promise<T> {
    const response = await fetch(url, OPTIONS);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }

export async function fetchCoins(): Promise<Coin[]> {
  const url = `${COIN_GECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false`;
  return handleApiRequest<Coin[]>(url);
}

export async function fetchCoinById(id: string): Promise<CoinDetails> {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    return handleApiRequest<CoinDetails>(url);
}