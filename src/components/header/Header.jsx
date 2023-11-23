import "./header.css";

const Header = () => {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-md  py-3 shadow sticky-top header">
          <div className="container-fluid align-items-center">
            <a className="navbar-brand db3" href="#">
              DASHBOARD
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myHeader"
              aria-controls="myHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="myHeader">
              <ul className="navbar-nav m-auto mb-2 align-items-center ">
                <li className="nav-item">
                  <a className="nav-link navbar-brand db2 fs-5" href="#">
                    DASHBOARD
                  </a>
                </li>

                <li className="align-items-center">
                  <a className="navbar-brand db3" href="#">
                    CREATE LINK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
