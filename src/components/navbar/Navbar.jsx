import { FaReact } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="navSection shadow">
        <div className="container-fluid">
          <nav className="side-nav navbar navbar-expand-md  py-3 ">
            <div>
              <button
                className="navbar-toggler d-block d-md-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mySidebar"
                aria-controls="mySidebar"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon text-white"></span>
              </button>

              <div className="collapse navbar-collapse" id="mySidebar">
                <ul className="nav-menu">
                  <Link to="/">
                    <img className="img-fluid logo" src={logo} />
                  </Link>
                  <li className="nav-item">
                    <Link to="/">
                      <FaBox />
                      <span className="menu-text">Dashboard</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/payments">
                      <FaCcAmazonPay />
                      <span className="menu-text">All Payments</span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/units">
                      <FaUnity />
                      <span className="menu-text">Units</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">
                      <FaNetworkWired />
                      <span className="menu-text">Wire Transfer Entry</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">
                      <FaAlignCenter />
                      <span className="menu-text">Manual Payment Entry</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">
                      <FaUsersCog />
                      <span className="menu-text">Customer Search</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/leeds">
                      <FaChartLine />
                      <span className="menu-text">Lead Reports</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
