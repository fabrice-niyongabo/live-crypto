import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { returnSymbolPrice } from "../../../utils";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Loader from "../../../components/loader";

function Market() {
  const navigate = useNavigate();

  const params = useParams();

  const { trades, isLoading } = useSelector(
    (state: RootState) => state.marketDataReducer
  );

  return (
    <div className="mt-1">
      {trades.slice(0, 6).map((symbol) => (
        <div
          key={symbol.symbol}
          className={`flex items-center justify-between gap-2 text-xs py-3 px-2 hover:bg-gray-500 rounded-md hover:cursor-pointer transition-all duration-500 ${
            String(params?.symbol) === symbol.symbol ? "bg-gray-500" : ""
          }`}
          onClick={() => navigate("/" + symbol.symbol)}
        >
          <p>{symbol.symbol}</p>
          <div className="flex">${returnSymbolPrice(symbol.filters)}</div>
          <button
            title="Click to view more details"
            className={`bg-yellow-500 text-white rounded-full px-3 py-2 hover:bg-yellow-600 flex items-center justify-center gap-2 transition-all duration-500`}
            onClick={() => navigate("/" + symbol.symbol)}
          >
            <FaEye /> Details
          </button>
        </div>
      ))}

      {isLoading && trades.length === 0 ? (
        <Loader width={50} />
      ) : (
        <Link to={"/"} className="text-sm text-blue-700">
          View all markets
        </Link>
      )}
    </div>
  );
}

export default Market;
