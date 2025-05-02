import { fetchCoinById } from '@/app/services/coinService';
import { CoinDetails } from '../../interfaces/coinViewer.interface';
import CoinCard from '@/app/components/coinCard';

export default async function CoinPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const coin: CoinDetails = await fetchCoinById(id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <CoinCard coin={coin} />
    </div>
  );
}