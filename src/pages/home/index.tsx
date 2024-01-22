import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import axios from "axios";
import { setTrades } from "../../redux/actions/marketData";
import { useNavigate } from "react-router-dom";
import Symbol from "./symbol";

function Home() {
  const dispatch = useDispatch();
  const { trades } = useSelector((state: RootState) => state.marketDataReducer);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://testnet.binancefuture.com/fapi/v1/exchangeInfo")
      .then((res) => {
        setIsLoading(false);
        if (res.data.symbols) {
          dispatch(setTrades(res.data.symbols));
        }
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
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="text-sm font-semibold text-left p-2">Symbol</th>
              <th className="text-sm font-semibold text-left p-2">Price</th>
              <th className="text-sm font-semibold text-left p-2">MinQty</th>
              <th className="text-sm font-semibold text-left p-2">MaxQty</th>
              <th className="text-sm font-semibold text-left p-2">Change</th>
              <th className="text-sm font-semibold text-left p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((symbol) => (
              <Symbol symbol={symbol} key={symbol.symbol} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
