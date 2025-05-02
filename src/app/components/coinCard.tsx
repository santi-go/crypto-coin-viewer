import { CoinDetails } from '../interfaces/coinViewer.interface';

export default async function CoinCard({ coin }: { coin: CoinDetails }) {
  const marketData = coin.market_data;

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-white w-full max-w-md">
      {/* Coin Image */}
      <img
        src={coin.image?.large || '/placeholder.png'} // Fallback to a placeholder image
        alt={coin.name || 'Unknown Coin'}
        className="w-20 h-20 mb-4"
      />

      {/* Coin Name and Symbol */}
      <h2 className="text-2xl font-bold">{coin.name || 'Unknown Coin'}</h2>
      <p className="text-sm text-gray-500 uppercase">{coin.symbol || 'N/A'}</p>

      {/* Current Price */}
      <p className="text-xl font-semibold mt-2">
        ${marketData?.current_price?.usd?.toLocaleString() || 'N/A'}
      </p>

      {/* Market Data */}
      <div className="mt-4 w-full">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Market Cap:</span>{' '}
          ${marketData?.market_cap?.usd?.toLocaleString() || 'N/A'}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">24h Volume:</span>{' '}
          ${marketData?.total_volume?.usd?.toLocaleString() || 'N/A'}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Circulating Supply:</span>{' '}
          {marketData?.circulating_supply?.toLocaleString() || 'N/A'}
        </p>
      </div>

      {/* Price Changes */}
      <div className="mt-4 w-full">
        <p
          className={`text-sm ${
            marketData?.price_change_percentage_24h !== undefined
              ? marketData.price_change_percentage_24h >= 0
                ? 'text-green-500'
                : 'text-red-500'
              : 'text-gray-500'
          }`}
        >
          <span className="font-medium">24h Change:</span>{' '}
          {marketData?.price_change_percentage_24h !== undefined
            ? `${marketData.price_change_percentage_24h.toFixed(2)}%`
            : 'N/A'}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">High (24h):</span>{' '}
          ${marketData?.high_24h?.usd?.toLocaleString() || 'N/A'}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Low (24h):</span>{' '}
          ${marketData?.low_24h?.usd?.toLocaleString() || 'N/A'}
        </p>
      </div>

      {/* All-Time High and Low */}
      <div className="mt-4 w-full">
        <p className="text-sm text-gray-600">
          <span className="font-medium">All-Time High:</span>{' '}
          ${marketData?.ath?.usd?.toLocaleString() || 'N/A'}{' '}
          ({marketData?.ath_change_percentage?.usd !== undefined
            ? `${marketData.ath_change_percentage.usd.toFixed(2)}%`
            : 'N/A'})
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">All-Time Low:</span>{' '}
          ${marketData?.atl?.usd?.toLocaleString() || 'N/A'}{' '}
          ({marketData?.atl_change_percentage?.usd !== undefined
            ? `${marketData.atl_change_percentage.usd.toFixed(2)}%`
            : 'N/A'})
        </p>
      </div>

      {/* Last Updated */}
      <p className="text-xs text-gray-400 mt-4">
        Last Updated:{' '}
        {coin.last_updated
          ? new Date(coin.last_updated).toLocaleString()
          : 'N/A'}
      </p>
    </div>
  );
}