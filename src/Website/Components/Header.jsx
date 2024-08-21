import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const redirect = useNavigate();

  const userlogout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("uname");
    localStorage.removeItem("uimg");
    toast.success("Logout Success");
    redirect("/");
    return false;
  };
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />

        <link href="/Website/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/Website/css/bootstrap-icons.css" rel="stylesheet" />

        <link rel="stylesheet" href="/Website/css/slick.css" />

        <link
          href="/Website/css/tooplate-little-fashion.css"
          rel="stylesheet"
        />
      </Helmet>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <NavLink className="navbar-brand" to="/">
            <strong>
              <span>Little</span> Fashion
            </strong>
          </NavLink>
          <div className="d-lg-none">
            <NavLink
              to="sign-in.html"
              class="bi-person custom-icon me-3"
            ></NavLink>
            <NavLink
              to="product-detail.html"
              class="bi-bag custom-icon"
            ></NavLink>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
            <div>
              {(() => {
                if (localStorage.getItem("uid")) {
                  return (
                    <>
                      <NavLink to="/profile">
                        <button
                          type="button"
                          class="btn btn-outline-danger me-2 pe-3 pl-3"
                          style={{ border: " inset 4px red" }}
                        >
                          <i class="fa-regular fa-user me-2"></i>
                          {localStorage.getItem("uname")}
                        </button>
                      </NavLink>
                      <a href="javascript:void(0)" onClick={userlogout}>
                        <button
                          type="button"
                          class="btn btn-outline-danger me-2"
                          style={{ border: " outset 4px red" }}
                        >
                          <i class="fa-solid fa-right-from-bracket me-2"></i>
                          Logout
                        </button>
                      </a>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Link to="/sign_up">
                        <button
                          type="button"
                          class="btn btn-outline-danger me-2"
                          style={{ border: " inset 4px red" }}
                        >
                          <i class="fa-regular fa-user me-2"></i>
                          Signup
                        </button>
                      </Link>
                      <Link to="/user_login">
                        <button
                          type="button"
                          class="btn btn-outline-danger me-2"
                          style={{ border: " outset 4px red" }}
                        >
                          <i class="fa-solid fa-user-lock me-2"></i>
                          Login
                        </button>
                      </Link>
                    </>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
