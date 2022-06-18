import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

export const CoinPage = () => {
  const [cpage, setCpage] = useState({});
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setCpage(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className="rounded-div my-12 py-8">
      <div className="flex py-8">
        <img
          className="h-16 w-auto rounded-full mr-8"
          src={cpage.image?.large}
          alt="/"
        />
        <div>
          <p className="text-3xl font-bold">{cpage?.name} price</p>
          <p>({cpage.symbol?.toUpperCase()} / INR)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between">
            {cpage.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                ₹{cpage.market_data.current_price.inr.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={cpage.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Cap</p>
              {cpage.market_data?.market_cap ? (
                <p>₹{cpage.market_data.market_cap.inr.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Volume (24h)</p>
              {cpage.market_data?.market_cap ? (
                <p>₹{cpage.market_data.total_volume.inr.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">24h High</p>
              {cpage.market_data?.high_24h ? (
                <p>₹{cpage.market_data.high_24h.inr.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">24h Low</p>
              {cpage.market_data?.low_24h ? (
                <p>₹{cpage.market_data.low_24h.inr.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Rank</p>
              {cpage.market_cap_rank}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Hashing Algorithm</p>
              {cpage.hashing_algorithm ? (
                <p>{cpage.hashing_algorithm}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Trust Score</p>
              {cpage.tickers ? <p>{cpage.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change (24h)</p>
              {cpage.market_data ? (
                <p>
                  {cpage.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (7d)</p>
              {cpage.market_data ? (
                <p>
                  {cpage.market_data.price_change_percentage_7d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (14d)</p>
              {cpage.market_data ? (
                <p>
                  {cpage.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change (30d)</p>
              {cpage.market_data ? (
                <p>
                  {cpage.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (60d)</p>
              {cpage.market_data ? (
                <p>
                  {cpage.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (1y)</p>
              {cpage.market_data ? (
                <p>
                  {cpage.market_data.price_change_percentage_1y.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-around p-8 text-accent">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-4">
        <p className="text-xl font-bold">About {cpage.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              cpage.description ? cpage.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};
