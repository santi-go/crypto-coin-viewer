'use client';

import { useState, useCallback } from 'react';
import CoinGrid from './coinGrid';
import SearchBox from './SearchBox';
import SearchResultCoin from './SearchResultCoin';
import SearchResultNft from './SearchResultNft';
import Loading from './Loading';
import { Coin } from '../interfaces/coinViewer.interface';
import { fetchByQuery } from '../services/coinService';
import { SearchResult } from '../interfaces/searchResult.interface';

interface HomeClientProps {
  initialCoins: Coin[];
}

export default function HomeClient({ initialCoins }: HomeClientProps) {
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    if (query.length >= 3) {
      setIsLoading(true);
      try {
        const results: SearchResult = await fetchByQuery(query);
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResults(null);
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SearchBox onSearch={handleSearch} />
      {isLoading ? (
        <Loading />
      ) : searchResults ? (
        <div className="w-full max-w-4xl">
          {searchResults.coins.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Coins</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.coins.map((coin) => (
                  <SearchResultCoin key={coin.id} coin={coin} />
                ))}
              </ul>
            </div>
          )}
          {searchResults.nfts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">NFTs</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.nfts.map((nft) => (
                  <SearchResultNft key={nft.id} nft={nft} />
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <CoinGrid coins={initialCoins} />
      )}
    </div>
  );
}