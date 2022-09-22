import React, { useState, useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";

const AppexCharts = () => {
  const [data, setData] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@kline_1h"
    );
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");
    const wsCurrent = ws.current;
    return () => {
      wsCurrent.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      const responseData = JSON.parse(e.data);
      console.log("dataa", responseData);
      setData((prev) => [
        {
          x: new Date(responseData.E),
          y: [
            responseData.k.o,
            responseData.k.c,
            responseData.k.h,
            responseData.k.l,
          ],
        },
        ...prev,
      ]);
    };
  }, []);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "BTCUSDT Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={[{ data }]}
        type="candlestick"
        height={330}
        width={620}
      />
    </div>
  );
};

export default AppexCharts;