import React, { useState } from "react";
import { CoinItem } from "./CoinItem";
// import { Sparklines, SparklinesLine } from "react-sparklines";

export const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  console.log(coins);
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h2 className="text-xl font-bold my-2">Search Coin</h2>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="w-full border border-input bg-primary px-4 py-2 rounded-lg shadow-lg"
            placeholder="Search"
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr>
            <th></th>
            <th className="px-3">#</th>
            <th className="flex items-start md:ml-2">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">Volume</th>
            <th className="hidden md:table-cell">MKT</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
