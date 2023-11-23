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

export const grossdata = {
  // labels: ["Total Payments", "Paid amount"],
  datasets: [
    {
      // label: ["grp1"],
      data: { total: "622", paid: "444" },
      backgroundColor: ["#ee4037", "#262161"],
      borderColor: ["#ee4037", "#262161"],
      borderWidth: 1,
    },
    // {
    //   // label: ["grp2"],
    //   data: { paid: "333" },
    //   backgroundColor: ["#262161"],
    //   borderColor: ["#ee4037"],
    //   borderWidth: 1,
    // },
  ],
};

const Net_Total = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 2,
        delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
    >
      <section className="targetSection">
        <div className="container py-1">
          <div className="row targetRow">
            <div className="col-md-6">
              <h3 className="theme">Net Total</h3>

              <h5 className="chartName">Paid Amount</h5>
              <h2 className="accent">$360</h2>
            </div>
            <div className="col-md-6">
              <div style={{ height: "130px", width: "100%" }}>
                <Bar options={options} data={grossdata} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Net_Total;
