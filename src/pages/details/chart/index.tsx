//@ts-nocheck
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { useEffect, useState } from "react";

function Chart() {
  const data = {
    series: [
      {
        name: "BUY",
        data: [17, 20, 5, 32, 4, 52, 41],
      },
      {
        name: "SELL",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
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

  useEffect(() => {
    const dat = [];
    for (let i = 0; i < sortedTrades.length; i++) {
      const exists = dat.find((item) => item === sortedTrades[i].time_exchange);
    }
  }, [sortedTrades]);

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
