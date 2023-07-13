import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Alarm bionic
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link">Todos os alarmes</Link>
            </li>
            <li className="nav-item">
            
            </li>
            <li className="nav-item">
              
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
