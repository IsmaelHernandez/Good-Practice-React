import { 
  Link, 
  useLocation 
} from "react-router-dom";

const SidebarComponent = () => {
  const location = useLocation();

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark min-vh-100">
      <h3 className="text-center text-white mt-2">Test Example</h3>
      <div className="d-flex flex-column align-items-start px-3 pt-3 text-white">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 w-100" id="menu">
          <li className="nav-item w-100 mb-1">
            <Link 
              to="/dashboard" 
              className={`nav-link px-0 text-white text-center w-100 ${location.pathname === '/dashboard' ? 'active' : ''}`}
            >
              <i className="fs-4 bi-house"></i>
              <span className="ms-1">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item w-100 mb-1">
            <Link 
              to="/listperson" 
              className={`nav-link px-0 text-center text-white w-100 ${location.pathname === '/listperson' ? 'active' : ''}`}
            >
              <i className="fs-4 bi-house"></i>
              <span className="ms-1">Lista de Personas</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;
