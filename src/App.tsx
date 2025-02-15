import React from "react";
import Coin from "./components/Coin";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Just Flip A Coin</h1>
      <Coin />
    </div>
  );
};

export default App;
