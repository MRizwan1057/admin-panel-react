import React from "react";
import formLogo from "../images/logolg.png";

const Forgot = () => {
  return (
    <>
      <section className="section logIn_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto ">
              <div className="login_form_wrp">
                <div className="logo_div text-center pb-4">
                  <img
                    src={formLogo}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="form_top text-center">
                  <h3>
                    Welcome to
                    <strong> GVR IT Solutions</strong>
                  </h3>
                  <p>Sign in to your account to continue...</p>
                </div>
                <form className="login_form">
                  <div className="form-outline mb-4">
                    <label className="form-label" for="uname">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="uname"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* <div className="form-outline mb-4">
                    <label className="form-label" for="upswd">
                      Password
                    </label>
                    <input
                      type="password"
                      id="upswd"
                      className="form-control"
                      required
                    />
                  </div> */}

                  <button type="submit" className=" login_btn">
                    Sign in
                  </button>
                  <div className="text-center py-3 ">
                    <a href="#" className="forgot_psw">
                      Sign in.
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgot;
