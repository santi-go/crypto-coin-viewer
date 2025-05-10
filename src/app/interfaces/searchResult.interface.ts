export interface SearchResult {
  coins: SearchResultCoin[];
  exchanges?: SearchResultExchange[];
  icos?: SearchResultIco[];
  categories: SearchResultCategory[];
  nfts: SearchResultNft[];
}

export interface SearchResultCoin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export interface SearchResultExchange {
  id: string;
  name: string;
  market_type: string;
  thumb: string;
  large: string;
}

export interface SearchResultIco {
    id: string;
}

export interface SearchResultCategory {
  id: string;
  name: string;
}

export interface SearchResultNft {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
}