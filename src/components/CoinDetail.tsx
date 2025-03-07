import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCoinDetails } from '../api/coinGecko';

const CoinDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<any>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const data = await getCoinDetails(id!);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch coin details');
        setLoading(false);
      }
    };
    fetchCoinDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
       <button className="return-button" onClick={() => navigate('/')}>
        Return to Landing Page
      </button>
      <h1 className="text-3xl font-bold">{coin.name}</h1>
      <p className="text-lg">{coin.symbol.toUpperCase()}</p>
      <p className="text-md">{coin.description.en}</p>
      <p><strong>Hashing Algorithm:</strong> {coin.hashing_algorithm}</p>
      <p><strong>Market Cap:</strong> €{coin.market_data.market_cap.eur}</p>
      <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        Visit Homepage
      </a>
      <p><strong>Genesis Date:</strong> {coin.genesis_date}</p>
    </div>
  );
};

export default CoinDetail;
