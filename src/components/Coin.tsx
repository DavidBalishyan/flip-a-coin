import React, { useState } from "react";
import { motion } from "framer-motion";

const Coin: React.FC = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<"Heads" | "Tails" | null>(null);

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);
    setTimeout(() => {
      const newResult = Math.random() < 0.5 ? "Heads" : "Tails";
      setResult(newResult);
      setIsFlipping(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className={`w-100 h-100 bg-gray-300 rounded-full flex items-center justify-center text-6xl font-bold shadow-lg cursor-pointer`}
        animate={{ rotateX: isFlipping ? 720 : 0 }}
        transition={{ duration: 1 }}
        onClick={flipCoin}
      >
        {result ?? "????"} 
      </motion.div>

      <button
        onClick={flipCoin}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
        disabled={isFlipping}
      >
        Flip Coin
      </button>
    </div>
  );
};

export default Coin;
