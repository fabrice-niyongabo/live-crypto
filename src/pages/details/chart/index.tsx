//@ts-nocheck
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { useEffect, useState } from "react";
import { ITrade } from "../../../interfaces";

interface IProps {
  trades: ITrade[];
}
function Chart({ trades }: IProps) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const dates = [];
    for (let i = 0; i < trades.length; i++) {
      const newDate = new Date(trades[i].time).toISOString();
      const exists = dates.find((item) => item === newDate);
      if (!exists) {
        dates.push(newDate);
      }
    }
    setCategories(dates);
  }, [trades]);

  const data = {
    series: [
      {
        name: "BUY",
        data: trades
          .filter((item) => item.isBuyerMaker)
          .map((item) => Number(item.price)),
      },
      {
        name: "SELL",
        data: trades
          .filter((item) => !item.isBuyerMaker)
          .map((item) => Number(item.price)),
      },
    ],
    options: {
      colors: ["#007206", "#FF0000"],
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#007206", "#FF0000"],
      },
      xaxis: {
        type: "datetime",
        categories: categories,
      },
      yaxis: {
        labels: {
          show: true,
          formatter: function (val: any) {
            return "$" + val.toFixed(1);
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <div className="text-black">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default Chart;
