import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";

import "./target.css";

ChartJS.register(ArcElement, Tooltip, Legend);
const Target = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 2,
        delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
    >
      <section className="targetChart">
        <div className="container py-1">
          <div className="row targetRow">
            <div className="col-md-6 ">
              <h3 className="theme">Target</h3>
              <h5 className="chartName">Net Sell</h5>
              <h2 className="accent">$ 240,000</h2>
            </div>
            <div className="col-md-6 ">
              <div style={{ height: "130px", width: "100%" }}>
                <Doughnut options={options} data={targetdata} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Target;

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
export const targetdata = {
  //   labels: ["Net Sell", "Blue"],
  datasets: [
    {
      label: "Net Sell",
      data: [66, 78],
      backgroundColor: ["#262161", " #ee4037"],
      borderColor: [" #ee4037", "#262161"],
      borderWidth: 1,
    },
  ],
};
