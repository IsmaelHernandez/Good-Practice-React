import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <Link to="/listperson" className="nav-link align-middle px-0 text-white">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Lista de Personas</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;
