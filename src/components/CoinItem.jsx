import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const CoinItem = ({ coin }) => {
  return (
    <tr className="h-[80px] overflow-hidden border-b">
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center ">
            <img className="w-6 rounded-full mr-2" src={coin.image} alt="/" />
            <p className="hidden md:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>₹{coin.current_price.toLocaleString()}</td>
      <td>
        {coin.market_cap_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="hidden md:table-cell">
        ₹{coin.total_volume.toLocaleString()}
      </td>
      <td className="hidden md:table-cell">
        ₹{coin.market_cap.toLocaleString()}
      </td>
    </tr>
  );
};
