import Link from 'next/link';
import { SearchResultNft as SearchResultNftType } from '../interfaces/searchResult.interface';

interface SearchResultNftProps {
  nft: SearchResultNftType;
}

export default function SearchResultNft({ nft }: SearchResultNftProps) {
  return (
    <li className="p-4 border rounded-md shadow-sm hover:shadow-lg transition-shadow">
      <Link href={`/nft/${nft.id}`} className="flex flex-col items-center">
        <img src={nft.thumb} alt={nft.name} className="w-12 h-12 mb-2" />
        <h3 className="font-bold">{nft.name}</h3>
        <p className="text-sm text-gray-500 uppercase">{nft.symbol}</p>
      </Link>
    </li>
  );
}