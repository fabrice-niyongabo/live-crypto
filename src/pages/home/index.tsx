import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

function Home() {
  const { trades } = useSelector((state: RootState) => state.marketDataReducer);
  return (
    <div className="container md:w-[80%] mx-auto mt-5 bg-gray-900 p-5 rounded-md">
      Home {trades.length}
    </div>
  );
}

export default Home;
