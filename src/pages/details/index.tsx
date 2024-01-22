import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import axios from "axios";
import { setTrades } from "../../redux/actions/marketData";
import { useNavigate } from "react-router-dom";

function Details() {
  const dispatch = useDispatch();
  const { trades } = useSelector((state: RootState) => state.marketDataReducer);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(
        "https://rest.coinapi.io/v1/trades/latest?apikey=" +
          process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setIsLoading(false);
        dispatch(setTrades(res.data));
      })
      .catch((error) => {
        setIsLoading(false);
        console.log({ error });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container md:w-[80%] mx-auto pt-5 pb-10 bg-gray-900 p-5 rounded-md text-white">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className="text-sm font-semibold text-left p-2">Symbol</th>
            <th className="text-sm font-semibold text-left p-2">Type</th>
            <th className="text-sm font-semibold text-left p-2">Price</th>
            <th className="text-sm font-semibold text-left p-2">Size</th>
            <th className="text-sm font-semibold text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr>
              <td className="text-xs border-b border-gray-400 p-3">
                {trade.symbol_id}
              </td>
              <td
                className={`${
                  trade.taker_side === "BUY"
                    ? "text-xs border-b border-gray-400 p-3 text-green-500"
                    : "text-xs border-b border-gray-400 p-3 text-red-500"
                }`}
              >
                {trade.taker_side}
              </td>
              <td className="text-xs border-b border-gray-400 p-3">
                {trade.price}
              </td>
              <td className="text-xs border-b border-gray-400 p-3">
                {trade.size}
              </td>
              <td className="text-xs border-b border-gray-400 p-3">
                <button
                  className="bg-yellow-500 text-white rounded-full px-3 py-2 hover:bg-yellow-600"
                  onClick={() => navigate("/" + trade.symbol_id)}
                >
                  More...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
