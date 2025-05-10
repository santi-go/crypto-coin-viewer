import { SearchResult } from '../../interfaces/searchResult.interface';

export const fetchByQuery = jest.fn((query: string): Promise<SearchResult> => {
  if (query === 'success') {
    return Promise.resolve({
      nfts: [
        {
          id: 'nft123',
          name: 'Cool NFT',
          symbol: 'CNFT',
          thumb: 'https://example.com/nft-thumb.png',
        },
      ],
      coins: [],
      exchanges: [],
      icos: [],
      categories: [],
    });
  } else if (query === '') {
    return Promise.resolve({
      nfts: [],
      coins: [],
      exchanges: [],
      icos: [],
      categories: [],
    });
  } else if (query === 'error') {
    return Promise.reject(new Error('API Error'));
  }
  return Promise.resolve({
    nfts: [],
    coins: [],
    exchanges: [],
    icos: [],
    categories: [],
  });
});