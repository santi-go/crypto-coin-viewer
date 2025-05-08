import { fetchCoins } from './services/coinService';
import HomeClient from './components/HomeClient';

export default async function Home() {
  const coins = await fetchCoins();

  return <HomeClient initialCoins={coins} />;
}