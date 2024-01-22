//@ts-nocheck
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";

function Chart() {
  const { trades } = useSelector((state: RootState) => state.marketDataReducer);
  const data = {
    series: [
      {
        name: "BUY",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "SELL",
        data: [11, 32, 45, 32, 34, 52, 41],
      },

      //   {
      //     name: "BUY",
      //     data: trades
      //       .filter((trade) => trade.taker_side === "BUY")
      //       .map((item) => item.price),
      //   },
      //   {
      //     name: "SELL",
      //     data: trades
      //       .filter((trade) => trade.taker_side === "SELL")
      //       .map((item) => item.price),
      //   },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="area"
        height={350}
      />
    </>
  );
}

export default Chart;
