import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useEffect, useState } from "react";
import axios from "axios";
import { setTrades } from "../../redux/actions/marketData";
import { useNavigate, useParams } from "react-router-dom";
import { ISymbol } from "../../interfaces";
import Chart from "./chart";

function Details() {
  const dispatch = useDispatch();

  const { trades } = useSelector((state: RootState) => state.marketDataReducer);

  const [symboldTrades, setSymbolTrades] = useState<ISymbol[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get(
        "https://rest.coinapi.io/v1/trades/" +
          id +
          "/latest?apikey=" +
          process.env.REACT_APP_API_KEY
      )
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
    // fetchData();
  }, []);
  return (
    <div className="container md:w-[80%] mx-auto pt-5 pb-10 bg-gray-900 p-5 rounded-md text-white">
      <Chart />
    </div>
  );
}

export default Details;
