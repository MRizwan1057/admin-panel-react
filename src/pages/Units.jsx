import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { RevChart } from "../components/revenue_Chart/Revenue_Chart";
import { motion } from "framer-motion";

const Units = () => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      intial={{
        scale: 0.5,
        opacity: 0,
      }}
      exit={{ opacity: 0, scale: 0.2 }}
    >
      <section className="section pay_sec bg-white pb-4">
        <div className="container pay_con shadow">
          <div className="row align-items-center py-3">
            <div className="col-md-4">
              <a href="javascript:;" className="accent_btn shadow">
                Dashboard
              </a>
            </div>
            <div className="col-md-4">
              <h3 className="all_pay_title">Units</h3>
            </div>
            <div className="col-md-4">
              <div className="adm_sp">
                <a href="javascript:;" className="accent_btn shadow">
                  Active User
                </a>
                <FaSearch className="pay_search" />
                <FaBell className="pay_bell" />
                <p className="adm_des m-0">
                  Hi, John <span className="adm">j</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row py-3 mt-2">
            <div className="col-md-6">
              <div className="unitrev_wrp">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="unit_title">UNITS REVENUE</h2>
                  </div>
                  <div className="col-md-6">
                    <input type="date" name="unRange" id="unRange" />
                    <div className="py-2">
                      <a href="#" className="xl_btn">
                        EXPORT TO EXCEL <FaFileExcel />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="container table_cont">
                    <table className="table table-bordered unit_table text-center">
                      <thead className="unit_head">
                        <tr>
                          <th scope="col">NO.</th>
                          <th scope="col">Name</th>
                          <th scope="col">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td className="orange_sp">Book</td>
                          <td>$999</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td className="orange_sp">
                            BUSINESS DEVELOPMENT UNIT 1
                          </td>
                          <td>$999</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="orange_sp">
                            BUSINESS DEVELOPMENT UNIT 2
                          </td>
                          <td>$999</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td className="text-end">Total</td>
                          <td>$2700</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="unchrt_wrp">
                <RevChart />
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-4">
              <div className="bk_wrp">
                <h2>Book</h2>
                <div className="rec_wrp">
                  <h5>TOTAL LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>PAID LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>PAID AMOUNT</h5>
                  <span>$131</span>
                </div>
                <div className="rec_wrp">
                  <h5>UNPAID LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>UNPAID AMOUNT</h5>
                  <span>$131</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bk_wrp">
                <h2>BUSINESS DEVELOPMENT UNIT 1</h2>
                <div className="rec_wrp">
                  <h5>TOTAL LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>PAID LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>PAID AMOUNT</h5>
                  <span>$131</span>
                </div>
                <div className="rec_wrp">
                  <h5>UNPAID LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>UNPAID AMOUNT</h5>
                  <span>$131</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bk_wrp">
                <h2>BUSINESS DEVELOPMENT UNIT 2</h2>
                <div className="rec_wrp">
                  <h5>TOTAL LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>PAID LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>PAID AMOUNT</h5>
                  <span>$131</span>
                </div>
                <div className="rec_wrp">
                  <h5>UNPAID LINKS</h5>
                  <span>131</span>
                </div>
                <div className="rec_wrp">
                  <h5>UNPAID AMOUNT</h5>
                  <span>$131</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Units;
