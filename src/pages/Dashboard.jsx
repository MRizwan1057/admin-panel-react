import Gross_Total from "../components/gross_total/Gross_Total";
import Header from "../components/header/Header";
import Links from "../components/linksgen/Links";
import ManPay from "../components/manaulPay/ManPay";
import { Month } from "../components/month/Monthly";
import Net_Total from "../components/net_total/Net_Total";
import PayLinks from "../components/paymentLinks/PayLinks";
import Refunds from "../components/refunds/Refunds";
import Target from "../components/target/Target";
import Unpaid from "../components/unpaid/Unpaid";
import WTPay from "../components/wtPay/WTPay";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        // delay: 0.1,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      intial={{
        scale: 0.5,
        opacity: 0,
      }}
      exit={{ opacity: 0, scale: 0.2 }}
    >
      <Header />
      <div className="container">
        <div className="row py-3">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <Target />
                <Refunds />
              </div>
              <div className="col-md-6">
                <Gross_Total />
                <Net_Total />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <Month />
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-2  links1 ">
            <Links />
          </div>
          <div className="col-md-2  links1">
            <PayLinks />
          </div>
          <div className="col-md-2  links1">
            <Unpaid />
          </div>
          <div className="col-md-3   links2">
            <ManPay />
          </div>
          <div className="col-md-3  links2">
            <WTPay />
          </div>
        </div>

        <div className="row py-3">
          <div className="col-lg-3 col-md-6">
            <Refunds />
          </div>
          <div className="col-lg-3 col-md-6">
            <Gross_Total />
          </div>
          <div className="col-lg-6 ">
            <Net_Total />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
