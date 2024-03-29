import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              YANBAL
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item d-none" id="products">
                  <a className="nav-link" href="">
                    Products
                  </a>
                </li>
                <li className="nav-item d-none" id="newProduct">
                  <a className="nav-link" href="">
                    New Product
                  </a>
                </li>
                <li className="nav-item" id="register">
                  <NavLink to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item d-none" id="orders">
                  <a className="nav-link" href="/orders/cart">
                    Orders
                  </a>
                </li>
                <li className="nav-item" id="login">
                  <NavLink to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item d-none" id="signout">
                  <span id="signout" className="btn btn-danger">
                    Signout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}