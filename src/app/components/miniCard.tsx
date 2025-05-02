import Link from 'next/link';
import { Coin } from '../interfaces/coinViewer.interface';

export default function MiniCard({ coin }: { coin: Coin }) {
  return (
    <li className="flex flex-col items-center w-1/4 p-4 border rounded-md hover:shadow-lg transition-shadow">
      <Link href={`/coin/${coin.id}`} className="flex flex-col items-center w-full">
        <img src={coin.image} alt={coin.name} width="50" height="50" />
        <p className="font-bold">{coin.name}</p>
        <p className="text-gray-600">${coin.current_price.toLocaleString()}</p>
      </Link>
    </li>
  );
}