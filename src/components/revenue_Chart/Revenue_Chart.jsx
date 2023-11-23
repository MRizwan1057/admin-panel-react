import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["Book", "BDU1", "BDU2"];

export const revdata = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: { Book: "88", BDU2: "71", BDU1: "48" },
      borderColor: "#FA7E76",
      backgroundColor: "#5852AF",
    },
    {
      label: "Dataset 2",
      data: { Book: "37", BDU2: "98", BDU1: "59" },
      borderColor: "#5852AF",
      backgroundColor: "#FA7E76",
    },
  ],
};

export function RevChart() {
  return (
    <>
      <section className="">
        <div className="container  ">
          <div className="row">
            <div className="col-md-12">
              <h3 className="theme"> </h3>

              <div style={{ height: "280px", width: "88%" }}>
                <Bar options={options} data={revdata} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
