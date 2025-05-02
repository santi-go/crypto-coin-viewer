import { Coin } from '../interfaces/coinViewer.interface';
import MiniCard from './miniCard';

export default function CoinGrid({ coins }: { coins: Coin[] }) {
  return (
    <>
      <h1>Coin List</h1>
      {coins && coins.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-4">
          {coins.map((coin) => (
            <MiniCard key={coin.id} coin={coin} />
          ))}
        </ul>
      ) : (
        <p>No coins available</p>
      )}
    </>
  );
}