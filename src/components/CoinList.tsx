import React, { useEffect, useState } from "react";
import { getCoins } from "../api/coinGecko";
import { motion } from "framer-motion";
import GridMode from "./GridMode";
import ListMode from "./ListMode";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  image: string;
}

const CoinList: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [renderMode, setRenderMode] = useState<string>("grid");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const handleModeChange = (mode: string) => {
    setRenderMode(mode);
  }

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await getCoins();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch coins");
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
    <motion.div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Cryptocurrency Tracker</h2>
        <div>
          <button
            onClick={() => handleModeChange("grid")}
            className={`${
              renderMode === "grid"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-l-lg`}
          >
            Grid
          </button>
          <button
            onClick={() => handleModeChange("list")}
            className={`${
              renderMode === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-r-lg`}
          >
            List
          </button>
        </div>
      </div>
    </motion.div>
      {renderMode === "grid" ? (
        <GridMode coins={coins} setCoins={setCoins} />
      ) : (
        <ListMode coins={coins} />
      )}
    </>
  );
};

export default CoinList;
