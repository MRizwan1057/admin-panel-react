import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { motion } from "framer-motion";

const Payments = () => {
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
          <div className="row   align-items-center py-3">
            <div className="col-md-4">
              <a href="javascript:;" className="accent_btn shadow">
                Dashboard
              </a>
            </div>
            <div className="col-md-4">
              <h3 className="all_pay_title">All Payments</h3>
            </div>
            <div className="col-md-4">
              <div className="adm_sp">
                <a href="javascript:;" className="accent_btn shadow">
                  Create Link
                </a>
                <FaSearch className="pay_search" />
                <FaBell className="pay_bell" />
                <p className="adm_des m-0">
                  Hi, Admin <span className="adm">A</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container pay_top">
          <div className="row align-items-center py-3">
            <div className="col-md">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Email"
                aria-label="src_email"
              />
            </div>
            <div className="col-md">
              <input
                type="date"
                className="form-control"
                placeholder="03/22/2023-03/22/2023"
                aria-label="src_date"
              />
            </div>
            <div className="col-md">
              <input
                type="select"
                className="form-control"
                placeholder="Sekect Merchant"
                aria-label="slc_mrch"
              />
            </div>
            <div className="col-md">
              <input
                type="select"
                className="form-control"
                placeholder="Select Brand"
                aria-label="slc_brnd"
              />
            </div>
            <div className="col-md">
              <button type="submit" className="pay_fltr_btn">
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid table_cont">
          <table className="table payment_table ">
            <thead>
              <tr>
                <th>S#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>AMOUNT</th>
                <th className="acc_col">BRAND</th>
                <th>CREATED AT</th>
                <th>STATUS</th>
                <th className="acc_col">PAIDAT</th>
                <th className="acc_col">MERCHANT / BANK</th>
                <th>AGENT</th>
                <th>TYPE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
              <tr>
                <td className="pay_ser">1</td>
                <td className="pay_name">MICKEY AMOR</td>
                <td className="pay_email">mick15@gmail.com</td>
                <td className="pay_amount">USD 1,250</td>
                <td className="pay_brand">Protect my TM</td>
                <td className="pay_cre">22-Mar-23 09:08 PM</td>
                <td className="pay_st">Success</td>
                <td className="pay_pa">22-Mar-2023 09:08 PM </td>
                <td className="pay_merch">Hype authorize.net</td>
                <td className="pay_agent">Rohail</td>
                <td className="pay_type">Manual</td>
                <td className="pay_acts">
                  <FaArrowsAltH />
                  <FaPenSquare />
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="row text-center mx-auto">
            <div className="col-md-12">
              <nav aria-label="..." className="text-center">
                <ul className="pagination leeds_pagin">
                  <li className="page-item">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      First
                    </a>
                  </li>
                  {/* <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                  </li> */}
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Last
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Payments;
