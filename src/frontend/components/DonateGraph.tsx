import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

const formula = (count: number) => {
  let t = 0;
  if (count >= 0 && count < 3e3) {
    t = 0;
  }
  if (count >= 3e3 && count < 8e3) {
    t = 1;
  }
  if (count >= 8e3 && count < 12e3) {
    t = 2;
  }
  if (count >= 12e3 && count < 15e3) {
    t = 3;
  }
  if (count >= 15e3) {
    t = 4;
  }
  return ((10 * count) / (1.1 * count - 300) - 0.1 * t - 8.9) * 0.0000625 + 0.0009375;
};
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'NDP Donation Model(Price Zoom in 1000x)',
    },
  },
};

const labels = new Array(15).fill(0).map((item, index) => (index + 1) * 1e3);

export const data = {
  labels,
  datasets: [
    {
      label: 'Price curve(x100)',
      data: new Array(150).fill(0).map((item, index) => formula((index + 1) * 1e3) * 1e3),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
console.log(data);

export function DonateGraph() {
  return <Line options={options} data={data} />;
}
