import { fetchByQuery } from './__mocks__/coinService';

describe('fetchByQuery API Mock', () => {
  it('returns NFT results for "success" query', async () => {
    const result = await fetchByQuery('success');
    expect(result.nfts[0]).toEqual({
      id: 'nft123',
      name: 'Cool NFT',
      symbol: 'CNFT',
      thumb: 'https://example.com/nft-thumb.png',
    });
  });

  it('returns empty results for "empty" query', async () => {
    const result = await fetchByQuery('');
    expect(result.nfts).toHaveLength(0);
  });

  it('throws an error for "error" query', async () => {
    await expect(fetchByQuery('error')).rejects.toThrow('API Error');
  });
});