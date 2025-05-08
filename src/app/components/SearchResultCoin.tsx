import Link from 'next/link';
import { SearchResultCoin as SearchResultCoinType } from '../interfaces/searchResult.interface';

interface SearchResultCoinProps {
  coin: SearchResultCoinType;
}

export default function SearchResultCoin({ coin }: SearchResultCoinProps) {
  return (
    <li className="p-4 border rounded-md shadow-sm hover:shadow-lg transition-shadow">
      <Link href={`/coin/${coin.id}`} className="flex flex-col items-center">
        <img src={coin.thumb} alt={coin.name} className="w-12 h-12 mb-2" />
        <h3 className="font-bold">{coin.name}</h3>
        <p className="text-sm text-gray-500 uppercase">{coin.symbol}</p>
        <p className="text-sm text-gray-600">Rank: #{coin.market_cap_rank}</p>
      </Link>
    </li>
  );
}