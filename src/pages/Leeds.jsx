import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Leeds = () => {
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
      <section className="section leeds_sec bg-white pb-4">
        <div className="container-fluid leeds_con shadow">
          <div className="row p-0">
            <div className="col-md-6"></div>
            <div className="col-md-6 label_div">
              <p>/ Change Multiple Leads Category</p>
              <p>Assign Multiple Leads</p>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg leeds_head">
            <div className="container-fluid">
              <a className="navbar-brand leeds_title" href="#">
                Leeds
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button className="accent_btn">Delete</button>
                  </li>

                  <li className="nav-item dropdown leeds_drd leeds_cat">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Category
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button className="accent_btn">Submit</button>
                  </li>

                  <li className="nav-item dropdown leeds_drd leeds_user">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select User
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <button className="accent_btn">Assign</button>
                  <li></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="container">
          <div className="row py-3">
            <div className="col-lg-6  ">
              <div className="btns_div">
                <a href="javacript:;">Pending</a>
                <a href="javacript:;">Invalid</a>
                <a href="javacript:;">Duplicate</a>
                <a href="javacript:;">Lost</a>
                <a href="javacript:;">Confirmed</a>
                <a href="javacript:;">All</a>
              </div>

              <form className="form-inline d-flex my-2 leeds_form mt-5">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="mx-2 leed_sr_btn rounded" type="submit">
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="col-lg-6  dt_fltr_wrp">
              <label className="d-block" for="dt_fltr">
                Date Filter
              </label>
              <div className="dt_fltr">
                <input
                  type="date"
                  id="dt_fltr"
                  name="dt_fltr"
                  value="2018-07-22-"
                />
              </div>
              <div className="order_div btns_div ">
                <a href="javascript:;">All Orders Leeds</a>
                <a href="javascript:;">Black List</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid leeds_cont table_cont">
          <table className="table leeds_table ">
            <thead>
              <tr>
                <th>Select</th>
                <th> Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Assigned User</th>
                <th>Leed Type</th>
                <th>Customer Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="leeds_name">Brianna Belton</td>
                <td className="leeds_email">clarkkent@mail.com</td>
                <td className="leeds_tel">
                  <FaPhoneAlt />
                </td>
                <td className="leeds_date">22-03-2023 03:49 AM</td>
                <td className="leeds_user"> </td>
                <td className="leeds_type">Pending</td>
                <td className="leeds_cust">1</td>
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
                      1
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
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

export default Leeds;
