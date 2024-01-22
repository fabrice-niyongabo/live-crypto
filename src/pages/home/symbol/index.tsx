import { ISymbol } from "../../../interfaces";
import { useNavigate } from "react-router-dom";

import { FaEye } from "react-icons/fa";

import {
  returnSymbolChange,
  returnSymbolMaxQty,
  returnSymbolMinQty,
  returnSymbolPrice,
} from "../../../utils";

interface IProps {
  symbol: ISymbol;
}
function Symbol({ symbol }: IProps) {
  const navigate = useNavigate();

  const price = returnSymbolPrice(symbol.filters);
  const maxQty = returnSymbolMaxQty(symbol.filters);
  const percentage = returnSymbolChange(price, maxQty);
  return (
    <tr>
      <td className="text-xs border-b border-gray-400 p-3">
        {symbol.symbol?.replace("USDT", "")}/
        <span className="text-yellow-500">USDT</span>
      </td>

      <td className="text-xs border-b border-gray-400 p-3">${price}</td>
      <td className="text-xs border-b border-gray-400 p-3">
        {returnSymbolMinQty(symbol.filters)}
      </td>
      <td className="text-xs border-b border-gray-400 p-3">{maxQty}</td>
      <td
        className={`text-xs border-b border-gray-400 p-3 ${
          percentage > 1 ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentage}%
      </td>
      <td className="text-xs border-b border-gray-400 p-3">
        <button
          title="Click to view more details"
          className={
            "bg-yellow-500 text-white rounded-full px-3 py-2 hover:bg-yellow-600 flex items-center justify-center gap-2 transition-all duration-500"
          }
          onClick={() => navigate("/" + symbol.symbol)}
        >
          <FaEye /> Details
        </button>
      </td>
    </tr>
  );
}

export default Symbol;
