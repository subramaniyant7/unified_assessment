import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Confetti from "react-confetti";

interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

interface GridModeProps {
  coins: Coin[];
  setCoins: (coins: Coin[]) => void;
}

export default function GridMode({ coins, setCoins }: GridModeProps) {
  const [isConfettiVisible, setIsConfettiVisible] = useState<boolean>(false);
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const reorderedCoins = Array.from(coins);
    const [removed] = reorderedCoins.splice(source.index, 1);
    reorderedCoins.splice(destination.index, 0, removed);

    setCoins(reorderedCoins);
  };

  const handleFavoriteClick = (coinId: string) => {
    // Show confetti animation when coin is marked as favorite
    setIsConfettiVisible(true);
    setTimeout(() => setIsConfettiVisible(false), 2000); // Hide confetti after 2 seconds
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="coins" direction="vertical">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {coins.map((coin, index) => (
              <Draggable key={coin.id} draggableId={coin.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <motion.div
                      key={coin.id}
                      className="border p-4 rounded-lg shadow-lg bg-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={`/coin/${coin.id}`}
                        className="block text-center"
                      >
                        <img
                          src={coin.image}
                          alt={`${coin.name} logo`}
                          className="w-16 mx-auto"
                        />
                        <h2 className="text-xl font-bold mt-2">{coin.name}</h2>
                        <p>{coin.symbol.toUpperCase()}</p>
                        <p>€{coin.current_price.toFixed(2)}</p>
                        <p>24h High: €{coin.high_24h.toFixed(2)}</p>
                        <p>24h Low: €{coin.low_24h.toFixed(2)}</p>
                      </Link>
                      <button
                        className="mt-4 text-blue-500"
                        onClick={() => handleFavoriteClick(coin.id)}
                      >
                        Mark as Favorite
                      </button>
                    </motion.div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
      {isConfettiVisible && <Confetti />}
    </DragDropContext>
  );
}
