import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", price: 154739 },
  { name: "February", price: 26574831 },
  { name: "March", price: 8784557 },
  { name: "April", price: 16634536 },
  { name: "May", price: 6365354 },
  { name: "June", price: 5467345 },
];

const Rechart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2 / 1} >
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0e800b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#b31b1b" stopOpacity={0} />
            </linearGradient>
            {/* #8884d8 #8884d8*/}
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
