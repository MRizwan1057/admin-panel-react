import React from "react";
import formLogo from "../images/logolg.png";

const Login = () => {
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
                    <label className="form-label" for="funame">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="funame"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="fupswd">
                      Password
                    </label>
                    <input
                      type="password"
                      id="fupswd"
                      className="form-control"
                      required
                    />
                  </div>

                  <button type="submit" className=" login_btn">
                    Sign in
                  </button>
                  <div className="text-center py-3 ">
                    <a href="#" className="forgot_psw">
                      Forgot Password?
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

export default Login;
