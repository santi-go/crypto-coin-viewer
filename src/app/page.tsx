import CoinGrid from './components/coinGrid';
import { fetchCoins } from './services/coinService';


export default async function Home() {
  const coins = await fetchCoins();

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CoinGrid coins={coins} />
    </div>
  );
}