import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const AnalyticsChart = ({ dataPoints, label }) => {
  const data = {
    labels: dataPoints.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: label,
        data: dataPoints,
        backgroundColor: "#866A9A",
        borderColor: "#563440",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false }, ticks: { color: "#D2CCE7" } },
      y: { ticks: { color: "#D2CCE7" } },
    },
    plugins: { legend: { labels: { color: "#D2CCE7" } } },
  };

  return (
    <div className="bg-[#22333B] p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-white mb-4">{label}</h2>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsChart;
