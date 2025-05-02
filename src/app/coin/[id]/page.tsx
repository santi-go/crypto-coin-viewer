import { fetchCoinById } from '@/app/services/coinService';
import { CoinDetails } from '../../interfaces/coinViewer.interface';
import CoinCard from '@/app/components/coinCard';

export default async function CoinPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const coin: CoinDetails = await fetchCoinById(id);
  console.log('coin',coin);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CoinCard coin={coin} />
    </div>
  );
}