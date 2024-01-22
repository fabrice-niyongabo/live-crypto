import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ITrade } from "../../interfaces";
import Chart from "./chart";
import Market from "./market";
import { useDispatch } from "react-redux";
import { fetTrades } from "../../redux/actions/marketData";

function Details() {
  const dispatch = useDispatch();
  const [symboldTrades, setSymbolTrades] = useState<ITrade[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { symbol } = useParams();

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://testnet.binancefuture.com/fapi/v1/trades?symbol=" + symbol)
      .then((res) => {
        setIsLoading(false);
        setSymbolTrades(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log({ error });
      });
  };

  useEffect(() => {
    fetchData();
    dispatch(fetTrades());
  }, [symbol]);
  return (
    <div className="container md:w-[80%] mx-auto pt-5 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 p-5 rounded-md text-white col-span-2">
          <h1 className="text-xl uppercase">
            {symbol?.replace("USDT", "")}/
            <span className="text-yellow-500">USDT</span> Trade details
          </h1>
          <Chart trades={symboldTrades} />
        </div>
        <div className="bg-gray-900 p-5 rounded-md text-white">
          <h1 className="text-xl capitalize border-b pb-2 border-gray-400">
            Trending Markets
          </h1>
          <div className="h-full overflow-y-auto">
            <Market />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
