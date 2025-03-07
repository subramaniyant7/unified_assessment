import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

interface ListModeProps {
  coins: Coin[];
}

export default function ListMode({ coins }: ListModeProps) {
  return (
    <ul>
      {coins.map((coin, index) => (
        <motion.li
          key={coin.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 border-b hover:bg-gray-100 cursor-pointer"
        >
          <Link to={`/coin/${coin.id}`} className="block text-center">
            <div className="flex items-center">
              <img
                src={coin.image}
                alt={`${coin.name} logo`}
                className="w-8 h-8 mr-4"
              />
              <div>
                <h2 className="font-bold">{coin.name}</h2>
                <p>{coin.symbol.toUpperCase()}</p>
              </div>
              <div className="ml-auto">
                <p>€{coin.current_price}</p>
                <p className="text-sm text-gray-500">
                  High: €{coin.high_24h} | Low: €{coin.low_24h}
                </p>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
