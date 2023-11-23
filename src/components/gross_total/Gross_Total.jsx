import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "center",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

// const labels = ["Total Payments", "Paid amount"];

export const netdata = {
  // labels: ["Total Payments", "Paid amount"],
  datasets: [
    {
      label: "Dataset 1",
      data: { paid: "65", All: "88" },
      backgroundColor: ["#262161", "#ee4037"],
      borderColor: ["#ee4037", "#262161"],
      borderWidth: 1,
    },
  ],
};

const Gross_Total = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 2,
        delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
    >
      <section>
        <div className="container py-1">
          <div className="row targetRow">
            <div className="col-md-6">
              <h3 className="theme">Gross Total</h3>
              <h5 className="chartName">Total Payments</h5>
              <h2 className="accent">60</h2>
              <h5 className="chartName">Paid Amount</h5>
              <h2 className="accent">$33360</h2>
            </div>
            <div className="col-md-6">
              <div style={{ height: "130px", width: "100%" }}>
                <Bar options={options} data={netdata} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gross_Total;
