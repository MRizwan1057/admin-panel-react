import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";

// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "May", "July"];

export const monthdata = {
  labels: ["January", "February", "March", "April", "May", "May", "July"],
  datasets: [
    {
      label: "Monthly Report",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: "#5852af",
      backgroundColor: "#ee4037",
    },
    {
      label: "Monthly Report 2",
      data: [80, 56, 55, 59, 81, 40, 65],
      fill: true,
      borderColor: "#ee4037",
      backgroundColor: "#5852af",
    },
  ],
};
// const labels = Utils.months({ count: 7 });
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       fill: false,
//       borderColor: "rgb(75, 192, 192)",
//       tension: 0.1,
//     },
//   ],
// };

export function Month() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 2,
        delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
    >
      <section className="monthlyChart">
        <div className="container py-2">
          <div className="row">
            <div className="col-md-12">
              <h3 className="theme">Monthly</h3>

              <div style={{ height: "260px", width: "88%" }}>
                <Line options={options} data={monthdata} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
